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
    var a4, h4, p4, v4, w4, _3, g2, m3, x2, C3, M2, P2, $2, I2, H, L2 = u4.type;
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
          if (h4.context = C3, h4.props = m3, h4.__P = n2, h4.__e = false, P2 = l.__r, $2 = 0, "prototype" in L2 && L2.prototype.render) {
            for (h4.state = h4.__s, h4.__d = false, P2 && P2(u4), a4 = h4.render(h4.props, h4.state, h4.context), I2 = 0; I2 < h4._sb.length; I2++)
              h4.__h.push(h4._sb[I2]);
            h4._sb = [];
          } else
            do {
              h4.__d = false, P2 && P2(u4), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
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

  // src/frontend/search/search.tsx
  function Search() {
    return /* @__PURE__ */ _(k, null, /* @__PURE__ */ _("label", { class: "search-label" }, "Search:", /* @__PURE__ */ _("input", { type: "query", id: "search-input", placeholder: "Search..." })), /* @__PURE__ */ _("div", { id: "search-results" }, "Search results..."));
  }
  start("search", /* @__PURE__ */ _(Search, null));
})();
//# sourceMappingURL=search.js.map
