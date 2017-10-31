import IoLoader from '../io/io-loader';
import {CustEvent} from 'chimee-helper';
import {Log} from 'chimee-helper';
import Mp4decode from '../mp4decode';
import work from 'webworkify-webpack';

/**
 * Transmuxer 控制层
 * @class Transmuxer
 * @param {mediaSource} mediaSource
 * @param {object} config
 */
export default class Transmuxer extends CustEvent {
	constructor (mediaSource, config) {
		super();
		this.config = {};
		this.tag = 'transmuxer';
    this.loader = null;
    this.CPU = null;
    this.keyframePoint = false;
    this.w = null;
    Object.assign(this.config, config);
    if(this.config.webWorker) {
      // const blob = new Blob([TransmuxerWorker], {type: 'text/javascript'});
      // this.w = new Worker(window.URL.createObjectURL(blob));
      this.w = work(require.resolve('./transmuxer-worker.js'));
      this.w.addEventListener('message', (e) => {
        this.parseCallback.call(this,e.data);
      });
      this.w.postMessage({cmd: 'init', data: config});
    }
	}
   /**
   * instance ioloader
   */
	loadSource () {
    if(this.config.webWorker) {
      this.w.postMessage({cmd: 'loadSource'});
      // this.loader.arrivalDataCallback = this.arrivalDataCallbackWorker.bind(this);
    } else {
      this.loader = new IoLoader(this.config);
      this.loader.arrivalDataCallback = this.arrivalDataCallback.bind(this);
      this.loader.open();
    }
  }
  /**
   * data arrive to webworker
   */
  // arrivalDataCallbackWorker (data, byteStart, keyframePoint) {
  //   if(keyframePoint) {
  //     this.w.postMessage({cmd: 'seek', source: data});
  //   }
  //   this.w.postMessage({cmd: 'pipe', source: data});
  //   return;
  // }
   /**
   * loader data callback
   *  @param {arraybuffer} 数据
   *  @param {number} 开始的起点
   *  @param {keyframePoint} 关键帧点
   */
  arrivalDataCallback (data, byteStart, keyframePoint) {
    //this.emit('mediaSegment', data);
    let consumed = 0;
    if(!this.CPU) {
      this.CPU = new Mp4decode();
      this.CPU.onMediaSegment = this.onRemuxerMediaSegmentArrival.bind(this);
      this.CPU.onInitMediaSegment = this.onRemuxerInitSegmentArrival.bind(this);
      this.CPU.onMediaInfo = this.onMediaInfo.bind(this);
      this.CPU.on('error', function(handle) {
        this.emit('mp4box', handle.data);
      })
    }
    if(keyframePoint) {
      this.keyframePoint = true;
      this.CPU.seek(keyframePoint);
    }
    this.CPU.sendBuffer(data);
  }

  /**
   * loader data callback
   *  @param {arraybuffer} 数据
   */
  parseCallback (data) {
    switch(data.cmd) {
      case 'mediaSegmentInit':
      this.emit('mediaSegmentInit', data.source);
      break;
      case 'mediaSegment':
      this.emit('mediaSegment', data.source);
      break;
      case 'mediainfo':
      this.emit('mediaInfo', data.source);
      break;
    }
  }

  /**
   * Demux error
   *  @param {string} 类型
   *  @param {string} 信息
   */
  onDemuxError (type, info) {
  	Log.error(this.tag, `DemuxError: type = ${type}, info = ${info}`);
    this.emit('DemuxError', type, info);
  }

  /**
   * Demux mediaInfo
   *  @param {object} 视频头信息
   */
  onMediaInfo (mediaInfo) {
    this.mediaInfo = mediaInfo;
    this.emit('mediaInfo', mediaInfo);
  }

  /**
   * remuxer init segment arrival
   *  @param {arraybuffer} 视频数据
   */
  onRemuxerInitSegmentArrival (data) {
    this.emit('mediaSegmentInit', data);
  }

  /**
   * remuxer  segment arrival
   *  @param {arraybuffer} 视频数据
   */
  onRemuxerMediaSegmentArrival (data) {
    this.emit('mediaSegment', data);
  }

  /**
   * cpu error
   *  @param {object} 错误信息
   */
  onCPUError (handle) {
    this.emit('ERROR', handle.data);
  }

  /**
   * get video mediaInfo
   */
  getMediaInfo () {
    return this.mediaInfo;
  }

   /**
   * stop loader
   */
  pause () {
    if(this.config.webWorker) {
      console.log('send pause');
      this.w.postMessage({cmd: 'pause'});
    } else {
      this.loader.pause();
    }
  }

  /**
   * resume loader
   */
  resume () {
     this.loader.resume();
  }
   /**
   * mp4 can seek
   */
  isSeekable () {
    return this.mediaInfo.hasKeyframesIndex;
  }
  /**
   * video seek
   * @param {object} 关键帧集合
   */
  seek (time) {
    if(this.config.webWorker) {
      console.log('seek')
      this.w.postMessage({cmd: 'seek', time: time});
    } else {
      const seek_info = this.CPU.seek(time);
      this.loader = new IoLoader(this.config);
      this.loader.arrivalDataCallback = this.arrivalDataCallback.bind(this);
      this.loader.seek(seek_info.offset, false);
    }
    
  }

  /**
   * refresh
   */
  refresh () {
    this.pause();
    this.loader = new IoLoader(this.config);
    this.loader.arrivalDataCallback = this.arrivalDataCallback.bind(this);
    this.loader.open();
  }

  /**
   * destroy
   */
  destroy () {
    this.CPU.distroy();
    this.loader.destroy();
    this.loader = null;
    this.CPU = null;
  }

  /**
   * get nearlest keyframe
   */
  getNearlestKeyframe (times) {
    if(this.mediaInfo && this.mediaInfo.keyframesIndex) {
      const keyframesList = this.mediaInfo.keyframesIndex.times;
      const keyframesPositions = this.mediaInfo.keyframesIndex.filepositions;
      const binarySearch = function (list, val) {
        const length = list.length;
        const index = Math.floor(length / 2);
        if(length === 1) {
          const position = keyframesList.indexOf(list[0]);
          return {
            keyframetime: list[0],
            keyframePoint: keyframesPositions[position]
          };
        } else if(list[index] > val) {
          return binarySearch(list.slice(0, index), val);
        } else if (list[index] < val) {
          return binarySearch(list.slice(index), val);
        } else {
          const position = keyframesList.indexOf(list[0]);
          return {
            keyframetime: list[0],
            keyframePoint: keyframesPositions[position]
          };
        }
      };
      return binarySearch(keyframesList, times);
    } else {
      return 0;
    }
  }
}
