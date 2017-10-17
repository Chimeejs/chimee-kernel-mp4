document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.chimeeKernelMp4 = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classCallCheck = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck = unwrapExports(classCallCheck);

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty$2 = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty$2, __esModule: true };
});

var createClass = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass = unwrapExports(createClass);

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _redefine = _hide;

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var _iterators = {};

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$1 = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$1) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _addToUnscopables = function () { /* empty */ };

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var iterator$2 = _wksExt.f('iterator');

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": iterator$2, __esModule: true };
});

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});

var defineProperty$4 = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$4($Symbol, name, { value: _wksExt.f(name) });
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$4
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD$1(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;


















var gOPD = _objectGopd.f;
var dP$2 = _objectDp.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$2({}, 'a', {
    get: function () { return dP$2(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$2(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$2(ObjectProto$1, key, protoDesc);
} : dP$2;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$2(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$2(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !_isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol$2 = _core.Symbol;

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": symbol$2, __esModule: true };
});

var _typeof_1 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator);



var _symbol2 = _interopRequireDefault(symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var _typeof = unwrapExports(_typeof_1);

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys$1 = _core.Object.keys;

var keys = createCommonjsModule(function (module) {
module.exports = { "default": keys$1, __esModule: true };
});

// 20.1.2.3 Number.isInteger(number)

var floor$1 = Math.floor;
var _isInteger = function isInteger(it) {
  return !_isObject(it) && isFinite(it) && floor$1(it) === it;
};

// 20.1.2.3 Number.isInteger(number)


_export(_export.S, 'Number', { isInteger: _isInteger });

var isInteger$2 = _core.Number.isInteger;

var isInteger$1 = createCommonjsModule(function (module) {
module.exports = { "default": isInteger$2, __esModule: true };
});

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space = '[' + _stringWs + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = _fails(function () {
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(_defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

var $parseFloat = _global.parseFloat;
var $trim = _stringTrim.trim;

var _parseFloat$3 = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// 20.1.2.12 Number.parseFloat(string)
_export(_export.S + _export.F * (Number.parseFloat != _parseFloat$3), 'Number', { parseFloat: _parseFloat$3 });

var _parseFloat$1 = parseFloat;

var _parseFloat = createCommonjsModule(function (module) {
module.exports = { "default": _parseFloat$1, __esModule: true };
});

/**
 * toxic-predicate-functions v0.1.4
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
 * is void element or not ? Means it will return true when val is undefined or null
 */
function isVoid(obj) {
  return obj === undefined || obj === null;
}
/**
 * to check whether a variable is array
 */
function isArray$1(arr) {
  return Array.isArray(arr);
}

/**
 * is it a function or not
 */
function isFunction(obj) {
  return typeof obj === 'function';
}

/**
 * is it an object or not
 */
function isObject$1(obj) {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray$1(obj);
}
/**
 * to tell you if it's a real number
 */
function isNumber(obj) {
  return typeof obj === 'number';
}
/**
 * is it a string
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
 * is Boolean or not
 */
function isBoolean(bool) {
  return typeof bool === 'boolean';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 */
function isPrimitive(val) {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}

/**
 * chimee-helper-log v0.1.2
 * (c) 2017 toxic-johann
 * Released under MIT
 */

function formatter(tag, msg) {
  if (!isString(tag)) throw new TypeError('Log\'s method only acccept string as argument, but not ' + tag + ' in ' + (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)));
  if (!isString(msg)) return '[' + Log.GLOBAL_TAG + '] > ' + tag;
  tag = Log.FORCE_GLOBAL_TAG ? Log.GLOBAL_TAG : tag || Log.GLOBAL_TAG;
  return '[' + tag + '] > ' + msg;
}
/**
 * Log Object
 */

var Log = function () {
  function Log() {
    _classCallCheck(this, Log);
  }

  _createClass(Log, null, [{
    key: 'error',

    /**
     * equal to console.error, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */
    value: function error(tag, msg) {
      if (!Log.ENABLE_ERROR) {
        return;
      }

      (console.error || console.warn || console.log)(formatter(tag, msg));
    }
    /**
     * equal to console.info, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {string}
     */

  }, {
    key: 'info',
    value: function info(tag, msg) {
      if (!Log.ENABLE_INFO) {
        return;
      }
      (console.info || console.log)(formatter(tag, msg));
    }
    /**
     * equal to console.warn, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

  }, {
    key: 'warn',
    value: function warn(tag, msg) {
      if (!Log.ENABLE_WARN) {
        return;
      }
      (console.warn || console.log)(formatter(tag, msg));
    }
    /**
     * equal to console.debug, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

  }, {
    key: 'debug',
    value: function debug(tag, msg) {
      if (!Log.ENABLE_DEBUG) {
        return;
      }
      (console.debug || console.log)(formatter(tag, msg));
    }
    /**
     * equal to console.verbose, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

  }, {
    key: 'verbose',
    value: function verbose(tag, msg) {
      if (!Log.ENABLE_VERBOSE) {
        return;
      }
      console.log(formatter(tag, msg));
    }
  }]);

  return Log;
}();

Log.GLOBAL_TAG = 'chimee';
Log.FORCE_GLOBAL_TAG = false;
Log.ENABLE_ERROR = true;
Log.ENABLE_INFO = true;
Log.ENABLE_WARN = true;
Log.ENABLE_DEBUG = true;
Log.ENABLE_VERBOSE = true;

var uaParser = createCommonjsModule(function (module, exports) {
/**
 * UAParser.js v0.7.14
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.14',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var margedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    margedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    margedRegexes[i] = regexes[i];
                }
            }
            return margedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {

            //var result = {},
            var i = 0, j, k, p, q, matches, match;//, args = arguments;

            /*// construct object barebones
            for (p = 0; p < args[1].length; p++) {
                q = args[1][p];
                result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
            }*/

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
            //console.log(this);
            //return this;
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
            ], [NAME, VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
            ], [NAME, VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(puffin)\/([\w\.]+)/i                                              // Puffin
            ], [[NAME, 'Puffin'], VERSION], [

            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
                                                                                // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
            ], [NAME, VERSION], [

            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
            ], [NAME, VERSION], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
            ], [VERSION, [NAME, 'Facebook']], [

            /(headlesschrome) ([\w\.]+)/i                                       // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /((?:oculus|samsung)browser)\/([\w\.]+)/i
            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /(coast)\/([\w\.]+)/i                                               // Opera Coast
            ], [[NAME, 'Opera Coast'], VERSION], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]

            /* /////////////////////
            // Media players BEGIN
            ////////////////////////

            , [

            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
            /(coremedia) v((\d+)[\w\._]+)/i
            ], [NAME, VERSION], [

            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
            ], [NAME, VERSION], [

            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
            ], [NAME, VERSION], [

            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
            ], [NAME, VERSION], [
            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
            ], [NAME, VERSION], [

            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
            ], [[NAME, 'Flip Player'], VERSION], [

            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
            ], [NAME], [

            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                // Gstreamer
            ], [NAME, VERSION], [

            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                // Java/urllib/requests/wget/cURL
            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
            ], [NAME, VERSION], [

            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
            ], [[NAME, /_/g, ' '], VERSION], [

            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                // MPlayer SVN
            ], [NAME, VERSION], [

            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
            ], [NAME, VERSION], [

            /(mplayer)/i,                                                       // MPlayer (no other info)
            /(yourmuze)/i,                                                      // YourMuze
            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
            ], [NAME], [

            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
            ], [NAME, VERSION], [

            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
            ], [NAME, VERSION], [

            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
            ], [NAME, VERSION], [

            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
            /(winamp)\s((\d+)[\w\.-]+)/i,
            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
            ], [NAME, VERSION], [

            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                // inlight radio
            ], [NAME], [

            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                // SoundTap/Totem/Stagefright/Streamium
            ], [NAME, VERSION], [

            /(smp)((\d+)[\d\.]+)/i                                              // SMP
            ], [NAME, VERSION], [

            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
            /(vlc)\/((\d+)[\w\.-]+)/i,
            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
            ], [NAME, VERSION], [

            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
            /(windows-media-player)\/((\d+)[\w\.-]+)/i
            ], [[NAME, /-/g, ' '], VERSION], [

            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                // Windows Media Server
            ], [VERSION, [NAME, 'Windows']], [

            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
            ], [NAME, VERSION], [

            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
            ], [[NAME, 'rad.io'], VERSION]

            //////////////////////
            // Media players END
            ////////////////////*/

        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
            /(zte)-(\w+)*/i,                                                    // ZTE
            /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                                                                // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /d\/huawei([\w\s-]+)[;\)]/i,
            /(nexus\s6p)/i                                                      // Huawei
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w+)*/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w+)*/i                                                       // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]+)*/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w+)*/i,
            /android.+lg(\-?[\d\w]+)\s+build/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+;\s(pixel c)\s/i                                          // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

            /android.+;\s(pixel xl|pixel)\s/i                                   // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            /android.+(\w+)\s+build\/hm\1/i,                                    // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [

            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu Tablet
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [

            /android.+a000(1)\s+build/i                                         // OnePlus
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Venue[\d\s]*)\s+build/i                          // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i                        // ZTE K Series Tablet
            ], [[VENDOR, 'ZTE'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

            /(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,
            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i          // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(NS-?.+)\s+build/i                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((NX|Next)-?.+)\s+build/i                         // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

            /android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i                     // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i             // Le Pan Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

            /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

            /android.+(Gigaset)[\s\-]+(Q.+)\s+build/i                           // Gigaset Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL], [

            /(android.+)[;\/].+build/i                                          // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]


        /*//////////////////////////
            // TODO: move to string map
            ////////////////////////////

            /(C6603)/i                                                          // Sony Xperia Z C6603
            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
            /(C6903)/i                                                          // Sony Xperia Z 1
            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

            /(T3C)/i                                                            // Advan Vandroid T3C
            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

            /(V972M)/i                                                          // ZTE V972M
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

            /////////////
            // END TODO
            ///////////*/

        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,                  // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i                                              // Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
            /(gnu)\s?([\w\.]+)*/i                                               // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                  // Haiku
            ], [NAME, VERSION],[

            /cfnetwork\/.+darwin/i,
            /ip[honead]+(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i                // iOS
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]+)*/i                                              // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////

    var Browser = function (name, version) {
        this[NAME] = name;
        this[VERSION] = version;
    };
    var CPU = function (arch) {
        this[ARCHITECTURE] = arch;
    };
    var Device = function (vendor, model, type) {
        this[VENDOR] = vendor;
        this[MODEL] = model;
        this[TYPE] = type;
    };
    var Engine = Browser;
    var OS = Browser;

    var UAParser = function (uastring, extensions) {

        if (typeof uastring === 'object') {
            extensions = uastring;
            uastring = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
        var browser = new Browser();
        var cpu = new CPU();
        var device = new Device();
        var engine = new Engine();
        var os = new OS();

        this.getBrowser = function () {
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version); // deprecated
            return browser;
        };
        this.getCPU = function () {
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
        };
        this.getDevice = function () {
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
        };
        this.getEngine = function () {
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
        };
        this.getOS = function () {
            mapper.rgx.call(os, ua, rgxmap.os);
            return os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            browser = new Browser();
            cpu = new CPU();
            device = new Device();
            engine = new Engine();
            os = new OS();
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };
    //UAParser.Utils = util;

    ///////////
    // Export
    //////////


    // check js environment
    if ('object' !== UNDEF_TYPE) {
        // nodejs env
        if ('object' !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof(undefined) === FUNC_TYPE && undefined.amd) {
            undefined(function () {
                return UAParser;
            });
        } else if (window) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window && (window.jQuery || window.Zepto);
    if (typeof $ !== UNDEF_TYPE) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : commonjsGlobal);
});

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function (object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$3] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from$1 = _core.Array.from;

var from = createCommonjsModule(function (module) {
module.exports = { "default": from$1, __esModule: true };
});

var _Array$from = unwrapExports(from);

var toConsumableArray = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _from2 = _interopRequireDefault(from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

var _toConsumableArray = unwrapExports(toConsumableArray);

/**
 * toxic-utils v0.1.6
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
 * the handler to generate an deep traversal handler
 * @param  {Function} fn the function you wanna run when you reach in the deep property
 * @return {Function}    the handler
 */
function genTraversalHandler(fn) {
  function recursiveFn(source, target, key) {
    if (isArray$1(source) || isObject$1(source)) {
      target = isPrimitive(target) ? isObject$1(source) ? {} : [] : target;
      for (var _key in source) {
        // $FlowFixMe: support computed key here
        target[_key] = recursiveFn(source[_key], target[_key], _key);
      }
      return target;
    }
    return fn(source, target, key);
  }
  return recursiveFn;
}
var _deepAssign = genTraversalHandler(function (val) {
  return val;
});
/**
 * merge multiple objects
 * @param  {...Object} args [description]
 * @return {merge-object}         [description]
 */
function deepAssign() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length < 2) {
    throw new Error('deepAssign accept two and more argument');
  }
  for (var i = args.length - 1; i > -1; i--) {
    if (isPrimitive(args[i])) {
      throw new TypeError('deepAssign only accept non primitive type');
    }
  }
  var target = args.shift();
  args.forEach(function (source) {
    return _deepAssign(source, target);
  });
  return target;
}

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
  var f = _ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var SPECIES = _wks('species');
var _speciesConstructor = function (O, D) {
  var C = _anObject(O).constructor;
  var S;
  return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var process$1 = _global.process;
var setTask = _global.setImmediate;
var clearTask = _global.clearImmediate;
var MessageChannel = _global.MessageChannel;
var Dispatch = _global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process$1) == 'process') {
    defer = function (id) {
      process$1.nextTick(_ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(_ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
    defer = function (id) {
      _global.postMessage(id + '', '*');
    };
    _global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
    defer = function (id) {
      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
        _html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(_ctx(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};

var macrotask = _task.set;
var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
var process$2 = _global.process;
var Promise$1 = _global.Promise;
var isNode$2 = _cof(process$2) == 'process';

var _microtask = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode$2 && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode$2) {
    notify = function () {
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    var promise = Promise$1.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(_global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

// 25.4.1.5 NewPromiseCapability(C)


function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction(resolve);
  this.reject = _aFunction(reject);
}

var f$7 = function (C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
	f: f$7
};

var _perform = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var _promiseResolve = function (C, x) {
  _anObject(C);
  if (_isObject(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var _redefineAll = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else _hide(target, key, src[key]);
  } return target;
};

var SPECIES$1 = _wks('species');

var _setSpecies = function (KEY) {
  var C = typeof _core[KEY] == 'function' ? _core[KEY] : _global[KEY];
  if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
    configurable: true,
    get: function () { return this; }
  });
};

var task = _task.set;
var microtask = _microtask();



var PROMISE = 'Promise';
var TypeError$1 = _global.TypeError;
var process = _global.process;
var $Promise = _global[PROMISE];
var isNode$1 = _classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal;
var newGenericPromiseCapability;
var OwnPromiseCapability;
var Wrapper;
var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

var USE_NATIVE$1 = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(_global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform(function () {
        if (isNode$1) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = _global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = _global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(_global, function () {
    var handler;
    if (isNode$1) {
      process.emit('rejectionHandled', promise);
    } else if (handler = _global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE$1) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    _anInstance(this, $Promise, PROMISE, '_h');
    _aFunction(executor);
    Internal.call(this);
    try {
      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$1 ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = _ctx($resolve, promise, 1);
    this.reject = _ctx($reject, promise, 1);
  };
  _newPromiseCapability.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
_export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export(_export.S + _export.F * (_library || !USE_NATIVE$1), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
  }
});
_export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = _perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      _forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = _perform(function () {
      _forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

_export(_export.P + _export.R, 'Promise', { 'finally': function (onFinally) {
  var C = _speciesConstructor(this, _core.Promise || _global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return _promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return _promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

// https://github.com/tc39/proposal-promise-try




_export(_export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = _newPromiseCapability.f(this);
  var result = _perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

var promise$1 = _core.Promise;

var promise = createCommonjsModule(function (module) {
module.exports = { "default": promise$1, __esModule: true };
});

/**
 * chimee-helper-utils v0.2.0
 * (c) 2017 toxic-johann
 * Released under MIT
 */

// **********************  judgement   ************************
/**
 * check if the code running in browser environment (not include worker env)
 * @returns {Boolean}
 */
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

/**
 * 函数节流（控制函数执行频率）
 * @param  {Function} func 要节流控制的函数，必填
 * @return {Number}   wait 等待时长
 * @return {Object}   options {
 *                      leading<是否首次调用立即执行，否：则按wait设定等待到期后调用才执行>:false,
 *                      trailing<是否在调用并未到期时启用定时器，以保证一定执行>:true
 *                    }
 * @return {Object}   cxt 上下文对象
 * @return {Function}
 */
function throttle(func, wait, options, cxt) {
  /* options的默认值
   *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
   *  options.leading = true;
   * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
   *  options.trailing = true;
   * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
   */
  var context = void 0,
      args = void 0,
      result = void 0;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function later() {
    previous = options.leading === false ? 0 : new Date() - 0;
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  wait = wait || 0;
  return function () {
    var now = new Date();
    if (!previous && options.leading === false) previous = now;
    // 计算剩余时间
    var remaining = wait - (now - previous);
    if (cxt) {
      context = cxt;
    } else {
      context = this;
    }

    args = arguments;
    // 当到达wait指定的时间间隔，则调用func函数
    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
    if (remaining <= 0 || remaining > wait) {
      // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      // options.trailing=true时，延时执行func函数
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign$1 = _core.Object.assign;

var assign = createCommonjsModule(function (module) {
module.exports = { "default": assign$1, __esModule: true };
});

var _Object$assign = unwrapExports(assign);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

var $Object$1 = _core.Object;
var create$1 = function create(P, D) {
  return $Object$1.create(P, D);
};

var create = createCommonjsModule(function (module) {
module.exports = { "default": create$1, __esModule: true };
});

var _Object$create = unwrapExports(create);

/**
 * chimee-helper-events v0.1.0
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
* @module event
* @author huzunjie
* @description 自定义事件基础类
*/

/* 缓存事件监听方法及包装，内部数据格式：
 * targetIndex_<type:'click|mouseup|done'>: [ [
 *   function(){ ... handler ... },
 *   function(){ ... handlerWrap ... handler.apply(target, arguments) ... },
 *   isOnce
 * ]]
 */
var _evtListenerCache = _Object$create(null);
_evtListenerCache.count = 0;

/**
 * 得到某对象的某事件类型对应的监听队列数组
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型(这里的时间类型不只是名称，还是缓存标识，可以通过添加后缀来区分)
 * @return {Array}
 */
function getEvtTypeCache(target, type) {

  var evtId = target.__evt_id;
  if (!evtId) {

    /* 设置__evt_id不可枚举 */
    Object.defineProperty(target, '__evt_id', {
      writable: true,
      enumerable: false,
      configurable: true
    });

    /* 空对象初始化绑定索引 */
    evtId = target.__evt_id = ++_evtListenerCache.count;
  }

  var typeCacheKey = evtId + '_' + type;
  var evtTypeCache = _evtListenerCache[typeCacheKey];
  if (!evtTypeCache) {
    evtTypeCache = _evtListenerCache[typeCacheKey] = [];
  }

  return evtTypeCache;
}

/**
 * 触发事件监听方法
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Object} eventObj 触发事件时要传回的event对象
 * @return {undefined}
 */
function emitEventCache(target, type, eventObj) {
  var evt = _Object$create(null);
  evt.type = type;
  evt.target = target;
  if (eventObj) {
    _Object$assign(evt, isObject$1(eventObj) ? eventObj : { data: eventObj });
  }
  getEvtTypeCache(target, type).forEach(function (item) {
    (item[1] || item[0]).apply(target, [evt]);
  });
}

/**
 * 添加事件监听到缓存
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Function} handler 监听函数
 * @param {Boolean} isOnce 是否单次执行
 * @param {Function} handlerWrap
 * @return {undefined}
 */
function addEventCache(target, type, handler) {
  var isOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var handlerWrap = arguments[4];

  if (isFunction(isOnce) && !handlerWrap) {
    handlerWrap = isOnce;
    isOnce = undefined;
  }
  var handlers = [handler, undefined, isOnce];
  if (isOnce && !handlerWrap) {
    handlerWrap = function handlerWrap() {
      removeEventCache(target, type, handler, isOnce);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(target, args);
    };
  }
  if (handlerWrap) {
    handlers[1] = handlerWrap;
  }
  getEvtTypeCache(target, type).push(handlers);
}

/**
 * 移除事件监听
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Function} handler 监听函数
 * @return {undefined}
 */
function removeEventCache(target, type, handler) {
  var isOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var typeCache = getEvtTypeCache(target, type);

  if (handler || isOnce) {
    /* 有指定 handler 则清除对应监听 */
    var handlerId = -1;
    var handlerWrap = void 0;
    typeCache.find(function (item, i) {
      if ((!handler || item[0] === handler) && (!isOnce || item[2])) {
        handlerId = i;
        handlerWrap = item[1];
        return true;
      }
    });
    if (handlerId !== -1) {
      typeCache.splice(handlerId, 1);
    }
    return handlerWrap;
  } else {
    /* 未指定 handler 则清除type对应的所有监听 */
    typeCache.length = 0;
  }
}

/**
 * @class CustEvent
 * @description
 * Event 自定义事件类
 * 1. 可以使用不传参得到的实例作为eventBus使用
 * 2. 可以通过指定target，用多个实例操作同一target对象的事件管理
 * 3. 当设定target时，可以通过设置assign为true，来给target实现"on\once\off\emit"方法
 * @param  {Object}  target 发生事件的对象（空则默认为event实例）
 * @param  {Boolean}  assign 是否将"on\once\off\emit"方法实现到target对象上
 * @return {event}
 */
var CustEvent = function () {
  function CustEvent(target, assign$$1) {
    var _this = this;

    _classCallCheck(this, CustEvent);

    /* 设置__target不可枚举 */
    Object.defineProperty(this, '__target', {
      writable: true,
      enumerable: false,
      configurable: true
    });
    this.__target = this;

    if (target) {

      if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
        throw new Error('CusEvent target are not object');
      }
      this.__target = target;

      /* 为target实现on\once\off\emit */
      if (assign$$1) {
        ['on', 'once', 'off', 'emit'].forEach(function (mth) {
          target[mth] = _this[mth];
        });
      }
    }
  }

  /**
   * 添加事件监听
   * @param {String} type 事件类型
   * @param {Function} handler 监听函数
   * @param {Boolean} isOnce 单次监听类型
   * @return {event}
   */


  _createClass(CustEvent, [{
    key: 'on',
    value: function on(type, handler) {
      var isOnce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      addEventCache(this.__target, type, handler, isOnce);
      return this;
    }

    /**
     * 添加事件监听,并且只执行一次
     * @param {String} type 事件类型
     * @param {Function} handler 监听函数
     * @return {event}
     */

  }, {
    key: 'once',
    value: function once(type, handler) {
      return this.on(type, handler, true);
    }

    /**
     * 移除事件监听
     * @param {String} type 事件类型
     * @param {Function} handler 监听函数(不指定handler则清除type对应的所有事件监听)
     * @param {Boolean} isOnce 单次监听类型
     * @return {event}
     */

  }, {
    key: 'off',
    value: function off(type, handler) {
      var isOnce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      removeEventCache(this.__target, type, handler, isOnce);
      return this;
    }

    /**
     * 触发事件监听函数
     * @param {String} type 事件类型
     * @return {event}
     */

  }, {
    key: 'emit',
    value: function emit(type, data) {
      emitEventCache(this.__target, type, { data: data });
      return this;
    }
  }]);

  return CustEvent;
}();

/**
 * chimee-helper-dom v0.1.2
 * (c) 2017 huzunjie
 * Released under MIT
 */

/**
 * chimee-helper-events v0.1.0
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
* @module event
* @author huzunjie
* @description 自定义事件基础类
*/

/* 缓存事件监听方法及包装，内部数据格式：
 * targetIndex_<type:'click|mouseup|done'>: [ [
 *   function(){ ... handler ... },
 *   function(){ ... handlerWrap ... handler.apply(target, arguments) ... },
 *   isOnce
 * ]]
 */
var _evtListenerCache$1 = _Object$create(null);
_evtListenerCache$1.count = 0;

/**
 * 得到某对象的某事件类型对应的监听队列数组
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型(这里的时间类型不只是名称，还是缓存标识，可以通过添加后缀来区分)
 * @return {Array}
 */
function getEvtTypeCache$1(target, type) {

  var evtId = target.__evt_id;
  if (!evtId) {

    /* 设置__evt_id不可枚举 */
    Object.defineProperty(target, '__evt_id', {
      writable: true,
      enumerable: false,
      configurable: true
    });

    /* 空对象初始化绑定索引 */
    evtId = target.__evt_id = ++_evtListenerCache$1.count;
  }

  var typeCacheKey = evtId + '_' + type;
  var evtTypeCache = _evtListenerCache$1[typeCacheKey];
  if (!evtTypeCache) {
    evtTypeCache = _evtListenerCache$1[typeCacheKey] = [];
  }

  return evtTypeCache;
}

/**
 * 触发事件监听方法
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Object} eventObj 触发事件时要传回的event对象
 * @return {undefined}
 */
function emitEventCache$1(target, type, eventObj) {
  var evt = _Object$create(null);
  evt.type = type;
  evt.target = target;
  if (eventObj) {
    _Object$assign(evt, isObject$1(eventObj) ? eventObj : { data: eventObj });
  }
  getEvtTypeCache$1(target, type).forEach(function (item) {
    (item[1] || item[0]).apply(target, [evt]);
  });
}

/**
 * 添加事件监听到缓存
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Function} handler 监听函数
 * @param {Boolean} isOnce 是否单次执行
 * @param {Function} handlerWrap
 * @return {undefined}
 */
function addEventCache$1(target, type, handler) {
  var isOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var handlerWrap = arguments[4];

  if (isFunction(isOnce) && !handlerWrap) {
    handlerWrap = isOnce;
    isOnce = undefined;
  }
  var handlers = [handler, undefined, isOnce];
  if (isOnce && !handlerWrap) {
    handlerWrap = function handlerWrap() {
      removeEventCache$1(target, type, handler, isOnce);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(target, args);
    };
  }
  if (handlerWrap) {
    handlers[1] = handlerWrap;
  }
  getEvtTypeCache$1(target, type).push(handlers);
}

/**
 * 移除事件监听
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Function} handler 监听函数
 * @return {undefined}
 */
function removeEventCache$1(target, type, handler) {
  var isOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var typeCache = getEvtTypeCache$1(target, type);

  if (handler || isOnce) {
    /* 有指定 handler 则清除对应监听 */
    var handlerId = -1;
    var handlerWrap = void 0;
    typeCache.find(function (item, i) {
      if ((!handler || item[0] === handler) && (!isOnce || item[2])) {
        handlerId = i;
        handlerWrap = item[1];
        return true;
      }
    });
    if (handlerId !== -1) {
      typeCache.splice(handlerId, 1);
    }
    return handlerWrap;
  } else {
    /* 未指定 handler 则清除type对应的所有监听 */
    typeCache.length = 0;
  }
}

/**
 * @class CustEvent
 * @description
 * Event 自定义事件类
 * 1. 可以使用不传参得到的实例作为eventBus使用
 * 2. 可以通过指定target，用多个实例操作同一target对象的事件管理
 * 3. 当设定target时，可以通过设置assign为true，来给target实现"on\once\off\emit"方法
 * @param  {Object}  target 发生事件的对象（空则默认为event实例）
 * @param  {Boolean}  assign 是否将"on\once\off\emit"方法实现到target对象上
 * @return {event}
 */
var CustEvent$1 = function () {
  function CustEvent(target, assign$$1) {
    var _this = this;

    _classCallCheck(this, CustEvent);

    /* 设置__target不可枚举 */
    Object.defineProperty(this, '__target', {
      writable: true,
      enumerable: false,
      configurable: true
    });
    this.__target = this;

    if (target) {

      if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
        throw new Error('CusEvent target are not object');
      }
      this.__target = target;

      /* 为target实现on\once\off\emit */
      if (assign$$1) {
        ['on', 'once', 'off', 'emit'].forEach(function (mth) {
          target[mth] = _this[mth];
        });
      }
    }
  }

  /**
   * 添加事件监听
   * @param {String} type 事件类型
   * @param {Function} handler 监听函数
   * @param {Boolean} isOnce 单次监听类型
   * @return {event}
   */


  _createClass(CustEvent, [{
    key: 'on',
    value: function on(type, handler) {
      var isOnce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      addEventCache$1(this.__target, type, handler, isOnce);
      return this;
    }

    /**
     * 添加事件监听,并且只执行一次
     * @param {String} type 事件类型
     * @param {Function} handler 监听函数
     * @return {event}
     */

  }, {
    key: 'once',
    value: function once(type, handler) {
      return this.on(type, handler, true);
    }

    /**
     * 移除事件监听
     * @param {String} type 事件类型
     * @param {Function} handler 监听函数(不指定handler则清除type对应的所有事件监听)
     * @param {Boolean} isOnce 单次监听类型
     * @return {event}
     */

  }, {
    key: 'off',
    value: function off(type, handler) {
      var isOnce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      removeEventCache$1(this.__target, type, handler, isOnce);
      return this;
    }

    /**
     * 触发事件监听函数
     * @param {String} type 事件类型
     * @return {event}
     */

  }, {
    key: 'emit',
    value: function emit(type, data) {
      emitEventCache$1(this.__target, type, { data: data });
      return this;
    }
  }]);

  return CustEvent;
}();

/**
 * chimee-helper-utils v0.1.3
 * (c) 2017 toxic-johann
 * Released under MIT
 */

// **********************  judgement   ************************
/**
 * check if the code running in browser environment (not include worker env)
 * @returns {Boolean}
 */
var inBrowser$1 = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// **********************  对象操作  ************************
/**
 * 转变一个类数组对象为数组
 */
function makeArray$1(obj) {
  return _Array$from(obj);
}

/**
* @module dom
* @author huzunjie
* @description 一些常用的DOM判断及操作方法，可以使用dom.$('*')包装DOM，实现类jQuery的链式操作；当然这里的静态方法也可以直接使用。
*/

var _divEl = document.createElement('div');
var _textAttrName = 'innerText';
'textContent' in _divEl && (_textAttrName = 'textContent');
var _arrPrototype = Array.prototype;

/**
 * 读取HTML元素属性值
 * @param {HTMLElement} el 目标元素
 * @param {String} attrName 目标属性名称
 * @return {String}
 */
function getAttr(el, attrName) {
  return el.getAttribute(attrName);
}

/**
 * 设置HTML元素属性值
 * @param {HTMLElement} el 目标元素
 * @param {String} attrName 目标属性名称
 * @param {String} attrVal 目标属性值
 */
function setAttr(el, attrName, attrVal) {
  if (attrVal === undefined) {
    el.removeAttribute(attrName);
  } else {
    el.setAttribute(attrName, attrVal);
  }
}

/**
 * 为HTML元素添加className
 * @param {HTMLElement} el 目标元素
 * @param {String} cls 要添加的className（多个以空格分割）
 */
function addClassName(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  var clsArr = cls.split(/\s+/);
  if (el.classList) {
    clsArr.forEach(function (c) {
      return el.classList.add(c);
    });
  } else {
    var curCls = ' ' + (el.className || '') + ' ';
    clsArr.forEach(function (c) {
      curCls.indexOf(' ' + c + ' ') === -1 && (curCls += ' ' + c);
    });
    el.className = curCls.trim();
  }
}

/**
 * 为HTML元素移除className
 * @param {HTMLElement} el 目标元素
 * @param {String} cls 要移除的className（多个以空格分割）
 */
function removeClassName(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  var clsArr = cls.split(/\s+/);
  if (el.classList) {
    clsArr.forEach(function (c) {
      return el.classList.remove(c);
    });
  } else {
    var curCls = ' ' + el.className + ' ';
    clsArr.forEach(function (c) {
      var tar = ' ' + c + ' ';
      while (curCls.indexOf(tar) !== -1) {
        curCls = curCls.replace(tar, ' ');
      }
    });
    el.className = curCls.trim();
  }
}

/**
 * 检查HTML元素是否已设置className
 * @param {HTMLElement} el 目标元素
 * @param {String} className 要检查的className
 * @return {Boolean}
 */
function hasClassName(el, className) {
  return new RegExp('(?:^|\\s)' + className + '(?=\\s|$)').test(el.className);
}

/**
 * 为HTML元素移除事件监听
 * @param {HTMLElement} el 目标元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} once 是否只监听一次
 * @param {Boolean} capture 是否在捕获阶段的监听
 */
function removeEvent(el, type, handler) {
  var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (once) {
    /* 尝试从缓存中读取包装后的方法 */
    var handlerWrap = removeEventCache$1(el, type + '_once', handler);
    if (handlerWrap) {
      handler = handlerWrap;
    }
  }
  el.removeEventListener(type, handler, capture);
}

/**
 * 为HTML元素添加事件监听
 * @param {HTMLElement} el 目标元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} once 是否只监听一次
 * @param {Boolean} capture 是否在捕获阶段监听
 */
function addEvent(el, type, handler) {
  var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (once) {
    var oldHandler = handler;
    handler = function () {
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        oldHandler.apply(this, args);
        removeEvent(el, type, handler, once, capture);
      };
    }();
    /* 将包装后的方法记录到缓存中 */
    addEventCache$1(el, type + '_once', oldHandler, handler);
  }

  el.addEventListener(type, handler, capture);
}

/**
 * 为HTML元素添加事件代理
 * @param {HTMLElement} el 目标元素
 * @param {String} selector 要被代理的元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} capture 是否在捕获阶段监听
 */
function addDelegate(el, selector, type, handler) {
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;


  var handlerWrap = function handlerWrap(e) {
    var targetEls = findParents(e.target || e.srcElement, el, true);
    var targetEl = query(selector, el, true).find(function (seEl) {
      return targetEls.find(function (tgEl) {
        return seEl === tgEl;
      });
    });
    targetEl && handler.apply(targetEl, arguments);
  };
  /* 将包装后的方法记录到缓存中 */
  addEventCache$1(el, type + '_delegate_' + selector, handler, handlerWrap);
  el.addEventListener(type, handlerWrap, capture);
}

/**
 * 为HTML元素移除事件代理
 * @param {HTMLElement} el 目标元素
 * @param {String} selector 要被代理的元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} capture 是否在捕获阶段监听
 */
function removeDelegate(el, selector, type, handler) {
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  /* 尝试从缓存中读取包装后的方法 */
  var handlerWrap = removeEventCache$1(el, type + '_delegate_' + selector, handler);
  handlerWrap && el.removeEventListener(type, handlerWrap, capture);
}

/**
 * 读取HTML元素样式值
 * @param {HTMLElement} el 目标元素
 * @param {String} key 样式key
 * @return {String}
 */
function getStyle(el, key) {
  return (el.currentStyle || document.defaultView.getComputedStyle(el, null))[key] || el.style[key];
}

/**
 * 设置HTML元素样式值
 * @param {HTMLElement} el 目标元素
 * @param {String} key 样式key
 * @param {String} val 样式值
 */
function setStyle(el, key, val) {
  if (isObject$1(key)) {
    for (var k in key) {
      setStyle(el, k, key[k]);
    }
  } else {
    el.style[key] = val;
  }
}

/**
 * 根据选择器查询目标元素
 * @param {String} selector 选择器,用于 querySelectorAll
 * @param {HTMLElement} container 父容器
 * @param {Boolean} toArray 强制输出为数组
 * @return {NodeList|Array}
 */
function query(selector) {
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var toArray = arguments[2];

  var retNodeList = container.querySelectorAll(selector);
  return toArray ? _Array$from(retNodeList) : retNodeList;
}

/**
 * 从DOM树中移除el
 * @param {HTMLElement} el 目标元素
 */
function removeEl(el) {
  el.parentNode.removeChild(el);
}

/**
 * 查找元素的父节点们
 * @param {HTMLElement} el 目标元素
 * @param {HTMLElement} endEl 最大父容器（不指定则找到html）
 * @param {Boolean} haveEl 包含当前元素
 * @param {Boolean} haveEndEl 包含设定的最大父容器
 */
function findParents(el) {
  var endEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var haveEl = arguments[2];
  var haveEndEl = arguments[3];

  var retEls = [];
  if (haveEl) {
    retEls.push(el);
  }
  while (el && el.parentNode !== endEl) {
    el = el.parentNode;
    el && retEls.push(el);
  }
  if (haveEndEl) {
    retEls.push(endEl);
  }
  return retEls;
}

/**
 * 根据选择器查询并得到目标元素的wrap包装器
 * @param {String} selector 选择器,另外支持 HTMLString||NodeList||NodeArray||HTMLElement
 * @param {HTMLElement} container 父容器
 * @return {Object}
 */
function $(selector, container) {
  return selector.constructor === NodeWrap ? selector : new NodeWrap(selector, container);
}

/**
 * @class NodeWrap
 * @description
 * NodeWrap DOM包装器，用以实现基本的链式操作
 * new dom.NodeWrap('*') 相当于 dom.$('*')
 * 这里面用于DOM操作的属性方法都是基于上面静态方法实现，有需要可以随时修改补充
 * @param {String} selector 选择器(兼容 String||HTMLString||NodeList||NodeArray||HTMLElement)
 * @param {HTMLElement} container 父容器（默认为document）
 */

var NodeWrap = function () {
  function NodeWrap(selector) {
    var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    _classCallCheck(this, NodeWrap);

    var _this = this;
    _this.selector = selector;

    /* String||NodeList||HTMLElement 识别处理 */
    var elsArr = void 0;
    if (selector && selector.constructor === NodeList) {
      /* 支持直接传入NodeList来构建包装器 */
      elsArr = makeArray$1(selector);
    } else if (isArray$1(selector)) {
      /* 支持直接传入Node数组来构建包装器 */
      elsArr = selector;
    } else if (isString(selector)) {
      if (selector.indexOf('<') === 0) {
        /* 支持直接传入HTML字符串来新建DOM并构建包装器 */
        _divEl.innerHTML = selector;
        elsArr = query('*', _divEl, true);
      } else {
        /* 支持直接传入字符串选择器来查找DOM并构建包装器 */
        elsArr = query(selector, container, true);
      }
    } else {
      /* 其他任意对象直接构建包装器 */
      elsArr = [selector];
    }
    _Object$assign(_this, elsArr);

    /* NodeWrap本意可以 extends Array省略构造方法中下面这部分代码，但目前编译不支持 */
    _this.length = elsArr.length;
  }

  /**
   * 循环遍历DOM集合
   * @param {Function} fn 遍历函数 fn(item, i)
   * @return {Object}
   */


  _createClass(NodeWrap, [{
    key: 'each',
    value: function each() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _arrPrototype.forEach.apply(this, args);
      return this;
    }
  }, {
    key: 'push',


    /**
     * 添加元素到DOM集合
     * @param {HTMLElement} el 要加入的元素
     * @return {this}
     */
    value: function push() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      _arrPrototype.push.apply(this, args);
      return this;
    }
  }, {
    key: 'splice',


    /**
     * 截取DOM集合片段，并得到新的包装器splice
     * @param {Nubmer} start
     * @param {Nubmer} count
     * @return {NodeWrap} 新的DOM集合包装器
     */
    value: function splice() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return $(_arrPrototype.splice.apply(this, args));
    }
  }, {
    key: 'find',


    /**
     * 查找子元素
     * @param {String} selector 选择器
     * @return {NodeWrap} 新的DOM集合包装器
     */
    value: function find(selector) {
      var childs = [];
      this.each(function (el) {
        childs = childs.concat(query(selector, el, true));
      });
      var childsWrap = $(childs);
      childsWrap.parent = this;
      childsWrap.selector = selector;
      return childsWrap;
    }

    /**
     * 添加子元素
     * @param {HTMLElement} childEls 要添加的HTML元素
     * @return {this}
     */

  }, {
    key: 'append',
    value: function append(childEls) {
      var childsWrap = $(childEls);
      var firstEl = this[0];
      childsWrap.each(function (newEl) {
        return firstEl.appendChild(newEl);
      });
      return this;
    }

    /**
     * 将元素集合添加到指定容器
     * @param {HTMLElement} parentEl 要添加到父容器
     * @return {this}
     */

  }, {
    key: 'appendTo',
    value: function appendTo(parentEl) {
      $(parentEl).append(this);
      return this;
    }

    /**
     * DOM集合text内容读写操作
     * @param {String} val 文本内容（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'text',
    value: function text(val) {
      if (arguments.length === 0) {
        return this[0][_textAttrName];
      }
      return this.each(function (el) {
        el[_textAttrName] = val;
      });
    }

    /**
     * DOM集合HTML内容读写操作
     * @param {String} html html内容（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'html',
    value: function html(_html) {
      if (arguments.length === 0) {
        return this[0].innerHTML;
      }
      return this.each(function (el) {
        el.innerHTML = _html;
      });
    }

    /**
     * DOM集合属性读写操作
     * @param {String} name 属性名称
     * @param {String} val 属性值（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'attr',
    value: function attr(name, val) {
      if (arguments.length === 1) {
        return getAttr(this[0], name);
      }
      return this.each(function (el) {
        return setAttr(el, name, val);
      });
    }

    /**
     * DOM集合dataset读写操作
     * @param {String} key 键名
     * @param {Any} val 键值（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'data',
    value: function data(key, val) {
      if (arguments.length === 0) {
        return this[0].dataset || {};
      }
      if (arguments.length === 1) {
        return (this[0].dataset || {})[key];
      }
      return this.each(function (el) {
        (el.dataset || (el.dataset = {}))[key] = val;
      });
    }

    /**
     * DOM集合样式读写操作
     * @param {String} key 样式key
     * @param {String} val 样式值（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'css',
    value: function css(key, val) {
      if (arguments.length === 1 && !isObject$1(key)) {
        return getStyle(this[0], key);
      }
      return this.each(function (el) {
        return setStyle(el, key, val);
      });
    }

    /**
     * 为DOM集合增加className
     * @param {String} cls 要增加的className
     * @return {this}
     */

  }, {
    key: 'addClass',
    value: function addClass(cls) {
      return this.each(function (el) {
        return addClassName(el, cls);
      });
    }

    /**
     * 移除当前DOM集合的className
     * @param {String} cls 要移除的className
     * @return {this}
     */

  }, {
    key: 'removeClass',
    value: function removeClass(cls) {
      return this.each(function (el) {
        return removeClassName(el, cls);
      });
    }

    /**
     * 检查索引0的DOM是否有className
     * @param {String} cls 要检查的className
     * @return {this}
     */

  }, {
    key: 'hasClass',
    value: function hasClass(cls) {
      return hasClassName(this[0], cls);
    }

    /**
     * 为DOM集合添加事件监听
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} once 是否只监听一次
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'on',
    value: function on(type, handler) {
      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return addEvent(el, type, handler, once, capture);
      });
    }

    /**
     * 为DOM集合解除事件监听
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} once 是否只监听一次
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'off',
    value: function off(type, handler) {
      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return removeEvent(el, type, handler, once, capture);
      });
    }

    /**
     * 为DOM集合绑定事件代理
     * @param {String} selector 目标子元素选择器
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'delegate',
    value: function delegate(selector, type, handler) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return addDelegate(el, selector, type, handler, capture);
      });
    }

    /**
     * 为DOM集合解绑事件代理
     * @param {String} selector 目标子元素选择器
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'undelegate',
    value: function undelegate(selector, type, handler) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return removeDelegate(el, selector, type, handler, capture);
      });
    }

    /**
     * 从DOM树中移除
     * @return {this}
     */

  }, {
    key: 'remove',
    value: function remove() {
      return this.each(function (el) {
        return removeEl(el);
      });
    }
  }]);

  return NodeWrap;
}();

/**
 * chimee-helper v0.2.5
 * (c) 2017 toxic-johann
 * Released under MIT
 */

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var MSEController = function (_CustEvent) {
  inherits(MSEController, _CustEvent);

  /**
   * mediasource 控制层
   * @class mediasource
   * @param {Element} videoElement
   * @param {object} config
   */
  function MSEController(videoElement, config) {
    classCallCheck$1(this, MSEController);

    var _this = possibleConstructorReturn(this, (MSEController.__proto__ || Object.getPrototypeOf(MSEController)).call(this));

    _this.video = videoElement;
    _this.config = config;
    _this.tag = 'mse-controller';
    _this.e = {
      onSourceOpen: _this.onSourceOpen.bind(_this),
      onSourceEnded: _this.onSourceEnded.bind(_this),
      onSourceClose: _this.onSourceClose.bind(_this),
      onSourceBufferError: _this.onSourceBufferError.bind(_this)
    };
    _this.removeRangesList = {
      video: [],
      audio: []
    };
    _this.removeBucketing = false;
    _this.timer = {
      video: null,
      audio: null
    };
    _this.queue = {
      video: [],
      audio: []
    };
    _this.sourceBuffer = {
      video: null,
      audio: null
    };
    _this.mimeCodec = {
      video: null,
      audio: null
    };
    return _this;
  }

  /**
   * 初始化 控制层
   */


  createClass$1(MSEController, [{
    key: 'init',
    value: function init(mediaInfo) {
      if (this.mediaSource) {
        Log.Error(this.tag, 'MediaSource has been attached to an HTMLMediaElement!');
        throw new Error('MediaSource has been attached to an HTMLMediaElement!');
      }
      mediaInfo.data.videoCodec || (mediaInfo.data.videoCodec = 'avc1.640020');
      mediaInfo.data.audioCodec || (mediaInfo.data.audioCodec = 'mp4a.40.2');

      this.mimeCodec['video'] = 'video/mp4; codecs="' + mediaInfo.data.videoCodec;
      this.mimeCodec['audio'] = 'video/mp4; codecs="' + mediaInfo.data.audioCodec;

      var ms = this.mediaSource = new window.MediaSource();
      ms.addEventListener('sourceopen', this.e.onSourceOpen);
      ms.addEventListener('sourceended', this.e.onSourceEnded);
      ms.addEventListener('sourceclose', this.e.onSourceClose);
      // this.sourceBuffer.updating = true;
      this.sourceBufferEvent();
    }

    /**
     * mediaSource open
     */

  }, {
    key: 'onSourceOpen',
    value: function onSourceOpen() {
      Log.verbose(this.tag, 'MediaSource onSourceOpen');
      this.mediaSource.removeEventListener('sourceopen', this.e.onSourceOpen);
      this.addSourceBuffer('video');
      this.addSourceBuffer('audio');
      this.emit('source_open');
      // this.sourceBuffer.updating = false;
    }
  }, {
    key: 'addSourceBuffer',
    value: function addSourceBuffer(type) {
      var _this2 = this;

      this.sourceBuffer[type] = this.mediaSource.addSourceBuffer(this.mimeCodec[type]);
      Log.verbose(this.tag, 'add sourcebuffer ' + type);
      var sb = this.sourceBuffer[type];
      sb.addEventListener('error', this.e.onSourceBufferError);
      sb.addEventListener('abort', function () {
        return Log.verbose(_this2.tag, 'sourceBuffer: abort');
      });
      sb.addEventListener('updateend', function () {
        if (_this2.queue[type].length > 0) {
          if (!sb.updating) {
            if (_this2.needCleanupSourceBuffer(type)) {
              _this2.doCleanupSourceBuffer(type);
            } else {
              var data = _this2.queue[type].shift();
              _this2.appendBuffer(data, type);
            }
          }
        }
        _this2.emit('updateend');
      });
      this.doUpdate(type);
    }
  }, {
    key: 'doUpdate',
    value: function doUpdate(type) {
      var _this3 = this;

      clearTimeout(this.timer[type]);
      if (this.queue[type].length > 0) {
        var data = this.queue[type].shift();
        this.appendBuffer(data, type);
      } else {
        this.timer[type] = setTimeout(function () {
          _this3.doUpdate(type);
        }, 100);
      }
    }

    /**
     * sourceBuffer 事件
     */

  }, {
    key: 'sourceBufferEvent',
    value: function sourceBufferEvent() {
      var _this4 = this;

      this.on('mediaSegment', function (handler) {
        var data = handler.data;
        var type = data.type;

        if (!_this4.sourceBuffer[type] || _this4.sourceBuffer[type].updating || _this4.queue[type].length > 0) {
          _this4.queue[type].push(data);
        } else {
          _this4.appendBuffer(data, type);
        }
      });

      this.on('mediaSegmentInit', function (handler) {
        var data = handler.data;
        var type = data.type;
        if (!_this4.sourceBuffer[type] || _this4.sourceBuffer[type].updating || _this4.queue[type].length > 0) {
          _this4.queue[type].push(data);
        } else {
          _this4.appendBuffer(data, type);
        }
      });
    }

    /**
     * 是否需要清除sourcebuffer 里的buffer
     */

  }, {
    key: 'needCleanupSourceBuffer',
    value: function needCleanupSourceBuffer(type) {
      var currentTime = this.video.currentTime;

      var sb = this.sourceBuffer[type];
      var buffered = sb.buffered;

      if (buffered.length >= 1) {
        if (currentTime - buffered.start(0) >= this.config.autoCleanupMaxBackwardDuration) {
          return true;
        }
      }
      return false;
    }

    /**
     * 清除buffer
     */

  }, {
    key: 'doCleanupSourceBuffer',
    value: function doCleanupSourceBuffer(type) {
      Log.verbose(this.tag, 'docleanBuffer');
      var currentTime = this.video.currentTime;
      var sb = this.sourceBuffer[type];
      var buffered = sb.buffered;
      var doRemove = false;
      for (var i = 0; i < buffered.length; i++) {
        var start = buffered.start(i);
        var end = buffered.end(i);

        if (start <= currentTime && currentTime < end + 3) {
          if (currentTime - start >= this.config.autoCleanupMaxBackwardDuration) {
            doRemove = true;
            var removeEnd = currentTime - this.config.autoCleanupMinBackwardDuration;
            this.removeRangesList[type].push({ start: start, end: removeEnd });
          }
        } else if (end < currentTime) {
          doRemove = true;
          this.removeRangesList[type].push({ start: start, end: end });
        }
      }
      if (doRemove && !this.sourceBuffer[type].updating) {
        this.cleanRangesList(type);
      }
    }

    /**
     * 清除bufferlist
     */

  }, {
    key: 'cleanRangesList',
    value: function cleanRangesList(type) {
      if (this.sourceBuffer[type].updating) {
        return;
      }
      var sb = this.sourceBuffer[type];
      while (this.removeRangesList[type].length && !sb.updating) {
        var ranges = this.removeRangesList[type].shift();
        sb.remove(ranges.start, ranges.end);
      }
    }

    /**
     * 往sourcebuffer里添加数据
     */

  }, {
    key: 'appendBuffer',
    value: function appendBuffer(data, type) {
      try {
        this.sourceBuffer[type].appendBuffer(data.buffer);
      } catch (e) {
        if (e.code === 22) {
          // chrome 大概会有350M
          Log.verbose(this.tag, 'MediaSource bufferFull');
          this.emit('bufferFull');
        }
      }
    }

    /**
     * sourcebuffer 结束
     */

  }, {
    key: 'onSourceEnded',
    value: function onSourceEnded() {
      Log.verbose(this.tag, 'MediaSource onSourceEnded');
    }

    /**
     * sourcebuffer 关闭
     */

  }, {
    key: 'onSourceClose',
    value: function onSourceClose() {
      Log.verbose(this.tag, 'MediaSource onSourceClose');
      if (this.mediaSource && this.e !== null) {
        this.mediaSource.removeEventListener('sourceopen', this.e.onSourceOpen);
        this.mediaSource.removeEventListener('sourceended', this.e.onSourceEnded);
        this.mediaSource.removeEventListener('sourceclose', this.e.onSourceClose);
      }
    }

    /**
    * sourcebuffer 错误
    */

  }, {
    key: 'onSourceBufferError',
    value: function onSourceBufferError(e) {
      console.log(e);
      // Log.info(e);
      Log.error(this.tag, 'SourceBuffer Error: ' + e);
    }

    /**
     * seek
     */

  }, {
    key: 'seek',
    value: function seek() {}

    /**
     * 销毁
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.mediaSource) {
        var ms = this.mediaSource;
        // pending segments should be discard
        this.queue = [];
        // remove all sourcebuffers
        var sb = this.sourceBuffer;
        if (sb) {
          if (ms.readyState !== 'closed') {
            ms.removeSourceBuffer(sb);
            sb.removeEventListener('error', this.e.onSourceBufferError);
            sb.removeEventListener('updateend', this.e.onSourceBufferUpdateEnd);
          }
          this.sourceBuffer = null;
        }
        if (ms.readyState === 'open') {
          try {
            ms.endOfStream();
          } catch (error) {
            Log.e(this.tag, error.message);
          }
        }
        ms.removeEventListener('sourceopen', this.e.onSourceOpen);
        ms.removeEventListener('sourceended', this.e.onSourceEnded);
        ms.removeEventListener('sourceclose', this.e.onSourceClose);
        this.mediaSource = null;
      }

      if (this._mediaElement) {
        this._mediaElement.src = '';
        this._mediaElement.removeAttribute('src');
        this._mediaElement = null;
      }
      if (this._mediaSourceObjectURL) {
        window.URL.revokeObjectURL(this._mediaSourceObjectURL);
        this._mediaSourceObjectURL = null;
      }
    }
  }]);
  return MSEController;
}(CustEvent);

/**
* 处理range的静态函数
* author songguangyu
* emil 522963130@qq.com
*/
var handleRange = function (range) {
  var headers = {};
  var param = void 0;

  if (range.to !== -1) {
    param = 'bytes=' + range.from.toString() + '-' + range.to.toString();
  } else {
    param = 'bytes=' + range.from.toString() + '-';
  }
  headers['Range'] = param;

  return {
    headers: headers
  };
};

/**
* fetch firfox 直播 点播
* author songguangyu
* emil 522963130@qq.com
*/
/**
 * FetchLoader
 * @class FetchLoader
 * @param {string} video url
 * @param  {object} range.from range.to
 */

var FetchLoader = function (_CustEvent) {
	inherits(FetchLoader, _CustEvent);
	createClass$1(FetchLoader, null, [{
		key: 'isSupport',


		/**
    * broswer is support moz-chunk
    */
		value: function isSupport() {
			if (self.fetch && self.ReadableStream) {
				return true;
			} else {
				return false;
			}
		}
	}]);

	function FetchLoader(src, config) {
		classCallCheck$1(this, FetchLoader);

		var _this = possibleConstructorReturn(this, (FetchLoader.__proto__ || Object.getPrototypeOf(FetchLoader)).call(this));

		_this.tag = 'fetch';
		_this.fetching = false;
		_this.config = config;
		_this.range = {
			from: 0,
			to: 500000
		};
		_this.src = src;
		_this.totalRange = null;
		_this.block = 500000;
		_this.reader = null;
		_this.requestAbort = false;
		_this.arrivalDataCallback = null;
		_this.bytesStart = 0;
		return _this;
	}
	/**
   * if don't need range don't set
   * @param  {object} range.from range.to
   */


	createClass$1(FetchLoader, [{
		key: 'open',
		value: function open(range, keyframePoint) {
			var _this2 = this;

			this.requestAbort = false;
			var reqHeaders = new Headers();
			var r = range || { from: 0, to: -1 };
			if (!this.config.isLive) {
				this.range.from = r.from;
				this.range.to = r.to;
				var headers = handleRange(r).headers;
				for (var i in headers) {
					reqHeaders.append(i, headers[i]);
				}
			}
			if (keyframePoint) {
				this.bytesStart = 0;
			}
			this.bytesStart = range.from;
			var params = {
				method: 'GET',
				headers: reqHeaders,
				mode: 'cors',
				cache: 'default',
				referrerPolicy: 'no-referrer-when-downgrade'
			};

			fetch(this.src, params).then(function (res) {
				if (res.ok) {
					var reader = res.body.getReader();
					return _this2.pump(reader, keyframePoint);
				}
			});
		}

		/**
    * pause video
    */

	}, {
		key: 'pause',
		value: function pause() {
			console.log('pause');
			this.requestAbort = true;
		}

		/**
    * pump data
    */

	}, {
		key: 'pump',
		value: function pump(reader, keyframePoint) {
			var _this3 = this;

			// ReadableStreamReader
			return reader.read().then(function (result) {
				if (result.done) {
					Log.verbose(_this3.tag, 'play end');
					// trigger complete
				} else {
					if (_this3.requestAbort === true) {
						_this3.requestAbort = false;
						return reader.cancel();
					}
					var chunk = result.value.buffer;

					if (_this3.arrivalDataCallback) {
						_this3.arrivalDataCallback(chunk, _this3.bytesStart, keyframePoint);
						_this3.bytesStart += chunk.byteLength;
					}
					return _this3.pump(reader);
				}
			}).catch(function (e) {});
		}
	}]);
	return FetchLoader;
}(CustEvent);

/**
* XHR 点播
* author songguangyu
* emil 522963130@qq.com
*/
// import Log from 'helper/log';
/**
 * MozChunkLoader
 * @class MozChunkLoader
 * @param {string} video url
 * @param  {object} range.from range.to
 */

var RangeLoader = function (_CustEvent) {
  inherits(RangeLoader, _CustEvent);
  createClass$1(RangeLoader, null, [{
    key: 'isSupport',


    /**
    * broswer is support XMLHttpRequest
    */
    value: function isSupport() {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://example.com', true);
        xhr.responseType = 'arraybuffer';
        return xhr.responseType === 'arraybuffer';
      } catch (e) {
        return false;
      }
    }
  }]);

  function RangeLoader(src, config) {
    classCallCheck$1(this, RangeLoader);

    var _this = possibleConstructorReturn(this, (RangeLoader.__proto__ || Object.getPrototypeOf(RangeLoader)).call(this));

    _this.tag = 'RangeLoader';
    _this.xhr = null;
    _this.src = src;
    _this.totalLength = null;
    _this.chunkSizeKB = 393216;
    _this.range = {};
    _this.bytesStart = 0;
    return _this;
  }
  /**
   * if don't need range don't set
   * @param  {object} range.from range.to
   */


  createClass$1(RangeLoader, [{
    key: 'open',
    value: function open(range) {
      var xhr = this.xhr = new XMLHttpRequest();
      xhr.open('GET', this.src, true);
      xhr.responseType = 'arraybuffer';
      xhr.onreadystatechange = this.onReadyStateChange.bind(this);
      xhr.onprogress = this.onProgress.bind(this);
      xhr.onload = this.onLoad.bind(this);
      xhr.onerror = this.onXhrError.bind(this);
      var r = range || { from: 0, to: -1 };
      this.range.from = r.from;
      this.range.to = r.to;
      var headers = handleRange(r).headers;
      for (var i in headers) {
        xhr.setRequestHeader(i, headers[i]);
      }
      xhr.send();
    }

    /**
     * abort request
     */

  }, {
    key: 'abort',
    value: function abort() {
      this.xhr.onreadystatechange = null;
      this.xhr.onprogress = null;
      this.xhr.onload = null;
      this.xhr.onerror = null;
      this.xhr.abort();
      this.xhr = null;
    }

    /**
     * destroy xhr Object clean cache
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.xhr) {
        this.abort();
        this.xhr.onreadystatechange = null;
        this.xhr.onprogress = null;
        this.xhr.onload = null;
        this.xhr.onerror = null;
        this.xhr = null;
      }
      this.totalLength = null;
      this.bytesStart = null;
      this.range = {};
    }

    /**
     * xhr onReadyStateChange
     */

  }, {
    key: 'onReadyStateChange',
    value: function onReadyStateChange(e) {
      var xhr = this.xhr;
      if (xhr.readyState === 2) {
        if (xhr.status < 200 && xhr.status > 299) {
          var info = {
            from: this.range.from,
            to: this.range.to,
            url: this.src,
            msg: 'http Error: http code ' + xhr.status
          };
          this.emit(this.tag, info);
        }
      }
    }

    /**
     * xhr onProgress
     */

  }, {
    key: 'onProgress',
    value: function onProgress(e) {
      if (!this.totalLength) {
        this.totalLength = e.total;
        this.abort();
        this.open({ from: 0, to: this.chunkSizeKB });
      }
    }

    /**
     * xhr onLoad
     */

  }, {
    key: 'onLoad',
    value: function onLoad(e) {
      if (!this.totalLength) {
        return;
      }
      if (this.range.to < this.totalLength) {
        // this.open({from: this.range.to + 1, to: this.range.to + 1 + this.chunkSizeKB});
      }

      if (this.arrivalDataCallback) {
        var chunk = e.target.response;
        this.arrivalDataCallback(chunk, this.bytesStart);
        this.bytesStart += chunk.byteLength;
      }
    }

    /**
     * xhr onXhrError
     */

  }, {
    key: 'onXhrError',
    value: function onXhrError(e) {
      var info = {
        from: this.range.from,
        to: this.range.to,
        url: this.src,
        msg: e.constructor.name + ' ' + e.type
      };
      this.emit(this.tag, info);
    }
  }]);
  return RangeLoader;
}(CustEvent);

var WebSocketLoader = function (_CustEvent) {
    inherits(WebSocketLoader, _CustEvent);
    createClass$1(WebSocketLoader, null, [{
        key: 'isSupported',
        value: function isSupported() {
            try {
                return typeof window.WebSocket !== 'undefined';
            } catch (e) {
                return false;
            }
        }
    }]);

    function WebSocketLoader(src, config) {
        classCallCheck$1(this, WebSocketLoader);

        var _this = possibleConstructorReturn(this, (WebSocketLoader.__proto__ || Object.getPrototypeOf(WebSocketLoader)).call(this));

        _this.tag = 'WebSocketLoader';
        _this.range = {
            from: 0,
            to: 500000
        };
        _this.src = src;
        _this._ws = null;
        _this._requestAbort = false;
        _this._receivedLength = 0;
        return _this;
    }

    createClass$1(WebSocketLoader, [{
        key: 'destroy',
        value: function destroy() {
            if (this._ws) {
                this.abort();
            }
            get(WebSocketLoader.prototype.__proto__ || Object.getPrototypeOf(WebSocketLoader.prototype), 'destroy', this).call(this);
        }
    }, {
        key: 'open',
        value: function open(range, keyframePoint) {
            try {
                var ws = this._ws = new self.WebSocket(this.src);
                ws.binaryType = 'arraybuffer';
                ws.onopen = this._onWebSocketOpen.bind(this);
                ws.onclose = this._onWebSocketClose.bind(this);
                ws.onmessage = this._onWebSocketMessage.bind(this);
                ws.onerror = this._onWebSocketError.bind(this);
            } catch (e) {
                var info = { code: e.code, msg: e.message };

                if (this._onError) {
                    this._onError(LoaderErrors.EXCEPTION, info);
                } else {
                    throw new RuntimeException(info.msg);
                }
            }
        }
    }, {
        key: 'abort',
        value: function abort() {
            var ws = this._ws;
            if (ws && (ws.readyState === 0 || ws.readyState === 1)) {
                // CONNECTING || OPEN
                this._requestAbort = true;
                ws.close();
            }

            this._ws = null;
        }
    }, {
        key: '_onWebSocketOpen',
        value: function _onWebSocketOpen(e) {}
    }, {
        key: '_onWebSocketClose',
        value: function _onWebSocketClose(e) {
            if (this._requestAbort === true) {
                this._requestAbort = false;
                return;
            }

            if (this._onComplete) {
                this._onComplete(0, this._receivedLength - 1);
            }
        }
    }, {
        key: '_onWebSocketMessage',
        value: function _onWebSocketMessage(e) {
            var _this2 = this;

            if (e.data instanceof ArrayBuffer) {
                this._dispatchArrayBuffer(e.data);
            } else if (e.data instanceof Blob) {
                var reader = new FileReader();
                reader.onload = function () {
                    _this2._dispatchArrayBuffer(reader.result);
                };
                reader.readAsArrayBuffer(e.data);
            } else {
                var info = { code: -1, msg: 'Unsupported WebSocket message type: ' + e.data.constructor.name };

                if (this._onError) {
                    this._onError(LoaderErrors.EXCEPTION, info);
                } else {
                    throw new RuntimeException(info.msg);
                }
            }
        }
    }, {
        key: '_dispatchArrayBuffer',
        value: function _dispatchArrayBuffer(arraybuffer) {
            var chunk = arraybuffer;
            var byteStart = this._receivedLength;
            this._receivedLength += chunk.byteLength;

            if (this.arrivalDataCallback) {
                this.arrivalDataCallback(chunk, byteStart, this._receivedLength);
            }
        }
    }, {
        key: '_onWebSocketError',
        value: function _onWebSocketError(e) {
            var info = {
                code: e.code,
                msg: e.message
            };

            if (this._onError) {
                this._onError(LoaderErrors.EXCEPTION, info);
            } else {
                throw new RuntimeException(info.msg);
            }
        }
    }]);
    return WebSocketLoader;
}(CustEvent);

/**
* XHR firfox 直播 点播
* author songguangyu
* emil 522963130@qq.com
*/
// import Log from 'helper/log';
/**
 * MozChunkLoader
 * @class MozChunkLoader
 * @param {string} video url
 * @param  {object} range.from range.to
 */

var MozChunkLoader = function (_CustEvent) {
  inherits(MozChunkLoader, _CustEvent);
  createClass$1(MozChunkLoader, null, [{
    key: 'isSupport',


    /**
     * broswer is support moz-chunk
     */
    value: function isSupport() {
      try {
        var xhr = new XMLHttpRequest();
        // Firefox 37- requires .open() to be called before setting responseType
        xhr.open('GET', 'https://example.com', true);
        xhr.responseType = 'moz-chunked-arraybuffer';
        return xhr.responseType === 'moz-chunked-arraybuffer';
      } catch (e) {
        return false;
      }
    }
  }]);

  function MozChunkLoader(src, config) {
    classCallCheck$1(this, MozChunkLoader);

    var _this = possibleConstructorReturn(this, (MozChunkLoader.__proto__ || Object.getPrototypeOf(MozChunkLoader)).call(this));

    _this.tag = 'mozChunkLoader';
    _this.xhr = null;
    _this.src = src;
    _this.config = config;
    _this.totalLength = null;
    _this.chunkSizeKB = 393216;
    _this.range = {};
    _this.bytesStart = 0;
    return _this;
  }
  /**
   * if don't need range don't set
   * @param  {object} range.from range.to
   */


  createClass$1(MozChunkLoader, [{
    key: 'open',
    value: function open(range) {
      var xhr = this.xhr = new XMLHttpRequest();
      xhr.open('GET', this.src, true);
      xhr.responseType = 'moz-chunked-arraybuffer';
      xhr.onreadystatechange = this.onReadyStateChange.bind(this);
      xhr.onprogress = this.onProgress.bind(this);
      xhr.onload = this.onLoadEnd.bind(this);
      xhr.onerror = this.onXhrError.bind(this);
      if (!this.config.isLive) {
        var r = range || { from: 0, to: -1 };
        this.range.from = r.from;
        this.range.to = r.to;
        var headers = handleRange(r).headers;
        for (var i in headers) {
          xhr.setRequestHeader(i, headers[i]);
        }
      }
      xhr.send();
    }

    /**
     * abort request
     */

  }, {
    key: 'abort',
    value: function abort() {
      this.xhr.onreadystatechange = null;
      this.xhr.onprogress = null;
      this.xhr.onload = null;
      this.xhr.onerror = null;
      this.xhr.abort();
      this.xhr = null;
    }

    /**
     * destroy xhr Object clean cache
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.xhr) {
        this.abort();
        this.xhr.onreadystatechange = null;
        this.xhr.onprogress = null;
        this.xhr.onload = null;
        this.xhr.onerror = null;
        this.xhr = null;
      }
      this.totalLength = null;
      this.bytesStart = null;
      this.range = {};
    }

    /**
     * xhr onReadyStateChange
     */

  }, {
    key: 'onReadyStateChange',
    value: function onReadyStateChange(e) {
      var xhr = this.xhr;
      if (xhr.readyState === 2) {
        if (xhr.status < 200 && xhr.status > 299) {
          var info = {
            from: this.range.from,
            to: this.range.to,
            url: this.src,
            msg: 'http Error: http code ' + xhr.status
          };
          this.emit(this.tag, info);
        }
      }
    }

    /**
     * xhr onProgress
     */

  }, {
    key: 'onProgress',
    value: function onProgress(e) {
      if (!this.totalLength) {
        this.totalLength = e.total;
        if (e.total !== null && e.total !== 0) {
          this.totalLength = e.total;
        }
      }

      var chunk = e.target.response;
      this.arrivalDataCallback(chunk, this.bytesStart);
      this.bytesStart += chunk.byteLength;
    }

    /**
     * xhr onLoadEnd
     */

  }, {
    key: 'onLoadEnd',
    value: function onLoadEnd(e) {
      this.emit(this.tag, 'video load end');
    }

    /**
     * xhr onXhrError
     */

  }, {
    key: 'onXhrError',
    value: function onXhrError(e) {
      var info = {
        from: this.range.from,
        to: this.range.to,
        url: this.src,
        msg: e.constructor.name + ' ' + e.type
      };
      this.emit(this.tag, info);
    }
  }]);
  return MozChunkLoader;
}(CustEvent);

/**
* 处理range的静态函数
* author songguangyu
* emil 522963130@qq.com
*/

/**
 * Ioloader 处理io的调用器 缓存多余数据
 * @class Ioloader
 * @param  {object} video config
 */

var Ioloader = function (_CustEvent) {
	inherits(Ioloader, _CustEvent);

	function Ioloader(config) {
		classCallCheck$1(this, Ioloader);

		var _this = possibleConstructorReturn(this, (Ioloader.__proto__ || Object.getPrototypeOf(Ioloader)).call(this));

		_this.loader = null;
		_this.config = {};
		Object.assign(_this.config, config);
		_this.bufferSize = 1024 * 1024 * 3; // initial size: 3MB
		_this.cacheBuffer = new ArrayBuffer(_this.bufferSize);
		_this.cacheRemain = 0;
		_this.stashByteStart = 0;
		_this.enableStash = true;
		_this.stashSize = 1024 * 384;
		_this.resumeFrom = 0;
		_this.currentRange = {};
		_this.totalReceive = 0;
		_this.seekPonit = 0;
		_this.timer = null;
		_this.webSocketURLReg = /wss?:\/\/(.+?)\//;
		_this.selectLoader();
		return _this;
	}

	/**
 * 自动选择io处理器
 */


	createClass$1(Ioloader, [{
		key: 'selectLoader',
		value: function selectLoader() {
			var config = this.config;
			var url = this.config.src;

			if (this.webSocketURLReg.test(url)) {
				this.loader = new WebSocketLoader(url, config);
			} else if (FetchLoader.isSupport()) {
				this.loader = new FetchLoader(url, config);
			} else if (MozChunkLoader.isSupport()) {
				this.loader = new MozChunkLoader(url, config);
			} else if (RangeLoader.isSupport()) {
				this.loader = new RangeLoader(url, config);
			}
			this.loader.arrivalDataCallback = this.onLoaderChunkArrival.bind(this);
		}

		/**
  * 数据接收器
  * @param  {arrayBuffer} chunk data
  * @param  {number} chunk byte postion
  */

	}, {
		key: 'onLoaderChunkArrival',
		value: function onLoaderChunkArrival(chunk, byteStart, keyframePoint) {
			chunk.fileStart = byteStart;
			this.arrivalDataCallback(chunk, byteStart, this.seekPonit);
			return;
			if (keyframePoint) {
				this.seekPonit = keyframePoint;
			}
			if (this.arrivalDataCallback) {
				this.totalReceive += chunk.byteLength;

				if (this.cacheRemain === 0 && this.stashByteStart === 0) {
					// This is the first chunk after seek action
					this.stashByteStart = byteStart;
				}
				if (this.cacheRemain + chunk.byteLength <= this.stashSize) {
					// 小于cache大小 则看做数据太小 进行缓存 不进行下发
					var stashArray = new Uint8Array(this.cacheBuffer, 0, this.stashSize);
					stashArray.set(new Uint8Array(chunk), this.cacheRemain);
					this.cacheRemain += chunk.byteLength;
				} else {
					// 大于cache大小的 则把数据放入播放器 溢出数据进行缓存
					var _stashArray = new Uint8Array(this.cacheBuffer, 0, this.bufferSize);
					if (this.cacheRemain > 0) {
						// There're stash datas in buffer
						// dispatch the whole stashBuffer, and stash remain data
						// then append chunk to stashBuffer (stash)
						var buffer = this.cacheBuffer.slice(0, this.cacheRemain);
						var consumed = 0;
						if (this.seekPonit) {
							consumed = this.arrivalDataCallback(buffer, this.stashByteStart, this.seekPonit);
							this.seekPonit = 0;
						} else {
							consumed = this.arrivalDataCallback(buffer, this.stashByteStart);
						}
						// const consumed = this.arrivalDataCallback(buffer, this.stashByteStart, keyframePoint);
						if (consumed < buffer.byteLength) {
							if (consumed > 0) {
								var remainArray = new Uint8Array(buffer, consumed);
								_stashArray.set(remainArray, 0);
								this.cacheRemain = remainArray.byteLength;
								this.stashByteStart += consumed;
							}
						} else {
							this.cacheRemain = 0;
							this.stashByteStart += consumed;
						}
						if (this.cacheRemain + chunk.byteLength > this.bufferSize) {
							this.expandBuffer(this.cacheRemain + chunk.byteLength);
							_stashArray = new Uint8Array(this.cacheBuffer, 0, this.bufferSize);
						}
						_stashArray.set(new Uint8Array(chunk), this.cacheRemain);
						this.cacheRemain += chunk.byteLength;
					} else {
						// stash buffer empty, but chunkSize > stashSize (oh, holy shit)
						// dispatch chunk directly and stash remain data
						// const consumed = this.arrivalDataCallback(chunk, byteStart, keyframePoint);
						var _consumed = 0;
						if (this.seekPonit) {
							_consumed = this.arrivalDataCallback(chunk, byteStart, this.seekPonit);
							this.seekPonit = 0;
						} else {
							_consumed = this.arrivalDataCallback(chunk, byteStart);
						}
						if (_consumed < chunk.byteLength) {
							var remain = chunk.byteLength - _consumed;
							if (remain > this.bufferSize) {
								this.expandBuffer(remain);
								_stashArray = new Uint8Array(this.cacheBuffer, 0, this.bufferSize);
							}
							_stashArray.set(new Uint8Array(chunk, _consumed), 0);
							this.cacheRemain += remain;
							this.stashByteStart = byteStart + _consumed;
						}
					}
				}
			}
		}
		/**
  * 清空缓存buffer
  */

	}, {
		key: 'initCacheBuffer',
		value: function initCacheBuffer() {
			this.cacheBuffer = new ArrayBuffer(this.bufferSize);
		}

		/**
  * 动态扩展buffer存储器大小
  * @param  {number} chunk byte size
  */

	}, {
		key: 'expandBuffer',
		value: function expandBuffer(expectedBytes) {
			var bufferNewSize = this.bufferSize;
			// while (bufferNewSize < expectedBytes) {
			//   bufferNewSize *= 2;
			// }
			if (bufferNewSize < expectedBytes) {
				bufferNewSize = expectedBytes;
			}
			this.cacheBuffer = new ArrayBuffer(bufferNewSize);
			this.bufferSize = bufferNewSize;
		}

		/**
  * 暂停
  */

	}, {
		key: 'pause',
		value: function pause() {
			// if (this.cacheRemain !== 0) {
			//     this.resumeFrom = this.stashByteStart;
			//     this.currentRange.to = this.stashByteStart - 1;
			//   } else {
			//      this.resumeFrom = this.currentRange.to + 1;
			//   }
			console.log('recive pause');
			this.loader.pause();
		}

		/**
  * 打开连接
  */

	}, {
		key: 'open',
		value: function open(StartBytes) {
			if (StartBytes === undefined) {
				StartBytes = 0;
			}
			this.loader.open({ from: StartBytes, to: -1 });
		}

		/**
  * 重新播放
  */

	}, {
		key: 'resume',
		value: function resume() {
			this.paused = false;
			var bytes = this.totalReceive;
			this.open(bytes);
		}

		/**
  * seek
  */

	}, {
		key: 'seek',
		value: function seek(bytes, dropCache, keyframePoint) {
			this.loader.open({ from: bytes, to: -1 }, keyframePoint);
		}

		/**
  * destory
  */

	}, {
		key: 'destroy',
		value: function destroy() {
			this.pause();
			this.cacheBuffer = null;
		}
	}]);
	return Ioloader;
}(CustEvent);

// file:src/log.js
/* 
 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
var Log$2 = function () {
	var start = new Date();
	var LOG_LEVEL_ERROR = 4;
	var LOG_LEVEL_WARNING = 3;
	var LOG_LEVEL_INFO = 2;
	var LOG_LEVEL_DEBUG = 1;
	var log_level = LOG_LEVEL_ERROR;
	var logObject = {
		setLogLevel: function setLogLevel(level) {
			if (level == this.debug) log_level = LOG_LEVEL_DEBUG;else if (level == this.info) log_level = LOG_LEVEL_INFO;else if (level == this.warn) log_level = LOG_LEVEL_WARNING;else if (level == this.error) log_level = LOG_LEVEL_ERROR;else log_level = LOG_LEVEL_ERROR;
		},
		debug: function debug(module, msg) {
			if (console.debug === undefined) {
				console.debug = console.log;
			}
			if (LOG_LEVEL_DEBUG >= log_level) {
				console.debug("[" + Log$2.getDurationString(new Date() - start, 1000) + "]", "[" + module + "]", msg);
			}
		},
		info: function info(module, msg) {
			if (LOG_LEVEL_INFO >= log_level) {
				console.info("[" + Log$2.getDurationString(new Date() - start, 1000) + "]", "[" + module + "]", msg);
			}
		},
		warn: function warn(module, msg) {
			if (LOG_LEVEL_WARNING >= log_level) {
				console.warn("[" + Log$2.getDurationString(new Date() - start, 1000) + "]", "[" + module + "]", msg);
			}
		},
		error: function error(module, msg) {
			if (LOG_LEVEL_ERROR >= log_level) {
				console.error("[" + Log$2.getDurationString(new Date() - start, 1000) + "]", "[" + module + "]", msg);
			}
		}
	};
	return logObject;
}();

/* Helper function to print a duration value in the form H:MM:SS.MS */
Log$2.getDurationString = function (duration, _timescale) {
	var neg;
	/* Helper function to print a number on a fixed number of digits */
	function pad(number, length) {
		var str = '' + number;
		var a = str.split('.');
		while (a[0].length < length) {
			a[0] = '0' + a[0];
		}
		return a.join('.');
	}
	if (duration < 0) {
		neg = true;
		duration = -duration;
	} else {
		neg = false;
	}
	var timescale = _timescale || 1;
	var duration_sec = duration / timescale;
	var hours = Math.floor(duration_sec / 3600);
	duration_sec -= hours * 3600;
	var minutes = Math.floor(duration_sec / 60);
	duration_sec -= minutes * 60;
	var msec = duration_sec * 1000;
	duration_sec = Math.floor(duration_sec);
	msec -= duration_sec * 1000;
	msec = Math.floor(msec);
	return (neg ? "-" : "") + hours + ":" + pad(minutes, 2) + ":" + pad(duration_sec, 2) + "." + pad(msec, 3);
};

/* Helper function to stringify HTML5 TimeRanges objects */
Log$2.printRanges = function (ranges) {
	var length = ranges.length;
	if (length > 0) {
		var str = "";
		for (var i = 0; i < length; i++) {
			if (i > 0) str += ",";
			str += "[" + Log$2.getDurationString(ranges.start(i)) + "," + Log$2.getDurationString(ranges.end(i)) + "]";
		}
		return str;
	} else {
		return "(empty)";
	}
};

if (typeof exports !== 'undefined') {
	exports.Log = Log$2;
}
// file:src/stream.js
var MP4BoxStream = function MP4BoxStream(arrayBuffer) {
	if (arrayBuffer instanceof ArrayBuffer) {
		this.buffer = arrayBuffer;
		this.dataview = new DataView(arrayBuffer);
	} else {
		throw "Needs an array buffer";
	}
	this.position = 0;
};

/*************************************************************************
  Common API between MultiBufferStream and SimpleStream
 *************************************************************************/
MP4BoxStream.prototype.getPosition = function () {
	return this.position;
};

MP4BoxStream.prototype.getEndPosition = function () {
	return this.buffer.byteLength;
};

MP4BoxStream.prototype.getLength = function () {
	return this.buffer.byteLength;
};

MP4BoxStream.prototype.seek = function (pos) {
	var npos = Math.max(0, Math.min(this.buffer.byteLength, pos));
	this.position = isNaN(npos) || !isFinite(npos) ? 0 : npos;
	return true;
};

MP4BoxStream.prototype.isEos = function () {
	return this.getPosition() >= this.getEndPosition();
};

/*************************************************************************
  Read methods, simimar to DataStream but simpler
 *************************************************************************/
MP4BoxStream.prototype.readAnyInt = function (size, signed) {
	var res = 0;
	if (this.position + size <= this.buffer.byteLength) {
		switch (size) {
			case 1:
				if (signed) {
					res = this.dataview.getInt8(this.position);
				} else {
					res = this.dataview.getUint8(this.position);
				}
				break;
			case 2:
				if (signed) {
					res = this.dataview.getInt16(this.position);
				} else {
					res = this.dataview.getUint16(this.position);
				}
				break;
			case 3:
				if (signed) {
					throw "No method for reading signed 24 bits values";
				} else {
					res = this.dataview.getUint8(this.position) << 16;
					res |= this.dataview.getUint8(this.position) << 8;
					res |= this.dataview.getUint8(this.position);
				}
				break;
			case 4:
				if (signed) {
					res = this.dataview.getInt32(this.position);
				} else {
					res = this.dataview.getUint32(this.position);
				}
				break;
			case 8:
				if (signed) {
					throw "No method for reading signed 64 bits values";
				} else {
					res = this.dataview.getUint32(this.position) << 32;
					res |= this.dataview.getUint32(this.position);
				}
				break;
			default:
				throw "readInt method not implemented for size: " + size;
		}
		this.position += size;
		return res;
	} else {
		throw "Not enough bytes in buffer";
	}
};

MP4BoxStream.prototype.readUint8 = function () {
	return this.readAnyInt(1, false);
};

MP4BoxStream.prototype.readUint16 = function () {
	return this.readAnyInt(2, false);
};

MP4BoxStream.prototype.readUint24 = function () {
	return this.readAnyInt(3, false);
};

MP4BoxStream.prototype.readUint32 = function () {
	return this.readAnyInt(4, false);
};

MP4BoxStream.prototype.readUint64 = function () {
	return this.readAnyInt(8, false);
};

MP4BoxStream.prototype.readString = function (length) {
	if (this.position + length <= this.buffer.byteLength) {
		var s = "";
		for (var i = 0; i < length; i++) {
			s += String.fromCharCode(this.readUint8());
		}
		return s;
	} else {
		throw "Not enough bytes in buffer";
	}
};

MP4BoxStream.prototype.readCString = function () {
	var arr = [];
	while (true) {
		var b = this.readUint8();
		if (b !== 0) {
			arr.push(b);
		} else {
			break;
		}
	}
	return String.fromCharCode.apply(null, arr);
};

MP4BoxStream.prototype.readInt8 = function () {
	return this.readAnyInt(1, true);
};

MP4BoxStream.prototype.readInt16 = function () {
	return this.readAnyInt(2, true);
};

MP4BoxStream.prototype.readInt32 = function () {
	return this.readAnyInt(4, true);
};

MP4BoxStream.prototype.readUint8Array = function (length) {
	var arr = new Uint8Array(length);
	for (var i = 0; i < length; i++) {
		arr[i] = this.readUint8();
	}
	return arr;
};

MP4BoxStream.prototype.readInt16Array = function (length) {
	var arr = new Int16Array(length);
	for (var i = 0; i < length; i++) {
		arr[i] = this.readUint16();
	}
	return arr;
};

MP4BoxStream.prototype.readUint32Array = function (length) {
	var arr = new Uint32Array(length);
	for (var i = 0; i < length; i++) {
		arr[i] = this.readUint32();
	}
	return arr;
};

MP4BoxStream.prototype.readInt32Array = function (length) {
	var arr = new Int32Array(length);
	for (var i = 0; i < length; i++) {
		arr[i] = this.readInt32();
	}
	return arr;
};

if (typeof exports !== 'undefined') {
	exports.MP4BoxStream = MP4BoxStream;
} // file:src/DataStream.js
/**
  DataStream reads scalars, arrays and structs of data from an ArrayBuffer.
  It's like a file-like DataView on steroids.

  @param {ArrayBuffer} arrayBuffer ArrayBuffer to read from.
  @param {?Number} byteOffset Offset from arrayBuffer beginning for the DataStream.
  @param {?Boolean} endianness DataStream.BIG_ENDIAN or DataStream.LITTLE_ENDIAN (the default).
  */
var DataStream = function DataStream(arrayBuffer, byteOffset, endianness) {
	this._byteOffset = byteOffset || 0;
	if (arrayBuffer instanceof ArrayBuffer) {
		this.buffer = arrayBuffer;
	} else if ((typeof arrayBuffer === "undefined" ? "undefined" : _typeof$1(arrayBuffer)) == "object") {
		this.dataView = arrayBuffer;
		if (byteOffset) {
			this._byteOffset += byteOffset;
		}
	} else {
		this.buffer = new ArrayBuffer(arrayBuffer || 0);
	}
	this.position = 0;
	this.endianness = endianness == null ? DataStream.LITTLE_ENDIAN : endianness;
};
DataStream.prototype = {};

DataStream.prototype.getPosition = function () {
	return this.position;
};

/**
  Internal function to resize the DataStream buffer when required.
  @param {number} extra Number of bytes to add to the buffer allocation.
  @return {null}
  */
DataStream.prototype._realloc = function (extra) {
	if (!this._dynamicSize) {
		return;
	}
	var req = this._byteOffset + this.position + extra;
	var blen = this._buffer.byteLength;
	if (req <= blen) {
		if (req > this._byteLength) {
			this._byteLength = req;
		}
		return;
	}
	if (blen < 1) {
		blen = 1;
	}
	while (req > blen) {
		blen *= 2;
	}
	var buf = new ArrayBuffer(blen);
	var src = new Uint8Array(this._buffer);
	var dst = new Uint8Array(buf, 0, src.length);
	dst.set(src);
	this.buffer = buf;
	this._byteLength = req;
};

/**
  Internal function to trim the DataStream buffer when required.
  Used for stripping out the extra bytes from the backing buffer when
  the virtual byteLength is smaller than the buffer byteLength (happens after
  growing the buffer with writes and not filling the extra space completely).

  @return {null}
  */
DataStream.prototype._trimAlloc = function () {
	if (this._byteLength == this._buffer.byteLength) {
		return;
	}
	var buf = new ArrayBuffer(this._byteLength);
	var dst = new Uint8Array(buf);
	var src = new Uint8Array(this._buffer, 0, dst.length);
	dst.set(src);
	this.buffer = buf;
};

/**
  Big-endian const to use as default endianness.
  @type {boolean}
  */
DataStream.BIG_ENDIAN = false;

/**
  Little-endian const to use as default endianness.
  @type {boolean}
  */
DataStream.LITTLE_ENDIAN = true;

/**
  Virtual byte length of the DataStream backing buffer.
  Updated to be max of original buffer size and last written size.
  If dynamicSize is false is set to buffer size.
  @type {number}
  */
DataStream.prototype._byteLength = 0;

/**
  Returns the byte length of the DataStream object.
  @type {number}
  */
Object.defineProperty(DataStream.prototype, 'byteLength', { get: function get$$1() {
		return this._byteLength - this._byteOffset;
	} });

/**
  Set/get the backing ArrayBuffer of the DataStream object.
  The setter updates the DataView to point to the new buffer.
  @type {Object}
  */
Object.defineProperty(DataStream.prototype, 'buffer', { get: function get$$1() {
		this._trimAlloc();
		return this._buffer;
	},
	set: function set$$1(v) {
		this._buffer = v;
		this._dataView = new DataView(this._buffer, this._byteOffset);
		this._byteLength = this._buffer.byteLength;
	} });

/**
  Set/get the byteOffset of the DataStream object.
  The setter updates the DataView to point to the new byteOffset.
  @type {number}
  */
Object.defineProperty(DataStream.prototype, 'byteOffset', { get: function get$$1() {
		return this._byteOffset;
	},
	set: function set$$1(v) {
		this._byteOffset = v;
		this._dataView = new DataView(this._buffer, this._byteOffset);
		this._byteLength = this._buffer.byteLength;
	} });

/**
  Set/get the backing DataView of the DataStream object.
  The setter updates the buffer and byteOffset to point to the DataView values.
  @type {Object}
  */
Object.defineProperty(DataStream.prototype, 'dataView', { get: function get$$1() {
		return this._dataView;
	},
	set: function set$$1(v) {
		this._byteOffset = v.byteOffset;
		this._buffer = v.buffer;
		this._dataView = new DataView(this._buffer, this._byteOffset);
		this._byteLength = this._byteOffset + v.byteLength;
	} });

/**
  Sets the DataStream read/write position to given position.
  Clamps between 0 and DataStream length.

  @param {number} pos Position to seek to.
  @return {null}
  */
DataStream.prototype.seek = function (pos) {
	var npos = Math.max(0, Math.min(this.byteLength, pos));
	this.position = isNaN(npos) || !isFinite(npos) ? 0 : npos;
};

/**
  Returns true if the DataStream seek pointer is at the end of buffer and
  there's no more data to read.

  @return {boolean} True if the seek pointer is at the end of the buffer.
  */
DataStream.prototype.isEof = function () {
	return this.position >= this._byteLength;
};

/**
  Maps a Uint8Array into the DataStream buffer.

  Nice for quickly reading in data.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Uint8Array to the DataStream backing buffer.
  */
DataStream.prototype.mapUint8Array = function (length) {
	this._realloc(length * 1);
	var arr = new Uint8Array(this._buffer, this.byteOffset + this.position, length);
	this.position += length * 1;
	return arr;
};

/**
  Reads an Int32Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Int32Array.
 */
DataStream.prototype.readInt32Array = function (length, e) {
	length = length == null ? this.byteLength - this.position / 4 : length;
	var arr = new Int32Array(length);
	DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += arr.byteLength;
	return arr;
};

/**
  Reads an Int16Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Int16Array.
 */
DataStream.prototype.readInt16Array = function (length, e) {
	length = length == null ? this.byteLength - this.position / 2 : length;
	var arr = new Int16Array(length);
	DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += arr.byteLength;
	return arr;
};

/**
  Reads an Int8Array of desired length from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Int8Array.
 */
DataStream.prototype.readInt8Array = function (length) {
	length = length == null ? this.byteLength - this.position : length;
	var arr = new Int8Array(length);
	DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
	this.position += arr.byteLength;
	return arr;
};

/**
  Reads a Uint32Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Uint32Array.
 */
DataStream.prototype.readUint32Array = function (length, e) {
	length = length == null ? this.byteLength - this.position / 4 : length;
	var arr = new Uint32Array(length);
	DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += arr.byteLength;
	return arr;
};

/**
  Reads a Uint16Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Uint16Array.
 */
DataStream.prototype.readUint16Array = function (length, e) {
	length = length == null ? this.byteLength - this.position / 2 : length;
	var arr = new Uint16Array(length);
	DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += arr.byteLength;
	return arr;
};

/**
  Reads a Uint8Array of desired length from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Uint8Array.
 */
DataStream.prototype.readUint8Array = function (length) {
	length = length == null ? this.byteLength - this.position : length;
	var arr = new Uint8Array(length);
	DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
	this.position += arr.byteLength;
	return arr;
};

/**
  Reads a Float64Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Float64Array.
 */
DataStream.prototype.readFloat64Array = function (length, e) {
	length = length == null ? this.byteLength - this.position / 8 : length;
	var arr = new Float64Array(length);
	DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += arr.byteLength;
	return arr;
};

/**
  Reads a Float32Array of desired length and endianness from the DataStream.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} The read Float32Array.
 */
DataStream.prototype.readFloat32Array = function (length, e) {
	length = length == null ? this.byteLength - this.position / 4 : length;
	var arr = new Float32Array(length);
	DataStream.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += arr.byteLength;
	return arr;
};

/**
  Reads a 32-bit int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readInt32 = function (e) {
	var v = this._dataView.getInt32(this.position, e == null ? this.endianness : e);
	this.position += 4;
	return v;
};

/**
  Reads a 16-bit int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readInt16 = function (e) {
	var v = this._dataView.getInt16(this.position, e == null ? this.endianness : e);
	this.position += 2;
	return v;
};

/**
  Reads an 8-bit int from the DataStream.

  @return {number} The read number.
 */
DataStream.prototype.readInt8 = function () {
	var v = this._dataView.getInt8(this.position);
	this.position += 1;
	return v;
};

/**
  Reads a 32-bit unsigned int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readUint32 = function (e) {
	var v = this._dataView.getUint32(this.position, e == null ? this.endianness : e);
	this.position += 4;
	return v;
};

/**
  Reads a 16-bit unsigned int from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readUint16 = function (e) {
	var v = this._dataView.getUint16(this.position, e == null ? this.endianness : e);
	this.position += 2;
	return v;
};

/**
  Reads an 8-bit unsigned int from the DataStream.

  @return {number} The read number.
 */
DataStream.prototype.readUint8 = function () {
	var v = this._dataView.getUint8(this.position);
	this.position += 1;
	return v;
};

/**
  Reads a 32-bit float from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readFloat32 = function (e) {
	var v = this._dataView.getFloat32(this.position, e == null ? this.endianness : e);
	this.position += 4;
	return v;
};

/**
  Reads a 64-bit float from the DataStream with the desired endianness.

  @param {?boolean} e Endianness of the number.
  @return {number} The read number.
 */
DataStream.prototype.readFloat64 = function (e) {
	var v = this._dataView.getFloat64(this.position, e == null ? this.endianness : e);
	this.position += 8;
	return v;
};

/**
  Native endianness. Either DataStream.BIG_ENDIAN or DataStream.LITTLE_ENDIAN
  depending on the platform endianness.

  @type {boolean}
 */
DataStream.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0;

/**
  Copies byteLength bytes from the src buffer at srcOffset to the
  dst buffer at dstOffset.

  @param {Object} dst Destination ArrayBuffer to write to.
  @param {number} dstOffset Offset to the destination ArrayBuffer.
  @param {Object} src Source ArrayBuffer to read from.
  @param {number} srcOffset Offset to the source ArrayBuffer.
  @param {number} byteLength Number of bytes to copy.
 */
DataStream.memcpy = function (dst, dstOffset, src, srcOffset, byteLength) {
	var dstU8 = new Uint8Array(dst, dstOffset, byteLength);
	var srcU8 = new Uint8Array(src, srcOffset, byteLength);
	dstU8.set(srcU8);
};

/**
  Converts array to native endianness in-place.

  @param {Object} array Typed array to convert.
  @param {boolean} arrayIsLittleEndian True if the data in the array is
                                       little-endian. Set false for big-endian.
  @return {Object} The converted typed array.
 */
DataStream.arrayToNative = function (array, arrayIsLittleEndian) {
	if (arrayIsLittleEndian == this.endianness) {
		return array;
	} else {
		return this.flipArrayEndianness(array);
	}
};

/**
  Converts native endianness array to desired endianness in-place.

  @param {Object} array Typed array to convert.
  @param {boolean} littleEndian True if the converted array should be
                                little-endian. Set false for big-endian.
  @return {Object} The converted typed array.
 */
DataStream.nativeToEndian = function (array, littleEndian) {
	if (this.endianness == littleEndian) {
		return array;
	} else {
		return this.flipArrayEndianness(array);
	}
};

/**
  Flips typed array endianness in-place.

  @param {Object} array Typed array to flip.
  @return {Object} The converted typed array.
 */
DataStream.flipArrayEndianness = function (array) {
	var u8 = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
	for (var i = 0; i < array.byteLength; i += array.BYTES_PER_ELEMENT) {
		for (var j = i + array.BYTES_PER_ELEMENT - 1, k = i; j > k; j--, k++) {
			var tmp = u8[k];
			u8[k] = u8[j];
			u8[j] = tmp;
		}
	}
	return array;
};

/**
  Seek position where DataStream#readStruct ran into a problem.
  Useful for debugging struct parsing.

  @type {number}
 */
DataStream.prototype.failurePosition = 0;

String.fromCharCodeUint8 = function (uint8arr) {
	var arr = [];
	for (var i = 0; i < uint8arr.length; i++) {
		arr[i] = uint8arr[i];
	}
	return String.fromCharCode.apply(null, arr);
};
/**
  Read a string of desired length and encoding from the DataStream.

  @param {number} length The length of the string to read in bytes.
  @param {?string} encoding The encoding of the string data in the DataStream.
                            Defaults to ASCII.
  @return {string} The read string.
 */
DataStream.prototype.readString = function (length, encoding) {
	if (encoding == null || encoding == "ASCII") {
		return String.fromCharCodeUint8.apply(null, [this.mapUint8Array(length == null ? this.byteLength - this.position : length)]);
	} else {
		return new TextDecoder(encoding).decode(this.mapUint8Array(length));
	}
};

/**
  Read null-terminated string of desired length from the DataStream. Truncates
  the returned string so that the null byte is not a part of it.

  @param {?number} length The length of the string to read.
  @return {string} The read string.
 */
DataStream.prototype.readCString = function (length) {
	var blen = this.byteLength - this.position;
	var u8 = new Uint8Array(this._buffer, this._byteOffset + this.position);
	var len = blen;
	if (length != null) {
		len = Math.min(length, blen);
	}
	for (var i = 0; i < len && u8[i] !== 0; i++) {} // find first zero byte
	var s = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(i)]);
	if (length != null) {
		this.position += len - i;
	} else if (i != blen) {
		this.position += 1; // trailing zero if not at end of buffer
	}
	return s;
};

/* 
   TODO: fix endianness for 24/64-bit fields
   TODO: check range/support for 64-bits numbers in JavaScript
*/
var MAX_SIZE = Math.pow(2, 32);

DataStream.prototype.readUint64 = function () {
	return this.readUint32() * MAX_SIZE + this.readUint32();
};

DataStream.prototype.readUint24 = function () {
	return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8();
};

if (typeof exports !== 'undefined') {
	exports.DataStream = DataStream;
}
// file:src/DataStream-write.js
/**
  Saves the DataStream contents to the given filename.
  Uses Chrome's anchor download property to initiate download.
 
  @param {string} filename Filename to save as.
  @return {null}
  */
DataStream.prototype.save = function (filename) {
	var blob = new Blob([this.buffer]);
	var URL = window.webkitURL || window.URL;
	if (URL && URL.createObjectURL) {
		var url = URL.createObjectURL(blob);
		var a = document.createElement('a');
		a.setAttribute('href', url);
		a.setAttribute('download', filename);
		a.click();
		URL.revokeObjectURL(url);
	} else {
		throw "DataStream.save: Can't create object URL.";
	}
};

/**
  Whether to extend DataStream buffer when trying to write beyond its size.
  If set, the buffer is reallocated to twice its current size until the
  requested write fits the buffer.
  @type {boolean}
  */
DataStream.prototype._dynamicSize = true;
Object.defineProperty(DataStream.prototype, 'dynamicSize', { get: function get$$1() {
		return this._dynamicSize;
	},
	set: function set$$1(v) {
		if (!v) {
			this._trimAlloc();
		}
		this._dynamicSize = v;
	} });

/**
  Internal function to trim the DataStream buffer when required.
  Used for stripping out the first bytes when not needed anymore.

  @return {null}
  */
DataStream.prototype.shift = function (offset) {
	var buf = new ArrayBuffer(this._byteLength - offset);
	var dst = new Uint8Array(buf);
	var src = new Uint8Array(this._buffer, offset, dst.length);
	dst.set(src);
	this.buffer = buf;
	this.position -= offset;
};

/**
  Writes an Int32Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeInt32Array = function (arr, e) {
	this._realloc(arr.length * 4);
	if (arr instanceof Int32Array && this.byteOffset + this.position % arr.BYTES_PER_ELEMENT === 0) {
		DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, 0, arr.byteLength);
		this.mapInt32Array(arr.length, e);
	} else {
		for (var i = 0; i < arr.length; i++) {
			this.writeInt32(arr[i], e);
		}
	}
};

/**
  Writes an Int16Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeInt16Array = function (arr, e) {
	this._realloc(arr.length * 2);
	if (arr instanceof Int16Array && this.byteOffset + this.position % arr.BYTES_PER_ELEMENT === 0) {
		DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, 0, arr.byteLength);
		this.mapInt16Array(arr.length, e);
	} else {
		for (var i = 0; i < arr.length; i++) {
			this.writeInt16(arr[i], e);
		}
	}
};

/**
  Writes an Int8Array to the DataStream.

  @param {Object} arr The array to write.
 */
DataStream.prototype.writeInt8Array = function (arr) {
	this._realloc(arr.length * 1);
	if (arr instanceof Int8Array && this.byteOffset + this.position % arr.BYTES_PER_ELEMENT === 0) {
		DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, 0, arr.byteLength);
		this.mapInt8Array(arr.length);
	} else {
		for (var i = 0; i < arr.length; i++) {
			this.writeInt8(arr[i]);
		}
	}
};

/**
  Writes a Uint32Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeUint32Array = function (arr, e) {
	this._realloc(arr.length * 4);
	if (arr instanceof Uint32Array && this.byteOffset + this.position % arr.BYTES_PER_ELEMENT === 0) {
		DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, 0, arr.byteLength);
		this.mapUint32Array(arr.length, e);
	} else {
		for (var i = 0; i < arr.length; i++) {
			this.writeUint32(arr[i], e);
		}
	}
};

/**
  Writes a Uint16Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeUint16Array = function (arr, e) {
	this._realloc(arr.length * 2);
	if (arr instanceof Uint16Array && this.byteOffset + this.position % arr.BYTES_PER_ELEMENT === 0) {
		DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, 0, arr.byteLength);
		this.mapUint16Array(arr.length, e);
	} else {
		for (var i = 0; i < arr.length; i++) {
			this.writeUint16(arr[i], e);
		}
	}
};

/**
  Writes a Uint8Array to the DataStream.

  @param {Object} arr The array to write.
 */
DataStream.prototype.writeUint8Array = function (arr) {
	this._realloc(arr.length * 1);
	if (arr instanceof Uint8Array && this.byteOffset + this.position % arr.BYTES_PER_ELEMENT === 0) {
		DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, 0, arr.byteLength);
		this.mapUint8Array(arr.length);
	} else {
		for (var i = 0; i < arr.length; i++) {
			this.writeUint8(arr[i]);
		}
	}
};

/**
  Writes a Float64Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeFloat64Array = function (arr, e) {
	this._realloc(arr.length * 8);
	if (arr instanceof Float64Array && this.byteOffset + this.position % arr.BYTES_PER_ELEMENT === 0) {
		DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, 0, arr.byteLength);
		this.mapFloat64Array(arr.length, e);
	} else {
		for (var i = 0; i < arr.length; i++) {
			this.writeFloat64(arr[i], e);
		}
	}
};

/**
  Writes a Float32Array of specified endianness to the DataStream.

  @param {Object} arr The array to write.
  @param {?boolean} e Endianness of the data to write.
 */
DataStream.prototype.writeFloat32Array = function (arr, e) {
	this._realloc(arr.length * 4);
	if (arr instanceof Float32Array && this.byteOffset + this.position % arr.BYTES_PER_ELEMENT === 0) {
		DataStream.memcpy(this._buffer, this.byteOffset + this.position, arr.buffer, 0, arr.byteLength);
		this.mapFloat32Array(arr.length, e);
	} else {
		for (var i = 0; i < arr.length; i++) {
			this.writeFloat32(arr[i], e);
		}
	}
};

/**
  Writes a 32-bit int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeInt32 = function (v, e) {
	this._realloc(4);
	this._dataView.setInt32(this.position, v, e == null ? this.endianness : e);
	this.position += 4;
};

/**
  Writes a 16-bit int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeInt16 = function (v, e) {
	this._realloc(2);
	this._dataView.setInt16(this.position, v, e == null ? this.endianness : e);
	this.position += 2;
};

/**
  Writes an 8-bit int to the DataStream.

  @param {number} v Number to write.
 */
DataStream.prototype.writeInt8 = function (v) {
	this._realloc(1);
	this._dataView.setInt8(this.position, v);
	this.position += 1;
};

/**
  Writes a 32-bit unsigned int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeUint32 = function (v, e) {
	this._realloc(4);
	this._dataView.setUint32(this.position, v, e == null ? this.endianness : e);
	this.position += 4;
};

/**
  Writes a 16-bit unsigned int to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeUint16 = function (v, e) {
	this._realloc(2);
	this._dataView.setUint16(this.position, v, e == null ? this.endianness : e);
	this.position += 2;
};

/**
  Writes an 8-bit unsigned  int to the DataStream.

  @param {number} v Number to write.
 */
DataStream.prototype.writeUint8 = function (v) {
	this._realloc(1);
	this._dataView.setUint8(this.position, v);
	this.position += 1;
};

/**
  Writes a 32-bit float to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeFloat32 = function (v, e) {
	this._realloc(4);
	this._dataView.setFloat32(this.position, v, e == null ? this.endianness : e);
	this.position += 4;
};

/**
  Writes a 64-bit float to the DataStream with the desired endianness.

  @param {number} v Number to write.
  @param {?boolean} e Endianness of the number.
 */
DataStream.prototype.writeFloat64 = function (v, e) {
	this._realloc(8);
	this._dataView.setFloat64(this.position, v, e == null ? this.endianness : e);
	this.position += 8;
};

/**
  Write a UCS-2 string of desired endianness to the DataStream. The
  lengthOverride argument lets you define the number of characters to write.
  If the string is shorter than lengthOverride, the extra space is padded with
  zeroes.

  @param {string} str The string to write.
  @param {?boolean} endianness The endianness to use for the written string data.
  @param {?number} lengthOverride The number of characters to write.
 */
DataStream.prototype.writeUCS2String = function (str, endianness, lengthOverride) {
	if (lengthOverride == null) {
		lengthOverride = str.length;
	}
	for (var i = 0; i < str.length && i < lengthOverride; i++) {
		this.writeUint16(str.charCodeAt(i), endianness);
	}
	for (; i < lengthOverride; i++) {
		this.writeUint16(0);
	}
};

/**
  Writes a string of desired length and encoding to the DataStream.

  @param {string} s The string to write.
  @param {?string} encoding The encoding for the written string data.
                            Defaults to ASCII.
  @param {?number} length The number of characters to write.
 */
DataStream.prototype.writeString = function (s, encoding, length) {
	var i = 0;
	if (encoding == null || encoding == "ASCII") {
		if (length != null) {
			var len = Math.min(s.length, length);
			for (i = 0; i < len; i++) {
				this.writeUint8(s.charCodeAt(i));
			}
			for (; i < length; i++) {
				this.writeUint8(0);
			}
		} else {
			for (i = 0; i < s.length; i++) {
				this.writeUint8(s.charCodeAt(i));
			}
		}
	} else {
		this.writeUint8Array(new TextEncoder(encoding).encode(s.substring(0, length)));
	}
};

/**
  Writes a null-terminated string to DataStream and zero-pads it to length
  bytes. If length is not given, writes the string followed by a zero.
  If string is longer than length, the written part of the string does not have
  a trailing zero.

  @param {string} s The string to write.
  @param {?number} length The number of characters to write.
 */
DataStream.prototype.writeCString = function (s, length) {
	var i = 0;
	if (length != null) {
		var len = Math.min(s.length, length);
		for (i = 0; i < len; i++) {
			this.writeUint8(s.charCodeAt(i));
		}
		for (; i < length; i++) {
			this.writeUint8(0);
		}
	} else {
		for (i = 0; i < s.length; i++) {
			this.writeUint8(s.charCodeAt(i));
		}
		this.writeUint8(0);
	}
};

/**
  Writes a struct to the DataStream. Takes a structDefinition that gives the
  types and a struct object that gives the values. Refer to readStruct for the
  structure of structDefinition.

  @param {Object} structDefinition Type definition of the struct.
  @param {Object} struct The struct data object.
  */
DataStream.prototype.writeStruct = function (structDefinition, struct) {
	for (var i = 0; i < structDefinition.length; i += 2) {
		var t = structDefinition[i + 1];
		this.writeType(t, struct[structDefinition[i]], struct);
	}
};

/**
  Writes object v of type t to the DataStream.

  @param {Object} t Type of data to write.
  @param {Object} v Value of data to write.
  @param {Object} struct Struct to pass to write callback functions.
  */
DataStream.prototype.writeType = function (t, v, struct) {
	var tp;
	if (typeof t == "function") {
		return t(this, v);
	} else if ((typeof t === "undefined" ? "undefined" : _typeof$1(t)) == "object" && !(t instanceof Array)) {
		return t.set(this, v, struct);
	}
	var lengthOverride = null;
	var charset = "ASCII";
	var pos = this.position;
	if (typeof t == 'string' && /:/.test(t)) {
		tp = t.split(":");
		t = tp[0];
		lengthOverride = parseInt(tp[1]);
	}
	if (typeof t == 'string' && /,/.test(t)) {
		tp = t.split(",");
		t = tp[0];
		charset = parseInt(tp[1]);
	}

	switch (t) {
		case 'uint8':
			this.writeUint8(v);
			break;
		case 'int8':
			this.writeInt8(v);
			break;

		case 'uint16':
			this.writeUint16(v, this.endianness);
			break;
		case 'int16':
			this.writeInt16(v, this.endianness);
			break;
		case 'uint32':
			this.writeUint32(v, this.endianness);
			break;
		case 'int32':
			this.writeInt32(v, this.endianness);
			break;
		case 'float32':
			this.writeFloat32(v, this.endianness);
			break;
		case 'float64':
			this.writeFloat64(v, this.endianness);
			break;

		case 'uint16be':
			this.writeUint16(v, DataStream.BIG_ENDIAN);
			break;
		case 'int16be':
			this.writeInt16(v, DataStream.BIG_ENDIAN);
			break;
		case 'uint32be':
			this.writeUint32(v, DataStream.BIG_ENDIAN);
			break;
		case 'int32be':
			this.writeInt32(v, DataStream.BIG_ENDIAN);
			break;
		case 'float32be':
			this.writeFloat32(v, DataStream.BIG_ENDIAN);
			break;
		case 'float64be':
			this.writeFloat64(v, DataStream.BIG_ENDIAN);
			break;

		case 'uint16le':
			this.writeUint16(v, DataStream.LITTLE_ENDIAN);
			break;
		case 'int16le':
			this.writeInt16(v, DataStream.LITTLE_ENDIAN);
			break;
		case 'uint32le':
			this.writeUint32(v, DataStream.LITTLE_ENDIAN);
			break;
		case 'int32le':
			this.writeInt32(v, DataStream.LITTLE_ENDIAN);
			break;
		case 'float32le':
			this.writeFloat32(v, DataStream.LITTLE_ENDIAN);
			break;
		case 'float64le':
			this.writeFloat64(v, DataStream.LITTLE_ENDIAN);
			break;

		case 'cstring':
			this.writeCString(v, lengthOverride);
			break;

		case 'string':
			this.writeString(v, charset, lengthOverride);
			break;

		case 'u16string':
			this.writeUCS2String(v, this.endianness, lengthOverride);
			break;

		case 'u16stringle':
			this.writeUCS2String(v, DataStream.LITTLE_ENDIAN, lengthOverride);
			break;

		case 'u16stringbe':
			this.writeUCS2String(v, DataStream.BIG_ENDIAN, lengthOverride);
			break;

		default:
			if (t.length == 3) {
				var ta = t[1];
				for (var i = 0; i < v.length; i++) {
					this.writeType(ta, v[i]);
				}
				break;
			} else {
				this.writeStruct(t, v);
				break;
			}
	}
	if (lengthOverride != null) {
		this.position = pos;
		this._realloc(lengthOverride);
		this.position = pos + lengthOverride;
	}
};

DataStream.prototype.writeUint64 = function (v) {
	var h = Math.floor(v / MAX_SIZE);
	this.writeUint32(h);
	this.writeUint32(v & 0xFFFFFFFF);
};

DataStream.prototype.writeUint24 = function (v) {
	this.writeUint8((v & 0x00FF0000) >> 16);
	this.writeUint8((v & 0x0000FF00) >> 8);
	this.writeUint8(v & 0x000000FF);
};

DataStream.prototype.adjustUint32 = function (position, value) {
	var pos = this.position;
	this.seek(position);
	this.writeUint32(value);
	this.seek(pos);
};
// file:src/DataStream-map.js
/**
  Maps an Int32Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Int32Array to the DataStream backing buffer.
  */
DataStream.prototype.mapInt32Array = function (length, e) {
	this._realloc(length * 4);
	var arr = new Int32Array(this._buffer, this.byteOffset + this.position, length);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += length * 4;
	return arr;
};

/**
  Maps an Int16Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Int16Array to the DataStream backing buffer.
  */
DataStream.prototype.mapInt16Array = function (length, e) {
	this._realloc(length * 2);
	var arr = new Int16Array(this._buffer, this.byteOffset + this.position, length);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += length * 2;
	return arr;
};

/**
  Maps an Int8Array into the DataStream buffer.

  Nice for quickly reading in data.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Int8Array to the DataStream backing buffer.
  */
DataStream.prototype.mapInt8Array = function (length) {
	this._realloc(length * 1);
	var arr = new Int8Array(this._buffer, this.byteOffset + this.position, length);
	this.position += length * 1;
	return arr;
};

/**
  Maps a Uint32Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Uint32Array to the DataStream backing buffer.
  */
DataStream.prototype.mapUint32Array = function (length, e) {
	this._realloc(length * 4);
	var arr = new Uint32Array(this._buffer, this.byteOffset + this.position, length);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += length * 4;
	return arr;
};

/**
  Maps a Uint16Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Uint16Array to the DataStream backing buffer.
  */
DataStream.prototype.mapUint16Array = function (length, e) {
	this._realloc(length * 2);
	var arr = new Uint16Array(this._buffer, this.byteOffset + this.position, length);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += length * 2;
	return arr;
};

/**
  Maps a Float64Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Float64Array to the DataStream backing buffer.
  */
DataStream.prototype.mapFloat64Array = function (length, e) {
	this._realloc(length * 8);
	var arr = new Float64Array(this._buffer, this.byteOffset + this.position, length);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += length * 8;
	return arr;
};

/**
  Maps a Float32Array into the DataStream buffer, swizzling it to native
  endianness in-place. The current offset from the start of the buffer needs to
  be a multiple of element size, just like with typed array views.

  Nice for quickly reading in data. Warning: potentially modifies the buffer
  contents.

  @param {number} length Number of elements to map.
  @param {?boolean} e Endianness of the data to read.
  @return {Object} Float32Array to the DataStream backing buffer.
  */
DataStream.prototype.mapFloat32Array = function (length, e) {
	this._realloc(length * 4);
	var arr = new Float32Array(this._buffer, this.byteOffset + this.position, length);
	DataStream.arrayToNative(arr, e == null ? this.endianness : e);
	this.position += length * 4;
	return arr;
};
// file:src/buffer.js
/**
 * MultiBufferStream is a class that acts as a SimpleStream for parsing 
 * It holds several, possibly non-contiguous ArrayBuffer objects, each with a fileStart property 
 * containing the offset for the buffer data in an original/virtual file 
 *
 * It inherits also from DataStream for all read/write/alloc operations
 */

/**
 * Constructor
 */
var MultiBufferStream = function MultiBufferStream(buffer) {
	/* List of ArrayBuffers, with a fileStart property, sorted in fileStart order and non overlapping */
	this.buffers = [];
	this.bufferIndex = -1;
	if (buffer) {
		this.insertBuffer(buffer);
		this.bufferIndex = 0;
	}
};
MultiBufferStream.prototype = new DataStream(new ArrayBuffer(), 0, DataStream.BIG_ENDIAN);

/************************************************************************************
  Methods for the managnement of the buffers (insertion, removal, concatenation, ...)
 ***********************************************************************************/

MultiBufferStream.prototype.initialized = function () {
	var firstBuffer;
	if (this.bufferIndex > -1) {
		return true;
	} else if (this.buffers.length > 0) {
		firstBuffer = this.buffers[0];
		if (firstBuffer.fileStart === 0) {
			this.buffer = firstBuffer;
			this.bufferIndex = 0;
			Log$2.debug("MultiBufferStream", "Stream ready for parsing");
			return true;
		} else {
			Log$2.warn("MultiBufferStream", "The first buffer should have a fileStart of 0");
			this.logBufferLevel();
			return false;
		}
	} else {
		Log$2.warn("MultiBufferStream", "No buffer to start parsing from");
		this.logBufferLevel();
		return false;
	}
};

/**
 * helper functions to concatenate two ArrayBuffer objects
 * @param  {ArrayBuffer} buffer1 
 * @param  {ArrayBuffer} buffer2 
 * @return {ArrayBuffer} the concatenation of buffer1 and buffer2 in that order
 */
ArrayBuffer.concat = function (buffer1, buffer2) {
	Log$2.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (buffer1.byteLength + buffer2.byteLength));
	var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
	tmp.set(new Uint8Array(buffer1), 0);
	tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
	return tmp.buffer;
};

/**
 * Reduces the size of a given buffer, but taking the part between offset and offset+newlength
 * @param  {ArrayBuffer} buffer    
 * @param  {Number}      offset    the start of new buffer
 * @param  {Number}      newLength the length of the new buffer
 * @return {ArrayBuffer}           the new buffer
 */
MultiBufferStream.prototype.reduceBuffer = function (buffer, offset, newLength) {
	var smallB;
	smallB = new Uint8Array(newLength);
	smallB.set(new Uint8Array(buffer, offset, newLength));
	smallB.buffer.fileStart = buffer.fileStart + offset;
	smallB.buffer.usedBytes = 0;
	return smallB.buffer;
};

/**
 * Inserts the new buffer in the sorted list of buffers,
 *  making sure, it is not overlapping with existing ones (possibly reducing its size).
 *  if the new buffer overrides/replaces the 0-th buffer (for instance because it is bigger), 
 *  updates the DataStream buffer for parsing 
*/
MultiBufferStream.prototype.insertBuffer = function (ab) {
	var to_add = true;
	/* TODO: improve insertion if many buffers */
	for (var i = 0; i < this.buffers.length; i++) {
		var b = this.buffers[i];
		if (ab.fileStart <= b.fileStart) {
			/* the insertion position is found */
			if (ab.fileStart === b.fileStart) {
				/* The new buffer overlaps with an existing buffer */
				if (ab.byteLength > b.byteLength) {
					/* the new buffer is bigger than the existing one
        remove the existing buffer and try again to insert 
        the new buffer to check overlap with the next ones */
					this.buffers.splice(i, 1);
					i--;
					continue;
				} else {
					/* the new buffer is smaller than the existing one, just drop it */
					Log$2.warn("MultiBufferStream", "Buffer (fileStart: " + ab.fileStart + " - Length: " + ab.byteLength + ") already appended, ignoring");
				}
			} else {
				/* The beginning of the new buffer is not overlapping with an existing buffer
       let's check the end of it */
				if (ab.fileStart + ab.byteLength <= b.fileStart) {
					/* no overlap, we can add it as is */
				} else {
					/* There is some overlap, cut the new buffer short, and add it*/
					ab = this.reduceBuffer(ab, 0, b.fileStart - ab.fileStart);
				}
				Log$2.debug("MultiBufferStream", "Appending new buffer (fileStart: " + ab.fileStart + " - Length: " + ab.byteLength + ")");
				this.buffers.splice(i, 0, ab);
				/* if this new buffer is inserted in the first place in the list of the buffer, 
       and the DataStream is initialized, make it the buffer used for parsing */
				if (i === 0) {
					this.buffer = ab;
				}
			}
			to_add = false;
			break;
		} else if (ab.fileStart < b.fileStart + b.byteLength) {
			/* the new buffer overlaps its beginning with the end of the current buffer */
			var offset = b.fileStart + b.byteLength - ab.fileStart;
			var newLength = ab.byteLength - offset;
			if (newLength > 0) {
				/* the new buffer is bigger than the current overlap, drop the overlapping part and try again inserting the remaining buffer */
				ab = this.reduceBuffer(ab, offset, newLength);
			} else {
				/* the content of the new buffer is entirely contained in the existing buffer, drop it entirely */
				to_add = false;
				break;
			}
		}
	}
	/* if the buffer has not been added, we can add it at the end */
	if (to_add) {
		Log$2.debug("MultiBufferStream", "Appending new buffer (fileStart: " + ab.fileStart + " - Length: " + ab.byteLength + ")");
		this.buffers.push(ab);
		/* if this new buffer is inserted in the first place in the list of the buffer, 
     and the DataStream is initialized, make it the buffer used for parsing */
		if (i === 0) {
			this.buffer = ab;
		}
	}
};

/**
 * Displays the status of the buffers (number and used bytes)
 * @param  {Object} info callback method for display
 */
MultiBufferStream.prototype.logBufferLevel = function (info) {
	var i;
	var buffer;
	var used, total;
	var ranges = [];
	var range;
	var bufferedString = "";
	used = 0;
	total = 0;
	for (i = 0; i < this.buffers.length; i++) {
		buffer = this.buffers[i];
		if (i === 0) {
			range = {};
			ranges.push(range);
			range.start = buffer.fileStart;
			range.end = buffer.fileStart + buffer.byteLength;
			bufferedString += "[" + range.start + "-";
		} else if (range.end === buffer.fileStart) {
			range.end = buffer.fileStart + buffer.byteLength;
		} else {
			range = {};
			range.start = buffer.fileStart;
			bufferedString += ranges[ranges.length - 1].end - 1 + "], [" + range.start + "-";
			range.end = buffer.fileStart + buffer.byteLength;
			ranges.push(range);
		}
		used += buffer.usedBytes;
		total += buffer.byteLength;
	}
	if (ranges.length > 0) {
		bufferedString += range.end - 1 + "]";
	}
	var log = info ? Log$2.info : Log$2.debug;
	if (this.buffers.length === 0) {
		log("MultiBufferStream", "No more buffer in memory");
	} else {
		log("MultiBufferStream", "" + this.buffers.length + " stored buffer(s) (" + used + "/" + total + " bytes): " + bufferedString);
	}
};

MultiBufferStream.prototype.cleanBuffers = function () {
	var i;
	var buffer;
	for (i = 0; i < this.buffers.length; i++) {
		buffer = this.buffers[i];
		if (buffer.usedBytes === buffer.byteLength) {
			Log$2.debug("MultiBufferStream", "Removing buffer #" + i);
			this.buffers.splice(i, 1);
			i--;
		}
	}
};

MultiBufferStream.prototype.mergeNextBuffer = function () {
	var next_buffer;
	if (this.bufferIndex + 1 < this.buffers.length) {
		next_buffer = this.buffers[this.bufferIndex + 1];
		if (next_buffer.fileStart === this.buffer.fileStart + this.buffer.byteLength) {
			var oldLength = this.buffer.byteLength;
			var oldUsedBytes = this.buffer.usedBytes;
			var oldFileStart = this.buffer.fileStart;
			this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, next_buffer);
			this.buffer = this.buffers[this.bufferIndex];
			this.buffers.splice(this.bufferIndex + 1, 1);
			this.buffer.usedBytes = oldUsedBytes; /* TODO: should it be += ? */
			this.buffer.fileStart = oldFileStart;
			Log$2.debug("ISOFile", "Concatenating buffer for box parsing (length: " + oldLength + "->" + this.buffer.byteLength + ")");
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};

/*************************************************************************
  Seek-related functions
 *************************************************************************/

/**
 * Finds the buffer that holds the given file position
 * @param  {Boolean} fromStart    indicates if the search should start from the current buffer (false) 
 *                                or from the first buffer (true)
 * @param  {Number}  filePosition position in the file to seek to
 * @param  {Boolean} markAsUsed   indicates if the bytes in between the current position and the seek position 
 *                                should be marked as used for garbage collection
 * @return {Number}               the index of the buffer holding the seeked file position, -1 if not found.
 */
MultiBufferStream.prototype.findPosition = function (fromStart, filePosition, markAsUsed) {
	var i;
	var abuffer = null;
	var index = -1;

	/* find the buffer with the largest position smaller than the given position */
	if (fromStart === true) {
		/* the reposition can be in the past, we need to check from the beginning of the list of buffers */
		i = 0;
	} else {
		i = this.bufferIndex;
	}

	while (i < this.buffers.length) {
		abuffer = this.buffers[i];
		if (abuffer.fileStart <= filePosition) {
			index = i;
			if (markAsUsed) {
				if (abuffer.fileStart + abuffer.byteLength <= filePosition) {
					abuffer.usedBytes = abuffer.byteLength;
				} else {
					abuffer.usedBytes = filePosition - abuffer.fileStart;
				}
				this.logBufferLevel();
			}
		} else {
			break;
		}
		i++;
	}

	if (index !== -1) {
		abuffer = this.buffers[index];
		if (abuffer.fileStart + abuffer.byteLength >= filePosition) {
			Log$2.debug("MultiBufferStream", "Found position in existing buffer #" + index);
			return index;
		} else {
			return -1;
		}
	} else {
		return -1;
	}
};

/**
 * Finds the largest file position contained in a buffer or in the next buffers if they are contiguous (no gap)
 * starting from the given buffer index or from the current buffer if the index is not given
 *
 * @param  {Number} inputindex Index of the buffer to start from
 * @return {Number}            The largest file position found in the buffers
 */
MultiBufferStream.prototype.findEndContiguousBuf = function (inputindex) {
	var i;
	var currentBuf;
	var nextBuf;
	var index = inputindex !== undefined ? inputindex : this.bufferIndex;
	currentBuf = this.buffers[index];
	/* find the end of the contiguous range of data */
	if (this.buffers.length > index + 1) {
		for (i = index + 1; i < this.buffers.length; i++) {
			nextBuf = this.buffers[i];
			if (nextBuf.fileStart === currentBuf.fileStart + currentBuf.byteLength) {
				currentBuf = nextBuf;
			} else {
				break;
			}
		}
	}
	/* return the position of last byte in the file that we have */
	return currentBuf.fileStart + currentBuf.byteLength;
};

/**
 * Returns the largest file position contained in the buffers, larger than the given position
 * @param  {Number} pos the file position to start from
 * @return {Number}     the largest position in the current buffer or in the buffer and the next contiguous 
 *                      buffer that holds the given position
 */
MultiBufferStream.prototype.getEndFilePositionAfter = function (pos) {
	var index = this.findPosition(true, pos, false);
	if (index !== -1) {
		return this.findEndContiguousBuf(index);
	} else {
		return pos;
	}
};

/*************************************************************************
  Garbage collection related functions
 *************************************************************************/

/**
 * Marks a given number of bytes as used in the current buffer for garbage collection
 * @param {Number} nbBytes 
 */
MultiBufferStream.prototype.addUsedBytes = function (nbBytes) {
	this.buffer.usedBytes += nbBytes;
	this.logBufferLevel();
};

/**
 * Marks the entire current buffer as used, ready for garbage collection
 */
MultiBufferStream.prototype.setAllUsedBytes = function () {
	this.buffer.usedBytes = this.buffer.byteLength;
	this.logBufferLevel();
};

/*************************************************************************
  Common API between MultiBufferStream and SimpleStream
 *************************************************************************/

/**
 * Tries to seek to a given file position
 * if possible, repositions the parsing from there and returns true 
 * if not possible, does not change anything and returns false 
 * @param  {Number}  filePosition position in the file to seek to
 * @param  {Boolean} fromStart    indicates if the search should start from the current buffer (false) 
 *                                or from the first buffer (true)
 * @param  {Boolean} markAsUsed   indicates if the bytes in between the current position and the seek position 
 *                                should be marked as used for garbage collection
 * @return {Boolean}              true if the seek succeeded, false otherwise
 */
MultiBufferStream.prototype.seek = function (filePosition, fromStart, markAsUsed) {
	var index;
	index = this.findPosition(fromStart, filePosition, markAsUsed);
	if (index !== -1) {
		this.buffer = this.buffers[index];
		this.bufferIndex = index;
		this.position = filePosition - this.buffer.fileStart;
		Log$2.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position);
		return true;
	} else {
		Log$2.debug("MultiBufferStream", "Position " + filePosition + " not found in buffered data");
		return false;
	}
};

/**
 * Returns the current position in the file
 * @return {Number} the position in the file
 */
MultiBufferStream.prototype.getPosition = function () {
	if (this.bufferIndex === -1 || this.buffers[this.bufferIndex] === null) {
		throw "Error accessing position in the MultiBufferStream";
	}
	return this.buffers[this.bufferIndex].fileStart + this.position;
};

/**
 * Returns the length of the current buffer
 * @return {Number} the length of the current buffer
 */
MultiBufferStream.prototype.getLength = function () {
	return this.byteLength;
};

MultiBufferStream.prototype.getEndPosition = function () {
	if (this.bufferIndex === -1 || this.buffers[this.bufferIndex] === null) {
		throw "Error accessing position in the MultiBufferStream";
	}
	return this.buffers[this.bufferIndex].fileStart + this.byteLength;
};

if (typeof exports !== 'undefined') {
	exports.MultiBufferStream = MultiBufferStream;
} // file:src/descriptor.js
/* 
 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
var MPEG4DescriptorParser = function MPEG4DescriptorParser() {
	var ES_DescrTag = 0x03;
	var DecoderConfigDescrTag = 0x04;
	var DecSpecificInfoTag = 0x05;
	var SLConfigDescrTag = 0x06;

	var descTagToName = [];
	descTagToName[ES_DescrTag] = "ES_Descriptor";
	descTagToName[DecoderConfigDescrTag] = "DecoderConfigDescriptor";
	descTagToName[DecSpecificInfoTag] = "DecoderSpecificInfo";
	descTagToName[SLConfigDescrTag] = "SLConfigDescriptor";

	var that = this;
	var classes = {};

	this.parseOneDescriptor = function (stream) {
		var hdrSize = 0;
		var size = 0;
		var tag;
		var desc;
		var byteRead;
		tag = stream.readUint8();
		hdrSize++;
		byteRead = stream.readUint8();
		hdrSize++;
		while (byteRead & 0x80) {
			size = (byteRead & 0x7F) << 7;
			byteRead = stream.readUint8();
			hdrSize++;
		}
		size += byteRead & 0x7F;
		Log$2.debug("MPEG4DescriptorParser", "Found " + (descTagToName[tag] || "Descriptor " + tag) + ", size " + size + " at position " + stream.getPosition());
		if (descTagToName[tag]) {
			desc = new classes[descTagToName[tag]](size);
		} else {
			desc = new classes.Descriptor(size);
		}
		desc.parse(stream);
		return desc;
	};

	classes.Descriptor = function (_tag, _size) {
		this.tag = _tag;
		this.size = _size;
		this.descs = [];
	};

	classes.Descriptor.prototype.parse = function (stream) {
		this.data = stream.readUint8Array(this.size);
	};

	classes.Descriptor.prototype.findDescriptor = function (tag) {
		for (var i = 0; i < this.descs.length; i++) {
			if (this.descs[i].tag == tag) {
				return this.descs[i];
			}
		}
		return null;
	};

	classes.Descriptor.prototype.parseRemainingDescriptors = function (stream) {
		var start = stream.position;
		while (stream.position < start + this.size) {
			var desc = that.parseOneDescriptor(stream);
			this.descs.push(desc);
		}
	};

	classes.ES_Descriptor = function (size) {
		classes.Descriptor.call(this, ES_DescrTag, size);
	};

	classes.ES_Descriptor.prototype = new classes.Descriptor();

	classes.ES_Descriptor.prototype.parse = function (stream) {
		this.ES_ID = stream.readUint16();
		this.flags = stream.readUint8();
		this.size -= 3;
		if (this.flags & 0x80) {
			this.dependsOn_ES_ID = stream.readUint16();
			this.size -= 2;
		} else {
			this.dependsOn_ES_ID = 0;
		}
		if (this.flags & 0x40) {
			var l = stream.readUint8();
			this.URL = stream.readString(l);
			this.size -= l + 1;
		} else {
			this.URL = null;
		}
		if (this.flags & 0x20) {
			this.OCR_ES_ID = stream.readUint16();
			this.size -= 2;
		} else {
			this.OCR_ES_ID = 0;
		}
		this.parseRemainingDescriptors(stream);
	};

	classes.ES_Descriptor.prototype.getOTI = function (stream) {
		var dcd = this.findDescriptor(DecoderConfigDescrTag);
		if (dcd) {
			return dcd.oti;
		} else {
			return 0;
		}
	};

	classes.ES_Descriptor.prototype.getAudioConfig = function (stream) {
		var dcd = this.findDescriptor(DecoderConfigDescrTag);
		if (!dcd) return null;
		var dsi = dcd.findDescriptor(DecSpecificInfoTag);
		if (dsi && dsi.data) {
			return (dsi.data[0] & 0xF8) >> 3;
		} else {
			return null;
		}
	};

	classes.DecoderConfigDescriptor = function (size) {
		classes.Descriptor.call(this, DecoderConfigDescrTag, size);
	};
	classes.DecoderConfigDescriptor.prototype = new classes.Descriptor();

	classes.DecoderConfigDescriptor.prototype.parse = function (stream) {
		this.oti = stream.readUint8();
		this.streamType = stream.readUint8();
		this.bufferSize = stream.readUint24();
		this.maxBitrate = stream.readUint32();
		this.avgBitrate = stream.readUint32();
		this.size -= 13;
		this.parseRemainingDescriptors(stream);
	};

	classes.DecoderSpecificInfo = function (size) {
		classes.Descriptor.call(this, DecSpecificInfoTag, size);
	};
	classes.DecoderSpecificInfo.prototype = new classes.Descriptor();

	classes.SLConfigDescriptor = function (size) {
		classes.Descriptor.call(this, SLConfigDescrTag, size);
	};
	classes.SLConfigDescriptor.prototype = new classes.Descriptor();

	return this;
};

if (typeof exports !== 'undefined') {
	exports.MPEG4DescriptorParser = MPEG4DescriptorParser;
} // file:src/box.js
/* 
 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
var BoxParser = {
	ERR_INVALID_DATA: -1,
	ERR_NOT_ENOUGH_DATA: 0,
	OK: 1,
	boxCodes: ["mdat", "idat", "free", "skip", "avcC", "hvcC", "ftyp", "styp", "payl", "vttC", "rtp ", "sdp ", "btrt", "frma", "trpy", "tpyl", "totl", "tpay", "dmed", "dimm", "drep", "nump", "npck", "maxr", "tmin", "tmax", "dmax", "pmax", "payt", "vmhd", "smhd", "hmhd", // full boxes not yet parsed
	"idat", "meco", "udta", "strk", "free", "skip", "clap", "pasp", "colr"],
	fullBoxCodes: ["mvhd", "tkhd", "mdhd", "hdlr", "vmhd", "smhd", "hmhd", "nmhd", "sthd", "url ", "urn ", "ctts", "cslg", "stco", "co64", "stsc", "stss", "stsz", "stz2", "stts", "stsh", "mehd", "trex", "mfhd", "tfhd", "trun", "tfdt", "esds", "subs", "txtC", "sidx", "emsg", "prft", "pssh", "elst", "dref", "url ", "urn ", "sbgp", "sgpd", "cprt", "iods", "ssix", "tfra", "mfro", "pdin", "tsel", "trep", "leva", "stri", "stsg", "schm", "stvi", "padb", "stdp", "sdtp", "saio", "saiz", "meta", "xml ", "bxml", "iloc", "pitm", "ipro", "iinf", "infe", "iref", "mere", "kind", "elng", "ipma", "pixi", "ispe", "tenc", "vpcC"
	/* missing "stsd", "iref", : special case full box and container */
	],
	containerBoxCodes: [["moov", ["trak", "sidx"]], ["trak"], ["edts"], ["mdia"], ["minf"], ["dinf"], ["stbl", ["sgpd", "sbgp"]], ["mvex", ["trex"]], ["moof", ["traf"]], ["traf", ["trun", "sgpd", "sbgp"]], ["vttc"], ["tref"], ["iref"], ["udta"], ["mfra"], ["meco"], ["hnti"], ["hinf"], ["strk"], ["strd"], ["sinf"], ["rinf"], ["schi"], ["trgr"], ["udta", ["kind"]], ["iprp", ["ipma"]], ["ipco"]],
	sampleEntryCodes: [
	/* 4CC as registered on http://mp4ra.org/codecs.html */
	{ prefix: "Visual", types: ["mp4v", "avc1", "avc2", "avc3", "avc4", "avcp", "drac", "encv", "mjp2", "mvc1", "mvc2", "resv", "s263", "svc1", "vc-1", "hvc1", "hev1"] }, { prefix: "Audio", types: ["mp4a", "ac-3", "alac", "dra1", "dtsc", "dtse",, "dtsh", "dtsl", "ec-3", "enca", "g719", "g726", "m4ae", "mlpa", "raw ", "samr", "sawb", "sawp", "sevc", "sqcp", "ssmv", "twos", ".mp3"] }, { prefix: "Hint", types: ["fdp ", "m2ts", "pm2t", "prtp", "rm2t", "rrtp", "rsrp", "rtp ", "sm2t", "srtp"] }, { prefix: "Metadata", types: ["metx", "mett", "urim"] }, { prefix: "Subtitle", types: ["stpp", "wvtt", "sbtt", "tx3g", "stxt"] }, { prefix: "System", types: ["mp4s"] }],
	sampleGroupEntryCodes: ["roll", "prol", "alst", "rap ", "tele", "avss", "avll", "sync", "tscl", "tsas", "stsa", "scif", "mvif", "scnm", "dtrt", "vipr", "tele", "rash", "seig"],
	trackGroupTypes: ["msrc"],
	initialize: function initialize() {
		var i, j;
		var length;
		BoxParser.FullBox.prototype = new BoxParser.Box();
		BoxParser.ContainerBox.prototype = new BoxParser.Box();
		BoxParser.SampleEntry.prototype = new BoxParser.FullBox();
		BoxParser.TrackGroupTypeBox.prototype = new BoxParser.FullBox();
		/* creating constructors for simple boxes */
		length = BoxParser.boxCodes.length;
		for (i = 0; i < length; i++) {
			BoxParser[BoxParser.boxCodes[i] + "Box"] = function (j) {
				/* creating a closure around the iterating value of i */
				return function (size) {
					BoxParser.Box.call(this, BoxParser.boxCodes[j], size);
				};
			}(i);
			BoxParser[BoxParser.boxCodes[i] + "Box"].prototype = new BoxParser.Box();
		}
		/* creating constructors for full boxes */
		length = BoxParser.fullBoxCodes.length;
		for (i = 0; i < length; i++) {
			BoxParser[BoxParser.fullBoxCodes[i] + "Box"] = function (j) {
				return function (size) {
					BoxParser.FullBox.call(this, BoxParser.fullBoxCodes[j], size);
				};
			}(i);
			BoxParser[BoxParser.fullBoxCodes[i] + "Box"].prototype = new BoxParser.FullBox();
		}
		/* creating constructors for container boxes */
		length = BoxParser.containerBoxCodes.length;
		for (i = 0; i < length; i++) {
			BoxParser[BoxParser.containerBoxCodes[i][0] + "Box"] = function (j, subBoxNames) {
				return function (size) {
					BoxParser.ContainerBox.call(this, BoxParser.containerBoxCodes[j][0], size);
					if (subBoxNames) {
						this.subBoxNames = subBoxNames;
						var nbSubBoxes = subBoxNames.length;
						for (var k = 0; k < nbSubBoxes; k++) {
							this[subBoxNames[k] + "s"] = [];
						}
					}
				};
			}(i, BoxParser.containerBoxCodes[i][1]);
			BoxParser[BoxParser.containerBoxCodes[i][0] + "Box"].prototype = new BoxParser.ContainerBox();
		}
		/* creating constructors for stsd entries  */
		length = BoxParser.sampleEntryCodes.length;
		for (j = 0; j < length; j++) {
			var prefix = BoxParser.sampleEntryCodes[j].prefix;
			var types = BoxParser.sampleEntryCodes[j].types;
			var nb_types = types.length;
			BoxParser[prefix + "SampleEntry"] = function (type, size) {
				BoxParser.SampleEntry.call(this, type, size);
			};
			BoxParser[prefix + "SampleEntry"].prototype = new BoxParser.SampleEntry();
			for (i = 0; i < nb_types; i++) {
				BoxParser[types[i] + "SampleEntry"] = function (k, l) {
					return function (size) {
						BoxParser[BoxParser.sampleEntryCodes[k].prefix + "SampleEntry"].call(this, BoxParser.sampleEntryCodes[k].types[l], size);
					};
				}(j, i);
				BoxParser[types[i] + "SampleEntry"].prototype = new BoxParser[prefix + "SampleEntry"]();
			}
		}
		/* creating constructors for stsd entries  */
		length = BoxParser.sampleGroupEntryCodes.length;
		for (i = 0; i < length; i++) {
			BoxParser[BoxParser.sampleGroupEntryCodes[i] + "SampleGroupEntry"] = function (j) {
				return function (size) {
					BoxParser.SampleGroupEntry.call(this, BoxParser.sampleGroupEntryCodes[j], size);
				};
			}(i);
			BoxParser[BoxParser.sampleGroupEntryCodes[i] + "SampleGroupEntry"].prototype = new BoxParser.SampleGroupEntry();
		}
		/* creating constructors for track groups  */
		length = BoxParser.trackGroupTypes.length;
		for (i = 0; i < length; i++) {
			BoxParser[BoxParser.trackGroupTypes[i] + "Box"] = function (j) {
				return function (size) {
					BoxParser.TrackGroupTypeBox.call(this, BoxParser.trackGroupTypes[j], size);
				};
			}(i);
			BoxParser[BoxParser.trackGroupTypes[i] + "Box"].prototype = new BoxParser.TrackGroupTypeBox();
		}
	},
	Box: function Box(_type, _size) {
		this.type = _type;
		this.size = _size;
	},
	FullBox: function FullBox(type, size) {
		BoxParser.Box.call(this, type, size);
		this.flags = 0;
		this.version = 0;
	},
	ContainerBox: function ContainerBox(type, size) {
		BoxParser.Box.call(this, type, size);
		this.boxes = [];
	},
	SampleEntry: function SampleEntry(type, size, hdr_size, start) {
		BoxParser.Box.call(this, type, size);
		this.hdr_size = hdr_size;
		this.start = start;
		this.boxes = [];
	},
	SampleGroupEntry: function SampleGroupEntry(type) {
		this.grouping_type = type;
	},
	TrackGroupTypeBox: function TrackGroupTypeBox(type, size) {
		BoxParser.FullBox.call(this, type, size);
	}
};

BoxParser.initialize();

BoxParser.TKHD_FLAG_ENABLED = 0x000001;
BoxParser.TKHD_FLAG_IN_MOVIE = 0x000002;
BoxParser.TKHD_FLAG_IN_PREVIEW = 0x000004;

BoxParser.TFHD_FLAG_BASE_DATA_OFFSET = 0x01;
BoxParser.TFHD_FLAG_SAMPLE_DESC = 0x02;
BoxParser.TFHD_FLAG_SAMPLE_DUR = 0x08;
BoxParser.TFHD_FLAG_SAMPLE_SIZE = 0x10;
BoxParser.TFHD_FLAG_SAMPLE_FLAGS = 0x20;
BoxParser.TFHD_FLAG_DUR_EMPTY = 0x10000;
BoxParser.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 0x20000;

BoxParser.TRUN_FLAGS_DATA_OFFSET = 0x01;
BoxParser.TRUN_FLAGS_FIRST_FLAG = 0x04;
BoxParser.TRUN_FLAGS_DURATION = 0x100;
BoxParser.TRUN_FLAGS_SIZE = 0x200;
BoxParser.TRUN_FLAGS_FLAGS = 0x400;
BoxParser.TRUN_FLAGS_CTS_OFFSET = 0x800;

BoxParser.Box.prototype.add = function (name) {
	var i, j;
	var box = new BoxParser[name + "Box"]();
	this.boxes.push(box);
	if (this[name + "s"]) {
		this[name + "s"].push(box);
	} else {
		this[name] = box;
	}
	return box;
};

BoxParser.Box.prototype.set = function (prop, value) {
	this[prop] = value;
	return this;
};

BoxParser.Box.prototype.addEntry = function (value, _prop) {
	var prop = _prop || "entries";
	if (!this[prop]) {
		this[prop] = [];
	}
	this[prop].push(value);
	return this;
};

if (typeof exports !== "undefined") {
	exports.BoxParser = BoxParser;
}
// file:src/box-codecs.js
BoxParser.SampleEntry.prototype.isVideo = function () {
	return false;
};

BoxParser.SampleEntry.prototype.isAudio = function () {
	return false;
};

BoxParser.SampleEntry.prototype.isSubtitle = function () {
	return false;
};

BoxParser.SampleEntry.prototype.isMetadata = function () {
	return false;
};

BoxParser.SampleEntry.prototype.isHint = function () {
	return false;
};

BoxParser.SampleEntry.prototype.getCodec = function () {
	return this.type.replace('.', '');
};

BoxParser.SampleEntry.prototype.getWidth = function () {
	return "";
};

BoxParser.SampleEntry.prototype.getHeight = function () {
	return "";
};

BoxParser.SampleEntry.prototype.getChannelCount = function () {
	return "";
};

BoxParser.SampleEntry.prototype.getSampleRate = function () {
	return "";
};

BoxParser.SampleEntry.prototype.getSampleSize = function () {
	return "";
};

BoxParser.VisualSampleEntry.prototype.isVideo = function () {
	return true;
};

BoxParser.VisualSampleEntry.prototype.getWidth = function () {
	return this.width;
};

BoxParser.VisualSampleEntry.prototype.getHeight = function () {
	return this.height;
};

BoxParser.AudioSampleEntry.prototype.isAudio = function () {
	return true;
};

BoxParser.AudioSampleEntry.prototype.getChannelCount = function () {
	return this.channel_count;
};

BoxParser.AudioSampleEntry.prototype.getSampleRate = function () {
	return this.samplerate;
};

BoxParser.AudioSampleEntry.prototype.getSampleSize = function () {
	return this.samplesize;
};

BoxParser.SubtitleSampleEntry.prototype.isSubtitle = function () {
	return true;
};

BoxParser.MetadataSampleEntry.prototype.isMetadata = function () {
	return true;
};

BoxParser.decimalToHex = function (d, padding) {
	var hex = Number(d).toString(16);
	padding = typeof padding === "undefined" || padding === null ? padding = 2 : padding;
	while (hex.length < padding) {
		hex = "0" + hex;
	}
	return hex;
};

BoxParser.avc1SampleEntry.prototype.getCodec = function () {
	var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
	if (this.avcC) {
		return baseCodec + "." + BoxParser.decimalToHex(this.avcC.AVCProfileIndication) + "" + BoxParser.decimalToHex(this.avcC.profile_compatibility) + "" + BoxParser.decimalToHex(this.avcC.AVCLevelIndication);
	} else {
		return baseCodec;
	}
};

BoxParser.hvc1SampleEntry.prototype.getCodec = function () {
	var i;
	var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
	if (this.hvcC) {
		baseCodec += '.';
		switch (this.hvcC.general_profile_space) {
			case 0:
				baseCodec += '';
				break;
			case 1:
				baseCodec += 'A';
				break;
			case 2:
				baseCodec += 'B';
				break;
			case 3:
				baseCodec += 'C';
				break;

		}
		baseCodec += this.hvcC.general_profile_idc;
		baseCodec += '.';
		var val = this.hvcC.general_profile_compatibility;
		var reversed = 0;
		for (i = 0; i < 32; i++) {
			reversed |= val & 1;
			if (i == 31) break;
			reversed <<= 1;
			val >>= 1;
		}
		baseCodec += BoxParser.decimalToHex(reversed, 0);
		baseCodec += '.';
		if (this.hvcC.general_tier_flag === 0) {
			baseCodec += 'L';
		} else {
			baseCodec += 'H';
		}
		baseCodec += this.hvcC.general_level_idc;
		var hasByte = false;
		var constraint_string = "";
		for (i = 5; i >= 0; i--) {
			if (this.hvcC.general_constraint_indicator[i] || hasByte) {
				constraint_string = "." + BoxParser.decimalToHex(this.hvcC.general_constraint_indicator[i], 0) + constraint_string;
				hasByte = true;
			}
		}
		baseCodec += constraint_string;
	}
	return baseCodec;
};

BoxParser.mp4aSampleEntry.prototype.getCodec = function () {
	var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
	if (this.esds && this.esds.esd) {
		var oti = this.esds.esd.getOTI();
		var dsi = this.esds.esd.getAudioConfig();
		return baseCodec + "." + BoxParser.decimalToHex(oti) + (dsi ? "." + dsi : "");
	} else {
		return baseCodec;
	}
};

BoxParser.stxtSampleEntry.prototype.getCodec = function () {
	var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
	if (this.mime_format) {
		return baseCodec + "." + this.mime_format;
	} else {
		return baseCodec;
	}
};
// file:src/box-parse.js
/* 
 * Copyright (c) Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
BoxParser.parseOneBox = function (stream, headerOnly, parentSize) {
	var box;
	var start = stream.getPosition();
	var hdr_size = 0;
	var diff;
	var uuid;
	if (stream.getEndPosition() - start < 8) {
		Log$2.debug("BoxParser", "Not enough data in stream to parse the type and size of the box");
		return { code: BoxParser.ERR_NOT_ENOUGH_DATA };
	}
	var size = stream.readUint32();
	var type = stream.readString(4);
	Log$2.debug("BoxParser", "Found box of type " + type + " and size " + size + " at position " + start);
	hdr_size = 8;
	if (type == "uuid") {
		uuid = stream.readUint8Array(16);
		hdr_size += 16;
	}
	if (size == 1) {
		if (stream.getEndPosition() - stream.getPosition() < 8) {
			stream.seek(start);
			Log$2.warn("BoxParser", "Not enough data in stream to parse the extended size of the \"" + type + "\" box");
			return { code: BoxParser.ERR_NOT_ENOUGH_DATA };
		}
		size = stream.readUint64();
		hdr_size += 8;
	} else if (size === 0) {
		/* box extends till the end of file */
		if (type !== "mdat") {
			throw "Unlimited box size not supported";
		}
	}
	if (parentSize && size > parentSize) {
		Log$2.error("BoxParser", "Box of type " + type + " has a size " + size + " greater than its container size " + parentSize);
		return { code: BoxParser.ERR_NOT_ENOUGH_DATA, type: type, size: size, hdr_size: hdr_size, start: start };
	}
	if (start + size > stream.getEndPosition()) {
		stream.seek(start);
		Log$2.warn("BoxParser", "Not enough data in stream to parse the entire \"" + type + "\" box");
		return { code: BoxParser.ERR_NOT_ENOUGH_DATA, type: type, size: size, hdr_size: hdr_size, start: start };
	}
	if (headerOnly) {
		return { code: BoxParser.OK, type: type, size: size, hdr_size: hdr_size, start: start };
	} else {
		if (BoxParser[type + "Box"]) {
			box = new BoxParser[type + "Box"](size);
		} else {
			if (type !== "uuid") {
				Log$2.warn("BoxParser", "Unknown box type: " + type);
			}
			box = new BoxParser.Box(type, size);
			if (uuid) {
				box.uuid = uuid;
			}
		}
	}
	box.hdr_size = hdr_size;
	/* recording the position of the box in the input stream */
	box.start = start;
	if (box.write === BoxParser.Box.prototype.write && box.type !== "mdat") {
		Log$2.warn("BoxParser", box.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
		box.parseDataAndRewind(stream);
	}
	box.parse(stream);
	diff = stream.getPosition() - (box.start + box.size);
	if (diff < 0) {
		Log$2.warn("BoxParser", "Parsing of box " + box.type + " did not read the entire indicated box data size (missing " + -diff + " bytes), seeking forward");
		stream.seek(box.start + box.size);
	} else if (diff > 0) {
		Log$2.error("BoxParser", "Parsing of box " + box.type + " read " + diff + " more bytes than the indicated box data size, seeking backwards");
		stream.seek(box.start + box.size);
	}
	return { code: BoxParser.OK, box: box, size: box.size };
};

BoxParser.Box.prototype.parse = function (stream) {
	if (this.type != "mdat") {
		this.data = stream.readUint8Array(this.size - this.hdr_size);
	} else {
		if (this.size === 0) {
			stream.seek(stream.getEndPosition());
		} else {
			stream.seek(this.start + this.size);
		}
	}
};

/* Used to parse a box without consuming its data, to allow detailled parsing
   Useful for boxes for which a write method is not yet implemented */
BoxParser.Box.prototype.parseDataAndRewind = function (stream) {
	this.data = stream.readUint8Array(this.size - this.hdr_size);
	// rewinding
	stream.position -= this.size - this.hdr_size;
};

BoxParser.FullBox.prototype.parseDataAndRewind = function (stream) {
	this.parseFullHeader(stream);
	this.data = stream.readUint8Array(this.size - this.hdr_size);
	// restore the header size as if the full header had not been parsed
	this.hdr_size -= 4;
	// rewinding
	stream.position -= this.size - this.hdr_size;
};

BoxParser.FullBox.prototype.parseFullHeader = function (stream) {
	this.version = stream.readUint8();
	this.flags = stream.readUint24();
	this.hdr_size += 4;
};

BoxParser.FullBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.data = stream.readUint8Array(this.size - this.hdr_size);
};

BoxParser.ContainerBox.prototype.parse = function (stream) {
	var ret;
	var box;
	while (stream.getPosition() < this.start + this.size) {
		ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			box = ret.box;
			/* store the box in the 'boxes' array to preserve box order (for offset) but also store box in a property for more direct access */
			this.boxes.push(box);
			if (this.subBoxNames && this.subBoxNames.indexOf(box.type) != -1) {
				this[this.subBoxNames[this.subBoxNames.indexOf(box.type)] + "s"].push(box);
			} else {
				this[box.type] = box;
			}
		} else {
			return;
		}
	}
};

BoxParser.Box.prototype.parseLanguage = function (stream) {
	this.language = stream.readUint16();
	var chars = [];
	chars[0] = this.language >> 10 & 0x1F;
	chars[1] = this.language >> 5 & 0x1F;
	chars[2] = this.language & 0x1F;
	this.languageString = String.fromCharCode(chars[0] + 0x60, chars[1] + 0x60, chars[2] + 0x60);
};

// file:src/parsing/TrackGroup.js
BoxParser.TrackGroupTypeBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.track_group_id = stream.readUint32();
};

// file:src/parsing/TrakReference.js
BoxParser.TrackReferenceTypeBox = function (type, size, hdr_size, start) {
	BoxParser.Box.call(this, type, size);
	this.hdr_size = hdr_size;
	this.start = start;
};
BoxParser.TrackReferenceTypeBox.prototype = new BoxParser.Box();
BoxParser.TrackReferenceTypeBox.prototype.parse = function (stream) {
	this.track_ids = stream.readUint32Array((this.size - this.hdr_size) / 4);
};

// file:src/parsing/avcC.js
BoxParser.avcCBox.prototype.parse = function (stream) {
	var i;
	var nb_nalus;
	var length;
	var toparse;
	this.configurationVersion = stream.readUint8();
	this.AVCProfileIndication = stream.readUint8();
	this.profile_compatibility = stream.readUint8();
	this.AVCLevelIndication = stream.readUint8();
	this.lengthSizeMinusOne = stream.readUint8() & 0x3;
	nb_nalus = stream.readUint8() & 0x1F;
	toparse = this.size - this.hdr_size - 6;
	this.SPS = new Array(nb_nalus);
	for (i = 0; i < nb_nalus; i++) {
		length = stream.readUint16();
		this.SPS[i] = stream.readUint8Array(length);
		toparse -= 2 + length;
	}
	nb_nalus = stream.readUint8();
	toparse--;
	this.PPS = new Array(nb_nalus);
	for (i = 0; i < nb_nalus; i++) {
		length = stream.readUint16();
		this.PPS[i] = stream.readUint8Array(length);
		toparse -= 2 + length;
	}
	if (toparse > 0) {
		this.ext = stream.readUint8Array(toparse);
	}
};

// file:src/parsing/btrt.js
BoxParser.btrtBox.prototype.parse = function (stream) {
	this.bufferSizeDB = stream.readUint32();
	this.maxBitrate = stream.readUint32();
	this.avgBitrate = stream.readUint32();
};

// file:src/parsing/clap.js
BoxParser.clapBox.prototype.parse = function (stream) {
	this.cleanApertureWidthN = stream.readUint32();
	this.cleanApertureWidthD = stream.readUint32();
	this.cleanApertureHeightN = stream.readUint32();
	this.cleanApertureHeightD = stream.readUint32();
	this.horizOffN = stream.readUint32();
	this.horizOffD = stream.readUint32();
	this.vertOffN = stream.readUint32();
	this.vertOffD = stream.readUint32();
}; // file:src/parsing/co64.js
BoxParser.co64Box.prototype.parse = function (stream) {
	var entry_count;
	var i;
	this.parseFullHeader(stream);
	entry_count = stream.readUint32();
	this.chunk_offsets = [];
	if (this.version === 0) {
		for (i = 0; i < entry_count; i++) {
			this.chunk_offsets.push(stream.readUint64());
		}
	}
};

// file:src/parsing/colr.js
BoxParser.colrBox.prototype.parse = function (stream) {
	this.colour_type = stream.readString(4);
	if (this.colour_type === 'nclx') {
		this.colour_primaries = stream.readUint16();
		this.transfer_characteristics = stream.readUint16();
		this.matrix_coefficients = stream.readUint16();
		var tmp = stream.readUint8();
		this.full_range_flag = tmp >> 7;
	} else if (this.colour_type === 'rICC') {
		this.ICC_profile = stream.readUint8Array(this.size - 4);
	} else if (this.colour_type === 'prof') {
		this.ICC_profile = stream.readUint8Array(this.size - 4);
	}
}; // file:src/parsing/cprt.js
BoxParser.cprtBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.parseLanguage(stream);
	this.notice = stream.readCString();
};

// file:src/parsing/cslg.js
BoxParser.cslgBox.prototype.parse = function (stream) {
	var entry_count;
	this.parseFullHeader(stream);
	if (this.version === 0) {
		this.compositionToDTSShift = stream.readInt32(); /* signed */
		this.leastDecodeToDisplayDelta = stream.readInt32(); /* signed */
		this.greatestDecodeToDisplayDelta = stream.readInt32(); /* signed */
		this.compositionStartTime = stream.readInt32(); /* signed */
		this.compositionEndTime = stream.readInt32(); /* signed */
	}
};

// file:src/parsing/ctts.js
BoxParser.cttsBox.prototype.parse = function (stream) {
	var entry_count;
	var i;
	this.parseFullHeader(stream);
	entry_count = stream.readUint32();
	this.sample_counts = [];
	this.sample_offsets = [];
	if (this.version === 0) {
		for (i = 0; i < entry_count; i++) {
			this.sample_counts.push(stream.readUint32());
			/* some files are buggy and declare version=0 while using signed offsets. 
      The likelyhood of using the most significant bit in a 32-bits time offset is very low,
      so using signed value here as well */
			this.sample_offsets.push(stream.readInt32());
		}
	} else if (this.version == 1) {
		for (i = 0; i < entry_count; i++) {
			this.sample_counts.push(stream.readUint32());
			this.sample_offsets.push(stream.readInt32()); /* signed */
		}
	}
};

// file:src/parsing/dimm.js
BoxParser.dimmBox.prototype.parse = function (stream) {
	this.bytessent = stream.readUint64();
};

// file:src/parsing/dmax.js
BoxParser.dmaxBox.prototype.parse = function (stream) {
	this.time = stream.readUint32();
};

// file:src/parsing/dmed.js
BoxParser.dmedBox.prototype.parse = function (stream) {
	this.bytessent = stream.readUint64();
};

// file:src/parsing/dref.js
BoxParser.drefBox.prototype.parse = function (stream) {
	var ret;
	var box;
	this.parseFullHeader(stream);
	this.entries = [];
	var entry_count = stream.readUint32();
	for (var i = 0; i < entry_count; i++) {
		ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			box = ret.box;
			this.entries.push(box);
		} else {
			return;
		}
	}
};

// file:src/parsing/drep.js
BoxParser.drepBox.prototype.parse = function (stream) {
	this.bytessent = stream.readUint64();
};

// file:src/parsing/elng.js
BoxParser.elngBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.extended_language = stream.readString(this.size - this.hdr_size);
};

// file:src/parsing/elst.js
BoxParser.elstBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.entries = [];
	var entry_count = stream.readUint32();
	for (var i = 0; i < entry_count; i++) {
		var entry = {};
		this.entries.push(entry);
		if (this.version === 1) {
			entry.segment_duration = stream.readUint64();
			entry.media_time = stream.readInt64();
		} else {
			entry.segment_duration = stream.readUint32();
			entry.media_time = stream.readInt32();
		}
		entry.media_rate_integer = stream.readInt16();
		entry.media_rate_fraction = stream.readInt16();
	}
};

// file:src/parsing/emsg.js
BoxParser.emsgBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.scheme_id_uri = stream.readCString();
	this.value = stream.readCString();
	this.timescale = stream.readUint32();
	this.presentation_time_delta = stream.readUint32();
	this.event_duration = stream.readUint32();
	this.id = stream.readUint32();
	var message_size = this.size - this.hdr_size - (4 * 4 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
	this.message_data = stream.readUint8Array(message_size);
};

// file:src/parsing/esds.js
BoxParser.esdsBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	var esd_data = stream.readUint8Array(this.size - this.hdr_size);
	if (typeof MPEG4DescriptorParser !== "undefined") {
		var esd_parser = new MPEG4DescriptorParser();
		this.esd = esd_parser.parseOneDescriptor(new DataStream(esd_data.buffer, 0, DataStream.BIG_ENDIAN));
	}
};

// file:src/parsing/frma.js
BoxParser.frmaBox.prototype.parse = function (stream) {
	this.data_format = stream.readString(4);
};

// file:src/parsing/ftyp.js
BoxParser.ftypBox.prototype.parse = function (stream) {
	var toparse = this.size - this.hdr_size;
	this.major_brand = stream.readString(4);
	this.minor_version = stream.readUint32();
	toparse -= 8;
	this.compatible_brands = [];
	var i = 0;
	while (toparse >= 4) {
		this.compatible_brands[i] = stream.readString(4);
		toparse -= 4;
		i++;
	}
};

// file:src/parsing/hdlr.js
BoxParser.hdlrBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	if (this.version === 0) {
		stream.readUint32();
		this.handler = stream.readString(4);
		stream.readUint32Array(3);
		this.name = stream.readString(this.size - this.hdr_size - 20);
		if (this.name[this.name.length - 1] === '\0') {
			this.name = this.name.slice(0, -1);
		}
	}
};

// file:src/parsing/hvcC.js
BoxParser.hvcCBox.prototype.parse = function (stream) {
	var i, j;
	var nb_nalus;
	var length;
	var tmp_byte;
	this.configurationVersion = stream.readUint8();
	tmp_byte = stream.readUint8();
	this.general_profile_space = tmp_byte >> 6;
	this.general_tier_flag = (tmp_byte & 0x20) >> 5;
	this.general_profile_idc = tmp_byte & 0x1F;
	this.general_profile_compatibility = stream.readUint32();
	this.general_constraint_indicator = stream.readUint8Array(6);
	this.general_level_idc = stream.readUint8();
	this.min_spatial_segmentation_idc = stream.readUint16() & 0xFFF;
	this.parallelismType = stream.readUint8() & 0x3;
	this.chromaFormat = stream.readUint8() & 0x3;
	this.bitDepthLumaMinus8 = stream.readUint8() & 0x7;
	this.bitDepthChromaMinus8 = stream.readUint8() & 0x7;
	this.avgFrameRate = stream.readUint16();
	tmp_byte = stream.readUint8();
	this.constantFrameRate = tmp_byte >> 6;
	this.numTemporalLayers = (tmp_byte & 0XD) >> 3;
	this.temporalIdNested = (tmp_byte & 0X4) >> 2;
	this.lengthSizeMinusOne = tmp_byte & 0X3;

	this.nalu_arrays = [];
	var numOfArrays = stream.readUint8();
	for (i = 0; i < numOfArrays; i++) {
		var nalu_array = [];
		this.nalu_arrays.push(nalu_array);
		tmp_byte = stream.readUint8();
		nalu_array.completeness = (tmp_byte & 0x80) >> 7;
		nalu_array.nalu_type = tmp_byte & 0x3F;
		var numNalus = stream.readUint16();
		for (j = 0; j < numNalus; j++) {
			var nalu = {};
			nalu_array.push(nalu);
			length = stream.readUint16();
			nalu.data = stream.readUint8Array(length);
		}
	}
};

// file:src/parsing/iinf.js
BoxParser.iinfBox.prototype.parse = function (stream) {
	var ret;
	this.parseFullHeader(stream);
	if (this.version === 0) {
		this.entry_count = stream.readUint16();
	} else {
		this.entry_count = stream.readUint32();
	}
	this.item_infos = [];
	for (var i = 0; i < this.entry_count; i++) {
		ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			if (ret.box.type !== "infe") {
				Log$2.error("BoxParser", "Expected 'infe' box, got " + ret.box.type);
			}
			this.item_infos[i] = ret.box;
		} else {
			return;
		}
	}
};

// file:src/parsing/iloc.js
BoxParser.ilocBox.prototype.parse = function (stream) {
	var byte;
	this.parseFullHeader(stream);
	byte = stream.readUint8();
	this.offset_size = byte >> 4 & 0xF;
	this.length_size = byte & 0xF;
	byte = stream.readUint8();
	this.base_offset_size = byte >> 4 & 0xF;
	if (this.version === 1 || this.version === 2) {
		this.index_size = byte & 0xF;
	} else {
		this.index_size = 0;
		// reserved = byte & 0xF;
	}
	this.items = [];
	var item_count = 0;
	if (this.version < 2) {
		item_count = stream.readUint16();
	} else if (this.version === 2) {
		item_count = stream.readUint32();
	} else {
		throw "version of iloc box not supported";
	}
	for (var i = 0; i < item_count; i++) {
		var item = {};
		this.items.push(item);
		if (this.version < 2) {
			item.item_ID = stream.readUint16();
		} else if (this.version === 2) {
			item.item_ID = stream.readUint16();
		} else {
			throw "version of iloc box not supported";
		}
		if (this.version === 1 || this.version === 2) {
			item.construction_method = stream.readUint16() & 0xF;
		}
		item.data_reference_index = stream.readUint16();
		switch (this.base_offset_size) {
			case 0:
				item.base_offset = 0;
				break;
			case 4:
				item.base_offset = stream.readUint32();
				break;
			case 8:
				item.base_offset = stream.readUint64();
				break;
			default:
				throw "Error reading base offset size";
		}
		var extent_count = stream.readUint16();
		item.extents = [];
		for (var j = 0; j < extent_count; j++) {
			var extent = {};
			item.extents.push(extent);
			if (this.version === 1 || this.version === 2) {
				switch (this.index_size) {
					case 0:
						extent.extent_index = 0;
						break;
					case 4:
						extent.extent_index = stream.readUint32();
						break;
					case 8:
						extent.extent_index = stream.readUint64();
						break;
					default:
						throw "Error reading extent index";
				}
			}
			switch (this.offset_size) {
				case 0:
					extent.extent_offset = 0;
					break;
				case 4:
					extent.extent_offset = stream.readUint32();
					break;
				case 8:
					extent.extent_offset = stream.readUint64();
					break;
				default:
					throw "Error reading extent index";
			}
			switch (this.length_size) {
				case 0:
					extent.extent_length = 0;
					break;
				case 4:
					extent.extent_length = stream.readUint32();
					break;
				case 8:
					extent.extent_length = stream.readUint64();
					break;
				default:
					throw "Error reading extent index";
			}
		}
	}
};

// file:src/parsing/infe.js
BoxParser.infeBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	if (this.version === 0 || this.version === 1) {
		this.item_ID = stream.readUint16();
		this.item_protection_index = stream.readUint16();
		this.item_name = stream.readCString();
		this.content_type = stream.readCString();
		this.content_encoding = stream.readCString();
	}
	if (this.version === 1) {
		this.extension_type = stream.readString(4);
		Log$2.warn("BoxParser", "Cannot parse extension type");
		stream.seek(this.start + this.size);
		return;
	}
	if (this.version >= 2) {
		if (this.version === 2) {
			this.item_ID = stream.readUint16();
		} else if (this.version === 3) {
			this.item_ID = stream.readUint32();
		}
		this.item_protection_index = stream.readUint16();
		this.item_type = stream.readString(4);
		this.item_name = stream.readCString();
		if (this.item_type === "mime") {
			this.content_type = stream.readCString();
			this.content_encoding = stream.readCString();
		} else if (this.item_type === "uri ") {
			this.item_uri_type = stream.readCString();
		}
	}
};
// file:src/parsing/ipma.js
BoxParser.ipmaBox.prototype.parse = function (stream) {
	var i, j;
	this.parseFullHeader(stream);
	entry_count = stream.readUint32();
	this.associations = [];
	for (i = 0; i < entry_count; i++) {
		var item_assoc = {};
		this.associations.push(item_assoc);
		if (this.version < 1) {
			item_assoc.id = stream.readUint16();
		} else {
			item_assoc.id = stream.readUint32();
		}
		var association_count = stream.readUint8();
		item_assoc.props = [];
		for (j = 0; j < association_count; j++) {
			var tmp = stream.readUint8();
			var p = [];
			item_assoc.props.push(p);
			var essential = (tmp & 0x80) >> 7;
			var property_index;
			if (this.flags & 0x1) {
				property_index = (tmp & 0x7F) << 8 | stream.readUint8();
			} else {
				property_index = tmp & 0x7F;
			}
			p.push(property_index);
			p.push(essential === 1);
		}
	}
}; // file:src/parsing/iref.js
BoxParser.irefBox = function (size) {
	BoxParser.FullBox.call(this, "iref", size);
	this.references = [];
};
BoxParser.irefBox.prototype = new BoxParser.FullBox();
BoxParser.irefBox.prototype.parse = function (stream) {
	var ret;
	var entryCount;
	var box;
	this.parseFullHeader(stream);

	while (stream.getPosition() < this.start + this.size) {
		ret = BoxParser.parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			if (this.version === 0) {
				box = new BoxParser.SingleItemTypeReferenceBox(ret.type, ret.size, ret.hdr_size, ret.start);
			} else {
				box = new BoxParser.SingleItemTypeReferenceBoxLarge(ret.type, ret.size, ret.hdr_size, ret.start);
			}
			if (box.write === BoxParser.Box.prototype.write && box.type !== "mdat") {
				Log$2.warn("BoxParser", box.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
				box.parseDataAndRewind(stream);
			}
			box.parse(stream);
			this.references.push(box);
		} else {
			return;
		}
	}
};
// file:src/parsing/ispe.js
BoxParser.ispeBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.image_width = stream.readUint32();
	this.image_height = stream.readUint32();
}; // file:src/parsing/kind.js
BoxParser.kindBox = function (size) {
	BoxParser.FullBox.call(this, "kind", size);
	this.schemeURI = "";
	this.value = "";
};
BoxParser.kindBox.prototype = new BoxParser.FullBox();
BoxParser.kindBox.prototype.parse = function (stream) {
	var ret;
	this.parseFullHeader(stream);
	this.schemeURI = stream.readCString();
	this.value = stream.readCString();
};
// file:src/parsing/leva.js
BoxParser.levaBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	var count = stream.readUint8();
	this.levels = [];
	for (var i = 0; i < count; i++) {
		var level = {};
		this.levels[i] = level;
		level.track_ID = stream.readUint32();
		var tmp_byte = stream.readUint8();
		level.padding_flag = tmp_byte >> 7;
		level.assignment_type = tmp_byte & 0x7F;
		switch (level.assignment_type) {
			case 0:
				level.grouping_type = stream.readUint32();
				break;
			case 1:
				level.grouping_type = stream.readUint32();
				level.grouping_type_parameter = stream.readUint32();
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				level.sub_track_id = stream.readUint32();
				break;
			default:
				Log$2.warn("BoxParser", "Unknown leva assignement type");
		}
	}
};

// file:src/parsing/maxr.js
BoxParser.maxrBox.prototype.parse = function (stream) {
	this.period = stream.readUint32();
	this.bytes = stream.readUint32();
};

// file:src/parsing/mdhd.js
BoxParser.mdhdBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	if (this.version == 1) {
		this.creation_time = stream.readUint64();
		this.modification_time = stream.readUint64();
		this.timescale = stream.readUint32();
		this.duration = stream.readUint64();
	} else {
		this.creation_time = stream.readUint32();
		this.modification_time = stream.readUint32();
		this.timescale = stream.readUint32();
		this.duration = stream.readUint32();
	}
	this.parseLanguage(stream);
	stream.readUint16();
};

// file:src/parsing/mehd.js
BoxParser.mehdBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	if (this.flags & 0x1) {
		Log$2.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1");
		this.version = 1;
	}
	if (this.version == 1) {
		this.fragment_duration = stream.readUint64();
	} else {
		this.fragment_duration = stream.readUint32();
	}
};

// file:src/parsing/meta.js
BoxParser.metaBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.boxes = [];
	BoxParser.ContainerBox.prototype.parse.call(this, stream);
};
// file:src/parsing/mfhd.js
BoxParser.mfhdBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.sequence_number = stream.readUint32();
};

// file:src/parsing/mfro.js
BoxParser.mfroBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this._size = stream.readUint32();
};

// file:src/parsing/mvhd.js
BoxParser.mvhdBox.prototype.parse = function (stream) {
	this.flags = 0;
	this.parseFullHeader(stream);
	if (this.version == 1) {
		this.creation_time = stream.readUint64();
		this.modification_time = stream.readUint64();
		this.timescale = stream.readUint32();
		this.duration = stream.readUint64();
	} else {
		this.creation_time = stream.readUint32();
		this.modification_time = stream.readUint32();
		this.timescale = stream.readUint32();
		this.duration = stream.readUint32();
	}
	this.aaa = 1222;
	this.rate = stream.readUint32();
	this.volume = stream.readUint16() >> 8;
	stream.readUint16();
	stream.readUint32Array(2);
	this.matrix = stream.readUint32Array(9);
	stream.readUint32Array(6);
	this.next_track_id = stream.readUint32();
};

// file:src/parsing/npck.js
BoxParser.npckBox.prototype.parse = function (stream) {
	this.packetssent = stream.readUint32();
};

// file:src/parsing/nump.js
BoxParser.numpBox.prototype.parse = function (stream) {
	this.packetssent = stream.readUint64();
};

// file:src/parsing/padb.js
BoxParser.padbBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	var sample_count = stream.readUint32();
	this.padbits = [];
	for (var i = 0; i < Math.floor((sample_count + 1) / 2); i++) {
		this.padbits = stream.readUint8();
	}
};

// file:src/parsing/pasp.js
BoxParser.paspBox.prototype.parse = function (stream) {
	this.hSpacing = stream.readUint32();
	this.vSpacing = stream.readUint32();
}; // file:src/parsing/payl.js
BoxParser.paylBox.prototype.parse = function (stream) {
	this.text = stream.readString(this.size - this.hdr_size);
};

// file:src/parsing/payt.js
BoxParser.paytBox.prototype.parse = function (stream) {
	this.payloadID = stream.readUint32();
	var count = stream.readUint8();
	this.rtpmap_string = stream.readString(count);
};

// file:src/parsing/pdin.js
BoxParser.pdinBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	var count = (this.size - this.hdr_size) / 8;
	this.rate = [];
	this.initial_delay = [];
	for (var i = 0; i < count; i++) {
		this.rate[i] = stream.readUint32();
		this.initial_delay[i] = stream.readUint32();
	}
};

// file:src/parsing/pitm.js
BoxParser.pitmBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	if (this.version === 0) {
		this.item_id = stream.readUint16();
	} else {
		this.item_id = stream.readUint32();
	}
};

// file:src/parsing/pixi.js
BoxParser.pixiBox.prototype.parse = function (stream) {
	var i;
	this.parseFullHeader(stream);
	this.num_channels = stream.readUint8();
	this.bits_per_channels = [];
	for (i = 0; i < this.num_channels; i++) {
		this.bits_per_channels[i] = stream.readUint8();
	}
}; // file:src/parsing/pmax.js
BoxParser.pmaxBox.prototype.parse = function (stream) {
	this.bytes = stream.readUint32();
};

// file:src/parsing/prft.js
BoxParser.prftBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.ref_track_id = stream.readUint32();
	this.ntp_timestamp = stream.readUint64();
	if (this.version === 0) {
		this.media_time = stream.readUint32();
	} else {
		this.media_time = stream.readUint64();
	}
};

// file:src/parsing/pssh.js
BoxParser.psshBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.system_id = stream.readUint8Array(16);
	if (this.version > 0) {
		var count = stream.readUint32();
		this.kid = [];
		for (var i = 0; i < count; i++) {
			this.kid[i] = stream.readUint8Array(16);
		}
	}
	var datasize = stream.readUint32();
	if (datasize > 0) {
		this.data = stream.readUint8Array(datasize);
	}
};

// file:src/parsing/rtp.js
BoxParser["rtp Box"].prototype.parse = function (stream) {
	this.descriptionformat = stream.readString(4);
	this.sdptext = stream.readString(this.size - this.hdr_size - 4);
};

// file:src/parsing/saio.js
BoxParser.saioBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	if (this.flags & 0x1) {
		this.aux_info_type = stream.readUint32();
		this.aux_info_type_parameter = stream.readUint32();
	}
	var count = stream.readUint32();
	this.offset = [];
	for (var i = 0; i < count; i++) {
		if (this.version === 0) {
			this.offset[i] = stream.readUint32();
		} else {
			this.offset[i] = stream.readUint64();
		}
	}
};
// file:src/parsing/saiz.js
BoxParser.saizBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	if (this.flags & 0x1) {
		this.aux_info_type = stream.readUint32();
		this.aux_info_type_parameter = stream.readUint32();
	}
	this.default_sample_info_size = stream.readUint8();
	var count = stream.readUint32();
	this.sample_info_size = [];
	if (this.default_sample_info_size === 0) {
		for (var i = 0; i < count; i++) {
			this.sample_info_size[i] = stream.readUint8();
		}
	}
};

// file:src/parsing/sampleentries/mett.js
BoxParser.mettSampleEntry.prototype.parse = function (stream) {
	this.parseHeader(stream);
	this.content_encoding = stream.readCString();
	this.mime_format = stream.readCString();
	this.parseFooter(stream);
};

// file:src/parsing/sampleentries/metx.js
BoxParser.metxSampleEntry.prototype.parse = function (stream) {
	this.parseHeader(stream);
	this.content_encoding = stream.readCString();
	this.namespace = stream.readCString();
	this.schema_location = stream.readCString();
	this.parseFooter(stream);
};

// file:src/parsing/sampleentries/sampleentry.js
BoxParser.SampleEntry.prototype.parseHeader = function (stream) {
	stream.readUint8Array(6);
	this.data_reference_index = stream.readUint16();
	this.hdr_size += 8;
};

BoxParser.SampleEntry.prototype.parse = function (stream) {
	this.parseHeader(stream);
	this.data = stream.readUint8Array(this.size - this.hdr_size);
};

BoxParser.SampleEntry.prototype.parseDataAndRewind = function (stream) {
	this.parseHeader(stream);
	this.data = stream.readUint8Array(this.size - this.hdr_size);
	// restore the header size as if the sample entry header had not been parsed
	this.hdr_size -= 8;
	// rewinding
	stream.position -= this.size - this.hdr_size;
};

BoxParser.SampleEntry.prototype.parseFooter = function (stream) {
	var ret;
	var box;
	while (stream.getPosition() < this.start + this.size) {
		ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			box = ret.box;
			this.boxes.push(box);
			this[box.type] = box;
		} else {
			return;
		}
	}
};

BoxParser.VisualSampleEntry.prototype.parse = function (stream) {
	this.parseHeader(stream);
	stream.readUint16();
	stream.readUint16();
	stream.readUint32Array(3);
	this.width = stream.readUint16();
	this.height = stream.readUint16();
	this.horizresolution = stream.readUint32();
	this.vertresolution = stream.readUint32();
	stream.readUint32();
	this.frame_count = stream.readUint16();
	this.compressorname = stream.readString(32);
	this.depth = stream.readUint16();
	stream.readUint16();
	this.parseFooter(stream);
};

BoxParser.AudioSampleEntry.prototype.parse = function (stream) {
	this.parseHeader(stream);
	stream.readUint32Array(2);
	this.channel_count = stream.readUint16();
	this.samplesize = stream.readUint16();
	stream.readUint16();
	stream.readUint16();
	this.samplerate = stream.readUint32() / (1 << 16);
	this.parseFooter(stream);
};

// file:src/parsing/sampleentries/sbtt.js
BoxParser.sbttSampleEntry.prototype.parse = function (stream) {
	this.parseHeader(stream);
	this.content_encoding = stream.readCString();
	this.mime_format = stream.readCString();
	this.parseFooter(stream);
};

// file:src/parsing/sampleentries/stpp.js
BoxParser.stppSampleEntry.prototype.parse = function (stream) {
	this.parseHeader(stream);
	this.namespace = stream.readCString();
	this.schema_location = stream.readCString();
	this.auxiliary_mime_types = stream.readCString();
	this.parseFooter(stream);
};

// file:src/parsing/sampleentries/stxt.js
BoxParser.stxtSampleEntry.prototype.parse = function (stream) {
	this.parseHeader(stream);
	this.content_encoding = stream.readCString();
	this.mime_format = stream.readCString();
	this.parseFooter(stream);
};

// file:src/parsing/sampleentries/tx3g.js
BoxParser.tx3gSampleEntry.prototype.parse = function (stream) {
	this.parseHeader(stream);
	this.displayFlags = stream.readUint32();
	this.horizontal_justification = stream.readInt8();
	this.vertical_justification = stream.readInt8();
	this.bg_color_rgba = stream.readUint8Array(4);
	this.box_record = stream.readInt16Array(4);
	this.style_record = stream.readUint8Array(12);
	this.parseFooter(stream);
};
// file:src/parsing/sampleentries/wvtt.js
BoxParser.wvttSampleEntry.prototype.parse = function (stream) {
	this.parseHeader(stream);
	this.parseFooter(stream);
};

// file:src/parsing/samplegroups/alst.js
BoxParser.alstSampleGroupEntry.prototype.parse = function (stream) {
	var i;
	var roll_count = stream.readUint16();
	this.first_output_sample = stream.readUint16();
	this.sample_offset = [];
	for (i = 0; i < roll_count; i++) {
		this.sample_offset[i] = stream.readUint32();
	}
	var remaining = this.description_length - 4 - 4 * roll_count;
	this.num_output_samples = [];
	this.num_total_samples = [];
	for (i = 0; i < remaining / 4; i++) {
		this.num_output_samples[i] = stream.readUint16();
		this.num_total_samples[i] = stream.readUint16();
	}
};

// file:src/parsing/samplegroups/avll.js
BoxParser.avllSampleGroupEntry.prototype.parse = function (stream) {
	this.layerNumber = stream.readUint8();
	this.accurateStatisticsFlag = stream.readUint8();
	this.avgBitRate = stream.readUint16();
	this.avgFrameRate = stream.readUint16();
};

// file:src/parsing/samplegroups/avss.js
BoxParser.avssSampleGroupEntry.prototype.parse = function (stream) {
	this.subSequenceIdentifier = stream.readUint16();
	this.layerNumber = stream.readUint8();
	var tmp_byte = stream.readUint8();
	this.durationFlag = tmp_byte >> 7;
	this.avgRateFlag = tmp_byte >> 6 & 0x1;
	if (this.durationFlag) {
		this.duration = stream.readUint32();
	}
	if (this.avgRateFlag) {
		this.accurateStatisticsFlag = stream.readUint8();
		this.avgBitRate = stream.readUint16();
		this.avgFrameRate = stream.readUint16();
	}
	this.dependency = [];
	var numReferences = stream.readUint8();
	for (var i = 0; i < numReferences; i++) {
		var dependencyInfo = {};
		this.dependency.push(dependencyInfo);
		dependencyInfo.subSeqDirectionFlag = stream.readUint8();
		dependencyInfo.layerNumber = stream.readUint8();
		dependencyInfo.subSequenceIdentifier = stream.readUint16();
	}
};

// file:src/parsing/samplegroups/dtrt.js
BoxParser.dtrtSampleGroupEntry.prototype.parse = function (stream) {
	Log$2.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
};

// file:src/parsing/samplegroups/mvif.js
BoxParser.mvifSampleGroupEntry.prototype.parse = function (stream) {
	Log$2.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
};

// file:src/parsing/samplegroups/prol.js
BoxParser.prolSampleGroupEntry.prototype.parse = function (stream) {
	this.roll_distance = stream.readInt16();
};

// file:src/parsing/samplegroups/rap.js
BoxParser["rap SampleGroupEntry"].prototype.parse = function (stream) {
	var tmp_byte = stream.readUint8();
	this.num_leading_samples_known = tmp_byte >> 7;
	this.num_leading_samples = tmp_byte & 0x7F;
};

// file:src/parsing/samplegroups/rash.js
BoxParser.rashSampleGroupEntry.prototype.parse = function (stream) {
	this.operation_point_count = stream.readUint16();
	if (this.description_length !== 2 + (this.operation_point_count === 1 ? 2 : this.operation_point_count * 6) + 9) {
		Log$2.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length");
		this.data = stream.readUint8Array(this.description_length - 2);
	} else {
		if (this.operation_point_count === 1) {
			this.target_rate_share = stream.readUint16();
		} else {
			this.target_rate_share = [];
			this.available_bitrate = [];
			for (var i = 0; i < this.operation_point_count; i++) {
				this.available_bitrate[i] = stream.readUint32();
				this.target_rate_share[i] = stream.readUint16();
			}
		}
		this.maximum_bitrate = stream.readUint32();
		this.minimum_bitrate = stream.readUint32();
		this.discard_priority = stream.readUint8();
	}
};

// file:src/parsing/samplegroups/roll.js
BoxParser.rollSampleGroupEntry.prototype.parse = function (stream) {
	this.roll_distance = stream.readInt16();
};

// file:src/parsing/samplegroups/samplegroup.js
BoxParser.SampleGroupEntry.prototype.parse = function (stream) {
	Log$2.warn("BoxParser", "Unknown Sample Group type: " + this.grouping_type);
	this.data = stream.readUint8Array(this.description_length);
};

// file:src/parsing/samplegroups/scif.js
BoxParser.scifSampleGroupEntry.prototype.parse = function (stream) {
	Log$2.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
};

// file:src/parsing/samplegroups/scnm.js
BoxParser.scnmSampleGroupEntry.prototype.parse = function (stream) {
	Log$2.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
};

// file:src/parsing/samplegroups/seig.js
BoxParser.seigSampleGroupEntry.prototype.parse = function (stream) {
	this.reserved = stream.readUint8();
	var tmp = stream.readUint8();
	this.crypt_byte_block = tmp >> 4;
	this.skip_byte_block = tmp & 0xF;
	this.isProtected = stream.readUint8();
	this.Per_Sample_IV_Size = stream.readUint8();
	this.KID = stream.readUint8Array(16);
	this.constant_IV_size = 0;
	this.constant_IV = 0;
	if (this.isProtected === 1 && this.Per_Sample_IV_Size === 0) {
		this.constant_IV_size = stream.readUint8();
		this.constant_IV = stream.readUint8Array(this.constant_IV_size);
	}
};

// file:src/parsing/samplegroups/stsa.js
BoxParser.stsaSampleGroupEntry.prototype.parse = function (stream) {
	Log$2.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
};

// file:src/parsing/samplegroups/sync.js
BoxParser.syncSampleGroupEntry.prototype.parse = function (stream) {
	var tmp_byte = stream.readUint8();
	this.NAL_unit_type = tmp_byte & 0x3F;
};

// file:src/parsing/samplegroups/tele.js
BoxParser.teleSampleGroupEntry.prototype.parse = function (stream) {
	var tmp_byte = stream.readUint8();
	this.level_independently_decodable = tmp_byte >> 7;
};

// file:src/parsing/samplegroups/tsas.js
BoxParser.tsasSampleGroupEntry.prototype.parse = function (stream) {
	Log$2.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
};

// file:src/parsing/samplegroups/tscl.js
BoxParser.tsclSampleGroupEntry.prototype.parse = function (stream) {
	Log$2.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
};

// file:src/parsing/samplegroups/vipr.js
BoxParser.viprSampleGroupEntry.prototype.parse = function (stream) {
	Log$2.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
};

// file:src/parsing/sbgp.js
BoxParser.sbgpBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.grouping_type = stream.readString(4);
	if (this.version === 1) {
		this.grouping_type_parameter = stream.readUint32();
	} else {
		this.grouping_type_parameter = 0;
	}
	this.entries = [];
	var entry_count = stream.readUint32();
	for (var i = 0; i < entry_count; i++) {
		var entry = {};
		this.entries.push(entry);
		entry.sample_count = stream.readInt32();
		entry.group_description_index = stream.readInt32();
	}
};

// file:src/parsing/schm.js
BoxParser.schmBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.scheme_type = stream.readString(4);
	this.scheme_version = stream.readUint32();
	if (this.flags & 0x000001) {
		this.scheme_uri = stream.readString(this.size - this.hdr_size - 8);
	}
};

// file:src/parsing/sdp.js
BoxParser["sdp Box"].prototype.parse = function (stream) {
	this.sdptext = stream.readString(this.size - this.hdr_size);
};

// file:src/parsing/sdtp.js
BoxParser.sdtpBox.prototype.parse = function (stream) {
	var tmp_byte;
	this.parseFullHeader(stream);
	var count = this.size - this.hdr_size;
	this.is_leading = [];
	this.sample_depends_on = [];
	this.sample_is_depended_on = [];
	this.sample_has_redundancy = [];
	for (var i = 0; i < count; i++) {
		tmp_byte = stream.readUint8();
		this.is_leading[i] = tmp_byte >> 6;
		this.sample_depends_on[i] = tmp_byte >> 4 & 0x3;
		this.sample_is_depended_on[i] = tmp_byte >> 2 & 0x3;
		this.sample_has_redundancy[i] = tmp_byte & 0x3;
	}
};

// file:src/parsing/sgpd.js
BoxParser.sgpdBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.grouping_type = stream.readString(4);
	Log$2.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type);
	if (this.version === 1) {
		this.default_length = stream.readUint32();
	} else {
		this.default_length = 0;
	}
	if (this.version >= 2) {
		this.default_group_description_index = stream.readUint32();
	}
	this.entries = [];
	var entry_count = stream.readUint32();
	for (var i = 0; i < entry_count; i++) {
		var entry;
		if (BoxParser[this.grouping_type + "SampleGroupEntry"]) {
			entry = new BoxParser[this.grouping_type + "SampleGroupEntry"](this.grouping_type);
		} else {
			entry = new BoxParser.SampleGroupEntry(this.grouping_type);
		}
		this.entries.push(entry);
		if (this.version === 1) {
			if (this.default_length === 0) {
				entry.description_length = stream.readUint32();
			} else {
				entry.description_length = this.default_length;
			}
		} else {
			entry.description_length = this.default_length;
		}
		if (entry.write === BoxParser.SampleGroupEntry.prototype.write) {
			Log$2.warn("BoxParser", " SampleEntry for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write");
			// storing data
			entry.data = stream.readUint8Array(entry.description_length);
			// rewinding
			stream.position -= entry.description_length;
		}
		entry.parse(stream);
	}
};

// file:src/parsing/sidx.js
BoxParser.sidxBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.reference_ID = stream.readUint32();
	this.timescale = stream.readUint32();
	if (this.version === 0) {
		this.earliest_presentation_time = stream.readUint32();
		this.first_offset = stream.readUint32();
	} else {
		this.earliest_presentation_time = stream.readUint64();
		this.first_offset = stream.readUint64();
	}
	stream.readUint16();
	this.references = [];
	var count = stream.readUint16();
	for (var i = 0; i < count; i++) {
		var ref = {};
		this.references.push(ref);
		var tmp_32 = stream.readUint32();
		ref.reference_type = tmp_32 >> 31 & 0x1;
		ref.referenced_size = tmp_32 & 0x7FFFFFFF;
		ref.subsegment_duration = stream.readUint32();
		tmp_32 = stream.readUint32();
		ref.starts_with_SAP = tmp_32 >> 31 & 0x1;
		ref.SAP_type = tmp_32 >> 28 & 0x7;
		ref.SAP_delta_time = tmp_32 & 0xFFFFFFF;
	}
};

// file:src/parsing/singleitemtypereference.js
BoxParser.SingleItemTypeReferenceBox = function (type, size, hdr_size, start) {
	BoxParser.Box.call(this, type, size);
	this.hdr_size = hdr_size;
	this.start = start;
};
BoxParser.SingleItemTypeReferenceBox.prototype = new BoxParser.Box();
BoxParser.SingleItemTypeReferenceBox.prototype.parse = function (stream) {
	this.from_item_ID = stream.readUint16();
	var count = stream.readUint16();
	this.references = [];
	for (var i = 0; i < count; i++) {
		this.references[i] = stream.readUint16();
	}
};

// file:src/parsing/singleitemtypereferencelarge.js
BoxParser.SingleItemTypeReferenceBoxLarge = function (type, size, hdr_size, start) {
	BoxParser.Box.call(this, type, size);
	this.hdr_size = hdr_size;
	this.start = start;
};
BoxParser.SingleItemTypeReferenceBoxLarge.prototype = new BoxParser.Box();
BoxParser.SingleItemTypeReferenceBoxLarge.prototype.parse = function (stream) {
	this.from_item_ID = stream.readUint32();
	var count = stream.readUint16();
	this.references = [];
	for (var i = 0; i < count; i++) {
		this.references[i] = stream.readUint32();
	}
};

// file:src/parsing/ssix.js
BoxParser.ssixBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.subsegments = [];
	var subsegment_count = stream.readUint32();
	for (var i = 0; i < subsegment_count; i++) {
		var subsegment = {};
		this.subsegments.push(subsegment);
		subsegment.ranges = [];
		var range_count = stream.readUint32();
		for (var j = 0; j < range_count; j++) {
			var range = {};
			subsegment.ranges.push(range);
			range.level = stream.readUint8();
			range.range_size = stream.readUint24();
		}
	}
};

// file:src/parsing/stco.js
BoxParser.stcoBox.prototype.parse = function (stream) {
	var entry_count;
	this.parseFullHeader(stream);
	entry_count = stream.readUint32();
	if (this.version === 0) {
		this.chunk_offsets = stream.readUint32Array(entry_count);
	}
};

// file:src/parsing/stdp.js
BoxParser.stdpBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	var count = (this.size - this.hdr_size) / 2;
	this.priority = [];
	for (var i = 0; i < count; i++) {
		this.priority[i] = stream.readUint16();
	}
};

// file:src/parsing/sthd.js
BoxParser.sthdBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
};

// file:src/parsing/stri.js
BoxParser.striBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.switch_group = stream.readUint16();
	this.alternate_group = stream.readUint16();
	this.sub_track_id = stream.readUint32();
	var count = (this.size - this.hdr_size - 8) / 4;
	this.attribute_list = [];
	for (var i = 0; i < count; i++) {
		this.attribute_list[i] = stream.readUint32();
	}
};

// file:src/parsing/stsc.js
BoxParser.stscBox.prototype.parse = function (stream) {
	var entry_count;
	var i;
	this.parseFullHeader(stream);
	entry_count = stream.readUint32();
	this.first_chunk = [];
	this.samples_per_chunk = [];
	this.sample_description_index = [];
	if (this.version === 0) {
		for (i = 0; i < entry_count; i++) {
			this.first_chunk.push(stream.readUint32());
			this.samples_per_chunk.push(stream.readUint32());
			this.sample_description_index.push(stream.readUint32());
		}
	}
};

// file:src/parsing/stsd.js
BoxParser.stsdBox = function (size) {
	BoxParser.FullBox.call(this, "stsd", size);
	this.entries = [];
};
BoxParser.stsdBox.prototype = new BoxParser.FullBox();
BoxParser.stsdBox.prototype.parse = function (stream) {
	var i;
	var ret;
	var entryCount;
	var box;
	this.parseFullHeader(stream);
	entryCount = stream.readUint32();
	for (i = 1; i <= entryCount; i++) {
		ret = BoxParser.parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			if (BoxParser[ret.type + "SampleEntry"]) {
				box = new BoxParser[ret.type + "SampleEntry"](ret.size);
				box.hdr_size = ret.hdr_size;
				box.start = ret.start;
			} else {
				Log$2.warn("BoxParser", "Unknown sample entry type: " + ret.type);
				box = new BoxParser.SampleEntry(ret.type, ret.size, ret.hdr_size, ret.start);
			}
			if (box.write === BoxParser.SampleEntry.prototype.write) {
				Log$2.warn("BoxParser", box.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
				box.parseDataAndRewind(stream);
			}
			box.parse(stream);
			this.entries.push(box);
		} else {
			return;
		}
	}
};

// file:src/parsing/stsg.js
BoxParser.stsgBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.grouping_type = stream.readUint32();
	var count = stream.readUint16();
	this.group_description_index = [];
	for (var i = 0; i < count; i++) {
		this.group_description_index[i] = stream.readUint32();
	}
};

// file:src/parsing/stsh.js
BoxParser.stshBox.prototype.parse = function (stream) {
	var entry_count;
	var i;
	this.parseFullHeader(stream);
	entry_count = stream.readUint32();
	this.shadowed_sample_numbers = [];
	this.sync_sample_numbers = [];
	if (this.version === 0) {
		for (i = 0; i < entry_count; i++) {
			this.shadowed_sample_numbers.push(stream.readUint32());
			this.sync_sample_numbers.push(stream.readUint32());
		}
	}
};

// file:src/parsing/stss.js
BoxParser.stssBox.prototype.parse = function (stream) {
	var i;
	var entry_count;
	this.parseFullHeader(stream);
	entry_count = stream.readUint32();
	if (this.version === 0) {
		this.sample_numbers = [];
		for (i = 0; i < entry_count; i++) {
			this.sample_numbers.push(stream.readUint32());
		}
	}
};

// file:src/parsing/stsz.js
BoxParser.stszBox.prototype.parse = function (stream) {
	var i;
	this.parseFullHeader(stream);
	this.sample_sizes = [];
	if (this.version === 0) {
		this.sample_size = stream.readUint32();
		this.sample_count = stream.readUint32();
		if (this.sample_size === 0) {
			this.sample_sizes = stream.readUint32Array(this.sample_count);
		} else {
			for (i = 0; i < this.sample_count; i++) {
				this.sample_sizes[i] = this.sample_size;
			}
		}
	}
};

// file:src/parsing/stts.js
BoxParser.sttsBox.prototype.parse = function (stream) {
	var entry_count;
	var i;
	var delta;
	this.parseFullHeader(stream);
	entry_count = stream.readUint32();
	this.sample_counts = [];
	this.sample_deltas = [];
	if (this.version === 0) {
		for (i = 0; i < entry_count; i++) {
			this.sample_counts.push(stream.readUint32());
			delta = stream.readInt32();
			if (delta < 0) {
				Log$2.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!");
				delta = 1;
			}
			this.sample_deltas.push(delta);
		}
	}
};

// file:src/parsing/stvi.js
BoxParser.stviBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	var tmp32 = stream.readUint32();
	this.single_view_allowed = tmp32 & 0x3;
	this.stereo_scheme = stream.readUint32();
	var length = stream.readUint32();
	this.stereo_indication_type = stream.readString(length);
	var ret;
	var box;
	this.boxes = [];
	while (stream.getPosition() < this.start + this.size) {
		ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			box = ret.box;
			this.boxes.push(box);
			this[box.type] = box;
		} else {
			return;
		}
	}
};

// file:src/parsing/styp.js
BoxParser.stypBox.prototype.parse = function (stream) {
	BoxParser.ftypBox.prototype.parse.call(this, stream);
};

// file:src/parsing/stz2.js
BoxParser.stz2Box.prototype.parse = function (stream) {
	var i;
	var sample_size;
	var sample_count;
	this.parseFullHeader(stream);
	this.sample_sizes = [];
	if (this.version === 0) {
		this.reserved = stream.readUint24();
		this.field_size = stream.readUint8();
		sample_count = stream.readUint32();
		if (this.field_size === 4) {
			for (i = 0; i < sample_count; i += 2) {
				var tmp = stream.readUint8();
				this.sample_sizes[i] = tmp >> 4 & 0xF;
				this.sample_sizes[i + 1] = tmp & 0xF;
			}
		} else if (this.field_size === 8) {
			for (i = 0; i < sample_count; i++) {
				this.sample_sizes[i] = stream.readUint8();
			}
		} else if (this.field_size === 16) {
			for (i = 0; i < sample_count; i++) {
				this.sample_sizes[i] = stream.readUint16();
			}
		} else {
			Log$2.error("BoxParser", "Error in length field in stz2 box");
		}
	}
};

// file:src/parsing/subs.js
BoxParser.subsBox.prototype.parse = function (stream) {
	var i, j;
	var entry_count;
	var subsample_count;
	this.parseFullHeader(stream);
	entry_count = stream.readUint32();
	this.entries = [];
	for (i = 0; i < entry_count; i++) {
		var sampleInfo = {};
		this.entries[i] = sampleInfo;
		sampleInfo.sample_delta = stream.readUint32();
		sampleInfo.subsamples = [];
		subsample_count = stream.readUint16();
		if (subsample_count > 0) {
			for (j = 0; j < subsample_count; j++) {
				var subsample = {};
				sampleInfo.subsamples.push(subsample);
				if (this.version == 1) {
					subsample.size = stream.readUint32();
				} else {
					subsample.size = stream.readUint16();
				}
				subsample.priority = stream.readUint8();
				subsample.discardable = stream.readUint8();
				subsample.codec_specific_parameters = stream.readUint32();
			}
		}
	}
};

// file:src/parsing/tenc.js
BoxParser.tencBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	stream.readUint8(); // reserved
	if (this.version === 0) {
		stream.readUint8();
	} else {
		var tmp = stream.readUint8();
		this.default_crypt_byte_block = tmp >> 4 & 0xF;
		this.default_skip_byte_block = tmp & 0xF;
	}
	this.default_isProtected = stream.readUint8();
	this.default_Per_Sample_IV_Size = stream.readUint8();
	this.default_KID = stream.readUint8Array(16);
	if (this.default_isProtected === 1 && this.default_Per_Sample_IV_Size === 0) {
		this.default_constant_IV_size = stream.readUint8();
		this.default_constant_IV = stream.readUint8Array(this.default_constant_IV_size);
	}
}; // file:src/parsing/tfdt.js
BoxParser.tfdtBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	if (this.version == 1) {
		this.baseMediaDecodeTime = stream.readUint64();
	} else {
		this.baseMediaDecodeTime = stream.readUint32();
	}
};

// file:src/parsing/tfhd.js
BoxParser.tfhdBox.prototype.parse = function (stream) {
	var readBytes = 0;
	this.parseFullHeader(stream);
	this.track_id = stream.readUint32();
	if (this.size - this.hdr_size > readBytes && this.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET) {
		this.base_data_offset = stream.readUint64();
		readBytes += 8;
	} else {
		this.base_data_offset = 0;
	}
	if (this.size - this.hdr_size > readBytes && this.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC) {
		this.default_sample_description_index = stream.readUint32();
		readBytes += 4;
	} else {
		this.default_sample_description_index = 0;
	}
	if (this.size - this.hdr_size > readBytes && this.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR) {
		this.default_sample_duration = stream.readUint32();
		readBytes += 4;
	} else {
		this.default_sample_duration = 0;
	}
	if (this.size - this.hdr_size > readBytes && this.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE) {
		this.default_sample_size = stream.readUint32();
		readBytes += 4;
	} else {
		this.default_sample_size = 0;
	}
	if (this.size - this.hdr_size > readBytes && this.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS) {
		this.default_sample_flags = stream.readUint32();
		readBytes += 4;
	} else {
		this.default_sample_flags = 0;
	}
};

// file:src/parsing/tfra.js
BoxParser.tfraBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.track_ID = stream.readUint32();
	stream.readUint24();
	var tmp_byte = stream.readUint8();
	this.length_size_of_traf_num = tmp_byte >> 4 & 0x3;
	this.length_size_of_trun_num = tmp_byte >> 2 & 0x3;
	this.length_size_of_sample_num = tmp_byte & 0x3;
	this.entries = [];
	var number_of_entries = stream.readUint32();
	for (var i = 0; i < number_of_entries; i++) {
		if (this.version === 1) {
			this.time = stream.readUint64();
			this.moof_offset = stream.readUint64();
		} else {
			this.time = stream.readUint32();
			this.moof_offset = stream.readUint32();
		}
		this.traf_number = stream["readUint" + 8 * (this.length_size_of_traf_num + 1)]();
		this.trun_number = stream["readUint" + 8 * (this.length_size_of_trun_num + 1)]();
		this.sample_number = stream["readUint" + 8 * (this.length_size_of_sample_num + 1)]();
	}
};

// file:src/parsing/tkhd.js
BoxParser.tkhdBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	if (this.version == 1) {
		this.creation_time = stream.readUint64();
		this.modification_time = stream.readUint64();
		this.track_id = stream.readUint32();
		stream.readUint32();
		this.duration = stream.readUint64();
	} else {
		this.creation_time = stream.readUint32();
		this.modification_time = stream.readUint32();
		this.track_id = stream.readUint32();
		stream.readUint32();
		this.duration = stream.readUint32();
	}
	stream.readUint32Array(2);
	this.layer = stream.readInt16();
	this.alternate_group = stream.readInt16();
	this.volume = stream.readInt16() >> 8;
	stream.readUint16();
	this.matrix = stream.readInt32Array(9);
	this.width = stream.readUint32();
	this.height = stream.readUint32();
};

// file:src/parsing/tmax.js
BoxParser.tmaxBox.prototype.parse = function (stream) {
	this.time = stream.readUint32();
};

// file:src/parsing/tmin.js
BoxParser.tminBox.prototype.parse = function (stream) {
	this.time = stream.readUint32();
};

// file:src/parsing/totl.js
BoxParser.totlBox.prototype.parse = function (stream) {
	this.bytessent = stream.readUint32();
};

// file:src/parsing/tpay.js
BoxParser.tpayBox.prototype.parse = function (stream) {
	this.bytessent = stream.readUint32();
};

// file:src/parsing/tpyl.js
BoxParser.tpylBox.prototype.parse = function (stream) {
	this.bytessent = stream.readUint64();
};

// file:src/parsing/tref.js
BoxParser.trefBox.prototype.parse = function (stream) {
	var ret;
	var box;
	while (stream.getPosition() < this.start + this.size) {
		ret = BoxParser.parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			box = new BoxParser.TrackReferenceTypeBox(ret.type, ret.size, ret.hdr_size, ret.start);
			if (box.write === BoxParser.Box.prototype.write && box.type !== "mdat") {
				Log$2.warn("BoxParser", box.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
				box.parseDataAndRewind(stream);
			}
			box.parse(stream);
			this.boxes.push(box);
		} else {
			return;
		}
	}
};

// file:src/parsing/trep.js
BoxParser.trepBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.track_ID = stream.readUint32();
	this.boxes = [];
	while (stream.getPosition() < this.start + this.size) {
		ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
		if (ret.code === BoxParser.OK) {
			box = ret.box;
			this.boxes.push(box);
		} else {
			return;
		}
	}
};

// file:src/parsing/trex.js
BoxParser.trexBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.track_id = stream.readUint32();
	this.default_sample_description_index = stream.readUint32();
	this.default_sample_duration = stream.readUint32();
	this.default_sample_size = stream.readUint32();
	this.default_sample_flags = stream.readUint32();
};

// file:src/parsing/trpy.js
BoxParser.trpyBox.prototype.parse = function (stream) {
	this.bytessent = stream.readUint64();
};

// file:src/parsing/trun.js
BoxParser.trunBox.prototype.parse = function (stream) {
	var readBytes = 0;
	this.parseFullHeader(stream);
	this.sample_count = stream.readUint32();
	readBytes += 4;
	if (this.size - this.hdr_size > readBytes && this.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET) {
		this.data_offset = stream.readInt32(); //signed
		readBytes += 4;
	} else {
		this.data_offset = 0;
	}
	if (this.size - this.hdr_size > readBytes && this.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG) {
		this.first_sample_flags = stream.readUint32();
		readBytes += 4;
	} else {
		this.first_sample_flags = 0;
	}
	this.sample_duration = [];
	this.sample_size = [];
	this.sample_flags = [];
	this.sample_composition_time_offset = [];
	if (this.size - this.hdr_size > readBytes) {
		for (var i = 0; i < this.sample_count; i++) {
			if (this.flags & BoxParser.TRUN_FLAGS_DURATION) {
				this.sample_duration[i] = stream.readUint32();
			}
			if (this.flags & BoxParser.TRUN_FLAGS_SIZE) {
				this.sample_size[i] = stream.readUint32();
			}
			if (this.flags & BoxParser.TRUN_FLAGS_FLAGS) {
				this.sample_flags[i] = stream.readUint32();
			}
			if (this.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
				if (this.version === 0) {
					this.sample_composition_time_offset[i] = stream.readUint32();
				} else {
					this.sample_composition_time_offset[i] = stream.readInt32(); //signed
				}
			}
		}
	}
};

// file:src/parsing/tsel.js
BoxParser.tselBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.switch_group = stream.readUint32();
	var count = (this.size - this.hdr_size - 4) / 4;
	this.attribute_list = [];
	for (var i = 0; i < count; i++) {
		this.attribute_list[i] = stream.readUint32();
	}
};

// file:src/parsing/txtC.js
BoxParser.txtCBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.config = stream.readCString();
};

// file:src/parsing/url.js
BoxParser["url Box"].prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	if (this.flags !== 0x000001) {
		this.location = stream.readCString();
	}
};

// file:src/parsing/urn.js
BoxParser["urn Box"].prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.name = stream.readCString();
	if (this.size - this.hdr_size - this.name.length - 1 > 0) {
		this.location = stream.readCString();
	}
};

// file:src/parsing/vmhd.js
BoxParser.vmhdBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.graphicsmode = stream.readUint16();
	this.opcolor = stream.readUint16Array(3);
};

// file:src/parsing/vpcC.js
BoxParser.vpcCBox.prototype.parse = function (stream) {
	this.parseFullHeader(stream);
	this.profile = stream.readUint8();
	this.level = stream.readUint8();
	var tmp = stream.readUint8();
	this.bitDepth = tmp >> 4 & 0xF;
	this.colorSpace = tmp & 0xF;
	tmp = stream.readUint8();
	this.chromaSubsampling = tmp >> 4 & 0xF;
	this.transferFunction = tmp >> 1 & 0x7;
	this.videoFullRangeFlag = tmp & 0x1;
	var codecIntializationDataSize = stream.readUint16();
	this.codecIntializationData = stream.readUint8Array(codecIntializationDataSize);
}; // file:src/parsing/vttC.js
BoxParser.vttCBox.prototype.parse = function (stream) {
	this.text = stream.readString(this.size - this.hdr_size);
};

// file:src/box-write.js
/* 
 * Copyright (c) Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
BoxParser.Box.prototype.writeHeader = function (stream, msg) {
	this.size += 8;
	if (this.size > MAX_SIZE) {
		this.size += 8;
	}
	if (this.type === "uuid") {
		this.size += 16;
	}
	Log$2.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + stream.getPosition() + (msg || ""));
	if (this.size > MAX_SIZE) {
		stream.writeUint32(1);
	} else {
		this.sizePosition = stream.getPosition();
		stream.writeUint32(this.size);
	}
	stream.writeString(this.type, null, 4);
	if (this.type === "uuid") {
		stream.writeUint8Array(this.uuid);
	}
	if (this.size > MAX_SIZE) {
		stream.writeUint64(this.size);
	}
};

BoxParser.FullBox.prototype.writeHeader = function (stream) {
	this.size += 4;
	BoxParser.Box.prototype.writeHeader.call(this, stream, " v=" + this.version + " f=" + this.flags);
	stream.writeUint8(this.version);
	stream.writeUint24(this.flags);
};

BoxParser.Box.prototype.write = function (stream) {
	if (this.type === "mdat") {
		/* TODO: fix this */
		if (this.data) {
			this.size = this.data.length;
			this.writeHeader(stream);
			stream.writeUint8Array(this.data);
		}
	} else {
		this.size = this.data ? this.data.length : 0;
		this.writeHeader(stream);
		if (this.data) {
			stream.writeUint8Array(this.data);
		}
	}
};

BoxParser.ContainerBox.prototype.write = function (stream) {
	this.size = 0;
	this.writeHeader(stream);
	for (var i = 0; i < this.boxes.length; i++) {
		if (this.boxes[i]) {
			this.boxes[i].write(stream);
			this.size += this.boxes[i].size;
		}
	}
	/* adjusting the size, now that all sub-boxes are known */
	Log$2.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
	stream.adjustUint32(this.sizePosition, this.size);
};

BoxParser.TrackReferenceTypeBox.prototype.write = function (stream) {
	this.size = this.track_ids.length * 4;
	this.writeHeader(stream);
	stream.writeUint32Array(this.track_ids);
};

// file:src/writing/avcC.js
BoxParser.avcCBox.prototype.write = function (stream) {
	var i;
	this.size = 7;
	for (i = 0; i < this.SPS.length; i++) {
		this.size += 2 + this.SPS[i].length;
	}
	for (i = 0; i < this.PPS.length; i++) {
		this.size += 2 + this.PPS[i].length;
	}
	if (this.ext) {
		this.size += this.ext.length;
	}
	this.writeHeader(stream);
	stream.writeUint8(this.configurationVersion);
	stream.writeUint8(this.AVCProfileIndication);
	stream.writeUint8(this.profile_compatibility);
	stream.writeUint8(this.AVCLevelIndication);
	stream.writeUint8(this.lengthSizeMinusOne + (63 << 2));
	stream.writeUint8(this.SPS.length + (7 << 5));
	for (i = 0; i < this.SPS.length; i++) {
		stream.writeUint16(this.SPS[i].length);
		stream.writeUint8Array(this.SPS[i]);
	}
	stream.writeUint8(this.PPS.length);
	for (i = 0; i < this.PPS.length; i++) {
		stream.writeUint16(this.PPS[i].length);
		stream.writeUint8Array(this.PPS[i]);
	}
	if (this.ext) {
		stream.writeUint8Array(this.ext);
	}
};

// file:src/writing/co64.js
BoxParser.co64Box.prototype.write = function (stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 4 + 8 * this.chunk_offsets.length;
	this.writeHeader(stream);
	stream.writeUint32(this.chunk_offsets.length);
	for (i = 0; i < this.chunk_offsets.length; i++) {
		stream.writeUint64(this.chunk_offsets[i]);
	}
};

// file:src/writing/cslg.js
BoxParser.cslgBox.prototype.write = function (stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 4 * 5;
	this.writeHeader(stream);
	stream.writeInt32(this.compositionToDTSShift);
	stream.writeInt32(this.leastDecodeToDisplayDelta);
	stream.writeInt32(this.greatestDecodeToDisplayDelta);
	stream.writeInt32(this.compositionStartTime);
	stream.writeInt32(this.compositionEndTime);
};

// file:src/writing/ctts.js
BoxParser.cttsBox.prototype.write = function (stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 4 + 8 * this.sample_counts.length;
	this.writeHeader(stream);
	stream.writeUint32(this.sample_counts.length);
	for (i = 0; i < this.sample_counts.length; i++) {
		stream.writeUint32(this.sample_counts[i]);
		if (this.version === 1) {
			stream.writeInt32(this.sample_offsets[i]); /* signed */
		} else {
			stream.writeUint32(this.sample_offsets[i]); /* unsigned */
		}
	}
};

// file:src/writing/dref.js
BoxParser.drefBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4; //
	this.writeHeader(stream);
	stream.writeUint32(this.entries.length);
	for (var i = 0; i < this.entries.length; i++) {
		this.entries[i].write(stream);
		this.size += this.entries[i].size;
	}
	/* adjusting the size, now that all sub-boxes are known */
	Log$2.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
	stream.adjustUint32(this.sizePosition, this.size);
};

// file:src/writing/elng.js
BoxParser.elngBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = this.extended_language.length;
	this.writeHeader(stream);
	stream.writeString(this.extended_language);
};

// file:src/writing/elst.js
BoxParser.elstBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4 + 12 * this.entries.length;
	this.writeHeader(stream);
	stream.writeUint32(this.entries.length);
	for (var i = 0; i < this.entries.length; i++) {
		var entry = this.entries[i];
		stream.writeUint32(entry.segment_duration);
		stream.writeInt32(entry.media_time);
		stream.writeInt16(entry.media_rate_integer);
		stream.writeInt16(entry.media_rate_fraction);
	}
};

// file:src/writing/emsg.js
BoxParser.emsgBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4 * 4 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1);
	this.writeHeader(stream);
	stream.writeCString(this.scheme_id_uri);
	stream.writeCString(this.value);
	stream.writeUint32(this.timescale);
	stream.writeUint32(this.presentation_time_delta);
	stream.writeUint32(this.event_duration);
	stream.writeUint32(this.id);
	stream.writeUint8Array(this.message_data);
};

// file:src/writing/ftyp.js
BoxParser.ftypBox.prototype.write = function (stream) {
	this.size = 8 + 4 * this.compatible_brands.length;
	this.writeHeader(stream);
	stream.writeString(this.major_brand, null, 4);
	stream.writeUint32(this.minor_version);
	for (var i = 0; i < this.compatible_brands.length; i++) {
		stream.writeString(this.compatible_brands[i], null, 4);
	}
};

// file:src/writing/hdlr.js
BoxParser.hdlrBox.prototype.write = function (stream) {
	this.size = 5 * 4 + this.name.length + 1;
	this.version = 0;
	this.flags = 0;
	this.writeHeader(stream);
	stream.writeUint32(0);
	stream.writeString(this.handler, null, 4);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeCString(this.name);
};

// file:src/writing/kind.js
BoxParser.kindBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = this.schemeURI.length + 1 + (this.value.length + 1);
	this.writeHeader(stream);
	stream.writeCString(this.schemeURI);
	stream.writeCString(this.value);
};

// file:src/writing/mdhd.js
BoxParser.mdhdBox.prototype.write = function (stream) {
	this.size = 4 * 4 + 2 * 2;
	this.flags = 0;
	this.version = 0;
	this.writeHeader(stream);
	stream.writeUint32(this.creation_time);
	stream.writeUint32(this.modification_time);
	stream.writeUint32(this.timescale);
	stream.writeUint32(this.duration);
	stream.writeUint16(this.language);
	stream.writeUint16(0);
};

// file:src/writing/mehd.js
BoxParser.mehdBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4;
	this.writeHeader(stream);
	stream.writeUint32(this.fragment_duration);
};

// file:src/writing/mfhd.js
BoxParser.mfhdBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4;
	this.writeHeader(stream);
	stream.writeUint32(this.sequence_number);
};

// file:src/writing/mvhd.js
BoxParser.mvhdBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 23 * 4 + 2 * 2;
	this.writeHeader(stream);
	stream.writeUint32(this.creation_time);
	stream.writeUint32(this.modification_time);
	stream.writeUint32(this.timescale);
	stream.writeUint32(this.duration);
	stream.writeUint32(this.rate);
	stream.writeUint16(this.volume << 8);
	stream.writeUint16(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32Array(this.matrix);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(this.next_track_id);
};

// file:src/writing/sampleentry.js
BoxParser.SampleEntry.prototype.writeHeader = function (stream) {
	this.size = 8;
	BoxParser.Box.prototype.writeHeader.call(this, stream);
	stream.writeUint8(0);
	stream.writeUint8(0);
	stream.writeUint8(0);
	stream.writeUint8(0);
	stream.writeUint8(0);
	stream.writeUint8(0);
	stream.writeUint16(this.data_reference_index);
};

BoxParser.SampleEntry.prototype.writeFooter = function (stream) {
	for (var i = 0; i < this.boxes.length; i++) {
		this.boxes[i].write(stream);
		this.size += this.boxes[i].size;
	}
	Log$2.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
	stream.adjustUint32(this.sizePosition, this.size);
};

BoxParser.SampleEntry.prototype.write = function (stream) {
	this.writeHeader(stream);
	stream.writeUint8Array(this.data);
	this.size += this.data.length;
	Log$2.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
	stream.adjustUint32(this.sizePosition, this.size);
};

BoxParser.VisualSampleEntry.prototype.write = function (stream) {
	this.writeHeader(stream);
	this.size += 2 * 7 + 6 * 4 + 32;
	stream.writeUint16(0);
	stream.writeUint16(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint16(this.width);
	stream.writeUint16(this.height);
	stream.writeUint32(this.horizresolution);
	stream.writeUint32(this.vertresolution);
	stream.writeUint32(0);
	stream.writeUint16(this.frame_count);
	stream.writeString(this.compressorname, null, 32);
	stream.writeUint16(this.depth);
	stream.writeInt16(-1);
	this.writeFooter(stream);
};

BoxParser.AudioSampleEntry.prototype.write = function (stream) {
	this.writeHeader(stream);
	this.size += 2 * 4 + 3 * 4;
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeUint16(this.channel_count);
	stream.writeUint16(this.samplesize);
	stream.writeUint16(0);
	stream.writeUint16(0);
	stream.writeUint32(this.samplerate << 16);
	this.writeFooter(stream);
};
// file:src/writing/samplegroups/samplegroup.js
BoxParser.SampleGroupEntry.prototype.write = function (stream) {
	stream.writeUint8Array(this.data);
};

// file:src/writing/sbgp.js
BoxParser.sbgpBox.prototype.write = function (stream) {
	this.version = 1;
	this.flags = 0;
	this.size = 12 + 8 * this.entries.length;
	this.writeHeader(stream);
	stream.writeString(this.grouping_type, null, 4);
	stream.writeUint32(this.grouping_type_parameter);
	stream.writeUint32(this.entries.length);
	for (var i = 0; i < this.entries.length; i++) {
		var entry = this.entries[i];
		stream.writeInt32(entry.sample_count);
		stream.writeInt32(entry.group_description_index);
	}
};

// file:src/writing/sgpd.js
BoxParser.sgpdBox.prototype.write = function (stream) {
	var i;
	var entry;
	// leave version as read
	// this.version;
	this.flags = 0;
	this.size = 12;
	for (i = 0; i < this.entries.length; i++) {
		entry = this.entries[i];
		if (this.version === 1) {
			if (this.default_length === 0) {
				this.size += 4;
			}
			this.size += entry.data.length;
		}
	}
	this.writeHeader(stream);
	stream.writeString(this.grouping_type, null, 4);
	if (this.version === 1) {
		stream.writeUint32(this.default_length);
	}
	if (this.version >= 2) {
		stream.writeUint32(this.default_sample_description_index);
	}
	stream.writeUint32(this.entries.length);
	for (i = 0; i < this.entries.length; i++) {
		entry = this.entries[i];
		if (this.version === 1) {
			if (this.default_length === 0) {
				stream.writeUint32(entry.description_length);
			}
		}
		entry.write(stream);
	}
};

// file:src/writing/sidx.js
BoxParser.sidxBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4 * 4 + 2 + 2 + 12 * this.references.length;
	this.writeHeader(stream);
	stream.writeUint32(this.reference_ID);
	stream.writeUint32(this.timescale);
	stream.writeUint32(this.earliest_presentation_time);
	stream.writeUint32(this.first_offset);
	stream.writeUint16(0);
	stream.writeUint16(this.references.length);
	for (var i = 0; i < this.references.length; i++) {
		var ref = this.references[i];
		stream.writeUint32(ref.reference_type << 31 | ref.referenced_size);
		stream.writeUint32(ref.subsegment_duration);
		stream.writeUint32(ref.starts_with_SAP << 31 | ref.SAP_type << 28 | ref.SAP_delta_time);
	}
};

// file:src/writing/stco.js
BoxParser.stcoBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4 + 4 * this.chunk_offsets.length;
	this.writeHeader(stream);
	stream.writeUint32(this.chunk_offsets.length);
	stream.writeUint32Array(this.chunk_offsets);
};

// file:src/writing/stsc.js
BoxParser.stscBox.prototype.write = function (stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 4 + 12 * this.first_chunk.length;
	this.writeHeader(stream);
	stream.writeUint32(this.first_chunk.length);
	for (i = 0; i < this.first_chunk.length; i++) {
		stream.writeUint32(this.first_chunk[i]);
		stream.writeUint32(this.samples_per_chunk[i]);
		stream.writeUint32(this.sample_description_index[i]);
	}
};

// file:src/writing/stsd.js
BoxParser.stsdBox.prototype.write = function (stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 0;
	this.writeHeader(stream);
	stream.writeUint32(this.entries.length);
	this.size += 4;
	for (i = 0; i < this.entries.length; i++) {
		this.entries[i].write(stream);
		this.size += this.entries[i].size;
	}
	/* adjusting the size, now that all sub-boxes are known */
	Log$2.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
	stream.adjustUint32(this.sizePosition, this.size);
};

// file:src/writing/stsh.js
BoxParser.stshBox.prototype.write = function (stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 4 + 8 * this.shadowed_sample_numbers.length;
	this.writeHeader(stream);
	stream.writeUint32(this.shadowed_sample_numbers.length);
	for (i = 0; i < this.shadowed_sample_numbers.length; i++) {
		stream.writeUint32(this.shadowed_sample_numbers[i]);
		stream.writeUint32(this.sync_sample_numbers[i]);
	}
};

// file:src/writing/stss.js
BoxParser.stssBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4 + 4 * this.sample_numbers.length;
	this.writeHeader(stream);
	stream.writeUint32(this.sample_numbers.length);
	stream.writeUint32Array(this.sample_numbers);
};

// file:src/writing/stsz.js
BoxParser.stszBox.prototype.write = function (stream) {
	var i;
	var constant = true;
	this.version = 0;
	this.flags = 0;
	if (this.sample_sizes.length > 0) {
		i = 0;
		while (i + 1 < this.sample_sizes.length) {
			if (this.sample_sizes[i + 1] !== this.sample_sizes[0]) {
				constant = false;
				break;
			} else {
				i++;
			}
		}
	} else {
		constant = false;
	}
	this.size = 8;
	if (!constant) {
		this.size += 4 * this.sample_sizes.length;
	}
	this.writeHeader(stream);
	if (!constant) {
		stream.writeUint32(0);
	} else {
		stream.writeUint32(this.sample_sizes[0]);
	}
	stream.writeUint32(this.sample_sizes.length);
	if (!constant) {
		stream.writeUint32Array(this.sample_sizes);
	}
};

// file:src/writing/stts.js
BoxParser.sttsBox.prototype.write = function (stream) {
	var i;
	this.version = 0;
	this.flags = 0;
	this.size = 4 + 8 * this.sample_counts.length;
	this.writeHeader(stream);
	stream.writeUint32(this.sample_counts.length);
	for (i = 0; i < this.sample_counts.length; i++) {
		stream.writeUint32(this.sample_counts[i]);
		stream.writeUint32(this.sample_deltas[i]);
	}
};

// file:src/writing/tfdt.js
BoxParser.tfdtBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4;
	if (this.version === 1) {
		this.size += 4;
	}
	this.writeHeader(stream);
	if (this.version === 1) {
		stream.writeUint64(this.baseMediaDecodeTime);
	} else {
		stream.writeUint32(this.baseMediaDecodeTime);
	}
};

// file:src/writing/tfhd.js
BoxParser.tfhdBox.prototype.write = function (stream) {
	this.version = 0;
	this.size = 4;
	if (this.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET) {
		this.size += 8;
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC) {
		this.size += 4;
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR) {
		this.size += 4;
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE) {
		this.size += 4;
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS) {
		this.size += 4;
	}
	this.writeHeader(stream);
	stream.writeUint32(this.track_id);
	if (this.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET) {
		stream.writeUint64(this.base_data_offset);
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC) {
		stream.writeUint32(this.default_sample_description_index);
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR) {
		stream.writeUint32(this.default_sample_duration);
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE) {
		stream.writeUint32(this.default_sample_size);
	}
	if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS) {
		stream.writeUint32(this.default_sample_flags);
	}
};

// file:src/writing/tkhd.js
BoxParser.tkhdBox.prototype.write = function (stream) {
	this.version = 0;
	//this.flags = 0;
	this.size = 4 * 18 + 2 * 4;
	this.writeHeader(stream);
	stream.writeUint32(this.creation_time);
	stream.writeUint32(this.modification_time);
	stream.writeUint32(this.track_id);
	stream.writeUint32(0);
	stream.writeUint32(this.duration);
	stream.writeUint32(0);
	stream.writeUint32(0);
	stream.writeInt16(this.layer);
	stream.writeInt16(this.alternate_group);
	stream.writeInt16(this.volume << 8);
	stream.writeUint16(0);
	stream.writeInt32Array(this.matrix);
	stream.writeUint32(this.width);
	stream.writeUint32(this.height);
};

// file:src/writing/trex.js
BoxParser.trexBox.prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = 4 * 5;
	this.writeHeader(stream);
	stream.writeUint32(this.track_id);
	stream.writeUint32(this.default_sample_description_index);
	stream.writeUint32(this.default_sample_duration);
	stream.writeUint32(this.default_sample_size);
	stream.writeUint32(this.default_sample_flags);
};

// file:src/writing/trun.js
BoxParser.trunBox.prototype.write = function (stream) {
	this.version = 0;
	this.size = 4;
	if (this.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET) {
		this.size += 4;
	}
	if (this.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG) {
		this.size += 4;
	}
	if (this.flags & BoxParser.TRUN_FLAGS_DURATION) {
		this.size += 4 * this.sample_duration.length;
	}
	if (this.flags & BoxParser.TRUN_FLAGS_SIZE) {
		this.size += 4 * this.sample_size.length;
	}
	if (this.flags & BoxParser.TRUN_FLAGS_FLAGS) {
		this.size += 4 * this.sample_flags.length;
	}
	if (this.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
		this.size += 4 * this.sample_composition_time_offset.length;
	}
	this.writeHeader(stream);
	stream.writeUint32(this.sample_count);
	if (this.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET) {
		this.data_offset_position = stream.getPosition();
		stream.writeInt32(this.data_offset); //signed
	}
	if (this.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG) {
		stream.writeUint32(this.first_sample_flags);
	}
	for (var i = 0; i < this.sample_count; i++) {
		if (this.flags & BoxParser.TRUN_FLAGS_DURATION) {
			stream.writeUint32(this.sample_duration[i]);
		}
		if (this.flags & BoxParser.TRUN_FLAGS_SIZE) {
			stream.writeUint32(this.sample_size[i]);
		}
		if (this.flags & BoxParser.TRUN_FLAGS_FLAGS) {
			stream.writeUint32(this.sample_flags[i]);
		}
		if (this.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
			if (this.version === 0) {
				stream.writeUint32(this.sample_composition_time_offset[i]);
			} else {
				stream.writeInt32(this.sample_composition_time_offset[i]); //signed
			}
		}
	}
};

// file:src/writing/url.js
BoxParser["url Box"].prototype.write = function (stream) {
	this.version = 0;
	if (this.location) {
		this.flags = 0;
		this.size = this.location.length + 1;
	} else {
		this.flags = 0x000001;
		this.size = 0;
	}
	this.writeHeader(stream);
	if (this.location) {
		stream.writeCString(this.location);
	}
};

// file:src/writing/urn.js
BoxParser["urn Box"].prototype.write = function (stream) {
	this.version = 0;
	this.flags = 0;
	this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0);
	this.writeHeader(stream);
	stream.writeCString(this.name);
	if (this.location) {
		stream.writeCString(this.location);
	}
};

// file:src/writing/vmhd.js
BoxParser.vmhdBox.prototype.write = function (stream) {
	var i;
	this.version = 0;
	this.flags = 1;
	this.size = 8;
	this.writeHeader(stream);
	stream.writeUint16(this.graphicsmode);
	stream.writeUint16Array(this.opcolor);
};

// file:src/box-unpack.js
/* 
 * Copyright (c) Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
BoxParser.cttsBox.prototype.unpack = function (samples) {
	var i, j, k;
	k = 0;
	for (i = 0; i < this.sample_counts.length; i++) {
		for (j = 0; j < this.sample_counts[i]; j++) {
			samples[k].pts = samples[k].dts + this.sample_offsets[i];
			k++;
		}
	}
};

BoxParser.sttsBox.prototype.unpack = function (samples) {
	var i, j, k;
	k = 0;
	for (i = 0; i < this.sample_counts.length; i++) {
		for (j = 0; j < this.sample_counts[i]; j++) {
			if (k === 0) {
				samples[k].dts = 0;
			} else {
				samples[k].dts = samples[k - 1].dts + this.sample_deltas[i];
			}
			k++;
		}
	}
};

BoxParser.stcoBox.prototype.unpack = function (samples) {
	var i;
	for (i = 0; i < this.chunk_offsets.length; i++) {
		samples[i].offset = this.chunk_offsets[i];
	}
};

BoxParser.stscBox.prototype.unpack = function (samples) {
	var i, j, k, l, m;
	l = 0;
	m = 0;
	for (i = 0; i < this.first_chunk.length; i++) {
		for (j = 0; j < (i + 1 < this.first_chunk.length ? this.first_chunk[i + 1] : Infinity); j++) {
			m++;
			for (k = 0; k < this.samples_per_chunk[i]; k++) {
				if (samples[l]) {
					samples[l].description_index = this.sample_description_index[i];
					samples[l].chunk_index = m;
				} else {
					return;
				}
				l++;
			}
		}
	}
};

BoxParser.stszBox.prototype.unpack = function (samples) {
	var i;
	for (i = 0; i < this.sample_sizes.length; i++) {
		samples[i].size = this.sample_sizes[i];
	}
};
// file:src/text-mp4.js
/* 
 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
var VTTin4Parser = function VTTin4Parser() {};

VTTin4Parser.prototype.parseSample = function (data) {
	var cues, cue;
	var stream = new MP4BoxStream(data.buffer);
	cues = [];
	while (!stream.isEos()) {
		cue = BoxParser.parseOneBox(stream, false);
		if (cue.code === BoxParser.OK && cue.box.type === "vttc") {
			cues.push(cue.box);
		}
	}
	return cues;
};

VTTin4Parser.prototype.getText = function (startTime, endTime, data) {
	function pad(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}
	function secToTimestamp(insec) {
		var h = Math.floor(insec / 3600);
		var m = Math.floor((insec - h * 3600) / 60);
		var s = Math.floor(insec - h * 3600 - m * 60);
		var ms = Math.floor((insec - h * 3600 - m * 60 - s) * 1000);
		return "" + pad(h, 2) + ":" + pad(m, 2) + ":" + pad(s, 2) + "." + pad(ms, 3);
	}
	var cues = this.parseSample(data);
	var string = "";
	for (var i = 0; i < cues.length; i++) {
		var cueIn4 = cues[i];
		string += secToTimestamp(startTime) + " --> " + secToTimestamp(endTime) + "\r\n";
		string += cueIn4.payl.text;
	}
	return string;
};

var XMLSubtitlein4Parser = function XMLSubtitlein4Parser() {};

XMLSubtitlein4Parser.prototype.parseSample = function (sample) {
	var res = {};
	var i;
	res.resources = [];
	var stream = new MP4BoxStream(sample.data.buffer);
	if (!sample.subsamples || sample.subsamples.length === 0) {
		res.documentString = stream.readString(sample.data.length);
	} else {
		res.documentString = stream.readString(sample.subsamples[0].size);
		if (sample.subsamples.length > 1) {
			for (i = 1; i < sample.subsamples.length; i++) {
				res.resources[i] = stream.readUint8Array(sample.subsamples[i].size);
			}
		}
	}
	if (typeof DOMParser !== "undefined") {
		res.document = new DOMParser().parseFromString(res.documentString, "application/xml");
	}
	return res;
};

var Textin4Parser = function Textin4Parser() {};

Textin4Parser.prototype.parseSample = function (sample) {
	var textString;
	var stream = new MP4BoxStream(sample.data.buffer);
	textString = stream.readString(sample.data.length);
	return textString;
};

Textin4Parser.prototype.parseConfig = function (data) {
	var textString;
	var stream = new MP4BoxStream(data.buffer);
	stream.readUint32(); // version & flags
	textString = stream.readCString();
	return textString;
};

if (typeof exports !== 'undefined') {
	exports.XMLSubtitlein4Parser = XMLSubtitlein4Parser;
	exports.Textin4Parser = Textin4Parser;
}
// file:src/isofile.js
/* 
 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
var ISOFile = function ISOFile(stream) {
	/* MutiBufferStream object used to parse boxes */
	this.stream = stream;
	/* Array of all boxes (in order) found in the file */
	this.boxes = [];
	/* Array of all mdats */
	this.mdats = [];
	/* Array of all moofs */
	this.moofs = [];
	/* Boolean indicating if the file is compatible with progressive parsing (moov first) */
	this.isProgressive = false;
	/* Boolean used to fire moov start event only once */
	this.moovStartFound = false;
};

ISOFile.prototype.parse = function () {
	var found;
	var ret;
	var box;
	var parseBoxHeadersOnly = false;

	if (this.restoreParsePosition) {
		if (!this.restoreParsePosition()) {
			return;
		}
	}

	while (true) {

		if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
			if (this.processIncompleteMdat()) {
				continue;
			} else {
				return;
			}
		} else {
			if (this.saveParsePosition) {
				this.saveParsePosition();
			}
			ret = BoxParser.parseOneBox(this.stream, parseBoxHeadersOnly);
			if (ret.code === BoxParser.ERR_NOT_ENOUGH_DATA) {
				if (this.processIncompleteBox) {
					if (this.processIncompleteBox(ret)) {
						continue;
					} else {
						return;
					}
				} else {
					return;
				}
			} else {
				/* the box is entirely parsed */
				box = ret.box;
				/* store the box in the 'boxes' array to preserve box order (for file rewrite if needed)  */
				this.boxes.push(box);
				/* but also store box in a property for more direct access */
				switch (box.type) {
					case "mdat":
						this.mdats.push(box);
						break;
					case "moof":
						this.moofs.push(box);
						break;
					case "moov":
						this.moovStartFound = true;
						if (this.mdats.length === 0) {
							this.isProgressive = true;
						}
					/* no break */
					/* falls through */
					default:
						if (this[box.type] !== undefined) {
							Log$2.warn("ISOFile", "Duplicate Box of type: " + box.type + ", overriding previous occurrence");
						}
						this[box.type] = box;
						break;
				}
				if (this.updateUsedBytes) {
					this.updateUsedBytes(box, ret);
				}
			}
		}
	}
};

/* Find and return specific boxes using recursion and early return */
ISOFile.prototype.getBox = function (type) {
	var result = this.getBoxes(type, true);
	return result.length ? result[0] : null;
};

ISOFile.prototype.getBoxes = function (type, returnEarly) {
	var result = [];
	ISOFile._sweep.call(this, type, result, returnEarly);
	return result;
};

ISOFile._sweep = function (type, result, returnEarly) {
	if (this.type && this.type == type) result.push(this);
	for (var box in this.boxes) {
		if (result.length && returnEarly) return;
		ISOFile._sweep.call(this.boxes[box], type, result, returnEarly);
	}
};

if (typeof exports !== 'undefined') {
	exports.ISOFile = ISOFile;
}
// file:src/isofile-advanced-parsing.js
/* position in the current buffer of the beginning of the last box parsed */
ISOFile.prototype.lastBoxStartPosition = 0;
/* indicator if the parsing is stuck in the middle of an mdat box */
ISOFile.prototype.parsingMdat = null;
/* next file position that the parser needs:
    - 0 until the first buffer (i.e. fileStart ===0) has been received 
    - otherwise, the next box start until the moov box has been parsed
    - otherwise, the position of the next sample to fetch
 */
ISOFile.prototype.nextParsePosition = 0;
/* keep mdat data */
ISOFile.prototype.discardMdatData = false;

ISOFile.prototype.processIncompleteBox = function (ret) {
	var box;
	var merged;
	var found;

	/* we did not have enough bytes in the current buffer to parse the entire box */
	if (ret.type === "mdat") {
		/* we had enough bytes to get its type and size and it's an 'mdat' */

		/* special handling for mdat boxes, since we don't actually need to parse it linearly 
     we create the box */
		box = new BoxParser[ret.type + "Box"](ret.size);
		this.parsingMdat = box;
		this.boxes.push(box);
		this.mdats.push(box);
		box.start = ret.start;
		box.hdr_size = ret.hdr_size;
		this.stream.addUsedBytes(box.hdr_size);

		/* indicate that the parsing should start from the end of the box */
		this.lastBoxStartPosition = box.start + box.size;
		/* let's see if we have the end of the box in the other buffers */
		found = this.stream.seek(box.start + box.size, false, this.discardMdatData);
		if (found) {
			/* found the end of the box */
			this.parsingMdat = null;
			/* let's see if we can parse more in this buffer */
			return true;
		} else {
			/* 'mdat' end not found in the existing buffers */
			/* determine the next position in the file to start parsing from */
			if (!this.moovStartFound) {
				/* moov not find yet, 
       the file probably has 'mdat' at the beginning, and 'moov' at the end, 
       indicate that the downloader should not try to download those bytes now */
				this.nextParsePosition = box.start + box.size;
			} else {
				/* we have the start of the moov box, 
       the next bytes should try to complete the current 'mdat' */
				this.nextParsePosition = this.stream.findEndContiguousBuf();
			}
			/* not much we can do, wait for more buffers to arrive */
			return false;
		}
	} else {
		/* box is incomplete, we may not even know its type */
		if (ret.type === "moov") {
			/* the incomplete box is a 'moov' box */
			this.moovStartFound = true;
			if (this.mdats.length === 0) {
				this.isProgressive = true;
			}
		}
		/* either it's not an mdat box (and we need to parse it, we cannot skip it)
     (TODO: we could skip 'free' boxes ...)
  	   or we did not have enough data to parse the type and size of the box, 
     we try to concatenate the current buffer with the next buffer to restart parsing */
		merged = this.stream.mergeNextBuffer ? this.stream.mergeNextBuffer() : false;
		if (merged) {
			/* The next buffer was contiguous, the merging succeeded,
      we can now continue parsing, 
      the next best position to parse is at the end of this new buffer */
			this.nextParsePosition = this.stream.getEndPosition();
			return true;
		} else {
			/* we cannot concatenate existing buffers because they are not contiguous or because there is no additional buffer */
			/* The next best position to parse is still at the end of this old buffer */
			if (!ret.type) {
				/* There were not enough bytes in the buffer to parse the box type and length,
       the next fetch should retrieve those missing bytes, i.e. the next bytes after this buffer */
				this.nextParsePosition = this.stream.getEndPosition();
			} else {
				/* we had enough bytes to parse size and type of the incomplete box
       if we haven't found yet the moov box, skip this one and try the next one 
       if we have found the moov box, let's continue linear parsing */
				if (this.moovStartFound) {
					this.nextParsePosition = this.stream.getEndPosition();
				} else {
					this.nextParsePosition = this.stream.getPosition() + ret.size;
				}
			}
			return false;
		}
	}
};

ISOFile.prototype.hasIncompleteMdat = function () {
	return this.parsingMdat !== null;
};

ISOFile.prototype.processIncompleteMdat = function () {
	var box;
	var found;

	/* we are in the parsing of an incomplete mdat box */
	box = this.parsingMdat;

	found = this.stream.seek(box.start + box.size, false, this.discardMdatData);
	if (found) {
		Log$2.debug("ISOFile", "Found 'mdat' end in buffered data");
		/* the end of the mdat has been found */
		this.parsingMdat = null;
		/* we can parse more in this buffer */
		return true;
	} else {
		/* we don't have the end of this mdat yet, 
     indicate that the next byte to fetch is the end of the buffers we have so far, 
     return and wait for more buffer to come */
		this.nextParsePosition = this.stream.findEndContiguousBuf();
		return false;
	}
};

ISOFile.prototype.restoreParsePosition = function () {
	/* Reposition at the start position of the previous box not entirely parsed */
	return this.stream.seek(this.lastBoxStartPosition, true, this.discardMdatData);
};

ISOFile.prototype.saveParsePosition = function () {
	/* remember the position of the box start in case we need to roll back (if the box is incomplete) */
	this.lastBoxStartPosition = this.stream.getPosition();
};

ISOFile.prototype.updateUsedBytes = function (box, ret) {
	if (this.stream.addUsedBytes) {
		if (box.type === "mdat") {
			/* for an mdat box, only its header is considered used, other bytes will be used when sample data is requested */
			this.stream.addUsedBytes(box.hdr_size);
			if (this.discardMdatData) {
				this.stream.addUsedBytes(box.size - box.hdr_size);
			}
		} else {
			/* for all other boxes, the entire box data is considered used */
			this.stream.addUsedBytes(box.size);
		}
	}
};
// file:src/isofile-advanced-creation.js
ISOFile.prototype.add = BoxParser.Box.prototype.add;

ISOFile.prototype.init = function () {
	var moov = this.add("moov");
	moov.add("mvhd").set("timescale", 600).set("rate", 1).set("creation_time", 0).set("modification_time", 0).set("duration", 0).set("volume", 1).set("matrix", [0, 0, 0, 0, 0, 0, 0, 0, 0]).set("next_track_id", 1);
	moov.add("mvex");
	return this;
};

ISOFile.prototype.addTrack = function (_options) {
	if (!this.moov) {
		this.init();
	}

	var options = _options || {};
	options.width = options.width || 320;
	options.height = options.height || 320;
	options.id = options.id || this.moov.mvhd.next_track_id;
	options.type = options.type || "avc1";

	var trak = this.moov.add("trak");
	this.moov.mvhd.next_track_id = options.id + 1;
	trak.add("tkhd").set("creation_time", 0).set("modification_time", 0).set("track_id", options.id).set("duration", 0).set("layer", 0).set("alternate_group", 0).set("volume", 1).set("matrix", [0, 0, 0, 0, 0, 0, 0, 0, 0]).set("width", options.width).set("height", options.height);

	var mdia = trak.add("mdia");
	mdia.add("mdhd").set("creation_time", 0).set("modification_time", 0).set("timescale", options.timescale || 1).set("duration", 0).set("language", options.language || 0);

	mdia.add("hdlr").set("handler", options.hdlr || "vide").set("name", options.name || "Track created with MP4Box.js");

	mdia.add("elng").set("extended_language", options.language || "fr-FR");

	var minf = mdia.add("minf");
	var sample_entry = new BoxParser[options.type + "SampleEntry"]();
	var media_type = "";
	for (var i = 0; i < BoxParser.sampleEntryCodes.length; i++) {
		var code = BoxParser.sampleEntryCodes[i];
		if (code.types.indexOf(options.type) > -1) {
			media_type = code.prefix;
			break;
		}
	}
	switch (media_type) {
		case "Visual":
			minf.add("vmhd").set("graphicsmode", 0).set("opcolor", [0, 0, 0]);
			sample_entry.set("width", options.width).set("height", options.height).set("horizresolution", 0x48 << 16).set("vertresolution", 0x48 << 16).set("frame_count", 1).set("compressorname", options.type + " Compressor").set("depth", 0x18);
			sample_entry.add("avcC").set("SPS", []).set("PPS", []).set("configurationVersion", 0).set("AVCProfileIndication", 0).set("profile_compatibility", 0).set("AVCLevelIndication", 0).set("lengthSizeMinusOne", 0);
			break;
		case "Audio":
			minf.add("smhd");
			break;
		case "Hint":
			minf.add("hmhd");
			break;
		case "Subtitle":
			minf.add("sthd");
			break;
		case "Metadata":
			minf.add("nmhd");
			break;
		case "System":
			minf.add("nmhd");
			break;
		default:
			minf.add("nmhd");
			break;
	}
	minf.add("dinf").add("dref").addEntry(new BoxParser["url Box"]().set("flags", 0x1));
	var stbl = mdia.add("stbl");
	stbl.add("stsd").addEntry(sample_entry);
	stbl.add("stts").set("sample_counts", []).set("sample_deltas", []);
	stbl.add("stsc").set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []);

	this.moov.mvex.add("trex").set("track_id", options.id).set("default_sample_description_index", options.default_sample_description_index || 0).set("default_sample_duration", options.default_sample_duration || 0).set("default_sample_size", options.default_sample_size || 0).set("default_sample_flags", options.default_sample_flags || 0);
	return trak;
};

ISOFile.prototype.getBuffer = function () {
	var stream = new DataStream();
	stream.endianness = DataStream.BIG_ENDIAN;
	this.write(stream);
	return stream.buffer;
};

ISOFile.prototype.addSample = function (trak, data, options) {}; // file:src/isofile-sample-processing.js
/* Index of the last moof box received */
ISOFile.prototype.lastMoofIndex = 0;

/* size of the buffers allocated for samples */
ISOFile.prototype.samplesDataSize = 0;

/* Resets all sample tables */
ISOFile.prototype.resetTables = function () {
	var i;
	var trak, stco, stsc, stsz, stts, ctts, stss;
	this.initial_duration = this.moov.mvhd.duration;
	// this.moov.mvhd.duration = 0;
	for (i = 0; i < this.moov.traks.length; i++) {
		trak = this.moov.traks[i];
		trak.tkhd.duration = 0;
		trak.mdia.mdhd.duration = 0;
		stco = trak.mdia.minf.stbl.stco || trak.mdia.minf.stbl.co64;
		stco.chunk_offsets = [];
		stsc = trak.mdia.minf.stbl.stsc;
		stsc.first_chunk = [];
		stsc.samples_per_chunk = [];
		stsc.sample_description_index = [];
		stsz = trak.mdia.minf.stbl.stsz || trak.mdia.minf.stbl.stz2;
		stsz.sample_sizes = [];
		stts = trak.mdia.minf.stbl.stts;
		stts.sample_counts = [];
		stts.sample_deltas = [];
		ctts = trak.mdia.minf.stbl.ctts;
		if (ctts) {
			ctts.sample_counts = [];
			ctts.sample_offsets = [];
		}
		stss = trak.mdia.minf.stbl.stss;
		var k = trak.mdia.minf.stbl.boxes.indexOf(stss);
		if (k != -1) trak.mdia.minf.stbl.boxes[k] = null;
	}
};

ISOFile.initSampleGroups = function (trak, traf, sbgps, trak_sgpds, traf_sgpds) {
	var l;
	var k;
	var sample_groups_info;
	var sample_group_info;
	var sample_group_key;
	function SampleGroupInfo(_type, _parameter, _sbgp) {
		this.grouping_type = _type;
		this.grouping_type_parameter = _parameter;
		this.sbgp = _sbgp;
		this.last_sample_in_run = -1;
		this.entry_index = -1;
	}
	if (traf) {
		traf.sample_groups_info = [];
	}
	if (!trak.sample_groups_info) {
		trak.sample_groups_info = [];
	}
	for (k = 0; k < sbgps.length; k++) {
		sample_group_key = sbgps[k].grouping_type + "/" + sbgps[k].grouping_type_parameter;
		sample_group_info = new SampleGroupInfo(sbgps[k].grouping_type, sbgps[k].grouping_type_parameter, sbgps[k]);
		if (traf) {
			traf.sample_groups_info[sample_group_key] = sample_group_info;
		}
		if (!trak.sample_groups_info[sample_group_key]) {
			trak.sample_groups_info[sample_group_key] = sample_group_info;
		}
		for (l = 0; l < trak_sgpds.length; l++) {
			if (trak_sgpds[l].grouping_type === sbgps[k].grouping_type) {
				sample_group_info.description = trak_sgpds[l];
				sample_group_info.description.used = true;
			}
		}
		if (traf_sgpds) {
			for (l = 0; l < traf_sgpds.length; l++) {
				if (traf_sgpds[l].grouping_type === sbgps[k].grouping_type) {
					sample_group_info.fragment_description = traf_sgpds[l];
					sample_group_info.fragment_description.used = true;
					sample_group_info.is_fragment = true;
				}
			}
		}
	}
	if (!traf) {
		for (k = 0; k < trak_sgpds.length; k++) {
			if (!trak_sgpds[k].used && trak_sgpds[k].version >= 2) {
				sample_group_key = trak_sgpds[k].grouping_type + "/0";
				sample_group_info = new SampleGroupInfo(trak_sgpds[k].grouping_type, 0);
				if (!trak.sample_groups_info[sample_group_key]) {
					trak.sample_groups_info[sample_group_key] = sample_group_info;
				}
			}
		}
	} else {
		if (traf_sgpds) {
			for (k = 0; k < traf_sgpds.length; k++) {
				if (!traf_sgpds[k].used && traf_sgpds[k].version >= 2) {
					sample_group_key = traf_sgpds[k].grouping_type + "/0";
					sample_group_info = new SampleGroupInfo(traf_sgpds[k].grouping_type, 0);
					sample_group_info.is_fragment = true;
					if (!traf.sample_groups_info[sample_group_key]) {
						traf.sample_groups_info[sample_group_key] = sample_group_info;
					}
				}
			}
		}
	}
};

ISOFile.setSampleGroupProperties = function (trak, sample, sample_number, sample_groups_info) {
	var k;
	var index;
	sample.sample_groups = [];
	for (k in sample_groups_info) {
		sample.sample_groups[k] = {};
		sample.sample_groups[k].grouping_type = sample_groups_info[k].grouping_type;
		sample.sample_groups[k].grouping_type_parameter = sample_groups_info[k].grouping_type_parameter;
		if (sample_number >= sample_groups_info[k].last_sample_in_run) {
			if (sample_groups_info[k].last_sample_in_run < 0) {
				sample_groups_info[k].last_sample_in_run = 0;
			}
			sample_groups_info[k].entry_index++;
			if (sample_groups_info[k].entry_index <= sample_groups_info[k].sbgp.entries.length - 1) {
				sample_groups_info[k].last_sample_in_run += sample_groups_info[k].sbgp.entries[sample_groups_info[k].entry_index].sample_count;
			}
		}
		if (sample_groups_info[k].entry_index <= sample_groups_info[k].sbgp.entries.length - 1) {
			sample.sample_groups[k].group_description_index = sample_groups_info[k].sbgp.entries[sample_groups_info[k].entry_index].group_description_index;
		} else {
			sample.sample_groups[k].group_description_index = -1; // special value for not defined
		}
		if (sample.sample_groups[k].group_description_index !== 0) {
			var description;
			if (sample_groups_info[k].fragment_description) {
				description = sample_groups_info[k].fragment_description;
			} else {
				description = sample_groups_info[k].description;
			}
			if (sample.sample_groups[k].group_description_index > 0) {
				if (sample.sample_groups[k].group_description_index > 65535) {
					index = (sample.sample_groups[k].group_description_index >> 16) - 1;
				} else {
					index = sample.sample_groups[k].group_description_index - 1;
				}
				if (description && index >= 0) {
					sample.sample_groups[k].description = description.entries[index];
				}
			} else {
				if (description && description.version >= 2) {
					if (description.default_group_description_index > 0) {
						sample.sample_groups[k].description = description.entries[description.default_group_description_index - 1];
					}
				}
			}
		}
	}
};

ISOFile.process_sdtp = function (sdtp, sample, number) {
	if (!sample) {
		return;
	}
	if (sdtp) {
		sample.is_leading = sdtp.is_leading[number];
		sample.depends_on = sdtp.sample_depends_on[number];
		sample.is_depended_on = sdtp.sample_is_depended_on[number];
		sample.has_redundancy = sdtp.sample_has_redundancy[number];
	} else {
		sample.is_leading = 0;
		sample.depends_on = 0;
		sample.is_depended_on = 0;
		sample.has_redundancy = 0;
	}
};

/* Build initial sample list from  sample tables */
ISOFile.prototype.buildSampleLists = function () {
	var i, j, k;
	var trak, stco, stsc, stsz, stts, ctts, stss, stsd, subs, sbgps, sgpds, stdp;
	var chunk_run_index, chunk_index, last_chunk_in_run, offset_in_chunk, last_sample_in_chunk;
	var last_sample_in_stts_run, stts_run_index, last_sample_in_ctts_run, ctts_run_index, last_stss_index, last_subs_index, subs_entry_index, last_subs_sample_index;
	for (i = 0; i < this.moov.traks.length; i++) {
		trak = this.moov.traks[i];
		trak.samples = [];
		trak.samples_duration = 0;
		trak.samples_size = 0;
		stco = trak.mdia.minf.stbl.stco || trak.mdia.minf.stbl.co64;
		stsc = trak.mdia.minf.stbl.stsc;
		stsz = trak.mdia.minf.stbl.stsz || trak.mdia.minf.stbl.stz2;
		stts = trak.mdia.minf.stbl.stts;
		ctts = trak.mdia.minf.stbl.ctts;
		stss = trak.mdia.minf.stbl.stss;
		stsd = trak.mdia.minf.stbl.stsd;
		subs = trak.mdia.minf.stbl.subs;
		stdp = trak.mdia.minf.stbl.stdp;
		sbgps = trak.mdia.minf.stbl.sbgps;
		sgpds = trak.mdia.minf.stbl.sgpds;

		last_sample_in_stts_run = -1;
		stts_run_index = -1;
		last_sample_in_ctts_run = -1;
		ctts_run_index = -1;
		last_stss_index = 0;
		subs_entry_index = 0;
		last_subs_sample_index = 0;

		ISOFile.initSampleGroups(trak, null, sbgps, sgpds);

		if (typeof stsz === "undefined") {
			continue;
		}

		/* we build the samples one by one and compute their properties */
		for (j = 0; j < stsz.sample_sizes.length; j++) {
			var sample = {};
			sample.number = j;
			sample.track_id = trak.tkhd.track_id;
			sample.timescale = trak.mdia.mdhd.timescale;
			sample.alreadyRead = 0;
			trak.samples[j] = sample;
			/* size can be known directly */
			sample.size = stsz.sample_sizes[j];
			trak.samples_size += sample.size;
			/* computing chunk-based properties (offset, sample description index)*/
			if (j === 0) {
				chunk_index = 1; /* the first sample is in the first chunk (chunk indexes are 1-based) */
				chunk_run_index = 0; /* the first chunk is the first entry in the first_chunk table */
				sample.chunk_index = chunk_index;
				sample.chunk_run_index = chunk_run_index;
				last_sample_in_chunk = stsc.samples_per_chunk[chunk_run_index];
				offset_in_chunk = 0;

				/* Is there another entry in the first_chunk table ? */
				if (chunk_run_index + 1 < stsc.first_chunk.length) {
					/* The last chunk in the run is the chunk before the next first chunk */
					last_chunk_in_run = stsc.first_chunk[chunk_run_index + 1] - 1;
				} else {
					/* There is only one entry in the table, it is valid for all future chunks*/
					last_chunk_in_run = Infinity;
				}
			} else {
				if (j < last_sample_in_chunk) {
					/* the sample is still in the current chunk */
					sample.chunk_index = chunk_index;
					sample.chunk_run_index = chunk_run_index;
				} else {
					/* the sample is in the next chunk */
					chunk_index++;
					sample.chunk_index = chunk_index;
					/* reset the accumulated offset in the chunk */
					offset_in_chunk = 0;
					if (chunk_index <= last_chunk_in_run) {
						/* stay in the same entry of the first_chunk table */
						/* chunk_run_index unmodified */
					} else {
						chunk_run_index++;
						/* Is there another entry in the first_chunk table ? */
						if (chunk_run_index + 1 < stsc.first_chunk.length) {
							/* The last chunk in the run is the chunk before the next first chunk */
							last_chunk_in_run = stsc.first_chunk[chunk_run_index + 1] - 1;
						} else {
							/* There is only one entry in the table, it is valid for all future chunks*/
							last_chunk_in_run = Infinity;
						}
					}
					sample.chunk_run_index = chunk_run_index;
					last_sample_in_chunk += stsc.samples_per_chunk[chunk_run_index];
				}
			}

			sample.description_index = stsc.sample_description_index[sample.chunk_run_index] - 1;
			sample.description = stsd.entries[sample.description_index];
			sample.offset = stco.chunk_offsets[sample.chunk_index - 1] + offset_in_chunk; /* chunk indexes are 1-based */
			offset_in_chunk += sample.size;

			/* setting dts, cts, duration and rap flags */
			if (j > last_sample_in_stts_run) {
				stts_run_index++;
				if (last_sample_in_stts_run < 0) {
					last_sample_in_stts_run = 0;
				}
				last_sample_in_stts_run += stts.sample_counts[stts_run_index];
			}
			if (j > 0) {
				trak.samples[j - 1].duration = stts.sample_deltas[stts_run_index];
				trak.samples_duration += trak.samples[j - 1].duration;
				sample.dts = trak.samples[j - 1].dts + trak.samples[j - 1].duration;
			} else {
				sample.dts = 0;
			}
			if (ctts) {
				if (j >= last_sample_in_ctts_run) {
					ctts_run_index++;
					if (last_sample_in_ctts_run < 0) {
						last_sample_in_ctts_run = 0;
					}
					last_sample_in_ctts_run += ctts.sample_counts[ctts_run_index];
				}
				sample.cts = trak.samples[j].dts + ctts.sample_offsets[ctts_run_index];
			} else {
				sample.cts = sample.dts;
			}
			if (stss) {
				if (j == stss.sample_numbers[last_stss_index] - 1) {
					// sample numbers are 1-based
					sample.is_sync = true;
					last_stss_index++;
				} else {
					sample.is_sync = false;
				}
			} else {
				sample.is_sync = true;
			}
			ISOFile.process_sdtp(trak.mdia.minf.stbl.sdtp, sample, sample.number);
			if (stdp) {
				sample.degradation_priority = stdp.priority[j];
			} else {
				sample.degradation_priority = 0;
			}
			if (subs) {
				if (subs.entries[subs_entry_index].sample_delta + last_subs_sample_index == j + 1) {
					sample.subsamples = subs.entries[subs_entry_index].subsamples;
					last_subs_sample_index += subs.entries[subs_entry_index].sample_delta;
					subs_entry_index++;
				}
			}
			if (sbgps.length > 0 || sgpds.length > 0) {
				ISOFile.setSampleGroupProperties(trak, sample, j, trak.sample_groups_info);
			}
		}
		if (j > 0) {
			trak.samples[j - 1].duration = Math.max(trak.mdia.mdhd.duration - trak.samples[j - 1].dts, 0);
			trak.samples_duration += trak.samples[j - 1].duration;
		}
	}
};

/* Update sample list when new 'moof' boxes are received */
ISOFile.prototype.updateSampleLists = function () {
	var i, j, k;
	var default_sample_description_index, default_sample_duration, default_sample_size, default_sample_flags;
	var last_run_position;
	var box, moof, traf, trak, trex;
	var sample;
	var sample_flags;

	if (this.moov === undefined) {
		return;
	}
	/* if the input file is fragmented and fetched in multiple downloads, we need to update the list of samples */
	while (this.lastMoofIndex < this.moofs.length) {
		box = this.moofs[this.lastMoofIndex];
		this.lastMoofIndex++;
		if (box.type == "moof") {
			moof = box;
			for (i = 0; i < moof.trafs.length; i++) {
				traf = moof.trafs[i];
				trak = this.getTrackById(traf.tfhd.track_id);
				trex = this.getTrexById(traf.tfhd.track_id);
				if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC) {
					default_sample_description_index = traf.tfhd.default_sample_description_index;
				} else {
					default_sample_description_index = trex ? trex.default_sample_description_index : 1;
				}
				if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR) {
					default_sample_duration = traf.tfhd.default_sample_duration;
				} else {
					default_sample_duration = trex ? trex.default_sample_duration : 0;
				}
				if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE) {
					default_sample_size = traf.tfhd.default_sample_size;
				} else {
					default_sample_size = trex ? trex.default_sample_size : 0;
				}
				if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS) {
					default_sample_flags = traf.tfhd.default_sample_flags;
				} else {
					default_sample_flags = trex ? trex.default_sample_flags : 0;
				}
				traf.sample_number = 0;
				/* process sample groups */
				if (traf.sbgps.length > 0) {
					ISOFile.initSampleGroups(trak, traf, traf.sbgps, trak.mdia.minf.stbl.sgpds, traf.sgpds);
				}
				for (j = 0; j < traf.truns.length; j++) {
					var trun = traf.truns[j];
					for (k = 0; k < trun.sample_count; k++) {
						sample = {};
						sample.number_in_traf = traf.sample_number;
						traf.sample_number++;
						sample.number = trak.samples.length;
						traf.first_sample_index = trak.samples.length;
						trak.samples.push(sample);
						sample.track_id = trak.tkhd.track_id;
						sample.timescale = trak.mdia.mdhd.timescale;
						sample.description_index = default_sample_description_index - 1;
						sample.description = trak.mdia.minf.stbl.stsd.entries[sample.description_index];
						sample.size = default_sample_size;
						if (trun.flags & BoxParser.TRUN_FLAGS_SIZE) {
							sample.size = trun.sample_size[k];
						}
						trak.samples_size += sample.size;
						sample.duration = default_sample_duration;
						if (trun.flags & BoxParser.TRUN_FLAGS_DURATION) {
							sample.duration = trun.sample_duration[k];
						}
						trak.samples_duration += sample.duration;
						if (trak.first_traf_merged || k > 0) {
							sample.dts = trak.samples[trak.samples.length - 2].dts + trak.samples[trak.samples.length - 2].duration;
						} else {
							if (traf.tfdt) {
								sample.dts = traf.tfdt.baseMediaDecodeTime;
							} else {
								sample.dts = 0;
							}
							trak.first_traf_merged = true;
						}
						sample.cts = sample.dts;
						if (trun.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
							sample.cts = sample.dts + trun.sample_composition_time_offset[k];
						}
						sample_flags = default_sample_flags;
						if (trun.flags & BoxParser.TRUN_FLAGS_FLAGS) {
							sample_flags = trun.sample_flags[k];
						} else if (k === 0 && trun.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG) {
							sample_flags = trun.first_sample_flags;
						}
						sample.is_sync = sample_flags >> 16 & 0x1 ? false : true;
						sample.is_leading = sample_flags >> 26 & 0x3;
						sample.depends_on = sample_flags >> 24 & 0x3;
						sample.is_depended_on = sample_flags >> 22 & 0x3;
						sample.has_redundancy = sample_flags >> 20 & 0x3;
						sample.degradation_priority = sample_flags & 0xFFFF;
						ISOFile.process_sdtp(traf.sdtp, sample, sample.number_in_traf);
						var bdop = traf.tfhd.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET ? true : false;
						var dbim = traf.tfhd.flags & BoxParser.TFHD_FLAG_DEFAULT_BASE_IS_MOOF ? true : false;
						var dop = trun.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET ? true : false;
						var bdo = 0;
						if (!bdop) {
							if (!dbim) {
								if (j === 0) {
									// the first track in the movie fragment
									bdo = moof.start; // the position of the first byte of the enclosing Movie Fragment Box
								} else {
									bdo = last_run_position; // end of the data defined by the preceding *track* (irrespective of the track id) fragment in the moof
								}
							} else {
								bdo = moof.start;
							}
						} else {
							bdo = traf.tfhd.base_data_offset;
						}
						if (j === 0 && k === 0) {
							if (dop) {
								sample.offset = bdo + trun.data_offset; // If the data-offset is present, it is relative to the base-data-offset established in the track fragment header
							} else {
								sample.offset = bdo; // the data for this run starts the base-data-offset defined by the track fragment header
							}
						} else {
							sample.offset = last_run_position; // this run starts immediately after the data of the previous run
						}
						last_run_position = sample.offset + sample.size;
						if (traf.sbgps.length > 0 || traf.sgpds.length > 0 || trak.mdia.minf.stbl.sbgps.length > 0 || trak.mdia.minf.stbl.sgpds.length > 0) {
							ISOFile.setSampleGroupProperties(trak, sample, sample.number_in_traf, traf.sample_groups_info);
						}
					}
				}
				if (traf.subs) {
					trak.has_fragment_subsamples = true;
					var sample_index = traf.first_sample_index;
					for (j = 0; j < traf.subs.entries.length; j++) {
						sample_index += traf.subs.entries[j].sample_delta;
						sample = trak.samples[sample_index - 1];
						sample.subsamples = traf.subs.entries[j].subsamples;
					}
				}
			}
		}
	}
};

/* Try to get sample data for a given sample:
   returns null if not found
   returns the same sample if already requested
 */
ISOFile.prototype.getSample = function (trak, sampleNum) {
	var buffer;
	var sample = trak.samples[sampleNum];

	if (!this.moov) {
		return null;
	}

	if (!sample.data) {
		/* Not yet fetched */
		sample.data = new Uint8Array(sample.size);
		sample.alreadyRead = 0;
		this.samplesDataSize += sample.size;
		Log$2.debug("ISOFile", "Allocating sample #" + sampleNum + " on track #" + trak.tkhd.track_id + " of size " + sample.size + " (total: " + this.samplesDataSize + ")");
	} else if (sample.alreadyRead == sample.size) {
		/* Already fetched entirely */
		return sample;
	}

	/* The sample has only been partially fetched, we need to check in all buffers */
	var index = this.stream.findPosition(true, sample.offset + sample.alreadyRead, false);
	if (index > -1) {
		buffer = this.stream.buffers[index];
		var lengthAfterStart = buffer.byteLength - (sample.offset + sample.alreadyRead - buffer.fileStart);
		if (sample.size - sample.alreadyRead <= lengthAfterStart) {
			/* the (rest of the) sample is entirely contained in this buffer */

			Log$2.debug("ISOFile", "Getting sample #" + sampleNum + " data (alreadyRead: " + sample.alreadyRead + " offset: " + (sample.offset + sample.alreadyRead - buffer.fileStart) + " read size: " + (sample.size - sample.alreadyRead) + " full size: " + sample.size + ")");

			DataStream.memcpy(sample.data.buffer, sample.alreadyRead, buffer, sample.offset + sample.alreadyRead - buffer.fileStart, sample.size - sample.alreadyRead);

			/* update the number of bytes used in this buffer and check if it needs to be removed */
			buffer.usedBytes += sample.size - sample.alreadyRead;
			this.stream.logBufferLevel();

			sample.alreadyRead = sample.size;

			return sample;
		} else {
			/* the sample does not end in this buffer */

			Log$2.debug("ISOFile", "Getting sample #" + sampleNum + " partial data (alreadyRead: " + sample.alreadyRead + " offset: " + (sample.offset + sample.alreadyRead - buffer.fileStart) + " read size: " + lengthAfterStart + " full size: " + sample.size + ")");

			DataStream.memcpy(sample.data.buffer, sample.alreadyRead, buffer, sample.offset + sample.alreadyRead - buffer.fileStart, lengthAfterStart);
			sample.alreadyRead += lengthAfterStart;

			/* update the number of bytes used in this buffer and check if it needs to be removed */
			buffer.usedBytes += lengthAfterStart;
			this.stream.logBufferLevel();
			return null;
		}
	} else {
		return null;
	}
};

/* Release the memory used to store the data of the sample */
ISOFile.prototype.releaseSample = function (trak, sampleNum) {
	var sample = trak.samples[sampleNum];
	if (sample.data) {
		this.samplesDataSize -= sample.size;
		sample.data = null;
		sample.alreadyRead = 0;
		return sample.size;
	} else {
		return 0;
	}
};

ISOFile.prototype.getAllocatedSampleDataSize = function () {
	return this.samplesDataSize;
};

/* Builds the MIME Type 'codecs' sub-parameters for the whole file */
ISOFile.prototype.getCodecs = function () {
	var i;
	var codecs = "";
	for (i = 0; i < this.moov.traks.length; i++) {
		var trak = this.moov.traks[i];
		if (i > 0) {
			codecs += ",";
		}
		codecs += trak.mdia.minf.stbl.stsd.entries[0].getCodec();
	}
	return codecs;
};

/* Helper function */
ISOFile.prototype.getTrexById = function (id) {
	var i;
	if (!this.moov || !this.moov.mvex) return null;
	for (i = 0; i < this.moov.mvex.trexs.length; i++) {
		var trex = this.moov.mvex.trexs[i];
		if (trex.track_id == id) return trex;
	}
	return null;
};

/* Helper function */
ISOFile.prototype.getTrackById = function (id) {
	if (this.moov === undefined) {
		return null;
	}
	for (var j = 0; j < this.moov.traks.length; j++) {
		var trak = this.moov.traks[j];
		if (trak.tkhd.track_id == id) return trak;
	}
	return null;
};
// file:src/isofile-item-processing.js
ISOFile.prototype.items = [];
/* size of the buffers allocated for samples */
ISOFile.prototype.itemsDataSize = 0;

ISOFile.prototype.flattenItemInfo = function () {
	var items = this.items;
	var i, j;
	var item;
	var meta = this.meta;
	if (meta === null || meta === undefined) return;
	if (meta.hdlr === undefined) return;
	if (meta.iinf === undefined) return;
	for (i = 0; i < meta.iinf.item_infos.length; i++) {
		item = {};
		item.id = meta.iinf.item_infos[i].item_ID;
		items[item.id] = item;
		item.ref_to = [];
		item.name = meta.iinf.item_infos[i].item_name;
		if (meta.iinf.item_infos[i].protection_index > 0) {
			item.protection = meta.ipro.protections[meta.iinf.item_infos[i].protection_index - 1];
		}
		if (meta.iinf.item_infos[i].item_type) {
			item.type = meta.iinf.item_infos[i].item_type;
		} else {
			item.type = "mime";
		}
		item.content_type = meta.iinf.item_infos[i].content_type;
		item.content_encoding = meta.iinf.item_infos[i].content_encoding;
	}
	if (meta.iloc) {
		for (i = 0; i < meta.iloc.items.length; i++) {
			var offset;
			var itemloc = meta.iloc.items[i];
			item = items[itemloc.item_ID];
			if (itemloc.data_reference_index !== 0) {
				Log$2.warn("Item storage with reference to other files: not supported");
				item.source = meta.dinf.boxes[itemloc.data_reference_index - 1];
			}
			if (itemloc.construction_method !== undefined) {
				Log$2.warn("Item storage with construction_method : not supported");
				switch (itemloc.construction_method) {
					case 0:
						// offset into the file referenced by the data reference index
						break;
					case 1:
						// offset into the idat box of this meta box
						break;
					case 2:
						// offset into another item
						break;
				}
			} else {
				item.extents = [];
				item.size = 0;
				for (j = 0; j < itemloc.extents.length; j++) {
					item.extents[j] = {};
					item.extents[j].offset = itemloc.extents[j].extent_offset + itemloc.base_offset;
					item.extents[j].length = itemloc.extents[j].extent_length;
					item.extents[j].alreadyRead = 0;
					item.size += item.extents[j].length;
				}
			}
		}
	}
	if (meta.pitm) {
		items[meta.pitm.item_id].primary = true;
	}
	if (meta.iref) {
		for (i = 0; i < meta.iref.references.length; i++) {
			var ref = meta.iref.references[i];
			for (j = 0; j < ref.references.length; j++) {
				items[ref.from_item_ID].ref_to.push({ type: ref.type, id: ref.references[j] });
			}
		}
	}
};

ISOFile.prototype.getItem = function (item_id) {
	var buffer;
	var item;

	if (!this.meta) {
		return null;
	}

	item = this.items[item_id];
	if (!item.data && item.size) {
		/* Not yet fetched */
		item.data = new Uint8Array(item.size);
		item.alreadyRead = 0;
		this.itemsDataSize += item.size;
		Log$2.debug("ISOFile", "Allocating item #" + item_id + " of size " + item.size + " (total: " + this.itemsDataSize + ")");
	} else if (item.alreadyRead === item.size) {
		/* Already fetched entirely */
		return item;
	}

	/* The item has only been partially fetched, we need to check in all buffers to find the remaining extents*/

	for (var i = 0; i < item.extents.length; i++) {
		var extent = item.extents[i];
		if (extent.alreadyRead === extent.length) {
			continue;
		} else {
			var index = this.stream.findPosition(true, extent.offset + extent.alreadyRead, false);
			if (index > -1) {
				buffer = this.stream.buffers[index];
				var lengthAfterStart = buffer.byteLength - (extent.offset + extent.alreadyRead - buffer.fileStart);
				if (extent.length - extent.alreadyRead <= lengthAfterStart) {
					/* the (rest of the) extent is entirely contained in this buffer */

					Log$2.debug("ISOFile", "Getting item #" + item_id + " extent #" + i + " data (alreadyRead: " + extent.alreadyRead + " offset: " + (extent.offset + extent.alreadyRead - buffer.fileStart) + " read size: " + (extent.length - extent.alreadyRead) + " full extent size: " + extent.length + " full item size: " + item.size + ")");

					DataStream.memcpy(item.data.buffer, item.alreadyRead, buffer, extent.offset + extent.alreadyRead - buffer.fileStart, extent.length - extent.alreadyRead);

					/* update the number of bytes used in this buffer and check if it needs to be removed */
					buffer.usedBytes += extent.length - extent.alreadyRead;
					this.stream.logBufferLevel();

					extent.alreadyRead = extent.length;
					item.alreadyRead += extent.length;
				} else {
					/* the sample does not end in this buffer */

					Log$2.debug("ISOFile", "Getting item #" + item_id + " extent #" + i + " partial data (alreadyRead: " + extent.alreadyRead + " offset: " + (extent.offset + extent.alreadyRead - buffer.fileStart) + " read size: " + lengthAfterStart + " full extent size: " + extent.length + " full item size: " + item.size + ")");

					DataStream.memcpy(item.data.buffer, item.alreadyRead, buffer, extent.offset + extent.alreadyRead - buffer.fileStart, lengthAfterStart);
					extent.alreadyRead += lengthAfterStart;
					item.alreadyRead += lengthAfterStart;

					/* update the number of bytes used in this buffer and check if it needs to be removed */
					buffer.usedBytes += lengthAfterStart;
					this.stream.logBufferLevel();
					return null;
				}
			} else {
				return null;
			}
		}
	}
	if (item.alreadyRead === item.size) {
		/* fetched entirely */
		return item;
	} else {
		return null;
	}
};

/* Release the memory used to store the data of the item */
ISOFile.prototype.releaseItem = function (item_id) {
	var item = this.items[item_id];
	if (item.data) {
		this.itemsDataSize -= item.size;
		item.data = null;
		item.alreadyRead = 0;
		for (var i = 0; i < item.extents.length; i++) {
			var extent = item.extents[i];
			extent.alreadyRead = 0;
		}
		return item.size;
	} else {
		return 0;
	}
};

ISOFile.prototype.processItems = function (callback) {
	for (var i in this.items) {
		var item = this.items[i];
		this.getItem(item.id);
		if (callback && !item.sent) {
			callback(item);
			item.sent = true;
			item.data = null;
		}
	}
};

ISOFile.prototype.hasItem = function (name) {
	for (var i in this.items) {
		var item = this.items[i];
		if (item.name === name) {
			return item.id;
		}
	}
	return -1;
};

ISOFile.prototype.getMetaHandler = function () {
	if (!this.meta) {
		return null;
	} else {
		return this.meta.hdlr.handler;
	}
};

ISOFile.prototype.getPrimaryItem = function () {
	if (!this.meta || !this.meta.pitm) {
		return null;
	} else {
		return this.getItem(this.meta.pitm.item_id);
	}
};

// file:src/isofile-write.js
/* Rewrite the entire file */
ISOFile.prototype.write = function (outstream) {
	for (var i = 0; i < this.boxes.length; i++) {
		this.boxes[i].write(outstream);
	}
};

/* Modify the file and create the initialization segment */
ISOFile.writeInitializationSegment = function (ftyp, moov, total_duration, sample_duration) {
	var i;
	var index;
	var mehd;
	var trex;
	var box;
	Log$2.debug("ISOFile", "Generating initialization segment");

	var stream = new DataStream();
	stream.endianness = DataStream.BIG_ENDIAN;
	ftyp.write(stream);

	/* we can now create the new mvex box */
	var mvex = moov.add("mvex");
	if (total_duration) {
		mvex.add("mehd").set("fragment_duration", total_duration);
	}
	for (i = 0; i < moov.traks.length; i++) {
		mvex.add("trex").set("track_id", moov.traks[i].tkhd.track_id).set("default_sample_description_index", 1).set("default_sample_duration", sample_duration).set("default_sample_size", 0).set("default_sample_flags", 1 << 16);
	}
	moov.write(stream);

	return stream.buffer;
};
// file:src/mp4box.js
/* 
 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
 * License: BSD-3-Clause (see LICENSE file)
 */
var MP4Box = function MP4Box(_keepMdatData) {
	/* MultiBufferStream to parse chunked file data */
	this.inputStream = new MultiBufferStream();
	/* Boolean indicating if bytes containing media data should be kept in memory */
	this.keepMdatData = _keepMdatData !== undefined ? _keepMdatData : true;
	/* ISOFile object containing the parsed boxes */
	this.inputIsoFile = new ISOFile(this.inputStream);
	this.inputIsoFile.discardMdatData = this.keepMdatData ? false : true;
	/* Callback called when the moov parsing starts */
	this.onMoovStart = null;
	/* Boolean keeping track of the call to onMoovStart, to avoid double calls */
	this.moovStartSent = false;
	/* Callback called when the moov is entirely parsed */
	this.onReady = null;
	/* Boolean keeping track of the call to onReady, to avoid double calls */
	this.readySent = false;
	/* Callback to call when segments are ready */
	this.onSegment = null;
	/* Callback to call when samples are ready */
	this.onSamples = null;
	/* Callback to call when there is an error in the parsing or processing of samples */
	this.onError = null;
	/* Boolean indicating if the moov box run-length encoded tables of sample information have been processed */
	this.sampleListBuilt = false;
	/* Array of Track objects for which fragmentation of samples is requested */
	this.fragmentedTracks = [];
	/* Array of Track objects for which extraction of samples is requested */
	this.extractedTracks = [];
	/* Boolean indicating that fragmention is ready */
	this.isFragmentationInitialized = false;
	/* Boolean indicating that fragmented has started */
	this.sampleProcessingStarted = false;
	/* Number of the next 'moof' to generate when fragmenting */
	this.nextMoofNumber = 0;
	/* Boolean indicating if the initial list of items has been produced */
	this.itemListBuilt = false;
};

MP4Box.prototype.setSegmentOptions = function (id, user, options) {
	var trak = this.inputIsoFile.getTrackById(id);
	if (trak) {
		var fragTrack = {};
		this.fragmentedTracks.push(fragTrack);
		fragTrack.id = id;
		fragTrack.user = user;
		fragTrack.trak = trak;
		trak.nextSample = 0;
		fragTrack.segmentStream = null;
		fragTrack.nb_samples = 1000;
		fragTrack.rapAlignement = true;
		if (options) {
			if (options.nbSamples) fragTrack.nb_samples = options.nbSamples;
			if (options.rapAlignement) fragTrack.rapAlignement = options.rapAlignement;
		}
	}
};

MP4Box.prototype.unsetSegmentOptions = function (id) {
	var index = -1;
	for (var i = 0; i < this.fragmentedTracks.length; i++) {
		var fragTrack = this.fragmentedTracks[i];
		if (fragTrack.id == id) {
			index = i;
		}
	}
	if (index > -1) {
		this.fragmentedTracks.splice(index, 1);
	}
};

MP4Box.prototype.setExtractionOptions = function (id, user, options) {
	var trak = this.inputIsoFile.getTrackById(id);
	if (trak) {
		var extractTrack = {};
		this.extractedTracks.push(extractTrack);
		extractTrack.id = id;
		extractTrack.user = user;
		extractTrack.trak = trak;
		trak.nextSample = 0;
		extractTrack.nb_samples = 1000;
		extractTrack.samples = [];
		if (options) {
			if (options.nbSamples) extractTrack.nb_samples = options.nbSamples;
		}
	}
};

MP4Box.prototype.unsetExtractionOptions = function (id) {
	var index = -1;
	for (var i = 0; i < this.extractedTracks.length; i++) {
		var extractTrack = this.extractedTracks[i];
		if (extractTrack.id == id) {
			index = i;
		}
	}
	if (index > -1) {
		this.extractedTracks.splice(index, 1);
	}
};

MP4Box.prototype.createSingleSampleMoof = function (sample) {
	var moof = new BoxParser.moofBox();
	moof.add("mfhd").set("sequence_number", this.nextMoofNumber);
	this.nextMoofNumber++;
	var traf = moof.add("traf");
	traf.add("tfhd").set("track_id", sample.track_id).set("flags", BoxParser.TFHD_FLAG_DEFAULT_BASE_IS_MOOF);
	traf.add("tfdt").set("baseMediaDecodeTime", sample.dts);
	traf.add("trun").set("flags", BoxParser.TRUN_FLAGS_DATA_OFFSET | BoxParser.TRUN_FLAGS_DURATION | BoxParser.TRUN_FLAGS_SIZE | BoxParser.TRUN_FLAGS_FLAGS | BoxParser.TRUN_FLAGS_CTS_OFFSET).set("data_offset", 0).set("first_sample_flags", 0).set("sample_count", 1).set("sample_duration", [sample.duration]).set("sample_size", [sample.size]).set("sample_flags", [0]).set("sample_composition_time_offset", [sample.cts - sample.dts]);
	return moof;
};

MP4Box.prototype.createFragment = function (input, track_id, sampleNumber, stream_) {
	var trak = this.inputIsoFile.getTrackById(track_id);
	var sample = this.inputIsoFile.getSample(trak, sampleNumber);
	if (sample == null) {
		sample = trak.samples[sampleNumber];
		if (this.nextSeekPosition) {
			this.nextSeekPosition = Math.min(sample.offset + sample.alreadyRead, this.nextSeekPosition);
		} else {
			this.nextSeekPosition = trak.samples[sampleNumber].offset + sample.alreadyRead;
		}
		return null;
	}

	var stream = stream_ || new DataStream();
	stream.endianness = DataStream.BIG_ENDIAN;

	var moof = this.createSingleSampleMoof(sample);
	moof.write(stream);

	/* adjusting the data_offset now that the moof size is known*/
	moof.trafs[0].truns[0].data_offset = moof.size + 8; //8 is mdat header
	Log$2.debug("MP4Box", "Adjusting data_offset with new value " + moof.trafs[0].truns[0].data_offset);
	stream.adjustUint32(moof.trafs[0].truns[0].data_offset_position, moof.trafs[0].truns[0].data_offset);

	var mdat = new BoxParser.mdatBox();
	mdat.data = sample.data;
	mdat.write(stream);
	return stream;
};

MP4Box.prototype.processSamples = function () {
	var i;
	var trak;
	if (!this.sampleProcessingStarted) return;

	/* For each track marked for fragmentation, 
    check if the next sample is there (i.e. if the sample information is known (i.e. moof has arrived) and if it has been downloaded) 
    and create a fragment with it */
	if (this.isFragmentationInitialized && this.onSegment !== null) {
		for (i = 0; i < this.fragmentedTracks.length; i++) {
			var fragTrak = this.fragmentedTracks[i];
			trak = fragTrak.trak;
			while (trak.nextSample < trak.samples.length && this.sampleProcessingStarted) {
				/* The sample information is there (either because the file is not fragmented and this is not the last sample, 
    or because the file is fragmented and the moof for that sample has been received */
				Log$2.debug("MP4Box", "Creating media fragment on track #" + fragTrak.id + " for sample " + trak.nextSample);
				var result = this.createFragment(this.inputIsoFile, fragTrak.id, trak.nextSample, fragTrak.segmentStream);
				if (result) {
					fragTrak.segmentStream = result;
					trak.nextSample++;
				} else {
					/* The fragment could not be created because the media data is not there (not downloaded), wait for it */
					break;
				}
				/* A fragment is created by sample, but the segment is the accumulation in the buffer of these fragments.
       It is flushed only as requested by the application (nb_samples) to avoid too many callbacks */
				if (trak.nextSample % fragTrak.nb_samples === 0 || trak.nextSample >= trak.samples.length) {
					Log$2.info("MP4Box", "Sending fragmented data on track #" + fragTrak.id + " for samples [" + Math.max(0, trak.nextSample - fragTrak.nb_samples) + "," + (trak.nextSample - 1) + "]");
					Log$2.info("MP4Box", "Sample data size in memory: " + this.inputIsoFile.getAllocatedSampleDataSize());
					if (this.onSegment) {
						this.onSegment(fragTrak.id, fragTrak.user, fragTrak.segmentStream.buffer, trak.nextSample);
					}
					/* force the creation of a new buffer */
					fragTrak.segmentStream = null;
					if (fragTrak !== this.fragmentedTracks[i]) {
						/* make sure we can stop fragmentation if needed */
						break;
					}
				}
			}
		}
	}

	if (this.onSamples !== null) {
		/* For each track marked for data export, 
     check if the next sample is there (i.e. has been downloaded) and send it */
		for (i = 0; i < this.extractedTracks.length; i++) {
			var extractTrak = this.extractedTracks[i];
			trak = extractTrak.trak;
			while (trak.nextSample < trak.samples.length && this.sampleProcessingStarted) {
				Log$2.debug("MP4Box", "Exporting on track #" + extractTrak.id + " sample #" + trak.nextSample);
				var sample = this.inputIsoFile.getSample(trak, trak.nextSample);
				if (sample) {
					trak.nextSample++;
					extractTrak.samples.push(sample);
				} else {
					break;
				}
				if (trak.nextSample % extractTrak.nb_samples === 0 || trak.nextSample >= trak.samples.length) {
					Log$2.debug("MP4Box", "Sending samples on track #" + extractTrak.id + " for sample " + trak.nextSample);
					if (this.onSamples) {
						this.onSamples(extractTrak.id, extractTrak.user, extractTrak.samples);
					}
					extractTrak.samples = [];
					if (extractTrak !== this.extractedTracks[i]) {
						/* check if the extraction needs to be stopped */
						break;
					}
				}
			}
		}
	}
};

MP4Box.prototype.checkBuffer = function (ab) {
	if (ab === null || ab === undefined) {
		throw "Buffer must be defined and non empty";
	}
	if (ab.fileStart === undefined) {
		throw "Buffer must have a fileStart property";
	}
	if (ab.byteLength === 0) {
		Log$2.warn("MP4Box", "Ignoring empty buffer (fileStart: " + ab.fileStart + ")");
		this.inputStream.logBufferLevel();
		return false;
	}
	Log$2.info("MP4Box", "Processing buffer (fileStart: " + ab.fileStart + ")");

	/* mark the bytes in the buffer as not being used yet */
	ab.usedBytes = 0;
	this.inputStream.insertBuffer(ab);
	this.inputStream.logBufferLevel();

	if (!this.inputStream.initialized()) {
		Log$2.warn("MP4Box", "Not ready to start parsing");
		return false;
	}
	return true;
};

/* Processes a new ArrayBuffer (with a fileStart property)
   Returns the next expected file position, or undefined if not ready to parse */
MP4Box.prototype.appendBuffer = function (ab) {
	var nextFileStart;
	if (this.checkBuffer) {
		if (!this.checkBuffer(ab)) {
			return;
		}
	}

	/* Parse whatever is in the existing buffers */
	this.inputIsoFile.parse();

	/* Check if the moovStart callback needs to be called */
	if (this.inputIsoFile.moovStartFound && !this.moovStartSent) {
		this.moovStartSent = true;
		if (this.onMoovStart) this.onMoovStart();
	}

	if (this.inputIsoFile.moov) {
		/* A moov box has been entirely parsed */

		if (this.processSamples) {
			/* if this is the first call after the moov is found we initialize the list of samples (may be empty in fragmented files) */
			if (!this.sampleListBuilt) {
				this.inputIsoFile.buildSampleLists();
				this.sampleListBuilt = true;
			}

			/* We update the sample information if there are any new moof boxes */
			this.inputIsoFile.updateSampleLists();
		}

		/* If the application needs to be informed that the 'moov' has been found, 
     we create the information object and callback the application */
		if (this.onReady && !this.readySent) {
			this.readySent = true;
			this.onReady(this.getInfo());
		}

		if (this.processSamples) {
			/* See if any sample extraction or segment creation needs to be done with the available samples */
			this.processSamples();
		}

		/* Inform about the best range to fetch next */
		if (this.nextSeekPosition) {
			nextFileStart = this.nextSeekPosition;
			this.nextSeekPosition = undefined;
		} else {
			nextFileStart = this.inputIsoFile.nextParsePosition;
		}
		if (this.inputStream.getEndFilePositionAfter) {
			nextFileStart = this.inputStream.getEndFilePositionAfter(nextFileStart);
		}
	} else {
		if (this.inputIsoFile !== null) {
			/* moov has not been parsed but the first buffer was received, 
      the next fetch should probably be the next box start */
			nextFileStart = this.inputIsoFile.nextParsePosition;
		} else {
			/* No valid buffer has been parsed yet, we cannot know what to parse next */
			nextFileStart = 0;
		}
	}
	if (this.inputIsoFile.meta) {
		if (this.inputIsoFile.flattenItemInfo && !this.itemListBuilt) {
			this.inputIsoFile.flattenItemInfo();
			this.itemListBuilt = true;
		}
		if (this.inputIsoFile.processItems) {
			this.inputIsoFile.processItems(this.onItem);
		}
	}

	if (this.inputStream.cleanBuffers) {
		Log$2.info("MP4Box", "Done processing buffer (fileStart: " + ab.fileStart + ") - next buffer to fetch should have a fileStart position of " + nextFileStart);
		this.inputStream.logBufferLevel();
		this.inputStream.cleanBuffers();
		this.inputStream.logBufferLevel(true);
		Log$2.info("MP4Box", "Sample data size in memory: " + this.inputIsoFile.getAllocatedSampleDataSize());
	}
	return nextFileStart;
};

MP4Box.prototype.getInfo = function () {
	var i, j;
	var movie = {};
	var trak;
	var track;
	var sample_desc;
	var _1904 = new Date(4, 0, 1, 0, 0, 0, 0).getTime();

	if (this.inputIsoFile.moov) {
		movie.hasMoov = true;
		movie.duration = this.inputIsoFile.moov.mvhd.duration;
		movie.timescale = this.inputIsoFile.moov.mvhd.timescale;
		movie.isFragmented = this.inputIsoFile.moov.mvex != null;
		if (movie.isFragmented && this.inputIsoFile.moov.mvex.mehd) {
			movie.fragment_duration = this.inputIsoFile.moov.mvex.mehd.fragment_duration;
		}
		movie.isProgressive = this.inputIsoFile.isProgressive;
		movie.hasIOD = this.inputIsoFile.moov.iods != null;
		movie.brands = [];
		movie.brands.push(this.inputIsoFile.ftyp.major_brand);
		movie.brands = movie.brands.concat(this.inputIsoFile.ftyp.compatible_brands);
		movie.created = new Date(_1904 + this.inputIsoFile.moov.mvhd.creation_time * 1000);
		movie.modified = new Date(_1904 + this.inputIsoFile.moov.mvhd.modification_time * 1000);
		movie.tracks = [];
		movie.audioTracks = [];
		movie.videoTracks = [];
		movie.subtitleTracks = [];
		movie.metadataTracks = [];
		movie.hintTracks = [];
		movie.otherTracks = [];
		for (i = 0; i < this.inputIsoFile.moov.traks.length; i++) {
			trak = this.inputIsoFile.moov.traks[i];
			sample_desc = trak.mdia.minf.stbl.stsd.entries[0];
			track = {};
			movie.tracks.push(track);
			track.id = trak.tkhd.track_id;
			track.name = trak.mdia.hdlr.name;
			track.references = [];
			if (trak.tref) {
				for (j = 0; j < trak.tref.boxes.length; j++) {
					ref = {};
					track.references.push(ref);
					ref.type = trak.tref.boxes[j].type;
					ref.track_ids = trak.tref.boxes[j].track_ids;
				}
			}
			if (trak.edts) {
				track.edits = trak.edts.elst.entries;
			}
			track.created = new Date(_1904 + trak.tkhd.creation_time * 1000);
			track.modified = new Date(_1904 + trak.tkhd.modification_time * 1000);
			track.movie_duration = trak.tkhd.duration;
			track.movie_timescale = movie.timescale;
			track.layer = trak.tkhd.layer;
			track.alternate_group = trak.tkhd.alternate_group;
			track.volume = trak.tkhd.volume;
			track.matrix = trak.tkhd.matrix;
			track.track_width = trak.tkhd.width / (1 << 16);
			track.track_height = trak.tkhd.height / (1 << 16);
			track.timescale = trak.mdia.mdhd.timescale;
			track.cts_shift = trak.mdia.minf.stbl.cslg;
			track.duration = trak.mdia.mdhd.duration;
			track.samples_duration = trak.samples_duration;
			track.codec = sample_desc.getCodec();
			track.kind = trak.udta && trak.udta.kinds.length ? trak.udta.kinds[0] : { schemeURI: "", value: "" };
			track.language = trak.mdia.elng ? trak.mdia.elng.extended_language : trak.mdia.mdhd.languageString;
			track.nb_samples = trak.samples.length;
			track.size = trak.samples_size;
			track.bitrate = track.size * 8 * track.timescale / track.samples_duration;
			if (sample_desc.isAudio()) {
				track.type = "audio";
				movie.audioTracks.push(track);
				track.audio = {};
				track.audio.sample_rate = sample_desc.getSampleRate();
				track.audio.channel_count = sample_desc.getChannelCount();
				track.audio.sample_size = sample_desc.getSampleSize();
			} else if (sample_desc.isVideo()) {
				track.type = "video";
				movie.videoTracks.push(track);
				track.video = {};
				track.video.width = sample_desc.getWidth();
				track.video.height = sample_desc.getHeight();
			} else if (sample_desc.isSubtitle()) {
				track.type = "subtitles";
				movie.subtitleTracks.push(track);
			} else if (sample_desc.isHint()) {
				track.type = "metadata";
				movie.hintTracks.push(track);
			} else if (sample_desc.isMetadata()) {
				track.type = "metadata";
				movie.metadataTracks.push(track);
			} else {
				track.type = "metadata";
				movie.otherTracks.push(track);
			}
		}
	} else {
		movie.hasMoov = false;
	}
	movie.mime = "";
	if (movie.hasMoov) {
		if (movie.videoTracks.length > 0) {
			movie.mime += 'video/mp4; codecs=\"';
		} else if (movie.audioTracks.length > 0) {
			movie.mime += 'audio/mp4; codecs=\"';
		} else {
			movie.mime += 'application/mp4; codecs=\"';
		}
		for (i = 0; i < movie.tracks.length; i++) {
			if (i !== 0) movie.mime += ',';
			movie.mime += movie.tracks[i].codec;
		}
	}
	movie.mime += '\"; profiles=\"';
	movie.mime += this.inputIsoFile.ftyp.compatible_brands.join();
	movie.mime += '\"';
	return movie;
};

MP4Box.prototype.writeFile = function () {
	var stream = new DataStream();
	stream.endianness = DataStream.BIG_ENDIAN;
	this.inputIsoFile.write(stream);
	return stream.buffer;
};

MP4Box.prototype.initializeSegmentation = function () {
	var i;
	var j;
	var box;
	var initSegs;
	var trak;
	var seg;
	if (this.onSegment === null) {
		Log$2.warn("MP4Box", "No segmentation callback set!");
	}
	if (!this.isFragmentationInitialized) {
		this.isFragmentationInitialized = true;
		this.nextMoofNumber = 0;
		this.inputIsoFile.resetTables();
	}
	initSegs = [];
	for (i = 0; i < this.fragmentedTracks.length; i++) {
		var moov = new BoxParser.moovBox();
		moov.mvhd = this.inputIsoFile.moov.mvhd;
		moov.boxes.push(moov.mvhd);
		trak = this.inputIsoFile.getTrackById(this.fragmentedTracks[i].id);
		moov.boxes.push(trak);
		moov.traks.push(trak);
		seg = {};
		seg.id = trak.tkhd.track_id;
		seg.user = this.fragmentedTracks[i].user;
		seg.buffer = ISOFile.writeInitializationSegment(this.inputIsoFile.ftyp, moov, this.inputIsoFile.moov.mvex && this.inputIsoFile.moov.mvex.mehd ? this.inputIsoFile.moov.mvex.mehd.fragment_duration : undefined, this.inputIsoFile.moov.traks[i].samples.length > 0 ? this.inputIsoFile.moov.traks[i].samples[0].duration : 0);
		initSegs.push(seg);
	}
	return initSegs;
};

/* Called by the application to release the resources associated to samples already forwarded to the application */
MP4Box.prototype.releaseUsedSamples = function (id, sampleNum) {
	var size = 0;
	var trak = this.inputIsoFile.getTrackById(id);
	if (!trak.lastValidSample) trak.lastValidSample = 0;
	for (var i = trak.lastValidSample; i < sampleNum; i++) {
		size += this.inputIsoFile.releaseSample(trak, i);
	}
	Log$2.info("MP4Box", "Track #" + id + " released samples up to " + sampleNum + " (released size: " + size + ", remaining: " + this.inputIsoFile.samplesDataSize + ")");
	trak.lastValidSample = sampleNum;
};

/* Called by the application to flush the remaining samples, once the download is finished */
MP4Box.prototype.flush = function () {
	Log$2.info("MP4Box", "Flushing remaining samples");
	this.inputIsoFile.updateSampleLists();
	this.processSamples();
	this.inputStream.cleanBuffers();
	this.inputStream.logBufferLevel(true);
};

/* Finds the byte offset for a given time on a given track
   also returns the time of the previous rap */
MP4Box.prototype.seekTrack = function (time, useRap, trak) {
	var j;
	var sample;
	var seek_offset = Infinity;
	var rap_seek_sample_num = 0;
	var seek_sample_num = 0;
	var timescale;

	if (trak.samples.length === 0) {
		Log$2.info("MP4Box", "No sample in track, cannot seek! Using time " + Log$2.getDurationString(0, 1) + " and offset: " + 0);
		return { offset: 0, time: 0 };
	}

	for (j = 0; j < trak.samples.length; j++) {
		sample = trak.samples[j];
		if (j === 0) {
			seek_sample_num = 0;
			timescale = sample.timescale;
		} else if (sample.cts > time * sample.timescale) {
			seek_sample_num = j - 1;
			break;
		}
		if (useRap && sample.is_sync) {
			rap_seek_sample_num = j;
		}
	}
	if (useRap) {
		seek_sample_num = rap_seek_sample_num;
	}
	time = trak.samples[seek_sample_num].cts;
	trak.nextSample = seek_sample_num;
	while (trak.samples[seek_sample_num].alreadyRead === trak.samples[seek_sample_num].size) {
		seek_sample_num++;
	}
	seek_offset = trak.samples[seek_sample_num].offset + trak.samples[seek_sample_num].alreadyRead;
	Log$2.info("MP4Box", "Seeking to " + (useRap ? "RAP" : "") + " sample #" + trak.nextSample + " on track " + trak.tkhd.track_id + ", time " + Log$2.getDurationString(time, timescale) + " and offset: " + seek_offset);
	return { offset: seek_offset, time: time / timescale };
};

/* Finds the byte offset in the file corresponding to the given time or to the time of the previous RAP */
MP4Box.prototype.seek = function (time, useRap) {
	var moov = this.inputIsoFile.moov;
	var trak;
	var trak_seek_info;
	var i;
	var seek_info = { offset: Infinity, time: Infinity };
	if (!this.inputIsoFile.moov) {
		throw "Cannot seek: moov not received!";
	} else {
		for (i = 0; i < moov.traks.length; i++) {
			trak = moov.traks[i];
			trak_seek_info = this.seekTrack(time, useRap, trak);
			if (trak_seek_info.offset < seek_info.offset) {
				seek_info.offset = trak_seek_info.offset;
			}
			if (trak_seek_info.time < seek_info.time) {
				seek_info.time = trak_seek_info.time;
			}
		}
		Log$2.info("MP4Box", "Seeking at time " + Log$2.getDurationString(seek_info.time, 1) + " needs a buffer with a fileStart position of " + seek_info.offset);
		if (seek_info.offset === Infinity) {
			/* No sample info, in all tracks, cannot seek */
			seek_info = { offset: this.inputIsoFile.nextParsePosition, time: 0 };
		} else {
			/* check if the seek position is already in some buffer and
    in that case return the end of that buffer (or of the last contiguous buffer) */
			/* TODO: Should wait until append operations are done */
			seek_info.offset = this.inputStream.getEndFilePositionAfter(seek_info.offset);
		}
		Log$2.info("MP4Box", "Adjusted seek position (after checking data already in buffer): " + seek_info.offset);
		return seek_info;
	}
};

MP4Box.prototype.getTrackSamplesInfo = function (track_id) {
	var track = this.inputIsoFile.getTrackById(track_id);
	if (track) {
		return track.samples;
	} else {
		return;
	}
};

MP4Box.prototype.getTrackSample = function (track_id, number) {
	var track = this.inputIsoFile.getTrackById(track_id);
	var sample = this.inputIsoFile.getSample(track, number);
	return sample;
};

MP4Box.prototype.start = function () {
	this.sampleProcessingStarted = true;
	this.processSamples();
};

MP4Box.prototype.stop = function () {
	this.sampleProcessingStarted = false;
};

if (typeof exports !== 'undefined') {
	exports.MP4Box = MP4Box;
}

var Mp4decode = function (_CustEvent) {
	inherits(Mp4decode, _CustEvent);

	function Mp4decode() {
		classCallCheck$1(this, Mp4decode);

		var _this = possibleConstructorReturn(this, (Mp4decode.__proto__ || Object.getPrototypeOf(Mp4decode)).call(this));

		_this.mp4box = new MP4Box();
		_this.bindEvent();
		return _this;
	}

	createClass$1(Mp4decode, [{
		key: 'bindEvent',
		value: function bindEvent() {
			var _this2 = this;

			var mp4box = this.mp4box;
			mp4box.onReady = function (info) {
				var mediainfo = {
					data: {
						width: info.videoTracks[0].track_width || 0,
						height: info.videoTracks[0].track_height || 0,
						duration: info.isFragmented ? info.fragment_duration / info.timescale : info.duration / info.timescale,
						videoCodec: info.videoTracks[0].codec,
						auidoCodec: info.audioTracks[0].codec
					}
				};
				_this2.onMediaInfo(mediainfo);
				info.tracks.forEach(function (item) {
					mp4box.setSegmentOptions(item.id, item.type);
				});

				var initSegs = mp4box.initializeSegmentation();
				initSegs.forEach(function (item) {
					_this2.onInitMediaSegment({ type: item.user, buffer: item.buffer });
				});
			};

			mp4box.onError = function (e) {
				console.log(e);
			};
			mp4box.onSegment = function (id, user, buffer, sampleNum) {
				_this2.onMediaSegment({ type: user, buffer: buffer, sampleNum: sampleNum });
				mp4box.releaseUsedSamples(id, sampleNum);
			};
			mp4box.onSamples = function (id) {
				console.log(2);
			};
			mp4box.onItem = function (id) {
				console.log(3);
			};
			mp4box.start();
		}
	}, {
		key: 'sendBuffer',
		value: function sendBuffer(data) {
			var _this3 = this;

			Promise.resolve().then(function () {
				_this3.mp4box.appendBuffer(data);
			});
		}
	}, {
		key: 'seek',
		value: function seek(time, useRap) {
			this.mp4box.flush();
			return this.mp4box.seek(time, useRap);
		}
	}, {
		key: 'distroy',
		value: function distroy() {
			this.mp4box.flush();
		}
	}]);
	return Mp4decode;
}(CustEvent);

var webworkifyWebpack = createCommonjsModule(function (module) {
function webpackBootstrapFunc (modules) {
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.l = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }

/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // identity function for calling harmony imports with the correct context
/******/  __webpack_require__.i = function(value) { return value; };

/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };

/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };

/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "/";

/******/  // on error function for async loading
/******/  __webpack_require__.oe = function(err) { console.error(err); throw err; };

  var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE);
  return f.default || f // try to call default if defined to also support babel esmodule exports
}

// http://stackoverflow.com/a/2593661/130442
function quoteRegExp (str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
}

function getModuleDependencies (module) {
  var retval = [];
  var fnString = module.toString();
  var wrapperSignature = fnString.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
  if (!wrapperSignature) return retval

  var webpackRequireName = wrapperSignature[1];
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + '\\((\/\\*.*?\\*\/)?\s?.*?([\\.|\\-|\\+|\\w|\/|@]+).*?\\)', 'g'); // additional chars when output.pathinfo is true
  var match;
  while ((match = re.exec(fnString))) {
    retval.push(match[3]);
  }
  return retval
}

function getRequiredModules (sources, moduleId) {
  var modulesQueue = [moduleId];
  var requiredModules = [];
  var seenModules = {};

  while (modulesQueue.length) {
    var moduleToCheck = modulesQueue.pop();
    if (seenModules[moduleToCheck] || !sources[moduleToCheck]) continue
    seenModules[moduleToCheck] = true;
    requiredModules.push(moduleToCheck);
    var newModules = getModuleDependencies(sources[moduleToCheck]);
    modulesQueue = modulesQueue.concat(newModules);
  }

  return requiredModules
}

module.exports = function (moduleId, options) {
  options = options || {};
  var sources = __webpack_modules__;

  var requiredModules = options.all ? Object.keys(sources) : getRequiredModules(sources, moduleId);
  var src = '(' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.map(function (id) { return '' + JSON.stringify(id) + ': ' + sources[id].toString() }).join(',') + '})(self);';

  var blob = new window.Blob([src], { type: 'text/javascript' });
  if (options.bare) { return blob }

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

  var workerUrl = URL.createObjectURL(blob);
  var worker = new window.Worker(workerUrl);
  worker.objectURL = workerUrl;

  return worker
};
});

var work = unwrapExports(webworkifyWebpack);

/**
 * Transmuxer 控制层
 * @class Transmuxer
 * @param {mediaSource} mediaSource
 * @param {object} config
 */

var Transmuxer = function (_CustEvent) {
  inherits(Transmuxer, _CustEvent);

  function Transmuxer(mediaSource, config) {
    classCallCheck$1(this, Transmuxer);

    var _this = possibleConstructorReturn(this, (Transmuxer.__proto__ || Object.getPrototypeOf(Transmuxer)).call(this));

    _this.config = {};
    _this.tag = 'transmuxer';
    _this.loader = null;
    _this.CPU = null;
    _this.keyframePoint = false;
    _this.w = null;
    Object.assign(_this.config, config);
    if (_this.config.webWorker) {
      // const blob = new Blob([TransmuxerWorker], {type: 'text/javascript'});
      // this.w = new Worker(window.URL.createObjectURL(blob));
      _this.w = work(require.resolve('./transmuxer-worker.js'));
      _this.w.addEventListener('message', function (e) {
        _this.parseCallback.call(_this, e.data);
      });
      _this.w.postMessage({ cmd: 'init', data: config });
    }
    return _this;
  }
  /**
  * instance ioloader
  */


  createClass$1(Transmuxer, [{
    key: 'loadSource',
    value: function loadSource() {
      if (this.config.webWorker) {
        this.w.postMessage({ cmd: 'loadSource' });
        // this.loader.arrivalDataCallback = this.arrivalDataCallbackWorker.bind(this);
      } else {
        this.loader = new Ioloader(this.config);
        this.loader.arrivalDataCallback = this.arrivalDataCallback.bind(this);
        this.loader.open();
      }
    }
    /**
     * data arrive to webworker
     */
    // arrivalDataCallbackWorker (data, byteStart, keyframePoint) {
    //   if(keyframePoint) {
    //     this.w.postMessage({cmd: 'seek', source: data});
    //   }
    //   this.w.postMessage({cmd: 'pipe', source: data});
    //   return;
    // }
    /**
    * loader data callback
    *  @param {arraybuffer} 数据
    *  @param {number} 开始的起点
    *  @param {keyframePoint} 关键帧点
    */

  }, {
    key: 'arrivalDataCallback',
    value: function arrivalDataCallback(data, byteStart, keyframePoint) {
      //this.emit('mediaSegment', data);
      var consumed = 0;
      if (!this.CPU) {
        this.CPU = new Mp4decode();
        this.CPU.onMediaSegment = this.onRemuxerMediaSegmentArrival.bind(this);
        this.CPU.onInitMediaSegment = this.onRemuxerInitSegmentArrival.bind(this);
        this.CPU.onMediaInfo = this.onMediaInfo.bind(this);
        this.CPU.on('error', function (handle) {
          this.emit('mp4box', handle.data);
        });
      }
      if (keyframePoint) {
        this.keyframePoint = true;
        this.CPU.seek(keyframePoint);
      }
      this.CPU.sendBuffer(data);
    }

    /**
     * loader data callback
     *  @param {arraybuffer} 数据
     */

  }, {
    key: 'parseCallback',
    value: function parseCallback(data) {
      switch (data.cmd) {
        case 'mediaSegmentInit':
          this.emit('mediaSegmentInit', data.source);
          break;
        case 'mediaSegment':
          this.emit('mediaSegment', data.source);
          break;
        case 'mediainfo':
          this.emit('mediaInfo', data.source);
          break;
      }
    }

    /**
     * Demux error
     *  @param {string} 类型
     *  @param {string} 信息
     */

  }, {
    key: 'onDemuxError',
    value: function onDemuxError(type, info) {
      Log.error(this.tag, 'DemuxError: type = ' + type + ', info = ' + info);
      this.emit('DemuxError', type, info);
    }

    /**
     * Demux mediaInfo
     *  @param {object} 视频头信息
     */

  }, {
    key: 'onMediaInfo',
    value: function onMediaInfo(mediaInfo) {
      this.mediaInfo = mediaInfo;
      this.emit('mediaInfo', mediaInfo);
    }

    /**
     * remuxer init segment arrival
     *  @param {arraybuffer} 视频数据
     */

  }, {
    key: 'onRemuxerInitSegmentArrival',
    value: function onRemuxerInitSegmentArrival(data) {
      this.emit('mediaSegmentInit', data);
    }

    /**
     * remuxer  segment arrival
     *  @param {arraybuffer} 视频数据
     */

  }, {
    key: 'onRemuxerMediaSegmentArrival',
    value: function onRemuxerMediaSegmentArrival(data) {
      this.emit('mediaSegment', data);
    }

    /**
     * cpu error
     *  @param {object} 错误信息
     */

  }, {
    key: 'onCPUError',
    value: function onCPUError(handle) {
      this.emit('ERROR', handle.data);
    }

    /**
     * get video mediaInfo
     */

  }, {
    key: 'getMediaInfo',
    value: function getMediaInfo() {
      return this.mediaInfo;
    }

    /**
    * stop loader
    */

  }, {
    key: 'pause',
    value: function pause() {
      if (this.config.webWorker) {
        console.log('send pause');
        this.w.postMessage({ cmd: 'pause' });
      } else {
        this.loader.pause();
      }
    }

    /**
     * resume loader
     */

  }, {
    key: 'resume',
    value: function resume() {
      this.loader.resume();
    }
    /**
    * flv can seek
    */

  }, {
    key: 'isSeekable',
    value: function isSeekable() {
      return this.mediaInfo.hasKeyframesIndex;
    }
    /**
     * video seek
     * @param {object} 关键帧集合
     */

  }, {
    key: 'seek',
    value: function seek(time) {
      var seek_info = this.CPU.seek(time);
      this.loader = new Ioloader(this.config);
      this.loader.arrivalDataCallback = this.arrivalDataCallback.bind(this);
      this.loader.seek(seek_info.offset, false);
    }

    /**
     * refresh
     */

  }, {
    key: 'refresh',
    value: function refresh() {
      this.pause();
      this.loader = new Ioloader(this.config);
      this.loader.arrivalDataCallback = this.arrivalDataCallback.bind(this);
      this.loader.open();
    }

    /**
     * destroy
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.CPU.distroy();
      this.loader.destroy();
      this.loader = null;
      this.CPU = null;
    }

    /**
     * get nearlest keyframe
     */

  }, {
    key: 'getNearlestKeyframe',
    value: function getNearlestKeyframe(times) {
      if (this.mediaInfo && this.mediaInfo.keyframesIndex) {
        var keyframesList = this.mediaInfo.keyframesIndex.times;
        var keyframesPositions = this.mediaInfo.keyframesIndex.filepositions;
        var binarySearch = function binarySearch(list, val) {
          var length = list.length;
          var index = Math.floor(length / 2);
          if (length === 1) {
            var position = keyframesList.indexOf(list[0]);
            return {
              keyframetime: list[0],
              keyframePoint: keyframesPositions[position]
            };
          } else if (list[index] > val) {
            return binarySearch(list.slice(0, index), val);
          } else if (list[index] < val) {
            return binarySearch(list.slice(index), val);
          } else {
            var _position = keyframesList.indexOf(list[0]);
            return {
              keyframetime: list[0],
              keyframePoint: keyframesPositions[_position]
            };
          }
        };
        return binarySearch(keyframesList, times);
      } else {
        return 0;
      }
    }
  }]);
  return Transmuxer;
}(CustEvent);

var defaultConfig = {
  isLive: false, // 是否是直播
  box: 'flv', // 容器
  prestrain: 30, // 总是seek 到关键帧
  alwaysSeekKeyframe: true, // 总是seek 到关键帧
  lazyLoadMaxDuration: 2 * 60, //懒加载 最大播放长度
  lazyLoadRecoverDuration: 30, //懒加载还有多少长度 重启加载功能
  lockInternalProperty: false, //锁定原生的选项
  debug: true, //是否开启debug模式
  webWorker: false, // 是否开启webworker
  autoCleanupSourceBuffer: true, //是否自动清除 sourcebuffer
  autoCleanupMaxBackwardDuration: 30, //清除sourcebuffer最大时间
  autoCleanupMinBackwardDuration: 30 //清除sourcebuffer最小时间
};

/**
 * flv 控制层
 * @export
 * @class mp4
 */

var Flv = function (_CustEvent) {
  inherits(Flv, _CustEvent);
  createClass$1(Flv, null, [{
    key: 'isSupport',
    value: function isSupport() {

      var parser = new uaParser();
      var info = parser.getBrowser();
      if (info.name === 'Safari' && parseInt(info.major) < 10) {
        return false;
      }

      if (window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.640020,mp4a.40.2"')) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'version',
    get: function get$$1() {
      return '1.1.3';
    }
  }]);

  function Flv(videodom, config) {
    classCallCheck$1(this, Flv);

    var _this2 = possibleConstructorReturn(this, (Flv.__proto__ || Object.getPrototypeOf(Flv)).call(this));

    _this2.tag = 'MP4-player';
    _this2.video = videodom;
    _this2.box = 'mp4';
    _this2.timer = null;
    _this2.config = deepAssign({}, defaultConfig, config);
    _this2.requestSetTime = false;
    _this2.bindEvents();
    _this2.attachMedia();
    return _this2;
  }
  /**
   * 内部控制能否设置currentTime
   */


  createClass$1(Flv, [{
    key: 'internalPropertyHandle',
    value: function internalPropertyHandle() {
      if (!Object.getOwnPropertyDescriptor) {
        return;
      }
      var _this = this;
      var time = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime');

      Object.defineProperty(this.video, 'currentTime', {
        get: function get$$1() {
          return time.get.call(_this.video);
        },
        set: function set$$1(t) {
          if (!_this.currentTimeLock) {
            throw new Error('can not set currentTime by youself');
          } else {
            return time.set.call(_this.video, t);
          }
        }
      });
    }

    /**
     * 绑定事件
     */

  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this3 = this;

      if (this.video) {
        this.video.addEventListener('canplay', function () {
          if (_this3.config.isLive) {
            _this3.video.play();
          }
          if (_this3.config.lockInternalProperty) {
            _this3.internalPropertyHandle();
          }
        });
      }
    }

    /**
     * 建立 mediaSource
     */

  }, {
    key: 'attachMedia',
    value: function attachMedia() {
      var _this4 = this;

      this.mediaSource = new MSEController(this.video, this.config);

      this.mediaSource.on('source_open', function () {});
      this.mediaSource.on('bufferFull', function () {
        _this4.pauseTransmuxer();
      });
      this.mediaSource.on('updateend', function () {
        _this4.onmseUpdateEnd();
      });
    }

    /**
     * load
     * @param {string} video url
     */

  }, {
    key: 'load',
    value: function load(src) {
      var _this5 = this;

      if (src) {
        this.config.src = src;
      }

      this.transmuxer = new Transmuxer(this.mediaSource, this.config);

      this.transmuxer.on('mediaSegment', function (handle) {
        _this5.mediaSource.emit('mediaSegment', handle.data);
      });
      this.transmuxer.on('mediaSegmentInit', function (handle) {
        _this5.mediaSource.emit('mediaSegmentInit', handle.data);
      });

      this.transmuxer.on('error', function (handle) {
        _this5.emit('error', handle.data);
      });
      this.transmuxer.on('mediaInfo', function (mediaInfo) {
        if (!_this5.mediaInfo) {

          _this5.mediaInfo = mediaInfo;
          _this5.emit('mediaInfo', mediaInfo);
          _this5.mediaSource.init(mediaInfo);
          _this5.video.src = URL.createObjectURL(_this5.mediaSource.mediaSource);
          _this5.video.addEventListener('seeking', throttle(_this5._seek.bind(_this5), 200, { leading: false }));
        }
      });
      this.transmuxer.loadSource();
    }

    /**
     * seek in buffered
     * @param {number} seek time
     */

  }, {
    key: 'isTimeinBuffered',
    value: function isTimeinBuffered(seconds) {
      var buffered = this.video.buffered;
      for (var i = 0; i < buffered.length; i++) {
        var from = buffered.start(i);
        var to = buffered.end(i);
        if (seconds >= from && seconds < to) {
          return true;
        }
      }
      return false;
    }

    /**
     * get current buffer end
     */

  }, {
    key: 'getCurrentBufferEnd',
    value: function getCurrentBufferEnd() {
      var buffered = this.video.buffered;
      var currentTime = this.video.currentTime;
      var currentRangeEnd = 0;

      for (var i = 0; i < buffered.length; i++) {
        var start = buffered.start(i);
        var end = buffered.end(i);
        if (start <= currentTime && currentTime < end) {
          currentRangeEnd = end;
          return currentRangeEnd;
        }
      }
    }
    /**
     * _seek
     * @param {number} seek time
     */

  }, {
    key: '_seek',
    value: function _seek(seconds) {
      this.currentTimeLock = true;

      var currentTime = seconds && !isNaN(seconds) ? seconds : this.video.currentTime;

      if (this.requestSetTime) {
        this.requestSetTime = false;
        this.currentTimeLock = false;
        return;
      }
      // const buffered = this.video.buffered;
      if (this.isTimeinBuffered(currentTime)) {
        if (this.config.alwaysSeekKeyframe) {
          var nearlestkeyframe = this.transmuxer.getNearlestKeyframe(Math.floor(currentTime * 1000));
          if (nearlestkeyframe) {
            this.requestSetTime = true;
            this.video.currentTime = nearlestkeyframe.keyframetime / 1000;
          }
        }
      } else {
        Log.verbose(this.tag, 'do seek');
        this.transmuxer.pause();
        // const nearlestkeyframe = this.transmuxer.getNearlestKeyframe(Math.floor(currentTime * 1000));
        // currentTime = nearlestkeyframe.keyframetime / 1000;
        this.transmuxer.seek(currentTime);
        this.mediaSource.seek(currentTime);
        this.requestSetTime = true;
        this.video.currentTime = currentTime;
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.currentTimeLock = false;
      return currentTime;
    }

    /**
     * mediaSource updateend
     */

  }, {
    key: 'onmseUpdateEnd',
    value: function onmseUpdateEnd() {
      var _this6 = this;

      setTimeout(function () {
        if (_this6.config.isLive) {
          return;
        }
        var currentBufferEnd = _this6.getCurrentBufferEnd();
        var currentTime = _this6.video.currentTime;
        if (currentBufferEnd >= currentTime + _this6.config.lazyLoadMaxDuration && _this6.timer === null) {
          Log.verbose(_this6.tag, 'Maximum buffering duration exceeded, suspend transmuxing task');
          _this6.pauseTransmuxer();
        }
      }, 10);
    }

    /**
     * 心跳
     */

  }, {
    key: 'heartbeat',
    value: function heartbeat() {
      var currentTime = this.video.currentTime;
      var buffered = this.video.buffered;

      var needResume = false;

      for (var i = 0; i < buffered.length; i++) {
        var from = buffered.start(i);
        var to = buffered.end(i);
        if (currentTime >= from && currentTime < to) {
          if (currentTime >= to - this.config.lazyLoadRecoverDuration) {
            needResume = true;
          }
          break;
        }
      }

      if (needResume) {
        window.clearInterval(this.timer);
        this.timer = null;
        Log.verbose(this.tag, 'Continue loading from paused position');
        this.transmuxer.resume();
      }
    }

    /**
     * 暂停 transmuxer
     */

  }, {
    key: 'pauseTransmuxer',
    value: function pauseTransmuxer() {
      this.transmuxer.pause();
      if (!this.timer) {
        this.timer = setInterval(this.heartbeat.bind(this), 1000);
      }
    }
  }, {
    key: 'resume',
    value: function resume() {}

    /**
     * destroy
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.video) {
        this.video.src = '';
        this.video.removeAttribute('src');
        this.transmuxer.destroy();
        this.transmuxer = null;
        this.mediaSource.destroy();
        this.mediaSource = null;
      }
    }
  }, {
    key: 'seek',
    value: function seek(seconds) {
      return this._seek(seconds);
    }
  }, {
    key: 'play',
    value: function play() {
      return this.video.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      return this.video.pause();
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      this.transmuxer.refresh();
    }
  }]);
  return Flv;
}(CustEvent);

return Flv;

})));
//# sourceMappingURL=index.dev.js.map
