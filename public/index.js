var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/graphology/dist/graphology.umd.min.js
var require_graphology_umd_min = __commonJS((exports, module) => {
  (function(t, e) {
    typeof exports == "object" && typeof module != "undefined" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis != "undefined" ? globalThis : t || self).graphology = e();
  })(exports, function() {
    function t(e2) {
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
      }, t(e2);
    }
    function e(t2, e2) {
      t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, r(t2, e2);
    }
    function n(t2) {
      return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
        return t3.__proto__ || Object.getPrototypeOf(t3);
      }, n(t2);
    }
    function r(t2, e2) {
      return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
        return t3.__proto__ = e3, t3;
      }, r(t2, e2);
    }
    function i() {
      if (typeof Reflect == "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t2) {
        return false;
      }
    }
    function o(t2, e2, n2) {
      return o = i() ? Reflect.construct.bind() : function(t3, e3, n3) {
        var i2 = [null];
        i2.push.apply(i2, e3);
        var o2 = new (Function.bind.apply(t3, i2));
        return n3 && r(o2, n3.prototype), o2;
      }, o.apply(null, arguments);
    }
    function a(t2) {
      var e2 = typeof Map == "function" ? new Map : undefined;
      return a = function(t3) {
        if (t3 === null || (i2 = t3, Function.toString.call(i2).indexOf("[native code]") === -1))
          return t3;
        var i2;
        if (typeof t3 != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (e2 !== undefined) {
          if (e2.has(t3))
            return e2.get(t3);
          e2.set(t3, a2);
        }
        function a2() {
          return o(t3, arguments, n(this).constructor);
        }
        return a2.prototype = Object.create(t3.prototype, { constructor: { value: a2, enumerable: false, writable: true, configurable: true } }), r(a2, t3);
      }, a(t2);
    }
    function c(t2) {
      if (t2 === undefined)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t2;
    }
    var u = function() {
      for (var t2 = arguments[0], e2 = 1, n2 = arguments.length;e2 < n2; e2++)
        if (arguments[e2])
          for (var r2 in arguments[e2])
            t2[r2] = arguments[e2][r2];
      return t2;
    };
    function d(t2, e2, n2, r2) {
      var i2 = t2._nodes.get(e2), o2 = null;
      return i2 ? o2 = r2 === "mixed" ? i2.out && i2.out[n2] || i2.undirected && i2.undirected[n2] : r2 === "directed" ? i2.out && i2.out[n2] : i2.undirected && i2.undirected[n2] : o2;
    }
    function s(e2) {
      return t(e2) === "object" && e2 !== null;
    }
    function h(t2) {
      var e2;
      for (e2 in t2)
        return false;
      return true;
    }
    function p(t2, e2, n2) {
      Object.defineProperty(t2, e2, { enumerable: false, configurable: false, writable: true, value: n2 });
    }
    function f(t2, e2, n2) {
      var r2 = { enumerable: true, configurable: true };
      typeof n2 == "function" ? r2.get = n2 : (r2.value = n2, r2.writable = false), Object.defineProperty(t2, e2, r2);
    }
    function l(t2) {
      return !!s(t2) && !(t2.attributes && !Array.isArray(t2.attributes));
    }
    typeof Object.assign == "function" && (u = Object.assign);
    var g, y = { exports: {} }, w = typeof Reflect == "object" ? Reflect : null, v = w && typeof w.apply == "function" ? w.apply : function(t2, e2, n2) {
      return Function.prototype.apply.call(t2, e2, n2);
    };
    g = w && typeof w.ownKeys == "function" ? w.ownKeys : Object.getOwnPropertySymbols ? function(t2) {
      return Object.getOwnPropertyNames(t2).concat(Object.getOwnPropertySymbols(t2));
    } : function(t2) {
      return Object.getOwnPropertyNames(t2);
    };
    var b = Number.isNaN || function(t2) {
      return t2 != t2;
    };
    function m() {
      m.init.call(this);
    }
    y.exports = m, y.exports.once = function(t2, e2) {
      return new Promise(function(n2, r2) {
        function i2(n3) {
          t2.removeListener(e2, o2), r2(n3);
        }
        function o2() {
          typeof t2.removeListener == "function" && t2.removeListener("error", i2), n2([].slice.call(arguments));
        }
        U(t2, e2, o2, { once: true }), e2 !== "error" && function(t3, e3, n3) {
          typeof t3.on == "function" && U(t3, "error", e3, n3);
        }(t2, i2, { once: true });
      });
    }, m.EventEmitter = m, m.prototype._events = undefined, m.prototype._eventsCount = 0, m.prototype._maxListeners = undefined;
    var k = 10;
    function _(t2) {
      if (typeof t2 != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t2);
    }
    function G(t2) {
      return t2._maxListeners === undefined ? m.defaultMaxListeners : t2._maxListeners;
    }
    function x(t2, e2, n2, r2) {
      var i2, o2, a2, c2;
      if (_(n2), (o2 = t2._events) === undefined ? (o2 = t2._events = Object.create(null), t2._eventsCount = 0) : (o2.newListener !== undefined && (t2.emit("newListener", e2, n2.listener ? n2.listener : n2), o2 = t2._events), a2 = o2[e2]), a2 === undefined)
        a2 = o2[e2] = n2, ++t2._eventsCount;
      else if (typeof a2 == "function" ? a2 = o2[e2] = r2 ? [n2, a2] : [a2, n2] : r2 ? a2.unshift(n2) : a2.push(n2), (i2 = G(t2)) > 0 && a2.length > i2 && !a2.warned) {
        a2.warned = true;
        var u2 = new Error("Possible EventEmitter memory leak detected. " + a2.length + " " + String(e2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u2.name = "MaxListenersExceededWarning", u2.emitter = t2, u2.type = e2, u2.count = a2.length, c2 = u2, console && console.warn && console.warn(c2);
      }
      return t2;
    }
    function E() {
      if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function A(t2, e2, n2) {
      var r2 = { fired: false, wrapFn: undefined, target: t2, type: e2, listener: n2 }, i2 = E.bind(r2);
      return i2.listener = n2, r2.wrapFn = i2, i2;
    }
    function L(t2, e2, n2) {
      var r2 = t2._events;
      if (r2 === undefined)
        return [];
      var i2 = r2[e2];
      return i2 === undefined ? [] : typeof i2 == "function" ? n2 ? [i2.listener || i2] : [i2] : n2 ? function(t3) {
        for (var e3 = new Array(t3.length), n3 = 0;n3 < e3.length; ++n3)
          e3[n3] = t3[n3].listener || t3[n3];
        return e3;
      }(i2) : D(i2, i2.length);
    }
    function S(t2) {
      var e2 = this._events;
      if (e2 !== undefined) {
        var n2 = e2[t2];
        if (typeof n2 == "function")
          return 1;
        if (n2 !== undefined)
          return n2.length;
      }
      return 0;
    }
    function D(t2, e2) {
      for (var n2 = new Array(e2), r2 = 0;r2 < e2; ++r2)
        n2[r2] = t2[r2];
      return n2;
    }
    function U(t2, e2, n2, r2) {
      if (typeof t2.on == "function")
        r2.once ? t2.once(e2, n2) : t2.on(e2, n2);
      else {
        if (typeof t2.addEventListener != "function")
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t2);
        t2.addEventListener(e2, function i(o2) {
          r2.once && t2.removeEventListener(e2, i), n2(o2);
        });
      }
    }
    function N(t2) {
      if (typeof t2 != "function")
        throw new Error("obliterator/iterator: expecting a function!");
      this.next = t2;
    }
    Object.defineProperty(m, "defaultMaxListeners", { enumerable: true, get: function() {
      return k;
    }, set: function(t2) {
      if (typeof t2 != "number" || t2 < 0 || b(t2))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t2 + ".");
      k = t2;
    } }), m.init = function() {
      this._events !== undefined && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
    }, m.prototype.setMaxListeners = function(t2) {
      if (typeof t2 != "number" || t2 < 0 || b(t2))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t2 + ".");
      return this._maxListeners = t2, this;
    }, m.prototype.getMaxListeners = function() {
      return G(this);
    }, m.prototype.emit = function(t2) {
      for (var e2 = [], n2 = 1;n2 < arguments.length; n2++)
        e2.push(arguments[n2]);
      var r2 = t2 === "error", i2 = this._events;
      if (i2 !== undefined)
        r2 = r2 && i2.error === undefined;
      else if (!r2)
        return false;
      if (r2) {
        var o2;
        if (e2.length > 0 && (o2 = e2[0]), o2 instanceof Error)
          throw o2;
        var a2 = new Error("Unhandled error." + (o2 ? " (" + o2.message + ")" : ""));
        throw a2.context = o2, a2;
      }
      var c2 = i2[t2];
      if (c2 === undefined)
        return false;
      if (typeof c2 == "function")
        v(c2, this, e2);
      else {
        var u2 = c2.length, d2 = D(c2, u2);
        for (n2 = 0;n2 < u2; ++n2)
          v(d2[n2], this, e2);
      }
      return true;
    }, m.prototype.addListener = function(t2, e2) {
      return x(this, t2, e2, false);
    }, m.prototype.on = m.prototype.addListener, m.prototype.prependListener = function(t2, e2) {
      return x(this, t2, e2, true);
    }, m.prototype.once = function(t2, e2) {
      return _(e2), this.on(t2, A(this, t2, e2)), this;
    }, m.prototype.prependOnceListener = function(t2, e2) {
      return _(e2), this.prependListener(t2, A(this, t2, e2)), this;
    }, m.prototype.removeListener = function(t2, e2) {
      var n2, r2, i2, o2, a2;
      if (_(e2), (r2 = this._events) === undefined)
        return this;
      if ((n2 = r2[t2]) === undefined)
        return this;
      if (n2 === e2 || n2.listener === e2)
        --this._eventsCount == 0 ? this._events = Object.create(null) : (delete r2[t2], r2.removeListener && this.emit("removeListener", t2, n2.listener || e2));
      else if (typeof n2 != "function") {
        for (i2 = -1, o2 = n2.length - 1;o2 >= 0; o2--)
          if (n2[o2] === e2 || n2[o2].listener === e2) {
            a2 = n2[o2].listener, i2 = o2;
            break;
          }
        if (i2 < 0)
          return this;
        i2 === 0 ? n2.shift() : function(t3, e3) {
          for (;e3 + 1 < t3.length; e3++)
            t3[e3] = t3[e3 + 1];
          t3.pop();
        }(n2, i2), n2.length === 1 && (r2[t2] = n2[0]), r2.removeListener !== undefined && this.emit("removeListener", t2, a2 || e2);
      }
      return this;
    }, m.prototype.off = m.prototype.removeListener, m.prototype.removeAllListeners = function(t2) {
      var e2, n2, r2;
      if ((n2 = this._events) === undefined)
        return this;
      if (n2.removeListener === undefined)
        return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n2[t2] !== undefined && (--this._eventsCount == 0 ? this._events = Object.create(null) : delete n2[t2]), this;
      if (arguments.length === 0) {
        var i2, o2 = Object.keys(n2);
        for (r2 = 0;r2 < o2.length; ++r2)
          (i2 = o2[r2]) !== "removeListener" && this.removeAllListeners(i2);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if (typeof (e2 = n2[t2]) == "function")
        this.removeListener(t2, e2);
      else if (e2 !== undefined)
        for (r2 = e2.length - 1;r2 >= 0; r2--)
          this.removeListener(t2, e2[r2]);
      return this;
    }, m.prototype.listeners = function(t2) {
      return L(this, t2, true);
    }, m.prototype.rawListeners = function(t2) {
      return L(this, t2, false);
    }, m.listenerCount = function(t2, e2) {
      return typeof t2.listenerCount == "function" ? t2.listenerCount(e2) : S.call(t2, e2);
    }, m.prototype.listenerCount = S, m.prototype.eventNames = function() {
      return this._eventsCount > 0 ? g(this._events) : [];
    }, typeof Symbol != "undefined" && (N.prototype[Symbol.iterator] = function() {
      return this;
    }), N.of = function() {
      var t2 = arguments, e2 = t2.length, n2 = 0;
      return new N(function() {
        return n2 >= e2 ? { done: true } : { done: false, value: t2[n2++] };
      });
    }, N.empty = function() {
      return new N(function() {
        return { done: true };
      });
    }, N.fromSequence = function(t2) {
      var e2 = 0, n2 = t2.length;
      return new N(function() {
        return e2 >= n2 ? { done: true } : { done: false, value: t2[e2++] };
      });
    }, N.is = function(t2) {
      return t2 instanceof N || typeof t2 == "object" && t2 !== null && typeof t2.next == "function";
    };
    var O = N, j = {};
    j.ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer != "undefined", j.SYMBOL_SUPPORT = typeof Symbol != "undefined";
    var C = O, M = j, z = M.ARRAY_BUFFER_SUPPORT, W = M.SYMBOL_SUPPORT;
    var P = function(t2) {
      var e2 = function(t3) {
        return typeof t3 == "string" || Array.isArray(t3) || z && ArrayBuffer.isView(t3) ? C.fromSequence(t3) : typeof t3 != "object" || t3 === null ? null : W && typeof t3[Symbol.iterator] == "function" ? t3[Symbol.iterator]() : typeof t3.next == "function" ? t3 : null;
      }(t2);
      if (!e2)
        throw new Error("obliterator: target is not iterable nor a valid iterator.");
      return e2;
    }, R = P, K = function(t2, e2) {
      for (var n2, r2 = arguments.length > 1 ? e2 : 1 / 0, i2 = r2 !== 1 / 0 ? new Array(r2) : [], o2 = 0, a2 = R(t2);; ) {
        if (o2 === r2)
          return i2;
        if ((n2 = a2.next()).done)
          return o2 !== e2 && (i2.length = o2), i2;
        i2[o2++] = n2.value;
      }
    }, T = function(t2) {
      function n2(e2) {
        var n3;
        return (n3 = t2.call(this) || this).name = "GraphError", n3.message = e2, n3;
      }
      return e(n2, t2), n2;
    }(a(Error)), B = function(t2) {
      function n2(e2) {
        var r2;
        return (r2 = t2.call(this, e2) || this).name = "InvalidArgumentsGraphError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
      }
      return e(n2, t2), n2;
    }(T), F = function(t2) {
      function n2(e2) {
        var r2;
        return (r2 = t2.call(this, e2) || this).name = "NotFoundGraphError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
      }
      return e(n2, t2), n2;
    }(T), I = function(t2) {
      function n2(e2) {
        var r2;
        return (r2 = t2.call(this, e2) || this).name = "UsageGraphError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
      }
      return e(n2, t2), n2;
    }(T);
    function Y(t2, e2) {
      this.key = t2, this.attributes = e2, this.clear();
    }
    function q(t2, e2) {
      this.key = t2, this.attributes = e2, this.clear();
    }
    function J(t2, e2) {
      this.key = t2, this.attributes = e2, this.clear();
    }
    function V(t2, e2, n2, r2, i2) {
      this.key = e2, this.attributes = i2, this.undirected = t2, this.source = n2, this.target = r2;
    }
    Y.prototype.clear = function() {
      this.inDegree = 0, this.outDegree = 0, this.undirectedDegree = 0, this.undirectedLoops = 0, this.directedLoops = 0, this.in = {}, this.out = {}, this.undirected = {};
    }, q.prototype.clear = function() {
      this.inDegree = 0, this.outDegree = 0, this.directedLoops = 0, this.in = {}, this.out = {};
    }, J.prototype.clear = function() {
      this.undirectedDegree = 0, this.undirectedLoops = 0, this.undirected = {};
    }, V.prototype.attach = function() {
      var t2 = "out", e2 = "in";
      this.undirected && (t2 = e2 = "undirected");
      var n2 = this.source.key, r2 = this.target.key;
      this.source[t2][r2] = this, this.undirected && n2 === r2 || (this.target[e2][n2] = this);
    }, V.prototype.attachMulti = function() {
      var t2 = "out", e2 = "in", n2 = this.source.key, r2 = this.target.key;
      this.undirected && (t2 = e2 = "undirected");
      var i2 = this.source[t2], o2 = i2[r2];
      if (o2 === undefined)
        return i2[r2] = this, void (this.undirected && n2 === r2 || (this.target[e2][n2] = this));
      o2.previous = this, this.next = o2, i2[r2] = this, this.target[e2][n2] = this;
    }, V.prototype.detach = function() {
      var t2 = this.source.key, e2 = this.target.key, n2 = "out", r2 = "in";
      this.undirected && (n2 = r2 = "undirected"), delete this.source[n2][e2], delete this.target[r2][t2];
    }, V.prototype.detachMulti = function() {
      var t2 = this.source.key, e2 = this.target.key, n2 = "out", r2 = "in";
      this.undirected && (n2 = r2 = "undirected"), this.previous === undefined ? this.next === undefined ? (delete this.source[n2][e2], delete this.target[r2][t2]) : (this.next.previous = undefined, this.source[n2][e2] = this.next, this.target[r2][t2] = this.next) : (this.previous.next = this.next, this.next !== undefined && (this.next.previous = this.previous));
    };
    function H(t2, e2, n2, r2, i2, o2, a2) {
      var c2, u2, d2, s2;
      if (r2 = "" + r2, n2 === 0) {
        if (!(c2 = t2._nodes.get(r2)))
          throw new F("Graph.".concat(e2, ': could not find the "').concat(r2, '" node in the graph.'));
        d2 = i2, s2 = o2;
      } else if (n2 === 3) {
        if (i2 = "" + i2, !(u2 = t2._edges.get(i2)))
          throw new F("Graph.".concat(e2, ': could not find the "').concat(i2, '" edge in the graph.'));
        var h2 = u2.source.key, p2 = u2.target.key;
        if (r2 === h2)
          c2 = u2.target;
        else {
          if (r2 !== p2)
            throw new F("Graph.".concat(e2, ': the "').concat(r2, '" node is not attached to the "').concat(i2, '" edge (').concat(h2, ", ").concat(p2, ")."));
          c2 = u2.source;
        }
        d2 = o2, s2 = a2;
      } else {
        if (!(u2 = t2._edges.get(r2)))
          throw new F("Graph.".concat(e2, ': could not find the "').concat(r2, '" edge in the graph.'));
        c2 = n2 === 1 ? u2.source : u2.target, d2 = i2, s2 = o2;
      }
      return [c2, d2, s2];
    }
    var Q = [{ name: function(t2) {
      return "get".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
        return a2.attributes[c2];
      };
    } }, { name: function(t2) {
      return "get".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        return H(this, e2, n2, t3, r2)[0].attributes;
      };
    } }, { name: function(t2) {
      return "has".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
        return a2.attributes.hasOwnProperty(c2);
      };
    } }, { name: function(t2) {
      return "set".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2, o2) {
        var a2 = H(this, e2, n2, t3, r2, i2, o2), c2 = a2[0], u2 = a2[1], d2 = a2[2];
        return c2.attributes[u2] = d2, this.emit("nodeAttributesUpdated", { key: c2.key, type: "set", attributes: c2.attributes, name: u2 }), this;
      };
    } }, { name: function(t2) {
      return "update".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2, o2) {
        var a2 = H(this, e2, n2, t3, r2, i2, o2), c2 = a2[0], u2 = a2[1], d2 = a2[2];
        if (typeof d2 != "function")
          throw new B("Graph.".concat(e2, ": updater should be a function."));
        var s2 = c2.attributes, h2 = d2(s2[u2]);
        return s2[u2] = h2, this.emit("nodeAttributesUpdated", { key: c2.key, type: "set", attributes: c2.attributes, name: u2 }), this;
      };
    } }, { name: function(t2) {
      return "remove".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
        return delete a2.attributes[c2], this.emit("nodeAttributesUpdated", { key: a2.key, type: "remove", attributes: a2.attributes, name: c2 }), this;
      };
    } }, { name: function(t2) {
      return "replace".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
        if (!s(c2))
          throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
        return a2.attributes = c2, this.emit("nodeAttributesUpdated", { key: a2.key, type: "replace", attributes: a2.attributes }), this;
      };
    } }, { name: function(t2) {
      return "merge".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
        if (!s(c2))
          throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
        return u(a2.attributes, c2), this.emit("nodeAttributesUpdated", { key: a2.key, type: "merge", attributes: a2.attributes, data: c2 }), this;
      };
    } }, { name: function(t2) {
      return "update".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
        if (typeof c2 != "function")
          throw new B("Graph.".concat(e2, ": provided updater is not a function."));
        return a2.attributes = c2(a2.attributes), this.emit("nodeAttributesUpdated", { key: a2.key, type: "update", attributes: a2.attributes }), this;
      };
    } }];
    var X = [{ name: function(t2) {
      return "get".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o2 = "" + t3, a2 = "" + r2;
          if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        return i2.attributes[r2];
      };
    } }, { name: function(t2) {
      return "get".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3) {
        var r2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 1) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var i2 = "" + t3, o2 = "" + arguments[1];
          if (!(r2 = d(this, i2, o2, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(i2, '" - "').concat(o2, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(r2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        return r2.attributes;
      };
    } }, { name: function(t2) {
      return "has".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o2 = "" + t3, a2 = "" + r2;
          if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        return i2.attributes.hasOwnProperty(r2);
      };
    } }, { name: function(t2) {
      return "set".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 3) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var a2 = "" + t3, c2 = "" + r2;
          if (r2 = arguments[2], i2 = arguments[3], !(o2 = d(this, a2, c2, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(a2, '" - "').concat(c2, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(o2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        return o2.attributes[r2] = i2, this.emit("edgeAttributesUpdated", { key: o2.key, type: "set", attributes: o2.attributes, name: r2 }), this;
      };
    } }, { name: function(t2) {
      return "update".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2, i2) {
        var o2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 3) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var a2 = "" + t3, c2 = "" + r2;
          if (r2 = arguments[2], i2 = arguments[3], !(o2 = d(this, a2, c2, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(a2, '" - "').concat(c2, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(o2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        if (typeof i2 != "function")
          throw new B("Graph.".concat(e2, ": updater should be a function."));
        return o2.attributes[r2] = i2(o2.attributes[r2]), this.emit("edgeAttributesUpdated", { key: o2.key, type: "set", attributes: o2.attributes, name: r2 }), this;
      };
    } }, { name: function(t2) {
      return "remove".concat(t2, "Attribute");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o2 = "" + t3, a2 = "" + r2;
          if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        return delete i2.attributes[r2], this.emit("edgeAttributesUpdated", { key: i2.key, type: "remove", attributes: i2.attributes, name: r2 }), this;
      };
    } }, { name: function(t2) {
      return "replace".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o2 = "" + t3, a2 = "" + r2;
          if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        if (!s(r2))
          throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
        return i2.attributes = r2, this.emit("edgeAttributesUpdated", { key: i2.key, type: "replace", attributes: i2.attributes }), this;
      };
    } }, { name: function(t2) {
      return "merge".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o2 = "" + t3, a2 = "" + r2;
          if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        if (!s(r2))
          throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
        return u(i2.attributes, r2), this.emit("edgeAttributesUpdated", { key: i2.key, type: "merge", attributes: i2.attributes, data: r2 }), this;
      };
    } }, { name: function(t2) {
      return "update".concat(t2, "Attributes");
    }, attacher: function(t2, e2, n2) {
      t2.prototype[e2] = function(t3, r2) {
        var i2;
        if (this.type !== "mixed" && n2 !== "mixed" && n2 !== this.type)
          throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi)
            throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o2 = "" + t3, a2 = "" + r2;
          if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2)))
            throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
        } else {
          if (n2 !== "mixed")
            throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t3 = "" + t3, !(i2 = this._edges.get(t3)))
            throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
        }
        if (typeof r2 != "function")
          throw new B("Graph.".concat(e2, ": provided updater is not a function."));
        return i2.attributes = r2(i2.attributes), this.emit("edgeAttributesUpdated", { key: i2.key, type: "update", attributes: i2.attributes }), this;
      };
    } }];
    var Z = O, $ = P, tt = function() {
      var t2 = arguments, e2 = null, n2 = -1;
      return new Z(function() {
        for (var r2 = null;; ) {
          if (e2 === null) {
            if (++n2 >= t2.length)
              return { done: true };
            e2 = $(t2[n2]);
          }
          if ((r2 = e2.next()).done !== true)
            break;
          e2 = null;
        }
        return r2;
      });
    }, et = [{ name: "edges", type: "mixed" }, { name: "inEdges", type: "directed", direction: "in" }, { name: "outEdges", type: "directed", direction: "out" }, { name: "inboundEdges", type: "mixed", direction: "in" }, { name: "outboundEdges", type: "mixed", direction: "out" }, { name: "directedEdges", type: "directed" }, { name: "undirectedEdges", type: "undirected" }];
    function nt(t2, e2, n2, r2) {
      var i2 = false;
      for (var o2 in e2)
        if (o2 !== r2) {
          var a2 = e2[o2];
          if (i2 = n2(a2.key, a2.attributes, a2.source.key, a2.target.key, a2.source.attributes, a2.target.attributes, a2.undirected), t2 && i2)
            return a2.key;
        }
    }
    function rt(t2, e2, n2, r2) {
      var i2, o2, a2, c2 = false;
      for (var u2 in e2)
        if (u2 !== r2) {
          i2 = e2[u2];
          do {
            if (o2 = i2.source, a2 = i2.target, c2 = n2(i2.key, i2.attributes, o2.key, a2.key, o2.attributes, a2.attributes, i2.undirected), t2 && c2)
              return i2.key;
            i2 = i2.next;
          } while (i2 !== undefined);
        }
    }
    function it(t2, e2) {
      var n2, r2 = Object.keys(t2), i2 = r2.length, o2 = 0;
      return new O(function() {
        do {
          if (n2)
            n2 = n2.next;
          else {
            if (o2 >= i2)
              return { done: true };
            var a2 = r2[o2++];
            if (a2 === e2) {
              n2 = undefined;
              continue;
            }
            n2 = t2[a2];
          }
        } while (!n2);
        return { done: false, value: { edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected } };
      });
    }
    function ot(t2, e2, n2, r2) {
      var i2 = e2[n2];
      if (i2) {
        var { source: o2, target: a2 } = i2;
        return r2(i2.key, i2.attributes, o2.key, a2.key, o2.attributes, a2.attributes, i2.undirected) && t2 ? i2.key : undefined;
      }
    }
    function at(t2, e2, n2, r2) {
      var i2 = e2[n2];
      if (i2) {
        var o2 = false;
        do {
          if (o2 = r2(i2.key, i2.attributes, i2.source.key, i2.target.key, i2.source.attributes, i2.target.attributes, i2.undirected), t2 && o2)
            return i2.key;
          i2 = i2.next;
        } while (i2 !== undefined);
      }
    }
    function ct(t2, e2) {
      var n2 = t2[e2];
      return n2.next !== undefined ? new O(function() {
        if (!n2)
          return { done: true };
        var t3 = { edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected };
        return n2 = n2.next, { done: false, value: t3 };
      }) : O.of({ edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected });
    }
    function ut(t2, e2) {
      if (t2.size === 0)
        return [];
      if (e2 === "mixed" || e2 === t2.type)
        return typeof Array.from == "function" ? Array.from(t2._edges.keys()) : K(t2._edges.keys(), t2._edges.size);
      for (var n2, r2, i2 = e2 === "undirected" ? t2.undirectedSize : t2.directedSize, o2 = new Array(i2), a2 = e2 === "undirected", c2 = t2._edges.values(), u2 = 0;(n2 = c2.next()).done !== true; )
        (r2 = n2.value).undirected === a2 && (o2[u2++] = r2.key);
      return o2;
    }
    function dt(t2, e2, n2, r2) {
      if (e2.size !== 0) {
        for (var i2, o2, a2 = n2 !== "mixed" && n2 !== e2.type, c2 = n2 === "undirected", u2 = false, d2 = e2._edges.values();(i2 = d2.next()).done !== true; )
          if (o2 = i2.value, !a2 || o2.undirected === c2) {
            var s2 = o2, h2 = s2.key, p2 = s2.attributes, f2 = s2.source, l2 = s2.target;
            if (u2 = r2(h2, p2, f2.key, l2.key, f2.attributes, l2.attributes, o2.undirected), t2 && u2)
              return h2;
          }
      }
    }
    function st(t2, e2) {
      if (t2.size === 0)
        return O.empty();
      var n2 = e2 !== "mixed" && e2 !== t2.type, r2 = e2 === "undirected", i2 = t2._edges.values();
      return new O(function() {
        for (var t3, e3;; ) {
          if ((t3 = i2.next()).done)
            return t3;
          if (e3 = t3.value, !n2 || e3.undirected === r2)
            break;
        }
        return { value: { edge: e3.key, attributes: e3.attributes, source: e3.source.key, target: e3.target.key, sourceAttributes: e3.source.attributes, targetAttributes: e3.target.attributes, undirected: e3.undirected }, done: false };
      });
    }
    function ht(t2, e2, n2, r2, i2, o2) {
      var a2, c2 = e2 ? rt : nt;
      if (n2 !== "undirected") {
        if (r2 !== "out" && (a2 = c2(t2, i2.in, o2), t2 && a2))
          return a2;
        if (r2 !== "in" && (a2 = c2(t2, i2.out, o2, r2 ? undefined : i2.key), t2 && a2))
          return a2;
      }
      if (n2 !== "directed" && (a2 = c2(t2, i2.undirected, o2), t2 && a2))
        return a2;
    }
    function pt(t2, e2, n2, r2) {
      var i2 = [];
      return ht(false, t2, e2, n2, r2, function(t3) {
        i2.push(t3);
      }), i2;
    }
    function ft(t2, e2, n2) {
      var r2 = O.empty();
      return t2 !== "undirected" && (e2 !== "out" && n2.in !== undefined && (r2 = tt(r2, it(n2.in))), e2 !== "in" && n2.out !== undefined && (r2 = tt(r2, it(n2.out, e2 ? undefined : n2.key)))), t2 !== "directed" && n2.undirected !== undefined && (r2 = tt(r2, it(n2.undirected))), r2;
    }
    function lt(t2, e2, n2, r2, i2, o2, a2) {
      var c2, u2 = n2 ? at : ot;
      if (e2 !== "undirected") {
        if (i2.in !== undefined && r2 !== "out" && (c2 = u2(t2, i2.in, o2, a2), t2 && c2))
          return c2;
        if (i2.out !== undefined && r2 !== "in" && (r2 || i2.key !== o2) && (c2 = u2(t2, i2.out, o2, a2), t2 && c2))
          return c2;
      }
      if (e2 !== "directed" && i2.undirected !== undefined && (c2 = u2(t2, i2.undirected, o2, a2), t2 && c2))
        return c2;
    }
    function gt(t2, e2, n2, r2, i2) {
      var o2 = [];
      return lt(false, t2, e2, n2, r2, i2, function(t3) {
        o2.push(t3);
      }), o2;
    }
    function yt(t2, e2, n2, r2) {
      var i2 = O.empty();
      return t2 !== "undirected" && (n2.in !== undefined && e2 !== "out" && (r2 in n2.in) && (i2 = tt(i2, ct(n2.in, r2))), n2.out !== undefined && e2 !== "in" && (r2 in n2.out) && (e2 || n2.key !== r2) && (i2 = tt(i2, ct(n2.out, r2)))), t2 !== "directed" && n2.undirected !== undefined && r2 in n2.undirected && (i2 = tt(i2, ct(n2.undirected, r2))), i2;
    }
    var wt = [{ name: "neighbors", type: "mixed" }, { name: "inNeighbors", type: "directed", direction: "in" }, { name: "outNeighbors", type: "directed", direction: "out" }, { name: "inboundNeighbors", type: "mixed", direction: "in" }, { name: "outboundNeighbors", type: "mixed", direction: "out" }, { name: "directedNeighbors", type: "directed" }, { name: "undirectedNeighbors", type: "undirected" }];
    function vt() {
      this.A = null, this.B = null;
    }
    function bt(t2, e2, n2, r2, i2) {
      for (var o2 in r2) {
        var a2 = r2[o2], c2 = a2.source, u2 = a2.target, d2 = c2 === n2 ? u2 : c2;
        if (!e2 || !e2.has(d2.key)) {
          var s2 = i2(d2.key, d2.attributes);
          if (t2 && s2)
            return d2.key;
        }
      }
    }
    function mt(t2, e2, n2, r2, i2) {
      if (e2 !== "mixed") {
        if (e2 === "undirected")
          return bt(t2, null, r2, r2.undirected, i2);
        if (typeof n2 == "string")
          return bt(t2, null, r2, r2[n2], i2);
      }
      var o2, a2 = new vt;
      if (e2 !== "undirected") {
        if (n2 !== "out") {
          if (o2 = bt(t2, null, r2, r2.in, i2), t2 && o2)
            return o2;
          a2.wrap(r2.in);
        }
        if (n2 !== "in") {
          if (o2 = bt(t2, a2, r2, r2.out, i2), t2 && o2)
            return o2;
          a2.wrap(r2.out);
        }
      }
      if (e2 !== "directed" && (o2 = bt(t2, a2, r2, r2.undirected, i2), t2 && o2))
        return o2;
    }
    function kt(t2, e2, n2) {
      var r2 = Object.keys(n2), i2 = r2.length, o2 = 0;
      return new O(function() {
        var a2 = null;
        do {
          if (o2 >= i2)
            return t2 && t2.wrap(n2), { done: true };
          var c2 = n2[r2[o2++]], u2 = c2.source, d2 = c2.target;
          a2 = u2 === e2 ? d2 : u2, t2 && t2.has(a2.key) && (a2 = null);
        } while (a2 === null);
        return { done: false, value: { neighbor: a2.key, attributes: a2.attributes } };
      });
    }
    function _t(t2, e2) {
      var { name: n2, type: r2, direction: i2 } = e2;
      t2.prototype[n2] = function(t3) {
        if (r2 !== "mixed" && this.type !== "mixed" && r2 !== this.type)
          return [];
        t3 = "" + t3;
        var e3 = this._nodes.get(t3);
        if (e3 === undefined)
          throw new F("Graph.".concat(n2, ': could not find the "').concat(t3, '" node in the graph.'));
        return function(t4, e4, n3) {
          if (t4 !== "mixed") {
            if (t4 === "undirected")
              return Object.keys(n3.undirected);
            if (typeof e4 == "string")
              return Object.keys(n3[e4]);
          }
          var r3 = [];
          return mt(false, t4, e4, n3, function(t5) {
            r3.push(t5);
          }), r3;
        }(r2 === "mixed" ? this.type : r2, i2, e3);
      };
    }
    function Gt(t2, e2) {
      var { name: n2, type: r2, direction: i2 } = e2, o2 = n2.slice(0, -1) + "Entries";
      t2.prototype[o2] = function(t3) {
        if (r2 !== "mixed" && this.type !== "mixed" && r2 !== this.type)
          return O.empty();
        t3 = "" + t3;
        var e3 = this._nodes.get(t3);
        if (e3 === undefined)
          throw new F("Graph.".concat(o2, ': could not find the "').concat(t3, '" node in the graph.'));
        return function(t4, e4, n3) {
          if (t4 !== "mixed") {
            if (t4 === "undirected")
              return kt(null, n3, n3.undirected);
            if (typeof e4 == "string")
              return kt(null, n3, n3[e4]);
          }
          var r3 = O.empty(), i3 = new vt;
          return t4 !== "undirected" && (e4 !== "out" && (r3 = tt(r3, kt(i3, n3, n3.in))), e4 !== "in" && (r3 = tt(r3, kt(i3, n3, n3.out)))), t4 !== "directed" && (r3 = tt(r3, kt(i3, n3, n3.undirected))), r3;
        }(r2 === "mixed" ? this.type : r2, i2, e3);
      };
    }
    function xt(t2, e2, n2, r2, i2) {
      for (var o2, a2, c2, u2, d2, s2, h2, p2 = r2._nodes.values(), f2 = r2.type;(o2 = p2.next()).done !== true; ) {
        var l2 = false;
        if (a2 = o2.value, f2 !== "undirected")
          for (c2 in u2 = a2.out) {
            d2 = u2[c2];
            do {
              if (s2 = d2.target, l2 = true, h2 = i2(a2.key, s2.key, a2.attributes, s2.attributes, d2.key, d2.attributes, d2.undirected), t2 && h2)
                return d2;
              d2 = d2.next;
            } while (d2);
          }
        if (f2 !== "directed") {
          for (c2 in u2 = a2.undirected)
            if (!(e2 && a2.key > c2)) {
              d2 = u2[c2];
              do {
                if ((s2 = d2.target).key !== c2 && (s2 = d2.source), l2 = true, h2 = i2(a2.key, s2.key, a2.attributes, s2.attributes, d2.key, d2.attributes, d2.undirected), t2 && h2)
                  return d2;
                d2 = d2.next;
              } while (d2);
            }
        }
        if (n2 && !l2 && (h2 = i2(a2.key, null, a2.attributes, null, null, null, null), t2 && h2))
          return null;
      }
    }
    function Et(t2) {
      if (!s(t2))
        throw new B('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
      if (!("key" in t2))
        throw new B("Graph.import: serialized node is missing its key.");
      if ("attributes" in t2 && (!s(t2.attributes) || t2.attributes === null))
        throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
    }
    function At(t2) {
      if (!s(t2))
        throw new B('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
      if (!("source" in t2))
        throw new B("Graph.import: serialized edge is missing its source.");
      if (!("target" in t2))
        throw new B("Graph.import: serialized edge is missing its target.");
      if ("attributes" in t2 && (!s(t2.attributes) || t2.attributes === null))
        throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
      if ("undirected" in t2 && typeof t2.undirected != "boolean")
        throw new B("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.");
    }
    vt.prototype.wrap = function(t2) {
      this.A === null ? this.A = t2 : this.B === null && (this.B = t2);
    }, vt.prototype.has = function(t2) {
      return this.A !== null && t2 in this.A || this.B !== null && t2 in this.B;
    };
    var Lt, St = (Lt = 255 & Math.floor(256 * Math.random()), function() {
      return Lt++;
    }), Dt = new Set(["directed", "undirected", "mixed"]), Ut = new Set(["domain", "_events", "_eventsCount", "_maxListeners"]), Nt = { allowSelfLoops: true, multi: false, type: "mixed" };
    function Ot(t2, e2, n2) {
      var r2 = new t2.NodeDataClass(e2, n2);
      return t2._nodes.set(e2, r2), t2.emit("nodeAdded", { key: e2, attributes: n2 }), r2;
    }
    function jt(t2, e2, n2, r2, i2, o2, a2, c2) {
      if (!r2 && t2.type === "undirected")
        throw new I("Graph.".concat(e2, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
      if (r2 && t2.type === "directed")
        throw new I("Graph.".concat(e2, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
      if (c2 && !s(c2))
        throw new B("Graph.".concat(e2, ': invalid attributes. Expecting an object but got "').concat(c2, '"'));
      if (o2 = "" + o2, a2 = "" + a2, c2 = c2 || {}, !t2.allowSelfLoops && o2 === a2)
        throw new I("Graph.".concat(e2, ': source & target are the same ("').concat(o2, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
      var u2 = t2._nodes.get(o2), d2 = t2._nodes.get(a2);
      if (!u2)
        throw new F("Graph.".concat(e2, ': source node "').concat(o2, '" not found.'));
      if (!d2)
        throw new F("Graph.".concat(e2, ': target node "').concat(a2, '" not found.'));
      var h2 = { key: null, undirected: r2, source: o2, target: a2, attributes: c2 };
      if (n2)
        i2 = t2._edgeKeyGenerator();
      else if (i2 = "" + i2, t2._edges.has(i2))
        throw new I("Graph.".concat(e2, ': the "').concat(i2, '" edge already exists in the graph.'));
      if (!t2.multi && (r2 ? u2.undirected[a2] !== undefined : u2.out[a2] !== undefined))
        throw new I("Graph.".concat(e2, ': an edge linking "').concat(o2, '" to "').concat(a2, "\" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option."));
      var p2 = new V(r2, i2, u2, d2, c2);
      t2._edges.set(i2, p2);
      var f2 = o2 === a2;
      return r2 ? (u2.undirectedDegree++, d2.undirectedDegree++, f2 && (u2.undirectedLoops++, t2._undirectedSelfLoopCount++)) : (u2.outDegree++, d2.inDegree++, f2 && (u2.directedLoops++, t2._directedSelfLoopCount++)), t2.multi ? p2.attachMulti() : p2.attach(), r2 ? t2._undirectedSize++ : t2._directedSize++, h2.key = i2, t2.emit("edgeAdded", h2), i2;
    }
    function Ct(t2, e2, n2, r2, i2, o2, a2, c2, d2) {
      if (!r2 && t2.type === "undirected")
        throw new I("Graph.".concat(e2, ": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));
      if (r2 && t2.type === "directed")
        throw new I("Graph.".concat(e2, ": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));
      if (c2) {
        if (d2) {
          if (typeof c2 != "function")
            throw new B("Graph.".concat(e2, ': invalid updater function. Expecting a function but got "').concat(c2, '"'));
        } else if (!s(c2))
          throw new B("Graph.".concat(e2, ': invalid attributes. Expecting an object but got "').concat(c2, '"'));
      }
      var h2;
      if (o2 = "" + o2, a2 = "" + a2, d2 && (h2 = c2, c2 = undefined), !t2.allowSelfLoops && o2 === a2)
        throw new I("Graph.".concat(e2, ': source & target are the same ("').concat(o2, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
      var p2, f2, l2 = t2._nodes.get(o2), g2 = t2._nodes.get(a2);
      if (!n2 && (p2 = t2._edges.get(i2))) {
        if (!(p2.source.key === o2 && p2.target.key === a2 || r2 && p2.source.key === a2 && p2.target.key === o2))
          throw new I("Graph.".concat(e2, ': inconsistency detected when attempting to merge the "').concat(i2, '" edge with "').concat(o2, '" source & "').concat(a2, '" target vs. ("').concat(p2.source.key, '", "').concat(p2.target.key, '").'));
        f2 = p2;
      }
      if (f2 || t2.multi || !l2 || (f2 = r2 ? l2.undirected[a2] : l2.out[a2]), f2) {
        var y2 = [f2.key, false, false, false];
        if (d2 ? !h2 : !c2)
          return y2;
        if (d2) {
          var w2 = f2.attributes;
          f2.attributes = h2(w2), t2.emit("edgeAttributesUpdated", { type: "replace", key: f2.key, attributes: f2.attributes });
        } else
          u(f2.attributes, c2), t2.emit("edgeAttributesUpdated", { type: "merge", key: f2.key, attributes: f2.attributes, data: c2 });
        return y2;
      }
      c2 = c2 || {}, d2 && h2 && (c2 = h2(c2));
      var v2 = { key: null, undirected: r2, source: o2, target: a2, attributes: c2 };
      if (n2)
        i2 = t2._edgeKeyGenerator();
      else if (i2 = "" + i2, t2._edges.has(i2))
        throw new I("Graph.".concat(e2, ': the "').concat(i2, '" edge already exists in the graph.'));
      var b2 = false, m2 = false;
      l2 || (l2 = Ot(t2, o2, {}), b2 = true, o2 === a2 && (g2 = l2, m2 = true)), g2 || (g2 = Ot(t2, a2, {}), m2 = true), p2 = new V(r2, i2, l2, g2, c2), t2._edges.set(i2, p2);
      var k2 = o2 === a2;
      return r2 ? (l2.undirectedDegree++, g2.undirectedDegree++, k2 && (l2.undirectedLoops++, t2._undirectedSelfLoopCount++)) : (l2.outDegree++, g2.inDegree++, k2 && (l2.directedLoops++, t2._directedSelfLoopCount++)), t2.multi ? p2.attachMulti() : p2.attach(), r2 ? t2._undirectedSize++ : t2._directedSize++, v2.key = i2, t2.emit("edgeAdded", v2), [i2, true, b2, m2];
    }
    function Mt(t2, e2) {
      t2._edges.delete(e2.key);
      var { source: n2, target: r2, attributes: i2, undirected: o2 } = e2, a2 = n2 === r2;
      o2 ? (n2.undirectedDegree--, r2.undirectedDegree--, a2 && (n2.undirectedLoops--, t2._undirectedSelfLoopCount--)) : (n2.outDegree--, r2.inDegree--, a2 && (n2.directedLoops--, t2._directedSelfLoopCount--)), t2.multi ? e2.detachMulti() : e2.detach(), o2 ? t2._undirectedSize-- : t2._directedSize--, t2.emit("edgeDropped", { key: e2.key, attributes: i2, source: n2.key, target: r2.key, undirected: o2 });
    }
    var zt = function(n2) {
      function r2(t2) {
        var e2;
        if (e2 = n2.call(this) || this, typeof (t2 = u({}, Nt, t2)).multi != "boolean")
          throw new B("Graph.constructor: invalid 'multi' option. Expecting a boolean but got \"".concat(t2.multi, '".'));
        if (!Dt.has(t2.type))
          throw new B('Graph.constructor: invalid \'type\' option. Should be one of "mixed", "directed" or "undirected" but got "'.concat(t2.type, '".'));
        if (typeof t2.allowSelfLoops != "boolean")
          throw new B("Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got \"".concat(t2.allowSelfLoops, '".'));
        var r3 = t2.type === "mixed" ? Y : t2.type === "directed" ? q : J;
        p(c(e2), "NodeDataClass", r3);
        var i3 = "geid_" + St() + "_", o2 = 0;
        return p(c(e2), "_attributes", {}), p(c(e2), "_nodes", new Map), p(c(e2), "_edges", new Map), p(c(e2), "_directedSize", 0), p(c(e2), "_undirectedSize", 0), p(c(e2), "_directedSelfLoopCount", 0), p(c(e2), "_undirectedSelfLoopCount", 0), p(c(e2), "_edgeKeyGenerator", function() {
          var t3;
          do {
            t3 = i3 + o2++;
          } while (e2._edges.has(t3));
          return t3;
        }), p(c(e2), "_options", t2), Ut.forEach(function(t3) {
          return p(c(e2), t3, e2[t3]);
        }), f(c(e2), "order", function() {
          return e2._nodes.size;
        }), f(c(e2), "size", function() {
          return e2._edges.size;
        }), f(c(e2), "directedSize", function() {
          return e2._directedSize;
        }), f(c(e2), "undirectedSize", function() {
          return e2._undirectedSize;
        }), f(c(e2), "selfLoopCount", function() {
          return e2._directedSelfLoopCount + e2._undirectedSelfLoopCount;
        }), f(c(e2), "directedSelfLoopCount", function() {
          return e2._directedSelfLoopCount;
        }), f(c(e2), "undirectedSelfLoopCount", function() {
          return e2._undirectedSelfLoopCount;
        }), f(c(e2), "multi", e2._options.multi), f(c(e2), "type", e2._options.type), f(c(e2), "allowSelfLoops", e2._options.allowSelfLoops), f(c(e2), "implementation", function() {
          return "graphology";
        }), e2;
      }
      e(r2, n2);
      var i2 = r2.prototype;
      return i2._resetInstanceCounters = function() {
        this._directedSize = 0, this._undirectedSize = 0, this._directedSelfLoopCount = 0, this._undirectedSelfLoopCount = 0;
      }, i2.hasNode = function(t2) {
        return this._nodes.has("" + t2);
      }, i2.hasDirectedEdge = function(t2, e2) {
        if (this.type === "undirected")
          return false;
        if (arguments.length === 1) {
          var n3 = "" + t2, r3 = this._edges.get(n3);
          return !!r3 && !r3.undirected;
        }
        if (arguments.length === 2) {
          t2 = "" + t2, e2 = "" + e2;
          var i3 = this._nodes.get(t2);
          return !!i3 && i3.out.hasOwnProperty(e2);
        }
        throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
      }, i2.hasUndirectedEdge = function(t2, e2) {
        if (this.type === "directed")
          return false;
        if (arguments.length === 1) {
          var n3 = "" + t2, r3 = this._edges.get(n3);
          return !!r3 && r3.undirected;
        }
        if (arguments.length === 2) {
          t2 = "" + t2, e2 = "" + e2;
          var i3 = this._nodes.get(t2);
          return !!i3 && i3.undirected.hasOwnProperty(e2);
        }
        throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
      }, i2.hasEdge = function(t2, e2) {
        if (arguments.length === 1) {
          var n3 = "" + t2;
          return this._edges.has(n3);
        }
        if (arguments.length === 2) {
          t2 = "" + t2, e2 = "" + e2;
          var r3 = this._nodes.get(t2);
          return !!r3 && (r3.out !== undefined && r3.out.hasOwnProperty(e2) || r3.undirected !== undefined && r3.undirected.hasOwnProperty(e2));
        }
        throw new B("Graph.hasEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
      }, i2.directedEdge = function(t2, e2) {
        if (this.type !== "undirected") {
          if (t2 = "" + t2, e2 = "" + e2, this.multi)
            throw new I("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");
          var n3 = this._nodes.get(t2);
          if (!n3)
            throw new F('Graph.directedEdge: could not find the "'.concat(t2, '" source node in the graph.'));
          if (!this._nodes.has(e2))
            throw new F('Graph.directedEdge: could not find the "'.concat(e2, '" target node in the graph.'));
          var r3 = n3.out && n3.out[e2] || undefined;
          return r3 ? r3.key : undefined;
        }
      }, i2.undirectedEdge = function(t2, e2) {
        if (this.type !== "directed") {
          if (t2 = "" + t2, e2 = "" + e2, this.multi)
            throw new I("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");
          var n3 = this._nodes.get(t2);
          if (!n3)
            throw new F('Graph.undirectedEdge: could not find the "'.concat(t2, '" source node in the graph.'));
          if (!this._nodes.has(e2))
            throw new F('Graph.undirectedEdge: could not find the "'.concat(e2, '" target node in the graph.'));
          var r3 = n3.undirected && n3.undirected[e2] || undefined;
          return r3 ? r3.key : undefined;
        }
      }, i2.edge = function(t2, e2) {
        if (this.multi)
          throw new I("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.edge: could not find the "'.concat(t2, '" source node in the graph.'));
        if (!this._nodes.has(e2))
          throw new F('Graph.edge: could not find the "'.concat(e2, '" target node in the graph.'));
        var r3 = n3.out && n3.out[e2] || n3.undirected && n3.undirected[e2] || undefined;
        if (r3)
          return r3.key;
      }, i2.areDirectedNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areDirectedNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && ((e2 in n3.in) || (e2 in n3.out));
      }, i2.areOutNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areOutNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && e2 in n3.out;
      }, i2.areInNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areInNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && e2 in n3.in;
      }, i2.areUndirectedNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areUndirectedNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "directed" && e2 in n3.undirected;
      }, i2.areNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && ((e2 in n3.in) || (e2 in n3.out)) || this.type !== "directed" && e2 in n3.undirected;
      }, i2.areInboundNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areInboundNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && e2 in n3.in || this.type !== "directed" && e2 in n3.undirected;
      }, i2.areOutboundNeighbors = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.areOutboundNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type !== "undirected" && e2 in n3.out || this.type !== "directed" && e2 in n3.undirected;
      }, i2.inDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.inDegree: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.inDegree;
      }, i2.outDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.outDegree: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.outDegree;
      }, i2.directedDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.directedDegree: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.inDegree + e2.outDegree;
      }, i2.undirectedDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.undirectedDegree: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "directed" ? 0 : e2.undirectedDegree;
      }, i2.inboundDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.inboundDegree: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree), this.type !== "undirected" && (n3 += e2.inDegree), n3;
      }, i2.outboundDegree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.outboundDegree: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree), this.type !== "undirected" && (n3 += e2.outDegree), n3;
      }, i2.degree = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.degree: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree), this.type !== "undirected" && (n3 += e2.inDegree + e2.outDegree), n3;
      }, i2.inDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.inDegree - e2.directedLoops;
      }, i2.outDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.outDegree - e2.directedLoops;
      }, i2.directedDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "undirected" ? 0 : e2.inDegree + e2.outDegree - 2 * e2.directedLoops;
      }, i2.undirectedDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        return this.type === "directed" ? 0 : e2.undirectedDegree - 2 * e2.undirectedLoops;
      }, i2.inboundDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0, r3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), this.type !== "undirected" && (n3 += e2.inDegree, r3 += e2.directedLoops), n3 - r3;
      }, i2.outboundDegreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0, r3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), this.type !== "undirected" && (n3 += e2.outDegree, r3 += e2.directedLoops), n3 - r3;
      }, i2.degreeWithoutSelfLoops = function(t2) {
        t2 = "" + t2;
        var e2 = this._nodes.get(t2);
        if (!e2)
          throw new F('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
        var n3 = 0, r3 = 0;
        return this.type !== "directed" && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), this.type !== "undirected" && (n3 += e2.inDegree + e2.outDegree, r3 += 2 * e2.directedLoops), n3 - r3;
      }, i2.source = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.source: could not find the "'.concat(t2, '" edge in the graph.'));
        return e2.source.key;
      }, i2.target = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.target: could not find the "'.concat(t2, '" edge in the graph.'));
        return e2.target.key;
      }, i2.extremities = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.extremities: could not find the "'.concat(t2, '" edge in the graph.'));
        return [e2.source.key, e2.target.key];
      }, i2.opposite = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._edges.get(e2);
        if (!n3)
          throw new F('Graph.opposite: could not find the "'.concat(e2, '" edge in the graph.'));
        var r3 = n3.source.key, i3 = n3.target.key;
        if (t2 === r3)
          return i3;
        if (t2 === i3)
          return r3;
        throw new F('Graph.opposite: the "'.concat(t2, '" node is not attached to the "').concat(e2, '" edge (').concat(r3, ", ").concat(i3, ")."));
      }, i2.hasExtremity = function(t2, e2) {
        t2 = "" + t2, e2 = "" + e2;
        var n3 = this._edges.get(t2);
        if (!n3)
          throw new F('Graph.hasExtremity: could not find the "'.concat(t2, '" edge in the graph.'));
        return n3.source.key === e2 || n3.target.key === e2;
      }, i2.isUndirected = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.isUndirected: could not find the "'.concat(t2, '" edge in the graph.'));
        return e2.undirected;
      }, i2.isDirected = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.isDirected: could not find the "'.concat(t2, '" edge in the graph.'));
        return !e2.undirected;
      }, i2.isSelfLoop = function(t2) {
        t2 = "" + t2;
        var e2 = this._edges.get(t2);
        if (!e2)
          throw new F('Graph.isSelfLoop: could not find the "'.concat(t2, '" edge in the graph.'));
        return e2.source === e2.target;
      }, i2.addNode = function(t2, e2) {
        var n3 = function(t3, e3, n4) {
          if (n4 && !s(n4))
            throw new B('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n4, '"'));
          if (e3 = "" + e3, n4 = n4 || {}, t3._nodes.has(e3))
            throw new I('Graph.addNode: the "'.concat(e3, '" node already exist in the graph.'));
          var r3 = new t3.NodeDataClass(e3, n4);
          return t3._nodes.set(e3, r3), t3.emit("nodeAdded", { key: e3, attributes: n4 }), r3;
        }(this, t2, e2);
        return n3.key;
      }, i2.mergeNode = function(t2, e2) {
        if (e2 && !s(e2))
          throw new B('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e2, '"'));
        t2 = "" + t2, e2 = e2 || {};
        var n3 = this._nodes.get(t2);
        return n3 ? (e2 && (u(n3.attributes, e2), this.emit("nodeAttributesUpdated", { type: "merge", key: t2, attributes: n3.attributes, data: e2 })), [t2, false]) : (n3 = new this.NodeDataClass(t2, e2), this._nodes.set(t2, n3), this.emit("nodeAdded", { key: t2, attributes: e2 }), [t2, true]);
      }, i2.updateNode = function(t2, e2) {
        if (e2 && typeof e2 != "function")
          throw new B('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e2, '"'));
        t2 = "" + t2;
        var n3 = this._nodes.get(t2);
        if (n3) {
          if (e2) {
            var r3 = n3.attributes;
            n3.attributes = e2(r3), this.emit("nodeAttributesUpdated", { type: "replace", key: t2, attributes: n3.attributes });
          }
          return [t2, false];
        }
        var i3 = e2 ? e2({}) : {};
        return n3 = new this.NodeDataClass(t2, i3), this._nodes.set(t2, n3), this.emit("nodeAdded", { key: t2, attributes: i3 }), [t2, true];
      }, i2.dropNode = function(t2) {
        t2 = "" + t2;
        var e2, n3 = this._nodes.get(t2);
        if (!n3)
          throw new F('Graph.dropNode: could not find the "'.concat(t2, '" node in the graph.'));
        if (this.type !== "undirected") {
          for (var r3 in n3.out) {
            e2 = n3.out[r3];
            do {
              Mt(this, e2), e2 = e2.next;
            } while (e2);
          }
          for (var i3 in n3.in) {
            e2 = n3.in[i3];
            do {
              Mt(this, e2), e2 = e2.next;
            } while (e2);
          }
        }
        if (this.type !== "directed")
          for (var o2 in n3.undirected) {
            e2 = n3.undirected[o2];
            do {
              Mt(this, e2), e2 = e2.next;
            } while (e2);
          }
        this._nodes.delete(t2), this.emit("nodeDropped", { key: t2, attributes: n3.attributes });
      }, i2.dropEdge = function(t2) {
        var e2;
        if (arguments.length > 1) {
          var n3 = "" + arguments[0], r3 = "" + arguments[1];
          if (!(e2 = d(this, n3, r3, this.type)))
            throw new F('Graph.dropEdge: could not find the "'.concat(n3, '" -> "').concat(r3, '" edge in the graph.'));
        } else if (t2 = "" + t2, !(e2 = this._edges.get(t2)))
          throw new F('Graph.dropEdge: could not find the "'.concat(t2, '" edge in the graph.'));
        return Mt(this, e2), this;
      }, i2.dropDirectedEdge = function(t2, e2) {
        if (arguments.length < 2)
          throw new I("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
        if (this.multi)
          throw new I("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
        var n3 = d(this, t2 = "" + t2, e2 = "" + e2, "directed");
        if (!n3)
          throw new F('Graph.dropDirectedEdge: could not find a "'.concat(t2, '" -> "').concat(e2, '" edge in the graph.'));
        return Mt(this, n3), this;
      }, i2.dropUndirectedEdge = function(t2, e2) {
        if (arguments.length < 2)
          throw new I("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
        if (this.multi)
          throw new I("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
        var n3 = d(this, t2, e2, "undirected");
        if (!n3)
          throw new F('Graph.dropUndirectedEdge: could not find a "'.concat(t2, '" -> "').concat(e2, '" edge in the graph.'));
        return Mt(this, n3), this;
      }, i2.clear = function() {
        this._edges.clear(), this._nodes.clear(), this._resetInstanceCounters(), this.emit("cleared");
      }, i2.clearEdges = function() {
        for (var t2, e2 = this._nodes.values();(t2 = e2.next()).done !== true; )
          t2.value.clear();
        this._edges.clear(), this._resetInstanceCounters(), this.emit("edgesCleared");
      }, i2.getAttribute = function(t2) {
        return this._attributes[t2];
      }, i2.getAttributes = function() {
        return this._attributes;
      }, i2.hasAttribute = function(t2) {
        return this._attributes.hasOwnProperty(t2);
      }, i2.setAttribute = function(t2, e2) {
        return this._attributes[t2] = e2, this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t2 }), this;
      }, i2.updateAttribute = function(t2, e2) {
        if (typeof e2 != "function")
          throw new B("Graph.updateAttribute: updater should be a function.");
        var n3 = this._attributes[t2];
        return this._attributes[t2] = e2(n3), this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t2 }), this;
      }, i2.removeAttribute = function(t2) {
        return delete this._attributes[t2], this.emit("attributesUpdated", { type: "remove", attributes: this._attributes, name: t2 }), this;
      }, i2.replaceAttributes = function(t2) {
        if (!s(t2))
          throw new B("Graph.replaceAttributes: provided attributes are not a plain object.");
        return this._attributes = t2, this.emit("attributesUpdated", { type: "replace", attributes: this._attributes }), this;
      }, i2.mergeAttributes = function(t2) {
        if (!s(t2))
          throw new B("Graph.mergeAttributes: provided attributes are not a plain object.");
        return u(this._attributes, t2), this.emit("attributesUpdated", { type: "merge", attributes: this._attributes, data: t2 }), this;
      }, i2.updateAttributes = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.updateAttributes: provided updater is not a function.");
        return this._attributes = t2(this._attributes), this.emit("attributesUpdated", { type: "update", attributes: this._attributes }), this;
      }, i2.updateEachNodeAttributes = function(t2, e2) {
        if (typeof t2 != "function")
          throw new B("Graph.updateEachNodeAttributes: expecting an updater function.");
        if (e2 && !l(e2))
          throw new B("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
        for (var n3, r3, i3 = this._nodes.values();(n3 = i3.next()).done !== true; )
          (r3 = n3.value).attributes = t2(r3.key, r3.attributes);
        this.emit("eachNodeAttributesUpdated", { hints: e2 || null });
      }, i2.updateEachEdgeAttributes = function(t2, e2) {
        if (typeof t2 != "function")
          throw new B("Graph.updateEachEdgeAttributes: expecting an updater function.");
        if (e2 && !l(e2))
          throw new B("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
        for (var n3, r3, i3, o2, a2 = this._edges.values();(n3 = a2.next()).done !== true; )
          i3 = (r3 = n3.value).source, o2 = r3.target, r3.attributes = t2(r3.key, r3.attributes, i3.key, o2.key, i3.attributes, o2.attributes, r3.undirected);
        this.emit("eachEdgeAttributesUpdated", { hints: e2 || null });
      }, i2.forEachAdjacencyEntry = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.forEachAdjacencyEntry: expecting a callback.");
        xt(false, false, false, this, t2);
      }, i2.forEachAdjacencyEntryWithOrphans = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");
        xt(false, false, true, this, t2);
      }, i2.forEachAssymetricAdjacencyEntry = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");
        xt(false, true, false, this, t2);
      }, i2.forEachAssymetricAdjacencyEntryWithOrphans = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");
        xt(false, true, true, this, t2);
      }, i2.nodes = function() {
        return typeof Array.from == "function" ? Array.from(this._nodes.keys()) : K(this._nodes.keys(), this._nodes.size);
      }, i2.forEachNode = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.forEachNode: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values();(e2 = r3.next()).done !== true; )
          t2((n3 = e2.value).key, n3.attributes);
      }, i2.findNode = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.findNode: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values();(e2 = r3.next()).done !== true; )
          if (t2((n3 = e2.value).key, n3.attributes))
            return n3.key;
      }, i2.mapNodes = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.mapNode: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values(), i3 = new Array(this.order), o2 = 0;(e2 = r3.next()).done !== true; )
          n3 = e2.value, i3[o2++] = t2(n3.key, n3.attributes);
        return i3;
      }, i2.someNode = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.someNode: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values();(e2 = r3.next()).done !== true; )
          if (t2((n3 = e2.value).key, n3.attributes))
            return true;
        return false;
      }, i2.everyNode = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.everyNode: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values();(e2 = r3.next()).done !== true; )
          if (!t2((n3 = e2.value).key, n3.attributes))
            return false;
        return true;
      }, i2.filterNodes = function(t2) {
        if (typeof t2 != "function")
          throw new B("Graph.filterNodes: expecting a callback.");
        for (var e2, n3, r3 = this._nodes.values(), i3 = [];(e2 = r3.next()).done !== true; )
          t2((n3 = e2.value).key, n3.attributes) && i3.push(n3.key);
        return i3;
      }, i2.reduceNodes = function(t2, e2) {
        if (typeof t2 != "function")
          throw new B("Graph.reduceNodes: expecting a callback.");
        if (arguments.length < 2)
          throw new B("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");
        for (var n3, r3, i3 = e2, o2 = this._nodes.values();(n3 = o2.next()).done !== true; )
          i3 = t2(i3, (r3 = n3.value).key, r3.attributes);
        return i3;
      }, i2.nodeEntries = function() {
        var t2 = this._nodes.values();
        return new O(function() {
          var e2 = t2.next();
          if (e2.done)
            return e2;
          var n3 = e2.value;
          return { value: { node: n3.key, attributes: n3.attributes }, done: false };
        });
      }, i2.export = function() {
        var t2 = this, e2 = new Array(this._nodes.size), n3 = 0;
        this._nodes.forEach(function(t3, r4) {
          e2[n3++] = function(t4, e3) {
            var n4 = { key: t4 };
            return h(e3.attributes) || (n4.attributes = u({}, e3.attributes)), n4;
          }(r4, t3);
        });
        var r3 = new Array(this._edges.size);
        return n3 = 0, this._edges.forEach(function(e3, i3) {
          r3[n3++] = function(t3, e4, n4) {
            var r4 = { key: e4, source: n4.source.key, target: n4.target.key };
            return h(n4.attributes) || (r4.attributes = u({}, n4.attributes)), t3 === "mixed" && n4.undirected && (r4.undirected = true), r4;
          }(t2.type, i3, e3);
        }), { options: { type: this.type, multi: this.multi, allowSelfLoops: this.allowSelfLoops }, attributes: this.getAttributes(), nodes: e2, edges: r3 };
      }, i2.import = function(t2) {
        var e2, n3, i3, o2, a2, c2 = this, u2 = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        if (t2 instanceof r2)
          return t2.forEachNode(function(t3, e3) {
            u2 ? c2.mergeNode(t3, e3) : c2.addNode(t3, e3);
          }), t2.forEachEdge(function(t3, e3, n4, r3, i4, o3, a3) {
            u2 ? a3 ? c2.mergeUndirectedEdgeWithKey(t3, n4, r3, e3) : c2.mergeDirectedEdgeWithKey(t3, n4, r3, e3) : a3 ? c2.addUndirectedEdgeWithKey(t3, n4, r3, e3) : c2.addDirectedEdgeWithKey(t3, n4, r3, e3);
          }), this;
        if (!s(t2))
          throw new B("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");
        if (t2.attributes) {
          if (!s(t2.attributes))
            throw new B("Graph.import: invalid attributes. Expecting a plain object.");
          u2 ? this.mergeAttributes(t2.attributes) : this.replaceAttributes(t2.attributes);
        }
        if (t2.nodes) {
          if (i3 = t2.nodes, !Array.isArray(i3))
            throw new B("Graph.import: invalid nodes. Expecting an array.");
          for (e2 = 0, n3 = i3.length;e2 < n3; e2++) {
            Et(o2 = i3[e2]);
            var d2 = o2, h2 = d2.key, p2 = d2.attributes;
            u2 ? this.mergeNode(h2, p2) : this.addNode(h2, p2);
          }
        }
        if (t2.edges) {
          var f2 = false;
          if (this.type === "undirected" && (f2 = true), i3 = t2.edges, !Array.isArray(i3))
            throw new B("Graph.import: invalid edges. Expecting an array.");
          for (e2 = 0, n3 = i3.length;e2 < n3; e2++) {
            At(a2 = i3[e2]);
            var l2 = a2, g2 = l2.source, y2 = l2.target, w2 = l2.attributes, v2 = l2.undirected, b2 = v2 === undefined ? f2 : v2;
            "key" in a2 ? (u2 ? b2 ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : b2 ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey).call(this, a2.key, g2, y2, w2) : (u2 ? b2 ? this.mergeUndirectedEdge : this.mergeDirectedEdge : b2 ? this.addUndirectedEdge : this.addDirectedEdge).call(this, g2, y2, w2);
          }
        }
        return this;
      }, i2.nullCopy = function(t2) {
        var e2 = new r2(u({}, this._options, t2));
        return e2.replaceAttributes(u({}, this.getAttributes())), e2;
      }, i2.emptyCopy = function(t2) {
        var e2 = this.nullCopy(t2);
        return this._nodes.forEach(function(t3, n3) {
          var r3 = u({}, t3.attributes);
          t3 = new e2.NodeDataClass(n3, r3), e2._nodes.set(n3, t3);
        }), e2;
      }, i2.copy = function(t2) {
        if (typeof (t2 = t2 || {}).type == "string" && t2.type !== this.type && t2.type !== "mixed")
          throw new I('Graph.copy: cannot create an incompatible copy from "'.concat(this.type, '" type to "').concat(t2.type, '" because this would mean losing information about the current graph.'));
        if (typeof t2.multi == "boolean" && t2.multi !== this.multi && t2.multi !== true)
          throw new I("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");
        if (typeof t2.allowSelfLoops == "boolean" && t2.allowSelfLoops !== this.allowSelfLoops && t2.allowSelfLoops !== true)
          throw new I("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");
        for (var e2, n3, r3 = this.emptyCopy(t2), i3 = this._edges.values();(e2 = i3.next()).done !== true; )
          jt(r3, "copy", false, (n3 = e2.value).undirected, n3.key, n3.source.key, n3.target.key, u({}, n3.attributes));
        return r3;
      }, i2.toJSON = function() {
        return this.export();
      }, i2.toString = function() {
        return "[object Graph]";
      }, i2.inspect = function() {
        var e2 = this, n3 = {};
        this._nodes.forEach(function(t2, e3) {
          n3[e3] = t2.attributes;
        });
        var r3 = {}, i3 = {};
        this._edges.forEach(function(t2, n4) {
          var o3, a3 = t2.undirected ? "--" : "->", c2 = "", u2 = t2.source.key, d2 = t2.target.key;
          t2.undirected && u2 > d2 && (o3 = u2, u2 = d2, d2 = o3);
          var s2 = "(".concat(u2, ")").concat(a3, "(").concat(d2, ")");
          n4.startsWith("geid_") ? e2.multi && (i3[s2] === undefined ? i3[s2] = 0 : i3[s2]++, c2 += "".concat(i3[s2], ". ")) : c2 += "[".concat(n4, "]: "), r3[c2 += s2] = t2.attributes;
        });
        var o2 = {};
        for (var a2 in this)
          this.hasOwnProperty(a2) && !Ut.has(a2) && typeof this[a2] != "function" && t(a2) !== "symbol" && (o2[a2] = this[a2]);
        return o2.attributes = this._attributes, o2.nodes = n3, o2.edges = r3, p(o2, "constructor", this.constructor), o2;
      }, r2;
    }(y.exports.EventEmitter);
    typeof Symbol != "undefined" && (zt.prototype[Symbol.for("nodejs.util.inspect.custom")] = zt.prototype.inspect), [{ name: function(t2) {
      return "".concat(t2, "Edge");
    }, generateKey: true }, { name: function(t2) {
      return "".concat(t2, "DirectedEdge");
    }, generateKey: true, type: "directed" }, { name: function(t2) {
      return "".concat(t2, "UndirectedEdge");
    }, generateKey: true, type: "undirected" }, { name: function(t2) {
      return "".concat(t2, "EdgeWithKey");
    } }, { name: function(t2) {
      return "".concat(t2, "DirectedEdgeWithKey");
    }, type: "directed" }, { name: function(t2) {
      return "".concat(t2, "UndirectedEdgeWithKey");
    }, type: "undirected" }].forEach(function(t2) {
      ["add", "merge", "update"].forEach(function(e2) {
        var n2 = t2.name(e2), r2 = e2 === "add" ? jt : Ct;
        t2.generateKey ? zt.prototype[n2] = function(i2, o2, a2) {
          return r2(this, n2, true, (t2.type || this.type) === "undirected", null, i2, o2, a2, e2 === "update");
        } : zt.prototype[n2] = function(i2, o2, a2, c2) {
          return r2(this, n2, false, (t2.type || this.type) === "undirected", i2, o2, a2, c2, e2 === "update");
        };
      });
    }), function(t2) {
      Q.forEach(function(e2) {
        var { name: n2, attacher: r2 } = e2;
        r2(t2, n2("Node"), 0), r2(t2, n2("Source"), 1), r2(t2, n2("Target"), 2), r2(t2, n2("Opposite"), 3);
      });
    }(zt), function(t2) {
      X.forEach(function(e2) {
        var { name: n2, attacher: r2 } = e2;
        r2(t2, n2("Edge"), "mixed"), r2(t2, n2("DirectedEdge"), "directed"), r2(t2, n2("UndirectedEdge"), "undirected");
      });
    }(zt), function(t2) {
      et.forEach(function(e2) {
        (function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3;
          t3.prototype[n2] = function(t4, e4) {
            if (r2 !== "mixed" && this.type !== "mixed" && r2 !== this.type)
              return [];
            if (!arguments.length)
              return ut(this, r2);
            if (arguments.length === 1) {
              t4 = "" + t4;
              var o2 = this._nodes.get(t4);
              if (o2 === undefined)
                throw new F("Graph.".concat(n2, ': could not find the "').concat(t4, '" node in the graph.'));
              return pt(this.multi, r2 === "mixed" ? this.type : r2, i2, o2);
            }
            if (arguments.length === 2) {
              t4 = "" + t4, e4 = "" + e4;
              var a2 = this._nodes.get(t4);
              if (!a2)
                throw new F("Graph.".concat(n2, ':  could not find the "').concat(t4, '" source node in the graph.'));
              if (!this._nodes.has(e4))
                throw new F("Graph.".concat(n2, ':  could not find the "').concat(e4, '" target node in the graph.'));
              return gt(r2, this.multi, i2, a2, e4);
            }
            throw new B("Graph.".concat(n2, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
          };
        })(t2, e2), function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3, o2 = "forEach" + n2[0].toUpperCase() + n2.slice(1, -1);
          t3.prototype[o2] = function(t4, e4, n3) {
            if (r2 === "mixed" || this.type === "mixed" || r2 === this.type) {
              if (arguments.length === 1)
                return dt(false, this, r2, n3 = t4);
              if (arguments.length === 2) {
                t4 = "" + t4, n3 = e4;
                var a3 = this._nodes.get(t4);
                if (a3 === undefined)
                  throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                return ht(false, this.multi, r2 === "mixed" ? this.type : r2, i2, a3, n3);
              }
              if (arguments.length === 3) {
                t4 = "" + t4, e4 = "" + e4;
                var c3 = this._nodes.get(t4);
                if (!c3)
                  throw new F("Graph.".concat(o2, ':  could not find the "').concat(t4, '" source node in the graph.'));
                if (!this._nodes.has(e4))
                  throw new F("Graph.".concat(o2, ':  could not find the "').concat(e4, '" target node in the graph.'));
                return lt(false, r2, this.multi, i2, c3, e4, n3);
              }
              throw new B("Graph.".concat(o2, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
            }
          };
          var a2 = "map" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[a2] = function() {
            var t4, e4 = Array.prototype.slice.call(arguments), n3 = e4.pop();
            if (e4.length === 0) {
              var i3 = 0;
              r2 !== "directed" && (i3 += this.undirectedSize), r2 !== "undirected" && (i3 += this.directedSize), t4 = new Array(i3);
              var a3 = 0;
              e4.push(function(e5, r3, i4, o3, c3, u3, d2) {
                t4[a3++] = n3(e5, r3, i4, o3, c3, u3, d2);
              });
            } else
              t4 = [], e4.push(function(e5, r3, i4, o3, a4, c3, u3) {
                t4.push(n3(e5, r3, i4, o3, a4, c3, u3));
              });
            return this[o2].apply(this, e4), t4;
          };
          var c2 = "filter" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[c2] = function() {
            var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop(), n3 = [];
            return t4.push(function(t5, r3, i3, o3, a3, c3, u3) {
              e4(t5, r3, i3, o3, a3, c3, u3) && n3.push(t5);
            }), this[o2].apply(this, t4), n3;
          };
          var u2 = "reduce" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[u2] = function() {
            var t4, e4, n3 = Array.prototype.slice.call(arguments);
            if (n3.length < 2 || n3.length > 4)
              throw new B("Graph.".concat(u2, ": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n3.length, ")."));
            if (typeof n3[n3.length - 1] == "function" && typeof n3[n3.length - 2] != "function")
              throw new B("Graph.".concat(u2, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
            n3.length === 2 ? (t4 = n3[0], e4 = n3[1], n3 = []) : n3.length === 3 ? (t4 = n3[1], e4 = n3[2], n3 = [n3[0]]) : n3.length === 4 && (t4 = n3[2], e4 = n3[3], n3 = [n3[0], n3[1]]);
            var r3 = e4;
            return n3.push(function(e5, n4, i3, o3, a3, c3, u3) {
              r3 = t4(r3, e5, n4, i3, o3, a3, c3, u3);
            }), this[o2].apply(this, n3), r3;
          };
        }(t2, e2), function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3, o2 = "find" + n2[0].toUpperCase() + n2.slice(1, -1);
          t3.prototype[o2] = function(t4, e4, n3) {
            if (r2 !== "mixed" && this.type !== "mixed" && r2 !== this.type)
              return false;
            if (arguments.length === 1)
              return dt(true, this, r2, n3 = t4);
            if (arguments.length === 2) {
              t4 = "" + t4, n3 = e4;
              var a3 = this._nodes.get(t4);
              if (a3 === undefined)
                throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
              return ht(true, this.multi, r2 === "mixed" ? this.type : r2, i2, a3, n3);
            }
            if (arguments.length === 3) {
              t4 = "" + t4, e4 = "" + e4;
              var c3 = this._nodes.get(t4);
              if (!c3)
                throw new F("Graph.".concat(o2, ':  could not find the "').concat(t4, '" source node in the graph.'));
              if (!this._nodes.has(e4))
                throw new F("Graph.".concat(o2, ':  could not find the "').concat(e4, '" target node in the graph.'));
              return lt(true, r2, this.multi, i2, c3, e4, n3);
            }
            throw new B("Graph.".concat(o2, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
          };
          var a2 = "some" + n2[0].toUpperCase() + n2.slice(1, -1);
          t3.prototype[a2] = function() {
            var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop();
            return t4.push(function(t5, n3, r3, i3, o3, a3, c3) {
              return e4(t5, n3, r3, i3, o3, a3, c3);
            }), !!this[o2].apply(this, t4);
          };
          var c2 = "every" + n2[0].toUpperCase() + n2.slice(1, -1);
          t3.prototype[c2] = function() {
            var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop();
            return t4.push(function(t5, n3, r3, i3, o3, a3, c3) {
              return !e4(t5, n3, r3, i3, o3, a3, c3);
            }), !this[o2].apply(this, t4);
          };
        }(t2, e2), function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3, o2 = n2.slice(0, -1) + "Entries";
          t3.prototype[o2] = function(t4, e4) {
            if (r2 !== "mixed" && this.type !== "mixed" && r2 !== this.type)
              return O.empty();
            if (!arguments.length)
              return st(this, r2);
            if (arguments.length === 1) {
              t4 = "" + t4;
              var n3 = this._nodes.get(t4);
              if (!n3)
                throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
              return ft(r2, i2, n3);
            }
            if (arguments.length === 2) {
              t4 = "" + t4, e4 = "" + e4;
              var a2 = this._nodes.get(t4);
              if (!a2)
                throw new F("Graph.".concat(o2, ':  could not find the "').concat(t4, '" source node in the graph.'));
              if (!this._nodes.has(e4))
                throw new F("Graph.".concat(o2, ':  could not find the "').concat(e4, '" target node in the graph.'));
              return yt(r2, i2, a2, e4);
            }
            throw new B("Graph.".concat(o2, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
          };
        }(t2, e2);
      });
    }(zt), function(t2) {
      wt.forEach(function(e2) {
        _t(t2, e2), function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3, o2 = "forEach" + n2[0].toUpperCase() + n2.slice(1, -1);
          t3.prototype[o2] = function(t4, e4) {
            if (r2 === "mixed" || this.type === "mixed" || r2 === this.type) {
              t4 = "" + t4;
              var n3 = this._nodes.get(t4);
              if (n3 === undefined)
                throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
              mt(false, r2 === "mixed" ? this.type : r2, i2, n3, e4);
            }
          };
          var a2 = "map" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[a2] = function(t4, e4) {
            var n3 = [];
            return this[o2](t4, function(t5, r3) {
              n3.push(e4(t5, r3));
            }), n3;
          };
          var c2 = "filter" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[c2] = function(t4, e4) {
            var n3 = [];
            return this[o2](t4, function(t5, r3) {
              e4(t5, r3) && n3.push(t5);
            }), n3;
          };
          var u2 = "reduce" + n2[0].toUpperCase() + n2.slice(1);
          t3.prototype[u2] = function(t4, e4, n3) {
            if (arguments.length < 3)
              throw new B("Graph.".concat(u2, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
            var r3 = n3;
            return this[o2](t4, function(t5, n4) {
              r3 = e4(r3, t5, n4);
            }), r3;
          };
        }(t2, e2), function(t3, e3) {
          var { name: n2, type: r2, direction: i2 } = e3, o2 = n2[0].toUpperCase() + n2.slice(1, -1), a2 = "find" + o2;
          t3.prototype[a2] = function(t4, e4) {
            if (r2 === "mixed" || this.type === "mixed" || r2 === this.type) {
              t4 = "" + t4;
              var n3 = this._nodes.get(t4);
              if (n3 === undefined)
                throw new F("Graph.".concat(a2, ': could not find the "').concat(t4, '" node in the graph.'));
              return mt(true, r2 === "mixed" ? this.type : r2, i2, n3, e4);
            }
          };
          var c2 = "some" + o2;
          t3.prototype[c2] = function(t4, e4) {
            return !!this[a2](t4, e4);
          };
          var u2 = "every" + o2;
          t3.prototype[u2] = function(t4, e4) {
            return !this[a2](t4, function(t5, n3) {
              return !e4(t5, n3);
            });
          };
        }(t2, e2), Gt(t2, e2);
      });
    }(zt);
    var Wt = function(t2) {
      function n2(e2) {
        var n3 = u({ type: "directed" }, e2);
        if ("multi" in n3 && n3.multi !== false)
          throw new B("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
        if (n3.type !== "directed")
          throw new B('DirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
        return t2.call(this, n3) || this;
      }
      return e(n2, t2), n2;
    }(zt), Pt = function(t2) {
      function n2(e2) {
        var n3 = u({ type: "undirected" }, e2);
        if ("multi" in n3 && n3.multi !== false)
          throw new B("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
        if (n3.type !== "undirected")
          throw new B('UndirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
        return t2.call(this, n3) || this;
      }
      return e(n2, t2), n2;
    }(zt), Rt = function(t2) {
      function n2(e2) {
        var n3 = u({ multi: true }, e2);
        if ("multi" in n3 && n3.multi !== true)
          throw new B("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");
        return t2.call(this, n3) || this;
      }
      return e(n2, t2), n2;
    }(zt), Kt = function(t2) {
      function n2(e2) {
        var n3 = u({ type: "directed", multi: true }, e2);
        if ("multi" in n3 && n3.multi !== true)
          throw new B("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
        if (n3.type !== "directed")
          throw new B('MultiDirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
        return t2.call(this, n3) || this;
      }
      return e(n2, t2), n2;
    }(zt), Tt = function(t2) {
      function n2(e2) {
        var n3 = u({ type: "undirected", multi: true }, e2);
        if ("multi" in n3 && n3.multi !== true)
          throw new B("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
        if (n3.type !== "undirected")
          throw new B('MultiUndirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
        return t2.call(this, n3) || this;
      }
      return e(n2, t2), n2;
    }(zt);
    function Bt(t2) {
      t2.from = function(e2, n2) {
        var r2 = u({}, e2.options, n2), i2 = new t2(r2);
        return i2.import(e2), i2;
      };
    }
    return Bt(zt), Bt(Wt), Bt(Pt), Bt(Rt), Bt(Kt), Bt(Tt), zt.Graph = zt, zt.DirectedGraph = Wt, zt.UndirectedGraph = Pt, zt.MultiGraph = Rt, zt.MultiDirectedGraph = Kt, zt.MultiUndirectedGraph = Tt, zt.InvalidArgumentsGraphError = B, zt.NotFoundGraphError = F, zt.UsageGraphError = I, zt;
  });
});

// node_modules/graphology-utils/is-graph.js
var require_is_graph = __commonJS((exports, module) => {
  module.exports = function isGraph(value) {
    return value !== null && typeof value === "object" && typeof value.addUndirectedEdgeWithKey === "function" && typeof value.dropNode === "function" && typeof value.multi === "boolean";
  };
});

// node_modules/graphology-utils/getters.js
var require_getters = __commonJS((exports) => {
  var coerceWeight = function(value) {
    if (typeof value !== "number" || isNaN(value))
      return 1;
    return value;
  };
  var createNodeValueGetter = function(nameOrFunction, defaultValue) {
    var getter = {};
    var coerceToDefault = function(v2) {
      if (typeof v2 === "undefined")
        return defaultValue;
      return v2;
    };
    if (typeof defaultValue === "function")
      coerceToDefault = defaultValue;
    var get = function(attributes) {
      return coerceToDefault(attributes[nameOrFunction]);
    };
    var returnDefault = function() {
      return coerceToDefault(undefined);
    };
    if (typeof nameOrFunction === "string") {
      getter.fromAttributes = get;
      getter.fromGraph = function(graph, node) {
        return get(graph.getNodeAttributes(node));
      };
      getter.fromEntry = function(node, attributes) {
        return get(attributes);
      };
    } else if (typeof nameOrFunction === "function") {
      getter.fromAttributes = function() {
        throw new Error("graphology-utils/getters/createNodeValueGetter: irrelevant usage.");
      };
      getter.fromGraph = function(graph, node) {
        return coerceToDefault(nameOrFunction(node, graph.getNodeAttributes(node)));
      };
      getter.fromEntry = function(node, attributes) {
        return coerceToDefault(nameOrFunction(node, attributes));
      };
    } else {
      getter.fromAttributes = returnDefault;
      getter.fromGraph = returnDefault;
      getter.fromEntry = returnDefault;
    }
    return getter;
  };
  var createEdgeValueGetter = function(nameOrFunction, defaultValue) {
    var getter = {};
    var coerceToDefault = function(v2) {
      if (typeof v2 === "undefined")
        return defaultValue;
      return v2;
    };
    if (typeof defaultValue === "function")
      coerceToDefault = defaultValue;
    var get = function(attributes) {
      return coerceToDefault(attributes[nameOrFunction]);
    };
    var returnDefault = function() {
      return coerceToDefault(undefined);
    };
    if (typeof nameOrFunction === "string") {
      getter.fromAttributes = get;
      getter.fromGraph = function(graph, edge) {
        return get(graph.getEdgeAttributes(edge));
      };
      getter.fromEntry = function(edge, attributes) {
        return get(attributes);
      };
      getter.fromPartialEntry = getter.fromEntry;
      getter.fromMinimalEntry = getter.fromEntry;
    } else if (typeof nameOrFunction === "function") {
      getter.fromAttributes = function() {
        throw new Error("graphology-utils/getters/createEdgeValueGetter: irrelevant usage.");
      };
      getter.fromGraph = function(graph, edge) {
        var extremities = graph.extremities(edge);
        return coerceToDefault(nameOrFunction(edge, graph.getEdgeAttributes(edge), extremities[0], extremities[1], graph.getNodeAttributes(extremities[0]), graph.getNodeAttributes(extremities[1]), graph.isUndirected(edge)));
      };
      getter.fromEntry = function(e, a2, s, t, sa, ta, u) {
        return coerceToDefault(nameOrFunction(e, a2, s, t, sa, ta, u));
      };
      getter.fromPartialEntry = function(e, a2, s, t) {
        return coerceToDefault(nameOrFunction(e, a2, s, t));
      };
      getter.fromMinimalEntry = function(e, a2) {
        return coerceToDefault(nameOrFunction(e, a2));
      };
    } else {
      getter.fromAttributes = returnDefault;
      getter.fromGraph = returnDefault;
      getter.fromEntry = returnDefault;
      getter.fromMinimalEntry = returnDefault;
    }
    return getter;
  };
  exports.createNodeValueGetter = createNodeValueGetter;
  exports.createEdgeValueGetter = createEdgeValueGetter;
  exports.createEdgeWeightGetter = function(name) {
    return createEdgeValueGetter(name, coerceWeight);
  };
});

// node_modules/graphology-layout-forceatlas2/iterate.js
var require_iterate = __commonJS((exports, module) => {
  var NODE_X = 0;
  var NODE_Y = 1;
  var NODE_DX = 2;
  var NODE_DY = 3;
  var NODE_OLD_DX = 4;
  var NODE_OLD_DY = 5;
  var NODE_MASS = 6;
  var NODE_CONVERGENCE = 7;
  var NODE_SIZE = 8;
  var NODE_FIXED = 9;
  var EDGE_SOURCE = 0;
  var EDGE_TARGET = 1;
  var EDGE_WEIGHT = 2;
  var REGION_NODE = 0;
  var REGION_CENTER_X = 1;
  var REGION_CENTER_Y = 2;
  var REGION_SIZE = 3;
  var REGION_NEXT_SIBLING = 4;
  var REGION_FIRST_CHILD = 5;
  var REGION_MASS = 6;
  var REGION_MASS_CENTER_X = 7;
  var REGION_MASS_CENTER_Y = 8;
  var SUBDIVISION_ATTEMPTS = 3;
  var PPN = 10;
  var PPE = 3;
  var PPR = 9;
  var MAX_FORCE = 10;
  module.exports = function iterate(options, NodeMatrix, EdgeMatrix) {
    var l2, r, n, n1, n2, rn, e, w2, g2, s;
    var order = NodeMatrix.length, size = EdgeMatrix.length;
    var adjustSizes = options.adjustSizes;
    var thetaSquared = options.barnesHutTheta * options.barnesHutTheta;
    var outboundAttCompensation, coefficient, xDist, yDist, ewc, distance, factor;
    var RegionMatrix = [];
    for (n = 0;n < order; n += PPN) {
      NodeMatrix[n + NODE_OLD_DX] = NodeMatrix[n + NODE_DX];
      NodeMatrix[n + NODE_OLD_DY] = NodeMatrix[n + NODE_DY];
      NodeMatrix[n + NODE_DX] = 0;
      NodeMatrix[n + NODE_DY] = 0;
    }
    if (options.outboundAttractionDistribution) {
      outboundAttCompensation = 0;
      for (n = 0;n < order; n += PPN) {
        outboundAttCompensation += NodeMatrix[n + NODE_MASS];
      }
      outboundAttCompensation /= order / PPN;
    }
    if (options.barnesHutOptimize) {
      var minX = Infinity, maxX = (-Infinity), minY = Infinity, maxY = (-Infinity), q, q2, subdivisionAttempts;
      for (n = 0;n < order; n += PPN) {
        minX = Math.min(minX, NodeMatrix[n + NODE_X]);
        maxX = Math.max(maxX, NodeMatrix[n + NODE_X]);
        minY = Math.min(minY, NodeMatrix[n + NODE_Y]);
        maxY = Math.max(maxY, NodeMatrix[n + NODE_Y]);
      }
      var dx = maxX - minX, dy = maxY - minY;
      if (dx > dy) {
        minY -= (dx - dy) / 2;
        maxY = minY + dx;
      } else {
        minX -= (dy - dx) / 2;
        maxX = minX + dy;
      }
      RegionMatrix[0 + REGION_NODE] = -1;
      RegionMatrix[0 + REGION_CENTER_X] = (minX + maxX) / 2;
      RegionMatrix[0 + REGION_CENTER_Y] = (minY + maxY) / 2;
      RegionMatrix[0 + REGION_SIZE] = Math.max(maxX - minX, maxY - minY);
      RegionMatrix[0 + REGION_NEXT_SIBLING] = -1;
      RegionMatrix[0 + REGION_FIRST_CHILD] = -1;
      RegionMatrix[0 + REGION_MASS] = 0;
      RegionMatrix[0 + REGION_MASS_CENTER_X] = 0;
      RegionMatrix[0 + REGION_MASS_CENTER_Y] = 0;
      l2 = 1;
      for (n = 0;n < order; n += PPN) {
        r = 0;
        subdivisionAttempts = SUBDIVISION_ATTEMPTS;
        while (true) {
          if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {
            if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
              if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                q = RegionMatrix[r + REGION_FIRST_CHILD];
              } else {
                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
              }
            } else {
              if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
              } else {
                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
              }
            }
            RegionMatrix[r + REGION_MASS_CENTER_X] = (RegionMatrix[r + REGION_MASS_CENTER_X] * RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_X] * NodeMatrix[n + NODE_MASS]) / (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS]);
            RegionMatrix[r + REGION_MASS_CENTER_Y] = (RegionMatrix[r + REGION_MASS_CENTER_Y] * RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_Y] * NodeMatrix[n + NODE_MASS]) / (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS]);
            RegionMatrix[r + REGION_MASS] += NodeMatrix[n + NODE_MASS];
            r = q;
            continue;
          } else {
            if (RegionMatrix[r + REGION_NODE] < 0) {
              RegionMatrix[r + REGION_NODE] = n;
              break;
            } else {
              RegionMatrix[r + REGION_FIRST_CHILD] = l2 * PPR;
              w2 = RegionMatrix[r + REGION_SIZE] / 2;
              g2 = RegionMatrix[r + REGION_FIRST_CHILD];
              RegionMatrix[g2 + REGION_NODE] = -1;
              RegionMatrix[g2 + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w2;
              RegionMatrix[g2 + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w2;
              RegionMatrix[g2 + REGION_SIZE] = w2;
              RegionMatrix[g2 + REGION_NEXT_SIBLING] = g2 + PPR;
              RegionMatrix[g2 + REGION_FIRST_CHILD] = -1;
              RegionMatrix[g2 + REGION_MASS] = 0;
              RegionMatrix[g2 + REGION_MASS_CENTER_X] = 0;
              RegionMatrix[g2 + REGION_MASS_CENTER_Y] = 0;
              g2 += PPR;
              RegionMatrix[g2 + REGION_NODE] = -1;
              RegionMatrix[g2 + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w2;
              RegionMatrix[g2 + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w2;
              RegionMatrix[g2 + REGION_SIZE] = w2;
              RegionMatrix[g2 + REGION_NEXT_SIBLING] = g2 + PPR;
              RegionMatrix[g2 + REGION_FIRST_CHILD] = -1;
              RegionMatrix[g2 + REGION_MASS] = 0;
              RegionMatrix[g2 + REGION_MASS_CENTER_X] = 0;
              RegionMatrix[g2 + REGION_MASS_CENTER_Y] = 0;
              g2 += PPR;
              RegionMatrix[g2 + REGION_NODE] = -1;
              RegionMatrix[g2 + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w2;
              RegionMatrix[g2 + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w2;
              RegionMatrix[g2 + REGION_SIZE] = w2;
              RegionMatrix[g2 + REGION_NEXT_SIBLING] = g2 + PPR;
              RegionMatrix[g2 + REGION_FIRST_CHILD] = -1;
              RegionMatrix[g2 + REGION_MASS] = 0;
              RegionMatrix[g2 + REGION_MASS_CENTER_X] = 0;
              RegionMatrix[g2 + REGION_MASS_CENTER_Y] = 0;
              g2 += PPR;
              RegionMatrix[g2 + REGION_NODE] = -1;
              RegionMatrix[g2 + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w2;
              RegionMatrix[g2 + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w2;
              RegionMatrix[g2 + REGION_SIZE] = w2;
              RegionMatrix[g2 + REGION_NEXT_SIBLING] = RegionMatrix[r + REGION_NEXT_SIBLING];
              RegionMatrix[g2 + REGION_FIRST_CHILD] = -1;
              RegionMatrix[g2 + REGION_MASS] = 0;
              RegionMatrix[g2 + REGION_MASS_CENTER_X] = 0;
              RegionMatrix[g2 + REGION_MASS_CENTER_Y] = 0;
              l2 += 4;
              if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                  q = RegionMatrix[r + REGION_FIRST_CHILD];
                } else {
                  q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
                }
              } else {
                if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                  q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
                } else {
                  q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
                }
              }
              RegionMatrix[r + REGION_MASS] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_MASS];
              RegionMatrix[r + REGION_MASS_CENTER_X] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X];
              RegionMatrix[r + REGION_MASS_CENTER_Y] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y];
              RegionMatrix[q + REGION_NODE] = RegionMatrix[r + REGION_NODE];
              RegionMatrix[r + REGION_NODE] = -1;
              if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                  q2 = RegionMatrix[r + REGION_FIRST_CHILD];
                } else {
                  q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
                }
              } else {
                if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                  q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
                } else {
                  q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
                }
              }
              if (q === q2) {
                if (subdivisionAttempts--) {
                  r = q;
                  continue;
                } else {
                  subdivisionAttempts = SUBDIVISION_ATTEMPTS;
                  break;
                }
              }
              RegionMatrix[q2 + REGION_NODE] = n;
              break;
            }
          }
        }
      }
    }
    if (options.barnesHutOptimize) {
      coefficient = options.scalingRatio;
      for (n = 0;n < order; n += PPN) {
        r = 0;
        while (true) {
          if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {
            distance = Math.pow(NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X], 2) + Math.pow(NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y], 2);
            s = RegionMatrix[r + REGION_SIZE];
            if (4 * s * s / distance < thetaSquared) {
              xDist = NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X];
              yDist = NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y];
              if (adjustSizes === true) {
                if (distance > 0) {
                  factor = coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / distance;
                  NodeMatrix[n + NODE_DX] += xDist * factor;
                  NodeMatrix[n + NODE_DY] += yDist * factor;
                } else if (distance < 0) {
                  factor = -coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / Math.sqrt(distance);
                  NodeMatrix[n + NODE_DX] += xDist * factor;
                  NodeMatrix[n + NODE_DY] += yDist * factor;
                }
              } else {
                if (distance > 0) {
                  factor = coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / distance;
                  NodeMatrix[n + NODE_DX] += xDist * factor;
                  NodeMatrix[n + NODE_DY] += yDist * factor;
                }
              }
              r = RegionMatrix[r + REGION_NEXT_SIBLING];
              if (r < 0)
                break;
              continue;
            } else {
              r = RegionMatrix[r + REGION_FIRST_CHILD];
              continue;
            }
          } else {
            rn = RegionMatrix[r + REGION_NODE];
            if (rn >= 0 && rn !== n) {
              xDist = NodeMatrix[n + NODE_X] - NodeMatrix[rn + NODE_X];
              yDist = NodeMatrix[n + NODE_Y] - NodeMatrix[rn + NODE_Y];
              distance = xDist * xDist + yDist * yDist;
              if (adjustSizes === true) {
                if (distance > 0) {
                  factor = coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / distance;
                  NodeMatrix[n + NODE_DX] += xDist * factor;
                  NodeMatrix[n + NODE_DY] += yDist * factor;
                } else if (distance < 0) {
                  factor = -coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / Math.sqrt(distance);
                  NodeMatrix[n + NODE_DX] += xDist * factor;
                  NodeMatrix[n + NODE_DY] += yDist * factor;
                }
              } else {
                if (distance > 0) {
                  factor = coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / distance;
                  NodeMatrix[n + NODE_DX] += xDist * factor;
                  NodeMatrix[n + NODE_DY] += yDist * factor;
                }
              }
            }
            r = RegionMatrix[r + REGION_NEXT_SIBLING];
            if (r < 0)
              break;
            continue;
          }
        }
      }
    } else {
      coefficient = options.scalingRatio;
      for (n1 = 0;n1 < order; n1 += PPN) {
        for (n2 = 0;n2 < n1; n2 += PPN) {
          xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X];
          yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y];
          if (adjustSizes === true) {
            distance = Math.sqrt(xDist * xDist + yDist * yDist) - NodeMatrix[n1 + NODE_SIZE] - NodeMatrix[n2 + NODE_SIZE];
            if (distance > 0) {
              factor = coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS] / distance / distance;
              NodeMatrix[n1 + NODE_DX] += xDist * factor;
              NodeMatrix[n1 + NODE_DY] += yDist * factor;
              NodeMatrix[n2 + NODE_DX] -= xDist * factor;
              NodeMatrix[n2 + NODE_DY] -= yDist * factor;
            } else if (distance < 0) {
              factor = 100 * coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS];
              NodeMatrix[n1 + NODE_DX] += xDist * factor;
              NodeMatrix[n1 + NODE_DY] += yDist * factor;
              NodeMatrix[n2 + NODE_DX] -= xDist * factor;
              NodeMatrix[n2 + NODE_DY] -= yDist * factor;
            }
          } else {
            distance = Math.sqrt(xDist * xDist + yDist * yDist);
            if (distance > 0) {
              factor = coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS] / distance / distance;
              NodeMatrix[n1 + NODE_DX] += xDist * factor;
              NodeMatrix[n1 + NODE_DY] += yDist * factor;
              NodeMatrix[n2 + NODE_DX] -= xDist * factor;
              NodeMatrix[n2 + NODE_DY] -= yDist * factor;
            }
          }
        }
      }
    }
    g2 = options.gravity / options.scalingRatio;
    coefficient = options.scalingRatio;
    for (n = 0;n < order; n += PPN) {
      factor = 0;
      xDist = NodeMatrix[n + NODE_X];
      yDist = NodeMatrix[n + NODE_Y];
      distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
      if (options.strongGravityMode) {
        if (distance > 0)
          factor = coefficient * NodeMatrix[n + NODE_MASS] * g2;
      } else {
        if (distance > 0)
          factor = coefficient * NodeMatrix[n + NODE_MASS] * g2 / distance;
      }
      NodeMatrix[n + NODE_DX] -= xDist * factor;
      NodeMatrix[n + NODE_DY] -= yDist * factor;
    }
    coefficient = 1 * (options.outboundAttractionDistribution ? outboundAttCompensation : 1);
    for (e = 0;e < size; e += PPE) {
      n1 = EdgeMatrix[e + EDGE_SOURCE];
      n2 = EdgeMatrix[e + EDGE_TARGET];
      w2 = EdgeMatrix[e + EDGE_WEIGHT];
      ewc = Math.pow(w2, options.edgeWeightInfluence);
      xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X];
      yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y];
      if (adjustSizes === true) {
        distance = Math.sqrt(xDist * xDist + yDist * yDist) - NodeMatrix[n1 + NODE_SIZE] - NodeMatrix[n2 + NODE_SIZE];
        if (options.linLogMode) {
          if (options.outboundAttractionDistribution) {
            if (distance > 0) {
              factor = -coefficient * ewc * Math.log(1 + distance) / distance / NodeMatrix[n1 + NODE_MASS];
            }
          } else {
            if (distance > 0) {
              factor = -coefficient * ewc * Math.log(1 + distance) / distance;
            }
          }
        } else {
          if (options.outboundAttractionDistribution) {
            if (distance > 0) {
              factor = -coefficient * ewc / NodeMatrix[n1 + NODE_MASS];
            }
          } else {
            if (distance > 0) {
              factor = -coefficient * ewc;
            }
          }
        }
      } else {
        distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        if (options.linLogMode) {
          if (options.outboundAttractionDistribution) {
            if (distance > 0) {
              factor = -coefficient * ewc * Math.log(1 + distance) / distance / NodeMatrix[n1 + NODE_MASS];
            }
          } else {
            if (distance > 0)
              factor = -coefficient * ewc * Math.log(1 + distance) / distance;
          }
        } else {
          if (options.outboundAttractionDistribution) {
            distance = 1;
            factor = -coefficient * ewc / NodeMatrix[n1 + NODE_MASS];
          } else {
            distance = 1;
            factor = -coefficient * ewc;
          }
        }
      }
      if (distance > 0) {
        NodeMatrix[n1 + NODE_DX] += xDist * factor;
        NodeMatrix[n1 + NODE_DY] += yDist * factor;
        NodeMatrix[n2 + NODE_DX] -= xDist * factor;
        NodeMatrix[n2 + NODE_DY] -= yDist * factor;
      }
    }
    var force, swinging, traction, nodespeed, newX, newY;
    if (adjustSizes === true) {
      for (n = 0;n < order; n += PPN) {
        if (NodeMatrix[n + NODE_FIXED] !== 1) {
          force = Math.sqrt(Math.pow(NodeMatrix[n + NODE_DX], 2) + Math.pow(NodeMatrix[n + NODE_DY], 2));
          if (force > MAX_FORCE) {
            NodeMatrix[n + NODE_DX] = NodeMatrix[n + NODE_DX] * MAX_FORCE / force;
            NodeMatrix[n + NODE_DY] = NodeMatrix[n + NODE_DY] * MAX_FORCE / force;
          }
          swinging = NodeMatrix[n + NODE_MASS] * Math.sqrt((NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]));
          traction = Math.sqrt((NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])) / 2;
          nodespeed = 0.1 * Math.log(1 + traction) / (1 + Math.sqrt(swinging));
          newX = NodeMatrix[n + NODE_X] + NodeMatrix[n + NODE_DX] * (nodespeed / options.slowDown);
          NodeMatrix[n + NODE_X] = newX;
          newY = NodeMatrix[n + NODE_Y] + NodeMatrix[n + NODE_DY] * (nodespeed / options.slowDown);
          NodeMatrix[n + NODE_Y] = newY;
        }
      }
    } else {
      for (n = 0;n < order; n += PPN) {
        if (NodeMatrix[n + NODE_FIXED] !== 1) {
          swinging = NodeMatrix[n + NODE_MASS] * Math.sqrt((NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]));
          traction = Math.sqrt((NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])) / 2;
          nodespeed = NodeMatrix[n + NODE_CONVERGENCE] * Math.log(1 + traction) / (1 + Math.sqrt(swinging));
          NodeMatrix[n + NODE_CONVERGENCE] = Math.min(1, Math.sqrt(nodespeed * (Math.pow(NodeMatrix[n + NODE_DX], 2) + Math.pow(NodeMatrix[n + NODE_DY], 2)) / (1 + Math.sqrt(swinging))));
          newX = NodeMatrix[n + NODE_X] + NodeMatrix[n + NODE_DX] * (nodespeed / options.slowDown);
          NodeMatrix[n + NODE_X] = newX;
          newY = NodeMatrix[n + NODE_Y] + NodeMatrix[n + NODE_DY] * (nodespeed / options.slowDown);
          NodeMatrix[n + NODE_Y] = newY;
        }
      }
    }
    return {};
  };
});

