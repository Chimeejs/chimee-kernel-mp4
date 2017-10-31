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
		window.ab = ab;
		this.dataView = new DataView(ab);
		const utilInstance = new Util(this.dataView);
		const demux = new Mp4Demux(utilInstance);
		while(index < 200 ) { // utilInstance.position > this.position
			let size = utilInstance.readUint32();
			let type = utilInstance.readString(4);
			console.log(type);
			if(demux[type]) {
				demux[type](size);
			} else {
				utilInstance.position += size - 8;
			}
			index++;
		}
		
	}
}