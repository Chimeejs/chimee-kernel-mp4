let CPU = null;
let loader = null;

this.addEventListener('message', function (e) {
  console.log(e);
  postMessage({a:111});
  self.postMessage({a:111});

  switch (e.data.cmd) {
    case 'init':
      CPU = new Mp4decode();
      CPU.onInitSegment = onRemuxerInitSegmentArrival.bind(this);
      CPU.onMediaSegment = onRemuxerMediaSegmentArrival.bind(this);
      CPU.onError = onCPUError.bind(this);
      CPU.onMediaInfo = onMediaInfo.bind(this);
      CPU.seekCallBack = seekCallBack.bind(this);
    break;
    case 'loadSource':
      loader = new IoLoader(this.config);
      loader.arrivalDataCallback = arrivalDataCallbackWorker;
      loader.open();
    break;
    case 'pipe':
    const consumed = CPU.setflv(e.data.source);
    self.postMessage({cmd: 'pipeCallback', source: consumed});
    break;
    case 'seek':
    CPU.seek(e.data.source);
    break;
  };
});

function onRemuxerInitSegmentArrival (type, initSegment) {
  self.postMessage({cmd: 'mediaSegmentInit', source: initSegment});
}

function onRemuxerMediaSegmentArrival (type, initSegment) {
  self.postMessage({cmd: 'mediaSegment', source: initSegment});
}

function onCPUError (error) {
  self.postMessage({cmd: 'error', source: error});
}

function onMediaInfo (mediainfo) {
  self.postMessage({cmd: 'mediainfo', source: mediainfo});
}

function seekCallBack () {
}
function arrivalDataCallbackWorker (data, byteStart, keyframePoint) {
  if(keyframePoint) {
    this.w.postMessage({cmd: 'seek', source: data});
  }
  this.w.postMessage({cmd: 'pipe', source: data});
  return;
}