// node_modules/graphology-layout-forceatlas2/helpers.js
var require_helpers = __commonJS((exports) => {
  var PPN = 10;
  var PPE = 3;
  exports.assign = function(target) {
    target = target || {};
    var objects = Array.prototype.slice.call(arguments).slice(1), i, k, l2;
    for (i = 0, l2 = objects.length;i < l2; i++) {
      if (!objects[i])
        continue;
      for (k in objects[i])
        target[k] = objects[i][k];
    }
    return target;
  };
  exports.validateSettings = function(settings) {
    if ("linLogMode" in settings && typeof settings.linLogMode !== "boolean")
      return { message: "the `linLogMode` setting should be a boolean." };
    if ("outboundAttractionDistribution" in settings && typeof settings.outboundAttractionDistribution !== "boolean")
      return {
        message: "the `outboundAttractionDistribution` setting should be a boolean."
      };
    if ("adjustSizes" in settings && typeof settings.adjustSizes !== "boolean")
      return { message: "the `adjustSizes` setting should be a boolean." };
    if ("edgeWeightInfluence" in settings && typeof settings.edgeWeightInfluence !== "number")
      return {
        message: "the `edgeWeightInfluence` setting should be a number."
      };
    if ("scalingRatio" in settings && !(typeof settings.scalingRatio === "number" && settings.scalingRatio >= 0))
      return { message: "the `scalingRatio` setting should be a number >= 0." };
    if ("strongGravityMode" in settings && typeof settings.strongGravityMode !== "boolean")
      return { message: "the `strongGravityMode` setting should be a boolean." };
    if ("gravity" in settings && !(typeof settings.gravity === "number" && settings.gravity >= 0))
      return { message: "the `gravity` setting should be a number >= 0." };
    if ("slowDown" in settings && !(typeof settings.slowDown === "number" || settings.slowDown >= 0))
      return { message: "the `slowDown` setting should be a number >= 0." };
    if ("barnesHutOptimize" in settings && typeof settings.barnesHutOptimize !== "boolean")
      return { message: "the `barnesHutOptimize` setting should be a boolean." };
    if ("barnesHutTheta" in settings && !(typeof settings.barnesHutTheta === "number" && settings.barnesHutTheta >= 0))
      return { message: "the `barnesHutTheta` setting should be a number >= 0." };
    return null;
  };
  exports.graphToByteArrays = function(graph, getEdgeWeight) {
    var order = graph.order;
    var size = graph.size;
    var index = {};
    var j2;
    var NodeMatrix = new Float32Array(order * PPN);
    var EdgeMatrix = new Float32Array(size * PPE);
    j2 = 0;
    graph.forEachNode(function(node, attr) {
      index[node] = j2;
      NodeMatrix[j2] = attr.x;
      NodeMatrix[j2 + 1] = attr.y;
      NodeMatrix[j2 + 2] = 0;
      NodeMatrix[j2 + 3] = 0;
      NodeMatrix[j2 + 4] = 0;
      NodeMatrix[j2 + 5] = 0;
      NodeMatrix[j2 + 6] = 1;
      NodeMatrix[j2 + 7] = 1;
      NodeMatrix[j2 + 8] = attr.size || 1;
      NodeMatrix[j2 + 9] = attr.fixed ? 1 : 0;
      j2 += PPN;
    });
    j2 = 0;
    graph.forEachEdge(function(edge, attr, source, target, sa, ta, u) {
      var sj = index[source];
      var tj = index[target];
      var weight = getEdgeWeight(edge, attr, source, target, sa, ta, u);
      NodeMatrix[sj + 6] += weight;
      NodeMatrix[tj + 6] += weight;
      EdgeMatrix[j2] = sj;
      EdgeMatrix[j2 + 1] = tj;
      EdgeMatrix[j2 + 2] = weight;
      j2 += PPE;
    });
    return {
      nodes: NodeMatrix,
      edges: EdgeMatrix
    };
  };
  exports.assignLayoutChanges = function(graph, NodeMatrix, outputReducer) {
    var i = 0;
    graph.updateEachNodeAttributes(function(node, attr) {
      attr.x = NodeMatrix[i];
      attr.y = NodeMatrix[i + 1];
      i += PPN;
      return outputReducer ? outputReducer(node, attr) : attr;
    });
  };
  exports.readGraphPositions = function(graph, NodeMatrix) {
    var i = 0;
    graph.forEachNode(function(node, attr) {
      NodeMatrix[i] = attr.x;
      NodeMatrix[i + 1] = attr.y;
      i += PPN;
    });
  };
  exports.collectLayoutChanges = function(graph, NodeMatrix, outputReducer) {
    var nodes = graph.nodes(), positions = {};
    for (var i = 0, j2 = 0, l2 = NodeMatrix.length;i < l2; i += PPN) {
      if (outputReducer) {
        var newAttr = Object.assign({}, graph.getNodeAttributes(nodes[j2]));
        newAttr.x = NodeMatrix[i];
        newAttr.y = NodeMatrix[i + 1];
        newAttr = outputReducer(nodes[j2], newAttr);
        positions[nodes[j2]] = {
          x: newAttr.x,
          y: newAttr.y
        };
      } else {
        positions[nodes[j2]] = {
          x: NodeMatrix[i],
          y: NodeMatrix[i + 1]
        };
      }
      j2++;
    }
    return positions;
  };
  exports.createWorker = function createWorker(fn) {
    var xURL = window.URL || window.webkitURL;
    var code = fn.toString();
    var objectUrl = xURL.createObjectURL(new Blob(["(" + code + ").call(this);"], { type: "text/javascript" }));
    var worker = new Worker(objectUrl);
    xURL.revokeObjectURL(objectUrl);
    return worker;
  };
});

