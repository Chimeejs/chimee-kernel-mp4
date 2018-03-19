import {Log} from 'chimee-helper';

export default class Util {
	constructor(dv) {
		if(!dv) {
			Log.error("请传入正确的DataView")
		}
		this.dv = dv;
		this.position = 0;
		this._littleEndian = (function () {
        let buf = new ArrayBuffer(2);
        (new DataView(buf)).setInt16(0, 256, true);  // little-endian write
        return (new Int16Array(buf))[0] === 256;  // platform-spec read, if equal then LE
    })();
	}

	readString(length) {
		let s = "";
    for (var i = 0; i < length; i++) {
      s += String.fromCharCode(this.dv.getUint8(this.position));
      this.position += 1;
    }
    return s;
	}

	readUint8() {
		const le = this._littleEndian;
		let value = this.dv.getUint8(this.position, !le);
		this.position += 1;
		return value;
	}

	readUint16() {
		const le = this._littleEndian;
		let value = this.dv.getUint16(this.position, !le);
		this.position += 2;
		return value;
	}

	readUint24() {
		let res = this.readUint8() << 16;
    		res |= this.readUint8() << 8;
    		res |= this.readUint8();
    return res;
	}

	readUint32() {
		const le = this._littleEndian;
		let value = this.dv.getUint32(this.position, !le);
		this.position += 4;
		return value;
	}
	
	readUint16Array (length, e) {
		let arr = new Uint16Array(length);
	  for (let i = 0; i < length; i++) {
	    arr[i] = this.readUint16();
	  }
	  return arr;
	};

	readUint64() {
		let res = this.readUint32() << 32;          
        res |= this.readUint32();
		return res;
	}

	readInt8() {
		const le = this._littleEndian;
		let value = this.dv.getInt8(this.position, !le);
		this.position += 1;
		return value;
	}

	readInt16() {
		const le = this._littleEndian;
		let value = this.dv.getInt16(this.position, !le);
		this.position += 2;
		return value;
	}

	readUint24() {
		let res = this.readInt8() << 16;
    		res |= this.readInt8() << 8;
    		res |= this.readInt8();
    return res;
	}

	readInt32() {
		const le = this._littleEndian;
		let value = this.dv.getInt32(this.position, !le);
		this.position += 4;
		return value;
	}

	readInt64() {
		let res = this.readUint32() << 32;          
        res |= this.readUint32();
		return res;
	}

	readUint8Array(length) {
	  let arr = new Uint8Array(length);
	  for (let i = 0; i < length; i++) {
	    arr[i] = this.readUint8();
	  }
	  return arr;
	}

	readInt16Array (length) {
	  let arr = new Int16Array(length);
	  for (let i = 0; i < length; i++) {
	    arr[i] = this.readUint16();
	  }
	  return arr;
	}

	readUint32Array (length) {
	  let arr = new Uint32Array(length);
	  for (let i = 0; i < length; i++) {
	    arr[i] = this.readUint32();
	  }
	  return arr;
	}

	readInt32Array(length) {
	  let arr = new Int32Array(length);
	  for (let i = 0; i < length; i++) {
	    arr[i] = this.readInt32();
	  }
	  return arr;
	}

	readCString() {
	  let arr = [];
	  while(true) {
	    let b = this.readUint8();
	    if (b !== 0) {
	      arr.push(b);
	    } else {
	      break;
	    }
	  }
	  return String.fromCharCode.apply(null, arr); 
	}

	
}