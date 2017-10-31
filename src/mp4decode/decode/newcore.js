import {CustEvent} from 'chimee-helper-events';
import Mp4decode from './mp4decode';

export default class extends CustEvent {
	constructor() {
		super();
		this.decode = new Mp4decode();
	}

	appendBuffer(ab) {
		this.decode.parse(ab);
	}
}