// node_modules/graphology-layout-forceatlas2/defaults.js
var require_defaults = __commonJS((exports, module) => {
  module.exports = {
    linLogMode: false,
    outboundAttractionDistribution: false,
    adjustSizes: false,
    edgeWeightInfluence: 1,
    scalingRatio: 1,
    strongGravityMode: false,
    gravity: 1,
    slowDown: 1,
    barnesHutOptimize: false,
    barnesHutTheta: 0.5
  };
});

// node_modules/graphology-layout-forceatlas2/index.js
var require_graphology_layout_forceatlas2 = __commonJS((exports, module) => {
  var abstractSynchronousLayout = function(assign2, graph, params) {
    if (!isGraph2(graph))
      throw new Error("graphology-layout-forceatlas2: the given graph is not a valid graphology instance.");
    if (typeof params === "number")
      params = { iterations: params };
    var iterations = params.iterations;
    if (typeof iterations !== "number")
      throw new Error("graphology-layout-forceatlas2: invalid number of iterations.");
    if (iterations <= 0)
      throw new Error("graphology-layout-forceatlas2: you should provide a positive number of iterations.");
    var getEdgeWeight = createEdgeWeightGetter("getEdgeWeight" in params ? params.getEdgeWeight : "weight").fromEntry;
    var outputReducer = typeof params.outputReducer === "function" ? params.outputReducer : null;
    var settings = helpers.assign({}, DEFAULT_SETTINGS2, params.settings);
    var validationError = helpers.validateSettings(settings);
    if (validationError)
      throw new Error("graphology-layout-forceatlas2: " + validationError.message);
    var matrices = helpers.graphToByteArrays(graph, getEdgeWeight);
    var i;
    for (i = 0;i < iterations; i++)
      iterate(settings, matrices.nodes, matrices.edges);
    if (assign2) {
      helpers.assignLayoutChanges(graph, matrices.nodes, outputReducer);
      return;
    }
    return helpers.collectLayoutChanges(graph, matrices.nodes);
  };
  var inferSettings = function(graph) {
    var order = typeof graph === "number" ? graph : graph.order;
    return {
      barnesHutOptimize: order > 2000,
      strongGravityMode: true,
      gravity: 0.05,
      scalingRatio: 10,
      slowDown: 1 + Math.log(order)
    };
  };
  var isGraph2 = require_is_graph();
  var createEdgeWeightGetter = require_getters().createEdgeWeightGetter;
  var iterate = require_iterate();
  var helpers = require_helpers();
  var DEFAULT_SETTINGS2 = require_defaults();
  var synchronousLayout = abstractSynchronousLayout.bind(null, false);
  synchronousLayout.assign = abstractSynchronousLayout.bind(null, true);
  synchronousLayout.inferSettings = inferSettings;
  module.exports = synchronousLayout;
});

