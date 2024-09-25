"use strict";
(() => {
  // node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global === "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/lodash-es/_root.js
  var freeSelf = typeof self === "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    const isOwn = hasOwnProperty.call(value, symToStringTag);
    const tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      const unmasked2 = true;
    } catch (e3) {
    }
    const result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value === "object";
  }
  var isObjectLike_default = isObjectLike;

  // node_modules/lodash-es/isSymbol.js
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value === "symbol" || isObjectLike_default(value) && baseGetTag_default(value) === symbolTag;
  }
  var isSymbol_default = isSymbol;

  // node_modules/lodash-es/_trimmedEndIndex.js
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    let index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var trimmedEndIndex_default = trimmedEndIndex;

  // node_modules/lodash-es/_baseTrim.js
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
  }
  var baseTrim_default = baseTrim;

  // node_modules/lodash-es/isObject.js
  function isObject(value) {
    const type = typeof value;
    return value != null && (type === "object" || type === "function");
  }
  var isObject_default = isObject;

  // node_modules/lodash-es/toNumber.js
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = Number.parseInt;
  function toNumber(value) {
    if (typeof value === "number") {
      return value;
    }
    if (isSymbol_default(value)) {
      return NAN;
    }
    if (isObject_default(value)) {
      const other = typeof value.valueOf === "function" ? value.valueOf() : value;
      value = isObject_default(other) ? `${other}` : other;
    }
    if (typeof value !== "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim_default(value);
    const isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_default = toNumber;

  // node_modules/lodash-es/now.js
  var now = () => root_default.Date.now();
  var now_default = now;

  // node_modules/lodash-es/debounce.js
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max;
  var nativeMin = Math.min;
  function debounce(func, wait, options) {
    let lastArgs;
    let lastThis;
    let maxWait;
    let result;
    let timerId;
    let lastCallTime;
    let lastInvokeTime = 0;
    let leading = false;
    let maxing = false;
    let trailing = true;
    if (typeof func !== "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber_default(wait) || 0;
    if (isObject_default(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber_default(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      const args = lastArgs;
      const thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      const timeSinceLastCall = time - lastCallTime;
      const timeSinceLastInvoke = time - lastInvokeTime;
      const timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      const timeSinceLastCall = time - lastCallTime;
      const timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      const time = now_default();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now_default());
    }
    function debounced() {
      const time = now_default();
      const isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_default = debounce;

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c;
  var s;
  var a;
  var h = {};
  var p = [];
  var v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function d(n2, l5) {
    for (var u6 in l5) n2[u6] = l5[u6];
    return n2;
  }
  function w(n2) {
    var l5 = n2.parentNode;
    l5 && l5.removeChild(n2);
  }
  function _(l5, u6, t3) {
    var i7, o4, r4, f5 = {};
    for (r4 in u6) "key" == r4 ? i7 = u6[r4] : "ref" == r4 ? o4 = u6[r4] : f5[r4] = u6[r4];
    if (arguments.length > 2 && (f5.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l5 && null != l5.defaultProps) for (r4 in l5.defaultProps) void 0 === f5[r4] && (f5[r4] = l5.defaultProps[r4]);
    return g(l5, f5, i7, o4, null);
  }
  function g(n2, t3, i7, o4, r4) {
    var f5 = { type: n2, props: t3, key: i7, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r4 ? ++u : r4, __i: -1, __u: 0 };
    return null == r4 && null != l.vnode && l.vnode(f5), f5;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l5) {
    this.props = n2, this.context = l5;
  }
  function x(n2, l5) {
    if (null == l5) return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u6; l5 < n2.__k.length; l5++) if (null != (u6 = n2.__k[l5]) && null != u6.__e) return u6.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l5, u6;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l5 = 0; l5 < n2.__k.length; l5++) if (null != (u6 = n2.__k[l5]) && null != u6.__e) {
        n2.__e = n2.__c.base = u6.__e;
        break;
      }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
  }
  function P() {
    var n2, u6, t3, o4, r4, e3, c5, s5;
    for (i.sort(f); n2 = i.shift(); ) n2.__d && (u6 = i.length, o4 = void 0, e3 = (r4 = (t3 = n2).__v).__e, c5 = [], s5 = [], t3.__P && ((o4 = d({}, r4)).__v = r4.__v + 1, l.vnode && l.vnode(o4), O(t3.__P, o4, r4, t3.__n, t3.__P.namespaceURI, 32 & r4.__u ? [e3] : null, c5, null == e3 ? x(r4) : e3, !!(32 & r4.__u), s5), o4.__v = r4.__v, o4.__.__k[o4.__i] = o4, j(c5, o4, s5), o4.__e != e3 && C(o4)), i.length > u6 && i.sort(f));
    P.__r = 0;
  }
  function S(n2, l5, u6, t3, i7, o4, r4, f5, e3, c5, s5) {
    var a5, v4, y4, d4, w4, _2 = t3 && t3.__k || p, g2 = l5.length;
    for (u6.__d = e3, $(u6, l5, _2), e3 = u6.__d, a5 = 0; a5 < g2; a5++) null != (y4 = u6.__k[a5]) && "boolean" != typeof y4 && "function" != typeof y4 && (v4 = -1 === y4.__i ? h : _2[y4.__i] || h, y4.__i = a5, O(n2, y4, v4, i7, o4, r4, f5, e3, c5, s5), d4 = y4.__e, y4.ref && v4.ref != y4.ref && (v4.ref && N(v4.ref, null, y4), s5.push(y4.ref, y4.__c || d4, y4)), null == w4 && null != d4 && (w4 = d4), 65536 & y4.__u || v4.__k === y4.__k ? e3 = I(y4, e3, n2) : "function" == typeof y4.type && void 0 !== y4.__d ? e3 = y4.__d : d4 && (e3 = d4.nextSibling), y4.__d = void 0, y4.__u &= -196609);
    u6.__d = e3, u6.__e = w4;
  }
  function $(n2, l5, u6) {
    var t3, i7, o4, r4, f5, e3 = l5.length, c5 = u6.length, s5 = c5, a5 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++) r4 = t3 + a5, null != (i7 = n2.__k[t3] = null == (i7 = l5[t3]) || "boolean" == typeof i7 || "function" == typeof i7 ? null : "string" == typeof i7 || "number" == typeof i7 || "bigint" == typeof i7 || i7.constructor == String ? g(null, i7, null, null, null) : y(i7) ? g(k, { children: i7 }, null, null, null) : void 0 === i7.constructor && i7.__b > 0 ? g(i7.type, i7.props, i7.key, i7.ref ? i7.ref : null, i7.__v) : i7) ? (i7.__ = n2, i7.__b = n2.__b + 1, f5 = L(i7, u6, r4, s5), i7.__i = f5, o4 = null, -1 !== f5 && (s5--, (o4 = u6[f5]) && (o4.__u |= 131072)), null == o4 || null === o4.__v ? (-1 == f5 && a5--, "function" != typeof i7.type && (i7.__u |= 65536)) : f5 !== r4 && (f5 == r4 - 1 ? a5-- : f5 == r4 + 1 ? a5++ : f5 > r4 ? s5 > e3 - r4 ? a5 += f5 - r4 : a5-- : f5 < r4 && (f5 == r4 - a5 ? a5 -= f5 - r4 : a5++), f5 !== t3 + a5 && (i7.__u |= 65536))) : (o4 = u6[r4]) && null == o4.key && o4.__e && 0 == (131072 & o4.__u) && (o4.__e == n2.__d && (n2.__d = x(o4)), V(o4, o4, false), u6[r4] = null, s5--);
    if (s5) for (t3 = 0; t3 < c5; t3++) null != (o4 = u6[t3]) && 0 == (131072 & o4.__u) && (o4.__e == n2.__d && (n2.__d = x(o4)), V(o4, o4));
  }
  function I(n2, l5, u6) {
    var t3, i7;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i7 = 0; t3 && i7 < t3.length; i7++) t3[i7] && (t3[i7].__ = n2, l5 = I(t3[i7], l5, u6));
      return l5;
    }
    n2.__e != l5 && (l5 && n2.type && !u6.contains(l5) && (l5 = x(n2)), u6.insertBefore(n2.__e, l5 || null), l5 = n2.__e);
    do {
      l5 = l5 && l5.nextSibling;
    } while (null != l5 && 8 === l5.nodeType);
    return l5;
  }
  function L(n2, l5, u6, t3) {
    var i7 = n2.key, o4 = n2.type, r4 = u6 - 1, f5 = u6 + 1, e3 = l5[u6];
    if (null === e3 || e3 && i7 == e3.key && o4 === e3.type && 0 == (131072 & e3.__u)) return u6;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0)) for (; r4 >= 0 || f5 < l5.length; ) {
      if (r4 >= 0) {
        if ((e3 = l5[r4]) && 0 == (131072 & e3.__u) && i7 == e3.key && o4 === e3.type) return r4;
        r4--;
      }
      if (f5 < l5.length) {
        if ((e3 = l5[f5]) && 0 == (131072 & e3.__u) && i7 == e3.key && o4 === e3.type) return f5;
        f5++;
      }
    }
    return -1;
  }
  function T(n2, l5, u6) {
    "-" === l5[0] ? n2.setProperty(l5, null == u6 ? "" : u6) : n2[l5] = null == u6 ? "" : "number" != typeof u6 || v.test(l5) ? u6 : u6 + "px";
  }
  function A(n2, l5, u6, t3, i7) {
    var o4;
    n: if ("style" === l5) if ("string" == typeof u6) n2.style.cssText = u6;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l5 in t3) u6 && l5 in u6 || T(n2.style, l5, "");
      if (u6) for (l5 in u6) t3 && u6[l5] === t3[l5] || T(n2.style, l5, u6[l5]);
    }
    else if ("o" === l5[0] && "n" === l5[1]) o4 = l5 !== (l5 = l5.replace(/(PointerCapture)$|Capture$/i, "$1")), l5 = l5.toLowerCase() in n2 || "onFocusOut" === l5 || "onFocusIn" === l5 ? l5.toLowerCase().slice(2) : l5.slice(2), n2.l || (n2.l = {}), n2.l[l5 + o4] = u6, u6 ? t3 ? u6.u = t3.u : (u6.u = e, n2.addEventListener(l5, o4 ? s : c, o4)) : n2.removeEventListener(l5, o4 ? s : c, o4);
    else {
      if ("http://www.w3.org/2000/svg" == i7) l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l5 && "height" != l5 && "href" != l5 && "list" != l5 && "form" != l5 && "tabIndex" != l5 && "download" != l5 && "rowSpan" != l5 && "colSpan" != l5 && "role" != l5 && "popover" != l5 && l5 in n2) try {
        n2[l5] = null == u6 ? "" : u6;
        break n;
      } catch (n3) {
      }
      "function" == typeof u6 || (null == u6 || false === u6 && "-" !== l5[4] ? n2.removeAttribute(l5) : n2.setAttribute(l5, "popover" == l5 && 1 == u6 ? "" : u6));
    }
  }
  function F(n2) {
    return function(u6) {
      if (this.l) {
        var t3 = this.l[u6.type + n2];
        if (null == u6.t) u6.t = e++;
        else if (u6.t < t3.u) return;
        return t3(l.event ? l.event(u6) : u6);
      }
    };
  }
  function O(n2, u6, t3, i7, o4, r4, f5, e3, c5, s5) {
    var a5, h3, p5, v4, w4, _2, g2, m3, x2, C3, M2, P2, $3, I2, H, L2, T3 = u6.type;
    if (void 0 !== u6.constructor) return null;
    128 & t3.__u && (c5 = !!(32 & t3.__u), r4 = [e3 = u6.__e = t3.__e]), (a5 = l.__b) && a5(u6);
    n: if ("function" == typeof T3) try {
      if (m3 = u6.props, x2 = "prototype" in T3 && T3.prototype.render, C3 = (a5 = T3.contextType) && i7[a5.__c], M2 = a5 ? C3 ? C3.props.value : a5.__ : i7, t3.__c ? g2 = (h3 = u6.__c = t3.__c).__ = h3.__E : (x2 ? u6.__c = h3 = new T3(m3, M2) : (u6.__c = h3 = new b(m3, M2), h3.constructor = T3, h3.render = q), C3 && C3.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i7, p5 = h3.__d = true, h3.__h = [], h3._sb = []), x2 && null == h3.__s && (h3.__s = h3.state), x2 && null != T3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T3.getDerivedStateFromProps(m3, h3.__s))), v4 = h3.props, w4 = h3.state, h3.__v = u6, p5) x2 && null == T3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (x2 && null == T3.getDerivedStateFromProps && m3 !== v4 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m3, M2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m3, h3.__s, M2) || u6.__v === t3.__v)) {
          for (u6.__v !== t3.__v && (h3.props = m3, h3.state = h3.__s, h3.__d = false), u6.__e = t3.__e, u6.__k = t3.__k, u6.__k.forEach(function(n3) {
            n3 && (n3.__ = u6);
          }), P2 = 0; P2 < h3._sb.length; P2++) h3.__h.push(h3._sb[P2]);
          h3._sb = [], h3.__h.length && f5.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(m3, h3.__s, M2), x2 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(v4, w4, _2);
        });
      }
      if (h3.context = M2, h3.props = m3, h3.__P = n2, h3.__e = false, $3 = l.__r, I2 = 0, x2) {
        for (h3.state = h3.__s, h3.__d = false, $3 && $3(u6), a5 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++) h3.__h.push(h3._sb[H]);
        h3._sb = [];
      } else do {
        h3.__d = false, $3 && $3(u6), a5 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++I2 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i7 = d(d({}, i7), h3.getChildContext())), x2 && !p5 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(v4, w4)), S(n2, y(L2 = null != a5 && a5.type === k && null == a5.key ? a5.props.children : a5) ? L2 : [L2], u6, t3, i7, o4, r4, f5, e3, c5, s5), h3.base = u6.__e, u6.__u &= -161, h3.__h.length && f5.push(h3), g2 && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (u6.__v = null, c5 || null != r4) {
        for (u6.__u |= c5 ? 160 : 32; e3 && 8 === e3.nodeType && e3.nextSibling; ) e3 = e3.nextSibling;
        r4[r4.indexOf(e3)] = null, u6.__e = e3;
      } else u6.__e = t3.__e, u6.__k = t3.__k;
      l.__e(n3, u6, t3);
    }
    else null == r4 && u6.__v === t3.__v ? (u6.__k = t3.__k, u6.__e = t3.__e) : u6.__e = z(t3.__e, u6, t3, i7, o4, r4, f5, c5, s5);
    (a5 = l.diffed) && a5(u6);
  }
  function j(n2, u6, t3) {
    u6.__d = void 0;
    for (var i7 = 0; i7 < t3.length; i7++) N(t3[i7], t3[++i7], t3[++i7]);
    l.__c && l.__c(u6, n2), n2.some(function(u7) {
      try {
        n2 = u7.__h, u7.__h = [], n2.some(function(n3) {
          n3.call(u7);
        });
      } catch (n3) {
        l.__e(n3, u7.__v);
      }
    });
  }
  function z(l5, u6, t3, i7, o4, r4, f5, e3, c5) {
    var s5, a5, p5, v4, d4, _2, g2, m3 = t3.props, k3 = u6.props, b3 = u6.type;
    if ("svg" === b3 ? o4 = "http://www.w3.org/2000/svg" : "math" === b3 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != r4) {
      for (s5 = 0; s5 < r4.length; s5++) if ((d4 = r4[s5]) && "setAttribute" in d4 == !!b3 && (b3 ? d4.localName === b3 : 3 === d4.nodeType)) {
        l5 = d4, r4[s5] = null;
        break;
      }
    }
    if (null == l5) {
      if (null === b3) return document.createTextNode(k3);
      l5 = document.createElementNS(o4, b3, k3.is && k3), r4 = null, e3 = false;
    }
    if (null === b3) m3 === k3 || e3 && l5.data === k3 || (l5.data = k3);
    else {
      if (r4 = r4 && n.call(l5.childNodes), m3 = t3.props || h, !e3 && null != r4) for (m3 = {}, s5 = 0; s5 < l5.attributes.length; s5++) m3[(d4 = l5.attributes[s5]).name] = d4.value;
      for (s5 in m3) if (d4 = m3[s5], "children" == s5) ;
      else if ("dangerouslySetInnerHTML" == s5) p5 = d4;
      else if ("key" !== s5 && !(s5 in k3)) {
        if ("value" == s5 && "defaultValue" in k3 || "checked" == s5 && "defaultChecked" in k3) continue;
        A(l5, s5, null, d4, o4);
      }
      for (s5 in k3) d4 = k3[s5], "children" == s5 ? v4 = d4 : "dangerouslySetInnerHTML" == s5 ? a5 = d4 : "value" == s5 ? _2 = d4 : "checked" == s5 ? g2 = d4 : "key" === s5 || e3 && "function" != typeof d4 || m3[s5] === d4 || A(l5, s5, d4, m3[s5], o4);
      if (a5) e3 || p5 && (a5.__html === p5.__html || a5.__html === l5.innerHTML) || (l5.innerHTML = a5.__html), u6.__k = [];
      else if (p5 && (l5.innerHTML = ""), S(l5, y(v4) ? v4 : [v4], u6, t3, i7, "foreignObject" === b3 ? "http://www.w3.org/1999/xhtml" : o4, r4, f5, r4 ? r4[0] : t3.__k && x(t3, 0), e3, c5), null != r4) for (s5 = r4.length; s5--; ) null != r4[s5] && w(r4[s5]);
      e3 || (s5 = "value", void 0 !== _2 && (_2 !== l5[s5] || "progress" === b3 && !_2 || "option" === b3 && _2 !== m3[s5]) && A(l5, s5, _2, m3[s5], o4), s5 = "checked", void 0 !== g2 && g2 !== l5[s5] && A(l5, s5, g2, m3[s5], o4));
    }
    return l5;
  }
  function N(n2, u6, t3) {
    try {
      if ("function" == typeof n2) {
        var i7 = "function" == typeof n2.__u;
        i7 && n2.__u(), i7 && null == u6 || (n2.__u = n2(u6));
      } else n2.current = u6;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function V(n2, u6, t3) {
    var i7, o4;
    if (l.unmount && l.unmount(n2), (i7 = n2.ref) && (i7.current && i7.current !== n2.__e || N(i7, null, u6)), null != (i7 = n2.__c)) {
      if (i7.componentWillUnmount) try {
        i7.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u6);
      }
      i7.base = i7.__P = null;
    }
    if (i7 = n2.__k) for (o4 = 0; o4 < i7.length; o4++) i7[o4] && V(i7[o4], u6, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l5, u6) {
    return this.constructor(n2, u6);
  }
  function B(u6, t3, i7) {
    var o4, r4, f5, e3;
    l.__ && l.__(u6, t3), r4 = (o4 = "function" == typeof i7) ? null : i7 && i7.__k || t3.__k, f5 = [], e3 = [], O(t3, u6 = (!o4 && i7 || t3).__k = _(k, null, [u6]), r4 || h, h, t3.namespaceURI, !o4 && i7 ? [i7] : r4 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f5, !o4 && i7 ? i7 : r4 ? r4.__e : t3.firstChild, o4, e3), j(f5, u6, e3);
  }
  function D(n2, l5) {
    B(n2, l5, D);
  }
  function E(l5, u6, t3) {
    var i7, o4, r4, f5, e3 = d({}, l5.props);
    for (r4 in l5.type && l5.type.defaultProps && (f5 = l5.type.defaultProps), u6) "key" == r4 ? i7 = u6[r4] : "ref" == r4 ? o4 = u6[r4] : e3[r4] = void 0 === u6[r4] && void 0 !== f5 ? f5[r4] : u6[r4];
    return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), g(l5.type, e3, i7 || l5.key, o4 || l5.ref, null);
  }
  n = p.slice, l = { __e: function(n2, l5, u6, t3) {
    for (var i7, o4, r4; l5 = l5.__; ) if ((i7 = l5.__c) && !i7.__) try {
      if ((o4 = i7.constructor) && null != o4.getDerivedStateFromError && (i7.setState(o4.getDerivedStateFromError(n2)), r4 = i7.__d), null != i7.componentDidCatch && (i7.componentDidCatch(n2, t3 || {}), r4 = i7.__d), r4) return i7.__E = i7;
    } catch (l6) {
      n2 = l6;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, b.prototype.setState = function(n2, l5) {
    var u6;
    u6 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u6), this.props)), n2 && d(u6, n2), null != n2 && this.__v && (l5 && this._sb.push(l5), M(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l5) {
    return n2.__v.__b - l5.__v.__b;
  }, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

  // node_modules/preact/devtools/dist/devtools.module.js
  var i2;
  null != (i2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0) && i2.__PREACT_DEVTOOLS__ && i2.__PREACT_DEVTOOLS__.attachPreact("10.23.2", l, { Fragment: k, Component: b });

  // node_modules/preact/debug/dist/debug.module.js
  var o2 = {};
  function a2(e3) {
    return e3.type === k ? "Fragment" : "function" == typeof e3.type ? e3.type.displayName || e3.type.name : "string" == typeof e3.type ? e3.type : "#text";
  }
  var i3 = [];
  var s2 = [];
  function c2() {
    return i3.length > 0 ? i3[i3.length - 1] : null;
  }
  var l2 = true;
  function u2(e3) {
    return "function" == typeof e3.type && e3.type != k;
  }
  function f2(n2) {
    for (var e3 = [n2], t3 = n2; null != t3.__o; ) e3.push(t3.__o), t3 = t3.__o;
    return e3.reduce(function(n3, e4) {
      n3 += "  in " + a2(e4);
      var t4 = e4.__source;
      return t4 ? n3 += " (at " + t4.fileName + ":" + t4.lineNumber + ")" : l2 && console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons."), l2 = false, n3 + "\n";
    }, "");
  }
  var p2 = "function" == typeof WeakMap;
  function d2(n2) {
    var e3 = [];
    return n2.__k ? (n2.__k.forEach(function(n3) {
      n3 && "function" == typeof n3.type ? e3.push.apply(e3, d2(n3)) : n3 && "string" == typeof n3.type && e3.push(n3.type);
    }), e3) : e3;
  }
  function h2(n2) {
    return n2 ? "function" == typeof n2.type ? null == n2.__ ? null != n2.__e && null != n2.__e.parentNode ? n2.__e.parentNode.localName : "" : h2(n2.__) : n2.type : "";
  }
  var v2 = b.prototype.setState;
  function y2(n2) {
    return "table" === n2 || "tfoot" === n2 || "tbody" === n2 || "thead" === n2 || "td" === n2 || "tr" === n2 || "th" === n2;
  }
  b.prototype.setState = function(n2, e3) {
    return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f2(c2())), v2.call(this, n2, e3);
  };
  var m = /^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/;
  var b2 = b.prototype.forceUpdate;
  function w2(n2) {
    var e3 = n2.props, t3 = a2(n2), o4 = "";
    for (var r4 in e3) if (e3.hasOwnProperty(r4) && "children" !== r4) {
      var i7 = e3[r4];
      "function" == typeof i7 && (i7 = "function " + (i7.displayName || i7.name) + "() {}"), i7 = Object(i7) !== i7 || i7.toString ? i7 + "" : Object.prototype.toString.call(i7), o4 += " " + r4 + "=" + JSON.stringify(i7);
    }
    var s5 = e3.children;
    return "<" + t3 + o4 + (s5 && s5.length ? ">..</" + t3 + ">" : " />");
  }
  b.prototype.forceUpdate = function(n2) {
    return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f2(c2())) : null == this.__P && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f2(this.__v)), b2.call(this, n2);
  }, function() {
    !function() {
      var n3 = l.__b, t4 = l.diffed, o4 = l.__, r5 = l.vnode, a5 = l.__r;
      l.diffed = function(n4) {
        u2(n4) && s2.pop(), i3.pop(), t4 && t4(n4);
      }, l.__b = function(e3) {
        u2(e3) && i3.push(e3), n3 && n3(e3);
      }, l.__ = function(n4, e3) {
        s2 = [], o4 && o4(n4, e3);
      }, l.vnode = function(n4) {
        n4.__o = s2.length > 0 ? s2[s2.length - 1] : null, r5 && r5(n4);
      }, l.__r = function(n4) {
        u2(n4) && s2.push(n4), a5 && a5(n4);
      };
    }();
    var n2 = false, t3 = l.__b, r4 = l.diffed, c5 = l.vnode, l5 = l.__r, v4 = l.__e, b3 = l.__, g2 = l.__h, E2 = p2 ? { useEffect: /* @__PURE__ */ new WeakMap(), useLayoutEffect: /* @__PURE__ */ new WeakMap(), lazyPropTypes: /* @__PURE__ */ new WeakMap() } : null, k3 = [];
    l.__e = function(n3, e3, t4, o4) {
      if (e3 && e3.__c && "function" == typeof n3.then) {
        var r5 = n3;
        n3 = new Error("Missing Suspense. The throwing component was: " + a2(e3));
        for (var i7 = e3; i7; i7 = i7.__) if (i7.__c && i7.__c.__c) {
          n3 = r5;
          break;
        }
        if (n3 instanceof Error) throw n3;
      }
      try {
        (o4 = o4 || {}).componentStack = f2(e3), v4(n3, e3, t4, o4), "function" != typeof n3.then && setTimeout(function() {
          throw n3;
        });
      } catch (n4) {
        throw n4;
      }
    }, l.__ = function(n3, e3) {
      if (!e3) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
      var t4;
      switch (e3.nodeType) {
        case 1:
        case 11:
        case 9:
          t4 = true;
          break;
        default:
          t4 = false;
      }
      if (!t4) {
        var o4 = a2(n3);
        throw new Error("Expected a valid HTML node as a second argument to render.	Received " + e3 + " instead: render(<" + o4 + " />, " + e3 + ");");
      }
      b3 && b3(n3, e3);
    }, l.__b = function(e3) {
      var r5 = e3.type;
      if (n2 = true, void 0 === r5) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + w2(e3) + "\n\n" + f2(e3));
      if (null != r5 && "object" == typeof r5) {
        if (void 0 !== r5.__k && void 0 !== r5.__e) throw new Error("Invalid type passed to createElement(): " + r5 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a2(e3) + " = " + w2(r5) + ";\n  let vnode = <My" + a2(e3) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f2(e3));
        throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r5) ? "array" : r5));
      }
      if (void 0 !== e3.ref && "function" != typeof e3.ref && "object" != typeof e3.ref && !("$$typeof" in e3)) throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof e3.ref + "] instead\n" + w2(e3) + "\n\n" + f2(e3));
      if ("string" == typeof e3.type) {
        for (var i7 in e3.props) if ("o" === i7[0] && "n" === i7[1] && "function" != typeof e3.props[i7] && null != e3.props[i7]) throw new Error(`Component's "` + i7 + '" property should be a function, but got [' + typeof e3.props[i7] + "] instead\n" + w2(e3) + "\n\n" + f2(e3));
      }
      if ("function" == typeof e3.type && e3.type.propTypes) {
        if ("Lazy" === e3.type.displayName && E2 && !E2.lazyPropTypes.has(e3.type)) {
          var s5 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
          try {
            var c6 = e3.type();
            E2.lazyPropTypes.set(e3.type, true), console.warn(s5 + "Component wrapped in lazy() is " + a2(c6));
          } catch (n3) {
            console.warn(s5 + "We will log the wrapped component's name once it is loaded.");
          }
        }
        var l6 = e3.props;
        e3.type.__f && delete (l6 = function(n3, e4) {
          for (var t4 in e4) n3[t4] = e4[t4];
          return n3;
        }({}, l6)).ref, function(n3, e4, t4, r6, a5) {
          Object.keys(n3).forEach(function(t5) {
            var i8;
            try {
              i8 = n3[t5](e4, t5, r6, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (n4) {
              i8 = n4;
            }
            i8 && !(i8.message in o2) && (o2[i8.message] = true, console.error("Failed prop type: " + i8.message + (a5 && "\n" + a5() || "")));
          });
        }(e3.type.propTypes, l6, 0, a2(e3), function() {
          return f2(e3);
        });
      }
      t3 && t3(e3);
    };
    var _2, T3 = 0;
    l.__r = function(e3) {
      l5 && l5(e3), n2 = true;
      var t4 = e3.__c;
      if (t4 === _2 ? T3++ : T3 = 1, T3 >= 25) throw new Error("Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: " + a2(e3));
      _2 = t4;
    }, l.__h = function(e3, t4, o4) {
      if (!e3 || !n2) throw new Error("Hook can only be invoked from render methods.");
      g2 && g2(e3, t4, o4);
    };
    var I2 = function(n3, e3) {
      return { get: function() {
        var t4 = "get" + n3 + e3;
        k3 && k3.indexOf(t4) < 0 && (k3.push(t4), console.warn("getting vnode." + n3 + " is deprecated, " + e3));
      }, set: function() {
        var t4 = "set" + n3 + e3;
        k3 && k3.indexOf(t4) < 0 && (k3.push(t4), console.warn("setting vnode." + n3 + " is not allowed, " + e3));
      } };
    }, j3 = { nodeName: I2("nodeName", "use vnode.type"), attributes: I2("attributes", "use vnode.props"), children: I2("children", "use vnode.props.children") }, O2 = Object.create({}, j3);
    l.vnode = function(n3) {
      var e3 = n3.props;
      if (null !== n3.type && null != e3 && ("__source" in e3 || "__self" in e3)) {
        var t4 = n3.props = {};
        for (var o4 in e3) {
          var r5 = e3[o4];
          "__source" === o4 ? n3.__source = r5 : "__self" === o4 ? n3.__self = r5 : t4[o4] = r5;
        }
      }
      n3.__proto__ = O2, c5 && c5(n3);
    }, l.diffed = function(e3) {
      var t4, o4 = e3.type, i7 = e3.__;
      if (e3.__k && e3.__k.forEach(function(n3) {
        if ("object" == typeof n3 && n3 && void 0 === n3.type) {
          var t5 = Object.keys(n3).join(",");
          throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t5 + "}.\n\n" + f2(e3));
        }
      }), e3.__c === _2 && (T3 = 0), "string" == typeof o4 && (y2(o4) || "p" === o4 || "a" === o4 || "button" === o4)) {
        var s5 = h2(i7);
        if ("" !== s5 && y2(o4)) "table" === o4 && "td" !== s5 && y2(s5) ? (console.log(s5, i7.__e), console.error("Improper nesting of table. Your <table> should not have a table-node parent." + w2(e3) + "\n\n" + f2(e3))) : "thead" !== o4 && "tfoot" !== o4 && "tbody" !== o4 || "table" === s5 ? "tr" === o4 && "thead" !== s5 && "tfoot" !== s5 && "tbody" !== s5 ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent." + w2(e3) + "\n\n" + f2(e3)) : "td" === o4 && "tr" !== s5 ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + w2(e3) + "\n\n" + f2(e3)) : "th" === o4 && "tr" !== s5 && console.error("Improper nesting of table. Your <th> should have a <tr>." + w2(e3) + "\n\n" + f2(e3)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + w2(e3) + "\n\n" + f2(e3));
        else if ("p" === o4) {
          var c6 = d2(e3).filter(function(n3) {
            return m.test(n3);
          });
          c6.length && console.error("Improper nesting of paragraph. Your <p> should not have " + c6.join(", ") + "as child-elements." + w2(e3) + "\n\n" + f2(e3));
        } else "a" !== o4 && "button" !== o4 || -1 !== d2(e3).indexOf(o4) && console.error("Improper nesting of interactive content. Your <" + o4 + "> should not have other " + ("a" === o4 ? "anchor" : "button") + " tags as child-elements." + w2(e3) + "\n\n" + f2(e3));
      }
      if (n2 = false, r4 && r4(e3), null != e3.__k) for (var l6 = [], u6 = 0; u6 < e3.__k.length; u6++) {
        var p5 = e3.__k[u6];
        if (p5 && null != p5.key) {
          var v5 = p5.key;
          if (-1 !== l6.indexOf(v5)) {
            console.error('Following component has two or more children with the same key attribute: "' + v5 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + w2(e3) + "\n\n" + f2(e3));
            break;
          }
          l6.push(v5);
        }
      }
      if (null != e3.__c && null != e3.__c.__H) {
        var b4 = e3.__c.__H.__;
        if (b4) for (var g3 = 0; g3 < b4.length; g3 += 1) {
          var E3 = b4[g3];
          if (E3.__H) {
            for (var k4 = 0; k4 < E3.__H.length; k4++) if ((t4 = E3.__H[k4]) != t4) {
              var I3 = a2(e3);
              throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + g3 + " in component " + I3 + " was called with NaN.");
            }
          }
        }
      }
    };
  }();

  // packages/graph/src/auxiliar.ts
  var Map2 = class {
    #map = /* @__PURE__ */ new Map();
    set(k1, k22, v4) {
      let m22 = this.#map.get(k1);
      if (!m22) {
        m22 = /* @__PURE__ */ new Map();
        this.#map.set(k1, m22);
      }
      m22.set(k22, v4);
      return this;
    }
    get(k1, k22) {
      const m22 = this.#map.get(k1);
      if (!m22) return void 0;
      return m22.get(k22);
    }
    getMap(k1) {
      return this.#map.get(k1);
    }
    get size() {
      let size2 = 0;
      for (const [_2, map] of this.#map) size2 += map.size;
      return size2;
    }
    /** Returns an iterator of the keys in the first dimension. */
    keys() {
      return this.#map.keys();
    }
    values() {
      let values = [];
      for (const [_2, map] of this.#map) {
        values = values.concat([...map.values()]);
      }
      return values;
    }
    has(k1, k22) {
      const m22 = this.#map.get(k1);
      if (!m22) return false;
      return m22.has(k22);
    }
  };
  var IterTap = class {
    array;
    constructor(iterable) {
      this.array = Array.isArray(iterable) ? iterable : iterable ? [...iterable] : void 0;
    }
    get first() {
      return this.array ? this.array[0] : void 0;
    }
    map(callback) {
      return this.array ? this.array.map(callback) : [];
    }
    sort() {
      return this.array ? [...this.array].sort() : [];
    }
    join(str) {
      return this.array ? this.array.join(str) : "";
    }
    get isEmpty() {
      return this.array ? this.array.length === 0 : true;
    }
    includes(val) {
      return this.array ? this.array.includes(val) : false;
    }
    some(predicate) {
      return this.array ? this.array.some(predicate) : false;
    }
    find(predicate) {
      return this.array?.find(predicate);
    }
    get size() {
      return this.array ? this.array.length : 0;
    }
    tap(callback) {
      if (this.array && this.array.length > 0) return callback(this.array);
    }
    [Symbol.iterator]() {
      return this.array ? this.array[Symbol.iterator]() : [].values();
    }
  };
  var MapTap = class _MapTap {
    constructor(map) {
      this.map = map;
    }
    get size() {
      return this.map ? this.map.size : 0;
    }
    has(val) {
      return this.map ? this.map.has(val) : false;
    }
    tap(callback) {
      if (this.map && this.map.size > 0) return callback(this);
    }
    get keys() {
      return new IterTap(this.map?.keys());
    }
    get values() {
      return new IterTap(this.map?.values());
    }
    get entries() {
      return new IterTap(this.map?.entries());
    }
    merge(other) {
      if (other && this.map) for (const [key, value] of other) this.map.set(key, value);
      return this;
    }
    /** Create a new map wrapped in MapTap from the entries of this one. */
    toMapTap(callback) {
      const tap = new _MapTap(/* @__PURE__ */ new Map());
      for (const [key, value] of this.entries) callback(tap, key, value);
      return tap;
    }
    [Symbol.iterator]() {
      return this.map ? this.map[Symbol.iterator]() : [].values();
    }
  };
  var Filter = class {
    constructor(mode = "all", values = /* @__PURE__ */ new Set()) {
      this.mode = mode;
      this.values = values;
    }
    matches(predicate) {
      return this.mode === "all" ? this.all(predicate) : this.any(predicate);
    }
    all(predicate) {
      if (this.values.size === 0) return true;
      for (const v4 of this.values) if (!predicate(v4)) return false;
      return true;
    }
    any(predicate) {
      if (this.values.size === 0) return true;
      for (const v4 of this.values) if (predicate(v4)) return true;
      return false;
    }
  };
  function arrayMerge(target, newData, similar = (l1, l22) => l1 === l22, onDuplicate) {
    for (const newElem of newData) {
      const prevElem = target.find((elem2) => similar(elem2, newElem));
      if (prevElem) {
        onDuplicate?.(prevElem, newElem);
      } else {
        target.push(newElem);
      }
    }
  }

  // packages/graph/src/index.ts
  var Node = class {
    constructor(graph, key) {
      this.graph = graph;
      this.key = key;
    }
    data = {};
    /** Shallow merge data. */
    merge(data) {
      Object.assign(this.data, data);
      return this;
    }
    /** The key without the node kind prefix. */
    get plainKey() {
      return this.key.replace(/^[a-z]+[+]/, "");
    }
    /** The first letter of the key, or "_" if it starts with a non-letter. */
    get keyPrefix() {
      const pk = this.plainKey;
      return /^[a-z]/.test(pk) ? pk[0] : "_";
    }
  };
  var Edge = class {
    constructor(graph, from, to) {
      this.graph = graph;
      this.from = from;
      this.to = to;
    }
    data = {};
    /** Shallow merge data. */
    merge(data) {
      Object.assign(this.data, data);
      return this;
    }
    get key() {
      return `${this.kind}~${this.from}~${this.to}`;
    }
  };
  var NodeMap = class {
    constructor(factory) {
      this.factory = factory;
    }
    #map = /* @__PURE__ */ new Map();
    get(key) {
      return key ? this.#map.get(key) : void 0;
    }
    get size() {
      return this.#map.size;
    }
    keys() {
      return this.#map.keys();
    }
    set(key, data = {}) {
      let n2 = this.#map.get(key);
      if (n2 === void 0) {
        n2 = this.factory(key);
        this.#map.set(key, n2);
      }
      return n2.merge(data);
    }
    has(key) {
      return this.#map.has(key);
    }
    get values() {
      return new IterTap(this.#map.values());
    }
    *findAll(predicate) {
      for (const node of this.#map.values()) if (predicate(node)) yield node;
    }
    [Symbol.iterator](n2) {
      return this.#map[Symbol.iterator]();
    }
    batch(maxEntries) {
      return Array.from(this.#map).slice(0, maxEntries);
    }
  };
  var EdgeMap = class {
    constructor(factory) {
      this.factory = factory;
    }
    adjFrom = new Map2();
    adjTo = new Map2();
    connect(from, to) {
      let edge = this.adjFrom.get(from, to);
      if (edge) return edge;
      edge = this.factory(from, to);
      this.adjFrom.set(from, to, edge);
      this.adjTo.set(to, from, edge);
      return edge;
    }
    set(from, to, data) {
      return this.connect(from, to).merge(data);
    }
  };
  var BaseGraph = class {
    get nodeEntries() {
      return Object.entries(this.nodes);
    }
    get edgeEntries() {
      return Object.entries(this.edges);
    }
    get nodeCount() {
      return this.nodeEntries.reduce((acc, [_2, map]) => acc + map.size, 0);
    }
    get edgeCount() {
      return this.edgeEntries.reduce((acc, [_2, map]) => acc + map.adjFrom.size, 0);
    }
    toJSON() {
      const data = { nodes: {}, edges: {} };
      for (const [name, nodeMap] of this.nodeEntries) {
        const m3 = {};
        for (const [key, { data: data2 }] of nodeMap) m3[key] = data2;
        data.nodes[name] = m3;
      }
      for (const [name, edgeMap] of this.edgeEntries) {
        const m3 = {};
        for (const edge of edgeMap.adjFrom.values()) {
          const fromMap = m3[edge.from] ??= {};
          fromMap[edge.to] = edge.data;
        }
        data.edges[name] = m3;
      }
      return data;
    }
    loadJSON(data) {
      for (const [name, nodes] of Object.entries(data.nodes)) {
        const nodeMap = this.nodes[name];
        if (!nodes) console.warn(`Data has no nodes for type "${name}"`);
        if (!nodeMap) console.warn(`Graph has no node map for type "${name}"`);
        if (!nodes || !nodeMap) continue;
        for (const [key, nodeData] of Object.entries(nodes)) {
          nodeMap.set(key).merge(nodeData);
        }
      }
      for (const [name, edges] of Object.entries(data.edges)) {
        const edgeMap = this.edges[name];
        if (!edges) console.warn(`Data has no edges for type "${name}"`);
        if (!edgeMap) console.warn(`Graph has no edge map for type "${name}"`);
        if (!edges || !edgeMap) continue;
        for (const [from, tos] of Object.entries(edges)) {
          for (const [to, edgeData] of Object.entries(tos)) {
            edgeMap.connect(from, to).merge(edgeData);
          }
        }
      }
      return this;
    }
  };

  // packages/plangs/src/index.ts
  var PlangsGraph = class extends BaseGraph {
    nodes = {
      app: new NodeMap((key) => new NApp(this, key)),
      post: new NodeMap((key) => new NPost(this, key)),
      bundle: new NodeMap((key) => new NBundle(this, key)),
      lib: new NodeMap((key) => new NLibrary(this, key)),
      license: new NodeMap((key) => new NLicense(this, key)),
      paradigm: new NodeMap((key) => new NParadigm(this, key)),
      pl: new NodeMap((key) => new NPlang(this, key)),
      plat: new NodeMap((key) => new NPlatform(this, key)),
      tag: new NodeMap((key) => new NTag(this, key)),
      tool: new NodeMap((key) => new NTool(this, key)),
      tsys: new NodeMap((key) => new NTsys(this, key))
    };
    edges = {
      app: new EdgeMap((from, to) => new EApp(this, from, to)),
      bundle: new EdgeMap((from, to) => new EBundle(this, from, to)),
      dialect: new EdgeMap((from, to) => new EDialect(this, from, to)),
      impl: new EdgeMap((from, to) => new EImpl(this, from, to)),
      influence: new EdgeMap((from, to) => new EInfluence(this, from, to)),
      lib: new EdgeMap((from, to) => new ELib(this, from, to)),
      license: new EdgeMap((from, to) => new ELicense(this, from, to)),
      paradigm: new EdgeMap((from, to) => new EParadigm(this, from, to)),
      plBundle: new EdgeMap((from, to) => new EPlBundle(this, from, to)),
      plat: new EdgeMap((from, to) => new EPlat(this, from, to)),
      post: new EdgeMap((from, to) => new EPost(this, from, to)),
      tag: new EdgeMap((from, to) => new ETag(this, from, to)),
      tool: new EdgeMap((from, to) => new ETool(this, from, to)),
      tsys: new EdgeMap((from, to) => new ETsys(this, from, to)),
      writtenIn: new EdgeMap((from, to) => new EWrittenIn(this, from, to))
    };
    /** Find all plangs that match the given filters. */
    plangs(f5, limit = -1) {
      const keys = /* @__PURE__ */ new Set();
      for (const pl of this.nodes.pl.values) {
        if (limit >= 0 && keys.size >= limit) break;
        if (f5.matchesAll(pl)) keys.add(pl.key);
      }
      return keys;
    }
  };
  var NBase = class extends Node {
    get name() {
      return this.data.name ? this.data.name : this.plainKey;
    }
    get description() {
      return this.data.description || this.name;
    }
    get websites() {
      return new IterTap(this.data.websites);
    }
    get keywords() {
      return new IterTap(this.data.keywords);
    }
    get keywordsRegexp() {
      const { keywords } = this.data;
      if (!keywords) return void 0;
      const lenient = keywords.map((k3) => k3.replaceAll(/[- ]/g, "\\s*.?\\s*"));
      return new RegExp(`\\b(${lenient.join("|")})\\b`, "i");
    }
    addWebsites(links) {
      arrayMerge(this.data.websites ??= [], links, (l1, l22) => l1.href === l22.href);
      return this;
    }
  };
  var NPlang = class extends NBase {
    kind = "pl";
    get extensions() {
      return new IterTap(this.data.extensions);
    }
    get firstAppeared() {
      return this.data.firstAppeared;
    }
    firstAppearedAfter(minDate) {
      return !!this.data.firstAppeared && this.data.firstAppeared >= minDate;
    }
    get images() {
      return new IterTap(this.data.images);
    }
    get thumbUrl() {
      return (this.images.find(({ kind }) => kind === "logo") ?? this.images.first)?.url;
    }
    get isTranspiler() {
      return this.data.isTranspiler === true;
    }
    get isMainstream() {
      return this.data.isMainstream === true;
    }
    get releases() {
      return new IterTap(this.data.releases);
    }
    addExtensions(exts) {
      arrayMerge(this.data.extensions ??= [], exts);
      return this;
    }
    addImages(images) {
      arrayMerge(this.data.images ??= [], images, (i1, i22) => i1.url === i22.url);
      return this;
    }
    addReleases(releases) {
      arrayMerge(this.data.releases ??= [], releases, (r1, r22) => r1.version === r22.version);
      return this;
    }
    addDialectOf(others) {
      for (const other of others) this.graph.edges.dialect.connect(this.key, other);
      return this;
    }
    addLicenses(others) {
      for (const other of others) this.graph.edges.license.connect(this.key, other);
      return this;
    }
    addImplements(others) {
      for (const other of others) this.graph.edges.impl.connect(this.key, other);
      return this;
    }
    addInfluencedBy(others) {
      for (const other of others) this.graph.edges.influence.connect(this.key, other);
      return this;
    }
    addLibraries(others) {
      for (const other of others) this.graph.edges.lib.connect(this.key, other);
      return this;
    }
    addParadigms(others) {
      for (const otherkey of others) this.graph.edges.paradigm.connect(this.key, otherkey);
      return this;
    }
    addPlatforms(others) {
      for (const other of others) this.graph.edges.plat.connect(this.key, other);
      return this;
    }
    addTags(others) {
      for (const other of others) this.graph.edges.tag.connect(this.key, other);
      return this;
    }
    addTools(others) {
      for (const other of others) this.graph.edges.tool.connect(this.key, other);
      return this;
    }
    addTypeSystems(others) {
      for (const other of others) this.graph.edges.tsys.connect(this.key, other);
      return this;
    }
    addWrittenIn(others) {
      for (const other of others) this.graph.edges.writtenIn.connect(this.key, other);
      return this;
    }
    get relApps() {
      return new MapTap(this.graph.edges.app.adjFrom.getMap(this.key));
    }
    get relDialectOf() {
      return new MapTap(this.graph.edges.dialect.adjFrom.getMap(this.key));
    }
    get relImplements() {
      return new MapTap(this.graph.edges.impl.adjFrom.getMap(this.key));
    }
    get relInfluenced() {
      return new MapTap(this.graph.edges.influence.adjTo.getMap(this.key));
    }
    get relInfluencedBy() {
      return new MapTap(this.graph.edges.influence.adjFrom.getMap(this.key));
    }
    get relLibs() {
      return new MapTap(this.graph.edges.lib.adjFrom.getMap(this.key));
    }
    get relLicenses() {
      return new MapTap(this.graph.edges.license.adjFrom.getMap(this.key));
    }
    get relParadigms() {
      return new MapTap(this.graph.edges.paradigm.adjFrom.getMap(this.key));
    }
    get relPlBundles() {
      return new MapTap(this.graph.edges.plBundle.adjFrom.getMap(this.key));
    }
    get relPlatforms() {
      return new MapTap(this.graph.edges.plat.adjFrom.getMap(this.key));
    }
    get relTags() {
      return new MapTap(this.graph.edges.tag.adjFrom.getMap(this.key));
    }
    get relTools() {
      return new MapTap(this.graph.edges.tool.adjFrom.getMap(this.key));
    }
    get relTsys() {
      return new MapTap(this.graph.edges.tsys.adjFrom.getMap(this.key));
    }
    get relWrittenIn() {
      return new MapTap(this.graph.edges.writtenIn.adjFrom.getMap(this.key));
    }
    get relPosts() {
      return new MapTap(this.graph.edges.post.adjFrom.getMap(this.key));
    }
  };
  var NLibrary = class extends NBase {
    kind = "lib";
    addPls(others) {
      for (const other of others) this.graph.edges.lib.connect(other, this.key);
      return this;
    }
  };
  var NLicense = class extends NBase {
    kind = "license";
    get spdx() {
      return this.data.spdx;
    }
    get isFSFLibre() {
      return this.data.isFSFLibre === true;
    }
    get isOSIApproved() {
      return this.data.isOSIApproved === true;
    }
  };
  var NParadigm = class extends NBase {
    kind = "paradigm";
  };
  var NPlatform = class extends NBase {
    kind = "plat";
  };
  var NTag = class extends NBase {
    kind = "tag";
  };
  var NTool = class extends NBase {
    kind = "tool";
    addPls(others) {
      for (const other of others) this.graph.edges.tool.connect(other, this.key);
      return this;
    }
  };
  var NTsys = class extends NBase {
    kind = "tsys";
  };
  var NApp = class extends NBase {
    kind = "app";
    addPls(others) {
      for (const other of others) this.graph.edges.app.connect(other, this.key);
      return this;
    }
  };
  var NBundle = class extends NBase {
    kind = "bundle";
    addTools(others) {
      for (const other of others) this.graph.edges.bundle.connect(this.key, other);
      return this;
    }
    addPls(others) {
      for (const other of others) this.graph.edges.plBundle.connect(other, this.key);
      return this;
    }
    get relTools() {
      return new MapTap(this.graph.edges.bundle.adjFrom.getMap(this.key));
    }
    get relPls() {
      return new MapTap(this.graph.edges.plBundle.adjTo.getMap(this.key));
    }
  };
  var NPost = class extends NBase {
    kind = "post";
    get author() {
      return this.data.author;
    }
    get path() {
      return this.data.path;
    }
    get title() {
      return this.data.title;
    }
    get date() {
      return this.data.date;
    }
    set link(link) {
      this.data.websites = [link];
    }
    get link() {
      return this.websites.first;
    }
    addPls(others) {
      for (const other of others) this.graph.edges.post.connect(other, this.key);
      return this;
    }
  };
  var EBase = class extends Edge {
    addRefs(links) {
      arrayMerge(this.data.refs ??= [], links, (l1, l22) => l1.href === l22.href);
      return this;
    }
  };
  var EApp = class extends EBase {
    kind = "bundle";
    get pl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get app() {
      return this.graph.nodes.app.get(this.to);
    }
  };
  var EBundle = class extends EBase {
    kind = "bundle";
    get bundle() {
      return this.graph.nodes.bundle.get(this.from);
    }
    get tool() {
      return this.graph.nodes.tool.get(this.to);
    }
  };
  var EDialect = class extends EBase {
    kind = "dialect";
    get fromPl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get toPl() {
      return this.graph.nodes.pl.get(this.to);
    }
  };
  var ELicense = class extends EBase {
    kind = "license";
    get pl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get license() {
      return this.graph.nodes.license.get(this.to);
    }
  };
  var EImpl = class extends EBase {
    kind = "impl";
    get fromPl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get toPl() {
      return this.graph.nodes.pl.get(this.to);
    }
  };
  var EInfluence = class extends EBase {
    kind = "influence";
    get fromPl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get toPl() {
      return this.graph.nodes.pl.get(this.to);
    }
  };
  var EParadigm = class extends EBase {
    kind = "paradigm";
    get pl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get paradigm() {
      return this.graph.nodes.paradigm.get(this.to);
    }
  };
  var ETsys = class extends EBase {
    kind = "tsys";
    get pl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get tsys() {
      return this.graph.nodes.tsys.get(this.to);
    }
  };
  var EPlBundle = class extends EBase {
    kind = "plBundle";
    get pl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get bundle() {
      return this.graph.nodes.bundle.get(this.to);
    }
  };
  var EPlat = class extends EBase {
    kind = "plat";
    get pl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get plat() {
      return this.graph.nodes.plat.get(this.to);
    }
  };
  var EPost = class extends EBase {
    kind = "post";
    get pl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get post() {
      return this.graph.nodes.post.get(this.to);
    }
  };
  var ELib = class extends EBase {
    kind = "lib";
    get pl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get lib() {
      return this.graph.nodes.lib.get(this.to);
    }
  };
  var ETag = class extends EBase {
    kind = "tag";
    get pl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get tag() {
      return this.graph.nodes.tag.get(this.to);
    }
  };
  var ETool = class extends EBase {
    kind = "tool";
    get pl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get tool() {
      return this.graph.nodes.tool.get(this.to);
    }
  };
  var EWrittenIn = class extends EBase {
    kind = "writtenIn";
    get fromPl() {
      return this.graph.nodes.pl.get(this.from);
    }
    get toPl() {
      return this.graph.nodes.pl.get(this.to);
    }
  };

  // node_modules/preact-custom-element/dist/preact-custom-element.esm.js
  function r2() {
    return (r2 = Object.assign ? Object.assign.bind() : (t3) => {
      for (let e3 = 1; e3 < arguments.length; e3++) {
        const n2 = arguments[e3];
        for (const o4 in n2) Object.prototype.hasOwnProperty.call(n2, o4) && (t3[o4] = n2[o4]);
      }
      return t3;
    }).apply(this, arguments);
  }
  var i4 = ["context", "children"];
  function a3(t3) {
    this.getChildContext = () => t3.context;
    const e3 = t3.children;
    const n2 = ((t4, e4) => {
      if (null == t4) return {};
      let n3;
      let o4;
      const r4 = {};
      const i7 = Object.keys(t4);
      for (o4 = 0; o4 < i7.length; o4++) e4.indexOf(n3 = i7[o4]) >= 0 || (r4[n3] = t4[n3]);
      return r4;
    })(t3, i4);
    return E(e3, n2);
  }
  function s3() {
    const o4 = new CustomEvent("_preact", { detail: {}, bubbles: true, cancelable: true });
    this.dispatchEvent(o4), this._vdom = _(
      a3,
      r2({}, this._props, { context: o4.detail.context }),
      function e3(n2, o5) {
        if (3 === n2.nodeType) return n2.data;
        if (1 !== n2.nodeType) return null;
        const r4 = [];
        const i7 = {};
        let a5 = 0;
        const s5 = n2.attributes;
        const l5 = n2.childNodes;
        for (a5 = s5.length; a5--; ) "slot" !== s5[a5].name && (i7[s5[a5].name] = s5[a5].value, i7[c3(s5[a5].name)] = s5[a5].value);
        for (a5 = l5.length; a5--; ) {
          const u6 = e3(l5[a5], null);
          const d4 = l5[a5].slot;
          d4 ? i7[d4] = _(p3, { name: d4 }, u6) : r4[a5] = u6;
        }
        const h3 = o5 ? _(p3, null, r4) : r4;
        return _(o5 || n2.nodeName.toLowerCase(), i7, h3);
      }(this, this._vdomComponent)
    ), (this.hasAttribute("hydrate") ? D : B)(this._vdom, this._root);
  }
  function c3(t3) {
    return t3.replace(/-(\w)/g, (t4, e3) => e3 ? e3.toUpperCase() : "");
  }
  function l3(t3, e3, r4) {
    if (this._vdom) {
      const i7 = {};
      i7[t3] = r4 = null == r4 ? void 0 : r4, i7[c3(t3)] = r4, this._vdom = E(this._vdom, i7), B(this._vdom, this._root);
    }
  }
  function u3() {
    B(this._vdom = null, this._root);
  }
  function p3(e3, n2) {
    return _(
      "slot",
      r2({}, e3, {
        ref: (t3) => {
          t3 ? (this.ref = t3, this._listener || (this._listener = (t4) => {
            t4.stopPropagation(), t4.detail.context = n2;
          }, t3.addEventListener("_preact", this._listener))) : this.ref.removeEventListener("_preact", this._listener);
        }
      })
    );
  }
  function preact_custom_element_esm_default(t3, e3, n2, o4) {
    function r4() {
      const e4 = Reflect.construct(HTMLElement, [], r4);
      return e4._vdomComponent = t3, e4._root = o4?.shadow ? e4.attachShadow({ mode: o4.mode || "open" }) : e4, e4;
    }
    return (r4.prototype = Object.create(HTMLElement.prototype)).constructor = r4, r4.prototype.connectedCallback = s3, r4.prototype.attributeChangedCallback = l3, r4.prototype.disconnectedCallback = u3, n2 = n2 || t3.observedAttributes || Object.keys(t3.propTypes || {}), r4.observedAttributes = n2, n2.forEach((t4) => {
      Object.defineProperty(r4.prototype, t4, {
        get: function() {
          return this._vdom.props[t4];
        },
        set: function(e4) {
          this._vdom ? this.attributeChangedCallback(t4, null, e4) : (this._props || (this._props = {}), this._props[t4] = e4, this.connectedCallback());
          const n3 = typeof e4;
          null != e4 && "string" !== n3 && "boolean" !== n3 && "number" !== n3 || this.setAttribute(t4, e4);
        }
      });
    }), customElements.define(e3 || t3.tagName || t3.displayName || t3.name, r4);
  }

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f3 = 0;
  var i5 = Array.isArray;
  function u4(e3, t3, n2, o4, i7, u6) {
    t3 || (t3 = {});
    var a5, c5, p5 = t3;
    if ("ref" in p5) for (c5 in p5 = {}, t3) "ref" == c5 ? a5 = t3[c5] : p5[c5] = t3[c5];
    var l5 = { type: e3, props: p5, key: n2, ref: a5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i7, __self: u6 };
    if ("function" == typeof e3 && (a5 = e3.defaultProps)) for (c5 in a5) void 0 === p5[c5] && (p5[c5] = a5[c5]);
    return l.vnode && l.vnode(l5), l5;
  }

  // packages/server/src/pages/browse.tsx
  var INPUT_PROPS = {
    plangName: { label: "Lang Name", input: { kind: "search" } },
    extensions: { label: "File Extension", input: { kind: "search", inputSel: true } },
    appearedAfter: { label: "Appeared After", input: { kind: "month" } },
    releasedAfter: { label: "Released After", input: { kind: "month" } },
    hasLogo: { label: "Has Logo", input: { kind: "checkbox" } },
    hasReleases: { label: "Known Releases", input: { kind: "checkbox" } },
    hasWikipedia: { label: "Has Wikipedia", input: { kind: "checkbox" } },
    isMainstream: { label: "Is Mainstream", input: { kind: "checkbox" } },
    isTranspiler: { label: "Is Transpiler", input: { kind: "checkbox" } },
    dialectOf: { label: "Dialect Of", input: { kind: "compl", nodeMap: "pl" } },
    implements: { label: "Implements", input: { kind: "compl", nodeMap: "pl" } },
    influenced: { label: "Influenced", input: { kind: "compl", nodeMap: "pl" } },
    influencedBy: { label: "Influenced By", input: { kind: "compl", nodeMap: "pl" } },
    licenses: { label: "Licenses", input: { kind: "compl", nodeMap: "license" } },
    paradigms: { label: "Paradigms", input: { kind: "compl", nodeMap: "paradigm" } },
    platforms: { label: "Platforms", input: { kind: "compl", nodeMap: "plat" } },
    tags: { label: "Tags", input: { kind: "compl", nodeMap: "tag" } },
    typeSystems: { label: "Type System", input: { kind: "compl", nodeMap: "tsys" } },
    writtenIn: { label: "Written In", input: { kind: "compl", nodeMap: "pl" } }
  };

  // packages/server/src/pages/dom.ts
  var FILTER_KEY = Object.keys(INPUT_PROPS);
  var ID_KEYS = ["todo", "plGrid", "filterToggle", "filters", ...FILTER_KEY];
  function id(key) {
    return `id-${key}`;
  }
  function cl(key) {
    return `cl-${key}`;
  }

  // packages/frontend/src/utils.ts
  var doc = typeof document === "undefined" ? void 0 : document;
  var win = typeof window === "undefined" ? void 0 : window;
  var $2 = doc?.querySelector.bind(document);
  var $$ = doc?.querySelectorAll.bind(document);
  var elem = (key) => $2(`#${id(key)}`) ?? void 0;
  var elems = (key) => $$(`.${cl(key)}`);
  function on(target, type, listener, opt) {
    if (!target) console.warn("missing target", { type, listener, opt });
    target?.addEventListener(type, listener, opt);
    return target ? () => off(target, type, listener, opt) : () => {
    };
  }
  function off(target, type, listener, opt) {
    if (!target) console.warn("missing target", { type, listener, opt });
    target?.removeEventListener(type, listener, opt);
  }
  function send(target, ev) {
    if (!target) console.warn("missing target", ev);
    return target?.dispatchEvent(ev);
  }
  function customEvent(type, detail, options = { bubbles: true, composed: true }) {
    return new CustomEvent(type, { detail, ...options });
  }
  function size(el) {
    const style2 = getComputedStyle(el);
    return [Number.parseInt(style2.width), Number.parseInt(style2.height)];
  }
  var twBreakMd = () => win?.matchMedia(`(min-width: ${TW_md})`).matches ?? false;
  var TW_md = "48rem";

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r3;
  var u5;
  var i6;
  var o3 = 0;
  var f4 = [];
  var c4 = l;
  var e2 = c4.__b;
  var a4 = c4.__r;
  var v3 = c4.diffed;
  var l4 = c4.__c;
  var m2 = c4.unmount;
  var s4 = c4.__;
  function d3(n2, t3) {
    c4.__h && c4.__h(r3, n2, o3 || t3), o3 = 0;
    var u6 = r3.__H || (r3.__H = { __: [], __h: [] });
    return n2 >= u6.__.length && u6.__.push({}), u6.__[n2];
  }
  function p4(n2, u6, i7) {
    var o4 = d3(t2++, 2);
    if (o4.t = n2, !o4.__c && (o4.__ = [i7 ? i7(u6) : D2(void 0, u6), function(n3) {
      var t3 = o4.__N ? o4.__N[0] : o4.__[0], r4 = o4.t(t3, n3);
      t3 !== r4 && (o4.__N = [r4, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r3, !r3.u)) {
      var f5 = function(n3, t3, r4) {
        if (!o4.__c.__H) return true;
        var u7 = o4.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u7.every(function(n4) {
          return !n4.__N;
        })) return !c5 || c5.call(this, n3, t3, r4);
        var i8 = false;
        return u7.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i8 = true);
          }
        }), !(!i8 && o4.__c.props === n3) && (!c5 || c5.call(this, n3, t3, r4));
      };
      r3.u = true;
      var c5 = r3.shouldComponentUpdate, e3 = r3.componentWillUpdate;
      r3.componentWillUpdate = function(n3, t3, r4) {
        if (this.__e) {
          var u7 = c5;
          c5 = void 0, f5(n3, t3, r4), c5 = u7;
        }
        e3 && e3.call(this, n3, t3, r4);
      }, r3.shouldComponentUpdate = f5;
    }
    return o4.__N || o4.__;
  }
  function y3(n2, u6) {
    var i7 = d3(t2++, 3);
    !c4.__s && C2(i7.__H, u6) && (i7.__ = n2, i7.i = u6, r3.__H.__h.push(i7));
  }
  function A2(n2) {
    return o3 = 5, T2(function() {
      return { current: n2 };
    }, []);
  }
  function T2(n2, r4) {
    var u6 = d3(t2++, 7);
    return C2(u6.__H, r4) && (u6.__ = n2(), u6.__H = r4, u6.__h = n2), u6.__;
  }
  function j2() {
    for (var n2; n2 = f4.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t3) {
      n2.__H.__h = [], c4.__e(t3, n2.__v);
    }
  }
  c4.__b = function(n2) {
    r3 = null, e2 && e2(n2);
  }, c4.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s4 && s4(n2, t3);
  }, c4.__r = function(n2) {
    a4 && a4(n2), t2 = 0;
    var i7 = (r3 = n2.__c).__H;
    i7 && (u5 === r3 ? (i7.__h = [], r3.__h = [], i7.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
    })) : (i7.__h.forEach(z2), i7.__h.forEach(B2), i7.__h = [], t2 = 0)), u5 = r3;
  }, c4.diffed = function(n2) {
    v3 && v3(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f4.push(t3) && i6 === c4.requestAnimationFrame || ((i6 = c4.requestAnimationFrame) || w3)(j2)), t3.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.i = void 0;
    })), u5 = r3 = null;
  }, c4.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r4) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], c4.__e(r4, n3.__v);
      }
    }), l4 && l4(n2, t3);
  }, c4.unmount = function(n2) {
    m2 && m2(n2);
    var t3, r4 = n2.__c;
    r4 && r4.__H && (r4.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r4.__H = void 0, t3 && c4.__e(t3, r4.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w3(n2) {
    var t3, r4 = function() {
      clearTimeout(u6), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u6 = setTimeout(r4, 100);
    k2 && (t3 = requestAnimationFrame(r4));
  }
  function z2(n2) {
    var t3 = r3, u6 = n2.__c;
    "function" == typeof u6 && (n2.__c = void 0, u6()), r3 = t3;
  }
  function B2(n2) {
    var t3 = r3;
    n2.__c = n2.__(), r3 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r4) {
      return t4 !== n2[r4];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // packages/frontend/src/components/input-sel/reducer.ts
  function reducer(state, action) {
    const { selected } = state;
    if (action.kind === "add") {
      const existing = selected.find(({ value }) => value === action.item.value);
      if (existing) return state;
      state.onAdd(action.item);
      return { ...state, selected: [...selected, action.item] };
    }
    if (action.kind === "remove") {
      let idx;
      const filtered = selected.filter(({ value }, index) => {
        if (value !== action.value) return true;
        idx = index;
        return false;
      });
      if (idx === void 0) return state;
      state.onRemove({
        index: idx,
        item: selected[idx],
        itemsLeft: filtered.length,
        by: action.by,
        inputName: state.inputName
      });
      return { ...state, selected: filtered };
    }
    if (action.kind === "update") {
      return { ...state, inputName: action.inputName, cssClass: action.cssClass };
    }
    return state;
  }

  // packages/frontend/src/components/input-sel/input-sel.tsx
  var TAG_NAME = "input-sel";
  function InputSel({ name, class: cssClass }) {
    const self2 = A2();
    const lastRemoved = A2();
    const [state, dispatch] = p4(reducer, {
      inputName: name,
      selected: [],
      onAdd() {
        send(self2.current?.parentElement, EVENTS.outInput.create());
      },
      onRemove(data) {
        lastRemoved.current = data;
        send(self2.current?.parentElement, EVENTS.outRemove.create(data));
        send(self2.current?.parentElement, EVENTS.outInput.create());
      }
    });
    y3(() => {
      dispatch({ kind: "update", inputName: name, cssClass });
    }, [name, cssClass]);
    y3(() => {
      const root2 = self2.current?.parentElement;
      if (!root2) return;
      const handler = (ev) => {
        if (!EVENTS.inAdd.valid(ev)) return console.warn("Invalid event data on:", ev);
        dispatch({ kind: "add", item: ev.detail });
      };
      return on(root2, EVENTS.inAdd.type, handler);
    });
    y3(() => {
      if (!lastRemoved.current || !self2.current) return;
      const { by, index, itemsLeft } = lastRemoved.current;
      if (by === "enterKey" && itemsLeft > 0) {
        const i7 = index < itemsLeft ? index : itemsLeft - 1;
        const div = self2.current.querySelector(`.remove-item:nth-child(${i7 + 1})`);
        div?.focus();
      }
      lastRemoved.current = void 0;
    });
    return /* @__PURE__ */ u4("div", { ref: self2, class: cssClass, children: [
      state.selected.length > 1 && /* @__PURE__ */ u4("select", { title: "Match all or any of the elements", children: [
        /* @__PURE__ */ u4("option", { value: "any", children: "Any of" }),
        /* @__PURE__ */ u4("option", { value: "all", children: "All of" })
      ] }),
      state.selected.map(({ value, label }) => /* @__PURE__ */ u4(
        "div",
        {
          class: "item",
          tabindex: 0,
          "data-value": value,
          onClick: () => dispatch({ kind: "remove", value, by: "click" }),
          onKeyDown: (ev) => {
            if (ev.key === "Enter") dispatch({ kind: "remove", value, by: "enterKey" });
          },
          children: [
            /* @__PURE__ */ u4("span", { "aria-label": "remove", children: "\u274C" }),
            label
          ]
        },
        value
      ))
    ] });
  }
  var EVENTS = {
    /** Incoming event: request to add an item. */
    inAdd: {
      type: `${TAG_NAME}:in-add"`,
      create: (item) => customEvent(EVENTS.inAdd.type, item),
      /** Validate data extracted from a CustomEvent detail field. */
      valid: ({ detail }) => "value" in detail && typeof detail.label === "string"
    },
    /** Outgoing event: an item has been removed. */
    outRemove: {
      type: `${TAG_NAME}:out-item-removed"`,
      create: (detail) => customEvent(EVENTS.outRemove.type, detail)
    },
    outInput: {
      /** Emits an standard "input" event on input change. */
      type: "input",
      create: () => new Event(EVENTS.outInput.type, { bubbles: true, composed: true })
    }
  };

  // packages/frontend/src/components/input-sel/index.ts
  var ELEMENT_API = {
    /** Send an event request the item to be added. */
    addItem(item) {
      send(this, EVENTS.inAdd.create(item));
    },
    /** Add a handler to do something when an item is removed. */
    onRemove(cb) {
      on(this, EVENTS.outRemove.type, ({ detail }) => cb(detail));
    },
    /** Get the values/keys of the selected items. */
    values() {
      const mode = this.querySelector("select")?.value === "any" ? "any" : "all";
      const values = [...this.querySelectorAll(".remove-item")].map((el) => el.getAttribute("data-value")).filter((v4) => v4);
      return { mode, values: new Set(values) };
    }
  };
  function matchingInputSelByName(elem2) {
    const name = elem2.getAttribute("name");
    const inputSel = $2(`input-sel[name=${name}]`);
    if (!name || !inputSel) {
      console.warn("Coud not find a matching <input-sel/> by name", elem2, name);
    }
    return inputSel;
  }
  function registerInputSel() {
    const keys = ["name"];
    preact_custom_element_esm_default(InputSel, TAG_NAME, keys);
    Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
  }

  // packages/frontend/src/components/input-compl/reducer.ts
  function reducer2(state, action) {
    switch (action.kind) {
      case "keypress":
        return handleKeypress(state, action);
      case "popup":
        return handlePopup(state, action);
      case "selectIndex":
        return handleSelectIndex(state, action);
      case "update":
        return handleUpdate(state, action);
      case "updateQuery":
        return handleUpdateQuery(state, action);
      default:
        return state;
    }
  }
  function handleUpdate(state, { state: newState }) {
    return handleUpdateQuery({ ...state, query: "[DUMMY]", ...newState }, { kind: "updateQuery", query: "" });
  }
  function handleKeypress(state, { from, key }) {
    const { showPopup, candidates } = state;
    if (key === "Escape") {
      if (showPopup) return handlePopup(state, { kind: "popup", show: false });
      return state;
    }
    if (key === "ArrowDown" || key === "ArrowUp") {
      if (from === "input" && !showPopup && candidates.length > 0) {
        return handlePopup({ ...state, selected: 0 }, { kind: "popup", show: true });
      }
      const offset = key === "ArrowDown" ? 1 : -1;
      const newSelected = (state.selected + candidates.length + offset) % candidates.length;
      if (state.selected !== newSelected) return { ...state, selected: newSelected };
      return state;
    }
    if (key !== "Enter") return state;
    if (!state.showPopup) return handlePopup(state, { kind: "popup", show: true });
    const elem2 = state.completions[state.candidates[state.selected]];
    state.onSelect({ inputName: state.name, value: elem2.value, label: elem2.label });
    const queryLess = handleUpdateQuery(state, { kind: "updateQuery", query: "" });
    return handlePopup(queryLess, { kind: "popup", show: false });
  }
  function handlePopup(state, { show }) {
    const { candidates, showPopup } = state;
    const popupShowable = candidates.length > 0;
    if (!popupShowable) {
      if (showPopup) return { ...state, showPopup: false };
      return state;
    }
    if (showPopup === show) return state;
    return { ...state, showPopup: show };
  }
  function handleUpdateQuery(state, { query }) {
    const { query: prevQuery } = state;
    if (query === prevQuery) return state;
    const candidates = [];
    const q2 = query.trim().toLowerCase();
    state.completions.forEach(({ pattern }, idx) => {
      if (q2.length === 0 || pattern.includes(q2)) candidates.push(idx);
    });
    candidates.sort((a5, b3) => {
      const aLabel = state.completions[a5].pattern;
      const bLabel = state.completions[b3].pattern;
      const aMatchStart = aLabel.startsWith(q2);
      const bMatchStart = bLabel.startsWith(q2);
      if (aMatchStart && bMatchStart) return aLabel.localeCompare(bLabel);
      if (aMatchStart) return -1;
      if (bMatchStart) return 1;
      if (aLabel.length < bLabel.length) return -1;
      return aLabel.localeCompare(bLabel);
    });
    return {
      ...state,
      candidates,
      query,
      selected: 0,
      showPopup: query.length > 0
    };
  }
  function handleSelectIndex(state, { index }) {
    const { candidates, selected } = state;
    if (!candidates) {
      if (selected !== 0) return { ...state, selected: 0 };
      return state;
    }
    if (index < 0 || index >= candidates.length || index === selected) return state;
    return { ...state, selected: index };
  }

  // packages/frontend/src/components/input-compl/input-compl.tsx
  var TAG_NAME2 = "input-compl";
  function InputCompl({ name, class: cssClass, completions }) {
    const inputRef = A2();
    const popupRef = A2();
    const selRef = A2();
    const [state, dispatch] = p4(reducer2, {
      candidates: [],
      completions: [],
      name,
      cssClass,
      query: "",
      selected: 0,
      showPopup: false,
      onSelect: (data) => send(inputRef.current, EVENTS2.outSelect.create(data))
    });
    y3(() => {
      dispatch({ kind: "update", state: { completions: completions ?? [], name, cssClass } });
    }, [completions, cssClass, name]);
    y3(() => {
      if (inputRef.current) inputRef.current.value = state.query;
    }, [state.query]);
    y3(() => {
      if (popupRef.current && inputRef.current) {
        popupRef.current.style.width = `${inputRef.current.offsetWidth}px`;
      }
      selRef.current?.scrollIntoView({ block: "nearest" });
    });
    const showPopup = state.candidates.length > 0 && state.showPopup;
    return /* @__PURE__ */ u4(k, { children: [
      /* @__PURE__ */ u4(
        "input",
        {
          autocomplete: "off",
          class: `${showPopup ? "focused" : ""} relative block ${state.cssClass ?? ""}`,
          name,
          onBlur: ({ relatedTarget }) => {
            if (relatedTarget === popupRef.current) return;
            dispatch({ kind: "popup", show: false });
          },
          onClick: () => dispatch({ kind: "popup", show: true }),
          onInput: () => dispatch({ kind: "updateQuery", query: inputRef.current?.value ?? "" }),
          onKeyDown: ({ key }) => dispatch({ kind: "keypress", from: "input", key }),
          placeholder: "Search",
          ref: inputRef,
          tabIndex: 0,
          type: "search"
        }
      ),
      /* @__PURE__ */ u4(
        "div",
        {
          class: `popup ${showPopup ? "" : "hidden"} absolute z-10 mt-1 max-h-80 max-w-[15rem] overflow-y-auto overflow-x-hidden border border-solid bg-[white] p-1 text-[#333]`,
          onBlur: ({ relatedTarget }) => {
            if (relatedTarget === inputRef.current) return;
            dispatch({ kind: "popup", show: false });
          },
          onKeyDown: ({ key }) => dispatch({ kind: "keypress", from: "list", key }),
          ref: popupRef,
          tabindex: 0,
          children: state.candidates.map((complIdx, idx) => /* @__PURE__ */ u4(
            "div",
            {
              class: `item ${idx === state.selected ? "selected" : ""} min-w-[8rem]`,
              onClick: () => dispatch({ kind: "selectIndex", index: idx }),
              onDblClick: () => dispatch({ kind: "keypress", from: "item", key: "Enter" }),
              onKeyDown: ({ key }) => dispatch({ kind: "keypress", from: "item", key }),
              ref: idx === state.selected ? selRef : void 0,
              children: state.completions[complIdx].label
            },
            state.completions[complIdx].value
          ))
        }
      )
    ] });
  }
  var EVENTS2 = {
    /** Outgoing event: an item has been selected. */
    outSelect: {
      type: `${TAG_NAME2}:select`,
      create: (detail) => customEvent(EVENTS2.outSelect.type, detail)
    }
  };

  // packages/frontend/src/components/input-compl/index.ts
  var ELEMENT_API2 = {
    /** Register a handler for selection. */
    onSelect(cb) {
      on(this, EVENTS2.outSelect.type, ({ detail }) => cb(detail));
    },
    /** Redefine focus. */
    focus() {
      this.querySelector("input")?.focus();
    },
    matchingInputSel() {
      return matchingInputSelByName(this);
    }
  };
  function registerInputCompl() {
    const keys = ["name", "completions"];
    preact_custom_element_esm_default(InputCompl, TAG_NAME2, keys);
    Object.assign(window.customElements.get(TAG_NAME2)?.prototype, ELEMENT_API2);
  }

  // packages/frontend/src/components/pl-info/pl-info.tsx
  var TAG_NAME3 = "pl-info";
  function PlInfo({ pg, pl }) {
    const self2 = A2();
    y3(() => {
      const root2 = self2.current?.parentElement;
      if (!root2) return;
      const div = root2.parentElement;
      if (div) {
        const height = div.offsetHeight;
        const viewportHeight = window.innerHeight;
        if (height > viewportHeight) {
          div.classList.remove("stick-to-top");
          div.classList.add("stick-to-bottom");
        } else {
          div.classList.add("stick-to-top");
          div.classList.remove("stick-to-bottom");
        }
      }
    });
    let content;
    if (!pl) {
      content = /* @__PURE__ */ u4("p", { children: "Select a language to show more information." });
    } else if (!pg) {
      content = /* @__PURE__ */ u4("p", { children: "Loading graph ..." });
    } else if (!pl) {
      content = /* @__PURE__ */ u4("p", { children: "Loading language ..." });
    } else {
      content = /* @__PURE__ */ u4(k, { children: [
        /* @__PURE__ */ u4("h1", { children: pl.name }),
        /* @__PURE__ */ u4("p", { children: pl.description }),
        /* @__PURE__ */ u4("details", { class: "-mb-4 mt-8", open: twBreakMd(), children: [
          /* @__PURE__ */ u4("summary", { class: "font-bold text-xl", children: "Details" }),
          pl.relTsys.tap((rel) => /* @__PURE__ */ u4(Entry, { title: "Type Systems", children: rel.values.map(({ tsys }) => tsys && Pill(tsys)) })),
          pl.relTags.tap((rel) => /* @__PURE__ */ u4(Entry, { title: "Tags", children: rel.values.map(({ tag }) => tag && Pill(tag)) })),
          pl.relPlatforms.tap((rel) => /* @__PURE__ */ u4(Entry, { title: "Platforms", children: rel.values.map(({ plat }) => plat && Pill(plat)) })),
          pl.relInfluencedBy.tap((rel) => /* @__PURE__ */ u4(Entry, { title: "Influenced By", children: rel.values.map(({ toPl }) => toPl && Pill(toPl)) })),
          pl.relInfluenced.tap((rel) => /* @__PURE__ */ u4(Entry, { title: "Influenced", children: rel.values.map(({ fromPl }) => fromPl && Pill(fromPl)) })),
          pl.relDialectOf.tap((rel) => /* @__PURE__ */ u4(Entry, { title: "Dialect Of", children: rel.values.map(({ toPl }) => toPl && Pill(toPl)) })),
          pl.relImplements.tap((rel) => /* @__PURE__ */ u4(Entry, { title: "Standard For", children: rel.values.map(({ toPl }) => toPl && Pill(toPl)) })),
          pl.relLicenses.tap((rel) => /* @__PURE__ */ u4(Entry, { title: "Licenses", children: rel.values.map(({ license }) => license && Pill(license)) })),
          pl.extensions.tap((extensions) => /* @__PURE__ */ u4(Entry, { title: "Extensions", children: extensions.map((name) => Pill({ key: name, name, kind: "ext" })) }))
        ] })
      ] });
    }
    return /* @__PURE__ */ u4("div", { class: "readable dark:prose-invert", ref: self2, children: content });
  }
  function Entry({ title, children }) {
    return /* @__PURE__ */ u4(k, { children: [
      /* @__PURE__ */ u4("h3", { children: title }),
      /* @__PURE__ */ u4("p", { children })
    ] });
  }
  function Pill({ key, kind, name }) {
    return /* @__PURE__ */ u4(
      "div",
      {
        "data-key": key,
        "data-kind": kind,
        class: "-skew-y-2 mr-1 mb-3 inline-block bg-primary p-1.5 font-bold font-bold text-background text-sm shadow-lg shadow-secondary outline-2 outline-secondary",
        children: name
      },
      key
    );
  }
  var EVENTS3 = {
    /** Incoming event: setup the component with a PlangsGraph. */
    inSetData: {
      type: `${TAG_NAME3}:set-data`,
      create: (pg) => customEvent(EVENTS3.inSetData.type, pg)
    }
  };

  // packages/frontend/src/components/pl-info/index.ts
  var ELEMENT_API3 = {
    setDataSource(pg) {
      send(this, EVENTS3.inSetData.create(pg));
    }
  };
  function registerPlangInfo() {
    const keys = ["header", "pg", "pl"];
    preact_custom_element_esm_default(PlInfo, TAG_NAME3, keys);
    Object.assign(window.customElements.get(TAG_NAME3)?.prototype, ELEMENT_API3);
  }

  // packages/plangs/src/filter.ts
  var filter = (predicate) => ({ value: void 0, predicate });
  var PlangFilters = class {
    filters = {
      plangName: filter((pl, regexp) => regexp.test(pl.name)),
      appearedAfter: filter((pl, date) => pl.firstAppearedAfter(date)),
      releasedAfter: filter((pl, date) => pl.releases.some((rel) => !!rel.date && rel.date > date)),
      hasLogo: filter((pl, val) => val === pl.images.some((img) => img.kind === "logo")),
      hasReleases: filter((pl, val) => val !== pl.releases.isEmpty),
      hasWikipedia: filter((pl, val) => val === pl.websites.some((site) => site.kind === "wikipedia")),
      isMainstream: filter((pl, val) => val === pl.isMainstream),
      isTranspiler: filter((pl, val) => val === pl.isTranspiler),
      extensions: filter(({ extensions }, flt) => flt.matches((key) => extensions.includes(key))),
      dialectOf: filter(({ relDialectOf }, flt) => flt.matches((key) => relDialectOf.has(key))),
      implements: filter(({ relImplements }, flt) => flt.matches((key) => relImplements.has(key))),
      influenced: filter(({ relInfluenced }, flt) => flt.matches((key) => relInfluenced.has(key))),
      influencedBy: filter(({ relInfluencedBy }, flt) => flt.matches((key) => relInfluencedBy.has(key))),
      licenses: filter(({ relLicenses }, flt) => flt.matches((key) => relLicenses.has(key))),
      paradigms: filter(({ relParadigms }, flt) => flt.matches((key) => relParadigms.has(key))),
      platforms: filter(({ relPlatforms }, flt) => flt.matches((key) => relPlatforms.has(key))),
      tags: filter(({ relTags }, flt) => flt.matches((key) => relTags.has(key))),
      typeSystems: filter(({ relTsys }, flt) => flt.matches((key) => relTsys.has(key))),
      writtenIn: filter(({ relWrittenIn }, flt) => flt.matches((key) => relWrittenIn.has(key)))
    };
    matches(key, pl) {
      const { value, predicate } = this.filters[key];
      return value === void 0 || predicate(pl, value);
    }
    matchesAll(pl) {
      for (const key of Object.keys(this.filters)) {
        if (!this.matches(key, pl)) return false;
      }
      return true;
    }
  };

  // packages/frontend/src/app/filters.ts
  function getFilters() {
    const filters = new PlangFilters();
    const flt = filters.filters;
    function collect(key, getValue, callback) {
      const input = elem(key);
      if (!input) {
        console.warn("Missing input", key);
        return;
      }
      const value = getValue(input);
      if (value) callback(value);
    }
    const trimVal = (input) => input.value.trim();
    collect("plangName", trimVal, (val) => flt.plangName.value = new RegExp(val, "i"));
    collect("appearedAfter", trimVal, (val) => flt.appearedAfter.value = val);
    collect("releasedAfter", trimVal, (val) => flt.releasedAfter.value = val);
    const getChecked = (input) => input.checked;
    collect("hasLogo", getChecked, (val) => flt.hasLogo.value = val);
    collect("hasReleases", getChecked, (val) => flt.hasReleases.value = val);
    collect("hasWikipedia", getChecked, (val) => flt.hasWikipedia.value = val);
    collect("isTranspiler", getChecked, (val) => flt.isTranspiler.value = val);
    collect("isMainstream", getChecked, (val) => flt.isMainstream.value = val);
    function getFilter(input) {
      const filter2 = matchingInputSelByName(input)?.values();
      return filter2 ? new Filter(filter2.mode, filter2.values) : void 0;
    }
    collect("dialectOf", getFilter, (val) => flt.dialectOf.value = val);
    collect("extensions", getFilter, (val) => flt.extensions.value = val);
    collect("implements", getFilter, (val) => flt.implements.value = val);
    collect("influenced", getFilter, (val) => flt.influenced.value = val);
    collect("influencedBy", getFilter, (val) => flt.influencedBy.value = val);
    collect("licenses", getFilter, (val) => flt.licenses.value = val);
    collect("paradigms", getFilter, (val) => flt.paradigms.value = val);
    collect("platforms", getFilter, (val) => flt.platforms.value = val);
    collect("tags", getFilter, (val) => flt.tags.value = val);
    collect("typeSystems", getFilter, (val) => flt.typeSystems.value = val);
    collect("writtenIn", getFilter, (val) => flt.writtenIn.value = val);
    return filters;
  }

  // packages/frontend/src/app/livereload.ts
  var pingTimer;
  var INITIAL_TIMEOUT_MS = 10;
  var PING_FREQ_MS = 10;
  var RELOAD_LATENCY_MS = 10;
  function connectLivereload(timeout = INITIAL_TIMEOUT_MS, lifecycle = "start") {
    if (pingTimer) {
      clearInterval(pingTimer);
      pingTimer = void 0;
    }
    const reconnect = () => {
      console.info("attempting livereload reconnect in", timeout, "ms");
      setTimeout(() => connectLivereload(timeout * 1.5, "error"), timeout);
    };
    const reload = () => {
      setTimeout(() => window.location.reload(), RELOAD_LATENCY_MS);
    };
    const socket = new WebSocket("/livereload");
    socket.addEventListener("open", () => {
      if (lifecycle === "error") return reload();
      socket.send("CONNECT");
      pingTimer = setInterval(() => socket.readyState === WebSocket.OPEN && socket.send("PING"), PING_FREQ_MS);
    });
    socket.addEventListener("message", (event) => {
      if (event.data === "ACK") console.info("livereload connected", /* @__PURE__ */ new Date());
      if (event.data === "RELOAD") reload();
    });
    socket.addEventListener("close", (event) => {
      reconnect();
    });
  }

  // packages/frontend/src/app/index.ts
  var CSS_COLS_KEY = "grid-template-columns";
  function adjusutGrid(plGrid, widthThumb, visibleThumbs) {
    const widthRow = window.innerWidth;
    const numCols = Math.min(Math.floor(widthRow / widthThumb), visibleThumbs);
    const maxCols = Math.floor(widthRow / (5 * 16));
    if (numCols < maxCols && visibleThumbs < maxCols) {
      plGrid.style.setProperty(CSS_COLS_KEY, `repeat(${maxCols}, minmax(5.35rem, 0fr))`);
    } else {
      plGrid.style.removeProperty(CSS_COLS_KEY);
    }
  }
  function startBrowseNav(pg) {
    console.info("Starting PL browser.");
    const plGrid = elem("plGrid");
    const thumbs = elems("plThumb");
    function updatePlangs() {
      if (thumbs.length === 0 || plGrid === void 0) return;
      const plKeys = pg.plangs(getFilters());
      let widthThumb;
      for (const div of thumbs) {
        const plKey = div.dataset.key;
        const visible = plKeys.has(plKey);
        div.classList.toggle("hidden", !visible);
        if (visible) widthThumb ??= size(div)[0];
      }
      if (widthThumb !== void 0) adjusutGrid(plGrid, widthThumb, plKeys.size);
    }
    updatePlangs();
    const debouncedUpdatePlangs = debounce_default(updatePlangs, 30);
    on(elem("hasReleases"), "input", ({ target }) => {
      const checked = target.checked;
      elem("releasedAfter")?.closest("label")?.classList.toggle("hide", !checked);
    });
    function completions(nodeKind) {
      const data = [];
      for (const [key, node] of pg.nodes[nodeKind]) {
        data.push({ value: key, label: node.data.name ?? key, pattern: (node.data.name ?? key).toLowerCase() });
      }
      return data;
    }
    for (const compl of $$("input-compl")) {
      const [inputSel, source] = [matchingInputSelByName(compl), compl.dataset.kind];
      if (!inputSel) continue;
      if (!pg.nodes[source]) {
        continue;
      }
      compl.completions = completions(source);
      compl.onSelect((item) => inputSel.addItem(item));
      inputSel.onRemove(({ by, itemsLeft }) => {
        if (by === "enterKey" && itemsLeft === 0) compl.focus();
      });
    }
    const extensions = elem("extensions");
    const extensionsSel = matchingInputSelByName(extensions);
    if (extensions && extensionsSel) {
      on(extensions, "keypress", ({ key }) => {
        if (key !== "Enter") return;
        const value = extensions.value.trim();
        if (value === "") return;
        const name = (value[0] === "." ? value : `.${value}`).toLowerCase();
        extensionsSel.addItem({ value: name, label: name });
        extensions.value = "";
      });
      extensionsSel.onRemove(({ by, itemsLeft }) => {
        if (by !== "enterKey" || itemsLeft !== 0) return;
        extensions.focus();
      });
    }
    on(elem("filters"), "input", ({ target }) => {
      if (target?.matches("input[name=plang-ext]")) return;
      debouncedUpdatePlangs();
    });
    function getPl(target) {
      const keyHolder = target.closest("[data-key]");
      if (!keyHolder || !keyHolder.dataset.key) return;
      return pg.nodes.pl.get(keyHolder.dataset.key);
    }
    const plInfo = elem("todo");
    const langTab = document.querySelector("#top-nav .lang");
    if (plInfo) {
      on(elem("todo"), "click", ({ target }) => {
        const pl = getPl(target);
        if (!pl) return;
        plInfo.pl = pl;
        if (!langTab) return;
        langTab.classList.toggle("hide", false);
        langTab.setAttribute("href", `/pl/${pl.plainKey}`);
        langTab.innerText = pl.name;
      });
    }
    on(elem("todo"), "dblclick", ({ target }) => {
      const pl = getPl(target);
      if (pl) window.location.href = `/pl/${pl.plainKey}`;
    });
    on(elem("todo"), "click", ({ target }) => {
      const pl = getPl(target);
      if (pl) plInfo.pl = pl;
    });
  }
  (async () => {
    connectLivereload();
    registerPlangInfo();
    registerInputCompl();
    registerInputSel();
    const data = await (await fetch("/plangs.json")).json();
    const pg = new PlangsGraph().loadJSON(data);
    $2("pl-info")?.setDataSource(pg);
    const [toggle, filters] = [elem("filterToggle"), elem("filters")];
    if (toggle && filters) {
      const updateToggle = () => {
        const hidden = filters.classList.contains("hidden");
        toggle.classList.toggle("bg-background/75", !hidden);
      };
      on(toggle, "click", () => {
        filters.classList.toggle("hidden");
        updateToggle();
      });
      updateToggle();
    }
    if (elem("plangName")) startBrowseNav(pg);
  })();
})();
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=app.js.map
