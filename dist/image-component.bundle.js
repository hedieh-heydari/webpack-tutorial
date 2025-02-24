/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nmodule.exports = ansiHTML;\n\n// Reference to https://github.com/sindresorhus/ansi-regex\nvar _regANSI = /(?:(?:\\u001b\\[)|\\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\\u001b[A-M]/;\nvar _defColors = {\n  reset: ['fff', '000'],\n  // [FOREGROUD_COLOR, BACKGROUND_COLOR]\n  black: '000',\n  red: 'ff0000',\n  green: '209805',\n  yellow: 'e8bf03',\n  blue: '0000ff',\n  magenta: 'ff00ff',\n  cyan: '00ffee',\n  lightgrey: 'f0f0f0',\n  darkgrey: '888'\n};\nvar _styles = {\n  30: 'black',\n  31: 'red',\n  32: 'green',\n  33: 'yellow',\n  34: 'blue',\n  35: 'magenta',\n  36: 'cyan',\n  37: 'lightgrey'\n};\nvar _openTags = {\n  '1': 'font-weight:bold',\n  // bold\n  '2': 'opacity:0.5',\n  // dim\n  '3': '<i>',\n  // italic\n  '4': '<u>',\n  // underscore\n  '8': 'display:none',\n  // hidden\n  '9': '<del>' // delete\n};\nvar _closeTags = {\n  '23': '</i>',\n  // reset italic\n  '24': '</u>',\n  // reset underscore\n  '29': '</del>' // reset delete\n};\n[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {\n  _closeTags[n] = '</span>';\n});\n\n/**\n * Converts text with ANSI color codes to HTML markup.\n * @param {String} text\n * @returns {*}\n */\nfunction ansiHTML(text) {\n  // Returns the text if the string has no ANSI escape code.\n  if (!_regANSI.test(text)) {\n    return text;\n  }\n\n  // Cache opened sequence.\n  var ansiCodes = [];\n  // Replace with markup.\n  var ret = text.replace(/\\033\\[(\\d+)m/g, function (match, seq) {\n    var ot = _openTags[seq];\n    if (ot) {\n      // If current sequence has been opened, close it.\n      if (!!~ansiCodes.indexOf(seq)) {\n        // eslint-disable-line no-extra-boolean-cast\n        ansiCodes.pop();\n        return '</span>';\n      }\n      // Open tag.\n      ansiCodes.push(seq);\n      return ot[0] === '<' ? ot : '<span style=\"' + ot + ';\">';\n    }\n    var ct = _closeTags[seq];\n    if (ct) {\n      // Pop sequence\n      ansiCodes.pop();\n      return ct;\n    }\n    return '';\n  });\n\n  // Make sure tags are closed.\n  var l = ansiCodes.length;\n  l > 0 && (ret += Array(l + 1).join('</span>'));\n  return ret;\n}\n\n/**\n * Customize colors.\n * @param {Object} colors reference to _defColors\n */\nansiHTML.setColors = function (colors) {\n  if (_typeof(colors) !== 'object') {\n    throw new Error('`colors` parameter must be an Object.');\n  }\n  var _finalColors = {};\n  for (var key in _defColors) {\n    var hex = colors.hasOwnProperty(key) ? colors[key] : null;\n    if (!hex) {\n      _finalColors[key] = _defColors[key];\n      continue;\n    }\n    if ('reset' === key) {\n      if (typeof hex === 'string') {\n        hex = [hex];\n      }\n      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {\n        return typeof h !== 'string';\n      })) {\n        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');\n      }\n      var defHexColor = _defColors[key];\n      if (!hex[0]) {\n        hex[0] = defHexColor[0];\n      }\n      if (hex.length === 1 || !hex[1]) {\n        hex = [hex[0]];\n        hex.push(defHexColor[1]);\n      }\n      hex = hex.slice(0, 2);\n    } else if (typeof hex !== 'string') {\n      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');\n    }\n    _finalColors[key] = hex;\n  }\n  _setTags(_finalColors);\n};\n\n/**\n * Reset colors.\n */\nansiHTML.reset = function () {\n  _setTags(_defColors);\n};\n\n/**\n * Expose tags, including open and close.\n * @type {Object}\n */\nansiHTML.tags = {};\nif (Object.defineProperty) {\n  Object.defineProperty(ansiHTML.tags, 'open', {\n    get: function get() {\n      return _openTags;\n    }\n  });\n  Object.defineProperty(ansiHTML.tags, 'close', {\n    get: function get() {\n      return _closeTags;\n    }\n  });\n} else {\n  ansiHTML.tags.open = _openTags;\n  ansiHTML.tags.close = _closeTags;\n}\nfunction _setTags(colors) {\n  // reset all\n  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1];\n  // inverse\n  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0];\n  // dark grey\n  _openTags['90'] = 'color:#' + colors.darkgrey;\n  for (var code in _styles) {\n    var color = _styles[code];\n    var oriColor = colors[color] || '000';\n    _openTags[code] = 'color:#' + oriColor;\n    code = parseInt(code);\n    _openTags[(code + 10).toString()] = 'background:#' + oriColor;\n  }\n}\nansiHTML.reset();\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/ansi-html-community/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nvar R = (typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === 'object' ? Reflect : null;\nvar ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {\n  return Function.prototype.apply.call(target, receiver, args);\n};\nvar ReflectOwnKeys;\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys;\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n};\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\nmodule.exports.once = once;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\nfunction checkListener(listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + _typeof(listener));\n  }\n}\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function get() {\n    return defaultMaxListeners;\n  },\n  set: function set(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\nEventEmitter.init = function () {\n  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\nfunction _getMaxListeners(that) {\n  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return _getMaxListeners(this);\n};\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = type === 'error';\n  var events = this._events;\n  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0) er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n  var handler = events[type];\n  if (handler === undefined) return false;\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);\n  }\n  return true;\n};\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n  checkListener(listener);\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type, listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] = prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = _getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n  return target;\n}\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\nEventEmitter.prototype.prependListener = function prependListener(type, listener) {\n  return _addListener(this, type, listener, true);\n};\nfunction onceWrapper() {\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    if (arguments.length === 0) return this.listener.call(this.target);\n    return this.listener.apply(this.target, arguments);\n  }\n}\nfunction _onceWrap(target, type, listener) {\n  var state = {\n    fired: false,\n    wrapFn: undefined,\n    target: target,\n    type: type,\n    listener: listener\n  };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\nEventEmitter.prototype.once = function once(type, listener) {\n  checkListener(listener);\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\nEventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {\n  checkListener(listener);\n  this.prependListener(type, _onceWrap(this, type, listener));\n  return this;\n};\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener = function removeListener(type, listener) {\n  var list, events, position, i, originalListener;\n  checkListener(listener);\n  events = this._events;\n  if (events === undefined) return this;\n  list = events[type];\n  if (list === undefined) return this;\n  if (list === listener || list.listener === listener) {\n    if (--this._eventsCount === 0) this._events = Object.create(null);else {\n      delete events[type];\n      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);\n    }\n  } else if (typeof list !== 'function') {\n    position = -1;\n    for (i = list.length - 1; i >= 0; i--) {\n      if (list[i] === listener || list[i].listener === listener) {\n        originalListener = list[i].listener;\n        position = i;\n        break;\n      }\n    }\n    if (position < 0) return this;\n    if (position === 0) list.shift();else {\n      spliceOne(list, position);\n    }\n    if (list.length === 1) events[type] = list[0];\n    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);\n  }\n  return this;\n};\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {\n  var listeners, events, i;\n  events = this._events;\n  if (events === undefined) return this;\n\n  // not listening for removeListener, no need to emit\n  if (events.removeListener === undefined) {\n    if (arguments.length === 0) {\n      this._events = Object.create(null);\n      this._eventsCount = 0;\n    } else if (events[type] !== undefined) {\n      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];\n    }\n    return this;\n  }\n\n  // emit removeListener for all listeners on all events\n  if (arguments.length === 0) {\n    var keys = Object.keys(events);\n    var key;\n    for (i = 0; i < keys.length; ++i) {\n      key = keys[i];\n      if (key === 'removeListener') continue;\n      this.removeAllListeners(key);\n    }\n    this.removeAllListeners('removeListener');\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n    return this;\n  }\n  listeners = events[type];\n  if (typeof listeners === 'function') {\n    this.removeListener(type, listeners);\n  } else if (listeners !== undefined) {\n    // LIFO order\n    for (i = listeners.length - 1; i >= 0; i--) {\n      this.removeListener(type, listeners[i]);\n    }\n  }\n  return this;\n};\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n  if (events === undefined) return [];\n  var evlistener = events[type];\n  if (evlistener === undefined) return [];\n  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\nEventEmitter.listenerCount = function (emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n  if (events !== undefined) {\n    var evlistener = events[type];\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n  return 0;\n}\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i) copy[i] = arr[i];\n  return copy;\n}\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++) list[index] = list[index + 1];\n  list.pop();\n}\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\nfunction once(emitter, name) {\n  return new Promise(function (resolve, reject) {\n    function errorListener(err) {\n      emitter.removeListener(name, resolver);\n      reject(err);\n    }\n    function resolver() {\n      if (typeof emitter.removeListener === 'function') {\n        emitter.removeListener('error', errorListener);\n      }\n      resolve([].slice.call(arguments));\n    }\n    ;\n    eventTargetAgnosticAddListener(emitter, name, resolver, {\n      once: true\n    });\n    if (name !== 'error') {\n      addErrorHandlerIfEventEmitter(emitter, errorListener, {\n        once: true\n      });\n    }\n  });\n}\nfunction addErrorHandlerIfEventEmitter(emitter, handler, flags) {\n  if (typeof emitter.on === 'function') {\n    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);\n  }\n}\nfunction eventTargetAgnosticAddListener(emitter, name, listener, flags) {\n  if (typeof emitter.on === 'function') {\n    if (flags.once) {\n      emitter.once(name, listener);\n    } else {\n      emitter.on(name, listener);\n    }\n  } else if (typeof emitter.addEventListener === 'function') {\n    // EventTarget does not have `error` event semantics like Node\n    // EventEmitters, we do not listen for `error` events here.\n    emitter.addEventListener(name, function wrapListener(arg) {\n      // IE does not have builtin `{ once: true }` support so we\n      // have to do it manually.\n      if (flags.once) {\n        emitter.removeEventListener(name, wrapListener);\n      }\n      listener(arg);\n    });\n  } else {\n    throw new TypeError('The \"emitter\" argument must be of type EventEmitter. Received type ' + _typeof(emitter));\n  }\n}\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/events/events.js?");

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * @license React\n * react.development.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n true && function () {\n  function defineDeprecationWarning(methodName, info) {\n    Object.defineProperty(Component.prototype, methodName, {\n      get: function get() {\n        console.warn(\"%s(...) is deprecated in plain JavaScript React classes. %s\", info[0], info[1]);\n      }\n    });\n  }\n  function getIteratorFn(maybeIterable) {\n    if (null === maybeIterable || \"object\" !== _typeof(maybeIterable)) return null;\n    maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[\"@@iterator\"];\n    return \"function\" === typeof maybeIterable ? maybeIterable : null;\n  }\n  function warnNoop(publicInstance, callerName) {\n    publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || \"ReactClass\";\n    var warningKey = publicInstance + \".\" + callerName;\n    didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(\"Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.\", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);\n  }\n  function Component(props, context, updater) {\n    this.props = props;\n    this.context = context;\n    this.refs = emptyObject;\n    this.updater = updater || ReactNoopUpdateQueue;\n  }\n  function ComponentDummy() {}\n  function PureComponent(props, context, updater) {\n    this.props = props;\n    this.context = context;\n    this.refs = emptyObject;\n    this.updater = updater || ReactNoopUpdateQueue;\n  }\n  function testStringCoercion(value) {\n    return \"\" + value;\n  }\n  function checkKeyStringCoercion(value) {\n    try {\n      testStringCoercion(value);\n      var JSCompiler_inline_result = !1;\n    } catch (e) {\n      JSCompiler_inline_result = !0;\n    }\n    if (JSCompiler_inline_result) {\n      JSCompiler_inline_result = console;\n      var JSCompiler_temp_const = JSCompiler_inline_result.error;\n      var JSCompiler_inline_result$jscomp$0 = \"function\" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || \"Object\";\n      JSCompiler_temp_const.call(JSCompiler_inline_result, \"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.\", JSCompiler_inline_result$jscomp$0);\n      return testStringCoercion(value);\n    }\n  }\n  function getComponentNameFromType(type) {\n    if (null == type) return null;\n    if (\"function\" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;\n    if (\"string\" === typeof type) return type;\n    switch (type) {\n      case REACT_FRAGMENT_TYPE:\n        return \"Fragment\";\n      case REACT_PORTAL_TYPE:\n        return \"Portal\";\n      case REACT_PROFILER_TYPE:\n        return \"Profiler\";\n      case REACT_STRICT_MODE_TYPE:\n        return \"StrictMode\";\n      case REACT_SUSPENSE_TYPE:\n        return \"Suspense\";\n      case REACT_SUSPENSE_LIST_TYPE:\n        return \"SuspenseList\";\n    }\n    if (\"object\" === _typeof(type)) switch (\"number\" === typeof type.tag && console.error(\"Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.\"), type.$$typeof) {\n      case REACT_CONTEXT_TYPE:\n        return (type.displayName || \"Context\") + \".Provider\";\n      case REACT_CONSUMER_TYPE:\n        return (type._context.displayName || \"Context\") + \".Consumer\";\n      case REACT_FORWARD_REF_TYPE:\n        var innerType = type.render;\n        type = type.displayName;\n        type || (type = innerType.displayName || innerType.name || \"\", type = \"\" !== type ? \"ForwardRef(\" + type + \")\" : \"ForwardRef\");\n        return type;\n      case REACT_MEMO_TYPE:\n        return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || \"Memo\";\n      case REACT_LAZY_TYPE:\n        innerType = type._payload;\n        type = type._init;\n        try {\n          return getComponentNameFromType(type(innerType));\n        } catch (x) {}\n    }\n    return null;\n  }\n  function isValidElementType(type) {\n    return \"string\" === typeof type || \"function\" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || \"object\" === _typeof(type) && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId) ? !0 : !1;\n  }\n  function disabledLog() {}\n  function disableLogs() {\n    if (0 === disabledDepth) {\n      prevLog = console.log;\n      prevInfo = console.info;\n      prevWarn = console.warn;\n      prevError = console.error;\n      prevGroup = console.group;\n      prevGroupCollapsed = console.groupCollapsed;\n      prevGroupEnd = console.groupEnd;\n      var props = {\n        configurable: !0,\n        enumerable: !0,\n        value: disabledLog,\n        writable: !0\n      };\n      Object.defineProperties(console, {\n        info: props,\n        log: props,\n        warn: props,\n        error: props,\n        group: props,\n        groupCollapsed: props,\n        groupEnd: props\n      });\n    }\n    disabledDepth++;\n  }\n  function reenableLogs() {\n    disabledDepth--;\n    if (0 === disabledDepth) {\n      var props = {\n        configurable: !0,\n        enumerable: !0,\n        writable: !0\n      };\n      Object.defineProperties(console, {\n        log: assign({}, props, {\n          value: prevLog\n        }),\n        info: assign({}, props, {\n          value: prevInfo\n        }),\n        warn: assign({}, props, {\n          value: prevWarn\n        }),\n        error: assign({}, props, {\n          value: prevError\n        }),\n        group: assign({}, props, {\n          value: prevGroup\n        }),\n        groupCollapsed: assign({}, props, {\n          value: prevGroupCollapsed\n        }),\n        groupEnd: assign({}, props, {\n          value: prevGroupEnd\n        })\n      });\n    }\n    0 > disabledDepth && console.error(\"disabledDepth fell below zero. This is a bug in React. Please file an issue.\");\n  }\n  function describeBuiltInComponentFrame(name) {\n    if (void 0 === prefix) try {\n      throw Error();\n    } catch (x) {\n      var match = x.stack.trim().match(/\\n( *(at )?)/);\n      prefix = match && match[1] || \"\";\n      suffix = -1 < x.stack.indexOf(\"\\n    at\") ? \" (<anonymous>)\" : -1 < x.stack.indexOf(\"@\") ? \"@unknown:0:0\" : \"\";\n    }\n    return \"\\n\" + prefix + name + suffix;\n  }\n  function describeNativeComponentFrame(fn, construct) {\n    if (!fn || reentry) return \"\";\n    var frame = componentFrameCache.get(fn);\n    if (void 0 !== frame) return frame;\n    reentry = !0;\n    frame = Error.prepareStackTrace;\n    Error.prepareStackTrace = void 0;\n    var previousDispatcher = null;\n    previousDispatcher = ReactSharedInternals.H;\n    ReactSharedInternals.H = null;\n    disableLogs();\n    try {\n      var RunInRootFrame = {\n        DetermineComponentFrameRoot: function DetermineComponentFrameRoot() {\n          try {\n            if (construct) {\n              var Fake = function Fake() {\n                throw Error();\n              };\n              Object.defineProperty(Fake.prototype, \"props\", {\n                set: function set() {\n                  throw Error();\n                }\n              });\n              if (\"object\" === (typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) && Reflect.construct) {\n                try {\n                  Reflect.construct(Fake, []);\n                } catch (x) {\n                  var control = x;\n                }\n                Reflect.construct(fn, [], Fake);\n              } else {\n                try {\n                  Fake.call();\n                } catch (x$0) {\n                  control = x$0;\n                }\n                fn.call(Fake.prototype);\n              }\n            } else {\n              try {\n                throw Error();\n              } catch (x$1) {\n                control = x$1;\n              }\n              (Fake = fn()) && \"function\" === typeof Fake[\"catch\"] && Fake[\"catch\"](function () {});\n            }\n          } catch (sample) {\n            if (sample && control && \"string\" === typeof sample.stack) return [sample.stack, control.stack];\n          }\n          return [null, null];\n        }\n      };\n      RunInRootFrame.DetermineComponentFrameRoot.displayName = \"DetermineComponentFrameRoot\";\n      var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, \"name\");\n      namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, \"name\", {\n        value: \"DetermineComponentFrameRoot\"\n      });\n      var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),\n        sampleStack = _RunInRootFrame$Deter[0],\n        controlStack = _RunInRootFrame$Deter[1];\n      if (sampleStack && controlStack) {\n        var sampleLines = sampleStack.split(\"\\n\"),\n          controlLines = controlStack.split(\"\\n\");\n        for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(\"DetermineComponentFrameRoot\");) namePropDescriptor++;\n        for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(\"DetermineComponentFrameRoot\");) _RunInRootFrame$Deter++;\n        if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];) _RunInRootFrame$Deter--;\n        for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--) if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {\n          if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {\n            do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {\n              var _frame = \"\\n\" + sampleLines[namePropDescriptor].replace(\" at new \", \" at \");\n              fn.displayName && _frame.includes(\"<anonymous>\") && (_frame = _frame.replace(\"<anonymous>\", fn.displayName));\n              \"function\" === typeof fn && componentFrameCache.set(fn, _frame);\n              return _frame;\n            } while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);\n          }\n          break;\n        }\n      }\n    } finally {\n      reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;\n    }\n    sampleLines = (sampleLines = fn ? fn.displayName || fn.name : \"\") ? describeBuiltInComponentFrame(sampleLines) : \"\";\n    \"function\" === typeof fn && componentFrameCache.set(fn, sampleLines);\n    return sampleLines;\n  }\n  function describeUnknownElementTypeFrameInDEV(type) {\n    if (null == type) return \"\";\n    if (\"function\" === typeof type) {\n      var prototype = type.prototype;\n      return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));\n    }\n    if (\"string\" === typeof type) return describeBuiltInComponentFrame(type);\n    switch (type) {\n      case REACT_SUSPENSE_TYPE:\n        return describeBuiltInComponentFrame(\"Suspense\");\n      case REACT_SUSPENSE_LIST_TYPE:\n        return describeBuiltInComponentFrame(\"SuspenseList\");\n    }\n    if (\"object\" === _typeof(type)) switch (type.$$typeof) {\n      case REACT_FORWARD_REF_TYPE:\n        return type = describeNativeComponentFrame(type.render, !1), type;\n      case REACT_MEMO_TYPE:\n        return describeUnknownElementTypeFrameInDEV(type.type);\n      case REACT_LAZY_TYPE:\n        prototype = type._payload;\n        type = type._init;\n        try {\n          return describeUnknownElementTypeFrameInDEV(type(prototype));\n        } catch (x) {}\n    }\n    return \"\";\n  }\n  function getOwner() {\n    var dispatcher = ReactSharedInternals.A;\n    return null === dispatcher ? null : dispatcher.getOwner();\n  }\n  function hasValidKey(config) {\n    if (hasOwnProperty.call(config, \"key\")) {\n      var getter = Object.getOwnPropertyDescriptor(config, \"key\").get;\n      if (getter && getter.isReactWarning) return !1;\n    }\n    return void 0 !== config.key;\n  }\n  function defineKeyPropWarningGetter(props, displayName) {\n    function warnAboutAccessingKey() {\n      specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error(\"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)\", displayName));\n    }\n    warnAboutAccessingKey.isReactWarning = !0;\n    Object.defineProperty(props, \"key\", {\n      get: warnAboutAccessingKey,\n      configurable: !0\n    });\n  }\n  function elementRefGetterWithDeprecationWarning() {\n    var componentName = getComponentNameFromType(this.type);\n    didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error(\"Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.\"));\n    componentName = this.props.ref;\n    return void 0 !== componentName ? componentName : null;\n  }\n  function ReactElement(type, key, self, source, owner, props) {\n    self = props.ref;\n    type = {\n      $$typeof: REACT_ELEMENT_TYPE,\n      type: type,\n      key: key,\n      props: props,\n      _owner: owner\n    };\n    null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, \"ref\", {\n      enumerable: !1,\n      get: elementRefGetterWithDeprecationWarning\n    }) : Object.defineProperty(type, \"ref\", {\n      enumerable: !1,\n      value: null\n    });\n    type._store = {};\n    Object.defineProperty(type._store, \"validated\", {\n      configurable: !1,\n      enumerable: !1,\n      writable: !0,\n      value: 0\n    });\n    Object.defineProperty(type, \"_debugInfo\", {\n      configurable: !1,\n      enumerable: !1,\n      writable: !0,\n      value: null\n    });\n    Object.freeze && (Object.freeze(type.props), Object.freeze(type));\n    return type;\n  }\n  function cloneAndReplaceKey(oldElement, newKey) {\n    newKey = ReactElement(oldElement.type, newKey, void 0, void 0, oldElement._owner, oldElement.props);\n    newKey._store.validated = oldElement._store.validated;\n    return newKey;\n  }\n  function validateChildKeys(node, parentType) {\n    if (\"object\" === _typeof(node) && node && node.$$typeof !== REACT_CLIENT_REFERENCE) if (isArrayImpl(node)) for (var i = 0; i < node.length; i++) {\n      var child = node[i];\n      isValidElement(child) && validateExplicitKey(child, parentType);\n    } else if (isValidElement(node)) node._store && (node._store.validated = 1);else if (i = getIteratorFn(node), \"function\" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for (; !(node = i.next()).done;) isValidElement(node.value) && validateExplicitKey(node.value, parentType);\n  }\n  function isValidElement(object) {\n    return \"object\" === _typeof(object) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;\n  }\n  function validateExplicitKey(element, parentType) {\n    if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {\n      ownerHasKeyUseWarning[parentType] = !0;\n      var childOwner = \"\";\n      element && null != element._owner && element._owner !== getOwner() && (childOwner = null, \"number\" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : \"string\" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = \" It was passed a child from \" + childOwner + \".\");\n      var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;\n      ReactSharedInternals.getCurrentStack = function () {\n        var stack = describeUnknownElementTypeFrameInDEV(element.type);\n        prevGetCurrentStack && (stack += prevGetCurrentStack() || \"\");\n        return stack;\n      };\n      console.error('Each child in a list should have a unique \"key\" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);\n      ReactSharedInternals.getCurrentStack = prevGetCurrentStack;\n    }\n  }\n  function getCurrentComponentErrorInfo(parentType) {\n    var info = \"\",\n      owner = getOwner();\n    owner && (owner = getComponentNameFromType(owner.type)) && (info = \"\\n\\nCheck the render method of `\" + owner + \"`.\");\n    info || (parentType = getComponentNameFromType(parentType)) && (info = \"\\n\\nCheck the top-level render call using <\" + parentType + \">.\");\n    return info;\n  }\n  function escape(key) {\n    var escaperLookup = {\n      \"=\": \"=0\",\n      \":\": \"=2\"\n    };\n    return \"$\" + key.replace(/[=:]/g, function (match) {\n      return escaperLookup[match];\n    });\n  }\n  function getElementKey(element, index) {\n    return \"object\" === _typeof(element) && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape(\"\" + element.key)) : index.toString(36);\n  }\n  function noop$1() {}\n  function resolveThenable(thenable) {\n    switch (thenable.status) {\n      case \"fulfilled\":\n        return thenable.value;\n      case \"rejected\":\n        throw thenable.reason;\n      default:\n        switch (\"string\" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = \"pending\", thenable.then(function (fulfilledValue) {\n          \"pending\" === thenable.status && (thenable.status = \"fulfilled\", thenable.value = fulfilledValue);\n        }, function (error) {\n          \"pending\" === thenable.status && (thenable.status = \"rejected\", thenable.reason = error);\n        })), thenable.status) {\n          case \"fulfilled\":\n            return thenable.value;\n          case \"rejected\":\n            throw thenable.reason;\n        }\n    }\n    throw thenable;\n  }\n  function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {\n    var type = _typeof(children);\n    if (\"undefined\" === type || \"boolean\" === type) children = null;\n    var invokeCallback = !1;\n    if (null === children) invokeCallback = !0;else switch (type) {\n      case \"bigint\":\n      case \"string\":\n      case \"number\":\n        invokeCallback = !0;\n        break;\n      case \"object\":\n        switch (children.$$typeof) {\n          case REACT_ELEMENT_TYPE:\n          case REACT_PORTAL_TYPE:\n            invokeCallback = !0;\n            break;\n          case REACT_LAZY_TYPE:\n            return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);\n        }\n    }\n    if (invokeCallback) {\n      invokeCallback = children;\n      callback = callback(invokeCallback);\n      var childKey = \"\" === nameSoFar ? \".\" + getElementKey(invokeCallback, 0) : nameSoFar;\n      isArrayImpl(callback) ? (escapedPrefix = \"\", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, \"$&/\") + \"/\"), mapIntoArray(callback, array, escapedPrefix, \"\", function (c) {\n        return c;\n      })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? \"\" : (\"\" + callback.key).replace(userProvidedKeyEscapeRegex, \"$&/\") + \"/\") + childKey), \"\" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));\n      return 1;\n    }\n    invokeCallback = 0;\n    childKey = \"\" === nameSoFar ? \".\" : nameSoFar + \":\";\n    if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);else if (i = getIteratorFn(children), \"function\" === typeof i) for (i === children.entries && (didWarnAboutMaps || console.warn(\"Using Maps as children is not supported. Use an array of keyed ReactElements instead.\"), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);else if (\"object\" === type) {\n      if (\"function\" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);\n      array = String(children);\n      throw Error(\"Objects are not valid as a React child (found: \" + (\"[object Object]\" === array ? \"object with keys {\" + Object.keys(children).join(\", \") + \"}\" : array) + \"). If you meant to render a collection of children, use an array instead.\");\n    }\n    return invokeCallback;\n  }\n  function mapChildren(children, func, context) {\n    if (null == children) return children;\n    var result = [],\n      count = 0;\n    mapIntoArray(children, result, \"\", \"\", function (child) {\n      return func.call(context, child, count++);\n    });\n    return result;\n  }\n  function lazyInitializer(payload) {\n    if (-1 === payload._status) {\n      var ctor = payload._result;\n      ctor = ctor();\n      ctor.then(function (moduleObject) {\n        if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;\n      }, function (error) {\n        if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;\n      });\n      -1 === payload._status && (payload._status = 0, payload._result = ctor);\n    }\n    if (1 === payload._status) return ctor = payload._result, void 0 === ctor && console.error(\"lazy: Expected the result of a dynamic import() call. Instead received: %s\\n\\nYour code should look like: \\n  const MyComponent = lazy(() => import('./MyComponent'))\\n\\nDid you accidentally put curly braces around the import?\", ctor), \"default\" in ctor || console.error(\"lazy: Expected the result of a dynamic import() call. Instead received: %s\\n\\nYour code should look like: \\n  const MyComponent = lazy(() => import('./MyComponent'))\", ctor), ctor[\"default\"];\n    throw payload._result;\n  }\n  function resolveDispatcher() {\n    var dispatcher = ReactSharedInternals.H;\n    null === dispatcher && console.error(\"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\\n1. You might have mismatching versions of React and the renderer (such as React DOM)\\n2. You might be breaking the Rules of Hooks\\n3. You might have more than one copy of React in the same app\\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.\");\n    return dispatcher;\n  }\n  function noop() {}\n  function enqueueTask(task) {\n    if (null === enqueueTaskImpl) try {\n      var requireString = (\"require\" + Math.random()).slice(0, 7);\n      enqueueTaskImpl = (module && module[requireString]).call(module, \"timers\").setImmediate;\n    } catch (_err) {\n      enqueueTaskImpl = function enqueueTaskImpl(callback) {\n        !1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, \"undefined\" === typeof MessageChannel && console.error(\"This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.\"));\n        var channel = new MessageChannel();\n        channel.port1.onmessage = callback;\n        channel.port2.postMessage(void 0);\n      };\n    }\n    return enqueueTaskImpl(task);\n  }\n  function aggregateErrors(errors) {\n    return 1 < errors.length && \"function\" === typeof AggregateError ? new AggregateError(errors) : errors[0];\n  }\n  function popActScope(prevActQueue, prevActScopeDepth) {\n    prevActScopeDepth !== actScopeDepth - 1 && console.error(\"You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. \");\n    actScopeDepth = prevActScopeDepth;\n  }\n  function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {\n    var queue = ReactSharedInternals.actQueue;\n    if (null !== queue) if (0 !== queue.length) try {\n      flushActQueue(queue);\n      enqueueTask(function () {\n        return recursivelyFlushAsyncActWork(returnValue, resolve, reject);\n      });\n      return;\n    } catch (error) {\n      ReactSharedInternals.thrownErrors.push(error);\n    } else ReactSharedInternals.actQueue = null;\n    0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);\n  }\n  function flushActQueue(queue) {\n    if (!isFlushing) {\n      isFlushing = !0;\n      var i = 0;\n      try {\n        for (; i < queue.length; i++) {\n          var callback = queue[i];\n          do {\n            ReactSharedInternals.didUsePromise = !1;\n            var continuation = callback(!1);\n            if (null !== continuation) {\n              if (ReactSharedInternals.didUsePromise) {\n                queue[i] = callback;\n                queue.splice(0, i);\n                return;\n              }\n              callback = continuation;\n            } else break;\n          } while (1);\n        }\n        queue.length = 0;\n      } catch (error) {\n        queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);\n      } finally {\n        isFlushing = !1;\n      }\n    }\n  }\n  \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && \"function\" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());\n  var REACT_ELEMENT_TYPE = Symbol[\"for\"](\"react.transitional.element\"),\n    REACT_PORTAL_TYPE = Symbol[\"for\"](\"react.portal\"),\n    REACT_FRAGMENT_TYPE = Symbol[\"for\"](\"react.fragment\"),\n    REACT_STRICT_MODE_TYPE = Symbol[\"for\"](\"react.strict_mode\"),\n    REACT_PROFILER_TYPE = Symbol[\"for\"](\"react.profiler\");\n  Symbol[\"for\"](\"react.provider\");\n  var REACT_CONSUMER_TYPE = Symbol[\"for\"](\"react.consumer\"),\n    REACT_CONTEXT_TYPE = Symbol[\"for\"](\"react.context\"),\n    REACT_FORWARD_REF_TYPE = Symbol[\"for\"](\"react.forward_ref\"),\n    REACT_SUSPENSE_TYPE = Symbol[\"for\"](\"react.suspense\"),\n    REACT_SUSPENSE_LIST_TYPE = Symbol[\"for\"](\"react.suspense_list\"),\n    REACT_MEMO_TYPE = Symbol[\"for\"](\"react.memo\"),\n    REACT_LAZY_TYPE = Symbol[\"for\"](\"react.lazy\"),\n    REACT_OFFSCREEN_TYPE = Symbol[\"for\"](\"react.offscreen\"),\n    MAYBE_ITERATOR_SYMBOL = Symbol.iterator,\n    didWarnStateUpdateForUnmountedComponent = {},\n    ReactNoopUpdateQueue = {\n      isMounted: function isMounted() {\n        return !1;\n      },\n      enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {\n        warnNoop(publicInstance, \"forceUpdate\");\n      },\n      enqueueReplaceState: function enqueueReplaceState(publicInstance) {\n        warnNoop(publicInstance, \"replaceState\");\n      },\n      enqueueSetState: function enqueueSetState(publicInstance) {\n        warnNoop(publicInstance, \"setState\");\n      }\n    },\n    assign = Object.assign,\n    emptyObject = {};\n  Object.freeze(emptyObject);\n  Component.prototype.isReactComponent = {};\n  Component.prototype.setState = function (partialState, callback) {\n    if (\"object\" !== _typeof(partialState) && \"function\" !== typeof partialState && null != partialState) throw Error(\"takes an object of state variables to update or a function which returns an object of state variables.\");\n    this.updater.enqueueSetState(this, partialState, callback, \"setState\");\n  };\n  Component.prototype.forceUpdate = function (callback) {\n    this.updater.enqueueForceUpdate(this, callback, \"forceUpdate\");\n  };\n  var deprecatedAPIs = {\n      isMounted: [\"isMounted\", \"Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.\"],\n      replaceState: [\"replaceState\", \"Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).\"]\n    },\n    fnName;\n  for (fnName in deprecatedAPIs) deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);\n  ComponentDummy.prototype = Component.prototype;\n  deprecatedAPIs = PureComponent.prototype = new ComponentDummy();\n  deprecatedAPIs.constructor = PureComponent;\n  assign(deprecatedAPIs, Component.prototype);\n  deprecatedAPIs.isPureReactComponent = !0;\n  var isArrayImpl = Array.isArray,\n    REACT_CLIENT_REFERENCE$2 = Symbol[\"for\"](\"react.client.reference\"),\n    ReactSharedInternals = {\n      H: null,\n      A: null,\n      T: null,\n      S: null,\n      actQueue: null,\n      isBatchingLegacy: !1,\n      didScheduleLegacyUpdate: !1,\n      didUsePromise: !1,\n      thrownErrors: [],\n      getCurrentStack: null\n    },\n    hasOwnProperty = Object.prototype.hasOwnProperty,\n    REACT_CLIENT_REFERENCE$1 = Symbol[\"for\"](\"react.client.reference\"),\n    disabledDepth = 0,\n    prevLog,\n    prevInfo,\n    prevWarn,\n    prevError,\n    prevGroup,\n    prevGroupCollapsed,\n    prevGroupEnd;\n  disabledLog.__reactDisabledLog = !0;\n  var prefix,\n    suffix,\n    reentry = !1;\n  var componentFrameCache = new (\"function\" === typeof WeakMap ? WeakMap : Map)();\n  var REACT_CLIENT_REFERENCE = Symbol[\"for\"](\"react.client.reference\"),\n    specialPropKeyWarningShown,\n    didWarnAboutOldJSXRuntime;\n  var didWarnAboutElementRef = {};\n  var ownerHasKeyUseWarning = {},\n    didWarnAboutMaps = !1,\n    userProvidedKeyEscapeRegex = /\\/+/g,\n    reportGlobalError = \"function\" === typeof reportError ? reportError : function (error) {\n      if (\"object\" === (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) && \"function\" === typeof window.ErrorEvent) {\n        var event = new window.ErrorEvent(\"error\", {\n          bubbles: !0,\n          cancelable: !0,\n          message: \"object\" === _typeof(error) && null !== error && \"string\" === typeof error.message ? String(error.message) : String(error),\n          error: error\n        });\n        if (!window.dispatchEvent(event)) return;\n      } else if (\"object\" === (typeof process === \"undefined\" ? \"undefined\" : _typeof(process)) && \"function\" === typeof process.emit) {\n        process.emit(\"uncaughtException\", error);\n        return;\n      }\n      console.error(error);\n    },\n    didWarnAboutMessageChannel = !1,\n    enqueueTaskImpl = null,\n    actScopeDepth = 0,\n    didWarnNoAwaitAct = !1,\n    isFlushing = !1,\n    queueSeveralMicrotasks = \"function\" === typeof queueMicrotask ? function (callback) {\n      queueMicrotask(function () {\n        return queueMicrotask(callback);\n      });\n    } : enqueueTask;\n  exports.Children = {\n    map: mapChildren,\n    forEach: function forEach(children, forEachFunc, forEachContext) {\n      mapChildren(children, function () {\n        forEachFunc.apply(this, arguments);\n      }, forEachContext);\n    },\n    count: function count(children) {\n      var n = 0;\n      mapChildren(children, function () {\n        n++;\n      });\n      return n;\n    },\n    toArray: function toArray(children) {\n      return mapChildren(children, function (child) {\n        return child;\n      }) || [];\n    },\n    only: function only(children) {\n      if (!isValidElement(children)) throw Error(\"React.Children.only expected to receive a single React element child.\");\n      return children;\n    }\n  };\n  exports.Component = Component;\n  exports.Fragment = REACT_FRAGMENT_TYPE;\n  exports.Profiler = REACT_PROFILER_TYPE;\n  exports.PureComponent = PureComponent;\n  exports.StrictMode = REACT_STRICT_MODE_TYPE;\n  exports.Suspense = REACT_SUSPENSE_TYPE;\n  exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;\n  exports.act = function (callback) {\n    var prevActQueue = ReactSharedInternals.actQueue,\n      prevActScopeDepth = actScopeDepth;\n    actScopeDepth++;\n    var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [],\n      didAwaitActCall = !1;\n    try {\n      var result = callback();\n    } catch (error) {\n      ReactSharedInternals.thrownErrors.push(error);\n    }\n    if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;\n    if (null !== result && \"object\" === _typeof(result) && \"function\" === typeof result.then) {\n      var thenable = result;\n      queueSeveralMicrotasks(function () {\n        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error(\"You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);\"));\n      });\n      return {\n        then: function then(resolve, reject) {\n          didAwaitActCall = !0;\n          thenable.then(function (returnValue) {\n            popActScope(prevActQueue, prevActScopeDepth);\n            if (0 === prevActScopeDepth) {\n              try {\n                flushActQueue(queue), enqueueTask(function () {\n                  return recursivelyFlushAsyncActWork(returnValue, resolve, reject);\n                });\n              } catch (error$2) {\n                ReactSharedInternals.thrownErrors.push(error$2);\n              }\n              if (0 < ReactSharedInternals.thrownErrors.length) {\n                var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);\n                ReactSharedInternals.thrownErrors.length = 0;\n                reject(_thrownError);\n              }\n            } else resolve(returnValue);\n          }, function (error) {\n            popActScope(prevActQueue, prevActScopeDepth);\n            0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);\n          });\n        }\n      };\n    }\n    var returnValue$jscomp$0 = result;\n    popActScope(prevActQueue, prevActScopeDepth);\n    0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function () {\n      didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error(\"A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\\n\\nawait act(() => ...)\"));\n    }), ReactSharedInternals.actQueue = null);\n    if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;\n    return {\n      then: function then(resolve, reject) {\n        didAwaitActCall = !0;\n        0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function () {\n          return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);\n        })) : resolve(returnValue$jscomp$0);\n      }\n    };\n  };\n  exports.cache = function (fn) {\n    return function () {\n      return fn.apply(null, arguments);\n    };\n  };\n  exports.cloneElement = function (element, config, children) {\n    if (null === element || void 0 === element) throw Error(\"The argument must be a React element, but you passed \" + element + \".\");\n    var props = assign({}, element.props),\n      key = element.key,\n      owner = element._owner;\n    if (null != config) {\n      var JSCompiler_inline_result;\n      a: {\n        if (hasOwnProperty.call(config, \"ref\") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, \"ref\").get) && JSCompiler_inline_result.isReactWarning) {\n          JSCompiler_inline_result = !1;\n          break a;\n        }\n        JSCompiler_inline_result = void 0 !== config.ref;\n      }\n      JSCompiler_inline_result && (owner = getOwner());\n      hasValidKey(config) && (checkKeyStringCoercion(config.key), key = \"\" + config.key);\n      for (propName in config) !hasOwnProperty.call(config, propName) || \"key\" === propName || \"__self\" === propName || \"__source\" === propName || \"ref\" === propName && void 0 === config.ref || (props[propName] = config[propName]);\n    }\n    var propName = arguments.length - 2;\n    if (1 === propName) props.children = children;else if (1 < propName) {\n      JSCompiler_inline_result = Array(propName);\n      for (var i = 0; i < propName; i++) JSCompiler_inline_result[i] = arguments[i + 2];\n      props.children = JSCompiler_inline_result;\n    }\n    props = ReactElement(element.type, key, void 0, void 0, owner, props);\n    for (key = 2; key < arguments.length; key++) validateChildKeys(arguments[key], props.type);\n    return props;\n  };\n  exports.createContext = function (defaultValue) {\n    defaultValue = {\n      $$typeof: REACT_CONTEXT_TYPE,\n      _currentValue: defaultValue,\n      _currentValue2: defaultValue,\n      _threadCount: 0,\n      Provider: null,\n      Consumer: null\n    };\n    defaultValue.Provider = defaultValue;\n    defaultValue.Consumer = {\n      $$typeof: REACT_CONSUMER_TYPE,\n      _context: defaultValue\n    };\n    defaultValue._currentRenderer = null;\n    defaultValue._currentRenderer2 = null;\n    return defaultValue;\n  };\n  exports.createElement = function (type, config, children) {\n    if (isValidElementType(type)) for (var i = 2; i < arguments.length; i++) validateChildKeys(arguments[i], type);else {\n      i = \"\";\n      if (void 0 === type || \"object\" === _typeof(type) && null !== type && 0 === Object.keys(type).length) i += \" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.\";\n      if (null === type) var typeString = \"null\";else isArrayImpl(type) ? typeString = \"array\" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = \"<\" + (getComponentNameFromType(type.type) || \"Unknown\") + \" />\", i = \" Did you accidentally export a JSX literal instead of a component?\") : typeString = _typeof(type);\n      console.error(\"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s\", typeString, i);\n    }\n    var propName;\n    i = {};\n    typeString = null;\n    if (null != config) for (propName in didWarnAboutOldJSXRuntime || !(\"__self\" in config) || \"key\" in config || (didWarnAboutOldJSXRuntime = !0, console.warn(\"Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform\")), hasValidKey(config) && (checkKeyStringCoercion(config.key), typeString = \"\" + config.key), config) hasOwnProperty.call(config, propName) && \"key\" !== propName && \"__self\" !== propName && \"__source\" !== propName && (i[propName] = config[propName]);\n    var childrenLength = arguments.length - 2;\n    if (1 === childrenLength) i.children = children;else if (1 < childrenLength) {\n      for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++) childArray[_i] = arguments[_i + 2];\n      Object.freeze && Object.freeze(childArray);\n      i.children = childArray;\n    }\n    if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === i[propName] && (i[propName] = childrenLength[propName]);\n    typeString && defineKeyPropWarningGetter(i, \"function\" === typeof type ? type.displayName || type.name || \"Unknown\" : type);\n    return ReactElement(type, typeString, void 0, void 0, getOwner(), i);\n  };\n  exports.createRef = function () {\n    var refObject = {\n      current: null\n    };\n    Object.seal(refObject);\n    return refObject;\n  };\n  exports.forwardRef = function (render) {\n    null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(\"forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).\") : \"function\" !== typeof render ? console.error(\"forwardRef requires a render function but was given %s.\", null === render ? \"null\" : _typeof(render)) : 0 !== render.length && 2 !== render.length && console.error(\"forwardRef render functions accept exactly two parameters: props and ref. %s\", 1 === render.length ? \"Did you forget to use the ref parameter?\" : \"Any additional parameter will be undefined.\");\n    null != render && null != render.defaultProps && console.error(\"forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?\");\n    var elementType = {\n        $$typeof: REACT_FORWARD_REF_TYPE,\n        render: render\n      },\n      ownName;\n    Object.defineProperty(elementType, \"displayName\", {\n      enumerable: !1,\n      configurable: !0,\n      get: function get() {\n        return ownName;\n      },\n      set: function set(name) {\n        ownName = name;\n        render.name || render.displayName || (Object.defineProperty(render, \"name\", {\n          value: name\n        }), render.displayName = name);\n      }\n    });\n    return elementType;\n  };\n  exports.isValidElement = isValidElement;\n  exports.lazy = function (ctor) {\n    return {\n      $$typeof: REACT_LAZY_TYPE,\n      _payload: {\n        _status: -1,\n        _result: ctor\n      },\n      _init: lazyInitializer\n    };\n  };\n  exports.memo = function (type, compare) {\n    isValidElementType(type) || console.error(\"memo: The first argument must be a component. Instead received: %s\", null === type ? \"null\" : _typeof(type));\n    compare = {\n      $$typeof: REACT_MEMO_TYPE,\n      type: type,\n      compare: void 0 === compare ? null : compare\n    };\n    var ownName;\n    Object.defineProperty(compare, \"displayName\", {\n      enumerable: !1,\n      configurable: !0,\n      get: function get() {\n        return ownName;\n      },\n      set: function set(name) {\n        ownName = name;\n        type.name || type.displayName || (Object.defineProperty(type, \"name\", {\n          value: name\n        }), type.displayName = name);\n      }\n    });\n    return compare;\n  };\n  exports.startTransition = function (scope) {\n    var prevTransition = ReactSharedInternals.T,\n      currentTransition = {};\n    ReactSharedInternals.T = currentTransition;\n    currentTransition._updatedFibers = new Set();\n    try {\n      var returnValue = scope(),\n        onStartTransitionFinish = ReactSharedInternals.S;\n      null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);\n      \"object\" === _typeof(returnValue) && null !== returnValue && \"function\" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);\n    } catch (error) {\n      reportGlobalError(error);\n    } finally {\n      null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(\"Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.\")), ReactSharedInternals.T = prevTransition;\n    }\n  };\n  exports.unstable_useCacheRefresh = function () {\n    return resolveDispatcher().useCacheRefresh();\n  };\n  exports.use = function (usable) {\n    return resolveDispatcher().use(usable);\n  };\n  exports.useActionState = function (action, initialState, permalink) {\n    return resolveDispatcher().useActionState(action, initialState, permalink);\n  };\n  exports.useCallback = function (callback, deps) {\n    return resolveDispatcher().useCallback(callback, deps);\n  };\n  exports.useContext = function (Context) {\n    var dispatcher = resolveDispatcher();\n    Context.$$typeof === REACT_CONSUMER_TYPE && console.error(\"Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?\");\n    return dispatcher.useContext(Context);\n  };\n  exports.useDebugValue = function (value, formatterFn) {\n    return resolveDispatcher().useDebugValue(value, formatterFn);\n  };\n  exports.useDeferredValue = function (value, initialValue) {\n    return resolveDispatcher().useDeferredValue(value, initialValue);\n  };\n  exports.useEffect = function (create, deps) {\n    return resolveDispatcher().useEffect(create, deps);\n  };\n  exports.useId = function () {\n    return resolveDispatcher().useId();\n  };\n  exports.useImperativeHandle = function (ref, create, deps) {\n    return resolveDispatcher().useImperativeHandle(ref, create, deps);\n  };\n  exports.useInsertionEffect = function (create, deps) {\n    return resolveDispatcher().useInsertionEffect(create, deps);\n  };\n  exports.useLayoutEffect = function (create, deps) {\n    return resolveDispatcher().useLayoutEffect(create, deps);\n  };\n  exports.useMemo = function (create, deps) {\n    return resolveDispatcher().useMemo(create, deps);\n  };\n  exports.useOptimistic = function (passthrough, reducer) {\n    return resolveDispatcher().useOptimistic(passthrough, reducer);\n  };\n  exports.useReducer = function (reducer, initialArg, init) {\n    return resolveDispatcher().useReducer(reducer, initialArg, init);\n  };\n  exports.useRef = function (initialValue) {\n    return resolveDispatcher().useRef(initialValue);\n  };\n  exports.useState = function (initialState) {\n    return resolveDispatcher().useState(initialState);\n  };\n  exports.useSyncExternalStore = function (subscribe, getSnapshot, getServerSnapshot) {\n    return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);\n  };\n  exports.useTransition = function () {\n    return resolveDispatcher().useTransition();\n  };\n  exports.version = \"19.0.0\";\n  \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && \"function\" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());\n}();\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/react/cjs/react.development.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ \"./node_modules/react/cjs/react.development.js\");\n}\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/react/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WebSocketClient)\n/* harmony export */ });\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) {\n  if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n}\nfunction _defineProperties(e, r) {\n  for (var t = 0; t < r.length; t++) {\n    var o = r[t];\n    o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);\n  }\n}\nfunction _createClass(e, r, t) {\n  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\n    writable: !1\n  }), e;\n}\nfunction _toPropertyKey(t) {\n  var i = _toPrimitive(t, \"string\");\n  return \"symbol\" == _typeof(i) ? i : i + \"\";\n}\nfunction _toPrimitive(t, r) {\n  if (\"object\" != _typeof(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != _typeof(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\nvar WebSocketClient = /*#__PURE__*/function () {\n  /**\n   * @param {string} url\n   */\n  function WebSocketClient(url) {\n    _classCallCheck(this, WebSocketClient);\n    this.client = new WebSocket(url);\n    this.client.onerror = function (error) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);\n    };\n  }\n\n  /**\n   * @param {(...args: any[]) => void} f\n   */\n  return _createClass(WebSocketClient, [{\n    key: \"onOpen\",\n    value: function onOpen(f) {\n      this.client.onopen = f;\n    }\n\n    /**\n     * @param {(...args: any[]) => void} f\n     */\n  }, {\n    key: \"onClose\",\n    value: function onClose(f) {\n      this.client.onclose = f;\n    }\n\n    // call f with the message string as the first argument\n    /**\n     * @param {(...args: any[]) => void} f\n     */\n  }, {\n    key: \"onMessage\",\n    value: function onMessage(f) {\n      this.client.onmessage = function (e) {\n        f(e.data);\n      };\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack-dev-server/client/clients/WebSocketClient.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var __resourceQuery = \"?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSocketURL: () => (/* binding */ createSocketURL),\n/* harmony export */   getCurrentScriptSource: () => (/* binding */ getCurrentScriptSource),\n/* harmony export */   parseURL: () => (/* binding */ parseURL)\n/* harmony export */ });\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ \"./node_modules/webpack/hot/log.js\");\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack/hot/emitter.js */ \"./node_modules/webpack/hot/emitter.js\");\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.js */ \"./node_modules/webpack-dev-server/client/socket.js\");\n/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.js */ \"./node_modules/webpack-dev-server/client/overlay.js\");\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/sendMessage.js */ \"./node_modules/webpack-dev-server/client/utils/sendMessage.js\");\n/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress.js */ \"./node_modules/webpack-dev-server/client/progress.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) {\n  var t = Object.keys(e);\n  if (Object.getOwnPropertySymbols) {\n    var o = Object.getOwnPropertySymbols(e);\n    r && (o = o.filter(function (r) {\n      return Object.getOwnPropertyDescriptor(e, r).enumerable;\n    })), t.push.apply(t, o);\n  }\n  return t;\n}\nfunction _objectSpread(e) {\n  for (var r = 1; r < arguments.length; r++) {\n    var t = null != arguments[r] ? arguments[r] : {};\n    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {\n      _defineProperty(e, r, t[r]);\n    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {\n      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));\n    });\n  }\n  return e;\n}\nfunction _defineProperty(e, r, t) {\n  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {\n    value: t,\n    enumerable: !0,\n    configurable: !0,\n    writable: !0\n  }) : e[r] = t, e;\n}\nfunction _toPropertyKey(t) {\n  var i = _toPrimitive(t, \"string\");\n  return \"symbol\" == _typeof(i) ? i : i + \"\";\n}\nfunction _toPrimitive(t, r) {\n  if (\"object\" != _typeof(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != _typeof(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n/* global __resourceQuery, __webpack_hash__ */\n/// <reference types=\"webpack/module\" />\n\n\n\n\n\n\n\n\n/**\n * @typedef {Object} OverlayOptions\n * @property {boolean | (error: Error) => boolean} [warnings]\n * @property {boolean | (error: Error) => boolean} [errors]\n * @property {boolean | (error: Error) => boolean} [runtimeErrors]\n * @property {string} [trustedTypesPolicyName]\n */\n\n/**\n * @typedef {Object} Options\n * @property {boolean} hot\n * @property {boolean} liveReload\n * @property {boolean} progress\n * @property {boolean | OverlayOptions} overlay\n * @property {string} [logging]\n * @property {number} [reconnect]\n */\n\n/**\n * @typedef {Object} Status\n * @property {boolean} isUnloading\n * @property {string} currentHash\n * @property {string} [previousHash]\n */\n\n/**\n * @param {boolean | { warnings?: boolean | string; errors?: boolean | string; runtimeErrors?: boolean | string; }} overlayOptions\n */\nvar decodeOverlayOptions = function decodeOverlayOptions(overlayOptions) {\n  if (_typeof(overlayOptions) === \"object\") {\n    [\"warnings\", \"errors\", \"runtimeErrors\"].forEach(function (property) {\n      if (typeof overlayOptions[property] === \"string\") {\n        var overlayFilterFunctionString = decodeURIComponent(overlayOptions[property]);\n\n        // eslint-disable-next-line no-new-func\n        overlayOptions[property] = new Function(\"message\", \"var callback = \".concat(overlayFilterFunctionString, \"\\n        return callback(message)\"));\n      }\n    });\n  }\n};\n\n/**\n * @type {Status}\n */\nvar status = {\n  isUnloading: false,\n  // eslint-disable-next-line camelcase\n  currentHash: __webpack_require__.h()\n};\n\n/**\n * @returns {string}\n */\nvar getCurrentScriptSource = function getCurrentScriptSource() {\n  // `document.currentScript` is the most accurate way to find the current script,\n  // but is not supported in all browsers.\n  if (document.currentScript) {\n    return document.currentScript.getAttribute(\"src\");\n  }\n\n  // Fallback to getting all scripts running in the document.\n  var scriptElements = document.scripts || [];\n  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {\n    return element.getAttribute(\"src\");\n  });\n  if (scriptElementsWithSrc.length > 0) {\n    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];\n    return currentScript.getAttribute(\"src\");\n  }\n\n  // Fail as there was no script to use.\n  throw new Error(\"[webpack-dev-server] Failed to get current script source.\");\n};\n\n/**\n * @param {string} resourceQuery\n * @returns {{ [key: string]: string | boolean }}\n */\nvar parseURL = function parseURL(resourceQuery) {\n  /** @type {{ [key: string]: string }} */\n  var result = {};\n  if (typeof resourceQuery === \"string\" && resourceQuery !== \"\") {\n    var searchParams = resourceQuery.slice(1).split(\"&\");\n    for (var i = 0; i < searchParams.length; i++) {\n      var pair = searchParams[i].split(\"=\");\n      result[pair[0]] = decodeURIComponent(pair[1]);\n    }\n  } else {\n    // Else, get the url from the <script> this file was called with.\n    var scriptSource = getCurrentScriptSource();\n    var scriptSourceURL;\n    try {\n      // The placeholder `baseURL` with `window.location.href`,\n      // is to allow parsing of path-relative or protocol-relative URLs,\n      // and will have no effect if `scriptSource` is a fully valid URL.\n      scriptSourceURL = new URL(scriptSource, self.location.href);\n    } catch (error) {\n      // URL parsing failed, do nothing.\n      // We will still proceed to see if we can recover using `resourceQuery`\n    }\n    if (scriptSourceURL) {\n      result = scriptSourceURL;\n      result.fromCurrentScript = true;\n    }\n  }\n  return result;\n};\nvar parsedResourceQuery = parseURL(__resourceQuery);\nvar enabledFeatures = {\n  \"Hot Module Replacement\": false,\n  \"Live Reloading\": false,\n  Progress: false,\n  Overlay: false\n};\n\n/** @type {Options} */\nvar options = {\n  hot: false,\n  liveReload: false,\n  progress: false,\n  overlay: false\n};\nif (parsedResourceQuery.hot === \"true\") {\n  options.hot = true;\n  enabledFeatures[\"Hot Module Replacement\"] = true;\n}\nif (parsedResourceQuery[\"live-reload\"] === \"true\") {\n  options.liveReload = true;\n  enabledFeatures[\"Live Reloading\"] = true;\n}\nif (parsedResourceQuery.progress === \"true\") {\n  options.progress = true;\n  enabledFeatures.Progress = true;\n}\nif (parsedResourceQuery.overlay) {\n  try {\n    options.overlay = JSON.parse(parsedResourceQuery.overlay);\n  } catch (e) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(\"Error parsing overlay options from resource query:\", e);\n  }\n\n  // Fill in default \"true\" params for partially-specified objects.\n  if (_typeof(options.overlay) === \"object\") {\n    options.overlay = _objectSpread({\n      errors: true,\n      warnings: true,\n      runtimeErrors: true\n    }, options.overlay);\n    decodeOverlayOptions(options.overlay);\n  }\n  enabledFeatures.Overlay = true;\n}\nif (parsedResourceQuery.logging) {\n  options.logging = parsedResourceQuery.logging;\n}\nif (typeof parsedResourceQuery.reconnect !== \"undefined\") {\n  options.reconnect = Number(parsedResourceQuery.reconnect);\n}\n\n/**\n * @param {string} level\n */\nvar setAllLogLevel = function setAllLogLevel(level) {\n  // This is needed because the HMR logger operate separately from dev server logger\n  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === \"verbose\" || level === \"log\" ? \"info\" : level);\n  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_4__.setLogLevel)(level);\n};\nif (options.logging) {\n  setAllLogLevel(options.logging);\n}\nvar logEnabledFeatures = function logEnabledFeatures(features) {\n  var listEnabledFeatures = Object.keys(features);\n  if (!features || listEnabledFeatures.length === 0) {\n    return;\n  }\n  var logString = \"Server started:\";\n\n  // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.\n  for (var i = 0; i < listEnabledFeatures.length; i++) {\n    var key = listEnabledFeatures[i];\n    logString += \" \".concat(key, \" \").concat(features[key] ? \"enabled\" : \"disabled\", \",\");\n  }\n  // replace last comma with a period\n  logString = logString.slice(0, -1).concat(\".\");\n  _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(logString);\n};\nlogEnabledFeatures(enabledFeatures);\nself.addEventListener(\"beforeunload\", function () {\n  status.isUnloading = true;\n});\nvar overlay = typeof window !== \"undefined\" ? (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.createOverlay)(_typeof(options.overlay) === \"object\" ? {\n  trustedTypesPolicyName: options.overlay.trustedTypesPolicyName,\n  catchRuntimeError: options.overlay.runtimeErrors\n} : {\n  trustedTypesPolicyName: false,\n  catchRuntimeError: options.overlay\n}) : {\n  send: function send() {}\n};\n\n/**\n * @param {Options} options\n * @param {Status} currentStatus\n */\nvar reloadApp = function reloadApp(_ref, currentStatus) {\n  var hot = _ref.hot,\n    liveReload = _ref.liveReload;\n  if (currentStatus.isUnloading) {\n    return;\n  }\n  var currentHash = currentStatus.currentHash,\n    previousHash = currentStatus.previousHash;\n  var isInitial = currentHash.indexOf(/** @type {string} */previousHash) >= 0;\n  if (isInitial) {\n    return;\n  }\n\n  /**\n   * @param {Window} rootWindow\n   * @param {number} intervalId\n   */\n  function applyReload(rootWindow, intervalId) {\n    clearInterval(intervalId);\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"App updated. Reloading...\");\n    rootWindow.location.reload();\n  }\n  var search = self.location.search.toLowerCase();\n  var allowToHot = search.indexOf(\"webpack-dev-server-hot=false\") === -1;\n  var allowToLiveReload = search.indexOf(\"webpack-dev-server-live-reload=false\") === -1;\n  if (hot && allowToHot) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"App hot update...\");\n    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1___default().emit(\"webpackHotUpdate\", currentStatus.currentHash);\n    if (typeof self !== \"undefined\" && self.window) {\n      // broadcast update to window\n      self.postMessage(\"webpackHotUpdate\".concat(currentStatus.currentHash), \"*\");\n    }\n  }\n  // allow refreshing the page only if liveReload isn't disabled\n  else if (liveReload && allowToLiveReload) {\n    var rootWindow = self;\n\n    // use parent window for reload (in case we're in an iframe with no valid src)\n    var intervalId = self.setInterval(function () {\n      if (rootWindow.location.protocol !== \"about:\") {\n        // reload immediately if protocol is valid\n        applyReload(rootWindow, intervalId);\n      } else {\n        rootWindow = rootWindow.parent;\n        if (rootWindow.parent === rootWindow) {\n          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways\n          applyReload(rootWindow, intervalId);\n        }\n      }\n    });\n  }\n};\nvar ansiRegex = new RegExp([\"[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]+)*|[a-zA-Z\\\\d]+(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]*)*)?\\\\u0007)\", \"(?:(?:\\\\d{1,4}(?:;\\\\d{0,4})*)?[\\\\dA-PR-TZcf-nq-uy=><~]))\"].join(\"|\"), \"g\");\n\n/**\n *\n * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.\n * Adapted from code originally released by Sindre Sorhus\n * Licensed the MIT License\n *\n * @param {string} string\n * @return {string}\n */\nvar stripAnsi = function stripAnsi(string) {\n  if (typeof string !== \"string\") {\n    throw new TypeError(\"Expected a `string`, got `\".concat(_typeof(string), \"`\"));\n  }\n  return string.replace(ansiRegex, \"\");\n};\nvar onSocketMessage = {\n  hot: function hot() {\n    if (parsedResourceQuery.hot === \"false\") {\n      return;\n    }\n    options.hot = true;\n  },\n  liveReload: function liveReload() {\n    if (parsedResourceQuery[\"live-reload\"] === \"false\") {\n      return;\n    }\n    options.liveReload = true;\n  },\n  invalid: function invalid() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"App updated. Recompiling...\");\n\n    // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Invalid\");\n  },\n  /**\n   * @param {string} hash\n   */\n  hash: function hash(_hash) {\n    status.previousHash = status.currentHash;\n    status.currentHash = _hash;\n  },\n  logging: setAllLogLevel,\n  /**\n   * @param {boolean} value\n   */\n  overlay: function overlay(value) {\n    if (typeof document === \"undefined\") {\n      return;\n    }\n    options.overlay = value;\n    decodeOverlayOptions(options.overlay);\n  },\n  /**\n   * @param {number} value\n   */\n  reconnect: function reconnect(value) {\n    if (parsedResourceQuery.reconnect === \"false\") {\n      return;\n    }\n    options.reconnect = value;\n  },\n  /**\n   * @param {boolean} value\n   */\n  progress: function progress(value) {\n    options.progress = value;\n  },\n  /**\n   * @param {{ pluginName?: string, percent: number, msg: string }} data\n   */\n  \"progress-update\": function progressUpdate(data) {\n    if (options.progress) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"\".concat(data.pluginName ? \"[\".concat(data.pluginName, \"] \") : \"\").concat(data.percent, \"% - \").concat(data.msg, \".\"));\n    }\n    if ((0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.isProgressSupported)()) {\n      if (typeof options.progress === \"string\") {\n        var progress = document.querySelector(\"wds-progress\");\n        if (!progress) {\n          (0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.defineProgressElement)();\n          progress = document.createElement(\"wds-progress\");\n          document.body.appendChild(progress);\n        }\n        progress.setAttribute(\"progress\", data.percent);\n        progress.setAttribute(\"type\", options.progress);\n      }\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Progress\", data);\n  },\n  \"still-ok\": function stillOk() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"Nothing changed.\");\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"StillOk\");\n  },\n  ok: function ok() {\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Ok\");\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    reloadApp(options, status);\n  },\n  /**\n   * @param {string} file\n   */\n  \"static-changed\": function staticChanged(file) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"\".concat(file ? \"\\\"\".concat(file, \"\\\"\") : \"Content\", \" from static directory was changed. Reloading...\"));\n    self.location.reload();\n  },\n  /**\n   * @param {Error[]} warnings\n   * @param {any} params\n   */\n  warnings: function warnings(_warnings, params) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.warn(\"Warnings while compiling.\");\n    var printableWarnings = _warnings.map(function (error) {\n      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.formatProblem)(\"warning\", error),\n        header = _formatProblem.header,\n        body = _formatProblem.body;\n      return \"\".concat(header, \"\\n\").concat(stripAnsi(body));\n    });\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Warnings\", printableWarnings);\n    for (var i = 0; i < printableWarnings.length; i++) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.warn(printableWarnings[i]);\n    }\n    var overlayWarningsSetting = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.warnings;\n    if (overlayWarningsSetting) {\n      var warningsToDisplay = typeof overlayWarningsSetting === \"function\" ? _warnings.filter(overlayWarningsSetting) : _warnings;\n      if (warningsToDisplay.length) {\n        overlay.send({\n          type: \"BUILD_ERROR\",\n          level: \"warning\",\n          messages: _warnings\n        });\n      }\n    }\n    if (params && params.preventReloading) {\n      return;\n    }\n    reloadApp(options, status);\n  },\n  /**\n   * @param {Error[]} errors\n   */\n  errors: function errors(_errors) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(\"Errors while compiling. Reload prevented.\");\n    var printableErrors = _errors.map(function (error) {\n      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.formatProblem)(\"error\", error),\n        header = _formatProblem2.header,\n        body = _formatProblem2.body;\n      return \"\".concat(header, \"\\n\").concat(stripAnsi(body));\n    });\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Errors\", printableErrors);\n    for (var i = 0; i < printableErrors.length; i++) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(printableErrors[i]);\n    }\n    var overlayErrorsSettings = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.errors;\n    if (overlayErrorsSettings) {\n      var errorsToDisplay = typeof overlayErrorsSettings === \"function\" ? _errors.filter(overlayErrorsSettings) : _errors;\n      if (errorsToDisplay.length) {\n        overlay.send({\n          type: \"BUILD_ERROR\",\n          level: \"error\",\n          messages: _errors\n        });\n      }\n    }\n  },\n  /**\n   * @param {Error} error\n   */\n  error: function error(_error) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(_error);\n  },\n  close: function close() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"Disconnected!\");\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Close\");\n  }\n};\n\n/**\n * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL\n * @returns {string}\n */\nvar formatURL = function formatURL(objURL) {\n  var protocol = objURL.protocol || \"\";\n  if (protocol && protocol.substr(-1) !== \":\") {\n    protocol += \":\";\n  }\n  var auth = objURL.auth || \"\";\n  if (auth) {\n    auth = encodeURIComponent(auth);\n    auth = auth.replace(/%3A/i, \":\");\n    auth += \"@\";\n  }\n  var host = \"\";\n  if (objURL.hostname) {\n    host = auth + (objURL.hostname.indexOf(\":\") === -1 ? objURL.hostname : \"[\".concat(objURL.hostname, \"]\"));\n    if (objURL.port) {\n      host += \":\".concat(objURL.port);\n    }\n  }\n  var pathname = objURL.pathname || \"\";\n  if (objURL.slashes) {\n    host = \"//\".concat(host || \"\");\n    if (pathname && pathname.charAt(0) !== \"/\") {\n      pathname = \"/\".concat(pathname);\n    }\n  } else if (!host) {\n    host = \"\";\n  }\n  var search = objURL.search || \"\";\n  if (search && search.charAt(0) !== \"?\") {\n    search = \"?\".concat(search);\n  }\n  var hash = objURL.hash || \"\";\n  if (hash && hash.charAt(0) !== \"#\") {\n    hash = \"#\".concat(hash);\n  }\n  pathname = pathname.replace(/[?#]/g,\n  /**\n   * @param {string} match\n   * @returns {string}\n   */\n  function (match) {\n    return encodeURIComponent(match);\n  });\n  search = search.replace(\"#\", \"%23\");\n  return \"\".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);\n};\n\n/**\n * @param {URL & { fromCurrentScript?: boolean }} parsedURL\n * @returns {string}\n */\nvar createSocketURL = function createSocketURL(parsedURL) {\n  var hostname = parsedURL.hostname;\n\n  // Node.js module parses it as `::`\n  // `new URL(urlString, [baseURLString])` parses it as '[::]'\n  var isInAddrAny = hostname === \"0.0.0.0\" || hostname === \"::\" || hostname === \"[::]\";\n\n  // why do we need this check?\n  // hostname n/a for file protocol (example, when using electron, ionic)\n  // see: https://github.com/webpack/webpack-dev-server/pull/384\n  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf(\"http\") === 0) {\n    hostname = self.location.hostname;\n  }\n  var socketURLProtocol = parsedURL.protocol || self.location.protocol;\n\n  // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.\n  if (socketURLProtocol === \"auto:\" || hostname && isInAddrAny && self.location.protocol === \"https:\") {\n    socketURLProtocol = self.location.protocol;\n  }\n  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, \"ws\");\n  var socketURLAuth = \"\";\n\n  // `new URL(urlString, [baseURLstring])` doesn't have `auth` property\n  // Parse authentication credentials in case we need them\n  if (parsedURL.username) {\n    socketURLAuth = parsedURL.username;\n\n    // Since HTTP basic authentication does not allow empty username,\n    // we only include password if the username is not empty.\n    if (parsedURL.password) {\n      // Result: <username>:<password>\n      socketURLAuth = socketURLAuth.concat(\":\", parsedURL.password);\n    }\n  }\n\n  // In case the host is a raw IPv6 address, it can be enclosed in\n  // the brackets as the brackets are needed in the final URL string.\n  // Need to remove those as url.format blindly adds its own set of brackets\n  // if the host string contains colons. That would lead to non-working\n  // double brackets (e.g. [[::]]) host\n  //\n  // All of these web socket url params are optionally passed in through resourceQuery,\n  // so we need to fall back to the default if they are not provided\n  var socketURLHostname = (hostname || self.location.hostname || \"localhost\").replace(/^\\[(.*)\\]$/, \"$1\");\n  var socketURLPort = parsedURL.port;\n  if (!socketURLPort || socketURLPort === \"0\") {\n    socketURLPort = self.location.port;\n  }\n\n  // If path is provided it'll be passed in via the resourceQuery as a\n  // query param so it has to be parsed out of the querystring in order for the\n  // client to open the socket to the correct location.\n  var socketURLPathname = \"/ws\";\n  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {\n    socketURLPathname = parsedURL.pathname;\n  }\n  return formatURL({\n    protocol: socketURLProtocol,\n    auth: socketURLAuth,\n    hostname: socketURLHostname,\n    port: socketURLPort,\n    pathname: socketURLPathname,\n    slashes: true\n  });\n};\nvar socketURL = createSocketURL(parsedResourceQuery);\n(0,_socket_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(socketURL, onSocketMessage, options.reconnect);\n\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack-dev-server/client/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n/******/(function () {\n  // webpackBootstrap\n  /******/\n  \"use strict\";\n\n  /******/\n  var __webpack_modules__ = {\n    /***/\"./client-src/modules/logger/tapable.js\": (\n    /*!**********************************************!*\\\n      !*** ./client-src/modules/logger/tapable.js ***!\n      \\**********************************************/\n    /***/\n    function _clientSrc_modules_logger_tapableJs(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_758__) {\n      __nested_webpack_require_758__.r(__nested_webpack_exports__);\n      /* harmony export */\n      __nested_webpack_require_758__.d(__nested_webpack_exports__, {\n        /* harmony export */SyncBailHook: function SyncBailHook() {\n          return /* binding */_SyncBailHook;\n        }\n        /* harmony export */\n      });\n      function _SyncBailHook() {\n        return {\n          call: function call() {}\n        };\n      }\n\n      /**\n       * Client stub for tapable SyncBailHook\n       */\n      // eslint-disable-next-line import/prefer-default-export\n\n      /***/\n    }),\n    /***/\"./node_modules/webpack/lib/logging/Logger.js\": (\n    /*!****************************************************!*\\\n      !*** ./node_modules/webpack/lib/logging/Logger.js ***!\n      \\****************************************************/\n    /***/\n    function _node_modules_webpack_lib_logging_LoggerJs(module) {\n      /*\n      \tMIT License http://www.opensource.org/licenses/mit-license.php\n      \tAuthor Tobias Koppers @sokra\n      */\n\n      function _toConsumableArray(r) {\n        return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();\n      }\n      function _nonIterableSpread() {\n        throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n      }\n      function _unsupportedIterableToArray(r, a) {\n        if (r) {\n          if (\"string\" == typeof r) return _arrayLikeToArray(r, a);\n          var t = {}.toString.call(r).slice(8, -1);\n          return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;\n        }\n      }\n      function _iterableToArray(r) {\n        if (\"undefined\" != typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }) && null != r[(typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }).iterator] || null != r[\"@@iterator\"]) return Array.from(r);\n      }\n      function _arrayWithoutHoles(r) {\n        if (Array.isArray(r)) return _arrayLikeToArray(r);\n      }\n      function _arrayLikeToArray(r, a) {\n        (null == a || a > r.length) && (a = r.length);\n        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];\n        return n;\n      }\n      function _classCallCheck(a, n) {\n        if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n      }\n      function _defineProperties(e, r) {\n        for (var t = 0; t < r.length; t++) {\n          var o = r[t];\n          o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);\n        }\n      }\n      function _createClass(e, r, t) {\n        return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\n          writable: !1\n        }), e;\n      }\n      function _toPropertyKey(t) {\n        var i = _toPrimitive(t, \"string\");\n        return \"symbol\" == _typeof(i) ? i : i + \"\";\n      }\n      function _toPrimitive(t, r) {\n        if (\"object\" != _typeof(t) || !t) return t;\n        var e = t[(typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }).toPrimitive];\n        if (void 0 !== e) {\n          var i = e.call(t, r || \"default\");\n          if (\"object\" != _typeof(i)) return i;\n          throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n        }\n        return (\"string\" === r ? String : Number)(t);\n      }\n      var LogType = Object.freeze({\n        error: (/** @type {\"error\"} */\"error\"),\n        // message, c style arguments\n        warn: (/** @type {\"warn\"} */\"warn\"),\n        // message, c style arguments\n        info: (/** @type {\"info\"} */\"info\"),\n        // message, c style arguments\n        log: (/** @type {\"log\"} */\"log\"),\n        // message, c style arguments\n        debug: (/** @type {\"debug\"} */\"debug\"),\n        // message, c style arguments\n\n        trace: (/** @type {\"trace\"} */\"trace\"),\n        // no arguments\n\n        group: (/** @type {\"group\"} */\"group\"),\n        // [label]\n        groupCollapsed: (/** @type {\"groupCollapsed\"} */\"groupCollapsed\"),\n        // [label]\n        groupEnd: (/** @type {\"groupEnd\"} */\"groupEnd\"),\n        // [label]\n\n        profile: (/** @type {\"profile\"} */\"profile\"),\n        // [profileName]\n        profileEnd: (/** @type {\"profileEnd\"} */\"profileEnd\"),\n        // [profileName]\n\n        time: (/** @type {\"time\"} */\"time\"),\n        // name, time as [seconds, nanoseconds]\n\n        clear: (/** @type {\"clear\"} */\"clear\"),\n        // no arguments\n        status: (/** @type {\"status\"} */\"status\") // message, arguments\n      });\n      module.exports.LogType = LogType;\n\n      /** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */\n\n      var LOG_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n        return i;\n      })(\"webpack logger raw log method\");\n      var TIMERS_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n        return i;\n      })(\"webpack logger times\");\n      var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n        return i;\n      })(\"webpack logger aggregated times\");\n      var WebpackLogger = /*#__PURE__*/function () {\n        /**\n         * @param {function(LogTypeEnum, EXPECTED_ANY[]=): void} log log function\n         * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger\n         */\n        function WebpackLogger(log, getChildLogger) {\n          _classCallCheck(this, WebpackLogger);\n          this[LOG_SYMBOL] = log;\n          this.getChildLogger = getChildLogger;\n        }\n\n        /**\n         * @param {...EXPECTED_ANY} args args\n         */\n        return _createClass(WebpackLogger, [{\n          key: \"error\",\n          value: function error() {\n            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n              args[_key] = arguments[_key];\n            }\n            this[LOG_SYMBOL](LogType.error, args);\n          }\n\n          /**\n           * @param {...EXPECTED_ANY} args args\n           */\n        }, {\n          key: \"warn\",\n          value: function warn() {\n            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n              args[_key2] = arguments[_key2];\n            }\n            this[LOG_SYMBOL](LogType.warn, args);\n          }\n\n          /**\n           * @param {...EXPECTED_ANY} args args\n           */\n        }, {\n          key: \"info\",\n          value: function info() {\n            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n              args[_key3] = arguments[_key3];\n            }\n            this[LOG_SYMBOL](LogType.info, args);\n          }\n\n          /**\n           * @param {...EXPECTED_ANY} args args\n           */\n        }, {\n          key: \"log\",\n          value: function log() {\n            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n              args[_key4] = arguments[_key4];\n            }\n            this[LOG_SYMBOL](LogType.log, args);\n          }\n\n          /**\n           * @param {...EXPECTED_ANY} args args\n           */\n        }, {\n          key: \"debug\",\n          value: function debug() {\n            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n              args[_key5] = arguments[_key5];\n            }\n            this[LOG_SYMBOL](LogType.debug, args);\n          }\n\n          /**\n           * @param {EXPECTED_ANY} assertion assertion\n           * @param {...EXPECTED_ANY} args args\n           */\n        }, {\n          key: \"assert\",\n          value: function assert(assertion) {\n            if (!assertion) {\n              for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {\n                args[_key6 - 1] = arguments[_key6];\n              }\n              this[LOG_SYMBOL](LogType.error, args);\n            }\n          }\n        }, {\n          key: \"trace\",\n          value: function trace() {\n            this[LOG_SYMBOL](LogType.trace, [\"Trace\"]);\n          }\n        }, {\n          key: \"clear\",\n          value: function clear() {\n            this[LOG_SYMBOL](LogType.clear);\n          }\n\n          /**\n           * @param {...EXPECTED_ANY} args args\n           */\n        }, {\n          key: \"status\",\n          value: function status() {\n            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {\n              args[_key7] = arguments[_key7];\n            }\n            this[LOG_SYMBOL](LogType.status, args);\n          }\n\n          /**\n           * @param {...EXPECTED_ANY} args args\n           */\n        }, {\n          key: \"group\",\n          value: function group() {\n            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {\n              args[_key8] = arguments[_key8];\n            }\n            this[LOG_SYMBOL](LogType.group, args);\n          }\n\n          /**\n           * @param {...EXPECTED_ANY} args args\n           */\n        }, {\n          key: \"groupCollapsed\",\n          value: function groupCollapsed() {\n            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {\n              args[_key9] = arguments[_key9];\n            }\n            this[LOG_SYMBOL](LogType.groupCollapsed, args);\n          }\n        }, {\n          key: \"groupEnd\",\n          value: function groupEnd() {\n            this[LOG_SYMBOL](LogType.groupEnd);\n          }\n\n          /**\n           * @param {string=} label label\n           */\n        }, {\n          key: \"profile\",\n          value: function profile(label) {\n            this[LOG_SYMBOL](LogType.profile, [label]);\n          }\n\n          /**\n           * @param {string=} label label\n           */\n        }, {\n          key: \"profileEnd\",\n          value: function profileEnd(label) {\n            this[LOG_SYMBOL](LogType.profileEnd, [label]);\n          }\n\n          /**\n           * @param {string} label label\n           */\n        }, {\n          key: \"time\",\n          value: function time(label) {\n            /** @type {Map<string | undefined, [number, number]>} */\n            this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();\n            this[TIMERS_SYMBOL].set(label, process.hrtime());\n          }\n\n          /**\n           * @param {string=} label label\n           */\n        }, {\n          key: \"timeLog\",\n          value: function timeLog(label) {\n            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n            if (!prev) {\n              throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeLog()\"));\n            }\n            var time = process.hrtime(prev);\n            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n          }\n\n          /**\n           * @param {string=} label label\n           */\n        }, {\n          key: \"timeEnd\",\n          value: function timeEnd(label) {\n            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n            if (!prev) {\n              throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeEnd()\"));\n            }\n            var time = process.hrtime(prev);\n            /** @type {Map<string | undefined, [number, number]>} */\n            this[TIMERS_SYMBOL][\"delete\"](label);\n            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n          }\n\n          /**\n           * @param {string=} label label\n           */\n        }, {\n          key: \"timeAggregate\",\n          value: function timeAggregate(label) {\n            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n            if (!prev) {\n              throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeAggregate()\"));\n            }\n            var time = process.hrtime(prev);\n            /** @type {Map<string | undefined, [number, number]>} */\n            this[TIMERS_SYMBOL][\"delete\"](label);\n            /** @type {Map<string | undefined, [number, number]>} */\n            this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();\n            var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);\n            if (current !== undefined) {\n              if (time[1] + current[1] > 1e9) {\n                time[0] += current[0] + 1;\n                time[1] = time[1] - 1e9 + current[1];\n              } else {\n                time[0] += current[0];\n                time[1] += current[1];\n              }\n            }\n            this[TIMERS_AGGREGATES_SYMBOL].set(label, time);\n          }\n\n          /**\n           * @param {string=} label label\n           */\n        }, {\n          key: \"timeAggregateEnd\",\n          value: function timeAggregateEnd(label) {\n            if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;\n            var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);\n            if (time === undefined) return;\n            this[TIMERS_AGGREGATES_SYMBOL][\"delete\"](label);\n            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n          }\n        }]);\n      }();\n      module.exports.Logger = WebpackLogger;\n\n      /***/\n    }),\n    /***/\"./node_modules/webpack/lib/logging/createConsoleLogger.js\": (\n    /*!*****************************************************************!*\\\n      !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!\n      \\*****************************************************************/\n    /***/\n    function _node_modules_webpack_lib_logging_createConsoleLoggerJs(module, __unused_webpack_exports, __nested_webpack_require_14802__) {\n      /*\n      \tMIT License http://www.opensource.org/licenses/mit-license.php\n      \tAuthor Tobias Koppers @sokra\n      */\n\n      function _slicedToArray(r, e) {\n        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();\n      }\n      function _nonIterableRest() {\n        throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n      }\n      function _iterableToArrayLimit(r, l) {\n        var t = null == r ? null : \"undefined\" != typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }) && r[(typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }).iterator] || r[\"@@iterator\"];\n        if (null != t) {\n          var e,\n            n,\n            i,\n            u,\n            a = [],\n            f = !0,\n            o = !1;\n          try {\n            if (i = (t = t.call(r)).next, 0 === l) {\n              if (Object(t) !== t) return;\n              f = !1;\n            } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);\n          } catch (r) {\n            o = !0, n = r;\n          } finally {\n            try {\n              if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return;\n            } finally {\n              if (o) throw n;\n            }\n          }\n          return a;\n        }\n      }\n      function _arrayWithHoles(r) {\n        if (Array.isArray(r)) return r;\n      }\n      function _toConsumableArray(r) {\n        return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();\n      }\n      function _nonIterableSpread() {\n        throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n      }\n      function _unsupportedIterableToArray(r, a) {\n        if (r) {\n          if (\"string\" == typeof r) return _arrayLikeToArray(r, a);\n          var t = {}.toString.call(r).slice(8, -1);\n          return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;\n        }\n      }\n      function _iterableToArray(r) {\n        if (\"undefined\" != typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }) && null != r[(typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }).iterator] || null != r[\"@@iterator\"]) return Array.from(r);\n      }\n      function _arrayWithoutHoles(r) {\n        if (Array.isArray(r)) return _arrayLikeToArray(r);\n      }\n      function _arrayLikeToArray(r, a) {\n        (null == a || a > r.length) && (a = r.length);\n        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];\n        return n;\n      }\n      var _require = __nested_webpack_require_14802__(/*! ./Logger */\"./node_modules/webpack/lib/logging/Logger.js\"),\n        LogType = _require.LogType;\n\n      /** @typedef {import(\"../../declarations/WebpackOptions\").FilterItemTypes} FilterItemTypes */\n      /** @typedef {import(\"../../declarations/WebpackOptions\").FilterTypes} FilterTypes */\n      /** @typedef {import(\"./Logger\").LogTypeEnum} LogTypeEnum */\n\n      /** @typedef {function(string): boolean} FilterFunction */\n      /** @typedef {function(string, LogTypeEnum, EXPECTED_ANY[]=): void} LoggingFunction */\n\n      /**\n       * @typedef {object} LoggerConsole\n       * @property {function(): void} clear\n       * @property {function(): void} trace\n       * @property {(...args: EXPECTED_ANY[]) => void} info\n       * @property {(...args: EXPECTED_ANY[]) => void} log\n       * @property {(...args: EXPECTED_ANY[]) => void} warn\n       * @property {(...args: EXPECTED_ANY[]) => void} error\n       * @property {(...args: EXPECTED_ANY[]) => void=} debug\n       * @property {(...args: EXPECTED_ANY[]) => void=} group\n       * @property {(...args: EXPECTED_ANY[]) => void=} groupCollapsed\n       * @property {(...args: EXPECTED_ANY[]) => void=} groupEnd\n       * @property {(...args: EXPECTED_ANY[]) => void=} status\n       * @property {(...args: EXPECTED_ANY[]) => void=} profile\n       * @property {(...args: EXPECTED_ANY[]) => void=} profileEnd\n       * @property {(...args: EXPECTED_ANY[]) => void=} logTime\n       */\n\n      /**\n       * @typedef {object} LoggerOptions\n       * @property {false|true|\"none\"|\"error\"|\"warn\"|\"info\"|\"log\"|\"verbose\"} level loglevel\n       * @property {FilterTypes|boolean} debug filter for debug logging\n       * @property {LoggerConsole} console the console to log to\n       */\n\n      /**\n       * @param {FilterItemTypes} item an input item\n       * @returns {FilterFunction | undefined} filter function\n       */\n      var filterToFunction = function filterToFunction(item) {\n        if (typeof item === \"string\") {\n          var regExp = new RegExp(\"[\\\\\\\\/]\".concat(item.replace(/[-[\\]{}()*+?.\\\\^$|]/g, \"\\\\$&\"), \"([\\\\\\\\/]|$|!|\\\\?)\"));\n          return function (ident) {\n            return regExp.test(ident);\n          };\n        }\n        if (item && _typeof(item) === \"object\" && typeof item.test === \"function\") {\n          return function (ident) {\n            return item.test(ident);\n          };\n        }\n        if (typeof item === \"function\") {\n          return item;\n        }\n        if (typeof item === \"boolean\") {\n          return function () {\n            return item;\n          };\n        }\n      };\n\n      /**\n       * @enum {number}\n       */\n      var LogLevel = {\n        none: 6,\n        \"false\": 6,\n        error: 5,\n        warn: 4,\n        info: 3,\n        log: 2,\n        \"true\": 2,\n        verbose: 1\n      };\n\n      /**\n       * @param {LoggerOptions} options options object\n       * @returns {LoggingFunction} logging function\n       */\n      module.exports = function (_ref) {\n        var _ref$level = _ref.level,\n          level = _ref$level === void 0 ? \"info\" : _ref$level,\n          _ref$debug = _ref.debug,\n          debug = _ref$debug === void 0 ? false : _ref$debug,\n          console = _ref.console;\n        var debugFilters = /** @type {FilterFunction[]} */\n\n        typeof debug === \"boolean\" ? [function () {\n          return debug;\n        }] : /** @type {FilterItemTypes[]} */[].concat(debug).map(filterToFunction);\n        /** @type {number} */\n        var loglevel = LogLevel[\"\".concat(level)] || 0;\n\n        /**\n         * @param {string} name name of the logger\n         * @param {LogTypeEnum} type type of the log entry\n         * @param {EXPECTED_ANY[]=} args arguments of the log entry\n         * @returns {void}\n         */\n        var logger = function logger(name, type, args) {\n          var labeledArgs = function labeledArgs() {\n            if (Array.isArray(args)) {\n              if (args.length > 0 && typeof args[0] === \"string\") {\n                return [\"[\".concat(name, \"] \").concat(args[0])].concat(_toConsumableArray(args.slice(1)));\n              }\n              return [\"[\".concat(name, \"]\")].concat(_toConsumableArray(args));\n            }\n            return [];\n          };\n          var debug = debugFilters.some(function (f) {\n            return f(name);\n          });\n          switch (type) {\n            case LogType.debug:\n              if (!debug) return;\n              if (typeof console.debug === \"function\") {\n                console.debug.apply(console, _toConsumableArray(labeledArgs()));\n              } else {\n                console.log.apply(console, _toConsumableArray(labeledArgs()));\n              }\n              break;\n            case LogType.log:\n              if (!debug && loglevel > LogLevel.log) return;\n              console.log.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n            case LogType.info:\n              if (!debug && loglevel > LogLevel.info) return;\n              console.info.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n            case LogType.warn:\n              if (!debug && loglevel > LogLevel.warn) return;\n              console.warn.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n            case LogType.error:\n              if (!debug && loglevel > LogLevel.error) return;\n              console.error.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n            case LogType.trace:\n              if (!debug) return;\n              console.trace();\n              break;\n            case LogType.groupCollapsed:\n              if (!debug && loglevel > LogLevel.log) return;\n              if (!debug && loglevel > LogLevel.verbose) {\n                if (typeof console.groupCollapsed === \"function\") {\n                  console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));\n                } else {\n                  console.log.apply(console, _toConsumableArray(labeledArgs()));\n                }\n                break;\n              }\n            // falls through\n            case LogType.group:\n              if (!debug && loglevel > LogLevel.log) return;\n              if (typeof console.group === \"function\") {\n                console.group.apply(console, _toConsumableArray(labeledArgs()));\n              } else {\n                console.log.apply(console, _toConsumableArray(labeledArgs()));\n              }\n              break;\n            case LogType.groupEnd:\n              if (!debug && loglevel > LogLevel.log) return;\n              if (typeof console.groupEnd === \"function\") {\n                console.groupEnd();\n              }\n              break;\n            case LogType.time:\n              {\n                if (!debug && loglevel > LogLevel.log) return;\n                var _args = _slicedToArray(/** @type {[string, number, number]} */\n                  args, 3),\n                  label = _args[0],\n                  start = _args[1],\n                  end = _args[2];\n                var ms = start * 1000 + end / 1000000;\n                var msg = \"[\".concat(name, \"] \").concat(label, \": \").concat(ms, \" ms\");\n                if (typeof console.logTime === \"function\") {\n                  console.logTime(msg);\n                } else {\n                  console.log(msg);\n                }\n                break;\n              }\n            case LogType.profile:\n              if (typeof console.profile === \"function\") {\n                console.profile.apply(console, _toConsumableArray(labeledArgs()));\n              }\n              break;\n            case LogType.profileEnd:\n              if (typeof console.profileEnd === \"function\") {\n                console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));\n              }\n              break;\n            case LogType.clear:\n              if (!debug && loglevel > LogLevel.log) return;\n              if (typeof console.clear === \"function\") {\n                console.clear();\n              }\n              break;\n            case LogType.status:\n              if (!debug && loglevel > LogLevel.info) return;\n              if (typeof console.status === \"function\") {\n                if (!args || args.length === 0) {\n                  console.status();\n                } else {\n                  console.status.apply(console, _toConsumableArray(labeledArgs()));\n                }\n              } else if (args && args.length !== 0) {\n                console.info.apply(console, _toConsumableArray(labeledArgs()));\n              }\n              break;\n            default:\n              throw new Error(\"Unexpected LogType \".concat(type));\n          }\n        };\n        return logger;\n      };\n\n      /***/\n    }),\n    /***/\"./node_modules/webpack/lib/logging/runtime.js\": (\n    /*!*****************************************************!*\\\n      !*** ./node_modules/webpack/lib/logging/runtime.js ***!\n      \\*****************************************************/\n    /***/\n    function _node_modules_webpack_lib_logging_runtimeJs(module, __unused_webpack_exports, __nested_webpack_require_26936__) {\n      /*\n      \tMIT License http://www.opensource.org/licenses/mit-license.php\n      \tAuthor Tobias Koppers @sokra\n      */\n\n      function _extends() {\n        return _extends = Object.assign ? Object.assign.bind() : function (n) {\n          for (var e = 1; e < arguments.length; e++) {\n            var t = arguments[e];\n            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);\n          }\n          return n;\n        }, _extends.apply(null, arguments);\n      }\n      var _require = __nested_webpack_require_26936__(/*! tapable */\"./client-src/modules/logger/tapable.js\"),\n        SyncBailHook = _require.SyncBailHook;\n      var _require2 = __nested_webpack_require_26936__(/*! ./Logger */\"./node_modules/webpack/lib/logging/Logger.js\"),\n        Logger = _require2.Logger;\n      var createConsoleLogger = __nested_webpack_require_26936__(/*! ./createConsoleLogger */\"./node_modules/webpack/lib/logging/createConsoleLogger.js\");\n\n      /** @type {createConsoleLogger.LoggerOptions} */\n      var currentDefaultLoggerOptions = {\n        level: \"info\",\n        debug: false,\n        console: console\n      };\n      var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);\n\n      /**\n       * @param {string} name name of the logger\n       * @returns {Logger} a logger\n       */\n      module.exports.getLogger = function (name) {\n        return new Logger(function (type, args) {\n          if (module.exports.hooks.log.call(name, type, args) === undefined) {\n            currentDefaultLogger(name, type, args);\n          }\n        }, function (childName) {\n          return module.exports.getLogger(\"\".concat(name, \"/\").concat(childName));\n        });\n      };\n\n      /**\n       * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options\n       * @returns {void}\n       */\n      module.exports.configureDefaultLogger = function (options) {\n        _extends(currentDefaultLoggerOptions, options);\n        currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);\n      };\n      module.exports.hooks = {\n        log: new SyncBailHook([\"origin\", \"type\", \"args\"])\n      };\n\n      /***/\n    })\n\n    /******/\n  };\n  /************************************************************************/\n  /******/ // The module cache\n  /******/\n  var __webpack_module_cache__ = {};\n  /******/\n  /******/ // The require function\n  /******/\n  function __nested_webpack_require_29325__(moduleId) {\n    /******/ // Check if module is in cache\n    /******/var cachedModule = __webpack_module_cache__[moduleId];\n    /******/\n    if (cachedModule !== undefined) {\n      /******/return cachedModule.exports;\n      /******/\n    }\n    /******/ // Create a new module (and put it into the cache)\n    /******/\n    var module = __webpack_module_cache__[moduleId] = {\n      /******/ // no module.id needed\n      /******/ // no module.loaded needed\n      /******/exports: {}\n      /******/\n    };\n    /******/\n    /******/ // Execute the module function\n    /******/\n    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_29325__);\n    /******/\n    /******/ // Return the exports of the module\n    /******/\n    return module.exports;\n    /******/\n  }\n  /******/\n  /************************************************************************/\n  /******/ /* webpack/runtime/define property getters */\n  /******/\n  !function () {\n    /******/ // define getter functions for harmony exports\n    /******/__nested_webpack_require_29325__.d = function (exports, definition) {\n      /******/for (var key in definition) {\n        /******/if (__nested_webpack_require_29325__.o(definition, key) && !__nested_webpack_require_29325__.o(exports, key)) {\n          /******/Object.defineProperty(exports, key, {\n            enumerable: true,\n            get: definition[key]\n          });\n          /******/\n        }\n        /******/\n      }\n      /******/\n    };\n    /******/\n  }();\n  /******/\n  /******/ /* webpack/runtime/hasOwnProperty shorthand */\n  /******/\n  !function () {\n    /******/__nested_webpack_require_29325__.o = function (obj, prop) {\n      return Object.prototype.hasOwnProperty.call(obj, prop);\n    };\n    /******/\n  }();\n  /******/\n  /******/ /* webpack/runtime/make namespace object */\n  /******/\n  !function () {\n    /******/ // define __esModule on exports\n    /******/__nested_webpack_require_29325__.r = function (exports) {\n      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n        /******/Object.defineProperty(exports, Symbol.toStringTag, {\n          value: 'Module'\n        });\n        /******/\n      }\n      /******/\n      Object.defineProperty(exports, '__esModule', {\n        value: true\n      });\n      /******/\n    };\n    /******/\n  }();\n  /******/\n  /************************************************************************/\n  var __nested_webpack_exports__ = {};\n  // This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.\n  !function () {\n    /*!********************************************!*\\\n      !*** ./client-src/modules/logger/index.js ***!\n      \\********************************************/\n    __nested_webpack_require_29325__.r(__nested_webpack_exports__);\n    /* harmony export */\n    __nested_webpack_require_29325__.d(__nested_webpack_exports__, {\n      /* harmony export */\"default\": function _default() {\n        return /* reexport default export from named module */webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__;\n      }\n      /* harmony export */\n    });\n    /* harmony import */\n    var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_29325__(/*! webpack/lib/logging/runtime.js */\"./node_modules/webpack/lib/logging/runtime.js\");\n  }();\n  var __webpack_export_target__ = exports;\n  for (var __webpack_i__ in __nested_webpack_exports__) __webpack_export_target__[__webpack_i__] = __nested_webpack_exports__[__webpack_i__];\n  if (__nested_webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, \"__esModule\", {\n    value: true\n  });\n  /******/\n})();\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack-dev-server/client/modules/logger/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createOverlay: () => (/* binding */ createOverlay),\n/* harmony export */   formatProblem: () => (/* binding */ formatProblem)\n/* harmony export */ });\n/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ \"./node_modules/ansi-html-community/index.js\");\n/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) {\n  var t = Object.keys(e);\n  if (Object.getOwnPropertySymbols) {\n    var o = Object.getOwnPropertySymbols(e);\n    r && (o = o.filter(function (r) {\n      return Object.getOwnPropertyDescriptor(e, r).enumerable;\n    })), t.push.apply(t, o);\n  }\n  return t;\n}\nfunction _objectSpread(e) {\n  for (var r = 1; r < arguments.length; r++) {\n    var t = null != arguments[r] ? arguments[r] : {};\n    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {\n      _defineProperty(e, r, t[r]);\n    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {\n      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));\n    });\n  }\n  return e;\n}\nfunction _defineProperty(e, r, t) {\n  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {\n    value: t,\n    enumerable: !0,\n    configurable: !0,\n    writable: !0\n  }) : e[r] = t, e;\n}\nfunction _toPropertyKey(t) {\n  var i = _toPrimitive(t, \"string\");\n  return \"symbol\" == _typeof(i) ? i : i + \"\";\n}\nfunction _toPrimitive(t, r) {\n  if (\"object\" != _typeof(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != _typeof(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)\n// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).\n\n\n\n/**\n * @type {(input: string, position: number) => string}\n */\nvar getCodePoint = String.prototype.codePointAt ? function (input, position) {\n  return input.codePointAt(position);\n} : function (input, position) {\n  return (input.charCodeAt(position) - 0xd800) * 0x400 + input.charCodeAt(position + 1) - 0xdc00 + 0x10000;\n};\n\n/**\n * @param {string} macroText\n * @param {RegExp} macroRegExp\n * @param {(input: string) => string} macroReplacer\n * @returns {string}\n */\nvar replaceUsingRegExp = function replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {\n  macroRegExp.lastIndex = 0;\n  var replaceMatch = macroRegExp.exec(macroText);\n  var replaceResult;\n  if (replaceMatch) {\n    replaceResult = \"\";\n    var replaceLastIndex = 0;\n    do {\n      if (replaceLastIndex !== replaceMatch.index) {\n        replaceResult += macroText.substring(replaceLastIndex, replaceMatch.index);\n      }\n      var replaceInput = replaceMatch[0];\n      replaceResult += macroReplacer(replaceInput);\n      replaceLastIndex = replaceMatch.index + replaceInput.length;\n      // eslint-disable-next-line no-cond-assign\n    } while (replaceMatch = macroRegExp.exec(macroText));\n    if (replaceLastIndex !== macroText.length) {\n      replaceResult += macroText.substring(replaceLastIndex);\n    }\n  } else {\n    replaceResult = macroText;\n  }\n  return replaceResult;\n};\nvar references = {\n  \"<\": \"&lt;\",\n  \">\": \"&gt;\",\n  '\"': \"&quot;\",\n  \"'\": \"&apos;\",\n  \"&\": \"&amp;\"\n};\n\n/**\n * @param {string} text text\n * @returns {string}\n */\nfunction encode(text) {\n  if (!text) {\n    return \"\";\n  }\n  return replaceUsingRegExp(text, /[<>'\"&]/g, function (input) {\n    var result = references[input];\n    if (!result) {\n      var code = input.length > 1 ? getCodePoint(input, 0) : input.charCodeAt(0);\n      result = \"&#\".concat(code, \";\");\n    }\n    return result;\n  });\n}\n\n/**\n * @typedef {Object} StateDefinitions\n * @property {{[event: string]: { target: string; actions?: Array<string> }}} [on]\n */\n\n/**\n * @typedef {Object} Options\n * @property {{[state: string]: StateDefinitions}} states\n * @property {object} context;\n * @property {string} initial\n */\n\n/**\n * @typedef {Object} Implementation\n * @property {{[actionName: string]: (ctx: object, event: any) => object}} actions\n */\n\n/**\n * A simplified `createMachine` from `@xstate/fsm` with the following differences:\n *\n *  - the returned machine is technically a \"service\". No `interpret(machine).start()` is needed.\n *  - the state definition only support `on` and target must be declared with { target: 'nextState', actions: [] } explicitly.\n *  - event passed to `send` must be an object with `type` property.\n *  - actions implementation will be [assign action](https://xstate.js.org/docs/guides/context.html#assign-action) if you return any value.\n *  Do not return anything if you just want to invoke side effect.\n *\n * The goal of this custom function is to avoid installing the entire `'xstate/fsm'` package, while enabling modeling using\n * state machine. You can copy the first parameter into the editor at https://stately.ai/viz to visualize the state machine.\n *\n * @param {Options} options\n * @param {Implementation} implementation\n */\nfunction createMachine(_ref, _ref2) {\n  var states = _ref.states,\n    context = _ref.context,\n    initial = _ref.initial;\n  var actions = _ref2.actions;\n  var currentState = initial;\n  var currentContext = context;\n  return {\n    send: function send(event) {\n      var currentStateOn = states[currentState].on;\n      var transitionConfig = currentStateOn && currentStateOn[event.type];\n      if (transitionConfig) {\n        currentState = transitionConfig.target;\n        if (transitionConfig.actions) {\n          transitionConfig.actions.forEach(function (actName) {\n            var actionImpl = actions[actName];\n            var nextContextValue = actionImpl && actionImpl(currentContext, event);\n            if (nextContextValue) {\n              currentContext = _objectSpread(_objectSpread({}, currentContext), nextContextValue);\n            }\n          });\n        }\n      }\n    }\n  };\n}\n\n/**\n * @typedef {Object} ShowOverlayData\n * @property {'warning' | 'error'} level\n * @property {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages\n * @property {'build' | 'runtime'} messageSource\n */\n\n/**\n * @typedef {Object} CreateOverlayMachineOptions\n * @property {(data: ShowOverlayData) => void} showOverlay\n * @property {() => void} hideOverlay\n */\n\n/**\n * @param {CreateOverlayMachineOptions} options\n */\nvar createOverlayMachine = function createOverlayMachine(options) {\n  var hideOverlay = options.hideOverlay,\n    showOverlay = options.showOverlay;\n  return createMachine({\n    initial: \"hidden\",\n    context: {\n      level: \"error\",\n      messages: [],\n      messageSource: \"build\"\n    },\n    states: {\n      hidden: {\n        on: {\n          BUILD_ERROR: {\n            target: \"displayBuildError\",\n            actions: [\"setMessages\", \"showOverlay\"]\n          },\n          RUNTIME_ERROR: {\n            target: \"displayRuntimeError\",\n            actions: [\"setMessages\", \"showOverlay\"]\n          }\n        }\n      },\n      displayBuildError: {\n        on: {\n          DISMISS: {\n            target: \"hidden\",\n            actions: [\"dismissMessages\", \"hideOverlay\"]\n          },\n          BUILD_ERROR: {\n            target: \"displayBuildError\",\n            actions: [\"appendMessages\", \"showOverlay\"]\n          }\n        }\n      },\n      displayRuntimeError: {\n        on: {\n          DISMISS: {\n            target: \"hidden\",\n            actions: [\"dismissMessages\", \"hideOverlay\"]\n          },\n          RUNTIME_ERROR: {\n            target: \"displayRuntimeError\",\n            actions: [\"appendMessages\", \"showOverlay\"]\n          },\n          BUILD_ERROR: {\n            target: \"displayBuildError\",\n            actions: [\"setMessages\", \"showOverlay\"]\n          }\n        }\n      }\n    }\n  }, {\n    actions: {\n      dismissMessages: function dismissMessages() {\n        return {\n          messages: [],\n          level: \"error\",\n          messageSource: \"build\"\n        };\n      },\n      appendMessages: function appendMessages(context, event) {\n        return {\n          messages: context.messages.concat(event.messages),\n          level: event.level || context.level,\n          messageSource: event.type === \"RUNTIME_ERROR\" ? \"runtime\" : \"build\"\n        };\n      },\n      setMessages: function setMessages(context, event) {\n        return {\n          messages: event.messages,\n          level: event.level || context.level,\n          messageSource: event.type === \"RUNTIME_ERROR\" ? \"runtime\" : \"build\"\n        };\n      },\n      hideOverlay: hideOverlay,\n      showOverlay: showOverlay\n    }\n  });\n};\n\n/**\n *\n * @param {Error} error\n */\nvar parseErrorToStacks = function parseErrorToStacks(error) {\n  if (!error || !(error instanceof Error)) {\n    throw new Error(\"parseErrorToStacks expects Error object\");\n  }\n  if (typeof error.stack === \"string\") {\n    return error.stack.split(\"\\n\").filter(function (stack) {\n      return stack !== \"Error: \".concat(error.message);\n    });\n  }\n};\n\n/**\n * @callback ErrorCallback\n * @param {ErrorEvent} error\n * @returns {void}\n */\n\n/**\n * @param {ErrorCallback} callback\n */\nvar listenToRuntimeError = function listenToRuntimeError(callback) {\n  window.addEventListener(\"error\", callback);\n  return function cleanup() {\n    window.removeEventListener(\"error\", callback);\n  };\n};\n\n/**\n * @callback UnhandledRejectionCallback\n * @param {PromiseRejectionEvent} rejectionEvent\n * @returns {void}\n */\n\n/**\n * @param {UnhandledRejectionCallback} callback\n */\nvar listenToUnhandledRejection = function listenToUnhandledRejection(callback) {\n  window.addEventListener(\"unhandledrejection\", callback);\n  return function cleanup() {\n    window.removeEventListener(\"unhandledrejection\", callback);\n  };\n};\n\n// Styles are inspired by `react-error-overlay`\n\nvar msgStyles = {\n  error: {\n    backgroundColor: \"rgba(206, 17, 38, 0.1)\",\n    color: \"#fccfcf\"\n  },\n  warning: {\n    backgroundColor: \"rgba(251, 245, 180, 0.1)\",\n    color: \"#fbf5b4\"\n  }\n};\nvar iframeStyle = {\n  position: \"fixed\",\n  top: 0,\n  left: 0,\n  right: 0,\n  bottom: 0,\n  width: \"100vw\",\n  height: \"100vh\",\n  border: \"none\",\n  \"z-index\": 9999999999\n};\nvar containerStyle = {\n  position: \"fixed\",\n  boxSizing: \"border-box\",\n  left: 0,\n  top: 0,\n  right: 0,\n  bottom: 0,\n  width: \"100vw\",\n  height: \"100vh\",\n  fontSize: \"large\",\n  padding: \"2rem 2rem 4rem 2rem\",\n  lineHeight: \"1.2\",\n  whiteSpace: \"pre-wrap\",\n  overflow: \"auto\",\n  backgroundColor: \"rgba(0, 0, 0, 0.9)\",\n  color: \"white\"\n};\nvar headerStyle = {\n  color: \"#e83b46\",\n  fontSize: \"2em\",\n  whiteSpace: \"pre-wrap\",\n  fontFamily: \"sans-serif\",\n  margin: \"0 2rem 2rem 0\",\n  flex: \"0 0 auto\",\n  maxHeight: \"50%\",\n  overflow: \"auto\"\n};\nvar dismissButtonStyle = {\n  color: \"#ffffff\",\n  lineHeight: \"1rem\",\n  fontSize: \"1.5rem\",\n  padding: \"1rem\",\n  cursor: \"pointer\",\n  position: \"absolute\",\n  right: 0,\n  top: 0,\n  backgroundColor: \"transparent\",\n  border: \"none\"\n};\nvar msgTypeStyle = {\n  color: \"#e83b46\",\n  fontSize: \"1.2em\",\n  marginBottom: \"1rem\",\n  fontFamily: \"sans-serif\"\n};\nvar msgTextStyle = {\n  lineHeight: \"1.5\",\n  fontSize: \"1rem\",\n  fontFamily: \"Menlo, Consolas, monospace\"\n};\n\n// ANSI HTML\n\nvar colors = {\n  reset: [\"transparent\", \"transparent\"],\n  black: \"181818\",\n  red: \"E36049\",\n  green: \"B3CB74\",\n  yellow: \"FFD080\",\n  blue: \"7CAFC2\",\n  magenta: \"7FACCA\",\n  cyan: \"C3C2EF\",\n  lightgrey: \"EBE7E3\",\n  darkgrey: \"6D7891\"\n};\nansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);\n\n/**\n * @param {string} type\n * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string; stack?: string[] }} item\n * @returns {{ header: string, body: string }}\n */\nvar formatProblem = function formatProblem(type, item) {\n  var header = type === \"warning\" ? \"WARNING\" : \"ERROR\";\n  var body = \"\";\n  if (typeof item === \"string\") {\n    body += item;\n  } else {\n    var file = item.file || \"\";\n    // eslint-disable-next-line no-nested-ternary\n    var moduleName = item.moduleName ? item.moduleName.indexOf(\"!\") !== -1 ? \"\".concat(item.moduleName.replace(/^(\\s|\\S)*!/, \"\"), \" (\").concat(item.moduleName, \")\") : \"\".concat(item.moduleName) : \"\";\n    var loc = item.loc;\n    header += \"\".concat(moduleName || file ? \" in \".concat(moduleName ? \"\".concat(moduleName).concat(file ? \" (\".concat(file, \")\") : \"\") : file).concat(loc ? \" \".concat(loc) : \"\") : \"\");\n    body += item.message || \"\";\n  }\n  if (Array.isArray(item.stack)) {\n    item.stack.forEach(function (stack) {\n      if (typeof stack === \"string\") {\n        body += \"\\r\\n\".concat(stack);\n      }\n    });\n  }\n  return {\n    header: header,\n    body: body\n  };\n};\n\n/**\n * @typedef {Object} CreateOverlayOptions\n * @property {string | null} trustedTypesPolicyName\n * @property {boolean | (error: Error) => void} [catchRuntimeError]\n */\n\n/**\n *\n * @param {CreateOverlayOptions} options\n */\nvar createOverlay = function createOverlay(options) {\n  /** @type {HTMLIFrameElement | null | undefined} */\n  var iframeContainerElement;\n  /** @type {HTMLDivElement | null | undefined} */\n  var containerElement;\n  /** @type {HTMLDivElement | null | undefined} */\n  var headerElement;\n  /** @type {Array<(element: HTMLDivElement) => void>} */\n  var onLoadQueue = [];\n  /** @type {TrustedTypePolicy | undefined} */\n  var overlayTrustedTypesPolicy;\n\n  /**\n   *\n   * @param {HTMLElement} element\n   * @param {CSSStyleDeclaration} style\n   */\n  function applyStyle(element, style) {\n    Object.keys(style).forEach(function (prop) {\n      element.style[prop] = style[prop];\n    });\n  }\n\n  /**\n   * @param {string | null} trustedTypesPolicyName\n   */\n  function createContainer(trustedTypesPolicyName) {\n    // Enable Trusted Types if they are available in the current browser.\n    if (window.trustedTypes) {\n      overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || \"webpack-dev-server#overlay\", {\n        createHTML: function createHTML(value) {\n          return value;\n        }\n      });\n    }\n    iframeContainerElement = document.createElement(\"iframe\");\n    iframeContainerElement.id = \"webpack-dev-server-client-overlay\";\n    iframeContainerElement.src = \"about:blank\";\n    applyStyle(iframeContainerElement, iframeStyle);\n    iframeContainerElement.onload = function () {\n      var contentElement = /** @type {Document} */\n      (/** @type {HTMLIFrameElement} */\n      iframeContainerElement.contentDocument).createElement(\"div\");\n      containerElement = /** @type {Document} */\n      (/** @type {HTMLIFrameElement} */\n      iframeContainerElement.contentDocument).createElement(\"div\");\n      contentElement.id = \"webpack-dev-server-client-overlay-div\";\n      applyStyle(contentElement, containerStyle);\n      headerElement = document.createElement(\"div\");\n      headerElement.innerText = \"Compiled with problems:\";\n      applyStyle(headerElement, headerStyle);\n      var closeButtonElement = document.createElement(\"button\");\n      applyStyle(closeButtonElement, dismissButtonStyle);\n      closeButtonElement.innerText = \"×\";\n      closeButtonElement.ariaLabel = \"Dismiss\";\n      closeButtonElement.addEventListener(\"click\", function () {\n        // eslint-disable-next-line no-use-before-define\n        overlayService.send({\n          type: \"DISMISS\"\n        });\n      });\n      contentElement.appendChild(headerElement);\n      contentElement.appendChild(closeButtonElement);\n      contentElement.appendChild(containerElement);\n\n      /** @type {Document} */\n      (/** @type {HTMLIFrameElement} */\n      iframeContainerElement.contentDocument).body.appendChild(contentElement);\n      onLoadQueue.forEach(function (onLoad) {\n        onLoad(/** @type {HTMLDivElement} */contentElement);\n      });\n      onLoadQueue = [];\n\n      /** @type {HTMLIFrameElement} */\n      iframeContainerElement.onload = null;\n    };\n    document.body.appendChild(iframeContainerElement);\n  }\n\n  /**\n   * @param {(element: HTMLDivElement) => void} callback\n   * @param {string | null} trustedTypesPolicyName\n   */\n  function ensureOverlayExists(callback, trustedTypesPolicyName) {\n    if (containerElement) {\n      containerElement.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(\"\") : \"\";\n      // Everything is ready, call the callback right away.\n      callback(containerElement);\n      return;\n    }\n    onLoadQueue.push(callback);\n    if (iframeContainerElement) {\n      return;\n    }\n    createContainer(trustedTypesPolicyName);\n  }\n\n  // Successful compilation.\n  function hide() {\n    if (!iframeContainerElement) {\n      return;\n    }\n\n    // Clean up and reset internal state.\n    document.body.removeChild(iframeContainerElement);\n    iframeContainerElement = null;\n    containerElement = null;\n  }\n\n  // Compilation with errors (e.g. syntax error or missing modules).\n  /**\n   * @param {string} type\n   * @param {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages\n   * @param {string | null} trustedTypesPolicyName\n   * @param {'build' | 'runtime'} messageSource\n   */\n  function show(type, messages, trustedTypesPolicyName, messageSource) {\n    ensureOverlayExists(function () {\n      headerElement.innerText = messageSource === \"runtime\" ? \"Uncaught runtime errors:\" : \"Compiled with problems:\";\n      messages.forEach(function (message) {\n        var entryElement = document.createElement(\"div\");\n        var msgStyle = type === \"warning\" ? msgStyles.warning : msgStyles.error;\n        applyStyle(entryElement, _objectSpread(_objectSpread({}, msgStyle), {}, {\n          padding: \"1rem 1rem 1.5rem 1rem\"\n        }));\n        var typeElement = document.createElement(\"div\");\n        var _formatProblem = formatProblem(type, message),\n          header = _formatProblem.header,\n          body = _formatProblem.body;\n        typeElement.innerText = header;\n        applyStyle(typeElement, msgTypeStyle);\n        if (message.moduleIdentifier) {\n          applyStyle(typeElement, {\n            cursor: \"pointer\"\n          });\n          // element.dataset not supported in IE\n          typeElement.setAttribute(\"data-can-open\", true);\n          typeElement.addEventListener(\"click\", function () {\n            fetch(\"/webpack-dev-server/open-editor?fileName=\".concat(message.moduleIdentifier));\n          });\n        }\n\n        // Make it look similar to our terminal.\n        var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()(encode(body));\n        var messageTextNode = document.createElement(\"div\");\n        applyStyle(messageTextNode, msgTextStyle);\n        messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;\n        entryElement.appendChild(typeElement);\n        entryElement.appendChild(messageTextNode);\n\n        /** @type {HTMLDivElement} */\n        containerElement.appendChild(entryElement);\n      });\n    }, trustedTypesPolicyName);\n  }\n  var overlayService = createOverlayMachine({\n    showOverlay: function showOverlay(_ref3) {\n      var _ref3$level = _ref3.level,\n        level = _ref3$level === void 0 ? \"error\" : _ref3$level,\n        messages = _ref3.messages,\n        messageSource = _ref3.messageSource;\n      return show(level, messages, options.trustedTypesPolicyName, messageSource);\n    },\n    hideOverlay: hide\n  });\n  if (options.catchRuntimeError) {\n    /**\n     * @param {Error | undefined} error\n     * @param {string} fallbackMessage\n     */\n    var handleError = function handleError(error, fallbackMessage) {\n      var errorObject = error instanceof Error ? error : new Error(error || fallbackMessage);\n      var shouldDisplay = typeof options.catchRuntimeError === \"function\" ? options.catchRuntimeError(errorObject) : true;\n      if (shouldDisplay) {\n        overlayService.send({\n          type: \"RUNTIME_ERROR\",\n          messages: [{\n            message: errorObject.message,\n            stack: parseErrorToStacks(errorObject)\n          }]\n        });\n      }\n    };\n    listenToRuntimeError(function (errorEvent) {\n      // error property may be empty in older browser like IE\n      var error = errorEvent.error,\n        message = errorEvent.message;\n      if (!error && !message) {\n        return;\n      }\n      handleError(error, message);\n    });\n    listenToUnhandledRejection(function (promiseRejectionEvent) {\n      var reason = promiseRejectionEvent.reason;\n      handleError(reason, \"Unknown promise rejection reason\");\n    });\n  }\n  return overlayService;\n};\n\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack-dev-server/client/overlay.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/progress.js":
/*!************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/progress.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defineProgressElement: () => (/* binding */ defineProgressElement),\n/* harmony export */   isProgressSupported: () => (/* binding */ isProgressSupported)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) {\n  if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n}\nfunction _defineProperties(e, r) {\n  for (var t = 0; t < r.length; t++) {\n    var o = r[t];\n    o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);\n  }\n}\nfunction _createClass(e, r, t) {\n  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\n    writable: !1\n  }), e;\n}\nfunction _toPropertyKey(t) {\n  var i = _toPrimitive(t, \"string\");\n  return \"symbol\" == _typeof(i) ? i : i + \"\";\n}\nfunction _toPrimitive(t, r) {\n  if (\"object\" != _typeof(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != _typeof(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\nfunction _callSuper(t, o, e) {\n  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));\n}\nfunction _possibleConstructorReturn(t, e) {\n  if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e;\n  if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\");\n  return _assertThisInitialized(t);\n}\nfunction _assertThisInitialized(e) {\n  if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  return e;\n}\nfunction _inherits(t, e) {\n  if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\");\n  t.prototype = Object.create(e && e.prototype, {\n    constructor: {\n      value: t,\n      writable: !0,\n      configurable: !0\n    }\n  }), Object.defineProperty(t, \"prototype\", {\n    writable: !1\n  }), e && _setPrototypeOf(t, e);\n}\nfunction _wrapNativeSuper(t) {\n  var r = \"function\" == typeof Map ? new Map() : void 0;\n  return _wrapNativeSuper = function _wrapNativeSuper(t) {\n    if (null === t || !_isNativeFunction(t)) return t;\n    if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\");\n    if (void 0 !== r) {\n      if (r.has(t)) return r.get(t);\n      r.set(t, Wrapper);\n    }\n    function Wrapper() {\n      return _construct(t, arguments, _getPrototypeOf(this).constructor);\n    }\n    return Wrapper.prototype = Object.create(t.prototype, {\n      constructor: {\n        value: Wrapper,\n        enumerable: !1,\n        writable: !0,\n        configurable: !0\n      }\n    }), _setPrototypeOf(Wrapper, t);\n  }, _wrapNativeSuper(t);\n}\nfunction _construct(t, e, r) {\n  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);\n  var o = [null];\n  o.push.apply(o, e);\n  var p = new (t.bind.apply(t, o))();\n  return r && _setPrototypeOf(p, r.prototype), p;\n}\nfunction _isNativeReflectConstruct() {\n  try {\n    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));\n  } catch (t) {}\n  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {\n    return !!t;\n  })();\n}\nfunction _isNativeFunction(t) {\n  try {\n    return -1 !== Function.toString.call(t).indexOf(\"[native code]\");\n  } catch (n) {\n    return \"function\" == typeof t;\n  }\n}\nfunction _setPrototypeOf(t, e) {\n  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {\n    return t.__proto__ = e, t;\n  }, _setPrototypeOf(t, e);\n}\nfunction _getPrototypeOf(t) {\n  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {\n    return t.__proto__ || Object.getPrototypeOf(t);\n  }, _getPrototypeOf(t);\n}\nfunction _classPrivateMethodInitSpec(e, a) {\n  _checkPrivateRedeclaration(e, a), a.add(e);\n}\nfunction _checkPrivateRedeclaration(e, t) {\n  if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\");\n}\nfunction _assertClassBrand(e, t, n) {\n  if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;\n  throw new TypeError(\"Private element is not present on this object\");\n}\nfunction isProgressSupported() {\n  return \"customElements\" in self && !!HTMLElement.prototype.attachShadow;\n}\nfunction defineProgressElement() {\n  var _WebpackDevServerProgress;\n  if (customElements.get(\"wds-progress\")) {\n    return;\n  }\n  var _WebpackDevServerProgress_brand = /*#__PURE__*/new WeakSet();\n  var WebpackDevServerProgress = /*#__PURE__*/function (_HTMLElement) {\n    function WebpackDevServerProgress() {\n      var _this;\n      _classCallCheck(this, WebpackDevServerProgress);\n      _this = _callSuper(this, WebpackDevServerProgress);\n      _classPrivateMethodInitSpec(_this, _WebpackDevServerProgress_brand);\n      _this.attachShadow({\n        mode: \"open\"\n      });\n      _this.maxDashOffset = -219.99078369140625;\n      _this.animationTimer = null;\n      return _this;\n    }\n    _inherits(WebpackDevServerProgress, _HTMLElement);\n    return _createClass(WebpackDevServerProgress, [{\n      key: \"connectedCallback\",\n      value: function connectedCallback() {\n        _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);\n      }\n    }, {\n      key: \"attributeChangedCallback\",\n      value: function attributeChangedCallback(name, oldValue, newValue) {\n        if (name === \"progress\") {\n          _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, Number(newValue));\n        } else if (name === \"type\") {\n          _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);\n        }\n      }\n    }], [{\n      key: \"observedAttributes\",\n      get: function get() {\n        return [\"progress\", \"type\"];\n      }\n    }]);\n  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement));\n  _WebpackDevServerProgress = WebpackDevServerProgress;\n  function _reset() {\n    var _this$getAttribute, _Number;\n    clearTimeout(this.animationTimer);\n    this.animationTimer = null;\n    var typeAttr = (_this$getAttribute = this.getAttribute(\"type\")) === null || _this$getAttribute === void 0 ? void 0 : _this$getAttribute.toLowerCase();\n    this.type = typeAttr === \"circular\" ? \"circular\" : \"linear\";\n    var innerHTML = this.type === \"circular\" ? _circularTemplate.call(_WebpackDevServerProgress) : _linearTemplate.call(_WebpackDevServerProgress);\n    this.shadowRoot.innerHTML = innerHTML;\n    this.initialProgress = (_Number = Number(this.getAttribute(\"progress\"))) !== null && _Number !== void 0 ? _Number : 0;\n    _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, this.initialProgress);\n  }\n  function _circularTemplate() {\n    return \"\\n        <style>\\n        :host {\\n            width: 200px;\\n            height: 200px;\\n            position: fixed;\\n            right: 5%;\\n            top: 5%;\\n            transition: opacity .25s ease-in-out;\\n            z-index: 2147483645;\\n        }\\n\\n        circle {\\n            fill: #282d35;\\n        }\\n\\n        path {\\n            fill: rgba(0, 0, 0, 0);\\n            stroke: rgb(186, 223, 172);\\n            stroke-dasharray: 219.99078369140625;\\n            stroke-dashoffset: -219.99078369140625;\\n            stroke-width: 10;\\n            transform: rotate(90deg) translate(0px, -80px);\\n        }\\n\\n        text {\\n            font-family: 'Open Sans', sans-serif;\\n            font-size: 18px;\\n            fill: #ffffff;\\n            dominant-baseline: middle;\\n            text-anchor: middle;\\n        }\\n\\n        tspan#percent-super {\\n            fill: #bdc3c7;\\n            font-size: 0.45em;\\n            baseline-shift: 10%;\\n        }\\n\\n        @keyframes fade {\\n            0% { opacity: 1; transform: scale(1); }\\n            100% { opacity: 0; transform: scale(0); }\\n        }\\n\\n        .disappear {\\n            animation: fade 0.3s;\\n            animation-fill-mode: forwards;\\n            animation-delay: 0.5s;\\n        }\\n\\n        .hidden {\\n            display: none;\\n        }\\n        </style>\\n        <svg id=\\\"progress\\\" class=\\\"hidden noselect\\\" viewBox=\\\"0 0 80 80\\\">\\n        <circle cx=\\\"50%\\\" cy=\\\"50%\\\" r=\\\"35\\\"></circle>\\n        <path d=\\\"M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0\\\"></path>\\n        <text x=\\\"50%\\\" y=\\\"51%\\\">\\n            <tspan id=\\\"percent-value\\\">0</tspan>\\n            <tspan id=\\\"percent-super\\\">%</tspan>\\n        </text>\\n        </svg>\\n      \";\n  }\n  function _linearTemplate() {\n    return \"\\n        <style>\\n        :host {\\n            position: fixed;\\n            top: 0;\\n            left: 0;\\n            height: 4px;\\n            width: 100vw;\\n            z-index: 2147483645;\\n        }\\n\\n        #bar {\\n            width: 0%;\\n            height: 4px;\\n            background-color: rgb(186, 223, 172);\\n        }\\n\\n        @keyframes fade {\\n            0% { opacity: 1; }\\n            100% { opacity: 0; }\\n        }\\n\\n        .disappear {\\n            animation: fade 0.3s;\\n            animation-fill-mode: forwards;\\n            animation-delay: 0.5s;\\n        }\\n\\n        .hidden {\\n            display: none;\\n        }\\n        </style>\\n        <div id=\\\"progress\\\"></div>\\n        \";\n  }\n  function _update(percent) {\n    var element = this.shadowRoot.querySelector(\"#progress\");\n    if (this.type === \"circular\") {\n      var path = this.shadowRoot.querySelector(\"path\");\n      var value = this.shadowRoot.querySelector(\"#percent-value\");\n      var offset = (100 - percent) / 100 * this.maxDashOffset;\n      path.style.strokeDashoffset = offset;\n      value.textContent = percent;\n    } else {\n      element.style.width = \"\".concat(percent, \"%\");\n    }\n    if (percent >= 100) {\n      _assertClassBrand(_WebpackDevServerProgress_brand, this, _hide).call(this);\n    } else if (percent > 0) {\n      _assertClassBrand(_WebpackDevServerProgress_brand, this, _show).call(this);\n    }\n  }\n  function _show() {\n    var element = this.shadowRoot.querySelector(\"#progress\");\n    element.classList.remove(\"hidden\");\n  }\n  function _hide() {\n    var _this2 = this;\n    var element = this.shadowRoot.querySelector(\"#progress\");\n    if (this.type === \"circular\") {\n      element.classList.add(\"disappear\");\n      element.addEventListener(\"animationend\", function () {\n        element.classList.add(\"hidden\");\n        _assertClassBrand(_WebpackDevServerProgress_brand, _this2, _update).call(_this2, 0);\n      }, {\n        once: true\n      });\n    } else if (this.type === \"linear\") {\n      element.classList.add(\"disappear\");\n      this.animationTimer = setTimeout(function () {\n        element.classList.remove(\"disappear\");\n        element.classList.add(\"hidden\");\n        element.style.width = \"0%\";\n        _this2.animationTimer = null;\n      }, 800);\n    }\n  }\n  customElements.define(\"wds-progress\", WebpackDevServerProgress);\n}\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack-dev-server/client/progress.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   client: () => (/* binding */ client),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ \"./node_modules/webpack-dev-server/client/clients/WebSocketClient.js\");\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ \"./node_modules/webpack-dev-server/client/clients/WebSocketClient.js\");\n/* global __webpack_dev_server_client__ */\n\n\n\n\n// this WebsocketClient is here as a default fallback, in case the client is not injected\n/* eslint-disable camelcase */\nvar Client =\n// eslint-disable-next-line no-nested-ternary\ntypeof __webpack_dev_server_client__ !== \"undefined\" ? typeof __webpack_dev_server_client__[\"default\"] !== \"undefined\" ? __webpack_dev_server_client__[\"default\"] : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* eslint-enable camelcase */\n\nvar retries = 0;\nvar maxRetries = 10;\n\n// Initialized client is exported so external consumers can utilize the same instance\n// It is mutable to enforce singleton\n// eslint-disable-next-line import/no-mutable-exports\nvar client = null;\n\n/**\n * @param {string} url\n * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers\n * @param {number} [reconnect]\n */\nvar socket = function initSocket(url, handlers, reconnect) {\n  client = new Client(url);\n  client.onOpen(function () {\n    retries = 0;\n    if (typeof reconnect !== \"undefined\") {\n      maxRetries = reconnect;\n    }\n  });\n  client.onClose(function () {\n    if (retries === 0) {\n      handlers.close();\n    }\n\n    // Try to reconnect.\n    client = null;\n\n    // After 10 retries stop trying, to prevent logspam.\n    if (retries < maxRetries) {\n      // Exponentially increase timeout to reconnect.\n      // Respectfully copied from the package `got`.\n      // eslint-disable-next-line no-restricted-properties\n      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;\n      retries += 1;\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(\"Trying to reconnect...\");\n      setTimeout(function () {\n        socket(url, handlers, reconnect);\n      }, retryInMs);\n    }\n  });\n  client.onMessage(\n  /**\n   * @param {any} data\n   */\n  function (data) {\n    var message = JSON.parse(data);\n    if (handlers[message.type]) {\n      handlers[message.type](message.data, message.params);\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack-dev-server/client/socket.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   log: () => (/* binding */ log),\n/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel)\n/* harmony export */ });\n/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ \"./node_modules/webpack-dev-server/client/modules/logger/index.js\");\n/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar name = \"webpack-dev-server\";\n// default level is set on the client side, so it does not need\n// to be set by the CLI or API\nvar defaultLevel = \"info\";\n\n// options new options, merge with old options\n/**\n * @param {false | true | \"none\" | \"error\" | \"warn\" | \"info\" | \"log\" | \"verbose\"} level\n * @returns {void}\n */\nfunction setLogLevel(level) {\n  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({\n    level: level\n  });\n}\nsetLogLevel(defaultLevel);\nvar log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);\n\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack-dev-server/client/utils/log.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* global __resourceQuery WorkerGlobalScope */\n\n// Send messages to the outside, so plugins can consume it.\n/**\n * @param {string} type\n * @param {any} [data]\n */\nfunction sendMsg(type, data) {\n  if (typeof self !== \"undefined\" && (typeof WorkerGlobalScope === \"undefined\" || !(self instanceof WorkerGlobalScope))) {\n    self.postMessage({\n      type: \"webpack\".concat(type),\n      data: data\n    }, \"*\");\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack-dev-server/client/utils/sendMessage.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/* globals __webpack_hash__ */\nif (true) {\n  /** @type {undefined|string} */\n  var lastHash;\n  var upToDate = function upToDate() {\n    return /** @type {string} */lastHash.indexOf(__webpack_require__.h()) >= 0;\n  };\n  var log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n  var check = function check() {\n    module.hot.check(true).then(function (updatedModules) {\n      if (!updatedModules) {\n        log(\"warning\", \"[HMR] Cannot find update. \" + (typeof window !== \"undefined\" ? \"Need to do a full reload!\" : \"Please reload manually!\"));\n        log(\"warning\", \"[HMR] (Probably because of restarting the webpack-dev-server)\");\n        if (typeof window !== \"undefined\") {\n          window.location.reload();\n        }\n        return;\n      }\n      if (!upToDate()) {\n        check();\n      }\n      __webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n      if (upToDate()) {\n        log(\"info\", \"[HMR] App is up to date.\");\n      }\n    })[\"catch\"](function (err) {\n      var status = module.hot.status();\n      if ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n        log(\"warning\", \"[HMR] Cannot apply update. \" + (typeof window !== \"undefined\" ? \"Need to do a full reload!\" : \"Please reload manually!\"));\n        log(\"warning\", \"[HMR] \" + log.formatError(err));\n        if (typeof window !== \"undefined\") {\n          window.location.reload();\n        }\n      } else {\n        log(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n      }\n    });\n  };\n  var hotEmitter = __webpack_require__(/*! ./emitter */ \"./node_modules/webpack/hot/emitter.js\");\n  hotEmitter.on(\"webpackHotUpdate\", function (currentHash) {\n    lastHash = currentHash;\n    if (!upToDate() && module.hot.status() === \"idle\") {\n      log(\"info\", \"[HMR] Checking for updates on the server...\");\n      check();\n    }\n  });\n  log(\"info\", \"[HMR] Waiting for update signal from WDS...\");\n} else {}\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack/hot/dev-server.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var EventEmitter = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\nmodule.exports = new EventEmitter();\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack/hot/emitter.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/**\n * @param {(string | number)[]} updatedModules updated modules\n * @param {(string | number)[] | null} renewedModules renewed modules\n */\nmodule.exports = function (updatedModules, renewedModules) {\n  var unacceptedModules = updatedModules.filter(function (moduleId) {\n    return renewedModules && renewedModules.indexOf(moduleId) < 0;\n  });\n  var log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n  if (unacceptedModules.length > 0) {\n    log(\"warning\", \"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\");\n    unacceptedModules.forEach(function (moduleId) {\n      log(\"warning\", \"[HMR]  - \" + moduleId);\n    });\n  }\n  if (!renewedModules || renewedModules.length === 0) {\n    log(\"info\", \"[HMR] Nothing hot updated.\");\n  } else {\n    log(\"info\", \"[HMR] Updated modules:\");\n    renewedModules.forEach(function (moduleId) {\n      if (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n        var parts = moduleId.split(\"!\");\n        log.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n        log(\"info\", \"[HMR]  - \" + moduleId);\n        log.groupEnd(\"info\");\n      } else {\n        log(\"info\", \"[HMR]  - \" + moduleId);\n      }\n    });\n    var numberIds = renewedModules.every(function (moduleId) {\n      return typeof moduleId === \"number\";\n    });\n    if (numberIds) log(\"info\", '[HMR] Consider using the optimization.moduleIds: \"named\" for module names.');\n  }\n};\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\n\n/** @type {LogLevel} */\nvar logLevel = \"info\";\nfunction dummy() {}\n\n/**\n * @param {LogLevel} level log level\n * @returns {boolean} true, if should log\n */\nfunction shouldLog(level) {\n  var shouldLog = logLevel === \"info\" && level === \"info\" || [\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\" || [\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\";\n  return shouldLog;\n}\n\n/**\n * @param {(msg?: string) => void} logFn log function\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\n */\nfunction logGroup(logFn) {\n  return function (level, msg) {\n    if (shouldLog(level)) {\n      logFn(msg);\n    }\n  };\n}\n\n/**\n * @param {LogLevel} level log level\n * @param {string|Error} msg message\n */\nmodule.exports = function (level, msg) {\n  if (shouldLog(level)) {\n    if (level === \"info\") {\n      console.log(msg);\n    } else if (level === \"warning\") {\n      console.warn(msg);\n    } else if (level === \"error\") {\n      console.error(msg);\n    }\n  }\n};\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\nmodule.exports.group = logGroup(group);\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\nmodule.exports.groupEnd = logGroup(groupEnd);\n\n/**\n * @param {LogLevel} level log level\n */\nmodule.exports.setLogLevel = function (level) {\n  logLevel = level;\n};\n\n/**\n * @param {Error} err error\n * @returns {string} formatted error\n */\nmodule.exports.formatError = function (err) {\n  var message = err.message;\n  var stack = err.stack;\n  if (!stack) {\n    return message;\n  } else if (stack.indexOf(message) < 0) {\n    return message + \"\\n\" + stack;\n  }\n  return stack;\n};\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "./src/components/heading/heading.js":
/*!*******************************************!*\
  !*** ./src/components/heading/heading.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.scss */ \"./src/components/heading/heading.scss\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Heading = /*#__PURE__*/function () {\n  function Heading() {\n    _classCallCheck(this, Heading);\n  }\n  return _createClass(Heading, [{\n    key: \"render\",\n    value: function render(pageName) {\n      var h1 = document.createElement(\"h1\");\n      h1.textContent = \"webpack is awsome! this is \".concat(pageName, \" page\");\n      var body = document.querySelector(\"body\");\n      body.appendChild(h1);\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://webpack-tutorial/./src/components/heading/heading.js?");

/***/ }),