// node_modules/graphology-utils/defaults.js
var require_defaults2 = __commonJS((exports, module) => {
  var isLeaf = function(o2) {
    return !o2 || typeof o2 !== "object" || typeof o2 === "function" || Array.isArray(o2) || o2 instanceof Set || o2 instanceof Map || o2 instanceof RegExp || o2 instanceof Date;
  };
  var resolveDefaults = function(target, defaults) {
    target = target || {};
    var output = {};
    for (var k in defaults) {
      var existing = target[k];
      var def = defaults[k];
      if (!isLeaf(def)) {
        output[k] = resolveDefaults(existing, def);
        continue;
      }
      if (existing === undefined) {
        output[k] = def;
      } else {
        output[k] = existing;
      }
    }
    return output;
  };
  module.exports = resolveDefaults;
});

// node_modules/pandemonium/random.js
var require_random = __commonJS((exports, module) => {
  var createRandom = function(rng) {
    return function(a2, b2) {
      return a2 + Math.floor(rng() * (b2 - a2 + 1));
    };
  };
  var random = createRandom(Math.random);
  random.createRandom = createRandom;
  module.exports = random;
});

// node_modules/pandemonium/shuffle-in-place.js
var require_shuffle_in_place = __commonJS((exports, module) => {
  var createShuffleInPlace = function(rng) {
    var customRandom = createRandom(rng);
    return function(sequence) {
      var length = sequence.length, lastIndex = length - 1;
      var index = -1;
      while (++index < length) {
        var r = customRandom(index, lastIndex), value = sequence[r];
        sequence[r] = sequence[index];
        sequence[index] = value;
      }
    };
  };
  var createRandom = require_random().createRandom;
  var shuffleInPlace = createShuffleInPlace(Math.random);
  shuffleInPlace.createShuffleInPlace = createShuffleInPlace;
  module.exports = shuffleInPlace;
});

// node_modules/graphology-layout/circlepack.js
var require_circlepack = __commonJS((exports, module) => {
  var CircleWrap = function(id, x2, y2, r, circleWrap) {
    this.wrappedCircle = circleWrap || null;
    this.children = {};
    this.countChildren = 0;
    this.id = id || null;
    this.next = null;
    this.previous = null;
    this.x = x2 || null;
    this.y = y2 || null;
    if (circleWrap)
      this.r = 1010101;
    else
      this.r = r || 999;
  };
  var setNode = function(graph, parentCircle, posMap) {
    for (var key in parentCircle.children) {
      var circle = parentCircle.children[key];
      if (circle.hasChildren()) {
        setNode(graph, circle, posMap);
      } else {
        posMap[circle.id] = { x: circle.x, y: circle.y };
      }
    }
  };
  var enclosesNot = function(a2, b2) {
    var dr = a2.r - b2.r;
    var dx = b2.x - a2.x;
    var dy = b2.y - a2.y;
    return dr < 0 || dr * dr < dx * dx + dy * dy;
  };
  var enclosesWeak = function(a2, b2) {
    var dr = a2.r - b2.r + 0.000001;
    var dx = b2.x - a2.x;
    var dy = b2.y - a2.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  };
  var enclosesWeakAll = function(a2, B) {
    for (var i = 0;i < B.length; ++i) {
      if (!enclosesWeak(a2, B[i])) {
        return false;
      }
    }
    return true;
  };
  var encloseBasis1 = function(a2) {
    return new CircleWrap(null, a2.x, a2.y, a2.r);
  };
  var encloseBasis2 = function(a2, b2) {
    var { x: x1, y: y1, r: r1 } = a2, x2 = b2.x, y2 = b2.y, r2 = b2.r, x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1, l2 = Math.sqrt(x21 * x21 + y21 * y21);
    return new CircleWrap(null, (x1 + x2 + x21 / l2 * r21) / 2, (y1 + y2 + y21 / l2 * r21) / 2, (l2 + r1 + r2) / 2);
  };
  var encloseBasis3 = function(a2, b2, c) {
    var { x: x1, y: y1, r: r1 } = a2, x2 = b2.x, y2 = b2.y, r2 = b2.r, x3 = c.x, y3 = c.y, r3 = c.r, a22 = x1 - x2, a3 = x1 - x3, b22 = y1 - y2, b3 = y1 - y3, c2 = r2 - r1, c3 = r3 - r1, d1 = x1 * x1 + y1 * y1 - r1 * r1, d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2, d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3, ab = a3 * b22 - a22 * b3, xa = (b22 * d3 - b3 * d2) / (ab * 2) - x1, xb = (b3 * c2 - b22 * c3) / ab, ya = (a3 * d2 - a22 * d3) / (ab * 2) - y1, yb = (a22 * c3 - a3 * c2) / ab, A = xb * xb + yb * yb - 1, B = 2 * (r1 + xa * xb + ya * yb), C2 = xa * xa + ya * ya - r1 * r1, r = -(A ? (B + Math.sqrt(B * B - 4 * A * C2)) / (2 * A) : C2 / B);
    return new CircleWrap(null, x1 + xa + xb * r, y1 + ya + yb * r, r);
  };
  var encloseBasis = function(B) {
    switch (B.length) {
      case 1:
        return encloseBasis1(B[0]);
      case 2:
        return encloseBasis2(B[0], B[1]);
      case 3:
        return encloseBasis3(B[0], B[1], B[2]);
      default:
        throw new Error("graphology-layout/circlepack: Invalid basis length " + B.length);
    }
  };
  var extendBasis = function(B, p) {
    var i, j2;
    if (enclosesWeakAll(p, B))
      return [p];
    for (i = 0;i < B.length; ++i) {
      if (enclosesNot(p, B[i]) && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
        return [B[i], p];
      }
    }
    for (i = 0;i < B.length - 1; ++i) {
      for (j2 = i + 1;j2 < B.length; ++j2) {
        if (enclosesNot(encloseBasis2(B[i], B[j2]), p) && enclosesNot(encloseBasis2(B[i], p), B[j2]) && enclosesNot(encloseBasis2(B[j2], p), B[i]) && enclosesWeakAll(encloseBasis3(B[i], B[j2], p), B)) {
          return [B[i], B[j2], p];
        }
      }
    }
    throw new Error("graphology-layout/circlepack: extendBasis failure !");
  };
  var score = function(node) {
    var a2 = node.wrappedCircle;
    var b2 = node.next.wrappedCircle;
    var ab = a2.r + b2.r;
    var dx = (a2.x * b2.r + b2.x * a2.r) / ab;
    var dy = (a2.y * b2.r + b2.y * a2.r) / ab;
    return dx * dx + dy * dy;
  };
  var enclose = function(circles, shuffleFunc) {
    var i = 0;
    var circlesLoc = circles.slice();
    var n = circles.length;
    var B = [];
    var p;
    var e;
    shuffleFunc(circlesLoc);
    while (i < n) {
      p = circlesLoc[i];
      if (e && enclosesWeak(e, p)) {
        ++i;
      } else {
        B = extendBasis(B, p);
        e = encloseBasis(B);
        i = 0;
      }
    }
    return e;
  };
  var place = function(b2, a2, c) {
    var dx = b2.x - a2.x, x2, a22, dy = b2.y - a2.y, y2, b22, d2 = dx * dx + dy * dy;
    if (d2) {
      a22 = a2.r + c.r;
      a22 *= a22;
      b22 = b2.r + c.r;
      b22 *= b22;
      if (a22 > b22) {
        x2 = (d2 + b22 - a22) / (2 * d2);
        y2 = Math.sqrt(Math.max(0, b22 / d2 - x2 * x2));
        c.x = b2.x - x2 * dx - y2 * dy;
        c.y = b2.y - x2 * dy + y2 * dx;
      } else {
        x2 = (d2 + a22 - b22) / (2 * d2);
        y2 = Math.sqrt(Math.max(0, a22 / d2 - x2 * x2));
        c.x = a2.x + x2 * dx - y2 * dy;
        c.y = a2.y + x2 * dy + y2 * dx;
      }
    } else {
      c.x = a2.x + c.r;
      c.y = a2.y;
    }
  };
  var intersects = function(a2, b2) {
    var dr = a2.r + b2.r - 0.000001, dx = b2.x - a2.x, dy = b2.y - a2.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  };
  var packEnclose = function(circles, shuffleFunc) {
    var n = circles.length;
    if (n === 0)
      return 0;
    var a2, b2, c, aa, ca, i, j2, k, sj, sk;
    a2 = circles[0];
    a2.x = 0;
    a2.y = 0;
    if (n <= 1)
      return a2.r;
    b2 = circles[1];
    a2.x = -b2.r;
    b2.x = a2.r;
    b2.y = 0;
    if (n <= 2)
      return a2.r + b2.r;
    c = circles[2];
    place(b2, a2, c);
    a2 = new CircleWrap(null, null, null, null, a2);
    b2 = new CircleWrap(null, null, null, null, b2);
    c = new CircleWrap(null, null, null, null, c);
    a2.next = c.previous = b2;
    b2.next = a2.previous = c;
    c.next = b2.previous = a2;
    pack:
      for (i = 3;i < n; ++i) {
        c = circles[i];
        place(a2.wrappedCircle, b2.wrappedCircle, c);
        c = new CircleWrap(null, null, null, null, c);
        j2 = b2.next;
        k = a2.previous;
        sj = b2.wrappedCircle.r;
        sk = a2.wrappedCircle.r;
        do {
          if (sj <= sk) {
            if (intersects(j2.wrappedCircle, c.wrappedCircle)) {
              b2 = j2;
              a2.next = b2;
              b2.previous = a2;
              --i;
              continue pack;
            }
            sj += j2.wrappedCircle.r;
            j2 = j2.next;
          } else {
            if (intersects(k.wrappedCircle, c.wrappedCircle)) {
              a2 = k;
              a2.next = b2;
              b2.previous = a2;
              --i;
              continue pack;
            }
            sk += k.wrappedCircle.r;
            k = k.previous;
          }
        } while (j2 !== k.next);
        c.previous = a2;
        c.next = b2;
        a2.next = b2.previous = b2 = c;
        aa = score(a2);
        while ((c = c.next) !== b2) {
          if ((ca = score(c)) < aa) {
            a2 = c;
            aa = ca;
          }
        }
        b2 = a2.next;
      }
    a2 = [b2.wrappedCircle];
    c = b2;
    var safety = 1e4;
    while ((c = c.next) !== b2) {
      if (--safety === 0) {
        break;
      }
      a2.push(c.wrappedCircle);
    }
    c = enclose(a2, shuffleFunc);
    for (i = 0;i < n; ++i) {
      a2 = circles[i];
      a2.x -= c.x;
      a2.y -= c.y;
    }
    return c.r;
  };
  var packHierarchy = function(parentCircle, shuffleFunc) {
    var r = 0;
    if (parentCircle.hasChildren()) {
      for (var key in parentCircle.children) {
        var circle = parentCircle.children[key];
        if (circle.hasChildren()) {
          circle.r = packHierarchy(circle, shuffleFunc);
        }
      }
      r = packEnclose(Object.values(parentCircle.children), shuffleFunc);
    }
    return r;
  };
  var packHierarchyAndShift = function(parentCircle, shuffleFunc) {
    packHierarchy(parentCircle, shuffleFunc);
    for (var key in parentCircle.children) {
      var circle = parentCircle.children[key];
      circle.applyPositionToChildren();
    }
  };
  var genericCirclePackLayout = function(assign2, graph, options) {
    if (!isGraph2(graph))
      throw new Error("graphology-layout/circlepack: the given graph is not a valid graphology instance.");
    options = resolveDefaults(options, DEFAULTS);
    var posMap = {}, positions = {}, nodes = graph.nodes(), center = options.center, hierarchyAttributes = options.hierarchyAttributes, shuffleFunc = shuffle.createShuffleInPlace(options.rng), scale2 = options.scale;
    var container = new CircleWrap;
    graph.forEachNode(function(key, attributes) {
      var r = attributes.size ? attributes.size : 1;
      var newCircleWrap = new CircleWrap(key, null, null, r);
      var parentContainer = container;
      hierarchyAttributes.forEach(function(v2) {
        var attr = attributes[v2];
        parentContainer = parentContainer.getChild(attr);
      });
      parentContainer.addChild(key, newCircleWrap);
    });
    packHierarchyAndShift(container, shuffleFunc);
    setNode(graph, container, posMap);
    var l2 = nodes.length, x2, y2, i;
    for (i = 0;i < l2; i++) {
      var node = nodes[i];
      x2 = center + scale2 * posMap[node].x;
      y2 = center + scale2 * posMap[node].y;
      positions[node] = {
        x: x2,
        y: y2
      };
      if (assign2) {
        graph.setNodeAttribute(node, options.attributes.x, x2);
        graph.setNodeAttribute(node, options.attributes.y, y2);
      }
    }
    return positions;
  };
  var resolveDefaults = require_defaults2();
  var isGraph2 = require_is_graph();
  var shuffle = require_shuffle_in_place();
  var DEFAULTS = {
    attributes: {
      x: "x",
      y: "y"
    },
    center: 0,
    hierarchyAttributes: [],
    rng: Math.random,
    scale: 1
  };
  CircleWrap.prototype.hasChildren = function() {
    return this.countChildren > 0;
  };
  CircleWrap.prototype.addChild = function(id, child) {
    this.children[id] = child;
    ++this.countChildren;
  };
  CircleWrap.prototype.getChild = function(id) {
    if (!this.children.hasOwnProperty(id)) {
      var circleWrap = new CircleWrap;
      this.children[id] = circleWrap;
      ++this.countChildren;
    }
    return this.children[id];
  };
  CircleWrap.prototype.applyPositionToChildren = function() {
    if (this.hasChildren()) {
      var root = this;
      for (var key in root.children) {
        var child = root.children[key];
        child.x += root.x;
        child.y += root.y;
        child.applyPositionToChildren();
      }
    }
  };
  var circlePackLayout = genericCirclePackLayout.bind(null, false);
  circlePackLayout.assign = genericCirclePackLayout.bind(null, true);
  module.exports = circlePackLayout;
});

// node_modules/graphology-layout/circular.js
var require_circular = __commonJS((exports, module) => {
  var genericCircularLayout = function(assign2, graph, options) {
    if (!isGraph2(graph))
      throw new Error("graphology-layout/random: the given graph is not a valid graphology instance.");
    options = resolveDefaults(options, DEFAULTS);
    var dimensions = options.dimensions;
    if (!Array.isArray(dimensions) || dimensions.length !== 2)
      throw new Error("graphology-layout/random: given dimensions are invalid.");
    var center = options.center;
    var scale2 = options.scale;
    var tau = Math.PI * 2;
    var offset = (center - 0.5) * scale2;
    var l2 = graph.order;
    var x2 = dimensions[0];
    var y2 = dimensions[1];
    function assignPosition(i2, target) {
      target[x2] = scale2 * Math.cos(i2 * tau / l2) + offset;
      target[y2] = scale2 * Math.sin(i2 * tau / l2) + offset;
      return target;
    }
    var i = 0;
    if (!assign2) {
      var positions = {};
      graph.forEachNode(function(node) {
        positions[node] = assignPosition(i++, {});
      });
      return positions;
    }
    graph.updateEachNodeAttributes(function(_2, attr) {
      assignPosition(i++, attr);
      return attr;
    }, {
      attributes: dimensions
    });
  };
  var resolveDefaults = require_defaults2();
  var isGraph2 = require_is_graph();
  var DEFAULTS = {
    dimensions: ["x", "y"],
    center: 0.5,
    scale: 1
  };
  var circularLayout = genericCircularLayout.bind(null, false);
  circularLayout.assign = genericCircularLayout.bind(null, true);
  module.exports = circularLayout;
});

// node_modules/graphology-layout/random.js
var require_random2 = __commonJS((exports, module) => {
  var genericRandomLayout = function(assign2, graph, options) {
    if (!isGraph2(graph))
      throw new Error("graphology-layout/random: the given graph is not a valid graphology instance.");
    options = resolveDefaults(options, DEFAULTS);
    var dimensions = options.dimensions;
    if (!Array.isArray(dimensions) || dimensions.length < 1)
      throw new Error("graphology-layout/random: given dimensions are invalid.");
    var d2 = dimensions.length;
    var center = options.center;
    var rng = options.rng;
    var scale2 = options.scale;
    var offset = (center - 0.5) * scale2;
    function assignPosition(target) {
      for (var i = 0;i < d2; i++) {
        target[dimensions[i]] = rng() * scale2 + offset;
      }
      return target;
    }
    if (!assign2) {
      var positions = {};
      graph.forEachNode(function(node) {
        positions[node] = assignPosition({});
      });
      return positions;
    }
    graph.updateEachNodeAttributes(function(_2, attr) {
      assignPosition(attr);
      return attr;
    }, {
      attributes: dimensions
    });
  };
  var resolveDefaults = require_defaults2();
  var isGraph2 = require_is_graph();
  var DEFAULTS = {
    dimensions: ["x", "y"],
    center: 0.5,
    rng: Math.random,
    scale: 1
  };
  var randomLayout = genericRandomLayout.bind(null, false);
  randomLayout.assign = genericRandomLayout.bind(null, true);
  module.exports = randomLayout;
});

// node_modules/graphology-layout/rotation.js
var require_rotation = __commonJS((exports, module) => {
  var genericRotation = function(assign2, graph, angle, options) {
    if (!isGraph2(graph))
      throw new Error("graphology-layout/rotation: the given graph is not a valid graphology instance.");
    options = resolveDefaults(options, DEFAULTS);
    if (options.degrees)
      angle *= RAD_CONVERSION;
    var dimensions = options.dimensions;
    if (!Array.isArray(dimensions) || dimensions.length !== 2)
      throw new Error("graphology-layout/random: given dimensions are invalid.");
    if (graph.order === 0) {
      if (assign2)
        return;
      return {};
    }
    var xd = dimensions[0];
    var yd = dimensions[1];
    var xCenter = 0;
    var yCenter = 0;
    if (!options.centeredOnZero) {
      var xMin = Infinity;
      var xMax = (-Infinity);
      var yMin = Infinity;
      var yMax = (-Infinity);
      graph.forEachNode(function(node, attr) {
        var x2 = attr[xd];
        var y2 = attr[yd];
        if (x2 < xMin)
          xMin = x2;
        if (x2 > xMax)
          xMax = x2;
        if (y2 < yMin)
          yMin = y2;
        if (y2 > yMax)
          yMax = y2;
      });
      xCenter = (xMin + xMax) / 2;
      yCenter = (yMin + yMax) / 2;
    }
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    function assignPosition(target) {
      var x2 = target[xd];
      var y2 = target[yd];
      target[xd] = xCenter + (x2 - xCenter) * cos - (y2 - yCenter) * sin;
      target[yd] = yCenter + (x2 - xCenter) * sin + (y2 - yCenter) * cos;
      return target;
    }
    if (!assign2) {
      var positions = {};
      graph.forEachNode(function(node, attr) {
        var o2 = {};
        o2[xd] = attr[xd];
        o2[yd] = attr[yd];
        positions[node] = assignPosition(o2);
      });
      return positions;
    }
    graph.updateEachNodeAttributes(function(_2, attr) {
      assignPosition(attr);
      return attr;
    }, {
      attributes: dimensions
    });
  };
  var resolveDefaults = require_defaults2();
  var isGraph2 = require_is_graph();
  var RAD_CONVERSION = Math.PI / 180;
  var DEFAULTS = {
    dimensions: ["x", "y"],
    centeredOnZero: false,
    degrees: false
  };
  var rotation = genericRotation.bind(null, false);
  rotation.assign = genericRotation.bind(null, true);
  module.exports = rotation;
});

