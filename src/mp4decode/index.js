import {CustEvent} from 'chimee-helper';
import {MP4Box} from './core';

export default class Mp4decode extends CustEvent {
	constructor() {
		super();
		this.mp4box = new MP4Box();
		this.bindEvent();
	}

	bindEvent() {
		this.mp4box.onReady = (info)=> {
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
				this.mp4box.setSegmentOptions(item.id, item.type); 
			})
			
			const initSegs = this.mp4box.initializeSegmentation();
			initSegs.forEach((item)=>{
				this.onInitMediaSegment({type: item.user, buffer: item.buffer});
			})
		}

		this.mp4box.onError = (e)=> {
			console.log(e);
		};
		this.mp4box.onSegment = (id, user, buffer, sampleNum)=>{
			this.onMediaSegment({type: user, buffer: buffer});
		}
		this.mp4box.onSamples = (id)=>{
			console.log(2);
		}
		this.mp4box.onItem = (id)=>{
			console.log(3);
		}
		this.mp4box.start();
	}

	sendBuffer(data) {
		this.mp4box.appendBuffer(data);
	}

	seek(time, useRap) {
		return this.mp4box.seek(time, useRap);
	}
}