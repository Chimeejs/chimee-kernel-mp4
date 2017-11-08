import Mp4decode from '../mp4decode';
import IoLoader from '../io/io-loader';

export default function (self) {
  let CPU = null;
  let loader = null;
  let config = {};
  let cache = [];
  self.addEventListener('message', function (e) {
    // self.postMessage({a:111});
    switch (e.data.cmd) {
      case 'init':
        config = e.data.data;
      break;
      case 'loadSource':
        loader = new IoLoader(config);
        loader.arrivalDataCallback = arrivalDataCallbackWorker;
        loader.open();
      break;
      case 'pause':
      loader.pause();
      break;
      case 'seek':
      seek(e.data.time);
      break;
      case 'resume':
      loader.resume();
      break;
      case 'refresh':
      refresh();
      break;
      case 'destroy':
      destroy();
      break;
    };
  });

  function init() {
    CPU = new Mp4decode();
    CPU.onInitMediaSegment = onRemuxerInitSegmentArrival;
    CPU.onMediaSegment = onRemuxerMediaSegmentArrival;
    CPU.onError = onCPUError;
    CPU.onMediaInfo = onMediaInfo;
  }

  function onRemuxerInitSegmentArrival (data) {
    self.postMessage({cmd: 'mediaSegmentInit', source: data});
  }

  function onRemuxerMediaSegmentArrival (data) {
    self.postMessage({cmd: 'mediaSegment', source: data});
  }

  function onCPUError (error) {
    self.postMessage({cmd: 'error', source: error});
  }

  function onMediaInfo (mediainfo) {
    self.postMessage({cmd: 'mediainfo', source: mediainfo});
  }

  function seek (time) {
    const seek_info = CPU.seek(time);
    loader = new IoLoader(config);
    loader.arrivalDataCallback = arrivalDataCallbackWorker;
    loader.seek(seek_info.offset, false);
  }

  function refresh () {
    loader.pause();
    loader = new IoLoader(config);
    loader.arrivalDataCallback = arrivalDataCallbackWorker;
    loader.open();
  }

  function destroy () {
    loader.destroy();
    loader = null;
    CPU = null;
  }

  function arrivalDataCallbackWorker (data, byteStart, keyframePoint) {
    if(!CPU) {
      init();
    }
    var c = CPU.sendBuffer(data);
  }
}