// src/web/public/index.tsx
var import_graphology = __toESM(require_graphology_umd_min(), 1);

// node_modules/sigma/dist/inherits-8fbdedb5.esm.js
var _classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var toPrimitive = function(t, r) {
  if (typeof t != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== undefined) {
    var i = e.call(t, r || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
};
var toPropertyKey = function(t) {
  var i = toPrimitive(t, "string");
  return typeof i == "symbol" ? i : String(i);
};
var _defineProperties = function(target, props) {
  for (var i = 0;i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
};
var _createClass = function(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
};
var _getPrototypeOf = function(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
};
var _isNativeReflectConstruct = function() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t;
  })();
};
var _assertThisInitialized = function(self2) {
  if (self2 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
};
var _possibleConstructorReturn = function(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== undefined) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
};
var _callSuper = function(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
};
var _setPrototypeOf = function(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
};
var _inherits = function(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
};

// node_modules/sigma/dist/colors-2f6d17f0.esm.js
var _arrayWithHoles = function(arr) {
  if (Array.isArray(arr))
    return arr;
};
var _iterableToArrayLimit = function(r, l) {
  var t = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
};
var _arrayLikeToArray = function(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len);i < len; i++)
    arr2[i] = arr[i];
  return arr2;
};
var _unsupportedIterableToArray = function(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
};
var _nonIterableRest = function() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
};
var _slicedToArray = function(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
};
var parseColor = function(val) {
  var r = 0;
  var g = 0;
  var b = 0;
  var a = 1;
  if (val[0] === "#") {
    if (val.length === 4) {
      r = parseInt(val.charAt(1) + val.charAt(1), 16);
      g = parseInt(val.charAt(2) + val.charAt(2), 16);
      b = parseInt(val.charAt(3) + val.charAt(3), 16);
    } else {
      r = parseInt(val.charAt(1) + val.charAt(2), 16);
      g = parseInt(val.charAt(3) + val.charAt(4), 16);
      b = parseInt(val.charAt(5) + val.charAt(6), 16);
    }
    if (val.length === 9) {
      a = parseInt(val.charAt(7) + val.charAt(8), 16) / 255;
    }
  } else if (RGBA_TEST_REGEX.test(val)) {
    var match = val.match(RGBA_EXTRACT_REGEX);
    if (match) {
      r = +match[1];
      g = +match[2];
      b = +match[3];
      if (match[4])
        a = +match[4];
    }
  }
  return {
    r,
    g,
    b,
    a
  };
};
var rgbaToFloat = function(r, g, b, a, masking) {
  INT32[0] = a << 24 | b << 16 | g << 8 | r;
  if (masking)
    INT32[0] = INT32[0] & 4278190079;
  return FLOAT32[0];
};
var floatColor = function(val) {
  val = val.toLowerCase();
  if (typeof FLOAT_COLOR_CACHE[val] !== "undefined")
    return FLOAT_COLOR_CACHE[val];
  var parsed = parseColor(val);
  var { r, g, b } = parsed;
  var a = parsed.a;
  a = a * 255 | 0;
  var color = rgbaToFloat(r, g, b, a, true);
  FLOAT_COLOR_CACHE[val] = color;
  return color;
};
var indexToColor = function(index) {
  if (typeof FLOAT_INDEX_CACHE[index] !== "undefined")
    return FLOAT_INDEX_CACHE[index];
  var r = (index & 16711680) >>> 16;
  var g = (index & 65280) >>> 8;
  var b = index & 255;
  var a = 255;
  var color = rgbaToFloat(r, g, b, a, true);
  FLOAT_INDEX_CACHE[index] = color;
  return color;
};
var colorToIndex = function(r, g, b, _a) {
  return b + (g << 8) + (r << 16);
};
var getPixelColor = function(gl, frameBuffer, x, y, pixelRatio, downSizingRatio) {
  var bufferX = Math.floor(x / downSizingRatio * pixelRatio);
  var bufferY = Math.floor(gl.drawingBufferHeight / downSizingRatio - y / downSizingRatio * pixelRatio);
  var pixel = new Uint8Array(4);
  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
  gl.readPixels(bufferX, bufferY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
  var _pixel = _slicedToArray(pixel, 4), r = _pixel[0], g = _pixel[1], b = _pixel[2], a = _pixel[3];
  return [r, g, b, a];
};
var HTML_COLORS = {
  black: "#000000",
  silver: "#C0C0C0",
  gray: "#808080",
  grey: "#808080",
  white: "#FFFFFF",
  maroon: "#800000",
  red: "#FF0000",
  purple: "#800080",
  fuchsia: "#FF00FF",
  green: "#008000",
  lime: "#00FF00",
  olive: "#808000",
  yellow: "#FFFF00",
  navy: "#000080",
  blue: "#0000FF",
  teal: "#008080",
  aqua: "#00FFFF",
  darkblue: "#00008B",
  mediumblue: "#0000CD",
  darkgreen: "#006400",
  darkcyan: "#008B8B",
  deepskyblue: "#00BFFF",
  darkturquoise: "#00CED1",
  mediumspringgreen: "#00FA9A",
  springgreen: "#00FF7F",
  cyan: "#00FFFF",
  midnightblue: "#191970",
  dodgerblue: "#1E90FF",
  lightseagreen: "#20B2AA",
  forestgreen: "#228B22",
  seagreen: "#2E8B57",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  limegreen: "#32CD32",
  mediumseagreen: "#3CB371",
  turquoise: "#40E0D0",
  royalblue: "#4169E1",
  steelblue: "#4682B4",
  darkslateblue: "#483D8B",
  mediumturquoise: "#48D1CC",
  indigo: "#4B0082",
  darkolivegreen: "#556B2F",
  cadetblue: "#5F9EA0",
  cornflowerblue: "#6495ED",
  rebeccapurple: "#663399",
  mediumaquamarine: "#66CDAA",
  dimgray: "#696969",
  dimgrey: "#696969",
  slateblue: "#6A5ACD",
  olivedrab: "#6B8E23",
  slategray: "#708090",
  slategrey: "#708090",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  mediumslateblue: "#7B68EE",
  lawngreen: "#7CFC00",
  chartreuse: "#7FFF00",
  aquamarine: "#7FFFD4",
  skyblue: "#87CEEB",
  lightskyblue: "#87CEFA",
  blueviolet: "#8A2BE2",
  darkred: "#8B0000",
  darkmagenta: "#8B008B",
  saddlebrown: "#8B4513",
  darkseagreen: "#8FBC8F",
  lightgreen: "#90EE90",
  mediumpurple: "#9370DB",
  darkviolet: "#9400D3",
  palegreen: "#98FB98",
  darkorchid: "#9932CC",
  yellowgreen: "#9ACD32",
  sienna: "#A0522D",
  brown: "#A52A2A",
  darkgray: "#A9A9A9",
  darkgrey: "#A9A9A9",
  lightblue: "#ADD8E6",
  greenyellow: "#ADFF2F",
  paleturquoise: "#AFEEEE",
  lightsteelblue: "#B0C4DE",
  powderblue: "#B0E0E6",
  firebrick: "#B22222",
  darkgoldenrod: "#B8860B",
  mediumorchid: "#BA55D3",
  rosybrown: "#BC8F8F",
  darkkhaki: "#BDB76B",
  mediumvioletred: "#C71585",
  indianred: "#CD5C5C",
  peru: "#CD853F",
  chocolate: "#D2691E",
  tan: "#D2B48C",
  lightgray: "#D3D3D3",
  lightgrey: "#D3D3D3",
  thistle: "#D8BFD8",
  orchid: "#DA70D6",
  goldenrod: "#DAA520",
  palevioletred: "#DB7093",
  crimson: "#DC143C",
  gainsboro: "#DCDCDC",
  plum: "#DDA0DD",
  burlywood: "#DEB887",
  lightcyan: "#E0FFFF",
  lavender: "#E6E6FA",
  darksalmon: "#E9967A",
  violet: "#EE82EE",
  palegoldenrod: "#EEE8AA",
  lightcoral: "#F08080",
  khaki: "#F0E68C",
  aliceblue: "#F0F8FF",
  honeydew: "#F0FFF0",
  azure: "#F0FFFF",
  sandybrown: "#F4A460",
  wheat: "#F5DEB3",
  beige: "#F5F5DC",
  whitesmoke: "#F5F5F5",
  mintcream: "#F5FFFA",
  ghostwhite: "#F8F8FF",
  salmon: "#FA8072",
  antiquewhite: "#FAEBD7",
  linen: "#FAF0E6",
  lightgoldenrodyellow: "#FAFAD2",
  oldlace: "#FDF5E6",
  magenta: "#FF00FF",
  deeppink: "#FF1493",
  orangered: "#FF4500",
  tomato: "#FF6347",
  hotpink: "#FF69B4",
  coral: "#FF7F50",
  darkorange: "#FF8C00",
  lightsalmon: "#FFA07A",
  orange: "#FFA500",
  lightpink: "#FFB6C1",
  pink: "#FFC0CB",
  gold: "#FFD700",
  peachpuff: "#FFDAB9",
  navajowhite: "#FFDEAD",
  moccasin: "#FFE4B5",
  bisque: "#FFE4C4",
  mistyrose: "#FFE4E1",
  blanchedalmond: "#FFEBCD",
  papayawhip: "#FFEFD5",
  lavenderblush: "#FFF0F5",
  seashell: "#FFF5EE",
  cornsilk: "#FFF8DC",
  lemonchiffon: "#FFFACD",
  floralwhite: "#FFFAF0",
  snow: "#FFFAFA",
  lightyellow: "#FFFFE0",
  ivory: "#FFFFF0"
};
var INT8 = new Int8Array(4);
var INT32 = new Int32Array(INT8.buffer, 0, 1);
var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
var FLOAT_COLOR_CACHE = {};
for (htmlColor in HTML_COLORS) {
  FLOAT_COLOR_CACHE[htmlColor] = floatColor(HTML_COLORS[htmlColor]);
  FLOAT_COLOR_CACHE[HTML_COLORS[htmlColor]] = FLOAT_COLOR_CACHE[htmlColor];
}
var htmlColor;
var FLOAT_INDEX_CACHE = {};

// node_modules/sigma/dist/index-6bccaf6e.esm.js
var _defineProperty = function(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};
var ownKeys = function(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
};
var _objectSpread2 = function(e) {
  for (var r = 1;r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
};
var loadShader = function(type, gl, source) {
  var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
  var shader = gl.createShader(glType);
  if (shader === null) {
    throw new Error("loadShader: error while creating the shader");
  }
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!successfullyCompiled) {
    var infoLog = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("loadShader: error while compiling the shader:\n".concat(infoLog, "\n").concat(source));
  }
  return shader;
};
var loadVertexShader = function(gl, source) {
  return loadShader("VERTEX", gl, source);
};
var loadFragmentShader = function(gl, source) {
  return loadShader("FRAGMENT", gl, source);
};
var loadProgram = function(gl, shaders) {
  var program = gl.createProgram();
  if (program === null) {
    throw new Error("loadProgram: error while creating the program.");
  }
  var i, l;
  for (i = 0, l = shaders.length;i < l; i++)
    gl.attachShader(program, shaders[i]);
  gl.linkProgram(program);
  var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!successfullyLinked) {
    gl.deleteProgram(program);
    throw new Error("loadProgram: error while linking the program.");
  }
  return program;
};
var getAttributeItemsCount = function(attr) {
  return attr.normalized ? 1 : attr.size;
};
var getAttributesItemsCount = function(attrs) {
  var res = 0;
  attrs.forEach(function(attr) {
    return res += getAttributeItemsCount(attr);
  });
  return res;
};
var createEdgeCompoundProgram = function(programClasses, drawLabel) {
  return function() {
    function EdgeCompoundProgram(gl, pickingBuffer, renderer) {
      _classCallCheck(this, EdgeCompoundProgram);
      _defineProperty(this, "drawLabel", drawLabel);
      this.programs = programClasses.map(function(Program) {
        return new Program(gl, pickingBuffer, renderer);
      });
    }
    _createClass(EdgeCompoundProgram, [{
      key: "reallocate",
      value: function reallocate(capacity) {
        this.programs.forEach(function(program) {
          return program.reallocate(capacity);
        });
      }
    }, {
      key: "process",
      value: function process(edgeIndex, offset, sourceData, targetData, data) {
        this.programs.forEach(function(program) {
          return program.process(edgeIndex, offset, sourceData, targetData, data);
        });
      }
    }, {
      key: "render",
      value: function render(params) {
        this.programs.forEach(function(program) {
          return program.render(params);
        });
      }
    }, {
      key: "kill",
      value: function kill() {
        this.programs.forEach(function(program) {
          return program.kill();
        });
      }
    }]);
    return EdgeCompoundProgram;
  }();
};
var drawStraightEdgeLabel = function(context, edgeData, sourceData, targetData, settings) {
  var { edgeLabelSize: size, edgeLabelFont: font, edgeLabelWeight: weight } = settings, color = settings.edgeLabelColor.attribute ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000" : settings.edgeLabelColor.color;
  var label = edgeData.label;
  if (!label)
    return;
  context.fillStyle = color;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  var sSize = sourceData.size;
  var tSize = targetData.size;
  var sx = sourceData.x;
  var sy = sourceData.y;
  var tx = targetData.x;
  var ty = targetData.y;
  var cx = (sx + tx) / 2;
  var cy = (sy + ty) / 2;
  var dx = tx - sx;
  var dy = ty - sy;
  var d = Math.sqrt(dx * dx + dy * dy);
  if (d < sSize + tSize)
    return;
  sx += dx * sSize / d;
  sy += dy * sSize / d;
  tx -= dx * tSize / d;
  ty -= dy * tSize / d;
  cx = (sx + tx) / 2;
  cy = (sy + ty) / 2;
  dx = tx - sx;
  dy = ty - sy;
  d = Math.sqrt(dx * dx + dy * dy);
  var textLength = context.measureText(label).width;
  if (textLength > d) {
    var ellipsis = "\u2026";
    label = label + ellipsis;
    textLength = context.measureText(label).width;
    while (textLength > d && label.length > 1) {
      label = label.slice(0, -2) + ellipsis;
      textLength = context.measureText(label).width;
    }
    if (label.length < 4)
      return;
  }
  var angle;
  if (dx > 0) {
    if (dy > 0)
      angle = Math.acos(dx / d);
    else
      angle = Math.asin(dy / d);
  } else {
    if (dy > 0)
      angle = Math.acos(dx / d) + Math.PI;
    else
      angle = Math.asin(dx / d) + Math.PI / 2;
  }
  context.save();
  context.translate(cx, cy);
  context.rotate(angle);
  context.fillText(label, -textLength / 2, edgeData.size / 2 + size);
  context.restore();
};
var drawDiscNodeLabel = function(context, data, settings) {
  if (!data.label)
    return;
  var { labelSize: size, labelFont: font, labelWeight: weight } = settings, color = settings.labelColor.attribute ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000" : settings.labelColor.color;
  context.fillStyle = color;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
};
var drawDiscNodeHover = function(context, data, settings) {
  var { labelSize: size, labelFont: font, labelWeight: weight } = settings;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  context.fillStyle = "#FFF";
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 8;
  context.shadowColor = "#000";
  var PADDING = 2;
  if (typeof data.label === "string") {
    var textWidth = context.measureText(data.label).width, boxWidth = Math.round(textWidth + 5), boxHeight = Math.round(size + 2 * PADDING), radius = Math.max(data.size, size / 2) + PADDING;
    var angleRadian = Math.asin(boxHeight / 2 / radius);
    var xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));
    context.beginPath();
    context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
    context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
    context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
    context.closePath();
    context.fill();
  } else {
    context.beginPath();
    context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  }
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;
  drawDiscNodeLabel(context, data, settings);
};
var _superPropBase = function(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null)
      break;
  }
  return object;
};
var _get = function() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
};
var PICKING_PREFIX = "#define PICKING_MODE\n";
var SIZE_FACTOR_PER_ATTRIBUTE_TYPE = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, WebGL2RenderingContext.BOOL, 1), WebGL2RenderingContext.BYTE, 1), WebGL2RenderingContext.UNSIGNED_BYTE, 1), WebGL2RenderingContext.SHORT, 2), WebGL2RenderingContext.UNSIGNED_SHORT, 2), WebGL2RenderingContext.INT, 4), WebGL2RenderingContext.UNSIGNED_INT, 4), WebGL2RenderingContext.FLOAT, 4);
var Program = function() {
  function Program2(gl, pickingBuffer, renderer) {
    _classCallCheck(this, Program2);
    _defineProperty(this, "array", new Float32Array);
    _defineProperty(this, "constantArray", new Float32Array);
    _defineProperty(this, "capacity", 0);
    _defineProperty(this, "verticesCount", 0);
    var def = this.getDefinition();
    this.VERTICES = def.VERTICES;
    this.VERTEX_SHADER_SOURCE = def.VERTEX_SHADER_SOURCE;
    this.FRAGMENT_SHADER_SOURCE = def.FRAGMENT_SHADER_SOURCE;
    this.UNIFORMS = def.UNIFORMS;
    this.ATTRIBUTES = def.ATTRIBUTES;
    this.METHOD = def.METHOD;
    this.CONSTANT_ATTRIBUTES = "CONSTANT_ATTRIBUTES" in def ? def.CONSTANT_ATTRIBUTES : [];
    this.CONSTANT_DATA = "CONSTANT_DATA" in def ? def.CONSTANT_DATA : [];
    this.isInstanced = "CONSTANT_ATTRIBUTES" in def;
    this.ATTRIBUTES_ITEMS_COUNT = getAttributesItemsCount(this.ATTRIBUTES);
    this.STRIDE = this.VERTICES * this.ATTRIBUTES_ITEMS_COUNT;
    this.renderer = renderer;
    this.normalProgram = this.getProgramInfo("normal", gl, def.VERTEX_SHADER_SOURCE, def.FRAGMENT_SHADER_SOURCE, null);
    this.pickProgram = pickingBuffer ? this.getProgramInfo("pick", gl, PICKING_PREFIX + def.VERTEX_SHADER_SOURCE, PICKING_PREFIX + def.FRAGMENT_SHADER_SOURCE, pickingBuffer) : null;
    if (this.isInstanced) {
      var constantAttributesItemsCount = getAttributesItemsCount(this.CONSTANT_ATTRIBUTES);
      if (this.CONSTANT_DATA.length !== this.VERTICES)
        throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES, " items, received ").concat(this.CONSTANT_DATA.length, " instead)"));
      this.constantArray = new Float32Array(this.CONSTANT_DATA.length * constantAttributesItemsCount);
      for (var i = 0;i < this.CONSTANT_DATA.length; i++) {
        var vector = this.CONSTANT_DATA[i];
        if (vector.length !== constantAttributesItemsCount)
          throw new Error("Program: error while getting constant data (one vector has ".concat(vector.length, " items instead of ").concat(constantAttributesItemsCount, ")"));
        for (var j = 0;j < vector.length; j++)
          this.constantArray[i * constantAttributesItemsCount + j] = vector[j];
      }
      this.STRIDE = this.ATTRIBUTES_ITEMS_COUNT;
    }
  }
  _createClass(Program2, [{
    key: "getProgramInfo",
    value: function getProgramInfo(name, gl, vertexShaderSource, fragmentShaderSource, frameBuffer) {
      var def = this.getDefinition();
      var buffer = gl.createBuffer();
      if (buffer === null)
        throw new Error("Program: error while creating the WebGL buffer.");
      var vertexShader = loadVertexShader(gl, vertexShaderSource);
      var fragmentShader = loadFragmentShader(gl, fragmentShaderSource);
      var program = loadProgram(gl, [vertexShader, fragmentShader]);
      var uniformLocations = {};
      def.UNIFORMS.forEach(function(uniformName) {
        var location = gl.getUniformLocation(program, uniformName);
        if (location)
          uniformLocations[uniformName] = location;
      });
      var attributeLocations = {};
      def.ATTRIBUTES.forEach(function(attr) {
        attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
      });
      var constantBuffer;
      if ("CONSTANT_ATTRIBUTES" in def) {
        def.CONSTANT_ATTRIBUTES.forEach(function(attr) {
          attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
        });
        constantBuffer = gl.createBuffer();
        if (constantBuffer === null)
          throw new Error("Program: error while creating the WebGL constant buffer.");
      }
      return {
        name,
        program,
        gl,
        frameBuffer,
        buffer,
        constantBuffer: constantBuffer || {},
        uniformLocations,
        attributeLocations,
        isPicking: name === "pick"
      };
    }
  }, {
    key: "bindProgram",
    value: function bindProgram(program) {
      var _this = this;
      var offset = 0;
      var { gl, buffer } = program;
      if (!this.isInstanced) {
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        offset = 0;
        this.ATTRIBUTES.forEach(function(attr) {
          return offset += _this.bindAttribute(attr, program, offset);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
      } else {
        gl.bindBuffer(gl.ARRAY_BUFFER, program.constantBuffer);
        offset = 0;
        this.CONSTANT_ATTRIBUTES.forEach(function(attr) {
          return offset += _this.bindAttribute(attr, program, offset, false);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.constantArray, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, program.buffer);
        offset = 0;
        this.ATTRIBUTES.forEach(function(attr) {
          return offset += _this.bindAttribute(attr, program, offset, true);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
  }, {
    key: "unbindProgram",
    value: function unbindProgram(program) {
      var _this2 = this;
      if (!this.isInstanced) {
        this.ATTRIBUTES.forEach(function(attr) {
          return _this2.unbindAttribute(attr, program);
        });
      } else {
        this.CONSTANT_ATTRIBUTES.forEach(function(attr) {
          return _this2.unbindAttribute(attr, program, false);
        });
        this.ATTRIBUTES.forEach(function(attr) {
          return _this2.unbindAttribute(attr, program, true);
        });
      }
    }
  }, {
    key: "bindAttribute",
    value: function bindAttribute(attr, program, offset, setDivisor) {
      var sizeFactor = SIZE_FACTOR_PER_ATTRIBUTE_TYPE[attr.type];
      if (typeof sizeFactor !== "number")
        throw new Error("Program.bind: yet unsupported attribute type \"".concat(attr.type, "\""));
      var location = program.attributeLocations[attr.name];
      var gl = program.gl;
      if (location !== -1) {
        gl.enableVertexAttribArray(location);
        var stride = !this.isInstanced ? this.ATTRIBUTES_ITEMS_COUNT * Float32Array.BYTES_PER_ELEMENT : (setDivisor ? this.ATTRIBUTES_ITEMS_COUNT : getAttributesItemsCount(this.CONSTANT_ATTRIBUTES)) * Float32Array.BYTES_PER_ELEMENT;
        gl.vertexAttribPointer(location, attr.size, attr.type, attr.normalized || false, stride, offset);
        if (this.isInstanced && setDivisor) {
          if (gl instanceof WebGL2RenderingContext) {
            gl.vertexAttribDivisor(location, 1);
          } else {
            var ext = gl.getExtension("ANGLE_instanced_arrays");
            if (ext)
              ext.vertexAttribDivisorANGLE(location, 1);
          }
        }
      }
      return attr.size * sizeFactor;
    }
  }, {
    key: "unbindAttribute",
    value: function unbindAttribute(attr, program, unsetDivisor) {
      var location = program.attributeLocations[attr.name];
      var gl = program.gl;
      if (location !== -1) {
        gl.disableVertexAttribArray(location);
        if (this.isInstanced && unsetDivisor) {
          if (gl instanceof WebGL2RenderingContext) {
            gl.vertexAttribDivisor(location, 0);
          } else {
            var ext = gl.getExtension("ANGLE_instanced_arrays");
            if (ext)
              ext.vertexAttribDivisorANGLE(location, 0);
          }
        }
      }
    }
  }, {
    key: "reallocate",
    value: function reallocate(capacity) {
      if (capacity === this.capacity)
        return;
      this.capacity = capacity;
      this.verticesCount = this.VERTICES * capacity;
      this.array = new Float32Array(!this.isInstanced ? this.verticesCount * this.ATTRIBUTES_ITEMS_COUNT : this.capacity * this.ATTRIBUTES_ITEMS_COUNT);
    }
  }, {
    key: "hasNothingToRender",
    value: function hasNothingToRender() {
      return this.verticesCount === 0;
    }
  }, {
    key: "renderProgram",
    value: function renderProgram(params, programInfo) {
      var { gl, program } = programInfo;
      gl.enable(gl.BLEND);
      gl.useProgram(program);
      this.setUniforms(params, programInfo);
      this.drawWebGL(this.METHOD, programInfo);
    }
  }, {
    key: "render",
    value: function render(params) {
      if (this.hasNothingToRender())
        return;
      if (this.pickProgram) {
        this.pickProgram.gl.viewport(0, 0, params.width * params.pixelRatio / params.downSizingRatio, params.height * params.pixelRatio / params.downSizingRatio);
        this.bindProgram(this.pickProgram);
        this.renderProgram(_objectSpread2(_objectSpread2({}, params), {}, {
          pixelRatio: params.pixelRatio / params.downSizingRatio
        }), this.pickProgram);
        this.unbindProgram(this.pickProgram);
      }
      this.normalProgram.gl.viewport(0, 0, params.width * params.pixelRatio, params.height * params.pixelRatio);
      this.bindProgram(this.normalProgram);
      this.renderProgram(params, this.normalProgram);
      this.unbindProgram(this.normalProgram);
    }
  }, {
    key: "drawWebGL",
    value: function drawWebGL(method, _ref) {
      var { gl, frameBuffer } = _ref;
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      if (!this.isInstanced) {
        gl.drawArrays(method, 0, this.verticesCount);
      } else {
        if (gl instanceof WebGL2RenderingContext) {
          gl.drawArraysInstanced(method, 0, this.VERTICES, this.capacity);
        } else {
          var ext = gl.getExtension("ANGLE_instanced_arrays");
          if (ext)
            ext.drawArraysInstancedANGLE(method, 0, this.VERTICES, this.capacity);
        }
      }
    }
  }]);
  return Program2;
}();
var NodeProgram = function(_ref) {
  _inherits(NodeProgram2, _ref);
  function NodeProgram2() {
    _classCallCheck(this, NodeProgram2);
    return _callSuper(this, NodeProgram2, arguments);
  }
  _createClass(NodeProgram2, [{
    key: "kill",
    value: function kill() {
      return;
    }
  }, {
    key: "process",
    value: function process(nodeIndex, offset, data) {
      var i = offset * this.STRIDE;
      if (data.hidden) {
        for (var l = i + this.STRIDE;i < l; i++) {
          this.array[i] = 0;
        }
        return;
      }
      return this.processVisibleItem(indexToColor(nodeIndex), i, data);
    }
  }]);
  return NodeProgram2;
}(Program);
var EdgeProgram = function(_ref) {
  _inherits(EdgeProgram2, _ref);
  function EdgeProgram2() {
    var _this;
    _classCallCheck(this, EdgeProgram2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0;_key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EdgeProgram2, [].concat(args));
    _defineProperty(_assertThisInitialized(_this), "drawLabel", undefined);
    return _this;
  }
  _createClass(EdgeProgram2, [{
    key: "kill",
    value: function kill() {
      return;
    }
  }, {
    key: "process",
    value: function process(edgeIndex, offset, sourceData, targetData, data) {
      var i = offset * this.STRIDE;
      if (data.hidden || sourceData.hidden || targetData.hidden) {
        for (var l = i + this.STRIDE;i < l; i++) {
          this.array[i] = 0;
        }
        return;
      }
      return this.processVisibleItem(indexToColor(edgeIndex), i, sourceData, targetData, data);
    }
  }]);
  return EdgeProgram2;
}(Program);
var SHADER_SOURCE$6 = "\nprecision highp float;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\n\nuniform float u_correctionRatio;\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float border = u_correctionRatio * 2.0;\n  float dist = length(v_diffVector) - v_radius + border;\n\n  // No antialiasing for picking mode:\n  #ifdef PICKING_MODE\n  if (dist > border)\n    gl_FragColor = transparent;\n  else\n    gl_FragColor = v_color;\n\n  #else\n  float t = 0.0;\n  if (dist > border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / border;\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE$2 = SHADER_SOURCE$6;
var SHADER_SOURCE$5 = "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\nattribute float a_size;\nattribute float a_angle;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;\n  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));\n  vec2 position = a_position + diffVector;\n  gl_Position = vec4(\n    (u_matrix * vec3(position, 1)).xy,\n    0,\n    1\n  );\n\n  v_diffVector = diffVector;\n  v_radius = size / 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$3 = SHADER_SOURCE$5;
var _WebGLRenderingContex$3 = WebGLRenderingContext;
var UNSIGNED_BYTE$3 = _WebGLRenderingContex$3.UNSIGNED_BYTE;
var FLOAT$3 = _WebGLRenderingContex$3.FLOAT;
var UNIFORMS$2 = ["u_sizeRatio", "u_correctionRatio", "u_matrix"];
var NodeCircleProgram = function(_NodeProgram) {
  _inherits(NodeCircleProgram2, _NodeProgram);
  function NodeCircleProgram2() {
    _classCallCheck(this, NodeCircleProgram2);
    return _callSuper(this, NodeCircleProgram2, arguments);
  }
  _createClass(NodeCircleProgram2, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 3,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$3,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$2,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS: UNIFORMS$2,
        ATTRIBUTES: [{
          name: "a_position",
          size: 2,
          type: FLOAT$3
        }, {
          name: "a_size",
          size: 1,
          type: FLOAT$3
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }],
        CONSTANT_ATTRIBUTES: [{
          name: "a_angle",
          size: 1,
          type: FLOAT$3
        }],
        CONSTANT_DATA: [[NodeCircleProgram2.ANGLE_1], [NodeCircleProgram2.ANGLE_2], [NodeCircleProgram2.ANGLE_3]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(nodeIndex, startIndex, data) {
      var array = this.array;
      var color = floatColor(data.color);
      array[startIndex++] = data.x;
      array[startIndex++] = data.y;
      array[startIndex++] = data.size;
      array[startIndex++] = color;
      array[startIndex++] = nodeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var { gl, uniformLocations } = _ref;
      var { u_sizeRatio, u_correctionRatio, u_matrix } = uniformLocations;
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
    }
  }]);
  return NodeCircleProgram2;
}(NodeProgram);
_defineProperty(NodeCircleProgram, "ANGLE_1", 0);
_defineProperty(NodeCircleProgram, "ANGLE_2", 2 * Math.PI / 3);
_defineProperty(NodeCircleProgram, "ANGLE_3", 4 * Math.PI / 3);
var SHADER_SOURCE$4 = "\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
var FRAGMENT_SHADER_SOURCE$1 = SHADER_SOURCE$4;
var SHADER_SOURCE$3 = "\nattribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec3 a_barycentric;\n\n#ifdef PICKING_MODE\nattribute vec4 a_id;\n#else\nattribute vec4 a_color;\n#endif\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\n\nvarying vec4 v_color;\n\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadWidthLengthRatio = 0.66;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n  float webGLArrowHeadHalfWidth = webGLArrowHeadLength * arrowHeadWidthLengthRatio / 2.0;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (webGLNodeRadius * unitNormal.y)\n    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadHalfWidth * unitNormal.x)\n    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadHalfWidth * unitNormal.x),\n\n      da * (-webGLNodeRadius * unitNormal.x)\n    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadHalfWidth * unitNormal.y)\n    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadHalfWidth * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$2 = SHADER_SOURCE$3;
var _WebGLRenderingContex$2 = WebGLRenderingContext;
var UNSIGNED_BYTE$2 = _WebGLRenderingContex$2.UNSIGNED_BYTE;
var FLOAT$2 = _WebGLRenderingContex$2.FLOAT;
var UNIFORMS$1 = ["u_matrix", "u_sizeRatio", "u_correctionRatio", "u_minEdgeThickness"];
var EdgeArrowHeadProgram = function(_EdgeProgram) {
  _inherits(EdgeArrowHeadProgram2, _EdgeProgram);
  function EdgeArrowHeadProgram2() {
    _classCallCheck(this, EdgeArrowHeadProgram2);
    return _callSuper(this, EdgeArrowHeadProgram2, arguments);
  }
  _createClass(EdgeArrowHeadProgram2, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 3,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$2,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$1,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS: UNIFORMS$1,
        ATTRIBUTES: [{
          name: "a_position",
          size: 2,
          type: FLOAT$2
        }, {
          name: "a_normal",
          size: 2,
          type: FLOAT$2
        }, {
          name: "a_radius",
          size: 1,
          type: FLOAT$2
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE$2,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE$2,
          normalized: true
        }],
        CONSTANT_ATTRIBUTES: [{
          name: "a_barycentric",
          size: 3,
          type: FLOAT$2
        }],
        CONSTANT_DATA: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
      var thickness = data.size || 1;
      var radius = targetData.size || 1;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = floatColor(data.color);
      var dx = x2 - x1;
      var dy = y2 - y1;
      var len = dx * dx + dy * dy;
      var n1 = 0;
      var n2 = 0;
      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len * thickness;
        n2 = dx * len * thickness;
      }
      var array = this.array;
      array[startIndex++] = x2;
      array[startIndex++] = y2;
      array[startIndex++] = -n1;
      array[startIndex++] = -n2;
      array[startIndex++] = radius;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var { gl, uniformLocations } = _ref;
      var { u_matrix, u_sizeRatio, u_correctionRatio, u_minEdgeThickness } = uniformLocations;
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
    }
  }]);
  return EdgeArrowHeadProgram2;
}(EdgeProgram);
var SHADER_SOURCE$2 = "\nprecision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float feather = 0.001;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  // We only handle antialiasing for normal mode:\n  #ifdef PICKING_MODE\n  gl_FragColor = v_color;\n  #else\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE = SHADER_SOURCE$2;
var SHADER_SOURCE$1 = "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_zoomRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // We require edges to be at least \"minThickness\" pixels thick *on screen*\n  // (so we need to compensate the size ratio):\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n\n  // Then, we need to retrieve the normalized thickness of the edge in the WebGL\n  // referential (in a ([0, 1], [0, 1]) space), using our \"magic\" correction\n  // ratio:\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);\n\n  // For the fragment shader though, we need a thickness that takes the \"magic\"\n  // correction ratio into account (as in webGLThickness), but so that the\n  // antialiasing effect does not depend on the zoom level. So here's yet\n  // another thickness version:\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$1 = SHADER_SOURCE$1;
var _WebGLRenderingContex$1 = WebGLRenderingContext;
var UNSIGNED_BYTE$1 = _WebGLRenderingContex$1.UNSIGNED_BYTE;
var FLOAT$1 = _WebGLRenderingContex$1.FLOAT;
var UNIFORMS = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_minEdgeThickness"];
var EdgeRectangleProgram = function(_EdgeProgram) {
  _inherits(EdgeRectangleProgram2, _EdgeProgram);
  function EdgeRectangleProgram2() {
    _classCallCheck(this, EdgeRectangleProgram2);
    return _callSuper(this, EdgeRectangleProgram2, arguments);
  }
  _createClass(EdgeRectangleProgram2, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 6,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$1,
        FRAGMENT_SHADER_SOURCE,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS,
        ATTRIBUTES: [{
          name: "a_positionStart",
          size: 2,
          type: FLOAT$1
        }, {
          name: "a_positionEnd",
          size: 2,
          type: FLOAT$1
        }, {
          name: "a_normal",
          size: 2,
          type: FLOAT$1
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE$1,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE$1,
          normalized: true
        }],
        CONSTANT_ATTRIBUTES: [
          {
            name: "a_positionCoef",
            size: 1,
            type: FLOAT$1
          },
          {
            name: "a_normalCoef",
            size: 1,
            type: FLOAT$1
          }
        ],
        CONSTANT_DATA: [[0, 1], [0, -1], [1, 1], [1, 1], [0, -1], [1, -1]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
      var thickness = data.size || 1;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = floatColor(data.color);
      var dx = x2 - x1;
      var dy = y2 - y1;
      var len = dx * dx + dy * dy;
      var n1 = 0;
      var n2 = 0;
      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len * thickness;
        n2 = dx * len * thickness;
      }
      var array = this.array;
      array[startIndex++] = x1;
      array[startIndex++] = y1;
      array[startIndex++] = x2;
      array[startIndex++] = y2;
      array[startIndex++] = n1;
      array[startIndex++] = n2;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var { gl, uniformLocations } = _ref;
      var { u_matrix, u_zoomRatio, u_correctionRatio, u_sizeRatio, u_minEdgeThickness } = uniformLocations;
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.uniform1f(u_zoomRatio, params.zoomRatio);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
    }
  }]);
  return EdgeRectangleProgram2;
}(EdgeProgram);
var SHADER_SOURCE = "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\nattribute float a_radius;\nattribute float a_radiusCoef;\n\nuniform mat3 u_matrix;\nuniform float u_zoomRatio;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float radius = a_radius * a_radiusCoef;\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(radius);\n  float webGLNodeRadius = direction * radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE = SHADER_SOURCE;
var _WebGLRenderingContex = WebGLRenderingContext;
var UNSIGNED_BYTE = _WebGLRenderingContex.UNSIGNED_BYTE;
var FLOAT = _WebGLRenderingContex.FLOAT;
var EdgeClampedProgram = function(_EdgeRectangleProgram) {
  _inherits(EdgeClampedProgram2, _EdgeRectangleProgram);
  function EdgeClampedProgram2() {
    _classCallCheck(this, EdgeClampedProgram2);
    return _callSuper(this, EdgeClampedProgram2, arguments);
  }
  _createClass(EdgeClampedProgram2, [{
    key: "getDefinition",
    value: function getDefinition() {
      return _objectSpread2(_objectSpread2({}, _get(_getPrototypeOf(EdgeClampedProgram2.prototype), "getDefinition", this).call(this)), {}, {
        VERTEX_SHADER_SOURCE,
        ATTRIBUTES: [{
          name: "a_positionStart",
          size: 2,
          type: FLOAT
        }, {
          name: "a_positionEnd",
          size: 2,
          type: FLOAT
        }, {
          name: "a_normal",
          size: 2,
          type: FLOAT
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }, {
          name: "a_radius",
          size: 1,
          type: FLOAT
        }],
        CONSTANT_ATTRIBUTES: [
          {
            name: "a_positionCoef",
            size: 1,
            type: FLOAT
          },
          {
            name: "a_normalCoef",
            size: 1,
            type: FLOAT
          },
          {
            name: "a_radiusCoef",
            size: 1,
            type: FLOAT
          }
        ],
        CONSTANT_DATA: [[0, 1, 0], [0, -1, 0], [1, 1, 1], [1, 1, 1], [0, -1, 0], [1, -1, -1]]
      });
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
      var thickness = data.size || 1;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = floatColor(data.color);
      var dx = x2 - x1;
      var dy = y2 - y1;
      var radius = targetData.size || 1;
      var len = dx * dx + dy * dy;
      var n1 = 0;
      var n2 = 0;
      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len * thickness;
        n2 = dx * len * thickness;
      }
      var array = this.array;
      array[startIndex++] = x1;
      array[startIndex++] = y1;
      array[startIndex++] = x2;
      array[startIndex++] = y2;
      array[startIndex++] = n1;
      array[startIndex++] = n2;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;
      array[startIndex++] = radius;
    }
  }]);
  return EdgeClampedProgram2;
}(EdgeRectangleProgram);
var EdgeArrowProgram = createEdgeCompoundProgram([EdgeClampedProgram, EdgeArrowHeadProgram]);
var EdgeArrowProgram$1 = EdgeArrowProgram;

