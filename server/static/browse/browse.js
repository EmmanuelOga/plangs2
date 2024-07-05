(() => {
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
  function d(n2, l4) {
    for (var u4 in l4)
      n2[u4] = l4[u4];
    return n2;
  }
  function w(n2) {
    var l4 = n2.parentNode;
    l4 && l4.removeChild(n2);
  }
  function _(l4, u4, t3) {
    var i4, o4, r3, f4 = {};
    for (r3 in u4)
      "key" == r3 ? i4 = u4[r3] : "ref" == r3 ? o4 = u4[r3] : f4[r3] = u4[r3];
    if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l4 && null != l4.defaultProps)
      for (r3 in l4.defaultProps)
        void 0 === f4[r3] && (f4[r3] = l4.defaultProps[r3]);
    return g(l4, f4, i4, o4, null);
  }
  function g(n2, t3, i4, o4, r3) {
    var f4 = { type: n2, props: t3, key: i4, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f4), f4;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l4) {
    this.props = n2, this.context = l4;
  }
  function x(n2, l4) {
    if (null == l4)
      return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u4; l4 < n2.__k.length; l4++)
      if (null != (u4 = n2.__k[l4]) && null != u4.__e)
        return u4.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l4, u4;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++)
        if (null != (u4 = n2.__k[l4]) && null != u4.__e) {
          n2.__e = n2.__c.base = u4.__e;
          break;
        }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
  }
  function P() {
    var n2, u4, t3, o4, r3, e3, c4, s4;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (u4 = i.length, o4 = void 0, e3 = (r3 = (t3 = n2).__v).__e, c4 = [], s4 = [], t3.__P && ((o4 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o4), O(t3.__P, o4, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [e3] : null, c4, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s4), o4.__v = r3.__v, o4.__.__k[o4.__i] = o4, j(c4, o4, s4), o4.__e != e3 && C(o4)), i.length > u4 && i.sort(f));
    P.__r = 0;
  }
  function S(n2, l4, u4, t3, i4, o4, r3, f4, e3, c4, s4) {
    var a4, v4, y4, d4, w4, _3 = t3 && t3.__k || p, g2 = l4.length;
    for (u4.__d = e3, $(u4, l4, _3), e3 = u4.__d, a4 = 0; a4 < g2; a4++)
      null != (y4 = u4.__k[a4]) && "boolean" != typeof y4 && "function" != typeof y4 && (v4 = -1 === y4.__i ? h : _3[y4.__i] || h, y4.__i = a4, O(n2, y4, v4, i4, o4, r3, f4, e3, c4, s4), d4 = y4.__e, y4.ref && v4.ref != y4.ref && (v4.ref && N(v4.ref, null, y4), s4.push(y4.ref, y4.__c || d4, y4)), null == w4 && null != d4 && (w4 = d4), 65536 & y4.__u || v4.__k === y4.__k ? (e3 && !e3.isConnected && (e3 = x(v4)), e3 = I(y4, e3, n2)) : "function" == typeof y4.type && void 0 !== y4.__d ? e3 = y4.__d : d4 && (e3 = d4.nextSibling), y4.__d = void 0, y4.__u &= -196609);
    u4.__d = e3, u4.__e = w4;
  }
  function $(n2, l4, u4) {
    var t3, i4, o4, r3, f4, e3 = l4.length, c4 = u4.length, s4 = c4, a4 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++)
      r3 = t3 + a4, null != (i4 = n2.__k[t3] = null == (i4 = l4[t3]) || "boolean" == typeof i4 || "function" == typeof i4 ? null : "string" == typeof i4 || "number" == typeof i4 || "bigint" == typeof i4 || i4.constructor == String ? g(null, i4, null, null, null) : y(i4) ? g(k, { children: i4 }, null, null, null) : void 0 === i4.constructor && i4.__b > 0 ? g(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4) ? (i4.__ = n2, i4.__b = n2.__b + 1, f4 = L(i4, u4, r3, s4), i4.__i = f4, o4 = null, -1 !== f4 && (s4--, (o4 = u4[f4]) && (o4.__u |= 131072)), null == o4 || null === o4.__v ? (-1 == f4 && a4--, "function" != typeof i4.type && (i4.__u |= 65536)) : f4 !== r3 && (f4 === r3 + 1 ? a4++ : f4 > r3 ? s4 > e3 - r3 ? a4 += f4 - r3 : a4-- : f4 < r3 ? f4 == r3 - 1 && (a4 = f4 - r3) : a4 = 0, f4 !== t3 + a4 && (i4.__u |= 65536))) : (o4 = u4[r3]) && null == o4.key && o4.__e && 0 == (131072 & o4.__u) && (o4.__e == n2.__d && (n2.__d = x(o4)), V(o4, o4, false), u4[r3] = null, s4--);
    if (s4)
      for (t3 = 0; t3 < c4; t3++)
        null != (o4 = u4[t3]) && 0 == (131072 & o4.__u) && (o4.__e == n2.__d && (n2.__d = x(o4)), V(o4, o4));
  }
  function I(n2, l4, u4) {
    var t3, i4;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i4 = 0; t3 && i4 < t3.length; i4++)
        t3[i4] && (t3[i4].__ = n2, l4 = I(t3[i4], l4, u4));
      return l4;
    }
    n2.__e != l4 && (u4.insertBefore(n2.__e, l4 || null), l4 = n2.__e);
    do {
      l4 = l4 && l4.nextSibling;
    } while (null != l4 && 8 === l4.nodeType);
    return l4;
  }
  function L(n2, l4, u4, t3) {
    var i4 = n2.key, o4 = n2.type, r3 = u4 - 1, f4 = u4 + 1, e3 = l4[u4];
    if (null === e3 || e3 && i4 == e3.key && o4 === e3.type && 0 == (131072 & e3.__u))
      return u4;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
      for (; r3 >= 0 || f4 < l4.length; ) {
        if (r3 >= 0) {
          if ((e3 = l4[r3]) && 0 == (131072 & e3.__u) && i4 == e3.key && o4 === e3.type)
            return r3;
          r3--;
        }
        if (f4 < l4.length) {
          if ((e3 = l4[f4]) && 0 == (131072 & e3.__u) && i4 == e3.key && o4 === e3.type)
            return f4;
          f4++;
        }
      }
    return -1;
  }
  function T(n2, l4, u4) {
    "-" === l4[0] ? n2.setProperty(l4, null == u4 ? "" : u4) : n2[l4] = null == u4 ? "" : "number" != typeof u4 || v.test(l4) ? u4 : u4 + "px";
  }
  function A(n2, l4, u4, t3, i4) {
    var o4;
    n:
      if ("style" === l4)
        if ("string" == typeof u4)
          n2.style.cssText = u4;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l4 in t3)
              u4 && l4 in u4 || T(n2.style, l4, "");
          if (u4)
            for (l4 in u4)
              t3 && u4[l4] === t3[l4] || T(n2.style, l4, u4[l4]);
        }
      else if ("o" === l4[0] && "n" === l4[1])
        o4 = l4 !== (l4 = l4.replace(/(PointerCapture)$|Capture$/i, "$1")), l4 = l4.toLowerCase() in n2 || "onFocusOut" === l4 || "onFocusIn" === l4 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + o4] = u4, u4 ? t3 ? u4.u = t3.u : (u4.u = e, n2.addEventListener(l4, o4 ? s : c, o4)) : n2.removeEventListener(l4, o4 ? s : c, o4);
      else {
        if ("http://www.w3.org/2000/svg" == i4)
          l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l4 && "height" != l4 && "href" != l4 && "list" != l4 && "form" != l4 && "tabIndex" != l4 && "download" != l4 && "rowSpan" != l4 && "colSpan" != l4 && "role" != l4 && l4 in n2)
          try {
            n2[l4] = null == u4 ? "" : u4;
            break n;
          } catch (n3) {
          }
        "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l4[4] ? n2.removeAttribute(l4) : n2.setAttribute(l4, u4));
      }
  }
  function F(n2) {
    return function(u4) {
      if (this.l) {
        var t3 = this.l[u4.type + n2];
        if (null == u4.t)
          u4.t = e++;
        else if (u4.t < t3.u)
          return;
        return t3(l.event ? l.event(u4) : u4);
      }
    };
  }
  function O(n2, u4, t3, i4, o4, r3, f4, e3, c4, s4) {
    var a4, h4, p4, v4, w4, _3, g2, m3, x2, C3, M2, P3, $2, I2, H, L2 = u4.type;
    if (void 0 !== u4.constructor)
      return null;
    128 & t3.__u && (c4 = !!(32 & t3.__u), r3 = [e3 = u4.__e = t3.__e]), (a4 = l.__b) && a4(u4);
    n:
      if ("function" == typeof L2)
        try {
          if (m3 = u4.props, x2 = (a4 = L2.contextType) && i4[a4.__c], C3 = a4 ? x2 ? x2.props.value : a4.__ : i4, t3.__c ? g2 = (h4 = u4.__c = t3.__c).__ = h4.__E : ("prototype" in L2 && L2.prototype.render ? u4.__c = h4 = new L2(m3, C3) : (u4.__c = h4 = new b(m3, C3), h4.constructor = L2, h4.render = q), x2 && x2.sub(h4), h4.props = m3, h4.state || (h4.state = {}), h4.context = C3, h4.__n = i4, p4 = h4.__d = true, h4.__h = [], h4._sb = []), null == h4.__s && (h4.__s = h4.state), null != L2.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = d({}, h4.__s)), d(h4.__s, L2.getDerivedStateFromProps(m3, h4.__s))), v4 = h4.props, w4 = h4.state, h4.__v = u4, p4)
            null == L2.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
          else {
            if (null == L2.getDerivedStateFromProps && m3 !== v4 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(m3, C3), !h4.__e && (null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(m3, h4.__s, C3) || u4.__v === t3.__v)) {
              for (u4.__v !== t3.__v && (h4.props = m3, h4.state = h4.__s, h4.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.forEach(function(n3) {
                n3 && (n3.__ = u4);
              }), M2 = 0; M2 < h4._sb.length; M2++)
                h4.__h.push(h4._sb[M2]);
              h4._sb = [], h4.__h.length && f4.push(h4);
              break n;
            }
            null != h4.componentWillUpdate && h4.componentWillUpdate(m3, h4.__s, C3), null != h4.componentDidUpdate && h4.__h.push(function() {
              h4.componentDidUpdate(v4, w4, _3);
            });
          }
          if (h4.context = C3, h4.props = m3, h4.__P = n2, h4.__e = false, P3 = l.__r, $2 = 0, "prototype" in L2 && L2.prototype.render) {
            for (h4.state = h4.__s, h4.__d = false, P3 && P3(u4), a4 = h4.render(h4.props, h4.state, h4.context), I2 = 0; I2 < h4._sb.length; I2++)
              h4.__h.push(h4._sb[I2]);
            h4._sb = [];
          } else
            do {
              h4.__d = false, P3 && P3(u4), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
            } while (h4.__d && ++$2 < 25);
          h4.state = h4.__s, null != h4.getChildContext && (i4 = d(d({}, i4), h4.getChildContext())), p4 || null == h4.getSnapshotBeforeUpdate || (_3 = h4.getSnapshotBeforeUpdate(v4, w4)), S(n2, y(H = null != a4 && a4.type === k && null == a4.key ? a4.props.children : a4) ? H : [H], u4, t3, i4, o4, r3, f4, e3, c4, s4), h4.base = u4.__e, u4.__u &= -161, h4.__h.length && f4.push(h4), g2 && (h4.__E = h4.__ = null);
        } catch (n3) {
          u4.__v = null, c4 || null != r3 ? (u4.__e = e3, u4.__u |= c4 ? 160 : 32, r3[r3.indexOf(e3)] = null) : (u4.__e = t3.__e, u4.__k = t3.__k), l.__e(n3, u4, t3);
        }
      else
        null == r3 && u4.__v === t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : u4.__e = z(t3.__e, u4, t3, i4, o4, r3, f4, c4, s4);
    (a4 = l.diffed) && a4(u4);
  }
  function j(n2, u4, t3) {
    u4.__d = void 0;
    for (var i4 = 0; i4 < t3.length; i4++)
      N(t3[i4], t3[++i4], t3[++i4]);
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function z(l4, u4, t3, i4, o4, r3, f4, e3, c4) {
    var s4, a4, p4, v4, d4, _3, g2, m3 = t3.props, k3 = u4.props, b3 = u4.type;
    if ("svg" === b3 ? o4 = "http://www.w3.org/2000/svg" : "math" === b3 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != r3) {
      for (s4 = 0; s4 < r3.length; s4++)
        if ((d4 = r3[s4]) && "setAttribute" in d4 == !!b3 && (b3 ? d4.localName === b3 : 3 === d4.nodeType)) {
          l4 = d4, r3[s4] = null;
          break;
        }
    }
    if (null == l4) {
      if (null === b3)
        return document.createTextNode(k3);
      l4 = document.createElementNS(o4, b3, k3.is && k3), r3 = null, e3 = false;
    }
    if (null === b3)
      m3 === k3 || e3 && l4.data === k3 || (l4.data = k3);
    else {
      if (r3 = r3 && n.call(l4.childNodes), m3 = t3.props || h, !e3 && null != r3)
        for (m3 = {}, s4 = 0; s4 < l4.attributes.length; s4++)
          m3[(d4 = l4.attributes[s4]).name] = d4.value;
      for (s4 in m3)
        if (d4 = m3[s4], "children" == s4)
          ;
        else if ("dangerouslySetInnerHTML" == s4)
          p4 = d4;
        else if ("key" !== s4 && !(s4 in k3)) {
          if ("value" == s4 && "defaultValue" in k3 || "checked" == s4 && "defaultChecked" in k3)
            continue;
          A(l4, s4, null, d4, o4);
        }
      for (s4 in k3)
        d4 = k3[s4], "children" == s4 ? v4 = d4 : "dangerouslySetInnerHTML" == s4 ? a4 = d4 : "value" == s4 ? _3 = d4 : "checked" == s4 ? g2 = d4 : "key" === s4 || e3 && "function" != typeof d4 || m3[s4] === d4 || A(l4, s4, d4, m3[s4], o4);
      if (a4)
        e3 || p4 && (a4.__html === p4.__html || a4.__html === l4.innerHTML) || (l4.innerHTML = a4.__html), u4.__k = [];
      else if (p4 && (l4.innerHTML = ""), S(l4, y(v4) ? v4 : [v4], u4, t3, i4, "foreignObject" === b3 ? "http://www.w3.org/1999/xhtml" : o4, r3, f4, r3 ? r3[0] : t3.__k && x(t3, 0), e3, c4), null != r3)
        for (s4 = r3.length; s4--; )
          null != r3[s4] && w(r3[s4]);
      e3 || (s4 = "value", void 0 !== _3 && (_3 !== l4[s4] || "progress" === b3 && !_3 || "option" === b3 && _3 !== m3[s4]) && A(l4, s4, _3, m3[s4], o4), s4 = "checked", void 0 !== g2 && g2 !== l4[s4] && A(l4, s4, g2, m3[s4], o4));
    }
    return l4;
  }
  function N(n2, u4, t3) {
    try {
      "function" == typeof n2 ? n2(u4) : n2.current = u4;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function V(n2, u4, t3) {
    var i4, o4;
    if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || N(i4, null, u4)), null != (i4 = n2.__c)) {
      if (i4.componentWillUnmount)
        try {
          i4.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u4);
        }
      i4.base = i4.__P = null;
    }
    if (i4 = n2.__k)
      for (o4 = 0; o4 < i4.length; o4++)
        i4[o4] && V(i4[o4], u4, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l4, u4) {
    return this.constructor(n2, u4);
  }
  function B(u4, t3, i4) {
    var o4, r3, f4, e3;
    l.__ && l.__(u4, t3), r3 = (o4 = "function" == typeof i4) ? null : i4 && i4.__k || t3.__k, f4 = [], e3 = [], O(t3, u4 = (!o4 && i4 || t3).__k = _(k, null, [u4]), r3 || h, h, t3.namespaceURI, !o4 && i4 ? [i4] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f4, !o4 && i4 ? i4 : r3 ? r3.__e : t3.firstChild, o4, e3), j(f4, u4, e3);
  }
  function G(n2, l4) {
    var u4 = { __c: l4 = "__cC" + a++, __: n2, Consumer: function(n3, l5) {
      return n3.children(l5);
    }, Provider: function(n3) {
      var u5, t3;
      return this.getChildContext || (u5 = [], (t3 = {})[l4] = this, this.getChildContext = function() {
        return t3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u5.some(function(n5) {
          n5.__e = true, M(n5);
        });
      }, this.sub = function(n4) {
        u5.push(n4);
        var l5 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u5.splice(u5.indexOf(n4), 1), l5 && l5.call(n4);
        };
      }), n3.children;
    } };
    return u4.Provider.__ = u4.Consumer.contextType = u4;
  }
  n = p.slice, l = { __e: function(n2, l4, u4, t3) {
    for (var i4, o4, r3; l4 = l4.__; )
      if ((i4 = l4.__c) && !i4.__)
        try {
          if ((o4 = i4.constructor) && null != o4.getDerivedStateFromError && (i4.setState(o4.getDerivedStateFromError(n2)), r3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, t3 || {}), r3 = i4.__d), r3)
            return i4.__E = i4;
        } catch (l5) {
          n2 = l5;
        }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, b.prototype.setState = function(n2, l4) {
    var u4;
    u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u4), this.props)), n2 && d(u4, n2), null != n2 && this.__v && (l4 && this._sb.push(l4), M(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l4) {
    return n2.__v.__b - l4.__v.__b;
  }, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

  // node_modules/preact/devtools/dist/devtools.module.js
  "undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.22.0", l, { Fragment: k, Component: b });

  // node_modules/preact/debug/dist/debug.module.js
  var o2 = {};
  function a2(e3) {
    return e3.type === k ? "Fragment" : "function" == typeof e3.type ? e3.type.displayName || e3.type.name : "string" == typeof e3.type ? e3.type : "#text";
  }
  var i2 = [];
  var s2 = [];
  function c2() {
    return i2.length > 0 ? i2[i2.length - 1] : null;
  }
  var l2 = true;
  function u2(e3) {
    return "function" == typeof e3.type && e3.type != k;
  }
  function f2(n2) {
    for (var e3 = [n2], t3 = n2; null != t3.__o; )
      e3.push(t3.__o), t3 = t3.__o;
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
    return n2 ? "function" == typeof n2.type ? null === n2.__ ? null !== n2.__e && null !== n2.__e.parentNode ? n2.__e.parentNode.localName : "" : h2(n2.__) : n2.type : "";
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
    for (var r3 in e3)
      if (e3.hasOwnProperty(r3) && "children" !== r3) {
        var i4 = e3[r3];
        "function" == typeof i4 && (i4 = "function " + (i4.displayName || i4.name) + "() {}"), i4 = Object(i4) !== i4 || i4.toString ? i4 + "" : Object.prototype.toString.call(i4), o4 += " " + r3 + "=" + JSON.stringify(i4);
      }
    var s4 = e3.children;
    return "<" + t3 + o4 + (s4 && s4.length ? ">..</" + t3 + ">" : " />");
  }
  b.prototype.forceUpdate = function(n2) {
    return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f2(c2())) : null == this.__P && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f2(this.__v)), b2.call(this, n2);
  }, function() {
    !function() {
      var n3 = l.__b, t4 = l.diffed, o4 = l.__, r4 = l.vnode, a4 = l.__r;
      l.diffed = function(n4) {
        u2(n4) && s2.pop(), i2.pop(), t4 && t4(n4);
      }, l.__b = function(e3) {
        u2(e3) && i2.push(e3), n3 && n3(e3);
      }, l.__ = function(n4, e3) {
        s2 = [], o4 && o4(n4, e3);
      }, l.vnode = function(n4) {
        n4.__o = s2.length > 0 ? s2[s2.length - 1] : null, r4 && r4(n4);
      }, l.__r = function(n4) {
        u2(n4) && s2.push(n4), a4 && a4(n4);
      };
    }();
    var n2 = false, t3 = l.__b, r3 = l.diffed, c4 = l.vnode, l4 = l.__r, v4 = l.__e, b3 = l.__, g2 = l.__h, E = p2 ? { useEffect: /* @__PURE__ */ new WeakMap(), useLayoutEffect: /* @__PURE__ */ new WeakMap(), lazyPropTypes: /* @__PURE__ */ new WeakMap() } : null, k3 = [];
    l.__e = function(n3, e3, t4, o4) {
      if (e3 && e3.__c && "function" == typeof n3.then) {
        var r4 = n3;
        n3 = new Error("Missing Suspense. The throwing component was: " + a2(e3));
        for (var i4 = e3; i4; i4 = i4.__)
          if (i4.__c && i4.__c.__c) {
            n3 = r4;
            break;
          }
        if (n3 instanceof Error)
          throw n3;
      }
      try {
        (o4 = o4 || {}).componentStack = f2(e3), v4(n3, e3, t4, o4), "function" != typeof n3.then && setTimeout(function() {
          throw n3;
        });
      } catch (n4) {
        throw n4;
      }
    }, l.__ = function(n3, e3) {
      if (!e3)
        throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
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
      var r4 = e3.type;
      if (n2 = true, void 0 === r4)
        throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + w2(e3) + "\n\n" + f2(e3));
      if (null != r4 && "object" == typeof r4) {
        if (void 0 !== r4.__k && void 0 !== r4.__e)
          throw new Error("Invalid type passed to createElement(): " + r4 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a2(e3) + " = " + w2(r4) + ";\n  let vnode = <My" + a2(e3) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f2(e3));
        throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r4) ? "array" : r4));
      }
      if (void 0 !== e3.ref && "function" != typeof e3.ref && "object" != typeof e3.ref && !("$$typeof" in e3))
        throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof e3.ref + "] instead\n" + w2(e3) + "\n\n" + f2(e3));
      if ("string" == typeof e3.type) {
        for (var i4 in e3.props)
          if ("o" === i4[0] && "n" === i4[1] && "function" != typeof e3.props[i4] && null != e3.props[i4])
            throw new Error(`Component's "` + i4 + '" property should be a function, but got [' + typeof e3.props[i4] + "] instead\n" + w2(e3) + "\n\n" + f2(e3));
      }
      if ("function" == typeof e3.type && e3.type.propTypes) {
        if ("Lazy" === e3.type.displayName && E && !E.lazyPropTypes.has(e3.type)) {
          var s4 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
          try {
            var c5 = e3.type();
            E.lazyPropTypes.set(e3.type, true), console.warn(s4 + "Component wrapped in lazy() is " + a2(c5));
          } catch (n3) {
            console.warn(s4 + "We will log the wrapped component's name once it is loaded.");
          }
        }
        var l5 = e3.props;
        e3.type.__f && delete (l5 = function(n3, e4) {
          for (var t4 in e4)
            n3[t4] = e4[t4];
          return n3;
        }({}, l5)).ref, function(n3, e4, t4, r5, a4) {
          Object.keys(n3).forEach(function(t5) {
            var i5;
            try {
              i5 = n3[t5](e4, t5, r5, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (n4) {
              i5 = n4;
            }
            i5 && !(i5.message in o2) && (o2[i5.message] = true, console.error("Failed prop type: " + i5.message + (a4 && "\n" + a4() || "")));
          });
        }(e3.type.propTypes, l5, 0, a2(e3), function() {
          return f2(e3);
        });
      }
      t3 && t3(e3);
    };
    var _3, T2 = 0;
    l.__r = function(e3) {
      l4 && l4(e3), n2 = true;
      var t4 = e3.__c;
      if (t4 === _3 ? T2++ : T2 = 1, T2 >= 25)
        throw new Error("Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: " + a2(e3));
      _3 = t4;
    }, l.__h = function(e3, t4, o4) {
      if (!e3 || !n2)
        throw new Error("Hook can only be invoked from render methods.");
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
          var r4 = e3[o4];
          "__source" === o4 ? n3.__source = r4 : "__self" === o4 ? n3.__self = r4 : t4[o4] = r4;
        }
      }
      n3.__proto__ = O2, c4 && c4(n3);
    }, l.diffed = function(e3) {
      var t4, o4 = e3.type, i4 = e3.__;
      if (e3.__k && e3.__k.forEach(function(n3) {
        if ("object" == typeof n3 && n3 && void 0 === n3.type) {
          var t5 = Object.keys(n3).join(",");
          throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t5 + "}.\n\n" + f2(e3));
        }
      }), e3.__c === _3 && (T2 = 0), "string" == typeof o4 && (y2(o4) || "p" === o4 || "a" === o4 || "button" === o4)) {
        var s4 = h2(i4);
        if ("" !== s4)
          "table" === o4 && "td" !== s4 && y2(s4) ? (console.log(s4, i4.__e), console.error("Improper nesting of table. Your <table> should not have a table-node parent." + w2(e3) + "\n\n" + f2(e3))) : "thead" !== o4 && "tfoot" !== o4 && "tbody" !== o4 || "table" === s4 ? "tr" === o4 && "thead" !== s4 && "tfoot" !== s4 && "tbody" !== s4 ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent." + w2(e3) + "\n\n" + f2(e3)) : "td" === o4 && "tr" !== s4 ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + w2(e3) + "\n\n" + f2(e3)) : "th" === o4 && "tr" !== s4 && console.error("Improper nesting of table. Your <th> should have a <tr>." + w2(e3) + "\n\n" + f2(e3)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + w2(e3) + "\n\n" + f2(e3));
        else if ("p" === o4) {
          var c5 = d2(e3).filter(function(n3) {
            return m.test(n3);
          });
          c5.length && console.error("Improper nesting of paragraph. Your <p> should not have " + c5.join(", ") + "as child-elements." + w2(e3) + "\n\n" + f2(e3));
        } else
          "a" !== o4 && "button" !== o4 || -1 !== d2(e3).indexOf(o4) && console.error("Improper nesting of interactive content. Your <" + o4 + "> should not have other " + ("a" === o4 ? "anchor" : "button") + " tags as child-elements." + w2(e3) + "\n\n" + f2(e3));
      }
      if (n2 = false, r3 && r3(e3), null != e3.__k)
        for (var l5 = [], u4 = 0; u4 < e3.__k.length; u4++) {
          var p4 = e3.__k[u4];
          if (p4 && null != p4.key) {
            var v5 = p4.key;
            if (-1 !== l5.indexOf(v5)) {
              console.error('Following component has two or more children with the same key attribute: "' + v5 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + w2(e3) + "\n\n" + f2(e3));
              break;
            }
            l5.push(v5);
          }
        }
      if (null != e3.__c && null != e3.__c.__H) {
        var b4 = e3.__c.__H.__;
        if (b4)
          for (var g3 = 0; g3 < b4.length; g3 += 1) {
            var E2 = b4[g3];
            if (E2.__H) {
              for (var k4 = 0; k4 < E2.__H.length; k4++)
                if ((t4 = E2.__H[k4]) != t4) {
                  var I3 = a2(e3);
                  throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + g3 + " in component " + I3 + " was called with NaN.");
                }
            }
          }
      }
    };
  }();

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u3;
  var i3;
  var o3 = 0;
  var f3 = [];
  var c3 = [];
  var e2 = l;
  var a3 = e2.__b;
  var v3 = e2.__r;
  var l3 = e2.diffed;
  var m2 = e2.__c;
  var s3 = e2.unmount;
  var d3 = e2.__;
  function h3(n2, t3) {
    e2.__h && e2.__h(r2, n2, o3 || t3), o3 = 0;
    var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u4.__.length && u4.__.push({ __V: c3 }), u4.__[n2];
  }
  function p3(n2) {
    return o3 = 1, y3(D, n2);
  }
  function y3(n2, u4, i4) {
    var o4 = h3(t2++, 2);
    if (o4.t = n2, !o4.__c && (o4.__ = [i4 ? i4(u4) : D(void 0, u4), function(n3) {
      var t3 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t3, n3);
      t3 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.u)) {
      var f4 = function(n3, t3, r3) {
        if (!o4.__c.__H)
          return true;
        var u5 = o4.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u5.every(function(n4) {
          return !n4.__N;
        }))
          return !c4 || c4.call(this, n3, t3, r3);
        var i5 = false;
        return u5.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i5 = true);
          }
        }), !(!i5 && o4.__c.props === n3) && (!c4 || c4.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c4 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u5 = c4;
          c4 = void 0, f4(n3, t3, r3), c4 = u5;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f4;
    }
    return o4.__N || o4.__;
  }
  function _2(n2, u4) {
    var i4 = h3(t2++, 3);
    !e2.__s && C2(i4.__H, u4) && (i4.__ = n2, i4.i = u4, r2.__H.__h.push(i4));
  }
  function P2(n2) {
    var u4 = r2.context[n2.__c], i4 = h3(t2++, 9);
    return i4.c = n2, u4 ? (null == i4.__ && (i4.__ = true, u4.sub(r2)), u4.props.value) : n2.__;
  }
  function j2() {
    for (var n2; n2 = f3.shift(); )
      if (n2.__P && n2.__H)
        try {
          n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
        } catch (t3) {
          n2.__H.__h = [], e2.__e(t3, n2.__v);
        }
  }
  e2.__b = function(n2) {
    r2 = null, a3 && a3(n2);
  }, e2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), d3 && d3(n2, t3);
  }, e2.__r = function(n2) {
    v3 && v3(n2), t2 = 0;
    var i4 = (r2 = n2.__c).__H;
    i4 && (u3 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c3, n3.__N = n3.i = void 0;
    })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t2 = 0)), u3 = r2;
  }, e2.diffed = function(n2) {
    l3 && l3(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f3.push(t3) && i3 === e2.requestAnimationFrame || ((i3 = e2.requestAnimationFrame) || w3)(j2)), t3.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.__V !== c3 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c3;
    })), u3 = r2 = null;
  }, e2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], e2.__e(r3, n3.__v);
      }
    }), m2 && m2(n2, t3);
  }, e2.unmount = function(n2) {
    s3 && s3(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && e2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w3(n2) {
    var t3, r3 = function() {
      clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u4 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u4 = n2.__c;
    "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // src/graphs/vertex.ts
  var NON_PLUS_ID_CHARS = "[a-z-0-9\\-\\(\\)\\[\\]_.]+$";
  var NON_PLUS_ID_PATTERN = new RegExp(NON_PLUS_ID_CHARS);
  function validChars(s4) {
    return NON_PLUS_ID_PATTERN.test(s4);
  }
  function vIDPattern(vtype) {
    if (!validChars(vtype))
      throw new Error(`'${vtype}' is not valid as a vid prefix.`);
    return new RegExp(`^${vtype}\\+${NON_PLUS_ID_CHARS}`);
  }

  // src/graphs/edge_table.ts
  var EdgeTable = class {
    constructor(type, fromTable, toTable) {
      this.type = type;
      this.fromTable = fromTable;
      this.toTable = toTable;
      if (!validChars(type))
        throw new Error(`'${type}' is not valid as an edge type.`);
    }
    #edge = /* @__PURE__ */ new Map();
    #adjFrom = /* @__PURE__ */ new Map();
    #adjTo = /* @__PURE__ */ new Map();
    /**
     * A single graph should not use two edge tables with the same key,
     * otherwise there could be edges with duplicate keys.
     */
    get tableKey() {
      const t3 = this.type;
      const from = this.fromTable.vtype;
      const to = this.toTable.vtype;
      return `${t3}~${from}~${to}`;
    }
    set(from, to, value) {
      const kft = this.#edgeKey(from, to);
      this.#edge.set(kft, value);
      this.#updateAdjacent(from, to, "add");
      return this;
    }
    get(from, to) {
      if (!this.validParams(from, to))
        throw new Error(`Invalid id(s) in edge: ${from} -> ${to}.`);
      return this.#edge.get(this.#edgeKey(from, to));
    }
    has(from, to) {
      if (!this.validParams(from, to))
        return false;
      return this.#edge.has(this.#edgeKey(from, to));
    }
    delete(from, to) {
      this.#updateAdjacent(from, to, "delete");
      return this.#edge.delete(this.#edgeKey(from, to));
    }
    /** Connect without setting any edge data. */
    connect(from, to) {
      const key = this.#edgeKey(from, to);
      let edata = this.#edge.get(key);
      if (!edata) {
        this.#edge.set(key, edata = {});
      }
      this.#updateAdjacent(from, to, "add");
      return edata;
    }
    merge(from, to, value) {
      const key = this.#edgeKey(from, to);
      this.#updateAdjacent(from, to, "add");
      if (!this.#edge.has(key)) {
        this.#edge.set(key, value);
        return value;
      }
      const existing = this.#edge.get(key);
      Object.assign(existing, value);
      return existing;
    }
    validParams(from, to) {
      return this.fromTable.validParams(from) && this.toTable.validParams(to);
    }
    #edgeKey(from, to) {
      return `${from}~${to}`;
    }
    /** Yields keys parseable with {@link parseEdgeKey} and the data of the edge. */
    *[Symbol.iterator]() {
      for (const [key, edge] of this.#edge) {
        yield [`${this.type}~${key}`, edge];
      }
    }
    #updateAdjacent(from, to, operation) {
      if (!this.validParams(from, to))
        throw new Error(`Invalid id(s) in edge: ${from} -> ${to}`);
      if (!this.#adjFrom.has(from))
        this.#adjFrom.set(from, /* @__PURE__ */ new Set());
      if (!this.#adjTo.has(to))
        this.#adjTo.set(to, /* @__PURE__ */ new Set());
      if (operation === "add") {
        this.#adjFrom.get(from)?.add(to);
        this.#adjTo.get(to)?.add(from);
      } else {
        this.#adjFrom.get(from)?.delete(to);
        this.#adjTo.get(to)?.delete(from);
      }
    }
    /** Number of edges. */
    get size() {
      return this.#edge.size;
    }
    adjacentFrom(from) {
      return this.#adjFrom.get(from) ?? /* @__PURE__ */ new Set();
    }
    adjacentTo(to) {
      return this.#adjTo.get(to) ?? /* @__PURE__ */ new Set();
    }
    toJSON() {
      const result = {};
      for (const [key, value] of this.#edge.entries()) {
        result[key] = value;
      }
      return result;
    }
    loadJSON(edata) {
      for (const [kft, value] of Object.entries(edata)) {
        const [from, to] = kft.split("~");
        this.#updateAdjacent(from, to, "add");
        this.#edge.set(kft, value);
      }
    }
  };

  // src/graphs/vertex_table.ts
  var VertexTable = class {
    constructor(vtype) {
      this.vtype = vtype;
      this.#vdata = /* @__PURE__ */ new Map();
      this.vidPattern = vIDPattern(vtype);
    }
    #vdata;
    set(key, value) {
      if (!this.validParams(key))
        throw new Error(`invalid key: ${key} (pattern: ${this.vidPattern})`);
      this.#vdata.set(key, value);
      return this;
    }
    get(key) {
      if (!this.validParams(key))
        throw new Error(`invalid key: ${key}`);
      return this.#vdata.get(key);
    }
    has(key) {
      if (!this.validParams(key))
        throw new Error(`invalid key: ${key}`);
      return this.#vdata.has(key);
    }
    delete(key) {
      if (!this.validParams(key))
        throw new Error(`invalid key: ${key}`);
      return this.#vdata.delete(key);
    }
    /**
     * Declares there's an entry for the key:
     * - If the key is already in store, it will be left unchanged.
     * - If the key is not in store, it will be set to an empty object.
     * - Returns the data for the key.
     */
    declare(key) {
      if (!this.validParams(key))
        throw new Error(`invalid key: ${key}`);
      let v_data = this.#vdata.get(key);
      if (v_data === void 0) {
        v_data = {};
        this.#vdata.set(key, v_data);
      }
      return v_data;
    }
    merge(key, value) {
      if (!this.validParams(key))
        throw new Error(`invalid key: ${key}`);
      if (!this.#vdata.has(key)) {
        this.#vdata.set(key, {});
      }
      const vdata = Object.assign(this.#vdata.get(key), value);
      return vdata;
    }
    validParams(vid) {
      return this.vidPattern.test(vid);
    }
    keys() {
      return this.#vdata.keys();
    }
    [Symbol.iterator]() {
      return this.#vdata.entries();
    }
    toJSON() {
      const vdata = {};
      for (const [vid, data] of this.#vdata) {
        vdata[vid] = data;
      }
      return vdata;
    }
    loadJSON(vdata) {
      for (const [vid, data] of Object.entries(vdata).sort()) {
        this.set(vid, data);
      }
    }
    /** Number of vertices. */
    get size() {
      return this.#vdata.size;
    }
  };

  // src/graphs/graph.ts
  var Graph = class {
    constructor() {
      this.vtables = /* @__PURE__ */ new Map();
      this.etables = /* @__PURE__ */ new Map();
    }
    v_table(type) {
      const table = new VertexTable(type);
      if (this.vtables.has(type))
        throw new Error(`Table already defined: ${table.vtype}`);
      this.vtables.set(table.vtype, table);
      return table;
    }
    e_table(type, from, to) {
      if (type.length === 0)
        throw new Error("Type cannot be empty.");
      const table = new EdgeTable(type, from, to);
      if (this.etables.has(table.tableKey))
        throw new Error(`Table already defined: ${table.tableKey}`);
      this.etables.set(table.tableKey, table);
      return table;
    }
    get numEdges() {
      let count = 0;
      for (const et of this.etables.values()) {
        count += et.size;
      }
      return count;
    }
    get numVertices() {
      let count = 0;
      for (const vt of this.vtables.values()) {
        count += vt.size;
      }
      return count;
    }
    *allVertices() {
      for (const vt of this.vtables.values()) {
        yield* vt;
      }
    }
    *allEdges() {
      for (const et of this.etables.values()) {
        yield* et;
      }
    }
    toJSON() {
      const graph = { vtables: {}, etables: {} };
      for (const [key, val] of this.vtables) {
        console.log("Serializing vertex table:", key);
        graph.vtables[key] = val.toJSON();
      }
      for (const [key, val] of this.etables) {
        console.log("Serializing edge table:", key);
        graph.etables[key] = val.toJSON();
      }
      return graph;
    }
    loadJSON(data) {
      for (const [vtype, vdata] of Object.entries(data.vtables)) {
        const vt = this.vtables.get(vtype);
        if (!vt)
          throw new Error(`Vertex table not found: ${vtype}`);
        vt.loadJSON(vdata);
      }
      for (const [etype, edata] of Object.entries(data.etables)) {
        const et = this.etables.get(etype);
        if (!et)
          throw new Error(`Edge table not found: ${etype}`);
        et.loadJSON(edata);
      }
    }
  };

  // src/util.ts
  function caller(match, dontMatch = "") {
    function getErrorObject() {
      try {
        throw Error("");
      } catch (err2) {
        return err2;
      }
    }
    const err = getErrorObject();
    const caller_line = err.stack.split("\n").find((line) => line.includes(match) && (!dontMatch || !line.includes(dontMatch)));
    if (!caller_line)
      return "unknown";
    const index = caller_line.indexOf("at ");
    const clean = caller_line.slice(index + 2, caller_line.length);
    return clean.trim();
  }
  function arrayMerge(target, newData, similar, onDuplicate) {
    for (const newElem of newData) {
      const prevElem = target.find((elem) => similar(elem, newElem));
      if (prevElem) {
        onDuplicate(prevElem, newElem);
      } else {
        target.push(newElem);
      }
    }
  }
  function toggle(target, item) {
    target.has(item) ? target.delete(item) : target.add(item);
    return target;
  }
  function addAll(target, values) {
    for (const elem of values)
      target.add(elem);
    return target;
  }
  function hasAll(container, values) {
    for (const v4 of values)
      if (!container.has(v4))
        return false;
    return true;
  }
  function hasAny(container, values) {
    for (const v4 of values)
      if (container.has(v4))
        return true;
    return false;
  }

  // src/schemas/builders.ts
  var PlangBuilder = class {
    constructor(g2, vid) {
      this.g = g2;
      this.vid = vid;
      g2.v_plang.declare(vid);
    }
    merge(data) {
      const prev = { ...this.g.v_plang.get(this.vid) };
      const upd = this.g.v_plang.merge(this.vid, data);
      mergeExtensions(upd, prev);
      mergeImages(upd, prev);
      mergeReleases(upd, prev);
      mergeScoping(upd, prev);
      mergeWebsites(upd, prev);
      return this;
    }
    addDialect(other, data) {
      this.g.e_dialect_of.merge(other, this.vid, data);
      return this;
    }
    addDialects(others) {
      for (const other of others)
        this.g.e_dialect_of.connect(other, this.vid);
      return this;
    }
    addImplementation(other, data) {
      this.g.e_implements.merge(other, this.vid, data);
      return this;
    }
    addImplementations(others) {
      for (const other of others)
        this.g.e_implements.connect(other, this.vid);
      return this;
    }
    addInfluence(other, data) {
      this.g.e_l_influenced_l.merge(other, this.vid, data);
      return this;
    }
    addInfluences(others) {
      for (const other of others)
        this.g.e_l_influenced_l.connect(other, this.vid);
      return this;
    }
    addLicense(other, data) {
      this.g.e_has_license.merge(this.vid, other, data);
      return this;
    }
    addLicenses(others) {
      for (const other of others ?? [])
        this.g.e_has_license.connect(this.vid, other);
      return this;
    }
    addParadigm(other, data) {
      this.g.e_plang_para.merge(this.vid, other, data);
      return this;
    }
    addParadigms(others) {
      for (const otherVid of others ?? [])
        this.g.e_plang_para.connect(this.vid, otherVid);
      return this;
    }
    addPerson(other, data) {
      this.g.e_person_plang.merge(other, this.vid, data);
      return this;
    }
    addPeople(others) {
      for (const other of others ?? [])
        this.g.e_person_plang.connect(other, this.vid);
      return this;
    }
    addPlatform(other, data) {
      this.g.e_supports_platf.merge(this.vid, other, data);
      return this;
    }
    addPlatforms(others) {
      for (const other of others)
        this.g.e_supports_platf.connect(this.vid, other);
      return this;
    }
    addTypeSystem(other, data) {
      this.g.e_plang_tsys.merge(this.vid, other, data);
      return this;
    }
    addTypeSystems(others) {
      for (const other of others ?? [])
        this.g.e_plang_tsys.connect(this.vid, other);
      return this;
    }
  };
  var LicenseBuilder = class {
    constructor(g2, vid) {
      this.g = g2;
      this.vid = vid;
      g2.v_license.declare(this.vid);
    }
    merge(data) {
      const prev = { ...this.g.v_license.get(this.vid) };
      const upd = this.g.v_license.merge(this.vid, data);
      mergeWebsites(upd, prev);
      return this;
    }
  };
  var ParadigmBuilder = class {
    constructor(g2, vid) {
      this.g = g2;
      this.vid = vid;
      g2.v_paradigm.declare(this.vid);
    }
    merge(data) {
      const prev = { ...this.g.v_paradigm.get(this.vid) };
      const upd = this.g.v_paradigm.merge(this.vid, data);
      mergeWebsites(upd, prev);
      return this;
    }
  };
  var PersonBuilder = class {
    constructor(g2, vid) {
      this.g = g2;
      this.vid = vid;
      g2.v_person.declare(this.vid);
    }
    merge(data) {
      const prev = { ...this.g.v_person.get(this.vid) };
      const upd = this.g.v_person.merge(this.vid, data);
      mergeWebsites(upd, prev);
      return this;
    }
  };
  var PlatformBuilder = class {
    constructor(g2, vid) {
      this.g = g2;
      this.vid = vid;
      g2.v_platform.declare(this.vid);
    }
    merge(data) {
      const prev = { ...this.g.v_platform.get(this.vid) };
      const upd = this.g.v_platform.merge(this.vid, data);
      mergeWebsites(upd, prev);
      return this;
    }
  };
  var TypeSysBuilder = class {
    constructor(g2, vid) {
      this.g = g2;
      this.vid = vid;
      g2.v_tsystem.declare(this.vid);
    }
    merge(data) {
      const prev = { ...this.g.v_tsystem.get(this.vid) };
      const upd = this.g.v_tsystem.merge(this.vid, data);
      mergeWebsites(upd, prev);
      return this;
    }
  };
  var _CALLER_PATTERN = "definitions";
  function mergeWebsites(target, newData) {
    if (newData.websites === void 0)
      return;
    arrayMerge(
      target.websites ??= [],
      newData.websites,
      (l1, l22) => l1.href === l22.href,
      (prevLink, newLink) => {
        console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Link: ${JSON.stringify({ prevLink, newLink })}`);
      }
    );
  }
  function mergeImages(target, newData) {
    if (newData.images === void 0)
      return;
    arrayMerge(
      target.images ??= [],
      newData.images,
      (img1, img2) => img1.url === img2.url,
      (prevImage, newImage) => {
        console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Image: ${JSON.stringify({ prevImage, newImage })}`);
        prevImage.width ??= newImage.width;
        prevImage.height ??= newImage.height;
      }
    );
  }
  function mergeReleases(target, newData) {
    if (!newData.releases)
      return;
    arrayMerge(
      target.releases ??= [],
      newData.releases,
      (rel1, rel2) => rel1.version === rel2.version && rel1.date === rel2.date,
      (prevRel, newRel) => {
        console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Release: ${JSON.stringify({ prevRel, newRel })}`);
      }
    );
  }
  function mergeScoping(target, newData) {
    if (!newData.scoping)
      return;
    arrayMerge(
      target.scoping ??= [],
      newData.scoping,
      (scope1, scope2) => scope1 === scope2,
      (prevScope, newScope) => {
        console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Scope: ${newScope}`);
      }
    );
  }
  function mergeExtensions(target, newData) {
    if (newData.extensions === void 0)
      return;
    arrayMerge(
      target.extensions ??= [],
      newData.extensions,
      (ext1, ext2) => ext1 === ext2,
      (prevExt, newExt) => {
        console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Extension: ${newExt}`);
      }
    );
  }

  // src/schemas/graph.ts
  var PlangsGraph = class extends Graph {
    constructor() {
      super(...arguments);
      // Vertex tables.
      this.v_license = this.v_table("lic");
      this.v_paradigm = this.v_table("para");
      this.v_person = this.v_table("person");
      this.v_plang = this.v_table("pl");
      this.v_platform = this.v_table("platf");
      this.v_tsystem = this.v_table("tsys");
      // Edge Tables.
      this.e_dialect_of = this.e_table("dialect-of", this.v_plang, this.v_plang);
      this.e_has_license = this.e_table("has-license", this.v_plang, this.v_license);
      this.e_implements = this.e_table("implements", this.v_plang, this.v_plang);
      this.e_l_influenced_l = this.e_table("influenced", this.v_plang, this.v_plang);
      this.e_person_plang = this.e_table("had-role", this.v_person, this.v_plang);
      this.e_plang_para = this.e_table("paradigm", this.v_plang, this.v_paradigm);
      this.e_plang_tsys = this.e_table("type-system", this.v_plang, this.v_tsystem);
      this.e_supports_platf = this.e_table("supports-platf", this.v_plang, this.v_platform);
    }
    // Builders.
    buildLicense(vid) {
      return new LicenseBuilder(this, vid);
    }
    buildParadigm(vid) {
      return new ParadigmBuilder(this, vid);
    }
    buildPerson(vid) {
      return new PersonBuilder(this, vid);
    }
    buildPlang(vid) {
      return new PlangBuilder(this, vid);
    }
    buildPlatform(vid) {
      return new PlatformBuilder(this, vid);
    }
    buildTypeSystem(vid) {
      return new TypeSysBuilder(this, vid);
    }
  };

  // src/frontend/shared/state/plangs_context.ts
  var Plangs = G(void 0);
  async function loadPlangs() {
    try {
      const req = await fetch("/plangs.json");
      const plangData = await req.json();
      const pg = new PlangsGraph();
      pg.loadJSON(plangData);
      console.log("Loaded PlangsGraph:", pg.numVertices, "vertices", pg.numEdges, "edges");
      return pg;
    } catch (e3) {
      console.error("Failed to load plangs:", e3);
      return "error";
    }
  }

  // src/frontend/shared/start.tsx
  function ContextWrapper({ children }) {
    const [pg, setPg] = p3();
    _2(() => {
      if (pg)
        return;
      loadPlangs().then((pg2) => setPg(pg2));
    });
    return /* @__PURE__ */ _(Plangs.Provider, { value: pg }, children);
  }
  function start(cssId, app) {
    const elem = document.getElementById(cssId);
    if (!elem)
      throw new Error(`Element not found: ${cssId}`);
    B(/* @__PURE__ */ _(ContextWrapper, null, app), elem);
  }

  // src/frontend/browse/components/facets/options.tsx
  function OptionsFacet({ title, options, onChange }) {
    const [expanded, setExpanded] = p3(true);
    const tgExpand = () => setExpanded(!expanded);
    const [filter, setFilter] = p3({
      enabled: true,
      filterMode: "include",
      valuesMode: "any-of",
      values: /* @__PURE__ */ new Set()
    });
    const tgEnabled = () => setFilter({ ...filter, enabled: !filter.enabled });
    const tgFilterMode = (mode) => setFilter({ ...filter, filterMode: mode });
    const tgValuesMode = (mode) => setFilter({ ...filter, valuesMode: mode });
    const tgValue = (id) => setFilter({ ...filter, values: toggle(filter.values, id) });
    _2(() => {
      onChange?.(filter);
    }, [onChange, filter]);
    const input = (label, name, type, checked, action) => /* @__PURE__ */ _("label", null, /* @__PURE__ */ _(
      "input",
      {
        ...{ name, type, checked },
        onClick: action,
        onKeyPress: (e3) => {
          if (e3.key === "Enter" || e3.key === " ")
            action();
        }
      }
    ), label);
    const inputs = () => {
      const out = [];
      out.push(
        /* @__PURE__ */ _("div", { style: "border: 1px solid gray; margin: .25rem; border-radius: .25rem;" }, input("Enabled", "enabled", "radio", filter.enabled, tgEnabled), input("Disabled", "enabled", "radio", !filter.enabled, tgEnabled)),
        /* @__PURE__ */ _("div", { style: "border: 1px solid gray; margin: .25rem; border-radius: .25rem;" }, input("Include", "filterMode", "radio", filter.filterMode === "include", () => tgFilterMode("include")), input("Exclude", "filterMode", "radio", filter.filterMode === "exclude", () => tgFilterMode("exclude"))),
        /* @__PURE__ */ _("div", { style: "border: 1px solid gray; margin: .25rem; border-radius: .25rem;" }, input("Any of", "valuesMode", "radio", filter.valuesMode === "any-of", () => tgValuesMode("any-of")), input("All of", "valuesMode", "radio", filter.valuesMode === "all-of", () => tgValuesMode("all-of")))
      );
      for (const [id, name] of options) {
        out.push(input(name, id, "checkbox", filter.values.has(id), () => tgValue(id)));
      }
      return out;
    };
    return /* @__PURE__ */ _("div", { class: "options-facet" }, /* @__PURE__ */ _("div", { class: "title", onClick: tgExpand, onKeyDown: tgExpand }, title), /* @__PURE__ */ _("div", { class: "options" }, expanded ? inputs() : null));
  }

  // src/frontend/browse/components/plangs_table.tsx
  function PlangsTable({ pl_ids, allRowsCount }) {
    const pg = P2(Plangs);
    if (!pg || pg === "error")
      return /* @__PURE__ */ _(k, null);
    const rows = [];
    for (const vid of pl_ids) {
      const pl = pg.v_plang.get(vid);
      if (!pl) {
        console.error("Missing plang", vid);
        continue;
      }
      const logo = pl.images?.find((img) => img.kind === "logo");
      const homepage = pl.websites?.find((site) => site.kind === "homepage");
      const wikipage = pl.websites?.find((site) => site.kind === "wikipedia");
      rows.push(
        /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, logo ? /* @__PURE__ */ _("img", { src: logo.url, alt: pl.name, class: "logo" }) : null), /* @__PURE__ */ _("td", null, pl.name), /* @__PURE__ */ _("td", null, !homepage ? null : /* @__PURE__ */ _("a", { class: "plang", href: homepage.href, key: "homepage", target: "_blank" }, "home"), !wikipage ? null : /* @__PURE__ */ _("a", { class: "plang", href: wikipage.href, key: "wikipedia", target: "_blank" }, "wiki")))
      );
    }
    return /* @__PURE__ */ _("table", { class: "plangsTable" }, /* @__PURE__ */ _("caption", null, "Showing ", pl_ids.length, " of ", allRowsCount, " languages."), /* @__PURE__ */ _("thead", null, /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("th", null, "Logo"), /* @__PURE__ */ _("th", null, "Lang"), /* @__PURE__ */ _("th", null, "Websites"))), /* @__PURE__ */ _("tbody", null, rows));
  }

  // node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
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
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e3) {
    }
    var result = nativeObjectToString.call(value);
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
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // node_modules/lodash-es/_coreJsData.js
  var coreJsData = root_default["__core-js_shared__"];
  var coreJsData_default = coreJsData;

  // node_modules/lodash-es/_isMasked.js
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var isMasked_default = isMasked;

  // node_modules/lodash-es/_toSource.js
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e3) {
      }
      try {
        return func + "";
      } catch (e3) {
      }
    }
    return "";
  }
  var toSource_default = toSource;

  // node_modules/lodash-es/_baseIsNative.js
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto2 = Function.prototype;
  var objectProto3 = Object.prototype;
  var funcToString2 = funcProto2.toString;
  var hasOwnProperty2 = objectProto3.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
  }
  var baseIsNative_default = baseIsNative;

  // node_modules/lodash-es/_getValue.js
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  var getValue_default = getValue;

  // node_modules/lodash-es/_getNative.js
  function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default = getNative;

  // node_modules/lodash-es/_WeakMap.js
  var WeakMap2 = getNative_default(root_default, "WeakMap");
  var WeakMap_default = WeakMap2;

  // node_modules/lodash-es/_isIndex.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var isIndex_default = isIndex;

  // node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default = eq;

  // node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER2 = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var isLength_default = isLength;

  // node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // node_modules/lodash-es/_isPrototype.js
  var objectProto4 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto4;
    return value === proto;
  }
  var isPrototype_default = isPrototype;

  // node_modules/lodash-es/_baseTimes.js
  function baseTimes(n2, iteratee) {
    var index = -1, result = Array(n2);
    while (++index < n2) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default = baseTimes;

  // node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // node_modules/lodash-es/isArguments.js
  var objectProto5 = Object.prototype;
  var hasOwnProperty3 = objectProto5.hasOwnProperty;
  var propertyIsEnumerable = objectProto5.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(function() {
    return arguments;
  }()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // node_modules/lodash-es/isBuffer.js
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root_default.Buffer : void 0;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse_default;
  var isBuffer_default = isBuffer;

  // node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // node_modules/lodash-es/_nodeUtil.js
  var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess = moduleExports2 && freeGlobal_default.process;
  var nodeUtil = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e3) {
    }
  }();
  var nodeUtil_default = nodeUtil;

  // node_modules/lodash-es/isTypedArray.js
  var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // node_modules/lodash-es/_arrayLikeKeys.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty4 = objectProto6.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty4.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex_default(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var arrayLikeKeys_default = arrayLikeKeys;

  // node_modules/lodash-es/_overArg.js
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var overArg_default = overArg;

  // node_modules/lodash-es/_nativeKeys.js
  var nativeKeys = overArg_default(Object.keys, Object);
  var nativeKeys_default = nativeKeys;

  // node_modules/lodash-es/_baseKeys.js
  var objectProto7 = Object.prototype;
  var hasOwnProperty5 = objectProto7.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype_default(object)) {
      return nativeKeys_default(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty5.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeys_default = baseKeys;

  // node_modules/lodash-es/keys.js
  function keys(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
  }
  var keys_default = keys;

  // node_modules/lodash-es/_nativeCreate.js
  var nativeCreate = getNative_default(Object, "create");
  var nativeCreate_default = nativeCreate;

  // node_modules/lodash-es/_hashClear.js
  function hashClear() {
    this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
    this.size = 0;
  }
  var hashClear_default = hashClear;

  // node_modules/lodash-es/_hashDelete.js
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var hashDelete_default = hashDelete;

  // node_modules/lodash-es/_hashGet.js
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto8 = Object.prototype;
  var hasOwnProperty6 = objectProto8.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate_default) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty6.call(data, key) ? data[key] : void 0;
  }
  var hashGet_default = hashGet;

  // node_modules/lodash-es/_hashHas.js
  var objectProto9 = Object.prototype;
  var hasOwnProperty7 = objectProto9.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty7.call(data, key);
  }
  var hashHas_default = hashHas;

  // node_modules/lodash-es/_hashSet.js
  var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
    return this;
  }
  var hashSet_default = hashSet;

  // node_modules/lodash-es/_Hash.js
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear_default;
  Hash.prototype["delete"] = hashDelete_default;
  Hash.prototype.get = hashGet_default;
  Hash.prototype.has = hashHas_default;
  Hash.prototype.set = hashSet_default;
  var Hash_default = Hash;

  // node_modules/lodash-es/_listCacheClear.js
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  var listCacheClear_default = listCacheClear;

  // node_modules/lodash-es/_assocIndexOf.js
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_default(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var assocIndexOf_default = assocIndexOf;

  // node_modules/lodash-es/_listCacheDelete.js
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var listCacheDelete_default = listCacheDelete;

  // node_modules/lodash-es/_listCacheGet.js
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var listCacheGet_default = listCacheGet;

  // node_modules/lodash-es/_listCacheHas.js
  function listCacheHas(key) {
    return assocIndexOf_default(this.__data__, key) > -1;
  }
  var listCacheHas_default = listCacheHas;

  // node_modules/lodash-es/_listCacheSet.js
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var listCacheSet_default = listCacheSet;

  // node_modules/lodash-es/_ListCache.js
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear_default;
  ListCache.prototype["delete"] = listCacheDelete_default;
  ListCache.prototype.get = listCacheGet_default;
  ListCache.prototype.has = listCacheHas_default;
  ListCache.prototype.set = listCacheSet_default;
  var ListCache_default = ListCache;

  // node_modules/lodash-es/_Map.js
  var Map2 = getNative_default(root_default, "Map");
  var Map_default = Map2;

  // node_modules/lodash-es/_mapCacheClear.js
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash_default(),
      "map": new (Map_default || ListCache_default)(),
      "string": new Hash_default()
    };
  }
  var mapCacheClear_default = mapCacheClear;

  // node_modules/lodash-es/_isKeyable.js
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var isKeyable_default = isKeyable;

  // node_modules/lodash-es/_getMapData.js
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var getMapData_default = getMapData;

  // node_modules/lodash-es/_mapCacheDelete.js
  function mapCacheDelete(key) {
    var result = getMapData_default(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var mapCacheDelete_default = mapCacheDelete;

  // node_modules/lodash-es/_mapCacheGet.js
  function mapCacheGet(key) {
    return getMapData_default(this, key).get(key);
  }
  var mapCacheGet_default = mapCacheGet;

  // node_modules/lodash-es/_mapCacheHas.js
  function mapCacheHas(key) {
    return getMapData_default(this, key).has(key);
  }
  var mapCacheHas_default = mapCacheHas;

  // node_modules/lodash-es/_mapCacheSet.js
  function mapCacheSet(key, value) {
    var data = getMapData_default(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var mapCacheSet_default = mapCacheSet;

  // node_modules/lodash-es/_MapCache.js
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear_default;
  MapCache.prototype["delete"] = mapCacheDelete_default;
  MapCache.prototype.get = mapCacheGet_default;
  MapCache.prototype.has = mapCacheHas_default;
  MapCache.prototype.set = mapCacheSet_default;
  var MapCache_default = MapCache;

  // node_modules/lodash-es/_arrayPush.js
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  var arrayPush_default = arrayPush;

  // node_modules/lodash-es/_stackClear.js
  function stackClear() {
    this.__data__ = new ListCache_default();
    this.size = 0;
  }
  var stackClear_default = stackClear;

  // node_modules/lodash-es/_stackDelete.js
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  var stackDelete_default = stackDelete;

  // node_modules/lodash-es/_stackGet.js
  function stackGet(key) {
    return this.__data__.get(key);
  }
  var stackGet_default = stackGet;

  // node_modules/lodash-es/_stackHas.js
  function stackHas(key) {
    return this.__data__.has(key);
  }
  var stackHas_default = stackHas;

  // node_modules/lodash-es/_stackSet.js
  var LARGE_ARRAY_SIZE = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache_default) {
      var pairs = data.__data__;
      if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache_default(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var stackSet_default = stackSet;

  // node_modules/lodash-es/_Stack.js
  function Stack(entries) {
    var data = this.__data__ = new ListCache_default(entries);
    this.size = data.size;
  }
  Stack.prototype.clear = stackClear_default;
  Stack.prototype["delete"] = stackDelete_default;
  Stack.prototype.get = stackGet_default;
  Stack.prototype.has = stackHas_default;
  Stack.prototype.set = stackSet_default;
  var Stack_default = Stack;

  // node_modules/lodash-es/_arrayFilter.js
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var arrayFilter_default = arrayFilter;

  // node_modules/lodash-es/stubArray.js
  function stubArray() {
    return [];
  }
  var stubArray_default = stubArray;

  // node_modules/lodash-es/_getSymbols.js
  var objectProto10 = Object.prototype;
  var propertyIsEnumerable2 = objectProto10.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable2.call(object, symbol);
    });
  };
  var getSymbols_default = getSymbols;

  // node_modules/lodash-es/_baseGetAllKeys.js
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
  }
  var baseGetAllKeys_default = baseGetAllKeys;

  // node_modules/lodash-es/_getAllKeys.js
  function getAllKeys(object) {
    return baseGetAllKeys_default(object, keys_default, getSymbols_default);
  }
  var getAllKeys_default = getAllKeys;

  // node_modules/lodash-es/_DataView.js
  var DataView = getNative_default(root_default, "DataView");
  var DataView_default = DataView;

  // node_modules/lodash-es/_Promise.js
  var Promise2 = getNative_default(root_default, "Promise");
  var Promise_default = Promise2;

  // node_modules/lodash-es/_Set.js
  var Set2 = getNative_default(root_default, "Set");
  var Set_default = Set2;

  // node_modules/lodash-es/_getTag.js
  var mapTag2 = "[object Map]";
  var objectTag2 = "[object Object]";
  var promiseTag = "[object Promise]";
  var setTag2 = "[object Set]";
  var weakMapTag2 = "[object WeakMap]";
  var dataViewTag2 = "[object DataView]";
  var dataViewCtorString = toSource_default(DataView_default);
  var mapCtorString = toSource_default(Map_default);
  var promiseCtorString = toSource_default(Promise_default);
  var setCtorString = toSource_default(Set_default);
  var weakMapCtorString = toSource_default(WeakMap_default);
  var getTag = baseGetTag_default;
  if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
    getTag = function(value) {
      var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag2;
          case mapCtorString:
            return mapTag2;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag2;
          case weakMapCtorString:
            return weakMapTag2;
        }
      }
      return result;
    };
  }
  var getTag_default = getTag;

  // node_modules/lodash-es/_Uint8Array.js
  var Uint8Array = root_default.Uint8Array;
  var Uint8Array_default = Uint8Array;

  // node_modules/lodash-es/_setCacheAdd.js
  var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED3);
    return this;
  }
  var setCacheAdd_default = setCacheAdd;

  // node_modules/lodash-es/_setCacheHas.js
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  var setCacheHas_default = setCacheHas;

  // node_modules/lodash-es/_SetCache.js
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache_default();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
  SetCache.prototype.has = setCacheHas_default;
  var SetCache_default = SetCache;

  // node_modules/lodash-es/_arraySome.js
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  var arraySome_default = arraySome;

  // node_modules/lodash-es/_cacheHas.js
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  var cacheHas_default = cacheHas;

  // node_modules/lodash-es/_equalArrays.js
  var COMPARE_PARTIAL_FLAG = 1;
  var COMPARE_UNORDERED_FLAG = 2;
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome_default(other, function(othValue2, othIndex) {
          if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  var equalArrays_default = equalArrays;

  // node_modules/lodash-es/_mapToArray.js
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  var mapToArray_default = mapToArray;

  // node_modules/lodash-es/_setToArray.js
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var setToArray_default = setToArray;

  // node_modules/lodash-es/_equalByTag.js
  var COMPARE_PARTIAL_FLAG2 = 1;
  var COMPARE_UNORDERED_FLAG2 = 2;
  var boolTag2 = "[object Boolean]";
  var dateTag2 = "[object Date]";
  var errorTag2 = "[object Error]";
  var mapTag3 = "[object Map]";
  var numberTag2 = "[object Number]";
  var regexpTag2 = "[object RegExp]";
  var setTag3 = "[object Set]";
  var stringTag2 = "[object String]";
  var symbolTag = "[object Symbol]";
  var arrayBufferTag2 = "[object ArrayBuffer]";
  var dataViewTag3 = "[object DataView]";
  var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag3:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag2:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
          return false;
        }
        return true;
      case boolTag2:
      case dateTag2:
      case numberTag2:
        return eq_default(+object, +other);
      case errorTag2:
        return object.name == other.name && object.message == other.message;
      case regexpTag2:
      case stringTag2:
        return object == other + "";
      case mapTag3:
        var convert = mapToArray_default;
      case setTag3:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
        convert || (convert = setToArray_default);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG2;
        stack.set(object, other);
        var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  var equalByTag_default = equalByTag;

  // node_modules/lodash-es/_equalObjects.js
  var COMPARE_PARTIAL_FLAG3 = 1;
  var objectProto11 = Object.prototype;
  var hasOwnProperty8 = objectProto11.hasOwnProperty;
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty8.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  var equalObjects_default = equalObjects;

  // node_modules/lodash-es/_baseIsEqualDeep.js
  var COMPARE_PARTIAL_FLAG4 = 1;
  var argsTag3 = "[object Arguments]";
  var arrayTag2 = "[object Array]";
  var objectTag3 = "[object Object]";
  var objectProto12 = Object.prototype;
  var hasOwnProperty9 = objectProto12.hasOwnProperty;
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
    objTag = objTag == argsTag3 ? objectTag3 : objTag;
    othTag = othTag == argsTag3 ? objectTag3 : othTag;
    var objIsObj = objTag == objectTag3, othIsObj = othTag == objectTag3, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer_default(object)) {
      if (!isBuffer_default(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack_default());
      return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
      var objIsWrapped = objIsObj && hasOwnProperty9.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty9.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack_default());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack_default());
    return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
  }
  var baseIsEqualDeep_default = baseIsEqualDeep;

  // node_modules/lodash-es/_baseIsEqual.js
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  var baseIsEqual_default = baseIsEqual;

  // node_modules/lodash-es/isEqual.js
  function isEqual(value, other) {
    return baseIsEqual_default(value, other);
  }
  var isEqual_default = isEqual;

  // src/frontend/browse/state/plangs_query.ts
  function byTSys(pg, values, mode) {
    const result = /* @__PURE__ */ new Set();
    for (const vid of pg.v_plang.keys()) {
      const tsys = pg.e_plang_tsys.adjacentFrom(vid);
      if (mode === "all-of" ? hasAll(tsys, values) : hasAny(tsys, values))
        result.add(vid);
    }
    return result;
  }
  function filterPlangs(pg, filters) {
    const ids = [];
    const includes = /* @__PURE__ */ new Set();
    const excludes = /* @__PURE__ */ new Set();
    let useIncludes = false;
    let useExcludes = false;
    const ftTsys = filters.get("typeSystems");
    if (ftTsys?.enabled && ftTsys.values.size > 0) {
      if (ftTsys.filterMode === "include") {
        useIncludes = true;
        addAll(includes, byTSys(pg, ftTsys.values, ftTsys.valuesMode));
      } else {
        useExcludes = true;
        addAll(excludes, byTSys(pg, ftTsys.values, ftTsys.valuesMode));
      }
    }
    for (const vid of pg.v_plang.keys()) {
      if (useExcludes && excludes.has(vid))
        continue;
      if (useIncludes && !includes.has(vid))
        continue;
      ids.push(vid);
    }
    return ids;
  }
  function reducer(state, { key, filter }) {
    const { filters, pg } = state;
    if (key === "typeSystems")
      filters.set("typeSystems", filter);
    const pl_ids = filterPlangs(pg, filters);
    if (!isEqual_default(pl_ids, state.pl_ids))
      return { ...state, pl_ids };
    return state;
  }
  function usePlangsQuery(pg) {
    const pl_ids = [...pg.v_plang.keys()];
    const filters = /* @__PURE__ */ new Map();
    const initialState = { pg, filters, pl_ids };
    return y3(reducer, initialState);
  }

  // src/frontend/browse/browse.tsx
  function Browse() {
    const pg = P2(Plangs);
    if (!pg)
      return /* @__PURE__ */ _("div", null, "Loading...");
    if (pg === "error")
      return /* @__PURE__ */ _("div", null, "Sorry, there's been an error loading the data.");
    const [plangsQuery, update] = usePlangsQuery(pg);
    return /* @__PURE__ */ _(k, null, /* @__PURE__ */ _("nav", { class: "browseNav" }, /* @__PURE__ */ _(
      OptionsFacet,
      {
        title: "Type System",
        options: [...pg.v_tsystem].map(([vid, tsys]) => [vid, tsys.name ?? vid]),
        onChange: (filter) => update({ key: "typeSystems", filter })
      }
    )), /* @__PURE__ */ _("article", { class: "browseContent" }, /* @__PURE__ */ _(PlangsTable, { pl_ids: plangsQuery.pl_ids, allRowsCount: pg.v_plang.size })));
  }
  start("browse", /* @__PURE__ */ _(Browse, null));
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
//# sourceMappingURL=browse.js.map
