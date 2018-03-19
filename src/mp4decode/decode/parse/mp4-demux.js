import MPEG4DescriptorParser from './mpeg4-descript'

export default class Mp4decode {
	constructor(utilInstance) {
		this.utilInstance = utilInstance;
	}

	getHeader(uI) {
		return {
			version: uI.readUint8(),
			flags: uI.readUint24()
		}
	}

	parseLanguage (uI) {
		this.language = uI.readUint16();
		var chars = [];
		chars[0] = (this.language>>10)&0x1F;
		chars[1] = (this.language>>5)&0x1F;
		chars[2] = (this.language)&0x1F;
		this.languageString = String.fromCharCode(chars[0]+0x60, chars[1]+0x60, chars[2]+0x60);
	}

	parseOneBox() {
		const uI = this.utilInstance;
		let size = uI.readUint32();
		let type = uI.readString(4);
		console.log(type);
		this[type.trim()]();
	}

	ftyp(size) {
		const uI = this.utilInstance;
		this.major_brand = uI.readString(4);
		this.minor_version = uI.readUint32();
		this.compatible_brands = [];
		while(uI.position + 4 <= size) {
			this.compatible_brands.push(uI.readString(4));
		}
	}

	moov() {
		this.parseOneBox();
		this.parseOneBox();
		this.parseOneBox();
		return "moov ContainerBox"
	}

	mvhd() {
		const uI = this.utilInstance;
		const header = this.getHeader(uI);
		if (header.version == 1) {
			this.creation_time = uI.readUint64();
			this.modification_time = uI.readUint64();
			this.timescale = uI.readUint32();
			this.duration = uI.readUint64();
		} else {
			this.creation_time = uI.readUint32();
			this.modification_time = uI.readUint32();
			this.timescale = uI.readUint32();
			this.duration = uI.readUint32();
		}
		this.rate = uI.readUint32();
		this.volume = uI.readUint16()>>8;
		uI.position += 10;
		this.matrix = uI.readUint32Array(9);
		uI.position += 24;
		this.next_track_id = uI.readUint32();
	}

	iods() {
		const uI = this.utilInstance;
		uI.position += 13;
	}

	trak() {
		const uI = this.utilInstance;
		let size = uI.readUint32();
		let type = uI.readString(4);
		// tkhd
		this[type](size);
		size = uI.readUint32();
		type = uI.readString(4);
		// edts
		this[type](size);

		size = uI.readUint32();
		type = uI.readString(4);
		// mdia
		this[type](size);
		return "trak ContainerBox"
	}

	tkhd() {
		const uI = this.utilInstance;
		const header = this.getHeader(uI);
		if (header.version == 1) {
			this.creation_time = uI.readUint64();
			this.modification_time = uI.readUint64();
			this.track_id = uI.readUint32();
			uI.readUint32();
			this.duration = uI.readUint64();
		} else {
			this.creation_time = uI.readUint32();
			this.modification_time = uI.readUint32();
			this.track_id = uI.readUint32();
			uI.readUint32();
			this.duration = uI.readUint32();
		}
		uI.readUint32Array(2);
		this.layer = uI.readInt16();
		this.alternate_group = uI.readInt16();
		this.volume = uI.readInt16()>>8;
		uI.readUint16();
		this.matrix = uI.readInt32Array(9);
		this.width = uI.readUint32();
		this.height = uI.readUint32();
	}

	edts(size) {
		const uI = this.utilInstance;
		uI.position += size - 8;
		// const size = uI.readUint32();
		// const type = uI.readString(4);
		// this.elst();
	}

	elst() {
		const uI = this.utilInstance;
		this.getHeader(uI);
		this.entries = [];
		var entry_count = uI.readUint32();
		for (var i = 0; i < entry_count; i++) {
			var entry = {};
			this.entries.push(entry);
			if (this.version === 1) {
				entry.segment_duration = uI.readUint64();
				entry.media_time = uI.readInt64();
			} else {
				entry.segment_duration = uI.readUint32();
				entry.media_time = uI.readInt32();
			}
			entry.media_rate_integer = uI.readInt16();
			entry.media_rate_fraction = uI.readInt16();
		}
	}

	mdia() {
		const uI = this.utilInstance;
		let size = uI.readUint32();
		let type = uI.readString(4);
		// mdhd
		console.log(type)
		this[type](size);

		size = uI.readUint32();
	  type = uI.readString(4);
		// hdlr
		this[type](size);

		size = uI.readUint32();
	  type = uI.readString(4);
		// minf
		console.log(type)
		this[type](size);

		// size = uI.readUint32();
		// type = uI.readString(4);
		// console.log(type)
		// const header = this.getHeader(uI);

	}