// node:events
var x = function(t) {
  console && console.warn && console.warn(t);
};
var o = function() {
  o.init.call(this);
};
var v = function(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
};
var m = function(t) {
  return t._maxListeners === undefined ? o.defaultMaxListeners : t._maxListeners;
};
var y = function(t, e, n, r) {
  var i, f, s;
  if (v(n), f = t._events, f === undefined ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== undefined && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), s = f[e]), s === undefined)
    s = f[e] = n, ++t._eventsCount;
  else if (typeof s == "function" ? s = f[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), i = m(t), i > 0 && s.length > i && !s.warned) {
    s.warned = true;
    var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = s.length, x(u);
  }
  return t;
};
var C = function() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
};
var g = function(t, e, n) {
  var r = { fired: false, wrapFn: undefined, target: t, type: e, listener: n }, i = C.bind(r);
  return i.listener = n, r.wrapFn = i, i;
};
var _ = function(t, e, n) {
  var r = t._events;
  if (r === undefined)
    return [];
  var i = r[e];
  return i === undefined ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? R(i) : b(i, i.length);
};
var w = function(t) {
  var e = this._events;
  if (e !== undefined) {
    var n = e[t];
    if (typeof n == "function")
      return 1;
    if (n !== undefined)
      return n.length;
  }
  return 0;
};
var b = function(t, e) {
  for (var n = new Array(e), r = 0;r < e; ++r)
    n[r] = t[r];
  return n;
};
var j = function(t, e) {
  for (;e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
};
var R = function(t) {
  for (var e = new Array(t.length), n = 0;n < e.length; ++n)
    e[n] = t[n].listener || t[n];
  return e;
};
var a = typeof Reflect == "object" ? Reflect : null;
var d = a && typeof a.apply == "function" ? a.apply : function(e, n, r) {
  return Function.prototype.apply.call(e, n, r);
};
var l;
a && typeof a.ownKeys == "function" ? l = a.ownKeys : Object.getOwnPropertySymbols ? l = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : l = function(e) {
  return Object.getOwnPropertyNames(e);
};
var L = Number.isNaN || function(e) {
  return e !== e;
};
o.EventEmitter = o;
o.prototype._events = undefined;
o.prototype._eventsCount = 0;
o.prototype._maxListeners = undefined;
var h = 10;
Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
  return h;
}, set: function(t) {
  if (typeof t != "number" || t < 0 || L(t))
    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
  h = t;
} });
o.init = function() {
  (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
};
o.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || L(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
o.prototype.getMaxListeners = function() {
  return m(this);
};
o.prototype.emit = function(e) {
  for (var n = [], r = 1;r < arguments.length; r++)
    n.push(arguments[r]);
  var i = e === "error", f = this._events;
  if (f !== undefined)
    i = i && f.error === undefined;
  else if (!i)
    return false;
  if (i) {
    var s;
    if (n.length > 0 && (s = n[0]), s instanceof Error)
      throw s;
    var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
    throw u.context = s, u;
  }
  var c = f[e];
  if (c === undefined)
    return false;
  if (typeof c == "function")
    d(c, this, n);
  else
    for (var p = c.length, O = b(c, p), r = 0;r < p; ++r)
      d(O[r], this, n);
  return true;
};
o.prototype.addListener = function(e, n) {
  return y(this, e, n, false);
};
o.prototype.on = o.prototype.addListener;
o.prototype.prependListener = function(e, n) {
  return y(this, e, n, true);
};
o.prototype.once = function(e, n) {
  return v(n), this.on(e, g(this, e, n)), this;
};
o.prototype.prependOnceListener = function(e, n) {
  return v(n), this.prependListener(e, g(this, e, n)), this;
};
o.prototype.removeListener = function(e, n) {
  var r, i, f, s, u;
  if (v(n), i = this._events, i === undefined)
    return this;
  if (r = i[e], r === undefined)
    return this;
  if (r === n || r.listener === n)
    --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || n));
  else if (typeof r != "function") {
    for (f = -1, s = r.length - 1;s >= 0; s--)
      if (r[s] === n || r[s].listener === n) {
        u = r[s].listener, f = s;
        break;
      }
    if (f < 0)
      return this;
    f === 0 ? r.shift() : j(r, f), r.length === 1 && (i[e] = r[0]), i.removeListener !== undefined && this.emit("removeListener", e, u || n);
  }
  return this;
};
o.prototype.off = o.prototype.removeListener;
o.prototype.removeAllListeners = function(e) {
  var n, r, i;
  if (r = this._events, r === undefined)
    return this;
  if (r.removeListener === undefined)
    return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[e] !== undefined && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[e]), this;
  if (arguments.length === 0) {
    var f = Object.keys(r), s;
    for (i = 0;i < f.length; ++i)
      s = f[i], s !== "removeListener" && this.removeAllListeners(s);
    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
  }
  if (n = r[e], typeof n == "function")
    this.removeListener(e, n);
  else if (n !== undefined)
    for (i = n.length - 1;i >= 0; i--)
      this.removeListener(e, n[i]);
  return this;
};
o.prototype.listeners = function(e) {
  return _(this, e, true);
};
o.prototype.rawListeners = function(e) {
  return _(this, e, false);
};
o.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : w.call(t, e);
};
o.prototype.listenerCount = w;
o.prototype.eventNames = function() {
  return this._eventsCount > 0 ? l(this._events) : [];
};
var P = o.prototype;

// node_modules/sigma/types/dist/sigma-types.esm.js
var TypedEventEmitter = function(_ref) {
  _inherits(TypedEventEmitter2, _ref);
  function TypedEventEmitter2() {
    var _this;
    _classCallCheck(this, TypedEventEmitter2);
    _this = _callSuper(this, TypedEventEmitter2);
    _this.rawEmitter = _assertThisInitialized(_this);
    return _this;
  }
  return _createClass(TypedEventEmitter2);
}(o);

