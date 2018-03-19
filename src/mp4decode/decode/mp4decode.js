import {CustEvent} from 'chimee-helper-events';
import Util from './util';
import Mp4Demux from './parse/mp4-demux';

export default class Mp4decode extends CustEvent {
	constructor() {
		super();
		this._littleEndian = (function () {
        let buf = new ArrayBuffer(2);
        (new DataView(buf)).setInt16(0, 256, true);  // little-endian write
        return (new Int16Array(buf))[0] === 256;  // platform-spec read, if equal then LE
    })();
    this.dataView = null;
    this.position = 0;
	}

	

	parse(ab) {
		this.position += ab.byteLength;
		var index = 0;
		const le = this._littleEndian;
		// window.ab = ab;
		console.log(new Uint8Array(ab));
		this.dataView = new DataView(ab);
		const utilInstance = new Util(this.dataView);
		const demux = new Mp4Demux(utilInstance);
		while(utilInstance.position < ab.byteLength) { // utilInstance.position > this.position
			let size = utilInstance.readUint32();
			let type = utilInstance.readString(4);
			if(demux[type]) {
				demux[type](size);
			} else {
				utilInstance.position += size - 8;
			}
			index++;
		}
	}

	getBodySum(arr) {
		let _str = '';
		_str += (arr[0].toString(16).length == 1 ? '0' + arr[0].toString(16) : arr[0].toString(16));
		_str += (arr[1].toString(16).length == 1 ? '0' + arr[1].toString(16) : arr[1].toString(16));
		_str += (arr[2].toString(16).length == 1 ? '0' + arr[2].toString(16) : arr[2].toString(16));
		return parseInt(_str, 16);
	}
}