/***/ "./src/components/imageComponent/imageComponent.js":
/*!*********************************************************!*\
  !*** ./src/components/imageComponent/imageComponent.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _screenshot_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screenshot.png */ \"./src/components/imageComponent/screenshot.png\");\n/* harmony import */ var _altText_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./altText.txt */ \"./src/components/imageComponent/altText.txt\");\n/* harmony import */ var _imageComponent_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageComponent.scss */ \"./src/components/imageComponent/imageComponent.scss\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nvar ImageComponent = /*#__PURE__*/function () {\n  function ImageComponent() {\n    _classCallCheck(this, ImageComponent);\n  }\n  return _createClass(ImageComponent, [{\n    key: \"render\",\n    value: function render() {\n      var img = document.createElement(\"img\");\n      img.src = _screenshot_png__WEBPACK_IMPORTED_MODULE_0__;\n      img.alt = _altText_txt__WEBPACK_IMPORTED_MODULE_1__;\n      img.classList.add(\"image-component\");\n      var body = document.querySelector(\"body\");\n      body.appendChild(img);\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageComponent);\n\n//# sourceURL=webpack://webpack-tutorial/./src/components/imageComponent/imageComponent.js?");

/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/heading/heading.js */ \"./src/components/heading/heading.js\");\n/* harmony import */ var _components_imageComponent_imageComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/imageComponent/imageComponent.js */ \"./src/components/imageComponent/imageComponent.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar heading = new _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar image = new _components_imageComponent_imageComponent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nheading.render(\"image component\");\nimage.render();\n\n//# sourceURL=webpack://webpack-tutorial/./src/images.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/heading.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/heading.scss ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `h1 {\n  color: gray;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/components/heading/heading.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/imageComponent/imageComponent.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/imageComponent/imageComponent.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.image-component {\n  display: block;\n  width: 400px;\n  height: auto;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/components/imageComponent/imageComponent.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/heading/heading.scss":
/*!*********************************************!*\
  !*** ./src/components/heading/heading.scss ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./heading.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/heading.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./heading.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/heading.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./heading.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/heading.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/components/heading/heading.scss?");

/***/ }),

/***/ "./src/components/imageComponent/imageComponent.scss":
/*!***********************************************************!*\
  !*** ./src/components/imageComponent/imageComponent.scss ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./imageComponent.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/imageComponent/imageComponent.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./imageComponent.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/imageComponent/imageComponent.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./imageComponent.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/imageComponent/imageComponent.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageComponent_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/components/imageComponent/imageComponent.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/imageComponent/altText.txt":
/*!***************************************************!*\
  !*** ./src/components/imageComponent/altText.txt ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"alt text demo\";\n\n//# sourceURL=webpack://webpack-tutorial/./src/components/imageComponent/altText.txt?");

/***/ }),

/***/ "./src/components/imageComponent/screenshot.png":
/*!******************************************************!*\
  !*** ./src/components/imageComponent/screenshot.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b161a416c57e084182f9.png\";\n\n//# sourceURL=webpack://webpack-tutorial/./src/components/imageComponent/screenshot.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("image-component." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("843509c6370f230791fb")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack-tutorial:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"image-component": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewebpack_tutorial"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/images.js");
/******/ 	
/******/ })()
;