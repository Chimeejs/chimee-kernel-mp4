import {CustEvent} from 'chimee-helper';
import {MP4Box} from './core';

export default class Mp4decode extends CustEvent {
	constructor() {
		super();
		this.mp4box = new MP4Box();
		this.bindEvent();
	}

	bindEvent() {
		const mp4box = this.mp4box;
		mp4box.onReady = (info)=> {
			const mediainfo = {
				data: {
					width: info.videoTracks[0].track_width || 0,
					height: info.videoTracks[0].track_height || 0,
					duration: info.isFragmented? info.fragment_duration/info.timescale : info.duration/info.timescale,
					videoCodec: info.videoTracks[0].codec,
					auidoCodec: info.audioTracks[0].codec
				}
			}
			this.onMediaInfo(mediainfo);
			info.tracks.forEach((item)=>{
				mp4box.setSegmentOptions(item.id, item.type); 
			})
			
			const initSegs = mp4box.initializeSegmentation();
			initSegs.forEach((item)=>{
				this.onInitMediaSegment({type: item.user, buffer: item.buffer});
			})
		}

		mp4box.onError = (e)=> {
			console.log(e);
		};
		mp4box.onSegment = (id, user, buffer, sampleNum)=>{
			this.onMediaSegment({type: user, buffer: buffer, sampleNum: sampleNum});
			mp4box.releaseUsedSamples(id, sampleNum);
		}
		mp4box.onSamples = (id)=>{
			console.log(2);
		}
		mp4box.onItem = (id)=>{
			console.log(3);
		}
		mp4box.start();
	}

	sendBuffer(data) {
		this.mp4box.appendBuffer(data);
	}

	seek(time, useRap) {
		this.mp4box.flush();
		return this.mp4box.seek(time, useRap);
	}
	distroy() {
		this.mp4box.flush();
	}
}