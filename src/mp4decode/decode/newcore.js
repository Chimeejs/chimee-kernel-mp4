import {CustEvent} from 'chimee-helper-events';
import Mp4decode from './mp4decode';

export default class extends CustEvent {
	constructor() {
		super();
		this.decode = new Mp4decode();
		this.index = 0
	}

	appendBuffer(ab) {
		if(this.index === 0) {
			this.decode.parse(ab);
			this.index++
		}
	}
}