// node_modules/sigma/dist/normalization-8e7b2e97.esm.js
var is_graph = __toESM(require_is_graph(), 1);
var identity = function() {
  return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
};
var scale = function(m2, x2, y2) {
  m2[0] = x2;
  m2[4] = typeof y2 === "number" ? y2 : x2;
  return m2;
};
var rotate = function(m2, r) {
  var s = Math.sin(r), c = Math.cos(r);
  m2[0] = c;
  m2[1] = s;
  m2[3] = -s;
  m2[4] = c;
  return m2;
};
var translate = function(m2, x2, y2) {
  m2[6] = x2;
  m2[7] = y2;
  return m2;
};
var multiply = function(a2, b2) {
  var a00 = a2[0], a01 = a2[1], a02 = a2[2];
  var a10 = a2[3], a11 = a2[4], a12 = a2[5];
  var a20 = a2[6], a21 = a2[7], a22 = a2[8];
  var b00 = b2[0], b01 = b2[1], b02 = b2[2];
  var b10 = b2[3], b11 = b2[4], b12 = b2[5];
  var b20 = b2[6], b21 = b2[7], b22 = b2[8];
  a2[0] = b00 * a00 + b01 * a10 + b02 * a20;
  a2[1] = b00 * a01 + b01 * a11 + b02 * a21;
  a2[2] = b00 * a02 + b01 * a12 + b02 * a22;
  a2[3] = b10 * a00 + b11 * a10 + b12 * a20;
  a2[4] = b10 * a01 + b11 * a11 + b12 * a21;
  a2[5] = b10 * a02 + b11 * a12 + b12 * a22;
  a2[6] = b20 * a00 + b21 * a10 + b22 * a20;
  a2[7] = b20 * a01 + b21 * a11 + b22 * a21;
  a2[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return a2;
};
var multiplyVec2 = function(a2, b2) {
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var a00 = a2[0];
  var a01 = a2[1];
  var a10 = a2[3];
  var a11 = a2[4];
  var a20 = a2[6];
  var a21 = a2[7];
  var b0 = b2.x;
  var b1 = b2.y;
  return {
    x: b0 * a00 + b1 * a10 + a20 * z,
    y: b0 * a01 + b1 * a11 + a21 * z
  };
};
var getCorrectionRatio = function(viewportDimensions, graphDimensions) {
  var viewportRatio = viewportDimensions.height / viewportDimensions.width;
  var graphRatio = graphDimensions.height / graphDimensions.width;
  if (viewportRatio < 1 && graphRatio > 1 || viewportRatio > 1 && graphRatio < 1) {
    return 1;
  }
  return Math.min(Math.max(graphRatio, 1 / graphRatio), Math.max(1 / viewportRatio, viewportRatio));
};
var matrixFromCamera = function(state, viewportDimensions, graphDimensions, padding, inverse) {
  var { angle, ratio, x: x2, y: y2 } = state;
  var { width, height } = viewportDimensions;
  var matrix = identity();
  var smallestDimension = Math.min(width, height) - 2 * padding;
  var correctionRatio = getCorrectionRatio(viewportDimensions, graphDimensions);
  if (!inverse) {
    multiply(matrix, scale(identity(), 2 * (smallestDimension / width) * correctionRatio, 2 * (smallestDimension / height) * correctionRatio));
    multiply(matrix, rotate(identity(), -angle));
    multiply(matrix, scale(identity(), 1 / ratio));
    multiply(matrix, translate(identity(), -x2, -y2));
  } else {
    multiply(matrix, translate(identity(), x2, y2));
    multiply(matrix, scale(identity(), ratio));
    multiply(matrix, rotate(identity(), angle));
    multiply(matrix, scale(identity(), width / smallestDimension / 2 / correctionRatio, height / smallestDimension / 2 / correctionRatio));
  }
  return matrix;
};
var getMatrixImpact = function(matrix, cameraState, viewportDimensions) {
  var _multiplyVec = multiplyVec2(matrix, {
    x: Math.cos(cameraState.angle),
    y: Math.sin(cameraState.angle)
  }, 0), x2 = _multiplyVec.x, y2 = _multiplyVec.y;
  return 1 / Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)) / viewportDimensions.width;
};
var graphExtent = function(graph) {
  if (!graph.order)
    return {
      x: [0, 1],
      y: [0, 1]
    };
  var xMin = Infinity;
  var xMax = (-Infinity);
  var yMin = Infinity;
  var yMax = (-Infinity);
  graph.forEachNode(function(_2, attr) {
    var { x: x2, y: y2 } = attr;
    if (x2 < xMin)
      xMin = x2;
    if (x2 > xMax)
      xMax = x2;
    if (y2 < yMin)
      yMin = y2;
    if (y2 > yMax)
      yMax = y2;
  });
  return {
    x: [xMin, xMax],
    y: [yMin, yMax]
  };
};
var validateGraph = function(graph) {
  if (!is_graph.default(graph))
    throw new Error("Sigma: invalid graph instance.");
  graph.forEachNode(function(key, attributes) {
    if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) {
      throw new Error("Sigma: Coordinates of node ".concat(key, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
    }
  });
};
var createElement = function(tag, style, attributes) {
  var element = document.createElement(tag);
  if (style) {
    for (var k in style) {
      element.style[k] = style[k];
    }
  }
  if (attributes) {
    for (var _k in attributes) {
      element.setAttribute(_k, attributes[_k]);
    }
  }
  return element;
};
var getPixelRatio = function() {
  if (typeof window.devicePixelRatio !== "undefined")
    return window.devicePixelRatio;
  return 1;
};
var zIndexOrdering = function(_extent, getter, elements) {
  return elements.sort(function(a2, b2) {
    var zA = getter(a2) || 0, zB = getter(b2) || 0;
    if (zA < zB)
      return -1;
    if (zA > zB)
      return 1;
    return 0;
  });
};
var createNormalizationFunction = function(extent) {
  var _extent$x = _slicedToArray(extent.x, 2), minX = _extent$x[0], maxX = _extent$x[1], _extent$y = _slicedToArray(extent.y, 2), minY = _extent$y[0], maxY = _extent$y[1];
  var ratio = Math.max(maxX - minX, maxY - minY), dX = (maxX + minX) / 2, dY = (maxY + minY) / 2;
  if (ratio === 0 || Math.abs(ratio) === Infinity || isNaN(ratio))
    ratio = 1;
  if (isNaN(dX))
    dX = 0;
  if (isNaN(dY))
    dY = 0;
  var fn = function fn(data) {
    return {
      x: 0.5 + (data.x - dX) / ratio,
      y: 0.5 + (data.y - dY) / ratio
    };
  };
  fn.applyTo = function(data) {
    data.x = 0.5 + (data.x - dX) / ratio;
    data.y = 0.5 + (data.y - dY) / ratio;
  };
  fn.inverse = function(data) {
    return {
      x: dX + ratio * (data.x - 0.5),
      y: dY + ratio * (data.y - 0.5)
    };
  };
  fn.ratio = ratio;
  return fn;
};
var linear = function linear2(k) {
  return k;
};
var quadraticIn = function quadraticIn2(k) {
  return k * k;
};
var quadraticOut = function quadraticOut2(k) {
  return k * (2 - k);
};
var quadraticInOut = function quadraticInOut2(k) {
  if ((k *= 2) < 1)
    return 0.5 * k * k;
  return -0.5 * (--k * (k - 2) - 1);
};
var cubicIn = function cubicIn2(k) {
  return k * k * k;
};
var cubicOut = function cubicOut2(k) {
  return --k * k * k + 1;
};
var cubicInOut = function cubicInOut2(k) {
  if ((k *= 2) < 1)
    return 0.5 * k * k * k;
  return 0.5 * ((k -= 2) * k * k + 2);
};
var easings = {
  linear,
  quadraticIn,
  quadraticOut,
  quadraticInOut,
  cubicIn,
  cubicOut,
  cubicInOut
};
var ANIMATE_DEFAULTS = {
  easing: "quadraticInOut",
  duration: 150
};

// node_modules/sigma/dist/data-31990a76.esm.js
var extend = function(array, values) {
  var l2 = values.size;
  if (l2 === 0)
    return;
  var l1 = array.length;
  array.length += l2;
  var i = 0;
  values.forEach(function(value) {
    array[l1 + i] = value;
    i++;
  });
};
var assign = function(target) {
  target = target || {};
  for (var i = 0, l2 = arguments.length <= 1 ? 0 : arguments.length - 1;i < l2; i++) {
    var o2 = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
    if (!o2)
      continue;
    Object.assign(target, o2);
  }
  return target;
};

// node_modules/sigma/settings/dist/sigma-settings.esm.js
var validateSettings = function(settings) {
  if (typeof settings.labelDensity !== "number" || settings.labelDensity < 0) {
    throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
  }
  var { minCameraRatio, maxCameraRatio } = settings;
  if (typeof minCameraRatio === "number" && typeof maxCameraRatio === "number" && maxCameraRatio < minCameraRatio) {
    throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
  }
};
var resolveSettings = function(settings) {
  var resolvedSettings = assign({}, DEFAULT_SETTINGS, settings);
  resolvedSettings.nodeProgramClasses = assign({}, DEFAULT_NODE_PROGRAM_CLASSES, resolvedSettings.nodeProgramClasses);
  resolvedSettings.edgeProgramClasses = assign({}, DEFAULT_EDGE_PROGRAM_CLASSES, resolvedSettings.edgeProgramClasses);
  return resolvedSettings;
};
var DEFAULT_SETTINGS = {
  hideEdgesOnMove: false,
  hideLabelsOnMove: false,
  renderLabels: true,
  renderEdgeLabels: false,
  enableEdgeEvents: false,
  defaultNodeColor: "#999",
  defaultNodeType: "circle",
  defaultEdgeColor: "#ccc",
  defaultEdgeType: "line",
  labelFont: "Arial",
  labelSize: 14,
  labelWeight: "normal",
  labelColor: {
    color: "#000"
  },
  edgeLabelFont: "Arial",
  edgeLabelSize: 14,
  edgeLabelWeight: "normal",
  edgeLabelColor: {
    attribute: "color"
  },
  stagePadding: 30,
  zoomToSizeRatioFunction: Math.sqrt,
  itemSizesReference: "screen",
  defaultDrawEdgeLabel: drawStraightEdgeLabel,
  defaultDrawNodeLabel: drawDiscNodeLabel,
  defaultDrawNodeHover: drawDiscNodeHover,
  minEdgeThickness: 1.7,
  labelDensity: 1,
  labelGridCellSize: 100,
  labelRenderedSizeThreshold: 6,
  nodeReducer: null,
  edgeReducer: null,
  zIndex: false,
  minCameraRatio: null,
  maxCameraRatio: null,
  allowInvalidContainer: false,
  nodeProgramClasses: {},
  nodeHoverProgramClasses: {},
  edgeProgramClasses: {}
};
var DEFAULT_NODE_PROGRAM_CLASSES = {
  circle: NodeCircleProgram
};
var DEFAULT_EDGE_PROGRAM_CLASSES = {
  arrow: EdgeArrowProgram$1,
  line: EdgeRectangleProgram
};

// node_modules/sigma/dist/sigma.esm.js
var is_graph2 = __toESM(require_is_graph(), 1);
var getPosition = function(e, dom) {
  var bbox = dom.getBoundingClientRect();
  return {
    x: e.clientX - bbox.left,
    y: e.clientY - bbox.top
  };
};
var getMouseCoords = function(e, dom) {
  var res = _objectSpread2(_objectSpread2({}, getPosition(e, dom)), {}, {
    sigmaDefaultPrevented: false,
    preventSigmaDefault: function preventSigmaDefault() {
      res.sigmaDefaultPrevented = true;
    },
    original: e
  });
  return res;
};
var getWheelCoords = function(e, dom) {
  return _objectSpread2(_objectSpread2({}, getMouseCoords(e, dom)), {}, {
    delta: getWheelDelta(e)
  });
};
var getTouchesArray = function(touches) {
  var arr = [];
  for (var i = 0, l2 = Math.min(touches.length, MAX_TOUCHES);i < l2; i++)
    arr.push(touches[i]);
  return arr;
};
var getTouchCoords = function(e, dom) {
  return {
    touches: getTouchesArray(e.touches).map(function(touch) {
      return getPosition(touch, dom);
    }),
    original: e
  };
};
var getWheelDelta = function(e) {
  if (typeof e.deltaY !== "undefined")
    return e.deltaY * -3 / 360;
  if (typeof e.detail !== "undefined")
    return e.detail / -9;
  throw new Error("Captor: could not extract delta from event.");
};
var _arrayWithoutHoles = function(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
};
var _iterableToArray = function(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
};
var _nonIterableSpread = function() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
};
var _toConsumableArray = function(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
};
var edgeLabelsToDisplayFromNodes = function(params) {
  var { graph, hoveredNode, highlightedNodes, displayedNodeLabels } = params;
  var worthyEdges = [];
  graph.forEachEdge(function(edge, _2, source, target) {
    if (source === hoveredNode || target === hoveredNode || highlightedNodes.has(source) || highlightedNodes.has(target) || displayedNodeLabels.has(source) && displayedNodeLabels.has(target)) {
      worthyEdges.push(edge);
    }
  });
  return worthyEdges;
};
var applyNodeDefaults = function(settings, key, data) {
  if (!hasOwnProperty.call(data, "x") || !hasOwnProperty.call(data, "y"))
    throw new Error("Sigma: could not find a valid position (x, y) for node \"".concat(key, "\". All your nodes must have a number \"x\" and \"y\". Maybe your forgot to apply a layout or your \"nodeReducer\" is not returning the correct data?"));
  if (!data.color)
    data.color = settings.defaultNodeColor;
  if (!data.label && data.label !== "")
    data.label = null;
  if (data.label !== undefined && data.label !== null)
    data.label = "" + data.label;
  else
    data.label = null;
  if (!data.size)
    data.size = 2;
  if (!hasOwnProperty.call(data, "hidden"))
    data.hidden = false;
  if (!hasOwnProperty.call(data, "highlighted"))
    data.highlighted = false;
  if (!hasOwnProperty.call(data, "forceLabel"))
    data.forceLabel = false;
  if (!data.type || data.type === "")
    data.type = settings.defaultNodeType;
  if (!data.zIndex)
    data.zIndex = 0;
  return data;
};
var applyEdgeDefaults = function(settings, _key, data) {
  if (!data.color)
    data.color = settings.defaultEdgeColor;
  if (!data.label)
    data.label = "";
  if (!data.size)
    data.size = 0.5;
  if (!hasOwnProperty.call(data, "hidden"))
    data.hidden = false;
  if (!hasOwnProperty.call(data, "forceLabel"))
    data.forceLabel = false;
  if (!data.type || data.type === "")
    data.type = settings.defaultEdgeType;
  if (!data.zIndex)
    data.zIndex = 0;
  return data;
};
var DEFAULT_ZOOMING_RATIO = 1.5;
var Camera = function(_TypedEventEmitter) {
  _inherits(Camera2, _TypedEventEmitter);
  function Camera2() {
    var _this;
    _classCallCheck(this, Camera2);
    _this = _callSuper(this, Camera2);
    _defineProperty(_assertThisInitialized(_this), "x", 0.5);
    _defineProperty(_assertThisInitialized(_this), "y", 0.5);
    _defineProperty(_assertThisInitialized(_this), "angle", 0);
    _defineProperty(_assertThisInitialized(_this), "ratio", 1);
    _defineProperty(_assertThisInitialized(_this), "minRatio", null);
    _defineProperty(_assertThisInitialized(_this), "maxRatio", null);
    _defineProperty(_assertThisInitialized(_this), "nextFrame", null);
    _defineProperty(_assertThisInitialized(_this), "previousState", null);
    _defineProperty(_assertThisInitialized(_this), "enabled", true);
    _this.previousState = _this.getState();
    return _this;
  }
  _createClass(Camera2, [{
    key: "enable",
    value: function enable() {
      this.enabled = true;
      return this;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
      return this;
    }
  }, {
    key: "getState",
    value: function getState() {
      return {
        x: this.x,
        y: this.y,
        angle: this.angle,
        ratio: this.ratio
      };
    }
  }, {
    key: "hasState",
    value: function hasState(state) {
      return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
    }
  }, {
    key: "getPreviousState",
    value: function getPreviousState() {
      var state = this.previousState;
      if (!state)
        return null;
      return {
        x: state.x,
        y: state.y,
        angle: state.angle,
        ratio: state.ratio
      };
    }
  }, {
    key: "getBoundedRatio",
    value: function getBoundedRatio(ratio) {
      var r = ratio;
      if (typeof this.minRatio === "number")
        r = Math.max(r, this.minRatio);
      if (typeof this.maxRatio === "number")
        r = Math.min(r, this.maxRatio);
      return r;
    }
  }, {
    key: "validateState",
    value: function validateState(state) {
      var validatedState = {};
      if (typeof state.x === "number")
        validatedState.x = state.x;
      if (typeof state.y === "number")
        validatedState.y = state.y;
      if (typeof state.angle === "number")
        validatedState.angle = state.angle;
      if (typeof state.ratio === "number")
        validatedState.ratio = this.getBoundedRatio(state.ratio);
      return validatedState;
    }
  }, {
    key: "isAnimated",
    value: function isAnimated() {
      return !!this.nextFrame;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      if (!this.enabled)
        return this;
      this.previousState = this.getState();
      var validState = this.validateState(state);
      if (typeof validState.x === "number")
        this.x = validState.x;
      if (typeof validState.y === "number")
        this.y = validState.y;
      if (typeof validState.angle === "number")
        this.angle = validState.angle;
      if (typeof validState.ratio === "number")
        this.ratio = validState.ratio;
      if (!this.hasState(this.previousState))
        this.emit("updated", this.getState());
      return this;
    }
  }, {
    key: "updateState",
    value: function updateState(updater) {
      this.setState(updater(this.getState()));
      return this;
    }
  }, {
    key: "animate",
    value: function animate(state, opts, callback) {
      var _this2 = this;
      if (!this.enabled)
        return;
      var options = Object.assign({}, ANIMATE_DEFAULTS, opts);
      var validState = this.validateState(state);
      var easing = typeof options.easing === "function" ? options.easing : easings[options.easing];
      var start = Date.now(), initialState = this.getState();
      var fn = function fn() {
        var t = (Date.now() - start) / options.duration;
        if (t >= 1) {
          _this2.nextFrame = null;
          _this2.setState(validState);
          if (_this2.animationCallback) {
            _this2.animationCallback.call(null);
            _this2.animationCallback = undefined;
          }
          return;
        }
        var coefficient = easing(t);
        var newState = {};
        if (typeof validState.x === "number")
          newState.x = initialState.x + (validState.x - initialState.x) * coefficient;
        if (typeof validState.y === "number")
          newState.y = initialState.y + (validState.y - initialState.y) * coefficient;
        if (typeof validState.angle === "number")
          newState.angle = initialState.angle + (validState.angle - initialState.angle) * coefficient;
        if (typeof validState.ratio === "number")
          newState.ratio = initialState.ratio + (validState.ratio - initialState.ratio) * coefficient;
        _this2.setState(newState);
        _this2.nextFrame = requestAnimationFrame(fn);
      };
      if (this.nextFrame) {
        cancelAnimationFrame(this.nextFrame);
        if (this.animationCallback)
          this.animationCallback.call(null);
        this.nextFrame = requestAnimationFrame(fn);
      } else {
        fn();
      }
      this.animationCallback = callback;
    }
  }, {
    key: "animatedZoom",
    value: function animatedZoom(factorOrOptions) {
      if (!factorOrOptions) {
        this.animate({
          ratio: this.ratio / DEFAULT_ZOOMING_RATIO
        });
      } else {
        if (typeof factorOrOptions === "number")
          return this.animate({
            ratio: this.ratio / factorOrOptions
          });
        else
          this.animate({
            ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
          }, factorOrOptions);
      }
    }
  }, {
    key: "animatedUnzoom",
    value: function animatedUnzoom(factorOrOptions) {
      if (!factorOrOptions) {
        this.animate({
          ratio: this.ratio * DEFAULT_ZOOMING_RATIO
        });
      } else {
        if (typeof factorOrOptions === "number")
          return this.animate({
            ratio: this.ratio * factorOrOptions
          });
        else
          this.animate({
            ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
          }, factorOrOptions);
      }
    }
  }, {
    key: "animatedReset",
    value: function animatedReset(options) {
      this.animate({
        x: 0.5,
        y: 0.5,
        ratio: 1,
        angle: 0
      }, options);
    }
  }, {
    key: "copy",
    value: function copy() {
      return Camera2.from(this.getState());
    }
  }], [{
    key: "from",
    value: function from(state) {
      var camera = new Camera2;
      return camera.setState(state);
    }
  }]);
  return Camera2;
}(TypedEventEmitter);
var MAX_TOUCHES = 2;
var Captor = function(_TypedEventEmitter) {
  _inherits(Captor2, _TypedEventEmitter);
  function Captor2(container, renderer) {
    var _this;
    _classCallCheck(this, Captor2);
    _this = _callSuper(this, Captor2);
    _this.container = container;
    _this.renderer = renderer;
    return _this;
  }
  return _createClass(Captor2);
}(TypedEventEmitter);
var DRAG_TIMEOUT$1 = 100;
var DRAGGED_EVENTS_TOLERANCE = 3;
var MOUSE_INERTIA_DURATION = 200;
var MOUSE_INERTIA_RATIO = 3;
var MOUSE_ZOOM_DURATION = 250;
var ZOOMING_RATIO = 1.7;
var DOUBLE_CLICK_TIMEOUT = 300;
var DOUBLE_CLICK_ZOOMING_RATIO = 2.2;
var DOUBLE_CLICK_ZOOMING_DURATION = 200;
var MouseCaptor = function(_Captor) {
  _inherits(MouseCaptor2, _Captor);
  function MouseCaptor2(container, renderer) {
    var _this;
    _classCallCheck(this, MouseCaptor2);
    _this = _callSuper(this, MouseCaptor2, [container, renderer]);
    _defineProperty(_assertThisInitialized(_this), "enabled", true);
    _defineProperty(_assertThisInitialized(_this), "draggedEvents", 0);
    _defineProperty(_assertThisInitialized(_this), "downStartTime", null);
    _defineProperty(_assertThisInitialized(_this), "lastMouseX", null);
    _defineProperty(_assertThisInitialized(_this), "lastMouseY", null);
    _defineProperty(_assertThisInitialized(_this), "isMouseDown", false);
    _defineProperty(_assertThisInitialized(_this), "isMoving", false);
    _defineProperty(_assertThisInitialized(_this), "movingTimeout", null);
    _defineProperty(_assertThisInitialized(_this), "startCameraState", null);
    _defineProperty(_assertThisInitialized(_this), "clicks", 0);
    _defineProperty(_assertThisInitialized(_this), "doubleClickTimeout", null);
    _defineProperty(_assertThisInitialized(_this), "currentWheelDirection", 0);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleRightClick = _this.handleRightClick.bind(_assertThisInitialized(_this));
    _this.handleDown = _this.handleDown.bind(_assertThisInitialized(_this));
    _this.handleUp = _this.handleUp.bind(_assertThisInitialized(_this));
    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_this));
    _this.handleWheel = _this.handleWheel.bind(_assertThisInitialized(_this));
    _this.handleLeave = _this.handleLeave.bind(_assertThisInitialized(_this));
    _this.handleEnter = _this.handleEnter.bind(_assertThisInitialized(_this));
    container.addEventListener("click", _this.handleClick, false);
    container.addEventListener("contextmenu", _this.handleRightClick, false);
    container.addEventListener("mousedown", _this.handleDown, false);
    container.addEventListener("wheel", _this.handleWheel, false);
    container.addEventListener("mouseleave", _this.handleLeave, false);
    container.addEventListener("mouseenter", _this.handleEnter, false);
    document.addEventListener("mousemove", _this.handleMove, false);
    document.addEventListener("mouseup", _this.handleUp, false);
    return _this;
  }
  _createClass(MouseCaptor2, [{
    key: "kill",
    value: function kill() {
      var container = this.container;
      container.removeEventListener("click", this.handleClick);
      container.removeEventListener("contextmenu", this.handleRightClick);
      container.removeEventListener("mousedown", this.handleDown);
      container.removeEventListener("wheel", this.handleWheel);
      container.removeEventListener("mouseleave", this.handleLeave);
      container.removeEventListener("mouseenter", this.handleEnter);
      document.removeEventListener("mousemove", this.handleMove);
      document.removeEventListener("mouseup", this.handleUp);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this2 = this;
      if (!this.enabled)
        return;
      this.clicks++;
      if (this.clicks === 2) {
        this.clicks = 0;
        if (typeof this.doubleClickTimeout === "number") {
          clearTimeout(this.doubleClickTimeout);
          this.doubleClickTimeout = null;
        }
        return this.handleDoubleClick(e);
      }
      setTimeout(function() {
        _this2.clicks = 0;
        _this2.doubleClickTimeout = null;
      }, DOUBLE_CLICK_TIMEOUT);
      if (this.draggedEvents < DRAGGED_EVENTS_TOLERANCE)
        this.emit("click", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleRightClick",
    value: function handleRightClick(e) {
      if (!this.enabled)
        return;
      this.emit("rightClick", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleDoubleClick",
    value: function handleDoubleClick(e) {
      if (!this.enabled)
        return;
      e.preventDefault();
      e.stopPropagation();
      var mouseCoords = getMouseCoords(e, this.container);
      this.emit("doubleClick", mouseCoords);
      if (mouseCoords.sigmaDefaultPrevented)
        return;
      var camera = this.renderer.getCamera();
      var newRatio = camera.getBoundedRatio(camera.getState().ratio / DOUBLE_CLICK_ZOOMING_RATIO);
      camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
        easing: "quadraticInOut",
        duration: DOUBLE_CLICK_ZOOMING_DURATION
      });
    }
  }, {
    key: "handleDown",
    value: function handleDown(e) {
      if (!this.enabled)
        return;
      if (e.button === 0) {
        this.startCameraState = this.renderer.getCamera().getState();
        var _getPosition = getPosition(e, this.container), x2 = _getPosition.x, y2 = _getPosition.y;
        this.lastMouseX = x2;
        this.lastMouseY = y2;
        this.draggedEvents = 0;
        this.downStartTime = Date.now();
        this.isMouseDown = true;
      }
      this.emit("mousedown", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleUp",
    value: function handleUp(e) {
      var _this3 = this;
      if (!this.enabled || !this.isMouseDown)
        return;
      var camera = this.renderer.getCamera();
      this.isMouseDown = false;
      if (typeof this.movingTimeout === "number") {
        clearTimeout(this.movingTimeout);
        this.movingTimeout = null;
      }
      var _getPosition2 = getPosition(e, this.container), x2 = _getPosition2.x, y2 = _getPosition2.y;
      var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || {
        x: 0,
        y: 0
      };
      if (this.isMoving) {
        camera.animate({
          x: cameraState.x + MOUSE_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
          y: cameraState.y + MOUSE_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
        }, {
          duration: MOUSE_INERTIA_DURATION,
          easing: "quadraticOut"
        });
      } else if (this.lastMouseX !== x2 || this.lastMouseY !== y2) {
        camera.setState({
          x: cameraState.x,
          y: cameraState.y
        });
      }
      this.isMoving = false;
      setTimeout(function() {
        var shouldRefresh = _this3.draggedEvents > 0;
        _this3.draggedEvents = 0;
        if (shouldRefresh)
          _this3.renderer.refresh();
      }, 0);
      this.emit("mouseup", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      var _this4 = this;
      if (!this.enabled)
        return;
      var mouseCoords = getMouseCoords(e, this.container);
      this.emit("mousemovebody", mouseCoords);
      if (e.target === this.container) {
        this.emit("mousemove", mouseCoords);
      }
      if (mouseCoords.sigmaDefaultPrevented)
        return;
      if (this.isMouseDown) {
        this.isMoving = true;
        this.draggedEvents++;
        if (typeof this.movingTimeout === "number") {
          clearTimeout(this.movingTimeout);
        }
        this.movingTimeout = window.setTimeout(function() {
          _this4.movingTimeout = null;
          _this4.isMoving = false;
        }, DRAG_TIMEOUT$1);
        var camera = this.renderer.getCamera();
        var _getPosition3 = getPosition(e, this.container), eX = _getPosition3.x, eY = _getPosition3.y;
        var lastMouse = this.renderer.viewportToFramedGraph({
          x: this.lastMouseX,
          y: this.lastMouseY
        });
        var mouse = this.renderer.viewportToFramedGraph({
          x: eX,
          y: eY
        });
        var offsetX = lastMouse.x - mouse.x, offsetY = lastMouse.y - mouse.y;
        var cameraState = camera.getState();
        var x2 = cameraState.x + offsetX, y2 = cameraState.y + offsetY;
        camera.setState({
          x: x2,
          y: y2
        });
        this.lastMouseX = eX;
        this.lastMouseY = eY;
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(e) {
      this.emit("mouseleave", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleEnter",
    value: function handleEnter(e) {
      this.emit("mouseenter", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      var _this5 = this;
      if (!this.enabled)
        return;
      e.preventDefault();
      e.stopPropagation();
      var delta = getWheelDelta(e);
      if (!delta)
        return;
      var wheelCoords = getWheelCoords(e, this.container);
      this.emit("wheel", wheelCoords);
      if (wheelCoords.sigmaDefaultPrevented)
        return;
      var ratioDiff = delta > 0 ? 1 / ZOOMING_RATIO : ZOOMING_RATIO;
      var camera = this.renderer.getCamera();
      var newRatio = camera.getBoundedRatio(camera.getState().ratio * ratioDiff);
      var wheelDirection = delta > 0 ? 1 : -1;
      var now = Date.now();
      if (this.currentWheelDirection === wheelDirection && this.lastWheelTriggerTime && now - this.lastWheelTriggerTime < MOUSE_ZOOM_DURATION / 5) {
        return;
      }
      camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
        easing: "quadraticOut",
        duration: MOUSE_ZOOM_DURATION
      }, function() {
        _this5.currentWheelDirection = 0;
      });
      this.currentWheelDirection = wheelDirection;
      this.lastWheelTriggerTime = now;
    }
  }]);
  return MouseCaptor2;
}(Captor);
var DRAG_TIMEOUT = 200;
var TOUCH_INERTIA_RATIO = 3;
var TOUCH_INERTIA_DURATION = 200;
var TouchCaptor = function(_Captor) {
  _inherits(TouchCaptor2, _Captor);
  function TouchCaptor2(container, renderer) {
    var _this;
    _classCallCheck(this, TouchCaptor2);
    _this = _callSuper(this, TouchCaptor2, [container, renderer]);
    _defineProperty(_assertThisInitialized(_this), "enabled", true);
    _defineProperty(_assertThisInitialized(_this), "isMoving", false);
    _defineProperty(_assertThisInitialized(_this), "hasMoved", false);
    _defineProperty(_assertThisInitialized(_this), "touchMode", 0);
    _defineProperty(_assertThisInitialized(_this), "startTouchesPositions", []);
    _this.handleStart = _this.handleStart.bind(_assertThisInitialized(_this));
    _this.handleLeave = _this.handleLeave.bind(_assertThisInitialized(_this));
    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_this));
    container.addEventListener("touchstart", _this.handleStart, false);
    container.addEventListener("touchend", _this.handleLeave, false);
    container.addEventListener("touchcancel", _this.handleLeave, false);
    container.addEventListener("touchmove", _this.handleMove, false);
    return _this;
  }
  _createClass(TouchCaptor2, [{
    key: "kill",
    value: function kill() {
      var container = this.container;
      container.removeEventListener("touchstart", this.handleStart);
      container.removeEventListener("touchend", this.handleLeave);
      container.removeEventListener("touchcancel", this.handleLeave);
      container.removeEventListener("touchmove", this.handleMove);
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      };
    }
  }, {
    key: "dispatchRelatedMouseEvent",
    value: function dispatchRelatedMouseEvent(type, e, touch, emitter) {
      var mousePosition = touch || e.touches[0];
      var mouseEvent = new MouseEvent(type, {
        clientX: mousePosition.clientX,
        clientY: mousePosition.clientY,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey
      });
      mouseEvent.isFakeSigmaMouseEvent = true;
      (emitter || this.container).dispatchEvent(mouseEvent);
    }
  }, {
    key: "handleStart",
    value: function handleStart(e) {
      var _this2 = this;
      if (!this.enabled)
        return;
      e.preventDefault();
      if (e.touches.length === 1)
        this.dispatchRelatedMouseEvent("mousedown", e);
      var touches = getTouchesArray(e.touches);
      this.touchMode = touches.length;
      this.startCameraState = this.renderer.getCamera().getState();
      this.startTouchesPositions = touches.map(function(touch) {
        return getPosition(touch, _this2.container);
      });
      this.lastTouches = touches;
      this.lastTouchesPositions = this.startTouchesPositions;
      if (this.touchMode === 2) {
        var _this$startTouchesPos = _slicedToArray(this.startTouchesPositions, 2), _this$startTouchesPos2 = _this$startTouchesPos[0], x0 = _this$startTouchesPos2.x, y0 = _this$startTouchesPos2.y, _this$startTouchesPos3 = _this$startTouchesPos[1], x1 = _this$startTouchesPos3.x, y1 = _this$startTouchesPos3.y;
        this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
        this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
      }
      this.emit("touchdown", getTouchCoords(e, this.container));
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(e) {
      if (!this.enabled)
        return;
      e.preventDefault();
      if (e.touches.length === 0 && this.lastTouches && this.lastTouches.length) {
        this.dispatchRelatedMouseEvent("mouseup", e, this.lastTouches[0], document);
        if (!this.hasMoved) {
          this.dispatchRelatedMouseEvent("click", e, this.lastTouches[0]);
        }
      }
      if (this.movingTimeout) {
        this.isMoving = false;
        clearTimeout(this.movingTimeout);
      }
      switch (this.touchMode) {
        case 2:
          if (e.touches.length === 1) {
            this.handleStart(e);
            e.preventDefault();
            break;
          }
        case 1:
          if (this.isMoving) {
            var camera = this.renderer.getCamera();
            var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || {
              x: 0,
              y: 0
            };
            camera.animate({
              x: cameraState.x + TOUCH_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
              y: cameraState.y + TOUCH_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
            }, {
              duration: TOUCH_INERTIA_DURATION,
              easing: "quadraticOut"
            });
          }
          this.hasMoved = false;
          this.isMoving = false;
          this.touchMode = 0;
          break;
      }
      this.emit("touchup", getTouchCoords(e, this.container));
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      var _this3 = this;
      if (!this.enabled)
        return;
      e.preventDefault();
      if (e.touches.length === 1)
        this.dispatchRelatedMouseEvent("mousemove", e);
      var touches = getTouchesArray(e.touches);
      var touchesPositions = touches.map(function(touch) {
        return getPosition(touch, _this3.container);
      });
      this.lastTouches = touches;
      this.lastTouchesPositions = touchesPositions;
      this.hasMoved || (this.hasMoved = touchesPositions.some(function(position, idx) {
        var startPosition = _this3.startTouchesPositions[idx];
        return position.x !== startPosition.x || position.y !== startPosition.y;
      }));
      if (!this.hasMoved) {
        return;
      }
      this.isMoving = true;
      if (this.movingTimeout)
        clearTimeout(this.movingTimeout);
      this.movingTimeout = window.setTimeout(function() {
        _this3.isMoving = false;
      }, DRAG_TIMEOUT);
      var camera = this.renderer.getCamera();
      var startCameraState = this.startCameraState;
      switch (this.touchMode) {
        case 1: {
          var _this$renderer$viewpo = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]), xStart = _this$renderer$viewpo.x, yStart = _this$renderer$viewpo.y;
          var _this$renderer$viewpo2 = this.renderer.viewportToFramedGraph(touchesPositions[0]), x2 = _this$renderer$viewpo2.x, y2 = _this$renderer$viewpo2.y;
          camera.setState({
            x: startCameraState.x + xStart - x2,
            y: startCameraState.y + yStart - y2
          });
          break;
        }
        case 2: {
          var newCameraState = {};
          var _touchesPositions$ = touchesPositions[0], x0 = _touchesPositions$.x, y0 = _touchesPositions$.y;
          var _touchesPositions$2 = touchesPositions[1], x1 = _touchesPositions$2.x, y1 = _touchesPositions$2.y;
          var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
          var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;
          var newRatio = camera.getBoundedRatio(startCameraState.ratio / ratioDiff);
          newCameraState.ratio = newRatio;
          newCameraState.angle = startCameraState.angle + angleDiff;
          var dimensions = this.getDimensions();
          var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], {
            cameraState: startCameraState
          });
          var smallestDimension = Math.min(dimensions.width, dimensions.height);
          var dx = smallestDimension / dimensions.width;
          var dy = smallestDimension / dimensions.height;
          var ratio = newRatio / smallestDimension;
          var _x = x0 - smallestDimension / 2 / dx;
          var _y = y0 - smallestDimension / 2 / dy;
          var _ref = [_x * Math.cos(-newCameraState.angle) - _y * Math.sin(-newCameraState.angle), _y * Math.cos(-newCameraState.angle) + _x * Math.sin(-newCameraState.angle)];
          _x = _ref[0];
          _y = _ref[1];
          newCameraState.x = touchGraphPosition.x - _x * ratio;
          newCameraState.y = touchGraphPosition.y + _y * ratio;
          camera.setState(newCameraState);
          break;
        }
      }
      this.emit("touchmove", getTouchCoords(e, this.container));
    }
  }]);
  return TouchCaptor2;
}(Captor);
var LabelCandidate = function() {
  function LabelCandidate2(key, size) {
    _classCallCheck(this, LabelCandidate2);
    this.key = key;
    this.size = size;
  }
  _createClass(LabelCandidate2, null, [{
    key: "compare",
    value: function compare(first, second) {
      if (first.size > second.size)
        return -1;
      if (first.size < second.size)
        return 1;
      if (first.key > second.key)
        return 1;
      return -1;
    }
  }]);
  return LabelCandidate2;
}();
var LabelGrid = function() {
  function LabelGrid2() {
    _classCallCheck(this, LabelGrid2);
    _defineProperty(this, "width", 0);
    _defineProperty(this, "height", 0);
    _defineProperty(this, "cellSize", 0);
    _defineProperty(this, "columns", 0);
    _defineProperty(this, "rows", 0);
    _defineProperty(this, "cells", {});
  }
  _createClass(LabelGrid2, [{
    key: "resizeAndClear",
    value: function resizeAndClear(dimensions, cellSize) {
      this.width = dimensions.width;
      this.height = dimensions.height;
      this.cellSize = cellSize;
      this.columns = Math.ceil(dimensions.width / cellSize);
      this.rows = Math.ceil(dimensions.height / cellSize);
      this.cells = {};
    }
  }, {
    key: "getIndex",
    value: function getIndex(pos) {
      var xIndex = Math.floor(pos.x / this.cellSize);
      var yIndex = Math.floor(pos.y / this.cellSize);
      return yIndex * this.columns + xIndex;
    }
  }, {
    key: "add",
    value: function add(key, size, pos) {
      var candidate = new LabelCandidate(key, size);
      var index = this.getIndex(pos);
      var cell = this.cells[index];
      if (!cell) {
        cell = [];
        this.cells[index] = cell;
      }
      cell.push(candidate);
    }
  }, {
    key: "organize",
    value: function organize() {
      for (var k in this.cells) {
        var cell = this.cells[k];
        cell.sort(LabelCandidate.compare);
      }
    }
  }, {
    key: "getLabelsToDisplay",
    value: function getLabelsToDisplay(ratio, density) {
      var cellArea = this.cellSize * this.cellSize;
      var scaledCellArea = cellArea / ratio / ratio;
      var scaledDensity = scaledCellArea * density / cellArea;
      var labelsToDisplayPerCell = Math.ceil(scaledDensity);
      var labels = [];
      for (var k in this.cells) {
        var cell = this.cells[k];
        for (var i = 0;i < Math.min(labelsToDisplayPerCell, cell.length); i++) {
          labels.push(cell[i].key);
        }
      }
      return labels;
    }
  }]);
  return LabelGrid2;
}();
var X_LABEL_MARGIN = 150;
var Y_LABEL_MARGIN = 50;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var Sigma$1 = function(_TypedEventEmitter) {
  _inherits(Sigma, _TypedEventEmitter);
  function Sigma(graph, container) {
    var _this;
    var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Sigma);
    _this = _callSuper(this, Sigma);
    _defineProperty(_assertThisInitialized(_this), "elements", {});
    _defineProperty(_assertThisInitialized(_this), "canvasContexts", {});
    _defineProperty(_assertThisInitialized(_this), "webGLContexts", {});
    _defineProperty(_assertThisInitialized(_this), "pickingLayers", new Set);
    _defineProperty(_assertThisInitialized(_this), "textures", {});
    _defineProperty(_assertThisInitialized(_this), "frameBuffers", {});
    _defineProperty(_assertThisInitialized(_this), "activeListeners", {});
    _defineProperty(_assertThisInitialized(_this), "labelGrid", new LabelGrid);
    _defineProperty(_assertThisInitialized(_this), "nodeDataCache", {});
    _defineProperty(_assertThisInitialized(_this), "edgeDataCache", {});
    _defineProperty(_assertThisInitialized(_this), "nodeProgramIndex", {});
    _defineProperty(_assertThisInitialized(_this), "edgeProgramIndex", {});
    _defineProperty(_assertThisInitialized(_this), "nodesWithForcedLabels", new Set);
    _defineProperty(_assertThisInitialized(_this), "edgesWithForcedLabels", new Set);
    _defineProperty(_assertThisInitialized(_this), "nodeExtent", {
      x: [0, 1],
      y: [0, 1]
    });
    _defineProperty(_assertThisInitialized(_this), "nodeZExtent", [Infinity, (-Infinity)]);
    _defineProperty(_assertThisInitialized(_this), "edgeZExtent", [Infinity, (-Infinity)]);
    _defineProperty(_assertThisInitialized(_this), "matrix", identity());
    _defineProperty(_assertThisInitialized(_this), "invMatrix", identity());
    _defineProperty(_assertThisInitialized(_this), "correctionRatio", 1);
    _defineProperty(_assertThisInitialized(_this), "customBBox", null);
    _defineProperty(_assertThisInitialized(_this), "normalizationFunction", createNormalizationFunction({
      x: [0, 1],
      y: [0, 1]
    }));
    _defineProperty(_assertThisInitialized(_this), "graphToViewportRatio", 1);
    _defineProperty(_assertThisInitialized(_this), "itemIDsIndex", {});
    _defineProperty(_assertThisInitialized(_this), "nodeIndices", {});
    _defineProperty(_assertThisInitialized(_this), "edgeIndices", {});
    _defineProperty(_assertThisInitialized(_this), "width", 0);
    _defineProperty(_assertThisInitialized(_this), "height", 0);
    _defineProperty(_assertThisInitialized(_this), "pixelRatio", getPixelRatio());
    _defineProperty(_assertThisInitialized(_this), "pickingDownSizingRatio", 2 * _this.pixelRatio);
    _defineProperty(_assertThisInitialized(_this), "displayedNodeLabels", new Set);
    _defineProperty(_assertThisInitialized(_this), "displayedEdgeLabels", new Set);
    _defineProperty(_assertThisInitialized(_this), "highlightedNodes", new Set);
    _defineProperty(_assertThisInitialized(_this), "hoveredNode", null);
    _defineProperty(_assertThisInitialized(_this), "hoveredEdge", null);
    _defineProperty(_assertThisInitialized(_this), "renderFrame", null);
    _defineProperty(_assertThisInitialized(_this), "renderHighlightedNodesFrame", null);
    _defineProperty(_assertThisInitialized(_this), "needToProcess", false);
    _defineProperty(_assertThisInitialized(_this), "checkEdgesEventsFrame", null);
    _defineProperty(_assertThisInitialized(_this), "nodePrograms", {});
    _defineProperty(_assertThisInitialized(_this), "nodeHoverPrograms", {});
    _defineProperty(_assertThisInitialized(_this), "edgePrograms", {});
    _this.settings = resolveSettings(settings);
    validateSettings(_this.settings);
    validateGraph(graph);
    if (!(container instanceof HTMLElement))
      throw new Error("Sigma: container should be an html element.");
    _this.graph = graph;
    _this.container = container;
    _this.createWebGLContext("edges", {
      picking: settings.enableEdgeEvents
    });
    _this.createCanvasContext("edgeLabels");
    _this.createWebGLContext("nodes", {
      picking: true
    });
    _this.createCanvasContext("labels");
    _this.createCanvasContext("hovers");
    _this.createWebGLContext("hoverNodes");
    _this.createCanvasContext("mouse");
    _this.resize();
    for (var type in _this.settings.nodeProgramClasses) {
      var NodeProgramClass = _this.settings.nodeProgramClasses[type];
      _this.nodePrograms[type] = new NodeProgramClass(_this.webGLContexts.nodes, _this.frameBuffers.nodes, _assertThisInitialized(_this));
      var NodeHoverProgram = NodeProgramClass;
      if (type in _this.settings.nodeHoverProgramClasses) {
        NodeHoverProgram = _this.settings.nodeHoverProgramClasses[type];
      }
      _this.nodeHoverPrograms[type] = new NodeHoverProgram(_this.webGLContexts.hoverNodes, null, _assertThisInitialized(_this));
    }
    for (var _type in _this.settings.edgeProgramClasses) {
      var EdgeProgramClass = _this.settings.edgeProgramClasses[_type];
      _this.edgePrograms[_type] = new EdgeProgramClass(_this.webGLContexts.edges, _this.frameBuffers.edges, _assertThisInitialized(_this));
    }
    _this.camera = new Camera;
    _this.bindCameraHandlers();
    _this.mouseCaptor = new MouseCaptor(_this.elements.mouse, _assertThisInitialized(_this));
    _this.touchCaptor = new TouchCaptor(_this.elements.mouse, _assertThisInitialized(_this));
    _this.bindEventHandlers();
    _this.bindGraphHandlers();
    _this.handleSettingsUpdate();
    _this.refresh();
    return _this;
  }
  _createClass(Sigma, [{
    key: "createCanvas",
    value: function createCanvas(id) {
      var canvas = createElement("canvas", {
        position: "absolute"
      }, {
        class: "sigma-".concat(id)
      });
      this.elements[id] = canvas;
      this.container.appendChild(canvas);
      return canvas;
    }
  }, {
    key: "createCanvasContext",
    value: function createCanvasContext(id) {
      var canvas = this.createCanvas(id);
      var contextOptions = {
        preserveDrawingBuffer: false,
        antialias: false
      };
      this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
      return this;
    }
  }, {
    key: "createWebGLContext",
    value: function createWebGLContext(id, options) {
      var canvas = this.createCanvas(id);
      if (options !== null && options !== undefined && options.hidden)
        canvas.remove();
      var contextOptions = _objectSpread2({
        preserveDrawingBuffer: false,
        antialias: false
      }, options || {});
      var context;
      context = canvas.getContext("webgl2", contextOptions);
      if (!context)
        context = canvas.getContext("webgl", contextOptions);
      if (!context)
        context = canvas.getContext("experimental-webgl", contextOptions);
      var gl = context;
      this.webGLContexts[id] = gl;
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      if (options !== null && options !== undefined && options.picking) {
        this.pickingLayers.add(id);
        var newFrameBuffer = gl.createFramebuffer();
        if (!newFrameBuffer)
          throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(id));
        this.frameBuffers[id] = newFrameBuffer;
      }
      return this;
    }
  }, {
    key: "resetWebGLTexture",
    value: function resetWebGLTexture(id) {
      var gl = this.webGLContexts[id];
      var frameBuffer = this.frameBuffers[id];
      var currentTexture = this.textures[id];
      if (currentTexture)
        gl.deleteTexture(currentTexture);
      var pickingTexture = gl.createTexture();
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      gl.bindTexture(gl.TEXTURE_2D, pickingTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pickingTexture, 0);
      this.textures[id] = pickingTexture;
      return this;
    }
  }, {
    key: "bindCameraHandlers",
    value: function bindCameraHandlers() {
      var _this2 = this;
      this.activeListeners.camera = function() {
        _this2.scheduleRender();
      };
      this.camera.on("updated", this.activeListeners.camera);
      return this;
    }
  }, {
    key: "unbindCameraHandlers",
    value: function unbindCameraHandlers() {
      this.camera.removeListener("updated", this.activeListeners.camera);
      return this;
    }
  }, {
    key: "getNodeAtPosition",
    value: function getNodeAtPosition(position) {
      var { x: x2, y: y2 } = position;
      var color = getPixelColor(this.webGLContexts.nodes, this.frameBuffers.nodes, x2, y2, this.pixelRatio, this.pickingDownSizingRatio);
      var index = colorToIndex.apply(undefined, _toConsumableArray(color));
      var itemAt = this.itemIDsIndex[index];
      return itemAt && itemAt.type === "node" ? itemAt.id : null;
    }
  }, {
    key: "bindEventHandlers",
    value: function bindEventHandlers() {
      var _this3 = this;
      this.activeListeners.handleResize = function() {
        _this3.scheduleRefresh();
      };
      window.addEventListener("resize", this.activeListeners.handleResize);
      this.activeListeners.handleMove = function(e) {
        var baseEvent = {
          event: e,
          preventSigmaDefault: function preventSigmaDefault() {
            e.preventSigmaDefault();
          }
        };
        var nodeToHover = _this3.getNodeAtPosition(e);
        if (nodeToHover && _this3.hoveredNode !== nodeToHover && !_this3.nodeDataCache[nodeToHover].hidden) {
          if (_this3.hoveredNode)
            _this3.emit("leaveNode", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
              node: _this3.hoveredNode
            }));
          _this3.hoveredNode = nodeToHover;
          _this3.emit("enterNode", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
            node: nodeToHover
          }));
          _this3.scheduleHighlightedNodesRender();
          return;
        }
        if (_this3.hoveredNode) {
          if (_this3.getNodeAtPosition(e) !== _this3.hoveredNode) {
            var node = _this3.hoveredNode;
            _this3.hoveredNode = null;
            _this3.emit("leaveNode", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
              node
            }));
            _this3.scheduleHighlightedNodesRender();
            return;
          }
        }
        if (_this3.settings.enableEdgeEvents) {
          var edgeToHover = _this3.hoveredNode ? null : _this3.getEdgeAtPoint(baseEvent.event.x, baseEvent.event.y);
          if (edgeToHover !== _this3.hoveredEdge) {
            if (_this3.hoveredEdge)
              _this3.emit("leaveEdge", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
                edge: _this3.hoveredEdge
              }));
            if (edgeToHover)
              _this3.emit("enterEdge", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
                edge: edgeToHover
              }));
            _this3.hoveredEdge = edgeToHover;
          }
        }
      };
      this.activeListeners.handleLeave = function(e) {
        var baseEvent = {
          event: e,
          preventSigmaDefault: function preventSigmaDefault() {
            e.preventSigmaDefault();
          }
        };
        if (_this3.hoveredNode) {
          _this3.emit("leaveNode", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
            node: _this3.hoveredNode
          }));
          _this3.scheduleHighlightedNodesRender();
        }
        if (_this3.settings.enableEdgeEvents && _this3.hoveredEdge) {
          _this3.emit("leaveEdge", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
            edge: _this3.hoveredEdge
          }));
          _this3.scheduleHighlightedNodesRender();
        }
        _this3.emit("leaveStage", _objectSpread2({}, baseEvent));
      };
      this.activeListeners.handleEnter = function(e) {
        var baseEvent = {
          event: e,
          preventSigmaDefault: function preventSigmaDefault() {
            e.preventSigmaDefault();
          }
        };
        _this3.emit("enterStage", _objectSpread2({}, baseEvent));
      };
      var createMouseListener = function createMouseListener(eventType) {
        return function(e) {
          var baseEvent = {
            event: e,
            preventSigmaDefault: function preventSigmaDefault() {
              e.preventSigmaDefault();
            }
          };
          var isFakeSigmaMouseEvent = e.original.isFakeSigmaMouseEvent;
          var nodeAtPosition = isFakeSigmaMouseEvent ? _this3.getNodeAtPosition(e) : _this3.hoveredNode;
          if (nodeAtPosition)
            return _this3.emit("".concat(eventType, "Node"), _objectSpread2(_objectSpread2({}, baseEvent), {}, {
              node: nodeAtPosition
            }));
          if (_this3.settings.enableEdgeEvents) {
            var edge = _this3.getEdgeAtPoint(e.x, e.y);
            if (edge)
              return _this3.emit("".concat(eventType, "Edge"), _objectSpread2(_objectSpread2({}, baseEvent), {}, {
                edge
              }));
          }
          return _this3.emit("".concat(eventType, "Stage"), baseEvent);
        };
      };
      this.activeListeners.handleClick = createMouseListener("click");
      this.activeListeners.handleRightClick = createMouseListener("rightClick");
      this.activeListeners.handleDoubleClick = createMouseListener("doubleClick");
      this.activeListeners.handleWheel = createMouseListener("wheel");
      this.activeListeners.handleDown = createMouseListener("down");
      this.activeListeners.handleUp = createMouseListener("up");
      this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
      this.mouseCaptor.on("click", this.activeListeners.handleClick);
      this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
      this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick);
      this.mouseCaptor.on("wheel", this.activeListeners.handleWheel);
      this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
      this.mouseCaptor.on("mouseup", this.activeListeners.handleUp);
      this.mouseCaptor.on("mouseleave", this.activeListeners.handleLeave);
      this.mouseCaptor.on("mouseenter", this.activeListeners.handleEnter);
      return this;
    }
  }, {
    key: "bindGraphHandlers",
    value: function bindGraphHandlers() {
      var _this4 = this;
      var graph = this.graph;
      var LAYOUT_IMPACTING_FIELDS = new Set(["x", "y", "zIndex", "type"]);
      this.activeListeners.eachNodeAttributesUpdatedGraphUpdate = function(e) {
        var _e$hints;
        var updatedFields = (_e$hints = e.hints) === null || _e$hints === undefined ? undefined : _e$hints.attributes;
        _this4.graph.forEachNode(function(node) {
          return _this4.updateNode(node);
        });
        var layoutChanged = !updatedFields || updatedFields.some(function(f) {
          return LAYOUT_IMPACTING_FIELDS.has(f);
        });
        _this4.refresh({
          partialGraph: {
            nodes: graph.nodes()
          },
          skipIndexation: !layoutChanged,
          schedule: true
        });
      };
      this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate = function(e) {
        var _e$hints2;
        var updatedFields = (_e$hints2 = e.hints) === null || _e$hints2 === undefined ? undefined : _e$hints2.attributes;
        _this4.graph.forEachEdge(function(edge) {
          return _this4.updateEdge(edge);
        });
        var layoutChanged = updatedFields && ["zIndex", "type"].some(function(f) {
          return updatedFields === null || updatedFields === undefined ? undefined : updatedFields.includes(f);
        });
        _this4.refresh({
          partialGraph: {
            edges: graph.edges()
          },
          skipIndexation: !layoutChanged,
          schedule: true
        });
      };
      this.activeListeners.addNodeGraphUpdate = function(payload) {
        var node = payload.key;
        _this4.addNode(node);
        _this4.refresh({
          partialGraph: {
            nodes: [node]
          },
          skipIndexation: false,
          schedule: true
        });
      };
      this.activeListeners.updateNodeGraphUpdate = function(payload) {
        var node = payload.key;
        _this4.refresh({
          partialGraph: {
            nodes: [node]
          },
          skipIndexation: false,
          schedule: true
        });
      };
      this.activeListeners.dropNodeGraphUpdate = function(payload) {
        var node = payload.key;
        _this4.removeNode(node);
        _this4.refresh({
          schedule: true
        });
      };
      this.activeListeners.addEdgeGraphUpdate = function(payload) {
        var edge = payload.key;
        _this4.addEdge(edge);
        _this4.refresh({
          partialGraph: {
            edges: [edge]
          },
          schedule: true
        });
      };
      this.activeListeners.updateEdgeGraphUpdate = function(payload) {
        var edge = payload.key;
        _this4.refresh({
          partialGraph: {
            edges: [edge]
          },
          skipIndexation: false,
          schedule: true
        });
      };
      this.activeListeners.dropEdgeGraphUpdate = function(payload) {
        var edge = payload.key;
        _this4.removeEdge(edge);
        _this4.refresh({
          schedule: true
        });
      };
      this.activeListeners.clearEdgesGraphUpdate = function() {
        _this4.clearEdgeState();
        _this4.clearEdgeIndices();
        _this4.refresh({
          schedule: true
        });
      };
      this.activeListeners.clearGraphUpdate = function() {
        _this4.clearEdgeState();
        _this4.clearNodeState();
        _this4.clearEdgeIndices();
        _this4.clearNodeIndices();
        _this4.refresh({
          schedule: true
        });
      };
      graph.on("nodeAdded", this.activeListeners.addNodeGraphUpdate);
      graph.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.on("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
      graph.on("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
      graph.on("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
      graph.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.on("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
      graph.on("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
      graph.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.on("cleared", this.activeListeners.clearGraphUpdate);
      return this;
    }
  }, {
    key: "unbindGraphHandlers",
    value: function unbindGraphHandlers() {
      var graph = this.graph;
      graph.removeListener("nodeAdded", this.activeListeners.addNodeGraphUpdate);
      graph.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.removeListener("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
      graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
      graph.removeListener("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
      graph.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.removeListener("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
      graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
      graph.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.removeListener("cleared", this.activeListeners.clearGraphUpdate);
    }
  }, {
    key: "getEdgeAtPoint",
    value: function getEdgeAtPoint(x2, y2) {
      var color = getPixelColor(this.webGLContexts.edges, this.frameBuffers.edges, x2, y2, this.pixelRatio, this.pickingDownSizingRatio);
      var index = colorToIndex.apply(undefined, _toConsumableArray(color));
      var itemAt = this.itemIDsIndex[index];
      return itemAt && itemAt.type === "edge" ? itemAt.id : null;
    }
  }, {
    key: "process",
    value: function process() {
      var _this5 = this;
      var graph = this.graph;
      var settings = this.settings;
      var dimensions = this.getDimensions();
      this.nodeExtent = graphExtent(this.graph);
      this.normalizationFunction = createNormalizationFunction(this.customBBox || this.nodeExtent);
      var nullCamera = new Camera;
      var nullCameraMatrix = matrixFromCamera(nullCamera.getState(), dimensions, this.getGraphDimensions(), this.getSetting("stagePadding") || 0);
      this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
      var nodesPerPrograms = {};
      var nodeIndices = {};
      var edgeIndices = {};
      var itemIDsIndex = {};
      var incrID = 1;
      var nodes = graph.nodes();
      for (var i = 0, l2 = nodes.length;i < l2; i++) {
        var node = nodes[i];
        var data = this.nodeDataCache[node];
        var attrs = graph.getNodeAttributes(node);
        data.x = attrs.x;
        data.y = attrs.y;
        this.normalizationFunction.applyTo(data);
        if (typeof data.label === "string" && !data.hidden)
          this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, {
            matrix: nullCameraMatrix
          }));
        nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
      }
      this.labelGrid.organize();
      for (var type in this.nodePrograms) {
        if (!hasOwnProperty.call(this.nodePrograms, type)) {
          throw new Error("Sigma: could not find a suitable program for node type \"".concat(type, "\"!"));
        }
        this.nodePrograms[type].reallocate(nodesPerPrograms[type] || 0);
        nodesPerPrograms[type] = 0;
      }
      if (this.settings.zIndex && this.nodeZExtent[0] !== this.nodeZExtent[1])
        nodes = zIndexOrdering(this.nodeZExtent, function(node2) {
          return _this5.nodeDataCache[node2].zIndex;
        }, nodes);
      for (var _i = 0, _l = nodes.length;_i < _l; _i++) {
        var _node = nodes[_i];
        nodeIndices[_node] = incrID;
        itemIDsIndex[nodeIndices[_node]] = {
          type: "node",
          id: _node
        };
        incrID++;
        var _data = this.nodeDataCache[_node];
        this.addNodeToProgram(_node, nodeIndices[_node], nodesPerPrograms[_data.type]++);
      }
      var edgesPerPrograms = {};
      var edges = graph.edges();
      for (var _i2 = 0, _l2 = edges.length;_i2 < _l2; _i2++) {
        var edge = edges[_i2];
        var _data2 = this.edgeDataCache[edge];
        edgesPerPrograms[_data2.type] = (edgesPerPrograms[_data2.type] || 0) + 1;
      }
      if (this.settings.zIndex && this.edgeZExtent[0] !== this.edgeZExtent[1])
        edges = zIndexOrdering(this.edgeZExtent, function(edge2) {
          return _this5.edgeDataCache[edge2].zIndex;
        }, edges);
      for (var _type2 in this.edgePrograms) {
        if (!hasOwnProperty.call(this.edgePrograms, _type2)) {
          throw new Error("Sigma: could not find a suitable program for edge type \"".concat(_type2, "\"!"));
        }
        this.edgePrograms[_type2].reallocate(edgesPerPrograms[_type2] || 0);
        edgesPerPrograms[_type2] = 0;
      }
      for (var _i3 = 0, _l3 = edges.length;_i3 < _l3; _i3++) {
        var _edge = edges[_i3];
        edgeIndices[_edge] = incrID;
        itemIDsIndex[edgeIndices[_edge]] = {
          type: "edge",
          id: _edge
        };
        incrID++;
        var _data3 = this.edgeDataCache[_edge];
        this.addEdgeToProgram(_edge, edgeIndices[_edge], edgesPerPrograms[_data3.type]++);
      }
      this.itemIDsIndex = itemIDsIndex;
      this.nodeIndices = nodeIndices;
      this.edgeIndices = edgeIndices;
      return this;
    }
  }, {
    key: "handleSettingsUpdate",
    value: function handleSettingsUpdate() {
      this.camera.minRatio = this.settings.minCameraRatio;
      this.camera.maxRatio = this.settings.maxCameraRatio;
      this.camera.setState(this.camera.validateState(this.camera.getState()));
      return this;
    }
  }, {
    key: "renderLabels",
    value: function renderLabels() {
      if (!this.settings.renderLabels)
        return this;
      var cameraState = this.camera.getState();
      var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
      extend(labelsToDisplay, this.nodesWithForcedLabels);
      this.displayedNodeLabels = new Set;
      var context = this.canvasContexts.labels;
      for (var i = 0, l2 = labelsToDisplay.length;i < l2; i++) {
        var node = labelsToDisplay[i];
        var data = this.nodeDataCache[node];
        if (this.displayedNodeLabels.has(node))
          continue;
        if (data.hidden)
          continue;
        var _this$framedGraphToVi = this.framedGraphToViewport(data), x2 = _this$framedGraphToVi.x, y2 = _this$framedGraphToVi.y;
        var size = this.scaleSize(data.size);
        if (!data.forceLabel && size < this.settings.labelRenderedSizeThreshold)
          continue;
        if (x2 < -X_LABEL_MARGIN || x2 > this.width + X_LABEL_MARGIN || y2 < -Y_LABEL_MARGIN || y2 > this.height + Y_LABEL_MARGIN)
          continue;
        this.displayedNodeLabels.add(node);
        var defaultDrawNodeLabel = this.settings.defaultDrawNodeLabel;
        var nodeProgram = this.nodePrograms[data.type];
        var drawLabel = (nodeProgram === null || nodeProgram === undefined ? undefined : nodeProgram.drawLabel) || defaultDrawNodeLabel;
        drawLabel(context, _objectSpread2(_objectSpread2({
          key: node
        }, data), {}, {
          size,
          x: x2,
          y: y2
        }), this.settings);
      }
      return this;
    }
  }, {
    key: "renderEdgeLabels",
    value: function renderEdgeLabels() {
      if (!this.settings.renderEdgeLabels)
        return this;
      var context = this.canvasContexts.edgeLabels;
      context.clearRect(0, 0, this.width, this.height);
      var edgeLabelsToDisplay = edgeLabelsToDisplayFromNodes({
        graph: this.graph,
        hoveredNode: this.hoveredNode,
        displayedNodeLabels: this.displayedNodeLabels,
        highlightedNodes: this.highlightedNodes
      });
      extend(edgeLabelsToDisplay, this.edgesWithForcedLabels);
      var displayedLabels = new Set;
      for (var i = 0, l2 = edgeLabelsToDisplay.length;i < l2; i++) {
        var edge = edgeLabelsToDisplay[i], extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]], edgeData = this.edgeDataCache[edge];
        if (displayedLabels.has(edge))
          continue;
        if (edgeData.hidden || sourceData.hidden || targetData.hidden) {
          continue;
        }
        var defaultDrawEdgeLabel = this.settings.defaultDrawEdgeLabel;
        var edgeProgram = this.edgePrograms[edgeData.type];
        var drawLabel = (edgeProgram === null || edgeProgram === undefined ? undefined : edgeProgram.drawLabel) || defaultDrawEdgeLabel;
        drawLabel(context, _objectSpread2(_objectSpread2({
          key: edge
        }, edgeData), {}, {
          size: this.scaleSize(edgeData.size)
        }), _objectSpread2(_objectSpread2(_objectSpread2({
          key: extremities[0]
        }, sourceData), this.framedGraphToViewport(sourceData)), {}, {
          size: this.scaleSize(sourceData.size)
        }), _objectSpread2(_objectSpread2(_objectSpread2({
          key: extremities[1]
        }, targetData), this.framedGraphToViewport(targetData)), {}, {
          size: this.scaleSize(targetData.size)
        }), this.settings);
        displayedLabels.add(edge);
      }
      this.displayedEdgeLabels = displayedLabels;
      return this;
    }
  }, {
    key: "renderHighlightedNodes",
    value: function renderHighlightedNodes() {
      var _this6 = this;
      var context = this.canvasContexts.hovers;
      context.clearRect(0, 0, this.width, this.height);
      var render = function render(node) {
        var data = _this6.nodeDataCache[node];
        var _this6$framedGraphToV = _this6.framedGraphToViewport(data), x2 = _this6$framedGraphToV.x, y2 = _this6$framedGraphToV.y;
        var size = _this6.scaleSize(data.size);
        var defaultDrawNodeHover = _this6.settings.defaultDrawNodeHover;
        var nodeProgram = _this6.nodePrograms[data.type];
        var drawHover = (nodeProgram === null || nodeProgram === undefined ? undefined : nodeProgram.drawHover) || defaultDrawNodeHover;
        drawHover(context, _objectSpread2(_objectSpread2({
          key: node
        }, data), {}, {
          size,
          x: x2,
          y: y2
        }), _this6.settings);
      };
      var nodesToRender = [];
      if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) {
        nodesToRender.push(this.hoveredNode);
      }
      this.highlightedNodes.forEach(function(node) {
        if (node !== _this6.hoveredNode)
          nodesToRender.push(node);
      });
      nodesToRender.forEach(function(node) {
        return render(node);
      });
      var nodesPerPrograms = {};
      nodesToRender.forEach(function(node) {
        var type2 = _this6.nodeDataCache[node].type;
        nodesPerPrograms[type2] = (nodesPerPrograms[type2] || 0) + 1;
      });
      for (var type in this.nodeHoverPrograms) {
        this.nodeHoverPrograms[type].reallocate(nodesPerPrograms[type] || 0);
        nodesPerPrograms[type] = 0;
      }
      nodesToRender.forEach(function(node) {
        var data = _this6.nodeDataCache[node];
        _this6.nodeHoverPrograms[data.type].process(0, nodesPerPrograms[data.type]++, data);
      });
      this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
      for (var _type3 in this.nodeHoverPrograms) {
        var program = this.nodeHoverPrograms[_type3];
        program.render({
          matrix: this.matrix,
          width: this.width,
          height: this.height,
          pixelRatio: this.pixelRatio,
          cameraAngle: this.camera.angle,
          zoomRatio: this.camera.ratio,
          sizeRatio: 1 / this.scaleSize(),
          correctionRatio: this.correctionRatio,
          downSizingRatio: this.pickingDownSizingRatio,
          minEdgeThickness: this.settings.minEdgeThickness
        });
      }
    }
  }, {
    key: "scheduleHighlightedNodesRender",
    value: function scheduleHighlightedNodesRender() {
      var _this7 = this;
      if (this.renderHighlightedNodesFrame || this.renderFrame)
        return;
      this.renderHighlightedNodesFrame = requestAnimationFrame(function() {
        _this7.renderHighlightedNodesFrame = null;
        _this7.renderHighlightedNodes();
        _this7.renderEdgeLabels();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;
      this.emit("beforeRender");
      var exitRender = function exitRender() {
        _this8.emit("afterRender");
        return _this8;
      };
      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
      }
      this.resize();
      if (this.needToProcess)
        this.process();
      this.needToProcess = false;
      this.clear();
      this.pickingLayers.forEach(function(layer) {
        return _this8.resetWebGLTexture(layer);
      });
      if (!this.graph.order)
        return exitRender();
      var mouseCaptor = this.mouseCaptor;
      var moving = this.camera.isAnimated() || mouseCaptor.isMoving || mouseCaptor.draggedEvents || mouseCaptor.currentWheelDirection;
      var cameraState = this.camera.getState();
      var viewportDimensions = this.getDimensions();
      var graphDimensions = this.getGraphDimensions();
      var padding = this.getSetting("stagePadding") || 0;
      this.matrix = matrixFromCamera(cameraState, viewportDimensions, graphDimensions, padding);
      this.invMatrix = matrixFromCamera(cameraState, viewportDimensions, graphDimensions, padding, true);
      this.correctionRatio = getMatrixImpact(this.matrix, cameraState, viewportDimensions);
      this.graphToViewportRatio = this.getGraphToViewportRatio();
      var params = {
        matrix: this.matrix,
        width: this.width,
        height: this.height,
        pixelRatio: this.pixelRatio,
        zoomRatio: this.camera.ratio,
        cameraAngle: this.camera.angle,
        sizeRatio: 1 / this.scaleSize(),
        correctionRatio: this.correctionRatio,
        downSizingRatio: this.pickingDownSizingRatio,
        minEdgeThickness: this.settings.minEdgeThickness
      };
      for (var type in this.nodePrograms) {
        var program = this.nodePrograms[type];
        program.render(params);
      }
      if (!this.settings.hideEdgesOnMove || !moving) {
        for (var _type4 in this.edgePrograms) {
          var _program = this.edgePrograms[_type4];
          _program.render(params);
        }
      }
      if (this.settings.hideLabelsOnMove && moving)
        return exitRender();
      this.renderLabels();
      this.renderEdgeLabels();
      this.renderHighlightedNodes();
      return exitRender();
    }
  }, {
    key: "addNode",
    value: function addNode(key) {
      var attr = Object.assign({}, this.graph.getNodeAttributes(key));
      if (this.settings.nodeReducer)
        attr = this.settings.nodeReducer(key, attr);
      var data = applyNodeDefaults(this.settings, key, attr);
      this.nodeDataCache[key] = data;
      this.nodesWithForcedLabels["delete"](key);
      if (data.forceLabel && !data.hidden)
        this.nodesWithForcedLabels.add(key);
      this.highlightedNodes["delete"](key);
      if (data.highlighted && !data.hidden)
        this.highlightedNodes.add(key);
      if (this.settings.zIndex) {
        if (data.zIndex < this.nodeZExtent[0])
          this.nodeZExtent[0] = data.zIndex;
        if (data.zIndex > this.nodeZExtent[1])
          this.nodeZExtent[1] = data.zIndex;
      }
    }
  }, {
    key: "updateNode",
    value: function updateNode(key) {
      this.addNode(key);
      var data = this.nodeDataCache[key];
      this.normalizationFunction.applyTo(data);
    }
  }, {
    key: "removeNode",
    value: function removeNode(key) {
      delete this.nodeDataCache[key];
      delete this.nodeProgramIndex[key];
      this.highlightedNodes["delete"](key);
      if (this.hoveredNode === key)
        this.hoveredNode = null;
      this.nodesWithForcedLabels["delete"](key);
    }
  }, {
    key: "addEdge",
    value: function addEdge(key) {
      var attr = Object.assign({}, this.graph.getEdgeAttributes(key));
      if (this.settings.edgeReducer)
        attr = this.settings.edgeReducer(key, attr);
      var data = applyEdgeDefaults(this.settings, key, attr);
      this.edgeDataCache[key] = data;
      this.edgesWithForcedLabels["delete"](key);
      if (data.forceLabel && !data.hidden)
        this.edgesWithForcedLabels.add(key);
      if (this.settings.zIndex) {
        if (data.zIndex < this.edgeZExtent[0])
          this.edgeZExtent[0] = data.zIndex;
        if (data.zIndex > this.edgeZExtent[1])
          this.edgeZExtent[1] = data.zIndex;
      }
    }
  }, {
    key: "updateEdge",
    value: function updateEdge(key) {
      this.addEdge(key);
    }
  }, {
    key: "removeEdge",
    value: function removeEdge(key) {
      delete this.edgeDataCache[key];
      delete this.edgeProgramIndex[key];
      if (this.hoveredEdge === key)
        this.hoveredEdge = null;
      this.edgesWithForcedLabels["delete"](key);
    }
  }, {
    key: "clearNodeIndices",
    value: function clearNodeIndices() {
      this.labelGrid = new LabelGrid;
      this.nodeExtent = {
        x: [0, 1],
        y: [0, 1]
      };
      this.nodeDataCache = {};
      this.edgeProgramIndex = {};
      this.nodesWithForcedLabels = new Set;
      this.nodeZExtent = [Infinity, (-Infinity)];
    }
  }, {
    key: "clearEdgeIndices",
    value: function clearEdgeIndices() {
      this.edgeDataCache = {};
      this.edgeProgramIndex = {};
      this.edgesWithForcedLabels = new Set;
      this.edgeZExtent = [Infinity, (-Infinity)];
    }
  }, {
    key: "clearIndices",
    value: function clearIndices() {
      this.clearEdgeIndices();
      this.clearNodeIndices();
    }
  }, {
    key: "clearNodeState",
    value: function clearNodeState() {
      this.displayedNodeLabels = new Set;
      this.highlightedNodes = new Set;
      this.hoveredNode = null;
    }
  }, {
    key: "clearEdgeState",
    value: function clearEdgeState() {
      this.displayedEdgeLabels = new Set;
      this.highlightedNodes = new Set;
      this.hoveredEdge = null;
    }
  }, {
    key: "clearState",
    value: function clearState() {
      this.clearEdgeState();
      this.clearNodeState();
    }
  }, {
    key: "addNodeToProgram",
    value: function addNodeToProgram(node, fingerprint, position) {
      var data = this.nodeDataCache[node];
      var nodeProgram = this.nodePrograms[data.type];
      if (!nodeProgram)
        throw new Error("Sigma: could not find a suitable program for node type \"".concat(data.type, "\"!"));
      nodeProgram.process(fingerprint, position, data);
      this.nodeProgramIndex[node] = position;
    }
  }, {
    key: "addEdgeToProgram",
    value: function addEdgeToProgram(edge, fingerprint, position) {
      var data = this.edgeDataCache[edge];
      var edgeProgram = this.edgePrograms[data.type];
      if (!edgeProgram)
        throw new Error("Sigma: could not find a suitable program for edge type \"".concat(data.type, "\"!"));
      var extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]];
      edgeProgram.process(fingerprint, position, sourceData, targetData, data);
      this.edgeProgramIndex[edge] = position;
    }
  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }
  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.unbindCameraHandlers();
      this.camera = camera;
      this.bindCameraHandlers();
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return this.container;
    }
  }, {
    key: "getGraph",
    value: function getGraph() {
      return this.graph;
    }
  }, {
    key: "setGraph",
    value: function setGraph(graph) {
      if (graph === this.graph)
        return;
      this.unbindGraphHandlers();
      if (this.checkEdgesEventsFrame !== null) {
        cancelAnimationFrame(this.checkEdgesEventsFrame);
        this.checkEdgesEventsFrame = null;
      }
      this.graph = graph;
      this.bindGraphHandlers();
      this.refresh();
    }
  }, {
    key: "getMouseCaptor",
    value: function getMouseCaptor() {
      return this.mouseCaptor;
    }
  }, {
    key: "getTouchCaptor",
    value: function getTouchCaptor() {
      return this.touchCaptor;
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.width,
        height: this.height
      };
    }
  }, {
    key: "getGraphDimensions",
    value: function getGraphDimensions() {
      var extent = this.customBBox || this.nodeExtent;
      return {
        width: extent.x[1] - extent.x[0] || 1,
        height: extent.y[1] - extent.y[0] || 1
      };
    }
  }, {
    key: "getNodeDisplayData",
    value: function getNodeDisplayData(key) {
      var node = this.nodeDataCache[key];
      return node ? Object.assign({}, node) : undefined;
    }
  }, {
    key: "getEdgeDisplayData",
    value: function getEdgeDisplayData(key) {
      var edge = this.edgeDataCache[key];
      return edge ? Object.assign({}, edge) : undefined;
    }
  }, {
    key: "getNodeDisplayedLabels",
    value: function getNodeDisplayedLabels() {
      return new Set(this.displayedNodeLabels);
    }
  }, {
    key: "getEdgeDisplayedLabels",
    value: function getEdgeDisplayedLabels() {
      return new Set(this.displayedEdgeLabels);
    }
  }, {
    key: "getSettings",
    value: function getSettings() {
      return _objectSpread2({}, this.settings);
    }
  }, {
    key: "getSetting",
    value: function getSetting(key) {
      return this.settings[key];
    }
  }, {
    key: "setSetting",
    value: function setSetting(key, value) {
      this.settings[key] = value;
      validateSettings(this.settings);
      this.handleSettingsUpdate();
      this.scheduleRefresh();
      return this;
    }
  }, {
    key: "updateSetting",
    value: function updateSetting(key, updater) {
      this.settings[key] = updater(this.settings[key]);
      validateSettings(this.settings);
      this.handleSettingsUpdate();
      this.scheduleRefresh();
      return this;
    }
  }, {
    key: "resize",
    value: function resize() {
      var previousWidth = this.width, previousHeight = this.height;
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.pixelRatio = getPixelRatio();
      if (this.width === 0) {
        if (this.settings.allowInvalidContainer)
          this.width = 1;
        else
          throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }
      if (this.height === 0) {
        if (this.settings.allowInvalidContainer)
          this.height = 1;
        else
          throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }
      if (previousWidth === this.width && previousHeight === this.height)
        return this;
      this.emit("resize");
      for (var id in this.elements) {
        var element = this.elements[id];
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
      }
      for (var _id in this.canvasContexts) {
        this.elements[_id].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[_id].setAttribute("height", this.height * this.pixelRatio + "px");
        if (this.pixelRatio !== 1)
          this.canvasContexts[_id].scale(this.pixelRatio, this.pixelRatio);
      }
      for (var _id2 in this.webGLContexts) {
        this.elements[_id2].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[_id2].setAttribute("height", this.height * this.pixelRatio + "px");
        var gl = this.webGLContexts[_id2];
        gl.viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);
        if (this.pickingLayers.has(_id2)) {
          var currentTexture = this.textures[_id2];
          if (currentTexture)
            gl.deleteTexture(currentTexture);
        }
      }
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
      this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
      this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
      return this;
    }
  }, {
    key: "refresh",
    value: function refresh(opts) {
      var _this9 = this;
      var skipIndexation = (opts === null || opts === undefined ? undefined : opts.skipIndexation) !== undefined ? opts === null || opts === undefined ? undefined : opts.skipIndexation : false;
      var schedule = (opts === null || opts === undefined ? undefined : opts.schedule) !== undefined ? opts.schedule : false;
      var fullRefresh = !opts || !opts.partialGraph;
      if (fullRefresh) {
        this.clearEdgeIndices();
        this.clearNodeIndices();
        this.graph.forEachNode(function(node2) {
          return _this9.addNode(node2);
        });
        this.graph.forEachEdge(function(edge2) {
          return _this9.addEdge(edge2);
        });
      } else {
        var _opts$partialGraph, _opts$partialGraph2;
        var nodes = ((_opts$partialGraph = opts.partialGraph) === null || _opts$partialGraph === undefined ? undefined : _opts$partialGraph.nodes) || [];
        for (var i = 0, l2 = (nodes === null || nodes === undefined ? undefined : nodes.length) || 0;i < l2; i++) {
          var node = nodes[i];
          this.updateNode(node);
          if (skipIndexation) {
            var programIndex = this.nodeProgramIndex[node];
            if (programIndex === undefined)
              throw new Error("Sigma: node \"".concat(node, "\" can't be repaint"));
            this.addNodeToProgram(node, this.nodeIndices[node], programIndex);
          }
        }
        var edges = (opts === null || opts === undefined || (_opts$partialGraph2 = opts.partialGraph) === null || _opts$partialGraph2 === undefined ? undefined : _opts$partialGraph2.edges) || [];
        for (var _i4 = 0, _l4 = edges.length;_i4 < _l4; _i4++) {
          var edge = edges[_i4];
          this.updateEdge(edge);
          if (skipIndexation) {
            var _programIndex = this.edgeProgramIndex[edge];
            if (_programIndex === undefined)
              throw new Error("Sigma: edge \"".concat(edge, "\" can't be repaint"));
            this.addEdgeToProgram(edge, this.edgeIndices[edge], _programIndex);
          }
        }
      }
      if (fullRefresh || !skipIndexation)
        this.needToProcess = true;
      if (schedule)
        this.scheduleRender();
      else
        this.render();
      return this;
    }
  }, {
    key: "scheduleRender",
    value: function scheduleRender() {
      var _this10 = this;
      if (!this.renderFrame) {
        this.renderFrame = requestAnimationFrame(function() {
          _this10.render();
        });
      }
      return this;
    }
  }, {
    key: "scheduleRefresh",
    value: function scheduleRefresh(opts) {
      return this.refresh(_objectSpread2(_objectSpread2({}, opts), {}, {
        schedule: true
      }));
    }
  }, {
    key: "getViewportZoomedState",
    value: function getViewportZoomedState(viewportTarget, newRatio) {
      var _this$camera$getState = this.camera.getState(), ratio = _this$camera$getState.ratio, angle = _this$camera$getState.angle, x2 = _this$camera$getState.x, y2 = _this$camera$getState.y;
      var ratioDiff = newRatio / ratio;
      var center = {
        x: this.width / 2,
        y: this.height / 2
      };
      var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
      var graphCenterPosition = this.viewportToFramedGraph(center);
      return {
        angle,
        x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x2,
        y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y2,
        ratio: newRatio
      };
    }
  }, {
    key: "viewRectangle",
    value: function viewRectangle() {
      var marginX = 0 * this.width / 8, marginY = 0 * this.height / 8;
      var p1 = this.viewportToFramedGraph({
        x: 0 - marginX,
        y: 0 - marginY
      }), p2 = this.viewportToFramedGraph({
        x: this.width + marginX,
        y: 0 - marginY
      }), h2 = this.viewportToFramedGraph({
        x: 0,
        y: this.height + marginY
      });
      return {
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        height: p2.y - h2.y
      };
    }
  }, {
    key: "framedGraphToViewport",
    value: function framedGraphToViewport(coordinates) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
      var matrix = override.matrix ? override.matrix : recomputeMatrix ? matrixFromCamera(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0) : this.matrix;
      var viewportPos = multiplyVec2(matrix, coordinates);
      return {
        x: (1 + viewportPos.x) * this.width / 2,
        y: (1 - viewportPos.y) * this.height / 2
      };
    }
  }, {
    key: "viewportToFramedGraph",
    value: function viewportToFramedGraph(coordinates) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
      var invMatrix = override.matrix ? override.matrix : recomputeMatrix ? matrixFromCamera(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0, true) : this.invMatrix;
      var res = multiplyVec2(invMatrix, {
        x: coordinates.x / this.width * 2 - 1,
        y: 1 - coordinates.y / this.height * 2
      });
      if (isNaN(res.x))
        res.x = 0;
      if (isNaN(res.y))
        res.y = 0;
      return res;
    }
  }, {
    key: "viewportToGraph",
    value: function viewportToGraph(viewportPoint) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint, override));
    }
  }, {
    key: "graphToViewport",
    value: function graphToViewport(graphPoint) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.framedGraphToViewport(this.normalizationFunction(graphPoint), override);
    }
  }, {
    key: "getGraphToViewportRatio",
    value: function getGraphToViewportRatio() {
      var graphP1 = {
        x: 0,
        y: 0
      };
      var graphP2 = {
        x: 1,
        y: 1
      };
      var graphD = Math.sqrt(Math.pow(graphP1.x - graphP2.x, 2) + Math.pow(graphP1.y - graphP2.y, 2));
      var viewportP1 = this.graphToViewport(graphP1);
      var viewportP2 = this.graphToViewport(graphP2);
      var viewportD = Math.sqrt(Math.pow(viewportP1.x - viewportP2.x, 2) + Math.pow(viewportP1.y - viewportP2.y, 2));
      return viewportD / graphD;
    }
  }, {
    key: "getBBox",
    value: function getBBox() {
      return this.nodeExtent;
    }
  }, {
    key: "getCustomBBox",
    value: function getCustomBBox() {
      return this.customBBox;
    }
  }, {
    key: "setCustomBBox",
    value: function setCustomBBox(customBBox) {
      this.customBBox = customBBox;
      this.scheduleRender();
      return this;
    }
  }, {
    key: "kill",
    value: function kill() {
      this.emit("kill");
      this.removeAllListeners();
      this.unbindCameraHandlers();
      window.removeEventListener("resize", this.activeListeners.handleResize);
      this.mouseCaptor.kill();
      this.touchCaptor.kill();
      this.unbindGraphHandlers();
      this.clearIndices();
      this.clearState();
      this.nodeDataCache = {};
      this.edgeDataCache = {};
      this.highlightedNodes.clear();
      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
      }
      if (this.renderHighlightedNodesFrame) {
        cancelAnimationFrame(this.renderHighlightedNodesFrame);
        this.renderHighlightedNodesFrame = null;
      }
      for (var id in this.webGLContexts) {
        var _context$getExtension;
        var context = this.webGLContexts[id];
        (_context$getExtension = context.getExtension("WEBGL_lose_context")) === null || _context$getExtension === undefined || _context$getExtension.loseContext();
      }
      var container = this.container;
      while (container.firstChild)
        container.removeChild(container.firstChild);
      this.canvasContexts = {};
      this.webGLContexts = {};
      this.elements = {};
      for (var type in this.nodePrograms) {
        this.nodePrograms[type].kill();
      }
      for (var _type5 in this.nodeHoverPrograms) {
        this.nodeHoverPrograms[_type5].kill();
      }
      for (var _type6 in this.edgePrograms) {
        this.edgePrograms[_type6].kill();
      }
      this.nodePrograms = {};
      this.nodeHoverPrograms = {};
      this.edgePrograms = {};
    }
  }, {
    key: "scaleSize",
    value: function scaleSize() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var cameraRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.camera.ratio;
      return size / this.settings.zoomToSizeRatioFunction(cameraRatio) * (this.getSetting("itemSizesReference") === "positions" ? cameraRatio * this.graphToViewportRatio : 1);
    }
  }, {
    key: "getCanvases",
    value: function getCanvases() {
      return _objectSpread2({}, this.elements);
    }
  }]);
  return Sigma;
}(TypedEventEmitter);
var Sigma = Sigma$1;

// src/web/public/index.tsx
var import_graphology_layout_forceatlas2 = __toESM(require_graphology_layout_forceatlas2(), 1);

// node_modules/graphology-layout/index.js
var $circlepack = require_circlepack();
var $circular = require_circular();
var $random = require_random2();
var $rotation = require_rotation();

// src/web/public/index.tsx
async function render() {
  const graph = new import_graphology.default;
  const data = await fetch("http://localhost:3000/data.json").then((res) => res.json());
  graph.import(data);
  console.log(data);
  $random.assign(graph);
  import_graphology_layout_forceatlas2.default.assign(graph, { iterations: 50 });
  graph.forEachNode((node, attr) => {
    attr.size = 20;
  });
  graph.forEachEdge((edge, attr) => {
    attr.size = 10;
  });
  const container = document.getElementById("app");
  const renderer = new Sigma(graph, container, {
    renderEdgeLabels: true
  });
  renderer.refresh();
}
render();
