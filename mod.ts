// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var D, a, Q, x, z, X, $, E = {}, O = [], oe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, F = Array.isArray;
function b(e, _) {
    for(var t in _)e[t] = _[t];
    return e;
}
function Z(e) {
    var _ = e.parentNode;
    _ && _.removeChild(e);
}
function S(e, _, t, i, n) {
    var r = {
        type: e,
        props: _,
        key: t,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: n ?? ++Q,
        __i: -1,
        __u: 0
    };
    return n == null && a.vnode != null && a.vnode(r), r;
}
function H(e) {
    return e.children;
}
function W(e, _) {
    this.props = e, this.context = _;
}
function w(e, _) {
    if (_ == null) return e.__ ? w(e.__, e.__i + 1) : null;
    for(var t; _ < e.__k.length; _++)if ((t = e.__k[_]) != null && t.__e != null) return t.__e;
    return typeof e.type == "function" ? w(e) : null;
}
function ie(e, _, t) {
    var i, n = e.__v, r = n.__e, l = e.__P;
    if (l) return (i = b({}, n)).__v = n.__v + 1, a.vnode && a.vnode(i), G(l, i, n, e.__n, l.ownerSVGElement !== void 0, 32 & n.__u ? [
        r
    ] : null, _, r ?? w(n), !!(32 & n.__u), t), i.__v = n.__v, i.__.__k[i.__i] = i, i.__d = void 0, i.__e != r && ee(i), i;
}
function ee(e) {
    var _, t;
    if ((e = e.__) != null && e.__c != null) {
        for(e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)if ((t = e.__k[_]) != null && t.__e != null) {
            e.__e = e.__c.base = t.__e;
            break;
        }
        return ee(e);
    }
}
function I(e) {
    (!e.__d && (e.__d = !0) && x.push(e) && !A.__r++ || z !== a.debounceRendering) && ((z = a.debounceRendering) || X)(A);
}
function A() {
    var e, _, t, i = [], n = [];
    for(x.sort($); e = x.shift();)e.__d && (t = x.length, _ = ie(e, i, n) || _, t === 0 || x.length > t ? (R(i, _, n), n.length = i.length = 0, _ = void 0, x.sort($)) : _ && a.__c && a.__c(_, O));
    _ && R(i, _, n), A.__r = 0;
}
function _e(e, _, t, i, n, r, l, u, c, s, p) {
    var o, m, f, h, k, v = i && i.__k || O, d = _.length;
    for(t.__d = c, le(t, _, v), c = t.__d, o = 0; o < d; o++)(f = t.__k[o]) != null && typeof f != "boolean" && typeof f != "function" && (m = f.__i === -1 ? E : v[f.__i] || E, f.__i = o, G(e, f, m, n, r, l, u, c, s, p), h = f.__e, f.ref && m.ref != f.ref && (m.ref && V(m.ref, null, f), p.push(f.ref, f.__c || h, f)), k == null && h != null && (k = h), 65536 & f.__u || m.__k === f.__k ? c = te(f, c, e) : typeof f.type == "function" && f.__d !== void 0 ? c = f.__d : h && (c = h.nextSibling), f.__d = void 0, f.__u &= -196609);
    t.__d = c, t.__e = k;
}
function le(e, _, t) {
    var i, n, r, l, u, c = _.length, s = t.length, p = s, o = 0;
    for(e.__k = [], i = 0; i < c; i++)l = i + o, (n = e.__k[i] = (n = _[i]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? S(null, n, null, null, null) : F(n) ? S(H, {
        children: n
    }, null, null, null) : n.constructor === void 0 && n.__b > 0 ? S(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = e, n.__b = e.__b + 1, u = ue(n, t, l, p), n.__i = u, r = null, u !== -1 && (p--, (r = t[u]) && (r.__u |= 131072)), r == null || r.__v === null ? (u == -1 && o--, typeof n.type != "function" && (n.__u |= 65536)) : u !== l && (u === l + 1 ? o++ : u > l ? p > c - l ? o += u - l : o-- : u < l ? u == l - 1 && (o = u - l) : o = 0, u !== i + o && (n.__u |= 65536))) : (r = t[l]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == e.__d && (e.__d = w(r)), B(r, r, !1), t[l] = null, p--);
    if (p) for(i = 0; i < s; i++)(r = t[i]) != null && !(131072 & r.__u) && (r.__e == e.__d && (e.__d = w(r)), B(r, r));
}
function te(e, _, t) {
    var i, n;
    if (typeof e.type == "function") {
        for(i = e.__k, n = 0; i && n < i.length; n++)i[n] && (i[n].__ = e, _ = te(i[n], _, t));
        return _;
    }
    e.__e != _ && (t.insertBefore(e.__e, _ || null), _ = e.__e);
    do _ = _ && _.nextSibling;
    while (_ != null && _.nodeType === 8)
    return _;
}
function ue(e, _, t, i) {
    var n = e.key, r = e.type, l = t - 1, u = t + 1, c = _[t];
    if (c === null || c && n == c.key && r === c.type && !(131072 & c.__u)) return t;
    if (i > (c != null && !(131072 & c.__u) ? 1 : 0)) for(; l >= 0 || u < _.length;){
        if (l >= 0) {
            if ((c = _[l]) && !(131072 & c.__u) && n == c.key && r === c.type) return l;
            l--;
        }
        if (u < _.length) {
            if ((c = _[u]) && !(131072 & c.__u) && n == c.key && r === c.type) return u;
            u++;
        }
    }
    return -1;
}
function q(e, _, t) {
    _[0] === "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || oe.test(_) ? t : t + "px";
}
function M(e, _, t, i, n) {
    var r;
    e: if (_ === "style") if (typeof t == "string") e.style.cssText = t;
    else {
        if (typeof i == "string" && (e.style.cssText = i = ""), i) for(_ in i)t && _ in t || q(e.style, _, "");
        if (t) for(_ in t)i && t[_] === i[_] || q(e.style, _, t[_]);
    }
    else if (_[0] === "o" && _[1] === "n") r = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + r] = t, t ? i ? t.u = i.u : (t.u = Date.now(), e.addEventListener(_, r ? K : J, r)) : e.removeEventListener(_, r ? K : J, r);
    else {
        if (n) _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (_ !== "width" && _ !== "height" && _ !== "href" && _ !== "list" && _ !== "form" && _ !== "tabIndex" && _ !== "download" && _ !== "rowSpan" && _ !== "colSpan" && _ !== "role" && _ in e) try {
            e[_] = t ?? "";
            break e;
        } catch  {}
        typeof t == "function" || (t == null || t === !1 && _[4] !== "-" ? e.removeAttribute(_) : e.setAttribute(_, t));
    }
}
function J(e) {
    if (this.l) {
        var _ = this.l[e.type + !1];
        if (e.t) {
            if (e.t <= _.u) return;
        } else e.t = Date.now();
        return _(a.event ? a.event(e) : e);
    }
}
function K(e) {
    if (this.l) return this.l[e.type + !0](a.event ? a.event(e) : e);
}
function G(e, _, t, i, n, r, l, u, c, s) {
    var p, o, m, f, h, k, v, d, y, C, T, P, j, U, N, g = _.type;
    if (_.constructor !== void 0) return null;
    128 & t.__u && (c = !!(32 & t.__u), r = [
        u = _.__e = t.__e
    ]), (p = a.__b) && p(_);
    e: if (typeof g == "function") try {
        if (d = _.props, y = (p = g.contextType) && i[p.__c], C = p ? y ? y.props.value : p.__ : i, t.__c ? v = (o = _.__c = t.__c).__ = o.__E : ("prototype" in g && g.prototype.render ? _.__c = o = new g(d, C) : (_.__c = o = new W(d, C), o.constructor = g, o.render = ce), y && y.sub(o), o.props = d, o.state || (o.state = {}), o.context = C, o.__n = i, m = o.__d = !0, o.__h = [], o._sb = []), o.__s == null && (o.__s = o.state), g.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = b({}, o.__s)), b(o.__s, g.getDerivedStateFromProps(d, o.__s))), f = o.props, h = o.state, o.__v = _, m) g.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), o.componentDidMount != null && o.__h.push(o.componentDidMount);
        else {
            if (g.getDerivedStateFromProps == null && d !== f && o.componentWillReceiveProps != null && o.componentWillReceiveProps(d, C), !o.__e && (o.shouldComponentUpdate != null && o.shouldComponentUpdate(d, o.__s, C) === !1 || _.__v === t.__v)) {
                for(_.__v !== t.__v && (o.props = d, o.state = o.__s, o.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.forEach(function(L) {
                    L && (L.__ = _);
                }), T = 0; T < o._sb.length; T++)o.__h.push(o._sb[T]);
                o._sb = [], o.__h.length && l.push(o);
                break e;
            }
            o.componentWillUpdate != null && o.componentWillUpdate(d, o.__s, C), o.componentDidUpdate != null && o.__h.push(function() {
                o.componentDidUpdate(f, h, k);
            });
        }
        if (o.context = C, o.props = d, o.__P = e, o.__e = !1, P = a.__r, j = 0, "prototype" in g && g.prototype.render) {
            for(o.state = o.__s, o.__d = !1, P && P(_), p = o.render(o.props, o.state, o.context), U = 0; U < o._sb.length; U++)o.__h.push(o._sb[U]);
            o._sb = [];
        } else do o.__d = !1, P && P(_), p = o.render(o.props, o.state, o.context), o.state = o.__s;
        while (o.__d && ++j < 25)
        o.state = o.__s, o.getChildContext != null && (i = b(b({}, i), o.getChildContext())), m || o.getSnapshotBeforeUpdate == null || (k = o.getSnapshotBeforeUpdate(f, h)), _e(e, F(N = p != null && p.type === H && p.key == null ? p.props.children : p) ? N : [
            N
        ], _, t, i, n, r, l, u, c, s), o.base = _.__e, _.__u &= -161, o.__h.length && l.push(o), v && (o.__E = o.__ = null);
    } catch (L) {
        _.__v = null, c || r != null ? (_.__e = u, _.__u |= c ? 160 : 32, r[r.indexOf(u)] = null) : (_.__e = t.__e, _.__k = t.__k), a.__e(L, _, t);
    }
    else r == null && _.__v === t.__v ? (_.__k = t.__k, _.__e = t.__e) : _.__e = fe(t.__e, _, t, i, n, r, l, c, s);
    (p = a.diffed) && p(_);
}
function R(e, _, t) {
    for(var i = 0; i < t.length; i++)V(t[i], t[++i], t[++i]);
    a.__c && a.__c(_, e), e.some(function(n) {
        try {
            e = n.__h, n.__h = [], e.some(function(r) {
                r.call(n);
            });
        } catch (r) {
            a.__e(r, n.__v);
        }
    });
}
function fe(e, _, t, i, n, r, l, u, c) {
    var s, p, o, m, f, h, k, v = t.props, d = _.props, y = _.type;
    if (y === "svg" && (n = !0), r != null) {
        for(s = 0; s < r.length; s++)if ((f = r[s]) && "setAttribute" in f == !!y && (y ? f.localName === y : f.nodeType === 3)) {
            e = f, r[s] = null;
            break;
        }
    }
    if (e == null) {
        if (y === null) return document.createTextNode(d);
        e = n ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, d.is && d), r = null, u = !1;
    }
    if (y === null) v === d || u && e.data === d || (e.data = d);
    else {
        if (r = r && D.call(e.childNodes), v = t.props || E, !u && r != null) for(v = {}, s = 0; s < e.attributes.length; s++)v[(f = e.attributes[s]).name] = f.value;
        for(s in v)f = v[s], s == "children" || (s == "dangerouslySetInnerHTML" ? o = f : s === "key" || s in d || M(e, s, null, f, n));
        for(s in d)f = d[s], s == "children" ? m = f : s == "dangerouslySetInnerHTML" ? p = f : s == "value" ? h = f : s == "checked" ? k = f : s === "key" || u && typeof f != "function" || v[s] === f || M(e, s, f, v[s], n);
        if (p) u || o && (p.__html === o.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html), _.__k = [];
        else if (o && (e.innerHTML = ""), _e(e, F(m) ? m : [
            m
        ], _, t, i, n && y !== "foreignObject", r, l, r ? r[0] : t.__k && w(t, 0), u, c), r != null) for(s = r.length; s--;)r[s] != null && Z(r[s]);
        u || (s = "value", h !== void 0 && (h !== e[s] || y === "progress" && !h || y === "option" && h !== v[s]) && M(e, s, h, v[s], !1), s = "checked", k !== void 0 && k !== e[s] && M(e, s, k, v[s], !1));
    }
    return e;
}
function V(e, _, t) {
    try {
        typeof e == "function" ? e(_) : e.current = _;
    } catch (i) {
        a.__e(i, t);
    }
}
function B(e, _, t) {
    var i, n;
    if (a.unmount && a.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || V(i, null, _)), (i = e.__c) != null) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (r) {
            a.__e(r, _);
        }
        i.base = i.__P = null, e.__c = void 0;
    }
    if (i = e.__k) for(n = 0; n < i.length; n++)i[n] && B(i[n], _, t || typeof e.type != "function");
    t || e.__e == null || Z(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ce(e, _, t) {
    return this.constructor(e, t);
}
D = O.slice, a = {
    __e: function(e, _, t, i) {
        for(var n, r, l; _ = _.__;)if ((n = _.__c) && !n.__) try {
            if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(e)), l = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e, i || {}), l = n.__d), l) return n.__E = n;
        } catch (u) {
            e = u;
        }
        throw e;
    }
}, Q = 0, W.prototype.setState = function(e, _) {
    var t;
    t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e == "function" && (e = e(b({}, t), this.props)), e && b(t, e), e != null && this.__v && (_ && this._sb.push(_), I(this));
}, W.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), I(this));
}, W.prototype.render = H, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e, _) {
    return e.__v.__b - _.__v.__b;
}, A.__r = 0, 0;
var d = 0, x1 = Array.isArray;
function g(t, r, e, a1, o, i) {
    var s, n, f = {};
    for(n in r)n == "ref" ? s = r[n] : f[n] = r[n];
    var u = {
        type: t,
        props: f,
        key: e,
        ref: s,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: --d,
        __i: -1,
        __u: 0,
        __source: o,
        __self: i
    };
    if (typeof t == "function" && (s = t.defaultProps)) for(n in s)f[n] === void 0 && (f[n] = s[n]);
    return a.vnode && a.vnode(u), u;
}
function parseJSON(content) {
    try {
        return JSON.parse(content);
    } catch (e) {
        return e;
    }
}
var Nt = Object.create;
var lt = Object.defineProperty;
var Zt = Object.getOwnPropertyDescriptor;
var $t = Object.getOwnPropertyNames;
var Ct = Object.getPrototypeOf, Ot = Object.prototype.hasOwnProperty;
var Vt = (n, t)=>()=>(t || n((t = {
            exports: {}
        }).exports, t), t.exports);
var Dt = (n, t, e, r)=>{
    if (t && typeof t == "object" || typeof t == "function") {
        for (let s of $t(t)){
            !Ot.call(n, s) && s !== e && lt(n, s, {
                get: ()=>t[s],
                enumerable: !(r = Zt(t, s)) || r.enumerable
            });
        }
    }
    return n;
};
var Pt = (n, t, e)=>(e = n != null ? Nt(Ct(n)) : {}, Dt(t || !n || !n.__esModule ? lt(e, "default", {
        value: n,
        enumerable: !0
    }) : e, n));
var dt = Vt(()=>{});
var Xt = Pt(dt(), 1);
var w1 = BigInt(0), m = BigInt(1), T = BigInt(2), L = BigInt(3), wt = BigInt(8), p = Object.freeze({
    a: w1,
    b: BigInt(7),
    P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    h: m,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
}), yt = (n, t)=>(n + t / T) / t, _ = {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar (n) {
        let { n: t } = p, e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -m * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), o = e, i = BigInt("0x100000000000000000000000000000000"), c = yt(o * n, t), h = yt(-r * n, t), a = f(n - c * e - h * s, t), u = f(-c * r - h * o, t), l = a > i, d = u > i;
        if (l && (a = t - a), d && (u = t - u), a > i || u > i) {
            throw new Error("splitScalarEndo: Endomorphism failed, k=" + n);
        }
        return {
            k1neg: l,
            k1: a,
            k2neg: d,
            k2: u
        };
    }
}, I1 = 32, $1 = 32, nt = I1 + 1, rt = 2 * I1 + 1;
function gt(n) {
    let { a: t, b: e } = p, r = f(n * n), s = f(r * n);
    return f(s + t * n + e);
}
var Q1 = p.a === w1, M1 = class extends Error {
    constructor(t){
        super(t);
    }
};
function pt(n) {
    if (!(n instanceof y)) throw new TypeError("JacobianPoint expected");
}
var y = class {
    constructor(t, e, r){
        this.x = t, this.y = e, this.z = r;
    }
    static fromAffine(t) {
        if (!(t instanceof g1)) throw new TypeError("JacobianPoint#fromAffine: expected Point");
        return t.equals(g1.ZERO) ? y.ZERO : new y(t.x, t.y, m);
    }
    static toAffineBatch(t) {
        let e = Yt(t.map((r)=>r.z));
        return t.map((r, s)=>r.toAffine(e[s]));
    }
    static normalizeZ(t) {
        return y.toAffineBatch(t).map(y.fromAffine);
    }
    equals(t) {
        pt(t);
        let { x: e, y: r, z: s } = this, { x: o, y: i, z: c } = t, h = f(s * s), a = f(c * c), u = f(e * a), l = f(o * h), d = f(f(r * c) * a), E = f(f(i * s) * h);
        return u === l && d === E;
    }
    negate() {
        return new y(this.x, f(-this.y), this.z);
    }
    double() {
        let { x: t, y: e, z: r } = this, s = f(t * t), o = f(e * e), i = f(o * o), c = t + o, h = f(T * (f(c * c) - s - i)), a = f(L * s), u = f(a * a), l = f(u - T * h), d = f(a * (h - l) - wt * i), E = f(T * e * r);
        return new y(l, d, E);
    }
    add(t) {
        pt(t);
        let { x: e, y: r, z: s } = this, { x: o, y: i, z: c } = t;
        if (o === w1 || i === w1) return this;
        if (e === w1 || r === w1) return t;
        let h = f(s * s), a = f(c * c), u = f(e * a), l = f(o * h), d = f(f(r * c) * a), E = f(f(i * s) * h), x = f(l - u), B = f(E - d);
        if (x === w1) return B === w1 ? this.double() : y.ZERO;
        let O = f(x * x), V = f(x * O), D = f(u * O), j = f(B * B - V - T * D), ft = f(B * (D - j) - d * V), W = f(s * c * x);
        return new y(j, ft, W);
    }
    subtract(t) {
        return this.add(t.negate());
    }
    multiplyUnsafe(t) {
        let e = y.ZERO;
        if (typeof t == "bigint" && t === w1) return e;
        let r = Et(t);
        if (r === m) return this;
        if (!Q1) {
            let l = e, d = this;
            for(; r > w1;)r & m && (l = l.add(d)), d = d.double(), r >>= m;
            return l;
        }
        let { k1neg: s, k1: o, k2neg: i, k2: c } = _.splitScalar(r), h = e, a = e, u = this;
        for(; o > w1 || c > w1;){
            o & m && (h = h.add(u)), c & m && (a = a.add(u)), u = u.double(), o >>= m, c >>= m;
        }
        return s && (h = h.negate()), i && (a = a.negate()), a = new y(f(a.x * _.beta), a.y, a.z), h.add(a);
    }
    precomputeWindow(t) {
        let e = Q1 ? 128 / t + 1 : 256 / t + 1, r = [], s = this, o = s;
        for(let i = 0; i < e; i++){
            o = s, r.push(o);
            for(let c = 1; c < 2 ** (t - 1); c++)o = o.add(s), r.push(o);
            s = o.double();
        }
        return r;
    }
    wNAF(t, e) {
        !e && this.equals(y.BASE) && (e = g1.BASE);
        let r = e && e._WINDOW_SIZE || 1;
        if (256 % r) throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
        let s = e && at.get(e);
        s || (s = this.precomputeWindow(r), e && r !== 1 && (s = y.normalizeZ(s), at.set(e, s)));
        let o = y.ZERO, i = y.BASE, c = 1 + (Q1 ? 128 / r : 256 / r), h = 2 ** (r - 1), a = BigInt(2 ** r - 1), u = 2 ** r, l = BigInt(r);
        for(let d = 0; d < c; d++){
            let E = d * h, x = Number(t & a);
            t >>= l, x > h && (x -= u, t += m);
            let B = E, O = E + Math.abs(x) - 1, V = d % 2 !== 0, D = x < 0;
            x === 0 ? i = i.add(J1(V, s[B])) : o = o.add(J1(D, s[O]));
        }
        return {
            p: o,
            f: i
        };
    }
    multiply(t, e) {
        let r = Et(t), s, o;
        if (Q1) {
            let { k1neg: i, k1: c, k2neg: h, k2: a } = _.splitScalar(r), { p: u, f: l } = this.wNAF(c, e), { p: d, f: E } = this.wNAF(a, e);
            u = J1(i, u), d = J1(h, d), d = new y(f(d.x * _.beta), d.y, d.z), s = u.add(d), o = l.add(E);
        } else {
            let { p: i, f: c } = this.wNAF(r, e);
            s = i, o = c;
        }
        return y.normalizeZ([
            s,
            o
        ])[0];
    }
    toAffine(t) {
        let { x: e, y: r, z: s } = this, o = this.equals(y.ZERO);
        t == null && (t = o ? wt : K1(s));
        let i = t, c = f(i * i), h = f(c * i), a = f(e * c), u = f(r * h), l = f(s * i);
        if (o) return g1.ZERO;
        if (l !== m) throw new Error("invZ was invalid");
        return new g1(a, u);
    }
};
y.BASE = new y(p.Gx, p.Gy, m);
y.ZERO = new y(w1, m, w1);
function J1(n, t) {
    let e = t.negate();
    return n ? e : t;
}
var at = new WeakMap(), g1 = class {
    constructor(t, e){
        this.x = t, this.y = e;
    }
    _setWindowSize(t) {
        this._WINDOW_SIZE = t, at.delete(this);
    }
    hasEvenY() {
        return this.y % T === w1;
    }
    static fromCompressedHex(t) {
        let e = t.length === 32, r = b1(e ? t : t.subarray(1));
        if (!et(r)) throw new Error("Point is not on curve");
        let s = gt(r), o = Wt(s), i = (o & m) === m;
        e ? i && (o = f(-o)) : (t[0] & 1) === 1 !== i && (o = f(-o));
        let c = new g1(r, o);
        return c.assertValidity(), c;
    }
    static fromUncompressedHex(t) {
        let e = b1(t.subarray(1, I1 + 1)), r = b1(t.subarray(I1 + 1, I1 * 2 + 1)), s = new g1(e, r);
        return s.assertValidity(), s;
    }
    static fromHex(t) {
        let e = R1(t), r = e.length, s = e[0];
        if (r === I1) return this.fromCompressedHex(e);
        if (r === nt && (s === 2 || s === 3)) return this.fromCompressedHex(e);
        if (r === rt && s === 4) return this.fromUncompressedHex(e);
        throw new Error(`Point.fromHex: received invalid point. Expected 32-${nt} compressed bytes or ${rt} uncompressed bytes, not ${r}`);
    }
    static fromPrivateKey(t) {
        return g1.BASE.multiply(C(t));
    }
    static fromSignature(t, e, r) {
        let { r: s, s: o } = At(e);
        if (![
            0,
            1,
            2,
            3
        ].includes(r)) throw new Error("Cannot recover: invalid recovery bit");
        let i = ht(R1(t)), { n: c } = p, h = r === 2 || r === 3 ? s + c : s, a = K1(h, c), u = f(-i * a, c), l = f(o * a, c), d = r & 1 ? "03" : "02", E = g1.fromHex(d + k(h)), x = g1.BASE.multiplyAndAddUnsafe(E, u, l);
        if (!x) throw new Error("Cannot recover signature: point at infinify");
        return x.assertValidity(), x;
    }
    toRawBytes(t = !1) {
        return N(this.toHex(t));
    }
    toHex(t = !1) {
        let e = k(this.x);
        return t ? `${this.hasEvenY() ? "02" : "03"}${e}` : `04${e}${k(this.y)}`;
    }
    toHexX() {
        return this.toHex(!0).slice(2);
    }
    toRawX() {
        return this.toRawBytes(!0).slice(1);
    }
    assertValidity() {
        let t = "Point is not on elliptic curve", { x: e, y: r } = this;
        if (!et(e) || !et(r)) throw new Error(t);
        let s = f(r * r), o = gt(e);
        if (f(s - o) !== w1) throw new Error(t);
    }
    equals(t) {
        return this.x === t.x && this.y === t.y;
    }
    negate() {
        return new g1(this.x, f(-this.y));
    }
    double() {
        return y.fromAffine(this).double().toAffine();
    }
    add(t) {
        return y.fromAffine(this).add(y.fromAffine(t)).toAffine();
    }
    subtract(t) {
        return this.add(t.negate());
    }
    multiply(t) {
        return y.fromAffine(this).multiply(t, this).toAffine();
    }
    multiplyAndAddUnsafe(t, e, r) {
        let s = y.fromAffine(this), o = e === w1 || e === m || this !== g1.BASE ? s.multiplyUnsafe(e) : s.multiply(e), i = y.fromAffine(t).multiplyUnsafe(r), c = o.add(i);
        return c.equals(y.ZERO) ? void 0 : c.toAffine();
    }
};
g1.BASE = new g1(p.Gx, p.Gy);
g1.ZERO = new g1(w1, w1);
function mt(n) {
    return Number.parseInt(n[0], 16) >= 8 ? "00" + n : n;
}
function xt(n) {
    if (n.length < 2 || n[0] !== 2) throw new Error(`Invalid signature integer tag: ${X1(n)}`);
    let t = n[1], e = n.subarray(2, t + 2);
    if (!t || e.length !== t) throw new Error("Invalid signature integer: wrong length");
    if (e[0] === 0 && e[1] <= 127) throw new Error("Invalid signature integer: trailing length");
    return {
        data: b1(e),
        left: n.subarray(t + 2)
    };
}
function qt(n) {
    if (n.length < 2 || n[0] != 48) throw new Error(`Invalid signature tag: ${X1(n)}`);
    if (n[1] !== n.length - 2) throw new Error("Invalid signature: incorrect length");
    let { data: t, left: e } = xt(n.subarray(2)), { data: r, left: s } = xt(e);
    if (s.length) throw new Error(`Invalid signature: left bytes after parsing: ${X1(s)}`);
    return {
        r: t,
        s: r
    };
}
var H1 = class {
    constructor(t, e){
        this.r = t, this.s = e, this.assertValidity();
    }
    static fromCompact(t) {
        let e = t instanceof Uint8Array, r = "Signature.fromCompact";
        if (typeof t != "string" && !e) throw new TypeError(`${r}: Expected string or Uint8Array`);
        let s = e ? X1(t) : t;
        if (s.length !== 128) throw new Error(`${r}: Expected 64-byte hex`);
        return new H1(st(s.slice(0, 64)), st(s.slice(64, 128)));
    }
    static fromDER(t) {
        let e = t instanceof Uint8Array;
        if (typeof t != "string" && !e) {
            throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
        }
        let { r, s } = qt(e ? t : N(t));
        return new H1(r, s);
    }
    static fromHex(t) {
        return this.fromDER(t);
    }
    assertValidity() {
        let { r: t, s: e } = this;
        if (!F1(t)) throw new Error("Invalid Signature: r must be 0 < r < n");
        if (!F1(e)) throw new Error("Invalid Signature: s must be 0 < s < n");
    }
    hasHighS() {
        let t = p.n >> m;
        return this.s > t;
    }
    normalizeS() {
        return this.hasHighS() ? new H1(this.r, f(-this.s, p.n)) : this;
    }
    toDERRawBytes() {
        return N(this.toDERHex());
    }
    toDERHex() {
        let t = mt(Y(this.s)), e = mt(Y(this.r)), r = t.length / 2, s = e.length / 2, o = Y(r), i = Y(s);
        return `30${Y(s + r + 4)}02${i}${e}02${o}${t}`;
    }
    toRawBytes() {
        return this.toDERRawBytes();
    }
    toHex() {
        return this.toDERHex();
    }
    toCompactRawBytes() {
        return N(this.toCompactHex());
    }
    toCompactHex() {
        return k(this.r) + k(this.s);
    }
};
function z1(...n) {
    if (!n.every((r)=>r instanceof Uint8Array)) throw new Error("Uint8Array list expected");
    if (n.length === 1) return n[0];
    let t = n.reduce((r, s)=>r + s.length, 0), e = new Uint8Array(t);
    for(let r = 0, s = 0; r < n.length; r++){
        let o = n[r];
        e.set(o, s), s += o.length;
    }
    return e;
}
var Ft = Array.from({
    length: 256
}, (n, t)=>t.toString(16).padStart(2, "0"));
function X1(n) {
    if (!(n instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    let t = "";
    for(let e = 0; e < n.length; e++)t += Ft[n[e]];
    return t;
}
var Kt = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function k(n) {
    if (typeof n != "bigint") throw new Error("Expected bigint");
    if (!(w1 <= n && n < Kt)) throw new Error("Expected number 0 <= n < 2^256");
    return n.toString(16).padStart(64, "0");
}
function q1(n) {
    let t = N(k(n));
    if (t.length !== 32) throw new Error("Error: expected 32 bytes");
    return t;
}
function Y(n) {
    let t = n.toString(16);
    return t.length & 1 ? `0${t}` : t;
}
function st(n) {
    if (typeof n != "string") throw new TypeError("hexToNumber: expected string, got " + typeof n);
    return BigInt(`0x${n}`);
}
function N(n) {
    if (typeof n != "string") throw new TypeError("hexToBytes: expected string, got " + typeof n);
    if (n.length % 2) throw new Error("hexToBytes: received invalid unpadded hex" + n.length);
    let t = new Uint8Array(n.length / 2);
    for(let e = 0; e < t.length; e++){
        let r = e * 2, s = n.slice(r, r + 2), o = Number.parseInt(s, 16);
        if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
        t[e] = o;
    }
    return t;
}
function b1(n) {
    return st(X1(n));
}
function R1(n) {
    return n instanceof Uint8Array ? Uint8Array.from(n) : N(n);
}
function Et(n) {
    if (typeof n == "number" && Number.isSafeInteger(n) && n > 0) return BigInt(n);
    if (typeof n == "bigint" && F1(n)) return n;
    throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function f(n, t = p.P) {
    let e = n % t;
    return e >= w1 ? e : t + e;
}
function v(n, t) {
    let { P: e } = p, r = n;
    for(; t-- > w1;)r *= r, r %= e;
    return r;
}
function Wt(n) {
    let { P: t } = p, e = BigInt(6), r = BigInt(11), s = BigInt(22), o = BigInt(23), i = BigInt(44), c = BigInt(88), h = n * n * n % t, a = h * h * n % t, u = v(a, L) * a % t, l = v(u, L) * a % t, d = v(l, T) * h % t, E = v(d, r) * d % t, x = v(E, s) * E % t, B = v(x, i) * x % t, O = v(B, c) * B % t, V = v(O, i) * x % t, D = v(V, L) * a % t, j = v(D, o) * E % t, ft = v(j, e) * h % t, W = v(ft, T);
    if (W * W % t !== n) throw new Error("Cannot find square root");
    return W;
}
function K1(n, t = p.P) {
    if (n === w1 || t <= w1) throw new Error(`invert: expected positive integers, got n=${n} mod=${t}`);
    let e = f(n, t), r = t, s = w1, o = m, i = m, c = w1;
    for(; e !== w1;){
        let a = r / e, u = r % e, l = s - i * a, d = o - c * a;
        r = e, e = u, s = i, o = c, i = l, c = d;
    }
    if (r !== m) throw new Error("invert: does not exist");
    return f(s, t);
}
function Yt(n, t = p.P) {
    let e = new Array(n.length), r = n.reduce((o, i, c)=>i === w1 ? o : (e[c] = o, f(o * i, t)), m), s = K1(r, t);
    return n.reduceRight((o, i, c)=>i === w1 ? o : (e[c] = f(o * e[c], t), f(o * i, t)), s), e;
}
function Lt(n) {
    let t = n.length * 8 - $1 * 8, e = b1(n);
    return t > 0 ? e >> BigInt(t) : e;
}
function ht(n, t = !1) {
    let e = Lt(n);
    if (t) return e;
    let { n: r } = p;
    return e >= r ? e - r : e;
}
var P, G1;
function F1(n) {
    return w1 < n && n < p.n;
}
function et(n) {
    return w1 < n && n < p.P;
}
function C(n) {
    let t;
    if (typeof n == "bigint") t = n;
    else if (typeof n == "number" && Number.isSafeInteger(n) && n > 0) t = BigInt(n);
    else if (typeof n == "string") {
        if (n.length !== 2 * $1) throw new Error("Expected 32 bytes of private key");
        t = st(n);
    } else if (n instanceof Uint8Array) {
        if (n.length !== $1) throw new Error("Expected 32 bytes of private key");
        t = b1(n);
    } else throw new TypeError("Expected valid private key");
    if (!F1(t)) throw new Error("Expected private key: 0 < key < n");
    return t;
}
function ut(n) {
    return n instanceof g1 ? (n.assertValidity(), n) : g1.fromHex(n);
}
function At(n) {
    if (n instanceof H1) return n.assertValidity(), n;
    try {
        return H1.fromDER(n);
    } catch  {
        return H1.fromCompact(n);
    }
}
function it(n) {
    return f(b1(n), p.n);
}
var Z1 = class {
    constructor(t, e){
        this.r = t, this.s = e, this.assertValidity();
    }
    static fromHex(t) {
        let e = R1(t);
        if (e.length !== 64) {
            throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${e.length}`);
        }
        let r = b1(e.subarray(0, 32)), s = b1(e.subarray(32, 64));
        return new Z1(r, s);
    }
    assertValidity() {
        let { r: t, s: e } = this;
        if (!et(t) || !F1(e)) throw new Error("Invalid signature");
    }
    toHex() {
        return k(this.r) + k(this.s);
    }
    toRawBytes() {
        return N(this.toHex());
    }
};
function jt(n) {
    return g1.fromPrivateKey(n).toRawX();
}
var ct = class {
    constructor(t, e, r = A1.randomBytes()){
        if (t == null) throw new TypeError(`sign: Expected valid message, not "${t}"`);
        this.m = R1(t);
        let { x: s, scalar: o } = this.getScalar(C(e));
        if (this.px = s, this.d = o, this.rand = R1(r), this.rand.length !== 32) {
            throw new TypeError("sign: Expected 32 bytes of aux randomness");
        }
    }
    getScalar(t) {
        let e = g1.fromPrivateKey(t), r = e.hasEvenY() ? t : p.n - t;
        return {
            point: e,
            scalar: r,
            x: e.toRawX()
        };
    }
    initNonce(t, e) {
        return q1(t ^ b1(e));
    }
    finalizeNonce(t) {
        let e = f(b1(t), p.n);
        if (e === w1) throw new Error("sign: Creation of signature failed. k is zero");
        let { point: r, x: s, scalar: o } = this.getScalar(e);
        return {
            R: r,
            rx: s,
            k: o
        };
    }
    finalizeSig(t, e, r, s) {
        return new Z1(t.x, f(e + r * s, p.n)).toRawBytes();
    }
    error() {
        throw new Error("sign: Invalid signature produced");
    }
    async calc() {
        let { m: t, d: e, px: r, rand: s } = this, o = A1.taggedHash, i = this.initNonce(e, await o(U.aux, s)), { R: c, rx: h, k: a } = this.finalizeNonce(await o(U.nonce, i, r, t)), u = it(await o(U.challenge, h, r, t)), l = this.finalizeSig(c, a, u, e);
        return await Tt(l, t, r) || this.error(), l;
    }
    calcSync() {
        let { m: t, d: e, px: r, rand: s } = this, o = A1.taggedHashSync, i = this.initNonce(e, o(U.aux, s)), { R: c, rx: h, k: a } = this.finalizeNonce(o(U.nonce, i, r, t)), u = it(o(U.challenge, h, r, t)), l = this.finalizeSig(c, a, u, e);
        return kt(l, t, r) || this.error(), l;
    }
};
async function _t(n, t, e) {
    return new ct(n, t, e).calc();
}
function Qt(n, t, e) {
    return new ct(n, t, e).calcSync();
}
function Ut(n, t, e) {
    let r = n instanceof Z1, s = r ? n : Z1.fromHex(n);
    return r && s.assertValidity(), {
        ...s,
        m: R1(t),
        P: ut(e)
    };
}
function zt(n, t, e, r) {
    let s = g1.BASE.multiplyAndAddUnsafe(t, C(e), f(-r, p.n));
    return !(!s || !s.hasEvenY() || s.x !== n);
}
async function Tt(n, t, e) {
    try {
        let { r, s, m: o, P: i } = Ut(n, t, e), c = it(await A1.taggedHash(U.challenge, q1(r), i.toRawX(), o));
        return zt(r, i, s, c);
    } catch  {
        return !1;
    }
}
function kt(n, t, e) {
    try {
        let { r, s, m: o, P: i } = Ut(n, t, e), c = it(A1.taggedHashSync(U.challenge, q1(r), i.toRawX(), o));
        return zt(r, i, s, c);
    } catch (r) {
        if (r instanceof M1) throw r;
        return !1;
    }
}
var ae = {
    Signature: Z1,
    getPublicKey: jt,
    sign: _t,
    verify: Tt,
    signSync: Qt,
    verifySync: kt
};
g1.BASE._setWindowSize(8);
var S1 = {
    node: Xt,
    web: typeof self == "object" && "crypto" in self ? self.crypto : void 0
}, U = {
    challenge: "BIP0340/challenge",
    aux: "BIP0340/aux",
    nonce: "BIP0340/nonce"
}, tt = {}, A1 = {
    bytesToHex: X1,
    hexToBytes: N,
    concatBytes: z1,
    mod: f,
    invert: K1,
    isValidPrivateKey (n) {
        try {
            return C(n), !0;
        } catch  {
            return !1;
        }
    },
    _bigintTo32Bytes: q1,
    _normalizePrivateKey: C,
    hashToPrivateKey: (n)=>{
        n = R1(n);
        let t = $1 + 8;
        if (n.length < t || n.length > 1024) {
            throw new Error("Expected valid bytes of private key as per FIPS 186");
        }
        let e = f(b1(n), p.n - m) + m;
        return q1(e);
    },
    randomBytes: (n = 32)=>{
        if (S1.web) return S1.web.getRandomValues(new Uint8Array(n));
        if (S1.node) {
            let { randomBytes: t } = S1.node;
            return Uint8Array.from(t(n));
        } else throw new Error("The environment doesn't have randomBytes function");
    },
    randomPrivateKey: ()=>A1.hashToPrivateKey(A1.randomBytes($1 + 8)),
    precompute (n = 8, t = g1.BASE) {
        let e = t === g1.BASE ? t : new g1(t.x, t.y);
        return e._setWindowSize(n), e.multiply(L), e;
    },
    sha256: async (...n)=>{
        if (S1.web) {
            let t = await S1.web.subtle.digest("SHA-256", z1(...n));
            return new Uint8Array(t);
        } else if (S1.node) {
            let { createHash: t } = S1.node, e = t("sha256");
            return n.forEach((r)=>e.update(r)), Uint8Array.from(e.digest());
        } else throw new Error("The environment doesn't have sha256 function");
    },
    hmacSha256: async (n, ...t)=>{
        if (S1.web) {
            let e = await S1.web.subtle.importKey("raw", n, {
                name: "HMAC",
                hash: {
                    name: "SHA-256"
                }
            }, !1, [
                "sign"
            ]), r = z1(...t), s = await S1.web.subtle.sign("HMAC", e, r);
            return new Uint8Array(s);
        } else if (S1.node) {
            let { createHmac: e } = S1.node, r = e("sha256", n);
            return t.forEach((s)=>r.update(s)), Uint8Array.from(r.digest());
        } else throw new Error("The environment doesn't have hmac-sha256 function");
    },
    sha256Sync: void 0,
    hmacSha256Sync: void 0,
    taggedHash: async (n, ...t)=>{
        let e = tt[n];
        if (e === void 0) {
            let r = await A1.sha256(Uint8Array.from(n, (s)=>s.charCodeAt(0)));
            e = z1(r, r), tt[n] = e;
        }
        return A1.sha256(e, ...t);
    },
    taggedHashSync: (n, ...t)=>{
        if (typeof P != "function") throw new M1("sha256Sync is undefined, you need to set it");
        let e = tt[n];
        if (e === void 0) {
            let r = P(Uint8Array.from(n, (s)=>s.charCodeAt(0)));
            e = z1(r, r), tt[n] = e;
        }
        return P(e, ...t);
    },
    _JacobianPoint: y
};
Object.defineProperties(A1, {
    sha256Sync: {
        configurable: !1,
        get () {
            return P;
        },
        set (n) {
            P || (P = n);
        }
    },
    hmacSha256Sync: {
        configurable: !1,
        get () {
            return G1;
        },
        set (n) {
            G1 || (G1 = n);
        }
    }
});
function g2(r) {
    if (!Number.isSafeInteger(r)) throw new Error(`Wrong integer: ${r}`);
}
function a1(...r) {
    let e = (o, t)=>(i)=>o(t(i)), n = Array.from(r).reverse().reduce((o, t)=>o ? e(o, t.encode) : t.encode, void 0), c = r.reduce((o, t)=>o ? e(o, t.decode) : t.decode, void 0);
    return {
        encode: n,
        decode: c
    };
}
function w2(r) {
    return {
        encode: (e)=>{
            if (!Array.isArray(e) || e.length && typeof e[0] != "number") {
                throw new Error("alphabet.encode input should be an array of numbers");
            }
            return e.map((n)=>{
                if (g2(n), n < 0 || n >= r.length) {
                    throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${r.length})`);
                }
                return r[n];
            });
        },
        decode: (e)=>{
            if (!Array.isArray(e) || e.length && typeof e[0] != "string") {
                throw new Error("alphabet.decode input should be array of strings");
            }
            return e.map((n)=>{
                if (typeof n != "string") throw new Error(`alphabet.decode: not string element=${n}`);
                let c = r.indexOf(n);
                if (c === -1) throw new Error(`Unknown letter: "${n}". Allowed: ${r}`);
                return c;
            });
        }
    };
}
function u(r = "") {
    if (typeof r != "string") throw new Error("join separator should be string");
    return {
        encode: (e)=>{
            if (!Array.isArray(e) || e.length && typeof e[0] != "string") {
                throw new Error("join.encode input should be array of strings");
            }
            for (let n of e)if (typeof n != "string") throw new Error(`join.encode: non-string input=${n}`);
            return e.join(r);
        },
        decode: (e)=>{
            if (typeof e != "string") throw new Error("join.decode input should be string");
            return e.split(r);
        }
    };
}
function x2(r, e = "=") {
    if (g2(r), typeof e != "string") throw new Error("padding chr should be string");
    return {
        encode (n) {
            if (!Array.isArray(n) || n.length && typeof n[0] != "string") {
                throw new Error("padding.encode input should be array of strings");
            }
            for (let c of n){
                if (typeof c != "string") throw new Error(`padding.encode: non-string input=${c}`);
            }
            for(; n.length * r % 8;)n.push(e);
            return n;
        },
        decode (n) {
            if (!Array.isArray(n) || n.length && typeof n[0] != "string") {
                throw new Error("padding.encode input should be array of strings");
            }
            for (let o of n){
                if (typeof o != "string") throw new Error(`padding.decode: non-string input=${o}`);
            }
            let c = n.length;
            if (c * r % 8) throw new Error("Invalid padding: string should have whole number of bytes");
            for(; c > 0 && n[c - 1] === e; c--){
                if (!((c - 1) * r % 8)) {
                    throw new Error("Invalid padding: string has too much padding");
                }
            }
            return n.slice(0, c);
        }
    };
}
function W1(r) {
    if (typeof r != "function") throw new Error("normalize fn should be function");
    return {
        encode: (e)=>e,
        decode: (e)=>r(e)
    };
}
function L1(r, e, n) {
    if (e < 2) throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);
    if (n < 2) throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);
    if (!Array.isArray(r)) throw new Error("convertRadix: data should be array");
    if (!r.length) return [];
    let c = 0, o = [], t = Array.from(r);
    for(t.forEach((i)=>{
        if (g2(i), i < 0 || i >= e) throw new Error(`Wrong integer: ${i}`);
    });;){
        let i = 0, h = !0;
        for(let d = c; d < t.length; d++){
            let A = t[d], s = e * i + A;
            if (!Number.isSafeInteger(s) || e * i / e !== i || s - A !== e * i) {
                throw new Error("convertRadix: carry overflow");
            }
            if (i = s % n, t[d] = Math.floor(s / n), !Number.isSafeInteger(t[d]) || t[d] * n + i !== s) {
                throw new Error("convertRadix: carry overflow");
            }
            if (h) t[d] ? h = !1 : c = d;
            else continue;
        }
        if (o.push(i), h) break;
    }
    for(let i = 0; i < r.length - 1 && r[i] === 0; i++)o.push(0);
    return o.reverse();
}
var j = (r, e)=>e ? j(e, r % e) : r, $2 = (r, e)=>r + (e - j(r, e));
function k1(r, e, n, c) {
    if (!Array.isArray(r)) throw new Error("convertRadix2: data should be array");
    if (e <= 0 || e > 32) throw new Error(`convertRadix2: wrong from=${e}`);
    if (n <= 0 || n > 32) throw new Error(`convertRadix2: wrong to=${n}`);
    if ($2(e, n) > 32) throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${$2(e, n)}`);
    let o = 0, t = 0, i = 2 ** n - 1, h = [];
    for (let d of r){
        if (g2(d), d >= 2 ** e) throw new Error(`convertRadix2: invalid data word=${d} from=${e}`);
        if (o = o << e | d, t + e > 32) throw new Error(`convertRadix2: carry overflow pos=${t} from=${e}`);
        for(t += e; t >= n; t -= n)h.push((o >> t - n & i) >>> 0);
        o &= 2 ** t - 1;
    }
    if (o = o << n - t & i, !c && t >= e) throw new Error("Excess padding");
    if (!c && o) throw new Error(`Non-zero padding: ${o}`);
    return c && t > 0 && h.push(o >>> 0), h;
}
function D1(r) {
    return g2(r), {
        encode: (e)=>{
            if (!(e instanceof Uint8Array)) throw new Error("radix.encode input should be Uint8Array");
            return L1(Array.from(e), 2 ** 8, r);
        },
        decode: (e)=>{
            if (!Array.isArray(e) || e.length && typeof e[0] != "number") {
                throw new Error("radix.decode input should be array of strings");
            }
            return Uint8Array.from(L1(e, r, 2 ** 8));
        }
    };
}
function p1(r, e = !1) {
    if (g2(r), r <= 0 || r > 32) throw new Error("radix2: bits should be in (0..32]");
    if ($2(8, r) > 32 || $2(r, 8) > 32) throw new Error("radix2: carry overflow");
    return {
        encode: (n)=>{
            if (!(n instanceof Uint8Array)) throw new Error("radix2.encode input should be Uint8Array");
            return k1(Array.from(n), 8, r, !e);
        },
        decode: (n)=>{
            if (!Array.isArray(n) || n.length && typeof n[0] != "number") {
                throw new Error("radix2.decode input should be array of strings");
            }
            return Uint8Array.from(k1(n, r, 8, e));
        }
    };
}
function N1(r) {
    if (typeof r != "function") throw new Error("unsafeWrapper fn should be function");
    return function(...e) {
        try {
            return r.apply(null, e);
        } catch  {}
    };
}
var H2 = a1(p1(4), w2("0123456789ABCDEF"), u("")), z2 = a1(p1(5), w2("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), x2(5), u("")), Z2 = a1(p1(5), w2("0123456789ABCDEFGHIJKLMNOPQRSTUV"), x2(5), u("")), q2 = a1(p1(5), w2("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), u(""), W1((r)=>r.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))), F2 = a1(p1(6), w2("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), x2(6), u("")), K2 = a1(p1(6), w2("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), x2(6), u("")), U1 = (r)=>a1(D1(58), w2(r), u("")), v1 = U1("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), rr = U1("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"), er = U1("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"), O1 = [
    0,
    2,
    3,
    5,
    6,
    7,
    9,
    10,
    11
], J2 = {
    encode (r) {
        let e = "";
        for(let n = 0; n < r.length; n += 8){
            let c = r.subarray(n, n + 8);
            e += v1.encode(c).padStart(O1[c.length], "1");
        }
        return e;
    },
    decode (r) {
        let e = [];
        for(let n = 0; n < r.length; n += 11){
            let c = r.slice(n, n + 11), o = O1.indexOf(c.length), t = v1.decode(c);
            for(let i = 0; i < t.length - o; i++){
                if (t[i] !== 0) {
                    throw new Error("base58xmr: wrong padding");
                }
            }
            e = e.concat(Array.from(t.slice(t.length - o)));
        }
        return Uint8Array.from(e);
    }
}, T1 = a1(w2("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), u("")), S2 = [
    996825010,
    642813549,
    513874426,
    1027748829,
    705979059
];
function E1(r) {
    let e = r >> 25, n = (r & 33554431) << 5;
    for(let c = 0; c < S2.length; c++)(e >> c & 1) === 1 && (n ^= S2[c]);
    return n;
}
function I2(r, e, n = 1) {
    let c = r.length, o = 1;
    for(let t = 0; t < c; t++){
        let i = r.charCodeAt(t);
        if (i < 33 || i > 126) throw new Error(`Invalid prefix (${r})`);
        o = E1(o) ^ i >> 5;
    }
    o = E1(o);
    for(let t = 0; t < c; t++)o = E1(o) ^ r.charCodeAt(t) & 31;
    for (let t of e)o = E1(o) ^ t;
    for(let t = 0; t < 6; t++)o = E1(o);
    return o ^= n, T1.encode(k1([
        o % 2 ** 30
    ], 30, 5, !1));
}
function M2(r) {
    let e = r === "bech32" ? 1 : 734539939, n = p1(5), c = n.decode, o = n.encode, t = N1(c);
    function i(s, f, l = 90) {
        if (typeof s != "string") throw new Error(`bech32.encode prefix should be string, not ${typeof s}`);
        if (!Array.isArray(f) || f.length && typeof f[0] != "number") {
            throw new Error(`bech32.encode words should be array of numbers, not ${typeof f}`);
        }
        let y = s.length + 7 + f.length;
        if (l !== !1 && y > l) throw new TypeError(`Length ${y} exceeds limit ${l}`);
        return s = s.toLowerCase(), `${s}1${T1.encode(f)}${I2(s, f, e)}`;
    }
    function h(s, f = 90) {
        if (typeof s != "string") throw new Error(`bech32.decode input should be string, not ${typeof s}`);
        if (s.length < 8 || f !== !1 && s.length > f) {
            throw new TypeError(`Wrong string length: ${s.length} (${s}). Expected (8..${f})`);
        }
        let l = s.toLowerCase();
        if (s !== l && s !== s.toUpperCase()) throw new Error("String must be lowercase or uppercase");
        s = l;
        let y = s.lastIndexOf("1");
        if (y === 0 || y === -1) throw new Error('Letter "1" must be present between prefix and data only');
        let R = s.slice(0, y), m = s.slice(y + 1);
        if (m.length < 6) throw new Error("Data must be at least 6 characters long");
        let C = T1.decode(m).slice(0, -6), B = I2(R, C, e);
        if (!m.endsWith(B)) throw new Error(`Invalid checksum in ${s}: expected "${B}"`);
        return {
            prefix: R,
            words: C
        };
    }
    let d = N1(h);
    function A(s) {
        let { prefix: f, words: l } = h(s, !1);
        return {
            prefix: f,
            words: l,
            bytes: c(l)
        };
    }
    return {
        encode: i,
        decode: h,
        decodeToBytes: A,
        decodeUnsafe: d,
        fromWords: c,
        fromWordsUnsafe: t,
        toWords: o
    };
}
var or = M2("bech32"), tr = M2("bech32m"), Q2 = {
    encode: (r)=>new TextDecoder().decode(r),
    decode: (r)=>new TextEncoder().encode(r)
}, V1 = a1(p1(4), w2("0123456789abcdef"), u(""), W1((r)=>{
    if (typeof r != "string" || r.length % 2) {
        throw new TypeError(`hex.decode: expected string, got ${typeof r} with length ${r.length}`);
    }
    return r.toLowerCase();
})), b2 = {
    utf8: Q2,
    hex: V1,
    base16: H2,
    base32: z2,
    base64: F2,
    base64url: K2,
    base58: v1,
    base58xmr: J2
}, G2 = `Invalid encoding type. Available types: ${Object.keys(b2).join(", ")}`;
class PublicKey {
    static FromString(key) {
        if (!isValidPublicKey(key)) {
            return new InvalidKey(key);
        }
        const hex = publicKeyHexFromNpub(key);
        if (hex instanceof Error) {
            return hex;
        }
        return new PublicKey(hex);
    }
    static FromHex(key) {
        if (!isValidPublicKey(key)) {
            return new InvalidKey(key);
        }
        return new PublicKey(key);
    }
    static FromBech32(key) {
        const hex = publicKeyHexFromNpub(key);
        if (hex instanceof Error) {
            return hex;
        }
        return new PublicKey(hex);
    }
    bech32() {
        const array = A1.hexToBytes(this.hex);
        const words = or.toWords(array);
        return or.encode("npub", words, 1500);
    }
    hex;
    constructor(key){
        this.hex = key;
    }
}
function publicKeyHexFromNpub(key) {
    try {
        const ok = isValidPublicKey(key);
        if (!ok) {
            return new InvalidKey(key);
        }
        if (key.substring(0, 4) === "npub") {
            const code = or.decode(key, 1500);
            const data = new Uint8Array(or.fromWords(code.words));
            return A1.bytesToHex(data);
        }
        return key;
    } catch (e) {
        return e;
    }
}
function isValidPublicKey(key) {
    return /^[0-9a-f]{64}$/.test(key) || /^npub[0-9a-z]{59}$/.test(key);
}
class InvalidKey extends Error {
    constructor(key){
        super(`key '${key}' is invalid`);
        this.name = "InvalidKey";
    }
}
new TextEncoder().encode("0123456789abcdef");
new TextEncoder();
new TextDecoder();
function utf8Encode(str) {
    let encoder = new TextEncoder();
    return encoder.encode(str);
}
var T2 = (t)=>new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
function u1(t) {
    return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
var l = (t)=>new DataView(t.buffer, t.byteOffset, t.byteLength), h = new Uint8Array(new Uint32Array([
    287454020
]).buffer)[0] === 68;
if (!h) throw new Error("Non little-endian hardware is not supported");
Array.from({
    length: 256
}, (t, e)=>e.toString(16).padStart(2, "0"));
function B1(t) {
    if (typeof t != "string") throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t));
}
function S3(t) {
    if (typeof t == "string") t = B1(t);
    else if (u1(t)) t = t.slice();
    else throw new Error(`expected Uint8Array, got ${typeof t}`);
    return t;
}
var _1 = (t)=>Object.prototype.toString.call(t) === "[object Object]" && t.constructor === Object;
function C1(t, e) {
    if (e !== void 0 && (typeof e != "object" || !_1(e))) throw new Error("options must be object or undefined");
    return Object.assign(t, e);
}
function D2(t, e) {
    if (!u1(t)) throw new Error("Uint8Array expected");
    if (typeof e == "number" && t.length !== e) throw new Error(`Uint8Array length ${e} expected`);
}
function L2(t, e) {
    if (t.length !== e.length) return !1;
    let r = 0;
    for(let n = 0; n < t.length; n++)r |= t[n] ^ e[n];
    return r === 0;
}
var k2 = (t, e)=>(Object.assign(e, t), e);
function x3(t, e, r, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, r, n);
    let i = BigInt(32), o = BigInt(4294967295), c = Number(r >> i & o), s = Number(r & o), p = n ? 4 : 0, w = n ? 0 : 4;
    t.setUint32(e + p, c, n), t.setUint32(e + w, s, n);
}
function _2(c) {
    return c != null && typeof c == "object" && (c instanceof Uint8Array || c.constructor.name === "Uint8Array");
}
function P1(c, ...t) {
    if (!_2(c)) throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(c.length)) throw new Error(`Uint8Array expected of length ${t}, not of length=${c.length}`);
}
function F3(c, t = !0) {
    if (c.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && c.finished) throw new Error("Hash#digest() has already been called");
}
function Z3(c, t) {
    P1(c);
    let r = t.outputLen;
    if (c.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
var h1 = (c, t)=>c[t++] & 255 | (c[t++] & 255) << 8, J3 = class {
    constructor(t){
        this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = !1, t = S3(t), D2(t, 32);
        let r = h1(t, 0), o = h1(t, 2), i = h1(t, 4), e = h1(t, 6), n = h1(t, 8), f = h1(t, 10), x = h1(t, 12), u = h1(t, 14);
        this.r[0] = r & 8191, this.r[1] = (r >>> 13 | o << 3) & 8191, this.r[2] = (o >>> 10 | i << 6) & 7939, this.r[3] = (i >>> 7 | e << 9) & 8191, this.r[4] = (e >>> 4 | n << 12) & 255, this.r[5] = n >>> 1 & 8190, this.r[6] = (n >>> 14 | f << 2) & 8191, this.r[7] = (f >>> 11 | x << 5) & 8065, this.r[8] = (x >>> 8 | u << 8) & 8191, this.r[9] = u >>> 5 & 127;
        for(let l = 0; l < 8; l++)this.pad[l] = h1(t, 16 + 2 * l);
    }
    process(t, r, o = !1) {
        let i = o ? 0 : 2048, { h: e, r: n } = this, f = n[0], x = n[1], u = n[2], l = n[3], p = n[4], d = n[5], w = n[6], a = n[7], b = n[8], g = n[9], O = h1(t, r + 0), Q = h1(t, r + 2), R = h1(t, r + 4), T = h1(t, r + 6), D = h1(t, r + 8), V = h1(t, r + 10), X = h1(t, r + 12), Y = h1(t, r + 14), y = e[0] + (O & 8191), m = e[1] + ((O >>> 13 | Q << 3) & 8191), L = e[2] + ((Q >>> 10 | R << 6) & 8191), A = e[3] + ((R >>> 7 | T << 9) & 8191), U = e[4] + ((T >>> 4 | D << 12) & 8191), E = e[5] + (D >>> 1 & 8191), $ = e[6] + ((D >>> 14 | V << 2) & 8191), I = e[7] + ((V >>> 11 | X << 5) & 8191), B = e[8] + ((X >>> 8 | Y << 8) & 8191), z = e[9] + (Y >>> 5 | i), s = 0, H = s + y * f + m * (5 * g) + L * (5 * b) + A * (5 * a) + U * (5 * w);
        s = H >>> 13, H &= 8191, H += E * (5 * d) + $ * (5 * p) + I * (5 * l) + B * (5 * u) + z * (5 * x), s += H >>> 13, H &= 8191;
        let j = s + y * x + m * f + L * (5 * g) + A * (5 * b) + U * (5 * a);
        s = j >>> 13, j &= 8191, j += E * (5 * w) + $ * (5 * d) + I * (5 * p) + B * (5 * l) + z * (5 * u), s += j >>> 13, j &= 8191;
        let v = s + y * u + m * x + L * f + A * (5 * g) + U * (5 * b);
        s = v >>> 13, v &= 8191, v += E * (5 * a) + $ * (5 * w) + I * (5 * d) + B * (5 * p) + z * (5 * l), s += v >>> 13, v &= 8191;
        let C = s + y * l + m * u + L * x + A * f + U * (5 * g);
        s = C >>> 13, C &= 8191, C += E * (5 * b) + $ * (5 * a) + I * (5 * w) + B * (5 * d) + z * (5 * p), s += C >>> 13, C &= 8191;
        let K = s + y * p + m * l + L * u + A * x + U * f;
        s = K >>> 13, K &= 8191, K += E * (5 * g) + $ * (5 * b) + I * (5 * a) + B * (5 * w) + z * (5 * d), s += K >>> 13, K &= 8191;
        let M = s + y * d + m * p + L * l + A * u + U * x;
        s = M >>> 13, M &= 8191, M += E * f + $ * (5 * g) + I * (5 * b) + B * (5 * a) + z * (5 * w), s += M >>> 13, M &= 8191;
        let N = s + y * w + m * d + L * p + A * l + U * u;
        s = N >>> 13, N &= 8191, N += E * x + $ * f + I * (5 * g) + B * (5 * b) + z * (5 * a), s += N >>> 13, N &= 8191;
        let S = s + y * a + m * w + L * d + A * p + U * l;
        s = S >>> 13, S &= 8191, S += E * u + $ * x + I * f + B * (5 * g) + z * (5 * b), s += S >>> 13, S &= 8191;
        let W = s + y * b + m * a + L * w + A * d + U * p;
        s = W >>> 13, W &= 8191, W += E * l + $ * u + I * x + B * f + z * (5 * g), s += W >>> 13, W &= 8191;
        let q = s + y * g + m * b + L * a + A * w + U * d;
        s = q >>> 13, q &= 8191, q += E * p + $ * l + I * u + B * x + z * f, s += q >>> 13, q &= 8191, s = (s << 2) + s | 0, s = s + H | 0, H = s & 8191, s = s >>> 13, j += s, e[0] = H, e[1] = j, e[2] = v, e[3] = C, e[4] = K, e[5] = M, e[6] = N, e[7] = S, e[8] = W, e[9] = q;
    }
    finalize() {
        let { h: t, pad: r } = this, o = new Uint16Array(10), i = t[1] >>> 13;
        t[1] &= 8191;
        for(let f = 2; f < 10; f++)t[f] += i, i = t[f] >>> 13, t[f] &= 8191;
        t[0] += i * 5, i = t[0] >>> 13, t[0] &= 8191, t[1] += i, i = t[1] >>> 13, t[1] &= 8191, t[2] += i, o[0] = t[0] + 5, i = o[0] >>> 13, o[0] &= 8191;
        for(let f = 1; f < 10; f++)o[f] = t[f] + i, i = o[f] >>> 13, o[f] &= 8191;
        o[9] -= 8192;
        let e = (i ^ 1) - 1;
        for(let f = 0; f < 10; f++)o[f] &= e;
        e = ~e;
        for(let f = 0; f < 10; f++)t[f] = t[f] & e | o[f];
        t[0] = (t[0] | t[1] << 13) & 65535, t[1] = (t[1] >>> 3 | t[2] << 10) & 65535, t[2] = (t[2] >>> 6 | t[3] << 7) & 65535, t[3] = (t[3] >>> 9 | t[4] << 4) & 65535, t[4] = (t[4] >>> 12 | t[5] << 1 | t[6] << 14) & 65535, t[5] = (t[6] >>> 2 | t[7] << 11) & 65535, t[6] = (t[7] >>> 5 | t[8] << 8) & 65535, t[7] = (t[8] >>> 8 | t[9] << 5) & 65535;
        let n = t[0] + r[0];
        t[0] = n & 65535;
        for(let f = 1; f < 8; f++)n = (t[f] + r[f] | 0) + (n >>> 16) | 0, t[f] = n & 65535;
    }
    update(t) {
        F3(this);
        let { buffer: r, blockLen: o } = this;
        t = S3(t);
        let i = t.length;
        for(let e = 0; e < i;){
            let n = Math.min(o - this.pos, i - e);
            if (n === o) {
                for(; o <= i - e; e += o)this.process(t, e);
                continue;
            }
            r.set(t.subarray(e, e + n), this.pos), this.pos += n, e += n, this.pos === o && (this.process(r, 0, !1), this.pos = 0);
        }
        return this;
    }
    destroy() {
        this.h.fill(0), this.r.fill(0), this.buffer.fill(0), this.pad.fill(0);
    }
    digestInto(t) {
        F3(this), Z3(t, this), this.finished = !0;
        let { buffer: r, h: o } = this, { pos: i } = this;
        if (i) {
            for(r[i++] = 1; i < 16; i++)r[i] = 0;
            this.process(r, 0, !0);
        }
        this.finalize();
        let e = 0;
        for(let n = 0; n < 8; n++)t[e++] = o[n] >>> 0, t[e++] = o[n] >>> 8;
        return t;
    }
    digest() {
        let { buffer: t, outputLen: r } = this;
        this.digestInto(t);
        let o = t.slice(0, r);
        return this.destroy(), o;
    }
};
function tt1(c) {
    let t = (o, i)=>c(i).update(S3(o)).digest(), r = c(new Uint8Array(32));
    return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = (o)=>c(o), t;
}
var rt1 = tt1((c)=>new J3(c));
function q3(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw new Error(`wrong positive integer: ${e}`);
}
function Y1(e) {
    if (typeof e != "boolean") throw new Error(`boolean expected, not ${e}`);
}
function ot(e) {
    return e != null && typeof e == "object" && (e instanceof Uint8Array || e.constructor.name === "Uint8Array");
}
function P2(e, ...o) {
    if (!ot(e)) throw new Error("Uint8Array expected");
    if (o.length > 0 && !o.includes(e.length)) throw new Error(`Uint8Array expected of length ${o}, not of length=${e.length}`);
}
var at1 = B1("expand 16-byte k"), it1 = B1("expand 32-byte k"), ct1 = T2(at1), ht1 = T2(it1);
function t(e, o) {
    return e << o | e >>> 32 - o;
}
function G3(e) {
    return e.byteOffset % 4 === 0;
}
var V2 = 64, lt1 = 16, D3 = 2 ** 32 - 1, Q3 = new Uint32Array;
function ft(e, o, p, s, c, i, n, a) {
    let r = c.length, h = new Uint8Array(V2), f = T2(h), x = G3(c) && G3(i), b = x ? T2(c) : Q3, u = x ? T2(i) : Q3;
    for(let y = 0; y < r; n++){
        if (e(o, p, s, f, n, a), n >= D3) throw new Error("arx: counter overflow");
        let w = Math.min(V2, r - y);
        if (x && w === V2) {
            let g = y / 4;
            if (y % 4 !== 0) throw new Error("arx: invalid block position");
            for(let l = 0, d; l < lt1; l++)d = g + l, u[d] = b[d] ^ f[l];
            y += V2;
            continue;
        }
        for(let g = 0, l; g < w; g++)l = y + g, i[l] = c[l] ^ h[g];
        y += w;
    }
}
function F4(e, o) {
    let { allowShortKeys: p, extendNonceFn: s, counterLength: c, counterRight: i, rounds: n } = C1({
        allowShortKeys: !1,
        counterLength: 8,
        counterRight: !1,
        rounds: 20
    }, o);
    if (typeof e != "function") throw new Error("core must be a function");
    return q3(c), q3(n), Y1(i), Y1(p), (a, r, h, f, x = 0)=>{
        P2(a), P2(r), P2(h);
        let b = h.length;
        if (f || (f = new Uint8Array(b)), P2(f), q3(x), x < 0 || x >= D3) throw new Error("arx: counter overflow");
        if (f.length < b) throw new Error(`arx: output (${f.length}) is shorter than data (${b})`);
        let u = [], y = a.length, w, g;
        if (y === 32) w = a.slice(), u.push(w), g = ht1;
        else if (y === 16 && p) w = new Uint8Array(32), w.set(a), w.set(a, 16), g = ct1, u.push(w);
        else throw new Error(`arx: invalid 32-byte key, got length=${y}`);
        G3(r) || (r = r.slice(), u.push(r));
        let l = T2(w);
        if (s) {
            if (r.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
            s(g, l, T2(r.subarray(0, 16)), l), r = r.subarray(16);
        }
        let d = 16 - c;
        if (d !== r.length) throw new Error(`arx: nonce must be ${d} or 16 bytes`);
        if (d !== 12) {
            let E = new Uint8Array(12);
            E.set(r, i ? 0 : 12 - r.length), r = E, u.push(r);
        }
        let L = T2(r);
        for(ft(e, g, l, L, h, f, x, n); u.length > 0;)u.pop().fill(0);
        return f;
    };
}
function Z4(e, o, p, s, c, i = 20) {
    let n = e[0], a = e[1], r = e[2], h = e[3], f = o[0], x = o[1], b = o[2], u = o[3], y = o[4], w = o[5], g = o[6], l = o[7], d = c, L = p[0], E = p[1], H = p[2], U = n, C = a, R = r, $ = h, A = f, B = x, K = b, _ = u, v = y, N = w, O = g, S = l, j = d, T = L, I = E, M = H;
    for(let J = 0; J < i; J += 2)U = U + A | 0, j = t(j ^ U, 16), v = v + j | 0, A = t(A ^ v, 12), U = U + A | 0, j = t(j ^ U, 8), v = v + j | 0, A = t(A ^ v, 7), C = C + B | 0, T = t(T ^ C, 16), N = N + T | 0, B = t(B ^ N, 12), C = C + B | 0, T = t(T ^ C, 8), N = N + T | 0, B = t(B ^ N, 7), R = R + K | 0, I = t(I ^ R, 16), O = O + I | 0, K = t(K ^ O, 12), R = R + K | 0, I = t(I ^ R, 8), O = O + I | 0, K = t(K ^ O, 7), $ = $ + _ | 0, M = t(M ^ $, 16), S = S + M | 0, _ = t(_ ^ S, 12), $ = $ + _ | 0, M = t(M ^ $, 8), S = S + M | 0, _ = t(_ ^ S, 7), U = U + B | 0, M = t(M ^ U, 16), O = O + M | 0, B = t(B ^ O, 12), U = U + B | 0, M = t(M ^ U, 8), O = O + M | 0, B = t(B ^ O, 7), C = C + K | 0, j = t(j ^ C, 16), S = S + j | 0, K = t(K ^ S, 12), C = C + K | 0, j = t(j ^ C, 8), S = S + j | 0, K = t(K ^ S, 7), R = R + _ | 0, T = t(T ^ R, 16), v = v + T | 0, _ = t(_ ^ v, 12), R = R + _ | 0, T = t(T ^ R, 8), v = v + T | 0, _ = t(_ ^ v, 7), $ = $ + A | 0, I = t(I ^ $, 16), N = N + I | 0, A = t(A ^ N, 12), $ = $ + A | 0, I = t(I ^ $, 8), N = N + I | 0, A = t(A ^ N, 7);
    let m = 0;
    s[m++] = n + U | 0, s[m++] = a + C | 0, s[m++] = r + R | 0, s[m++] = h + $ | 0, s[m++] = f + A | 0, s[m++] = x + B | 0, s[m++] = b + K | 0, s[m++] = u + _ | 0, s[m++] = y + v | 0, s[m++] = w + N | 0, s[m++] = g + O | 0, s[m++] = l + S | 0, s[m++] = d + j | 0, s[m++] = L + T | 0, s[m++] = E + I | 0, s[m++] = H + M | 0;
}
function xt1(e, o, p, s) {
    let c = e[0], i = e[1], n = e[2], a = e[3], r = o[0], h = o[1], f = o[2], x = o[3], b = o[4], u = o[5], y = o[6], w = o[7], g = p[0], l = p[1], d = p[2], L = p[3];
    for(let H = 0; H < 20; H += 2)c = c + r | 0, g = t(g ^ c, 16), b = b + g | 0, r = t(r ^ b, 12), c = c + r | 0, g = t(g ^ c, 8), b = b + g | 0, r = t(r ^ b, 7), i = i + h | 0, l = t(l ^ i, 16), u = u + l | 0, h = t(h ^ u, 12), i = i + h | 0, l = t(l ^ i, 8), u = u + l | 0, h = t(h ^ u, 7), n = n + f | 0, d = t(d ^ n, 16), y = y + d | 0, f = t(f ^ y, 12), n = n + f | 0, d = t(d ^ n, 8), y = y + d | 0, f = t(f ^ y, 7), a = a + x | 0, L = t(L ^ a, 16), w = w + L | 0, x = t(x ^ w, 12), a = a + x | 0, L = t(L ^ a, 8), w = w + L | 0, x = t(x ^ w, 7), c = c + h | 0, L = t(L ^ c, 16), y = y + L | 0, h = t(h ^ y, 12), c = c + h | 0, L = t(L ^ c, 8), y = y + L | 0, h = t(h ^ y, 7), i = i + f | 0, g = t(g ^ i, 16), w = w + g | 0, f = t(f ^ w, 12), i = i + f | 0, g = t(g ^ i, 8), w = w + g | 0, f = t(f ^ w, 7), n = n + x | 0, l = t(l ^ n, 16), b = b + l | 0, x = t(x ^ b, 12), n = n + x | 0, l = t(l ^ n, 8), b = b + l | 0, x = t(x ^ b, 7), a = a + r | 0, d = t(d ^ a, 16), u = u + d | 0, r = t(r ^ u, 12), a = a + r | 0, d = t(d ^ a, 8), u = u + d | 0, r = t(r ^ u, 7);
    let E = 0;
    s[E++] = c, s[E++] = i, s[E++] = n, s[E++] = a, s[E++] = g, s[E++] = l, s[E++] = d, s[E++] = L;
}
var At1 = F4(Z4, {
    counterRight: !1,
    counterLength: 8,
    allowShortKeys: !0
}), pt1 = F4(Z4, {
    counterRight: !1,
    counterLength: 4,
    allowShortKeys: !1
}), ut1 = F4(Z4, {
    counterRight: !1,
    counterLength: 8,
    extendNonceFn: xt1,
    allowShortKeys: !1
}), Bt = F4(Z4, {
    counterRight: !1,
    counterLength: 4,
    rounds: 8
}), Kt1 = F4(Z4, {
    counterRight: !1,
    counterLength: 4,
    rounds: 12
}), dt1 = new Uint8Array(16), tt2 = (e, o)=>{
    e.update(o);
    let p = o.length % 16;
    p && e.update(dt1.subarray(p));
}, bt = new Uint8Array(32);
function et1(e, o, p, s, c) {
    let i = e(o, p, bt), n = rt1.create(i);
    c && tt2(n, c), tt2(n, s);
    let a = new Uint8Array(16), r = l(a);
    x3(r, 0, BigInt(c ? c.length : 0), !0), x3(r, 8, BigInt(s.length), !0), n.update(a);
    let h = n.digest();
    return i.fill(0), h;
}
var nt1 = (e)=>(o, p, s)=>(D2(o, 32), D2(p), {
            encrypt: (i, n)=>{
                let a = i.length, r = a + 16;
                n ? D2(n, r) : n = new Uint8Array(r), e(o, p, i, n, 1);
                let h = et1(e, o, p, n.subarray(0, -16), s);
                return n.set(h, a), n;
            },
            decrypt: (i, n)=>{
                let a = i.length, r = a - 16;
                if (a < 16) throw new Error("encrypted data must be at least 16 bytes");
                n ? D2(n, r) : n = new Uint8Array(r);
                let h = i.subarray(0, -16), f = i.subarray(-16), x = et1(e, o, p, h, s);
                if (!L2(f, x)) throw new Error("invalid tag");
                return e(o, p, h, n, 1), n;
            }
        }), _t1 = k2({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
}, nt1(pt1)), vt = k2({
    blockSize: 64,
    nonceLength: 24,
    tagLength: 16
}, nt1(ut1));
function r(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
}
function f1(t) {
    return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function n(t, ...e) {
    if (!f1(t)) throw new Error("Expected Uint8Array");
    if (e.length > 0 && !e.includes(t.length)) throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
function u2(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    r(t.outputLen), r(t.blockLen);
}
function s(t, e = !0) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function c(t, e) {
    n(t);
    let o = e.outputLen;
    if (t.length < o) throw new Error(`digestInto() expects output buffer of length at least ${o}`);
}
var o = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function u3(t) {
    return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
var m1 = (t)=>new DataView(t.buffer, t.byteOffset, t.byteLength), U2 = (t, e)=>t << 32 - e | t >>> e, a2 = new Uint8Array(new Uint32Array([
    287454020
]).buffer)[0] === 68;
if (!a2) throw new Error("Non little-endian hardware is not supported");
Array.from({
    length: 256
}, (t, e)=>e.toString(16).padStart(2, "0"));
function b3(t) {
    if (typeof t != "string") throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t));
}
function s1(t) {
    if (typeof t == "string" && (t = b3(t)), !u3(t)) throw new Error(`expected Uint8Array, got ${typeof t}`);
    return t;
}
function B2(...t) {
    let e = 0;
    for(let n = 0; n < t.length; n++){
        let r = t[n];
        if (!u3(r)) throw new Error("Uint8Array expected");
        e += r.length;
    }
    let o = new Uint8Array(e);
    for(let n = 0, r = 0; n < t.length; n++){
        let i = t[n];
        o.set(i, r), r += i.length;
    }
    return o;
}
var w3 = class {
    clone() {
        return this._cloneInto();
    }
};
function j1(t) {
    let e = (n)=>t().update(s1(n)).digest(), o = t();
    return e.outputLen = o.outputLen, e.blockLen = o.blockLen, e.create = ()=>t(), e;
}
function D4(t = 32) {
    if (o && typeof o.getRandomValues == "function") return o.getRandomValues(new Uint8Array(t));
    throw new Error("crypto.getRandomValues must be defined");
}
function m2(u, t, n, e) {
    if (typeof u.setBigUint64 == "function") return u.setBigUint64(t, n, e);
    let i = BigInt(32), o = BigInt(4294967295), s = Number(n >> i & o), h = Number(n & o), f = e ? 4 : 0, c = e ? 0 : 4;
    u.setUint32(t + f, s, e), u.setUint32(t + c, h, e);
}
var b4 = class extends w3 {
    constructor(t, n, e, i){
        super(), this.blockLen = t, this.outputLen = n, this.padOffset = e, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = m1(this.buffer);
    }
    update(t) {
        s(this);
        let { view: n, buffer: e, blockLen: i } = this;
        t = s1(t);
        let o = t.length;
        for(let s = 0; s < o;){
            let h = Math.min(i - this.pos, o - s);
            if (h === i) {
                let f = m1(t);
                for(; i <= o - s; s += i)this.process(f, s);
                continue;
            }
            e.set(t.subarray(s, s + h), this.pos), this.pos += h, s += h, this.pos === i && (this.process(n, 0), this.pos = 0);
        }
        return this.length += t.length, this.roundClean(), this;
    }
    digestInto(t) {
        s(this), c(t, this), this.finished = !0;
        let { buffer: n, view: e, blockLen: i, isLE: o } = this, { pos: s1 } = this;
        n[s1++] = 128, this.buffer.subarray(s1).fill(0), this.padOffset > i - s1 && (this.process(e, 0), s1 = 0);
        for(let r = s1; r < i; r++)n[r] = 0;
        m2(e, i - 8, BigInt(this.length * 8), o), this.process(e, 0);
        let h = m1(t), f = this.outputLen;
        if (f % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        let c1 = f / 4, l = this.get();
        if (c1 > l.length) throw new Error("_sha2: outputLen bigger than state");
        for(let r = 0; r < c1; r++)h.setUint32(4 * r, l[r], o);
    }
    digest() {
        let { buffer: t, outputLen: n } = this;
        this.digestInto(t);
        let e = t.slice(0, n);
        return this.destroy(), e;
    }
    _cloneInto(t) {
        t || (t = new this.constructor), t.set(...this.get());
        let { blockLen: n, buffer: e, length: i, finished: o, destroyed: s, pos: h } = this;
        return t.length = i, t.pos = h, t.finished = o, t.destroyed = s, i % n && t.buffer.set(e), t;
    }
};
var D5 = (r, e, c)=>r & e ^ ~r & c, E2 = (r, e, c)=>r & e ^ r & c ^ e & c, F5 = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
]), o1 = new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
]), n1 = new Uint32Array(64), p2 = class extends b4 {
    constructor(){
        super(64, 32, 8, !1), this.A = o1[0] | 0, this.B = o1[1] | 0, this.C = o1[2] | 0, this.D = o1[3] | 0, this.E = o1[4] | 0, this.F = o1[5] | 0, this.G = o1[6] | 0, this.H = o1[7] | 0;
    }
    get() {
        let { A: e, B: c, C: t, D: a, E: i, F: h, G: s, H: f } = this;
        return [
            e,
            c,
            t,
            a,
            i,
            h,
            s,
            f
        ];
    }
    set(e, c, t, a, i, h, s, f) {
        this.A = e | 0, this.B = c | 0, this.C = t | 0, this.D = a | 0, this.E = i | 0, this.F = h | 0, this.G = s | 0, this.H = f | 0;
    }
    process(e, c) {
        for(let x = 0; x < 16; x++, c += 4)n1[x] = e.getUint32(c, !1);
        for(let x = 16; x < 64; x++){
            let A = n1[x - 15], l = n1[x - 2], H = U2(A, 7) ^ U2(A, 18) ^ A >>> 3, C = U2(l, 17) ^ U2(l, 19) ^ l >>> 10;
            n1[x] = C + n1[x - 7] + H + n1[x - 16] | 0;
        }
        let { A: t, B: a, C: i, D: h, E: s, F: f, G: d, H: u } = this;
        for(let x = 0; x < 64; x++){
            let A = U2(s, 6) ^ U2(s, 11) ^ U2(s, 25), l = u + A + D5(s, f, d) + F5[x] + n1[x] | 0, C = (U2(t, 2) ^ U2(t, 13) ^ U2(t, 22)) + E2(t, a, i) | 0;
            u = d, d = f, f = s, s = h + l | 0, h = i, i = a, a = t, t = l + C | 0;
        }
        t = t + this.A | 0, a = a + this.B | 0, i = i + this.C | 0, h = h + this.D | 0, s = s + this.E | 0, f = f + this.F | 0, d = d + this.G | 0, u = u + this.H | 0, this.set(t, a, i, h, s, f, d, u);
    }
    roundClean() {
        n1.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
}, m3 = class extends p2 {
    constructor(){
        super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
    }
}, y1 = j1(()=>new p2), U3 = j1(()=>new m3);
var b5 = BigInt(0), y2 = BigInt(1), B3 = BigInt(2);
function a3(t) {
    return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
var _3 = Array.from({
    length: 256
}, (t, e)=>e.toString(16).padStart(2, "0"));
function m4(t) {
    if (!a3(t)) throw new Error("Uint8Array expected");
    let e = "";
    for(let i = 0; i < t.length; i++)e += _3[t[i]];
    return e;
}
function U4(t) {
    let e = t.toString(16);
    return e.length & 1 ? `0${e}` : e;
}
function E3(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return BigInt(t === "" ? "0" : `0x${t}`);
}
var c1 = {
    _0: 48,
    _9: 57,
    _A: 65,
    _F: 70,
    _a: 97,
    _f: 102
};
function x4(t) {
    if (t >= c1._0 && t <= c1._9) return t - c1._0;
    if (t >= c1._A && t <= c1._F) return t - (c1._A - 10);
    if (t >= c1._a && t <= c1._f) return t - (c1._a - 10);
}
function w4(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    let e = t.length, i = e / 2;
    if (e % 2) throw new Error("padded hex string expected, got unpadded hex of length " + e);
    let r = new Uint8Array(i);
    for(let n = 0, o = 0; n < i; n++, o += 2){
        let l = x4(t.charCodeAt(o)), f = x4(t.charCodeAt(o + 1));
        if (l === void 0 || f === void 0) {
            let s = t[o] + t[o + 1];
            throw new Error('hex string expected, got non-hex character "' + s + '" at index ' + o);
        }
        r[n] = l * 16 + f;
    }
    return r;
}
function v2(t) {
    return E3(m4(t));
}
function N2(t) {
    if (!a3(t)) throw new Error("Uint8Array expected");
    return E3(m4(Uint8Array.from(t).reverse()));
}
function $3(t, e) {
    return w4(t.toString(16).padStart(e * 2, "0"));
}
function F6(t, e) {
    return $3(t, e).reverse();
}
function k3(t) {
    return w4(U4(t));
}
function O2(t, e, i) {
    let r;
    if (typeof e == "string") try {
        r = w4(e);
    } catch (o) {
        throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${o}`);
    }
    else if (a3(e)) r = Uint8Array.from(e);
    else throw new Error(`${t} must be hex string or Uint8Array`);
    let n = r.length;
    if (typeof i == "number" && n !== i) throw new Error(`${t} expected ${i} bytes, got ${n}`);
    return r;
}
function T3(...t) {
    let e = 0;
    for(let n = 0; n < t.length; n++){
        let o = t[n];
        if (!a3(o)) throw new Error("Uint8Array expected");
        e += o.length;
    }
    let i = new Uint8Array(e), r = 0;
    for(let n = 0; n < t.length; n++){
        let o = t[n];
        i.set(o, r), r += o.length;
    }
    return i;
}
function C2(t, e) {
    if (t.length !== e.length) return !1;
    let i = 0;
    for(let r = 0; r < t.length; r++)i |= t[r] ^ e[r];
    return i === 0;
}
function H3(t) {
    if (typeof t != "string") throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t));
}
function V3(t) {
    let e;
    for(e = 0; t > b5; t >>= y2, e += 1);
    return e;
}
function j2(t, e) {
    return t >> BigInt(e) & y2;
}
var D6 = (t, e, i)=>t | (i ? y2 : b5) << BigInt(e), G4 = (t)=>(B3 << BigInt(t - 1)) - y2, d1 = (t)=>new Uint8Array(t), h2 = (t)=>Uint8Array.from(t);
function M3(t, e, i) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof i != "function") throw new Error("hmacFn must be a function");
    let r = d1(t), n = d1(t), o = 0, l = ()=>{
        r.fill(1), n.fill(0), o = 0;
    }, f = (...u)=>i(n, r, ...u), s = (u = d1())=>{
        n = f(h2([
            0
        ]), u), r = f(), u.length !== 0 && (n = f(h2([
            1
        ]), u), r = f());
    }, A = ()=>{
        if (o++ >= 1e3) throw new Error("drbg: tried 1000 values");
        let u = 0, p = [];
        for(; u < e;){
            r = f();
            let g = r.slice();
            p.push(g), u += r.length;
        }
        return T3(...p);
    };
    return (u, p)=>{
        l(), s(u);
        let g;
        for(; !(g = p(A()));)s();
        return l(), g;
    };
}
var I3 = {
    bigint: (t)=>typeof t == "bigint",
    function: (t)=>typeof t == "function",
    boolean: (t)=>typeof t == "boolean",
    string: (t)=>typeof t == "string",
    stringOrUint8Array: (t)=>typeof t == "string" || a3(t),
    isSafeInteger: (t)=>Number.isSafeInteger(t),
    array: (t)=>Array.isArray(t),
    field: (t, e)=>e.Fp.isValid(t),
    hash: (t)=>typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function q4(t, e, i = {}) {
    let r = (n, o, l)=>{
        let f = I3[o];
        if (typeof f != "function") throw new Error(`Invalid validator "${o}", expected function`);
        let s = t[n];
        if (!(l && s === void 0) && !f(s, t)) throw new Error(`Invalid param ${String(n)}=${s} (${typeof s}), expected ${o}`);
    };
    for (let [n, o] of Object.entries(e))r(n, o, !1);
    for (let [n, o] of Object.entries(i))r(n, o, !0);
    return t;
}
const mod = {
    bitGet: j2,
    bitLen: V3,
    bitMask: G4,
    bitSet: D6,
    bytesToHex: m4,
    bytesToNumberBE: v2,
    bytesToNumberLE: N2,
    concatBytes: T3,
    createHmacDrbg: M3,
    ensureBytes: O2,
    equalBytes: C2,
    hexToBytes: w4,
    hexToNumber: E3,
    isBytes: a3,
    numberToBytesBE: $3,
    numberToBytesLE: F6,
    numberToHexUnpadded: U4,
    numberToVarBytesBE: k3,
    utf8ToBytes: H3,
    validateObject: q4
};
var f2 = BigInt(0), u4 = BigInt(1), w5 = BigInt(2), M4 = BigInt(3), x5 = BigInt(4), S4 = BigInt(5), I4 = BigInt(8), C3 = BigInt(9), Z5 = BigInt(16);
function g3(t, r) {
    let e = t % r;
    return e >= f2 ? e : r + e;
}
function j3(t, r, e) {
    if (e <= f2 || r < f2) throw new Error("Expected power/modulo > 0");
    if (e === u4) return f2;
    let o = u4;
    for(; r > f2;)r & u4 && (o = o * t % e), t = t * t % e, r >>= u4;
    return o;
}
function k4(t, r, e) {
    let o = t;
    for(; r-- > f2;)o *= o, o %= e;
    return o;
}
function B4(t, r) {
    if (t === f2 || r <= f2) throw new Error(`invert: expected positive integers, got n=${t} mod=${r}`);
    let e = g3(t, r), o = r, s = f2, l = u4, d = u4, i = f2;
    for(; e !== f2;){
        let c = o / e, a = o % e, q = s - d * c, h = l - i * c;
        o = e, e = a, s = d, l = i, d = q, i = h;
    }
    if (o !== u4) throw new Error("invert: does not exist");
    return g3(s, r);
}
function A2(t) {
    let r = (t - u4) / w5, e, o, s;
    for(e = t - u4, o = 0; e % w5 === f2; e /= w5, o++);
    for(s = w5; s < t && j3(s, r, t) !== t - u4; s++);
    if (o === 1) {
        let d = (t + u4) / x5;
        return function(n, c) {
            let a = n.pow(c, d);
            if (!n.eql(n.sqr(a), c)) throw new Error("Cannot find square root");
            return a;
        };
    }
    let l = (e + u4) / w5;
    return function(i, n) {
        if (i.pow(n, r) === i.neg(i.ONE)) throw new Error("Cannot find square root");
        let c = o, a = i.pow(i.mul(i.ONE, s), e), q = i.pow(n, l), h = i.pow(n, e);
        for(; !i.eql(h, i.ONE);){
            if (i.eql(h, i.ZERO)) return i.ZERO;
            let v = 1;
            for(let E = i.sqr(h); v < c && !i.eql(E, i.ONE); v++)E = i.sqr(E);
            let N = i.pow(a, u4 << BigInt(c - v - 1));
            a = i.sqr(N), q = i.mul(q, N), h = i.mul(h, a), c = v;
        }
        return q;
    };
}
function H4(t) {
    if (t % x5 === M4) {
        let r = (t + u4) / x5;
        return function(o, s) {
            let l = o.pow(s, r);
            if (!o.eql(o.sqr(l), s)) throw new Error("Cannot find square root");
            return l;
        };
    }
    if (t % I4 === S4) {
        let r = (t - S4) / I4;
        return function(o, s) {
            let l = o.mul(s, w5), d = o.pow(l, r), i = o.mul(s, d), n = o.mul(o.mul(i, w5), d), c = o.mul(i, o.sub(n, o.ONE));
            if (!o.eql(o.sqr(c), s)) throw new Error("Cannot find square root");
            return c;
        };
    }
    return t % Z5, A2(t);
}
var z3 = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
];
function J4(t) {
    let r = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    }, e = z3.reduce((o, s)=>(o[s] = "function", o), r);
    return q4(t, e);
}
function K3(t, r, e) {
    if (e < f2) throw new Error("Expected power > 0");
    if (e === f2) return t.ONE;
    if (e === u4) return r;
    let o = t.ONE, s = r;
    for(; e > f2;)e & u4 && (o = t.mul(o, s)), s = t.sqr(s), e >>= u4;
    return o;
}
function Q4(t, r) {
    let e = new Array(r.length), o = r.reduce((l, d, i)=>t.is0(d) ? l : (e[i] = l, t.mul(l, d)), t.ONE), s = t.inv(o);
    return r.reduceRight((l, d, i)=>t.is0(d) ? l : (e[i] = t.mul(l, e[i]), t.mul(l, d)), s), e;
}
function L3(t, r) {
    let e = r !== void 0 ? r : t.toString(2).length, o = Math.ceil(e / 8);
    return {
        nBitLength: e,
        nByteLength: o
    };
}
function X2(t, r, e = !1, o = {}) {
    if (t <= f2) throw new Error(`Expected Field ORDER > 0, got ${t}`);
    let { nBitLength: s, nByteLength: l } = L3(t, r);
    if (l > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
    let d = H4(t), i = Object.freeze({
        ORDER: t,
        BITS: s,
        BYTES: l,
        MASK: G4(s),
        ZERO: f2,
        ONE: u4,
        create: (n)=>g3(n, t),
        isValid: (n)=>{
            if (typeof n != "bigint") throw new Error(`Invalid field element: expected bigint, got ${typeof n}`);
            return f2 <= n && n < t;
        },
        is0: (n)=>n === f2,
        isOdd: (n)=>(n & u4) === u4,
        neg: (n)=>g3(-n, t),
        eql: (n, c)=>n === c,
        sqr: (n)=>g3(n * n, t),
        add: (n, c)=>g3(n + c, t),
        sub: (n, c)=>g3(n - c, t),
        mul: (n, c)=>g3(n * c, t),
        pow: (n, c)=>K3(i, n, c),
        div: (n, c)=>g3(n * B4(c, t), t),
        sqrN: (n)=>n * n,
        addN: (n, c)=>n + c,
        subN: (n, c)=>n - c,
        mulN: (n, c)=>n * c,
        inv: (n)=>B4(n, t),
        sqrt: o.sqrt || ((n)=>d(i, n)),
        invertBatch: (n)=>Q4(i, n),
        cmov: (n, c, a)=>a ? c : n,
        toBytes: (n)=>e ? F6(n, l) : $3(n, l),
        fromBytes: (n)=>{
            if (n.length !== l) throw new Error(`Fp.fromBytes: expected ${l}, got ${n.length}`);
            return e ? N2(n) : v2(n);
        }
    });
    return Object.freeze(i);
}
function O3(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    let r = t.toString(2).length;
    return Math.ceil(r / 8);
}
function V4(t) {
    let r = O3(t);
    return r + Math.ceil(r / 2);
}
function F7(t, r, e = !1) {
    let o = t.length, s = O3(r), l = V4(r);
    if (o < 16 || o < l || o > 1024) throw new Error(`expected ${l}-1024 bytes of input, got ${o}`);
    let d = e ? v2(t) : N2(t), i = g3(d, r - u4) + u4;
    return e ? F6(i, s) : $3(i, s);
}
var A3 = BigInt(0), g4 = BigInt(1);
function x6(i, u) {
    let l = (t, n)=>{
        let e = n.negate();
        return t ? e : n;
    }, h = (t)=>{
        let n = Math.ceil(u / t) + 1, e = 2 ** (t - 1);
        return {
            windows: n,
            windowSize: e
        };
    };
    return {
        constTimeNegate: l,
        unsafeLadder (t, n) {
            let e = i.ZERO, f = t;
            for(; n > A3;)n & g4 && (e = e.add(f)), f = f.double(), n >>= g4;
            return e;
        },
        precomputeWindow (t, n) {
            let { windows: e, windowSize: f } = h(n), s = [], o = t, d = o;
            for(let w = 0; w < e; w++){
                d = o, s.push(d);
                for(let a = 1; a < f; a++)d = d.add(o), s.push(d);
                o = d.double();
            }
            return s;
        },
        wNAF (t, n, e) {
            let { windows: f, windowSize: s } = h(t), o = i.ZERO, d = i.BASE, w = BigInt(2 ** t - 1), a = 2 ** t, b = BigInt(t);
            for(let c = 0; c < f; c++){
                let p = c * s, r = Number(e & w);
                e >>= b, r > s && (r -= a, e += g4);
                let B = p, m = p + Math.abs(r) - 1, I = c % 2 !== 0, N = r < 0;
                r === 0 ? d = d.add(l(I, n[B])) : o = o.add(l(N, n[m]));
            }
            return {
                p: o,
                f: d
            };
        },
        wNAFCached (t, n, e, f) {
            let s = t._WINDOW_SIZE || 1, o = n.get(t);
            return o || (o = this.precomputeWindow(t, s), s !== 1 && n.set(t, f(o))), this.wNAF(s, o, e);
        }
    };
}
function z4(i) {
    return J4(i.Fp), q4(i, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }), Object.freeze({
        ...L3(i.n, i.nBitLength),
        ...i,
        p: i.Fp.ORDER
    });
}
function lt2(e) {
    let r = z4(e);
    mod.validateObject(r, {
        a: "field",
        b: "field"
    }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
    });
    let { endo: t, Fp: x, a: O } = r;
    if (t) {
        if (!x.eql(O, x.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        if (typeof t != "object" || typeof t.beta != "bigint" || typeof t.splitScalar != "function") throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
    }
    return Object.freeze({
        ...r
    });
}
var { bytesToNumberBE: dt2, hexToBytes: ft1 } = mod, M5 = {
    Err: class extends Error {
        constructor(r = ""){
            super(r);
        }
    },
    _parseInt (e) {
        let { Err: r } = M5;
        if (e.length < 2 || e[0] !== 2) throw new r("Invalid signature integer tag");
        let t = e[1], x = e.subarray(2, t + 2);
        if (!t || x.length !== t) throw new r("Invalid signature integer: wrong length");
        if (x[0] & 128) throw new r("Invalid signature integer: negative");
        if (x[0] === 0 && !(x[1] & 128)) throw new r("Invalid signature integer: unnecessary leading zero");
        return {
            d: dt2(x),
            l: e.subarray(t + 2)
        };
    },
    toSig (e) {
        let { Err: r } = M5, t = typeof e == "string" ? ft1(e) : e;
        if (!mod.isBytes(t)) throw new Error("ui8a expected");
        let x = t.length;
        if (x < 2 || t[0] != 48) throw new r("Invalid signature tag");
        if (t[1] !== x - 2) throw new r("Invalid signature: incorrect length");
        let { d: O, l: b } = M5._parseInt(t.subarray(2)), { d: T, l: v } = M5._parseInt(b);
        if (v.length) throw new r("Invalid signature: left bytes after parsing");
        return {
            r: O,
            s: T
        };
    },
    hexFromSig (e) {
        let r = (B)=>Number.parseInt(B[0], 16) & 8 ? "00" + B : B, t = (B)=>{
            let N = B.toString(16);
            return N.length & 1 ? `0${N}` : N;
        }, x = r(t(e.s)), O = r(t(e.r)), b = x.length / 2, T = O.length / 2, v = t(b), V = t(T);
        return `30${t(T + b + 4)}02${V}${O}02${v}${x}`;
    }
}, D7 = BigInt(0), q5 = BigInt(1), _4 = BigInt(2), rt2 = BigInt(3), at2 = BigInt(4);
function mt1(e) {
    let r = lt2(e), { Fp: t } = r, x = r.toBytes || ((h, n, i)=>{
        let s = n.toAffine();
        return mod.concatBytes(Uint8Array.from([
            4
        ]), t.toBytes(s.x), t.toBytes(s.y));
    }), O = r.fromBytes || ((h)=>{
        let n = h.subarray(1), i = t.fromBytes(n.subarray(0, t.BYTES)), s = t.fromBytes(n.subarray(t.BYTES, 2 * t.BYTES));
        return {
            x: i,
            y: s
        };
    });
    function b(h) {
        let { a: n, b: i } = r, s = t.sqr(h), c = t.mul(s, h);
        return t.add(t.add(c, t.mul(h, n)), i);
    }
    if (!t.eql(t.sqr(r.Gy), b(r.Gx))) throw new Error("bad generator point: equation left != right");
    function T(h) {
        return typeof h == "bigint" && D7 < h && h < r.n;
    }
    function v(h) {
        if (!T(h)) throw new Error("Expected valid bigint: 0 < bigint < curve.n");
    }
    function V(h) {
        let { allowedPrivateKeyLengths: n, nByteLength: i, wrapPrivateKey: s, n: c } = r;
        if (n && typeof h != "bigint") {
            if (mod.isBytes(h) && (h = mod.bytesToHex(h)), typeof h != "string" || !n.includes(h.length)) throw new Error("Invalid key");
            h = h.padStart(i * 2, "0");
        }
        let l;
        try {
            l = typeof h == "bigint" ? h : mod.bytesToNumberBE(O2("private key", h, i));
        } catch  {
            throw new Error(`private key must be ${i} bytes, hex or bigint, not ${typeof h}`);
        }
        return s && (l = g3(l, c)), v(l), l;
    }
    let B = new Map;
    function N(h) {
        if (!(h instanceof f)) throw new Error("ProjectivePoint expected");
    }
    class f {
        constructor(n, i, s){
            if (this.px = n, this.py = i, this.pz = s, n == null || !t.isValid(n)) throw new Error("x required");
            if (i == null || !t.isValid(i)) throw new Error("y required");
            if (s == null || !t.isValid(s)) throw new Error("z required");
        }
        static fromAffine(n) {
            let { x: i, y: s } = n || {};
            if (!n || !t.isValid(i) || !t.isValid(s)) throw new Error("invalid affine point");
            if (n instanceof f) throw new Error("projective point not allowed");
            let c = (l)=>t.eql(l, t.ZERO);
            return c(i) && c(s) ? f.ZERO : new f(i, s, t.ONE);
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        static normalizeZ(n) {
            let i = t.invertBatch(n.map((s)=>s.pz));
            return n.map((s, c)=>s.toAffine(i[c])).map(f.fromAffine);
        }
        static fromHex(n) {
            let i = f.fromAffine(O(O2("pointHex", n)));
            return i.assertValidity(), i;
        }
        static fromPrivateKey(n) {
            return f.BASE.multiply(V(n));
        }
        _setWindowSize(n) {
            this._WINDOW_SIZE = n, B.delete(this);
        }
        assertValidity() {
            if (this.is0()) {
                if (r.allowInfinityPoint && !t.is0(this.py)) return;
                throw new Error("bad point: ZERO");
            }
            let { x: n, y: i } = this.toAffine();
            if (!t.isValid(n) || !t.isValid(i)) throw new Error("bad point: x or y not FE");
            let s = t.sqr(i), c = b(n);
            if (!t.eql(s, c)) throw new Error("bad point: equation left != right");
            if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
        }
        hasEvenY() {
            let { y: n } = this.toAffine();
            if (t.isOdd) return !t.isOdd(n);
            throw new Error("Field doesn't support isOdd");
        }
        equals(n) {
            N(n);
            let { px: i, py: s, pz: c } = this, { px: l, py: y, pz: w } = n, u = t.eql(t.mul(i, w), t.mul(l, c)), d = t.eql(t.mul(s, w), t.mul(y, c));
            return u && d;
        }
        negate() {
            return new f(this.px, t.neg(this.py), this.pz);
        }
        double() {
            let { a: n, b: i } = r, s = t.mul(i, rt2), { px: c, py: l, pz: y } = this, w = t.ZERO, u = t.ZERO, d = t.ZERO, m = t.mul(c, c), I = t.mul(l, l), A = t.mul(y, y), p = t.mul(c, l);
            return p = t.add(p, p), d = t.mul(c, y), d = t.add(d, d), w = t.mul(n, d), u = t.mul(s, A), u = t.add(w, u), w = t.sub(I, u), u = t.add(I, u), u = t.mul(w, u), w = t.mul(p, w), d = t.mul(s, d), A = t.mul(n, A), p = t.sub(m, A), p = t.mul(n, p), p = t.add(p, d), d = t.add(m, m), m = t.add(d, m), m = t.add(m, A), m = t.mul(m, p), u = t.add(u, m), A = t.mul(l, y), A = t.add(A, A), m = t.mul(A, p), w = t.sub(w, m), d = t.mul(A, I), d = t.add(d, d), d = t.add(d, d), new f(w, u, d);
        }
        add(n) {
            N(n);
            let { px: i, py: s, pz: c } = this, { px: l, py: y, pz: w } = n, u = t.ZERO, d = t.ZERO, m = t.ZERO, I = r.a, A = t.mul(r.b, rt2), p = t.mul(i, l), C = t.mul(s, y), U = t.mul(c, w), k = t.add(i, s), o = t.add(l, y);
            k = t.mul(k, o), o = t.add(p, C), k = t.sub(k, o), o = t.add(i, c);
            let a = t.add(l, w);
            return o = t.mul(o, a), a = t.add(p, U), o = t.sub(o, a), a = t.add(s, c), u = t.add(y, w), a = t.mul(a, u), u = t.add(C, U), a = t.sub(a, u), m = t.mul(I, o), u = t.mul(A, U), m = t.add(u, m), u = t.sub(C, m), m = t.add(C, m), d = t.mul(u, m), C = t.add(p, p), C = t.add(C, p), U = t.mul(I, U), o = t.mul(A, o), C = t.add(C, U), U = t.sub(p, U), U = t.mul(I, U), o = t.add(o, U), p = t.mul(C, o), d = t.add(d, p), p = t.mul(a, o), u = t.mul(k, u), u = t.sub(u, p), p = t.mul(k, C), m = t.mul(a, m), m = t.add(m, p), new f(u, d, m);
        }
        subtract(n) {
            return this.add(n.negate());
        }
        is0() {
            return this.equals(f.ZERO);
        }
        wNAF(n) {
            return z.wNAFCached(this, B, n, (i)=>{
                let s = t.invertBatch(i.map((c)=>c.pz));
                return i.map((c, l)=>c.toAffine(s[l])).map(f.fromAffine);
            });
        }
        multiplyUnsafe(n) {
            let i = f.ZERO;
            if (n === D7) return i;
            if (v(n), n === q5) return this;
            let { endo: s } = r;
            if (!s) return z.unsafeLadder(this, n);
            let { k1neg: c, k1: l, k2neg: y, k2: w } = s.splitScalar(n), u = i, d = i, m = this;
            for(; l > D7 || w > D7;)l & q5 && (u = u.add(m)), w & q5 && (d = d.add(m)), m = m.double(), l >>= q5, w >>= q5;
            return c && (u = u.negate()), y && (d = d.negate()), d = new f(t.mul(d.px, s.beta), d.py, d.pz), u.add(d);
        }
        multiply(n) {
            v(n);
            let i = n, s, c, { endo: l } = r;
            if (l) {
                let { k1neg: y, k1: w, k2neg: u, k2: d } = l.splitScalar(i), { p: m, f: I } = this.wNAF(w), { p: A, f: p } = this.wNAF(d);
                m = z.constTimeNegate(y, m), A = z.constTimeNegate(u, A), A = new f(t.mul(A.px, l.beta), A.py, A.pz), s = m.add(A), c = I.add(p);
            } else {
                let { p: y, f: w } = this.wNAF(i);
                s = y, c = w;
            }
            return f.normalizeZ([
                s,
                c
            ])[0];
        }
        multiplyAndAddUnsafe(n, i, s) {
            let c = f.BASE, l = (w, u)=>u === D7 || u === q5 || !w.equals(c) ? w.multiplyUnsafe(u) : w.multiply(u), y = l(this, i).add(l(n, s));
            return y.is0() ? void 0 : y;
        }
        toAffine(n) {
            let { px: i, py: s, pz: c } = this, l = this.is0();
            n == null && (n = l ? t.ONE : t.inv(c));
            let y = t.mul(i, n), w = t.mul(s, n), u = t.mul(c, n);
            if (l) return {
                x: t.ZERO,
                y: t.ZERO
            };
            if (!t.eql(u, t.ONE)) throw new Error("invZ was invalid");
            return {
                x: y,
                y: w
            };
        }
        isTorsionFree() {
            let { h: n, isTorsionFree: i } = r;
            if (n === q5) return !0;
            if (i) return i(f, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve");
        }
        clearCofactor() {
            let { h: n, clearCofactor: i } = r;
            return n === q5 ? this : i ? i(f, this) : this.multiplyUnsafe(r.h);
        }
        toRawBytes(n = !0) {
            return this.assertValidity(), x(f, this, n);
        }
        toHex(n = !0) {
            return mod.bytesToHex(this.toRawBytes(n));
        }
    }
    f.BASE = new f(r.Gx, r.Gy, t.ONE), f.ZERO = new f(t.ZERO, t.ONE, t.ZERO);
    let L = r.nBitLength, z = x6(f, r.endo ? Math.ceil(L / 2) : L);
    return {
        CURVE: r,
        ProjectivePoint: f,
        normPrivateKeyToScalar: V,
        weierstrassEquation: b,
        isWithinCurveOrder: T
    };
}
function ht2(e) {
    let r = z4(e);
    return mod.validateObject(r, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
    }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
    }), Object.freeze({
        lowS: !0,
        ...r
    });
}
function bt1(e) {
    let r = ht2(e), { Fp: t, n: x } = r, O = t.BYTES + 1, b = 2 * t.BYTES + 1;
    function T(o) {
        return D7 < o && o < t.ORDER;
    }
    function v(o) {
        return g3(o, x);
    }
    function V(o) {
        return B4(o, x);
    }
    let { ProjectivePoint: B, normPrivateKeyToScalar: N, weierstrassEquation: f, isWithinCurveOrder: L } = mt1({
        ...r,
        toBytes (o, a, E) {
            let R = a.toAffine(), S = t.toBytes(R.x), Z = mod.concatBytes;
            return E ? Z(Uint8Array.from([
                a.hasEvenY() ? 2 : 3
            ]), S) : Z(Uint8Array.from([
                4
            ]), S, t.toBytes(R.y));
        },
        fromBytes (o) {
            let a = o.length, E = o[0], R = o.subarray(1);
            if (a === O && (E === 2 || E === 3)) {
                let S = mod.bytesToNumberBE(R);
                if (!T(S)) throw new Error("Point is not on curve");
                let Z = f(S), H = t.sqrt(Z), Y = (H & q5) === q5;
                return (E & 1) === 1 !== Y && (H = t.neg(H)), {
                    x: S,
                    y: H
                };
            } else if (a === b && E === 4) {
                let S = t.fromBytes(R.subarray(0, t.BYTES)), Z = t.fromBytes(R.subarray(t.BYTES, 2 * t.BYTES));
                return {
                    x: S,
                    y: Z
                };
            } else throw new Error(`Point of length ${a} was invalid. Expected ${O} compressed bytes or ${b} uncompressed bytes`);
        }
    }), z = (o)=>mod.bytesToHex(mod.numberToBytesBE(o, r.nByteLength));
    function h(o) {
        let a = x >> q5;
        return o > a;
    }
    function n(o) {
        return h(o) ? v(-o) : o;
    }
    let i = (o, a, E)=>mod.bytesToNumberBE(o.slice(a, E));
    class s {
        constructor(a, E, R){
            this.r = a, this.s = E, this.recovery = R, this.assertValidity();
        }
        static fromCompact(a) {
            let E = r.nByteLength;
            return a = O2("compactSignature", a, E * 2), new s(i(a, 0, E), i(a, E, 2 * E));
        }
        static fromDER(a) {
            let { r: E, s: R } = M5.toSig(O2("DER", a));
            return new s(E, R);
        }
        assertValidity() {
            if (!L(this.r)) throw new Error("r must be 0 < r < CURVE.n");
            if (!L(this.s)) throw new Error("s must be 0 < s < CURVE.n");
        }
        addRecoveryBit(a) {
            return new s(this.r, this.s, a);
        }
        recoverPublicKey(a) {
            let { r: E, s: R, recovery: S } = this, Z = d(O2("msgHash", a));
            if (S == null || ![
                0,
                1,
                2,
                3
            ].includes(S)) throw new Error("recovery id invalid");
            let H = S === 2 || S === 3 ? E + r.n : E;
            if (H >= t.ORDER) throw new Error("recovery id 2 or 3 invalid");
            let Y = S & 1 ? "03" : "02", $ = B.fromHex(Y + z(H)), W = V(H), Q = v(-Z * W), tt = v(R * W), X = B.BASE.multiplyAndAddUnsafe($, Q, tt);
            if (!X) throw new Error("point at infinify");
            return X.assertValidity(), X;
        }
        hasHighS() {
            return h(this.s);
        }
        normalizeS() {
            return this.hasHighS() ? new s(this.r, v(-this.s), this.recovery) : this;
        }
        toDERRawBytes() {
            return mod.hexToBytes(this.toDERHex());
        }
        toDERHex() {
            return M5.hexFromSig({
                r: this.r,
                s: this.s
            });
        }
        toCompactRawBytes() {
            return mod.hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
            return z(this.r) + z(this.s);
        }
    }
    let c = {
        isValidPrivateKey (o) {
            try {
                return N(o), !0;
            } catch  {
                return !1;
            }
        },
        normPrivateKeyToScalar: N,
        randomPrivateKey: ()=>{
            let o = V4(r.n);
            return F7(r.randomBytes(o), r.n);
        },
        precompute (o = 8, a = B.BASE) {
            return a._setWindowSize(o), a.multiply(BigInt(3)), a;
        }
    };
    function l(o, a = !0) {
        return B.fromPrivateKey(o).toRawBytes(a);
    }
    function y(o) {
        let a = mod.isBytes(o), E = typeof o == "string", R = (a || E) && o.length;
        return a ? R === O || R === b : E ? R === 2 * O || R === 2 * b : o instanceof B;
    }
    function w(o, a, E = !0) {
        if (y(o)) throw new Error("first arg must be private key");
        if (!y(a)) throw new Error("second arg must be public key");
        return B.fromHex(a).multiply(N(o)).toRawBytes(E);
    }
    let u = r.bits2int || function(o) {
        let a = mod.bytesToNumberBE(o), E = o.length * 8 - r.nBitLength;
        return E > 0 ? a >> BigInt(E) : a;
    }, d = r.bits2int_modN || function(o) {
        return v(u(o));
    }, m = mod.bitMask(r.nBitLength);
    function I(o) {
        if (typeof o != "bigint") throw new Error("bigint expected");
        if (!(D7 <= o && o < m)) throw new Error(`bigint expected < 2^${r.nBitLength}`);
        return mod.numberToBytesBE(o, r.nByteLength);
    }
    function A(o, a, E = p) {
        if ([
            "recovered",
            "canonical"
        ].some((G)=>G in E)) throw new Error("sign() legacy options not supported");
        let { hash: R, randomBytes: S } = r, { lowS: Z, prehash: H, extraEntropy: Y } = E;
        Z == null && (Z = !0), o = O2("msgHash", o), H && (o = O2("prehashed msgHash", R(o)));
        let $ = d(o), W = N(a), Q = [
            I(W),
            I($)
        ];
        if (Y != null) {
            let G = Y === !0 ? S(t.BYTES) : Y;
            Q.push(O2("extraEntropy", G));
        }
        let tt = mod.concatBytes(...Q), X = $;
        function nt(G) {
            let J = u(G);
            if (!L(J)) return;
            let ot = V(J), K = B.BASE.multiply(J).toAffine(), F = v(K.x);
            if (F === D7) return;
            let et = v(ot * v(X + F * W));
            if (et === D7) return;
            let st = (K.x === F ? 0 : 2) | Number(K.y & q5), it = et;
            return Z && h(et) && (it = n(et), st ^= 1), new s(F, it, st);
        }
        return {
            seed: tt,
            k2sig: nt
        };
    }
    let p = {
        lowS: r.lowS,
        prehash: !1
    }, C = {
        lowS: r.lowS,
        prehash: !1
    };
    function U(o, a, E = p) {
        let { seed: R, k2sig: S } = A(o, a, E), Z = r;
        return mod.createHmacDrbg(Z.hash.outputLen, Z.nByteLength, Z.hmac)(R, S);
    }
    B.BASE._setWindowSize(8);
    function k(o, a, E, R = C) {
        let S = o;
        if (a = O2("msgHash", a), E = O2("publicKey", E), "strict" in R) throw new Error("options.strict was renamed to lowS");
        let { lowS: Z, prehash: H } = R, Y, $;
        try {
            if (typeof S == "string" || mod.isBytes(S)) try {
                Y = s.fromDER(S);
            } catch (K) {
                if (!(K instanceof M5.Err)) throw K;
                Y = s.fromCompact(S);
            }
            else if (typeof S == "object" && typeof S.r == "bigint" && typeof S.s == "bigint") {
                let { r: K, s: F } = S;
                Y = new s(K, F);
            } else throw new Error("PARSE");
            $ = B.fromHex(E);
        } catch (K) {
            if (K.message === "PARSE") throw new Error("signature must be Signature instance, Uint8Array or hex string");
            return !1;
        }
        if (Z && Y.hasHighS()) return !1;
        H && (a = r.hash(a));
        let { r: W, s: Q } = Y, tt = d(a), X = V(Q), nt = v(tt * X), G = v(W * X), J = B.BASE.multiplyAndAddUnsafe($, nt, G)?.toAffine();
        return J ? v(J.x) === W : !1;
    }
    return {
        CURVE: r,
        getPublicKey: l,
        getSharedSecret: w,
        sign: U,
        verify: k,
        ProjectivePoint: B,
        Signature: s,
        utils: c
    };
}
function yt1(e, r) {
    let t = e.ORDER, x = D7;
    for(let h = t - q5; h % _4 === D7; h /= _4)x += q5;
    let O = x, b = _4 << O - q5 - q5, T = b * _4, v = (t - q5) / T, V = (v - q5) / _4, B = T - q5, N = b, f = e.pow(r, v), L = e.pow(r, (v + q5) / _4), z = (h, n)=>{
        let i = f, s = e.pow(n, B), c = e.sqr(s);
        c = e.mul(c, n);
        let l = e.mul(h, c);
        l = e.pow(l, V), l = e.mul(l, s), s = e.mul(l, n), c = e.mul(l, h);
        let y = e.mul(c, s);
        l = e.pow(y, N);
        let w = e.eql(l, e.ONE);
        s = e.mul(c, L), l = e.mul(y, i), c = e.cmov(s, c, w), y = e.cmov(l, y, w);
        for(let u = O; u > q5; u--){
            let d = u - _4;
            d = _4 << d - q5;
            let m = e.pow(y, d), I = e.eql(m, e.ONE);
            s = e.mul(c, i), i = e.mul(i, i), m = e.mul(y, i), c = e.cmov(s, c, I), y = e.cmov(m, y, I);
        }
        return {
            isValid: w,
            value: c
        };
    };
    if (e.ORDER % at2 === rt2) {
        let h = (e.ORDER - rt2) / at2, n = e.sqrt(e.neg(r));
        z = (i, s)=>{
            let c = e.sqr(s), l = e.mul(i, s);
            c = e.mul(c, l);
            let y = e.pow(c, h);
            y = e.mul(y, l);
            let w = e.mul(y, n), u = e.mul(e.sqr(y), s), d = e.eql(u, i), m = e.cmov(w, y, d);
            return {
                isValid: d,
                value: m
            };
        };
    }
    return z;
}
function vt1(e, r) {
    if (J4(e), !e.isValid(r.A) || !e.isValid(r.B) || !e.isValid(r.Z)) throw new Error("mapToCurveSimpleSWU: invalid opts");
    let t = yt1(e, r.Z);
    if (!e.isOdd) throw new Error("Fp.isOdd is not implemented!");
    return (x)=>{
        let O, b, T, v, V, B, N, f;
        O = e.sqr(x), O = e.mul(O, r.Z), b = e.sqr(O), b = e.add(b, O), T = e.add(b, e.ONE), T = e.mul(T, r.B), v = e.cmov(r.Z, e.neg(b), !e.eql(b, e.ZERO)), v = e.mul(v, r.A), b = e.sqr(T), B = e.sqr(v), V = e.mul(B, r.A), b = e.add(b, V), b = e.mul(b, T), B = e.mul(B, v), V = e.mul(B, r.B), b = e.add(b, V), N = e.mul(O, T);
        let { isValid: L, value: z } = t(b, B);
        f = e.mul(O, x), f = e.mul(f, z), N = e.cmov(N, T, L), f = e.cmov(f, z, L);
        let h = e.isOdd(x) === e.isOdd(f);
        return f = e.cmov(e.neg(f), f, h), N = e.div(N, v), {
            x: N,
            y: f
        };
    };
}
function N3(r) {
    if (a3(r)) return r;
    if (typeof r == "string") return H3(r);
    throw new Error("DST must be Uint8Array or string");
}
var U5 = v2;
function p3(r, e) {
    if (r < 0 || r >= 1 << 8 * e) throw new Error(`bad I2OSP call: value=${r} length=${e}`);
    let n = Array.from({
        length: e
    }).fill(0);
    for(let t = e - 1; t >= 0; t--)n[t] = r & 255, r >>>= 8;
    return new Uint8Array(n);
}
function D8(r, e) {
    let n = new Uint8Array(r.length);
    for(let t = 0; t < r.length; t++)n[t] = r[t] ^ e[t];
    return n;
}
function m5(r) {
    if (!a3(r)) throw new Error("Uint8Array expected");
}
function g5(r) {
    if (!Number.isSafeInteger(r)) throw new Error("number expected");
}
function M6(r, e, n, t) {
    m5(r), m5(e), g5(n), e.length > 255 && (e = t(T3(H3("H2C-OVERSIZE-DST-"), e)));
    let { outputLen: o, blockLen: s } = t, i = Math.ceil(n / o);
    if (i > 255) throw new Error("Invalid xmd length");
    let a = T3(e, p3(e.length, 1)), f = p3(0, s), l = p3(n, 2), u = new Array(i), d = t(T3(f, r, l, p3(0, 1), a));
    u[0] = t(T3(d, p3(1, 1), a));
    for(let c = 1; c <= i; c++){
        let _ = [
            D8(d, u[c - 1]),
            p3(c + 1, 1),
            a
        ];
        u[c] = t(T3(..._));
    }
    return T3(...u).slice(0, n);
}
function T4(r, e, n, t, o) {
    if (m5(r), m5(e), g5(n), e.length > 255) {
        let s = Math.ceil(2 * t / 8);
        e = o.create({
            dkLen: s
        }).update(H3("H2C-OVERSIZE-DST-")).update(e).digest();
    }
    if (n > 65535 || e.length > 255) throw new Error("expand_message_xof: invalid lenInBytes");
    return o.create({
        dkLen: n
    }).update(r).update(p3(n, 2)).update(e).update(p3(e.length, 1)).digest();
}
function S5(r, e, n) {
    q4(n, {
        DST: "stringOrUint8Array",
        p: "bigint",
        m: "isSafeInteger",
        k: "isSafeInteger",
        hash: "hash"
    });
    let { p: t, k: o, m: s, hash: i, expand: a, DST: f } = n;
    m5(r), g5(e);
    let l = N3(f), u = t.toString(2).length, d = Math.ceil((u + o) / 8), w = e * s * d, c;
    if (a === "xmd") c = M6(r, l, w, i);
    else if (a === "xof") c = T4(r, l, w, o, i);
    else if (a === "_internal_pass") c = r;
    else throw new Error('expand must be "xmd" or "xof"');
    let _ = new Array(e);
    for(let b = 0; b < e; b++){
        let E = new Array(s);
        for(let x = 0; x < s; x++){
            let A = d * (x + b * s), k = c.subarray(A, A + d);
            E[x] = g3(U5(k), t);
        }
        _[b] = E;
    }
    return _;
}
function j4(r, e) {
    let n = e.map((t)=>Array.from(t).reverse());
    return (t, o)=>{
        let [s, i, a, f] = n.map((l)=>l.reduce((u, d)=>r.add(r.mul(u, t), d)));
        return t = r.div(s, i), o = r.mul(o, r.div(a, f)), {
            x: t,
            y: o
        };
    };
}
function F8(r, e, n) {
    if (typeof e != "function") throw new Error("mapToCurve() must be defined");
    return {
        hashToCurve (t, o) {
            let s = S5(t, 2, {
                ...n,
                DST: n.DST,
                ...o
            }), i = r.fromAffine(e(s[0])), a = r.fromAffine(e(s[1])), f = i.add(a).clearCofactor();
            return f.assertValidity(), f;
        },
        encodeToCurve (t, o) {
            let s = S5(t, 1, {
                ...n,
                DST: n.encodeDST,
                ...o
            }), i = r.fromAffine(e(s[0])).clearCofactor();
            return i.assertValidity(), i;
        }
    };
}
var o2 = class extends w3 {
    constructor(t, i){
        super(), this.finished = !1, this.destroyed = !1, u2(t);
        let h = s1(i);
        if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        let a = this.blockLen, s = new Uint8Array(a);
        s.set(h.length > a ? t.create().update(h).digest() : h);
        for(let e = 0; e < s.length; e++)s[e] ^= 54;
        this.iHash.update(s), this.oHash = t.create();
        for(let e = 0; e < s.length; e++)s[e] ^= 106;
        this.oHash.update(s), s.fill(0);
    }
    update(t) {
        return s(this), this.iHash.update(t), this;
    }
    digestInto(t) {
        s(this), n(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
    }
    digest() {
        let t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t;
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        let { oHash: i, iHash: h, finished: a, destroyed: s, blockLen: e, outputLen: d } = this;
        return t = t, t.finished = a, t.destroyed = s, t.blockLen = e, t.outputLen = d, t.oHash = i._cloneInto(t.oHash), t.iHash = h._cloneInto(t.iHash), t;
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
    }
}, l1 = (n, t, i)=>new o2(n, t).update(i).digest();
l1.create = (n, t)=>new o2(n, t);
function f3(r) {
    return {
        hash: r,
        hmac: (t, ...e)=>l1(r, t, B2(...e)),
        randomBytes: D4
    };
}
function u5(r, t) {
    let e = (o)=>bt1({
            ...r,
            ...f3(o)
        });
    return Object.freeze({
        ...e(t),
        create: e
    });
}
var S6 = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), h3 = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), N4 = BigInt(1), _5 = BigInt(2), D9 = (f, e)=>(f + e / _5) / e;
function W2(f) {
    let e = S6, t = BigInt(3), n = BigInt(6), a = BigInt(11), i = BigInt(22), s = BigInt(23), d = BigInt(44), b = BigInt(88), o = f * f * f % e, c = o * o * f % e, m = k4(c, t, e) * c % e, p = k4(m, t, e) * c % e, g = k4(p, _5, e) * o % e, w = k4(g, a, e) * g % e, A = k4(w, i, e) * w % e, G = k4(A, d, e) * A % e, Y = k4(G, b, e) * G % e, z = k4(Y, d, e) * A % e, Z = k4(z, t, e) * c % e, J = k4(Z, s, e) * w % e, L = k4(J, n, e) * o % e, H = k4(L, _5, e);
    if (!u6.eql(u6.sqr(H), f)) throw new Error("Cannot find square root");
    return H;
}
var u6 = X2(S6, void 0, void 0, {
    sqrt: W2
}), v3 = u5({
    a: BigInt(0),
    b: BigInt(7),
    Fp: u6,
    n: h3,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: !0,
    endo: {
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: (f)=>{
            let e = h3, t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -N4 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), a = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = t, s = BigInt("0x100000000000000000000000000000000"), d = D9(i * f, e), b = D9(-n * f, e), o = g3(f - d * t - b * a, e), c = g3(-d * n - b * i, e), m = o > s, p = c > s;
            if (m && (o = e - o), p && (c = e - c), o > s || c > s) throw new Error("splitScalar: Endomorphism failed, k=" + f);
            return {
                k1neg: m,
                k1: o,
                k2neg: p,
                k2: c
            };
        }
    }
}, y1), E4 = BigInt(0), F9 = (f)=>typeof f == "bigint" && E4 < f && f < S6, cf = (f)=>typeof f == "bigint" && E4 < f && f < h3, q6 = {};
function P3(f, ...e) {
    let t = q6[f];
    if (t === void 0) {
        let n = y1(Uint8Array.from(f, (a)=>a.charCodeAt(0)));
        t = T3(n, n), q6[f] = t;
    }
    return y1(T3(t, ...e));
}
var K4 = (f)=>f.toRawBytes(!0).slice(1), k5 = (f)=>$3(f, 32), T5 = (f)=>g3(f, S6), I5 = (f)=>g3(f, h3), U6 = v3.ProjectivePoint, of = (f, e, t)=>U6.BASE.multiplyAndAddUnsafe(f, e, t);
function C4(f) {
    let e = v3.utils.normPrivateKeyToScalar(f), t = U6.fromPrivateKey(e);
    return {
        scalar: t.hasEvenY() ? e : I5(-e),
        bytes: K4(t)
    };
}
function O4(f) {
    if (!F9(f)) throw new Error("bad x: need 0 < x < p");
    let e = T5(f * f), t = T5(e * f + BigInt(7)), n = W2(t);
    n % _5 !== E4 && (n = T5(-n));
    let a = new U6(f, n, N4);
    return a.assertValidity(), a;
}
function X3(...f) {
    return I5(v2(P3("BIP0340/challenge", ...f)));
}
function af(f) {
    return C4(f).bytes;
}
function sf(f, e, t = D4(32)) {
    let n = O2("message", f), { bytes: a, scalar: i } = C4(e), s = O2("auxRand", t, 32), d = k5(i ^ v2(P3("BIP0340/aux", s))), b = P3("BIP0340/nonce", d, a, n), o = I5(v2(b));
    if (o === E4) throw new Error("sign failed: k is zero");
    let { bytes: c, scalar: m } = C4(o), p = X3(c, a, n), g = new Uint8Array(64);
    if (g.set(c, 0), g.set(k5(I5(m + p * i)), 32), !j5(g, n, a)) throw new Error("sign: Invalid signature produced");
    return g;
}
function j5(f, e, t) {
    let n = O2("signature", f, 64), a = O2("message", e), i = O2("publicKey", t, 32);
    try {
        let s = O4(v2(i)), d = v2(n.subarray(0, 32));
        if (!F9(d)) return !1;
        let b = v2(n.subarray(32, 64));
        if (!cf(b)) return !1;
        let o = X3(k5(d), K4(s), a), c = of(s, b, I5(-o));
        return !(!c || !c.hasEvenY() || c.toAffine().x !== d);
    } catch  {
        return !1;
    }
}
var xf = {
    getPublicKey: af,
    sign: sf,
    verify: j5,
    utils: {
        randomPrivateKey: v3.utils.randomPrivateKey,
        lift_x: O4,
        pointToBytes: K4,
        numberToBytesBE: $3,
        bytesToNumberBE: v2,
        taggedHash: P3,
        mod: g3
    }
}, rf = j4(u6, [
    [
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
        "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
        "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
    ],
    [
        "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
        "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
    ],
    [
        "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
        "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
        "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
        "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
    ],
    [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
        "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
        "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
    ]
].map((f)=>f.map((e)=>BigInt(e)))), df = vt1(u6, {
    A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
    B: BigInt("1771"),
    Z: u6.create(BigInt("-11"))
}), V5 = F8(v3.ProjectivePoint, (f)=>{
    let { x: e, y: t } = df(u6.create(f[0]));
    return rf(e, t);
}, {
    DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
    encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
    p: u6.ORDER,
    m: 1,
    k: 128,
    expand: "xmd",
    hash: y1
}), If = V5.hashToCurve, yf = V5.encodeToCurve;
var s2 = new Uint8Array([
    0
]), m6 = new Uint8Array;
function A4(t, o, e, n = 32) {
    if (u2(t), r(n), n > 255 * t.outputLen) throw new Error("Length should be <= 255*HashLen");
    let u = Math.ceil(n / t.outputLen);
    e === void 0 && (e = m6);
    let d = new Uint8Array(u * t.outputLen), c = l1.create(t, o), p = c._cloneInto(), i = new Uint8Array(c.outputLen);
    for(let r = 0; r < u; r++)s2[0] = r + 1, p.update(r === 0 ? m6 : i).update(e).update(s2).digestInto(i), d.set(i, t.outputLen * r), c._cloneInto(p);
    return c.destroy(), p.destroy(), i.fill(0), s2.fill(0), d.slice(0, n);
}
function A5(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function a4(...e) {
    let r = (n)=>n, o = (n, s)=>(f)=>n(s(f)), t = e.map((n)=>n.encode).reduceRight(o, r), c = e.map((n)=>n.decode).reduce(o, r);
    return {
        encode: t,
        decode: c
    };
}
function u7(e) {
    return {
        encode: (r)=>{
            if (!Array.isArray(r) || r.length && typeof r[0] != "number") throw new Error("alphabet.encode input should be an array of numbers");
            return r.map((o)=>{
                if (o < 0 || o >= e.length) throw new Error(`Digit index outside alphabet: ${o} (alphabet: ${e.length})`);
                return e[o];
            });
        },
        decode: (r)=>{
            if (!Array.isArray(r) || r.length && typeof r[0] != "string") throw new Error("alphabet.decode input should be array of strings");
            return r.map((o)=>{
                if (typeof o != "string") throw new Error(`alphabet.decode: not string element=${o}`);
                let t = e.indexOf(o);
                if (t === -1) throw new Error(`Unknown letter: "${o}". Allowed: ${e}`);
                return t;
            });
        }
    };
}
function w6(e = "") {
    if (typeof e != "string") throw new Error("join separator should be string");
    return {
        encode: (r)=>{
            if (!Array.isArray(r) || r.length && typeof r[0] != "string") throw new Error("join.encode input should be array of strings");
            for (let o of r)if (typeof o != "string") throw new Error(`join.encode: non-string input=${o}`);
            return r.join(e);
        },
        decode: (r)=>{
            if (typeof r != "string") throw new Error("join.decode input should be string");
            return r.split(e);
        }
    };
}
function $4(e, r = "=") {
    if (typeof r != "string") throw new Error("padding chr should be string");
    return {
        encode (o) {
            if (!Array.isArray(o) || o.length && typeof o[0] != "string") throw new Error("padding.encode input should be array of strings");
            for (let t of o)if (typeof t != "string") throw new Error(`padding.encode: non-string input=${t}`);
            for(; o.length * e % 8;)o.push(r);
            return o;
        },
        decode (o) {
            if (!Array.isArray(o) || o.length && typeof o[0] != "string") throw new Error("padding.encode input should be array of strings");
            for (let c of o)if (typeof c != "string") throw new Error(`padding.decode: non-string input=${c}`);
            let t = o.length;
            if (t * e % 8) throw new Error("Invalid padding: string should have whole number of bytes");
            for(; t > 0 && o[t - 1] === r; t--)if (!((t - 1) * e % 8)) throw new Error("Invalid padding: string has too much padding");
            return o.slice(0, t);
        }
    };
}
function D10(e) {
    if (typeof e != "function") throw new Error("normalize fn should be function");
    return {
        encode: (r)=>r,
        decode: (r)=>e(r)
    };
}
function C5(e, r, o) {
    if (r < 2) throw new Error(`convertRadix: wrong from=${r}, base cannot be less than 2`);
    if (o < 2) throw new Error(`convertRadix: wrong to=${o}, base cannot be less than 2`);
    if (!Array.isArray(e)) throw new Error("convertRadix: data should be array");
    if (!e.length) return [];
    let t = 0, c = [], n = Array.from(e);
    for(n.forEach((s)=>{
        if (s < 0 || s >= r) throw new Error(`Wrong integer: ${s}`);
    });;){
        let s = 0, f = !0;
        for(let h = t; h < n.length; h++){
            let m = n[h], i = r * s + m;
            if (!Number.isSafeInteger(i) || r * s / r !== s || i - m !== r * s) throw new Error("convertRadix: carry overflow");
            s = i % o;
            let d = Math.floor(i / o);
            if (n[h] = d, !Number.isSafeInteger(d) || d * o + s !== i) throw new Error("convertRadix: carry overflow");
            if (f) d ? f = !1 : t = h;
            else continue;
        }
        if (c.push(s), f) break;
    }
    for(let s = 0; s < e.length - 1 && e[s] === 0; s++)c.push(0);
    return c.reverse();
}
var j6 = (e, r)=>r ? j6(r, e % r) : e, v4 = (e, r)=>e + (r - j6(e, r));
function k6(e, r, o, t) {
    if (!Array.isArray(e)) throw new Error("convertRadix2: data should be array");
    if (r <= 0 || r > 32) throw new Error(`convertRadix2: wrong from=${r}`);
    if (o <= 0 || o > 32) throw new Error(`convertRadix2: wrong to=${o}`);
    if (v4(r, o) > 32) throw new Error(`convertRadix2: carry overflow from=${r} to=${o} carryBits=${v4(r, o)}`);
    let c = 0, n = 0, s = 2 ** o - 1, f = [];
    for (let h of e){
        if (h >= 2 ** r) throw new Error(`convertRadix2: invalid data word=${h} from=${r}`);
        if (c = c << r | h, n + r > 32) throw new Error(`convertRadix2: carry overflow pos=${n} from=${r}`);
        for(n += r; n >= o; n -= o)f.push((c >> n - o & s) >>> 0);
        c &= 2 ** n - 1;
    }
    if (c = c << o - n & s, !t && n >= r) throw new Error("Excess padding");
    if (!t && c) throw new Error(`Non-zero padding: ${c}`);
    return t && n > 0 && f.push(c >>> 0), f;
}
function P4(e) {
    return {
        encode: (r)=>{
            if (!A5(r)) throw new Error("radix.encode input should be Uint8Array");
            return C5(Array.from(r), 2 ** 8, e);
        },
        decode: (r)=>{
            if (!Array.isArray(r) || r.length && typeof r[0] != "number") throw new Error("radix.decode input should be array of numbers");
            return Uint8Array.from(C5(r, e, 2 ** 8));
        }
    };
}
function l2(e, r = !1) {
    if (e <= 0 || e > 32) throw new Error("radix2: bits should be in (0..32]");
    if (v4(8, e) > 32 || v4(e, 8) > 32) throw new Error("radix2: carry overflow");
    return {
        encode: (o)=>{
            if (!A5(o)) throw new Error("radix2.encode input should be Uint8Array");
            return k6(Array.from(o), 8, e, !r);
        },
        decode: (o)=>{
            if (!Array.isArray(o) || o.length && typeof o[0] != "number") throw new Error("radix2.decode input should be array of numbers");
            return Uint8Array.from(k6(o, e, 8, r));
        }
    };
}
function S7(e) {
    if (typeof e != "function") throw new Error("unsafeWrapper fn should be function");
    return function(...r) {
        try {
            return e.apply(null, r);
        } catch  {}
    };
}
var z5 = a4(l2(4), u7("0123456789ABCDEF"), w6("")), F10 = a4(l2(5), u7("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), $4(5), w6("")), ee1 = a4(l2(5), u7("0123456789ABCDEFGHIJKLMNOPQRSTUV"), $4(5), w6("")), re = a4(l2(5), u7("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), w6(""), D10((e)=>e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))), K5 = a4(l2(6), u7("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), $4(6), w6("")), J5 = a4(l2(6), u7("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), $4(6), w6("")), oe1 = a4(l2(6), u7("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), w6("")), B5 = (e)=>a4(P4(58), u7(e), w6("")), R2 = B5("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), ne = B5("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"), te1 = B5("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"), U7 = a4(u7("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), w6("")), O5 = [
    996825010,
    642813549,
    513874426,
    1027748829,
    705979059
];
function E5(e) {
    let r = e >> 25, o = (e & 33554431) << 5;
    for(let t = 0; t < O5.length; t++)(r >> t & 1) === 1 && (o ^= O5[t]);
    return o;
}
function W3(e, r, o = 1) {
    let t = e.length, c = 1;
    for(let n = 0; n < t; n++){
        let s = e.charCodeAt(n);
        if (s < 33 || s > 126) throw new Error(`Invalid prefix (${e})`);
        c = E5(c) ^ s >> 5;
    }
    c = E5(c);
    for(let n = 0; n < t; n++)c = E5(c) ^ e.charCodeAt(n) & 31;
    for (let n of r)c = E5(c) ^ n;
    for(let n = 0; n < 6; n++)c = E5(c);
    return c ^= o, U7.encode(k6([
        c % 2 ** 30
    ], 30, 5, !1));
}
function G5(e) {
    let r = e === "bech32" ? 1 : 734539939, o = l2(5), t = o.decode, c = o.encode, n = S7(t);
    function s(i, d, p = 90) {
        if (typeof i != "string") throw new Error(`bech32.encode prefix should be string, not ${typeof i}`);
        if (!Array.isArray(d) || d.length && typeof d[0] != "number") throw new Error(`bech32.encode words should be array of numbers, not ${typeof d}`);
        let y = i.length + 7 + d.length;
        if (p !== !1 && y > p) throw new TypeError(`Length ${y} exceeds limit ${p}`);
        let b = i.toLowerCase(), x = W3(b, d, r);
        return `${b}1${U7.encode(d)}${x}`;
    }
    function f(i, d = 90) {
        if (typeof i != "string") throw new Error(`bech32.decode input should be string, not ${typeof i}`);
        if (i.length < 8 || d !== !1 && i.length > d) throw new TypeError(`Wrong string length: ${i.length} (${i}). Expected (8..${d})`);
        let p = i.toLowerCase();
        if (i !== p && i !== i.toUpperCase()) throw new Error("String must be lowercase or uppercase");
        i = p;
        let y = i.lastIndexOf("1");
        if (y === 0 || y === -1) throw new Error('Letter "1" must be present between prefix and data only');
        let b = i.slice(0, y), x = i.slice(y + 1);
        if (x.length < 6) throw new Error("Data must be at least 6 characters long");
        let L = U7.decode(x).slice(0, -6), N = W3(b, L, r);
        if (!x.endsWith(N)) throw new Error(`Invalid checksum in ${i}: expected "${N}"`);
        return {
            prefix: b,
            words: L
        };
    }
    let h = S7(f);
    function m(i) {
        let { prefix: d, words: p } = f(i, !1);
        return {
            prefix: d,
            words: p,
            bytes: t(p)
        };
    }
    return {
        encode: s,
        decode: f,
        decodeToBytes: m,
        decodeUnsafe: h,
        fromWords: t,
        fromWordsUnsafe: n,
        toWords: c
    };
}
G5("bech32"), G5("bech32m"), a4(l2(4), u7("0123456789abcdef"), w6(""), D10((e)=>{
    if (typeof e != "string" || e.length % 2) throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);
    return e.toLowerCase();
}));
const decoder = new TextDecoder();
const u8 = {
    utf8Encode: b3,
    utf8Decode (bytes) {
        return decoder.decode(bytes);
    },
    getMessageKeys (conversationKey, nonce) {
        D2(conversationKey, 32);
        D2(nonce, 32);
        const keys = A4(y1, conversationKey, nonce, 76);
        return {
            chacha_key: keys.subarray(0, 32),
            chacha_nonce: keys.subarray(32, 44),
            hmac_key: keys.subarray(44, 76)
        };
    },
    writeU16BE (num) {
        if (!Number.isSafeInteger(num) || num < 0x0001 || num > 0xffff) {
            throw new Error("invalid plaintext size: must be between 1 and 65535 bytes");
        }
        const arr = new Uint8Array(2);
        new DataView(arr.buffer).setUint16(0, num, false);
        return arr;
    },
    pad (plaintext) {
        const unpadded = u8.utf8Encode(plaintext);
        const unpaddedLen = unpadded.length;
        const prefix = u8.writeU16BE(unpaddedLen);
        const suffix = new Uint8Array(calcPaddedLen(unpaddedLen) - unpaddedLen);
        return B2(prefix, unpadded, suffix);
    },
    unpad (padded) {
        const unpaddedLen = new DataView(padded.buffer).getUint16(0);
        const unpadded = padded.subarray(2, 2 + unpaddedLen);
        if (unpaddedLen < 0x0001 || unpaddedLen > 0xffff || unpadded.length !== unpaddedLen || padded.length !== 2 + calcPaddedLen(unpaddedLen)) {
            throw new Error("invalid padding");
        }
        return u8.utf8Decode(unpadded);
    },
    hmacAad (key, message, aad) {
        if (aad.length !== 32) throw new Error("AAD associated data must be 32 bytes");
        const combined = B2(aad, message);
        return l1(y1, key, combined);
    },
    decodePayload (payload) {
        if (typeof payload !== "string") throw new Error("payload must be a valid string");
        const plen = payload.length;
        if (plen < 132 || plen > 87472) throw new Error("invalid payload length: " + plen);
        if (payload[0] === "#") throw new Error("unknown encryption version");
        let data;
        try {
            data = K5.decode(payload);
        } catch (error) {
            throw new Error("invalid base64: " + error.message);
        }
        const dlen = data.length;
        if (dlen < 99 || dlen > 65603) throw new Error("invalid data length: " + dlen);
        const vers = data[0];
        if (vers !== 2) throw new Error("unknown encryption version " + vers);
        return {
            nonce: data.subarray(1, 33),
            ciphertext: data.subarray(33, -32),
            mac: data.subarray(-32)
        };
    }
};
function calcPaddedLen(len) {
    if (!Number.isSafeInteger(len) || len < 1) throw new Error("expected positive integer");
    if (len <= 32) return 32;
    const nextPower = 1 << Math.floor(Math.log2(len - 1)) + 1;
    const chunk = nextPower <= 256 ? 32 : nextPower / 8;
    return chunk * (Math.floor((len - 1) / chunk) + 1);
}
var z6 = Object.create;
var m7 = Object.defineProperty;
var G6 = Object.getOwnPropertyDescriptor;
var H5 = Object.getOwnPropertyNames;
var K6 = Object.getPrototypeOf, L4 = Object.prototype.hasOwnProperty;
var O6 = (e, t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t), t.exports), M7 = (e, t)=>{
    for(var n in t)m7(e, n, {
        get: t[n],
        enumerable: !0
    });
}, j7 = (e, t, n, u)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let a of H5(t))!L4.call(e, a) && a !== n && m7(e, a, {
        get: ()=>t[a],
        enumerable: !(u = G6(t, a)) || u.enumerable
    });
    return e;
}, b6 = (e, t, n)=>(j7(e, t, "default"), n && j7(n, t, "default")), N5 = (e, t, n)=>(n = e != null ? z6(K6(e)) : {}, j7(t || !e || !e.__esModule ? m7(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e));
var J6 = O6((tt, F)=>{
    "use strict";
    var d, r, q = {
        '"': '"',
        "\\": "\\",
        "/": "/",
        b: "\b",
        f: "\f",
        n: `
`,
        r: "\r",
        t: "	"
    }, S;
    function p(e) {
        throw {
            name: "SyntaxError",
            message: e,
            at: d,
            text: S
        };
    }
    function f(e) {
        return e && e !== r && p("Expected '" + e + "' instead of '" + r + "'"), r = S.charAt(d), d += 1, r;
    }
    function A() {
        var e, t = "";
        for(r === "-" && (t = "-", f("-")); r >= "0" && r <= "9";)t += r, f();
        if (r === ".") for(t += "."; f() && r >= "0" && r <= "9";)t += r;
        if (r === "e" || r === "E") for(t += r, f(), (r === "-" || r === "+") && (t += r, f()); r >= "0" && r <= "9";)t += r, f();
        return e = Number(t), isFinite(e) || p("Bad number"), e;
    }
    function C() {
        var e, t, n = "", u;
        if (r === '"') for(; f();){
            if (r === '"') return f(), n;
            if (r === "\\") if (f(), r === "u") {
                for(u = 0, t = 0; t < 4 && (e = parseInt(f(), 16), !!isFinite(e)); t += 1)u = u * 16 + e;
                n += String.fromCharCode(u);
            } else if (typeof q[r] == "string") n += q[r];
            else break;
            else n += r;
        }
        p("Bad string");
    }
    function l() {
        for(; r && r <= " ";)f();
    }
    function Q() {
        switch(r){
            case "t":
                return f("t"), f("r"), f("u"), f("e"), !0;
            case "f":
                return f("f"), f("a"), f("l"), f("s"), f("e"), !1;
            case "n":
                return f("n"), f("u"), f("l"), f("l"), null;
            default:
                p("Unexpected '" + r + "'");
        }
    }
    function R() {
        var e = [];
        if (r === "[") {
            if (f("["), l(), r === "]") return f("]"), e;
            for(; r;){
                if (e.push(g()), l(), r === "]") return f("]"), e;
                f(","), l();
            }
        }
        p("Bad array");
    }
    function T() {
        var e, t = {};
        if (r === "{") {
            if (f("{"), l(), r === "}") return f("}"), t;
            for(; r;){
                if (e = C(), l(), f(":"), Object.prototype.hasOwnProperty.call(t, e) && p('Duplicate key "' + e + '"'), t[e] = g(), l(), r === "}") return f("}"), t;
                f(","), l();
            }
        }
        p("Bad object");
    }
    function g() {
        switch(l(), r){
            case "{":
                return T();
            case "[":
                return R();
            case '"':
                return C();
            case "-":
                return A();
            default:
                return r >= "0" && r <= "9" ? A() : Q();
        }
    }
    F.exports = function(e, t) {
        var n;
        return S = e, d = 0, r = " ", n = g(), l(), r && p("Syntax error"), typeof t == "function" ? function u(a, y) {
            var c, o, i = a[y];
            if (i && typeof i == "object") for(c in g)Object.prototype.hasOwnProperty.call(i, c) && (o = u(i, c), typeof o > "u" ? delete i[c] : i[c] = o);
            return t.call(a, y, i);
        }({
            "": n
        }, "") : n;
    };
});
var I6 = O6((et, P)=>{
    "use strict";
    var _ = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, s, w, V = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, h;
    function k(e) {
        return _.lastIndex = 0, _.test(e) ? '"' + e.replace(_, function(t) {
            var n = V[t];
            return typeof n == "string" ? n : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + e + '"';
    }
    function x(e, t) {
        var n, u, a, y, c = s, o, i = t[e];
        switch(i && typeof i == "object" && typeof i.toJSON == "function" && (i = i.toJSON(e)), typeof h == "function" && (i = h.call(t, e, i)), typeof i){
            case "string":
                return k(i);
            case "number":
                return isFinite(i) ? String(i) : "null";
            case "boolean":
            case "null":
                return String(i);
            case "object":
                if (!i) return "null";
                if (s += w, o = [], Object.prototype.toString.apply(i) === "[object Array]") {
                    for(y = i.length, n = 0; n < y; n += 1)o[n] = x(n, i) || "null";
                    return a = o.length === 0 ? "[]" : s ? `[
` + s + o.join(`,
` + s) + `
` + c + "]" : "[" + o.join(",") + "]", s = c, a;
                }
                if (h && typeof h == "object") for(y = h.length, n = 0; n < y; n += 1)u = h[n], typeof u == "string" && (a = x(u, i), a && o.push(k(u) + (s ? ": " : ":") + a));
                else for(u in i)Object.prototype.hasOwnProperty.call(i, u) && (a = x(u, i), a && o.push(k(u) + (s ? ": " : ":") + a));
                return a = o.length === 0 ? "{}" : s ? `{
` + s + o.join(`,
` + s) + `
` + c + "}" : "{" + o.join(",") + "}", s = c, a;
            default:
        }
    }
    P.exports = function(e, t, n) {
        var u;
        if (s = "", w = "", typeof n == "number") for(u = 0; u < n; u += 1)w += " ";
        else typeof n == "string" && (w = n);
        if (h = t, t && typeof t != "function" && (typeof t != "object" || typeof t.length != "number")) throw new Error("JSON.stringify");
        return x("", {
            "": e
        });
    };
});
var E6 = O6((B)=>{
    "use strict";
    B.parse = J6();
    B.stringify = I6();
});
var v5 = {};
M7(v5, {
    default: ()=>Z6,
    parse: ()=>W4,
    stringify: ()=>X4
});
var U8 = N5(E6());
b6(v5, N5(E6()));
var { parse: W4, stringify: X4 } = U8, { default: D11, ...Y2 } = U8, Z6 = D11 !== void 0 ? D11 : Y2;
const mod1 = {
    default: Z6,
    parse: W4,
    stringify: X4
};
var c2 = Object.create;
var u9 = Object.defineProperty;
var m8 = Object.getOwnPropertyDescriptor;
var p4 = Object.getOwnPropertyNames;
var x7 = Object.getPrototypeOf, y3 = Object.prototype.hasOwnProperty;
var A6 = (t, r)=>()=>(r || t((r = {
            exports: {}
        }).exports, r), r.exports), g6 = (t, r)=>{
    for(var e in r)u9(t, e, {
        get: r[e],
        enumerable: !0
    });
}, f4 = (t, r, e, i)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let n of p4(r))!y3.call(t, n) && n !== e && u9(t, n, {
        get: ()=>r[n],
        enumerable: !(i = m8(r, n)) || i.enumerable
    });
    return t;
}, a5 = (t, r, e)=>(f4(t, r, "default"), e && f4(e, r, "default")), l3 = (t, r, e)=>(e = t != null ? c2(x7(t)) : {}, f4(r || !t || !t.__esModule ? u9(e, "default", {
        value: t,
        enumerable: !0
    }) : e, t));
var d2 = A6((k, _)=>{
    var S = {}.toString;
    _.exports = Array.isArray || function(t) {
        return S.call(t) == "[object Array]";
    };
});
var o3 = {};
g6(o3, {
    default: ()=>v6
});
var b7 = l3(d2());
a5(o3, l3(d2()));
var { default: s3, ...j8 } = b7, v6 = s3 !== void 0 ? s3 : j8;
const mod2 = {
    default: v6
};
var Q5 = Object.create;
var w7 = Object.defineProperty;
var R3 = Object.getOwnPropertyDescriptor;
var U9 = Object.getOwnPropertyNames;
var V6 = Object.getPrototypeOf, Z7 = Object.prototype.hasOwnProperty;
var O7 = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports), D12 = (e, r)=>{
    for(var t in r)w7(e, t, {
        get: r[t],
        enumerable: !0
    });
}, $5 = (e, r, t, n)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let i of U9(r))!Z7.call(e, i) && i !== t && w7(e, i, {
        get: ()=>r[i],
        enumerable: !(n = R3(r, i)) || n.enumerable
    });
    return e;
}, l4 = (e, r, t)=>($5(e, r, "default"), t && $5(t, r, "default")), k7 = (e, r, t)=>(t = e != null ? Q5(V6(e)) : {}, $5(r || !e || !e.__esModule ? w7(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
var h4 = O7((rr, m)=>{
    "use strict";
    var j = Object.prototype.toString;
    m.exports = function(r) {
        var t = j.call(r), n = t === "[object Arguments]";
        return n || (n = t !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && j.call(r.callee) === "[object Function]"), n;
    };
});
var L5 = O7((er, K)=>{
    "use strict";
    var I;
    Object.keys || (o = Object.prototype.hasOwnProperty, d = Object.prototype.toString, _ = h4(), S = Object.prototype.propertyIsEnumerable, x = !S.call({
        toString: null
    }, "toString"), A = S.call(function() {}, "prototype"), u = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ], s = function(e) {
        var r = e.constructor;
        return r && r.prototype === e;
    }, F = {
        $applicationCache: !0,
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $onmozfullscreenchange: !0,
        $onmozfullscreenerror: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0
    }, z = function() {
        if (typeof window > "u") return !1;
        for(var e in window)try {
            if (!F["$" + e] && o.call(window, e) && window[e] !== null && typeof window[e] == "object") try {
                s(window[e]);
            } catch  {
                return !0;
            }
        } catch  {
            return !0;
        }
        return !1;
    }(), H = function(e) {
        if (typeof window > "u" || !z) return s(e);
        try {
            return s(e);
        } catch  {
            return !1;
        }
    }, I = function(r) {
        var t = r !== null && typeof r == "object", n = d.call(r) === "[object Function]", i = _(r), G = t && d.call(r) === "[object String]", c = [];
        if (!t && !n && !i) throw new TypeError("Object.keys called on a non-object");
        var J = A && n;
        if (G && r.length > 0 && !o.call(r, 0)) for(var v = 0; v < r.length; ++v)c.push(String(v));
        if (i && r.length > 0) for(var y = 0; y < r.length; ++y)c.push(String(y));
        else for(var g in r)!(J && g === "prototype") && o.call(r, g) && c.push(String(g));
        if (x) for(var M = H(r), a = 0; a < u.length; ++a)!(M && u[a] === "constructor") && o.call(r, u[a]) && c.push(u[a]);
        return c;
    });
    var o, d, _, S, x, A, u, s, F, z, H;
    K.exports = I;
});
var b8 = O7((tr, X)=>{
    "use strict";
    var N = Array.prototype.slice, P = h4(), T = Object.keys, p = T ? function(r) {
        return T(r);
    } : L5(), W = Object.keys;
    p.shim = function() {
        if (Object.keys) {
            var r = function() {
                var t = Object.keys(arguments);
                return t && t.length === arguments.length;
            }(1, 2);
            r || (Object.keys = function(n) {
                return P(n) ? W(N.call(n)) : W(n);
            });
        } else Object.keys = p;
        return Object.keys || p;
    };
    X.exports = p;
});
var f5 = {};
D12(f5, {
    default: ()=>B6
});
var q7 = k7(b8());
l4(f5, k7(b8()));
var { default: Y3, ...C6 } = q7, B6 = Y3 !== void 0 ? Y3 : C6;
const mod3 = {
    default: B6
};
const __default = Function.prototype.bind;
const mod4 = {
    default: __default
};
var i = Object.create;
var u10 = Object.defineProperty;
var n2 = Object.getOwnPropertyDescriptor;
var x8 = Object.getOwnPropertyNames;
var c3 = Object.getPrototypeOf, E7 = Object.prototype.hasOwnProperty;
var b9 = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), g7 = (r, e)=>{
    for(var t in e)u10(r, t, {
        get: e[t],
        enumerable: !0
    });
}, s4 = (r, e, t, a)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let f of x8(e))!E7.call(r, f) && f !== t && u10(r, f, {
        get: ()=>e[f],
        enumerable: !(a = n2(e, f)) || a.enumerable
    });
    return r;
}, d3 = (r, e, t)=>(s4(r, e, "default"), t && s4(t, e, "default")), l5 = (r, e, t)=>(t = r != null ? i(c3(r)) : {}, s4(e || !r || !r.__esModule ? u10(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
var _6 = b9((v, m)=>{
    "use strict";
    m.exports = Error;
});
var o4 = {};
g7(o4, {
    default: ()=>k8
});
var h5 = l5(_6());
d3(o4, l5(_6()));
var { default: p5, ...j9 } = h5, k8 = p5 !== void 0 ? p5 : j9;
const mod5 = {
    default: k8
};
var i1 = Object.create;
var u11 = Object.defineProperty;
var n3 = Object.getOwnPropertyDescriptor;
var x9 = Object.getOwnPropertyNames;
var c4 = Object.getPrototypeOf, E8 = Object.prototype.hasOwnProperty;
var v7 = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), b10 = (r, e)=>{
    for(var t in e)u11(r, t, {
        get: e[t],
        enumerable: !0
    });
}, s5 = (r, e, t, a)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let f of x9(e))!E8.call(r, f) && f !== t && u11(r, f, {
        get: ()=>e[f],
        enumerable: !(a = n3(e, f)) || a.enumerable
    });
    return r;
}, d4 = (r, e, t)=>(s5(r, e, "default"), t && s5(t, e, "default")), l6 = (r, e, t)=>(t = r != null ? i1(c4(r)) : {}, s5(e || !r || !r.__esModule ? u11(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
var _7 = v7((q, m)=>{
    "use strict";
    m.exports = EvalError;
});
var o5 = {};
b10(o5, {
    default: ()=>j10
});
var g8 = l6(_7());
d4(o5, l6(_7()));
var { default: p6, ...h6 } = g8, j10 = p6 !== void 0 ? p6 : h6;
const mod6 = {
    default: j10
};
var p7 = Object.create;
var u12 = Object.defineProperty;
var i2 = Object.getOwnPropertyDescriptor;
var x10 = Object.getOwnPropertyNames;
var c5 = Object.getPrototypeOf, g9 = Object.prototype.hasOwnProperty;
var E9 = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), R4 = (r, e)=>{
    for(var t in e)u12(r, t, {
        get: e[t],
        enumerable: !0
    });
}, s6 = (r, e, t, a)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let f of x10(e))!g9.call(r, f) && f !== t && u12(r, f, {
        get: ()=>e[f],
        enumerable: !(a = i2(e, f)) || a.enumerable
    });
    return r;
}, d5 = (r, e, t)=>(s6(r, e, "default"), t && s6(t, e, "default")), l7 = (r, e, t)=>(t = r != null ? p7(c5(r)) : {}, s6(e || !r || !r.__esModule ? u12(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
var _8 = E9((q, m)=>{
    "use strict";
    m.exports = RangeError;
});
var o6 = {};
R4(o6, {
    default: ()=>j11
});
var b11 = l7(_8());
d5(o6, l7(_8()));
var { default: n4, ...h7 } = b11, j11 = n4 !== void 0 ? n4 : h7;
const mod7 = {
    default: j11
};
var p8 = Object.create;
var u13 = Object.defineProperty;
var c6 = Object.getOwnPropertyDescriptor;
var i3 = Object.getOwnPropertyNames;
var x11 = Object.getPrototypeOf, E10 = Object.prototype.hasOwnProperty;
var R5 = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), b12 = (r, e)=>{
    for(var t in e)u13(r, t, {
        get: e[t],
        enumerable: !0
    });
}, s7 = (r, e, t, a)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let d of i3(e))!E10.call(r, d) && d !== t && u13(r, d, {
        get: ()=>e[d],
        enumerable: !(a = c6(e, d)) || a.enumerable
    });
    return r;
}, f6 = (r, e, t)=>(s7(r, e, "default"), t && s7(t, e, "default")), l8 = (r, e, t)=>(t = r != null ? p8(x11(r)) : {}, s7(e || !r || !r.__esModule ? u13(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
var _9 = R5((q, m)=>{
    "use strict";
    m.exports = ReferenceError;
});
var o7 = {};
b12(o7, {
    default: ()=>j12
});
var g10 = l8(_9());
f6(o7, l8(_9()));
var { default: n5, ...h8 } = g10, j12 = n5 !== void 0 ? n5 : h8;
const mod8 = {
    default: j12
};
var p9 = Object.create;
var u14 = Object.defineProperty;
var x12 = Object.getOwnPropertyDescriptor;
var i4 = Object.getOwnPropertyNames;
var c7 = Object.getPrototypeOf, y4 = Object.prototype.hasOwnProperty;
var E11 = (e, t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t), t.exports), S8 = (e, t)=>{
    for(var r in t)u14(e, r, {
        get: t[r],
        enumerable: !0
    });
}, s8 = (e, t, r, a)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let f of i4(t))!y4.call(e, f) && f !== r && u14(e, f, {
        get: ()=>t[f],
        enumerable: !(a = x12(t, f)) || a.enumerable
    });
    return e;
}, d6 = (e, t, r)=>(s8(e, t, "default"), r && s8(r, t, "default")), l9 = (e, t, r)=>(r = e != null ? p9(c7(e)) : {}, s8(t || !e || !e.__esModule ? u14(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
var _10 = E11((k, m)=>{
    "use strict";
    m.exports = SyntaxError;
});
var o8 = {};
S8(o8, {
    default: ()=>h9
});
var b13 = l9(_10());
d6(o8, l9(_10()));
var { default: n6, ...g11 } = b13, h9 = n6 !== void 0 ? n6 : g11;
const mod9 = {
    default: h9
};
var i5 = Object.create;
var u15 = Object.defineProperty;
var n7 = Object.getOwnPropertyDescriptor;
var x13 = Object.getOwnPropertyNames;
var c8 = Object.getPrototypeOf, y5 = Object.prototype.hasOwnProperty;
var E12 = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), T6 = (r, e)=>{
    for(var t in e)u15(r, t, {
        get: e[t],
        enumerable: !0
    });
}, s9 = (r, e, t, p)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let f of x13(e))!y5.call(r, f) && f !== t && u15(r, f, {
        get: ()=>e[f],
        enumerable: !(p = n7(e, f)) || p.enumerable
    });
    return r;
}, d7 = (r, e, t)=>(s9(r, e, "default"), t && s9(t, e, "default")), a6 = (r, e, t)=>(t = r != null ? i5(c8(r)) : {}, s9(e || !r || !r.__esModule ? u15(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
var _11 = E12((k, l)=>{
    "use strict";
    l.exports = TypeError;
});
var o9 = {};
T6(o9, {
    default: ()=>h10
});
var b14 = a6(_11());
d7(o9, a6(_11()));
var { default: m9, ...g12 } = b14, h10 = m9 !== void 0 ? m9 : g12;
const mod10 = {
    default: h10
};
var i6 = Object.create;
var u16 = Object.defineProperty;
var n8 = Object.getOwnPropertyDescriptor;
var x14 = Object.getOwnPropertyNames;
var c9 = Object.getPrototypeOf, E13 = Object.prototype.hasOwnProperty;
var I7 = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), R6 = (r, e)=>{
    for(var t in e)u16(r, t, {
        get: e[t],
        enumerable: !0
    });
}, s10 = (r, e, t, a)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let f of x14(e))!E13.call(r, f) && f !== t && u16(r, f, {
        get: ()=>e[f],
        enumerable: !(a = n8(e, f)) || a.enumerable
    });
    return r;
}, d8 = (r, e, t)=>(s10(r, e, "default"), t && s10(t, e, "default")), l10 = (r, e, t)=>(t = r != null ? i6(c9(r)) : {}, s10(e || !r || !r.__esModule ? u16(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
var _12 = I7((j, m)=>{
    "use strict";
    m.exports = URIError;
});
var o10 = {};
R6(o10, {
    default: ()=>g13
});
var U10 = l10(_12());
d8(o10, l10(_12()));
var { default: p10, ...b15 } = U10, g13 = p10 !== void 0 ? p10 : b15;
const mod11 = {
    default: g13
};
const __default1 = ()=>true;
const mod12 = {
    default: __default1
};
const foo = {
    bar: {}
};
const O8 = Object;
const __default2 = ()=>({
        __proto__: foo
    }).bar === foo.bar && !(({
        __proto__: null
    }) instanceof O8);
const mod13 = {
    default: __default2
};
var require = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "function-bind":
            return e(mod4);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var i7 = Object.create;
var n9 = Object.defineProperty;
var _13 = Object.getOwnPropertyDescriptor;
var m10 = Object.getOwnPropertyNames;
var v8 = Object.getPrototypeOf, x15 = Object.prototype.hasOwnProperty;
var y6 = ((t)=>typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
        get: (e, r)=>(typeof require < "u" ? require : e)[r]
    }) : t)(function(t) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + t + '" is not supported');
});
var O9 = (t, e)=>()=>(e || t((e = {
            exports: {}
        }).exports, e), e.exports), b16 = (t, e)=>{
    for(var r in e)n9(t, r, {
        get: e[r],
        enumerable: !0
    });
}, p11 = (t, e, r, u)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let l of m10(e))!x15.call(t, l) && l !== r && n9(t, l, {
        get: ()=>e[l],
        enumerable: !(u = _13(e, l)) || u.enumerable
    });
    return t;
}, a7 = (t, e, r)=>(p11(t, e, "default"), r && p11(r, e, "default")), c10 = (t, e, r)=>(r = t != null ? i7(v8(t)) : {}, p11(e || !t || !t.__esModule ? n9(r, "default", {
        value: t,
        enumerable: !0
    }) : r, t));
var s11 = O9((g, d)=>{
    "use strict";
    var h = Function.prototype.call, w = Object.prototype.hasOwnProperty, j = y6("function-bind");
    d.exports = j.call(h, w);
});
var o11 = {};
b16(o11, {
    default: ()=>P5
});
var q8 = c10(s11());
a7(o11, c10(s11()));
var { default: f7, ...F11 } = q8, P5 = f7 !== void 0 ? f7 : F11;
const mod14 = {
    default: P5
};
var require1 = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "es-errors":
            return e(mod5);
        case "es-errors/eval":
            return e(mod6);
        case "es-errors/range":
            return e(mod7);
        case "es-errors/ref":
            return e(mod8);
        case "es-errors/syntax":
            return e(mod9);
        case "es-errors/type":
            return e(mod10);
        case "es-errors/uri":
            return e(mod11);
        case "has-symbols":
            return e(mod12);
        case "has-proto":
            return e(mod13);
        case "function-bind":
            return e(mod4);
        case "hasown":
            return e(mod14);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var W5 = Object.create;
var x16 = Object.defineProperty;
var D13 = Object.getOwnPropertyDescriptor;
var J7 = Object.getOwnPropertyNames;
var V7 = Object.getPrototypeOf, z7 = Object.prototype.hasOwnProperty;
var p12 = ((t)=>typeof require1 < "u" ? require1 : typeof Proxy < "u" ? new Proxy(t, {
        get: (r, o)=>(typeof require1 < "u" ? require1 : r)[o]
    }) : t)(function(t) {
    if (typeof require1 < "u") return require1.apply(this, arguments);
    throw Error('Dynamic require of "' + t + '" is not supported');
});
var L6 = (t, r)=>()=>(r || t((r = {
            exports: {}
        }).exports, r), r.exports), Y4 = (t, r)=>{
    for(var o in r)x16(t, o, {
        get: r[o],
        enumerable: !0
    });
}, B7 = (t, r, o, n)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let a of J7(r))!z7.call(t, a) && a !== o && x16(t, a, {
        get: ()=>r[a],
        enumerable: !(n = D13(r, a)) || n.enumerable
    });
    return t;
}, d9 = (t, r, o)=>(B7(t, r, "default"), o && B7(o, r, "default")), T7 = (t, r, o)=>(o = t != null ? W5(V7(t)) : {}, B7(r || !t || !t.__esModule ? x16(o, "default", {
        value: t,
        enumerable: !0
    }) : o, t));
var G7 = L6((dr, j)=>{
    "use strict";
    var e, H = p12("es-errors"), K = p12("es-errors/eval"), Q = p12("es-errors/range"), X = p12("es-errors/ref"), S = p12("es-errors/syntax"), g = p12("es-errors/type"), Z = p12("es-errors/uri"), M = Function, N = function(t) {
        try {
            return M('"use strict"; return (' + t + ").constructor;")();
        } catch  {}
    }, u = Object.getOwnPropertyDescriptor;
    if (u) try {
        u({}, "");
    } catch  {
        u = null;
    }
    var O = function() {
        throw new g;
    }, rr = u ? function() {
        try {
            return arguments.callee, O;
        } catch  {
            try {
                return u(arguments, "callee").get;
            } catch  {
                return O;
            }
        }
    }() : O, v = p12("has-symbols")(), er = p12("has-proto")(), y = Object.getPrototypeOf || (er ? function(t) {
        return t.__proto__;
    } : null), P = {}, tr = typeof Uint8Array > "u" || !y ? e : y(Uint8Array), l = {
        __proto__: null,
        "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
        "%ArrayIteratorPrototype%": v && y ? y([][Symbol.iterator]()) : e,
        "%AsyncFromSyncIteratorPrototype%": e,
        "%AsyncFunction%": P,
        "%AsyncGenerator%": P,
        "%AsyncGeneratorFunction%": P,
        "%AsyncIteratorPrototype%": P,
        "%Atomics%": typeof Atomics > "u" ? e : Atomics,
        "%BigInt%": typeof BigInt > "u" ? e : BigInt,
        "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? e : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": H,
        "%eval%": eval,
        "%EvalError%": K,
        "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
        "%Function%": M,
        "%GeneratorFunction%": P,
        "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": v && y ? y(y([][Symbol.iterator]())) : e,
        "%JSON%": typeof JSON == "object" ? JSON : e,
        "%Map%": typeof Map > "u" ? e : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !v || !y ? e : y(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? e : Promise,
        "%Proxy%": typeof Proxy > "u" ? e : Proxy,
        "%RangeError%": Q,
        "%ReferenceError%": X,
        "%Reflect%": typeof Reflect > "u" ? e : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? e : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !v || !y ? e : y(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": v && y ? y(""[Symbol.iterator]()) : e,
        "%Symbol%": v ? Symbol : e,
        "%SyntaxError%": S,
        "%ThrowTypeError%": rr,
        "%TypedArray%": tr,
        "%TypeError%": g,
        "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
        "%URIError%": Z,
        "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet
    };
    if (y) try {
        null.error;
    } catch (t) {
        $ = y(y(t)), l["%Error.prototype%"] = $;
    }
    var $, or = function t(r) {
        var o;
        if (r === "%AsyncFunction%") o = N("async function () {}");
        else if (r === "%GeneratorFunction%") o = N("function* () {}");
        else if (r === "%AsyncGeneratorFunction%") o = N("async function* () {}");
        else if (r === "%AsyncGenerator%") {
            var n = t("%AsyncGeneratorFunction%");
            n && (o = n.prototype);
        } else if (r === "%AsyncIteratorPrototype%") {
            var a = t("%AsyncGenerator%");
            a && y && (o = y(a.prototype));
        }
        return l[r] = o, o;
    }, k = {
        __proto__: null,
        "%ArrayBufferPrototype%": [
            "ArrayBuffer",
            "prototype"
        ],
        "%ArrayPrototype%": [
            "Array",
            "prototype"
        ],
        "%ArrayProto_entries%": [
            "Array",
            "prototype",
            "entries"
        ],
        "%ArrayProto_forEach%": [
            "Array",
            "prototype",
            "forEach"
        ],
        "%ArrayProto_keys%": [
            "Array",
            "prototype",
            "keys"
        ],
        "%ArrayProto_values%": [
            "Array",
            "prototype",
            "values"
        ],
        "%AsyncFunctionPrototype%": [
            "AsyncFunction",
            "prototype"
        ],
        "%AsyncGenerator%": [
            "AsyncGeneratorFunction",
            "prototype"
        ],
        "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype"
        ],
        "%BooleanPrototype%": [
            "Boolean",
            "prototype"
        ],
        "%DataViewPrototype%": [
            "DataView",
            "prototype"
        ],
        "%DatePrototype%": [
            "Date",
            "prototype"
        ],
        "%ErrorPrototype%": [
            "Error",
            "prototype"
        ],
        "%EvalErrorPrototype%": [
            "EvalError",
            "prototype"
        ],
        "%Float32ArrayPrototype%": [
            "Float32Array",
            "prototype"
        ],
        "%Float64ArrayPrototype%": [
            "Float64Array",
            "prototype"
        ],
        "%FunctionPrototype%": [
            "Function",
            "prototype"
        ],
        "%Generator%": [
            "GeneratorFunction",
            "prototype"
        ],
        "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype"
        ],
        "%Int8ArrayPrototype%": [
            "Int8Array",
            "prototype"
        ],
        "%Int16ArrayPrototype%": [
            "Int16Array",
            "prototype"
        ],
        "%Int32ArrayPrototype%": [
            "Int32Array",
            "prototype"
        ],
        "%JSONParse%": [
            "JSON",
            "parse"
        ],
        "%JSONStringify%": [
            "JSON",
            "stringify"
        ],
        "%MapPrototype%": [
            "Map",
            "prototype"
        ],
        "%NumberPrototype%": [
            "Number",
            "prototype"
        ],
        "%ObjectPrototype%": [
            "Object",
            "prototype"
        ],
        "%ObjProto_toString%": [
            "Object",
            "prototype",
            "toString"
        ],
        "%ObjProto_valueOf%": [
            "Object",
            "prototype",
            "valueOf"
        ],
        "%PromisePrototype%": [
            "Promise",
            "prototype"
        ],
        "%PromiseProto_then%": [
            "Promise",
            "prototype",
            "then"
        ],
        "%Promise_all%": [
            "Promise",
            "all"
        ],
        "%Promise_reject%": [
            "Promise",
            "reject"
        ],
        "%Promise_resolve%": [
            "Promise",
            "resolve"
        ],
        "%RangeErrorPrototype%": [
            "RangeError",
            "prototype"
        ],
        "%ReferenceErrorPrototype%": [
            "ReferenceError",
            "prototype"
        ],
        "%RegExpPrototype%": [
            "RegExp",
            "prototype"
        ],
        "%SetPrototype%": [
            "Set",
            "prototype"
        ],
        "%SharedArrayBufferPrototype%": [
            "SharedArrayBuffer",
            "prototype"
        ],
        "%StringPrototype%": [
            "String",
            "prototype"
        ],
        "%SymbolPrototype%": [
            "Symbol",
            "prototype"
        ],
        "%SyntaxErrorPrototype%": [
            "SyntaxError",
            "prototype"
        ],
        "%TypedArrayPrototype%": [
            "TypedArray",
            "prototype"
        ],
        "%TypeErrorPrototype%": [
            "TypeError",
            "prototype"
        ],
        "%Uint8ArrayPrototype%": [
            "Uint8Array",
            "prototype"
        ],
        "%Uint8ClampedArrayPrototype%": [
            "Uint8ClampedArray",
            "prototype"
        ],
        "%Uint16ArrayPrototype%": [
            "Uint16Array",
            "prototype"
        ],
        "%Uint32ArrayPrototype%": [
            "Uint32Array",
            "prototype"
        ],
        "%URIErrorPrototype%": [
            "URIError",
            "prototype"
        ],
        "%WeakMapPrototype%": [
            "WeakMap",
            "prototype"
        ],
        "%WeakSetPrototype%": [
            "WeakSet",
            "prototype"
        ]
    }, h = p12("function-bind"), R = p12("hasown"), nr = h.call(Function.call, Array.prototype.concat), ar = h.call(Function.apply, Array.prototype.splice), C = h.call(Function.call, String.prototype.replace), w = h.call(Function.call, String.prototype.slice), yr = h.call(Function.call, RegExp.prototype.exec), ir = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, pr = /\\(\\)?/g, fr = function(r) {
        var o = w(r, 0, 1), n = w(r, -1);
        if (o === "%" && n !== "%") throw new S("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && o !== "%") throw new S("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return C(r, ir, function(f, A, i, m) {
            a[a.length] = i ? C(m, pr, "$1") : A || f;
        }), a;
    }, cr = function(r, o) {
        var n = r, a;
        if (R(k, n) && (a = k[n], n = "%" + a[0] + "%"), R(l, n)) {
            var f = l[n];
            if (f === P && (f = or(n)), typeof f > "u" && !o) throw new g("intrinsic " + r + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
                name: n,
                value: f
            };
        }
        throw new S("intrinsic " + r + " does not exist!");
    };
    j.exports = function(r, o) {
        if (typeof r != "string" || r.length === 0) throw new g("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof o != "boolean") throw new g('"allowMissing" argument must be a boolean');
        if (yr(/^%?[^%]*%?$/, r) === null) throw new S("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = fr(r), a = n.length > 0 ? n[0] : "", f = cr("%" + a + "%", o), A = f.name, i = f.value, m = !1, _ = f.alias;
        _ && (a = _[0], ar(n, nr([
            0,
            1
        ], _)));
        for(var I = 1, E = !0; I < n.length; I += 1){
            var c = n[I], F = w(c, 0, 1), b = w(c, -1);
            if ((F === '"' || F === "'" || F === "`" || b === '"' || b === "'" || b === "`") && F !== b) throw new S("property names with quotes must have matching quotes");
            if ((c === "constructor" || !E) && (m = !0), a += "." + c, A = "%" + a + "%", R(l, A)) i = l[A];
            else if (i != null) {
                if (!(c in i)) {
                    if (!o) throw new g("base intrinsic for " + r + " exists, but the property is not available.");
                    return;
                }
                if (u && I + 1 >= n.length) {
                    var U = u(i, c);
                    E = !!U, E && "get" in U && !("originalValue" in U.get) ? i = U.get : i = i[c];
                } else E = R(i, c), i = i[c];
                E && !m && (l[A] = i);
            }
        }
        return i;
    };
});
var s12 = {};
Y4(s12, {
    default: ()=>sr
});
var ur = T7(G7());
d9(s12, T7(G7()));
var { default: q9, ...lr } = ur, sr = q9 !== void 0 ? q9 : lr;
const mod15 = {
    default: sr
};
var require2 = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "get-intrinsic":
            return e(mod15);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var _14 = Object.create;
var u17 = Object.defineProperty;
var m11 = Object.getOwnPropertyDescriptor;
var v9 = Object.getOwnPropertyNames;
var x17 = Object.getPrototypeOf, y7 = Object.prototype.hasOwnProperty;
var P6 = ((e)=>typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e, {
        get: (r, t)=>(typeof require2 < "u" ? require2 : r)[t]
    }) : e)(function(e) {
    if (typeof require2 < "u") return require2.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
});
var b17 = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports), h11 = (e, r)=>{
    for(var t in r)u17(e, t, {
        get: r[t],
        enumerable: !0
    });
}, s13 = (e, r, t, l)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let o of v9(r))!y7.call(e, o) && o !== t && u17(e, o, {
        get: ()=>r[o],
        enumerable: !(l = m11(r, o)) || l.enumerable
    });
    return e;
}, f8 = (e, r, t)=>(s13(e, r, "default"), t && s13(t, r, "default")), n10 = (e, r, t)=>(t = e != null ? _14(x17(e)) : {}, s13(r || !e || !e.__esModule ? u17(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
var d10 = b17(($, c)=>{
    "use strict";
    var j = P6("get-intrinsic"), i = j("%Object.defineProperty%", !0) || !1;
    if (i) try {
        i({}, "a", {
            value: 1
        });
    } catch  {
        i = !1;
    }
    c.exports = i;
});
var a8 = {};
h11(a8, {
    default: ()=>I8
});
var q10 = n10(d10());
f8(a8, n10(d10()));
var { default: p13, ...G8 } = q10, I8 = p13 !== void 0 ? p13 : G8;
const mod16 = {
    default: I8
};
var g14 = Object.create;
var y8 = Object.defineProperty;
var v10 = Object.getOwnPropertyDescriptor;
var d11 = Object.getOwnPropertyNames;
var h12 = Object.getPrototypeOf, w8 = Object.prototype.hasOwnProperty;
var b18 = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), P7 = (r, e)=>{
    for(var t in e)y8(r, t, {
        get: e[t],
        enumerable: !0
    });
}, s14 = (r, e, t, l)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let o of d11(e))!w8.call(r, o) && o !== t && y8(r, o, {
        get: ()=>e[o],
        enumerable: !(l = v10(e, o)) || l.enumerable
    });
    return r;
}, n11 = (r, e, t)=>(s14(r, e, "default"), t && s14(t, e, "default")), p14 = (r, e, t)=>(t = r != null ? g14(h12(r)) : {}, s14(e || !r || !r.__esModule ? y8(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
var c11 = b18((q, m)=>{
    "use strict";
    m.exports = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var e = {}, t = Symbol("test"), l = Object(t);
        if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(l) !== "[object Symbol]") return !1;
        var o = 42;
        e[t] = o;
        for(t in e)return !1;
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
        var u = Object.getOwnPropertySymbols(e);
        if (u.length !== 1 || u[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var i = Object.getOwnPropertyDescriptor(e, t);
            if (i.value !== o || i.enumerable !== !0) return !1;
        }
        return !0;
    };
});
var a9 = b18((E, S)=>{
    "use strict";
    var O = typeof Symbol < "u" && Symbol, _ = c11();
    S.exports = function() {
        return typeof O != "function" || typeof Symbol != "function" || typeof O("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : _();
    };
});
var f9 = {};
P7(f9, {
    default: ()=>k9
});
var x18 = p14(a9());
n11(f9, p14(a9()));
var { default: j13, ...N6 } = x18, k9 = j13 !== void 0 ? j13 : N6;
const mod17 = {
    default: k9
};
var i8 = Object.create;
var s15 = Object.defineProperty;
var m12 = Object.getOwnPropertyDescriptor;
var x19 = Object.getOwnPropertyNames;
var b19 = Object.getPrototypeOf, j14 = Object.prototype.hasOwnProperty;
var v11 = (t, o)=>()=>(o || t((o = {
            exports: {}
        }).exports, o), o.exports), O10 = (t, o)=>{
    for(var e in o)s15(t, e, {
        get: o[e],
        enumerable: !0
    });
}, n12 = (t, o, e, a)=>{
    if (o && typeof o == "object" || typeof o == "function") for (let f of x19(o))!j14.call(t, f) && f !== e && s15(t, f, {
        get: ()=>o[f],
        enumerable: !(a = m12(o, f)) || a.enumerable
    });
    return t;
}, _15 = (t, o, e)=>(n12(t, o, "default"), e && n12(e, o, "default")), c12 = (t, o, e)=>(e = t != null ? i8(b19(t)) : {}, n12(o || !t || !t.__esModule ? s15(e, "default", {
        value: t,
        enumerable: !0
    }) : e, t));
var u18 = v11((q, l)=>{
    "use strict";
    var d = {
        foo: {}
    }, h = Object;
    l.exports = function() {
        return ({
            __proto__: d
        }).foo === d.foo && !(({
            __proto__: null
        }) instanceof h);
    };
});
var r1 = {};
O10(r1, {
    default: ()=>g15
});
var P8 = c12(u18());
_15(r1, c12(u18()));
var { default: p15, ...$6 } = P8, g15 = p15 !== void 0 ? p15 : $6;
const mod18 = {
    default: g15
};
var S9 = Object.create;
var l11 = Object.defineProperty;
var w9 = Object.getOwnPropertyDescriptor;
var E14 = Object.getOwnPropertyNames;
var O11 = Object.getPrototypeOf, R7 = Object.prototype.hasOwnProperty;
var g16 = (n, t)=>()=>(t || n((t = {
            exports: {}
        }).exports, t), t.exports), A7 = (n, t)=>{
    for(var r in t)l11(n, r, {
        get: t[r],
        enumerable: !0
    });
}, v12 = (n, t, r, o)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let e of E14(t))!R7.call(n, e) && e !== r && l11(n, e, {
        get: ()=>t[e],
        enumerable: !(o = w9(t, e)) || o.enumerable
    });
    return n;
}, p16 = (n, t, r)=>(v12(n, t, "default"), r && v12(r, t, "default")), d12 = (n, t, r)=>(r = n != null ? S9(O11(n)) : {}, v12(t || !n || !n.__esModule ? l11(r, "default", {
        value: n,
        enumerable: !0
    }) : r, n));
var m13 = g16((I, b)=>{
    "use strict";
    var M = "Function.prototype.bind called on incompatible ", T = Object.prototype.toString, q = Math.max, G = "[object Function]", h = function(t, r) {
        for(var o = [], e = 0; e < t.length; e += 1)o[e] = t[e];
        for(var a = 0; a < r.length; a += 1)o[a + t.length] = r[a];
        return o;
    }, $ = function(t, r) {
        for(var o = [], e = r || 0, a = 0; e < t.length; e += 1, a += 1)o[a] = t[e];
        return o;
    }, j = function(n, t) {
        for(var r = "", o = 0; o < n.length; o += 1)r += n[o], o + 1 < n.length && (r += t);
        return r;
    };
    b.exports = function(t) {
        var r = this;
        if (typeof r != "function" || T.apply(r) !== G) throw new TypeError(M + r);
        for(var o = $(arguments, 1), e, a = function() {
            if (this instanceof e) {
                var c = r.apply(this, h(o, arguments));
                return Object(c) === c ? c : this;
            }
            return r.apply(t, h(o, arguments));
        }, F = q(0, r.length - o.length), y = [], i = 0; i < F; i++)y[i] = "$" + i;
        if (e = Function("binder", "return function (" + j(y, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
            var f = function() {};
            f.prototype = r.prototype, e.prototype = new f, f.prototype = null;
        }
        return e;
    };
});
var s16 = g16((J, _)=>{
    "use strict";
    var z = m13();
    _.exports = Function.prototype.bind || z;
});
var u19 = {};
A7(u19, {
    default: ()=>D14
});
var B8 = d12(s16());
p16(u19, d12(s16()));
var { default: x20, ...C7 } = B8, D14 = x20 !== void 0 ? x20 : C7;
const mod19 = {
    default: D14
};
var require3 = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "function-bind":
            return e(mod19);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var i9 = Object.create;
var n13 = Object.defineProperty;
var _16 = Object.getOwnPropertyDescriptor;
var m14 = Object.getOwnPropertyNames;
var v13 = Object.getPrototypeOf, x21 = Object.prototype.hasOwnProperty;
var y9 = ((t)=>typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(t, {
        get: (e, r)=>(typeof require3 < "u" ? require3 : e)[r]
    }) : t)(function(t) {
    if (typeof require3 < "u") return require3.apply(this, arguments);
    throw Error('Dynamic require of "' + t + '" is not supported');
});
var O12 = (t, e)=>()=>(e || t((e = {
            exports: {}
        }).exports, e), e.exports), b20 = (t, e)=>{
    for(var r in e)n13(t, r, {
        get: e[r],
        enumerable: !0
    });
}, p17 = (t, e, r, u)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let l of m14(e))!x21.call(t, l) && l !== r && n13(t, l, {
        get: ()=>e[l],
        enumerable: !(u = _16(e, l)) || u.enumerable
    });
    return t;
}, a10 = (t, e, r)=>(p17(t, e, "default"), r && p17(r, e, "default")), c13 = (t, e, r)=>(r = t != null ? i9(v13(t)) : {}, p17(e || !t || !t.__esModule ? n13(r, "default", {
        value: t,
        enumerable: !0
    }) : r, t));
var s17 = O12((g, d)=>{
    "use strict";
    var h = Function.prototype.call, w = Object.prototype.hasOwnProperty, j = y9("function-bind");
    d.exports = j.call(h, w);
});
var o12 = {};
b20(o12, {
    default: ()=>P9
});
var q11 = c13(s17());
a10(o12, c13(s17()));
var { default: f10, ...F12 } = q11, P9 = f10 !== void 0 ? f10 : F12;
const mod20 = {
    default: P9
};
var require4 = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "has-symbols":
            return e(mod17);
        case "has-proto":
            return e(mod18);
        case "function-bind":
            return e(mod19);
        case "hasown":
            return e(mod20);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var $7 = Object.create;
var N7 = Object.defineProperty;
var J8 = Object.getOwnPropertyDescriptor;
var q12 = Object.getOwnPropertyNames;
var V8 = Object.getPrototypeOf, z8 = Object.prototype.hasOwnProperty;
var U11 = ((t)=>typeof require4 < "u" ? require4 : typeof Proxy < "u" ? new Proxy(t, {
        get: (r, o)=>(typeof require4 < "u" ? require4 : r)[o]
    }) : t)(function(t) {
    if (typeof require4 < "u") return require4.apply(this, arguments);
    throw Error('Dynamic require of "' + t + '" is not supported');
});
var L7 = (t, r)=>()=>(r || t((r = {
            exports: {}
        }).exports, r), r.exports), Y5 = (t, r)=>{
    for(var o in r)N7(t, o, {
        get: r[o],
        enumerable: !0
    });
}, x22 = (t, r, o, n)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let a of q12(r))!z8.call(t, a) && a !== o && N7(t, a, {
        get: ()=>r[a],
        enumerable: !(n = J8(r, a)) || n.enumerable
    });
    return t;
}, A8 = (t, r, o)=>(x22(t, r, "default"), o && x22(o, r, "default")), T8 = (t, r, o)=>(o = t != null ? $7(V8(t)) : {}, x22(r || !t || !t.__esModule ? N7(o, "default", {
        value: t,
        enumerable: !0
    }) : o, t));
var G9 = L7((cr, W)=>{
    "use strict";
    var e, v = SyntaxError, j = Function, g = TypeError, _ = function(t) {
        try {
            return j('"use strict"; return (' + t + ").constructor;")();
        } catch  {}
    }, c = Object.getOwnPropertyDescriptor;
    if (c) try {
        c({}, "");
    } catch  {
        c = null;
    }
    var O = function() {
        throw new g;
    }, H = c ? function() {
        try {
            return arguments.callee, O;
        } catch  {
            try {
                return c(arguments, "callee").get;
            } catch  {
                return O;
            }
        }
    }() : O, d = U11("has-symbols")(), K = U11("has-proto")(), y = Object.getPrototypeOf || (K ? function(t) {
        return t.__proto__;
    } : null), P = {}, Q = typeof Uint8Array > "u" || !y ? e : y(Uint8Array), l = {
        "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
        "%ArrayIteratorPrototype%": d && y ? y([][Symbol.iterator]()) : e,
        "%AsyncFromSyncIteratorPrototype%": e,
        "%AsyncFunction%": P,
        "%AsyncGenerator%": P,
        "%AsyncGeneratorFunction%": P,
        "%AsyncIteratorPrototype%": P,
        "%Atomics%": typeof Atomics > "u" ? e : Atomics,
        "%BigInt%": typeof BigInt > "u" ? e : BigInt,
        "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? e : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
        "%Function%": j,
        "%GeneratorFunction%": P,
        "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": d && y ? y(y([][Symbol.iterator]())) : e,
        "%JSON%": typeof JSON == "object" ? JSON : e,
        "%Map%": typeof Map > "u" ? e : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !d || !y ? e : y(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? e : Promise,
        "%Proxy%": typeof Proxy > "u" ? e : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? e : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? e : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !d || !y ? e : y(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": d && y ? y(""[Symbol.iterator]()) : e,
        "%Symbol%": d ? Symbol : e,
        "%SyntaxError%": v,
        "%ThrowTypeError%": H,
        "%TypedArray%": Q,
        "%TypeError%": g,
        "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet
    };
    if (y) try {
        null.error;
    } catch (t) {
        k = y(y(t)), l["%Error.prototype%"] = k;
    }
    var k, X = function t(r) {
        var o;
        if (r === "%AsyncFunction%") o = _("async function () {}");
        else if (r === "%GeneratorFunction%") o = _("function* () {}");
        else if (r === "%AsyncGeneratorFunction%") o = _("async function* () {}");
        else if (r === "%AsyncGenerator%") {
            var n = t("%AsyncGeneratorFunction%");
            n && (o = n.prototype);
        } else if (r === "%AsyncIteratorPrototype%") {
            var a = t("%AsyncGenerator%");
            a && y && (o = y(a.prototype));
        }
        return l[r] = o, o;
    }, C = {
        "%ArrayBufferPrototype%": [
            "ArrayBuffer",
            "prototype"
        ],
        "%ArrayPrototype%": [
            "Array",
            "prototype"
        ],
        "%ArrayProto_entries%": [
            "Array",
            "prototype",
            "entries"
        ],
        "%ArrayProto_forEach%": [
            "Array",
            "prototype",
            "forEach"
        ],
        "%ArrayProto_keys%": [
            "Array",
            "prototype",
            "keys"
        ],
        "%ArrayProto_values%": [
            "Array",
            "prototype",
            "values"
        ],
        "%AsyncFunctionPrototype%": [
            "AsyncFunction",
            "prototype"
        ],
        "%AsyncGenerator%": [
            "AsyncGeneratorFunction",
            "prototype"
        ],
        "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype"
        ],
        "%BooleanPrototype%": [
            "Boolean",
            "prototype"
        ],
        "%DataViewPrototype%": [
            "DataView",
            "prototype"
        ],
        "%DatePrototype%": [
            "Date",
            "prototype"
        ],
        "%ErrorPrototype%": [
            "Error",
            "prototype"
        ],
        "%EvalErrorPrototype%": [
            "EvalError",
            "prototype"
        ],
        "%Float32ArrayPrototype%": [
            "Float32Array",
            "prototype"
        ],
        "%Float64ArrayPrototype%": [
            "Float64Array",
            "prototype"
        ],
        "%FunctionPrototype%": [
            "Function",
            "prototype"
        ],
        "%Generator%": [
            "GeneratorFunction",
            "prototype"
        ],
        "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype"
        ],
        "%Int8ArrayPrototype%": [
            "Int8Array",
            "prototype"
        ],
        "%Int16ArrayPrototype%": [
            "Int16Array",
            "prototype"
        ],
        "%Int32ArrayPrototype%": [
            "Int32Array",
            "prototype"
        ],
        "%JSONParse%": [
            "JSON",
            "parse"
        ],
        "%JSONStringify%": [
            "JSON",
            "stringify"
        ],
        "%MapPrototype%": [
            "Map",
            "prototype"
        ],
        "%NumberPrototype%": [
            "Number",
            "prototype"
        ],
        "%ObjectPrototype%": [
            "Object",
            "prototype"
        ],
        "%ObjProto_toString%": [
            "Object",
            "prototype",
            "toString"
        ],
        "%ObjProto_valueOf%": [
            "Object",
            "prototype",
            "valueOf"
        ],
        "%PromisePrototype%": [
            "Promise",
            "prototype"
        ],
        "%PromiseProto_then%": [
            "Promise",
            "prototype",
            "then"
        ],
        "%Promise_all%": [
            "Promise",
            "all"
        ],
        "%Promise_reject%": [
            "Promise",
            "reject"
        ],
        "%Promise_resolve%": [
            "Promise",
            "resolve"
        ],
        "%RangeErrorPrototype%": [
            "RangeError",
            "prototype"
        ],
        "%ReferenceErrorPrototype%": [
            "ReferenceError",
            "prototype"
        ],
        "%RegExpPrototype%": [
            "RegExp",
            "prototype"
        ],
        "%SetPrototype%": [
            "Set",
            "prototype"
        ],
        "%SharedArrayBufferPrototype%": [
            "SharedArrayBuffer",
            "prototype"
        ],
        "%StringPrototype%": [
            "String",
            "prototype"
        ],
        "%SymbolPrototype%": [
            "Symbol",
            "prototype"
        ],
        "%SyntaxErrorPrototype%": [
            "SyntaxError",
            "prototype"
        ],
        "%TypedArrayPrototype%": [
            "TypedArray",
            "prototype"
        ],
        "%TypeErrorPrototype%": [
            "TypeError",
            "prototype"
        ],
        "%Uint8ArrayPrototype%": [
            "Uint8Array",
            "prototype"
        ],
        "%Uint8ClampedArrayPrototype%": [
            "Uint8ClampedArray",
            "prototype"
        ],
        "%Uint16ArrayPrototype%": [
            "Uint16Array",
            "prototype"
        ],
        "%Uint32ArrayPrototype%": [
            "Uint32Array",
            "prototype"
        ],
        "%URIErrorPrototype%": [
            "URIError",
            "prototype"
        ],
        "%WeakMapPrototype%": [
            "WeakMap",
            "prototype"
        ],
        "%WeakSetPrototype%": [
            "WeakSet",
            "prototype"
        ]
    }, E = U11("function-bind"), R = U11("hasown"), Z = E.call(Function.call, Array.prototype.concat), rr = E.call(Function.apply, Array.prototype.splice), M = E.call(Function.call, String.prototype.replace), w = E.call(Function.call, String.prototype.slice), er = E.call(Function.call, RegExp.prototype.exec), tr = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, or = /\\(\\)?/g, nr = function(r) {
        var o = w(r, 0, 1), n = w(r, -1);
        if (o === "%" && n !== "%") throw new v("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && o !== "%") throw new v("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return M(r, tr, function(p, s, i, h) {
            a[a.length] = i ? M(h, or, "$1") : s || p;
        }), a;
    }, ar = function(r, o) {
        var n = r, a;
        if (R(C, n) && (a = C[n], n = "%" + a[0] + "%"), R(l, n)) {
            var p = l[n];
            if (p === P && (p = X(n)), typeof p > "u" && !o) throw new g("intrinsic " + r + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
                name: n,
                value: p
            };
        }
        throw new v("intrinsic " + r + " does not exist!");
    };
    W.exports = function(r, o) {
        if (typeof r != "string" || r.length === 0) throw new g("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof o != "boolean") throw new g('"allowMissing" argument must be a boolean');
        if (er(/^%?[^%]*%?$/, r) === null) throw new v("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = nr(r), a = n.length > 0 ? n[0] : "", p = ar("%" + a + "%", o), s = p.name, i = p.value, h = !1, B = p.alias;
        B && (a = B[0], rr(n, Z([
            0,
            1
        ], B)));
        for(var m = 1, S = !0; m < n.length; m += 1){
            var f = n[m], I = w(f, 0, 1), F = w(f, -1);
            if ((I === '"' || I === "'" || I === "`" || F === '"' || F === "'" || F === "`") && I !== F) throw new v("property names with quotes must have matching quotes");
            if ((f === "constructor" || !S) && (h = !0), a += "." + f, s = "%" + a + "%", R(l, s)) i = l[s];
            else if (i != null) {
                if (!(f in i)) {
                    if (!o) throw new g("base intrinsic for " + r + " exists, but the property is not available.");
                    return;
                }
                if (c && m + 1 >= n.length) {
                    var b = c(i, f);
                    S = !!b, S && "get" in b && !("originalValue" in b.get) ? i = b.get : i = i[f];
                } else S = R(i, f), i = i[f];
                S && !h && (l[s] = i);
            }
        }
        return i;
    };
});
var u20 = {};
Y5(u20, {
    default: ()=>pr
});
var yr = T8(G9());
A8(u20, T8(G9()));
var { default: D15, ...ir } = yr, pr = D15 !== void 0 ? D15 : ir;
const mod21 = {
    default: pr
};
var require5 = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "get-intrinsic":
            return e(mod21);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var _17 = Object.create;
var a11 = Object.defineProperty;
var m15 = Object.getOwnPropertyDescriptor;
var g17 = Object.getOwnPropertyNames;
var x23 = Object.getPrototypeOf, O13 = Object.prototype.hasOwnProperty;
var h13 = ((e)=>typeof require5 < "u" ? require5 : typeof Proxy < "u" ? new Proxy(e, {
        get: (t, r)=>(typeof require5 < "u" ? require5 : t)[r]
    }) : e)(function(e) {
    if (typeof require5 < "u") return require5.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
});
var v14 = (e, t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t), t.exports), y10 = (e, t)=>{
    for(var r in t)a11(e, r, {
        get: t[r],
        enumerable: !0
    });
}, s18 = (e, t, r, f)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let i of g17(t))!O13.call(e, i) && i !== r && a11(e, i, {
        get: ()=>t[i],
        enumerable: !(f = m15(t, i)) || f.enumerable
    });
    return e;
}, u21 = (e, t, r)=>(s18(e, t, "default"), r && s18(r, t, "default")), l12 = (e, t, r)=>(r = e != null ? _17(x23(e)) : {}, s18(t || !e || !e.__esModule ? a11(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
var c14 = v14((w, d)=>{
    "use strict";
    var D = h13("get-intrinsic"), n = D("%Object.getOwnPropertyDescriptor%", !0);
    if (n) try {
        n([], "length");
    } catch  {
        n = null;
    }
    d.exports = n;
});
var o13 = {};
y10(o13, {
    default: ()=>j15
});
var P10 = l12(c14());
u21(o13, l12(c14()));
var { default: p18, ...b21 } = P10, j15 = p18 !== void 0 ? p18 : b21;
const mod22 = {
    default: j15
};
var require6 = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "es-define-property":
            return e(mod16);
        case "es-errors/syntax":
            return e(mod9);
        case "es-errors/type":
            return e(mod10);
        case "gopd":
            return e(mod22);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var _18 = Object.create;
var b22 = Object.defineProperty;
var q13 = Object.getOwnPropertyDescriptor;
var x24 = Object.getOwnPropertyNames;
var E15 = Object.getPrototypeOf, $8 = Object.prototype.hasOwnProperty;
var i10 = ((n)=>typeof require6 < "u" ? require6 : typeof Proxy < "u" ? new Proxy(n, {
        get: (e, r)=>(typeof require6 < "u" ? require6 : e)[r]
    }) : n)(function(n) {
    if (typeof require6 < "u") return require6.apply(this, arguments);
    throw Error('Dynamic require of "' + n + '" is not supported');
});
var C8 = (n, e)=>()=>(e || n((e = {
            exports: {}
        }).exports, e), e.exports), P11 = (n, e)=>{
    for(var r in e)b22(n, r, {
        get: e[r],
        enumerable: !0
    });
}, g18 = (n, e, r, s)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let o of x24(e))!$8.call(n, o) && o !== r && b22(n, o, {
        get: ()=>e[o],
        enumerable: !(s = q13(e, o)) || s.enumerable
    });
    return n;
}, l13 = (n, e, r)=>(g18(n, e, "default"), r && g18(r, e, "default")), p19 = (n, e, r)=>(r = n != null ? _18(E15(n)) : {}, g18(e || !n || !n.__esModule ? b22(r, "default", {
        value: n,
        enumerable: !0
    }) : r, n));
var d13 = C8((z, v)=>{
    "use strict";
    var w = i10("es-define-property"), T = i10("es-errors/syntax"), u = i10("es-errors/type"), h = i10("gopd");
    v.exports = function(e, r, s) {
        if (!e || typeof e != "object" && typeof e != "function") throw new u("`obj` must be an object or a function`");
        if (typeof r != "string" && typeof r != "symbol") throw new u("`property` must be a string or a symbol`");
        if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new u("`nonEnumerable`, if provided, must be a boolean or null");
        if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new u("`nonWritable`, if provided, must be a boolean or null");
        if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new u("`nonConfigurable`, if provided, must be a boolean or null");
        if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new u("`loose`, if provided, must be a boolean");
        var o = arguments.length > 3 ? arguments[3] : null, f = arguments.length > 4 ? arguments[4] : null, m = arguments.length > 5 ? arguments[5] : null, c = arguments.length > 6 ? arguments[6] : !1, a = !!h && h(e, r);
        if (w) w(e, r, {
            configurable: m === null && a ? a.configurable : !m,
            enumerable: o === null && a ? a.enumerable : !o,
            value: s,
            writable: f === null && a ? a.writable : !f
        });
        else if (c || !o && !f && !m) e[r] = s;
        else throw new T("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
    };
});
var t1 = {};
P11(t1, {
    default: ()=>S10
});
var W6 = p19(d13());
l13(t1, p19(d13()));
var { default: y11, ...D16 } = W6, S10 = y11 !== void 0 ? y11 : D16;
const mod23 = {
    default: S10
};
var require7 = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "es-define-property":
            return e(mod16);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var y12 = Object.create;
var s19 = Object.defineProperty;
var _19 = Object.getOwnPropertyDescriptor;
var D17 = Object.getOwnPropertyNames;
var m16 = Object.getPrototypeOf, x25 = Object.prototype.hasOwnProperty;
var v15 = ((e)=>typeof require7 < "u" ? require7 : typeof Proxy < "u" ? new Proxy(e, {
        get: (r, t)=>(typeof require7 < "u" ? require7 : r)[t]
    }) : e)(function(e) {
    if (typeof require7 < "u") return require7.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
});
var A9 = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports), B9 = (e, r)=>{
    for(var t in r)s19(e, t, {
        get: r[t],
        enumerable: !0
    });
}, a12 = (e, r, t, h)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let o of D17(r))!x25.call(e, o) && o !== t && s19(e, o, {
        get: ()=>r[o],
        enumerable: !(h = _19(r, o)) || h.enumerable
    });
    return e;
}, u22 = (e, r, t)=>(a12(e, r, "default"), t && a12(t, r, "default")), p20 = (e, r, t)=>(t = e != null ? y12(m16(e)) : {}, a12(r || !e || !e.__esModule ? s19(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
var i11 = A9((b, l)=>{
    "use strict";
    var f = v15("es-define-property"), c = function() {
        return !!f;
    };
    c.hasArrayLengthDefineBug = function() {
        if (!f) return null;
        try {
            return f([], "length", {
                value: 1
            }).length !== 1;
        } catch  {
            return !0;
        }
    };
    l.exports = c;
});
var n14 = {};
B9(n14, {
    default: ()=>q14,
    hasArrayLengthDefineBug: ()=>L8
});
var d14 = p20(i11());
u22(n14, p20(i11()));
var { hasArrayLengthDefineBug: L8 } = d14, { default: g19, ...P12 } = d14, q14 = g19 !== void 0 ? g19 : P12;
const mod24 = {
    default: q14,
    hasArrayLengthDefineBug: L8
};
var require8 = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "get-intrinsic":
            return e(mod15);
        case "define-data-property":
            return e(mod23);
        case "has-property-descriptors":
            return e(mod24);
        case "gopd":
            return e(mod22);
        case "es-errors/type":
            return e(mod10);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var _20 = Object.create;
var l14 = Object.defineProperty;
var q15 = Object.getOwnPropertyDescriptor;
var w10 = Object.getOwnPropertyNames;
var d15 = Object.getPrototypeOf, x26 = Object.prototype.hasOwnProperty;
var u23 = ((r)=>typeof require8 < "u" ? require8 : typeof Proxy < "u" ? new Proxy(r, {
        get: (e, t)=>(typeof require8 < "u" ? require8 : e)[t]
    }) : r)(function(r) {
    if (typeof require8 < "u") return require8.apply(this, arguments);
    throw Error('Dynamic require of "' + r + '" is not supported');
});
var y13 = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), I9 = (r, e)=>{
    for(var t in e)l14(r, t, {
        get: e[t],
        enumerable: !0
    });
}, s20 = (r, e, t, a)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let i of w10(e))!x26.call(r, i) && i !== t && l14(r, i, {
        get: ()=>e[i],
        enumerable: !(a = q15(e, i)) || a.enumerable
    });
    return r;
}, n15 = (r, e, t)=>(s20(r, e, "default"), t && s20(t, e, "default")), p21 = (r, e, t)=>(t = r != null ? _20(d15(r)) : {}, s20(e || !r || !r.__esModule ? l14(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
var v16 = y13((O, b)=>{
    "use strict";
    var L = u23("get-intrinsic"), F = u23("define-data-property"), D = u23("has-property-descriptors")(), c = u23("gopd"), m = u23("es-errors/type"), $ = L("%Math.floor%");
    b.exports = function(e, t) {
        if (typeof e != "function") throw new m("`fn` is not a function");
        if (typeof t != "number" || t < 0 || t > 4294967295 || $(t) !== t) throw new m("`length` must be a positive 32-bit integer");
        var a = arguments.length > 2 && !!arguments[2], i = !0, g = !0;
        if ("length" in e && c) {
            var f = c(e, "length");
            f && !f.configurable && (i = !1), f && !f.writable && (g = !1);
        }
        return (i || g || !a) && (D ? F(e, "length", t, !0, !0) : F(e, "length", t)), e;
    };
});
var o14 = {};
I9(o14, {
    default: ()=>G10
});
var C9 = p21(v16());
n15(o14, p21(v16()));
var { default: h14, ...E16 } = C9, G10 = h14 !== void 0 ? h14 : E16;
const mod25 = {
    default: G10
};
var require9 = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "function-bind":
            return e(mod4);
        case "get-intrinsic":
            return e(mod15);
        case "set-function-length":
            return e(mod25);
        case "es-errors/type":
            return e(mod10);
        case "es-define-property":
            return e(mod16);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var g20 = Object.create;
var f11 = Object.defineProperty;
var h15 = Object.getOwnPropertyDescriptor;
var B10 = Object.getOwnPropertyNames;
var w11 = Object.getPrototypeOf, F13 = Object.prototype.hasOwnProperty;
var u24 = ((r)=>typeof require9 < "u" ? require9 : typeof Proxy < "u" ? new Proxy(r, {
        get: (e, t)=>(typeof require9 < "u" ? require9 : e)[t]
    }) : r)(function(r) {
    if (typeof require9 < "u") return require9.apply(this, arguments);
    throw Error('Dynamic require of "' + r + '" is not supported');
});
var b23 = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), A10 = (r, e)=>{
    for(var t in e)f11(r, t, {
        get: e[t],
        enumerable: !0
    });
}, o15 = (r, e, t, y)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let p of B10(e))!F13.call(r, p) && p !== t && f11(r, p, {
        get: ()=>e[p],
        enumerable: !(y = h15(e, p)) || y.enumerable
    });
    return r;
}, n16 = (r, e, t)=>(o15(r, e, "default"), t && o15(t, e, "default")), d16 = (r, e, t)=>(t = r != null ? g20(w11(r)) : {}, o15(e || !r || !r.__esModule ? f11(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
var s21 = b23((T, l)=>{
    "use strict";
    var c = u24("function-bind"), i = u24("get-intrinsic"), E = u24("set-function-length"), G = u24("es-errors/type"), x = i("%Function.prototype.apply%"), q = i("%Function.prototype.call%"), _ = i("%Reflect.apply%", !0) || c.call(q, x), v = u24("es-define-property"), I = i("%Math.max%");
    l.exports = function(e) {
        if (typeof e != "function") throw new G("a function is required");
        var t = _(c, q, arguments);
        return E(t, 1 + I(0, e.length - (arguments.length - 1)), !0);
    };
    var m = function() {
        return _(c, x, arguments);
    };
    v ? v(l.exports, "apply", {
        value: m
    }) : l.exports.apply = m;
});
var a13 = {};
A10(a13, {
    default: ()=>P13
});
var L9 = d16(s21());
n16(a13, d16(s21()));
var { default: $9, ...M8 } = L9, P13 = $9 !== void 0 ? $9 : M8;
const mod26 = {
    default: P13
};
var require10 = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "get-intrinsic":
            return e(mod15);
        case "function-bind":
            return e(mod4);
        case "set-function-length":
            return e(mod25);
        case "es-errors/type":
            return e(mod10);
        case "es-define-property":
            return e(mod16);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var F14 = Object.create;
var f12 = Object.defineProperty;
var G11 = Object.getOwnPropertyDescriptor;
var O14 = Object.getOwnPropertyNames;
var b24 = Object.getPrototypeOf, A11 = Object.prototype.hasOwnProperty;
var a14 = ((e)=>typeof require10 < "u" ? require10 : typeof Proxy < "u" ? new Proxy(e, {
        get: (r, t)=>(typeof require10 < "u" ? require10 : r)[t]
    }) : e)(function(e) {
    if (typeof require10 < "u") return require10.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
});
var v17 = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports), E17 = (e, r)=>{
    for(var t in r)f12(e, t, {
        get: r[t],
        enumerable: !0
    });
}, c15 = (e, r, t, i)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let u of O14(r))!A11.call(e, u) && u !== t && f12(e, u, {
        get: ()=>r[u],
        enumerable: !(i = G11(r, u)) || i.enumerable
    });
    return e;
}, p22 = (e, r, t)=>(c15(e, r, "default"), t && c15(t, r, "default")), y14 = (e, r, t)=>(t = e != null ? F14(b24(e)) : {}, c15(r || !e || !e.__esModule ? f12(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
var _21 = v17((z, o)=>{
    "use strict";
    var s = a14("function-bind"), l = a14("get-intrinsic"), L = a14("set-function-length"), M = a14("es-errors/type"), q = l("%Function.prototype.apply%"), $ = l("%Function.prototype.call%"), g = l("%Reflect.apply%", !0) || s.call($, q), x = a14("es-define-property"), P = l("%Math.max%");
    o.exports = function(r) {
        if (typeof r != "function") throw new M("a function is required");
        var t = g(s, $, arguments);
        return L(t, 1 + P(0, r.length - (arguments.length - 1)), !0);
    };
    var m = function() {
        return g(s, q, arguments);
    };
    x ? x(o.exports, "apply", {
        value: m
    }) : o.exports.apply = m;
});
var d17 = v17((C, I)=>{
    "use strict";
    var h = a14("get-intrinsic"), B = _21(), R = B(h("String.prototype.indexOf"));
    I.exports = function(r, t) {
        var i = h(r, !!t);
        return typeof i == "function" && R(r, ".prototype.") > -1 ? B(i) : i;
    };
});
var n17 = {};
E17(n17, {
    default: ()=>j16
});
var S11 = y14(d17());
p22(n17, y14(d17()));
var { default: w12, ...T9 } = S11, j16 = w12 !== void 0 ? w12 : T9;
const mod27 = {
    default: j16
};
var require11 = (n)=>{
    const e = (m)=>typeof m.default < "u" ? m.default : m;
    switch(n){
        case "jsonify":
            return e(mod1);
        case "isarray":
            return e(mod2);
        case "object-keys":
            return e(mod3);
        case "call-bind":
            return e(mod26);
        case "call-bind/callBound":
            return e(mod27);
        default:
            throw new Error("module \"" + n + "\" not found");
    }
};
var T10 = Object.create;
var h16 = Object.defineProperty;
var z9 = Object.getOwnPropertyDescriptor;
var D18 = Object.getOwnPropertyNames;
var F15 = Object.getPrototypeOf, G12 = Object.prototype.hasOwnProperty;
var l15 = ((a)=>typeof require11 < "u" ? require11 : typeof Proxy < "u" ? new Proxy(a, {
        get: (t, r)=>(typeof require11 < "u" ? require11 : t)[r]
    }) : a)(function(a) {
    if (typeof require11 < "u") return require11.apply(this, arguments);
    throw Error('Dynamic require of "' + a + '" is not supported');
});
var H6 = (a, t)=>()=>(t || a((t = {
            exports: {}
        }).exports, t), t.exports), I10 = (a, t)=>{
    for(var r in t)h16(a, r, {
        get: t[r],
        enumerable: !0
    });
}, S12 = (a, t, r, u)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let n of D18(t))!G12.call(a, n) && n !== r && h16(a, n, {
        get: ()=>t[n],
        enumerable: !(u = z9(t, n)) || u.enumerable
    });
    return a;
}, o16 = (a, t, r)=>(S12(a, t, "default"), r && S12(r, t, "default")), j17 = (a, t, r)=>(r = a != null ? T10(F15(a)) : {}, S12(t || !a || !a.__esModule ? h16(r, "default", {
        value: a,
        enumerable: !0
    }) : r, a));
var N8 = H6((Y, B)=>{
    "use strict";
    var _ = (typeof JSON < "u" ? JSON : l15("jsonify")).stringify, L = l15("isarray"), M = l15("object-keys"), P = l15("call-bind"), w = l15("call-bind/callBound"), b = w("Array.prototype.join"), J = w("Array.prototype.push"), A = function(t, r) {
        for(var u = "", n = 0; n < t; n += 1)u += r;
        return u;
    }, Q = function(a, t, r) {
        return r;
    };
    B.exports = function(t) {
        var r = arguments.length > 1 ? arguments[1] : void 0, u = r && r.space || "";
        typeof u == "number" && (u = A(u, " "));
        var n = !!r && typeof r.cycles == "boolean" && r.cycles, $ = r && r.replacer ? P(r.replacer) : Q, m = typeof r == "function" ? r : r && r.cmp, k = m && function(p) {
            var y = m.length > 2 && function(e) {
                return p[e];
            };
            return function(i, e) {
                return m({
                    key: i,
                    value: p[i]
                }, {
                    key: e,
                    value: p[e]
                }, y ? {
                    __proto__: null,
                    get: y
                } : void 0);
            };
        }, s = [];
        return function p(y, i, e, O) {
            var g = u ? `
` + A(O, u) : "", C = u ? ": " : ":";
            if (e && e.toJSON && typeof e.toJSON == "function" && (e = e.toJSON()), e = $(y, i, e), e !== void 0) {
                if (typeof e != "object" || e === null) return _(e);
                if (L(e)) {
                    for(var v = [], f = 0; f < e.length; f++){
                        var E = p(e, f, e[f], O + 1) || _(null);
                        J(v, g + u + E);
                    }
                    return "[" + b(v, ",") + g + "]";
                }
                if (s.indexOf(e) !== -1) {
                    if (n) return _("__cycle__");
                    throw new TypeError("Converting circular structure to JSON");
                } else J(s, e);
                for(var q = M(e).sort(k && k(e)), v = [], f = 0; f < q.length; f++){
                    var i = q[f], x = p(e, i, e[i], O + 1);
                    if (x) {
                        var K = _(i) + C + x;
                        J(v, g + u + K);
                    }
                }
                return s.splice(s.indexOf(e), 1), "{" + b(v, ",") + g + "}";
            }
        }({
            "": t
        }, "", t, 0);
    };
});
var c16 = {};
I10(c16, {
    default: ()=>W7
});
var U12 = j17(N8());
o16(c16, j17(N8()));
var { default: R8, ...V9 } = U12, W7 = R8 !== void 0 ? R8 : V9;
var NostrKind;
(function(NostrKind) {
    NostrKind[NostrKind["META_DATA"] = 0] = "META_DATA";
    NostrKind[NostrKind["TEXT_NOTE"] = 1] = "TEXT_NOTE";
    NostrKind[NostrKind["RECOMMED_SERVER"] = 2] = "RECOMMED_SERVER";
    NostrKind[NostrKind["CONTACTS"] = 3] = "CONTACTS";
    NostrKind[NostrKind["DIRECT_MESSAGE"] = 4] = "DIRECT_MESSAGE";
    NostrKind[NostrKind["DIRECT_MESSAGE_V2"] = 44] = "DIRECT_MESSAGE_V2";
    NostrKind[NostrKind["DELETE"] = 5] = "DELETE";
    NostrKind[NostrKind["REACTION"] = 7] = "REACTION";
    NostrKind[NostrKind["Encrypted_Custom_App_Data"] = 20231125] = "Encrypted_Custom_App_Data";
    NostrKind[NostrKind["Custom_App_Data"] = 30078] = "Custom_App_Data";
    NostrKind[NostrKind["Long_Form"] = 30023] = "Long_Form";
    NostrKind[NostrKind["HTTP_AUTH"] = 27235] = "HTTP_AUTH";
})(NostrKind || (NostrKind = {}));
function getTags(event) {
    const tags = {
        p: [],
        e: []
    };
    for (const tag of event.tags){
        switch(tag[0]){
            case "p":
                tags.p.push(tag[1]);
                break;
            case "e":
                tags.e.push(tag[1]);
                break;
        }
    }
    return tags;
}
async function calculateId(event) {
    const commit = eventCommitment(event);
    const sha256 = A1.sha256;
    const buf = utf8Encode(commit);
    return hexEncode(await sha256(buf));
}
function eventCommitment(event) {
    const { pubkey, created_at, kind, tags, content } = event;
    return JSON.stringify([
        0,
        pubkey,
        created_at,
        kind,
        tags,
        content
    ]);
}
function hexEncode(buf) {
    let str = "";
    for(let i = 0; i < buf.length; i++){
        const c = buf[i];
        str += hexChar(c >> 4);
        str += hexChar(c & 0xF);
    }
    return str;
}
function hexChar(val) {
    if (val < 10) {
        return String.fromCharCode(48 + val);
    }
    if (val < 16) {
        return String.fromCharCode(97 + val - 10);
    }
}
async function verifyEvent(event) {
    try {
        return ae.verify(event.sig, await calculateId(event), event.pubkey);
    } catch (err) {
        return false;
    }
}
async function verify_event_v2(event) {
    const sha256 = A1.sha256;
    try {
        const event_copy = {
            ...event
        };
        delete event_copy.sig;
        delete event_copy.id;
        const buf = utf8Encode(W7(event_copy));
        const id = hexEncode(await sha256(buf));
        return ae.verify(event.sig, id, event.pubkey);
    } catch (err) {
        return false;
    }
}
function B11(e) {
    return typeof e == "object" && e !== null;
}
function j18(e, t) {
    if (!!!e) throw new Error(t ?? "Unexpected invariant triggered.");
}
var ie1 = /\r\n|[\n\r]/g;
function y15(e, t) {
    let n = 0, s = 1;
    for (let i of e.body.matchAll(ie1)){
        if (typeof i.index == "number" || j18(!1), i.index >= t) break;
        n = i.index + i[0].length, s += 1;
    }
    return {
        line: s,
        column: t + 1 - n
    };
}
function Y6(e) {
    return M9(e.source, y15(e.source, e.start));
}
function M9(e, t) {
    let n = e.locationOffset.column - 1, s = "".padStart(n) + e.body, i = t.line - 1, o = e.locationOffset.line - 1, a = t.line + o, u = t.line === 1 ? n : 0, p = t.column + u, E = `${e.name}:${a}:${p}
`, d = s.split(/\r\n|[\n\r]/g), N = d[i];
    if (N.length > 120) {
        let m = Math.floor(p / 80), P = p % 80, f = [];
        for(let I = 0; I < N.length; I += 80)f.push(N.slice(I, I + 80));
        return E + $10([
            [
                `${a} |`,
                f[0]
            ],
            ...f.slice(1, m + 1).map((I)=>[
                    "|",
                    I
                ]),
            [
                "|",
                "^".padStart(P)
            ],
            [
                "|",
                f[m + 1]
            ]
        ]);
    }
    return E + $10([
        [
            `${a - 1} |`,
            d[i - 1]
        ],
        [
            `${a} |`,
            N
        ],
        [
            "|",
            "^".padStart(p)
        ],
        [
            `${a + 1} |`,
            d[i + 1]
        ]
    ]);
}
function $10(e) {
    let t = e.filter(([s, i])=>i !== void 0), n = Math.max(...t.map(([s])=>s.length));
    return t.map(([s, i])=>s.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function se(e) {
    let t = e[0];
    return t == null || "kind" in t || "length" in t ? {
        nodes: t,
        source: e[1],
        positions: e[2],
        path: e[3],
        originalError: e[4],
        extensions: e[5]
    } : t;
}
var k10 = class e extends Error {
    constructor(t, ...n){
        var s, i, o;
        let { nodes: a, source: u, positions: p, path: E, originalError: d, extensions: N } = se(n);
        super(t), this.name = "GraphQLError", this.path = E ?? void 0, this.originalError = d ?? void 0, this.nodes = G13(Array.isArray(a) ? a : a ? [
            a
        ] : void 0);
        let m = G13((s = this.nodes) === null || s === void 0 ? void 0 : s.map((f)=>f.loc).filter((f)=>f != null));
        this.source = u ?? (m == null || (i = m[0]) === null || i === void 0 ? void 0 : i.source), this.positions = p ?? m?.map((f)=>f.start), this.locations = p && u ? p.map((f)=>y15(u, f)) : m?.map((f)=>y15(f.source, f.start));
        let P = B11(d?.extensions) ? d?.extensions : void 0;
        this.extensions = (o = N ?? P) !== null && o !== void 0 ? o : Object.create(null), Object.defineProperties(this, {
            message: {
                writable: !0,
                enumerable: !0
            },
            name: {
                enumerable: !1
            },
            nodes: {
                enumerable: !1
            },
            source: {
                enumerable: !1
            },
            positions: {
                enumerable: !1
            },
            originalError: {
                enumerable: !1
            }
        }), d != null && d.stack ? Object.defineProperty(this, "stack", {
            value: d.stack,
            writable: !0,
            configurable: !0
        }) : Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0
        });
    }
    get [Symbol.toStringTag]() {
        return "GraphQLError";
    }
    toString() {
        let t = this.message;
        if (this.nodes) for (let n of this.nodes)n.loc && (t += `

` + Y6(n.loc));
        else if (this.source && this.locations) for (let n of this.locations)t += `

` + M9(this.source, n);
        return t;
    }
    toJSON() {
        let t = {
            message: this.message
        };
        return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
    }
};
function G13(e) {
    return e === void 0 || e.length === 0 ? void 0 : e;
}
function l16(e, t, n) {
    return new k10(`Syntax Error: ${n}`, {
        source: e,
        positions: [
            t
        ]
    });
}
var C10 = class {
    constructor(t, n, s){
        this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = s;
    }
    get [Symbol.toStringTag]() {
        return "Location";
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        };
    }
}, D19 = class {
    constructor(t, n, s, i, o, a){
        this.kind = t, this.start = n, this.end = s, this.line = i, this.column = o, this.value = a, this.prev = null, this.next = null;
    }
    get [Symbol.toStringTag]() {
        return "Token";
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        };
    }
}, re1 = {
    Name: [],
    Document: [
        "definitions"
    ],
    OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet"
    ],
    VariableDefinition: [
        "variable",
        "type",
        "defaultValue",
        "directives"
    ],
    Variable: [
        "name"
    ],
    SelectionSet: [
        "selections"
    ],
    Field: [
        "alias",
        "name",
        "arguments",
        "directives",
        "selectionSet"
    ],
    Argument: [
        "name",
        "value"
    ],
    FragmentSpread: [
        "name",
        "directives"
    ],
    InlineFragment: [
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        "values"
    ],
    ObjectValue: [
        "fields"
    ],
    ObjectField: [
        "name",
        "value"
    ],
    Directive: [
        "name",
        "arguments"
    ],
    NamedType: [
        "name"
    ],
    ListType: [
        "type"
    ],
    NonNullType: [
        "type"
    ],
    SchemaDefinition: [
        "description",
        "directives",
        "operationTypes"
    ],
    OperationTypeDefinition: [
        "type"
    ],
    ScalarTypeDefinition: [
        "description",
        "name",
        "directives"
    ],
    ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    FieldDefinition: [
        "description",
        "name",
        "arguments",
        "type",
        "directives"
    ],
    InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives"
    ],
    InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeDefinition: [
        "description",
        "name",
        "directives",
        "types"
    ],
    EnumTypeDefinition: [
        "description",
        "name",
        "directives",
        "values"
    ],
    EnumValueDefinition: [
        "description",
        "name",
        "directives"
    ],
    InputObjectTypeDefinition: [
        "description",
        "name",
        "directives",
        "fields"
    ],
    DirectiveDefinition: [
        "description",
        "name",
        "arguments",
        "locations"
    ],
    SchemaExtension: [
        "directives",
        "operationTypes"
    ],
    ScalarTypeExtension: [
        "name",
        "directives"
    ],
    ObjectTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    InterfaceTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeExtension: [
        "name",
        "directives",
        "types"
    ],
    EnumTypeExtension: [
        "name",
        "directives",
        "values"
    ],
    InputObjectTypeExtension: [
        "name",
        "directives",
        "fields"
    ]
}, be = new Set(Object.keys(re1));
var T11;
(function(e) {
    e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(T11 || (T11 = {}));
var g21;
(function(e) {
    e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(g21 || (g21 = {}));
var c17;
(function(e) {
    e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(c17 || (c17 = {}));
function J9(e) {
    return e === 9 || e === 32;
}
function O15(e) {
    return e >= 48 && e <= 57;
}
function X5(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function U13(e) {
    return X5(e) || e === 95;
}
function Q6(e) {
    return X5(e) || O15(e) || e === 95;
}
function z10(e) {
    var t;
    let n = Number.MAX_SAFE_INTEGER, s = null, i = -1;
    for(let a = 0; a < e.length; ++a){
        var o;
        let u = e[a], p = oe2(u);
        p !== u.length && (s = (o = s) !== null && o !== void 0 ? o : a, i = a, a !== 0 && p < n && (n = p));
    }
    return e.map((a, u)=>u === 0 ? a : a.slice(n)).slice((t = s) !== null && t !== void 0 ? t : 0, i + 1);
}
function oe2(e) {
    let t = 0;
    for(; t < e.length && J9(e.charCodeAt(t));)++t;
    return t;
}
var r2;
(function(e) {
    e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(r2 || (r2 = {}));
var L10 = class {
    constructor(t){
        let n = new D19(r2.SOF, 0, 0, 0, 0);
        this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
        return "Lexer";
    }
    advance() {
        return this.lastToken = this.token, this.token = this.lookahead();
    }
    lookahead() {
        let t = this.token;
        if (t.kind !== r2.EOF) do if (t.next) t = t.next;
        else {
            let n = ae1(this, t.end);
            t.next = n, n.prev = t, t = n;
        }
        while (t.kind === r2.COMMENT)
        return t;
    }
};
function q16(e) {
    return e === r2.BANG || e === r2.DOLLAR || e === r2.AMP || e === r2.PAREN_L || e === r2.PAREN_R || e === r2.SPREAD || e === r2.COLON || e === r2.EQUALS || e === r2.AT || e === r2.BRACKET_L || e === r2.BRACKET_R || e === r2.BRACE_L || e === r2.PIPE || e === r2.BRACE_R;
}
function _22(e) {
    return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function R9(e, t) {
    return W8(e.charCodeAt(t)) && Z8(e.charCodeAt(t + 1));
}
function W8(e) {
    return e >= 55296 && e <= 56319;
}
function Z8(e) {
    return e >= 56320 && e <= 57343;
}
function x27(e, t) {
    let n = e.source.body.codePointAt(t);
    if (n === void 0) return r2.EOF;
    if (n >= 32 && n <= 126) {
        let s = String.fromCodePoint(n);
        return s === '"' ? `'"'` : `"${s}"`;
    }
    return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function h17(e, t, n, s, i) {
    let o = e.line, a = 1 + n - e.lineStart;
    return new D19(t, n, s, o, a, i);
}
function ae1(e, t) {
    let n = e.source.body, s = n.length, i = t;
    for(; i < s;){
        let o = n.charCodeAt(i);
        switch(o){
            case 65279:
            case 9:
            case 32:
            case 44:
                ++i;
                continue;
            case 10:
                ++i, ++e.line, e.lineStart = i;
                continue;
            case 13:
                n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
                continue;
            case 35:
                return ce1(e, i);
            case 33:
                return h17(e, r2.BANG, i, i + 1);
            case 36:
                return h17(e, r2.DOLLAR, i, i + 1);
            case 38:
                return h17(e, r2.AMP, i, i + 1);
            case 40:
                return h17(e, r2.PAREN_L, i, i + 1);
            case 41:
                return h17(e, r2.PAREN_R, i, i + 1);
            case 46:
                if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return h17(e, r2.SPREAD, i, i + 3);
                break;
            case 58:
                return h17(e, r2.COLON, i, i + 1);
            case 61:
                return h17(e, r2.EQUALS, i, i + 1);
            case 64:
                return h17(e, r2.AT, i, i + 1);
            case 91:
                return h17(e, r2.BRACKET_L, i, i + 1);
            case 93:
                return h17(e, r2.BRACKET_R, i, i + 1);
            case 123:
                return h17(e, r2.BRACE_L, i, i + 1);
            case 124:
                return h17(e, r2.PIPE, i, i + 1);
            case 125:
                return h17(e, r2.BRACE_R, i, i + 1);
            case 34:
                return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? fe1(e, i) : pe(e, i);
        }
        if (O15(o) || o === 45) return ue1(e, i, o);
        if (U13(o)) return Ee(e, i);
        throw l16(e.source, i, o === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : _22(o) || R9(n, i) ? `Unexpected character: ${x27(e, i)}.` : `Invalid character: ${x27(e, i)}.`);
    }
    return h17(e, r2.EOF, s, s);
}
function ce1(e, t) {
    let n = e.source.body, s = n.length, i = t + 1;
    for(; i < s;){
        let o = n.charCodeAt(i);
        if (o === 10 || o === 13) break;
        if (_22(o)) ++i;
        else if (R9(n, i)) i += 2;
        else break;
    }
    return h17(e, r2.COMMENT, t, i, n.slice(t + 1, i));
}
function ue1(e, t, n) {
    let s = e.source.body, i = t, o = n, a = !1;
    if (o === 45 && (o = s.charCodeAt(++i)), o === 48) {
        if (o = s.charCodeAt(++i), O15(o)) throw l16(e.source, i, `Invalid number, unexpected digit after 0: ${x27(e, i)}.`);
    } else i = V10(e, i, o), o = s.charCodeAt(i);
    if (o === 46 && (a = !0, o = s.charCodeAt(++i), i = V10(e, i, o), o = s.charCodeAt(i)), (o === 69 || o === 101) && (a = !0, o = s.charCodeAt(++i), (o === 43 || o === 45) && (o = s.charCodeAt(++i)), i = V10(e, i, o), o = s.charCodeAt(i)), o === 46 || U13(o)) throw l16(e.source, i, `Invalid number, expected digit but got: ${x27(e, i)}.`);
    return h17(e, a ? r2.FLOAT : r2.INT, t, i, s.slice(t, i));
}
function V10(e, t, n) {
    if (!O15(n)) throw l16(e.source, t, `Invalid number, expected digit but got: ${x27(e, t)}.`);
    let s = e.source.body, i = t + 1;
    for(; O15(s.charCodeAt(i));)++i;
    return i;
}
function pe(e, t) {
    let n = e.source.body, s = n.length, i = t + 1, o = i, a = "";
    for(; i < s;){
        let u = n.charCodeAt(i);
        if (u === 34) return a += n.slice(o, i), h17(e, r2.STRING, t, i + 1, a);
        if (u === 92) {
            a += n.slice(o, i);
            let p = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? le1(e, i) : he(e, i) : de(e, i);
            a += p.value, i += p.size, o = i;
            continue;
        }
        if (u === 10 || u === 13) break;
        if (_22(u)) ++i;
        else if (R9(n, i)) i += 2;
        else throw l16(e.source, i, `Invalid character within String: ${x27(e, i)}.`);
    }
    throw l16(e.source, i, "Unterminated string.");
}
function le1(e, t) {
    let n = e.source.body, s = 0, i = 3;
    for(; i < 12;){
        let o = n.charCodeAt(t + i++);
        if (o === 125) {
            if (i < 5 || !_22(s)) break;
            return {
                value: String.fromCodePoint(s),
                size: i
            };
        }
        if (s = s << 4 | v18(o), s < 0) break;
    }
    throw l16(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
}
function he(e, t) {
    let n = e.source.body, s = H7(n, t + 2);
    if (_22(s)) return {
        value: String.fromCodePoint(s),
        size: 6
    };
    if (W8(s) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
        let i = H7(n, t + 8);
        if (Z8(i)) return {
            value: String.fromCodePoint(s, i),
            size: 12
        };
    }
    throw l16(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function H7(e, t) {
    return v18(e.charCodeAt(t)) << 12 | v18(e.charCodeAt(t + 1)) << 8 | v18(e.charCodeAt(t + 2)) << 4 | v18(e.charCodeAt(t + 3));
}
function v18(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function de(e, t) {
    let n = e.source.body;
    switch(n.charCodeAt(t + 1)){
        case 34:
            return {
                value: '"',
                size: 2
            };
        case 92:
            return {
                value: "\\",
                size: 2
            };
        case 47:
            return {
                value: "/",
                size: 2
            };
        case 98:
            return {
                value: "\b",
                size: 2
            };
        case 102:
            return {
                value: "\f",
                size: 2
            };
        case 110:
            return {
                value: `
`,
                size: 2
            };
        case 114:
            return {
                value: "\r",
                size: 2
            };
        case 116:
            return {
                value: "	",
                size: 2
            };
    }
    throw l16(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function fe1(e, t) {
    let n = e.source.body, s = n.length, i = e.lineStart, o = t + 3, a = o, u = "", p = [];
    for(; o < s;){
        let E = n.charCodeAt(o);
        if (E === 34 && n.charCodeAt(o + 1) === 34 && n.charCodeAt(o + 2) === 34) {
            u += n.slice(a, o), p.push(u);
            let d = h17(e, r2.BLOCK_STRING, t, o + 3, z10(p).join(`
`));
            return e.line += p.length - 1, e.lineStart = i, d;
        }
        if (E === 92 && n.charCodeAt(o + 1) === 34 && n.charCodeAt(o + 2) === 34 && n.charCodeAt(o + 3) === 34) {
            u += n.slice(a, o), a = o + 1, o += 4;
            continue;
        }
        if (E === 10 || E === 13) {
            u += n.slice(a, o), p.push(u), E === 13 && n.charCodeAt(o + 1) === 10 ? o += 2 : ++o, u = "", a = o, i = o;
            continue;
        }
        if (_22(E)) ++o;
        else if (R9(n, o)) o += 2;
        else throw l16(e.source, o, `Invalid character within String: ${x27(e, o)}.`);
    }
    throw l16(e.source, o, "Unterminated string.");
}
function Ee(e, t) {
    let n = e.source.body, s = n.length, i = t + 1;
    for(; i < s;){
        let o = n.charCodeAt(i);
        if (Q6(o)) ++i;
        else break;
    }
    return h17(e, r2.NAME, t, i, n.slice(t, i));
}
function b25(e, t) {
    if (!!!e) throw new Error(t);
}
function K7(e) {
    return F16(e, []);
}
function F16(e, t) {
    switch(typeof e){
        case "string":
            return JSON.stringify(e);
        case "function":
            return e.name ? `[function ${e.name}]` : "[function]";
        case "object":
            return me(e, t);
        default:
            return String(e);
    }
}
function me(e, t) {
    if (e === null) return "null";
    if (t.includes(e)) return "[Circular]";
    let n = [
        ...t,
        e
    ];
    if (Ne(e)) {
        let s = e.toJSON();
        if (s !== e) return typeof s == "string" ? s : F16(s, n);
    } else if (Array.isArray(e)) return xe(e, n);
    return Te(e, n);
}
function Ne(e) {
    return typeof e.toJSON == "function";
}
function Te(e, t) {
    let n = Object.entries(e);
    return n.length === 0 ? "{}" : t.length > 2 ? "[" + Ie(e) + "]" : "{ " + n.map(([i, o])=>i + ": " + F16(o, t)).join(", ") + " }";
}
function xe(e, t) {
    if (e.length === 0) return "[]";
    if (t.length > 2) return "[Array]";
    let n = Math.min(10, e.length), s = e.length - n, i = [];
    for(let o = 0; o < n; ++o)i.push(F16(e[o], t));
    return s === 1 ? i.push("... 1 more item") : s > 1 && i.push(`... ${s} more items`), "[" + i.join(", ") + "]";
}
function Ie(e) {
    let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
    if (t === "Object" && typeof e.constructor == "function") {
        let n = e.constructor.name;
        if (typeof n == "string" && n !== "") return n;
    }
    return t;
}
var ee2 = function(t, n) {
    return t instanceof n;
};
var S13 = class {
    constructor(t, n = "GraphQL request", s = {
        line: 1,
        column: 1
    }){
        typeof t == "string" || b25(!1, `Body must be a string. Received: ${K7(t)}.`), this.body = t, this.name = n, this.locationOffset = s, this.locationOffset.line > 0 || b25(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || b25(!1, "column in locationOffset is 1-indexed and must be positive.");
    }
    get [Symbol.toStringTag]() {
        return "Source";
    }
};
function te2(e) {
    return ee2(e, S13);
}
function at3(e, t) {
    return new A12(e, t).parseDocument();
}
var A12 = class {
    constructor(t, n = {}){
        let s = te2(t) ? t : new S13(t);
        this._lexer = new L10(s), this._options = n, this._tokenCounter = 0;
    }
    parseName() {
        let t = this.expectToken(r2.NAME);
        return this.node(t, {
            kind: c17.NAME,
            value: t.value
        });
    }
    parseDocument() {
        return this.node(this._lexer.token, {
            kind: c17.DOCUMENT,
            definitions: this.many(r2.SOF, this.parseDefinition, r2.EOF)
        });
    }
    parseDefinition() {
        if (this.peek(r2.BRACE_L)) return this.parseOperationDefinition();
        let t = this.peekDescription(), n = t ? this._lexer.lookahead() : this._lexer.token;
        if (n.kind === r2.NAME) {
            switch(n.value){
                case "schema":
                    return this.parseSchemaDefinition();
                case "scalar":
                    return this.parseScalarTypeDefinition();
                case "type":
                    return this.parseObjectTypeDefinition();
                case "interface":
                    return this.parseInterfaceTypeDefinition();
                case "union":
                    return this.parseUnionTypeDefinition();
                case "enum":
                    return this.parseEnumTypeDefinition();
                case "input":
                    return this.parseInputObjectTypeDefinition();
                case "directive":
                    return this.parseDirectiveDefinition();
            }
            if (t) throw l16(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
            switch(n.value){
                case "query":
                case "mutation":
                case "subscription":
                    return this.parseOperationDefinition();
                case "fragment":
                    return this.parseFragmentDefinition();
                case "extend":
                    return this.parseTypeSystemExtension();
            }
        }
        throw this.unexpected(n);
    }
    parseOperationDefinition() {
        let t = this._lexer.token;
        if (this.peek(r2.BRACE_L)) return this.node(t, {
            kind: c17.OPERATION_DEFINITION,
            operation: T11.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
        });
        let n = this.parseOperationType(), s;
        return this.peek(r2.NAME) && (s = this.parseName()), this.node(t, {
            kind: c17.OPERATION_DEFINITION,
            operation: n,
            name: s,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        });
    }
    parseOperationType() {
        let t = this.expectToken(r2.NAME);
        switch(t.value){
            case "query":
                return T11.QUERY;
            case "mutation":
                return T11.MUTATION;
            case "subscription":
                return T11.SUBSCRIPTION;
        }
        throw this.unexpected(t);
    }
    parseVariableDefinitions() {
        return this.optionalMany(r2.PAREN_L, this.parseVariableDefinition, r2.PAREN_R);
    }
    parseVariableDefinition() {
        return this.node(this._lexer.token, {
            kind: c17.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(r2.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(r2.EQUALS) ? this.parseConstValueLiteral() : void 0,
            directives: this.parseConstDirectives()
        });
    }
    parseVariable() {
        let t = this._lexer.token;
        return this.expectToken(r2.DOLLAR), this.node(t, {
            kind: c17.VARIABLE,
            name: this.parseName()
        });
    }
    parseSelectionSet() {
        return this.node(this._lexer.token, {
            kind: c17.SELECTION_SET,
            selections: this.many(r2.BRACE_L, this.parseSelection, r2.BRACE_R)
        });
    }
    parseSelection() {
        return this.peek(r2.SPREAD) ? this.parseFragment() : this.parseField();
    }
    parseField() {
        let t = this._lexer.token, n = this.parseName(), s, i;
        return this.expectOptionalToken(r2.COLON) ? (s = n, i = this.parseName()) : i = n, this.node(t, {
            kind: c17.FIELD,
            alias: s,
            name: i,
            arguments: this.parseArguments(!1),
            directives: this.parseDirectives(!1),
            selectionSet: this.peek(r2.BRACE_L) ? this.parseSelectionSet() : void 0
        });
    }
    parseArguments(t) {
        let n = t ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(r2.PAREN_L, n, r2.PAREN_R);
    }
    parseArgument(t = !1) {
        let n = this._lexer.token, s = this.parseName();
        return this.expectToken(r2.COLON), this.node(n, {
            kind: c17.ARGUMENT,
            name: s,
            value: this.parseValueLiteral(t)
        });
    }
    parseConstArgument() {
        return this.parseArgument(!0);
    }
    parseFragment() {
        let t = this._lexer.token;
        this.expectToken(r2.SPREAD);
        let n = this.expectOptionalKeyword("on");
        return !n && this.peek(r2.NAME) ? this.node(t, {
            kind: c17.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1)
        }) : this.node(t, {
            kind: c17.INLINE_FRAGMENT,
            typeCondition: n ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        });
    }
    parseFragmentDefinition() {
        let t = this._lexer.token;
        return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(t, {
            kind: c17.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        }) : this.node(t, {
            kind: c17.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        });
    }
    parseFragmentName() {
        if (this._lexer.token.value === "on") throw this.unexpected();
        return this.parseName();
    }
    parseValueLiteral(t) {
        let n = this._lexer.token;
        switch(n.kind){
            case r2.BRACKET_L:
                return this.parseList(t);
            case r2.BRACE_L:
                return this.parseObject(t);
            case r2.INT:
                return this.advanceLexer(), this.node(n, {
                    kind: c17.INT,
                    value: n.value
                });
            case r2.FLOAT:
                return this.advanceLexer(), this.node(n, {
                    kind: c17.FLOAT,
                    value: n.value
                });
            case r2.STRING:
            case r2.BLOCK_STRING:
                return this.parseStringLiteral();
            case r2.NAME:
                switch(this.advanceLexer(), n.value){
                    case "true":
                        return this.node(n, {
                            kind: c17.BOOLEAN,
                            value: !0
                        });
                    case "false":
                        return this.node(n, {
                            kind: c17.BOOLEAN,
                            value: !1
                        });
                    case "null":
                        return this.node(n, {
                            kind: c17.NULL
                        });
                    default:
                        return this.node(n, {
                            kind: c17.ENUM,
                            value: n.value
                        });
                }
            case r2.DOLLAR:
                if (t) if (this.expectToken(r2.DOLLAR), this._lexer.token.kind === r2.NAME) {
                    let s = this._lexer.token.value;
                    throw l16(this._lexer.source, n.start, `Unexpected variable "$${s}" in constant value.`);
                } else throw this.unexpected(n);
                return this.parseVariable();
            default:
                throw this.unexpected();
        }
    }
    parseConstValueLiteral() {
        return this.parseValueLiteral(!0);
    }
    parseStringLiteral() {
        let t = this._lexer.token;
        return this.advanceLexer(), this.node(t, {
            kind: c17.STRING,
            value: t.value,
            block: t.kind === r2.BLOCK_STRING
        });
    }
    parseList(t) {
        let n = ()=>this.parseValueLiteral(t);
        return this.node(this._lexer.token, {
            kind: c17.LIST,
            values: this.any(r2.BRACKET_L, n, r2.BRACKET_R)
        });
    }
    parseObject(t) {
        let n = ()=>this.parseObjectField(t);
        return this.node(this._lexer.token, {
            kind: c17.OBJECT,
            fields: this.any(r2.BRACE_L, n, r2.BRACE_R)
        });
    }
    parseObjectField(t) {
        let n = this._lexer.token, s = this.parseName();
        return this.expectToken(r2.COLON), this.node(n, {
            kind: c17.OBJECT_FIELD,
            name: s,
            value: this.parseValueLiteral(t)
        });
    }
    parseDirectives(t) {
        let n = [];
        for(; this.peek(r2.AT);)n.push(this.parseDirective(t));
        return n;
    }
    parseConstDirectives() {
        return this.parseDirectives(!0);
    }
    parseDirective(t) {
        let n = this._lexer.token;
        return this.expectToken(r2.AT), this.node(n, {
            kind: c17.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(t)
        });
    }
    parseTypeReference() {
        let t = this._lexer.token, n;
        if (this.expectOptionalToken(r2.BRACKET_L)) {
            let s = this.parseTypeReference();
            this.expectToken(r2.BRACKET_R), n = this.node(t, {
                kind: c17.LIST_TYPE,
                type: s
            });
        } else n = this.parseNamedType();
        return this.expectOptionalToken(r2.BANG) ? this.node(t, {
            kind: c17.NON_NULL_TYPE,
            type: n
        }) : n;
    }
    parseNamedType() {
        return this.node(this._lexer.token, {
            kind: c17.NAMED_TYPE,
            name: this.parseName()
        });
    }
    peekDescription() {
        return this.peek(r2.STRING) || this.peek(r2.BLOCK_STRING);
    }
    parseDescription() {
        if (this.peekDescription()) return this.parseStringLiteral();
    }
    parseSchemaDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("schema");
        let s = this.parseConstDirectives(), i = this.many(r2.BRACE_L, this.parseOperationTypeDefinition, r2.BRACE_R);
        return this.node(t, {
            kind: c17.SCHEMA_DEFINITION,
            description: n,
            directives: s,
            operationTypes: i
        });
    }
    parseOperationTypeDefinition() {
        let t = this._lexer.token, n = this.parseOperationType();
        this.expectToken(r2.COLON);
        let s = this.parseNamedType();
        return this.node(t, {
            kind: c17.OPERATION_TYPE_DEFINITION,
            operation: n,
            type: s
        });
    }
    parseScalarTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("scalar");
        let s = this.parseName(), i = this.parseConstDirectives();
        return this.node(t, {
            kind: c17.SCALAR_TYPE_DEFINITION,
            description: n,
            name: s,
            directives: i
        });
    }
    parseObjectTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("type");
        let s = this.parseName(), i = this.parseImplementsInterfaces(), o = this.parseConstDirectives(), a = this.parseFieldsDefinition();
        return this.node(t, {
            kind: c17.OBJECT_TYPE_DEFINITION,
            description: n,
            name: s,
            interfaces: i,
            directives: o,
            fields: a
        });
    }
    parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(r2.AMP, this.parseNamedType) : [];
    }
    parseFieldsDefinition() {
        return this.optionalMany(r2.BRACE_L, this.parseFieldDefinition, r2.BRACE_R);
    }
    parseFieldDefinition() {
        let t = this._lexer.token, n = this.parseDescription(), s = this.parseName(), i = this.parseArgumentDefs();
        this.expectToken(r2.COLON);
        let o = this.parseTypeReference(), a = this.parseConstDirectives();
        return this.node(t, {
            kind: c17.FIELD_DEFINITION,
            description: n,
            name: s,
            arguments: i,
            type: o,
            directives: a
        });
    }
    parseArgumentDefs() {
        return this.optionalMany(r2.PAREN_L, this.parseInputValueDef, r2.PAREN_R);
    }
    parseInputValueDef() {
        let t = this._lexer.token, n = this.parseDescription(), s = this.parseName();
        this.expectToken(r2.COLON);
        let i = this.parseTypeReference(), o;
        this.expectOptionalToken(r2.EQUALS) && (o = this.parseConstValueLiteral());
        let a = this.parseConstDirectives();
        return this.node(t, {
            kind: c17.INPUT_VALUE_DEFINITION,
            description: n,
            name: s,
            type: i,
            defaultValue: o,
            directives: a
        });
    }
    parseInterfaceTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("interface");
        let s = this.parseName(), i = this.parseImplementsInterfaces(), o = this.parseConstDirectives(), a = this.parseFieldsDefinition();
        return this.node(t, {
            kind: c17.INTERFACE_TYPE_DEFINITION,
            description: n,
            name: s,
            interfaces: i,
            directives: o,
            fields: a
        });
    }
    parseUnionTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("union");
        let s = this.parseName(), i = this.parseConstDirectives(), o = this.parseUnionMemberTypes();
        return this.node(t, {
            kind: c17.UNION_TYPE_DEFINITION,
            description: n,
            name: s,
            directives: i,
            types: o
        });
    }
    parseUnionMemberTypes() {
        return this.expectOptionalToken(r2.EQUALS) ? this.delimitedMany(r2.PIPE, this.parseNamedType) : [];
    }
    parseEnumTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("enum");
        let s = this.parseName(), i = this.parseConstDirectives(), o = this.parseEnumValuesDefinition();
        return this.node(t, {
            kind: c17.ENUM_TYPE_DEFINITION,
            description: n,
            name: s,
            directives: i,
            values: o
        });
    }
    parseEnumValuesDefinition() {
        return this.optionalMany(r2.BRACE_L, this.parseEnumValueDefinition, r2.BRACE_R);
    }
    parseEnumValueDefinition() {
        let t = this._lexer.token, n = this.parseDescription(), s = this.parseEnumValueName(), i = this.parseConstDirectives();
        return this.node(t, {
            kind: c17.ENUM_VALUE_DEFINITION,
            description: n,
            name: s,
            directives: i
        });
    }
    parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw l16(this._lexer.source, this._lexer.token.start, `${w13(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        return this.parseName();
    }
    parseInputObjectTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("input");
        let s = this.parseName(), i = this.parseConstDirectives(), o = this.parseInputFieldsDefinition();
        return this.node(t, {
            kind: c17.INPUT_OBJECT_TYPE_DEFINITION,
            description: n,
            name: s,
            directives: i,
            fields: o
        });
    }
    parseInputFieldsDefinition() {
        return this.optionalMany(r2.BRACE_L, this.parseInputValueDef, r2.BRACE_R);
    }
    parseTypeSystemExtension() {
        let t = this._lexer.lookahead();
        if (t.kind === r2.NAME) switch(t.value){
            case "schema":
                return this.parseSchemaExtension();
            case "scalar":
                return this.parseScalarTypeExtension();
            case "type":
                return this.parseObjectTypeExtension();
            case "interface":
                return this.parseInterfaceTypeExtension();
            case "union":
                return this.parseUnionTypeExtension();
            case "enum":
                return this.parseEnumTypeExtension();
            case "input":
                return this.parseInputObjectTypeExtension();
        }
        throw this.unexpected(t);
    }
    parseSchemaExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("schema");
        let n = this.parseConstDirectives(), s = this.optionalMany(r2.BRACE_L, this.parseOperationTypeDefinition, r2.BRACE_R);
        if (n.length === 0 && s.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c17.SCHEMA_EXTENSION,
            directives: n,
            operationTypes: s
        });
    }
    parseScalarTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("scalar");
        let n = this.parseName(), s = this.parseConstDirectives();
        if (s.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c17.SCALAR_TYPE_EXTENSION,
            name: n,
            directives: s
        });
    }
    parseObjectTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("type");
        let n = this.parseName(), s = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), o = this.parseFieldsDefinition();
        if (s.length === 0 && i.length === 0 && o.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c17.OBJECT_TYPE_EXTENSION,
            name: n,
            interfaces: s,
            directives: i,
            fields: o
        });
    }
    parseInterfaceTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("interface");
        let n = this.parseName(), s = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), o = this.parseFieldsDefinition();
        if (s.length === 0 && i.length === 0 && o.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c17.INTERFACE_TYPE_EXTENSION,
            name: n,
            interfaces: s,
            directives: i,
            fields: o
        });
    }
    parseUnionTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("union");
        let n = this.parseName(), s = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
        if (s.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c17.UNION_TYPE_EXTENSION,
            name: n,
            directives: s,
            types: i
        });
    }
    parseEnumTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("enum");
        let n = this.parseName(), s = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
        if (s.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c17.ENUM_TYPE_EXTENSION,
            name: n,
            directives: s,
            values: i
        });
    }
    parseInputObjectTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("input");
        let n = this.parseName(), s = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
        if (s.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c17.INPUT_OBJECT_TYPE_EXTENSION,
            name: n,
            directives: s,
            fields: i
        });
    }
    parseDirectiveDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("directive"), this.expectToken(r2.AT);
        let s = this.parseName(), i = this.parseArgumentDefs(), o = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        let a = this.parseDirectiveLocations();
        return this.node(t, {
            kind: c17.DIRECTIVE_DEFINITION,
            description: n,
            name: s,
            arguments: i,
            repeatable: o,
            locations: a
        });
    }
    parseDirectiveLocations() {
        return this.delimitedMany(r2.PIPE, this.parseDirectiveLocation);
    }
    parseDirectiveLocation() {
        let t = this._lexer.token, n = this.parseName();
        if (Object.prototype.hasOwnProperty.call(g21, n.value)) return n;
        throw this.unexpected(t);
    }
    node(t, n) {
        return this._options.noLocation !== !0 && (n.loc = new C10(t, this._lexer.lastToken, this._lexer.source)), n;
    }
    peek(t) {
        return this._lexer.token.kind === t;
    }
    expectToken(t) {
        let n = this._lexer.token;
        if (n.kind === t) return this.advanceLexer(), n;
        throw l16(this._lexer.source, n.start, `Expected ${ne1(t)}, found ${w13(n)}.`);
    }
    expectOptionalToken(t) {
        return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
    }
    expectKeyword(t) {
        let n = this._lexer.token;
        if (n.kind === r2.NAME && n.value === t) this.advanceLexer();
        else throw l16(this._lexer.source, n.start, `Expected "${t}", found ${w13(n)}.`);
    }
    expectOptionalKeyword(t) {
        let n = this._lexer.token;
        return n.kind === r2.NAME && n.value === t ? (this.advanceLexer(), !0) : !1;
    }
    unexpected(t) {
        let n = t ?? this._lexer.token;
        return l16(this._lexer.source, n.start, `Unexpected ${w13(n)}.`);
    }
    any(t, n, s) {
        this.expectToken(t);
        let i = [];
        for(; !this.expectOptionalToken(s);)i.push(n.call(this));
        return i;
    }
    optionalMany(t, n, s) {
        if (this.expectOptionalToken(t)) {
            let i = [];
            do i.push(n.call(this));
            while (!this.expectOptionalToken(s))
            return i;
        }
        return [];
    }
    many(t, n, s) {
        this.expectToken(t);
        let i = [];
        do i.push(n.call(this));
        while (!this.expectOptionalToken(s))
        return i;
    }
    delimitedMany(t, n) {
        this.expectOptionalToken(t);
        let s = [];
        do s.push(n.call(this));
        while (this.expectOptionalToken(t))
        return s;
    }
    advanceLexer() {
        let { maxTokens: t } = this._options, n = this._lexer.advance();
        if (t !== void 0 && n.kind !== r2.EOF && (++this._tokenCounter, this._tokenCounter > t)) throw l16(this._lexer.source, n.start, `Document contains more that ${t} tokens. Parsing aborted.`);
    }
};
function w13(e) {
    let t = e.value;
    return ne1(e.kind) + (t != null ? ` "${t}"` : "");
}
function ne1(e) {
    return q16(e) ? `"${e}"` : e;
}
const docCache = new Map();
const fragmentSourceMap = new Map();
let printFragmentWarnings = true;
let allowLegacyFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, ' ').trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    const seenKeys = new Set();
    const definitions = [];
    ast.definitions.forEach((fragmentDefinition)=>{
        if (fragmentDefinition.kind === 'FragmentDefinition') {
            const fragmentName = fragmentDefinition.name.value;
            const sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            let sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) {
                    console.warn('Warning: fragment with name ' + fragmentName + ' already exists.\n' + 'graphql-tag enforces all fragment names across your application to be unique; read more about\n' + 'this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names');
                }
            } else if (!sourceKeySet) {
                fragmentSourceMap.set(fragmentName, sourceKeySet = new Set());
            }
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        } else {
            definitions.push(fragmentDefinition);
        }
    });
    return {
        ...ast,
        definitions
    };
}
function stripLoc(doc) {
    const workSet = new Set(doc.definitions);
    workSet.forEach((node)=>{
        if (node.loc) delete node.loc;
        Object.keys(node).forEach((key)=>{
            const value = node[key];
            if (value && typeof value === 'object') {
                workSet.add(value);
            }
        });
    });
    const loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        const parsed = at3(source, {
            allowLegacyFragmentVariables
        });
        if (!parsed || parsed.kind !== 'Document') {
            throw new Error('Not a valid GraphQL document.');
        }
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals, ...args) {
    if (typeof literals === 'string') {
        literals = [
            literals
        ];
    }
    let result = literals[0];
    args.forEach((arg, i)=>{
        if (arg && arg.kind === 'Document') {
            result += arg.loc.source.body;
        } else {
            result += arg;
        }
        result += literals[i + 1];
    });
    return parseDocument(result);
}
const typeDefs = gql`
  type Query {
    events(
      pubkey: [String!],
      kind: Int,
      offset: Int,
      limit: Int
    ): Events
    event(id: String): Event
    policies: [Policy]
    relayInformation: RelayInformation
    channel(name: String!): Channel
    deleted_events: [String!]!
    members: [String!]!
  }

  type Mutation {
    add_block(kind: Int, pubkey: String, ): Policy!
    remove_block(kind: Int, pubkey: String, ): Policy!
    add_allow(kind: Int, pubkey: String, ): Policy!
    remove_allow(kind: Int, pubkey: String, ): Policy!
    set_policy(kind: Int, read: Boolean, write: Boolean): Policy!
    set_relay_information(name: String, description: String, contact: String, icon: String): RelayInformation!
    delete_event(id: String!): Event
    delete_events_from_pubkey(pubkey: String!): [String!]!
  }

  type Channel {
    id: String!
    name: String!
    creator: PublicKey!
  }

  type Events {
    count_total: Int!
    count_per_kind: [CountPerKind!]!
    data: [Event]
  }
  type CountPerKind {
    kind: Int
    count: Int!
  }
  type Event {
    id: String!
    content: String!
    pubkey: PublicKey!
    kind: Int!
    created_at: Int!
    sig: String!
    tags: [String!]!
  }
  type PublicKey {
    hex: String!
    bech32: String!
    events: [Event!]!
  }
  type Policy {
    kind: Int!
    read: Boolean!
    write: Boolean!
    allow: [String!]!
    block: [String!]!
  }
  type RelayInformation {
    name: String
    description: String
    pubkey: PublicKey
    contact: String
    supported_nips: [Int!]
    software: String
    version: String
    icon: String
  }
`;
var T12, d18, Q7, x28, q17, X6, I11, G14, $11, O16, E18 = {}, Z9 = [], ie2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, A13 = Array.isArray;
function b26(_, e) {
    for(var t in e)_[t] = e[t];
    return _;
}
function ee3(_) {
    var e = _.parentNode;
    e && e.removeChild(_);
}
function w14(_, e, t, i, o) {
    var r = {
        type: _,
        props: e,
        key: t,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: o ?? ++Q7,
        __i: -1,
        __u: 0
    };
    return o == null && d18.vnode != null && d18.vnode(r), r;
}
function H8(_) {
    return _.children;
}
function M10(_, e) {
    this.props = _, this.context = e;
}
function P14(_, e) {
    if (e == null) return _.__ ? P14(_.__, _.__i + 1) : null;
    for(var t; e < _.__k.length; e++)if ((t = _.__k[e]) != null && t.__e != null) return t.__e;
    return typeof _.type == "function" ? P14(_) : null;
}
function _e1(_) {
    var e, t;
    if ((_ = _.__) != null && _.__c != null) {
        for(_.__e = _.__c.base = null, e = 0; e < _.__k.length; e++)if ((t = _.__k[e]) != null && t.__e != null) {
            _.__e = _.__c.base = t.__e;
            break;
        }
        return _e1(_);
    }
}
function R10(_) {
    (!_.__d && (_.__d = !0) && x28.push(_) && !W9.__r++ || q17 !== d18.debounceRendering) && ((q17 = d18.debounceRendering) || X6)(W9);
}
function W9() {
    var _, e, t, i, o, r, l, s;
    for(x28.sort(I11); _ = x28.shift();)_.__d && (e = x28.length, i = void 0, r = (o = (t = _).__v).__e, l = [], s = [], t.__P && ((i = b26({}, o)).__v = o.__v + 1, d18.vnode && d18.vnode(i), V11(t.__P, i, o, t.__n, t.__P.ownerSVGElement !== void 0, 32 & o.__u ? [
        r
    ] : null, l, r ?? P14(o), !!(32 & o.__u), s), i.__v = o.__v, i.__.__k[i.__i] = i, oe3(l, i, s), i.__e != r && _e1(i)), x28.length > e && x28.sort(I11));
    W9.__r = 0;
}
function te3(_, e, t, i, o, r, l, s, f, u, p) {
    var n, m, c, h, k, v = i && i.__k || Z9, a = e.length;
    for(t.__d = f, se1(t, e, v), f = t.__d, n = 0; n < a; n++)(c = t.__k[n]) != null && typeof c != "boolean" && typeof c != "function" && (m = c.__i === -1 ? E18 : v[c.__i] || E18, c.__i = n, V11(_, c, m, o, r, l, s, f, u, p), h = c.__e, c.ref && m.ref != c.ref && (m.ref && j19(m.ref, null, c), p.push(c.ref, c.__c || h, c)), k == null && h != null && (k = h), 65536 & c.__u || m.__k === c.__k ? (f && !f.isConnected && (f = P14(m)), f = ne2(c, f, _)) : typeof c.type == "function" && c.__d !== void 0 ? f = c.__d : h && (f = h.nextSibling), c.__d = void 0, c.__u &= -196609);
    t.__d = f, t.__e = k;
}
function se1(_, e, t) {
    var i, o, r, l, s, f = e.length, u = t.length, p = u, n = 0;
    for(_.__k = [], i = 0; i < f; i++)l = i + n, (o = _.__k[i] = (o = e[i]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? w14(null, o, null, null, null) : A13(o) ? w14(H8, {
        children: o
    }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? w14(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = _, o.__b = _.__b + 1, s = ce2(o, t, l, p), o.__i = s, r = null, s !== -1 && (p--, (r = t[s]) && (r.__u |= 131072)), r == null || r.__v === null ? (s == -1 && n--, typeof o.type != "function" && (o.__u |= 65536)) : s !== l && (s === l + 1 ? n++ : s > l ? p > f - l ? n += s - l : n-- : s < l ? s == l - 1 && (n = s - l) : n = 0, s !== i + n && (o.__u |= 65536))) : (r = t[l]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == _.__d && (_.__d = P14(r)), B12(r, r, !1), t[l] = null, p--);
    if (p) for(i = 0; i < u; i++)(r = t[i]) != null && !(131072 & r.__u) && (r.__e == _.__d && (_.__d = P14(r)), B12(r, r));
}
function ne2(_, e, t) {
    var i, o;
    if (typeof _.type == "function") {
        for(i = _.__k, o = 0; i && o < i.length; o++)i[o] && (i[o].__ = _, e = ne2(i[o], e, t));
        return e;
    }
    _.__e != e && (t.insertBefore(_.__e, e || null), e = _.__e);
    do e = e && e.nextSibling;
    while (e != null && e.nodeType === 8)
    return e;
}
function ce2(_, e, t, i) {
    var o = _.key, r = _.type, l = t - 1, s = t + 1, f = e[t];
    if (f === null || f && o == f.key && r === f.type && !(131072 & f.__u)) return t;
    if (i > (f != null && !(131072 & f.__u) ? 1 : 0)) for(; l >= 0 || s < e.length;){
        if (l >= 0) {
            if ((f = e[l]) && !(131072 & f.__u) && o == f.key && r === f.type) return l;
            l--;
        }
        if (s < e.length) {
            if ((f = e[s]) && !(131072 & f.__u) && o == f.key && r === f.type) return s;
            s++;
        }
    }
    return -1;
}
function J10(_, e, t) {
    e[0] === "-" ? _.setProperty(e, t ?? "") : _[e] = t == null ? "" : typeof t != "number" || ie2.test(e) ? t : t + "px";
}
function L11(_, e, t, i, o) {
    var r;
    e: if (e === "style") if (typeof t == "string") _.style.cssText = t;
    else {
        if (typeof i == "string" && (_.style.cssText = i = ""), i) for(e in i)t && e in t || J10(_.style, e, "");
        if (t) for(e in t)i && t[e] === i[e] || J10(_.style, e, t[e]);
    }
    else if (e[0] === "o" && e[1] === "n") r = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in _ || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), _.l || (_.l = {}), _.l[e + r] = t, t ? i ? t.u = i.u : (t.u = G14, _.addEventListener(e, r ? O16 : $11, r)) : _.removeEventListener(e, r ? O16 : $11, r);
    else {
        if (o) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e in _) try {
            _[e] = t ?? "";
            break e;
        } catch  {}
        typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? _.removeAttribute(e) : _.setAttribute(e, t));
    }
}
function K8(_) {
    return function(e) {
        if (this.l) {
            var t = this.l[e.type + _];
            if (e.t == null) e.t = G14++;
            else if (e.t < t.u) return;
            return t(d18.event ? d18.event(e) : e);
        }
    };
}
function V11(_, e, t, i, o, r, l, s, f, u) {
    var p, n, m, c, h, k, v, a, y, C, U, S, z, D, N, g = e.type;
    if (e.constructor !== void 0) return null;
    128 & t.__u && (f = !!(32 & t.__u), r = [
        s = e.__e = t.__e
    ]), (p = d18.__b) && p(e);
    e: if (typeof g == "function") try {
        if (a = e.props, y = (p = g.contextType) && i[p.__c], C = p ? y ? y.props.value : p.__ : i, t.__c ? v = (n = e.__c = t.__c).__ = n.__E : ("prototype" in g && g.prototype.render ? e.__c = n = new g(a, C) : (e.__c = n = new M10(a, C), n.constructor = g, n.render = pe1), y && y.sub(n), n.props = a, n.state || (n.state = {}), n.context = C, n.__n = i, m = n.__d = !0, n.__h = [], n._sb = []), n.__s == null && (n.__s = n.state), g.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = b26({}, n.__s)), b26(n.__s, g.getDerivedStateFromProps(a, n.__s))), c = n.props, h = n.state, n.__v = e, m) g.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), n.componentDidMount != null && n.__h.push(n.componentDidMount);
        else {
            if (g.getDerivedStateFromProps == null && a !== c && n.componentWillReceiveProps != null && n.componentWillReceiveProps(a, C), !n.__e && (n.shouldComponentUpdate != null && n.shouldComponentUpdate(a, n.__s, C) === !1 || e.__v === t.__v)) {
                for(e.__v !== t.__v && (n.props = a, n.state = n.__s, n.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(F) {
                    F && (F.__ = e);
                }), U = 0; U < n._sb.length; U++)n.__h.push(n._sb[U]);
                n._sb = [], n.__h.length && l.push(n);
                break e;
            }
            n.componentWillUpdate != null && n.componentWillUpdate(a, n.__s, C), n.componentDidUpdate != null && n.__h.push(function() {
                n.componentDidUpdate(c, h, k);
            });
        }
        if (n.context = C, n.props = a, n.__P = _, n.__e = !1, S = d18.__r, z = 0, "prototype" in g && g.prototype.render) {
            for(n.state = n.__s, n.__d = !1, S && S(e), p = n.render(n.props, n.state, n.context), D = 0; D < n._sb.length; D++)n.__h.push(n._sb[D]);
            n._sb = [];
        } else do n.__d = !1, S && S(e), p = n.render(n.props, n.state, n.context), n.state = n.__s;
        while (n.__d && ++z < 25)
        n.state = n.__s, n.getChildContext != null && (i = b26(b26({}, i), n.getChildContext())), m || n.getSnapshotBeforeUpdate == null || (k = n.getSnapshotBeforeUpdate(c, h)), te3(_, A13(N = p != null && p.type === H8 && p.key == null ? p.props.children : p) ? N : [
            N
        ], e, t, i, o, r, l, s, f, u), n.base = e.__e, e.__u &= -161, n.__h.length && l.push(n), v && (n.__E = n.__ = null);
    } catch (F) {
        e.__v = null, f || r != null ? (e.__e = s, e.__u |= f ? 160 : 32, r[r.indexOf(s)] = null) : (e.__e = t.__e, e.__k = t.__k), d18.__e(F, e, t);
    }
    else r == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = fe2(t.__e, e, t, i, o, r, l, f, u);
    (p = d18.diffed) && p(e);
}
function oe3(_, e, t) {
    e.__d = void 0;
    for(var i = 0; i < t.length; i++)j19(t[i], t[++i], t[++i]);
    d18.__c && d18.__c(e, _), _.some(function(o) {
        try {
            _ = o.__h, o.__h = [], _.some(function(r) {
                r.call(o);
            });
        } catch (r) {
            d18.__e(r, o.__v);
        }
    });
}
function fe2(_, e, t, i, o, r, l, s, f) {
    var u, p, n, m, c, h, k, v = t.props, a = e.props, y = e.type;
    if (y === "svg" && (o = !0), r != null) {
        for(u = 0; u < r.length; u++)if ((c = r[u]) && "setAttribute" in c == !!y && (y ? c.localName === y : c.nodeType === 3)) {
            _ = c, r[u] = null;
            break;
        }
    }
    if (_ == null) {
        if (y === null) return document.createTextNode(a);
        _ = o ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, a.is && a), r = null, s = !1;
    }
    if (y === null) v === a || s && _.data === a || (_.data = a);
    else {
        if (r = r && T12.call(_.childNodes), v = t.props || E18, !s && r != null) for(v = {}, u = 0; u < _.attributes.length; u++)v[(c = _.attributes[u]).name] = c.value;
        for(u in v)c = v[u], u == "children" || (u == "dangerouslySetInnerHTML" ? n = c : u === "key" || u in a || L11(_, u, null, c, o));
        for(u in a)c = a[u], u == "children" ? m = c : u == "dangerouslySetInnerHTML" ? p = c : u == "value" ? h = c : u == "checked" ? k = c : u === "key" || s && typeof c != "function" || v[u] === c || L11(_, u, c, v[u], o);
        if (p) s || n && (p.__html === n.__html || p.__html === _.innerHTML) || (_.innerHTML = p.__html), e.__k = [];
        else if (n && (_.innerHTML = ""), te3(_, A13(m) ? m : [
            m
        ], e, t, i, o && y !== "foreignObject", r, l, r ? r[0] : t.__k && P14(t, 0), s, f), r != null) for(u = r.length; u--;)r[u] != null && ee3(r[u]);
        s || (u = "value", h !== void 0 && (h !== _[u] || y === "progress" && !h || y === "option" && h !== v[u]) && L11(_, u, h, v[u], !1), u = "checked", k !== void 0 && k !== _[u] && L11(_, u, k, v[u], !1));
    }
    return _;
}
function j19(_, e, t) {
    try {
        typeof _ == "function" ? _(e) : _.current = e;
    } catch (i) {
        d18.__e(i, t);
    }
}
function B12(_, e, t) {
    var i, o;
    if (d18.unmount && d18.unmount(_), (i = _.ref) && (i.current && i.current !== _.__e || j19(i, null, e)), (i = _.__c) != null) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (r) {
            d18.__e(r, e);
        }
        i.base = i.__P = null;
    }
    if (i = _.__k) for(o = 0; o < i.length; o++)i[o] && B12(i[o], e, t || typeof _.type != "function");
    t || _.__e == null || ee3(_.__e), _.__c = _.__ = _.__e = _.__d = void 0;
}
function pe1(_, e, t) {
    return this.constructor(_, t);
}
T12 = Z9.slice, d18 = {
    __e: function(_, e, t, i) {
        for(var o, r, l; e = e.__;)if ((o = e.__c) && !o.__) try {
            if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(_)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(_, i || {}), l = o.__d), l) return o.__E = o;
        } catch (s) {
            _ = s;
        }
        throw _;
    }
}, Q7 = 0, M10.prototype.setState = function(_, e) {
    var t;
    t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b26({}, this.state), typeof _ == "function" && (_ = _(b26({}, t), this.props)), _ && b26(t, _), _ != null && this.__v && (e && this._sb.push(e), R10(this));
}, M10.prototype.forceUpdate = function(_) {
    this.__v && (this.__e = !0, _ && this.__h.push(_), R10(this));
}, M10.prototype.render = H8, x28 = [], X6 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, I11 = function(_, e) {
    return _.__v.__b - e.__v.__b;
}, W9.__r = 0, G14 = 0, $11 = K8(!1), O16 = K8(!0), 0;
var D20, a15, J11, C11, j20, K9, $12, E19 = {}, X7 = [], oe4 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, F17 = Array.isArray;
function b27(e, _) {
    for(var t in _)e[t] = _[t];
    return e;
}
function Y7(e) {
    var _ = e.parentNode;
    _ && _.removeChild(e);
}
function re2(e, _, t) {
    var i, o, r, l = {};
    for(r in _)r == "key" ? i = _[r] : r == "ref" ? o = _[r] : l[r] = _[r];
    if (arguments.length > 2 && (l.children = arguments.length > 3 ? D20.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null) for(r in e.defaultProps)l[r] === void 0 && (l[r] = e.defaultProps[r]);
    return S14(e, l, i, o, null);
}
function S14(e, _, t, i, o) {
    var r = {
        type: e,
        props: _,
        key: t,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: o ?? ++J11,
        __i: -1,
        __u: 0
    };
    return o == null && a15.vnode != null && a15.vnode(r), r;
}
function H9(e) {
    return e.children;
}
function W10(e, _) {
    this.props = e, this.context = _;
}
function w15(e, _) {
    if (_ == null) return e.__ ? w15(e.__, e.__i + 1) : null;
    for(var t; _ < e.__k.length; _++)if ((t = e.__k[_]) != null && t.__e != null) return t.__e;
    return typeof e.type == "function" ? w15(e) : null;
}
function Z10(e) {
    var _, t;
    if ((e = e.__) != null && e.__c != null) {
        for(e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)if ((t = e.__k[_]) != null && t.__e != null) {
            e.__e = e.__c.base = t.__e;
            break;
        }
        return Z10(e);
    }
}
function I12(e) {
    (!e.__d && (e.__d = !0) && C11.push(e) && !A14.__r++ || j20 !== a15.debounceRendering) && ((j20 = a15.debounceRendering) || K9)(A14);
}
function A14() {
    var e, _, t, i, o, r, l, s, c;
    for(C11.sort($12); e = C11.shift();)e.__d && (_ = C11.length, i = void 0, r = (o = (t = e).__v).__e, s = [], c = [], (l = t.__P) && ((i = b27({}, o)).__v = o.__v + 1, a15.vnode && a15.vnode(i), B13(l, i, o, t.__n, l.ownerSVGElement !== void 0, 32 & o.__u ? [
        r
    ] : null, s, r ?? w15(o), !!(32 & o.__u), c), i.__v = o.__v, i.__.__k[i.__i] = i, te4(s, i, c), i.__e != r && Z10(i)), C11.length > _ && C11.sort($12));
    A14.__r = 0;
}
function ee4(e, _, t, i, o, r, l, s, c, u, p) {
    var n, v, f, h, k, y = i && i.__k || X7, d = _.length;
    for(t.__d = c, ie3(t, _, y), c = t.__d, n = 0; n < d; n++)(f = t.__k[n]) != null && typeof f != "boolean" && typeof f != "function" && (v = f.__i === -1 ? E19 : y[f.__i] || E19, f.__i = n, B13(e, f, v, o, r, l, s, c, u, p), h = f.__e, f.ref && v.ref != f.ref && (v.ref && O17(v.ref, null, f), p.push(f.ref, f.__c || h, f)), k == null && h != null && (k = h), 65536 & f.__u || v.__k === f.__k ? (h || v.__e != c || (c = w15(v)), c = _e2(f, c, e)) : typeof f.type == "function" && f.__d !== void 0 ? c = f.__d : h && (c = h.nextSibling), f.__d = void 0, f.__u &= -196609);
    t.__d = c, t.__e = k;
}
function ie3(e, _, t) {
    var i, o, r, l, s, c = _.length, u = t.length, p = u, n = 0;
    for(e.__k = [], i = 0; i < c; i++)l = i + n, (o = e.__k[i] = (o = _[i]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? S14(null, o, null, null, null) : F17(o) ? S14(H9, {
        children: o
    }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? S14(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = se2(o, t, l, p), o.__i = s, r = null, s !== -1 && (p--, (r = t[s]) && (r.__u |= 131072)), r == null || r.__v === null ? (s == -1 && n--, typeof o.type != "function" && (o.__u |= 65536)) : s !== l && (s === l + 1 ? n++ : s > l ? p > c - l ? n += s - l : n-- : s < l ? s == l - 1 && (n = s - l) : n = 0, s !== i + n && (o.__u |= 65536))) : (r = t[l]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == e.__d && (e.__d = w15(r)), R11(r, r, !1), t[l] = null, p--);
    if (p) for(i = 0; i < u; i++)(r = t[i]) != null && !(131072 & r.__u) && (r.__e == e.__d && (e.__d = w15(r)), R11(r, r));
}
function _e2(e, _, t) {
    var i, o;
    if (typeof e.type == "function") {
        for(i = e.__k, o = 0; i && o < i.length; o++)i[o] && (i[o].__ = e, _ = _e2(i[o], _, t));
        return _;
    }
    e.__e != _ && (t.insertBefore(e.__e, _ || null), _ = e.__e);
    do _ = _ && _.nextSibling;
    while (_ != null && _.nodeType === 8)
    return _;
}
function se2(e, _, t, i) {
    var o = e.key, r = e.type, l = t - 1, s = t + 1, c = _[t];
    if (c === null || c && o == c.key && r === c.type && !(131072 & c.__u)) return t;
    if (i > (c != null && !(131072 & c.__u) ? 1 : 0)) for(; l >= 0 || s < _.length;){
        if (l >= 0) {
            if ((c = _[l]) && !(131072 & c.__u) && o == c.key && r === c.type) return l;
            l--;
        }
        if (s < _.length) {
            if ((c = _[s]) && !(131072 & c.__u) && o == c.key && r === c.type) return s;
            s++;
        }
    }
    return -1;
}
function z11(e, _, t) {
    _[0] === "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || oe4.test(_) ? t : t + "px";
}
function M11(e, _, t, i, o) {
    var r;
    e: if (_ === "style") if (typeof t == "string") e.style.cssText = t;
    else {
        if (typeof i == "string" && (e.style.cssText = i = ""), i) for(_ in i)t && _ in t || z11(e.style, _, "");
        if (t) for(_ in t)i && t[_] === i[_] || z11(e.style, _, t[_]);
    }
    else if (_[0] === "o" && _[1] === "n") r = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + r] = t, t ? i ? t.u = i.u : (t.u = Date.now(), e.addEventListener(_, r ? q18 : G15, r)) : e.removeEventListener(_, r ? q18 : G15, r);
    else {
        if (o) _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (_ !== "width" && _ !== "height" && _ !== "href" && _ !== "list" && _ !== "form" && _ !== "tabIndex" && _ !== "download" && _ !== "rowSpan" && _ !== "colSpan" && _ !== "role" && _ in e) try {
            e[_] = t ?? "";
            break e;
        } catch  {}
        typeof t == "function" || (t == null || t === !1 && _[4] !== "-" ? e.removeAttribute(_) : e.setAttribute(_, t));
    }
}
function G15(e) {
    if (this.l) {
        var _ = this.l[e.type + !1];
        if (e.t) {
            if (e.t <= _.u) return;
        } else e.t = Date.now();
        return _(a15.event ? a15.event(e) : e);
    }
}
function q18(e) {
    if (this.l) return this.l[e.type + !0](a15.event ? a15.event(e) : e);
}
function B13(e, _, t, i, o, r, l, s, c, u) {
    var p, n, v, f, h, k, y, d, m, x, T, P, V, U, N, g = _.type;
    if (_.constructor !== void 0) return null;
    128 & t.__u && (c = !!(32 & t.__u), r = [
        s = _.__e = t.__e
    ]), (p = a15.__b) && p(_);
    e: if (typeof g == "function") try {
        if (d = _.props, m = (p = g.contextType) && i[p.__c], x = p ? m ? m.props.value : p.__ : i, t.__c ? y = (n = _.__c = t.__c).__ = n.__E : ("prototype" in g && g.prototype.render ? _.__c = n = new g(d, x) : (_.__c = n = new W10(d, x), n.constructor = g, n.render = fe3), m && m.sub(n), n.props = d, n.state || (n.state = {}), n.context = x, n.__n = i, v = n.__d = !0, n.__h = [], n._sb = []), n.__s == null && (n.__s = n.state), g.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = b27({}, n.__s)), b27(n.__s, g.getDerivedStateFromProps(d, n.__s))), f = n.props, h = n.state, n.__v = _, v) g.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), n.componentDidMount != null && n.__h.push(n.componentDidMount);
        else {
            if (g.getDerivedStateFromProps == null && d !== f && n.componentWillReceiveProps != null && n.componentWillReceiveProps(d, x), !n.__e && (n.shouldComponentUpdate != null && n.shouldComponentUpdate(d, n.__s, x) === !1 || _.__v === t.__v)) {
                for(_.__v !== t.__v && (n.props = d, n.state = n.__s, n.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.forEach(function(L) {
                    L && (L.__ = _);
                }), T = 0; T < n._sb.length; T++)n.__h.push(n._sb[T]);
                n._sb = [], n.__h.length && l.push(n);
                break e;
            }
            n.componentWillUpdate != null && n.componentWillUpdate(d, n.__s, x), n.componentDidUpdate != null && n.__h.push(function() {
                n.componentDidUpdate(f, h, k);
            });
        }
        if (n.context = x, n.props = d, n.__P = e, n.__e = !1, P = a15.__r, V = 0, "prototype" in g && g.prototype.render) {
            for(n.state = n.__s, n.__d = !1, P && P(_), p = n.render(n.props, n.state, n.context), U = 0; U < n._sb.length; U++)n.__h.push(n._sb[U]);
            n._sb = [];
        } else do n.__d = !1, P && P(_), p = n.render(n.props, n.state, n.context), n.state = n.__s;
        while (n.__d && ++V < 25)
        n.state = n.__s, n.getChildContext != null && (i = b27(b27({}, i), n.getChildContext())), v || n.getSnapshotBeforeUpdate == null || (k = n.getSnapshotBeforeUpdate(f, h)), ee4(e, F17(N = p != null && p.type === H9 && p.key == null ? p.props.children : p) ? N : [
            N
        ], _, t, i, o, r, l, s, c, u), n.base = _.__e, _.__u &= -161, n.__h.length && l.push(n), y && (n.__E = n.__ = null);
    } catch (L) {
        _.__v = null, c || r != null ? (_.__e = s, _.__u |= c ? 160 : 32, r[r.indexOf(s)] = null) : (_.__e = t.__e, _.__k = t.__k), a15.__e(L, _, t);
    }
    else r == null && _.__v === t.__v ? (_.__k = t.__k, _.__e = t.__e) : _.__e = ue2(t.__e, _, t, i, o, r, l, c, u);
    (p = a15.diffed) && p(_);
}
function te4(e, _, t) {
    _.__d = void 0;
    for(var i = 0; i < t.length; i++)O17(t[i], t[++i], t[++i]);
    a15.__c && a15.__c(_, e), e.some(function(o) {
        try {
            e = o.__h, o.__h = [], e.some(function(r) {
                r.call(o);
            });
        } catch (r) {
            a15.__e(r, o.__v);
        }
    });
}
function ue2(e, _, t, i, o, r, l, s, c) {
    var u, p, n, v, f, h, k, y = t.props, d = _.props, m = _.type;
    if (m === "svg" && (o = !0), r != null) {
        for(u = 0; u < r.length; u++)if ((f = r[u]) && "setAttribute" in f == !!m && (m ? f.localName === m : f.nodeType === 3)) {
            e = f, r[u] = null;
            break;
        }
    }
    if (e == null) {
        if (m === null) return document.createTextNode(d);
        e = o ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, d.is && d), r = null, s = !1;
    }
    if (m === null) y === d || s && e.data === d || (e.data = d);
    else {
        if (r = r && D20.call(e.childNodes), y = t.props || E19, !s && r != null) for(y = {}, u = 0; u < e.attributes.length; u++)y[(f = e.attributes[u]).name] = f.value;
        for(u in y)f = y[u], u == "children" || (u == "dangerouslySetInnerHTML" ? n = f : u === "key" || u in d || M11(e, u, null, f, o));
        for(u in d)f = d[u], u == "children" ? v = f : u == "dangerouslySetInnerHTML" ? p = f : u == "value" ? h = f : u == "checked" ? k = f : u === "key" || s && typeof f != "function" || y[u] === f || M11(e, u, f, y[u], o);
        if (p) s || n && (p.__html === n.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html), _.__k = [];
        else if (n && (e.innerHTML = ""), ee4(e, F17(v) ? v : [
            v
        ], _, t, i, o && m !== "foreignObject", r, l, r ? r[0] : t.__k && w15(t, 0), s, c), r != null) for(u = r.length; u--;)r[u] != null && Y7(r[u]);
        s || (u = "value", h !== void 0 && (h !== e[u] || m === "progress" && !h || m === "option" && h !== y[u]) && M11(e, u, h, y[u], !1), u = "checked", k !== void 0 && k !== e[u] && M11(e, u, k, y[u], !1));
    }
    return e;
}
function O17(e, _, t) {
    try {
        typeof e == "function" ? e(_) : e.current = _;
    } catch (i) {
        a15.__e(i, t);
    }
}
function R11(e, _, t) {
    var i, o;
    if (a15.unmount && a15.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || O17(i, null, _)), (i = e.__c) != null) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (r) {
            a15.__e(r, _);
        }
        i.base = i.__P = null, e.__c = void 0;
    }
    if (i = e.__k) for(o = 0; o < i.length; o++)i[o] && R11(i[o], _, t || typeof e.type != "function");
    t || e.__e == null || Y7(e.__e), e.__ = e.__e = e.__d = void 0;
}
function fe3(e, _, t) {
    return this.constructor(e, t);
}
D20 = X7.slice, a15 = {
    __e: function(e, _, t, i) {
        for(var o, r, l; _ = _.__;)if ((o = _.__c) && !o.__) try {
            if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, i || {}), l = o.__d), l) return o.__E = o;
        } catch (s) {
            e = s;
        }
        throw e;
    }
}, J11 = 0, W10.prototype.setState = function(e, _) {
    var t;
    t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b27({}, this.state), typeof e == "function" && (e = e(b27({}, t), this.props)), e && b27(t, e), e != null && this.__v && (_ && this._sb.push(_), I12(this));
}, W10.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), I12(this));
}, W10.prototype.render = H9, C11 = [], K9 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $12 = function(e, _) {
    return e.__v.__b - _.__v.__b;
}, A14.__r = 0, 0;
var M12 = /[\s\n\\/='"\0<>]/, Q8 = /^(xlink|xmlns|xml)([A-Z])/, ae2 = /^accessK|^auto[A-Z]|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|readO|rowS|spellC|src[A-Z]|tabI|item[A-Z]/, ie4 = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/, se3 = /["&<]/;
function H10(e) {
    if (e.length === 0 || se3.test(e) === !1) return e;
    for(var n = 0, t = 0, r = "", a = ""; t < e.length; t++){
        switch(e.charCodeAt(t)){
            case 34:
                a = "&quot;";
                break;
            case 38:
                a = "&amp;";
                break;
            case 60:
                a = "&lt;";
                break;
            default:
                continue;
        }
        t !== n && (r += e.slice(n, t)), r += a, n = t + 1;
    }
    return t !== n && (r += e.slice(n, t)), r;
}
var X8 = {}, ce3 = new Set([
    "animation-iteration-count",
    "border-image-outset",
    "border-image-slice",
    "border-image-width",
    "box-flex",
    "box-flex-group",
    "box-ordinal-group",
    "column-count",
    "fill-opacity",
    "flex",
    "flex-grow",
    "flex-negative",
    "flex-order",
    "flex-positive",
    "flex-shrink",
    "flood-opacity",
    "font-weight",
    "grid-column",
    "grid-row",
    "line-clamp",
    "line-height",
    "opacity",
    "order",
    "orphans",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "tab-size",
    "widows",
    "z-index",
    "zoom"
]), le2 = /[A-Z]/g;
function ue3(e) {
    var n = "";
    for(var t in e){
        var r = e[t];
        if (r != null && r !== "") {
            var a = t[0] == "-" ? t : X8[t] || (X8[t] = t.replace(le2, "-$&").toLowerCase()), o = ";";
            typeof r != "number" || a.startsWith("--") || ce3.has(a) || (o = "px;"), n = n + a + ":" + r + o;
        }
    }
    return n || void 0;
}
function y16(e, n, t) {
    if (!e.s) {
        if (t instanceof $13) {
            if (!t.s) return void (t.o = y16.bind(null, e, n));
            1 & n && (n = t.s), t = t.v;
        }
        if (t && t.then) return void t.then(y16.bind(null, e, n), y16.bind(null, e, 2));
        e.s = n, e.v = t;
        let r = e.o;
        r && r(e);
    }
}
var $13 = function() {
    function e() {}
    return e.prototype.then = function(n, t) {
        var r = new e, a = this.s;
        if (a) {
            var o = 1 & a ? n : t;
            if (o) {
                try {
                    y16(r, 1, o(this.v));
                } catch (i) {
                    y16(r, 2, i);
                }
                return r;
            }
            return this;
        }
        return this.o = function(i) {
            try {
                var l = i.v;
                1 & i.s ? y16(r, 1, n ? n(l) : l) : t ? y16(r, 1, t(l)) : y16(r, 2, l);
            } catch (_) {
                y16(r, 2, _);
            }
        }, r;
    }, e;
}();
var O18, w16, P15, A15, z12 = [], Y8 = Array.isArray, W11 = Object.assign;
function q19(e, n) {
    var t = a15.__s;
    a15.__s = !0, O18 = a15.__b, w16 = a15.diffed, P15 = a15.__r, A15 = a15.unmount;
    var r = re2(H9, null);
    r.__k = [
        e
    ];
    try {
        return C12(e, n || B14, !1, void 0, r, !1);
    } catch (a) {
        throw a.then ? new Error('Use "renderToStringAsync" for suspenseful rendering.') : a;
    } finally{
        a15.__c && a15.__c(e, z12), a15.__s = t, z12.length = 0;
    }
}
function G16() {
    this.__d = !0;
}
var B14 = {};
function K10(e, n) {
    var t, r = e.type, a = !0;
    return e.__c ? (a = !1, (t = e.__c).state = t.__s) : t = new r(e.props, n), e.__c = t, t.__v = e, t.props = e.props, t.context = n, t.__d = !0, t.state == null && (t.state = B14), t.__s == null && (t.__s = t.state), r.getDerivedStateFromProps ? t.state = W11({}, t.state, r.getDerivedStateFromProps(t.props, t.state)) : a && t.componentWillMount ? (t.componentWillMount(), t.state = t.__s !== t.state ? t.__s : t.state) : !a && t.componentWillUpdate && t.componentWillUpdate(), P15 && P15(e), t.render(t.props, t.state, n);
}
function C12(e, n, t, r, a, o) {
    if (e == null || e === !0 || e === !1 || e === "") return "";
    if (typeof e != "object") return typeof e == "function" ? "" : H10(e + "");
    if (Y8(e)) {
        var i, l = "";
        a.__k = e;
        for(var _ = 0; _ < e.length; _++){
            var m = e[_];
            if (m != null && typeof m != "boolean") {
                var g, v = C12(m, n, t, r, a, o);
                typeof v == "string" ? l += v : (i = i || [], l && i.push(l), l = "", Array.isArray(v) ? (g = i).push.apply(g, v) : i.push(v));
            }
        }
        return i ? (l && i.push(l), i) : l;
    }
    if (e.constructor !== void 0) return "";
    e.__ = a, O18 && O18(e);
    var S, s, d, f = e.type, p = e.props, j = n;
    if (typeof f == "function") {
        if (f === H9) {
            if (p.tpl) {
                for(var F = "", U = 0; U < p.tpl.length; U++)if (F += p.tpl[U], p.exprs && U < p.exprs.length) {
                    var T = p.exprs[U];
                    if (T == null) continue;
                    typeof T != "object" || T.constructor !== void 0 && !Y8(T) ? F += T : F += C12(T, n, t, r, e, o);
                }
                return F;
            }
            if (p.UNSTABLE_comment) return "<!--" + H10(p.UNSTABLE_comment || "") + "-->";
            s = p.children;
        } else {
            if ((S = f.contextType) != null) {
                var J = n[S.__c];
                j = J ? J.props.value : S.__;
            }
            if (f.prototype && typeof f.prototype.render == "function") s = K10(e, j), d = e.__c;
            else {
                e.__c = d = {
                    __v: e,
                    props: p,
                    context: j,
                    setState: G16,
                    forceUpdate: G16,
                    __d: !0,
                    __h: []
                };
                for(var te = 0; d.__d && te++ < 25;)d.__d = !1, P15 && P15(e), s = f.call(d, p, j);
                d.__d = !0;
            }
            if (d.getChildContext != null && (n = W11({}, n, d.getChildContext())), (f.getDerivedStateFromError || d.componentDidCatch) && a15.errorBoundaries) {
                var I = "";
                s = s != null && s.type === H9 && s.key == null ? s.props.children : s;
                try {
                    return I = C12(s, n, t, r, e, o);
                } catch (x) {
                    return f.getDerivedStateFromError && (d.__s = f.getDerivedStateFromError(x)), d.componentDidCatch && d.componentDidCatch(x, {}), d.__d && (s = K10(e, n), (d = e.__c).getChildContext != null && (n = W11({}, n, d.getChildContext())), I = C12(s = s != null && s.type === H9 && s.key == null ? s.props.children : s, n, t, r, e, o)), I;
                } finally{
                    w16 && w16(e), e.__ = null, A15 && A15(e);
                }
            }
        }
        s = s != null && s.type === H9 && s.key == null ? s.props.children : s;
        var N = function() {
            return C12(s, n, t, r, e, o);
        };
        try {
            var ne = N();
            return w16 && w16(e), e.__ = null, A15 && A15(e), ne;
        } catch (x) {
            if (!o || !x || typeof x.then != "function") throw x;
            var re = function oe() {
                try {
                    return N();
                } catch (Z) {
                    if (!Z || typeof Z.then != "function") throw Z;
                    return Z.then(function() {
                        return N();
                    }, function() {
                        return oe();
                    });
                }
            };
            return x.then(function() {
                return re();
            });
        }
    }
    var k, L = "<" + f, b = "";
    for(var c in p){
        var h = p[c];
        switch(c){
            case "children":
                k = h;
                continue;
            case "key":
            case "ref":
            case "__self":
            case "__source":
                continue;
            case "htmlFor":
                if ("for" in p) continue;
                c = "for";
                break;
            case "className":
                if ("class" in p) continue;
                c = "class";
                break;
            case "defaultChecked":
                c = "checked";
                break;
            case "defaultSelected":
                c = "selected";
                break;
            case "defaultValue":
            case "value":
                switch(c = "value", f){
                    case "textarea":
                        k = h;
                        continue;
                    case "select":
                        r = h;
                        continue;
                    case "option":
                        r != h || "selected" in p || (L += " selected");
                }
                break;
            case "dangerouslySetInnerHTML":
                b = h && h.__html;
                continue;
            case "style":
                typeof h == "object" && (h = ue3(h));
                break;
            case "acceptCharset":
                c = "accept-charset";
                break;
            case "httpEquiv":
                c = "http-equiv";
                break;
            default:
                if (Q8.test(c)) c = c.replace(Q8, "$1:$2").toLowerCase();
                else {
                    if (M12.test(c)) continue;
                    c[4] !== "-" && c !== "draggable" || h == null ? t ? ie4.test(c) && (c = c === "panose1" ? "panose-1" : c.replace(/([A-Z])/g, "-$1").toLowerCase()) : ae2.test(c) && (c = c.toLowerCase()) : h += "";
                }
        }
        h != null && h !== !1 && typeof h != "function" && (L = h === !0 || h === "" ? L + " " + c : L + " " + c + '="' + H10(h + "") + '"');
    }
    if (M12.test(f)) throw new Error(f + " is not a valid HTML tag name in " + L + ">");
    if (b || (typeof k == "string" ? b = H10(k) : k != null && k !== !1 && k !== !0 && (b = C12(k, n, f === "svg" || f !== "foreignObject" && t, r, e, o))), w16 && w16(e), e.__ = null, A15 && A15(e), !b && pe2.has(f)) return L + "/>";
    var R = "</" + f + ">", V = L + ">";
    return Array.isArray(b) ? [
        V
    ].concat(b, [
        R
    ]) : typeof b != "string" ? [
        V,
        b,
        R
    ] : V + b + R;
}
var pe2 = new Set([
    "area",
    "base",
    "br",
    "col",
    "command",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]), ve = q19;
var Kind_V2;
(function(Kind_V2) {
    Kind_V2["ChannelCreation"] = "ChannelCreation";
    Kind_V2["ChannelEdition"] = "ChannelEdition";
    Kind_V2["RelayMember"] = "RelayMember";
})(Kind_V2 || (Kind_V2 = {}));
const Policies = (kv)=>async function() {
        const list = kv.list({
            prefix: [
                "policy"
            ]
        });
        const res = [];
        for await (const entry of list){
            res.push(entry.value);
        }
        return res;
    };
class PolicyStore {
    args;
    constructor(args){
        this.args = args;
        this.resolvePolicyByKind = async (kind)=>{
            let entry;
            try {
                entry = await this.args.kv.get([
                    "policy",
                    kind
                ]);
            } catch (e) {
                return e;
            }
            const policy = entry.value;
            if (policy == null) {
                const default_policy = this.args.default_policy;
                let allow_this_kind;
                if (default_policy.allowed_kinds == "all") {
                    allow_this_kind = true;
                } else if (default_policy.allowed_kinds == "none") {
                    allow_this_kind = false;
                } else if (default_policy.allowed_kinds.includes(kind)) {
                    allow_this_kind = true;
                } else {
                    allow_this_kind = false;
                }
                return {
                    kind: kind,
                    read: allow_this_kind,
                    write: allow_this_kind,
                    allow: new Set(),
                    block: new Set()
                };
            }
            return policy;
        };
        this.set_policy = async (args)=>{
            const policy = await this.resolvePolicyByKind(args.kind);
            if (policy instanceof Error) {
                return policy;
            }
            if (args.read != undefined) {
                policy.read = args.read;
            }
            if (args.write != undefined) {
                policy.write = args.write;
            }
            if (args.allow) {
                const allow = new Set();
                for (const str of args.allow){
                    const pubkey = PublicKey.FromString(str);
                    if (pubkey instanceof Error) {
                        return pubkey;
                    }
                    allow.add(pubkey.hex);
                }
                policy.allow = allow;
            }
            if (args.block) {
                const blocks = new Set();
                for (const str of args.block){
                    const pubkey = PublicKey.FromString(str);
                    if (pubkey instanceof Error) {
                        return pubkey;
                    }
                    blocks.add(pubkey.hex);
                }
                policy.block = blocks;
            }
            await this.args.kv.set([
                "policy",
                args.kind
            ], policy);
            return policy;
        };
    }
    resolvePolicyByKind;
    set_policy;
}
const get_relay_members = (db)=>async ()=>{
        if (!db) {
            return new Error("get_relay_members is not supported");
        }
        const rows = db.query("select event from events_v2 where kind = (?)", [
            Kind_V2.RelayMember
        ]);
        const events = [];
        for (const row of rows){
            const relay_member_event = parseJSON(row[0]);
            if (relay_member_event instanceof Error) {
                return relay_member_event;
            }
            events.push(relay_member_event);
        }
        if (events.length == 0) {
            return;
        }
        const event = events.sort((e1, e2)=>e1.created_at - e2.created_at)[0];
        console.log(event);
        return event;
    };
function RootResolver({ deps }) {
    return {
        ...Queries(deps),
        ...Mutation(deps)
    };
}
function Queries(deps) {
    return {
        policies: Policies(deps.kv),
        relayInformation: deps.relayInformationStore.resolveRelayInformation,
        events: async (args)=>{
            return {
                count_total: async ()=>{
                    return Array.from(await deps.get_event_count()).reduce((pre, cur)=>{
                        return pre + cur[1];
                    }, 0);
                },
                count_per_kind: async ()=>{
                    return Array.from(await deps.get_event_count()).map((r)=>{
                        return {
                            kind: r[0],
                            count: r[1]
                        };
                    });
                }
            };
        },
        channel: (args)=>{},
        deleted_events: async ()=>{
            return deps.get_deleted_event_ids();
        },
        members: async ()=>{
            const members = await deps.get_relay_members();
            if (members instanceof Error) {
                console.error(members);
                throw members;
            }
            if (members == undefined) {
                return [];
            }
            return members.members;
        }
    };
}
const Mutation = (deps)=>{
    const { policyStore, relayInformationStore } = deps;
    return {
        add_block: async (args)=>{
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            if (policy instanceof Error) {
                return policy;
            }
            policy.block.add(args.pubkey);
            await policyStore.set_policy(policy);
            return policy;
        },
        remove_block: async (args)=>{
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            if (policy instanceof Error) {
                return policy;
            }
            policy.block.delete(args.pubkey);
            await policyStore.set_policy(policy);
            return policy;
        },
        add_allow: async (args)=>{
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            if (policy instanceof Error) {
                return policy;
            }
            policy.allow.add(args.pubkey);
            await policyStore.set_policy(policy);
            return policy;
        },
        remove_allow: async (args)=>{
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            if (policy instanceof Error) {
                return policy;
            }
            policy.allow.delete(args.pubkey);
            await policyStore.set_policy(policy);
            return policy;
        },
        set_policy: policyStore.set_policy,
        set_relay_information: relayInformationStore.set_relay_information,
        delete_event: async (args)=>{
            const ok = await deps.delete_event(args.id);
            console.log("|||", ok);
        },
        delete_events_from_pubkey: async (args)=>{
            return deps.delete_events_from_pubkey(args.pubkey);
        }
    };
};
Object.freeze({
    major: 16,
    minor: 8,
    patch: 1,
    preReleaseTag: null
});
function S15(e, t) {
    if (!!!e) throw new Error(t);
}
function ae3(e) {
    return typeof e?.then == "function";
}
function H11(e) {
    return typeof e == "object" && e !== null;
}
function V12(e, t) {
    if (!!!e) throw new Error(t ?? "Unexpected invariant triggered.");
}
var Ss = /\r\n|[\n\r]/g;
function pt2(e, t) {
    let n = 0, r = 1;
    for (let i of e.body.matchAll(Ss)){
        if (typeof i.index == "number" || V12(!1), i.index >= t) break;
        n = i.index + i[0].length, r += 1;
    }
    return {
        line: r,
        column: t + 1 - n
    };
}
function bn(e) {
    return qt1(e.source, pt2(e.source, e.start));
}
function qt1(e, t) {
    let n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, o = e.locationOffset.line - 1, s = t.line + o, a = t.line === 1 ? n : 0, u = t.column + a, p = `${e.name}:${s}:${u}
`, l = r.split(/\r\n|[\n\r]/g), d = l[i];
    if (d.length > 120) {
        let m = Math.floor(u / 80), E = u % 80, N = [];
        for(let C = 0; C < d.length; C += 80)N.push(d.slice(C, C + 80));
        return p + Vi([
            [
                `${s} |`,
                N[0]
            ],
            ...N.slice(1, m + 1).map((C)=>[
                    "|",
                    C
                ]),
            [
                "|",
                "^".padStart(E)
            ],
            [
                "|",
                N[m + 1]
            ]
        ]);
    }
    return p + Vi([
        [
            `${s - 1} |`,
            l[i - 1]
        ],
        [
            `${s} |`,
            d
        ],
        [
            "|",
            "^".padStart(u)
        ],
        [
            `${s + 1} |`,
            l[i + 1]
        ]
    ]);
}
function Vi(e) {
    let t = e.filter(([r, i])=>i !== void 0), n = Math.max(...t.map(([r])=>r.length));
    return t.map(([r, i])=>r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function As(e) {
    let t = e[0];
    return t == null || "kind" in t || "length" in t ? {
        nodes: t,
        source: e[1],
        positions: e[2],
        path: e[3],
        originalError: e[4],
        extensions: e[5]
    } : t;
}
var f13 = class e extends Error {
    constructor(t, ...n){
        var r, i, o;
        let { nodes: s, source: a, positions: u, path: p, originalError: l, extensions: d } = As(n);
        super(t), this.name = "GraphQLError", this.path = p ?? void 0, this.originalError = l ?? void 0, this.nodes = $i(Array.isArray(s) ? s : s ? [
            s
        ] : void 0);
        let m = $i((r = this.nodes) === null || r === void 0 ? void 0 : r.map((N)=>N.loc).filter((N)=>N != null));
        this.source = a ?? (m == null || (i = m[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? m?.map((N)=>N.start), this.locations = u && a ? u.map((N)=>pt2(a, N)) : m?.map((N)=>pt2(N.source, N.start));
        let E = H11(l?.extensions) ? l?.extensions : void 0;
        this.extensions = (o = d ?? E) !== null && o !== void 0 ? o : Object.create(null), Object.defineProperties(this, {
            message: {
                writable: !0,
                enumerable: !0
            },
            name: {
                enumerable: !1
            },
            nodes: {
                enumerable: !1
            },
            source: {
                enumerable: !1
            },
            positions: {
                enumerable: !1
            },
            originalError: {
                enumerable: !1
            }
        }), l != null && l.stack ? Object.defineProperty(this, "stack", {
            value: l.stack,
            writable: !0,
            configurable: !0
        }) : Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0
        });
    }
    get [Symbol.toStringTag]() {
        return "GraphQLError";
    }
    toString() {
        let t = this.message;
        if (this.nodes) for (let n of this.nodes)n.loc && (t += `

` + bn(n.loc));
        else if (this.source && this.locations) for (let n of this.locations)t += `

` + qt1(this.source, n);
        return t;
    }
    toJSON() {
        let t = {
            message: this.message
        };
        return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
    }
};
function $i(e) {
    return e === void 0 || e.length === 0 ? void 0 : e;
}
function W12(e, t, n) {
    return new f13(`Syntax Error: ${n}`, {
        source: e,
        positions: [
            t
        ]
    });
}
var Ot1 = class {
    constructor(t, n, r){
        this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = r;
    }
    get [Symbol.toStringTag]() {
        return "Location";
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        };
    }
}, lt3 = class {
    constructor(t, n, r, i, o, s){
        this.kind = t, this.start = n, this.end = r, this.line = i, this.column = o, this.value = s, this.prev = null, this.next = null;
    }
    get [Symbol.toStringTag]() {
        return "Token";
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        };
    }
}, Yr = {
    Name: [],
    Document: [
        "definitions"
    ],
    OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet"
    ],
    VariableDefinition: [
        "variable",
        "type",
        "defaultValue",
        "directives"
    ],
    Variable: [
        "name"
    ],
    SelectionSet: [
        "selections"
    ],
    Field: [
        "alias",
        "name",
        "arguments",
        "directives",
        "selectionSet"
    ],
    Argument: [
        "name",
        "value"
    ],
    FragmentSpread: [
        "name",
        "directives"
    ],
    InlineFragment: [
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        "values"
    ],
    ObjectValue: [
        "fields"
    ],
    ObjectField: [
        "name",
        "value"
    ],
    Directive: [
        "name",
        "arguments"
    ],
    NamedType: [
        "name"
    ],
    ListType: [
        "type"
    ],
    NonNullType: [
        "type"
    ],
    SchemaDefinition: [
        "description",
        "directives",
        "operationTypes"
    ],
    OperationTypeDefinition: [
        "type"
    ],
    ScalarTypeDefinition: [
        "description",
        "name",
        "directives"
    ],
    ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    FieldDefinition: [
        "description",
        "name",
        "arguments",
        "type",
        "directives"
    ],
    InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives"
    ],
    InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeDefinition: [
        "description",
        "name",
        "directives",
        "types"
    ],
    EnumTypeDefinition: [
        "description",
        "name",
        "directives",
        "values"
    ],
    EnumValueDefinition: [
        "description",
        "name",
        "directives"
    ],
    InputObjectTypeDefinition: [
        "description",
        "name",
        "directives",
        "fields"
    ],
    DirectiveDefinition: [
        "description",
        "name",
        "arguments",
        "locations"
    ],
    SchemaExtension: [
        "directives",
        "operationTypes"
    ],
    ScalarTypeExtension: [
        "name",
        "directives"
    ],
    ObjectTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    InterfaceTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeExtension: [
        "name",
        "directives",
        "types"
    ],
    EnumTypeExtension: [
        "name",
        "directives",
        "values"
    ],
    InputObjectTypeExtension: [
        "name",
        "directives",
        "fields"
    ]
}, xs = new Set(Object.keys(Yr));
function Yt1(e) {
    let t = e?.kind;
    return typeof t == "string" && xs.has(t);
}
var Q9;
(function(e) {
    e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Q9 || (Q9 = {}));
var D21;
(function(e) {
    e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(D21 || (D21 = {}));
var c18;
(function(e) {
    e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(c18 || (c18 = {}));
function _n(e) {
    return e === 9 || e === 32;
}
function Dt1(e) {
    return e >= 48 && e <= 57;
}
function Mi(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Jt(e) {
    return Mi(e) || e === 95;
}
function On(e) {
    return Mi(e) || Dt1(e) || e === 95;
}
function ji(e) {
    var t;
    let n = Number.MAX_SAFE_INTEGER, r = null, i = -1;
    for(let s = 0; s < e.length; ++s){
        var o;
        let a = e[s], u = Rs(a);
        u !== a.length && (r = (o = r) !== null && o !== void 0 ? o : s, i = s, s !== 0 && u < n && (n = u));
    }
    return e.map((s, a)=>a === 0 ? s : s.slice(n)).slice((t = r) !== null && t !== void 0 ? t : 0, i + 1);
}
function Rs(e) {
    let t = 0;
    for(; t < e.length && _n(e.charCodeAt(t));)++t;
    return t;
}
function Dn(e, t) {
    let n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, o = r.length > 1 && r.slice(1).every((E)=>E.length === 0 || _n(E.charCodeAt(0))), s = n.endsWith('\\"""'), a = e.endsWith('"') && !s, u = e.endsWith("\\"), p = a || u, l = !(t != null && t.minimize) && (!i || e.length > 70 || p || o || s), d = "", m = i && _n(e.charCodeAt(0));
    return (l && !m || o) && (d += `
`), d += n, (l || p) && (d += `
`), '"""' + d + '"""';
}
var T13;
(function(e) {
    e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(T13 || (T13 = {}));
var We = class {
    constructor(t){
        let n = new lt3(T13.SOF, 0, 0, 0, 0);
        this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
        return "Lexer";
    }
    advance() {
        return this.lastToken = this.token, this.token = this.lookahead();
    }
    lookahead() {
        let t = this.token;
        if (t.kind !== T13.EOF) do if (t.next) t = t.next;
        else {
            let n = Ls(this, t.end);
            t.next = n, n.prev = t, t = n;
        }
        while (t.kind === T13.COMMENT)
        return t;
    }
};
function Sn(e) {
    return e === T13.BANG || e === T13.DOLLAR || e === T13.AMP || e === T13.PAREN_L || e === T13.PAREN_R || e === T13.SPREAD || e === T13.COLON || e === T13.EQUALS || e === T13.AT || e === T13.BRACKET_L || e === T13.BRACKET_R || e === T13.BRACE_L || e === T13.PIPE || e === T13.BRACE_R;
}
function St(e) {
    return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function An(e, t) {
    return Qi(e.charCodeAt(t)) && Bi(e.charCodeAt(t + 1));
}
function Qi(e) {
    return e >= 55296 && e <= 56319;
}
function Bi(e) {
    return e >= 56320 && e <= 57343;
}
function ft2(e, t) {
    let n = e.source.body.codePointAt(t);
    if (n === void 0) return T13.EOF;
    if (n >= 32 && n <= 126) {
        let r = String.fromCodePoint(n);
        return r === '"' ? `'"'` : `"${r}"`;
    }
    return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function Z11(e, t, n, r, i) {
    let o = e.line, s = 1 + n - e.lineStart;
    return new lt3(t, n, r, o, s, i);
}
function Ls(e, t) {
    let n = e.source.body, r = n.length, i = t;
    for(; i < r;){
        let o = n.charCodeAt(i);
        switch(o){
            case 65279:
            case 9:
            case 32:
            case 44:
                ++i;
                continue;
            case 10:
                ++i, ++e.line, e.lineStart = i;
                continue;
            case 13:
                n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
                continue;
            case 35:
                return ws(e, i);
            case 33:
                return Z11(e, T13.BANG, i, i + 1);
            case 36:
                return Z11(e, T13.DOLLAR, i, i + 1);
            case 38:
                return Z11(e, T13.AMP, i, i + 1);
            case 40:
                return Z11(e, T13.PAREN_L, i, i + 1);
            case 41:
                return Z11(e, T13.PAREN_R, i, i + 1);
            case 46:
                if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return Z11(e, T13.SPREAD, i, i + 3);
                break;
            case 58:
                return Z11(e, T13.COLON, i, i + 1);
            case 61:
                return Z11(e, T13.EQUALS, i, i + 1);
            case 64:
                return Z11(e, T13.AT, i, i + 1);
            case 91:
                return Z11(e, T13.BRACKET_L, i, i + 1);
            case 93:
                return Z11(e, T13.BRACKET_R, i, i + 1);
            case 123:
                return Z11(e, T13.BRACE_L, i, i + 1);
            case 124:
                return Z11(e, T13.PIPE, i, i + 1);
            case 125:
                return Z11(e, T13.BRACE_R, i, i + 1);
            case 34:
                return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? Us(e, i) : ks(e, i);
        }
        if (Dt1(o) || o === 45) return Fs(e, i, o);
        if (Jt(o)) return Ms(e, i);
        throw W12(e.source, i, o === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : St(o) || An(n, i) ? `Unexpected character: ${ft2(e, i)}.` : `Invalid character: ${ft2(e, i)}.`);
    }
    return Z11(e, T13.EOF, r, r);
}
function ws(e, t) {
    let n = e.source.body, r = n.length, i = t + 1;
    for(; i < r;){
        let o = n.charCodeAt(i);
        if (o === 10 || o === 13) break;
        if (St(o)) ++i;
        else if (An(n, i)) i += 2;
        else break;
    }
    return Z11(e, T13.COMMENT, t, i, n.slice(t + 1, i));
}
function Fs(e, t, n) {
    let r = e.source.body, i = t, o = n, s = !1;
    if (o === 45 && (o = r.charCodeAt(++i)), o === 48) {
        if (o = r.charCodeAt(++i), Dt1(o)) throw W12(e.source, i, `Invalid number, unexpected digit after 0: ${ft2(e, i)}.`);
    } else i = Jr(e, i, o), o = r.charCodeAt(i);
    if (o === 46 && (s = !0, o = r.charCodeAt(++i), i = Jr(e, i, o), o = r.charCodeAt(i)), (o === 69 || o === 101) && (s = !0, o = r.charCodeAt(++i), (o === 43 || o === 45) && (o = r.charCodeAt(++i)), i = Jr(e, i, o), o = r.charCodeAt(i)), o === 46 || Jt(o)) throw W12(e.source, i, `Invalid number, expected digit but got: ${ft2(e, i)}.`);
    return Z11(e, s ? T13.FLOAT : T13.INT, t, i, r.slice(t, i));
}
function Jr(e, t, n) {
    if (!Dt1(n)) throw W12(e.source, t, `Invalid number, expected digit but got: ${ft2(e, t)}.`);
    let r = e.source.body, i = t + 1;
    for(; Dt1(r.charCodeAt(i));)++i;
    return i;
}
function ks(e, t) {
    let n = e.source.body, r = n.length, i = t + 1, o = i, s = "";
    for(; i < r;){
        let a = n.charCodeAt(i);
        if (a === 34) return s += n.slice(o, i), Z11(e, T13.STRING, t, i + 1, s);
        if (a === 92) {
            s += n.slice(o, i);
            let u = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? Vs(e, i) : $s(e, i) : Cs(e, i);
            s += u.value, i += u.size, o = i;
            continue;
        }
        if (a === 10 || a === 13) break;
        if (St(a)) ++i;
        else if (An(n, i)) i += 2;
        else throw W12(e.source, i, `Invalid character within String: ${ft2(e, i)}.`);
    }
    throw W12(e.source, i, "Unterminated string.");
}
function Vs(e, t) {
    let n = e.source.body, r = 0, i = 3;
    for(; i < 12;){
        let o = n.charCodeAt(t + i++);
        if (o === 125) {
            if (i < 5 || !St(r)) break;
            return {
                value: String.fromCodePoint(r),
                size: i
            };
        }
        if (r = r << 4 | Kt2(o), r < 0) break;
    }
    throw W12(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
}
function $s(e, t) {
    let n = e.source.body, r = Gi(n, t + 2);
    if (St(r)) return {
        value: String.fromCodePoint(r),
        size: 6
    };
    if (Qi(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
        let i = Gi(n, t + 8);
        if (Bi(i)) return {
            value: String.fromCodePoint(r, i),
            size: 12
        };
    }
    throw W12(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function Gi(e, t) {
    return Kt2(e.charCodeAt(t)) << 12 | Kt2(e.charCodeAt(t + 1)) << 8 | Kt2(e.charCodeAt(t + 2)) << 4 | Kt2(e.charCodeAt(t + 3));
}
function Kt2(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function Cs(e, t) {
    let n = e.source.body;
    switch(n.charCodeAt(t + 1)){
        case 34:
            return {
                value: '"',
                size: 2
            };
        case 92:
            return {
                value: "\\",
                size: 2
            };
        case 47:
            return {
                value: "/",
                size: 2
            };
        case 98:
            return {
                value: "\b",
                size: 2
            };
        case 102:
            return {
                value: "\f",
                size: 2
            };
        case 110:
            return {
                value: `
`,
                size: 2
            };
        case 114:
            return {
                value: "\r",
                size: 2
            };
        case 116:
            return {
                value: "	",
                size: 2
            };
    }
    throw W12(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function Us(e, t) {
    let n = e.source.body, r = n.length, i = e.lineStart, o = t + 3, s = o, a = "", u = [];
    for(; o < r;){
        let p = n.charCodeAt(o);
        if (p === 34 && n.charCodeAt(o + 1) === 34 && n.charCodeAt(o + 2) === 34) {
            a += n.slice(s, o), u.push(a);
            let l = Z11(e, T13.BLOCK_STRING, t, o + 3, ji(u).join(`
`));
            return e.line += u.length - 1, e.lineStart = i, l;
        }
        if (p === 92 && n.charCodeAt(o + 1) === 34 && n.charCodeAt(o + 2) === 34 && n.charCodeAt(o + 3) === 34) {
            a += n.slice(s, o), s = o + 1, o += 4;
            continue;
        }
        if (p === 10 || p === 13) {
            a += n.slice(s, o), u.push(a), p === 13 && n.charCodeAt(o + 1) === 10 ? o += 2 : ++o, a = "", s = o, i = o;
            continue;
        }
        if (St(p)) ++o;
        else if (An(n, o)) o += 2;
        else throw W12(e.source, o, `Invalid character within String: ${ft2(e, o)}.`);
    }
    throw W12(e.source, o, "Unterminated string.");
}
function Ms(e, t) {
    let n = e.source.body, r = n.length, i = t + 1;
    for(; i < r;){
        let o = n.charCodeAt(i);
        if (On(o)) ++i;
        else break;
    }
    return Z11(e, T13.NAME, t, i, n.slice(t, i));
}
function h18(e) {
    return xn(e, []);
}
function xn(e, t) {
    switch(typeof e){
        case "string":
            return JSON.stringify(e);
        case "function":
            return e.name ? `[function ${e.name}]` : "[function]";
        case "object":
            return js(e, t);
        default:
            return String(e);
    }
}
function js(e, t) {
    if (e === null) return "null";
    if (t.includes(e)) return "[Circular]";
    let n = [
        ...t,
        e
    ];
    if (Ps(e)) {
        let r = e.toJSON();
        if (r !== e) return typeof r == "string" ? r : xn(r, n);
    } else if (Array.isArray(e)) return Qs(e, n);
    return Gs(e, n);
}
function Ps(e) {
    return typeof e.toJSON == "function";
}
function Gs(e, t) {
    let n = Object.entries(e);
    return n.length === 0 ? "{}" : t.length > 2 ? "[" + Bs(e) + "]" : "{ " + n.map(([i, o])=>i + ": " + xn(o, t)).join(", ") + " }";
}
function Qs(e, t) {
    if (e.length === 0) return "[]";
    if (t.length > 2) return "[Array]";
    let n = Math.min(10, e.length), r = e.length - n, i = [];
    for(let o = 0; o < n; ++o)i.push(xn(e[o], t));
    return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function Bs(e) {
    let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
    if (t === "Object" && typeof e.constructor == "function") {
        let n = e.constructor.name;
        if (typeof n == "string" && n !== "") return n;
    }
    return t;
}
var he1 = globalThis.process && globalThis.process.env.NODE_ENV === "production" ? function(t, n) {
    return t instanceof n;
} : function(t, n) {
    if (t instanceof n) return !0;
    if (typeof t == "object" && t !== null) {
        var r;
        let i = n.prototype[Symbol.toStringTag], o = Symbol.toStringTag in t ? t[Symbol.toStringTag] : (r = t.constructor) === null || r === void 0 ? void 0 : r.name;
        if (i === o) {
            let s = h18(t);
            throw new Error(`Cannot use ${i} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
    }
    return !1;
};
var Be = class {
    constructor(t, n = "GraphQL request", r = {
        line: 1,
        column: 1
    }){
        typeof t == "string" || S15(!1, `Body must be a string. Received: ${h18(t)}.`), this.body = t, this.name = n, this.locationOffset = r, this.locationOffset.line > 0 || S15(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || S15(!1, "column in locationOffset is 1-indexed and must be positive.");
    }
    get [Symbol.toStringTag]() {
        return "Source";
    }
};
function Rn(e) {
    return he1(e, Be);
}
function Ze(e, t) {
    return new At2(e, t).parseDocument();
}
var At2 = class {
    constructor(t, n = {}){
        let r = Rn(t) ? t : new Be(t);
        this._lexer = new We(r), this._options = n, this._tokenCounter = 0;
    }
    parseName() {
        let t = this.expectToken(T13.NAME);
        return this.node(t, {
            kind: c18.NAME,
            value: t.value
        });
    }
    parseDocument() {
        return this.node(this._lexer.token, {
            kind: c18.DOCUMENT,
            definitions: this.many(T13.SOF, this.parseDefinition, T13.EOF)
        });
    }
    parseDefinition() {
        if (this.peek(T13.BRACE_L)) return this.parseOperationDefinition();
        let t = this.peekDescription(), n = t ? this._lexer.lookahead() : this._lexer.token;
        if (n.kind === T13.NAME) {
            switch(n.value){
                case "schema":
                    return this.parseSchemaDefinition();
                case "scalar":
                    return this.parseScalarTypeDefinition();
                case "type":
                    return this.parseObjectTypeDefinition();
                case "interface":
                    return this.parseInterfaceTypeDefinition();
                case "union":
                    return this.parseUnionTypeDefinition();
                case "enum":
                    return this.parseEnumTypeDefinition();
                case "input":
                    return this.parseInputObjectTypeDefinition();
                case "directive":
                    return this.parseDirectiveDefinition();
            }
            if (t) throw W12(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
            switch(n.value){
                case "query":
                case "mutation":
                case "subscription":
                    return this.parseOperationDefinition();
                case "fragment":
                    return this.parseFragmentDefinition();
                case "extend":
                    return this.parseTypeSystemExtension();
            }
        }
        throw this.unexpected(n);
    }
    parseOperationDefinition() {
        let t = this._lexer.token;
        if (this.peek(T13.BRACE_L)) return this.node(t, {
            kind: c18.OPERATION_DEFINITION,
            operation: Q9.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
        });
        let n = this.parseOperationType(), r;
        return this.peek(T13.NAME) && (r = this.parseName()), this.node(t, {
            kind: c18.OPERATION_DEFINITION,
            operation: n,
            name: r,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        });
    }
    parseOperationType() {
        let t = this.expectToken(T13.NAME);
        switch(t.value){
            case "query":
                return Q9.QUERY;
            case "mutation":
                return Q9.MUTATION;
            case "subscription":
                return Q9.SUBSCRIPTION;
        }
        throw this.unexpected(t);
    }
    parseVariableDefinitions() {
        return this.optionalMany(T13.PAREN_L, this.parseVariableDefinition, T13.PAREN_R);
    }
    parseVariableDefinition() {
        return this.node(this._lexer.token, {
            kind: c18.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(T13.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(T13.EQUALS) ? this.parseConstValueLiteral() : void 0,
            directives: this.parseConstDirectives()
        });
    }
    parseVariable() {
        let t = this._lexer.token;
        return this.expectToken(T13.DOLLAR), this.node(t, {
            kind: c18.VARIABLE,
            name: this.parseName()
        });
    }
    parseSelectionSet() {
        return this.node(this._lexer.token, {
            kind: c18.SELECTION_SET,
            selections: this.many(T13.BRACE_L, this.parseSelection, T13.BRACE_R)
        });
    }
    parseSelection() {
        return this.peek(T13.SPREAD) ? this.parseFragment() : this.parseField();
    }
    parseField() {
        let t = this._lexer.token, n = this.parseName(), r, i;
        return this.expectOptionalToken(T13.COLON) ? (r = n, i = this.parseName()) : i = n, this.node(t, {
            kind: c18.FIELD,
            alias: r,
            name: i,
            arguments: this.parseArguments(!1),
            directives: this.parseDirectives(!1),
            selectionSet: this.peek(T13.BRACE_L) ? this.parseSelectionSet() : void 0
        });
    }
    parseArguments(t) {
        let n = t ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(T13.PAREN_L, n, T13.PAREN_R);
    }
    parseArgument(t = !1) {
        let n = this._lexer.token, r = this.parseName();
        return this.expectToken(T13.COLON), this.node(n, {
            kind: c18.ARGUMENT,
            name: r,
            value: this.parseValueLiteral(t)
        });
    }
    parseConstArgument() {
        return this.parseArgument(!0);
    }
    parseFragment() {
        let t = this._lexer.token;
        this.expectToken(T13.SPREAD);
        let n = this.expectOptionalKeyword("on");
        return !n && this.peek(T13.NAME) ? this.node(t, {
            kind: c18.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1)
        }) : this.node(t, {
            kind: c18.INLINE_FRAGMENT,
            typeCondition: n ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        });
    }
    parseFragmentDefinition() {
        let t = this._lexer.token;
        return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(t, {
            kind: c18.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        }) : this.node(t, {
            kind: c18.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        });
    }
    parseFragmentName() {
        if (this._lexer.token.value === "on") throw this.unexpected();
        return this.parseName();
    }
    parseValueLiteral(t) {
        let n = this._lexer.token;
        switch(n.kind){
            case T13.BRACKET_L:
                return this.parseList(t);
            case T13.BRACE_L:
                return this.parseObject(t);
            case T13.INT:
                return this.advanceLexer(), this.node(n, {
                    kind: c18.INT,
                    value: n.value
                });
            case T13.FLOAT:
                return this.advanceLexer(), this.node(n, {
                    kind: c18.FLOAT,
                    value: n.value
                });
            case T13.STRING:
            case T13.BLOCK_STRING:
                return this.parseStringLiteral();
            case T13.NAME:
                switch(this.advanceLexer(), n.value){
                    case "true":
                        return this.node(n, {
                            kind: c18.BOOLEAN,
                            value: !0
                        });
                    case "false":
                        return this.node(n, {
                            kind: c18.BOOLEAN,
                            value: !1
                        });
                    case "null":
                        return this.node(n, {
                            kind: c18.NULL
                        });
                    default:
                        return this.node(n, {
                            kind: c18.ENUM,
                            value: n.value
                        });
                }
            case T13.DOLLAR:
                if (t) if (this.expectToken(T13.DOLLAR), this._lexer.token.kind === T13.NAME) {
                    let r = this._lexer.token.value;
                    throw W12(this._lexer.source, n.start, `Unexpected variable "$${r}" in constant value.`);
                } else throw this.unexpected(n);
                return this.parseVariable();
            default:
                throw this.unexpected();
        }
    }
    parseConstValueLiteral() {
        return this.parseValueLiteral(!0);
    }
    parseStringLiteral() {
        let t = this._lexer.token;
        return this.advanceLexer(), this.node(t, {
            kind: c18.STRING,
            value: t.value,
            block: t.kind === T13.BLOCK_STRING
        });
    }
    parseList(t) {
        let n = ()=>this.parseValueLiteral(t);
        return this.node(this._lexer.token, {
            kind: c18.LIST,
            values: this.any(T13.BRACKET_L, n, T13.BRACKET_R)
        });
    }
    parseObject(t) {
        let n = ()=>this.parseObjectField(t);
        return this.node(this._lexer.token, {
            kind: c18.OBJECT,
            fields: this.any(T13.BRACE_L, n, T13.BRACE_R)
        });
    }
    parseObjectField(t) {
        let n = this._lexer.token, r = this.parseName();
        return this.expectToken(T13.COLON), this.node(n, {
            kind: c18.OBJECT_FIELD,
            name: r,
            value: this.parseValueLiteral(t)
        });
    }
    parseDirectives(t) {
        let n = [];
        for(; this.peek(T13.AT);)n.push(this.parseDirective(t));
        return n;
    }
    parseConstDirectives() {
        return this.parseDirectives(!0);
    }
    parseDirective(t) {
        let n = this._lexer.token;
        return this.expectToken(T13.AT), this.node(n, {
            kind: c18.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(t)
        });
    }
    parseTypeReference() {
        let t = this._lexer.token, n;
        if (this.expectOptionalToken(T13.BRACKET_L)) {
            let r = this.parseTypeReference();
            this.expectToken(T13.BRACKET_R), n = this.node(t, {
                kind: c18.LIST_TYPE,
                type: r
            });
        } else n = this.parseNamedType();
        return this.expectOptionalToken(T13.BANG) ? this.node(t, {
            kind: c18.NON_NULL_TYPE,
            type: n
        }) : n;
    }
    parseNamedType() {
        return this.node(this._lexer.token, {
            kind: c18.NAMED_TYPE,
            name: this.parseName()
        });
    }
    peekDescription() {
        return this.peek(T13.STRING) || this.peek(T13.BLOCK_STRING);
    }
    parseDescription() {
        if (this.peekDescription()) return this.parseStringLiteral();
    }
    parseSchemaDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("schema");
        let r = this.parseConstDirectives(), i = this.many(T13.BRACE_L, this.parseOperationTypeDefinition, T13.BRACE_R);
        return this.node(t, {
            kind: c18.SCHEMA_DEFINITION,
            description: n,
            directives: r,
            operationTypes: i
        });
    }
    parseOperationTypeDefinition() {
        let t = this._lexer.token, n = this.parseOperationType();
        this.expectToken(T13.COLON);
        let r = this.parseNamedType();
        return this.node(t, {
            kind: c18.OPERATION_TYPE_DEFINITION,
            operation: n,
            type: r
        });
    }
    parseScalarTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("scalar");
        let r = this.parseName(), i = this.parseConstDirectives();
        return this.node(t, {
            kind: c18.SCALAR_TYPE_DEFINITION,
            description: n,
            name: r,
            directives: i
        });
    }
    parseObjectTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("type");
        let r = this.parseName(), i = this.parseImplementsInterfaces(), o = this.parseConstDirectives(), s = this.parseFieldsDefinition();
        return this.node(t, {
            kind: c18.OBJECT_TYPE_DEFINITION,
            description: n,
            name: r,
            interfaces: i,
            directives: o,
            fields: s
        });
    }
    parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(T13.AMP, this.parseNamedType) : [];
    }
    parseFieldsDefinition() {
        return this.optionalMany(T13.BRACE_L, this.parseFieldDefinition, T13.BRACE_R);
    }
    parseFieldDefinition() {
        let t = this._lexer.token, n = this.parseDescription(), r = this.parseName(), i = this.parseArgumentDefs();
        this.expectToken(T13.COLON);
        let o = this.parseTypeReference(), s = this.parseConstDirectives();
        return this.node(t, {
            kind: c18.FIELD_DEFINITION,
            description: n,
            name: r,
            arguments: i,
            type: o,
            directives: s
        });
    }
    parseArgumentDefs() {
        return this.optionalMany(T13.PAREN_L, this.parseInputValueDef, T13.PAREN_R);
    }
    parseInputValueDef() {
        let t = this._lexer.token, n = this.parseDescription(), r = this.parseName();
        this.expectToken(T13.COLON);
        let i = this.parseTypeReference(), o;
        this.expectOptionalToken(T13.EQUALS) && (o = this.parseConstValueLiteral());
        let s = this.parseConstDirectives();
        return this.node(t, {
            kind: c18.INPUT_VALUE_DEFINITION,
            description: n,
            name: r,
            type: i,
            defaultValue: o,
            directives: s
        });
    }
    parseInterfaceTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("interface");
        let r = this.parseName(), i = this.parseImplementsInterfaces(), o = this.parseConstDirectives(), s = this.parseFieldsDefinition();
        return this.node(t, {
            kind: c18.INTERFACE_TYPE_DEFINITION,
            description: n,
            name: r,
            interfaces: i,
            directives: o,
            fields: s
        });
    }
    parseUnionTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("union");
        let r = this.parseName(), i = this.parseConstDirectives(), o = this.parseUnionMemberTypes();
        return this.node(t, {
            kind: c18.UNION_TYPE_DEFINITION,
            description: n,
            name: r,
            directives: i,
            types: o
        });
    }
    parseUnionMemberTypes() {
        return this.expectOptionalToken(T13.EQUALS) ? this.delimitedMany(T13.PIPE, this.parseNamedType) : [];
    }
    parseEnumTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("enum");
        let r = this.parseName(), i = this.parseConstDirectives(), o = this.parseEnumValuesDefinition();
        return this.node(t, {
            kind: c18.ENUM_TYPE_DEFINITION,
            description: n,
            name: r,
            directives: i,
            values: o
        });
    }
    parseEnumValuesDefinition() {
        return this.optionalMany(T13.BRACE_L, this.parseEnumValueDefinition, T13.BRACE_R);
    }
    parseEnumValueDefinition() {
        let t = this._lexer.token, n = this.parseDescription(), r = this.parseEnumValueName(), i = this.parseConstDirectives();
        return this.node(t, {
            kind: c18.ENUM_VALUE_DEFINITION,
            description: n,
            name: r,
            directives: i
        });
    }
    parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw W12(this._lexer.source, this._lexer.token.start, `${Ln(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        return this.parseName();
    }
    parseInputObjectTypeDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("input");
        let r = this.parseName(), i = this.parseConstDirectives(), o = this.parseInputFieldsDefinition();
        return this.node(t, {
            kind: c18.INPUT_OBJECT_TYPE_DEFINITION,
            description: n,
            name: r,
            directives: i,
            fields: o
        });
    }
    parseInputFieldsDefinition() {
        return this.optionalMany(T13.BRACE_L, this.parseInputValueDef, T13.BRACE_R);
    }
    parseTypeSystemExtension() {
        let t = this._lexer.lookahead();
        if (t.kind === T13.NAME) switch(t.value){
            case "schema":
                return this.parseSchemaExtension();
            case "scalar":
                return this.parseScalarTypeExtension();
            case "type":
                return this.parseObjectTypeExtension();
            case "interface":
                return this.parseInterfaceTypeExtension();
            case "union":
                return this.parseUnionTypeExtension();
            case "enum":
                return this.parseEnumTypeExtension();
            case "input":
                return this.parseInputObjectTypeExtension();
        }
        throw this.unexpected(t);
    }
    parseSchemaExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("schema");
        let n = this.parseConstDirectives(), r = this.optionalMany(T13.BRACE_L, this.parseOperationTypeDefinition, T13.BRACE_R);
        if (n.length === 0 && r.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c18.SCHEMA_EXTENSION,
            directives: n,
            operationTypes: r
        });
    }
    parseScalarTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("scalar");
        let n = this.parseName(), r = this.parseConstDirectives();
        if (r.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c18.SCALAR_TYPE_EXTENSION,
            name: n,
            directives: r
        });
    }
    parseObjectTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("type");
        let n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), o = this.parseFieldsDefinition();
        if (r.length === 0 && i.length === 0 && o.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c18.OBJECT_TYPE_EXTENSION,
            name: n,
            interfaces: r,
            directives: i,
            fields: o
        });
    }
    parseInterfaceTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("interface");
        let n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), o = this.parseFieldsDefinition();
        if (r.length === 0 && i.length === 0 && o.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c18.INTERFACE_TYPE_EXTENSION,
            name: n,
            interfaces: r,
            directives: i,
            fields: o
        });
    }
    parseUnionTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("union");
        let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c18.UNION_TYPE_EXTENSION,
            name: n,
            directives: r,
            types: i
        });
    }
    parseEnumTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("enum");
        let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c18.ENUM_TYPE_EXTENSION,
            name: n,
            directives: r,
            values: i
        });
    }
    parseInputObjectTypeExtension() {
        let t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("input");
        let n = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: c18.INPUT_OBJECT_TYPE_EXTENSION,
            name: n,
            directives: r,
            fields: i
        });
    }
    parseDirectiveDefinition() {
        let t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("directive"), this.expectToken(T13.AT);
        let r = this.parseName(), i = this.parseArgumentDefs(), o = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        let s = this.parseDirectiveLocations();
        return this.node(t, {
            kind: c18.DIRECTIVE_DEFINITION,
            description: n,
            name: r,
            arguments: i,
            repeatable: o,
            locations: s
        });
    }
    parseDirectiveLocations() {
        return this.delimitedMany(T13.PIPE, this.parseDirectiveLocation);
    }
    parseDirectiveLocation() {
        let t = this._lexer.token, n = this.parseName();
        if (Object.prototype.hasOwnProperty.call(D21, n.value)) return n;
        throw this.unexpected(t);
    }
    node(t, n) {
        return this._options.noLocation !== !0 && (n.loc = new Ot1(t, this._lexer.lastToken, this._lexer.source)), n;
    }
    peek(t) {
        return this._lexer.token.kind === t;
    }
    expectToken(t) {
        let n = this._lexer.token;
        if (n.kind === t) return this.advanceLexer(), n;
        throw W12(this._lexer.source, n.start, `Expected ${Ji(t)}, found ${Ln(n)}.`);
    }
    expectOptionalToken(t) {
        return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
    }
    expectKeyword(t) {
        let n = this._lexer.token;
        if (n.kind === T13.NAME && n.value === t) this.advanceLexer();
        else throw W12(this._lexer.source, n.start, `Expected "${t}", found ${Ln(n)}.`);
    }
    expectOptionalKeyword(t) {
        let n = this._lexer.token;
        return n.kind === T13.NAME && n.value === t ? (this.advanceLexer(), !0) : !1;
    }
    unexpected(t) {
        let n = t ?? this._lexer.token;
        return W12(this._lexer.source, n.start, `Unexpected ${Ln(n)}.`);
    }
    any(t, n, r) {
        this.expectToken(t);
        let i = [];
        for(; !this.expectOptionalToken(r);)i.push(n.call(this));
        return i;
    }
    optionalMany(t, n, r) {
        if (this.expectOptionalToken(t)) {
            let i = [];
            do i.push(n.call(this));
            while (!this.expectOptionalToken(r))
            return i;
        }
        return [];
    }
    many(t, n, r) {
        this.expectToken(t);
        let i = [];
        do i.push(n.call(this));
        while (!this.expectOptionalToken(r))
        return i;
    }
    delimitedMany(t, n) {
        this.expectOptionalToken(t);
        let r = [];
        do r.push(n.call(this));
        while (this.expectOptionalToken(t))
        return r;
    }
    advanceLexer() {
        let { maxTokens: t } = this._options, n = this._lexer.advance();
        if (t !== void 0 && n.kind !== T13.EOF && (++this._tokenCounter, this._tokenCounter > t)) throw W12(this._lexer.source, n.start, `Document contains more that ${t} tokens. Parsing aborted.`);
    }
};
function Ln(e) {
    let t = e.value;
    return Ji(e.kind) + (t != null ? ` "${t}"` : "");
}
function Ji(e) {
    return Sn(e) ? `"${e}"` : e;
}
function ce4(e, t) {
    let [n, r] = t ? [
        e,
        t
    ] : [
        void 0,
        e
    ], i = " Did you mean ";
    n && (i += n + " ");
    let o = r.map((u)=>`"${u}"`);
    switch(o.length){
        case 0:
            return "";
        case 1:
            return i + o[0] + "?";
        case 2:
            return i + o[0] + " or " + o[1] + "?";
    }
    let s = o.slice(0, 5), a = s.pop();
    return i + s.join(", ") + ", or " + a + "?";
}
function Kr(e) {
    return e;
}
function ue4(e, t) {
    let n = Object.create(null);
    for (let r of e)n[t(r)] = r;
    return n;
}
function Se(e, t, n) {
    let r = Object.create(null);
    for (let i of e)r[t(i)] = n(i);
    return r;
}
function Ue(e, t) {
    let n = Object.create(null);
    for (let r of Object.keys(e))n[r] = t(e[r], r);
    return n;
}
function qe(e, t) {
    let n = 0, r = 0;
    for(; n < e.length && r < t.length;){
        let i = e.charCodeAt(n), o = t.charCodeAt(r);
        if (Fn(i) && Fn(o)) {
            let s = 0;
            do ++n, s = s * 10 + i - Xr, i = e.charCodeAt(n);
            while (Fn(i) && s > 0)
            let a = 0;
            do ++r, a = a * 10 + o - Xr, o = t.charCodeAt(r);
            while (Fn(o) && a > 0)
            if (s < a) return -1;
            if (s > a) return 1;
        } else {
            if (i < o) return -1;
            if (i > o) return 1;
            ++n, ++r;
        }
    }
    return e.length - t.length;
}
var Xr = 48, qs = 57;
function Fn(e) {
    return !isNaN(e) && Xr <= e && e <= qs;
}
function Te1(e, t) {
    let n = Object.create(null), r = new zr(e), i = Math.floor(e.length * .4) + 1;
    for (let o of t){
        let s = r.measure(o, i);
        s !== void 0 && (n[o] = s);
    }
    return Object.keys(n).sort((o, s)=>{
        let a = n[o] - n[s];
        return a !== 0 ? a : qe(o, s);
    });
}
var zr = class {
    constructor(t){
        this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = Ki(this._inputLowerCase), this._rows = [
            new Array(t.length + 1).fill(0),
            new Array(t.length + 1).fill(0),
            new Array(t.length + 1).fill(0)
        ];
    }
    measure(t, n) {
        if (this._input === t) return 0;
        let r = t.toLowerCase();
        if (this._inputLowerCase === r) return 1;
        let i = Ki(r), o = this._inputArray;
        if (i.length < o.length) {
            let l = i;
            i = o, o = l;
        }
        let s = i.length, a = o.length;
        if (s - a > n) return;
        let u = this._rows;
        for(let l = 0; l <= a; l++)u[0][l] = l;
        for(let l = 1; l <= s; l++){
            let d = u[(l - 1) % 3], m = u[l % 3], E = m[0] = l;
            for(let N = 1; N <= a; N++){
                let C = i[l - 1] === o[N - 1] ? 0 : 1, M = Math.min(d[N] + 1, m[N - 1] + 1, d[N - 1] + C);
                if (l > 1 && N > 1 && i[l - 1] === o[N - 2] && i[l - 2] === o[N - 1]) {
                    let z = u[(l - 2) % 3][N - 2];
                    M = Math.min(M, z + 1);
                }
                M < E && (E = M), m[N] = M;
            }
            if (E > n) return;
        }
        let p = u[s % 3][a];
        return p <= n ? p : void 0;
    }
};
function Ki(e) {
    let t = e.length, n = new Array(t);
    for(let r = 0; r < t; ++r)n[r] = e.charCodeAt(r);
    return n;
}
function ye(e) {
    if (e == null) return Object.create(null);
    if (Object.getPrototypeOf(e) === null) return e;
    let t = Object.create(null);
    for (let [n, r] of Object.entries(e))t[n] = r;
    return t;
}
function Xi(e) {
    return `"${e.replace(Ys, Js)}"`;
}
var Ys = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Js(e) {
    return Ks[e.charCodeAt(0)];
}
var Ks = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F"
];
var dt3 = Object.freeze({});
function Me(e, t, n = Yr) {
    let r = new Map;
    for (let z of Object.values(c18))r.set(z, et2(t, z));
    let i, o = Array.isArray(e), s = [
        e
    ], a = -1, u = [], p = e, l, d, m = [], E = [];
    do {
        a++;
        let z = a === s.length, $e = z && u.length !== 0;
        if (z) {
            if (l = E.length === 0 ? void 0 : m[m.length - 1], p = d, d = E.pop(), $e) if (o) {
                p = p.slice();
                let Ie = 0;
                for (let [ut, He] of u){
                    let It = ut - Ie;
                    He === null ? (p.splice(It, 1), Ie++) : p[It] = He;
                }
            } else {
                p = Object.defineProperties({}, Object.getOwnPropertyDescriptors(p));
                for (let [Ie, ut] of u)p[Ie] = ut;
            }
            a = i.index, s = i.keys, u = i.edits, o = i.inArray, i = i.prev;
        } else if (d) {
            if (l = o ? a : s[a], p = d[l], p == null) continue;
            m.push(l);
        }
        let me;
        if (!Array.isArray(p)) {
            var N, C;
            Yt1(p) || S15(!1, `Invalid AST Node: ${h18(p)}.`);
            let Ie = z ? (N = r.get(p.kind)) === null || N === void 0 ? void 0 : N.leave : (C = r.get(p.kind)) === null || C === void 0 ? void 0 : C.enter;
            if (me = Ie?.call(t, p, l, d, m, E), me === dt3) break;
            if (me === !1) {
                if (!z) {
                    m.pop();
                    continue;
                }
            } else if (me !== void 0 && (u.push([
                l,
                me
            ]), !z)) if (Yt1(me)) p = me;
            else {
                m.pop();
                continue;
            }
        }
        if (me === void 0 && $e && u.push([
            l,
            p
        ]), z) m.pop();
        else {
            var M;
            i = {
                inArray: o,
                index: a,
                keys: s,
                edits: u,
                prev: i
            }, o = Array.isArray(p), s = o ? p : (M = n[p.kind]) !== null && M !== void 0 ? M : [], a = -1, u = [], d && E.push(d), d = p;
        }
    }while (i !== void 0)
    return u.length !== 0 ? u[u.length - 1][1] : e;
}
function Xt1(e) {
    let t = new Array(e.length).fill(null), n = Object.create(null);
    for (let r of Object.values(c18)){
        let i = !1, o = new Array(e.length).fill(void 0), s = new Array(e.length).fill(void 0);
        for(let u = 0; u < e.length; ++u){
            let { enter: p, leave: l } = et2(e[u], r);
            i || (i = p != null || l != null), o[u] = p, s[u] = l;
        }
        if (!i) continue;
        let a = {
            enter (...u) {
                let p = u[0];
                for(let d = 0; d < e.length; d++)if (t[d] === null) {
                    var l;
                    let m = (l = o[d]) === null || l === void 0 ? void 0 : l.apply(e[d], u);
                    if (m === !1) t[d] = p;
                    else if (m === dt3) t[d] = dt3;
                    else if (m !== void 0) return m;
                }
            },
            leave (...u) {
                let p = u[0];
                for(let d = 0; d < e.length; d++)if (t[d] === null) {
                    var l;
                    let m = (l = s[d]) === null || l === void 0 ? void 0 : l.apply(e[d], u);
                    if (m === dt3) t[d] = dt3;
                    else if (m !== void 0 && m !== !1) return m;
                } else t[d] === p && (t[d] = null);
            }
        };
        n[r] = a;
    }
    return n;
}
function et2(e, t) {
    let n = e[t];
    return typeof n == "object" ? n : typeof n == "function" ? {
        enter: n,
        leave: void 0
    } : {
        enter: e.enter,
        leave: e.leave
    };
}
function k11(e) {
    return Me(e, zs);
}
var Xs = 80, zs = {
    Name: {
        leave: (e)=>e.value
    },
    Variable: {
        leave: (e)=>"$" + e.name
    },
    Document: {
        leave: (e)=>I13(e.definitions, `

`)
    },
    OperationDefinition: {
        leave (e) {
            let t = $14("(", I13(e.variableDefinitions, ", "), ")"), n = I13([
                e.operation,
                I13([
                    e.name,
                    t
                ]),
                I13(e.directives, " ")
            ], " ");
            return (n === "query" ? "" : n + " ") + e.selectionSet;
        }
    },
    VariableDefinition: {
        leave: ({ variable: e, type: t, defaultValue: n, directives: r })=>e + ": " + t + $14(" = ", n) + $14(" ", I13(r, " "))
    },
    SelectionSet: {
        leave: ({ selections: e })=>je(e)
    },
    Field: {
        leave ({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
            let o = $14("", e, ": ") + t, s = o + $14("(", I13(n, ", "), ")");
            return s.length > Xs && (s = o + $14(`(
`, kn(I13(n, `
`)), `
)`)), I13([
                s,
                I13(r, " "),
                i
            ], " ");
        }
    },
    Argument: {
        leave: ({ name: e, value: t })=>e + ": " + t
    },
    FragmentSpread: {
        leave: ({ name: e, directives: t })=>"..." + e + $14(" ", I13(t, " "))
    },
    InlineFragment: {
        leave: ({ typeCondition: e, directives: t, selectionSet: n })=>I13([
                "...",
                $14("on ", e),
                I13(t, " "),
                n
            ], " ")
    },
    FragmentDefinition: {
        leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i })=>`fragment ${e}${$14("(", I13(n, ", "), ")")} on ${t} ${$14("", I13(r, " "), " ")}` + i
    },
    IntValue: {
        leave: ({ value: e })=>e
    },
    FloatValue: {
        leave: ({ value: e })=>e
    },
    StringValue: {
        leave: ({ value: e, block: t })=>t ? Dn(e) : Xi(e)
    },
    BooleanValue: {
        leave: ({ value: e })=>e ? "true" : "false"
    },
    NullValue: {
        leave: ()=>"null"
    },
    EnumValue: {
        leave: ({ value: e })=>e
    },
    ListValue: {
        leave: ({ values: e })=>"[" + I13(e, ", ") + "]"
    },
    ObjectValue: {
        leave: ({ fields: e })=>"{" + I13(e, ", ") + "}"
    },
    ObjectField: {
        leave: ({ name: e, value: t })=>e + ": " + t
    },
    Directive: {
        leave: ({ name: e, arguments: t })=>"@" + e + $14("(", I13(t, ", "), ")")
    },
    NamedType: {
        leave: ({ name: e })=>e
    },
    ListType: {
        leave: ({ type: e })=>"[" + e + "]"
    },
    NonNullType: {
        leave: ({ type: e })=>e + "!"
    },
    SchemaDefinition: {
        leave: ({ description: e, directives: t, operationTypes: n })=>$14("", e, `
`) + I13([
                "schema",
                I13(t, " "),
                je(n)
            ], " ")
    },
    OperationTypeDefinition: {
        leave: ({ operation: e, type: t })=>e + ": " + t
    },
    ScalarTypeDefinition: {
        leave: ({ description: e, name: t, directives: n })=>$14("", e, `
`) + I13([
                "scalar",
                t,
                I13(n, " ")
            ], " ")
    },
    ObjectTypeDefinition: {
        leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i })=>$14("", e, `
`) + I13([
                "type",
                t,
                $14("implements ", I13(n, " & ")),
                I13(r, " "),
                je(i)
            ], " ")
    },
    FieldDefinition: {
        leave: ({ description: e, name: t, arguments: n, type: r, directives: i })=>$14("", e, `
`) + t + (Hi(n) ? $14(`(
`, kn(I13(n, `
`)), `
)`) : $14("(", I13(n, ", "), ")")) + ": " + r + $14(" ", I13(i, " "))
    },
    InputValueDefinition: {
        leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i })=>$14("", e, `
`) + I13([
                t + ": " + n,
                $14("= ", r),
                I13(i, " ")
            ], " ")
    },
    InterfaceTypeDefinition: {
        leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i })=>$14("", e, `
`) + I13([
                "interface",
                t,
                $14("implements ", I13(n, " & ")),
                I13(r, " "),
                je(i)
            ], " ")
    },
    UnionTypeDefinition: {
        leave: ({ description: e, name: t, directives: n, types: r })=>$14("", e, `
`) + I13([
                "union",
                t,
                I13(n, " "),
                $14("= ", I13(r, " | "))
            ], " ")
    },
    EnumTypeDefinition: {
        leave: ({ description: e, name: t, directives: n, values: r })=>$14("", e, `
`) + I13([
                "enum",
                t,
                I13(n, " "),
                je(r)
            ], " ")
    },
    EnumValueDefinition: {
        leave: ({ description: e, name: t, directives: n })=>$14("", e, `
`) + I13([
                t,
                I13(n, " ")
            ], " ")
    },
    InputObjectTypeDefinition: {
        leave: ({ description: e, name: t, directives: n, fields: r })=>$14("", e, `
`) + I13([
                "input",
                t,
                I13(n, " "),
                je(r)
            ], " ")
    },
    DirectiveDefinition: {
        leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i })=>$14("", e, `
`) + "directive @" + t + (Hi(n) ? $14(`(
`, kn(I13(n, `
`)), `
)`) : $14("(", I13(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + I13(i, " | ")
    },
    SchemaExtension: {
        leave: ({ directives: e, operationTypes: t })=>I13([
                "extend schema",
                I13(e, " "),
                je(t)
            ], " ")
    },
    ScalarTypeExtension: {
        leave: ({ name: e, directives: t })=>I13([
                "extend scalar",
                e,
                I13(t, " ")
            ], " ")
    },
    ObjectTypeExtension: {
        leave: ({ name: e, interfaces: t, directives: n, fields: r })=>I13([
                "extend type",
                e,
                $14("implements ", I13(t, " & ")),
                I13(n, " "),
                je(r)
            ], " ")
    },
    InterfaceTypeExtension: {
        leave: ({ name: e, interfaces: t, directives: n, fields: r })=>I13([
                "extend interface",
                e,
                $14("implements ", I13(t, " & ")),
                I13(n, " "),
                je(r)
            ], " ")
    },
    UnionTypeExtension: {
        leave: ({ name: e, directives: t, types: n })=>I13([
                "extend union",
                e,
                I13(t, " "),
                $14("= ", I13(n, " | "))
            ], " ")
    },
    EnumTypeExtension: {
        leave: ({ name: e, directives: t, values: n })=>I13([
                "extend enum",
                e,
                I13(t, " "),
                je(n)
            ], " ")
    },
    InputObjectTypeExtension: {
        leave: ({ name: e, directives: t, fields: n })=>I13([
                "extend input",
                e,
                I13(t, " "),
                je(n)
            ], " ")
    }
};
function I13(e, t = "") {
    var n;
    return (n = e?.filter((r)=>r).join(t)) !== null && n !== void 0 ? n : "";
}
function je(e) {
    return $14(`{
`, kn(I13(e, `
`)), `
}`);
}
function $14(e, t, n = "") {
    return t != null && t !== "" ? e + t + n : "";
}
function kn(e) {
    return $14("  ", e.replace(/\n/g, `
  `));
}
function Hi(e) {
    var t;
    return (t = e?.some((n)=>n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function xt2(e, t) {
    switch(e.kind){
        case c18.NULL:
            return null;
        case c18.INT:
            return parseInt(e.value, 10);
        case c18.FLOAT:
            return parseFloat(e.value);
        case c18.STRING:
        case c18.ENUM:
        case c18.BOOLEAN:
            return e.value;
        case c18.LIST:
            return e.values.map((n)=>xt2(n, t));
        case c18.OBJECT:
            return Se(e.fields, (n)=>n.name.value, (n)=>xt2(n.value, t));
        case c18.VARIABLE:
            return t?.[e.name.value];
    }
}
function oe5(e) {
    if (e != null || S15(!1, "Must provide name."), typeof e == "string" || S15(!1, "Expected name to be a string."), e.length === 0) throw new f13("Expected name to be a non-empty string.");
    for(let t = 1; t < e.length; ++t)if (!On(e.charCodeAt(t))) throw new f13(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
    if (!Jt(e.charCodeAt(0))) throw new f13(`Names must start with [_a-zA-Z] but "${e}" does not.`);
    return e;
}
function Vn(e) {
    if (e === "true" || e === "false" || e === "null") throw new f13(`Enum values cannot be named: ${e}`);
    return oe5(e);
}
function mt2(e) {
    return ee5(e) || x29(e) || L12(e) || P16(e) || U14(e) || w17(e) || F18(e) || O19(e);
}
function ee5(e) {
    return he1(e, pe3);
}
function x29(e) {
    return he1(e, re3);
}
function L12(e) {
    return he1(e, Ae);
}
function P16(e) {
    return he1(e, xe1);
}
function U14(e) {
    return he1(e, Ee1);
}
function w17(e) {
    return he1(e, Re);
}
function F18(e) {
    return he1(e, B15);
}
function O19(e) {
    return he1(e, A16);
}
function te5(e) {
    return ee5(e) || U14(e) || w17(e) || Lt1(e) && te5(e.ofType);
}
function Le(e) {
    return ee5(e) || x29(e) || L12(e) || P16(e) || U14(e) || Lt1(e) && Le(e.ofType);
}
function ie5(e) {
    return ee5(e) || U14(e);
}
function Ne1(e) {
    return x29(e) || L12(e) || P16(e);
}
function le3(e) {
    return L12(e) || P16(e);
}
var B15 = class {
    constructor(t){
        mt2(t) || S15(!1, `Expected ${h18(t)} to be a GraphQL type.`), this.ofType = t;
    }
    get [Symbol.toStringTag]() {
        return "GraphQLList";
    }
    toString() {
        return "[" + String(this.ofType) + "]";
    }
    toJSON() {
        return this.toString();
    }
}, A16 = class {
    constructor(t){
        Mn(t) || S15(!1, `Expected ${h18(t)} to be a GraphQL nullable type.`), this.ofType = t;
    }
    get [Symbol.toStringTag]() {
        return "GraphQLNonNull";
    }
    toString() {
        return String(this.ofType) + "!";
    }
    toJSON() {
        return this.toString();
    }
};
function Lt1(e) {
    return F18(e) || O19(e);
}
function Mn(e) {
    return mt2(e) && !O19(e);
}
function wt1(e) {
    if (e) return O19(e) ? e.ofType : e;
}
function tt3(e) {
    return ee5(e) || x29(e) || L12(e) || P16(e) || U14(e) || w17(e);
}
function J12(e) {
    if (e) {
        let t = e;
        for(; Lt1(t);)t = t.ofType;
        return t;
    }
}
function Pn(e) {
    return typeof e == "function" ? e() : e;
}
function Gn(e) {
    return typeof e == "function" ? e() : e;
}
var pe3 = class {
    constructor(t){
        var n, r, i, o;
        let s = (n = t.parseValue) !== null && n !== void 0 ? n : Kr;
        this.name = oe5(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (r = t.serialize) !== null && r !== void 0 ? r : Kr, this.parseValue = s, this.parseLiteral = (i = t.parseLiteral) !== null && i !== void 0 ? i : (a, u)=>s(xt2(a, u)), this.extensions = ye(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (o = t.extensionASTNodes) !== null && o !== void 0 ? o : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || S15(!1, `${this.name} must provide "specifiedByURL" as a string, but got: ${h18(t.specifiedByURL)}.`), t.serialize == null || typeof t.serialize == "function" || S15(!1, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`), t.parseLiteral && (typeof t.parseValue == "function" && typeof t.parseLiteral == "function" || S15(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`));
    }
    get [Symbol.toStringTag]() {
        return "GraphQLScalarType";
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            specifiedByURL: this.specifiedByURL,
            serialize: this.serialize,
            parseValue: this.parseValue,
            parseLiteral: this.parseLiteral,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
}, re3 = class {
    constructor(t){
        var n;
        this.name = oe5(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = ye(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = ()=>mo(t), this._interfaces = ()=>fo(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || S15(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${h18(t.isTypeOf)}.`);
    }
    get [Symbol.toStringTag]() {
        return "GraphQLObjectType";
    }
    getFields() {
        return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
    }
    getInterfaces() {
        return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: ho(this.getFields()),
            isTypeOf: this.isTypeOf,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
};
function fo(e) {
    var t;
    let n = Pn((t = e.interfaces) !== null && t !== void 0 ? t : []);
    return Array.isArray(n) || S15(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), n;
}
function mo(e) {
    let t = Gn(e.fields);
    return Rt(t) || S15(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), Ue(t, (n, r)=>{
        var i;
        Rt(n) || S15(!1, `${e.name}.${r} field config must be an object.`), n.resolve == null || typeof n.resolve == "function" || S15(!1, `${e.name}.${r} field resolver must be a function if provided, but got: ${h18(n.resolve)}.`);
        let o = (i = n.args) !== null && i !== void 0 ? i : {};
        return Rt(o) || S15(!1, `${e.name}.${r} args must be an object with argument names as keys.`), {
            name: oe5(r),
            description: n.description,
            type: n.type,
            args: Hr(o),
            resolve: n.resolve,
            subscribe: n.subscribe,
            deprecationReason: n.deprecationReason,
            extensions: ye(n.extensions),
            astNode: n.astNode
        };
    });
}
function Hr(e) {
    return Object.entries(e).map(([t, n])=>({
            name: oe5(t),
            description: n.description,
            type: n.type,
            defaultValue: n.defaultValue,
            deprecationReason: n.deprecationReason,
            extensions: ye(n.extensions),
            astNode: n.astNode
        }));
}
function Rt(e) {
    return H11(e) && !Array.isArray(e);
}
function ho(e) {
    return Ue(e, (t)=>({
            description: t.description,
            type: t.type,
            args: Wr(t.args),
            resolve: t.resolve,
            subscribe: t.subscribe,
            deprecationReason: t.deprecationReason,
            extensions: t.extensions,
            astNode: t.astNode
        }));
}
function Wr(e) {
    return Se(e, (t)=>t.name, (t)=>({
            description: t.description,
            type: t.type,
            defaultValue: t.defaultValue,
            deprecationReason: t.deprecationReason,
            extensions: t.extensions,
            astNode: t.astNode
        }));
}
function we(e) {
    return O19(e.type) && e.defaultValue === void 0;
}
var Ae = class {
    constructor(t){
        var n;
        this.name = oe5(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = ye(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = mo.bind(void 0, t), this._interfaces = fo.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || S15(!1, `${this.name} must provide "resolveType" as a function, but got: ${h18(t.resolveType)}.`);
    }
    get [Symbol.toStringTag]() {
        return "GraphQLInterfaceType";
    }
    getFields() {
        return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
    }
    getInterfaces() {
        return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: ho(this.getFields()),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
}, xe1 = class {
    constructor(t){
        var n;
        this.name = oe5(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = ye(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = Hs.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || S15(!1, `${this.name} must provide "resolveType" as a function, but got: ${h18(t.resolveType)}.`);
    }
    get [Symbol.toStringTag]() {
        return "GraphQLUnionType";
    }
    getTypes() {
        return typeof this._types == "function" && (this._types = this._types()), this._types;
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            types: this.getTypes(),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
};
function Hs(e) {
    let t = Pn(e.types);
    return Array.isArray(t) || S15(!1, `Must provide Array of types or a function which returns such an array for Union ${e.name}.`), t;
}
var Ee1 = class {
    constructor(t){
        var n;
        this.name = oe5(t.name), this.description = t.description, this.extensions = ye(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = Ws(this.name, t.values), this._valueLookup = new Map(this._values.map((r)=>[
                r.value,
                r
            ])), this._nameLookup = ue4(this._values, (r)=>r.name);
    }
    get [Symbol.toStringTag]() {
        return "GraphQLEnumType";
    }
    getValues() {
        return this._values;
    }
    getValue(t) {
        return this._nameLookup[t];
    }
    serialize(t) {
        let n = this._valueLookup.get(t);
        if (n === void 0) throw new f13(`Enum "${this.name}" cannot represent value: ${h18(t)}`);
        return n.name;
    }
    parseValue(t) {
        if (typeof t != "string") {
            let r = h18(t);
            throw new f13(`Enum "${this.name}" cannot represent non-string value: ${r}.` + $n(this, r));
        }
        let n = this.getValue(t);
        if (n == null) throw new f13(`Value "${t}" does not exist in "${this.name}" enum.` + $n(this, t));
        return n.value;
    }
    parseLiteral(t, n) {
        if (t.kind !== c18.ENUM) {
            let i = k11(t);
            throw new f13(`Enum "${this.name}" cannot represent non-enum value: ${i}.` + $n(this, i), {
                nodes: t
            });
        }
        let r = this.getValue(t.value);
        if (r == null) {
            let i = k11(t);
            throw new f13(`Value "${i}" does not exist in "${this.name}" enum.` + $n(this, i), {
                nodes: t
            });
        }
        return r.value;
    }
    toConfig() {
        let t = Se(this.getValues(), (n)=>n.name, (n)=>({
                description: n.description,
                value: n.value,
                deprecationReason: n.deprecationReason,
                extensions: n.extensions,
                astNode: n.astNode
            }));
        return {
            name: this.name,
            description: this.description,
            values: t,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
};
function $n(e, t) {
    let n = e.getValues().map((i)=>i.name), r = Te1(t, n);
    return ce4("the enum value", r);
}
function Ws(e, t) {
    return Rt(t) || S15(!1, `${e} values must be an object with value names as keys.`), Object.entries(t).map(([n, r])=>(Rt(r) || S15(!1, `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${h18(r)}.`), {
            name: Vn(n),
            description: r.description,
            value: r.value !== void 0 ? r.value : n,
            deprecationReason: r.deprecationReason,
            extensions: ye(r.extensions),
            astNode: r.astNode
        }));
}
var Re = class {
    constructor(t){
        var n;
        this.name = oe5(t.name), this.description = t.description, this.extensions = ye(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = Zs.bind(void 0, t);
    }
    get [Symbol.toStringTag]() {
        return "GraphQLInputObjectType";
    }
    getFields() {
        return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
    }
    toConfig() {
        let t = Ue(this.getFields(), (n)=>({
                description: n.description,
                type: n.type,
                defaultValue: n.defaultValue,
                deprecationReason: n.deprecationReason,
                extensions: n.extensions,
                astNode: n.astNode
            }));
        return {
            name: this.name,
            description: this.description,
            fields: t,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        };
    }
    toString() {
        return this.name;
    }
    toJSON() {
        return this.toString();
    }
};
function Zs(e) {
    let t = Gn(e.fields);
    return Rt(t) || S15(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), Ue(t, (n, r)=>(!("resolve" in n) || S15(!1, `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`), {
            name: oe5(r),
            description: n.description,
            type: n.type,
            defaultValue: n.defaultValue,
            deprecationReason: n.deprecationReason,
            extensions: ye(n.extensions),
            astNode: n.astNode
        }));
}
function nt2(e) {
    return O19(e.type) && e.defaultValue === void 0;
}
function Ft1(e, t) {
    return e === t ? !0 : O19(e) && O19(t) || F18(e) && F18(t) ? Ft1(e.ofType, t.ofType) : !1;
}
function Qe(e, t, n) {
    return t === n ? !0 : O19(n) ? O19(t) ? Qe(e, t.ofType, n.ofType) : !1 : O19(t) ? Qe(e, t.ofType, n) : F18(n) ? F18(t) ? Qe(e, t.ofType, n.ofType) : !1 : F18(t) ? !1 : le3(n) && (L12(t) || x29(t)) && e.isSubType(n, t);
}
function zt1(e, t, n) {
    return t === n ? !0 : le3(t) ? le3(n) ? e.getPossibleTypes(t).some((r)=>e.isSubType(n, r)) : e.isSubType(t, n) : le3(n) ? e.isSubType(n, t) : !1;
}
var Ht = 2147483647, Wt1 = -2147483648, Zr = new pe3({
    name: "Int",
    description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
    serialize (e) {
        let t = en(e);
        if (typeof t == "boolean") return t ? 1 : 0;
        let n = t;
        if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n)) throw new f13(`Int cannot represent non-integer value: ${h18(t)}`);
        if (n > Ht || n < Wt1) throw new f13("Int cannot represent non 32-bit signed integer value: " + h18(t));
        return n;
    },
    parseValue (e) {
        if (typeof e != "number" || !Number.isInteger(e)) throw new f13(`Int cannot represent non-integer value: ${h18(e)}`);
        if (e > Ht || e < Wt1) throw new f13(`Int cannot represent non 32-bit signed integer value: ${e}`);
        return e;
    },
    parseLiteral (e) {
        if (e.kind !== c18.INT) throw new f13(`Int cannot represent non-integer value: ${k11(e)}`, {
            nodes: e
        });
        let t = parseInt(e.value, 10);
        if (t > Ht || t < Wt1) throw new f13(`Int cannot represent non 32-bit signed integer value: ${e.value}`, {
            nodes: e
        });
        return t;
    }
}), ei = new pe3({
    name: "Float",
    description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
    serialize (e) {
        let t = en(e);
        if (typeof t == "boolean") return t ? 1 : 0;
        let n = t;
        if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n)) throw new f13(`Float cannot represent non numeric value: ${h18(t)}`);
        return n;
    },
    parseValue (e) {
        if (typeof e != "number" || !Number.isFinite(e)) throw new f13(`Float cannot represent non numeric value: ${h18(e)}`);
        return e;
    },
    parseLiteral (e) {
        if (e.kind !== c18.FLOAT && e.kind !== c18.INT) throw new f13(`Float cannot represent non numeric value: ${k11(e)}`, e);
        return parseFloat(e.value);
    }
}), q20 = new pe3({
    name: "String",
    description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
    serialize (e) {
        let t = en(e);
        if (typeof t == "string") return t;
        if (typeof t == "boolean") return t ? "true" : "false";
        if (typeof t == "number" && Number.isFinite(t)) return t.toString();
        throw new f13(`String cannot represent value: ${h18(e)}`);
    },
    parseValue (e) {
        if (typeof e != "string") throw new f13(`String cannot represent a non string value: ${h18(e)}`);
        return e;
    },
    parseLiteral (e) {
        if (e.kind !== c18.STRING) throw new f13(`String cannot represent a non string value: ${k11(e)}`, {
            nodes: e
        });
        return e.value;
    }
}), fe4 = new pe3({
    name: "Boolean",
    description: "The `Boolean` scalar type represents `true` or `false`.",
    serialize (e) {
        let t = en(e);
        if (typeof t == "boolean") return t;
        if (Number.isFinite(t)) return t !== 0;
        throw new f13(`Boolean cannot represent a non boolean value: ${h18(t)}`);
    },
    parseValue (e) {
        if (typeof e != "boolean") throw new f13(`Boolean cannot represent a non boolean value: ${h18(e)}`);
        return e;
    },
    parseLiteral (e) {
        if (e.kind !== c18.BOOLEAN) throw new f13(`Boolean cannot represent a non boolean value: ${k11(e)}`, {
            nodes: e
        });
        return e.value;
    }
}), Zt1 = new pe3({
    name: "ID",
    description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
    serialize (e) {
        let t = en(e);
        if (typeof t == "string") return t;
        if (Number.isInteger(t)) return String(t);
        throw new f13(`ID cannot represent value: ${h18(e)}`);
    },
    parseValue (e) {
        if (typeof e == "string") return e;
        if (typeof e == "number" && Number.isInteger(e)) return e.toString();
        throw new f13(`ID cannot represent value: ${h18(e)}`);
    },
    parseLiteral (e) {
        if (e.kind !== c18.STRING && e.kind !== c18.INT) throw new f13("ID cannot represent a non-string and non-integer value: " + k11(e), {
            nodes: e
        });
        return e.value;
    }
}), Ye = Object.freeze([
    q20,
    Zr,
    ei,
    fe4,
    Zt1
]);
function rt3(e) {
    return Ye.some(({ name: t })=>e.name === t);
}
function en(e) {
    if (H11(e)) {
        if (typeof e.valueOf == "function") {
            let t = e.valueOf();
            if (!H11(t)) return t;
        }
        if (typeof e.toJSON == "function") return e.toJSON();
    }
    return e;
}
function ht3(e) {
    return he1(e, de1);
}
var de1 = class {
    constructor(t){
        var n, r;
        this.name = oe5(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = ye(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || S15(!1, `@${t.name} locations must be an Array.`);
        let i = (r = t.args) !== null && r !== void 0 ? r : {};
        H11(i) && !Array.isArray(i) || S15(!1, `@${t.name} args must be an object with argument names as keys.`), this.args = Hr(i);
    }
    get [Symbol.toStringTag]() {
        return "GraphQLDirective";
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            locations: this.locations,
            args: Wr(this.args),
            isRepeatable: this.isRepeatable,
            extensions: this.extensions,
            astNode: this.astNode
        };
    }
    toString() {
        return "@" + this.name;
    }
    toJSON() {
        return this.toString();
    }
}, tn = new de1({
    name: "include",
    description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
    locations: [
        D21.FIELD,
        D21.FRAGMENT_SPREAD,
        D21.INLINE_FRAGMENT
    ],
    args: {
        if: {
            type: new A16(fe4),
            description: "Included when true."
        }
    }
}), nn = new de1({
    name: "skip",
    description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
    locations: [
        D21.FIELD,
        D21.FRAGMENT_SPREAD,
        D21.INLINE_FRAGMENT
    ],
    args: {
        if: {
            type: new A16(fe4),
            description: "Skipped when true."
        }
    }
}), rn = "No longer supported", Tt1 = new de1({
    name: "deprecated",
    description: "Marks an element of a GraphQL schema as no longer supported.",
    locations: [
        D21.FIELD_DEFINITION,
        D21.ARGUMENT_DEFINITION,
        D21.INPUT_FIELD_DEFINITION,
        D21.ENUM_VALUE
    ],
    args: {
        reason: {
            type: q20,
            description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
            defaultValue: rn
        }
    }
}), on = new de1({
    name: "specifiedBy",
    description: "Exposes a URL that specifies the behavior of this scalar.",
    locations: [
        D21.SCALAR
    ],
    args: {
        url: {
            type: new A16(q20),
            description: "The URL that specifies the behavior of this scalar."
        }
    }
}), ve1 = Object.freeze([
    tn,
    nn,
    Tt1,
    on
]);
function kt1(e) {
    return typeof e == "object" && typeof e?.[Symbol.iterator] == "function";
}
function Fe(e, t) {
    if (O19(t)) {
        let n = Fe(e, t.ofType);
        return n?.kind === c18.NULL ? null : n;
    }
    if (e === null) return {
        kind: c18.NULL
    };
    if (e === void 0) return null;
    if (F18(t)) {
        let n = t.ofType;
        if (kt1(e)) {
            let r = [];
            for (let i of e){
                let o = Fe(i, n);
                o != null && r.push(o);
            }
            return {
                kind: c18.LIST,
                values: r
            };
        }
        return Fe(e, n);
    }
    if (w17(t)) {
        if (!H11(e)) return null;
        let n = [];
        for (let r of Object.values(t.getFields())){
            let i = Fe(e[r.name], r.type);
            i && n.push({
                kind: c18.OBJECT_FIELD,
                name: {
                    kind: c18.NAME,
                    value: r.name
                },
                value: i
            });
        }
        return {
            kind: c18.OBJECT,
            fields: n
        };
    }
    if (ie5(t)) {
        let n = t.serialize(e);
        if (n == null) return null;
        if (typeof n == "boolean") return {
            kind: c18.BOOLEAN,
            value: n
        };
        if (typeof n == "number" && Number.isFinite(n)) {
            let r = String(n);
            return yo.test(r) ? {
                kind: c18.INT,
                value: r
            } : {
                kind: c18.FLOAT,
                value: r
            };
        }
        if (typeof n == "string") return U14(t) ? {
            kind: c18.ENUM,
            value: n
        } : t === Zt1 && yo.test(n) ? {
            kind: c18.INT,
            value: n
        } : {
            kind: c18.STRING,
            value: n
        };
        throw new TypeError(`Cannot convert value to AST: ${h18(n)}.`);
    }
    V12(!1, "Unexpected input type: " + h18(t));
}
var yo = /^-?(?:0|[1-9][0-9]*)$/;
var Vt1 = new re3({
    name: "__Schema",
    description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
    fields: ()=>({
            description: {
                type: q20,
                resolve: (e)=>e.description
            },
            types: {
                description: "A list of all types supported by this server.",
                type: new A16(new B15(new A16(_e3))),
                resolve (e) {
                    return Object.values(e.getTypeMap());
                }
            },
            queryType: {
                description: "The type that query operations will be rooted at.",
                type: new A16(_e3),
                resolve: (e)=>e.getQueryType()
            },
            mutationType: {
                description: "If this server supports mutation, the type that mutation operations will be rooted at.",
                type: _e3,
                resolve: (e)=>e.getMutationType()
            },
            subscriptionType: {
                description: "If this server support subscription, the type that subscription operations will be rooted at.",
                type: _e3,
                resolve: (e)=>e.getSubscriptionType()
            },
            directives: {
                description: "A list of all directives supported by this server.",
                type: new A16(new B15(new A16(Qn))),
                resolve: (e)=>e.getDirectives()
            }
        })
}), Qn = new re3({
    name: "__Directive",
    description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,
    fields: ()=>({
            name: {
                type: new A16(q20),
                resolve: (e)=>e.name
            },
            description: {
                type: q20,
                resolve: (e)=>e.description
            },
            isRepeatable: {
                type: new A16(fe4),
                resolve: (e)=>e.isRepeatable
            },
            locations: {
                type: new A16(new B15(new A16(Bn))),
                resolve: (e)=>e.locations
            },
            args: {
                type: new A16(new B15(new A16($t1))),
                args: {
                    includeDeprecated: {
                        type: fe4,
                        defaultValue: !1
                    }
                },
                resolve (e, { includeDeprecated: t }) {
                    return t ? e.args : e.args.filter((n)=>n.deprecationReason == null);
                }
            }
        })
}), Bn = new Ee1({
    name: "__DirectiveLocation",
    description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
    values: {
        QUERY: {
            value: D21.QUERY,
            description: "Location adjacent to a query operation."
        },
        MUTATION: {
            value: D21.MUTATION,
            description: "Location adjacent to a mutation operation."
        },
        SUBSCRIPTION: {
            value: D21.SUBSCRIPTION,
            description: "Location adjacent to a subscription operation."
        },
        FIELD: {
            value: D21.FIELD,
            description: "Location adjacent to a field."
        },
        FRAGMENT_DEFINITION: {
            value: D21.FRAGMENT_DEFINITION,
            description: "Location adjacent to a fragment definition."
        },
        FRAGMENT_SPREAD: {
            value: D21.FRAGMENT_SPREAD,
            description: "Location adjacent to a fragment spread."
        },
        INLINE_FRAGMENT: {
            value: D21.INLINE_FRAGMENT,
            description: "Location adjacent to an inline fragment."
        },
        VARIABLE_DEFINITION: {
            value: D21.VARIABLE_DEFINITION,
            description: "Location adjacent to a variable definition."
        },
        SCHEMA: {
            value: D21.SCHEMA,
            description: "Location adjacent to a schema definition."
        },
        SCALAR: {
            value: D21.SCALAR,
            description: "Location adjacent to a scalar definition."
        },
        OBJECT: {
            value: D21.OBJECT,
            description: "Location adjacent to an object type definition."
        },
        FIELD_DEFINITION: {
            value: D21.FIELD_DEFINITION,
            description: "Location adjacent to a field definition."
        },
        ARGUMENT_DEFINITION: {
            value: D21.ARGUMENT_DEFINITION,
            description: "Location adjacent to an argument definition."
        },
        INTERFACE: {
            value: D21.INTERFACE,
            description: "Location adjacent to an interface definition."
        },
        UNION: {
            value: D21.UNION,
            description: "Location adjacent to a union definition."
        },
        ENUM: {
            value: D21.ENUM,
            description: "Location adjacent to an enum definition."
        },
        ENUM_VALUE: {
            value: D21.ENUM_VALUE,
            description: "Location adjacent to an enum value definition."
        },
        INPUT_OBJECT: {
            value: D21.INPUT_OBJECT,
            description: "Location adjacent to an input object type definition."
        },
        INPUT_FIELD_DEFINITION: {
            value: D21.INPUT_FIELD_DEFINITION,
            description: "Location adjacent to an input object field definition."
        }
    }
}), _e3 = new re3({
    name: "__Type",
    description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
    fields: ()=>({
            kind: {
                type: new A16(Jn),
                resolve (e) {
                    if (ee5(e)) return j21.SCALAR;
                    if (x29(e)) return j21.OBJECT;
                    if (L12(e)) return j21.INTERFACE;
                    if (P16(e)) return j21.UNION;
                    if (U14(e)) return j21.ENUM;
                    if (w17(e)) return j21.INPUT_OBJECT;
                    if (F18(e)) return j21.LIST;
                    if (O19(e)) return j21.NON_NULL;
                    V12(!1, `Unexpected type: "${h18(e)}".`);
                }
            },
            name: {
                type: q20,
                resolve: (e)=>"name" in e ? e.name : void 0
            },
            description: {
                type: q20,
                resolve: (e)=>"description" in e ? e.description : void 0
            },
            specifiedByURL: {
                type: q20,
                resolve: (e)=>"specifiedByURL" in e ? e.specifiedByURL : void 0
            },
            fields: {
                type: new B15(new A16(qn)),
                args: {
                    includeDeprecated: {
                        type: fe4,
                        defaultValue: !1
                    }
                },
                resolve (e, { includeDeprecated: t }) {
                    if (x29(e) || L12(e)) {
                        let n = Object.values(e.getFields());
                        return t ? n : n.filter((r)=>r.deprecationReason == null);
                    }
                }
            },
            interfaces: {
                type: new B15(new A16(_e3)),
                resolve (e) {
                    if (x29(e) || L12(e)) return e.getInterfaces();
                }
            },
            possibleTypes: {
                type: new B15(new A16(_e3)),
                resolve (e, t, n, { schema: r }) {
                    if (le3(e)) return r.getPossibleTypes(e);
                }
            },
            enumValues: {
                type: new B15(new A16(Yn)),
                args: {
                    includeDeprecated: {
                        type: fe4,
                        defaultValue: !1
                    }
                },
                resolve (e, { includeDeprecated: t }) {
                    if (U14(e)) {
                        let n = e.getValues();
                        return t ? n : n.filter((r)=>r.deprecationReason == null);
                    }
                }
            },
            inputFields: {
                type: new B15(new A16($t1)),
                args: {
                    includeDeprecated: {
                        type: fe4,
                        defaultValue: !1
                    }
                },
                resolve (e, { includeDeprecated: t }) {
                    if (w17(e)) {
                        let n = Object.values(e.getFields());
                        return t ? n : n.filter((r)=>r.deprecationReason == null);
                    }
                }
            },
            ofType: {
                type: _e3,
                resolve: (e)=>"ofType" in e ? e.ofType : void 0
            }
        })
}), qn = new re3({
    name: "__Field",
    description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
    fields: ()=>({
            name: {
                type: new A16(q20),
                resolve: (e)=>e.name
            },
            description: {
                type: q20,
                resolve: (e)=>e.description
            },
            args: {
                type: new A16(new B15(new A16($t1))),
                args: {
                    includeDeprecated: {
                        type: fe4,
                        defaultValue: !1
                    }
                },
                resolve (e, { includeDeprecated: t }) {
                    return t ? e.args : e.args.filter((n)=>n.deprecationReason == null);
                }
            },
            type: {
                type: new A16(_e3),
                resolve: (e)=>e.type
            },
            isDeprecated: {
                type: new A16(fe4),
                resolve: (e)=>e.deprecationReason != null
            },
            deprecationReason: {
                type: q20,
                resolve: (e)=>e.deprecationReason
            }
        })
}), $t1 = new re3({
    name: "__InputValue",
    description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
    fields: ()=>({
            name: {
                type: new A16(q20),
                resolve: (e)=>e.name
            },
            description: {
                type: q20,
                resolve: (e)=>e.description
            },
            type: {
                type: new A16(_e3),
                resolve: (e)=>e.type
            },
            defaultValue: {
                type: q20,
                description: "A GraphQL-formatted string representing the default value for this input value.",
                resolve (e) {
                    let { type: t, defaultValue: n } = e, r = Fe(n, t);
                    return r ? k11(r) : null;
                }
            },
            isDeprecated: {
                type: new A16(fe4),
                resolve: (e)=>e.deprecationReason != null
            },
            deprecationReason: {
                type: q20,
                resolve: (e)=>e.deprecationReason
            }
        })
}), Yn = new re3({
    name: "__EnumValue",
    description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
    fields: ()=>({
            name: {
                type: new A16(q20),
                resolve: (e)=>e.name
            },
            description: {
                type: q20,
                resolve: (e)=>e.description
            },
            isDeprecated: {
                type: new A16(fe4),
                resolve: (e)=>e.deprecationReason != null
            },
            deprecationReason: {
                type: q20,
                resolve: (e)=>e.deprecationReason
            }
        })
}), j21;
(function(e) {
    e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.INPUT_OBJECT = "INPUT_OBJECT", e.LIST = "LIST", e.NON_NULL = "NON_NULL";
})(j21 || (j21 = {}));
var Jn = new Ee1({
    name: "__TypeKind",
    description: "An enum describing what kind of type a given `__Type` is.",
    values: {
        SCALAR: {
            value: j21.SCALAR,
            description: "Indicates this type is a scalar."
        },
        OBJECT: {
            value: j21.OBJECT,
            description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
        },
        INTERFACE: {
            value: j21.INTERFACE,
            description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
        },
        UNION: {
            value: j21.UNION,
            description: "Indicates this type is a union. `possibleTypes` is a valid field."
        },
        ENUM: {
            value: j21.ENUM,
            description: "Indicates this type is an enum. `enumValues` is a valid field."
        },
        INPUT_OBJECT: {
            value: j21.INPUT_OBJECT,
            description: "Indicates this type is an input object. `inputFields` is a valid field."
        },
        LIST: {
            value: j21.LIST,
            description: "Indicates this type is a list. `ofType` is a valid field."
        },
        NON_NULL: {
            value: j21.NON_NULL,
            description: "Indicates this type is a non-null. `ofType` is a valid field."
        }
    }
}), it2 = {
    name: "__schema",
    type: new A16(Vt1),
    description: "Access the current type schema of this server.",
    args: [],
    resolve: (e, t, n, { schema: r })=>r,
    deprecationReason: void 0,
    extensions: Object.create(null),
    astNode: void 0
}, ot1 = {
    name: "__type",
    type: _e3,
    description: "Request the type information of a single type.",
    args: [
        {
            name: "name",
            description: void 0,
            type: new A16(q20),
            defaultValue: void 0,
            deprecationReason: void 0,
            extensions: Object.create(null),
            astNode: void 0
        }
    ],
    resolve: (e, { name: t }, n, { schema: r })=>r.getType(t),
    deprecationReason: void 0,
    extensions: Object.create(null),
    astNode: void 0
}, st1 = {
    name: "__typename",
    type: new A16(q20),
    description: "The name of the current Object type at runtime.",
    args: [],
    resolve: (e, t, n, { parentType: r })=>r.name,
    deprecationReason: void 0,
    extensions: Object.create(null),
    astNode: void 0
}, Je = Object.freeze([
    Vt1,
    Qn,
    Bn,
    _e3,
    qn,
    $t1,
    Yn,
    Jn
]);
function Oe(e) {
    return Je.some(({ name: t })=>e.name === t);
}
function ti(e) {
    return he1(e, De);
}
function Ct1(e) {
    if (!ti(e)) throw new Error(`Expected ${h18(e)} to be a GraphQL schema.`);
    return e;
}
var De = class {
    constructor(t){
        var n, r;
        this.__validationErrors = t.assumeValid === !0 ? [] : void 0, H11(t) || S15(!1, "Must provide configuration object."), !t.types || Array.isArray(t.types) || S15(!1, `"types" must be Array if provided but got: ${h18(t.types)}.`), !t.directives || Array.isArray(t.directives) || S15(!1, `"directives" must be Array if provided but got: ${h18(t.directives)}.`), this.description = t.description, this.extensions = ye(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._queryType = t.query, this._mutationType = t.mutation, this._subscriptionType = t.subscription, this._directives = (r = t.directives) !== null && r !== void 0 ? r : ve1;
        let i = new Set(t.types);
        if (t.types != null) for (let o of t.types)i.delete(o), Pe(o, i);
        this._queryType != null && Pe(this._queryType, i), this._mutationType != null && Pe(this._mutationType, i), this._subscriptionType != null && Pe(this._subscriptionType, i);
        for (let o of this._directives)if (ht3(o)) for (let s of o.args)Pe(s.type, i);
        Pe(Vt1, i), this._typeMap = Object.create(null), this._subTypeMap = Object.create(null), this._implementationsMap = Object.create(null);
        for (let o of i){
            if (o == null) continue;
            let s = o.name;
            if (s || S15(!1, "One of the provided types for building the Schema is missing a name."), this._typeMap[s] !== void 0) throw new Error(`Schema must contain uniquely named types but contains multiple types named "${s}".`);
            if (this._typeMap[s] = o, L12(o)) {
                for (let a of o.getInterfaces())if (L12(a)) {
                    let u = this._implementationsMap[a.name];
                    u === void 0 && (u = this._implementationsMap[a.name] = {
                        objects: [],
                        interfaces: []
                    }), u.interfaces.push(o);
                }
            } else if (x29(o)) {
                for (let a of o.getInterfaces())if (L12(a)) {
                    let u = this._implementationsMap[a.name];
                    u === void 0 && (u = this._implementationsMap[a.name] = {
                        objects: [],
                        interfaces: []
                    }), u.objects.push(o);
                }
            }
        }
    }
    get [Symbol.toStringTag]() {
        return "GraphQLSchema";
    }
    getQueryType() {
        return this._queryType;
    }
    getMutationType() {
        return this._mutationType;
    }
    getSubscriptionType() {
        return this._subscriptionType;
    }
    getRootType(t) {
        switch(t){
            case Q9.QUERY:
                return this.getQueryType();
            case Q9.MUTATION:
                return this.getMutationType();
            case Q9.SUBSCRIPTION:
                return this.getSubscriptionType();
        }
    }
    getTypeMap() {
        return this._typeMap;
    }
    getType(t) {
        return this.getTypeMap()[t];
    }
    getPossibleTypes(t) {
        return P16(t) ? t.getTypes() : this.getImplementations(t).objects;
    }
    getImplementations(t) {
        let n = this._implementationsMap[t.name];
        return n ?? {
            objects: [],
            interfaces: []
        };
    }
    isSubType(t, n) {
        let r = this._subTypeMap[t.name];
        if (r === void 0) {
            if (r = Object.create(null), P16(t)) for (let i of t.getTypes())r[i.name] = !0;
            else {
                let i = this.getImplementations(t);
                for (let o of i.objects)r[o.name] = !0;
                for (let o of i.interfaces)r[o.name] = !0;
            }
            this._subTypeMap[t.name] = r;
        }
        return r[n.name] !== void 0;
    }
    getDirectives() {
        return this._directives;
    }
    getDirective(t) {
        return this.getDirectives().find((n)=>n.name === t);
    }
    toConfig() {
        return {
            description: this.description,
            query: this.getQueryType(),
            mutation: this.getMutationType(),
            subscription: this.getSubscriptionType(),
            types: Object.values(this.getTypeMap()),
            directives: this.getDirectives(),
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
            assumeValid: this.__validationErrors !== void 0
        };
    }
};
function Pe(e, t) {
    let n = J12(e);
    if (!t.has(n)) {
        if (t.add(n), P16(n)) for (let r of n.getTypes())Pe(r, t);
        else if (x29(n) || L12(n)) {
            for (let r of n.getInterfaces())Pe(r, t);
            for (let r of Object.values(n.getFields())){
                Pe(r.type, t);
                for (let i of r.args)Pe(i.type, t);
            }
        } else if (w17(n)) for (let r of Object.values(n.getFields()))Pe(r.type, t);
    }
    return t;
}
function cn(e) {
    if (Ct1(e), e.__validationErrors) return e.__validationErrors;
    let t = new ri(e);
    ea(t), ta(t), na(t);
    let n = t.getErrors();
    return e.__validationErrors = n, n;
}
function Ut1(e) {
    let t = cn(e);
    if (t.length !== 0) throw new Error(t.map((n)=>n.message).join(`

`));
}
var ri = class {
    constructor(t){
        this._errors = [], this.schema = t;
    }
    reportError(t, n) {
        let r = Array.isArray(n) ? n.filter(Boolean) : n;
        this._errors.push(new f13(t, {
            nodes: r
        }));
    }
    getErrors() {
        return this._errors;
    }
};
function ea(e) {
    let t = e.schema, n = t.getQueryType();
    if (!n) e.reportError("Query root type must be provided.", t.astNode);
    else if (!x29(n)) {
        var r;
        e.reportError(`Query root type must be Object type, it cannot be ${h18(n)}.`, (r = ni(t, Q9.QUERY)) !== null && r !== void 0 ? r : n.astNode);
    }
    let i = t.getMutationType();
    if (i && !x29(i)) {
        var o;
        e.reportError(`Mutation root type must be Object type if provided, it cannot be ${h18(i)}.`, (o = ni(t, Q9.MUTATION)) !== null && o !== void 0 ? o : i.astNode);
    }
    let s = t.getSubscriptionType();
    if (s && !x29(s)) {
        var a;
        e.reportError(`Subscription root type must be Object type if provided, it cannot be ${h18(s)}.`, (a = ni(t, Q9.SUBSCRIPTION)) !== null && a !== void 0 ? a : s.astNode);
    }
}
function ni(e, t) {
    var n;
    return (n = [
        e.astNode,
        ...e.extensionASTNodes
    ].flatMap((r)=>{
        var i;
        return (i = r?.operationTypes) !== null && i !== void 0 ? i : [];
    }).find((r)=>r.operation === t)) === null || n === void 0 ? void 0 : n.type;
}
function ta(e) {
    for (let n of e.schema.getDirectives()){
        if (!ht3(n)) {
            e.reportError(`Expected directive but got: ${h18(n)}.`, n?.astNode);
            continue;
        }
        yt2(e, n);
        for (let r of n.args)if (yt2(e, r), te5(r.type) || e.reportError(`The type of @${n.name}(${r.name}:) must be Input Type but got: ${h18(r.type)}.`, r.astNode), we(r) && r.deprecationReason != null) {
            var t;
            e.reportError(`Required argument @${n.name}(${r.name}:) cannot be deprecated.`, [
                ii(r.astNode),
                (t = r.astNode) === null || t === void 0 ? void 0 : t.type
            ]);
        }
    }
}
function yt2(e, t) {
    t.name.startsWith("__") && e.reportError(`Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`, t.astNode);
}
function na(e) {
    let t = ca(e), n = e.schema.getTypeMap();
    for (let r of Object.values(n)){
        if (!tt3(r)) {
            e.reportError(`Expected GraphQL named type but got: ${h18(r)}.`, r.astNode);
            continue;
        }
        Oe(r) || yt2(e, r), x29(r) || L12(r) ? (Eo(e, r), vo(e, r)) : P16(r) ? oa(e, r) : U14(r) ? sa(e, r) : w17(r) && (aa(e, r), t(r));
    }
}
function Eo(e, t) {
    let n = Object.values(t.getFields());
    n.length === 0 && e.reportError(`Type ${t.name} must define one or more fields.`, [
        t.astNode,
        ...t.extensionASTNodes
    ]);
    for (let s of n){
        if (yt2(e, s), !Le(s.type)) {
            var r;
            e.reportError(`The type of ${t.name}.${s.name} must be Output Type but got: ${h18(s.type)}.`, (r = s.astNode) === null || r === void 0 ? void 0 : r.type);
        }
        for (let a of s.args){
            let u = a.name;
            if (yt2(e, a), !te5(a.type)) {
                var i;
                e.reportError(`The type of ${t.name}.${s.name}(${u}:) must be Input Type but got: ${h18(a.type)}.`, (i = a.astNode) === null || i === void 0 ? void 0 : i.type);
            }
            if (we(a) && a.deprecationReason != null) {
                var o;
                e.reportError(`Required argument ${t.name}.${s.name}(${u}:) cannot be deprecated.`, [
                    ii(a.astNode),
                    (o = a.astNode) === null || o === void 0 ? void 0 : o.type
                ]);
            }
        }
    }
}
function vo(e, t) {
    let n = Object.create(null);
    for (let r of t.getInterfaces()){
        if (!L12(r)) {
            e.reportError(`Type ${h18(t)} must only implement Interface types, it cannot implement ${h18(r)}.`, an(t, r));
            continue;
        }
        if (t === r) {
            e.reportError(`Type ${t.name} cannot implement itself because it would create a circular reference.`, an(t, r));
            continue;
        }
        if (n[r.name]) {
            e.reportError(`Type ${t.name} can only implement ${r.name} once.`, an(t, r));
            continue;
        }
        n[r.name] = !0, ia(e, t, r), ra(e, t, r);
    }
}
function ra(e, t, n) {
    let r = t.getFields();
    for (let u of Object.values(n.getFields())){
        let p = u.name, l = r[p];
        if (!l) {
            e.reportError(`Interface field ${n.name}.${p} expected but ${t.name} does not provide it.`, [
                u.astNode,
                t.astNode,
                ...t.extensionASTNodes
            ]);
            continue;
        }
        if (!Qe(e.schema, l.type, u.type)) {
            var i, o;
            e.reportError(`Interface field ${n.name}.${p} expects type ${h18(u.type)} but ${t.name}.${p} is type ${h18(l.type)}.`, [
                (i = u.astNode) === null || i === void 0 ? void 0 : i.type,
                (o = l.astNode) === null || o === void 0 ? void 0 : o.type
            ]);
        }
        for (let d of u.args){
            let m = d.name, E = l.args.find((N)=>N.name === m);
            if (!E) {
                e.reportError(`Interface field argument ${n.name}.${p}(${m}:) expected but ${t.name}.${p} does not provide it.`, [
                    d.astNode,
                    l.astNode
                ]);
                continue;
            }
            if (!Ft1(d.type, E.type)) {
                var s, a;
                e.reportError(`Interface field argument ${n.name}.${p}(${m}:) expects type ${h18(d.type)} but ${t.name}.${p}(${m}:) is type ${h18(E.type)}.`, [
                    (s = d.astNode) === null || s === void 0 ? void 0 : s.type,
                    (a = E.astNode) === null || a === void 0 ? void 0 : a.type
                ]);
            }
        }
        for (let d of l.args){
            let m = d.name;
            !u.args.find((N)=>N.name === m) && we(d) && e.reportError(`Object field ${t.name}.${p} includes required argument ${m} that is missing from the Interface field ${n.name}.${p}.`, [
                d.astNode,
                u.astNode
            ]);
        }
    }
}
function ia(e, t, n) {
    let r = t.getInterfaces();
    for (let i of n.getInterfaces())r.includes(i) || e.reportError(i === t ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.` : `Type ${t.name} must implement ${i.name} because it is implemented by ${n.name}.`, [
        ...an(n, i),
        ...an(t, n)
    ]);
}
function oa(e, t) {
    let n = t.getTypes();
    n.length === 0 && e.reportError(`Union type ${t.name} must define one or more member types.`, [
        t.astNode,
        ...t.extensionASTNodes
    ]);
    let r = Object.create(null);
    for (let i of n){
        if (r[i.name]) {
            e.reportError(`Union type ${t.name} can only include type ${i.name} once.`, No(t, i.name));
            continue;
        }
        r[i.name] = !0, x29(i) || e.reportError(`Union type ${t.name} can only include Object types, it cannot include ${h18(i)}.`, No(t, String(i)));
    }
}
function sa(e, t) {
    let n = t.getValues();
    n.length === 0 && e.reportError(`Enum type ${t.name} must define one or more values.`, [
        t.astNode,
        ...t.extensionASTNodes
    ]);
    for (let r of n)yt2(e, r);
}
function aa(e, t) {
    let n = Object.values(t.getFields());
    n.length === 0 && e.reportError(`Input Object type ${t.name} must define one or more fields.`, [
        t.astNode,
        ...t.extensionASTNodes
    ]);
    for (let o of n){
        if (yt2(e, o), !te5(o.type)) {
            var r;
            e.reportError(`The type of ${t.name}.${o.name} must be Input Type but got: ${h18(o.type)}.`, (r = o.astNode) === null || r === void 0 ? void 0 : r.type);
        }
        if (nt2(o) && o.deprecationReason != null) {
            var i;
            e.reportError(`Required input field ${t.name}.${o.name} cannot be deprecated.`, [
                ii(o.astNode),
                (i = o.astNode) === null || i === void 0 ? void 0 : i.type
            ]);
        }
    }
}
function ca(e) {
    let t = Object.create(null), n = [], r = Object.create(null);
    return i;
    function i(o) {
        if (t[o.name]) return;
        t[o.name] = !0, r[o.name] = n.length;
        let s = Object.values(o.getFields());
        for (let a of s)if (O19(a.type) && w17(a.type.ofType)) {
            let u = a.type.ofType, p = r[u.name];
            if (n.push(a), p === void 0) i(u);
            else {
                let l = n.slice(p), d = l.map((m)=>m.name).join(".");
                e.reportError(`Cannot reference Input Object "${u.name}" within itself through a series of non-null fields: "${d}".`, l.map((m)=>m.astNode));
            }
            n.pop();
        }
        r[o.name] = void 0;
    }
}
function an(e, t) {
    let { astNode: n, extensionASTNodes: r } = e;
    return (n != null ? [
        n,
        ...r
    ] : r).flatMap((o)=>{
        var s;
        return (s = o.interfaces) !== null && s !== void 0 ? s : [];
    }).filter((o)=>o.name.value === t.name);
}
function No(e, t) {
    let { astNode: n, extensionASTNodes: r } = e;
    return (n != null ? [
        n,
        ...r
    ] : r).flatMap((o)=>{
        var s;
        return (s = o.types) !== null && s !== void 0 ? s : [];
    }).filter((o)=>o.name.value === t);
}
function ii(e) {
    var t;
    return e == null || (t = e.directives) === null || t === void 0 ? void 0 : t.find((n)=>n.name.value === Tt1.name);
}
function K11(e, t) {
    switch(t.kind){
        case c18.LIST_TYPE:
            {
                let n = K11(e, t.type);
                return n && new B15(n);
            }
        case c18.NON_NULL_TYPE:
            {
                let n = K11(e, t.type);
                return n && new A16(n);
            }
        case c18.NAMED_TYPE:
            return e.getType(t.name.value);
    }
}
var at4 = class {
    constructor(t, n, r){
        this._schema = t, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = r ?? ua, n && (te5(n) && this._inputTypeStack.push(n), Ne1(n) && this._parentTypeStack.push(n), Le(n) && this._typeStack.push(n));
    }
    get [Symbol.toStringTag]() {
        return "TypeInfo";
    }
    getType() {
        if (this._typeStack.length > 0) return this._typeStack[this._typeStack.length - 1];
    }
    getParentType() {
        if (this._parentTypeStack.length > 0) return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
    getInputType() {
        if (this._inputTypeStack.length > 0) return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
    getParentInputType() {
        if (this._inputTypeStack.length > 1) return this._inputTypeStack[this._inputTypeStack.length - 2];
    }
    getFieldDef() {
        if (this._fieldDefStack.length > 0) return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
    getDefaultValue() {
        if (this._defaultValueStack.length > 0) return this._defaultValueStack[this._defaultValueStack.length - 1];
    }
    getDirective() {
        return this._directive;
    }
    getArgument() {
        return this._argument;
    }
    getEnumValue() {
        return this._enumValue;
    }
    enter(t) {
        let n = this._schema;
        switch(t.kind){
            case c18.SELECTION_SET:
                {
                    let i = J12(this.getType());
                    this._parentTypeStack.push(Ne1(i) ? i : void 0);
                    break;
                }
            case c18.FIELD:
                {
                    let i = this.getParentType(), o, s;
                    i && (o = this._getFieldDef(n, i, t), o && (s = o.type)), this._fieldDefStack.push(o), this._typeStack.push(Le(s) ? s : void 0);
                    break;
                }
            case c18.DIRECTIVE:
                this._directive = n.getDirective(t.name.value);
                break;
            case c18.OPERATION_DEFINITION:
                {
                    let i = n.getRootType(t.operation);
                    this._typeStack.push(x29(i) ? i : void 0);
                    break;
                }
            case c18.INLINE_FRAGMENT:
            case c18.FRAGMENT_DEFINITION:
                {
                    let i = t.typeCondition, o = i ? K11(n, i) : J12(this.getType());
                    this._typeStack.push(Le(o) ? o : void 0);
                    break;
                }
            case c18.VARIABLE_DEFINITION:
                {
                    let i = K11(n, t.type);
                    this._inputTypeStack.push(te5(i) ? i : void 0);
                    break;
                }
            case c18.ARGUMENT:
                {
                    var r;
                    let i, o, s = (r = this.getDirective()) !== null && r !== void 0 ? r : this.getFieldDef();
                    s && (i = s.args.find((a)=>a.name === t.name.value), i && (o = i.type)), this._argument = i, this._defaultValueStack.push(i ? i.defaultValue : void 0), this._inputTypeStack.push(te5(o) ? o : void 0);
                    break;
                }
            case c18.LIST:
                {
                    let i = wt1(this.getInputType()), o = F18(i) ? i.ofType : i;
                    this._defaultValueStack.push(void 0), this._inputTypeStack.push(te5(o) ? o : void 0);
                    break;
                }
            case c18.OBJECT_FIELD:
                {
                    let i = J12(this.getInputType()), o, s;
                    w17(i) && (s = i.getFields()[t.name.value], s && (o = s.type)), this._defaultValueStack.push(s ? s.defaultValue : void 0), this._inputTypeStack.push(te5(o) ? o : void 0);
                    break;
                }
            case c18.ENUM:
                {
                    let i = J12(this.getInputType()), o;
                    U14(i) && (o = i.getValue(t.value)), this._enumValue = o;
                    break;
                }
            default:
        }
    }
    leave(t) {
        switch(t.kind){
            case c18.SELECTION_SET:
                this._parentTypeStack.pop();
                break;
            case c18.FIELD:
                this._fieldDefStack.pop(), this._typeStack.pop();
                break;
            case c18.DIRECTIVE:
                this._directive = null;
                break;
            case c18.OPERATION_DEFINITION:
            case c18.INLINE_FRAGMENT:
            case c18.FRAGMENT_DEFINITION:
                this._typeStack.pop();
                break;
            case c18.VARIABLE_DEFINITION:
                this._inputTypeStack.pop();
                break;
            case c18.ARGUMENT:
                this._argument = null, this._defaultValueStack.pop(), this._inputTypeStack.pop();
                break;
            case c18.LIST:
            case c18.OBJECT_FIELD:
                this._defaultValueStack.pop(), this._inputTypeStack.pop();
                break;
            case c18.ENUM:
                this._enumValue = null;
                break;
            default:
        }
    }
};
function ua(e, t, n) {
    let r = n.name.value;
    if (r === it2.name && e.getQueryType() === t) return it2;
    if (r === ot1.name && e.getQueryType() === t) return ot1;
    if (r === st1.name && Ne1(t)) return st1;
    if (x29(t) || L12(t)) return t.getFields()[r];
}
function Mt(e, t) {
    return {
        enter (...n) {
            let r = n[0];
            e.enter(r);
            let i = et2(t, r.kind).enter;
            if (i) {
                let o = i.apply(t, n);
                return o !== void 0 && (e.leave(r), Yt1(o) && e.enter(o)), o;
            }
        },
        leave (...n) {
            let r = n[0], i = et2(t, r.kind).leave, o;
            return i && (o = i.apply(t, n)), e.leave(r), o;
        }
    };
}
function un(e) {
    return e.kind === c18.OPERATION_DEFINITION || e.kind === c18.FRAGMENT_DEFINITION;
}
function pn(e) {
    return e.kind === c18.SCHEMA_DEFINITION || Ge(e) || e.kind === c18.DIRECTIVE_DEFINITION;
}
function Ge(e) {
    return e.kind === c18.SCALAR_TYPE_DEFINITION || e.kind === c18.OBJECT_TYPE_DEFINITION || e.kind === c18.INTERFACE_TYPE_DEFINITION || e.kind === c18.UNION_TYPE_DEFINITION || e.kind === c18.ENUM_TYPE_DEFINITION || e.kind === c18.INPUT_OBJECT_TYPE_DEFINITION;
}
function ln(e) {
    return e.kind === c18.SCHEMA_EXTENSION || Et1(e);
}
function Et1(e) {
    return e.kind === c18.SCALAR_TYPE_EXTENSION || e.kind === c18.OBJECT_TYPE_EXTENSION || e.kind === c18.INTERFACE_TYPE_EXTENSION || e.kind === c18.UNION_TYPE_EXTENSION || e.kind === c18.ENUM_TYPE_EXTENSION || e.kind === c18.INPUT_OBJECT_TYPE_EXTENSION;
}
function Xn(e) {
    return {
        Document (t) {
            for (let n of t.definitions)if (!un(n)) {
                let r = n.kind === c18.SCHEMA_DEFINITION || n.kind === c18.SCHEMA_EXTENSION ? "schema" : '"' + n.name.value + '"';
                e.reportError(new f13(`The ${r} definition is not executable.`, {
                    nodes: n
                }));
            }
            return !1;
        }
    };
}
function zn(e) {
    return {
        Field (t) {
            let n = e.getParentType();
            if (n && !e.getFieldDef()) {
                let i = e.getSchema(), o = t.name.value, s = ce4("to use an inline fragment on", pa(i, n, o));
                s === "" && (s = ce4(la(n, o))), e.reportError(new f13(`Cannot query field "${o}" on type "${n.name}".` + s, {
                    nodes: t
                }));
            }
        }
    };
}
function pa(e, t, n) {
    if (!le3(t)) return [];
    let r = new Set, i = Object.create(null);
    for (let s of e.getPossibleTypes(t))if (s.getFields()[n]) {
        r.add(s), i[s.name] = 1;
        for (let a of s.getInterfaces()){
            var o;
            a.getFields()[n] && (r.add(a), i[a.name] = ((o = i[a.name]) !== null && o !== void 0 ? o : 0) + 1);
        }
    }
    return [
        ...r
    ].sort((s, a)=>{
        let u = i[a.name] - i[s.name];
        return u !== 0 ? u : L12(s) && e.isSubType(s, a) ? -1 : L12(a) && e.isSubType(a, s) ? 1 : qe(s.name, a.name);
    }).map((s)=>s.name);
}
function la(e, t) {
    if (x29(e) || L12(e)) {
        let n = Object.keys(e.getFields());
        return Te1(t, n);
    }
    return [];
}
function Hn(e) {
    return {
        InlineFragment (t) {
            let n = t.typeCondition;
            if (n) {
                let r = K11(e.getSchema(), n);
                if (r && !Ne1(r)) {
                    let i = k11(n);
                    e.reportError(new f13(`Fragment cannot condition on non composite type "${i}".`, {
                        nodes: n
                    }));
                }
            }
        },
        FragmentDefinition (t) {
            let n = K11(e.getSchema(), t.typeCondition);
            if (n && !Ne1(n)) {
                let r = k11(t.typeCondition);
                e.reportError(new f13(`Fragment "${t.name.value}" cannot condition on non composite type "${r}".`, {
                    nodes: t.typeCondition
                }));
            }
        }
    };
}
function Wn(e) {
    return {
        ...si(e),
        Argument (t) {
            let n = e.getArgument(), r = e.getFieldDef(), i = e.getParentType();
            if (!n && r && i) {
                let o = t.name.value, s = r.args.map((u)=>u.name), a = Te1(o, s);
                e.reportError(new f13(`Unknown argument "${o}" on field "${i.name}.${r.name}".` + ce4(a), {
                    nodes: t
                }));
            }
        }
    };
}
function si(e) {
    let t = Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : ve1;
    for (let s of r)t[s.name] = s.args.map((a)=>a.name);
    let i = e.getDocument().definitions;
    for (let s of i)if (s.kind === c18.DIRECTIVE_DEFINITION) {
        var o;
        let a = (o = s.arguments) !== null && o !== void 0 ? o : [];
        t[s.name.value] = a.map((u)=>u.name.value);
    }
    return {
        Directive (s) {
            let a = s.name.value, u = t[a];
            if (s.arguments && u) for (let p of s.arguments){
                let l = p.name.value;
                if (!u.includes(l)) {
                    let d = Te1(l, u);
                    e.reportError(new f13(`Unknown argument "${l}" on directive "@${a}".` + ce4(d), {
                        nodes: p
                    }));
                }
            }
            return !1;
        }
    };
}
function fn(e) {
    let t = Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : ve1;
    for (let o of r)t[o.name] = o.locations;
    let i = e.getDocument().definitions;
    for (let o of i)o.kind === c18.DIRECTIVE_DEFINITION && (t[o.name.value] = o.locations.map((s)=>s.value));
    return {
        Directive (o, s, a, u, p) {
            let l = o.name.value, d = t[l];
            if (!d) {
                e.reportError(new f13(`Unknown directive "@${l}".`, {
                    nodes: o
                }));
                return;
            }
            let m = fa(p);
            m && !d.includes(m) && e.reportError(new f13(`Directive "@${l}" may not be used on ${m}.`, {
                nodes: o
            }));
        }
    };
}
function fa(e) {
    let t = e[e.length - 1];
    switch("kind" in t || V12(!1), t.kind){
        case c18.OPERATION_DEFINITION:
            return da(t.operation);
        case c18.FIELD:
            return D21.FIELD;
        case c18.FRAGMENT_SPREAD:
            return D21.FRAGMENT_SPREAD;
        case c18.INLINE_FRAGMENT:
            return D21.INLINE_FRAGMENT;
        case c18.FRAGMENT_DEFINITION:
            return D21.FRAGMENT_DEFINITION;
        case c18.VARIABLE_DEFINITION:
            return D21.VARIABLE_DEFINITION;
        case c18.SCHEMA_DEFINITION:
        case c18.SCHEMA_EXTENSION:
            return D21.SCHEMA;
        case c18.SCALAR_TYPE_DEFINITION:
        case c18.SCALAR_TYPE_EXTENSION:
            return D21.SCALAR;
        case c18.OBJECT_TYPE_DEFINITION:
        case c18.OBJECT_TYPE_EXTENSION:
            return D21.OBJECT;
        case c18.FIELD_DEFINITION:
            return D21.FIELD_DEFINITION;
        case c18.INTERFACE_TYPE_DEFINITION:
        case c18.INTERFACE_TYPE_EXTENSION:
            return D21.INTERFACE;
        case c18.UNION_TYPE_DEFINITION:
        case c18.UNION_TYPE_EXTENSION:
            return D21.UNION;
        case c18.ENUM_TYPE_DEFINITION:
        case c18.ENUM_TYPE_EXTENSION:
            return D21.ENUM;
        case c18.ENUM_VALUE_DEFINITION:
            return D21.ENUM_VALUE;
        case c18.INPUT_OBJECT_TYPE_DEFINITION:
        case c18.INPUT_OBJECT_TYPE_EXTENSION:
            return D21.INPUT_OBJECT;
        case c18.INPUT_VALUE_DEFINITION:
            {
                let n = e[e.length - 3];
                return "kind" in n || V12(!1), n.kind === c18.INPUT_OBJECT_TYPE_DEFINITION ? D21.INPUT_FIELD_DEFINITION : D21.ARGUMENT_DEFINITION;
            }
        default:
            V12(!1, "Unexpected kind: " + h18(t.kind));
    }
}
function da(e) {
    switch(e){
        case Q9.QUERY:
            return D21.QUERY;
        case Q9.MUTATION:
            return D21.MUTATION;
        case Q9.SUBSCRIPTION:
            return D21.SUBSCRIPTION;
    }
}
function Zn(e) {
    return {
        FragmentSpread (t) {
            let n = t.name.value;
            e.getFragment(n) || e.reportError(new f13(`Unknown fragment "${n}".`, {
                nodes: t.name
            }));
        }
    };
}
function dn(e) {
    let t = e.getSchema(), n = t ? t.getTypeMap() : Object.create(null), r = Object.create(null);
    for (let o of e.getDocument().definitions)Ge(o) && (r[o.name.value] = !0);
    let i = [
        ...Object.keys(n),
        ...Object.keys(r)
    ];
    return {
        NamedType (o, s, a, u, p) {
            let l = o.name.value;
            if (!n[l] && !r[l]) {
                var d;
                let m = (d = p[2]) !== null && d !== void 0 ? d : a, E = m != null && ma(m);
                if (E && _o.includes(l)) return;
                let N = Te1(l, E ? _o.concat(i) : i);
                e.reportError(new f13(`Unknown type "${l}".` + ce4(N), {
                    nodes: o
                }));
            }
        }
    };
}
var _o = [
    ...Ye,
    ...Je
].map((e)=>e.name);
function ma(e) {
    return "kind" in e && (pn(e) || ln(e));
}
function er1(e) {
    let t = 0;
    return {
        Document (n) {
            t = n.definitions.filter((r)=>r.kind === c18.OPERATION_DEFINITION).length;
        },
        OperationDefinition (n) {
            !n.name && t > 1 && e.reportError(new f13("This anonymous operation must be the only defined operation.", {
                nodes: n
            }));
        }
    };
}
function tr1(e) {
    var t, n, r;
    let i = e.getSchema(), o = (t = (n = (r = i?.astNode) !== null && r !== void 0 ? r : i?.getQueryType()) !== null && n !== void 0 ? n : i?.getMutationType()) !== null && t !== void 0 ? t : i?.getSubscriptionType(), s = 0;
    return {
        SchemaDefinition (a) {
            if (o) {
                e.reportError(new f13("Cannot define a new schema within a schema extension.", {
                    nodes: a
                }));
                return;
            }
            s > 0 && e.reportError(new f13("Must provide only one schema definition.", {
                nodes: a
            })), ++s;
        }
    };
}
function nr(e) {
    let t = Object.create(null), n = [], r = Object.create(null);
    return {
        OperationDefinition: ()=>!1,
        FragmentDefinition (o) {
            return i(o), !1;
        }
    };
    function i(o) {
        if (t[o.name.value]) return;
        let s = o.name.value;
        t[s] = !0;
        let a = e.getFragmentSpreads(o.selectionSet);
        if (a.length !== 0) {
            r[s] = n.length;
            for (let u of a){
                let p = u.name.value, l = r[p];
                if (n.push(u), l === void 0) {
                    let d = e.getFragment(p);
                    d && i(d);
                } else {
                    let d = n.slice(l), m = d.slice(0, -1).map((E)=>'"' + E.name.value + '"').join(", ");
                    e.reportError(new f13(`Cannot spread fragment "${p}" within itself` + (m !== "" ? ` via ${m}.` : "."), {
                        nodes: d
                    }));
                }
                n.pop();
            }
            r[s] = void 0;
        }
    }
}
function rr1(e) {
    let t = Object.create(null);
    return {
        OperationDefinition: {
            enter () {
                t = Object.create(null);
            },
            leave (n) {
                let r = e.getRecursiveVariableUsages(n);
                for (let { node: i } of r){
                    let o = i.name.value;
                    t[o] !== !0 && e.reportError(new f13(n.name ? `Variable "$${o}" is not defined by operation "${n.name.value}".` : `Variable "$${o}" is not defined.`, {
                        nodes: [
                            i,
                            n
                        ]
                    }));
                }
            }
        },
        VariableDefinition (n) {
            t[n.variable.name.value] = !0;
        }
    };
}
function ir1(e) {
    let t = [], n = [];
    return {
        OperationDefinition (r) {
            return t.push(r), !1;
        },
        FragmentDefinition (r) {
            return n.push(r), !1;
        },
        Document: {
            leave () {
                let r = Object.create(null);
                for (let i of t)for (let o of e.getRecursivelyReferencedFragments(i))r[o.name.value] = !0;
                for (let i of n){
                    let o = i.name.value;
                    r[o] !== !0 && e.reportError(new f13(`Fragment "${o}" is never used.`, {
                        nodes: i
                    }));
                }
            }
        }
    };
}
function or1(e) {
    let t = [];
    return {
        OperationDefinition: {
            enter () {
                t = [];
            },
            leave (n) {
                let r = Object.create(null), i = e.getRecursiveVariableUsages(n);
                for (let { node: o } of i)r[o.name.value] = !0;
                for (let o of t){
                    let s = o.variable.name.value;
                    r[s] !== !0 && e.reportError(new f13(n.name ? `Variable "$${s}" is never used in operation "${n.name.value}".` : `Variable "$${s}" is never used.`, {
                        nodes: o
                    }));
                }
            }
        },
        VariableDefinition (n) {
            t.push(n);
        }
    };
}
function jt1(e) {
    switch(e.kind){
        case c18.OBJECT:
            return {
                ...e,
                fields: ha(e.fields)
            };
        case c18.LIST:
            return {
                ...e,
                values: e.values.map(jt1)
            };
        case c18.INT:
        case c18.FLOAT:
        case c18.STRING:
        case c18.BOOLEAN:
        case c18.NULL:
        case c18.ENUM:
        case c18.VARIABLE:
            return e;
    }
}
function ha(e) {
    return e.map((t)=>({
            ...t,
            value: jt1(t.value)
        })).sort((t, n)=>qe(t.name.value, n.name.value));
}
function Do(e) {
    return Array.isArray(e) ? e.map(([t, n])=>`subfields "${t}" conflict because ` + Do(n)).join(" and ") : e;
}
function ur1(e) {
    let t = new ui, n = new Map;
    return {
        SelectionSet (r) {
            let i = Ta(e, n, t, e.getParentType(), r);
            for (let [[o, s], a, u] of i){
                let p = Do(s);
                e.reportError(new f13(`Fields "${o}" conflict because ${p}. Use different aliases on the fields to fetch both if this was intentional.`, {
                    nodes: a.concat(u)
                }));
            }
        }
    };
}
function Ta(e, t, n, r, i) {
    let o = [], [s, a] = cr(e, t, r, i);
    if (Ea(e, o, t, n, s), a.length !== 0) for(let u = 0; u < a.length; u++){
        sr1(e, o, t, n, !1, s, a[u]);
        for(let p = u + 1; p < a.length; p++)ar(e, o, t, n, !1, a[u], a[p]);
    }
    return o;
}
function sr1(e, t, n, r, i, o, s) {
    let a = e.getFragment(s);
    if (!a) return;
    let [u, p] = ci(e, n, a);
    if (o !== u) {
        pi(e, t, n, r, i, o, u);
        for (let l of p)r.has(l, s, i) || (r.add(l, s, i), sr1(e, t, n, r, i, o, l));
    }
}
function ar(e, t, n, r, i, o, s) {
    if (o === s || r.has(o, s, i)) return;
    r.add(o, s, i);
    let a = e.getFragment(o), u = e.getFragment(s);
    if (!a || !u) return;
    let [p, l] = ci(e, n, a), [d, m] = ci(e, n, u);
    pi(e, t, n, r, i, p, d);
    for (let E of m)ar(e, t, n, r, i, o, E);
    for (let E of l)ar(e, t, n, r, i, E, s);
}
function ya(e, t, n, r, i, o, s, a) {
    let u = [], [p, l] = cr(e, t, i, o), [d, m] = cr(e, t, s, a);
    pi(e, u, t, n, r, p, d);
    for (let E of m)sr1(e, u, t, n, r, p, E);
    for (let E of l)sr1(e, u, t, n, r, d, E);
    for (let E of l)for (let N of m)ar(e, u, t, n, r, E, N);
    return u;
}
function Ea(e, t, n, r, i) {
    for (let [o, s] of Object.entries(i))if (s.length > 1) for(let a = 0; a < s.length; a++)for(let u = a + 1; u < s.length; u++){
        let p = So(e, n, r, !1, o, s[a], s[u]);
        p && t.push(p);
    }
}
function pi(e, t, n, r, i, o, s) {
    for (let [a, u] of Object.entries(o)){
        let p = s[a];
        if (p) for (let l of u)for (let d of p){
            let m = So(e, n, r, i, a, l, d);
            m && t.push(m);
        }
    }
}
function So(e, t, n, r, i, o, s) {
    let [a, u, p] = o, [l, d, m] = s, E = r || a !== l && x29(a) && x29(l);
    if (!E) {
        let $e = u.name.value, me = d.name.value;
        if ($e !== me) return [
            [
                i,
                `"${$e}" and "${me}" are different fields`
            ],
            [
                u
            ],
            [
                d
            ]
        ];
        if (!va(u, d)) return [
            [
                i,
                "they have differing arguments"
            ],
            [
                u
            ],
            [
                d
            ]
        ];
    }
    let N = p?.type, C = m?.type;
    if (N && C && ai(N, C)) return [
        [
            i,
            `they return conflicting types "${h18(N)}" and "${h18(C)}"`
        ],
        [
            u
        ],
        [
            d
        ]
    ];
    let M = u.selectionSet, z = d.selectionSet;
    if (M && z) {
        let $e = ya(e, t, n, E, J12(N), M, J12(C), z);
        return Na($e, i, u, d);
    }
}
function va(e, t) {
    let n = e.arguments, r = t.arguments;
    if (n === void 0 || n.length === 0) return r === void 0 || r.length === 0;
    if (r === void 0 || r.length === 0 || n.length !== r.length) return !1;
    let i = new Map(r.map(({ name: o, value: s })=>[
            o.value,
            s
        ]));
    return n.every((o)=>{
        let s = o.value, a = i.get(o.name.value);
        return a === void 0 ? !1 : Oo(s) === Oo(a);
    });
}
function Oo(e) {
    return k11(jt1(e));
}
function ai(e, t) {
    return F18(e) ? F18(t) ? ai(e.ofType, t.ofType) : !0 : F18(t) ? !0 : O19(e) ? O19(t) ? ai(e.ofType, t.ofType) : !0 : O19(t) ? !0 : ie5(e) || ie5(t) ? e !== t : !1;
}
function cr(e, t, n, r) {
    let i = t.get(r);
    if (i) return i;
    let o = Object.create(null), s = Object.create(null);
    Ao(e, n, r, o, s);
    let a = [
        o,
        Object.keys(s)
    ];
    return t.set(r, a), a;
}
function ci(e, t, n) {
    let r = t.get(n.selectionSet);
    if (r) return r;
    let i = K11(e.getSchema(), n.typeCondition);
    return cr(e, t, i, n.selectionSet);
}
function Ao(e, t, n, r, i) {
    for (let o of n.selections)switch(o.kind){
        case c18.FIELD:
            {
                let s = o.name.value, a;
                (x29(t) || L12(t)) && (a = t.getFields()[s]);
                let u = o.alias ? o.alias.value : s;
                r[u] || (r[u] = []), r[u].push([
                    t,
                    o,
                    a
                ]);
                break;
            }
        case c18.FRAGMENT_SPREAD:
            i[o.name.value] = !0;
            break;
        case c18.INLINE_FRAGMENT:
            {
                let s = o.typeCondition, a = s ? K11(e.getSchema(), s) : t;
                Ao(e, a, o.selectionSet, r, i);
                break;
            }
    }
}
function Na(e, t, n, r) {
    if (e.length > 0) return [
        [
            t,
            e.map(([i])=>i)
        ],
        [
            n,
            ...e.map(([, i])=>i).flat()
        ],
        [
            r,
            ...e.map(([, , i])=>i).flat()
        ]
    ];
}
var ui = class {
    constructor(){
        this._data = new Map;
    }
    has(t, n, r) {
        var i;
        let [o, s] = t < n ? [
            t,
            n
        ] : [
            n,
            t
        ], a = (i = this._data.get(o)) === null || i === void 0 ? void 0 : i.get(s);
        return a === void 0 ? !1 : r ? !0 : r === a;
    }
    add(t, n, r) {
        let [i, o] = t < n ? [
            t,
            n
        ] : [
            n,
            t
        ], s = this._data.get(i);
        s === void 0 ? this._data.set(i, new Map([
            [
                o,
                r
            ]
        ])) : s.set(o, r);
    }
};
function pr1(e) {
    return {
        InlineFragment (t) {
            let n = e.getType(), r = e.getParentType();
            if (Ne1(n) && Ne1(r) && !zt1(e.getSchema(), n, r)) {
                let i = h18(r), o = h18(n);
                e.reportError(new f13(`Fragment cannot be spread here as objects of type "${i}" can never be of type "${o}".`, {
                    nodes: t
                }));
            }
        },
        FragmentSpread (t) {
            let n = t.name.value, r = ga(e, n), i = e.getParentType();
            if (r && i && !zt1(e.getSchema(), r, i)) {
                let o = h18(i), s = h18(r);
                e.reportError(new f13(`Fragment "${n}" cannot be spread here as objects of type "${o}" can never be of type "${s}".`, {
                    nodes: t
                }));
            }
        }
    };
}
function ga(e, t) {
    let n = e.getFragment(t);
    if (n) {
        let r = K11(e.getSchema(), n.typeCondition);
        if (Ne1(r)) return r;
    }
}
function lr1(e) {
    let t = e.getSchema(), n = Object.create(null);
    for (let i of e.getDocument().definitions)Ge(i) && (n[i.name.value] = i);
    return {
        ScalarTypeExtension: r,
        ObjectTypeExtension: r,
        InterfaceTypeExtension: r,
        UnionTypeExtension: r,
        EnumTypeExtension: r,
        InputObjectTypeExtension: r
    };
    function r(i) {
        let o = i.name.value, s = n[o], a = t?.getType(o), u;
        if (s ? u = Ia[s.kind] : a && (u = ba(a)), u) {
            if (u !== i.kind) {
                let p = _a(i.kind);
                e.reportError(new f13(`Cannot extend non-${p} type "${o}".`, {
                    nodes: s ? [
                        s,
                        i
                    ] : i
                }));
            }
        } else {
            let p = Object.keys({
                ...n,
                ...t?.getTypeMap()
            }), l = Te1(o, p);
            e.reportError(new f13(`Cannot extend type "${o}" because it is not defined.` + ce4(l), {
                nodes: i.name
            }));
        }
    }
}
var Ia = {
    [c18.SCALAR_TYPE_DEFINITION]: c18.SCALAR_TYPE_EXTENSION,
    [c18.OBJECT_TYPE_DEFINITION]: c18.OBJECT_TYPE_EXTENSION,
    [c18.INTERFACE_TYPE_DEFINITION]: c18.INTERFACE_TYPE_EXTENSION,
    [c18.UNION_TYPE_DEFINITION]: c18.UNION_TYPE_EXTENSION,
    [c18.ENUM_TYPE_DEFINITION]: c18.ENUM_TYPE_EXTENSION,
    [c18.INPUT_OBJECT_TYPE_DEFINITION]: c18.INPUT_OBJECT_TYPE_EXTENSION
};
function ba(e) {
    if (ee5(e)) return c18.SCALAR_TYPE_EXTENSION;
    if (x29(e)) return c18.OBJECT_TYPE_EXTENSION;
    if (L12(e)) return c18.INTERFACE_TYPE_EXTENSION;
    if (P16(e)) return c18.UNION_TYPE_EXTENSION;
    if (U14(e)) return c18.ENUM_TYPE_EXTENSION;
    if (w17(e)) return c18.INPUT_OBJECT_TYPE_EXTENSION;
    V12(!1, "Unexpected type: " + h18(e));
}
function _a(e) {
    switch(e){
        case c18.SCALAR_TYPE_EXTENSION:
            return "scalar";
        case c18.OBJECT_TYPE_EXTENSION:
            return "object";
        case c18.INTERFACE_TYPE_EXTENSION:
            return "interface";
        case c18.UNION_TYPE_EXTENSION:
            return "union";
        case c18.ENUM_TYPE_EXTENSION:
            return "enum";
        case c18.INPUT_OBJECT_TYPE_EXTENSION:
            return "input object";
        default:
            V12(!1, "Unexpected kind: " + h18(e));
    }
}
function fr(e) {
    return {
        ...li(e),
        Field: {
            leave (t) {
                var n;
                let r = e.getFieldDef();
                if (!r) return !1;
                let i = new Set((n = t.arguments) === null || n === void 0 ? void 0 : n.map((o)=>o.name.value));
                for (let o of r.args)if (!i.has(o.name) && we(o)) {
                    let s = h18(o.type);
                    e.reportError(new f13(`Field "${r.name}" argument "${o.name}" of type "${s}" is required, but it was not provided.`, {
                        nodes: t
                    }));
                }
            }
        }
    };
}
function li(e) {
    var t;
    let n = Object.create(null), r = e.getSchema(), i = (t = r?.getDirectives()) !== null && t !== void 0 ? t : ve1;
    for (let a of i)n[a.name] = ue4(a.args.filter(we), (u)=>u.name);
    let o = e.getDocument().definitions;
    for (let a of o)if (a.kind === c18.DIRECTIVE_DEFINITION) {
        var s;
        let u = (s = a.arguments) !== null && s !== void 0 ? s : [];
        n[a.name.value] = ue4(u.filter(Oa), (p)=>p.name.value);
    }
    return {
        Directive: {
            leave (a) {
                let u = a.name.value, p = n[u];
                if (p) {
                    var l;
                    let d = (l = a.arguments) !== null && l !== void 0 ? l : [], m = new Set(d.map((E)=>E.name.value));
                    for (let [E, N] of Object.entries(p))if (!m.has(E)) {
                        let C = mt2(N.type) ? h18(N.type) : k11(N.type);
                        e.reportError(new f13(`Directive "@${u}" argument "${E}" of type "${C}" is required, but it was not provided.`, {
                            nodes: a
                        }));
                    }
                }
            }
        }
    };
}
function Oa(e) {
    return e.type.kind === c18.NON_NULL_TYPE && e.defaultValue == null;
}
function dr(e) {
    return {
        Field (t) {
            let n = e.getType(), r = t.selectionSet;
            if (n) {
                if (ie5(J12(n))) {
                    if (r) {
                        let i = t.name.value, o = h18(n);
                        e.reportError(new f13(`Field "${i}" must not have a selection since type "${o}" has no subfields.`, {
                            nodes: r
                        }));
                    }
                } else if (!r) {
                    let i = t.name.value, o = h18(n);
                    e.reportError(new f13(`Field "${i}" of type "${o}" must have a selection of subfields. Did you mean "${i} { ... }"?`, {
                        nodes: t
                    }));
                }
            }
        }
    };
}
function mr(e) {
    return e.map((t)=>typeof t == "number" ? "[" + t.toString() + "]" : "." + t).join("");
}
function Ke(e, t, n) {
    return {
        prev: e,
        key: t,
        typename: n
    };
}
function se4(e) {
    let t = [], n = e;
    for(; n;)t.push(n.key), n = n.prev;
    return t.reverse();
}
function hr(e, t, n = Da) {
    return mn(e, t, n, void 0);
}
function Da(e, t, n) {
    let r = "Invalid value " + h18(t);
    throw e.length > 0 && (r += ` at "value${mr(e)}"`), n.message = r + ": " + n.message, n;
}
function mn(e, t, n, r) {
    if (O19(t)) {
        if (e != null) return mn(e, t.ofType, n, r);
        n(se4(r), e, new f13(`Expected non-nullable type "${h18(t)}" not to be null.`));
        return;
    }
    if (e == null) return null;
    if (F18(t)) {
        let i = t.ofType;
        return kt1(e) ? Array.from(e, (o, s)=>{
            let a = Ke(r, s, void 0);
            return mn(o, i, n, a);
        }) : [
            mn(e, i, n, r)
        ];
    }
    if (w17(t)) {
        if (!H11(e)) {
            n(se4(r), e, new f13(`Expected type "${t.name}" to be an object.`));
            return;
        }
        let i = {}, o = t.getFields();
        for (let s of Object.values(o)){
            let a = e[s.name];
            if (a === void 0) {
                if (s.defaultValue !== void 0) i[s.name] = s.defaultValue;
                else if (O19(s.type)) {
                    let u = h18(s.type);
                    n(se4(r), e, new f13(`Field "${s.name}" of required type "${u}" was not provided.`));
                }
                continue;
            }
            i[s.name] = mn(a, s.type, n, Ke(r, s.name, t.name));
        }
        for (let s of Object.keys(e))if (!o[s]) {
            let a = Te1(s, Object.keys(t.getFields()));
            n(se4(r), e, new f13(`Field "${s}" is not defined by type "${t.name}".` + ce4(a)));
        }
        return i;
    }
    if (ie5(t)) {
        let i;
        try {
            i = t.parseValue(e);
        } catch (o) {
            o instanceof f13 ? n(se4(r), e, o) : n(se4(r), e, new f13(`Expected type "${t.name}". ` + o.message, {
                originalError: o
            }));
            return;
        }
        return i === void 0 && n(se4(r), e, new f13(`Expected type "${t.name}".`)), i;
    }
    V12(!1, "Unexpected input type: " + h18(t));
}
function ge(e, t, n) {
    if (e) {
        if (e.kind === c18.VARIABLE) {
            let r = e.name.value;
            if (n == null || n[r] === void 0) return;
            let i = n[r];
            return i === null && O19(t) ? void 0 : i;
        }
        if (O19(t)) return e.kind === c18.NULL ? void 0 : ge(e, t.ofType, n);
        if (e.kind === c18.NULL) return null;
        if (F18(t)) {
            let r = t.ofType;
            if (e.kind === c18.LIST) {
                let o = [];
                for (let s of e.values)if (xo(s, n)) {
                    if (O19(r)) return;
                    o.push(null);
                } else {
                    let a = ge(s, r, n);
                    if (a === void 0) return;
                    o.push(a);
                }
                return o;
            }
            let i = ge(e, r, n);
            return i === void 0 ? void 0 : [
                i
            ];
        }
        if (w17(t)) {
            if (e.kind !== c18.OBJECT) return;
            let r = Object.create(null), i = ue4(e.fields, (o)=>o.name.value);
            for (let o of Object.values(t.getFields())){
                let s = i[o.name];
                if (!s || xo(s.value, n)) {
                    if (o.defaultValue !== void 0) r[o.name] = o.defaultValue;
                    else if (O19(o.type)) return;
                    continue;
                }
                let a = ge(s.value, o.type, n);
                if (a === void 0) return;
                r[o.name] = a;
            }
            return r;
        }
        if (ie5(t)) {
            let r;
            try {
                r = t.parseLiteral(e, n);
            } catch  {
                return;
            }
            return r === void 0 ? void 0 : r;
        }
        V12(!1, "Unexpected input type: " + h18(t));
    }
}
function xo(e, t) {
    return e.kind === c18.VARIABLE && (t == null || t[e.name.value] === void 0);
}
function Tr(e, t, n, r) {
    let i = [], o = r?.maxErrors;
    try {
        let s = Sa(e, t, n, (a)=>{
            if (o != null && i.length >= o) throw new f13("Too many errors processing variables, error limit reached. Execution aborted.");
            i.push(a);
        });
        if (i.length === 0) return {
            coerced: s
        };
    } catch (s) {
        i.push(s);
    }
    return {
        errors: i
    };
}
function Sa(e, t, n, r) {
    let i = {};
    for (let o of t){
        let s = o.variable.name.value, a = K11(e, o.type);
        if (!te5(a)) {
            let p = k11(o.type);
            r(new f13(`Variable "$${s}" expected value of type "${p}" which cannot be used as an input type.`, {
                nodes: o.type
            }));
            continue;
        }
        if (!Ro(n, s)) {
            if (o.defaultValue) i[s] = ge(o.defaultValue, a);
            else if (O19(a)) {
                let p = h18(a);
                r(new f13(`Variable "$${s}" of required type "${p}" was not provided.`, {
                    nodes: o
                }));
            }
            continue;
        }
        let u = n[s];
        if (u === null && O19(a)) {
            let p = h18(a);
            r(new f13(`Variable "$${s}" of non-null type "${p}" must not be null.`, {
                nodes: o
            }));
            continue;
        }
        i[s] = hr(u, a, (p, l, d)=>{
            let m = `Variable "$${s}" got invalid value ` + h18(l);
            p.length > 0 && (m += ` at "${s}${mr(p)}"`), r(new f13(m + "; " + d.message, {
                nodes: o,
                originalError: d
            }));
        });
    }
    return i;
}
function vt2(e, t, n) {
    var r;
    let i = {}, o = (r = t.arguments) !== null && r !== void 0 ? r : [], s = ue4(o, (a)=>a.name.value);
    for (let a of e.args){
        let u = a.name, p = a.type, l = s[u];
        if (!l) {
            if (a.defaultValue !== void 0) i[u] = a.defaultValue;
            else if (O19(p)) throw new f13(`Argument "${u}" of required type "${h18(p)}" was not provided.`, {
                nodes: t
            });
            continue;
        }
        let d = l.value, m = d.kind === c18.NULL;
        if (d.kind === c18.VARIABLE) {
            let N = d.name.value;
            if (n == null || !Ro(n, N)) {
                if (a.defaultValue !== void 0) i[u] = a.defaultValue;
                else if (O19(p)) throw new f13(`Argument "${u}" of required type "${h18(p)}" was provided the variable "$${N}" which was not provided a runtime value.`, {
                    nodes: d
                });
                continue;
            }
            m = n[N] == null;
        }
        if (m && O19(p)) throw new f13(`Argument "${u}" of non-null type "${h18(p)}" must not be null.`, {
            nodes: d
        });
        let E = ge(d, p, n);
        if (E === void 0) throw new f13(`Argument "${u}" has invalid value ${k11(d)}.`, {
            nodes: d
        });
        i[u] = E;
    }
    return i;
}
function ct2(e, t, n) {
    var r;
    let i = (r = t.directives) === null || r === void 0 ? void 0 : r.find((o)=>o.name.value === e.name);
    if (i) return vt2(e, i, n);
}
function Ro(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
function Pt1(e, t, n, r, i) {
    let o = new Map;
    return yr1(e, t, n, r, i, o, new Set), o;
}
function wo(e, t, n, r, i) {
    let o = new Map, s = new Set;
    for (let a of i)a.selectionSet && yr1(e, t, n, r, a.selectionSet, o, s);
    return o;
}
function yr1(e, t, n, r, i, o, s) {
    for (let a of i.selections)switch(a.kind){
        case c18.FIELD:
            {
                if (!fi(n, a)) continue;
                let u = Aa(a), p = o.get(u);
                p !== void 0 ? p.push(a) : o.set(u, [
                    a
                ]);
                break;
            }
        case c18.INLINE_FRAGMENT:
            {
                if (!fi(n, a) || !Lo(e, a, r)) continue;
                yr1(e, t, n, r, a.selectionSet, o, s);
                break;
            }
        case c18.FRAGMENT_SPREAD:
            {
                let u = a.name.value;
                if (s.has(u) || !fi(n, a)) continue;
                s.add(u);
                let p = t[u];
                if (!p || !Lo(e, p, r)) continue;
                yr1(e, t, n, r, p.selectionSet, o, s);
                break;
            }
    }
}
function fi(e, t) {
    let n = ct2(nn, t, e);
    if (n?.if === !0) return !1;
    let r = ct2(tn, t, e);
    return r?.if !== !1;
}
function Lo(e, t, n) {
    let r = t.typeCondition;
    if (!r) return !0;
    let i = K11(e, r);
    return i === n ? !0 : le3(i) ? e.isSubType(i, n) : !1;
}
function Aa(e) {
    return e.alias ? e.alias.value : e.name.value;
}
function Er(e) {
    return {
        OperationDefinition (t) {
            if (t.operation === "subscription") {
                let n = e.getSchema(), r = n.getSubscriptionType();
                if (r) {
                    let i = t.name ? t.name.value : null, o = Object.create(null), s = e.getDocument(), a = Object.create(null);
                    for (let p of s.definitions)p.kind === c18.FRAGMENT_DEFINITION && (a[p.name.value] = p);
                    let u = Pt1(n, a, o, r, t.selectionSet);
                    if (u.size > 1) {
                        let d = [
                            ...u.values()
                        ].slice(1).flat();
                        e.reportError(new f13(i != null ? `Subscription "${i}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.", {
                            nodes: d
                        }));
                    }
                    for (let p of u.values())p[0].name.value.startsWith("__") && e.reportError(new f13(i != null ? `Subscription "${i}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.", {
                        nodes: p
                    }));
                }
            }
        }
    };
}
function Gt(e, t) {
    let n = new Map;
    for (let r of e){
        let i = t(r), o = n.get(i);
        o === void 0 ? n.set(i, [
            r
        ]) : o.push(r);
    }
    return n;
}
function vr(e) {
    return {
        DirectiveDefinition (r) {
            var i;
            let o = (i = r.arguments) !== null && i !== void 0 ? i : [];
            return n(`@${r.name.value}`, o);
        },
        InterfaceTypeDefinition: t,
        InterfaceTypeExtension: t,
        ObjectTypeDefinition: t,
        ObjectTypeExtension: t
    };
    function t(r) {
        var i;
        let o = r.name.value, s = (i = r.fields) !== null && i !== void 0 ? i : [];
        for (let u of s){
            var a;
            let p = u.name.value, l = (a = u.arguments) !== null && a !== void 0 ? a : [];
            n(`${o}.${p}`, l);
        }
        return !1;
    }
    function n(r, i) {
        let o = Gt(i, (s)=>s.name.value);
        for (let [s, a] of o)a.length > 1 && e.reportError(new f13(`Argument "${r}(${s}:)" can only be defined once.`, {
            nodes: a.map((u)=>u.name)
        }));
        return !1;
    }
}
function hn(e) {
    return {
        Field: t,
        Directive: t
    };
    function t(n) {
        var r;
        let i = (r = n.arguments) !== null && r !== void 0 ? r : [], o = Gt(i, (s)=>s.name.value);
        for (let [s, a] of o)a.length > 1 && e.reportError(new f13(`There can be only one argument named "${s}".`, {
            nodes: a.map((u)=>u.name)
        }));
    }
}
function Nr(e) {
    let t = Object.create(null), n = e.getSchema();
    return {
        DirectiveDefinition (r) {
            let i = r.name.value;
            if (n != null && n.getDirective(i)) {
                e.reportError(new f13(`Directive "@${i}" already exists in the schema. It cannot be redefined.`, {
                    nodes: r.name
                }));
                return;
            }
            return t[i] ? e.reportError(new f13(`There can be only one directive named "@${i}".`, {
                nodes: [
                    t[i],
                    r.name
                ]
            })) : t[i] = r.name, !1;
        }
    };
}
function Tn(e) {
    let t = Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : ve1;
    for (let a of r)t[a.name] = !a.isRepeatable;
    let i = e.getDocument().definitions;
    for (let a of i)a.kind === c18.DIRECTIVE_DEFINITION && (t[a.name.value] = !a.repeatable);
    let o = Object.create(null), s = Object.create(null);
    return {
        enter (a) {
            if (!("directives" in a) || !a.directives) return;
            let u;
            if (a.kind === c18.SCHEMA_DEFINITION || a.kind === c18.SCHEMA_EXTENSION) u = o;
            else if (Ge(a) || Et1(a)) {
                let p = a.name.value;
                u = s[p], u === void 0 && (s[p] = u = Object.create(null));
            } else u = Object.create(null);
            for (let p of a.directives){
                let l = p.name.value;
                t[l] && (u[l] ? e.reportError(new f13(`The directive "@${l}" can only be used once at this location.`, {
                    nodes: [
                        u[l],
                        p
                    ]
                })) : u[l] = p);
            }
        }
    };
}
function gr(e) {
    let t = e.getSchema(), n = t ? t.getTypeMap() : Object.create(null), r = Object.create(null);
    return {
        EnumTypeDefinition: i,
        EnumTypeExtension: i
    };
    function i(o) {
        var s;
        let a = o.name.value;
        r[a] || (r[a] = Object.create(null));
        let u = (s = o.values) !== null && s !== void 0 ? s : [], p = r[a];
        for (let l of u){
            let d = l.name.value, m = n[a];
            U14(m) && m.getValue(d) ? e.reportError(new f13(`Enum value "${a}.${d}" already exists in the schema. It cannot also be defined in this type extension.`, {
                nodes: l.name
            })) : p[d] ? e.reportError(new f13(`Enum value "${a}.${d}" can only be defined once.`, {
                nodes: [
                    p[d],
                    l.name
                ]
            })) : p[d] = l.name;
        }
        return !1;
    }
}
function Ir(e) {
    let t = e.getSchema(), n = t ? t.getTypeMap() : Object.create(null), r = Object.create(null);
    return {
        InputObjectTypeDefinition: i,
        InputObjectTypeExtension: i,
        InterfaceTypeDefinition: i,
        InterfaceTypeExtension: i,
        ObjectTypeDefinition: i,
        ObjectTypeExtension: i
    };
    function i(o) {
        var s;
        let a = o.name.value;
        r[a] || (r[a] = Object.create(null));
        let u = (s = o.fields) !== null && s !== void 0 ? s : [], p = r[a];
        for (let l of u){
            let d = l.name.value;
            xa(n[a], d) ? e.reportError(new f13(`Field "${a}.${d}" already exists in the schema. It cannot also be defined in this type extension.`, {
                nodes: l.name
            })) : p[d] ? e.reportError(new f13(`Field "${a}.${d}" can only be defined once.`, {
                nodes: [
                    p[d],
                    l.name
                ]
            })) : p[d] = l.name;
        }
        return !1;
    }
}
function xa(e, t) {
    return x29(e) || L12(e) || w17(e) ? e.getFields()[t] != null : !1;
}
function br(e) {
    let t = Object.create(null);
    return {
        OperationDefinition: ()=>!1,
        FragmentDefinition (n) {
            let r = n.name.value;
            return t[r] ? e.reportError(new f13(`There can be only one fragment named "${r}".`, {
                nodes: [
                    t[r],
                    n.name
                ]
            })) : t[r] = n.name, !1;
        }
    };
}
function yn(e) {
    let t = [], n = Object.create(null);
    return {
        ObjectValue: {
            enter () {
                t.push(n), n = Object.create(null);
            },
            leave () {
                let r = t.pop();
                r || V12(!1), n = r;
            }
        },
        ObjectField (r) {
            let i = r.name.value;
            n[i] ? e.reportError(new f13(`There can be only one input field named "${i}".`, {
                nodes: [
                    n[i],
                    r.name
                ]
            })) : n[i] = r.name;
        }
    };
}
function _r(e) {
    let t = Object.create(null);
    return {
        OperationDefinition (n) {
            let r = n.name;
            return r && (t[r.value] ? e.reportError(new f13(`There can be only one operation named "${r.value}".`, {
                nodes: [
                    t[r.value],
                    r
                ]
            })) : t[r.value] = r), !1;
        },
        FragmentDefinition: ()=>!1
    };
}
function Or(e) {
    let t = e.getSchema(), n = Object.create(null), r = t ? {
        query: t.getQueryType(),
        mutation: t.getMutationType(),
        subscription: t.getSubscriptionType()
    } : {};
    return {
        SchemaDefinition: i,
        SchemaExtension: i
    };
    function i(o) {
        var s;
        let a = (s = o.operationTypes) !== null && s !== void 0 ? s : [];
        for (let u of a){
            let p = u.operation, l = n[p];
            r[p] ? e.reportError(new f13(`Type for ${p} already defined in the schema. It cannot be redefined.`, {
                nodes: u
            })) : l ? e.reportError(new f13(`There can be only one ${p} type in schema.`, {
                nodes: [
                    l,
                    u
                ]
            })) : n[p] = u;
        }
        return !1;
    }
}
function Dr(e) {
    let t = Object.create(null), n = e.getSchema();
    return {
        ScalarTypeDefinition: r,
        ObjectTypeDefinition: r,
        InterfaceTypeDefinition: r,
        UnionTypeDefinition: r,
        EnumTypeDefinition: r,
        InputObjectTypeDefinition: r
    };
    function r(i) {
        let o = i.name.value;
        if (n != null && n.getType(o)) {
            e.reportError(new f13(`Type "${o}" already exists in the schema. It cannot also be defined in this type definition.`, {
                nodes: i.name
            }));
            return;
        }
        return t[o] ? e.reportError(new f13(`There can be only one type named "${o}".`, {
            nodes: [
                t[o],
                i.name
            ]
        })) : t[o] = i.name, !1;
    }
}
function Sr(e) {
    return {
        OperationDefinition (t) {
            var n;
            let r = (n = t.variableDefinitions) !== null && n !== void 0 ? n : [], i = Gt(r, (o)=>o.variable.name.value);
            for (let [o, s] of i)s.length > 1 && e.reportError(new f13(`There can be only one variable named "$${o}".`, {
                nodes: s.map((a)=>a.variable.name)
            }));
        }
    };
}
function Ar(e) {
    return {
        ListValue (t) {
            let n = wt1(e.getParentInputType());
            if (!F18(n)) return Nt1(e, t), !1;
        },
        ObjectValue (t) {
            let n = J12(e.getInputType());
            if (!w17(n)) return Nt1(e, t), !1;
            let r = ue4(t.fields, (i)=>i.name.value);
            for (let i of Object.values(n.getFields()))if (!r[i.name] && nt2(i)) {
                let s = h18(i.type);
                e.reportError(new f13(`Field "${n.name}.${i.name}" of required type "${s}" was not provided.`, {
                    nodes: t
                }));
            }
        },
        ObjectField (t) {
            let n = J12(e.getParentInputType());
            if (!e.getInputType() && w17(n)) {
                let i = Te1(t.name.value, Object.keys(n.getFields()));
                e.reportError(new f13(`Field "${t.name.value}" is not defined by type "${n.name}".` + ce4(i), {
                    nodes: t
                }));
            }
        },
        NullValue (t) {
            let n = e.getInputType();
            O19(n) && e.reportError(new f13(`Expected value of type "${h18(n)}", found ${k11(t)}.`, {
                nodes: t
            }));
        },
        EnumValue: (t)=>Nt1(e, t),
        IntValue: (t)=>Nt1(e, t),
        FloatValue: (t)=>Nt1(e, t),
        StringValue: (t)=>Nt1(e, t),
        BooleanValue: (t)=>Nt1(e, t)
    };
}
function Nt1(e, t) {
    let n = e.getInputType();
    if (!n) return;
    let r = J12(n);
    if (!ie5(r)) {
        let i = h18(n);
        e.reportError(new f13(`Expected value of type "${i}", found ${k11(t)}.`, {
            nodes: t
        }));
        return;
    }
    try {
        if (r.parseLiteral(t, void 0) === void 0) {
            let o = h18(n);
            e.reportError(new f13(`Expected value of type "${o}", found ${k11(t)}.`, {
                nodes: t
            }));
        }
    } catch (i) {
        let o = h18(n);
        i instanceof f13 ? e.reportError(i) : e.reportError(new f13(`Expected value of type "${o}", found ${k11(t)}; ` + i.message, {
            nodes: t,
            originalError: i
        }));
    }
}
function xr(e) {
    return {
        VariableDefinition (t) {
            let n = K11(e.getSchema(), t.type);
            if (n !== void 0 && !te5(n)) {
                let r = t.variable.name.value, i = k11(t.type);
                e.reportError(new f13(`Variable "$${r}" cannot be non-input type "${i}".`, {
                    nodes: t.type
                }));
            }
        }
    };
}
function Rr(e) {
    let t = Object.create(null);
    return {
        OperationDefinition: {
            enter () {
                t = Object.create(null);
            },
            leave (n) {
                let r = e.getRecursiveVariableUsages(n);
                for (let { node: i, type: o, defaultValue: s } of r){
                    let a = i.name.value, u = t[a];
                    if (u && o) {
                        let p = e.getSchema(), l = K11(p, u.type);
                        if (l && !Ra(p, l, u.defaultValue, o, s)) {
                            let d = h18(l), m = h18(o);
                            e.reportError(new f13(`Variable "$${a}" of type "${d}" used in position expecting type "${m}".`, {
                                nodes: [
                                    u,
                                    i
                                ]
                            }));
                        }
                    }
                }
            }
        },
        VariableDefinition (n) {
            t[n.variable.name.value] = n;
        }
    };
}
function Ra(e, t, n, r, i) {
    if (O19(r) && !O19(t)) {
        if (!(n != null && n.kind !== c18.NULL) && !(i !== void 0)) return !1;
        let a = r.ofType;
        return Qe(e, t, a);
    }
    return Qe(e, t, r);
}
var Lr = Object.freeze([
    Xn,
    _r,
    er1,
    Er,
    dn,
    Hn,
    xr,
    dr,
    zn,
    br,
    Zn,
    ir1,
    pr1,
    nr,
    Sr,
    rr1,
    or1,
    fn,
    Tn,
    Wn,
    hn,
    Ar,
    fr,
    Rr,
    ur1,
    yn
]), Fo = Object.freeze([
    tr1,
    Or,
    Dr,
    gr,
    Ir,
    vr,
    Nr,
    dn,
    fn,
    Tn,
    lr1,
    si,
    hn,
    yn,
    li
]);
var wr = class {
    constructor(t, n){
        this._ast = t, this._fragments = void 0, this._fragmentSpreads = new Map, this._recursivelyReferencedFragments = new Map, this._onError = n;
    }
    get [Symbol.toStringTag]() {
        return "ASTValidationContext";
    }
    reportError(t) {
        this._onError(t);
    }
    getDocument() {
        return this._ast;
    }
    getFragment(t) {
        let n;
        if (this._fragments) n = this._fragments;
        else {
            n = Object.create(null);
            for (let r of this.getDocument().definitions)r.kind === c18.FRAGMENT_DEFINITION && (n[r.name.value] = r);
            this._fragments = n;
        }
        return n[t];
    }
    getFragmentSpreads(t) {
        let n = this._fragmentSpreads.get(t);
        if (!n) {
            n = [];
            let r = [
                t
            ], i;
            for(; i = r.pop();)for (let o of i.selections)o.kind === c18.FRAGMENT_SPREAD ? n.push(o) : o.selectionSet && r.push(o.selectionSet);
            this._fragmentSpreads.set(t, n);
        }
        return n;
    }
    getRecursivelyReferencedFragments(t) {
        let n = this._recursivelyReferencedFragments.get(t);
        if (!n) {
            n = [];
            let r = Object.create(null), i = [
                t.selectionSet
            ], o;
            for(; o = i.pop();)for (let s of this.getFragmentSpreads(o)){
                let a = s.name.value;
                if (r[a] !== !0) {
                    r[a] = !0;
                    let u = this.getFragment(a);
                    u && (n.push(u), i.push(u.selectionSet));
                }
            }
            this._recursivelyReferencedFragments.set(t, n);
        }
        return n;
    }
}, Fr = class extends wr {
    constructor(t, n, r){
        super(t, r), this._schema = n;
    }
    get [Symbol.toStringTag]() {
        return "SDLValidationContext";
    }
    getSchema() {
        return this._schema;
    }
}, Qt1 = class extends wr {
    constructor(t, n, r, i){
        super(n, i), this._schema = t, this._typeInfo = r, this._variableUsages = new Map, this._recursiveVariableUsages = new Map;
    }
    get [Symbol.toStringTag]() {
        return "ValidationContext";
    }
    getSchema() {
        return this._schema;
    }
    getVariableUsages(t) {
        let n = this._variableUsages.get(t);
        if (!n) {
            let r = [], i = new at4(this._schema);
            Me(t, Mt(i, {
                VariableDefinition: ()=>!1,
                Variable (o) {
                    r.push({
                        node: o,
                        type: i.getInputType(),
                        defaultValue: i.getDefaultValue()
                    });
                }
            })), n = r, this._variableUsages.set(t, n);
        }
        return n;
    }
    getRecursiveVariableUsages(t) {
        let n = this._recursiveVariableUsages.get(t);
        if (!n) {
            n = this.getVariableUsages(t);
            for (let r of this.getRecursivelyReferencedFragments(t))n = n.concat(this.getVariableUsages(r));
            this._recursiveVariableUsages.set(t, n);
        }
        return n;
    }
    getType() {
        return this._typeInfo.getType();
    }
    getParentType() {
        return this._typeInfo.getParentType();
    }
    getInputType() {
        return this._typeInfo.getInputType();
    }
    getParentInputType() {
        return this._typeInfo.getParentInputType();
    }
    getFieldDef() {
        return this._typeInfo.getFieldDef();
    }
    getDirective() {
        return this._typeInfo.getDirective();
    }
    getArgument() {
        return this._typeInfo.getArgument();
    }
    getEnumValue() {
        return this._typeInfo.getEnumValue();
    }
};
function kr(e, t, n = Lr, r, i = new at4(e)) {
    var o;
    let s = (o = r?.maxErrors) !== null && o !== void 0 ? o : 100;
    t || S15(!1, "Must provide document."), Ut1(e);
    let a = Object.freeze({}), u = [], p = new Qt1(e, t, i, (d)=>{
        if (u.length >= s) throw u.push(new f13("Too many validation errors, error limit reached. Validation aborted.")), a;
        u.push(d);
    }), l = Xt1(n.map((d)=>d(p)));
    try {
        Me(t, Mt(i, l));
    } catch (d) {
        if (d !== a) throw d;
    }
    return u;
}
function ko(e, t, n = Fo) {
    let r = [], i = new Fr(e, t, (s)=>{
        r.push(s);
    }), o = n.map((s)=>s(i));
    return Me(e, Xt1(o)), r;
}
function Vo(e) {
    let t = ko(e);
    if (t.length !== 0) throw new Error(t.map((n)=>n.message).join(`

`));
}
function Co(e) {
    let t;
    return function(r, i, o) {
        t === void 0 && (t = new WeakMap);
        let s = t.get(r);
        s === void 0 && (s = new WeakMap, t.set(r, s));
        let a = s.get(i);
        a === void 0 && (a = new WeakMap, s.set(i, a));
        let u = a.get(o);
        return u === void 0 && (u = e(r, i, o), a.set(o, u)), u;
    };
}
function di(e) {
    return Promise.all(Object.values(e)).then((t)=>{
        let n = Object.create(null);
        for (let [r, i] of Object.keys(e).entries())n[i] = t[r];
        return n;
    });
}
function Uo(e, t, n) {
    let r = n;
    for (let i of e)r = ae3(r) ? r.then((o)=>t(o, i)) : t(r, i);
    return r;
}
function Mo(e) {
    return e instanceof Error ? e : new mi(e);
}
var mi = class extends Error {
    constructor(t){
        super("Unexpected error value: " + h18(t)), this.name = "NonErrorThrown", this.thrownValue = t;
    }
};
function Xe(e, t, n) {
    var r;
    let i = Mo(e);
    return La(i) ? i : new f13(i.message, {
        nodes: (r = i.nodes) !== null && r !== void 0 ? r : t,
        source: i.source,
        positions: i.positions,
        path: n,
        originalError: i
    });
}
function La(e) {
    return Array.isArray(e.path);
}
var wa = Co((e, t, n)=>wo(e.schema, e.fragments, e.variableValues, t, n));
function gt1(e) {
    arguments.length < 2 || S15(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
    let { schema: t, document: n, variableValues: r, rootValue: i } = e;
    Ti(t, n, r);
    let o = yi(e);
    if (!("schema" in o)) return {
        errors: o
    };
    try {
        let { operation: s } = o, a = Fa(o, s, i);
        return ae3(a) ? a.then((u)=>Vr(u, o.errors), (u)=>(o.errors.push(u), Vr(null, o.errors))) : Vr(a, o.errors);
    } catch (s) {
        return o.errors.push(s), Vr(null, o.errors);
    }
}
function Vr(e, t) {
    return t.length === 0 ? {
        data: e
    } : {
        errors: t,
        data: e
    };
}
function Ti(e, t, n) {
    t || S15(!1, "Must provide document."), Ut1(e), n == null || H11(n) || S15(!1, "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.");
}
function yi(e) {
    var t, n;
    let { schema: r, document: i, rootValue: o, contextValue: s, variableValues: a, operationName: u, fieldResolver: p, typeResolver: l, subscribeFieldResolver: d } = e, m, E = Object.create(null);
    for (let M of i.definitions)switch(M.kind){
        case c18.OPERATION_DEFINITION:
            if (u == null) {
                if (m !== void 0) return [
                    new f13("Must provide operation name if query contains multiple operations.")
                ];
                m = M;
            } else ((t = M.name) === null || t === void 0 ? void 0 : t.value) === u && (m = M);
            break;
        case c18.FRAGMENT_DEFINITION:
            E[M.name.value] = M;
            break;
        default:
    }
    if (!m) return u != null ? [
        new f13(`Unknown operation named "${u}".`)
    ] : [
        new f13("Must provide an operation.")
    ];
    let N = (n = m.variableDefinitions) !== null && n !== void 0 ? n : [], C = Tr(r, N, a ?? {}, {
        maxErrors: 50
    });
    return C.errors ? C.errors : {
        schema: r,
        fragments: E,
        rootValue: o,
        contextValue: s,
        operation: m,
        variableValues: C.coerced,
        fieldResolver: p ?? Ur,
        typeResolver: l ?? vi,
        subscribeFieldResolver: d ?? Ur,
        errors: []
    };
}
function Fa(e, t, n) {
    let r = e.schema.getRootType(t.operation);
    if (r == null) throw new f13(`Schema is not configured to execute ${t.operation} operation.`, {
        nodes: t
    });
    let i = Pt1(e.schema, e.fragments, e.variableValues, r, t.selectionSet), o = void 0;
    switch(t.operation){
        case Q9.QUERY:
            return $r(e, r, n, o, i);
        case Q9.MUTATION:
            return ka(e, r, n, o, i);
        case Q9.SUBSCRIPTION:
            return $r(e, r, n, o, i);
    }
}
function ka(e, t, n, r, i) {
    return Uo(i.entries(), (o, [s, a])=>{
        let u = Ke(r, s, t.name), p = Go(e, t, n, a, u);
        return p === void 0 ? o : ae3(p) ? p.then((l)=>(o[s] = l, o)) : (o[s] = p, o);
    }, Object.create(null));
}
function $r(e, t, n, r, i) {
    let o = Object.create(null), s = !1;
    try {
        for (let [a, u] of i.entries()){
            let p = Ke(r, a, t.name), l = Go(e, t, n, u, p);
            l !== void 0 && (o[a] = l, ae3(l) && (s = !0));
        }
    } catch (a) {
        if (s) return di(o).finally(()=>{
            throw a;
        });
        throw a;
    }
    return s ? di(o) : o;
}
function Go(e, t, n, r, i) {
    var o;
    let s = Ni(e.schema, t, r[0]);
    if (!s) return;
    let a = s.type, u = (o = s.resolve) !== null && o !== void 0 ? o : e.fieldResolver, p = Ei(e, s, r, t, i);
    try {
        let l = vt2(s, r[0], e.variableValues), d = e.contextValue, m = u(n, l, d, p), E;
        return ae3(m) ? E = m.then((N)=>En(e, a, r, p, i, N)) : E = En(e, a, r, p, i, m), ae3(E) ? E.then(void 0, (N)=>{
            let C = Xe(N, r, se4(i));
            return Cr(C, a, e);
        }) : E;
    } catch (l) {
        let d = Xe(l, r, se4(i));
        return Cr(d, a, e);
    }
}
function Ei(e, t, n, r, i) {
    return {
        fieldName: t.name,
        fieldNodes: n,
        returnType: t.type,
        parentType: r,
        path: i,
        schema: e.schema,
        fragments: e.fragments,
        rootValue: e.rootValue,
        operation: e.operation,
        variableValues: e.variableValues
    };
}
function Cr(e, t, n) {
    if (O19(t)) throw e;
    return n.errors.push(e), null;
}
function En(e, t, n, r, i, o) {
    if (o instanceof Error) throw o;
    if (O19(t)) {
        let s = En(e, t.ofType, n, r, i, o);
        if (s === null) throw new Error(`Cannot return null for non-nullable field ${r.parentType.name}.${r.fieldName}.`);
        return s;
    }
    if (o == null) return null;
    if (F18(t)) return Va(e, t, n, r, i, o);
    if (ie5(t)) return $a(t, o);
    if (le3(t)) return Ca(e, t, n, r, i, o);
    if (x29(t)) return hi(e, t, n, r, i, o);
    V12(!1, "Cannot complete value of unexpected output type: " + h18(t));
}
function Va(e, t, n, r, i, o) {
    if (!kt1(o)) throw new f13(`Expected Iterable, but did not find one for field "${r.parentType.name}.${r.fieldName}".`);
    let s = t.ofType, a = !1, u = Array.from(o, (p, l)=>{
        let d = Ke(i, l, void 0);
        try {
            let m;
            return ae3(p) ? m = p.then((E)=>En(e, s, n, r, d, E)) : m = En(e, s, n, r, d, p), ae3(m) ? (a = !0, m.then(void 0, (E)=>{
                let N = Xe(E, n, se4(d));
                return Cr(N, s, e);
            })) : m;
        } catch (m) {
            let E = Xe(m, n, se4(d));
            return Cr(E, s, e);
        }
    });
    return a ? Promise.all(u) : u;
}
function $a(e, t) {
    let n = e.serialize(t);
    if (n == null) throw new Error(`Expected \`${h18(e)}.serialize(${h18(t)})\` to return non-nullable value, returned: ${h18(n)}`);
    return n;
}
function Ca(e, t, n, r, i, o) {
    var s;
    let a = (s = t.resolveType) !== null && s !== void 0 ? s : e.typeResolver, u = e.contextValue, p = a(o, u, r, t);
    return ae3(p) ? p.then((l)=>hi(e, jo(l, e, t, n, r, o), n, r, i, o)) : hi(e, jo(p, e, t, n, r, o), n, r, i, o);
}
function jo(e, t, n, r, i, o) {
    if (e == null) throw new f13(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${i.parentType.name}.${i.fieldName}". Either the "${n.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, r);
    if (x29(e)) throw new f13("Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.");
    if (typeof e != "string") throw new f13(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${i.parentType.name}.${i.fieldName}" with value ${h18(o)}, received "${h18(e)}".`);
    let s = t.schema.getType(e);
    if (s == null) throw new f13(`Abstract type "${n.name}" was resolved to a type "${e}" that does not exist inside the schema.`, {
        nodes: r
    });
    if (!x29(s)) throw new f13(`Abstract type "${n.name}" was resolved to a non-object type "${e}".`, {
        nodes: r
    });
    if (!t.schema.isSubType(n, s)) throw new f13(`Runtime Object type "${s.name}" is not a possible type for "${n.name}".`, {
        nodes: r
    });
    return s;
}
function hi(e, t, n, r, i, o) {
    let s = wa(e, t, n);
    if (t.isTypeOf) {
        let a = t.isTypeOf(o, e.contextValue, r);
        if (ae3(a)) return a.then((u)=>{
            if (!u) throw Po(t, o, n);
            return $r(e, t, o, i, s);
        });
        if (!a) throw Po(t, o, n);
    }
    return $r(e, t, o, i, s);
}
function Po(e, t, n) {
    return new f13(`Expected value of type "${e.name}" but got: ${h18(t)}.`, {
        nodes: n
    });
}
var vi = function(e, t, n, r) {
    if (H11(e) && typeof e.__typename == "string") return e.__typename;
    let i = n.schema.getPossibleTypes(r), o = [];
    for(let s = 0; s < i.length; s++){
        let a = i[s];
        if (a.isTypeOf) {
            let u = a.isTypeOf(e, t, n);
            if (ae3(u)) o[s] = u;
            else if (u) return a.name;
        }
    }
    if (o.length) return Promise.all(o).then((s)=>{
        for(let a = 0; a < s.length; a++)if (s[a]) return i[a].name;
    });
}, Ur = function(e, t, n, r) {
    if (H11(e) || typeof e == "function") {
        let i = e[r.fieldName];
        return typeof i == "function" ? e[r.fieldName](t, n, r) : i;
    }
};
function Ni(e, t, n) {
    let r = n.name.value;
    return r === it2.name && e.getQueryType() === t ? it2 : r === ot1.name && e.getQueryType() === t ? ot1 : r === st1.name ? st1 : t.getFields()[r];
}
function Ua(e) {
    return new Promise((t)=>t(Qo(e)));
}
function Qo(e) {
    arguments.length < 2 || S15(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
    let { schema: t, source: n, rootValue: r, contextValue: i, variableValues: o, operationName: s, fieldResolver: a, typeResolver: u } = e, p = cn(t);
    if (p.length > 0) return {
        errors: p
    };
    let l;
    try {
        l = Ze(n);
    } catch (m) {
        return {
            errors: [
                m
            ]
        };
    }
    let d = kr(t, l);
    return d.length > 0 ? {
        errors: d
    } : gt1({
        schema: t,
        document: l,
        rootValue: r,
        contextValue: i,
        variableValues: o,
        operationName: s,
        fieldResolver: a,
        typeResolver: u
    });
}
function bi(e, t, n) {
    var r, i, o, s;
    let a = [], u = Object.create(null), p = [], l, d = [];
    for (let y of t.definitions)if (y.kind === c18.SCHEMA_DEFINITION) l = y;
    else if (y.kind === c18.SCHEMA_EXTENSION) d.push(y);
    else if (Ge(y)) a.push(y);
    else if (Et1(y)) {
        let b = y.name.value, g = u[b];
        u[b] = g ? g.concat([
            y
        ]) : [
            y
        ];
    } else y.kind === c18.DIRECTIVE_DEFINITION && p.push(y);
    if (Object.keys(u).length === 0 && a.length === 0 && p.length === 0 && d.length === 0 && l == null) return e;
    let m = Object.create(null);
    for (let y of e.types)m[y.name] = $e(y);
    for (let y of a){
        var E;
        let b = y.name.value;
        m[b] = (E = Wo[b]) !== null && E !== void 0 ? E : _s(y);
    }
    let N = {
        query: e.query && M(e.query),
        mutation: e.mutation && M(e.mutation),
        subscription: e.subscription && M(e.subscription),
        ...l && be([
            l
        ]),
        ...be(d)
    };
    return {
        description: (r = l) === null || r === void 0 || (i = r.description) === null || i === void 0 ? void 0 : i.value,
        ...N,
        types: Object.values(m),
        directives: [
            ...e.directives.map(z),
            ...p.map(bs)
        ],
        extensions: Object.create(null),
        astNode: (o = l) !== null && o !== void 0 ? o : e.astNode,
        extensionASTNodes: e.extensionASTNodes.concat(d),
        assumeValid: (s = n?.assumeValid) !== null && s !== void 0 ? s : !1
    };
    function C(y) {
        return F18(y) ? new B15(C(y.ofType)) : O19(y) ? new A16(C(y.ofType)) : M(y);
    }
    function M(y) {
        return m[y.name];
    }
    function z(y) {
        let b = y.toConfig();
        return new de1({
            ...b,
            args: Ue(b.args, R)
        });
    }
    function $e(y) {
        if (Oe(y) || rt3(y)) return y;
        if (ee5(y)) return ut(y);
        if (x29(y)) return He(y);
        if (L12(y)) return It(y);
        if (P16(y)) return Qr(y);
        if (U14(y)) return Ie(y);
        if (w17(y)) return me(y);
        V12(!1, "Unexpected type: " + h18(y));
    }
    function me(y) {
        var b;
        let g = y.toConfig(), _ = (b = u[g.name]) !== null && b !== void 0 ? b : [];
        return new Re({
            ...g,
            fields: ()=>({
                    ...Ue(g.fields, (G)=>({
                            ...G,
                            type: C(G.type)
                        })),
                    ...wi(_)
                }),
            extensionASTNodes: g.extensionASTNodes.concat(_)
        });
    }
    function Ie(y) {
        var b;
        let g = y.toConfig(), _ = (b = u[y.name]) !== null && b !== void 0 ? b : [];
        return new Ee1({
            ...g,
            values: {
                ...g.values,
                ...Fi(_)
            },
            extensionASTNodes: g.extensionASTNodes.concat(_)
        });
    }
    function ut(y) {
        var b;
        let g = y.toConfig(), _ = (b = u[g.name]) !== null && b !== void 0 ? b : [], G = g.specifiedByURL;
        for (let Y of _){
            var ne;
            G = (ne = Zo(Y)) !== null && ne !== void 0 ? ne : G;
        }
        return new pe3({
            ...g,
            specifiedByURL: G,
            extensionASTNodes: g.extensionASTNodes.concat(_)
        });
    }
    function He(y) {
        var b;
        let g = y.toConfig(), _ = (b = u[g.name]) !== null && b !== void 0 ? b : [];
        return new re3({
            ...g,
            interfaces: ()=>[
                    ...y.getInterfaces().map(M),
                    ...In(_)
                ],
            fields: ()=>({
                    ...Ue(g.fields, v),
                    ...gn(_)
                }),
            extensionASTNodes: g.extensionASTNodes.concat(_)
        });
    }
    function It(y) {
        var b;
        let g = y.toConfig(), _ = (b = u[g.name]) !== null && b !== void 0 ? b : [];
        return new Ae({
            ...g,
            interfaces: ()=>[
                    ...y.getInterfaces().map(M),
                    ...In(_)
                ],
            fields: ()=>({
                    ...Ue(g.fields, v),
                    ...gn(_)
                }),
            extensionASTNodes: g.extensionASTNodes.concat(_)
        });
    }
    function Qr(y) {
        var b;
        let g = y.toConfig(), _ = (b = u[g.name]) !== null && b !== void 0 ? b : [];
        return new xe1({
            ...g,
            types: ()=>[
                    ...y.getTypes().map(M),
                    ...ki(_)
                ],
            extensionASTNodes: g.extensionASTNodes.concat(_)
        });
    }
    function v(y) {
        return {
            ...y,
            type: C(y.type),
            args: y.args && Ue(y.args, R)
        };
    }
    function R(y) {
        return {
            ...y,
            type: C(y.type)
        };
    }
    function be(y) {
        let b = {};
        for (let _ of y){
            var g;
            let G = (g = _.operationTypes) !== null && g !== void 0 ? g : [];
            for (let ne of G)b[ne.operation] = bt(ne.type);
        }
        return b;
    }
    function bt(y) {
        var b;
        let g = y.name.value, _ = (b = Wo[g]) !== null && b !== void 0 ? b : m[g];
        if (_ === void 0) throw new Error(`Unknown type: "${g}".`);
        return _;
    }
    function Bt(y) {
        return y.kind === c18.LIST_TYPE ? new B15(Bt(y.type)) : y.kind === c18.NON_NULL_TYPE ? new A16(Bt(y.type)) : bt(y);
    }
    function bs(y) {
        var b;
        return new de1({
            name: y.name.value,
            description: (b = y.description) === null || b === void 0 ? void 0 : b.value,
            locations: y.locations.map(({ value: g })=>g),
            isRepeatable: y.repeatable,
            args: Li(y.arguments),
            astNode: y
        });
    }
    function gn(y) {
        let b = Object.create(null);
        for (let G of y){
            var g;
            let ne = (g = G.fields) !== null && g !== void 0 ? g : [];
            for (let Y of ne){
                var _;
                b[Y.name.value] = {
                    type: Bt(Y.type),
                    description: (_ = Y.description) === null || _ === void 0 ? void 0 : _.value,
                    args: Li(Y.arguments),
                    deprecationReason: Pr(Y),
                    astNode: Y
                };
            }
        }
        return b;
    }
    function Li(y) {
        let b = y ?? [], g = Object.create(null);
        for (let G of b){
            var _;
            let ne = Bt(G.type);
            g[G.name.value] = {
                type: ne,
                description: (_ = G.description) === null || _ === void 0 ? void 0 : _.value,
                defaultValue: ge(G.defaultValue, ne),
                deprecationReason: Pr(G),
                astNode: G
            };
        }
        return g;
    }
    function wi(y) {
        let b = Object.create(null);
        for (let G of y){
            var g;
            let ne = (g = G.fields) !== null && g !== void 0 ? g : [];
            for (let Y of ne){
                var _;
                let _t = Bt(Y.type);
                b[Y.name.value] = {
                    type: _t,
                    description: (_ = Y.description) === null || _ === void 0 ? void 0 : _.value,
                    defaultValue: ge(Y.defaultValue, _t),
                    deprecationReason: Pr(Y),
                    astNode: Y
                };
            }
        }
        return b;
    }
    function Fi(y) {
        let b = Object.create(null);
        for (let G of y){
            var g;
            let ne = (g = G.values) !== null && g !== void 0 ? g : [];
            for (let Y of ne){
                var _;
                b[Y.name.value] = {
                    description: (_ = Y.description) === null || _ === void 0 ? void 0 : _.value,
                    deprecationReason: Pr(Y),
                    astNode: Y
                };
            }
        }
        return b;
    }
    function In(y) {
        return y.flatMap((b)=>{
            var g, _;
            return (g = (_ = b.interfaces) === null || _ === void 0 ? void 0 : _.map(bt)) !== null && g !== void 0 ? g : [];
        });
    }
    function ki(y) {
        return y.flatMap((b)=>{
            var g, _;
            return (g = (_ = b.types) === null || _ === void 0 ? void 0 : _.map(bt)) !== null && g !== void 0 ? g : [];
        });
    }
    function _s(y) {
        var b;
        let g = y.name.value, _ = (b = u[g]) !== null && b !== void 0 ? b : [];
        switch(y.kind){
            case c18.OBJECT_TYPE_DEFINITION:
                {
                    var G;
                    let Ce = [
                        y,
                        ..._
                    ];
                    return new re3({
                        name: g,
                        description: (G = y.description) === null || G === void 0 ? void 0 : G.value,
                        interfaces: ()=>In(Ce),
                        fields: ()=>gn(Ce),
                        astNode: y,
                        extensionASTNodes: _
                    });
                }
            case c18.INTERFACE_TYPE_DEFINITION:
                {
                    var ne;
                    let Ce = [
                        y,
                        ..._
                    ];
                    return new Ae({
                        name: g,
                        description: (ne = y.description) === null || ne === void 0 ? void 0 : ne.value,
                        interfaces: ()=>In(Ce),
                        fields: ()=>gn(Ce),
                        astNode: y,
                        extensionASTNodes: _
                    });
                }
            case c18.ENUM_TYPE_DEFINITION:
                {
                    var Y;
                    let Ce = [
                        y,
                        ..._
                    ];
                    return new Ee1({
                        name: g,
                        description: (Y = y.description) === null || Y === void 0 ? void 0 : Y.value,
                        values: Fi(Ce),
                        astNode: y,
                        extensionASTNodes: _
                    });
                }
            case c18.UNION_TYPE_DEFINITION:
                {
                    var _t;
                    let Ce = [
                        y,
                        ..._
                    ];
                    return new xe1({
                        name: g,
                        description: (_t = y.description) === null || _t === void 0 ? void 0 : _t.value,
                        types: ()=>ki(Ce),
                        astNode: y,
                        extensionASTNodes: _
                    });
                }
            case c18.SCALAR_TYPE_DEFINITION:
                {
                    var Br;
                    return new pe3({
                        name: g,
                        description: (Br = y.description) === null || Br === void 0 ? void 0 : Br.value,
                        specifiedByURL: Zo(y),
                        astNode: y,
                        extensionASTNodes: _
                    });
                }
            case c18.INPUT_OBJECT_TYPE_DEFINITION:
                {
                    var qr;
                    let Ce = [
                        y,
                        ..._
                    ];
                    return new Re({
                        name: g,
                        description: (qr = y.description) === null || qr === void 0 ? void 0 : qr.value,
                        fields: ()=>wi(Ce),
                        astNode: y,
                        extensionASTNodes: _
                    });
                }
        }
    }
}
var Wo = ue4([
    ...Ye,
    ...Je
], (e)=>e.name);
function Pr(e) {
    let t = ct2(Tt1, e);
    return t?.reason;
}
function Zo(e) {
    let t = ct2(on, e);
    return t?.url;
}
function _i(e, t) {
    e != null && e.kind === c18.DOCUMENT || S15(!1, "Must provide valid Document AST."), t?.assumeValid !== !0 && t?.assumeValidSDL !== !0 && Vo(e);
    let r = bi({
        description: void 0,
        types: [],
        directives: [],
        extensions: Object.create(null),
        extensionASTNodes: [],
        assumeValid: !1
    }, e, t);
    if (r.astNode == null) for (let o of r.types)switch(o.name){
        case "Query":
            r.query = o;
            break;
        case "Mutation":
            r.mutation = o;
            break;
        case "Subscription":
            r.subscription = o;
            break;
    }
    let i = [
        ...r.directives,
        ...ve1.filter((o)=>r.directives.every((s)=>s.name !== o.name))
    ];
    return new De({
        ...r,
        directives: i
    });
}
function ts(e, t) {
    let n = Ze(e, {
        noLocation: t?.noLocation,
        allowLegacyFragmentVariables: t?.allowLegacyFragmentVariables
    });
    return _i(n, {
        assumeValidSDL: t?.assumeValidSDL,
        assumeValid: t?.assumeValid
    });
}
var X9;
(function(e) {
    e.TYPE_REMOVED = "TYPE_REMOVED", e.TYPE_CHANGED_KIND = "TYPE_CHANGED_KIND", e.TYPE_REMOVED_FROM_UNION = "TYPE_REMOVED_FROM_UNION", e.VALUE_REMOVED_FROM_ENUM = "VALUE_REMOVED_FROM_ENUM", e.REQUIRED_INPUT_FIELD_ADDED = "REQUIRED_INPUT_FIELD_ADDED", e.IMPLEMENTED_INTERFACE_REMOVED = "IMPLEMENTED_INTERFACE_REMOVED", e.FIELD_REMOVED = "FIELD_REMOVED", e.FIELD_CHANGED_KIND = "FIELD_CHANGED_KIND", e.REQUIRED_ARG_ADDED = "REQUIRED_ARG_ADDED", e.ARG_REMOVED = "ARG_REMOVED", e.ARG_CHANGED_KIND = "ARG_CHANGED_KIND", e.DIRECTIVE_REMOVED = "DIRECTIVE_REMOVED", e.DIRECTIVE_ARG_REMOVED = "DIRECTIVE_ARG_REMOVED", e.REQUIRED_DIRECTIVE_ARG_ADDED = "REQUIRED_DIRECTIVE_ARG_ADDED", e.DIRECTIVE_REPEATABLE_REMOVED = "DIRECTIVE_REPEATABLE_REMOVED", e.DIRECTIVE_LOCATION_REMOVED = "DIRECTIVE_LOCATION_REMOVED";
})(X9 || (X9 = {}));
var Ve;
(function(e) {
    e.VALUE_ADDED_TO_ENUM = "VALUE_ADDED_TO_ENUM", e.TYPE_ADDED_TO_UNION = "TYPE_ADDED_TO_UNION", e.OPTIONAL_INPUT_FIELD_ADDED = "OPTIONAL_INPUT_FIELD_ADDED", e.OPTIONAL_ARG_ADDED = "OPTIONAL_ARG_ADDED", e.IMPLEMENTED_INTERFACE_ADDED = "IMPLEMENTED_INTERFACE_ADDED", e.ARG_DEFAULT_VALUE_CHANGE = "ARG_DEFAULT_VALUE_CHANGE";
})(Ve || (Ve = {}));
const event_schema_sqlite = `
CREATE TABLE IF NOT exists events_v1 (
    id         TEXT    PRIMARY KEY,
    pubkey     TEXT    NOT NULL,
    kind       INTEGER NOT NULL,
    content    TEXT    NOT NULL,
    created_at INTEGER NOT NULL,
    event      JSON    NOT NULL
);

CREATE TABLE IF NOT EXISTS replaceable_events_v1 (
    id         TEXT    PRIMARY KEY,
    kind       INTEGER NOT NULL,
    pubkey     TEXT    NOT NULL,
    content    TEXT    NOT NULL,
    created_at INTEGER NOT NULL,
    event      JSON    NOT NULL,
    UNIQUE (kind, pubkey)
);

CREATE TABLE IF NOT exists events_v2 (
    id         TEXT    PRIMARY KEY,
    pubkey     TEXT    NOT NULL,
    kind       TEXT    NOT NULL,
    event      JSON    NOT NULL
);
`;
const get_events_by_filter_sqlite = (db, log)=>async (filter)=>{
        let sql = `SELECT json(event) as event FROM events_v1 WHERE true`;
        const params = [];
        if (filter.ids && filter.ids.length > 0) {
            sql += ` AND id IN (${filter.ids.map(()=>"?").join(",")})`;
            params.push(...filter.ids);
        }
        if (filter.authors && filter.authors.length > 0) {
            sql += ` AND pubkey IN (${filter.authors.map(()=>"?").join(",")})`;
            params.push(...filter.authors);
        }
        if (filter.kinds && filter.kinds.length > 0) {
            sql += ` AND kind IN (${filter.kinds.map(()=>"?").join(",")})`;
            params.push(...filter.kinds);
        }
        sql += ` ORDER BY created_at DESC LIMIT :limit `;
        params.push(filter.limit || 200);
        if (log) {
            console.log(sql, "\n", params, "\n", filter);
        }
        let results;
        try {
            results = db.query(sql, params);
        } catch (e) {
            return e;
        }
        return results.map((r)=>JSON.parse(r[0]));
    };
const write_regular_event_sqlite = (db)=>async (event)=>{
        try {
            const result = db.query(`INSERT INTO events_v1 values
    (:id, :pubkey, :kind, :content, :created_at, :event)`, {
                id: event.id,
                pubkey: event.pubkey,
                kind: event.kind,
                content: event.content,
                created_at: event.created_at,
                event: JSON.stringify(event)
            });
            console.log(result);
            return true;
        } catch (e) {
            return e;
        }
    };
const write_replaceable_event_sqlite = (db)=>async (event)=>{
        try {
            const result = db.query(`INSERT INTO replaceable_events_v1 values
                (:id, :pubkey, :kind, :content, :created_at, :event)
                ON CONFLICT(kind, pubkey) DO UPDATE SET
                    id = excluded.id,
                    content = excluded.content,
                    created_at = excluded.created_at,
                    event = excluded.event
                WHERE excluded.created_at > replaceable_events_v1.created_at;
                `, {
                id: event.id,
                pubkey: event.pubkey,
                kind: event.kind,
                content: event.content,
                created_at: event.created_at,
                event: JSON.stringify(event)
            });
            console.log(result);
            return true;
        } catch (e) {
            return e;
        }
    };
const get_event_count_sqlite = (db)=>async ()=>{
        const rows = db.query(`SELECT kind, count(*) as count FROM events_v1 group by kind`);
        return new Map(rows);
    };
function Error404() {
    return g(H, {
        children: [
            g("head", {
                children: g("title", {
                    children: "404 - Page not found"
                })
            }),
            g("div", {
                class: "px-4 py-8 mx-auto bg-[#86efac]",
                children: g("div", {
                    class: "max-w-screen-md mx-auto flex flex-col items-center justify-center",
                    children: [
                        g("h1", {
                            class: "text-4xl font-bold",
                            children: "404 - Page not found"
                        }),
                        g("p", {
                            class: "my-4",
                            children: "The page you were looking for doesn't exist."
                        })
                    ]
                })
            })
        ]
    });
}
class AssertionError extends Error {
    constructor(message){
        super(message);
        this.name = "AssertionError";
    }
}
function assert(expr, msg = "") {
    if (!expr) {
        throw new AssertionError(msg);
    }
}
const FIELD_CONTENT_REGEXP = /^(?=[\x20-\x7E]*$)[^()@<>,;:\\"\[\]?={}\s]+$/;
function toString(cookie) {
    if (!cookie.name) {
        return "";
    }
    const out = [];
    validateName(cookie.name);
    validateValue(cookie.name, cookie.value);
    out.push(`${cookie.name}=${cookie.value}`);
    if (cookie.name.startsWith("__Secure")) {
        cookie.secure = true;
    }
    if (cookie.name.startsWith("__Host")) {
        cookie.path = "/";
        cookie.secure = true;
        delete cookie.domain;
    }
    if (cookie.secure) {
        out.push("Secure");
    }
    if (cookie.httpOnly) {
        out.push("HttpOnly");
    }
    if (typeof cookie.maxAge === "number" && Number.isInteger(cookie.maxAge)) {
        assert(cookie.maxAge >= 0, "Max-Age must be an integer superior or equal to 0");
        out.push(`Max-Age=${cookie.maxAge}`);
    }
    if (cookie.domain) {
        validateDomain(cookie.domain);
        out.push(`Domain=${cookie.domain}`);
    }
    if (cookie.sameSite) {
        out.push(`SameSite=${cookie.sameSite}`);
    }
    if (cookie.path) {
        validatePath(cookie.path);
        out.push(`Path=${cookie.path}`);
    }
    if (cookie.expires) {
        const { expires } = cookie;
        const date = typeof expires === "number" ? new Date(expires) : expires;
        out.push(`Expires=${date.toUTCString()}`);
    }
    if (cookie.unparsed) {
        out.push(cookie.unparsed.join("; "));
    }
    return out.join("; ");
}
function validateName(name) {
    if (name && !FIELD_CONTENT_REGEXP.test(name)) {
        throw new TypeError(`Invalid cookie name: "${name}".`);
    }
}
function validatePath(path) {
    if (path === null) {
        return;
    }
    for(let i = 0; i < path.length; i++){
        const c = path.charAt(i);
        if (c < String.fromCharCode(0x20) || c > String.fromCharCode(0x7E) || c === ";") {
            throw new Error(path + ": Invalid cookie path char '" + c + "'");
        }
    }
}
function validateValue(name, value) {
    if (value === null) return;
    for(let i = 0; i < value.length; i++){
        const c = value.charAt(i);
        if (c < String.fromCharCode(0x21) || c === String.fromCharCode(0x22) || c === String.fromCharCode(0x2c) || c === String.fromCharCode(0x3b) || c === String.fromCharCode(0x5c) || c === String.fromCharCode(0x7f)) {
            throw new Error("RFC2616 cookie '" + name + "' cannot contain character '" + c + "'");
        }
        if (c > String.fromCharCode(0x80)) {
            throw new Error("RFC2616 cookie '" + name + "' can only have US-ASCII chars as value" + c.charCodeAt(0).toString(16));
        }
    }
}
function validateDomain(domain) {
    const char1 = domain.charAt(0);
    const charN = domain.charAt(domain.length - 1);
    if (char1 === "-" || charN === "." || charN === "-") {
        throw new Error("Invalid first/last char in cookie domain: " + domain);
    }
}
function getCookies(headers) {
    const cookie = headers.get("Cookie");
    if (cookie !== null) {
        const out = {};
        const c = cookie.split(";");
        for (const kv of c){
            const [cookieKey, ...cookieVal] = kv.split("=");
            assert(cookieKey !== undefined);
            const key = cookieKey.trim();
            out[key] = cookieVal.join("=");
        }
        return out;
    }
    return {};
}
function setCookie(headers, cookie) {
    const v = toString(cookie);
    if (v) {
        headers.append("Set-Cookie", v);
    }
}
const create_channel_sqlite = (db)=>async (event)=>{
        db.query(`INSERT INTO channels (channel_id, name, creation_event) VALUES (?, ?, ?);`, [
            event.id,
            event.name,
            JSON.stringify(event)
        ]);
        return true;
    };
const edit_channel_sqlite = (db)=>async (event)=>{
        const channel = await get_channel_by_id_sqlite(db)(event.channel_id);
        if (channel == undefined) {
            return new Error(`channel ${event.channel_id} does not exist`);
        }
        if (channel.create.pubkey != event.pubkey) {
            return new Error(`user ${event.pubkey} are not the creator of this channel`);
        }
        try {
            db.query(`UPDATE channels SET edition_event = (?) WHERE channel_id = (?);`, [
                JSON.stringify(event),
                event.channel_id
            ]);
            return;
        } catch (e) {
            console.error(e);
            return e;
        }
    };
const get_channel_by_id_sqlite = (db)=>async (id)=>{
        const rows = db.query(`SELECT creation_event, edition_event FROM channels WHERE channel_id = (?);`, [
            id
        ]);
        const entry = rows[0];
        if (entry == undefined) {
            return undefined;
        }
        return {
            create: JSON.parse(entry[0]),
            edit: entry[1] ? JSON.parse(entry[1]) : undefined
        };
    };
const sqlite_schema = `
-- Create the table
CREATE TABLE IF NOT exists channels (
    channel_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    creation_event JSON NOT NULL,
    edition_event JSON
);

-- Create indexes
-- Index for the primary key 'id' is automatically created as it is the primary key
-- Create index for 'name'
CREATE INDEX IF NOT exists idx_name ON channels (name);
`;
var Status;
(function(Status) {
    Status[Status["Unknown"] = -1] = "Unknown";
    Status[Status["SqliteOk"] = 0] = "SqliteOk";
    Status[Status["SqliteError"] = 1] = "SqliteError";
    Status[Status["SqliteInternal"] = 2] = "SqliteInternal";
    Status[Status["SqlitePerm"] = 3] = "SqlitePerm";
    Status[Status["SqliteAbort"] = 4] = "SqliteAbort";
    Status[Status["SqliteBusy"] = 5] = "SqliteBusy";
    Status[Status["SqliteLocked"] = 6] = "SqliteLocked";
    Status[Status["SqliteNoMem"] = 7] = "SqliteNoMem";
    Status[Status["SqliteReadOnly"] = 8] = "SqliteReadOnly";
    Status[Status["SqliteInterrupt"] = 9] = "SqliteInterrupt";
    Status[Status["SqliteIOErr"] = 10] = "SqliteIOErr";
    Status[Status["SqliteCorrupt"] = 11] = "SqliteCorrupt";
    Status[Status["SqliteNotFound"] = 12] = "SqliteNotFound";
    Status[Status["SqliteFull"] = 13] = "SqliteFull";
    Status[Status["SqliteCantOpen"] = 14] = "SqliteCantOpen";
    Status[Status["SqliteProtocol"] = 15] = "SqliteProtocol";
    Status[Status["SqliteEmpty"] = 16] = "SqliteEmpty";
    Status[Status["SqliteSchema"] = 17] = "SqliteSchema";
    Status[Status["SqliteTooBig"] = 18] = "SqliteTooBig";
    Status[Status["SqliteConstraint"] = 19] = "SqliteConstraint";
    Status[Status["SqliteMismatch"] = 20] = "SqliteMismatch";
    Status[Status["SqliteMisuse"] = 21] = "SqliteMisuse";
    Status[Status["SqliteNoLFS"] = 22] = "SqliteNoLFS";
    Status[Status["SqliteAuth"] = 23] = "SqliteAuth";
    Status[Status["SqliteFormat"] = 24] = "SqliteFormat";
    Status[Status["SqliteRange"] = 25] = "SqliteRange";
    Status[Status["SqliteNotADB"] = 26] = "SqliteNotADB";
    Status[Status["SqliteNotice"] = 27] = "SqliteNotice";
    Status[Status["SqliteWarning"] = 28] = "SqliteWarning";
    Status[Status["SqliteRow"] = 100] = "SqliteRow";
    Status[Status["SqliteDone"] = 101] = "SqliteDone";
})(Status || (Status = {}));
var OpenFlags;
(function(OpenFlags) {
    OpenFlags[OpenFlags["ReadOnly"] = 1] = "ReadOnly";
    OpenFlags[OpenFlags["ReadWrite"] = 2] = "ReadWrite";
    OpenFlags[OpenFlags["Create"] = 4] = "Create";
    OpenFlags[OpenFlags["Uri"] = 64] = "Uri";
    OpenFlags[OpenFlags["Memory"] = 128] = "Memory";
})(OpenFlags || (OpenFlags = {}));
var DeserializeFlags;
(function(DeserializeFlags) {
    DeserializeFlags[DeserializeFlags["FreeOnClose"] = 1] = "FreeOnClose";
    DeserializeFlags[DeserializeFlags["Resizeable"] = 2] = "Resizeable";
    DeserializeFlags[DeserializeFlags["ReadOnly"] = 4] = "ReadOnly";
})(DeserializeFlags || (DeserializeFlags = {}));
var FunctionFlags;
(function(FunctionFlags) {
    FunctionFlags[FunctionFlags["Deterministic"] = 2048] = "Deterministic";
    FunctionFlags[FunctionFlags["DirectOnly"] = 524288] = "DirectOnly";
})(FunctionFlags || (FunctionFlags = {}));
var Types;
(function(Types) {
    Types[Types["Integer"] = 1] = "Integer";
    Types[Types["Float"] = 2] = "Float";
    Types[Types["Text"] = 3] = "Text";
    Types[Types["Blob"] = 4] = "Blob";
    Types[Types["Null"] = 5] = "Null";
    Types[Types["BigInteger"] = 6] = "BigInteger";
})(Types || (Types = {}));
var Values;
(function(Values) {
    Values[Values["Error"] = -1] = "Error";
    Values[Values["Null"] = 0] = "Null";
})(Values || (Values = {}));
function getStr(wasm, ptr) {
    const len = wasm.str_len(ptr);
    const bytes = new Uint8Array(wasm.memory.buffer, ptr, len);
    if (len > 16) {
        return new TextDecoder().decode(bytes);
    } else {
        let str = "";
        let idx = 0;
        while(idx < len){
            let u0 = bytes[idx++];
            if (!(u0 & 0x80)) {
                str += String.fromCharCode(u0);
                continue;
            }
            const u1 = bytes[idx++] & 63;
            if ((u0 & 0xE0) == 0xC0) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
            }
            const u2 = bytes[idx++] & 63;
            if ((u0 & 0xF0) == 0xE0) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | bytes[idx++] & 63;
            }
            if (u0 < 0x10000) {
                str += String.fromCharCode(u0);
            } else {
                const ch = u0 - 0x10000;
                str += String.fromCharCode(0xD800 | ch >> 10, 0xDC00 | ch & 0x3FF);
            }
        }
        return str;
    }
}
class SqliteError extends Error {
    constructor(context, code){
        let message;
        let status;
        if (typeof context === "string") {
            message = context;
            status = Status.Unknown;
        } else {
            message = getStr(context, context.get_sqlite_error_str());
            status = context.get_status();
        }
        super(message);
        this.code = code ?? status;
        this.name = "SqliteError";
    }
    code;
    get codeName() {
        return Status[this.code];
    }
}
function setStr(wasm, str, closure) {
    const bytes = new TextEncoder().encode(str);
    const ptr = wasm.malloc(bytes.length + 1);
    if (ptr === 0) {
        throw new SqliteError("Out of memory.");
    }
    const mem = new Uint8Array(wasm.memory.buffer, ptr, bytes.length + 1);
    mem.set(bytes);
    mem[bytes.length] = 0;
    try {
        const result = closure(ptr);
        wasm.free(ptr);
        return result;
    } catch (error) {
        wasm.free(ptr);
        throw error;
    }
}
function setArr(wasm, arr, closure) {
    const ptr = wasm.malloc(arr.length);
    if (ptr === 0) {
        throw new SqliteError("Out of memory.");
    }
    const mem = new Uint8Array(wasm.memory.buffer, ptr, arr.length);
    mem.set(arr);
    try {
        const result = closure(ptr);
        wasm.free(ptr);
        return result;
    } catch (error) {
        wasm.free(ptr);
        throw error;
    }
}
const isWindows = Deno.build.os === "windows";
function env(inst) {
    const env = {
        js_print: (str_ptr)=>{
            const text = getStr(inst.exports, str_ptr);
            console.log(text[text.length - 1] === "\n" ? text.slice(0, -1) : text);
        },
        js_open: (path_ptr, mode, flags)=>{
            let path;
            switch(mode){
                case 0:
                    path = getStr(inst.exports, path_ptr);
                    break;
                case 1:
                    path = Deno.makeTempFileSync({
                        prefix: "deno_sqlite"
                    });
                    break;
            }
            const write = !!(flags & 0x00000002);
            const create = !!(flags & 0x00000004);
            const rid = Deno.openSync(path, {
                read: true,
                write,
                create
            }).rid;
            return rid;
        },
        js_close: (rid)=>{
            Deno.close(rid);
        },
        js_delete: (path_ptr)=>{
            const path = getStr(inst.exports, path_ptr);
            Deno.removeSync(path);
        },
        js_read: (rid, buffer_ptr, offset, amount)=>{
            const buffer = new Uint8Array(inst.exports.memory.buffer, buffer_ptr, amount);
            Deno.seekSync(rid, offset, Deno.SeekMode.Start);
            return Deno.readSync(rid, buffer);
        },
        js_write: (rid, buffer_ptr, offset, amount)=>{
            const buffer = new Uint8Array(inst.exports.memory.buffer, buffer_ptr, amount);
            Deno.seekSync(rid, offset, Deno.SeekMode.Start);
            return Deno.writeSync(rid, buffer);
        },
        js_truncate: (rid, size)=>{
            Deno.ftruncateSync(rid, size);
        },
        js_sync: (rid)=>{
            Deno.fdatasyncSync(rid);
        },
        js_size: (rid)=>{
            return Deno.fstatSync(rid).size;
        },
        js_lock: (rid, exclusive)=>{
            if (Deno.flockSync && !isWindows) Deno.flockSync(rid, exclusive !== 0);
        },
        js_unlock: (rid)=>{
            if (Deno.funlockSync && !isWindows) Deno.funlockSync(rid);
        },
        js_time: ()=>{
            return Date.now();
        },
        js_timezone: ()=>{
            return new Date().getTimezoneOffset();
        },
        js_exists: (path_ptr)=>{
            const path = getStr(inst.exports, path_ptr);
            try {
                Deno.statSync(path);
            } catch (e) {
                if (e instanceof Deno.errors.NotFound) {
                    return 0;
                }
            }
            return 1;
        },
        js_access: (path_ptr)=>{
            const path = getStr(inst.exports, path_ptr);
            try {
                Deno.statSync(path);
            } catch (e) {
                if (e instanceof Deno.errors.PermissionDenied) {
                    return 0;
                }
            }
            return 1;
        },
        js_call_user_func: (func_idx, arg_count)=>{
            inst.functions[func_idx](arg_count);
        }
    };
    return {
        env
    };
}
function decode(base64) {
    const bytesStr = atob(base64);
    const bytes = new Uint8Array(bytesStr.length);
    for(let i = 0, c = bytesStr.length; i < c; i++){
        bytes[i] = bytesStr.charCodeAt(i);
    }
    return bytes;
}
const moduleOrInstance = {
    module: null,
    instances: []
};
async function compile() {
    moduleOrInstance.module = await WebAssembly.compile(decode(wasm));
}
function instantiate() {
    if (moduleOrInstance.instances.length) {
        return moduleOrInstance.instances.pop();
    } else {
        const functions = [];
        const placeholder = {
            exports: null,
            functions
        };
        const instance = new WebAssembly.Instance(moduleOrInstance.module, env(placeholder));
        placeholder.exports = instance.exports;
        instance.functions = functions;
        instance.exports.seed_rng(Date.now());
        return instance;
    }
}
class PreparedQuery {
    #wasm;
    #stmt;
    #openStatements;
    #status;
    #iterKv;
    #rowKeys;
    #finalized;
    constructor(wasm, stmt, openStatements){
        this.#wasm = wasm;
        this.#stmt = stmt;
        this.#openStatements = openStatements;
        this.#status = Status.Unknown;
        this.#iterKv = false;
        this.#finalized = false;
    }
    #startQuery(params) {
        if (this.#finalized) {
            throw new SqliteError("Query is finalized.");
        }
        this.#wasm.reset(this.#stmt);
        this.#wasm.clear_bindings(this.#stmt);
        let parameters = [];
        if (Array.isArray(params)) {
            parameters = params;
        } else if (typeof params === "object") {
            for (const key of Object.keys(params)){
                let name = key;
                if (name[0] !== ":" && name[0] !== "@" && name[0] !== "$") {
                    name = `:${name}`;
                }
                const idx = setStr(this.#wasm, name, (ptr)=>this.#wasm.bind_parameter_index(this.#stmt, ptr));
                if (idx === Values.Error) {
                    throw new SqliteError(`No parameter named '${name}'.`);
                }
                parameters[idx - 1] = params[key];
            }
        }
        for(let i = 0; i < parameters.length; i++){
            let value = parameters[i];
            let status;
            switch(typeof value){
                case "boolean":
                    value = value ? 1 : 0;
                case "number":
                    if (Number.isSafeInteger(value)) {
                        status = this.#wasm.bind_int(this.#stmt, i + 1, value);
                    } else {
                        status = this.#wasm.bind_double(this.#stmt, i + 1, value);
                    }
                    break;
                case "bigint":
                    if (value > 9223372036854775807n || value < -9223372036854775808n) {
                        throw new SqliteError(`BigInt value ${value} overflows 64 bit integer.`);
                    } else {
                        const posVal = value >= 0n ? value : -value;
                        const sign = value >= 0n ? 1 : -1;
                        const upper = Number(BigInt.asUintN(32, posVal >> 32n));
                        const lower = Number(BigInt.asUintN(32, posVal));
                        status = this.#wasm.bind_big_int(this.#stmt, i + 1, sign, upper, lower);
                    }
                    break;
                case "string":
                    status = setStr(this.#wasm, value, (ptr)=>this.#wasm.bind_text(this.#stmt, i + 1, ptr));
                    break;
                default:
                    if (value instanceof Date) {
                        status = setStr(this.#wasm, value.toISOString(), (ptr)=>this.#wasm.bind_text(this.#stmt, i + 1, ptr));
                    } else if (value instanceof Uint8Array) {
                        const size = value.length;
                        status = setArr(this.#wasm, value, (ptr)=>this.#wasm.bind_blob(this.#stmt, i + 1, ptr, size));
                    } else if (value === null || value === undefined) {
                        status = this.#wasm.bind_null(this.#stmt, i + 1);
                    } else {
                        throw new SqliteError(`Can not bind ${typeof value}.`);
                    }
                    break;
            }
            if (status !== Status.SqliteOk) {
                throw new SqliteError(this.#wasm, status);
            }
        }
    }
    #getQueryRow() {
        if (this.#finalized) {
            throw new SqliteError("Query is finalized.");
        }
        const columnCount = this.#wasm.column_count(this.#stmt);
        const row = new Array(columnCount);
        for(let columnIdx = 0; columnIdx < columnCount; columnIdx++){
            switch(this.#wasm.column_type(this.#stmt, columnIdx)){
                case Types.Integer:
                    row[columnIdx] = this.#wasm.column_int(this.#stmt, columnIdx);
                    break;
                case Types.Float:
                    row[columnIdx] = this.#wasm.column_double(this.#stmt, columnIdx);
                    break;
                case Types.Text:
                    row[columnIdx] = getStr(this.#wasm, this.#wasm.column_text(this.#stmt, columnIdx));
                    break;
                case Types.Blob:
                    {
                        const ptr = this.#wasm.column_blob(this.#stmt, columnIdx);
                        if (ptr === 0) {
                            row[columnIdx] = null;
                        } else {
                            const length = this.#wasm.column_bytes(this.#stmt, columnIdx);
                            row[columnIdx] = new Uint8Array(this.#wasm.memory.buffer, ptr, length).slice();
                        }
                        break;
                    }
                case Types.BigInteger:
                    {
                        const ptr = this.#wasm.column_text(this.#stmt, columnIdx);
                        row[columnIdx] = BigInt(getStr(this.#wasm, ptr));
                        break;
                    }
                default:
                    row[columnIdx] = null;
                    break;
            }
        }
        return row;
    }
    #makeRowObject(row) {
        if (this.#rowKeys == null) {
            const rowCount = this.#wasm.column_count(this.#stmt);
            this.#rowKeys = [];
            for(let i = 0; i < rowCount; i++){
                this.#rowKeys.push(getStr(this.#wasm, this.#wasm.column_name(this.#stmt, i)));
            }
        }
        const obj = row.reduce((obj, val, idx)=>{
            obj[this.#rowKeys[idx]] = val;
            return obj;
        }, {});
        return obj;
    }
    iter(params) {
        this.#startQuery(params);
        this.#status = this.#wasm.step(this.#stmt);
        if (this.#status !== Status.SqliteRow && this.#status !== Status.SqliteDone) {
            throw new SqliteError(this.#wasm, this.#status);
        }
        this.#iterKv = false;
        return this;
    }
    iterEntries(params) {
        this.iter(params);
        this.#iterKv = true;
        return this;
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        if (this.#status === Status.SqliteRow) {
            const value = this.#getQueryRow();
            this.#status = this.#wasm.step(this.#stmt);
            if (this.#iterKv) {
                return {
                    value: this.#makeRowObject(value),
                    done: false
                };
            } else {
                return {
                    value,
                    done: false
                };
            }
        } else if (this.#status === Status.SqliteDone) {
            return {
                value: null,
                done: true
            };
        } else {
            throw new SqliteError(this.#wasm, this.#status);
        }
    }
    all(params) {
        this.#startQuery(params);
        const rows = [];
        this.#status = this.#wasm.step(this.#stmt);
        while(this.#status === Status.SqliteRow){
            rows.push(this.#getQueryRow());
            this.#status = this.#wasm.step(this.#stmt);
        }
        if (this.#status !== Status.SqliteDone) {
            throw new SqliteError(this.#wasm, this.#status);
        }
        return rows;
    }
    allEntries(params) {
        return this.all(params).map((row)=>this.#makeRowObject(row));
    }
    first(params) {
        this.#startQuery(params);
        this.#status = this.#wasm.step(this.#stmt);
        let row = undefined;
        if (this.#status === Status.SqliteRow) {
            row = this.#getQueryRow();
        }
        while(this.#status === Status.SqliteRow){
            this.#status = this.#wasm.step(this.#stmt);
        }
        if (this.#status !== Status.SqliteDone) {
            throw new SqliteError(this.#wasm, this.#status);
        }
        return row;
    }
    firstEntry(params) {
        const row = this.first(params);
        return row === undefined ? undefined : this.#makeRowObject(row);
    }
    one(params) {
        const rows = this.all(params);
        if (rows.length === 0) {
            throw new SqliteError("The query did not return any rows.");
        } else if (rows.length > 1) {
            throw new SqliteError("The query returned more than one row.");
        } else {
            return rows[0];
        }
    }
    oneEntry(params) {
        return this.#makeRowObject(this.one(params));
    }
    execute(params) {
        this.#startQuery(params);
        this.#status = this.#wasm.step(this.#stmt);
        while(this.#status === Status.SqliteRow){
            this.#status = this.#wasm.step(this.#stmt);
        }
        if (this.#status !== Status.SqliteDone) {
            throw new SqliteError(this.#wasm, this.#status);
        }
    }
    finalize() {
        if (!this.#finalized) {
            this.#wasm.finalize(this.#stmt);
            this.#openStatements.delete(this.#stmt);
            this.#finalized = true;
        }
    }
    columns() {
        if (this.#finalized) {
            throw new SqliteError("Unable to retrieve column names from finalized transaction.");
        }
        const columnCount = this.#wasm.column_count(this.#stmt);
        const columns = [];
        for(let i = 0; i < columnCount; i++){
            const name = getStr(this.#wasm, this.#wasm.column_name(this.#stmt, i));
            const originName = getStr(this.#wasm, this.#wasm.column_origin_name(this.#stmt, i));
            const tableName = getStr(this.#wasm, this.#wasm.column_table_name(this.#stmt, i));
            columns.push({
                name,
                originName,
                tableName
            });
        }
        return columns;
    }
    expandSql(params) {
        this.#startQuery(params);
        const ptr = this.#wasm.expanded_sql(this.#stmt);
        const sql = getStr(this.#wasm, ptr);
        if (ptr != Values.Null) this.#wasm.sqlite_free(ptr);
        return sql;
    }
}
function wrapSqlFunction(wasm, name, func) {
    return (argCount)=>{
        const args = new Array(argCount);
        for(let argIdx = 0; argIdx < argCount; argIdx++){
            switch(wasm.argument_type(argIdx)){
                case Types.Integer:
                    args[argIdx] = wasm.argument_int(argIdx);
                    break;
                case Types.Float:
                    args[argIdx] = wasm.argument_double(argIdx);
                    break;
                case Types.Text:
                    args[argIdx] = getStr(wasm, wasm.argument_text(argIdx));
                    break;
                case Types.Blob:
                    {
                        const ptr = wasm.argument_blob(argIdx);
                        if (ptr === 0) {
                            args[argIdx] = null;
                        } else {
                            const length = wasm.argument_bytes(argIdx);
                            args[argIdx] = new Uint8Array(wasm.memory.buffer, ptr, length).slice();
                        }
                        break;
                    }
                case Types.BigInteger:
                    {
                        const ptr = wasm.argument_text(argIdx);
                        args[argIdx] = BigInt(getStr(wasm, ptr));
                        break;
                    }
                default:
                    args[argIdx] = null;
                    break;
            }
        }
        try {
            let result = func.apply(null, args);
            switch(typeof result){
                case "boolean":
                    result = result ? 1 : 0;
                case "number":
                    if (Number.isSafeInteger(result)) {
                        wasm.result_int(result);
                    } else {
                        wasm.result_double(result);
                    }
                    break;
                case "bigint":
                    if (result > 9223372036854775807n || result < -9223372036854775808n) {
                        throw new SqliteError(`BigInt result ${result} overflows 64 bit integer.`);
                    } else {
                        const posVal = result >= 0n ? result : -result;
                        const sign = result >= 0n ? 1 : -1;
                        const upper = Number(BigInt.asUintN(32, posVal >> 32n));
                        const lower = Number(BigInt.asUintN(32, posVal));
                        wasm.result_big_int(sign, upper, lower);
                    }
                    break;
                case "string":
                    setStr(wasm, result, (ptr)=>wasm.result_text(ptr));
                    break;
                default:
                    if (result instanceof Date) {
                        setStr(wasm, result.toISOString(), (ptr)=>wasm.result_text(ptr));
                    } else if (result instanceof Uint8Array) {
                        const size = result.length;
                        setArr(wasm, result, (ptr)=>wasm.result_blob(ptr, size));
                    } else if (result === null || result === undefined) {
                        wasm.result_null();
                    } else {
                        throw new SqliteError(`Can not return ${typeof result}.`);
                    }
                    break;
            }
        } catch (error) {
            setStr(wasm, `Error in user defined function '${name}': ${error?.message}`, (ptr)=>wasm.result_error(ptr, Status.SqliteError));
        }
    };
}
class DB {
    #wasm;
    #functions;
    #open;
    #statements;
    #functionNames;
    #transactionDepth;
    constructor(path = ":memory:", options = {}){
        const instance = instantiate();
        this.#wasm = instance.exports;
        this.#functions = instance.functions;
        this.#open = false;
        this.#statements = new Set();
        this.#functionNames = new Map();
        this.#transactionDepth = 0;
        let flags = 0;
        switch(options.mode){
            case "read":
                flags = OpenFlags.ReadOnly;
                break;
            case "write":
                flags = OpenFlags.ReadWrite;
                break;
            case "create":
            default:
                flags = OpenFlags.ReadWrite | OpenFlags.Create;
                break;
        }
        if (options.memory === true) {
            flags |= OpenFlags.Memory;
        }
        if (options.uri === true) {
            flags |= OpenFlags.Uri;
        }
        const status = setStr(this.#wasm, path, (ptr)=>this.#wasm.open(ptr, flags));
        if (status !== Status.SqliteOk) {
            throw new SqliteError(this.#wasm, status);
        }
        this.#open = true;
    }
    query(sql, params) {
        const query = this.prepareQuery(sql);
        try {
            const rows = query.all(params);
            query.finalize();
            return rows;
        } catch (err) {
            query.finalize();
            throw err;
        }
    }
    queryEntries(sql, params) {
        const query = this.prepareQuery(sql);
        try {
            const rows = query.allEntries(params);
            query.finalize();
            return rows;
        } catch (err) {
            query.finalize();
            throw err;
        }
    }
    prepareQuery(sql) {
        if (!this.#open) {
            throw new SqliteError("Database was closed.");
        }
        const stmt = setStr(this.#wasm, sql, (ptr)=>this.#wasm.prepare(ptr));
        if (stmt === Values.Null) {
            throw new SqliteError(this.#wasm);
        }
        this.#statements.add(stmt);
        return new PreparedQuery(this.#wasm, stmt, this.#statements);
    }
    execute(sql) {
        const status = setStr(this.#wasm, sql, (ptr)=>this.#wasm.exec(ptr));
        if (status !== Status.SqliteOk) {
            throw new SqliteError(this.#wasm, status);
        }
    }
    transaction(closure) {
        this.#transactionDepth += 1;
        this.execute(`SAVEPOINT _deno_sqlite_sp_${this.#transactionDepth}`);
        try {
            return closure();
        } catch (err) {
            this.execute(`ROLLBACK TO _deno_sqlite_sp_${this.#transactionDepth}`);
            throw err;
        } finally{
            this.execute(`RELEASE _deno_sqlite_sp_${this.#transactionDepth}`);
            this.#transactionDepth -= 1;
        }
    }
    serialize(schema = "main") {
        const ptr = setStr(this.#wasm, schema, (ptr)=>this.#wasm.serialize(ptr));
        if (ptr === Values.Null) {
            throw new SqliteError(`Failed to serialize database '${schema}'`);
        }
        const length = this.#wasm.serialize_bytes();
        const data = new Uint8Array(this.#wasm.memory.buffer, ptr, length).slice();
        this.#wasm.sqlite_free(ptr);
        return data;
    }
    deserialize(data, options) {
        const dataPtr = this.#wasm.sqlite_malloc(data.length);
        if (dataPtr === Values.Null) {
            throw new SqliteError("Out of memory.", Status.SqliteNoMem);
        } else {
            const mem = new Uint8Array(this.#wasm.memory.buffer, dataPtr, data.length);
            mem.set(data);
        }
        let flags = DeserializeFlags.FreeOnClose;
        switch(options?.mode){
            case "read":
                flags |= DeserializeFlags.ReadOnly;
                break;
            case "write":
            default:
                flags |= DeserializeFlags.Resizeable;
                break;
        }
        const schema = options?.schema ?? "main";
        const status = setStr(this.#wasm, schema, (schemaPtr)=>this.#wasm.deserialize(schemaPtr, dataPtr, data.length, flags));
        if (status !== Status.SqliteOk) {
            throw new SqliteError(`Failed to deserialize into database '${schema}'`, status);
        }
    }
    createFunction(func, options) {
        const name = options?.name ?? func.name;
        if (name === "") {
            throw new SqliteError("Function name can not be empty");
        } else if (this.#functionNames.has(name)) {
            throw new SqliteError(`A function named '${name}' already exists`);
        }
        const argc = func.length === 0 ? -1 : func.length;
        let flags = 0;
        if (options?.deterministic ?? false) flags |= FunctionFlags.Deterministic;
        if (options?.directOnly ?? true) flags |= FunctionFlags.DirectOnly;
        let funcIdx = 0;
        while(this.#functions[funcIdx] != undefined)funcIdx++;
        const status = setStr(this.#wasm, name, (name)=>this.#wasm.create_function(name, argc, flags, funcIdx));
        if (status !== Status.SqliteOk) {
            throw new SqliteError(this.#wasm, status);
        } else {
            this.#functions[funcIdx] = wrapSqlFunction(this.#wasm, name, func);
            this.#functionNames.set(name, funcIdx);
        }
    }
    deleteFunction(name) {
        if (this.#functionNames.has(name)) {
            const status = setStr(this.#wasm, name, (pts)=>this.#wasm.delete_function(pts));
            if (status === Status.SqliteOk) {
                const funcIdx = this.#functionNames.get(name);
                this.#functionNames.delete(name);
                delete this.#functions[funcIdx];
            } else {
                throw new SqliteError(this.#wasm, status);
            }
        } else {
            throw new SqliteError(`User defined function '${name}' does not exist`);
        }
    }
    close(force = false) {
        if (!this.#open) {
            return;
        }
        if (force) {
            for (const stmt of this.#statements){
                if (this.#wasm.finalize(stmt) !== Status.SqliteOk) {
                    throw new SqliteError(this.#wasm);
                }
            }
        }
        if (this.#wasm.close() !== Status.SqliteOk) {
            throw new SqliteError(this.#wasm);
        }
        this.#open = false;
    }
    get lastInsertRowId() {
        return this.#wasm.last_insert_rowid();
    }
    get changes() {
        return this.#wasm.changes();
    }
    get totalChanges() {
        return this.#wasm.total_changes();
    }
    get autoCommit() {
        return this.#wasm.autocommit() !== 0;
    }
    get isClosed() {
        return !this.#open;
    }
}
await compile();
const delete_event_sqlite = (db)=>async (event_id)=>{
        db.query(`
    DELETE FROM events_v1
    WHERE id = :id;
    `, {
            id: event_id
        });
        db.query(`
    DELETE FROM replaceable_events_v1
    WHERE id = :id;
    `, {
            id: event_id
        });
        return true;
    };
const schema = ts(k11(typeDefs));
const ENV_relayed_pubkey = "relayed_pubkey";
const software = "https://github.com/BlowaterNostr/relayed";
const graphql_handler = (args)=>async (req)=>{
        if (req.method == "POST") {
            try {
                const query = await req.json();
                const cookies = getCookies(req.headers);
                const token = cookies.token;
                if (!token) {
                    return new Response(`{"errors":"no token"}`);
                }
                const rawEvent = atobSafe(token);
                if (rawEvent instanceof Error) {
                    return new Response(JSON.stringify({
                        errors: [
                            `${rawEvent.message}`
                        ]
                    }));
                }
                const event = parseJSON(rawEvent);
                if (event instanceof Error) {
                    return new Response(JSON.stringify({
                        errors: [
                            `${event.message}`
                        ]
                    }));
                }
                const error = await verifyToken(event, args.relayInformationStore);
                if (error instanceof Error) {
                    return new Response(JSON.stringify({
                        errors: [
                            error.message
                        ]
                    }));
                }
                const result = await Ua({
                    schema: schema,
                    source: query.query,
                    variableValues: query.variables,
                    rootValue: RootResolver({
                        deps: args
                    })
                });
                return new Response(JSON.stringify(result));
            } catch (error) {
                return new Response(JSON.stringify({
                    errors: [
                        `${error}`
                    ]
                }));
            }
        } else if (req.method == "GET") {
            const res = new Response(graphiql);
            res.headers.set("content-type", "html");
            return res;
        } else {
            return new Response(undefined, {
                status: 405
            });
        }
    };
const supported_nips = [
    1,
    2,
    11
];
export { supported_nips as supported_nips };
function Landing(information) {
    return g(H, {
        children: [
            g("head", {
                children: g("script", {
                    src: "https://cdn.tailwindcss.com"
                })
            }),
            g("div", {
                class: "px-4 py-8 mx-auto bg-[#86efac]",
                children: g("div", {
                    class: "max-w-screen-md mx-auto flex flex-col items-center justify-center",
                    children: [
                        g("h1", {
                            class: "text-4xl font-bold",
                            children: "Relay"
                        }),
                        g("ul", {
                            class: "my-4",
                            children: [
                                g("li", {
                                    children: [
                                        g("span", {
                                            class: "font-bold",
                                            children: "Name:"
                                        }),
                                        " ",
                                        information?.name
                                    ]
                                }),
                                g("li", {
                                    children: [
                                        g("span", {
                                            class: "font-bold",
                                            children: "Description:"
                                        }),
                                        " ",
                                        information?.description
                                    ]
                                }),
                                g("li", {
                                    children: [
                                        g("span", {
                                            class: "font-bold",
                                            children: "Pubkey:"
                                        }),
                                        " ",
                                        information?.pubkey.hex
                                    ]
                                }),
                                g("li", {
                                    children: [
                                        g("span", {
                                            class: "font-bold",
                                            children: "Contact:"
                                        }),
                                        " ",
                                        information?.contact
                                    ]
                                }),
                                g("li", {
                                    children: [
                                        g("span", {
                                            class: "font-bold",
                                            children: "Supported NIPs:"
                                        }),
                                        " ",
                                        supported_nips.join(", ")
                                    ]
                                }),
                                g("li", {
                                    children: [
                                        g("span", {
                                            class: "font-bold",
                                            children: "Software:"
                                        }),
                                        " ",
                                        g("a", {
                                            href: software,
                                            target: "_blank",
                                            children: software
                                        })
                                    ]
                                }),
                                g("li", {
                                    children: [
                                        g("span", {
                                            class: "font-bold",
                                            children: "Version:"
                                        }),
                                        " ",
                                        information?.version
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
class RelayInformationStore {
    kv;
    default_information;
    constructor(kv, default_information){
        this.kv = kv;
        this.default_information = default_information;
        this.resolveRelayInformation = async ()=>{
            const entry = await this.kv.get([
                "relay_information"
            ]);
            if (!entry.value) {
                return {
                    ...this.default_information,
                    software,
                    supported_nips
                };
            }
            return {
                ...this.default_information,
                ...entry.value,
                software,
                supported_nips
            };
        };
        this.set_relay_information = async (args)=>{
            const old_information = await this.resolveRelayInformation();
            if (old_information instanceof Error) {
                return old_information;
            }
            const new_information = {
                ...old_information,
                ...args
            };
            await this.kv.set([
                "relay_information"
            ], new_information);
            return {
                ...this.default_information,
                ...new_information,
                software,
                supported_nips
            };
        };
    }
    resolveRelayInformation;
    set_relay_information;
}
async function run(args) {
    let kv = args.kv;
    if (kv == undefined) {
        kv = await Deno.openKv();
    }
    let db;
    let get_channel_by_id;
    db = new DB("relayed.db");
    db.execute(`${sqlite_schema}${event_schema_sqlite}`);
    get_channel_by_id = get_channel_by_id_sqlite(db);
    const write_replaceable_event = write_replaceable_event_sqlite(db);
    const write_regular_event = write_regular_event_sqlite(db);
    const get_event_count = get_event_count_sqlite(db);
    const get_events_by_filter = get_events_by_filter_sqlite(db, args._debug || false);
    if (args.admin == undefined) {
        const env_pubkey = Deno.env.get(ENV_relayed_pubkey);
        if (env_pubkey == undefined) {
            return new Error("public key is not set. Please set env var $relayed_pubkey or pass default_information.pubkey in the argument");
        }
        const p = PublicKey.FromString(env_pubkey);
        if (p instanceof Error) {
            return p;
        }
        args.admin = p;
    }
    const { default_policy } = args;
    const connections = new Map();
    let resolve_hostname;
    const hostname = new Promise((resolve)=>{
        resolve_hostname = resolve;
    });
    const get_all_policies = Policies(kv);
    const policyStore = new PolicyStore({
        default_policy,
        initial_policies: await get_all_policies(),
        kv
    });
    const relayInformationStore = new RelayInformationStore(kv, {
        ...args.default_information,
        pubkey: args.admin
    });
    const port = args.port || 8000;
    delete args.port;
    const server = Deno.serve({
        port,
        onListen: ({ hostname, port })=>{
            console.log(`☁  Relay server        started on   ws://${hostname}:${port}`);
            console.log(`☁  Relay admin GraphQL started on http://${hostname}:${port}/api`);
            resolve_hostname(hostname);
        }
    }, root_handler({
        ...args,
        is_member: is_member({
            admin: args.admin,
            policyStore
        }),
        delete_event: delete_event_sqlite(db),
        delete_events_from_pubkey: async ()=>{
            return [];
        },
        get_deleted_event_ids: async ()=>{
            return [];
        },
        connections,
        resolvePolicyByKind: policyStore.resolvePolicyByKind,
        get_event_count,
        get_events_by_filter,
        write_regular_event,
        write_replaceable_event,
        policyStore,
        relayInformationStore,
        get_relay_members: get_relay_members(db),
        create_channel: create_channel_sqlite(db),
        edit_channel: edit_channel_sqlite(db),
        kv: kv,
        _debug: args._debug ? true : false
    }));
    const shutdown = async ()=>{
        await server.shutdown();
        for (const socket of connections.keys()){
            socket.close();
        }
        console.log("close db");
        kv.close();
        db?.close();
    };
    return {
        server,
        ws_url: `ws://${await hostname}:${port}`,
        http_url: `http://${await hostname}:${port}`,
        shutdown,
        set_policy: policyStore.set_policy,
        get_policy: policyStore.resolvePolicyByKind,
        default_policy: args.default_policy,
        set_relay_information: relayInformationStore.set_relay_information,
        get_relay_information: relayInformationStore.resolveRelayInformation,
        get_event: async (id)=>{
            const events = await get_events_by_filter({
                ids: [
                    id
                ]
            });
            return events[0];
        },
        get_channel_by_id: (id)=>{
            return get_channel_by_id(id);
        },
        [Symbol.asyncDispose] () {
            return shutdown();
        }
    };
}
function atobSafe(data) {
    try {
        return atob(data);
    } catch (e) {
        return e;
    }
}
const ws_handler = (args)=>async (req, info)=>{
        const { connections } = args;
        if (req.headers.get("upgrade") != "websocket") {
            return new Response(null, {
                status: 501
            });
        }
        const { socket, response } = Deno.upgradeWebSocket(req);
        socket.onopen = ((socket)=>async (e)=>{
                console.log("a client connected!", info.remoteAddr);
                if (args.auth_required) {
                    const url = new URL(req.url);
                    const auth = url.searchParams.get("auth");
                    if (auth == null || auth == "") {
                        console.error(url, "no auth event found");
                        socket.close(3000, "no auth event found");
                        return;
                    }
                    const rawEvent = atobSafe(auth);
                    if (rawEvent instanceof Error) {
                        console.error(rawEvent);
                        socket.close(3000, rawEvent.message);
                        return;
                    }
                    const event = parseJSON(rawEvent);
                    if (event instanceof Error) {
                        console.error(event);
                        socket.close(3000, "invalid auth event format");
                        return;
                    }
                    const ok = await args.is_member(event.pubkey);
                    if (!ok) {
                        socket.close(3000, `pubkey ${event.pubkey} is not allowed`);
                        return;
                    }
                }
                connections.set(socket, new Map());
            })(socket);
        socket.onclose = ((socket)=>(e)=>{
                console.log("client disconnected", info.remoteAddr);
                connections.delete(socket);
            })(socket);
        socket.onmessage = onMessage({
            ...args,
            this_socket: socket,
            connections
        });
        return response;
    };
const root_handler = (args)=>async (req, info)=>{
        if (args._debug) {
            console.log(req);
        }
        const url = new URL(req.url);
        if (url.pathname === "/api/auth/login") {
            const body = await req.json();
            if (!body) {
                return new Response(`{"errors":"request body is null"}`, {
                    status: 400
                });
            }
            const error = await verifyToken(body, args.relayInformationStore);
            if (error instanceof Error) {
                return new Response(JSON.stringify(error.message), {
                    status: 400
                });
            } else {
                const auth = btoa(JSON.stringify(body));
                const headers = new Headers();
                const cookie = {
                    name: "token",
                    value: auth,
                    path: "/",
                    secure: true,
                    httpOnly: true,
                    sameSite: "Strict"
                };
                setCookie(headers, cookie);
                const resp = new Response("", {
                    status: 200,
                    headers
                });
                return resp;
            }
        }
        if (url.pathname == "/api") {
            return graphql_handler(args)(req);
        }
        if (url.pathname == "/") {
            if (req.method == "GET") {
                if (url.protocol == "http:" || url.protocol == "https:") {
                    if (req.headers.get("accept")?.includes("text/html")) {
                        return landing_handler(args);
                    }
                    if (req.headers.get("accept")?.includes("application/nostr+json")) {
                        return information_handler(args);
                    } else {
                        const relay_info = await args.relayInformationStore.resolveRelayInformation();
                        if (relay_info instanceof Error) {
                            console.error(relay_info);
                            return new Response("", {
                                status: 500
                            });
                        }
                        return ws_handler({
                            ...args
                        })(req, info);
                    }
                }
            } else if (req.method == "POST") {
                const text = await req.text();
                const event = parseJSON(text);
                if (event instanceof Error) {
                    return new Response(event.message, {
                        status: 400
                    });
                }
                const ok = await verify_event_v2(event);
                if (!ok) {
                    return new Response("event is not valid", {
                        status: 400
                    });
                }
                if (event.kind == Kind_V2.ChannelCreation) {
                    const ok = await args.create_channel(event);
                    if (ok) {
                        return new Response();
                    } else {
                        return new Response("failed to write event", {
                            status: 400
                        });
                    }
                } else if (event.kind == Kind_V2.ChannelEdition) {
                    const res = await args.edit_channel(event);
                    if (res instanceof Error) {
                        return new Response(res.message, {
                            status: 400
                        });
                    }
                    return new Response();
                } else {
                    return new Response(`not a recognizable event`, {
                        status: 400
                    });
                }
            }
        }
        const resp = new Response(ve(Error404()), {
            status: 404
        });
        resp.headers.set("content-type", "html");
        return resp;
    };
const landing_handler = async (args)=>{
    const storeInformation = await args.relayInformationStore.resolveRelayInformation();
    if (storeInformation instanceof Error) {
        return new Response(ve(Error404()), {
            status: 404
        });
    }
    const resp = new Response(ve(Landing(storeInformation), {
        status: 200
    }));
    resp.headers.set("content-type", "html");
    return resp;
};
const information_handler = async (args)=>{
    const storeInformation = await args.relayInformationStore.resolveRelayInformation();
    if (storeInformation instanceof Error) {
        return new Response(ve(Error404()), {
            status: 404
        });
    }
    const resp = new Response(JSON.stringify(storeInformation), {
        status: 200
    });
    resp.headers.set("content-type", "application/json; charset=utf-8");
    resp.headers.set("Access-Control-Allow-Origin", "*");
    resp.headers.set("Access-Control-Allow-Methods", "GET");
    resp.headers.set("Access-Control-Allow-Headers", "accept,content-type");
    return resp;
};
async function verifyToken(event, relayInformationStore) {
    if (!await verifyEvent(event)) {
        return new Error("token not verified");
    }
    const pubkey = PublicKey.FromString(event.pubkey);
    if (pubkey instanceof Error) {
        return pubkey;
    }
    const storeInformation = await relayInformationStore.resolveRelayInformation();
    if (storeInformation instanceof Error) {
        return storeInformation;
    }
    if (pubkey.hex !== storeInformation.pubkey.hex) {
        return new Error("your pubkey is not an admin");
    }
}
const is_member = (args)=>async (pubkey)=>{
        const { admin, policyStore } = args;
        const key = PublicKey.FromString(pubkey);
        if (key instanceof Error) {
            return key;
        }
        if (key.hex == admin.hex) {
            return true;
        }
        const policy = await policyStore.resolvePolicyByKind(NostrKind.TEXT_NOTE);
        if (policy instanceof Error) {
            return policy;
        }
        const policyAllow = policy.allow.has(pubkey);
        const policyBlock = policy.block.has(pubkey);
        return policyAllow && !policyBlock;
    };
const graphiql = `
<!--
 *  Copyright (c) 2021 GraphQL Contributors
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
-->
<!doctype html>
<html lang="en">
  <head>
    <title>GraphiQL</title>
    <style>
      body {
        height: 100%;
        margin: 0;
        width: 100%;
        overflow: hidden;
      }

      #graphiql {
        height: 95vh;
      }
    </style>
    <!--
      This GraphiQL example depends on Promise and fetch, which are available in
      modern browsers, but can be "polyfilled" for older browsers.
      GraphiQL itself depends on React DOM.
      If you do not want to rely on a CDN, you can host these files locally or
      include them directly in your favored resource bundler.
    -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <!--
      These two files can be found in the npm module, however you may wish to
      copy them directly into your environment, or perhaps include them in your
      favored resource bundler.
     -->
    <script
      src="https://unpkg.com/graphiql/graphiql.min.js"
      type="application/javascript"
    ></script>
    <link rel="stylesheet" href="https://unpkg.com/graphiql/graphiql.min.css" />
    <!--
      These are imports for the GraphIQL Explorer plugin.
     -->
    <script
      src="https://unpkg.com/@graphiql/plugin-explorer/dist/index.umd.js"
      crossorigin
    ></script>

    <link
      rel="stylesheet"
      href="https://unpkg.com/@graphiql/plugin-explorer/dist/style.css"
    />
  </head>

  <body>
    <button id="nip7">Login with NIP-07 extensions</button>
    <div id="graphiql">Loading...</div>
    <script>
      const root = ReactDOM.createRoot(document.getElementById('graphiql'));
      const fetcher = GraphiQL.createFetcher({
        url: './api',
      });
      const explorerPlugin = GraphiQLPluginExplorer.explorerPlugin();
      root.render(
        React.createElement(GraphiQL, {
          fetcher,
          defaultEditorToolsVisibility: true,
          plugins: [explorerPlugin],
        }),
      );
      const nip7 = document.getElementById('nip7');
        nip7.onclick = async () => {
            if ("nostr" in window) {
                try {
                    const ext = window.nostr;
                    const pubkey = await ext.getPublicKey();
                    const unsigned_event = {
                        pubkey,
                        content: "",
                        created_at: Math.floor(Date.now() / 1000),
                        kind: 27235,
                        tags: [],
                    }
                    const event = await ext.signEvent(unsigned_event);
                    const response = await fetch('/api/auth/login', {
                        method: 'POST',
                        body: JSON.stringify(event),
                    })
                    if(response.status === 200) {
                        nip7.innerText = "Logged in";
                    } else {
                        const text = await response.text();
                        alert(text || "Login failed");
                    }
                } catch (e) {
                    console.error(e);
                }
            } else {
                alert("Nostr extension not found");
            }
        };
    </script>
  </body>
</html>`;
export { atobSafe as atobSafe };
export { software as software };
function send_event_to_subscription(ws, event, sub_id, filter) {
    if (filter.filter.limit && filter.eventSent < filter.filter.limit || filter.filter.limit == undefined) {
        ws.send(JSON.stringify(respond_event(sub_id, event)));
        filter.eventSent++;
        return true;
    }
    return false;
}
function onMessage(deps) {
    const { this_socket, connections } = deps;
    return async (event)=>{
        const nostr_ws_msg = parseJSON(event.data);
        if (nostr_ws_msg instanceof Error) {
            console.error(nostr_ws_msg);
            return;
        }
        if (!(nostr_ws_msg instanceof Array)) {
            console.error("should be an array:", nostr_ws_msg);
            return;
        }
        const cmd = nostr_ws_msg[0];
        if (cmd == "EVENT") {
            const err = await handle_cmd_event({
                ...deps,
                this_socket,
                connections,
                nostr_ws_msg
            });
            if (err instanceof Error) {
                console.error(err);
            }
        } else if (cmd == "REQ") {
            const err = await handle_cmd_req(nostr_ws_msg, {
                ...deps,
                this_socket
            });
            if (err instanceof Error) {
                console.error(err);
            }
        } else if (cmd == "CLOSE") {} else {
            console.log("not implemented", event.data);
        }
    };
}
async function handle_cmd_event(args) {
    const { this_socket, connections, nostr_ws_msg, resolvePolicyByKind } = args;
    const event = nostr_ws_msg[1];
    {
        const ok = await verifyEvent(event);
        if (!ok) {
            return send(this_socket, JSON.stringify(respond_ok(event, false, "invalid event")));
        }
    }
    const policy = await resolvePolicyByKind(event.kind);
    if (policy instanceof Error) {
        return policy;
    }
    {
        const author = PublicKey.FromHex(event.pubkey);
        if (policy.write) {
            if (policy.block.has(author.hex)) {
                return send(this_socket, JSON.stringify(respond_ok(event, false, "this pubkey is blocked")));
            }
        } else {
            if (!policy.allow.has(author.hex) && !policy.allow.has(author.hex)) {
                return send(this_socket, JSON.stringify(respond_ok(event, false, `kind ${event.kind} is blocked`)));
            }
        }
    }
    if (event.kind == NostrKind.DELETE) {
        for (const e of getTags(event).e){
            const ok = await args.delete_event(e);
            if (!ok) {
                console.error("failed to delete", e);
            }
        }
    }
    let ok;
    if (event.kind == NostrKind.META_DATA || event.kind == NostrKind.CONTACTS || 10000 <= event.kind && event.kind < 20000) {
        ok = await args.write_replaceable_event(event);
    } else {
        ok = await args.write_regular_event(event);
    }
    if (ok instanceof Error) {
        console.error(ok);
        send(this_socket, JSON.stringify(respond_ok(event, false, ok.message)));
        return;
    } else if (ok) {
        send(this_socket, JSON.stringify(respond_ok(event, true, "")));
    } else {
        send(this_socket, JSON.stringify(respond_ok(event, false, "")));
    }
    for (const matched of matchEventWithSubscriptions(event, connections)){
        const pub = PublicKey.FromHex(event.pubkey);
        if (policy.read == false && !policy.allow.has(event.pubkey) && !policy.allow.has(pub.hex)) {
            return;
        }
        send_event_to_subscription(matched.socket, event, matched.sub_id, matched.filter);
    }
}
async function handle_cmd_req(nostr_ws_msg, args) {
    const { this_socket } = args;
    const sub_id = nostr_ws_msg[1];
    const filters = nostr_ws_msg.slice(2);
    const subscriptions = args.connections.get(this_socket);
    if (subscriptions) {
        if (subscriptions.size > 10) {
            send(this_socket, JSON.stringify(respond_notice(`${sub_id}:only accept at most 10 subscriptions`)));
            return;
        }
        subscriptions.set(sub_id, filters.map((f)=>{
            return {
                filter: f,
                eventSent: 0
            };
        }));
    }
    for (const filter of filters){
        const event_candidates = await args.get_events_by_filter(filter);
        if (event_candidates instanceof Error) {
            return event_candidates;
        }
        for (const event of event_candidates){
            const policy = await args.resolvePolicyByKind(event.kind);
            if (policy instanceof Error) {
                return policy;
            }
            if (policy.read == false && !policy.allow.has(event.pubkey)) {
                continue;
            }
            send(this_socket, JSON.stringify(respond_event(sub_id, event)));
        }
    }
    return send(this_socket, JSON.stringify(respond_eose(sub_id)));
}
function respond_event(sub_id, event) {
    return [
        "EVENT",
        sub_id,
        event
    ];
}
function respond_ok(event, ok, message) {
    return [
        "OK",
        event.id,
        ok,
        message
    ];
}
function respond_eose(sub_id) {
    return [
        "EOSE",
        sub_id
    ];
}
function respond_notice(message) {
    return [
        "NOTICE",
        message
    ];
}
function* matchEventWithSubscriptions(event, connections) {
    for (const [socket, subscriptions] of connections){
        for (const [sub_id, filters] of subscriptions){
            const matched_filter = isMatched(event, filters);
            if (matched_filter) {
                yield {
                    socket,
                    sub_id,
                    event,
                    filter: matched_filter
                };
            }
        }
    }
}
function isMatched(event, subscription) {
    for (const _filter of subscription){
        const filter = _filter.filter;
        const kinds = filter.kinds || [];
        const authors = filter.authors || [];
        const ids = filter.ids || [];
        const ps = filter["#p"] || [];
        const es = filter["#e"] || [];
        const match_kind = kinds.length == 0 ? true : kinds.includes(event.kind);
        const match_author = authors.length == 0 ? true : authors.includes(event.pubkey);
        const match_id = ids.length == 0 ? true : ids.includes(event.id);
        const match_p_tag = ps.length == 0 ? true : ps.includes(event.pubkey);
        const match_e_tag = es.length == 0 ? true : es.includes(event.id);
        const res = match_kind && match_author && match_id && match_p_tag && match_e_tag || kinds.length == 0 && authors.length == 0 && ids.length == 0 && ps.length == 0 && es.length == 0;
        if (res) {
            return _filter;
        }
    }
}
function send(socket, data) {
    if (socket.readyState == socket.OPEN) {
        socket.send(data);
    }
}
export { ENV_relayed_pubkey as ENV_relayed_pubkey };
export { run as run };