	mdhd() {
		const uI = this.utilInstance;
		const header = this.getHeader(uI);
		if (header.version == 1) {
			this.creation_time = uI.readUint64();
			this.modification_time = uI.readUint64();
			this.timescale = uI.readUint32();
			this.duration = uI.readUint64();
		} else {
			this.creation_time = uI.readUint32();
			this.modification_time = uI.readUint32();
			this.timescale = uI.readUint32();
			this.duration = uI.readUint32();
		}
		this.parseLanguage(uI);
		uI.readUint16();
	}

	hdlr(size) {
		const uI = this.utilInstance;
		const header = this.getHeader(uI);
		if (header.version === 0) {
			uI.readUint32();
			this.handler = uI.readString(4);
			uI.readUint32Array(3);
			this.name = uI.readString(size - 32);
			if (this.name[this.name.length - 1] === '\0') {
				this.name = this.name.slice(0, -1);
			}
		}
	}

	minf() {
		const uI = this.utilInstance;
		console.log(uI.position);
		let size = uI.readUint32();
		let type = uI.readString(4);
		console.log(type);
		console.log(size);
		// vmhd
		this[type](size);
		console.log(uI.position);


		size = uI.readUint32();
		type = uI.readString(4);
		console.log(type)
		// dinf
		this[type](size);

		return "minf ContainerBox"
	}

	vmhd() {
		const uI = this.utilInstance;
		const header = this.getHeader(uI);
		this.graphicsmode = uI.readUint16();
		this.opcolor = uI.readUint16Array(3);
	}

	// smhd() {

	// }

	dinf() {
		const uI = this.utilInstance;
		// const header = this.getHeader(uI);
		// this.entries = [];
		// const entryCount = uI.readUint32();
		// for (var i = 0; i < entry_count; i++) {
		// 	ret = this.parseOneBox();
		// 	if (ret.code === BoxParser.OK) {
		// 		box = ret.box;
		// 		this.entries.push(box);
		// 	} else {
		// 		return;
		// 	}
		// }

		let size = uI.readUint32();
		let type = uI.readString(4);
		// dref
		this[type](size);
		return "dinf ContainerBox"
	}

	dref(size) {
		var ret;
		var box;
		const uI = this.utilInstance;
		this.getHeader(uI);
		this.entries = [];
		var entry_count = uI.readUint32();
		for (var i = 0; i < entry_count; i++) {
			const size = uI.readUint32();
			const type = uI.readString(4);
			this[type.trim()](size);
			// this.parseOneBox();
			// ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
			// if (ret.code === BoxParser.OK) {
			// 	box = ret.box;
			// 	this.entries.push(box);
			// } else {
			// 	return;
			// }
		}
	}

	url() {
		alert(1);
		const uI = this.utilInstance;
		const header = this.getHeader(uI);
		if (header.flags !== 0x000001) {
			this.location = uI.readCString();
			console.log(this);
		}
	}

	stbl() {
		return "stbl ContainerBox"
	}

	stsd() {
		var i;
		var ret;
		var entryCount;
		var box;
		const uI = this.utilInstance;
		const header = this.getHeader(uI);
		entryCount = uI.readUint32();
		for (i = 1; i <= entryCount; i++) {
			this.parseOneBox();

			// ret = BoxParser.parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
			// if (ret.code === BoxParser.OK) {
			// 	if (BoxParser[ret.type+"SampleEntry"]) {
			// 		box = new BoxParser[ret.type+"SampleEntry"](ret.size);
			// 		box.hdr_size = ret.hdr_size;
			// 		box.start = ret.start;
			// 	} else {
			// 		Log.warn("BoxParser", "Unknown sample entry type: "+ret.type);
			// 		box = new BoxParser.SampleEntry(ret.type, ret.size, ret.hdr_size, ret.start);
			// 	}
			// 	if (box.write === BoxParser.SampleEntry.prototype.write) {
			// 		Log.warn("BoxParser", box.type+" box writing not yet implemented, keeping unparsed data in memory for later write");
			// 		box.parseDataAndRewind(stream);
			// 	}
			// 	box.parse(stream);
			// 	this.entries.push(box);
			// } else {
			// 	return;
			// }
		}
	}

	avc1() {
		
	}

	mp4a() {
		return "mp4a ContainerBox"
	}

	esds(size) {
		const uI = this.utilInstance;
		this.parseFullHeader(uI);
		var esd_data = uI.readUint8Array(size-2);
		if (typeof MPEG4DescriptorParser !== "undefined") {
			var esd_parser = new MPEG4DescriptorParser();
			this.esd = esd_parser.parseOneDescriptor(new DataStream(esd_data.buffer, 0, DataStream.BIG_ENDIAN));
		}
	}

}