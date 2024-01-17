(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [41], {
        24394: function(e, t, i) {
            "use strict";
            i.d(t, {
                K: function() {
                    return s
                },
                k: function() {
                    return n
                }
            });
            var s = function() {},
                n = function() {}
        },
        90638: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                let i = r.default,
                    n = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: i,
                                pastDelay: s
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? n.loader = () => e : "function" == typeof e ? n.loader = e : "object" == typeof e && (n = s({}, n, e)), n = s({}, n, t);
                let l = n.loader,
                    u = () => null != l ? l().then(a) : Promise.resolve(a(() => null));
                return (n.loadableGenerated && delete(n = s({}, n, n.loadableGenerated)).loadableGenerated, "boolean" != typeof n.ssr || n.ssr) ? i(s({}, n, {
                    loader: u
                })) : (delete n.webpack, delete n.modules, o(i, n))
            }, t.noSSR = o;
            var s = i(6495).Z,
                n = i(92648).Z,
                r = (n(i(67294)), n(i(14302)));

            function a(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function o(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        16319: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LoadableContext = void 0;
            var s = (0, i(92648).Z)(i(67294));
            let n = s.default.createContext(null);
            t.LoadableContext = n
        },
        14302: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(6495).Z,
                n = (0, i(92648).Z)(i(67294)),
                r = i(16319);
            let a = [],
                o = [],
                l = !1;

            function u(e) {
                let t = e(),
                    i = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return i.promise = t.then(e => (i.loading = !1, i.loaded = e, e)).catch(e => {
                    throw i.loading = !1, i.error = e, e
                }), i
            }
            class c {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, t.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = s({}, this._state, {
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading
                    }, e), this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            }

            function h(e) {
                return function(e, t) {
                    let i = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        s = null;

                    function a() {
                        if (!s) {
                            let t = new c(e, i);
                            s = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return s.promise()
                    }
                    if (!l) {
                        let e = i.webpack ? i.webpack() : i.modules;
                        e && o.push(t => {
                            for (let i of e)
                                if (-1 !== t.indexOf(i)) return a()
                        })
                    }

                    function u(e, t) {
                        ! function() {
                            a();
                            let e = n.default.useContext(r.LoadableContext);
                            e && Array.isArray(i.modules) && i.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let o = n.default.useSyncExternalStore(s.subscribe, s.getCurrentValue, s.getCurrentValue);
                        return n.default.useImperativeHandle(t, () => ({
                            retry: s.retry
                        }), []), n.default.useMemo(() => {
                            var t;
                            return o.loading || o.error ? n.default.createElement(i.loading, {
                                isLoading: o.loading,
                                pastDelay: o.pastDelay,
                                timedOut: o.timedOut,
                                error: o.error,
                                retry: s.retry
                            }) : o.loaded ? n.default.createElement((t = o.loaded) && t.default ? t.default : t, e) : null
                        }, [e, o])
                    }
                    return u.preload = () => a(), u.displayName = "LoadableComponent", n.default.forwardRef(u)
                }(u, e)
            }

            function d(e, t) {
                let i = [];
                for (; e.length;) {
                    let s = e.pop();
                    i.push(s(t))
                }
                return Promise.all(i).then(() => {
                    if (e.length) return d(e, t)
                })
            }
            h.preloadAll = () => new Promise((e, t) => {
                d(a).then(e, t)
            }), h.preloadReady = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise(t => {
                    let i = () => (l = !0, t());
                    d(o, e).then(i, i)
                })
            }, window.__NEXT_PRELOADREADY = h.preloadReady, t.default = h
        },
        39156: function() {},
        5152: function(e, t, i) {
            e.exports = i(90638)
        },
        23106: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return v
                }
            });
            var s = i(67294),
                n = i(21443),
                r = i.n(n),
                a = i(45697),
                o = i.n(a),
                l = Object.defineProperty,
                u = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                h = Object.prototype.propertyIsEnumerable,
                d = (e, t, i) => t in e ? l(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                p = (e, t) => {
                    for (var i in t || (t = {})) c.call(t, i) && d(e, i, t[i]);
                    if (u)
                        for (var i of u(t)) h.call(t, i) && d(e, i, t[i]);
                    return e
                },
                m = (e, t) => {
                    var i = {};
                    for (var s in e) c.call(e, s) && 0 > t.indexOf(s) && (i[s] = e[s]);
                    if (null != e && u)
                        for (var s of u(e)) 0 > t.indexOf(s) && h.call(e, s) && (i[s] = e[s]);
                    return i
                };
            let f = (e, t) => {
                    let i = new(r())(".plyr-react", t.options || {});
                    return t.source && (i.source = t.source), i
                },
                g = e => {
                    e && e.destroy()
                },
                y = () => {},
                b = e => e ? () => ({
                    plyr: e
                }) : () => new Proxy({
                    plyr: {
                        source: null
                    }
                }, {
                    get: (e, t) => "plyr" === t ? e[t] : y
                }),
                v = s.forwardRef((e, t) => {
                    let {
                        source: i,
                        options: n = null
                    } = e, r = m(e, ["source", "options"]), a = function(e, t, i = null) {
                        return function(e, t, i = []) {
                            let [n, r] = (0, s.useState)(null), a = (0, s.useRef)(null), {
                                instantiate: o,
                                destroy: l,
                                getAPI: u,
                                params: c
                            } = t;
                            (0, s.useEffect)(() => {
                                let e = o(a.current, c);
                                return r(e), () => {
                                    l && l(e, c)
                                }
                            }, i);
                            let h = (0, s.useMemo)(() => u(n, c), [n]);
                            return (0, s.useImperativeHandle)(e, h, [h]), a
                        }(e, {
                            instantiate: f,
                            getAPI: b,
                            destroy: g,
                            params: t
                        }, i || [t.options, t.source])
                    }(t, {
                        source: i,
                        options: n
                    });
                    return s.createElement("video", p({
                        ref: a,
                        className: "plyr-react plyr"
                    }, r))
                });
            v.displayName = "Plyr", v.defaultProps = {
                options: {
                    controls: ["rewind", "play", "fast-forward", "progress", "current-time", "duration", "mute", "volume", "settings", "fullscreen"],
                    i18n: {
                        restart: "Restart",
                        rewind: "Rewind {seektime}s",
                        play: "Play",
                        pause: "Pause",
                        fastForward: "Forward {seektime}s",
                        seek: "Seek",
                        seekLabel: "{currentTime} of {duration}",
                        played: "Played",
                        buffered: "Buffered",
                        currentTime: "Current time",
                        duration: "Duration",
                        volume: "Volume",
                        mute: "Mute",
                        unmute: "Unmute",
                        enableCaptions: "Enable captions",
                        disableCaptions: "Disable captions",
                        download: "Download",
                        enterFullscreen: "Enter fullscreen",
                        exitFullscreen: "Exit fullscreen",
                        frameTitle: "Player for {title}",
                        captions: "Captions",
                        settings: "Settings",
                        menuBack: "Go back to previous menu",
                        speed: "Speed",
                        normal: "Normal",
                        quality: "Quality",
                        loop: "Loop"
                    }
                },
                source: {
                    type: "video",
                    sources: [{
                        src: "https://cdn.plyr.io/static/blank.mp4",
                        type: "video/mp4",
                        size: 720
                    }, {
                        src: "https://cdn.plyr.io/static/blank.mp4",
                        type: "video/mp4",
                        size: 1080
                    }]
                }
            }, v.propTypes = {
                options: o().object,
                source: o().any
            }
        },
        21443: function(e, t, i) {
            "object" == typeof navigator && (e.exports = function() {
                "use strict";

                function e(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }

                function t(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var s = t[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }

                function s(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        t && (s = s.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), i.push.apply(i, s)
                    }
                    return i
                }

                function n(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(i), !0).forEach(function(t) {
                            var s, n;
                            s = e, n = i[t], t in s ? Object.defineProperty(s, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : s[t] = n
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        })
                    }
                    return e
                }
                var r, a, o, l = {
                        addCSS: !0,
                        thumbWidth: 15,
                        watch: !0
                    },
                    u = function(e) {
                        return null != e ? e.constructor : null
                    },
                    c = function(e, t) {
                        return !!(e && t && e instanceof t)
                    },
                    h = function(e) {
                        return u(e) === String
                    },
                    d = function(e) {
                        return Array.isArray(e)
                    },
                    p = function(e) {
                        return c(e, NodeList)
                    },
                    m = function(e) {
                        return c(e, Element)
                    },
                    f = function(e) {
                        return c(e, Event)
                    },
                    g = function(e) {
                        return null == e || (h(e) || d(e) || p(e)) && !e.length || u(e) === Object && !Object.keys(e).length
                    },
                    y = function() {
                        var e, i;

                        function s(e, t) {
                            (function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            })(this, s), m(e) ? this.element = e : h(e) && (this.element = document.querySelector(e)), m(this.element) && g(this.element.rangeTouch) && (this.config = n({}, l, {}, t), this.init())
                        }
                        return e = [{
                            key: "init",
                            value: function() {
                                s.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                s.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                            }
                        }, {
                            key: "listeners",
                            value: function(e) {
                                var t = this,
                                    i = e ? "addEventListener" : "removeEventListener";
                                ["touchstart", "touchmove", "touchend"].forEach(function(e) {
                                    t.element[i](e, function(e) {
                                        return t.set(e)
                                    }, !1)
                                })
                            }
                        }, {
                            key: "get",
                            value: function(e) {
                                if (!s.enabled || !f(e)) return null;
                                var t, i = e.target,
                                    n = e.changedTouches[0],
                                    r = parseFloat(i.getAttribute("min")) || 0,
                                    a = parseFloat(i.getAttribute("max")) || 100,
                                    o = parseFloat(i.getAttribute("step")) || 1,
                                    l = i.getBoundingClientRect(),
                                    u = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                                return 0 > (t = 100 / l.width * (n.clientX - l.left)) ? t = 0 : 100 < t && (t = 100), 50 > t ? t -= (100 - 2 * t) * u : 50 < t && (t += 2 * (t - 50) * u), r + function(e, t) {
                                    if (1 > t) {
                                        var i, s = (i = "".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (i[1] ? i[1].length : 0) - (i[2] ? +i[2] : 0)) : 0;
                                        return parseFloat(e.toFixed(s))
                                    }
                                    return Math.round(e / t) * t
                                }(t / 100 * (a - r), o)
                            }
                        }, {
                            key: "set",
                            value: function(e) {
                                s.enabled && f(e) && !e.target.disabled && (e.preventDefault(), e.target.value = this.get(e), function(e, t) {
                                    if (e && t) {
                                        var i = new Event(t, {
                                            bubbles: !0
                                        });
                                        e.dispatchEvent(i)
                                    }
                                }(e.target, "touchend" === e.type ? "change" : "input"))
                            }
                        }], i = [{
                            key: "setup",
                            value: function(e) {
                                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                    i = null;
                                if (g(e) || h(e) ? i = Array.from(document.querySelectorAll(h(e) ? e : 'input[type="range"]')) : m(e) ? i = [e] : p(e) ? i = Array.from(e) : d(e) && (i = e.filter(m)), g(i)) return null;
                                var r = n({}, l, {}, t);
                                return h(e) && r.watch && new MutationObserver(function(t) {
                                    Array.from(t).forEach(function(t) {
                                        Array.from(t.addedNodes).forEach(function(t) {
                                            var i;
                                            m(t) && (function() {
                                                return Array.from(document.querySelectorAll(i)).includes(this)
                                            }).call(t, i = e) && new s(t, r)
                                        })
                                    })
                                }).observe(document.body, {
                                    childList: !0,
                                    subtree: !0
                                }), i.map(function(e) {
                                    return new s(e, t)
                                })
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return "ontouchstart" in document.documentElement
                            }
                        }], e && t(s.prototype, e), i && t(s, i), s
                    }();
                let b = e => null != e ? e.constructor : null,
                    v = (e, t) => Boolean(e && t && e instanceof t),
                    w = e => null == e,
                    T = e => b(e) === Object,
                    k = e => b(e) === String,
                    x = e => "function" == typeof e,
                    A = e => Array.isArray(e),
                    P = e => v(e, NodeList),
                    E = e => w(e) || (k(e) || A(e) || P(e)) && !e.length || T(e) && !Object.keys(e).length;
                var S = e => b(e) === Number && !Number.isNaN(e),
                    C = e => b(e) === Boolean,
                    M = e => null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument,
                    L = e => v(e, Event),
                    V = e => v(e, KeyboardEvent),
                    O = e => v(e, TextTrack) || !w(e) && k(e.kind),
                    R = e => v(e, Promise) && x(e.then),
                    I = e => {
                        if (v(e, window.URL)) return !0;
                        if (!k(e)) return !1;
                        let t = e;
                        e.startsWith("http://") && e.startsWith("https://") || (t = `http://${e}`);
                        try {
                            return !E(new URL(t).hostname)
                        } catch (e) {
                            return !1
                        }
                    };
                let N = (() => {
                    let e = document.createElement("span"),
                        t = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        },
                        i = Object.keys(t).find(t => void 0 !== e.style[t]);
                    return !!k(i) && t[i]
                })();

                function j(e, t) {
                    setTimeout(() => {
                        try {
                            e.hidden = !0, e.offsetHeight, e.hidden = !1
                        } catch (e) {}
                    }, t)
                }
                let D = {
                    isIE: Boolean(window.document.documentMode),
                    isEdge: /Edge/g.test(navigator.userAgent),
                    isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent),
                    isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1,
                    isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1
                };

                function $(e, t) {
                    return t.split(".").reduce((e, t) => e && e[t], e)
                }

                function _(e = {}, ...t) {
                    if (!t.length) return e;
                    let i = t.shift();
                    return T(i) ? (Object.keys(i).forEach(t => {
                        T(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, {
                            [t]: {}
                        }), _(e[t], i[t])) : Object.assign(e, {
                            [t]: i[t]
                        })
                    }), _(e, ...t)) : e
                }

                function F(e, t) {
                    let i = e.length ? e : [e];
                    Array.from(i).reverse().forEach((e, i) => {
                        let s = i > 0 ? t.cloneNode(!0) : t,
                            n = e.parentNode,
                            r = e.nextSibling;
                        s.appendChild(e), r ? n.insertBefore(s, r) : n.appendChild(s)
                    })
                }

                function B(e, t) {
                    M(e) && !E(t) && Object.entries(t).filter(([, e]) => !w(e)).forEach(([t, i]) => e.setAttribute(t, i))
                }

                function U(e, t, i) {
                    let s = document.createElement(e);
                    return T(t) && B(s, t), k(i) && (s.innerText = i), s
                }

                function H(e, t, i, s) {
                    M(t) && t.appendChild(U(e, i, s))
                }

                function q(e) {
                    P(e) || A(e) ? Array.from(e).forEach(q) : M(e) && M(e.parentNode) && e.parentNode.removeChild(e)
                }

                function z(e) {
                    if (!M(e)) return;
                    let {
                        length: t
                    } = e.childNodes;
                    for (; t > 0;) e.removeChild(e.lastChild), t -= 1
                }

                function W(e, t) {
                    return M(t) && M(t.parentNode) && M(e) ? (t.parentNode.replaceChild(e, t), e) : null
                }

                function Y(e, t) {
                    if (!k(e) || E(e)) return {};
                    let i = {},
                        s = _({}, t);
                    return e.split(",").forEach(e => {
                        let t = e.trim(),
                            n = t.replace(".", ""),
                            r = t.replace(/[[\]]/g, "").split("="),
                            [a] = r,
                            o = r.length > 1 ? r[1].replace(/["']/g, "") : "";
                        switch (t.charAt(0)) {
                            case ".":
                                k(s.class) ? i.class = `${s.class} ${n}` : i.class = n;
                                break;
                            case "#":
                                i.id = t.replace("#", "");
                                break;
                            case "[":
                                i[a] = o
                        }
                    }), _(s, i)
                }

                function K(e, t) {
                    if (!M(e)) return;
                    let i = t;
                    C(i) || (i = !e.hidden), e.hidden = i
                }

                function X(e, t, i) {
                    if (P(e)) return Array.from(e).map(e => X(e, t, i));
                    if (M(e)) {
                        let s = "toggle";
                        return void 0 !== i && (s = i ? "add" : "remove"), e.classList[s](t), e.classList.contains(t)
                    }
                    return !1
                }

                function Z(e, t) {
                    return M(e) && e.classList.contains(t)
                }

                function G(e, t) {
                    let {
                        prototype: i
                    } = Element;
                    return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
                        return Array.from(document.querySelectorAll(t)).includes(this)
                    }).call(e, t)
                }

                function Q(e) {
                    return this.elements.container.querySelectorAll(e)
                }

                function J(e) {
                    return this.elements.container.querySelector(e)
                }

                function ee(e = null, t = !1) {
                    M(e) && (e.focus({
                        preventScroll: !0
                    }), t && X(e, this.config.classNames.tabFocus))
                }
                let et = {
                        "audio/ogg": "vorbis",
                        "audio/wav": "1",
                        "video/webm": "vp8, vorbis",
                        "video/mp4": "avc1.42E01E, mp4a.40.2",
                        "video/ogg": "theora"
                    },
                    ei = {
                        audio: "canPlayType" in document.createElement("audio"),
                        video: "canPlayType" in document.createElement("video"),
                        check(e, t, i) {
                            let s = D.isIPhone && i && ei.playsinline,
                                n = ei[e] || "html5" !== t;
                            return {
                                api: n,
                                ui: n && ei.rangeInput && ("video" !== e || !D.isIPhone || s)
                            }
                        },
                        pip: !(D.isIPhone || !x(U("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || U("video").disablePictureInPicture)),
                        airplay: x(window.WebKitPlaybackTargetAvailabilityEvent),
                        playsinline: "playsInline" in document.createElement("video"),
                        mime(e) {
                            if (E(e)) return !1;
                            let [t] = e.split("/"), i = e;
                            if (!this.isHTML5 || t !== this.type) return !1;
                            Object.keys(et).includes(i) && (i += `; codecs="${et[e]}"`);
                            try {
                                return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
                            } catch (e) {
                                return !1
                            }
                        },
                        textTracks: "textTracks" in document.createElement("video"),
                        rangeInput: (() => {
                            let e = document.createElement("input");
                            return e.type = "range", "range" === e.type
                        })(),
                        touch: "ontouchstart" in document.documentElement,
                        transitions: !1 !== N,
                        reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                    },
                    es = (() => {
                        let e = !1;
                        try {
                            let t = Object.defineProperty({}, "passive", {
                                get: () => (e = !0, null)
                            });
                            window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                        } catch (e) {}
                        return e
                    })();

                function en(e, t, i, s = !1, n = !0, r = !1) {
                    if (!e || !("addEventListener" in e) || E(t) || !x(i)) return;
                    let a = t.split(" "),
                        o = r;
                    es && (o = {
                        passive: n,
                        capture: r
                    }), a.forEach(t => {
                        this && this.eventListeners && s && this.eventListeners.push({
                            element: e,
                            type: t,
                            callback: i,
                            options: o
                        }), e[s ? "addEventListener" : "removeEventListener"](t, i, o)
                    })
                }

                function er(e, t = "", i, s = !0, n = !1) {
                    en.call(this, e, t, i, !0, s, n)
                }

                function ea(e, t = "", i, s = !0, n = !1) {
                    en.call(this, e, t, i, !1, s, n)
                }

                function eo(e, t = "", i, s = !0, n = !1) {
                    let r = (...a) => {
                        ea(e, t, r, s, n), i.apply(this, a)
                    };
                    en.call(this, e, t, r, !0, s, n)
                }

                function el(e, t = "", i = !1, s = {}) {
                    if (!M(e) || E(t)) return;
                    let n = new CustomEvent(t, {
                        bubbles: i,
                        detail: { ...s,
                            plyr: this
                        }
                    });
                    e.dispatchEvent(n)
                }

                function eu() {
                    this && this.eventListeners && (this.eventListeners.forEach(e => {
                        let {
                            element: t,
                            type: i,
                            callback: s,
                            options: n
                        } = e;
                        t.removeEventListener(i, s, n)
                    }), this.eventListeners = [])
                }

                function ec() {
                    return new Promise(e => this.ready ? setTimeout(e, 0) : er.call(this, this.elements.container, "ready", e)).then(() => {})
                }

                function eh(e) {
                    R(e) && e.then(null, () => {})
                }

                function ed(e) {
                    return A(e) ? e.filter((t, i) => e.indexOf(t) === i) : e
                }

                function ep(e, t) {
                    return A(e) && e.length ? e.reduce((e, i) => Math.abs(i - t) < Math.abs(e - t) ? i : e) : null
                }

                function em(e) {
                    return !(!window || !window.CSS) && window.CSS.supports(e)
                }
                let ef = [
                    [1, 1],
                    [4, 3],
                    [3, 4],
                    [5, 4],
                    [4, 5],
                    [3, 2],
                    [2, 3],
                    [16, 10],
                    [10, 16],
                    [16, 9],
                    [9, 16],
                    [21, 9],
                    [9, 21],
                    [32, 9],
                    [9, 32]
                ].reduce((e, [t, i]) => ({ ...e,
                    [t / i]: [t, i]
                }), {});

                function eg(e) {
                    return !!(A(e) || k(e) && e.includes(":")) && (A(e) ? e : e.split(":")).map(Number).every(S)
                }

                function ey(e) {
                    if (!A(e) || !e.every(S)) return null;
                    let [t, i] = e, s = (e, t) => 0 === t ? e : s(t, e % t), n = s(t, i);
                    return [t / n, i / n]
                }

                function eb(e) {
                    let t = e => eg(e) ? e.split(":").map(Number) : null,
                        i = t(e);
                    if (null === i && (i = t(this.config.ratio)), null === i && !E(this.embed) && A(this.embed.ratio) && ({
                            ratio: i
                        } = this.embed), null === i && this.isHTML5) {
                        let {
                            videoWidth: e,
                            videoHeight: t
                        } = this.media;
                        i = [e, t]
                    }
                    return ey(i)
                }

                function ev(e) {
                    if (!this.isVideo) return {};
                    let {
                        wrapper: t
                    } = this.elements, i = eb.call(this, e);
                    if (!A(i)) return {};
                    let [s, n] = ey(i), r = 100 / s * n;
                    if (em(`aspect-ratio: ${s}/${n}`) ? t.style.aspectRatio = `${s}/${n}` : t.style.paddingBottom = `${r}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                        let e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
                        this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${(e-r)/(e/50)}%)`
                    } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
                    return {
                        padding: r,
                        ratio: i
                    }
                }

                function ew(e, t, i = .05) {
                    let s = e / t,
                        n = ep(Object.keys(ef), s);
                    return Math.abs(n - s) <= i ? ef[n] : [e, t]
                }
                let eT = {
                    getSources() {
                        return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(e => {
                            let t = e.getAttribute("type");
                            return !!E(t) || ei.mime.call(this, t)
                        }) : []
                    },
                    getQualityOptions() {
                        return this.config.quality.forced ? this.config.quality.options : eT.getSources.call(this).map(e => Number(e.getAttribute("size"))).filter(Boolean)
                    },
                    setup() {
                        if (!this.isHTML5) return;
                        let e = this;
                        e.options.speed = e.config.speed.options, E(this.config.ratio) || ev.call(e), Object.defineProperty(e.media, "quality", {
                            get() {
                                let t = eT.getSources.call(e).find(t => t.getAttribute("src") === e.source);
                                return t && Number(t.getAttribute("size"))
                            },
                            set(t) {
                                if (e.quality !== t) {
                                    if (e.config.quality.forced && x(e.config.quality.onChange)) e.config.quality.onChange(t);
                                    else {
                                        let i = eT.getSources.call(e).find(e => Number(e.getAttribute("size")) === t);
                                        if (!i) return;
                                        let {
                                            currentTime: s,
                                            paused: n,
                                            preload: r,
                                            readyState: a,
                                            playbackRate: o
                                        } = e.media;
                                        e.media.src = i.getAttribute("src"), ("none" !== r || a) && (e.once("loadedmetadata", () => {
                                            e.speed = o, e.currentTime = s, n || eh(e.play())
                                        }), e.media.load())
                                    }
                                    el.call(e, e.media, "qualitychange", !1, {
                                        quality: t
                                    })
                                }
                            }
                        })
                    },
                    cancelRequests() {
                        this.isHTML5 && (q(eT.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
                    }
                };

                function ek(e, ...t) {
                    return E(e) ? e : e.toString().replace(/{(\d+)}/g, (e, i) => t[i].toString())
                }
                let ex = (e = "", t = "", i = "") => e.replace(RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString()),
                    eA = (e = "") => e.toString().replace(/\w\S*/g, e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());

                function eP(e) {
                    let t = document.createElement("div");
                    return t.appendChild(e), t.innerHTML
                }
                let eE = {
                        pip: "PIP",
                        airplay: "AirPlay",
                        html5: "HTML5",
                        vimeo: "Vimeo",
                        youtube: "YouTube"
                    },
                    eS = {
                        get(e = "", t = {}) {
                            if (E(e) || E(t)) return "";
                            let i = $(t.i18n, e);
                            if (E(i)) return Object.keys(eE).includes(e) ? eE[e] : "";
                            let s = {
                                "{seektime}": t.seekTime,
                                "{title}": t.title
                            };
                            return Object.entries(s).forEach(([e, t]) => {
                                i = ex(i, e, t)
                            }), i
                        }
                    };
                class eC {
                    constructor(t) {
                        e(this, "get", e => {
                            if (!eC.supported || !this.enabled) return null;
                            let t = window.localStorage.getItem(this.key);
                            if (E(t)) return null;
                            let i = JSON.parse(t);
                            return k(e) && e.length ? i[e] : i
                        }), e(this, "set", e => {
                            if (!eC.supported || !this.enabled || !T(e)) return;
                            let t = this.get();
                            E(t) && (t = {}), _(t, e);
                            try {
                                window.localStorage.setItem(this.key, JSON.stringify(t))
                            } catch (e) {}
                        }), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
                    }
                    static get supported() {
                        try {
                            if (!("localStorage" in window)) return !1;
                            let e = "___test";
                            return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
                        } catch (e) {
                            return !1
                        }
                    }
                }

                function eM(e, t = "text") {
                    return new Promise((i, s) => {
                        try {
                            let s = new XMLHttpRequest;
                            if (!("withCredentials" in s)) return;
                            s.addEventListener("load", () => {
                                if ("text" === t) try {
                                    i(JSON.parse(s.responseText))
                                } catch (e) {
                                    i(s.responseText)
                                } else i(s.response)
                            }), s.addEventListener("error", () => {
                                throw Error(s.status)
                            }), s.open("GET", e, !0), s.responseType = t, s.send()
                        } catch (e) {
                            s(e)
                        }
                    })
                }

                function eL(e, t) {
                    if (!k(e)) return;
                    let i = k(t),
                        s = () => null !== document.getElementById(t),
                        n = (e, t) => {
                            e.innerHTML = t, i && s() || document.body.insertAdjacentElement("afterbegin", e)
                        };
                    if (!i || !s()) {
                        let s = eC.supported,
                            r = document.createElement("div");
                        if (r.setAttribute("hidden", ""), i && r.setAttribute("id", t), s) {
                            let e = window.localStorage.getItem(`cache-${t}`);
                            if (null !== e) {
                                let t = JSON.parse(e);
                                n(r, t.content)
                            }
                        }
                        eM(e).then(e => {
                            if (!E(e)) {
                                if (s) try {
                                    window.localStorage.setItem(`cache-${t}`, JSON.stringify({
                                        content: e
                                    }))
                                } catch (e) {}
                                n(r, e)
                            }
                        }).catch(() => {})
                    }
                }
                let eV = e => Math.trunc(e / 60 / 60 % 60, 10);

                function eO(e = 0, t = !1, i = !1) {
                    if (!S(e)) return eO(void 0, t, i);
                    let s = e => `0${e}`.slice(-2),
                        n = eV(e);
                    return `${i&&e>0?"-":""}${n=t||n>0?`${n}:`:""}${s(Math.trunc(e/60%60,10))}:${s(Math.trunc(e%60,10))}`
                }
                let eR = {
                    getIconUrl() {
                        let e = new URL(this.config.iconUrl, window.location),
                            t = window.location.host ? window.location.host : window.top.location.host,
                            i = e.host !== t || D.isIE && !window.svg4everybody;
                        return {
                            url: this.config.iconUrl,
                            cors: i
                        }
                    },
                    findElements() {
                        try {
                            return this.elements.controls = J.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                                play: Q.call(this, this.config.selectors.buttons.play),
                                pause: J.call(this, this.config.selectors.buttons.pause),
                                restart: J.call(this, this.config.selectors.buttons.restart),
                                rewind: J.call(this, this.config.selectors.buttons.rewind),
                                fastForward: J.call(this, this.config.selectors.buttons.fastForward),
                                mute: J.call(this, this.config.selectors.buttons.mute),
                                pip: J.call(this, this.config.selectors.buttons.pip),
                                airplay: J.call(this, this.config.selectors.buttons.airplay),
                                settings: J.call(this, this.config.selectors.buttons.settings),
                                captions: J.call(this, this.config.selectors.buttons.captions),
                                fullscreen: J.call(this, this.config.selectors.buttons.fullscreen)
                            }, this.elements.progress = J.call(this, this.config.selectors.progress), this.elements.inputs = {
                                seek: J.call(this, this.config.selectors.inputs.seek),
                                volume: J.call(this, this.config.selectors.inputs.volume)
                            }, this.elements.display = {
                                buffer: J.call(this, this.config.selectors.display.buffer),
                                currentTime: J.call(this, this.config.selectors.display.currentTime),
                                duration: J.call(this, this.config.selectors.display.duration)
                            }, M(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), !0
                        } catch (e) {
                            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
                        }
                    },
                    createIcon(e, t) {
                        let i = "http://www.w3.org/2000/svg",
                            s = eR.getIconUrl.call(this),
                            n = `${s.cors?"":s.url}#${this.config.iconPrefix}`,
                            r = document.createElementNS(i, "svg");
                        B(r, _(t, {
                            "aria-hidden": "true",
                            focusable: "false"
                        }));
                        let a = document.createElementNS(i, "use"),
                            o = `${n}-${e}`;
                        return "href" in a && a.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), r.appendChild(a), r
                    },
                    createLabel(e, t = {}) {
                        let i = eS.get(e, this.config);
                        return U("span", { ...t,
                            class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                        }, i)
                    },
                    createBadge(e) {
                        if (E(e)) return null;
                        let t = U("span", {
                            class: this.config.classNames.menu.value
                        });
                        return t.appendChild(U("span", {
                            class: this.config.classNames.menu.badge
                        }, e)), t
                    },
                    createButton(e, t) {
                        let i = _({}, t),
                            s = function(e = "") {
                                let t = e.toString();
                                return (t = function(e = "") {
                                    let t = e.toString();
                                    return t = ex(t, "-", " "), t = eA(t = ex(t, "_", " ")), ex(t, " ", "")
                                }(t)).charAt(0).toLowerCase() + t.slice(1)
                            }(e),
                            n = {
                                element: "button",
                                toggle: !1,
                                label: null,
                                icon: null,
                                labelPressed: null,
                                iconPressed: null
                            };
                        switch (["element", "icon", "label"].forEach(e => {
                            Object.keys(i).includes(e) && (n[e] = i[e], delete i[e])
                        }), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some(e => e === this.config.classNames.control) || _(i, {
                            class: `${i.class} ${this.config.classNames.control}`
                        }) : i.class = this.config.classNames.control, e) {
                            case "play":
                                n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
                                break;
                            case "mute":
                                n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
                                break;
                            case "captions":
                                n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
                                break;
                            case "fullscreen":
                                n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
                                break;
                            case "play-large":
                                i.class += ` ${this.config.classNames.control}--overlaid`, s = "play", n.label = "play", n.icon = "play";
                                break;
                            default:
                                E(n.label) && (n.label = s), E(n.icon) && (n.icon = e)
                        }
                        let r = U(n.element);
                        return n.toggle ? (r.appendChild(eR.createIcon.call(this, n.iconPressed, {
                            class: "icon--pressed"
                        })), r.appendChild(eR.createIcon.call(this, n.icon, {
                            class: "icon--not-pressed"
                        })), r.appendChild(eR.createLabel.call(this, n.labelPressed, {
                            class: "label--pressed"
                        })), r.appendChild(eR.createLabel.call(this, n.label, {
                            class: "label--not-pressed"
                        }))) : (r.appendChild(eR.createIcon.call(this, n.icon)), r.appendChild(eR.createLabel.call(this, n.label))), _(i, Y(this.config.selectors.buttons[s], i)), B(r, i), "play" === s ? (A(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(r)) : this.elements.buttons[s] = r, r
                    },
                    createRange(e, t) {
                        let i = U("input", _(Y(this.config.selectors.inputs[e]), {
                            type: "range",
                            min: 0,
                            max: 100,
                            step: .01,
                            value: 0,
                            autocomplete: "off",
                            role: "slider",
                            "aria-label": eS.get(e, this.config),
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": 0
                        }, t));
                        return this.elements.inputs[e] = i, eR.updateRangeFill.call(this, i), y.setup(i), i
                    },
                    createProgress(e, t) {
                        let i = U("progress", _(Y(this.config.selectors.display[e]), {
                            min: 0,
                            max: 100,
                            value: 0,
                            role: "progressbar",
                            "aria-hidden": !0
                        }, t));
                        if ("volume" !== e) {
                            i.appendChild(U("span", null, "0"));
                            let t = {
                                    played: "played",
                                    buffer: "buffered"
                                }[e],
                                s = t ? eS.get(t, this.config) : "";
                            i.innerText = `% ${s.toLowerCase()}`
                        }
                        return this.elements.display[e] = i, i
                    },
                    createTime(e, t) {
                        let i = Y(this.config.selectors.display[e], t),
                            s = U("div", _(i, {
                                class: `${i.class?i.class:""} ${this.config.classNames.display.time} `.trim(),
                                "aria-label": eS.get(e, this.config)
                            }), "00:00");
                        return this.elements.display[e] = s, s
                    },
                    bindMenuItemShortcuts(e, t) {
                        er.call(this, e, "keydown keyup", i => {
                            if (!["Space", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i.key) || (i.preventDefault(), i.stopPropagation(), "keydown" === i.type)) return;
                            let s = G(e, '[role="menuitemradio"]');
                            if (!s && ["Space", "ArrowRight"].includes(i.key)) eR.showMenuPanel.call(this, t, !0);
                            else {
                                let t;
                                "Space" !== i.key && ("ArrowDown" === i.key || s && "ArrowRight" === i.key ? M(t = e.nextElementSibling) || (t = e.parentNode.firstElementChild) : M(t = e.previousElementSibling) || (t = e.parentNode.lastElementChild), ee.call(this, t, !0))
                            }
                        }, !1), er.call(this, e, "keyup", e => {
                            "Return" === e.key && eR.focusFirstMenuItem.call(this, null, !0)
                        })
                    },
                    createMenuItem({
                        value: e,
                        list: t,
                        type: i,
                        title: s,
                        badge: n = null,
                        checked: r = !1
                    }) {
                        let a = Y(this.config.selectors.inputs[i]),
                            o = U("button", _(a, {
                                type: "button",
                                role: "menuitemradio",
                                class: `${this.config.classNames.control} ${a.class?a.class:""}`.trim(),
                                "aria-checked": r,
                                value: e
                            })),
                            l = U("span");
                        l.innerHTML = s, M(n) && l.appendChild(n), o.appendChild(l), Object.defineProperty(o, "checked", {
                            enumerable: !0,
                            get: () => "true" === o.getAttribute("aria-checked"),
                            set(e) {
                                e && Array.from(o.parentNode.children).filter(e => G(e, '[role="menuitemradio"]')).forEach(e => e.setAttribute("aria-checked", "false")), o.setAttribute("aria-checked", e ? "true" : "false")
                            }
                        }), this.listeners.bind(o, "click keyup", t => {
                            if (!V(t) || "Space" === t.key) {
                                switch (t.preventDefault(), t.stopPropagation(), o.checked = !0, i) {
                                    case "language":
                                        this.currentTrack = Number(e);
                                        break;
                                    case "quality":
                                        this.quality = e;
                                        break;
                                    case "speed":
                                        this.speed = parseFloat(e)
                                }
                                eR.showMenuPanel.call(this, "home", V(t))
                            }
                        }, i, !1), eR.bindMenuItemShortcuts.call(this, o, i), t.appendChild(o)
                    },
                    formatTime(e = 0, t = !1) {
                        return S(e) ? eO(e, eV(this.duration) > 0, t) : e
                    },
                    updateTimeDisplay(e = null, t = 0, i = !1) {
                        M(e) && S(t) && (e.innerText = eR.formatTime(t, i))
                    },
                    updateVolume() {
                        this.supported.ui && (M(this.elements.inputs.volume) && eR.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), M(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
                    },
                    setRange(e, t = 0) {
                        M(e) && (e.value = t, eR.updateRangeFill.call(this, e))
                    },
                    updateProgress(e) {
                        var t, i;
                        if (!this.supported.ui || !L(e)) return;
                        let s = 0;
                        if (e) switch (e.type) {
                            case "timeupdate":
                            case "seeking":
                            case "seeked":
                                t = this.currentTime, i = this.duration, s = 0 === t || 0 === i || Number.isNaN(t) || Number.isNaN(i) ? 0 : (t / i * 100).toFixed(2), "timeupdate" === e.type && eR.setRange.call(this, this.elements.inputs.seek, s);
                                break;
                            case "playing":
                            case "progress":
                                ((e, t) => {
                                    let i = S(t) ? t : 0,
                                        s = M(e) ? e : this.elements.display.buffer;
                                    if (M(s)) {
                                        s.value = i;
                                        let e = s.getElementsByTagName("span")[0];
                                        M(e) && (e.childNodes[0].nodeValue = i)
                                    }
                                })(this.elements.display.buffer, 100 * this.buffered)
                        }
                    },
                    updateRangeFill(e) {
                        let t = L(e) ? e.target : e;
                        if (M(t) && "range" === t.getAttribute("type")) {
                            if (G(t, this.config.selectors.inputs.seek)) {
                                t.setAttribute("aria-valuenow", this.currentTime);
                                let e = eR.formatTime(this.currentTime),
                                    i = eR.formatTime(this.duration),
                                    s = eS.get("seekLabel", this.config);
                                t.setAttribute("aria-valuetext", s.replace("{currentTime}", e).replace("{duration}", i))
                            } else if (G(t, this.config.selectors.inputs.volume)) {
                                let e = 100 * t.value;
                                t.setAttribute("aria-valuenow", e), t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`)
                            } else t.setAttribute("aria-valuenow", t.value);
                            D.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
                        }
                    },
                    updateSeekTooltip(e) {
                        var t, i;
                        if (!this.config.tooltips.seek || !M(this.elements.inputs.seek) || !M(this.elements.display.seekTooltip) || 0 === this.duration) return;
                        let s = this.elements.display.seekTooltip,
                            n = `${this.config.classNames.tooltip}--visible`,
                            r = e => X(s, n, e);
                        if (this.touch) return void r(!1);
                        let a = 0,
                            o = this.elements.progress.getBoundingClientRect();
                        if (L(e)) a = 100 / o.width * (e.pageX - o.left);
                        else {
                            if (!Z(s, n)) return;
                            a = parseFloat(s.style.left, 10)
                        }
                        a < 0 ? a = 0 : a > 100 && (a = 100);
                        let l = this.duration / 100 * a;
                        s.innerText = eR.formatTime(l);
                        let u = null === (t = this.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find(({
                            time: e
                        }) => e === Math.round(l));
                        u && s.insertAdjacentHTML("afterbegin", `${u.label}<br>`), s.style.left = `${a}%`, L(e) && ["mouseenter", "mouseleave"].includes(e.type) && r("mouseenter" === e.type)
                    },
                    timeUpdate(e) {
                        let t = !M(this.elements.display.duration) && this.config.invertTime;
                        eR.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || eR.updateProgress.call(this, e)
                    },
                    durationUpdate() {
                        if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
                        if (this.duration >= 4294967296) return K(this.elements.display.currentTime, !0), void K(this.elements.progress, !0);
                        M(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                        let e = M(this.elements.display.duration);
                        !e && this.config.displayDuration && this.paused && eR.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && eR.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && eR.setMarkers.call(this), eR.updateSeekTooltip.call(this)
                    },
                    toggleMenuButton(e, t) {
                        K(this.elements.settings.buttons[e], !t)
                    },
                    updateSetting(e, t, i) {
                        let s = this.elements.settings.panels[e],
                            n = null,
                            r = t;
                        if ("captions" === e) n = this.currentTrack;
                        else {
                            if (n = E(i) ? this[e] : i, E(n) && (n = this.config[e].default), !E(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
                            if (!this.config[e].options.includes(n)) return void this.debug.warn(`Disabled value of '${n}' for ${e}`)
                        }
                        if (M(r) || (r = s && s.querySelector('[role="menu"]')), !M(r)) return;
                        this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = eR.getLabel.call(this, e, n);
                        let a = r && r.querySelector(`[value="${n}"]`);
                        M(a) && (a.checked = !0)
                    },
                    getLabel(e, t) {
                        switch (e) {
                            case "speed":
                                return 1 === t ? eS.get("normal", this.config) : `${t}&times;`;
                            case "quality":
                                if (S(t)) {
                                    let e = eS.get(`qualityLabel.${t}`, this.config);
                                    return e.length ? e : `${t}p`
                                }
                                return eA(t);
                            case "captions":
                                return ej.getLabel.call(this);
                            default:
                                return null
                        }
                    },
                    setQualityMenu(e) {
                        if (!M(this.elements.settings.panels.quality)) return;
                        let t = "quality",
                            i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                        A(e) && (this.options.quality = ed(e).filter(e => this.config.quality.options.includes(e)));
                        let s = !E(this.options.quality) && this.options.quality.length > 1;
                        if (eR.toggleMenuButton.call(this, t, s), z(i), eR.checkMenu.call(this), !s) return;
                        let n = e => {
                            let t = eS.get(`qualityBadge.${e}`, this.config);
                            return t.length ? eR.createBadge.call(this, t) : null
                        };
                        this.options.quality.sort((e, t) => {
                            let i = this.config.quality.options;
                            return i.indexOf(e) > i.indexOf(t) ? 1 : -1
                        }).forEach(e => {
                            eR.createMenuItem.call(this, {
                                value: e,
                                list: i,
                                type: t,
                                title: eR.getLabel.call(this, "quality", e),
                                badge: n(e)
                            })
                        }), eR.updateSetting.call(this, t, i)
                    },
                    setCaptionsMenu() {
                        if (!M(this.elements.settings.panels.captions)) return;
                        let e = "captions",
                            t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                            i = ej.getTracks.call(this),
                            s = Boolean(i.length);
                        if (eR.toggleMenuButton.call(this, e, s), z(t), eR.checkMenu.call(this), !s) return;
                        let n = i.map((e, i) => ({
                            value: i,
                            checked: this.captions.toggled && this.currentTrack === i,
                            title: ej.getLabel.call(this, e),
                            badge: e.language && eR.createBadge.call(this, e.language.toUpperCase()),
                            list: t,
                            type: "language"
                        }));
                        n.unshift({
                            value: -1,
                            checked: !this.captions.toggled,
                            title: eS.get("disabled", this.config),
                            list: t,
                            type: "language"
                        }), n.forEach(eR.createMenuItem.bind(this)), eR.updateSetting.call(this, e, t)
                    },
                    setSpeedMenu() {
                        if (!M(this.elements.settings.panels.speed)) return;
                        let e = "speed",
                            t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                        this.options.speed = this.options.speed.filter(e => e >= this.minimumSpeed && e <= this.maximumSpeed);
                        let i = !E(this.options.speed) && this.options.speed.length > 1;
                        eR.toggleMenuButton.call(this, e, i), z(t), eR.checkMenu.call(this), i && (this.options.speed.forEach(i => {
                            eR.createMenuItem.call(this, {
                                value: i,
                                list: t,
                                type: e,
                                title: eR.getLabel.call(this, "speed", i)
                            })
                        }), eR.updateSetting.call(this, e, t))
                    },
                    checkMenu() {
                        let {
                            buttons: e
                        } = this.elements.settings, t = !E(e) && Object.values(e).some(e => !e.hidden);
                        K(this.elements.settings.menu, !t)
                    },
                    focusFirstMenuItem(e, t = !1) {
                        if (this.elements.settings.popup.hidden) return;
                        let i = e;
                        M(i) || (i = Object.values(this.elements.settings.panels).find(e => !e.hidden));
                        let s = i.querySelector('[role^="menuitem"]');
                        ee.call(this, s, t)
                    },
                    toggleMenu(e) {
                        let {
                            popup: t
                        } = this.elements.settings, i = this.elements.buttons.settings;
                        if (!M(t) || !M(i)) return;
                        let {
                            hidden: s
                        } = t, n = s;
                        if (C(e)) n = e;
                        else if (V(e) && "Escape" === e.key) n = !1;
                        else if (L(e)) {
                            let s = x(e.composedPath) ? e.composedPath()[0] : e.target,
                                r = t.contains(s);
                            if (r || !r && e.target !== i && n) return
                        }
                        i.setAttribute("aria-expanded", n), K(t, !n), X(this.elements.container, this.config.classNames.menu.open, n), n && V(e) ? eR.focusFirstMenuItem.call(this, null, !0) : n || s || ee.call(this, i, V(e))
                    },
                    getMenuSize(e) {
                        let t = e.cloneNode(!0);
                        t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
                        let i = t.scrollWidth,
                            s = t.scrollHeight;
                        return q(t), {
                            width: i,
                            height: s
                        }
                    },
                    showMenuPanel(e = "", t = !1) {
                        let i = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);
                        if (!M(i)) return;
                        let s = i.parentNode,
                            n = Array.from(s.children).find(e => !e.hidden);
                        if (ei.transitions && !ei.reducedMotion) {
                            s.style.width = `${n.scrollWidth}px`, s.style.height = `${n.scrollHeight}px`;
                            let e = eR.getMenuSize.call(this, i),
                                t = e => {
                                    e.target === s && ["width", "height"].includes(e.propertyName) && (s.style.width = "", s.style.height = "", ea.call(this, s, N, t))
                                };
                            er.call(this, s, N, t), s.style.width = `${e.width}px`, s.style.height = `${e.height}px`
                        }
                        K(n, !0), K(i, !1), eR.focusFirstMenuItem.call(this, i, t)
                    },
                    setDownloadUrl() {
                        let e = this.elements.buttons.download;
                        M(e) && e.setAttribute("href", this.download)
                    },
                    create(e) {
                        let {
                            bindMenuItemShortcuts: t,
                            createButton: i,
                            createProgress: s,
                            createRange: n,
                            createTime: r,
                            setQualityMenu: a,
                            setSpeedMenu: o,
                            showMenuPanel: l
                        } = eR;
                        this.elements.controls = null, A(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                        let u = U("div", Y(this.config.selectors.controls.wrapper));
                        this.elements.controls = u;
                        let c = {
                            class: "plyr__controls__item"
                        };
                        return ed(A(this.config.controls) ? this.config.controls : []).forEach(a => {
                            if ("restart" === a && u.appendChild(i.call(this, "restart", c)), "rewind" === a && u.appendChild(i.call(this, "rewind", c)), "play" === a && u.appendChild(i.call(this, "play", c)), "fast-forward" === a && u.appendChild(i.call(this, "fast-forward", c)), "progress" === a) {
                                let t = U("div", {
                                        class: `${c.class} plyr__progress__container`
                                    }),
                                    i = U("div", Y(this.config.selectors.progress));
                                if (i.appendChild(n.call(this, "seek", {
                                        id: `plyr-seek-${e.id}`
                                    })), i.appendChild(s.call(this, "buffer")), this.config.tooltips.seek) {
                                    let e = U("span", {
                                        class: this.config.classNames.tooltip
                                    }, "00:00");
                                    i.appendChild(e), this.elements.display.seekTooltip = e
                                }
                                this.elements.progress = i, t.appendChild(this.elements.progress), u.appendChild(t)
                            }
                            if ("current-time" === a && u.appendChild(r.call(this, "currentTime", c)), "duration" === a && u.appendChild(r.call(this, "duration", c)), "mute" === a || "volume" === a) {
                                let {
                                    volume: t
                                } = this.elements;
                                if (M(t) && u.contains(t) || (t = U("div", _({}, c, {
                                        class: `${c.class} plyr__volume`.trim()
                                    })), this.elements.volume = t, u.appendChild(t)), "mute" === a && t.appendChild(i.call(this, "mute")), "volume" === a && !D.isIos) {
                                    let i = {
                                        max: 1,
                                        step: .05,
                                        value: this.config.volume
                                    };
                                    t.appendChild(n.call(this, "volume", _(i, {
                                        id: `plyr-volume-${e.id}`
                                    })))
                                }
                            }
                            if ("captions" === a && u.appendChild(i.call(this, "captions", c)), "settings" === a && !E(this.config.settings)) {
                                let s = U("div", _({}, c, {
                                    class: `${c.class} plyr__menu`.trim(),
                                    hidden: ""
                                }));
                                s.appendChild(i.call(this, "settings", {
                                    "aria-haspopup": !0,
                                    "aria-controls": `plyr-settings-${e.id}`,
                                    "aria-expanded": !1
                                }));
                                let n = U("div", {
                                        class: "plyr__menu__container",
                                        id: `plyr-settings-${e.id}`,
                                        hidden: ""
                                    }),
                                    r = U("div"),
                                    a = U("div", {
                                        id: `plyr-settings-${e.id}-home`
                                    }),
                                    o = U("div", {
                                        role: "menu"
                                    });
                                a.appendChild(o), r.appendChild(a), this.elements.settings.panels.home = a, this.config.settings.forEach(i => {
                                    let s = U("button", _(Y(this.config.selectors.buttons.settings), {
                                        type: "button",
                                        class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                                        role: "menuitem",
                                        "aria-haspopup": !0,
                                        hidden: ""
                                    }));
                                    t.call(this, s, i), er.call(this, s, "click", () => {
                                        l.call(this, i, !1)
                                    });
                                    let n = U("span", null, eS.get(i, this.config)),
                                        a = U("span", {
                                            class: this.config.classNames.menu.value
                                        });
                                    a.innerHTML = e[i], n.appendChild(a), s.appendChild(n), o.appendChild(s);
                                    let u = U("div", {
                                            id: `plyr-settings-${e.id}-${i}`,
                                            hidden: ""
                                        }),
                                        c = U("button", {
                                            type: "button",
                                            class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                                        });
                                    c.appendChild(U("span", {
                                        "aria-hidden": !0
                                    }, eS.get(i, this.config))), c.appendChild(U("span", {
                                        class: this.config.classNames.hidden
                                    }, eS.get("menuBack", this.config))), er.call(this, u, "keydown", e => {
                                        "ArrowLeft" === e.key && (e.preventDefault(), e.stopPropagation(), l.call(this, "home", !0))
                                    }, !1), er.call(this, c, "click", () => {
                                        l.call(this, "home", !1)
                                    }), u.appendChild(c), u.appendChild(U("div", {
                                        role: "menu"
                                    })), r.appendChild(u), this.elements.settings.buttons[i] = s, this.elements.settings.panels[i] = u
                                }), n.appendChild(r), s.appendChild(n), u.appendChild(s), this.elements.settings.popup = n, this.elements.settings.menu = s
                            }
                            if ("pip" === a && ei.pip && u.appendChild(i.call(this, "pip", c)), "airplay" === a && ei.airplay && u.appendChild(i.call(this, "airplay", c)), "download" === a) {
                                let e = _({}, c, {
                                    element: "a",
                                    href: this.download,
                                    target: "_blank"
                                });
                                this.isHTML5 && (e.download = "");
                                let {
                                    download: t
                                } = this.config.urls;
                                !I(t) && this.isEmbed && _(e, {
                                    icon: `logo-${this.provider}`,
                                    label: this.provider
                                }), u.appendChild(i.call(this, "download", e))
                            }
                            "fullscreen" === a && u.appendChild(i.call(this, "fullscreen", c))
                        }), this.isHTML5 && a.call(this, eT.getQualityOptions.call(this)), o.call(this), u
                    },
                    inject() {
                        let e, t;
                        if (this.config.loadSprite) {
                            let e = eR.getIconUrl.call(this);
                            e.cors && eL(e.url, "sprite-plyr")
                        }
                        this.id = Math.floor(1e4 * Math.random());
                        let i = null;
                        this.elements.controls = null;
                        let s = {
                                id: this.id,
                                seektime: this.config.seekTime,
                                title: this.config.title
                            },
                            n = !0;
                        if (x(this.config.controls) && (this.config.controls = this.config.controls.call(this, s)), this.config.controls || (this.config.controls = []), M(this.config.controls) || k(this.config.controls) ? i = this.config.controls : (i = eR.create.call(this, {
                                id: this.id,
                                seektime: this.config.seekTime,
                                speed: this.speed,
                                quality: this.quality,
                                captions: ej.getLabel.call(this)
                            }), n = !1), n && k(this.config.controls) && (t = i, Object.entries(s).forEach(([e, i]) => {
                                t = ex(t, `{${e}}`, i)
                            }), i = t), k(this.config.selectors.controls.container) && (e = document.querySelector(this.config.selectors.controls.container)), M(e) || (e = this.elements.container), e[M(i) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", i), M(this.elements.controls) || eR.findElements.call(this), !E(this.elements.buttons)) {
                            let e = e => {
                                let t = this.config.classNames.controlPressed;
                                e.setAttribute("aria-pressed", "false"), Object.defineProperty(e, "pressed", {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: () => Z(e, t),
                                    set(i = !1) {
                                        X(e, t, i), e.setAttribute("aria-pressed", i ? "true" : "false")
                                    }
                                })
                            };
                            Object.values(this.elements.buttons).filter(Boolean).forEach(t => {
                                A(t) || P(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t)
                            })
                        }
                        if (D.isEdge && j(e), this.config.tooltips.controls) {
                            let {
                                classNames: e,
                                selectors: t
                            } = this.config, i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`, s = Q.call(this, i);
                            Array.from(s).forEach(e => {
                                X(e, this.config.classNames.hidden, !1), X(e, this.config.classNames.tooltip, !0)
                            })
                        }
                    },
                    setMediaMetadata() {
                        try {
                            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
                                title: this.config.mediaMetadata.title,
                                artist: this.config.mediaMetadata.artist,
                                album: this.config.mediaMetadata.album,
                                artwork: this.config.mediaMetadata.artwork
                            }))
                        } catch (e) {}
                    },
                    setMarkers() {
                        var e, t;
                        if (!this.duration || this.elements.markers) return;
                        let i = null === (e = this.config.markers) || void 0 === e || null === (t = e.points) || void 0 === t ? void 0 : t.filter(({
                            time: e
                        }) => e > 0 && e < this.duration);
                        if (null == i || !i.length) return;
                        let s = document.createDocumentFragment(),
                            n = document.createDocumentFragment(),
                            r = null,
                            a = `${this.config.classNames.tooltip}--visible`,
                            o = e => X(r, a, e);
                        i.forEach(e => {
                            let t = U("span", {
                                    class: this.config.classNames.marker
                                }, ""),
                                i = e.time / this.duration * 100 + "%";
                            r && (t.addEventListener("mouseenter", () => {
                                e.label || (r.style.left = i, r.innerHTML = e.label, o(!0))
                            }), t.addEventListener("mouseleave", () => {
                                o(!1)
                            })), t.addEventListener("click", () => {
                                this.currentTime = e.time
                            }), t.style.left = i, n.appendChild(t)
                        }), s.appendChild(n), this.config.tooltips.seek || (r = U("span", {
                            class: this.config.classNames.tooltip
                        }, ""), s.appendChild(r)), this.elements.markers = {
                            points: n,
                            tip: r
                        }, this.elements.progress.appendChild(s)
                    }
                };

                function eI(e, t = !0) {
                    let i = e;
                    if (t) {
                        let e = document.createElement("a");
                        e.href = i, i = e.href
                    }
                    try {
                        return new URL(i)
                    } catch (e) {
                        return null
                    }
                }

                function eN(e) {
                    let t = new URLSearchParams;
                    return T(e) && Object.entries(e).forEach(([e, i]) => {
                        t.set(e, i)
                    }), t
                }
                let ej = {
                        setup() {
                            var e, t;
                            if (!this.supported.ui) return;
                            if (!this.isVideo || this.isYouTube || this.isHTML5 && !ei.textTracks) return void(A(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && eR.setCaptionsMenu.call(this));
                            if (M(this.elements.captions) || (this.elements.captions = U("div", Y(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), e = this.elements.captions, t = this.elements.wrapper, M(e) && M(t) && t.parentNode.insertBefore(e, t.nextSibling)), D.isIE && window.URL) {
                                let e = this.media.querySelectorAll("track");
                                Array.from(e).forEach(e => {
                                    let t = e.getAttribute("src"),
                                        i = eI(t);
                                    null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && eM(t, "blob").then(t => {
                                        e.setAttribute("src", window.URL.createObjectURL(t))
                                    }).catch(() => {
                                        q(e)
                                    })
                                })
                            }
                            let i = ed((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(e => e.split("-")[0])),
                                s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                            "auto" === s && ([s] = i);
                            let n = this.storage.get("captions");
                            if (C(n) || ({
                                    active: n
                                } = this.config.captions), Object.assign(this.captions, {
                                    toggled: !1,
                                    active: n,
                                    language: s,
                                    languages: i
                                }), this.isHTML5) {
                                let e = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                                er.call(this, this.media.textTracks, e, ej.update.bind(this))
                            }
                            setTimeout(ej.update.bind(this), 0)
                        },
                        update() {
                            let e = ej.getTracks.call(this, !0),
                                {
                                    active: t,
                                    language: i,
                                    meta: s,
                                    currentTrackNode: n
                                } = this.captions,
                                r = Boolean(e.find(e => e.language === i));
                            this.isHTML5 && this.isVideo && e.filter(e => !s.get(e)).forEach(e => {
                                this.debug.log("Track added", e), s.set(e, {
                                    default: "showing" === e.mode
                                }), "showing" === e.mode && (e.mode = "hidden"), er.call(this, e, "cuechange", () => ej.updateCues.call(this))
                            }), (r && this.language !== i || !e.includes(n)) && (ej.setLanguage.call(this, i), ej.toggle.call(this, t && r)), this.elements && X(this.elements.container, this.config.classNames.captions.enabled, !E(e)), A(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && eR.setCaptionsMenu.call(this)
                        },
                        toggle(e, t = !0) {
                            if (!this.supported.ui) return;
                            let {
                                toggled: i
                            } = this.captions, s = this.config.classNames.captions.active, n = w(e) ? !i : e;
                            if (n !== i) {
                                if (t || (this.captions.active = n, this.storage.set({
                                        captions: n
                                    })), !this.language && n && !t) {
                                    let e = ej.getTracks.call(this),
                                        t = ej.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
                                    return this.captions.language = t.language, void ej.set.call(this, e.indexOf(t))
                                }
                                this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), X(this.elements.container, s, n), this.captions.toggled = n, eR.updateSetting.call(this, "captions"), el.call(this, this.media, n ? "captionsenabled" : "captionsdisabled")
                            }
                            setTimeout(() => {
                                n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden")
                            })
                        },
                        set(e, t = !0) {
                            let i = ej.getTracks.call(this);
                            if (-1 !== e) {
                                if (S(e)) {
                                    if (e in i) {
                                        if (this.captions.currentTrack !== e) {
                                            this.captions.currentTrack = e;
                                            let s = i[e],
                                                {
                                                    language: n
                                                } = s || {};
                                            this.captions.currentTrackNode = s, eR.updateSetting.call(this, "captions"), t || (this.captions.language = n, this.storage.set({
                                                language: n
                                            })), this.isVimeo && this.embed.enableTextTrack(n), el.call(this, this.media, "languagechange")
                                        }
                                        ej.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && ej.updateCues.call(this)
                                    } else this.debug.warn("Track not found", e)
                                } else this.debug.warn("Invalid caption argument", e)
                            } else ej.toggle.call(this, !1, t)
                        },
                        setLanguage(e, t = !0) {
                            if (!k(e)) return void this.debug.warn("Invalid language argument", e);
                            let i = e.toLowerCase();
                            this.captions.language = i;
                            let s = ej.getTracks.call(this),
                                n = ej.findTrack.call(this, [i]);
                            ej.set.call(this, s.indexOf(n), t)
                        },
                        getTracks(e = !1) {
                            return Array.from((this.media || {}).textTracks || []).filter(t => !this.isHTML5 || e || this.captions.meta.has(t)).filter(e => ["captions", "subtitles"].includes(e.kind))
                        },
                        findTrack(e, t = !1) {
                            let i;
                            let s = ej.getTracks.call(this),
                                n = e => Number((this.captions.meta.get(e) || {}).default),
                                r = Array.from(s).sort((e, t) => n(t) - n(e));
                            return e.every(e => !(i = r.find(t => t.language === e))), i || (t ? r[0] : void 0)
                        },
                        getCurrentTrack() {
                            return ej.getTracks.call(this)[this.currentTrack]
                        },
                        getLabel(e) {
                            let t = e;
                            return !O(t) && ei.textTracks && this.captions.toggled && (t = ej.getCurrentTrack.call(this)), O(t) ? E(t.label) ? E(t.language) ? eS.get("enabled", this.config) : e.language.toUpperCase() : t.label : eS.get("disabled", this.config)
                        },
                        updateCues(e) {
                            if (!this.supported.ui) return;
                            if (!M(this.elements.captions)) return void this.debug.warn("No captions element to render to");
                            if (!w(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
                            let t = e;
                            if (!t) {
                                let e = ej.getCurrentTrack.call(this);
                                t = Array.from((e || {}).activeCues || []).map(e => e.getCueAsHTML()).map(eP)
                            }
                            let i = t.map(e => e.trim()).join("\n");
                            if (i !== this.elements.captions.innerHTML) {
                                z(this.elements.captions);
                                let e = U("span", Y(this.config.selectors.caption));
                                e.innerHTML = i, this.elements.captions.appendChild(e), el.call(this, this.media, "cuechange")
                            }
                        }
                    },
                    eD = {
                        enabled: !0,
                        title: "",
                        debug: !1,
                        autoplay: !1,
                        autopause: !0,
                        playsinline: !0,
                        seekTime: 10,
                        volume: 1,
                        muted: !1,
                        duration: null,
                        displayDuration: !0,
                        invertTime: !0,
                        toggleInvert: !0,
                        ratio: null,
                        clickToPlay: !0,
                        hideControls: !0,
                        resetOnEnd: !1,
                        disableContextMenu: !0,
                        loadSprite: !0,
                        iconPrefix: "plyr",
                        iconUrl: "https://cdn.plyr.io/3.7.3/plyr.svg",
                        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                        quality: {
                            default: 576,
                            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                            forced: !1,
                            onChange: null
                        },
                        loop: {
                            active: !1
                        },
                        speed: {
                            selected: 1,
                            options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
                        },
                        keyboard: {
                            focused: !0,
                            global: !1
                        },
                        tooltips: {
                            controls: !1,
                            seek: !0
                        },
                        captions: {
                            active: !1,
                            language: "auto",
                            update: !1
                        },
                        fullscreen: {
                            enabled: !0,
                            fallback: !0,
                            iosNative: !1
                        },
                        storage: {
                            enabled: !0,
                            key: "plyr"
                        },
                        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                        settings: ["captions", "quality", "speed"],
                        i18n: {
                            restart: "Restart",
                            rewind: "Rewind {seektime}s",
                            play: "Play",
                            pause: "Pause",
                            fastForward: "Forward {seektime}s",
                            seek: "Seek",
                            seekLabel: "{currentTime} of {duration}",
                            played: "Played",
                            buffered: "Buffered",
                            currentTime: "Current time",
                            duration: "Duration",
                            volume: "Volume",
                            mute: "Mute",
                            unmute: "Unmute",
                            enableCaptions: "Enable captions",
                            disableCaptions: "Disable captions",
                            download: "Download",
                            enterFullscreen: "Enter fullscreen",
                            exitFullscreen: "Exit fullscreen",
                            frameTitle: "Player for {title}",
                            captions: "Captions",
                            settings: "Settings",
                            pip: "PIP",
                            menuBack: "Go back to previous menu",
                            speed: "Speed",
                            normal: "Normal",
                            quality: "Quality",
                            loop: "Loop",
                            start: "Start",
                            end: "End",
                            all: "All",
                            reset: "Reset",
                            disabled: "Disabled",
                            enabled: "Enabled",
                            advertisement: "Ad",
                            qualityBadge: {
                                2160: "4K",
                                1440: "HD",
                                1080: "HD",
                                720: "HD",
                                576: "SD",
                                480: "SD"
                            }
                        },
                        urls: {
                            download: null,
                            vimeo: {
                                sdk: "https://player.vimeo.com/api/player.js",
                                iframe: "https://player.vimeo.com/video/{0}?{1}",
                                api: "https://vimeo.com/api/oembed.json?url={0}"
                            },
                            youtube: {
                                sdk: "https://www.youtube.com/iframe_api",
                                api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                            },
                            googleIMA: {
                                sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                            }
                        },
                        listeners: {
                            seek: null,
                            play: null,
                            pause: null,
                            restart: null,
                            rewind: null,
                            fastForward: null,
                            mute: null,
                            volume: null,
                            captions: null,
                            download: null,
                            fullscreen: null,
                            pip: null,
                            airplay: null,
                            speed: null,
                            quality: null,
                            loop: null,
                            language: null
                        },
                        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                        selectors: {
                            editable: "input, textarea, select, [contenteditable]",
                            container: ".plyr",
                            controls: {
                                container: null,
                                wrapper: ".plyr__controls"
                            },
                            labels: "[data-plyr]",
                            buttons: {
                                play: '[data-plyr="play"]',
                                pause: '[data-plyr="pause"]',
                                restart: '[data-plyr="restart"]',
                                rewind: '[data-plyr="rewind"]',
                                fastForward: '[data-plyr="fast-forward"]',
                                mute: '[data-plyr="mute"]',
                                captions: '[data-plyr="captions"]',
                                download: '[data-plyr="download"]',
                                fullscreen: '[data-plyr="fullscreen"]',
                                pip: '[data-plyr="pip"]',
                                airplay: '[data-plyr="airplay"]',
                                settings: '[data-plyr="settings"]',
                                loop: '[data-plyr="loop"]'
                            },
                            inputs: {
                                seek: '[data-plyr="seek"]',
                                volume: '[data-plyr="volume"]',
                                speed: '[data-plyr="speed"]',
                                language: '[data-plyr="language"]',
                                quality: '[data-plyr="quality"]'
                            },
                            display: {
                                currentTime: ".plyr__time--current",
                                duration: ".plyr__time--duration",
                                buffer: ".plyr__progress__buffer",
                                loop: ".plyr__progress__loop",
                                volume: ".plyr__volume--display"
                            },
                            progress: ".plyr__progress",
                            captions: ".plyr__captions",
                            caption: ".plyr__caption"
                        },
                        classNames: {
                            type: "plyr--{0}",
                            provider: "plyr--{0}",
                            video: "plyr__video-wrapper",
                            embed: "plyr__video-embed",
                            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                            embedContainer: "plyr__video-embed__container",
                            poster: "plyr__poster",
                            posterEnabled: "plyr__poster-enabled",
                            ads: "plyr__ads",
                            control: "plyr__control",
                            controlPressed: "plyr__control--pressed",
                            playing: "plyr--playing",
                            paused: "plyr--paused",
                            stopped: "plyr--stopped",
                            loading: "plyr--loading",
                            hover: "plyr--hover",
                            tooltip: "plyr__tooltip",
                            cues: "plyr__cues",
                            marker: "plyr__progress__marker",
                            hidden: "plyr__sr-only",
                            hideControls: "plyr--hide-controls",
                            isIos: "plyr--is-ios",
                            isTouch: "plyr--is-touch",
                            uiSupported: "plyr--full-ui",
                            noTransition: "plyr--no-transition",
                            display: {
                                time: "plyr__time"
                            },
                            menu: {
                                value: "plyr__menu__value",
                                badge: "plyr__badge",
                                open: "plyr--menu-open"
                            },
                            captions: {
                                enabled: "plyr--captions-enabled",
                                active: "plyr--captions-active"
                            },
                            fullscreen: {
                                enabled: "plyr--fullscreen-enabled",
                                fallback: "plyr--fullscreen-fallback"
                            },
                            pip: {
                                supported: "plyr--pip-supported",
                                active: "plyr--pip-active"
                            },
                            airplay: {
                                supported: "plyr--airplay-supported",
                                active: "plyr--airplay-active"
                            },
                            tabFocus: "plyr__tab-focus",
                            previewThumbnails: {
                                thumbContainer: "plyr__preview-thumb",
                                thumbContainerShown: "plyr__preview-thumb--is-shown",
                                imageContainer: "plyr__preview-thumb__image-container",
                                timeContainer: "plyr__preview-thumb__time-container",
                                scrubbingContainer: "plyr__preview-scrubbing",
                                scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                            }
                        },
                        attributes: {
                            embed: {
                                provider: "data-plyr-provider",
                                id: "data-plyr-embed-id",
                                hash: "data-plyr-embed-hash"
                            }
                        },
                        ads: {
                            enabled: !1,
                            publisherId: "",
                            tagUrl: ""
                        },
                        previewThumbnails: {
                            enabled: !1,
                            src: ""
                        },
                        vimeo: {
                            byline: !1,
                            portrait: !1,
                            title: !1,
                            speed: !0,
                            transparent: !1,
                            customControls: !0,
                            referrerPolicy: null,
                            premium: !1
                        },
                        youtube: {
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3,
                            modestbranding: 1,
                            customControls: !0,
                            noCookie: !1
                        },
                        mediaMetadata: {
                            title: "",
                            artist: "",
                            album: "",
                            artwork: []
                        },
                        markers: {
                            enabled: !1,
                            points: []
                        }
                    },
                    e$ = "picture-in-picture",
                    e_ = {
                        html5: "html5",
                        youtube: "youtube",
                        vimeo: "vimeo"
                    },
                    eF = "video",
                    eB = () => {};
                class eU {
                    constructor(e = !1) {
                        this.enabled = window.console && e, this.enabled && this.log("Debugging enabled")
                    }
                    get log() {
                        return this.enabled ? Function.prototype.bind.call(console.log, console) : eB
                    }
                    get warn() {
                        return this.enabled ? Function.prototype.bind.call(console.warn, console) : eB
                    }
                    get error() {
                        return this.enabled ? Function.prototype.bind.call(console.error, console) : eB
                    }
                }
                class eH {
                    constructor(t) {
                        e(this, "onChange", () => {
                            if (!this.enabled) return;
                            let e = this.player.elements.buttons.fullscreen;
                            M(e) && (e.pressed = this.active);
                            let t = this.target === this.player.media ? this.target : this.player.elements.container;
                            el.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                        }), e(this, "toggleFallback", (e = !1) => {
                            if (e ? this.scrollPosition = {
                                    x: window.scrollX || 0,
                                    y: window.scrollY || 0
                                } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", X(this.target, this.player.config.classNames.fullscreen.fallback, e), D.isIos) {
                                let t = document.head.querySelector('meta[name="viewport"]'),
                                    i = "viewport-fit=cover";
                                t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                                let s = k(t.content) && t.content.includes(i);
                                e ? (this.cleanupViewport = !s, s || (t.content += `,${i}`)) : this.cleanupViewport && (t.content = t.content.split(",").filter(e => e.trim() !== i).join(","))
                            }
                            this.onChange()
                        }), e(this, "trapFocus", e => {
                            if (D.isIos || !this.active || "Tab" !== e.key) return;
                            let t = document.activeElement,
                                i = Q.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                                [s] = i,
                                n = i[i.length - 1];
                            t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), e.preventDefault())
                        }), e(this, "update", () => {
                            if (this.enabled) {
                                let e;
                                e = this.forceFallback ? "Fallback (forced)" : eH.native ? "Native" : "Fallback", this.player.debug.log(`${e} fullscreen enabled`)
                            } else this.player.debug.log("Fullscreen not supported and fallback disabled");
                            X(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                        }), e(this, "enter", () => {
                            this.enabled && (D.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !eH.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? E(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({
                                navigationUI: "hide"
                            }))
                        }), e(this, "exit", () => {
                            if (this.enabled) {
                                if (D.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), eh(this.player.play());
                                else if (!eH.native || this.forceFallback) this.toggleFallback(!1);
                                else if (this.prefix) {
                                    if (!E(this.prefix)) {
                                        let e = "moz" === this.prefix ? "Cancel" : "Exit";
                                        document[`${this.prefix}${e}${this.property}`]()
                                    }
                                } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                            }
                        }), e(this, "toggle", () => {
                            this.active ? this.exit() : this.enter()
                        }), this.player = t, this.prefix = eH.prefix, this.property = eH.property, this.scrollPosition = {
                            x: 0,
                            y: 0
                        }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function(e, t) {
                            let {
                                prototype: i
                            } = Element;
                            return (i.closest || function() {
                                let e = this;
                                do {
                                    if (G.matches(e, t)) return e;
                                    e = e.parentElement || e.parentNode
                                } while (null !== e && 1 === e.nodeType);
                                return null
                            }).call(e, t)
                        }(this.player.elements.container, t.config.fullscreen.container), er.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
                            this.onChange()
                        }), er.call(this.player, this.player.elements.container, "dblclick", e => {
                            M(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen")
                        }), er.call(this, this.player.elements.container, "keydown", e => this.trapFocus(e)), this.update()
                    }
                    static get native() {
                        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                    }
                    get usingNative() {
                        return eH.native && !this.forceFallback
                    }
                    static get prefix() {
                        if (x(document.exitFullscreen)) return "";
                        let e = "";
                        return ["webkit", "moz", "ms"].some(t => !(!x(document[`${t}ExitFullscreen`]) && !x(document[`${t}CancelFullScreen`])) && (e = t, !0)), e
                    }
                    static get property() {
                        return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                    }
                    get enabled() {
                        return (eH.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                    }
                    get active() {
                        if (!this.enabled) return !1;
                        if (!eH.native || this.forceFallback) return Z(this.target, this.player.config.classNames.fullscreen.fallback);
                        let e = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
                        return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target
                    }
                    get target() {
                        return D.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                    }
                }

                function eq(e, t = 1) {
                    return new Promise((i, s) => {
                        let n = new Image,
                            r = () => {
                                delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n)
                            };
                        Object.assign(n, {
                            onload: r,
                            onerror: r,
                            src: e
                        })
                    })
                }
                let ez = {
                    addStyleHook() {
                        X(this.elements.container, this.config.selectors.container.replace(".", ""), !0), X(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
                    },
                    toggleNativeControls(e = !1) {
                        e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                    },
                    build() {
                        if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void ez.toggleNativeControls.call(this, !0);
                        M(this.elements.controls) || (eR.inject.call(this), this.listeners.controls()), ez.toggleNativeControls.call(this), this.isHTML5 && ej.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, eR.updateVolume.call(this), eR.timeUpdate.call(this), eR.durationUpdate.call(this), ez.checkPlaying.call(this), X(this.elements.container, this.config.classNames.pip.supported, ei.pip && this.isHTML5 && this.isVideo), X(this.elements.container, this.config.classNames.airplay.supported, ei.airplay && this.isHTML5), X(this.elements.container, this.config.classNames.isIos, D.isIos), X(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(() => {
                            el.call(this, this.media, "ready")
                        }, 0), ez.setTitle.call(this), this.poster && ez.setPoster.call(this, this.poster, !1).catch(() => {}), this.config.duration && eR.durationUpdate.call(this), this.config.mediaMetadata && eR.setMediaMetadata.call(this)
                    },
                    setTitle() {
                        let e = eS.get("play", this.config);
                        if (k(this.config.title) && !E(this.config.title) && (e += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach(t => {
                                t.setAttribute("aria-label", e)
                            }), this.isEmbed) {
                            let e = J.call(this, "iframe");
                            if (!M(e)) return;
                            let t = E(this.config.title) ? "video" : this.config.title,
                                i = eS.get("frameTitle", this.config);
                            e.setAttribute("title", i.replace("{title}", t))
                        }
                    },
                    togglePoster(e) {
                        X(this.elements.container, this.config.classNames.posterEnabled, e)
                    },
                    setPoster(e, t = !0) {
                        return t && this.poster ? Promise.reject(Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), ec.call(this).then(() => eq(e)).catch(t => {
                            throw e === this.poster && ez.togglePoster.call(this, !1), t
                        }).then(() => {
                            if (e !== this.poster) throw Error("setPoster cancelled by later call to setPoster")
                        }).then(() => (Object.assign(this.elements.poster.style, {
                            backgroundImage: `url('${e}')`,
                            backgroundSize: ""
                        }), ez.togglePoster.call(this, !0), e)))
                    },
                    checkPlaying(e) {
                        X(this.elements.container, this.config.classNames.playing, this.playing), X(this.elements.container, this.config.classNames.paused, this.paused), X(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(e => {
                            Object.assign(e, {
                                pressed: this.playing
                            }), e.setAttribute("aria-label", eS.get(this.playing ? "pause" : "play", this.config))
                        }), L(e) && "timeupdate" === e.type || ez.toggleControls.call(this)
                    },
                    checkLoading(e) {
                        this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
                            X(this.elements.container, this.config.classNames.loading, this.loading), ez.toggleControls.call(this)
                        }, this.loading ? 250 : 0)
                    },
                    toggleControls(e) {
                        let {
                            controls: t
                        } = this.elements;
                        if (t && this.config.hideControls) {
                            let i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                            this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i))
                        }
                    },
                    migrateStyles() {
                        Object.values({ ...this.media.style
                        }).filter(e => !E(e) && k(e) && e.startsWith("--plyr")).forEach(e => {
                            this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)), this.media.style.removeProperty(e)
                        }), E(this.media.style) && this.media.removeAttribute("style")
                    }
                };
                class eW {
                    constructor(t) {
                        e(this, "firstTouch", () => {
                            let {
                                player: e
                            } = this, {
                                elements: t
                            } = e;
                            e.touch = !0, X(t.container, e.config.classNames.isTouch, !0)
                        }), e(this, "setTabFocus", e => {
                            let {
                                player: t
                            } = this, {
                                elements: i
                            } = t, {
                                key: s,
                                type: n,
                                timeStamp: r
                            } = e;
                            if (clearTimeout(this.focusTimer), "keydown" === n && "Tab" !== s) return;
                            "keydown" === n && (this.lastKeyDown = r);
                            let a = r - this.lastKeyDown <= 20;
                            ("focus" !== n || a) && ((() => {
                                let e = t.config.classNames.tabFocus;
                                X(Q.call(t, `.${e}`), e, !1)
                            })(), "focusout" !== n && (this.focusTimer = setTimeout(() => {
                                let e = document.activeElement;
                                i.container.contains(e) && X(document.activeElement, t.config.classNames.tabFocus, !0)
                            }, 10)))
                        }), e(this, "global", (e = !0) => {
                            let {
                                player: t
                            } = this;
                            t.config.keyboard.global && en.call(t, window, "keydown keyup", this.handleKey, e, !1), en.call(t, document.body, "click", this.toggleMenu, e), eo.call(t, document.body, "touchstart", this.firstTouch), en.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
                        }), e(this, "container", () => {
                            let {
                                player: e
                            } = this, {
                                config: t,
                                elements: i,
                                timers: s
                            } = e;
                            !t.keyboard.global && t.keyboard.focused && er.call(e, i.container, "keydown keyup", this.handleKey, !1), er.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", t => {
                                let {
                                    controls: n
                                } = i;
                                n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
                                let r = 0;
                                ["touchstart", "touchmove", "mousemove"].includes(t.type) && (ez.toggleControls.call(e, !0), r = e.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout(() => ez.toggleControls.call(e, !1), r)
                            });
                            let n = () => {
                                    if (!e.isVimeo || e.config.vimeo.premium) return;
                                    let t = i.wrapper,
                                        {
                                            active: s
                                        } = e.fullscreen,
                                        [n, r] = eb.call(e),
                                        a = em(`aspect-ratio: ${n} / ${r}`);
                                    if (!s) return void(a ? (t.style.width = null, t.style.height = null) : (t.style.maxWidth = null, t.style.margin = null));
                                    let [o, l] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], u = o / l > n / r;
                                    a ? (t.style.width = u ? "auto" : "100%", t.style.height = u ? "100%" : "auto") : (t.style.maxWidth = u ? l / r * n + "px" : null, t.style.margin = u ? "0 auto" : null)
                                },
                                r = () => {
                                    clearTimeout(s.resized), s.resized = setTimeout(n, 50)
                                };
                            er.call(e, i.container, "enterfullscreen exitfullscreen", t => {
                                let {
                                    target: s
                                } = e.fullscreen;
                                s === i.container && (!e.isEmbed && E(e.config.ratio) || (n(), ("enterfullscreen" === t.type ? er : ea).call(e, window, "resize", r)))
                            })
                        }), e(this, "media", () => {
                            let {
                                player: e
                            } = this, {
                                elements: t
                            } = e;
                            if (er.call(e, e.media, "timeupdate seeking seeked", t => eR.timeUpdate.call(e, t)), er.call(e, e.media, "durationchange loadeddata loadedmetadata", t => eR.durationUpdate.call(e, t)), er.call(e, e.media, "ended", () => {
                                    e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause())
                                }), er.call(e, e.media, "progress playing seeking seeked", t => eR.updateProgress.call(e, t)), er.call(e, e.media, "volumechange", t => eR.updateVolume.call(e, t)), er.call(e, e.media, "playing play pause ended emptied timeupdate", t => ez.checkPlaying.call(e, t)), er.call(e, e.media, "waiting canplay seeked playing", t => ez.checkLoading.call(e, t)), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                                let i = J.call(e, `.${e.config.classNames.video}`);
                                if (!M(i)) return;
                                er.call(e, t.container, "click", s => {
                                    ([t.container, i].includes(s.target) || i.contains(s.target)) && (e.touch && e.config.hideControls || (e.ended ? (this.proxy(s, e.restart, "restart"), this.proxy(s, () => {
                                        eh(e.play())
                                    }, "play")) : this.proxy(s, () => {
                                        eh(e.togglePlay())
                                    }, "play")))
                                })
                            }
                            e.supported.ui && e.config.disableContextMenu && er.call(e, t.wrapper, "contextmenu", e => {
                                e.preventDefault()
                            }, !1), er.call(e, e.media, "volumechange", () => {
                                e.storage.set({
                                    volume: e.volume,
                                    muted: e.muted
                                })
                            }), er.call(e, e.media, "ratechange", () => {
                                eR.updateSetting.call(e, "speed"), e.storage.set({
                                    speed: e.speed
                                })
                            }), er.call(e, e.media, "qualitychange", t => {
                                eR.updateSetting.call(e, "quality", null, t.detail.quality)
                            }), er.call(e, e.media, "ready qualitychange", () => {
                                eR.setDownloadUrl.call(e)
                            });
                            let i = e.config.events.concat(["keyup", "keydown"]).join(" ");
                            er.call(e, e.media, i, i => {
                                let {
                                    detail: s = {}
                                } = i;
                                "error" === i.type && (s = e.media.error), el.call(e, t.container, i.type, !0, s)
                            })
                        }), e(this, "proxy", (e, t, i) => {
                            let {
                                player: s
                            } = this, n = s.config.listeners[i], r = !0;
                            x(n) && (r = n.call(s, e)), !1 !== r && x(t) && t.call(s, e)
                        }), e(this, "bind", (e, t, i, s, n = !0) => {
                            let {
                                player: r
                            } = this, a = r.config.listeners[s], o = x(a);
                            er.call(r, e, t, e => this.proxy(e, i, s), n && !o)
                        }), e(this, "controls", () => {
                            let {
                                player: e
                            } = this, {
                                elements: t
                            } = e, i = D.isIE ? "change" : "input";
                            if (t.buttons.play && Array.from(t.buttons.play).forEach(t => {
                                    this.bind(t, "click", () => {
                                        eh(e.togglePlay())
                                    }, "play")
                                }), this.bind(t.buttons.restart, "click", e.restart, "restart"), this.bind(t.buttons.rewind, "click", () => {
                                    e.lastSeekTime = Date.now(), e.rewind()
                                }, "rewind"), this.bind(t.buttons.fastForward, "click", () => {
                                    e.lastSeekTime = Date.now(), e.forward()
                                }, "fastForward"), this.bind(t.buttons.mute, "click", () => {
                                    e.muted = !e.muted
                                }, "mute"), this.bind(t.buttons.captions, "click", () => e.toggleCaptions()), this.bind(t.buttons.download, "click", () => {
                                    el.call(e, e.media, "download")
                                }, "download"), this.bind(t.buttons.fullscreen, "click", () => {
                                    e.fullscreen.toggle()
                                }, "fullscreen"), this.bind(t.buttons.pip, "click", () => {
                                    e.pip = "toggle"
                                }, "pip"), this.bind(t.buttons.airplay, "click", e.airplay, "airplay"), this.bind(t.buttons.settings, "click", t => {
                                    t.stopPropagation(), t.preventDefault(), eR.toggleMenu.call(e, t)
                                }, null, !1), this.bind(t.buttons.settings, "keyup", t => {
                                    ["Space", "Enter"].includes(t.key) && ("Enter" !== t.key ? (t.preventDefault(), t.stopPropagation(), eR.toggleMenu.call(e, t)) : eR.focusFirstMenuItem.call(e, null, !0))
                                }, null, !1), this.bind(t.settings.menu, "keydown", t => {
                                    "Escape" === t.key && eR.toggleMenu.call(e, t)
                                }), this.bind(t.inputs.seek, "mousedown mousemove", e => {
                                    let i = t.progress.getBoundingClientRect(),
                                        s = 100 / i.width * (e.pageX - i.left);
                                    e.currentTarget.setAttribute("seek-value", s)
                                }), this.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", t => {
                                    let i = t.currentTarget,
                                        s = "play-on-seeked";
                                    if (V(t) && !["ArrowLeft", "ArrowRight"].includes(t.key)) return;
                                    e.lastSeekTime = Date.now();
                                    let n = i.hasAttribute(s),
                                        r = ["mouseup", "touchend", "keyup"].includes(t.type);
                                    n && r ? (i.removeAttribute(s), eh(e.play())) : !r && e.playing && (i.setAttribute(s, ""), e.pause())
                                }), D.isIos) {
                                let t = Q.call(e, 'input[type="range"]');
                                Array.from(t).forEach(e => this.bind(e, i, e => j(e.target)))
                            }
                            this.bind(t.inputs.seek, i, t => {
                                let i = t.currentTarget,
                                    s = i.getAttribute("seek-value");
                                E(s) && (s = i.value), i.removeAttribute("seek-value"), e.currentTime = s / i.max * e.duration
                            }, "seek"), this.bind(t.progress, "mouseenter mouseleave mousemove", t => eR.updateSeekTooltip.call(e, t)), this.bind(t.progress, "mousemove touchmove", t => {
                                let {
                                    previewThumbnails: i
                                } = e;
                                i && i.loaded && i.startMove(t)
                            }), this.bind(t.progress, "mouseleave touchend click", () => {
                                let {
                                    previewThumbnails: t
                                } = e;
                                t && t.loaded && t.endMove(!1, !0)
                            }), this.bind(t.progress, "mousedown touchstart", t => {
                                let {
                                    previewThumbnails: i
                                } = e;
                                i && i.loaded && i.startScrubbing(t)
                            }), this.bind(t.progress, "mouseup touchend", t => {
                                let {
                                    previewThumbnails: i
                                } = e;
                                i && i.loaded && i.endScrubbing(t)
                            }), D.isWebkit && Array.from(Q.call(e, 'input[type="range"]')).forEach(t => {
                                this.bind(t, "input", t => eR.updateRangeFill.call(e, t.target))
                            }), e.config.toggleInvert && !M(t.display.duration) && this.bind(t.display.currentTime, "click", () => {
                                0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, eR.timeUpdate.call(e))
                            }), this.bind(t.inputs.volume, i, t => {
                                e.volume = t.target.value
                            }, "volume"), this.bind(t.controls, "mouseenter mouseleave", i => {
                                t.controls.hover = !e.touch && "mouseenter" === i.type
                            }), t.fullscreen && Array.from(t.fullscreen.children).filter(e => !e.contains(t.container)).forEach(i => {
                                this.bind(i, "mouseenter mouseleave", i => {
                                    t.controls && (t.controls.hover = !e.touch && "mouseenter" === i.type)
                                })
                            }), this.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", e => {
                                t.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                            }), this.bind(t.controls, "focusin", () => {
                                let {
                                    config: i,
                                    timers: s
                                } = e;
                                X(t.controls, i.classNames.noTransition, !0), ez.toggleControls.call(e, !0), setTimeout(() => {
                                    X(t.controls, i.classNames.noTransition, !1)
                                }, 0);
                                let n = this.touch ? 3e3 : 4e3;
                                clearTimeout(s.controls), s.controls = setTimeout(() => ez.toggleControls.call(e, !1), n)
                            }), this.bind(t.inputs.volume, "wheel", t => {
                                let i = t.webkitDirectionInvertedFromDevice,
                                    [s, n] = [t.deltaX, -t.deltaY].map(e => i ? -e : e),
                                    r = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                                e.increaseVolume(r / 50);
                                let {
                                    volume: a
                                } = e.media;
                                (1 === r && a < 1 || -1 === r && a > 0) && t.preventDefault()
                            }, "volume", !1)
                        }), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
                    }
                    handleKey(e) {
                        var t;
                        let {
                            player: i
                        } = this, {
                            elements: s
                        } = i, {
                            key: n,
                            type: r,
                            altKey: a,
                            ctrlKey: o,
                            metaKey: l,
                            shiftKey: u
                        } = e, c = "keydown" === r, h = c && n === this.lastKey;
                        if (!a && !o && !l && !u && n) {
                            if (c) {
                                let r = document.activeElement;
                                if (M(r)) {
                                    let {
                                        editable: t
                                    } = i.config.selectors, {
                                        seek: n
                                    } = s.inputs;
                                    if (r !== n && G(r, t) || "Space" === e.key && G(r, 'button, [role^="menuitem"]')) return
                                }
                                switch (["Space", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
                                    case "0":
                                    case "1":
                                    case "2":
                                    case "3":
                                    case "4":
                                    case "5":
                                    case "6":
                                    case "7":
                                    case "8":
                                    case "9":
                                        h || (t = parseInt(n, 10), i.currentTime = i.duration / 10 * t);
                                        break;
                                    case "Space":
                                    case "k":
                                        h || eh(i.togglePlay());
                                        break;
                                    case "ArrowUp":
                                        i.increaseVolume(.1);
                                        break;
                                    case "ArrowDown":
                                        i.decreaseVolume(.1);
                                        break;
                                    case "m":
                                        h || (i.muted = !i.muted);
                                        break;
                                    case "ArrowRight":
                                        i.forward();
                                        break;
                                    case "ArrowLeft":
                                        i.rewind();
                                        break;
                                    case "f":
                                        i.fullscreen.toggle();
                                        break;
                                    case "c":
                                        h || i.toggleCaptions();
                                        break;
                                    case "l":
                                        i.loop = !i.loop
                                }
                                "Escape" === n && !i.fullscreen.usingNative && i.fullscreen.active && i.fullscreen.toggle(), this.lastKey = n
                            } else this.lastKey = null
                        }
                    }
                    toggleMenu(e) {
                        eR.toggleMenu.call(this.player, e)
                    }
                }
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self && self;
                var eY = (r = o = {
                    exports: {}
                }, o.exports, r.exports = function() {
                    var e = function() {},
                        t = {},
                        i = {},
                        s = {};

                    function n(e, t) {
                        if (e) {
                            var n = s[e];
                            if (i[e] = t, n)
                                for (; n.length;) n[0](e, t), n.splice(0, 1)
                        }
                    }

                    function r(t, i) {
                        t.call && (t = {
                            success: t
                        }), i.length ? (t.error || e)(i) : (t.success || e)(t)
                    }

                    function a(i, s, a) {
                        var o, l;
                        if (s && s.trim && (o = s), l = (o ? a : s) || {}, o) {
                            if (o in t) throw "LoadJS";
                            t[o] = !0
                        }

                        function u(t, s) {
                            ! function(t, i, s) {
                                var n, r, a = (t = t.push ? t : [t]).length,
                                    o = a,
                                    l = [];
                                for (n = function(e, t, s) {
                                        if ("e" == t && l.push(e), "b" == t) {
                                            if (!s) return;
                                            l.push(e)
                                        }--a || i(l)
                                    }, r = 0; r < o; r++) ! function t(i, s, n, r) {
                                    var a, o, l = document,
                                        u = n.async,
                                        c = (n.numRetries || 0) + 1,
                                        h = n.before || e,
                                        d = i.replace(/[\?|#].*$/, ""),
                                        p = i.replace(/^(css|img)!/, "");
                                    r = r || 0, /(^css!|\.css$)/.test(d) ? ((o = l.createElement("link")).rel = "stylesheet", o.href = p, (a = "hideFocus" in o) && o.relList && (a = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (o = l.createElement("img")).src = p : ((o = l.createElement("script")).src = i, o.async = void 0 === u || u), o.onload = o.onerror = o.onbeforeload = function(e) {
                                        var l = e.type[0];
                                        if (a) try {
                                            o.sheet.cssText.length || (l = "e")
                                        } catch (e) {
                                            18 != e.code && (l = "e")
                                        }
                                        if ("e" == l) {
                                            if ((r += 1) < c) return t(i, s, n, r)
                                        } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";
                                        s(i, l, e.defaultPrevented)
                                    }, !1 !== h(i, o) && l.head.appendChild(o)
                                }(t[r], n, s)
                            }(i, function(e) {
                                r(l, e), t && r({
                                    success: t,
                                    error: s
                                }, e), n(o, e)
                            }, l)
                        }
                        if (l.returnPromise) return new Promise(u);
                        u()
                    }
                    return a.ready = function(e, t) {
                        return function(e, t) {
                            e = e.push ? e : [e];
                            var n, r, a, o = [],
                                l = e.length,
                                u = l;
                            for (n = function(e, i) {
                                    i.length && o.push(e), --u || t(o)
                                }; l--;)(a = i[r = e[l]]) ? n(r, a) : (s[r] = s[r] || []).push(n)
                        }(e, function(e) {
                            r(t, e)
                        }), a
                    }, a.done = function(e) {
                        n(e, [])
                    }, a.reset = function() {
                        t = {}, i = {}, s = {}
                    }, a.isDefined = function(e) {
                        return e in t
                    }, a
                }(), o.exports);

                function eK(e) {
                    return new Promise((t, i) => {
                        eY(e, {
                            success: t,
                            error: i
                        })
                    })
                }

                function eX(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, el.call(this, this.media, e ? "play" : "pause"))
                }
                let eZ = {
                    setup() {
                        let e = this;
                        X(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, ev.call(e), T(window.Vimeo) ? eZ.ready.call(e) : eK(e.config.urls.vimeo.sdk).then(() => {
                            eZ.ready.call(e)
                        }).catch(t => {
                            e.debug.warn("Vimeo SDK (player.js) failed to load", t)
                        })
                    },
                    ready() {
                        var e;
                        let t = this,
                            i = t.config.vimeo,
                            {
                                premium: s,
                                referrerPolicy: n,
                                ...r
                            } = i,
                            a = t.media.getAttribute("src"),
                            o = "";
                        E(a) ? (a = t.media.getAttribute(t.config.attributes.embed.id), o = t.media.getAttribute(t.config.attributes.embed.hash)) : o = function(e) {
                            let t = e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
                            return t && 5 === t.length ? t[4] : null
                        }(a);
                        let l = o ? {
                            h: o
                        } : {};
                        s && Object.assign(r, {
                            controls: !1,
                            sidedock: !1
                        });
                        let u = eN({
                                loop: t.config.loop.active,
                                autoplay: t.autoplay,
                                muted: t.muted,
                                gesture: "media",
                                playsinline: !this.config.fullscreen.iosNative,
                                ...l,
                                ...r
                            }),
                            c = E(e = a) ? null : S(Number(e)) ? e : e.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e,
                            h = U("iframe"),
                            d = ek(t.config.urls.vimeo.iframe, c, u);
                        if (h.setAttribute("src", d), h.setAttribute("allowfullscreen", ""), h.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"), E(n) || h.setAttribute("referrerPolicy", n), s || !i.customControls) h.setAttribute("data-poster", t.poster), t.media = W(h, t.media);
                        else {
                            let e = U("div", {
                                class: t.config.classNames.embedContainer,
                                "data-poster": t.poster
                            });
                            e.appendChild(h), t.media = W(e, t.media)
                        }
                        i.customControls || eM(ek(t.config.urls.vimeo.api, d)).then(e => {
                            !E(e) && e.thumbnail_url && ez.setPoster.call(t, e.thumbnail_url).catch(() => {})
                        }), t.embed = new window.Vimeo.Player(h, {
                            autopause: t.config.autopause,
                            muted: t.muted
                        }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = () => (eX.call(t, !0), t.embed.play()), t.media.pause = () => (eX.call(t, !1), t.embed.pause()), t.media.stop = () => {
                            t.pause(), t.currentTime = 0
                        };
                        let {
                            currentTime: p
                        } = t.media;
                        Object.defineProperty(t.media, "currentTime", {
                            get: () => p,
                            set(e) {
                                let {
                                    embed: i,
                                    media: s,
                                    paused: n,
                                    volume: r
                                } = t, a = n && !i.hasPlayed;
                                s.seeking = !0, el.call(t, s, "seeking"), Promise.resolve(a && i.setVolume(0)).then(() => i.setCurrentTime(e)).then(() => a && i.pause()).then(() => a && i.setVolume(r)).catch(() => {})
                            }
                        });
                        let m = t.config.speed.selected;
                        Object.defineProperty(t.media, "playbackRate", {
                            get: () => m,
                            set(e) {
                                t.embed.setPlaybackRate(e).then(() => {
                                    m = e, el.call(t, t.media, "ratechange")
                                }).catch(() => {
                                    t.options.speed = [1]
                                })
                            }
                        });
                        let {
                            volume: f
                        } = t.config;
                        Object.defineProperty(t.media, "volume", {
                            get: () => f,
                            set(e) {
                                t.embed.setVolume(e).then(() => {
                                    f = e, el.call(t, t.media, "volumechange")
                                })
                            }
                        });
                        let {
                            muted: g
                        } = t.config;
                        Object.defineProperty(t.media, "muted", {
                            get: () => g,
                            set(e) {
                                let i = !!C(e) && e;
                                t.embed.setVolume(i ? 0 : t.config.volume).then(() => {
                                    g = i, el.call(t, t.media, "volumechange")
                                })
                            }
                        });
                        let y, {
                            loop: b
                        } = t.config;
                        Object.defineProperty(t.media, "loop", {
                            get: () => b,
                            set(e) {
                                let i = C(e) ? e : t.config.loop.active;
                                t.embed.setLoop(i).then(() => {
                                    b = i
                                })
                            }
                        }), t.embed.getVideoUrl().then(e => {
                            y = e, eR.setDownloadUrl.call(t)
                        }).catch(e => {
                            this.debug.warn(e)
                        }), Object.defineProperty(t.media, "currentSrc", {
                            get: () => y
                        }), Object.defineProperty(t.media, "ended", {
                            get: () => t.currentTime === t.duration
                        }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(e => {
                            let [i, s] = e;
                            t.embed.ratio = ew(i, s), ev.call(this)
                        }), t.embed.setAutopause(t.config.autopause).then(e => {
                            t.config.autopause = e
                        }), t.embed.getVideoTitle().then(e => {
                            t.config.title = e, ez.setTitle.call(this)
                        }), t.embed.getCurrentTime().then(e => {
                            p = e, el.call(t, t.media, "timeupdate")
                        }), t.embed.getDuration().then(e => {
                            t.media.duration = e, el.call(t, t.media, "durationchange")
                        }), t.embed.getTextTracks().then(e => {
                            t.media.textTracks = e, ej.setup.call(t)
                        }), t.embed.on("cuechange", ({
                            cues: e = []
                        }) => {
                            let i = e.map(e => (function(e) {
                                let t = document.createDocumentFragment(),
                                    i = document.createElement("div");
                                return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText
                            })(e.text));
                            ej.updateCues.call(t, i)
                        }), t.embed.on("loaded", () => {
                            t.embed.getPaused().then(e => {
                                eX.call(t, !e), e || el.call(t, t.media, "playing")
                            }), M(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
                        }), t.embed.on("bufferstart", () => {
                            el.call(t, t.media, "waiting")
                        }), t.embed.on("bufferend", () => {
                            el.call(t, t.media, "playing")
                        }), t.embed.on("play", () => {
                            eX.call(t, !0), el.call(t, t.media, "playing")
                        }), t.embed.on("pause", () => {
                            eX.call(t, !1)
                        }), t.embed.on("timeupdate", e => {
                            t.media.seeking = !1, p = e.seconds, el.call(t, t.media, "timeupdate")
                        }), t.embed.on("progress", e => {
                            t.media.buffered = e.percent, el.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && el.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(e => {
                                e !== t.media.duration && (t.media.duration = e, el.call(t, t.media, "durationchange"))
                            })
                        }), t.embed.on("seeked", () => {
                            t.media.seeking = !1, el.call(t, t.media, "seeked")
                        }), t.embed.on("ended", () => {
                            t.media.paused = !0, el.call(t, t.media, "ended")
                        }), t.embed.on("error", e => {
                            t.media.error = e, el.call(t, t.media, "error")
                        }), i.customControls && setTimeout(() => ez.build.call(t), 0)
                    }
                };

                function eG(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, el.call(this, this.media, e ? "play" : "pause"))
                }
                let eQ = {
                        setup() {
                            if (X(this.elements.wrapper, this.config.classNames.embed, !0), T(window.YT) && x(window.YT.Player)) eQ.ready.call(this);
                            else {
                                let e = window.onYouTubeIframeAPIReady;
                                window.onYouTubeIframeAPIReady = () => {
                                    x(e) && e(), eQ.ready.call(this)
                                }, eK(this.config.urls.youtube.sdk).catch(e => {
                                    this.debug.warn("YouTube API failed to load", e)
                                })
                            }
                        },
                        getTitle(e) {
                            eM(ek(this.config.urls.youtube.api, e)).then(e => {
                                if (T(e)) {
                                    let {
                                        title: t,
                                        height: i,
                                        width: s
                                    } = e;
                                    this.config.title = t, ez.setTitle.call(this), this.embed.ratio = ew(s, i)
                                }
                                ev.call(this)
                            }).catch(() => {
                                ev.call(this)
                            })
                        },
                        ready() {
                            var e;
                            let t = this,
                                i = t.config.youtube,
                                s = t.media && t.media.getAttribute("id");
                            if (!E(s) && s.startsWith("youtube-")) return;
                            let n = t.media.getAttribute("src");
                            E(n) && (n = t.media.getAttribute(this.config.attributes.embed.id));
                            let r = E(e = n) ? null : e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e,
                                a = U("div", {
                                    id: `${t.provider}-${Math.floor(1e4*Math.random())}`,
                                    "data-poster": i.customControls ? t.poster : void 0
                                });
                            if (t.media = W(a, t.media), i.customControls) {
                                let e = e => `https://i.ytimg.com/vi/${r}/${e}default.jpg`;
                                eq(e("maxres"), 121).catch(() => eq(e("sd"), 121)).catch(() => eq(e("hq"))).then(e => ez.setPoster.call(t, e.src)).then(e => {
                                    e.includes("maxres") || (t.elements.poster.style.backgroundSize = "cover")
                                }).catch(() => {})
                            }
                            t.embed = new window.YT.Player(t.media, {
                                videoId: r,
                                host: i.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0,
                                playerVars: _({}, {
                                    autoplay: t.config.autoplay ? 1 : 0,
                                    hl: t.config.hl,
                                    controls: t.supported.ui && i.customControls ? 0 : 1,
                                    disablekb: 1,
                                    playsinline: t.config.fullscreen.iosNative ? 0 : 1,
                                    cc_load_policy: t.captions.active ? 1 : 0,
                                    cc_lang_pref: t.config.captions.language,
                                    widget_referrer: window ? window.location.href : null
                                }, i),
                                events: {
                                    onError(e) {
                                        if (!t.media.error) {
                                            let i = e.data;
                                            t.media.error = {
                                                code: i,
                                                message: ({
                                                    2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                                    5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                                    100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                                    101: "The owner of the requested video does not allow it to be played in embedded players.",
                                                    150: "The owner of the requested video does not allow it to be played in embedded players."
                                                })[i] || "An unknown error occured"
                                            }, el.call(t, t.media, "error")
                                        }
                                    },
                                    onPlaybackRateChange(e) {
                                        let i = e.target;
                                        t.media.playbackRate = i.getPlaybackRate(), el.call(t, t.media, "ratechange")
                                    },
                                    onReady(e) {
                                        if (x(t.media.play)) return;
                                        let s = e.target;
                                        eQ.getTitle.call(t, r), t.media.play = () => {
                                            eG.call(t, !0), s.playVideo()
                                        }, t.media.pause = () => {
                                            eG.call(t, !1), s.pauseVideo()
                                        }, t.media.stop = () => {
                                            s.stopVideo()
                                        }, t.media.duration = s.getDuration(), t.media.paused = !0, t.media.currentTime = 0, Object.defineProperty(t.media, "currentTime", {
                                            get: () => Number(s.getCurrentTime()),
                                            set(e) {
                                                t.paused && !t.embed.hasPlayed && t.embed.mute(), t.media.seeking = !0, el.call(t, t.media, "seeking"), s.seekTo(e)
                                            }
                                        }), Object.defineProperty(t.media, "playbackRate", {
                                            get: () => s.getPlaybackRate(),
                                            set(e) {
                                                s.setPlaybackRate(e)
                                            }
                                        });
                                        let {
                                            volume: n
                                        } = t.config;
                                        Object.defineProperty(t.media, "volume", {
                                            get: () => n,
                                            set(e) {
                                                n = e, s.setVolume(100 * n), el.call(t, t.media, "volumechange")
                                            }
                                        });
                                        let {
                                            muted: a
                                        } = t.config;
                                        Object.defineProperty(t.media, "muted", {
                                            get: () => a,
                                            set(e) {
                                                let i = C(e) ? e : a;
                                                a = i, s[i ? "mute" : "unMute"](), s.setVolume(100 * n), el.call(t, t.media, "volumechange")
                                            }
                                        }), Object.defineProperty(t.media, "currentSrc", {
                                            get: () => s.getVideoUrl()
                                        }), Object.defineProperty(t.media, "ended", {
                                            get: () => t.currentTime === t.duration
                                        });
                                        let o = s.getAvailablePlaybackRates();
                                        t.options.speed = o.filter(e => t.config.speed.options.includes(e)), t.supported.ui && i.customControls && t.media.setAttribute("tabindex", -1), el.call(t, t.media, "timeupdate"), el.call(t, t.media, "durationchange"), clearInterval(t.timers.buffering), t.timers.buffering = setInterval(() => {
                                            t.media.buffered = s.getVideoLoadedFraction(), (null === t.media.lastBuffered || t.media.lastBuffered < t.media.buffered) && el.call(t, t.media, "progress"), t.media.lastBuffered = t.media.buffered, 1 === t.media.buffered && (clearInterval(t.timers.buffering), el.call(t, t.media, "canplaythrough"))
                                        }, 200), i.customControls && setTimeout(() => ez.build.call(t), 50)
                                    },
                                    onStateChange(e) {
                                        let s = e.target;
                                        switch (clearInterval(t.timers.playing), t.media.seeking && [1, 2].includes(e.data) && (t.media.seeking = !1, el.call(t, t.media, "seeked")), e.data) {
                                            case -1:
                                                el.call(t, t.media, "timeupdate"), t.media.buffered = s.getVideoLoadedFraction(), el.call(t, t.media, "progress");
                                                break;
                                            case 0:
                                                eG.call(t, !1), t.media.loop ? (s.stopVideo(), s.playVideo()) : el.call(t, t.media, "ended");
                                                break;
                                            case 1:
                                                i.customControls && !t.config.autoplay && t.media.paused && !t.embed.hasPlayed ? t.media.pause() : (eG.call(t, !0), el.call(t, t.media, "playing"), t.timers.playing = setInterval(() => {
                                                    el.call(t, t.media, "timeupdate")
                                                }, 50), t.media.duration !== s.getDuration() && (t.media.duration = s.getDuration(), el.call(t, t.media, "durationchange")));
                                                break;
                                            case 2:
                                                t.muted || t.embed.unMute(), eG.call(t, !1);
                                                break;
                                            case 3:
                                                el.call(t, t.media, "waiting")
                                        }
                                        el.call(t, t.elements.container, "statechange", !1, {
                                            code: e.data
                                        })
                                    }
                                }
                            })
                        }
                    },
                    eJ = {
                        setup() {
                            this.media ? (X(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), X(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && X(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = U("div", {
                                class: this.config.classNames.video
                            }), F(this.media, this.elements.wrapper), this.elements.poster = U("div", {
                                class: this.config.classNames.poster
                            }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? eT.setup.call(this) : this.isYouTube ? eQ.setup.call(this) : this.isVimeo && eZ.setup.call(this)) : this.debug.warn("No media element found!")
                        }
                    };
                class e0 {
                    constructor(t) {
                        e(this, "load", () => {
                            this.enabled && (T(window.google) && T(window.google.ima) ? this.ready() : eK(this.player.config.urls.googleIMA.sdk).then(() => {
                                this.ready()
                            }).catch(() => {
                                this.trigger("error", Error("Google IMA SDK failed to load"))
                            }))
                        }), e(this, "ready", () => {
                            this.enabled || (this.manager && this.manager.destroy(), this.elements.displayContainer && this.elements.displayContainer.destroy(), this.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                                this.clearSafetyTimer("onAdsManagerLoaded()")
                            }), this.listeners(), this.setupIMA()
                        }), e(this, "setupIMA", () => {
                            this.elements.container = U("div", {
                                class: this.player.config.classNames.ads
                            }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, e => this.onAdsManagerLoaded(e), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => this.onAdError(e), !1), this.requestAds()
                        }), e(this, "requestAds", () => {
                            let {
                                container: e
                            } = this.player.elements;
                            try {
                                let t = new google.ima.AdsRequest;
                                t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t)
                            } catch (e) {
                                this.onAdError(e)
                            }
                        }), e(this, "pollCountdown", (e = !1) => {
                            if (!e) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                            this.countdownTimer = setInterval(() => {
                                let e = eO(Math.max(this.manager.getRemainingTime(), 0)),
                                    t = `${eS.get("advertisement",this.player.config)} - ${e}`;
                                this.elements.container.setAttribute("data-badge-text", t)
                            }, 100)
                        }), e(this, "onAdsManagerLoaded", e => {
                            if (!this.enabled) return;
                            let t = new google.ima.AdsRenderingSettings;
                            t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, this.manager = e.getAdsManager(this.player, t), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => this.onAdError(e)), Object.keys(google.ima.AdEvent.Type).forEach(e => {
                                this.manager.addEventListener(google.ima.AdEvent.Type[e], e => this.onAdEvent(e))
                            }), this.trigger("loaded")
                        }), e(this, "addCuePoints", () => {
                            E(this.cuePoints) || this.cuePoints.forEach(e => {
                                if (0 !== e && -1 !== e && e < this.player.duration) {
                                    let t = this.player.elements.progress;
                                    if (M(t)) {
                                        let i = 100 / this.player.duration * e,
                                            s = U("span", {
                                                class: this.player.config.classNames.cues
                                            });
                                        s.style.left = `${i.toString()}%`, t.appendChild(s)
                                    }
                                }
                            })
                        }), e(this, "onAdEvent", e => {
                            let {
                                container: t
                            } = this.player.elements, i = e.getAd(), s = e.getAdData();
                            switch ((e => {
                                el.call(this.player, this.player.media, `ads${e.replace(/_/g,"").toLowerCase()}`)
                            })(e.type), e.type) {
                                case google.ima.AdEvent.Type.LOADED:
                                    this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
                                    break;
                                case google.ima.AdEvent.Type.STARTED:
                                    this.manager.setVolume(this.player.volume);
                                    break;
                                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                    this.player.ended ? this.loadAds() : this.loader.contentComplete();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                    this.pauseContent();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                    this.pollCountdown(), this.resumeContent();
                                    break;
                                case google.ima.AdEvent.Type.LOG:
                                    s.adError && this.player.debug.warn(`Non-fatal ad error: ${s.adError.getMessage()}`)
                            }
                        }), e(this, "onAdError", e => {
                            this.cancel(), this.player.debug.warn("Ads error", e)
                        }), e(this, "listeners", () => {
                            let e;
                            let {
                                container: t
                            } = this.player.elements;
                            this.player.on("canplay", () => {
                                this.addCuePoints()
                            }), this.player.on("ended", () => {
                                this.loader.contentComplete()
                            }), this.player.on("timeupdate", () => {
                                e = this.player.currentTime
                            }), this.player.on("seeked", () => {
                                let t = this.player.currentTime;
                                E(this.cuePoints) || this.cuePoints.forEach((i, s) => {
                                    e < i && i < t && (this.manager.discardAdBreak(), this.cuePoints.splice(s, 1))
                                })
                            }), window.addEventListener("resize", () => {
                                this.manager && this.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
                            })
                        }), e(this, "play", () => {
                            let {
                                container: e
                            } = this.player.elements;
                            this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                                try {
                                    this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = !0
                                } catch (e) {
                                    this.onAdError(e)
                                }
                            }).catch(() => {})
                        }), e(this, "resumeContent", () => {
                            this.elements.container.style.zIndex = "", this.playing = !1, eh(this.player.media.play())
                        }), e(this, "pauseContent", () => {
                            this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
                        }), e(this, "cancel", () => {
                            this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                        }), e(this, "loadAds", () => {
                            this.managerPromise.then(() => {
                                this.manager && this.manager.destroy(), this.managerPromise = new Promise(e => {
                                    this.on("loaded", e), this.player.debug.log(this.manager)
                                }), this.initialized = !1, this.requestAds()
                            }).catch(() => {})
                        }), e(this, "trigger", (e, ...t) => {
                            let i = this.events[e];
                            A(i) && i.forEach(e => {
                                x(e) && e.apply(this, t)
                            })
                        }), e(this, "on", (e, t) => (A(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this)), e(this, "startSafetyTimer", (e, t) => {
                            this.player.debug.log(`Safety timer invoked from: ${t}`), this.safetyTimer = setTimeout(() => {
                                this.cancel(), this.clearSafetyTimer("startSafetyTimer()")
                            }, e)
                        }), e(this, "clearSafetyTimer", e => {
                            w(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e}`), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                        }), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                            container: null,
                            displayContainer: null
                        }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e, t) => {
                            this.on("loaded", e), this.on("error", t)
                        }), this.load()
                    }
                    get enabled() {
                        let {
                            config: e
                        } = this;
                        return this.player.isHTML5 && this.player.isVideo && e.enabled && (!E(e.publisherId) || I(e.tagUrl))
                    }
                    get tagUrl() {
                        let {
                            config: e
                        } = this;
                        return I(e.tagUrl) ? e.tagUrl : `https://go.aniview.com/api/adserver6/vast/?${eN({AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:e.publisherId})}`
                    }
                }

                function e1(e = 0, t = 0, i = 255) {
                    return Math.min(Math.max(e, t), i)
                }
                let e5 = e => {
                        let t = [];
                        return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(e => {
                            let i = {};
                            e.split(/\r\n|\n|\r/).forEach(e => {
                                if (S(i.startTime)) {
                                    if (!E(e.trim()) && E(i.text)) {
                                        let t = e.trim().split("#xywh=");
                                        [i.text] = t, t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","))
                                    }
                                } else {
                                    let t = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                    t && (i.startTime = 60 * Number(t[1] || 0) * 60 + 60 * Number(t[2]) + Number(t[3]) + Number(`0.${t[4]}`), i.endTime = 60 * Number(t[6] || 0) * 60 + 60 * Number(t[7]) + Number(t[8]) + Number(`0.${t[9]}`))
                                }
                            }), i.text && t.push(i)
                        }), t
                    },
                    e2 = (e, t) => {
                        let i = {};
                        return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i
                    };
                class e4 {
                    constructor(t) {
                        e(this, "load", () => {
                            this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.loaded = !0)
                            })
                        }), e(this, "getThumbnails", () => new Promise(e => {
                            let {
                                src: t
                            } = this.player.config.previewThumbnails;
                            if (E(t)) throw Error("Missing previewThumbnails.src config attribute");
                            let i = () => {
                                this.thumbnails.sort((e, t) => e.height - t.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e()
                            };
                            if (x(t)) t(e => {
                                this.thumbnails = e, i()
                            });
                            else {
                                let e = (k(t) ? [t] : t).map(e => this.getThumbnail(e));
                                Promise.all(e).then(i)
                            }
                        })), e(this, "getThumbnail", e => new Promise(t => {
                            eM(e).then(i => {
                                let s = {
                                    frames: e5(i),
                                    height: null,
                                    urlPrefix: ""
                                };
                                s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                                let n = new Image;
                                n.onload = () => {
                                    s.height = n.naturalHeight, s.width = n.naturalWidth, this.thumbnails.push(s), t()
                                }, n.src = s.urlPrefix + s.frames[0].text
                            })
                        })), e(this, "startMove", e => {
                            if (this.loaded && L(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                                if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                                else {
                                    var t, i;
                                    let s = this.player.elements.progress.getBoundingClientRect(),
                                        n = 100 / s.width * (e.pageX - s.left);
                                    this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = eO(this.seekTime);
                                    let r = null === (t = this.player.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find(({
                                        time: e
                                    }) => e === Math.round(this.seekTime));
                                    r && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${r.label}<br>`)
                                }
                                this.showImageAtCurrentTime()
                            }
                        }), e(this, "endMove", () => {
                            this.toggleThumbContainer(!1, !0)
                        }), e(this, "startScrubbing", e => {
                            (w(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
                        }), e(this, "endScrubbing", () => {
                            this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : eo.call(this.player, this.player.media, "timeupdate", () => {
                                this.mouseDown || this.toggleScrubbingContainer(!1)
                            })
                        }), e(this, "listeners", () => {
                            this.player.on("play", () => {
                                this.toggleThumbContainer(!1, !0)
                            }), this.player.on("seeked", () => {
                                this.toggleThumbContainer(!1)
                            }), this.player.on("timeupdate", () => {
                                this.lastTime = this.player.media.currentTime
                            })
                        }), e(this, "render", () => {
                            this.elements.thumb.container = U("div", {
                                class: this.player.config.classNames.previewThumbnails.thumbContainer
                            }), this.elements.thumb.imageContainer = U("div", {
                                class: this.player.config.classNames.previewThumbnails.imageContainer
                            }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                            let e = U("div", {
                                class: this.player.config.classNames.previewThumbnails.timeContainer
                            });
                            this.elements.thumb.time = U("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e), M(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = U("div", {
                                class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                            }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                        }), e(this, "destroy", () => {
                            this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
                        }), e(this, "showImageAtCurrentTime", () => {
                            this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                            let e = this.thumbnails[0].frames.findIndex(e => this.seekTime >= e.startTime && this.seekTime <= e.endTime),
                                t = e >= 0,
                                i = 0;
                            this.mouseDown || this.toggleThumbContainer(t), t && (this.thumbnails.forEach((t, s) => {
                                this.loadedImages.includes(t.frames[e].text) && (i = s)
                            }), e !== this.showingThumb && (this.showingThumb = e, this.loadImage(i)))
                        }), e(this, "loadImage", (e = 0) => {
                            let t = this.showingThumb,
                                i = this.thumbnails[e],
                                {
                                    urlPrefix: s
                                } = i,
                                n = i.frames[t],
                                r = i.frames[t].text,
                                a = s + r;
                            if (this.currentImageElement && this.currentImageElement.dataset.filename === r) this.showImage(this.currentImageElement, n, e, t, r, !1), this.currentImageElement.dataset.index = t, this.removeOldImages(this.currentImageElement);
                            else {
                                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                let i = new Image;
                                i.src = a, i.dataset.index = t, i.dataset.filename = r, this.showingThumbFilename = r, this.player.debug.log(`Loading image: ${a}`), i.onload = () => this.showImage(i, n, e, t, r, !0), this.loadingImage = i, this.removeOldImages(i)
                            }
                        }), e(this, "showImage", (e, t, i, s, n, r = !0) => {
                            this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${r}`), this.setImageSizeAndOffset(e, t), r && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(n) || this.loadedImages.push(n)), this.preloadNearby(s, !0).then(this.preloadNearby(s, !1)).then(this.getHigherQuality(i, e, t, n))
                        }), e(this, "removeOldImages", e => {
                            Array.from(this.currentImageContainer.children).forEach(t => {
                                if ("img" !== t.tagName.toLowerCase()) return;
                                let i = this.usingSprites ? 500 : 1e3;
                                if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                                    t.dataset.deleting = !0;
                                    let {
                                        currentImageContainer: e
                                    } = this;
                                    setTimeout(() => {
                                        e.removeChild(t), this.player.debug.log(`Removing thumb: ${t.dataset.filename}`)
                                    }, i)
                                }
                            })
                        }), e(this, "preloadNearby", (e, t = !0) => new Promise(i => {
                            setTimeout(() => {
                                let s = this.thumbnails[0].frames[e].text;
                                if (this.showingThumbFilename === s) {
                                    let n;
                                    n = t ? this.thumbnails[0].frames.slice(e) : this.thumbnails[0].frames.slice(0, e).reverse();
                                    let r = !1;
                                    n.forEach(e => {
                                        let t = e.text;
                                        if (t !== s && !this.loadedImages.includes(t)) {
                                            r = !0, this.player.debug.log(`Preloading thumb filename: ${t}`);
                                            let {
                                                urlPrefix: e
                                            } = this.thumbnails[0], s = new Image;
                                            s.src = e + t, s.onload = () => {
                                                this.player.debug.log(`Preloaded thumb filename: ${t}`), this.loadedImages.includes(t) || this.loadedImages.push(t), i()
                                            }
                                        }
                                    }), r || i()
                                }
                            }, 300)
                        })), e(this, "getHigherQuality", (e, t, i, s) => {
                            if (e < this.thumbnails.length - 1) {
                                let n = t.naturalHeight;
                                this.usingSprites && (n = i.h), n < this.thumbContainerHeight && setTimeout(() => {
                                    this.showingThumbFilename === s && (this.player.debug.log(`Showing higher quality thumb for: ${s}`), this.loadImage(e + 1))
                                }, 300)
                            }
                        }), e(this, "toggleThumbContainer", (e = !1, t = !1) => {
                            let i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                            this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
                        }), e(this, "toggleScrubbingContainer", (e = !1) => {
                            let t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                            this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
                        }), e(this, "determineContainerAutoSizing", () => {
                            (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                        }), e(this, "setThumbContainerSizeAndPos", () => {
                            let {
                                imageContainer: e
                            } = this.elements.thumb;
                            if (this.sizeSpecifiedInCSS) {
                                if (e.clientHeight > 20 && e.clientWidth < 20) {
                                    let t = Math.floor(e.clientHeight * this.thumbAspectRatio);
                                    e.style.width = `${t}px`
                                } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                                    let t = Math.floor(e.clientWidth / this.thumbAspectRatio);
                                    e.style.height = `${t}px`
                                }
                            } else {
                                let t = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                e.style.height = `${this.thumbContainerHeight}px`, e.style.width = `${t}px`
                            }
                            this.setThumbContainerPos()
                        }), e(this, "setThumbContainerPos", () => {
                            let e = this.player.elements.progress.getBoundingClientRect(),
                                t = this.player.elements.container.getBoundingClientRect(),
                                {
                                    container: i
                                } = this.elements.thumb,
                                s = t.left - e.left + 10,
                                n = t.right - e.left - i.clientWidth - 10,
                                r = this.mousePosX - e.left - i.clientWidth / 2,
                                a = e1(r, s, n);
                            i.style.left = `${a}px`, i.style.setProperty("--preview-arrow-offset", r - a + "px")
                        }), e(this, "setScrubbingContainerSize", () => {
                            let {
                                width: e,
                                height: t
                            } = e2(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            });
                            this.elements.scrubbing.container.style.width = `${e}px`, this.elements.scrubbing.container.style.height = `${t}px`
                        }), e(this, "setImageSizeAndOffset", (e, t) => {
                            if (!this.usingSprites) return;
                            let i = this.thumbContainerHeight / t.h;
                            e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", e.style.left = `-${t.x*i}px`, e.style.top = `-${t.y*i}px`
                        }), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                            thumb: {},
                            scrubbing: {}
                        }, this.load()
                    }
                    get enabled() {
                        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                    }
                    get currentImageContainer() {
                        return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                    }
                    get usingSprites() {
                        return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                    }
                    get thumbAspectRatio() {
                        return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                    }
                    get thumbContainerHeight() {
                        if (this.mouseDown) {
                            let {
                                height: e
                            } = e2(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            });
                            return e
                        }
                        return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                    }
                    get currentImageElement() {
                        return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                    }
                    set currentImageElement(e) {
                        this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                    }
                }
                let e3 = {
                    insertElements(e, t) {
                        k(t) ? H(e, this.media, {
                            src: t
                        }) : A(t) && t.forEach(t => {
                            H(e, this.media, t)
                        })
                    },
                    change(e) {
                        $(e, "sources.length") ? (eT.cancelRequests.call(this), this.destroy.call(this, () => {
                            this.options.quality = [], q(this.media), this.media = null, M(this.elements.container) && this.elements.container.removeAttribute("class");
                            let {
                                sources: t,
                                type: i
                            } = e, [{
                                provider: s = e_.html5,
                                src: n
                            }] = t;
                            Object.assign(this, {
                                provider: s,
                                type: i,
                                supported: ei.check(i, s, this.config.playsinline),
                                media: U("html5" === s ? i : "div", "html5" === s ? {} : {
                                    src: n
                                })
                            }), this.elements.container.appendChild(this.media), C(e.autoplay) && (this.config.autoplay = e.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), E(e.poster) || (this.poster = e.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), ez.addStyleHook.call(this), this.isHTML5 && e3.insertElements.call(this, "source", t), this.config.title = e.title, eJ.setup.call(this), this.isHTML5 && Object.keys(e).includes("tracks") && e3.insertElements.call(this, "track", e.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && ez.build.call(this), this.isHTML5 && this.media.load(), E(e.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new e4(this))), this.fullscreen.update()
                        }, !0)) : this.debug.warn("Invalid source format")
                    }
                };
                class e6 {
                    constructor(t, i) {
                        if (e(this, "play", () => x(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => eh(this.media.play())), this.media.play()) : null), e(this, "pause", () => this.playing && x(this.media.pause) ? this.media.pause() : null), e(this, "togglePlay", e => (C(e) ? e : !this.playing) ? this.play() : this.pause()), e(this, "stop", () => {
                                this.isHTML5 ? (this.pause(), this.restart()) : x(this.media.stop) && this.media.stop()
                            }), e(this, "restart", () => {
                                this.currentTime = 0
                            }), e(this, "rewind", e => {
                                this.currentTime -= S(e) ? e : this.config.seekTime
                            }), e(this, "forward", e => {
                                this.currentTime += S(e) ? e : this.config.seekTime
                            }), e(this, "increaseVolume", e => {
                                let t = this.media.muted ? 0 : this.volume;
                                this.volume = t + (S(e) ? e : 0)
                            }), e(this, "decreaseVolume", e => {
                                this.increaseVolume(-e)
                            }), e(this, "airplay", () => {
                                ei.airplay && this.media.webkitShowPlaybackTargetPicker()
                            }), e(this, "toggleControls", e => {
                                if (this.supported.ui && !this.isAudio) {
                                    let t = Z(this.elements.container, this.config.classNames.hideControls),
                                        i = X(this.elements.container, this.config.classNames.hideControls, void 0 === e ? void 0 : !e);
                                    return i && A(this.config.controls) && this.config.controls.includes("settings") && !E(this.config.settings) && eR.toggleMenu.call(this, !1), i !== t && el.call(this, this.media, i ? "controlshidden" : "controlsshown"), !i
                                }
                                return !1
                            }), e(this, "on", (e, t) => {
                                er.call(this, this.elements.container, e, t)
                            }), e(this, "once", (e, t) => {
                                eo.call(this, this.elements.container, e, t)
                            }), e(this, "off", (e, t) => {
                                ea(this.elements.container, e, t)
                            }), e(this, "destroy", (e, t = !1) => {
                                if (!this.ready) return;
                                let i = () => {
                                    document.body.style.overflow = "", this.embed = null, t ? (Object.keys(this.elements).length && (q(this.elements.buttons.play), q(this.elements.captions), q(this.elements.controls), q(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), x(e) && e()) : (eu.call(this), eT.cancelRequests.call(this), W(this.elements.original, this.elements.container), el.call(this, this.elements.original, "destroyed", !0), x(e) && e.call(this.elements.original), this.ready = !1, setTimeout(() => {
                                        this.elements = null, this.media = null
                                    }, 200))
                                };
                                this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (ez.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && x(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                            }), e(this, "supports", e => ei.mime.call(this, e)), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = ei.touch, this.media = t, k(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || P(this.media) || A(this.media)) && (this.media = this.media[0]), this.config = _({}, eD, e6.defaults, i || {}, (() => {
                                try {
                                    return JSON.parse(this.media.getAttribute("data-plyr-config"))
                                } catch (e) {
                                    return {}
                                }
                            })()), this.elements = {
                                container: null,
                                fullscreen: null,
                                captions: null,
                                buttons: {},
                                display: {},
                                progress: {},
                                inputs: {},
                                settings: {
                                    popup: null,
                                    menu: null,
                                    panels: {},
                                    buttons: {}
                                }
                            }, this.captions = {
                                active: null,
                                currentTrack: -1,
                                meta: new WeakMap
                            }, this.fullscreen = {
                                active: !1
                            }, this.options = {
                                speed: [],
                                quality: []
                            }, this.debug = new eU(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", ei), w(this.media) || !M(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
                        if (this.media.plyr) return void this.debug.warn("Target already setup");
                        if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
                        if (!ei.check().api) return void this.debug.error("Setup failed: no support");
                        let s = this.media.cloneNode(!0);
                        s.autoplay = !1, this.elements.original = s;
                        let n = this.media.tagName.toLowerCase(),
                            r = null,
                            a = null;
                        switch (n) {
                            case "div":
                                if (M(r = this.media.querySelector("iframe"))) {
                                    var o;
                                    if (a = eI(r.getAttribute("src")), this.provider = (o = a.toString(), /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(o) ? e_.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(o) ? e_.vimeo : null), this.elements.container = this.media, this.media = r, this.elements.container.className = "", a.search.length) {
                                        let e = ["1", "true"];
                                        e.includes(a.searchParams.get("autoplay")) && (this.config.autoplay = !0), e.includes(a.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = e.includes(a.searchParams.get("playsinline")), this.config.youtube.hl = a.searchParams.get("hl")) : this.config.playsinline = !0
                                    }
                                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                if (E(this.provider) || !Object.values(e_).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                this.type = eF;
                                break;
                            case "video":
                            case "audio":
                                this.type = n, this.provider = e_.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                break;
                            default:
                                return void this.debug.error("Setup failed: unsupported type")
                        }
                        this.supported = ei.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new eW(this), this.storage = new eC(this), this.media.plyr = this, M(this.elements.container) || (this.elements.container = U("div", {
                            tabindex: 0
                        }), F(this.media, this.elements.container)), ez.migrateStyles.call(this), ez.addStyleHook.call(this), eJ.setup.call(this), this.config.debug && er.call(this, this.elements.container, this.config.events.join(" "), e => {
                            this.debug.log(`event: ${e.type}`)
                        }), this.fullscreen = new eH(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && ez.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new e0(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => eh(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new e4(this))) : this.debug.error("Setup failed: no support")
                    }
                    get isHTML5() {
                        return this.provider === e_.html5
                    }
                    get isEmbed() {
                        return this.isYouTube || this.isVimeo
                    }
                    get isYouTube() {
                        return this.provider === e_.youtube
                    }
                    get isVimeo() {
                        return this.provider === e_.vimeo
                    }
                    get isVideo() {
                        return this.type === eF
                    }
                    get isAudio() {
                        return "audio" === this.type
                    }
                    get playing() {
                        return Boolean(this.ready && !this.paused && !this.ended)
                    }
                    get paused() {
                        return Boolean(this.media.paused)
                    }
                    get stopped() {
                        return Boolean(this.paused && 0 === this.currentTime)
                    }
                    get ended() {
                        return Boolean(this.media.ended)
                    }
                    set currentTime(e) {
                        if (!this.duration) return;
                        let t = S(e) && e > 0;
                        this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`)
                    }
                    get currentTime() {
                        return Number(this.media.currentTime)
                    }
                    get buffered() {
                        let {
                            buffered: e
                        } = this.media;
                        return S(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                    }
                    get seeking() {
                        return Boolean(this.media.seeking)
                    }
                    get duration() {
                        let e = parseFloat(this.config.duration),
                            t = (this.media || {}).duration,
                            i = S(t) && t !== 1 / 0 ? t : 0;
                        return e || i
                    }
                    set volume(e) {
                        let t = e;
                        k(t) && (t = Number(t)), S(t) || (t = this.storage.get("volume")), S(t) || ({
                            volume: t
                        } = this.config), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !E(e) && this.muted && t > 0 && (this.muted = !1)
                    }
                    get volume() {
                        return Number(this.media.volume)
                    }
                    set muted(e) {
                        let t = e;
                        C(t) || (t = this.storage.get("muted")), C(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                    }
                    get muted() {
                        return Boolean(this.media.muted)
                    }
                    get hasAudio() {
                        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                    }
                    set speed(e) {
                        let t = null;
                        S(e) && (t = e), S(t) || (t = this.storage.get("speed")), S(t) || (t = this.config.speed.selected);
                        let {
                            minimumSpeed: i,
                            maximumSpeed: s
                        } = this;
                        t = e1(t, i, s), this.config.speed.selected = t, setTimeout(() => {
                            this.media && (this.media.playbackRate = t)
                        }, 0)
                    }
                    get speed() {
                        return Number(this.media.playbackRate)
                    }
                    get minimumSpeed() {
                        return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625
                    }
                    get maximumSpeed() {
                        return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16
                    }
                    set quality(e) {
                        let t = this.config.quality,
                            i = this.options.quality;
                        if (!i.length) return;
                        let s = [!E(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(S),
                            n = !0;
                        if (!i.includes(s)) {
                            let e = ep(i, s);
                            this.debug.warn(`Unsupported quality option: ${s}, using ${e} instead`), s = e, n = !1
                        }
                        t.selected = s, this.media.quality = s, n && this.storage.set({
                            quality: s
                        })
                    }
                    get quality() {
                        return this.media.quality
                    }
                    set loop(e) {
                        let t = C(e) ? e : this.config.loop.active;
                        this.config.loop.active = t, this.media.loop = t
                    }
                    get loop() {
                        return Boolean(this.media.loop)
                    }
                    set source(e) {
                        e3.change.call(this, e)
                    }
                    get source() {
                        return this.media.currentSrc
                    }
                    get download() {
                        let {
                            download: e
                        } = this.config.urls;
                        return I(e) ? e : this.source
                    }
                    set download(e) {
                        I(e) && (this.config.urls.download = e, eR.setDownloadUrl.call(this))
                    }
                    set poster(e) {
                        this.isVideo ? ez.setPoster.call(this, e, !1).catch(() => {}) : this.debug.warn("Poster can only be set for video")
                    }
                    get poster() {
                        return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
                    }
                    get ratio() {
                        if (!this.isVideo) return null;
                        let e = ey(eb.call(this));
                        return A(e) ? e.join(":") : e
                    }
                    set ratio(e) {
                        this.isVideo ? k(e) && eg(e) ? (this.config.ratio = ey(e), ev.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video")
                    }
                    set autoplay(e) {
                        this.config.autoplay = C(e) ? e : this.config.autoplay
                    }
                    get autoplay() {
                        return Boolean(this.config.autoplay)
                    }
                    toggleCaptions(e) {
                        ej.toggle.call(this, e, !1)
                    }
                    set currentTrack(e) {
                        ej.set.call(this, e, !1), ej.setup.call(this)
                    }
                    get currentTrack() {
                        let {
                            toggled: e,
                            currentTrack: t
                        } = this.captions;
                        return e ? t : -1
                    }
                    set language(e) {
                        ej.setLanguage.call(this, e, !1)
                    }
                    get language() {
                        return (ej.getCurrentTrack.call(this) || {}).language
                    }
                    set pip(e) {
                        if (!ei.pip) return;
                        let t = C(e) ? e : !this.pip;
                        x(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? e$ : "inline"), x(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                    }
                    get pip() {
                        return ei.pip ? E(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === e$ : null
                    }
                    setPreviewThumbnails(e) {
                        this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), this.config.previewThumbnails.enabled && (this.previewThumbnails = new e4(this))
                    }
                    static supported(e, t, i) {
                        return ei.check(e, t, i)
                    }
                    static loadSprite(e, t) {
                        return eL(e, t)
                    }
                    static setup(e, t = {}) {
                        let i = null;
                        return k(e) ? i = Array.from(document.querySelectorAll(e)) : P(e) ? i = Array.from(e) : A(e) && (i = e.filter(M)), E(i) ? null : i.map(e => new e6(e, t))
                    }
                }
                return e6.defaults = JSON.parse(JSON.stringify(eD)), e6
            }())
        },
        92703: function(e, t, i) {
            "use strict";
            var s = i(50414);

            function n() {}

            function r() {}
            r.resetWarningCache = n, e.exports = function() {
                function e(e, t, i, n, r, a) {
                    if (a !== s) {
                        var o = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw o.name = "Invariant Violation", o
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var i = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: r,
                    resetWarningCache: n
                };
                return i.PropTypes = i, i
            }
        },
        45697: function(e, t, i) {
            e.exports = i(92703)()
        },
        50414: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        65820: function(e, t, i) {
            "use strict";
            i.d(t, {
                M: function() {
                    return b
                }
            });
            var s = i(67294),
                n = i(49304),
                r = i(54735),
                a = i(58868);

            function o() {
                let e = (0, s.useRef)(!1);
                return (0, a.L)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            var l = i(240),
                u = i(96681);
            class c extends s.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function h({
                children: e,
                isPresent: t
            }) {
                let i = (0, s.useId)(),
                    n = (0, s.useRef)(null),
                    r = (0, s.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, s.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: s,
                        top: a,
                        left: o
                    } = r.current;
                    if (t || !n.current || !e || !s) return;
                    n.current.dataset.motionPopId = i;
                    let l = document.createElement("style");
                    return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${o}px !important;
          }
        `), () => {
                        document.head.removeChild(l)
                    }
                }, [t]), s.createElement(c, {
                    isPresent: t,
                    childRef: n,
                    sizeRef: r
                }, s.cloneElement(e, {
                    ref: n
                }))
            }
            let d = ({
                children: e,
                initial: t,
                isPresent: i,
                onExitComplete: n,
                custom: r,
                presenceAffectsLayout: a,
                mode: o
            }) => {
                let c = (0, u.h)(p),
                    d = (0, s.useId)(),
                    m = (0, s.useMemo)(() => ({
                        id: d,
                        initial: t,
                        isPresent: i,
                        custom: r,
                        onExitComplete: e => {
                            for (let t of (c.set(e, !0), c.values()))
                                if (!t) return;
                            n && n()
                        },
                        register: e => (c.set(e, !1), () => c.delete(e))
                    }), a ? void 0 : [i]);
                return (0, s.useMemo)(() => {
                    c.forEach((e, t) => c.set(t, !1))
                }, [i]), s.useEffect(() => {
                    i || c.size || !n || n()
                }, [i]), "popLayout" === o && (e = s.createElement(h, {
                    isPresent: i
                }, e)), s.createElement(l.O.Provider, {
                    value: m
                }, e)
            };

            function p() {
                return new Map
            }
            var m = i(25364),
                f = i(65411),
                g = i(16034);
            let y = e => e.key || "",
                b = ({
                    children: e,
                    custom: t,
                    initial: i = !0,
                    onExitComplete: l,
                    exitBeforeEnter: u,
                    presenceAffectsLayout: c = !0,
                    mode: h = "sync"
                }) => {
                    u && (h = "wait", (0, g.O)(!1, "Replace exitBeforeEnter with mode='wait'"));
                    let [p] = function() {
                        let e = o(),
                            [t, i] = (0, s.useState)(0),
                            n = (0, s.useCallback)(() => {
                                e.current && i(t + 1)
                            }, [t]),
                            a = (0, s.useCallback)(() => r.ZP.postRender(n), [n]);
                        return [a, t]
                    }(), b = (0, s.useContext)(m.p).forceRender;
                    b && (p = b);
                    let v = o(),
                        w = function(e) {
                            let t = [];
                            return s.Children.forEach(e, e => {
                                (0, s.isValidElement)(e) && t.push(e)
                            }), t
                        }(e),
                        T = w,
                        k = new Set,
                        x = (0, s.useRef)(T),
                        A = (0, s.useRef)(new Map).current,
                        P = (0, s.useRef)(!0);
                    if ((0, a.L)(() => {
                            P.current = !1,
                                function(e, t) {
                                    e.forEach(e => {
                                        let i = y(e);
                                        t.set(i, e)
                                    })
                                }(w, A), x.current = T
                        }), (0, f.z)(() => {
                            P.current = !0, A.clear(), k.clear()
                        }), P.current) return s.createElement(s.Fragment, null, T.map(e => s.createElement(d, {
                        key: y(e),
                        isPresent: !0,
                        initial: !!i && void 0,
                        presenceAffectsLayout: c,
                        mode: h
                    }, e)));
                    T = [...T];
                    let E = x.current.map(y),
                        S = w.map(y),
                        C = E.length;
                    for (let e = 0; e < C; e++) {
                        let t = E[e]; - 1 === S.indexOf(t) && k.add(t)
                    }
                    return "wait" === h && k.size && (T = []), k.forEach(e => {
                        if (-1 !== S.indexOf(e)) return;
                        let i = A.get(e);
                        if (!i) return;
                        let n = E.indexOf(e),
                            r = () => {
                                A.delete(e), k.delete(e);
                                let t = x.current.findIndex(t => t.key === e);
                                if (x.current.splice(t, 1), !k.size) {
                                    if (x.current = w, !1 === v.current) return;
                                    p(), l && l()
                                }
                            };
                        T.splice(n, 0, s.createElement(d, {
                            key: y(i),
                            isPresent: !1,
                            onExitComplete: r,
                            custom: t,
                            presenceAffectsLayout: c,
                            mode: h
                        }, i))
                    }), T = T.map(e => {
                        let t = e.key;
                        return k.has(t) ? e : s.createElement(d, {
                            key: y(e),
                            isPresent: !0,
                            presenceAffectsLayout: c,
                            mode: h
                        }, e)
                    }), "production" !== n.O && "wait" === h && T.length > 1 && console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'), s.createElement(s.Fragment, null, k.size ? T : T.map(e => (0, s.cloneElement)(e)))
                }
        },
        25364: function(e, t, i) {
            "use strict";
            i.d(t, {
                p: function() {
                    return n
                }
            });
            var s = i(67294);
            let n = (0, s.createContext)({})
        },
        240: function(e, t, i) {
            "use strict";
            i.d(t, {
                O: function() {
                    return n
                }
            });
            var s = i(67294);
            let n = (0, s.createContext)(null)
        },
        80205: function(e, t, i) {
            "use strict";
            i.d(t, {
                E: function() {
                    return n9
                }
            });
            var s, n, r, a, o, l = i(67294);
            let u = (0, l.createContext)({
                    transformPagePoint: e => e,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                c = (0, l.createContext)({});
            var h = i(240),
                d = i(58868);
            let p = (0, l.createContext)({
                strict: !1
            });

            function m(e) {
                return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }

            function f(e) {
                return "string" == typeof e || Array.isArray(e)
            }

            function g(e) {
                return "object" == typeof e && "function" == typeof e.start
            }
            let y = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

            function b(e) {
                return g(e.animate) || y.some(t => f(e[t]))
            }

            function v(e) {
                return Boolean(b(e) || e.variants)
            }

            function w(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }
            let T = e => ({
                    isEnabled: t => e.some(e => !!t[e])
                }),
                k = {
                    measureLayout: T(["layout", "layoutId", "drag"]),
                    animation: T(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: T(["exit"]),
                    drag: T(["drag", "dragControls"]),
                    focus: T(["whileFocus"]),
                    hover: T(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: T(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: T(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: T(["whileInView", "onViewportEnter", "onViewportLeave"])
                };
            var x = i(11741),
                A = i(96681);
            let P = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                E = 1;
            var S = i(25364);
            class C extends l.Component {
                getSnapshotBeforeUpdate() {
                    let {
                        visualElement: e,
                        props: t
                    } = this.props;
                    return e && e.setProps(t), null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }
            let M = (0, l.createContext)({}),
                L = Symbol.for("motionComponentSymbol"),
                V = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

            function O(e) {
                if ("string" != typeof e || e.includes("-"));
                else if (V.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
                return !1
            }
            let R = {},
                I = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                N = new Set(I);

            function j(e, {
                layout: t,
                layoutId: i
            }) {
                return N.has(e) || e.startsWith("origin") || (t || void 0 !== i) && (!!R[e] || "opacity" === e)
            }
            let D = e => !!(null == e ? void 0 : e.getVelocity),
                $ = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                _ = (e, t) => I.indexOf(e) - I.indexOf(t);

            function F(e) {
                return e.startsWith("--")
            }
            let B = (e, t) => t && "number" == typeof e ? t.transform(e) : e,
                U = (e, t) => i => Math.max(Math.min(i, t), e),
                H = e => e % 1 ? Number(e.toFixed(5)) : e,
                q = /(-)?([\d]*\.?[\d])+/g,
                z = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                W = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function Y(e) {
                return "string" == typeof e
            }
            let K = e => ({
                    test: t => Y(t) && t.endsWith(e) && 1 === t.split(" ").length,
                    parse: parseFloat,
                    transform: t => `${t}${e}`
                }),
                X = K("deg"),
                Z = K("%"),
                G = K("px"),
                Q = K("vh"),
                J = K("vw"),
                ee = Object.assign(Object.assign({}, Z), {
                    parse: e => Z.parse(e) / 100,
                    transform: e => Z.transform(100 * e)
                }),
                et = {
                    test: e => "number" == typeof e,
                    parse: parseFloat,
                    transform: e => e
                },
                ei = Object.assign(Object.assign({}, et), {
                    transform: U(0, 1)
                }),
                es = Object.assign(Object.assign({}, et), {
                    default: 1
                }),
                en = { ...et,
                    transform: Math.round
                },
                er = {
                    borderWidth: G,
                    borderTopWidth: G,
                    borderRightWidth: G,
                    borderBottomWidth: G,
                    borderLeftWidth: G,
                    borderRadius: G,
                    radius: G,
                    borderTopLeftRadius: G,
                    borderTopRightRadius: G,
                    borderBottomRightRadius: G,
                    borderBottomLeftRadius: G,
                    width: G,
                    maxWidth: G,
                    height: G,
                    maxHeight: G,
                    size: G,
                    top: G,
                    right: G,
                    bottom: G,
                    left: G,
                    padding: G,
                    paddingTop: G,
                    paddingRight: G,
                    paddingBottom: G,
                    paddingLeft: G,
                    margin: G,
                    marginTop: G,
                    marginRight: G,
                    marginBottom: G,
                    marginLeft: G,
                    rotate: X,
                    rotateX: X,
                    rotateY: X,
                    rotateZ: X,
                    scale: es,
                    scaleX: es,
                    scaleY: es,
                    scaleZ: es,
                    skew: X,
                    skewX: X,
                    skewY: X,
                    distance: G,
                    translateX: G,
                    translateY: G,
                    translateZ: G,
                    x: G,
                    y: G,
                    z: G,
                    perspective: G,
                    transformPerspective: G,
                    opacity: ei,
                    originX: ee,
                    originY: ee,
                    originZ: G,
                    zIndex: en,
                    fillOpacity: ei,
                    strokeOpacity: ei,
                    numOctaves: en
                };

            function ea(e, t, i, s) {
                let {
                    style: n,
                    vars: r,
                    transform: a,
                    transformKeys: o,
                    transformOrigin: l
                } = e;
                o.length = 0;
                let u = !1,
                    c = !1,
                    h = !0;
                for (let e in t) {
                    let i = t[e];
                    if (F(e)) {
                        r[e] = i;
                        continue
                    }
                    let s = er[e],
                        d = B(i, s);
                    if (N.has(e)) {
                        if (u = !0, a[e] = d, o.push(e), !h) continue;
                        i !== (s.default || 0) && (h = !1)
                    } else e.startsWith("origin") ? (c = !0, l[e] = d) : n[e] = d
                }
                if (u || s ? n.transform = function({
                        transform: e,
                        transformKeys: t
                    }, {
                        enableHardwareAcceleration: i = !0,
                        allowTransformNone: s = !0
                    }, n, r) {
                        let a = "";
                        for (let i of (t.sort(_), t)) a += `${$[i]||i}(${e[i]}) `;
                        return i && !e.z && (a += "translateZ(0)"), a = a.trim(), r ? a = r(e, n ? "" : a) : s && n && (a = "none"), a
                    }(e, i, h, s) : !t.transform && n.transform && (n.transform = "none"), c) {
                    let {
                        originX: e = "50%",
                        originY: t = "50%",
                        originZ: i = 0
                    } = l;
                    n.transformOrigin = `${e} ${t} ${i}`
                }
            }
            let eo = () => ({
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            });

            function el(e, t, i) {
                for (let s in t) D(t[s]) || j(s, i) || (e[s] = t[s])
            }

            function eu(e, t, i) {
                let s = {},
                    n = function(e, t, i) {
                        let s = e.style || {},
                            n = {};
                        return el(n, s, e), Object.assign(n, function({
                            transformTemplate: e
                        }, t, i) {
                            return (0, l.useMemo)(() => {
                                let s = eo();
                                return ea(s, t, {
                                    enableHardwareAcceleration: !i
                                }, e), Object.assign({}, s.vars, s.style)
                            }, [t])
                        }(e, t, i)), e.transformValues ? e.transformValues(n) : n
                    }(e, t, i);
                return e.drag && !1 !== e.dragListener && (s.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), s.style = n, s
            }
            let ec = new Set(["initial", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

            function eh(e) {
                return ec.has(e)
            }
            let ed = e => !eh(e);
            try {
                (s = require("@emotion/is-prop-valid").default) && (ed = e => e.startsWith("on") ? !eh(e) : s(e))
            } catch (e) {}

            function ep(e, t, i) {
                return "string" == typeof e ? e : G.transform(t + i * e)
            }
            let em = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                ef = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function eg(e, {
                attrX: t,
                attrY: i,
                originX: s,
                originY: n,
                pathLength: r,
                pathSpacing: a = 1,
                pathOffset: o = 0,
                ...l
            }, u, c) {
                ea(e, l, u, c), e.attrs = e.style, e.style = {};
                let {
                    attrs: h,
                    style: d,
                    dimensions: p
                } = e;
                h.transform && (p && (d.transform = h.transform), delete h.transform), p && (void 0 !== s || void 0 !== n || d.transform) && (d.transformOrigin = function(e, t, i) {
                    let s = ep(t, e.x, e.width),
                        n = ep(i, e.y, e.height);
                    return `${s} ${n}`
                }(p, void 0 !== s ? s : .5, void 0 !== n ? n : .5)), void 0 !== t && (h.x = t), void 0 !== i && (h.y = i), void 0 !== r && function(e, t, i = 1, s = 0, n = !0) {
                    e.pathLength = 1;
                    let r = n ? em : ef;
                    e[r.offset] = G.transform(-s);
                    let a = G.transform(t),
                        o = G.transform(i);
                    e[r.array] = `${a} ${o}`
                }(h, r, a, o, !1)
            }
            let ey = () => ({ ...eo(),
                attrs: {}
            });

            function eb(e, t) {
                let i = (0, l.useMemo)(() => {
                    let i = ey();
                    return eg(i, t, {
                        enableHardwareAcceleration: !1
                    }, e.transformTemplate), { ...i.attrs,
                        style: { ...i.style
                        }
                    }
                }, [t]);
                if (e.style) {
                    let t = {};
                    el(t, e.style, e), i.style = { ...t,
                        ...i.style
                    }
                }
                return i
            }
            let ev = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function ew(e, {
                style: t,
                vars: i
            }, s, n) {
                for (let r in Object.assign(e.style, t, n && n.getProjectionStyles(s)), i) e.style.setProperty(r, i[r])
            }
            let eT = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

            function ek(e, t, i, s) {
                for (let i in ew(e, t, void 0, s), t.attrs) e.setAttribute(eT.has(i) ? i : ev(i), t.attrs[i])
            }

            function ex(e) {
                let {
                    style: t
                } = e, i = {};
                for (let s in t)(D(t[s]) || j(s, e)) && (i[s] = t[s]);
                return i
            }

            function eA(e) {
                let t = ex(e);
                for (let i in e)
                    if (D(e[i])) {
                        let s = "x" === i || "y" === i ? "attr" + i.toUpperCase() : i;
                        t[s] = e[i]
                    }
                return t
            }

            function eP(e, t, i, s = {}, n = {}) {
                return "function" == typeof t && (t = t(void 0 !== i ? i : e.custom, s, n)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== i ? i : e.custom, s, n)), t
            }
            let eE = e => Array.isArray(e),
                eS = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
                eC = e => eE(e) ? e[e.length - 1] || 0 : e;

            function eM(e) {
                let t = D(e) ? e.get() : e;
                return eS(t) ? t.toValue() : t
            }
            let eL = e => (t, i) => {
                    let s = (0, l.useContext)(c),
                        n = (0, l.useContext)(h.O),
                        r = () => (function({
                            scrapeMotionValuesFromProps: e,
                            createRenderState: t,
                            onMount: i
                        }, s, n, r) {
                            let a = {
                                latestValues: function(e, t, i, s) {
                                    let n = {},
                                        r = s(e);
                                    for (let e in r) n[e] = eM(r[e]);
                                    let {
                                        initial: a,
                                        animate: o
                                    } = e, l = b(e), u = v(e);
                                    t && u && !l && !1 !== e.inherit && (void 0 === a && (a = t.initial), void 0 === o && (o = t.animate));
                                    let c = !!i && !1 === i.initial;
                                    c = c || !1 === a;
                                    let h = c ? o : a;
                                    if (h && "boolean" != typeof h && !g(h)) {
                                        let t = Array.isArray(h) ? h : [h];
                                        t.forEach(t => {
                                            let i = eP(e, t);
                                            if (!i) return;
                                            let {
                                                transitionEnd: s,
                                                transition: r,
                                                ...a
                                            } = i;
                                            for (let e in a) {
                                                let t = a[e];
                                                if (Array.isArray(t)) {
                                                    let e = c ? t.length - 1 : 0;
                                                    t = t[e]
                                                }
                                                null !== t && (n[e] = t)
                                            }
                                            for (let e in s) n[e] = s[e]
                                        })
                                    }
                                    return n
                                }(s, n, r, e),
                                renderState: t()
                            };
                            return i && (a.mount = e => i(s, e, a)), a
                        })(e, t, s, n);
                    return i ? r() : (0, A.h)(r)
                },
                eV = {
                    useVisualState: eL({
                        scrapeMotionValuesFromProps: eA,
                        createRenderState: ey,
                        onMount: (e, t, {
                            renderState: i,
                            latestValues: s
                        }) => {
                            try {
                                i.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                            } catch (e) {
                                i.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            eg(i, s, {
                                enableHardwareAcceleration: !1
                            }, e.transformTemplate), ek(t, i)
                        }
                    })
                },
                eO = {
                    useVisualState: eL({
                        scrapeMotionValuesFromProps: ex,
                        createRenderState: eo
                    })
                };

            function eR(e, t, i, s = {
                passive: !0
            }) {
                return e.addEventListener(t, i, s), () => e.removeEventListener(t, i)
            }

            function eI(e, t, i, s) {
                (0, l.useEffect)(() => {
                    let n = e.current;
                    if (i && n) return eR(n, t, i, s)
                }, [e, t, i, s])
            }

            function eN(e) {
                return "undefined" != typeof PointerEvent && e instanceof PointerEvent ? !("mouse" !== e.pointerType) : e instanceof MouseEvent
            }

            function ej(e) {
                let t = !!e.touches;
                return t
            }(n = a || (a = {})).Animate = "animate", n.Hover = "whileHover", n.Tap = "whileTap", n.Drag = "whileDrag", n.Focus = "whileFocus", n.InView = "whileInView", n.Exit = "exit";
            let eD = {
                pageX: 0,
                pageY: 0
            };

            function e$(e, t = "page") {
                return {
                    point: ej(e) ? function(e, t = "page") {
                        let i = e.touches[0] || e.changedTouches[0],
                            s = i || eD;
                        return {
                            x: s[t + "X"],
                            y: s[t + "Y"]
                        }
                    }(e, t) : function(e, t = "page") {
                        return {
                            x: e[t + "X"],
                            y: e[t + "Y"]
                        }
                    }(e, t)
                }
            }
            let e_ = (e, t = !1) => {
                    let i = t => e(t, e$(t));
                    return t ? e => {
                        let t = e instanceof MouseEvent,
                            s = !t || t && 0 === e.button;
                        s && i(e)
                    } : i
                },
                eF = () => x.j && null === window.onpointerdown,
                eB = () => x.j && null === window.ontouchstart,
                eU = () => x.j && null === window.onmousedown,
                eH = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                eq = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function ez(e) {
                if (eF());
                else if (eB()) return eq[e];
                else if (eU()) return eH[e];
                return e
            }

            function eW(e, t, i, s) {
                return eR(e, ez(t), e_(i, "pointerdown" === t), s)
            }

            function eY(e, t, i, s) {
                return eI(e, ez(t), i && e_(i, "pointerdown" === t), s)
            }

            function eK(e) {
                let t = null;
                return () => {
                    let i = () => {
                        t = null
                    };
                    return null === t && (t = e, i)
                }
            }
            let eX = eK("dragHorizontal"),
                eZ = eK("dragVertical");

            function eG(e) {
                let t = !1;
                if ("y" === e) t = eZ();
                else if ("x" === e) t = eX();
                else {
                    let e = eX(),
                        i = eZ();
                    e && i ? t = () => {
                        e(), i()
                    } : (e && e(), i && i())
                }
                return t
            }

            function eQ() {
                let e = eG(!0);
                return !e || (e(), !1)
            }

            function eJ(e, t, i) {
                return (s, n) => {
                    !(!eN(s) || eQ()) && (e.animationState && e.animationState.setActive(a.Hover, t), i && i(s, n))
                }
            }
            let e0 = (e, t) => !!t && (e === t || e0(e, t.parentElement));
            var e1 = i(65411);
            let e5 = (e, t) => i => t(e(i)),
                e2 = (...e) => e.reduce(e5);
            var e4 = i(49304),
                e3 = i(16034);
            let e6 = new WeakMap,
                e9 = new WeakMap,
                e8 = e => {
                    let t = e6.get(e.target);
                    t && t(e)
                },
                e7 = e => {
                    e.forEach(e8)
                },
                te = {
                    some: 0,
                    all: 1
                };

            function tt(e, t, i, {
                root: s,
                margin: n,
                amount: r = "some",
                once: o
            }) {
                (0, l.useEffect)(() => {
                    if (!e) return;
                    let l = {
                            root: null == s ? void 0 : s.current,
                            rootMargin: n,
                            threshold: "number" == typeof r ? r : te[r]
                        },
                        u = e => {
                            let {
                                isIntersecting: s
                            } = e;
                            if (t.isInView === s || (t.isInView = s, o && !s && t.hasEnteredView)) return;
                            s && (t.hasEnteredView = !0), i.animationState && i.animationState.setActive(a.InView, s);
                            let n = i.getProps(),
                                r = s ? n.onViewportEnter : n.onViewportLeave;
                            r && r(e)
                        };
                    return function(e, t, i) {
                        let s = function({
                            root: e,
                            ...t
                        }) {
                            let i = e || document;
                            e9.has(i) || e9.set(i, {});
                            let s = e9.get(i),
                                n = JSON.stringify(t);
                            return s[n] || (s[n] = new IntersectionObserver(e7, {
                                root: e,
                                ...t
                            })), s[n]
                        }(t);
                        return e6.set(e, i), s.observe(e), () => {
                            e6.delete(e), s.unobserve(e)
                        }
                    }(i.getInstance(), l, u)
                }, [e, s, n, r])
            }

            function ti(e, t, i, {
                fallback: s = !0
            }) {
                (0, l.useEffect)(() => {
                    e && s && ("production" !== e4.O && (0, e3.O)(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
                        t.hasEnteredView = !0;
                        let {
                            onViewportEnter: e
                        } = i.getProps();
                        e && e(null), i.animationState && i.animationState.setActive(a.InView, !0)
                    }))
                }, [e])
            }
            let ts = e => t => (e(t), null),
                tn = {
                    inView: ts(function({
                        visualElement: e,
                        whileInView: t,
                        onViewportEnter: i,
                        onViewportLeave: s,
                        viewport: n = {}
                    }) {
                        let r = (0, l.useRef)({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            a = Boolean(t || i || s);
                        n.once && r.current.hasEnteredView && (a = !1);
                        let o = "undefined" == typeof IntersectionObserver ? ti : tt;
                        o(a, r.current, e, n)
                    }),
                    tap: ts(function({
                        onTap: e,
                        onTapStart: t,
                        onTapCancel: i,
                        whileTap: s,
                        visualElement: n
                    }) {
                        let r = (0, l.useRef)(!1),
                            o = (0, l.useRef)(null),
                            u = {
                                passive: !(t || e || i || m)
                            };

                        function c() {
                            o.current && o.current(), o.current = null
                        }

                        function h() {
                            return c(), r.current = !1, n.animationState && n.animationState.setActive(a.Tap, !1), !eQ()
                        }

                        function d(t, s) {
                            h() && (e0(n.getInstance(), t.target) ? e && e(t, s) : i && i(t, s))
                        }

                        function p(e, t) {
                            h() && i && i(e, t)
                        }

                        function m(e, i) {
                            c(), !r.current && (r.current = !0, o.current = e2(eW(window, "pointerup", d, u), eW(window, "pointercancel", p, u)), n.animationState && n.animationState.setActive(a.Tap, !0), t && t(e, i))
                        }
                        eY(n, "pointerdown", e || t || i || s ? m : void 0, u), (0, e1.z)(c)
                    }),
                    focus: ts(function({
                        whileFocus: e,
                        visualElement: t
                    }) {
                        let {
                            animationState: i
                        } = t, s = () => {
                            i && i.setActive(a.Focus, !0)
                        }, n = () => {
                            i && i.setActive(a.Focus, !1)
                        };
                        eI(t, "focus", e ? s : void 0), eI(t, "blur", e ? n : void 0)
                    }),
                    hover: ts(function({
                        onHoverStart: e,
                        onHoverEnd: t,
                        whileHover: i,
                        visualElement: s
                    }) {
                        eY(s, "pointerenter", e || i ? eJ(s, !0, e) : void 0, {
                            passive: !e
                        }), eY(s, "pointerleave", t || i ? eJ(s, !1, t) : void 0, {
                            passive: !t
                        })
                    })
                };

            function tr() {
                let e = (0, l.useContext)(h.O);
                if (null === e) return [!0, null];
                let {
                    isPresent: t,
                    onExitComplete: i,
                    register: s
                } = e, n = (0, l.useId)();
                (0, l.useEffect)(() => s(n), []);
                let r = () => i && i(n);
                return !t && i ? [!1, r] : [!0]
            }

            function ta(e, t) {
                if (!Array.isArray(t)) return !1;
                let i = t.length;
                if (i !== e.length) return !1;
                for (let s = 0; s < i; s++)
                    if (t[s] !== e[s]) return !1;
                return !0
            }

            function to(e, t) {
                var i = {};
                for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && 0 > t.indexOf(s) && (i[s] = e[s]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, s = Object.getOwnPropertySymbols(e); n < s.length; n++) 0 > t.indexOf(s[n]) && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]]);
                return i
            }
            var tl = i(24394);
            let tu = (e, t, i) => Math.min(Math.max(i, e), t);

            function tc(e, t) {
                return e * Math.sqrt(1 - t * t)
            }
            let th = ["duration", "bounce"],
                td = ["stiffness", "damping", "mass"];

            function tp(e, t) {
                return t.some(t => void 0 !== e[t])
            }

            function tm(e) {
                var {
                    from: t = 0,
                    to: i = 1,
                    restSpeed: s = 2,
                    restDelta: n
                } = e, r = to(e, ["from", "to", "restSpeed", "restDelta"]);
                let a = {
                        done: !1,
                        value: t
                    },
                    {
                        stiffness: o,
                        damping: l,
                        mass: u,
                        velocity: c,
                        duration: h,
                        isResolvedFromDuration: d
                    } = function(e) {
                        let t = Object.assign({
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1
                        }, e);
                        if (!tp(e, td) && tp(e, th)) {
                            let i = function({
                                duration: e = 800,
                                bounce: t = .25,
                                velocity: i = 0,
                                mass: s = 1
                            }) {
                                let n, r;
                                (0, tl.K)(e <= 1e4, "Spring duration must be 10 seconds or less");
                                let a = 1 - t;
                                a = tu(.05, 1, a), e = tu(.01, 10, e / 1e3), a < 1 ? (n = t => {
                                    let s = t * a,
                                        n = s * e,
                                        r = tc(t, a);
                                    return .001 - (s - i) / r * Math.exp(-n)
                                }, r = t => {
                                    let s = t * a,
                                        r = s * e,
                                        o = Math.pow(a, 2) * Math.pow(t, 2) * e,
                                        l = tc(Math.pow(t, 2), a),
                                        u = -n(t) + .001 > 0 ? -1 : 1;
                                    return u * ((r * i + i - o) * Math.exp(-r)) / l
                                }) : (n = t => {
                                    let s = Math.exp(-t * e),
                                        n = (t - i) * e + 1;
                                    return -.001 + s * n
                                }, r = t => {
                                    let s = Math.exp(-t * e),
                                        n = (i - t) * (e * e);
                                    return s * n
                                });
                                let o = 5 / e,
                                    l = function(e, t, i) {
                                        let s = i;
                                        for (let i = 1; i < 12; i++) s -= e(s) / t(s);
                                        return s
                                    }(n, r, o);
                                if (e *= 1e3, isNaN(l)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: e
                                }; {
                                    let t = Math.pow(l, 2) * s;
                                    return {
                                        stiffness: t,
                                        damping: 2 * a * Math.sqrt(s * t),
                                        duration: e
                                    }
                                }
                            }(e);
                            (t = Object.assign(Object.assign(Object.assign({}, t), i), {
                                velocity: 0,
                                mass: 1
                            })).isResolvedFromDuration = !0
                        }
                        return t
                    }(r),
                    p = tf,
                    m = tf;

                function f() {
                    let e = c ? -(c / 1e3) : 0,
                        s = i - t,
                        r = l / (2 * Math.sqrt(o * u)),
                        a = Math.sqrt(o / u) / 1e3;
                    if (void 0 === n && (n = Math.min(Math.abs(i - t) / 100, .4)), r < 1) {
                        let t = tc(a, r);
                        p = n => i - Math.exp(-r * a * n) * ((e + r * a * s) / t * Math.sin(t * n) + s * Math.cos(t * n)), m = i => {
                            let n = Math.exp(-r * a * i);
                            return r * a * n * (Math.sin(t * i) * (e + r * a * s) / t + s * Math.cos(t * i)) - n * (Math.cos(t * i) * (e + r * a * s) - t * s * Math.sin(t * i))
                        }
                    } else if (1 === r) p = t => i - Math.exp(-a * t) * (s + (e + a * s) * t);
                    else {
                        let t = a * Math.sqrt(r * r - 1);
                        p = n => {
                            let o = Math.min(t * n, 300);
                            return i - Math.exp(-r * a * n) * ((e + r * a * s) * Math.sinh(o) + t * s * Math.cosh(o)) / t
                        }
                    }
                }
                return f(), {
                    next: e => {
                        let t = p(e);
                        if (d) a.done = e >= h;
                        else {
                            let r = 1e3 * m(e),
                                o = Math.abs(i - t) <= n;
                            a.done = Math.abs(r) <= s && o
                        }
                        return a.value = a.done ? i : t, a
                    },
                    flipTarget: () => {
                        c = -c, [t, i] = [i, t], f()
                    }
                }
            }
            tm.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
            let tf = e => 0,
                tg = (e, t, i) => {
                    let s = t - e;
                    return 0 === s ? 1 : (i - e) / s
                },
                ty = (e, t, i) => -i * e + i * t + e,
                tb = (e, t) => i => Boolean(Y(i) && W.test(i) && i.startsWith(e) || t && Object.prototype.hasOwnProperty.call(i, t)),
                tv = (e, t, i) => s => {
                    if (!Y(s)) return s;
                    let [n, r, a, o] = s.match(q);
                    return {
                        [e]: parseFloat(n),
                        [t]: parseFloat(r),
                        [i]: parseFloat(a),
                        alpha: void 0 !== o ? parseFloat(o) : 1
                    }
                },
                tw = U(0, 255),
                tT = Object.assign(Object.assign({}, et), {
                    transform: e => Math.round(tw(e))
                }),
                tk = {
                    test: tb("rgb", "red"),
                    parse: tv("red", "green", "blue"),
                    transform: ({
                        red: e,
                        green: t,
                        blue: i,
                        alpha: s = 1
                    }) => "rgba(" + tT.transform(e) + ", " + tT.transform(t) + ", " + tT.transform(i) + ", " + H(ei.transform(s)) + ")"
                },
                tx = {
                    test: tb("#"),
                    parse: function(e) {
                        let t = "",
                            i = "",
                            s = "",
                            n = "";
                        return e.length > 5 ? (t = e.substr(1, 2), i = e.substr(3, 2), s = e.substr(5, 2), n = e.substr(7, 2)) : (t = e.substr(1, 1), i = e.substr(2, 1), s = e.substr(3, 1), n = e.substr(4, 1), t += t, i += i, s += s, n += n), {
                            red: parseInt(t, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(s, 16),
                            alpha: n ? parseInt(n, 16) / 255 : 1
                        }
                    },
                    transform: tk.transform
                },
                tA = {
                    test: tb("hsl", "hue"),
                    parse: tv("hue", "saturation", "lightness"),
                    transform: ({
                        hue: e,
                        saturation: t,
                        lightness: i,
                        alpha: s = 1
                    }) => "hsla(" + Math.round(e) + ", " + Z.transform(H(t)) + ", " + Z.transform(H(i)) + ", " + H(ei.transform(s)) + ")"
                };

            function tP(e, t, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
            }

            function tE({
                hue: e,
                saturation: t,
                lightness: i,
                alpha: s
            }) {
                e /= 360, i /= 100;
                let n = 0,
                    r = 0,
                    a = 0;
                if (t /= 100) {
                    let s = i < .5 ? i * (1 + t) : i + t - i * t,
                        o = 2 * i - s;
                    n = tP(o, s, e + 1 / 3), r = tP(o, s, e), a = tP(o, s, e - 1 / 3)
                } else n = r = a = i;
                return {
                    red: Math.round(255 * n),
                    green: Math.round(255 * r),
                    blue: Math.round(255 * a),
                    alpha: s
                }
            }
            let tS = (e, t, i) => {
                    let s = e * e;
                    return Math.sqrt(Math.max(0, i * (t * t - s) + s))
                },
                tC = [tx, tk, tA],
                tM = e => tC.find(t => t.test(e)),
                tL = e => `'${e}' is not an animatable color. Use the equivalent color code instead.`,
                tV = (e, t) => {
                    let i = tM(e),
                        s = tM(t);
                    (0, tl.k)(!!i, tL(e)), (0, tl.k)(!!s, tL(t));
                    let n = i.parse(e),
                        r = s.parse(t);
                    i === tA && (n = tE(n), i = tk), s === tA && (r = tE(r), s = tk);
                    let a = Object.assign({}, n);
                    return e => {
                        for (let t in a) "alpha" !== t && (a[t] = tS(n[t], r[t], e));
                        return a.alpha = ty(n.alpha, r.alpha, e), i.transform(a)
                    }
                },
                tO = {
                    test: e => tk.test(e) || tx.test(e) || tA.test(e),
                    parse: e => tk.test(e) ? tk.parse(e) : tA.test(e) ? tA.parse(e) : tx.parse(e),
                    transform: e => Y(e) ? e : e.hasOwnProperty("red") ? tk.transform(e) : tA.transform(e)
                },
                tR = "${c}",
                tI = "${n}";

            function tN(e) {
                "number" == typeof e && (e = `${e}`);
                let t = [],
                    i = 0,
                    s = e.match(z);
                s && (i = s.length, e = e.replace(z, tR), t.push(...s.map(tO.parse)));
                let n = e.match(q);
                return n && (e = e.replace(q, tI), t.push(...n.map(et.parse))), {
                    values: t,
                    numColors: i,
                    tokenised: e
                }
            }

            function tj(e) {
                return tN(e).values
            }

            function tD(e) {
                let {
                    values: t,
                    numColors: i,
                    tokenised: s
                } = tN(e), n = t.length;
                return e => {
                    let t = s;
                    for (let s = 0; s < n; s++) t = t.replace(s < i ? tR : tI, s < i ? tO.transform(e[s]) : H(e[s]));
                    return t
                }
            }
            let t$ = e => "number" == typeof e ? 0 : e,
                t_ = {
                    test: function(e) {
                        var t, i, s, n;
                        return isNaN(e) && Y(e) && (null !== (i = null === (t = e.match(q)) || void 0 === t ? void 0 : t.length) && void 0 !== i ? i : 0) + (null !== (n = null === (s = e.match(z)) || void 0 === s ? void 0 : s.length) && void 0 !== n ? n : 0) > 0
                    },
                    parse: tj,
                    createTransformer: tD,
                    getAnimatableNone: function(e) {
                        let t = tj(e),
                            i = tD(e);
                        return i(t.map(t$))
                    }
                },
                tF = e => "number" == typeof e;

            function tB(e, t) {
                return tF(e) ? i => ty(e, t, i) : tO.test(e) ? tV(e, t) : tz(e, t)
            }
            let tU = (e, t) => {
                    let i = [...e],
                        s = i.length,
                        n = e.map((e, i) => tB(e, t[i]));
                    return e => {
                        for (let t = 0; t < s; t++) i[t] = n[t](e);
                        return i
                    }
                },
                tH = (e, t) => {
                    let i = Object.assign(Object.assign({}, e), t),
                        s = {};
                    for (let n in i) void 0 !== e[n] && void 0 !== t[n] && (s[n] = tB(e[n], t[n]));
                    return e => {
                        for (let t in s) i[t] = s[t](e);
                        return i
                    }
                };

            function tq(e) {
                let t = t_.parse(e),
                    i = t.length,
                    s = 0,
                    n = 0,
                    r = 0;
                for (let e = 0; e < i; e++) s || "number" == typeof t[e] ? s++ : void 0 !== t[e].hue ? r++ : n++;
                return {
                    parsed: t,
                    numNumbers: s,
                    numRGB: n,
                    numHSL: r
                }
            }
            let tz = (e, t) => {
                    let i = t_.createTransformer(t),
                        s = tq(e),
                        n = tq(t),
                        r = s.numHSL === n.numHSL && s.numRGB === n.numRGB && s.numNumbers >= n.numNumbers;
                    return r ? e2(tU(s.parsed, n.parsed), i) : ((0, tl.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), i => `${i>0?t:e}`)
                },
                tW = (e, t) => i => ty(e, t, i);

            function tY(e, t, {
                clamp: i = !0,
                ease: s,
                mixer: n
            } = {}) {
                let r = e.length;
                (0, tl.k)(r === t.length, "Both input and output ranges must be the same length"), (0, tl.k)(!s || !Array.isArray(s) || s.length === r - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[r - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
                let a = function(e, t, i) {
                        var s;
                        let n = [],
                            r = i || ("number" == typeof(s = e[0]) ? tW : "string" == typeof s ? tO.test(s) ? tV : tz : Array.isArray(s) ? tU : "object" == typeof s ? tH : void 0),
                            a = e.length - 1;
                        for (let i = 0; i < a; i++) {
                            let s = r(e[i], e[i + 1]);
                            if (t) {
                                let e = Array.isArray(t) ? t[i] : t;
                                s = e2(e, s)
                            }
                            n.push(s)
                        }
                        return n
                    }(t, s, n),
                    o = 2 === r ? function([e, t], [i]) {
                        return s => i(tg(e, t, s))
                    }(e, a) : function(e, t) {
                        let i = e.length,
                            s = i - 1;
                        return n => {
                            let r = 0,
                                a = !1;
                            if (n <= e[0] ? a = !0 : n >= e[s] && (r = s - 1, a = !0), !a) {
                                let t = 1;
                                for (; t < i && !(e[t] > n) && t !== s; t++);
                                r = t - 1
                            }
                            let o = tg(e[r], e[r + 1], n);
                            return t[r](o)
                        }
                    }(e, a);
                return i ? t => o(tu(e[0], e[r - 1], t)) : o
            }
            let tK = e => t => 1 - e(1 - t),
                tX = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
                tZ = e => t => t * t * ((e + 1) * t - e),
                tG = 4 / 11,
                tQ = 8 / 11,
                tJ = e => e,
                t0 = e => Math.pow(e, 2),
                t1 = tK(t0),
                t5 = tX(t0),
                t2 = e => 1 - Math.sin(Math.acos(e)),
                t4 = tK(t2),
                t3 = tX(t4),
                t6 = tZ(1.525),
                t9 = tK(t6),
                t8 = tX(t6),
                t7 = (e => {
                    let t = tZ(1.525);
                    return e => (e *= 2) < 1 ? .5 * t(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })(0),
                ie = 4356 / 361,
                it = 35442 / 1805,
                ii = 16061 / 1805,
                is = e => {
                    if (1 === e || 0 === e) return e;
                    let t = e * e;
                    return e < tG ? 7.5625 * t : e < tQ ? 9.075 * t - 9.9 * e + 3.4 : e < .9 ? ie * t - it * e + ii : 10.8 * e * e - 20.52 * e + 10.72
                },
                ir = tK(is),
                ia = e => e < .5 ? .5 * (1 - is(1 - 2 * e)) : .5 * is(2 * e - 1) + .5;

            function io({
                from: e = 0,
                to: t = 1,
                ease: i,
                offset: s,
                duration: n = 300
            }) {
                let r = {
                        done: !1,
                        value: e
                    },
                    a = Array.isArray(t) ? t : [e, t],
                    o = (s && s.length === a.length ? s : function(e) {
                        let t = e.length;
                        return e.map((e, i) => 0 !== i ? i / (t - 1) : 0)
                    }(a)).map(e => e * n);

                function l() {
                    return tY(o, a, {
                        ease: Array.isArray(i) ? i : a.map(() => i || t5).splice(0, a.length - 1)
                    })
                }
                let u = l();
                return {
                    next: e => (r.value = u(e), r.done = e >= n, r),
                    flipTarget: () => {
                        a.reverse(), u = l()
                    }
                }
            }
            let il = {
                keyframes: io,
                spring: tm,
                decay: function({
                    velocity: e = 0,
                    from: t = 0,
                    power: i = .8,
                    timeConstant: s = 350,
                    restDelta: n = .5,
                    modifyTarget: r
                }) {
                    let a = {
                            done: !1,
                            value: t
                        },
                        o = i * e,
                        l = t + o,
                        u = void 0 === r ? l : r(l);
                    return u !== l && (o = u - t), {
                        next: e => {
                            let t = -o * Math.exp(-e / s);
                            return a.done = !(t > n || t < -n), a.value = a.done ? u : u + t, a
                        },
                        flipTarget: () => {}
                    }
                }
            };
            var iu = i(54735);

            function ic(e, t, i = 0) {
                return e - t - i
            }
            let ih = e => {
                let t = ({
                    delta: t
                }) => e(t);
                return {
                    start: () => iu.ZP.update(t, !0),
                    stop: () => iu.qY.update(t)
                }
            };

            function id(e) {
                let t, i, s;
                var n, {
                        from: r,
                        autoplay: a = !0,
                        driver: o = ih,
                        elapsed: l = 0,
                        repeat: u = 0,
                        repeatType: c = "loop",
                        repeatDelay: h = 0,
                        onPlay: d,
                        onStop: p,
                        onComplete: m,
                        onRepeat: f,
                        onUpdate: g
                    } = e,
                    y = to(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
                let {
                    to: b
                } = y, v = 0, w = y.duration, T = !1, k = !0, x = function(e) {
                    if (Array.isArray(e.to)) return io;
                    if (il[e.type]) return il[e.type];
                    let t = new Set(Object.keys(e));
                    if (t.has("ease") || t.has("duration") && !t.has("dampingRatio"));
                    else if (t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta")) return tm;
                    return io
                }(y);
                (null === (n = x.needsInterpolation) || void 0 === n ? void 0 : n.call(x, r, b)) && (s = tY([0, 100], [r, b], {
                    clamp: !1
                }), r = 0, b = 100);
                let A = x(Object.assign(Object.assign({}, y), {
                    from: r,
                    to: b
                }));
                return a && (null == d || d(), (t = o(function(e) {
                    if (k || (e = -e), l += e, !T) {
                        let e = A.next(Math.max(0, l));
                        i = e.value, s && (i = s(i)), T = k ? e.done : l <= 0
                    }
                    if (null == g || g(i), T) {
                        if (0 === v && (null != w || (w = l)), v < u) {
                            var n, r;
                            n = l, r = w, (k ? n >= r + h : n <= -h) && (v++, "reverse" === c ? l = function(e, t, i = 0, s = !0) {
                                return s ? ic(t + -e, t, i) : t - (e - t) + i
                            }(l, w, h, k = v % 2 == 0) : (l = ic(l, w, h), "mirror" === c && A.flipTarget()), T = !1, f && f())
                        } else t.stop(), m && m()
                    }
                })).start()), {
                    stop: () => {
                        null == p || p(), t.stop()
                    }
                }
            }
            let ip = e => 1e3 * e,
                im = (e, t) => 1 - 3 * t + 3 * e,
                ig = (e, t) => 3 * t - 6 * e,
                iy = e => 3 * e,
                ib = (e, t, i) => ((im(t, i) * e + ig(t, i)) * e + iy(t)) * e,
                iv = (e, t, i) => 3 * im(t, i) * e * e + 2 * ig(t, i) * e + iy(t),
                iw = {
                    linear: tJ,
                    easeIn: t0,
                    easeInOut: t5,
                    easeOut: t1,
                    circIn: t2,
                    circInOut: t3,
                    circOut: t4,
                    backIn: t6,
                    backInOut: t8,
                    backOut: t9,
                    anticipate: t7,
                    bounceIn: ir,
                    bounceInOut: ia,
                    bounceOut: is
                },
                iT = e => {
                    if (Array.isArray(e)) {
                        (0, tl.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        let [t, i, s, n] = e;
                        return function(e, t, i, s) {
                            if (e === t && i === s) return tJ;
                            let n = new Float32Array(11);
                            for (let t = 0; t < 11; ++t) n[t] = ib(.1 * t, e, i);
                            return r => 0 === r || 1 === r ? r : ib(function(t) {
                                let s = 0,
                                    r = 1;
                                for (; 10 !== r && n[r] <= t; ++r) s += .1;
                                --r;
                                let a = (t - n[r]) / (n[r + 1] - n[r]),
                                    o = s + .1 * a,
                                    l = iv(o, e, i);
                                return l >= .001 ? function(e, t, i, s) {
                                    for (let n = 0; n < 8; ++n) {
                                        let n = iv(t, i, s);
                                        if (0 === n) break;
                                        let r = ib(t, i, s) - e;
                                        t -= r / n
                                    }
                                    return t
                                }(t, o, e, i) : 0 === l ? o : function(e, t, i, s, n) {
                                    let r, a;
                                    let o = 0;
                                    do(r = ib(a = t + (i - t) / 2, s, n) - e) > 0 ? i = a : t = a; while (Math.abs(r) > 1e-7 && ++o < 10);
                                    return a
                                }(t, s, s + .1, e, i)
                            }(r), t, s)
                        }(t, i, s, n)
                    }
                    return "string" == typeof e ? ((0, tl.k)(void 0 !== iw[e], `Invalid easing type '${e}'`), iw[e]) : e
                },
                ik = e => Array.isArray(e) && "number" != typeof e[0],
                ix = (e, t) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && t_.test(t) && !t.startsWith("url(")),
                iA = () => ({
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                }),
                iP = e => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                iE = () => ({
                    type: "keyframes",
                    ease: "linear",
                    duration: .3
                }),
                iS = e => ({
                    type: "keyframes",
                    duration: .8,
                    values: e
                }),
                iC = {
                    x: iA,
                    y: iA,
                    z: iA,
                    rotate: iA,
                    rotateX: iA,
                    rotateY: iA,
                    rotateZ: iA,
                    scaleX: iP,
                    scaleY: iP,
                    scale: iP,
                    opacity: iE,
                    backgroundColor: iE,
                    color: iE,
                    default: iP
                },
                iM = (e, t) => ({
                    to: t,
                    ...(eE(t) ? iS : iC[e] || iC.default)(t)
                }),
                iL = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function iV(e) {
                let [t, i] = e.slice(0, -1).split("(");
                if ("drop-shadow" === t) return e;
                let [s] = i.match(q) || [];
                if (!s) return e;
                let n = i.replace(s, ""),
                    r = iL.has(t) ? 1 : 0;
                return s !== i && (r *= 100), t + "(" + r + n + ")"
            }
            let iO = /([a-z-]*)\(.*?\)/g,
                iR = Object.assign(Object.assign({}, t_), {
                    getAnimatableNone: e => {
                        let t = e.match(iO);
                        return t ? t.map(iV).join(" ") : e
                    }
                }),
                iI = { ...er,
                    color: tO,
                    backgroundColor: tO,
                    outlineColor: tO,
                    fill: tO,
                    stroke: tO,
                    borderColor: tO,
                    borderTopColor: tO,
                    borderRightColor: tO,
                    borderBottomColor: tO,
                    borderLeftColor: tO,
                    filter: iR,
                    WebkitFilter: iR
                },
                iN = e => iI[e];

            function ij(e, t) {
                var i;
                let s = iN(e);
                return s !== iR && (s = t_), null === (i = s.getAnimatableNone) || void 0 === i ? void 0 : i.call(s, t)
            }
            let iD = {
                    current: !1
                },
                i$ = !1;

            function i_(e) {
                return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
            }

            function iF(e) {
                return "number" == typeof e ? 0 : ij("", e)
            }

            function iB(e, t) {
                return e[t] || e.default || e
            }

            function iU(e, t, i, s = {}) {
                return iD.current && (s = {
                    type: !1
                }), t.start(n => {
                    let r, a;
                    let o = function(e, t, i, s, n) {
                            let r = iB(s, e) || {},
                                a = void 0 !== r.from ? r.from : t.get(),
                                o = ix(e, i);
                            "none" === a && o && "string" == typeof i ? a = ij(e, i) : i_(a) && "string" == typeof i ? a = iF(i) : !Array.isArray(i) && i_(i) && "string" == typeof a && (i = iF(a));
                            let l = ix(e, a);
                            return (0, tl.K)(l === o, `You are trying to animate ${e} from "${a}" to "${i}". ${a} is not an animatable value - to enable this animation set ${a} to a value animatable to ${i} via the \`style\` property.`), l && o && !1 !== r.type ? function() {
                                var s, o;
                                let l = {
                                    from: a,
                                    to: i,
                                    velocity: t.getVelocity(),
                                    onComplete: n,
                                    onUpdate: e => t.set(e)
                                };
                                return "inertia" === r.type || "decay" === r.type ? function({
                                    from: e = 0,
                                    velocity: t = 0,
                                    min: i,
                                    max: s,
                                    power: n = .8,
                                    timeConstant: r = 750,
                                    bounceStiffness: a = 500,
                                    bounceDamping: o = 10,
                                    restDelta: l = 1,
                                    modifyTarget: u,
                                    driver: c,
                                    onUpdate: h,
                                    onComplete: d,
                                    onStop: p
                                }) {
                                    let m;

                                    function f(e) {
                                        return void 0 !== i && e < i || void 0 !== s && e > s
                                    }

                                    function g(e) {
                                        return void 0 === i ? s : void 0 === s ? i : Math.abs(i - e) < Math.abs(s - e) ? i : s
                                    }

                                    function y(e) {
                                        null == m || m.stop(), m = id(Object.assign(Object.assign({}, e), {
                                            driver: c,
                                            onUpdate: t => {
                                                var i;
                                                null == h || h(t), null === (i = e.onUpdate) || void 0 === i || i.call(e, t)
                                            },
                                            onComplete: d,
                                            onStop: p
                                        }))
                                    }

                                    function b(e) {
                                        y(Object.assign({
                                            type: "spring",
                                            stiffness: a,
                                            damping: o,
                                            restDelta: l
                                        }, e))
                                    }
                                    if (f(e)) b({
                                        from: e,
                                        velocity: t,
                                        to: g(e)
                                    });
                                    else {
                                        let s, a, o = n * t + e;
                                        void 0 !== u && (o = u(o));
                                        let c = g(o),
                                            h = c === i ? -1 : 1,
                                            d = e => {
                                                var i;
                                                s = a, a = e, t = (i = (0, iu.$B)().delta) ? (e - s) * (1e3 / i) : 0, (1 === h && e > c || -1 === h && e < c) && b({
                                                    from: e,
                                                    to: c,
                                                    velocity: t
                                                })
                                            };
                                        y({
                                            type: "decay",
                                            from: e,
                                            velocity: t,
                                            timeConstant: r,
                                            power: n,
                                            restDelta: l,
                                            modifyTarget: u,
                                            onUpdate: f(o) ? d : void 0
                                        })
                                    }
                                    return {
                                        stop: () => null == m ? void 0 : m.stop()
                                    }
                                }({ ...l,
                                    ...r
                                }) : id({ ...(s = r, Array.isArray(l.to) && void 0 === s.duration && (s.duration = .8), Array.isArray((o = l).to) && null === o.to[0] && (o.to = [...o.to], o.to[0] = o.from), ! function({
                                        when: e,
                                        delay: t,
                                        delayChildren: i,
                                        staggerChildren: s,
                                        staggerDirection: n,
                                        repeat: r,
                                        repeatType: a,
                                        repeatDelay: o,
                                        from: l,
                                        ...u
                                    }) {
                                        return !!Object.keys(u).length
                                    }(s) && (s = { ...s,
                                        ...iM(e, l.to)
                                    }), { ...l,
                                        ... function({
                                            ease: e,
                                            times: t,
                                            yoyo: i,
                                            flip: s,
                                            loop: n,
                                            ...r
                                        }) {
                                            let a = { ...r
                                            };
                                            return t && (a.offset = t), r.duration && (a.duration = ip(r.duration)), r.repeatDelay && (a.repeatDelay = ip(r.repeatDelay)), e && (a.ease = ik(e) ? e.map(iT) : iT(e)), "tween" === r.type && (a.type = "keyframes"), (i || n || s) && ((0, tl.K)(!i$, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), i$ = !0, i ? a.repeatType = "reverse" : n ? a.repeatType = "loop" : s && (a.repeatType = "mirror"), a.repeat = n || i || s || r.repeat), "spring" !== r.type && (a.type = "keyframes"), a
                                        }(s)
                                    }),
                                    onUpdate: e => {
                                        l.onUpdate(e), r.onUpdate && r.onUpdate(e)
                                    },
                                    onComplete: () => {
                                        l.onComplete(), r.onComplete && r.onComplete()
                                    }
                                })
                            } : function() {
                                let e = eC(i);
                                return t.set(e), n(), r.onUpdate && r.onUpdate(e), r.onComplete && r.onComplete(), {
                                    stop: () => {}
                                }
                            }
                        }(e, t, i, s, n),
                        l = function(e, t) {
                            var i, s;
                            let n = iB(e, t) || {};
                            return null !== (s = null !== (i = n.delay) && void 0 !== i ? i : e.delay) && void 0 !== s ? s : 0
                        }(s, e),
                        u = () => a = o();
                    return l ? r = window.setTimeout(u, ip(l)) : u(), () => {
                        clearTimeout(r), a && a.stop()
                    }
                })
            }
            let iH = e => /^\-?\d*\.?\d+$/.test(e),
                iq = e => /^0[^.\s]+$/.test(e);

            function iz(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }

            function iW(e, t) {
                let i = e.indexOf(t);
                i > -1 && e.splice(i, 1)
            }
            class iY {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return iz(this.subscriptions, e), () => iW(this.subscriptions, e)
                }
                notify(e, t, i) {
                    let s = this.subscriptions.length;
                    if (s) {
                        if (1 === s) this.subscriptions[0](e, t, i);
                        else
                            for (let n = 0; n < s; n++) {
                                let s = this.subscriptions[n];
                                s && s(e, t, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let iK = e => !isNaN(parseFloat(e));
            class iX {
                constructor(e) {
                    this.version = "7.3.5", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new iY, this.velocityUpdateSubscribers = new iY, this.renderSubscribers = new iY, this.canTrackVelocity = !1, this.updateAndNotify = (e, t = !0) => {
                        this.prev = this.current, this.current = e;
                        let {
                            delta: i,
                            timestamp: s
                        } = (0, iu.$B)();
                        this.lastUpdated !== s && (this.timeDelta = i, this.lastUpdated = s, iu.ZP.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.updateSubscribers.notify(this.current), this.velocityUpdateSubscribers.getSize() && this.velocityUpdateSubscribers.notify(this.getVelocity()), t && this.renderSubscribers.notify(this.current)
                    }, this.scheduleVelocityCheck = () => iu.ZP.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: e
                    }) => {
                        e !== this.lastUpdated && (this.prev = this.current, this.velocityUpdateSubscribers.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = iK(this.current)
                }
                onChange(e) {
                    return this.updateSubscribers.add(e)
                }
                clearListeners() {
                    this.updateSubscribers.clear()
                }
                onRenderRequest(e) {
                    return e(this.get()), this.renderSubscribers.add(e)
                }
                attach(e) {
                    this.passiveEffect = e
                }
                set(e, t = !0) {
                    t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var e, t;
                    return this.canTrackVelocity ? (e = parseFloat(this.current) - parseFloat(this.prev), (t = this.timeDelta) ? e * (1e3 / t) : 0) : 0
                }
                start(e) {
                    return this.stop(), new Promise(t => {
                        this.hasAnimated = !0, this.stopAnimation = e(t)
                    }).then(() => this.clearAnimation())
                }
                stop() {
                    this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.stopAnimation
                }
                clearAnimation() {
                    this.stopAnimation = null
                }
                destroy() {
                    this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                }
            }

            function iZ(e) {
                return new iX(e)
            }
            let iG = e => t => t.test(e),
                iQ = [et, G, Z, X, J, Q, {
                    test: e => "auto" === e,
                    parse: e => e
                }],
                iJ = e => iQ.find(iG(e)),
                i0 = [...iQ, tO, t_],
                i1 = e => i0.find(iG(e));

            function i5(e, t, i) {
                let s = e.getProps();
                return eP(s, t, void 0 !== i ? i : s.custom, function(e) {
                    let t = {};
                    return e.forEachValue((e, i) => t[i] = e.get()), t
                }(e), function(e) {
                    let t = {};
                    return e.forEachValue((e, i) => t[i] = e.getVelocity()), t
                }(e))
            }

            function i2(e) {
                return Boolean(D(e) && e.add)
            }

            function i4(e, t, i = {}) {
                var s;
                let n = i5(e, t, i.custom),
                    {
                        transition: r = e.getDefaultTransition() || {}
                    } = n || {};
                i.transitionOverride && (r = i.transitionOverride);
                let a = n ? () => i3(e, n, i) : () => Promise.resolve(),
                    o = (null === (s = e.variantChildren) || void 0 === s ? void 0 : s.size) ? (s = 0) => {
                        let {
                            delayChildren: n = 0,
                            staggerChildren: a,
                            staggerDirection: o
                        } = r;
                        return function(e, t, i = 0, s = 0, n = 1, r) {
                            let a = [],
                                o = (e.variantChildren.size - 1) * s,
                                l = 1 === n ? (e = 0) => e * s : (e = 0) => o - e * s;
                            return Array.from(e.variantChildren).sort(i6).forEach((e, s) => {
                                a.push(i4(e, t, { ...r,
                                    delay: i + l(s)
                                }).then(() => e.notifyAnimationComplete(t)))
                            }), Promise.all(a)
                        }(e, t, n + s, a, o, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = r;
                if (!l) return Promise.all([a(), o(i.delay)]); {
                    let [e, t] = "beforeChildren" === l ? [a, o] : [o, a];
                    return e().then(t)
                }
            }

            function i3(e, t, {
                delay: i = 0,
                transitionOverride: s,
                type: n
            } = {}) {
                var r;
                let {
                    transition: a = e.getDefaultTransition(),
                    transitionEnd: o,
                    ...l
                } = e.makeTargetAnimatable(t), u = e.getValue("willChange");
                s && (a = s);
                let c = [],
                    h = n && (null === (r = e.animationState) || void 0 === r ? void 0 : r.getState()[n]);
                for (let t in l) {
                    let s = e.getValue(t),
                        n = l[t];
                    if (!s || void 0 === n || h && function({
                            protectedKeys: e,
                            needsAnimating: t
                        }, i) {
                            let s = e.hasOwnProperty(i) && !0 !== t[i];
                            return t[i] = !1, s
                        }(h, t)) continue;
                    let r = {
                        delay: i,
                        ...a
                    };
                    e.shouldReduceMotion && N.has(t) && (r = { ...r,
                        type: !1,
                        delay: 0
                    });
                    let o = iU(t, s, n, r);
                    i2(u) && (u.add(t), o = o.then(() => u.remove(t))), c.push(o)
                }
                return Promise.all(c).then(() => {
                    o && function(e, t) {
                        let i = i5(e, t),
                            {
                                transitionEnd: s = {},
                                transition: n = {},
                                ...r
                            } = i ? e.makeTargetAnimatable(i, !1) : {};
                        for (let t in r = { ...r,
                                ...s
                            }) {
                            var a;
                            let i = eC(r[t]);
                            a = t, e.hasValue(a) ? e.getValue(a).set(i) : e.addValue(a, iZ(i))
                        }
                    }(e, o)
                })
            }

            function i6(e, t) {
                return e.sortNodePosition(t)
            }
            let i9 = [a.Animate, a.InView, a.Focus, a.Hover, a.Tap, a.Drag, a.Exit],
                i8 = [...i9].reverse(),
                i7 = i9.length;

            function se(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let st = {
                    animation: ts(({
                        visualElement: e,
                        animate: t
                    }) => {
                        e.animationState || (e.animationState = function(e) {
                            let t = t => Promise.all(t.map(({
                                    animation: t,
                                    options: i
                                }) => (function(e, t, i = {}) {
                                    let s;
                                    if (e.notifyAnimationStart(t), Array.isArray(t)) {
                                        let n = t.map(t => i4(e, t, i));
                                        s = Promise.all(n)
                                    } else if ("string" == typeof t) s = i4(e, t, i);
                                    else {
                                        let n = "function" == typeof t ? i5(e, t, i.custom) : t;
                                        s = i3(e, n, i)
                                    }
                                    return s.then(() => e.notifyAnimationComplete(t))
                                })(e, t, i))),
                                i = {
                                    [a.Animate]: se(!0),
                                    [a.InView]: se(),
                                    [a.Hover]: se(),
                                    [a.Tap]: se(),
                                    [a.Drag]: se(),
                                    [a.Focus]: se(),
                                    [a.Exit]: se()
                                },
                                s = !0,
                                n = (t, i) => {
                                    let s = i5(e, i);
                                    if (s) {
                                        let {
                                            transition: e,
                                            transitionEnd: i,
                                            ...n
                                        } = s;
                                        t = { ...t,
                                            ...n,
                                            ...i
                                        }
                                    }
                                    return t
                                };

                            function r(r, a) {
                                var o, l;
                                let u = e.getProps(),
                                    c = e.getVariantContext(!0) || {},
                                    h = [],
                                    d = new Set,
                                    p = {},
                                    m = 1 / 0;
                                for (let t = 0; t < i7; t++) {
                                    let y = i8[t],
                                        b = i[y],
                                        v = null !== (o = u[y]) && void 0 !== o ? o : c[y],
                                        w = f(v),
                                        T = y === a ? b.isActive : null;
                                    !1 === T && (m = t);
                                    let k = v === c[y] && v !== u[y] && w;
                                    if (k && s && e.manuallyAnimateOnMount && (k = !1), b.protectedKeys = { ...p
                                        }, !b.isActive && null === T || !v && !b.prevProp || g(v) || "boolean" == typeof v) continue;
                                    let x = (l = b.prevProp, "string" == typeof v ? v !== l : !!Array.isArray(v) && !ta(v, l)),
                                        A = x || y === a && b.isActive && !k && w || t > m && w,
                                        P = Array.isArray(v) ? v : [v],
                                        E = P.reduce(n, {});
                                    !1 === T && (E = {});
                                    let {
                                        prevResolvedValues: S = {}
                                    } = b, C = { ...S,
                                        ...E
                                    }, M = e => {
                                        A = !0, d.delete(e), b.needsAnimating[e] = !0
                                    };
                                    for (let e in C) {
                                        let t = E[e],
                                            i = S[e];
                                        p.hasOwnProperty(e) || (t !== i ? eE(t) && eE(i) ? !ta(t, i) || x ? M(e) : b.protectedKeys[e] = !0 : void 0 !== t ? M(e) : d.add(e) : void 0 !== t && d.has(e) ? M(e) : b.protectedKeys[e] = !0)
                                    }
                                    b.prevProp = v, b.prevResolvedValues = E, b.isActive && (p = { ...p,
                                        ...E
                                    }), s && e.blockInitialAnimation && (A = !1), A && !k && h.push(...P.map(e => ({
                                        animation: e,
                                        options: {
                                            type: y,
                                            ...r
                                        }
                                    })))
                                }
                                if (d.size) {
                                    let t = {};
                                    d.forEach(i => {
                                        let s = e.getBaseTarget(i);
                                        void 0 !== s && (t[i] = s)
                                    }), h.push({
                                        animation: t
                                    })
                                }
                                let y = Boolean(h.length);
                                return s && !1 === u.initial && !e.manuallyAnimateOnMount && (y = !1), s = !1, y ? t(h) : Promise.resolve()
                            }
                            return {
                                animateChanges: r,
                                setActive: function(t, s, n) {
                                    var a;
                                    if (i[t].isActive === s) return Promise.resolve();
                                    null === (a = e.variantChildren) || void 0 === a || a.forEach(e => {
                                        var i;
                                        return null === (i = e.animationState) || void 0 === i ? void 0 : i.setActive(t, s)
                                    }), i[t].isActive = s;
                                    let o = r(n, t);
                                    for (let e in i) i[e].protectedKeys = {};
                                    return o
                                },
                                setAnimateFunction: function(i) {
                                    t = i(e)
                                },
                                getState: () => i
                            }
                        }(e)), g(t) && (0, l.useEffect)(() => t.subscribe(e), [t])
                    }),
                    exit: ts(e => {
                        let {
                            custom: t,
                            visualElement: i
                        } = e, [s, n] = tr(), r = (0, l.useContext)(h.O);
                        (0, l.useEffect)(() => {
                            i.isPresent = s;
                            let e = i.animationState && i.animationState.setActive(a.Exit, !s, {
                                custom: r && r.custom || t
                            });
                            e && !s && e.then(n)
                        }, [s])
                    })
                },
                si = e => e.hasOwnProperty("x") && e.hasOwnProperty("y"),
                ss = e => si(e) && e.hasOwnProperty("z"),
                sn = (e, t) => Math.abs(e - t);

            function sr(e, t) {
                if (tF(e) && tF(t)) return sn(e, t);
                if (si(e) && si(t)) {
                    let i = sn(e.x, t.x),
                        s = sn(e.y, t.y),
                        n = ss(e) && ss(t) ? sn(e.z, t.z) : 0;
                    return Math.sqrt(Math.pow(i, 2) + Math.pow(s, 2) + Math.pow(n, 2))
                }
            }
            class sa {
                constructor(e, t, {
                    transformPagePoint: i
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let e = su(this.lastMoveEventInfo, this.history),
                                t = null !== this.startEvent,
                                i = sr(e.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!t && !i) return;
                            let {
                                point: s
                            } = e, {
                                timestamp: n
                            } = (0, iu.$B)();
                            this.history.push({ ...s,
                                timestamp: n
                            });
                            let {
                                onStart: r,
                                onMove: a
                            } = this.handlers;
                            t || (r && r(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, e)
                        }, this.handlePointerMove = (e, t) => {
                            if (this.lastMoveEvent = e, this.lastMoveEventInfo = so(t, this.transformPagePoint), eN(e) && 0 === e.buttons) {
                                this.handlePointerUp(e, t);
                                return
                            }
                            iu.ZP.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (e, t) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: s
                            } = this.handlers, n = su(so(t, this.transformPagePoint), this.history);
                            this.startEvent && i && i(e, n), s && s(e, n)
                        }, ej(e) && e.touches.length > 1) return;
                    this.handlers = t, this.transformPagePoint = i;
                    let s = e$(e),
                        n = so(s, this.transformPagePoint),
                        {
                            point: r
                        } = n,
                        {
                            timestamp: a
                        } = (0, iu.$B)();
                    this.history = [{ ...r,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: o
                    } = t;
                    o && o(e, su(n, this.history)), this.removeListeners = e2(eW(window, "pointermove", this.handlePointerMove), eW(window, "pointerup", this.handlePointerUp), eW(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(e) {
                    this.handlers = e
                }
                end() {
                    this.removeListeners && this.removeListeners(), iu.qY.update(this.updatePoint)
                }
            }

            function so(e, t) {
                return t ? {
                    point: t(e.point)
                } : e
            }

            function sl(e, t) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y
                }
            }

            function su({
                point: e
            }, t) {
                return {
                    point: e,
                    delta: sl(e, sc(t)),
                    offset: sl(e, t[0]),
                    velocity: function(e, t) {
                        if (e.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = e.length - 1,
                            s = null,
                            n = sc(e);
                        for (; i >= 0 && (s = e[i], !(n.timestamp - s.timestamp > ip(.1)));) i--;
                        if (!s) return {
                            x: 0,
                            y: 0
                        };
                        let r = (n.timestamp - s.timestamp) / 1e3;
                        if (0 === r) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (n.x - s.x) / r,
                            y: (n.y - s.y) / r
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(t, 0)
                }
            }

            function sc(e) {
                return e[e.length - 1]
            }

            function sh(e) {
                return e.max - e.min
            }

            function sd(e, t = 0, i = .01) {
                return sr(e, t) < i
            }

            function sp(e, t, i, s = .5) {
                e.origin = s, e.originPoint = ty(t.min, t.max, e.origin), e.scale = sh(i) / sh(t), (sd(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ty(i.min, i.max, e.origin) - e.originPoint, (sd(e.translate) || isNaN(e.translate)) && (e.translate = 0)
            }

            function sm(e, t, i, s) {
                sp(e.x, t.x, i.x, null == s ? void 0 : s.originX), sp(e.y, t.y, i.y, null == s ? void 0 : s.originY)
            }

            function sf(e, t, i) {
                e.min = i.min + t.min, e.max = e.min + sh(t)
            }

            function sg(e, t, i) {
                e.min = t.min - i.min, e.max = e.min + sh(t)
            }

            function sy(e, t, i) {
                sg(e.x, t.x, i.x), sg(e.y, t.y, i.y)
            }

            function sb(e, t, i) {
                return {
                    min: void 0 !== t ? e.min + t : void 0,
                    max: void 0 !== i ? e.max + i - (e.max - e.min) : void 0
                }
            }

            function sv(e, t) {
                let i = t.min - e.min,
                    s = t.max - e.max;
                return t.max - t.min < e.max - e.min && ([i, s] = [s, i]), {
                    min: i,
                    max: s
                }
            }

            function sw(e, t, i) {
                return {
                    min: sT(e, t),
                    max: sT(e, i)
                }
            }

            function sT(e, t) {
                var i;
                return "number" == typeof e ? e : null !== (i = e[t]) && void 0 !== i ? i : 0
            }
            let sk = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                sx = () => ({
                    x: sk(),
                    y: sk()
                }),
                sA = () => ({
                    min: 0,
                    max: 0
                }),
                sP = () => ({
                    x: sA(),
                    y: sA()
                });

            function sE(e) {
                return [e("x"), e("y")]
            }

            function sS({
                top: e,
                left: t,
                right: i,
                bottom: s
            }) {
                return {
                    x: {
                        min: t,
                        max: i
                    },
                    y: {
                        min: e,
                        max: s
                    }
                }
            }

            function sC(e) {
                return void 0 === e || 1 === e
            }

            function sM({
                scale: e,
                scaleX: t,
                scaleY: i
            }) {
                return !sC(e) || !sC(t) || !sC(i)
            }

            function sL(e) {
                var t, i;
                return sM(e) || (t = e.x) && "0%" !== t || (i = e.y) && "0%" !== i || e.z || e.rotate || e.rotateX || e.rotateY
            }

            function sV(e, t, i, s, n) {
                return void 0 !== n && (e = s + n * (e - s)), s + i * (e - s) + t
            }

            function sO(e, t = 0, i = 1, s, n) {
                e.min = sV(e.min, t, i, s, n), e.max = sV(e.max, t, i, s, n)
            }

            function sR(e, {
                x: t,
                y: i
            }) {
                sO(e.x, t.translate, t.scale, t.originPoint), sO(e.y, i.translate, i.scale, i.originPoint)
            }

            function sI(e, t) {
                e.min = e.min + t, e.max = e.max + t
            }

            function sN(e, t, [i, s, n]) {
                let r = void 0 !== t[n] ? t[n] : .5,
                    a = ty(e.min, e.max, r);
                sO(e, t[i], t[s], a, t.scale)
            }
            let sj = ["x", "scaleX", "originX"],
                sD = ["y", "scaleY", "originY"];

            function s$(e, t) {
                sN(e.x, t, sj), sN(e.y, t, sD)
            }

            function s_(e, t) {
                return sS(function(e, t) {
                    if (!t) return e;
                    let i = t({
                            x: e.left,
                            y: e.top
                        }),
                        s = t({
                            x: e.right,
                            y: e.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: s.y,
                        right: s.x
                    }
                }(e.getBoundingClientRect(), t))
            }
            let sF = new WeakMap;
            class sB {
                constructor(e) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = sP(), this.visualElement = e
                }
                start(e, {
                    snapToCursor: t = !1
                } = {}) {
                    if (!1 === this.visualElement.isPresent) return;
                    let i = e => {
                            this.stopAnimation(), t && this.snapToCursor(e$(e, "page").point)
                        },
                        s = (e, t) => {
                            var i;
                            let {
                                drag: s,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            (!s || n || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = eG(s), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), sE(e => {
                                var t, i;
                                let s = this.getAxisMotionValue(e).get() || 0;
                                if (Z.test(s)) {
                                    let n = null === (i = null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout) || void 0 === i ? void 0 : i.actual[e];
                                    if (n) {
                                        let e = sh(n);
                                        s = e * (parseFloat(s) / 100)
                                    }
                                }
                                this.originPoint[e] = s
                            }), null == r || r(e, t), null === (i = this.visualElement.animationState) || void 0 === i || i.setActive(a.Drag, !0))
                        },
                        n = (e, t) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: s,
                                onDirectionLock: n,
                                onDrag: r
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: a
                            } = t;
                            if (s && null === this.currentDirection) {
                                this.currentDirection = function(e, t = 10) {
                                    let i = null;
                                    return Math.abs(e.y) > t ? i = "y" : Math.abs(e.x) > t && (i = "x"), i
                                }(a), null !== this.currentDirection && (null == n || n(this.currentDirection));
                                return
                            }
                            this.updateAxis("x", t.point, a), this.updateAxis("y", t.point, a), this.visualElement.syncRender(), null == r || r(e, t)
                        },
                        r = (e, t) => this.stop(e, t);
                    this.panSession = new sa(e, {
                        onSessionStart: i,
                        onStart: s,
                        onMove: n,
                        onSessionEnd: r
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(e, t) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: s
                    } = t;
                    this.startAnimation(s);
                    let {
                        onDragEnd: n
                    } = this.getProps();
                    null == n || n(e, t)
                }
                cancel() {
                    var e, t;
                    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(a.Drag, !1)
                }
                updateAxis(e, t, i) {
                    let {
                        drag: s
                    } = this.getProps();
                    if (!i || !sU(e, s, this.currentDirection)) return;
                    let n = this.getAxisMotionValue(e),
                        r = this.originPoint[e] + i[e];
                    this.constraints && this.constraints[e] && (r = function(e, {
                        min: t,
                        max: i
                    }, s) {
                        return void 0 !== t && e < t ? e = s ? ty(t, e, s.min) : Math.max(e, t) : void 0 !== i && e > i && (e = s ? ty(i, e, s.max) : Math.min(e, i)), e
                    }(r, this.constraints[e], this.elastic[e])), n.set(r)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: e,
                        dragElastic: t
                    } = this.getProps(), {
                        layout: i
                    } = this.visualElement.projection || {}, s = this.constraints;
                    e && m(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = function(e, {
                        top: t,
                        left: i,
                        bottom: s,
                        right: n
                    }) {
                        return {
                            x: sb(e.x, i, n),
                            y: sb(e.y, t, s)
                        }
                    }(i.actual, e) : this.constraints = !1, this.elastic = function(e = .35) {
                        return !1 === e ? e = 0 : !0 === e && (e = .35), {
                            x: sw(e, "left", "right"),
                            y: sw(e, "top", "bottom")
                        }
                    }(t), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && sE(e => {
                        this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                            let i = {};
                            return void 0 !== t.min && (i.min = t.min - e.min), void 0 !== t.max && (i.max = t.max - e.min), i
                        }(i.actual[e], this.constraints[e]))
                    })
                }
                resolveRefConstraints() {
                    var e;
                    let {
                        dragConstraints: t,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!t || !m(t)) return !1;
                    let s = t.current;
                    (0, tl.k)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: n
                    } = this.visualElement;
                    if (!n || !n.layout) return !1;
                    let r = function(e, t, i) {
                            let s = s_(e, i),
                                {
                                    scroll: n
                                } = t;
                            return n && (sI(s.x, n.x), sI(s.y, n.y)), s
                        }(s, n.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: sv((e = n.layout.actual).x, r.x),
                            y: sv(e.y, r.y)
                        };
                    if (i) {
                        let e = i(function({
                            x: e,
                            y: t
                        }) {
                            return {
                                top: t.min,
                                right: e.max,
                                bottom: t.max,
                                left: e.min
                            }
                        }(a));
                        this.hasMutatedConstraints = !!e, e && (a = sS(e))
                    }
                    return a
                }
                startAnimation(e) {
                    let {
                        drag: t,
                        dragMomentum: i,
                        dragElastic: s,
                        dragTransition: n,
                        dragSnapToOrigin: r,
                        onDragTransitionEnd: a
                    } = this.getProps(), o = this.constraints || {}, l = sE(a => {
                        var l;
                        if (!sU(a, t, this.currentDirection)) return;
                        let u = null !== (l = null == o ? void 0 : o[a]) && void 0 !== l ? l : {};
                        r && (u = {
                            min: 0,
                            max: 0
                        });
                        let c = {
                            type: "inertia",
                            velocity: i ? e[a] : 0,
                            bounceStiffness: s ? 200 : 1e6,
                            bounceDamping: s ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...n,
                            ...u
                        };
                        return this.startAxisValueAnimation(a, c)
                    });
                    return Promise.all(l).then(a)
                }
                startAxisValueAnimation(e, t) {
                    let i = this.getAxisMotionValue(e);
                    return iU(e, i, 0, t)
                }
                stopAnimation() {
                    sE(e => this.getAxisMotionValue(e).stop())
                }
                getAxisMotionValue(e) {
                    var t, i;
                    let s = "_drag" + e.toUpperCase(),
                        n = this.visualElement.getProps()[s];
                    return n || this.visualElement.getValue(e, null !== (i = null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) && void 0 !== i ? i : 0)
                }
                snapToCursor(e) {
                    sE(t => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!sU(t, i, this.currentDirection)) return;
                        let {
                            projection: s
                        } = this.visualElement, n = this.getAxisMotionValue(t);
                        if (s && s.layout) {
                            let {
                                min: i,
                                max: r
                            } = s.layout.actual[t];
                            n.set(e[t] - ty(i, r, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    var e;
                    let {
                        drag: t,
                        dragConstraints: i
                    } = this.getProps(), {
                        projection: s
                    } = this.visualElement;
                    if (!m(i) || !s || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    sE(e => {
                        let t = this.getAxisMotionValue(e);
                        if (t) {
                            let i = t.get();
                            n[e] = function(e, t) {
                                let i = .5,
                                    s = sh(e),
                                    n = sh(t);
                                return n > s ? i = tg(t.min, t.max - s, e.min) : s > n && (i = tg(e.min, e.max - n, t.min)), tu(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[e])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.getInstance().style.transform = r ? r({}, "") : "none", null === (e = s.root) || void 0 === e || e.updateScroll(), s.updateLayout(), this.resolveConstraints(), sE(e => {
                        if (!sU(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: s,
                                max: r
                            } = this.constraints[e];
                        i.set(ty(s, r, n[e]))
                    })
                }
                addListeners() {
                    var e;
                    sF.set(this.visualElement, this);
                    let t = this.visualElement.getInstance(),
                        i = eW(t, "pointerdown", e => {
                            let {
                                drag: t,
                                dragListener: i = !0
                            } = this.getProps();
                            t && i && this.start(e)
                        }),
                        s = () => {
                            let {
                                dragConstraints: e
                            } = this.getProps();
                            m(e) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: n
                        } = this.visualElement,
                        r = n.addEventListener("measure", s);
                    n && !n.layout && (null === (e = n.root) || void 0 === e || e.updateScroll(), n.updateLayout()), s();
                    let a = eR(window, "resize", () => this.scalePositionWithinConstraints()),
                        o = n.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: t
                        }) => {
                            this.isDragging && t && (sE(t => {
                                let i = this.getAxisMotionValue(t);
                                i && (this.originPoint[t] += e[t].translate, i.set(i.get() + e[t].translate))
                            }), this.visualElement.syncRender())
                        });
                    return () => {
                        a(), i(), r(), null == o || o()
                    }
                }
                getProps() {
                    let e = this.visualElement.getProps(),
                        {
                            drag: t = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: s = !1,
                            dragConstraints: n = !1,
                            dragElastic: r = .35,
                            dragMomentum: a = !0
                        } = e;
                    return { ...e,
                        drag: t,
                        dragDirectionLock: i,
                        dragPropagation: s,
                        dragConstraints: n,
                        dragElastic: r,
                        dragMomentum: a
                    }
                }
            }

            function sU(e, t, i) {
                return (!0 === t || t === e) && (null === i || i === e)
            }
            let sH = {
                    pan: ts(function({
                        onPan: e,
                        onPanStart: t,
                        onPanEnd: i,
                        onPanSessionStart: s,
                        visualElement: n
                    }) {
                        let r = (0, l.useRef)(null),
                            {
                                transformPagePoint: a
                            } = (0, l.useContext)(u),
                            o = {
                                onSessionStart: s,
                                onStart: t,
                                onMove: e,
                                onEnd: (e, t) => {
                                    r.current = null, i && i(e, t)
                                }
                            };
                        (0, l.useEffect)(() => {
                            null !== r.current && r.current.updateHandlers(o)
                        }), eY(n, "pointerdown", (e || t || i || s) && function(e) {
                            r.current = new sa(e, o, {
                                transformPagePoint: a
                            })
                        }), (0, e1.z)(() => r.current && r.current.end())
                    }),
                    drag: ts(function(e) {
                        let {
                            dragControls: t,
                            visualElement: i
                        } = e, s = (0, A.h)(() => new sB(i));
                        (0, l.useEffect)(() => t && t.subscribe(s), [s, t]), (0, l.useEffect)(() => s.addListeners(), [s])
                    })
                },
                sq = {
                    current: null
                },
                sz = {
                    current: !1
                },
                sW = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"],
                sY = Object.keys(k),
                sK = sY.length,
                sX = ({
                    treeType: e = "",
                    build: t,
                    getBaseTarget: i,
                    makeTargetAnimatable: s,
                    measureViewportBox: n,
                    render: r,
                    readValueFromInstance: a,
                    removeValueFromRenderState: o,
                    sortNodePosition: u,
                    scrapeMotionValuesFromProps: c
                }) => ({
                    parent: h,
                    props: d,
                    presenceId: p,
                    blockInitialAnimation: g,
                    visualState: y,
                    reducedMotionConfig: w
                }, T = {}) => {
                    let A, P, E = !1,
                        {
                            latestValues: S,
                            renderState: C
                        } = y,
                        M = function() {
                            let e = sW.map(() => new iY),
                                t = {},
                                i = {
                                    clearAllListeners: () => e.forEach(e => e.clear()),
                                    updatePropListeners: e => {
                                        sW.forEach(s => {
                                            var n;
                                            let r = "on" + s,
                                                a = e[r];
                                            null === (n = t[s]) || void 0 === n || n.call(t), a && (t[s] = i[r](a))
                                        })
                                    }
                                };
                            return e.forEach((e, t) => {
                                i["on" + sW[t]] = t => e.add(t), i["notify" + sW[t]] = (...t) => e.notify(...t)
                            }), i
                        }(),
                        L = new Map,
                        V = new Map,
                        O = {},
                        R = { ...S
                        };

                    function I() {
                        A && E && (N(), r(A, C, d.style, H.projection))
                    }

                    function N() {
                        t(H, C, S, T, d)
                    }

                    function j() {
                        M.notifyUpdate(S)
                    }

                    function $(e, t) {
                        let i = t.onChange(t => {
                                S[e] = t, d.onUpdate && iu.ZP.update(j, !1, !0)
                            }),
                            s = t.onRenderRequest(H.scheduleRender);
                        V.set(e, () => {
                            i(), s()
                        })
                    }
                    let {
                        willChange: _,
                        ...F
                    } = c(d);
                    for (let e in F) {
                        let t = F[e];
                        void 0 !== S[e] && D(t) && (t.set(S[e], !1), i2(_) && _.add(e))
                    }
                    let B = b(d),
                        U = v(d),
                        H = {
                            treeType: e,
                            current: null,
                            depth: h ? h.depth + 1 : 0,
                            parent: h,
                            children: new Set,
                            presenceId: p,
                            shouldReduceMotion: null,
                            variantChildren: U ? new Set : void 0,
                            isVisible: void 0,
                            manuallyAnimateOnMount: Boolean(null == h ? void 0 : h.isMounted()),
                            blockInitialAnimation: g,
                            isMounted: () => Boolean(A),
                            mount(e) {
                                E = !0, A = H.current = e, H.projection && H.projection.mount(e), U && h && !B && (P = null == h ? void 0 : h.addVariantChild(H)), L.forEach((e, t) => $(t, e)), sz.current || function() {
                                    if (sz.current = !0, x.j) {
                                        if (window.matchMedia) {
                                            let e = window.matchMedia("(prefers-reduced-motion)"),
                                                t = () => sq.current = e.matches;
                                            e.addListener(t), t()
                                        } else sq.current = !1
                                    }
                                }(), H.shouldReduceMotion = "never" !== w && ("always" === w || sq.current), null == h || h.children.add(H), H.setProps(d)
                            },
                            unmount() {
                                var e;
                                null === (e = H.projection) || void 0 === e || e.unmount(), iu.qY.update(j), iu.qY.render(I), V.forEach(e => e()), null == P || P(), null == h || h.children.delete(H), M.clearAllListeners(), A = void 0, E = !1
                            },
                            loadFeatures(e, t, i, s, n, r) {
                                let a = [];
                                "production" !== e4.O && i && t && (0, tl.k)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                                for (let t = 0; t < sK; t++) {
                                    let i = sY[t],
                                        {
                                            isEnabled: s,
                                            Component: n
                                        } = k[i];
                                    s(e) && n && a.push((0, l.createElement)(n, {
                                        key: i,
                                        ...e,
                                        visualElement: H
                                    }))
                                }
                                if (!H.projection && n) {
                                    H.projection = new n(s, H.getLatestValues(), h && h.projection);
                                    let {
                                        layoutId: t,
                                        layout: i,
                                        drag: a,
                                        dragConstraints: o,
                                        layoutScroll: l
                                    } = e;
                                    H.projection.setOptions({
                                        layoutId: t,
                                        layout: i,
                                        alwaysMeasureLayout: Boolean(a) || o && m(o),
                                        visualElement: H,
                                        scheduleRender: () => H.scheduleRender(),
                                        animationType: "string" == typeof i ? i : "both",
                                        initialPromotionConfig: r,
                                        layoutScroll: l
                                    })
                                }
                                return a
                            },
                            addVariantChild(e) {
                                var t;
                                let i = H.getClosestVariantNode();
                                if (i) return null === (t = i.variantChildren) || void 0 === t || t.add(e), () => i.variantChildren.delete(e)
                            },
                            sortNodePosition: t => u && e === t.treeType ? u(H.getInstance(), t.getInstance()) : 0,
                            getClosestVariantNode: () => U ? H : null == h ? void 0 : h.getClosestVariantNode(),
                            getLayoutId: () => d.layoutId,
                            getInstance: () => A,
                            getStaticValue: e => S[e],
                            setStaticValue: (e, t) => S[e] = t,
                            getLatestValues: () => S,
                            setVisibility(e) {
                                H.isVisible !== e && (H.isVisible = e, H.scheduleRender())
                            },
                            makeTargetAnimatable: (e, t = !0) => s(H, e, d, t),
                            measureViewportBox: () => n(A, d),
                            addValue(e, t) {
                                H.hasValue(e) && H.removeValue(e), L.set(e, t), S[e] = t.get(), $(e, t)
                            },
                            removeValue(e) {
                                var t;
                                L.delete(e), null === (t = V.get(e)) || void 0 === t || t(), V.delete(e), delete S[e], o(e, C)
                            },
                            hasValue: e => L.has(e),
                            getValue(e, t) {
                                let i = L.get(e);
                                return void 0 === i && void 0 !== t && (i = iZ(t), H.addValue(e, i)), i
                            },
                            forEachValue: e => L.forEach(e),
                            readValue: e => void 0 !== S[e] ? S[e] : a(A, e, T),
                            setBaseTarget(e, t) {
                                R[e] = t
                            },
                            getBaseTarget(e) {
                                if (i) {
                                    let t = i(d, e);
                                    if (void 0 !== t && !D(t)) return t
                                }
                                return R[e]
                            },
                            ...M,
                            build: () => (N(), C),
                            scheduleRender() {
                                iu.ZP.render(I, !1, !0)
                            },
                            syncRender: I,
                            setProps(e) {
                                (e.transformTemplate || d.transformTemplate) && H.scheduleRender(), d = e, M.updatePropListeners(e), O = function(e, t, i) {
                                    let {
                                        willChange: s
                                    } = t;
                                    for (let n in t) {
                                        let r = t[n],
                                            a = i[n];
                                        if (D(r)) e.addValue(n, r), i2(s) && s.add(n);
                                        else if (D(a)) e.addValue(n, iZ(r)), i2(s) && s.remove(n);
                                        else if (a !== r) {
                                            if (e.hasValue(n)) {
                                                let t = e.getValue(n);
                                                t.hasAnimated || t.set(r)
                                            } else {
                                                let t = e.getStaticValue(n);
                                                e.addValue(n, iZ(void 0 !== t ? t : r))
                                            }
                                        }
                                    }
                                    for (let s in i) void 0 === t[s] && e.removeValue(s);
                                    return t
                                }(H, c(d), O)
                            },
                            getProps: () => d,
                            getVariant: e => {
                                var t;
                                return null === (t = d.variants) || void 0 === t ? void 0 : t[e]
                            },
                            getDefaultTransition: () => d.transition,
                            getTransformPagePoint: () => d.transformPagePoint,
                            getVariantContext(e = !1) {
                                if (e) return null == h ? void 0 : h.getVariantContext();
                                if (!B) {
                                    let e = (null == h ? void 0 : h.getVariantContext()) || {};
                                    return void 0 !== d.initial && (e.initial = d.initial), e
                                }
                                let t = {};
                                for (let e = 0; e < sG; e++) {
                                    let i = sZ[e],
                                        s = d[i];
                                    (f(s) || !1 === s) && (t[i] = s)
                                }
                                return t
                            }
                        };
                    return H
                },
                sZ = ["initial", ...i9],
                sG = sZ.length;

            function sQ(e) {
                return "string" == typeof e && e.startsWith("var(--")
            }
            let sJ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function s0(e, t, i = 1) {
                (0, tl.k)(i <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                let [s, n] = function(e) {
                    let t = sJ.exec(e);
                    if (!t) return [, ];
                    let [, i, s] = t;
                    return [i, s]
                }(e);
                if (!s) return;
                let r = window.getComputedStyle(t).getPropertyValue(s);
                return r ? r.trim() : sQ(n) ? s0(n, t, i + 1) : n
            }
            let s1 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                s5 = e => s1.has(e),
                s2 = e => Object.keys(e).some(s5),
                s4 = (e, t) => {
                    e.set(t, !1), e.set(t)
                },
                s3 = e => e === et || e === G;
            (r = o || (o = {})).width = "width", r.height = "height", r.left = "left", r.right = "right", r.top = "top", r.bottom = "bottom";
            let s6 = (e, t) => parseFloat(e.split(", ")[t]),
                s9 = (e, t) => (i, {
                    transform: s
                }) => {
                    if ("none" === s || !s) return 0;
                    let n = s.match(/^matrix3d\((.+)\)$/);
                    if (n) return s6(n[1], t); {
                        let t = s.match(/^matrix\((.+)\)$/);
                        return t ? s6(t[1], e) : 0
                    }
                },
                s8 = new Set(["x", "y", "z"]),
                s7 = I.filter(e => !s8.has(e)),
                ne = {
                    width: ({
                        x: e
                    }, {
                        paddingLeft: t = "0",
                        paddingRight: i = "0"
                    }) => e.max - e.min - parseFloat(t) - parseFloat(i),
                    height: ({
                        y: e
                    }, {
                        paddingTop: t = "0",
                        paddingBottom: i = "0"
                    }) => e.max - e.min - parseFloat(t) - parseFloat(i),
                    top: (e, {
                        top: t
                    }) => parseFloat(t),
                    left: (e, {
                        left: t
                    }) => parseFloat(t),
                    bottom: ({
                        y: e
                    }, {
                        top: t
                    }) => parseFloat(t) + (e.max - e.min),
                    right: ({
                        x: e
                    }, {
                        left: t
                    }) => parseFloat(t) + (e.max - e.min),
                    x: s9(4, 13),
                    y: s9(5, 14)
                },
                nt = (e, t, i) => {
                    let s = t.measureViewportBox(),
                        n = t.getInstance(),
                        r = getComputedStyle(n),
                        {
                            display: a
                        } = r,
                        o = {};
                    "none" === a && t.setStaticValue("display", e.display || "block"), i.forEach(e => {
                        o[e] = ne[e](s, r)
                    }), t.syncRender();
                    let l = t.measureViewportBox();
                    return i.forEach(i => {
                        let s = t.getValue(i);
                        s4(s, o[i]), e[i] = ne[i](l, r)
                    }), e
                },
                ni = (e, t, i = {}, s = {}) => {
                    t = { ...t
                    }, s = { ...s
                    };
                    let n = Object.keys(t).filter(s5),
                        r = [],
                        a = !1,
                        o = [];
                    if (n.forEach(n => {
                            let l;
                            let u = e.getValue(n);
                            if (!e.hasValue(n)) return;
                            let c = i[n],
                                h = iJ(c),
                                d = t[n];
                            if (eE(d)) {
                                let e = d.length,
                                    t = null === d[0] ? 1 : 0;
                                h = iJ(c = d[t]);
                                for (let i = t; i < e; i++) l ? (0, tl.k)(iJ(d[i]) === l, "All keyframes must be of the same type") : (l = iJ(d[i]), (0, tl.k)(l === h || s3(h) && s3(l), "Keyframes must be of the same dimension as the current value"))
                            } else l = iJ(d);
                            if (h !== l) {
                                if (s3(h) && s3(l)) {
                                    let e = u.get();
                                    "string" == typeof e && u.set(parseFloat(e)), "string" == typeof d ? t[n] = parseFloat(d) : Array.isArray(d) && l === G && (t[n] = d.map(parseFloat))
                                } else(null == h ? void 0 : h.transform) && (null == l ? void 0 : l.transform) && (0 === c || 0 === d) ? 0 === c ? u.set(l.transform(c)) : t[n] = h.transform(d) : (a || (r = function(e) {
                                    let t = [];
                                    return s7.forEach(i => {
                                        let s = e.getValue(i);
                                        void 0 !== s && (t.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0))
                                    }), t.length && e.syncRender(), t
                                }(e), a = !0), o.push(n), s[n] = void 0 !== s[n] ? s[n] : t[n], s4(u, d))
                            }
                        }), !o.length) return {
                        target: t,
                        transitionEnd: s
                    }; {
                        let i = o.indexOf("height") >= 0 ? window.pageYOffset : null,
                            n = nt(t, e, o);
                        return r.length && r.forEach(([t, i]) => {
                            e.getValue(t).set(i)
                        }), e.syncRender(), x.j && null !== i && window.scrollTo({
                            top: i
                        }), {
                            target: n,
                            transitionEnd: s
                        }
                    }
                },
                ns = (e, t, i, s) => {
                    var n, r;
                    let a = function(e, { ...t
                    }, i) {
                        let s = e.getInstance();
                        if (!(s instanceof Element)) return {
                            target: t,
                            transitionEnd: i
                        };
                        for (let n in i && (i = { ...i
                            }), e.forEachValue(e => {
                                let t = e.get();
                                if (!sQ(t)) return;
                                let i = s0(t, s);
                                i && e.set(i)
                            }), t) {
                            let e = t[n];
                            if (!sQ(e)) continue;
                            let r = s0(e, s);
                            r && (t[n] = r, i && void 0 === i[n] && (i[n] = e))
                        }
                        return {
                            target: t,
                            transitionEnd: i
                        }
                    }(e, t, s);
                    return t = a.target, s = a.transitionEnd, n = t, r = s, s2(n) ? ni(e, n, i, r) : {
                        target: n,
                        transitionEnd: r
                    }
                },
                nn = {
                    treeType: "dom",
                    readValueFromInstance(e, t) {
                        if (N.has(t)) {
                            let e = iN(t);
                            return e && e.default || 0
                        } {
                            let i = window.getComputedStyle(e),
                                s = (F(t) ? i.getPropertyValue(t) : i[t]) || 0;
                            return "string" == typeof s ? s.trim() : s
                        }
                    },
                    sortNodePosition: (e, t) => 2 & e.compareDocumentPosition(t) ? 1 : -1,
                    getBaseTarget(e, t) {
                        var i;
                        return null === (i = e.style) || void 0 === i ? void 0 : i[t]
                    },
                    measureViewportBox: (e, {
                        transformPagePoint: t
                    }) => s_(e, t),
                    resetTransform(e, t, i) {
                        let {
                            transformTemplate: s
                        } = i;
                        t.style.transform = s ? s({}, "") : "none", e.scheduleRender()
                    },
                    restoreTransform(e, t) {
                        e.style.transform = t.style.transform
                    },
                    removeValueFromRenderState(e, {
                        vars: t,
                        style: i
                    }) {
                        delete t[e], delete i[e]
                    },
                    makeTargetAnimatable(e, {
                        transition: t,
                        transitionEnd: i,
                        ...s
                    }, {
                        transformValues: n
                    }, r = !0) {
                        let a = function(e, t, i) {
                            var s;
                            let n = {};
                            for (let r in e) {
                                let e = function(e, t) {
                                    if (!t) return;
                                    let i = t[e] || t.default || t;
                                    return i.from
                                }(r, t);
                                n[r] = void 0 !== e ? e : null === (s = i.getValue(r)) || void 0 === s ? void 0 : s.get()
                            }
                            return n
                        }(s, t || {}, e);
                        if (n && (i && (i = n(i)), s && (s = n(s)), a && (a = n(a))), r) {
                            ! function(e, t, i) {
                                var s, n;
                                let r = Object.keys(t).filter(t => !e.hasValue(t)),
                                    a = r.length;
                                if (a)
                                    for (let o = 0; o < a; o++) {
                                        let a = r[o],
                                            l = t[a],
                                            u = null;
                                        Array.isArray(l) && (u = l[0]), null === u && (u = null !== (n = null !== (s = i[a]) && void 0 !== s ? s : e.readValue(a)) && void 0 !== n ? n : t[a]), null != u && ("string" == typeof u && (iH(u) || iq(u)) ? u = parseFloat(u) : !i1(u) && t_.test(l) && (u = ij(a, l)), e.addValue(a, iZ(u)), void 0 === i[a] && (i[a] = u), e.setBaseTarget(a, u))
                                    }
                            }(e, s, a);
                            let t = ns(e, s, a, i);
                            i = t.transitionEnd, s = t.target
                        }
                        return {
                            transition: t,
                            transitionEnd: i,
                            ...s
                        }
                    },
                    scrapeMotionValuesFromProps: ex,
                    build(e, t, i, s, n) {
                        void 0 !== e.isVisible && (t.style.visibility = e.isVisible ? "visible" : "hidden"), ea(t, i, s, n.transformTemplate)
                    },
                    render: ew
                },
                nr = sX(nn),
                na = sX({ ...nn,
                    getBaseTarget: (e, t) => e[t],
                    readValueFromInstance(e, t) {
                        var i;
                        return N.has(t) ? (null === (i = iN(t)) || void 0 === i ? void 0 : i.default) || 0 : (t = eT.has(t) ? t : ev(t), e.getAttribute(t))
                    },
                    scrapeMotionValuesFromProps: eA,
                    build(e, t, i, s, n) {
                        eg(t, i, s, n.transformTemplate)
                    },
                    render: ek
                }),
                no = (e, t) => O(e) ? na(t, {
                    enableHardwareAcceleration: !1
                }) : nr(t, {
                    enableHardwareAcceleration: !0
                });

            function nl(e, t) {
                return t.max === t.min ? 0 : e / (t.max - t.min) * 100
            }
            let nu = {
                    correct: (e, t) => {
                        if (!t.target) return e;
                        if ("string" == typeof e) {
                            if (!G.test(e)) return e;
                            e = parseFloat(e)
                        }
                        let i = nl(e, t.target.x),
                            s = nl(e, t.target.y);
                        return `${i}% ${s}%`
                    }
                },
                nc = "_$css",
                nh = {
                    correct: (e, {
                        treeScale: t,
                        projectionDelta: i
                    }) => {
                        let s = e,
                            n = e.includes("var("),
                            r = [];
                        n && (e = e.replace(sJ, e => (r.push(e), nc)));
                        let a = t_.parse(e);
                        if (a.length > 5) return s;
                        let o = t_.createTransformer(e),
                            l = "number" != typeof a[0] ? 1 : 0,
                            u = i.x.scale * t.x,
                            c = i.y.scale * t.y;
                        a[0 + l] /= u, a[1 + l] /= c;
                        let h = ty(u, c, .5);
                        "number" == typeof a[2 + l] && (a[2 + l] /= h), "number" == typeof a[3 + l] && (a[3 + l] /= h);
                        let d = o(a);
                        if (n) {
                            let e = 0;
                            d = d.replace(nc, () => {
                                let t = r[e];
                                return e++, t
                            })
                        }
                        return d
                    }
                };
            class nd extends l.Component {
                componentDidMount() {
                    let {
                        visualElement: e,
                        layoutGroup: t,
                        switchLayoutGroup: i,
                        layoutId: s
                    } = this.props, {
                        projection: n
                    } = e;
                    Object.assign(R, np), n && (t.group && t.group.add(n), i && i.register && s && i.register(n), n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), n.setOptions({ ...n.options,
                        onExitComplete: () => this.safeToRemove()
                    })), P.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(e) {
                    let {
                        layoutDependency: t,
                        visualElement: i,
                        drag: s,
                        isPresent: n
                    } = this.props, r = i.projection;
                    return r && (r.isPresent = n, s || e.layoutDependency !== t || void 0 === t ? r.willUpdate() : this.safeToRemove(), e.isPresent === n || (n ? r.promote() : r.relegate() || iu.ZP.postRender(() => {
                        var e;
                        (null === (e = r.getStack()) || void 0 === e ? void 0 : e.members.length) || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: e
                    } = this.props.visualElement;
                    e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
                }
                componentWillUnmount() {
                    let {
                        visualElement: e,
                        layoutGroup: t,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: s
                    } = e;
                    s && (s.scheduleCheckAfterUnmount(), (null == t ? void 0 : t.group) && t.group.remove(s), (null == i ? void 0 : i.deregister) && i.deregister(s))
                }
                safeToRemove() {
                    let {
                        safeToRemove: e
                    } = this.props;
                    null == e || e()
                }
                render() {
                    return null
                }
            }
            let np = {
                    borderRadius: { ...nu,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: nu,
                    borderTopRightRadius: nu,
                    borderBottomLeftRadius: nu,
                    borderBottomRightRadius: nu,
                    boxShadow: nh
                },
                nm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                nf = nm.length,
                ng = e => "string" == typeof e ? parseFloat(e) : e,
                ny = e => "number" == typeof e || G.test(e);

            function nb(e, t) {
                var i;
                return null !== (i = e[t]) && void 0 !== i ? i : e.borderRadius
            }
            let nv = nT(0, .5, t4),
                nw = nT(.5, .95, tJ);

            function nT(e, t, i) {
                return s => s < e ? 0 : s > t ? 1 : i(tg(e, t, s))
            }

            function nk(e, t) {
                e.min = t.min, e.max = t.max
            }

            function nx(e, t) {
                nk(e.x, t.x), nk(e.y, t.y)
            }

            function nA(e, t, i, s, n) {
                return e -= t, e = s + 1 / i * (e - s), void 0 !== n && (e = s + 1 / n * (e - s)), e
            }

            function nP(e, t, [i, s, n], r, a) {
                ! function(e, t = 0, i = 1, s = .5, n, r = e, a = e) {
                    if (Z.test(t)) {
                        t = parseFloat(t);
                        let e = ty(a.min, a.max, t / 100);
                        t = e - a.min
                    }
                    if ("number" != typeof t) return;
                    let o = ty(r.min, r.max, s);
                    e === r && (o -= t), e.min = nA(e.min, t, i, o, n), e.max = nA(e.max, t, i, o, n)
                }(e, t[i], t[s], t[n], t.scale, r, a)
            }
            let nE = ["x", "scaleX", "originX"],
                nS = ["y", "scaleY", "originY"];

            function nC(e, t, i, s) {
                nP(e.x, t, nE, null == i ? void 0 : i.x, null == s ? void 0 : s.x), nP(e.y, t, nS, null == i ? void 0 : i.y, null == s ? void 0 : s.y)
            }

            function nM(e) {
                return 0 === e.translate && 1 === e.scale
            }

            function nL(e) {
                return nM(e.x) && nM(e.y)
            }

            function nV(e, t) {
                return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
            }

            function nO(e) {
                return sh(e.x) / sh(e.y)
            }
            class nR {
                constructor() {
                    this.members = []
                }
                add(e) {
                    iz(this.members, e), e.scheduleRender()
                }
                remove(e) {
                    if (iW(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                        let e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }
                relegate(e) {
                    let t;
                    let i = this.members.findIndex(t => e === t);
                    if (0 === i) return !1;
                    for (let e = i; e >= 0; e--) {
                        let i = this.members[e];
                        if (!1 !== i.isPresent) {
                            t = i;
                            break
                        }
                    }
                    return !!t && (this.promote(t), !0)
                }
                promote(e, t) {
                    var i;
                    let s = this.lead;
                    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
                        s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, t && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues, e.snapshot.isShared = !0), (null === (i = e.root) || void 0 === i ? void 0 : i.isUpdating) && (e.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = e.options;
                        !1 === n && s.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(e => {
                        var t, i, s, n, r;
                        null === (i = (t = e.options).onExitComplete) || void 0 === i || i.call(t), null === (r = null === (s = e.resumingFrom) || void 0 === s ? void 0 : (n = s.options).onExitComplete) || void 0 === r || r.call(n)
                    })
                }
                scheduleRender() {
                    this.members.forEach(e => {
                        e.instance && e.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function nI(e, t, i) {
                let s = e.x.translate / t.x,
                    n = e.y.translate / t.y,
                    r = `translate3d(${s}px, ${n}px, 0) `;
                if (r += `scale(${1/t.x}, ${1/t.y}) `, i) {
                    let {
                        rotate: e,
                        rotateX: t,
                        rotateY: s
                    } = i;
                    e && (r += `rotate(${e}deg) `), t && (r += `rotateX(${t}deg) `), s && (r += `rotateY(${s}deg) `)
                }
                let a = e.x.scale * t.x,
                    o = e.y.scale * t.y;
                return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" == (r += `scale(${a}, ${o})`) ? "none" : r
            }
            let nN = (e, t) => e.depth - t.depth;
            class nj {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(e) {
                    iz(this.children, e), this.isDirty = !0
                }
                remove(e) {
                    iW(this.children, e), this.isDirty = !0
                }
                forEach(e) {
                    this.isDirty && this.children.sort(nN), this.isDirty = !1, this.children.forEach(e)
                }
            }
            let nD = ["", "X", "Y", "Z"];

            function n$({
                attachResizeListener: e,
                defaultParent: t,
                measureScroll: i,
                checkIsScrollRoot: s,
                resetTransform: n
            }) {
                return class {
                    constructor(e, i = {}, s = null == t ? void 0 : t()) {
                        this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.nodes.forEach(nz), this.nodes.forEach(nW)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = e, this.latestValues = i, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
                        for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new nj)
                    }
                    addEventListener(e, t) {
                        return this.eventHandlers.has(e) || this.eventHandlers.set(e, new iY), this.eventHandlers.get(e).add(t)
                    }
                    notifyListeners(e, ...t) {
                        let i = this.eventHandlers.get(e);
                        null == i || i.notify(...t)
                    }
                    hasListeners(e) {
                        return this.eventHandlers.has(e)
                    }
                    registerPotentialNode(e, t) {
                        this.potentialNodes.set(e, t)
                    }
                    mount(t, i = !1) {
                        var s;
                        if (this.instance) return;
                        this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: a
                        } = this.options;
                        if (a && !a.getInstance() && a.mount(t), this.root.nodes.add(this), null === (s = this.parent) || void 0 === s || s.children.add(this), this.id && this.root.potentialNodes.delete(this.id), i && (r || n) && (this.isLayoutDirty = !0), e) {
                            let i;
                            let s = () => this.root.updateBlockedByResize = !1;
                            e(t, () => {
                                this.root.updateBlockedByResize = !0, clearTimeout(i), i = window.setTimeout(s, 250), P.hasAnimatedSinceResize && (P.hasAnimatedSinceResize = !1, this.nodes.forEach(nq))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && a && (n || r) && this.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: t,
                            hasRelativeTargetChanged: i,
                            layout: s
                        }) => {
                            var n, r, o, l, u;
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let c = null !== (r = null !== (n = this.options.transition) && void 0 !== n ? n : a.getDefaultTransition()) && void 0 !== r ? r : nQ,
                                {
                                    onLayoutAnimationStart: h,
                                    onLayoutAnimationComplete: d
                                } = a.getProps(),
                                p = !this.targetLayout || !nV(this.targetLayout, s) || i,
                                m = !t && i;
                            if ((null === (o = this.resumeFrom) || void 0 === o ? void 0 : o.instance) || m || t && (p || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, m);
                                let t = { ...iB(c, "layout"),
                                    onPlay: h,
                                    onComplete: d
                                };
                                a.shouldReduceMotion && (t.delay = 0, t.type = !1), this.startAnimation(t)
                            } else t || 0 !== this.animationProgress || this.finishAnimation(), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
                            this.targetLayout = s
                        })
                    }
                    unmount() {
                        var e, t;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (e = this.getStack()) || void 0 === e || e.remove(this), null === (t = this.parent) || void 0 === t || t.children.delete(this), this.instance = void 0, iu.qY.preRender(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        var e;
                        return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
                    }
                    startUpdate() {
                        var e;
                        this.isUpdateBlocked() || (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(nY))
                    }
                    willUpdate(e = !0) {
                        var t, i, s;
                        if (this.root.isUpdateBlocked()) {
                            null === (i = (t = this.options).onExitComplete) || void 0 === i || i.call(t);
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let e = 0; e < this.path.length; e++) {
                            let t = this.path[e];
                            t.shouldResetTransform = !0, t.updateScroll()
                        }
                        let {
                            layoutId: n,
                            layout: r
                        } = this.options;
                        if (void 0 === n && !r) return;
                        let a = null === (s = this.options.visualElement) || void 0 === s ? void 0 : s.getProps().transformTemplate;
                        this.prevTransformTemplateValue = null == a ? void 0 : a(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate")
                    }
                    didUpdate() {
                        let e = this.isUpdateBlocked();
                        if (e) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nU);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(nJ), this.potentialNodes.clear()), this.nodes.forEach(nH), this.nodes.forEach(n_), this.nodes.forEach(nF), this.clearAllSnapshots(), iu.iW.update(), iu.iW.preRender(), iu.iW.render())
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(nB), this.sharedNodes.forEach(nK)
                    }
                    scheduleUpdateProjection() {
                        iu.ZP.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        iu.ZP.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        if (this.snapshot || !this.instance) return;
                        let e = this.measure(),
                            t = this.removeTransform(this.removeElementScroll(e));
                        n1(t), this.snapshot = {
                            measured: e,
                            layout: t,
                            latestValues: {}
                        }
                    }
                    updateLayout() {
                        var e;
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let e = 0; e < this.path.length; e++) {
                                let t = this.path[e];
                                t.updateScroll()
                            }
                        let t = this.measure();
                        n1(t);
                        let i = this.layout;
                        this.layout = {
                            measured: t,
                            actual: this.removeElementScroll(t)
                        }, this.layoutCorrected = sP(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (e = this.options.visualElement) || void 0 === e || e.notifyLayoutMeasure(this.layout.actual, null == i ? void 0 : i.actual)
                    }
                    updateScroll() {
                        this.options.layoutScroll && this.instance && (this.isScrollRoot = s(this.instance), this.scroll = i(this.instance))
                    }
                    resetTransform() {
                        var e;
                        if (!n) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            i = this.projectionDelta && !nL(this.projectionDelta),
                            s = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate,
                            r = null == s ? void 0 : s(this.latestValues, ""),
                            a = r !== this.prevTransformTemplateValue;
                        t && (i || sL(this.latestValues) || a) && (n(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return sP();
                        let t = e.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (sI(t.x, i.x), sI(t.y, i.y)), t
                    }
                    removeElementScroll(e) {
                        let t = sP();
                        nx(t, e);
                        for (let i = 0; i < this.path.length; i++) {
                            let s = this.path[i],
                                {
                                    scroll: n,
                                    options: r,
                                    isScrollRoot: a
                                } = s;
                            if (s !== this.root && n && r.layoutScroll) {
                                if (a) {
                                    nx(t, e);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && (sI(t.x, -i.x), sI(t.y, -i.y))
                                }
                                sI(t.x, n.x), sI(t.y, n.y)
                            }
                        }
                        return t
                    }
                    applyTransform(e, t = !1) {
                        let i = sP();
                        nx(i, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let s = this.path[e];
                            !t && s.options.layoutScroll && s.scroll && s !== s.root && s$(i, {
                                x: -s.scroll.x,
                                y: -s.scroll.y
                            }), sL(s.latestValues) && s$(i, s.latestValues)
                        }
                        return sL(this.latestValues) && s$(i, this.latestValues), i
                    }
                    removeTransform(e) {
                        var t;
                        let i = sP();
                        nx(i, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let s = this.path[e];
                            if (!s.instance || !sL(s.latestValues)) continue;
                            sM(s.latestValues) && s.updateSnapshot();
                            let n = sP(),
                                r = s.measure();
                            nx(n, r), nC(i, s.latestValues, null === (t = s.snapshot) || void 0 === t ? void 0 : t.layout, n)
                        }
                        return sL(this.latestValues) && nC(i, this.latestValues), i
                    }
                    setTargetDelta(e) {
                        this.targetDelta = e, this.root.scheduleUpdateProjection()
                    }
                    setOptions(e) {
                        this.options = { ...this.options,
                            ...e,
                            crossfade: void 0 === e.crossfade || e.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    resolveTargetDelta() {
                        var e, t, i, s;
                        let {
                            layout: n,
                            layoutId: r
                        } = this.options;
                        this.layout && (n || r) && (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = sP(), this.relativeTargetOrigin = sP(), sy(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), nx(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && ((this.target || (this.target = sP(), this.targetWithTransforms = sP()), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target)) ? (t = this.target, i = this.relativeTarget, s = this.relativeParent.target, sf(t.x, i.x, s.x), sf(t.y, i.y, s.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : nx(this.target, this.layout.actual), sR(this.target, this.targetDelta)) : nx(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = sP(), this.relativeTargetOrigin = sP(), sy(this.relativeTargetOrigin, this.target, this.relativeParent.target), nx(this.relativeTarget, this.relativeTargetOrigin)))))
                    }
                    getClosestProjectingParent() {
                        if (!(!this.parent || sL(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    calcProjection() {
                        var e;
                        let {
                            layout: t,
                            layoutId: i
                        } = this.options;
                        if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(t || i)) return;
                        let s = this.getLead();
                        nx(this.layoutCorrected, this.layout.actual),
                            function(e, t, i, s = !1) {
                                var n, r;
                                let a, o;
                                let l = i.length;
                                if (l) {
                                    t.x = t.y = 1;
                                    for (let u = 0; u < l; u++) o = (a = i[u]).projectionDelta, (null === (r = null === (n = a.instance) || void 0 === n ? void 0 : n.style) || void 0 === r ? void 0 : r.display) !== "contents" && (s && a.options.layoutScroll && a.scroll && a !== a.root && s$(e, {
                                        x: -a.scroll.x,
                                        y: -a.scroll.y
                                    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, sR(e, o)), s && sL(a.latestValues) && s$(e, a.latestValues))
                                }
                            }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== s);
                        let {
                            target: n
                        } = s;
                        if (!n) return;
                        this.projectionDelta || (this.projectionDelta = sx(), this.projectionDeltaWithTransform = sx());
                        let r = this.treeScale.x,
                            a = this.treeScale.y,
                            o = this.projectionTransform;
                        sm(this.projectionDelta, this.layoutCorrected, n, this.latestValues), this.projectionTransform = nI(this.projectionDelta, this.treeScale), (this.projectionTransform !== o || this.treeScale.x !== r || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", n))
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(e = !0) {
                        var t, i, s;
                        null === (i = (t = this.options).scheduleRender) || void 0 === i || i.call(t), e && (null === (s = this.getStack()) || void 0 === s || s.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(e, t = !1) {
                        var i;
                        let s = this.snapshot,
                            n = (null == s ? void 0 : s.latestValues) || {},
                            r = { ...this.latestValues
                            },
                            a = sx();
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !t;
                        let o = sP(),
                            l = null == s ? void 0 : s.isShared,
                            u = 1 >= ((null === (i = this.getStack()) || void 0 === i ? void 0 : i.members.length) || 0),
                            c = Boolean(l && !u && !0 === this.options.crossfade && !this.path.some(nG));
                        this.animationProgress = 0, this.mixTargetDelta = t => {
                            var i, s, h;
                            let d = t / 1e3;
                            nX(a.x, e.x, d), nX(a.y, e.y, d), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (i = this.relativeParent) || void 0 === i ? void 0 : i.layout) && (sy(o, this.layout.actual, this.relativeParent.layout.actual), s = this.relativeTarget, h = this.relativeTargetOrigin, nZ(s.x, h.x, o.x, d), nZ(s.y, h.y, o.y, d)), l && (this.animationValues = r, function(e, t, i, s, n, r) {
                                var a, o, l, u;
                                n ? (e.opacity = ty(0, null !== (a = i.opacity) && void 0 !== a ? a : 1, nv(s)), e.opacityExit = ty(null !== (o = t.opacity) && void 0 !== o ? o : 1, 0, nw(s))) : r && (e.opacity = ty(null !== (l = t.opacity) && void 0 !== l ? l : 1, null !== (u = i.opacity) && void 0 !== u ? u : 1, s));
                                for (let n = 0; n < nf; n++) {
                                    let r = `border${nm[n]}Radius`,
                                        a = nb(t, r),
                                        o = nb(i, r);
                                    if (void 0 === a && void 0 === o) continue;
                                    a || (a = 0), o || (o = 0);
                                    let l = 0 === a || 0 === o || ny(a) === ny(o);
                                    l ? (e[r] = Math.max(ty(ng(a), ng(o), s), 0), (Z.test(o) || Z.test(a)) && (e[r] += "%")) : e[r] = o
                                }(t.rotate || i.rotate) && (e.rotate = ty(t.rotate || 0, i.rotate || 0, s))
                            }(r, n, this.latestValues, d, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = d
                        }, this.mixTargetDelta(0)
                    }
                    startAnimation(e) {
                        var t, i;
                        this.notifyListeners("animationStart"), null === (t = this.currentAnimation) || void 0 === t || t.stop(), this.resumingFrom && (null === (i = this.resumingFrom.currentAnimation) || void 0 === i || i.stop()), this.pendingAnimation && (iu.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = iu.ZP.update(() => {
                            P.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, i = {}) {
                                let s = D(e) ? e : iZ(e);
                                return iU("", s, 1e3, i), {
                                    stop: () => s.stop(),
                                    isAnimating: () => s.isAnimating()
                                }
                            }(0, 0, { ...e,
                                onUpdate: t => {
                                    var i;
                                    this.mixTargetDelta(t), null === (i = e.onUpdate) || void 0 === i || i.call(e, t)
                                },
                                onComplete: () => {
                                    var t;
                                    null === (t = e.onComplete) || void 0 === t || t.call(e), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        var e;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        var e;
                        this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let e = this.getLead(),
                            {
                                targetWithTransforms: t,
                                target: i,
                                layout: s,
                                latestValues: n
                            } = e;
                        if (t && i && s) {
                            if (this !== e && this.layout && s && n5(this.options.animationType, this.layout.actual, s.actual)) {
                                i = this.target || sP();
                                let t = sh(this.layout.actual.x);
                                i.x.min = e.target.x.min, i.x.max = i.x.min + t;
                                let s = sh(this.layout.actual.y);
                                i.y.min = e.target.y.min, i.y.max = i.y.min + s
                            }
                            nx(t, i), s$(t, n), sm(this.projectionDeltaWithTransform, this.layoutCorrected, t, n)
                        }
                    }
                    registerSharedNode(e, t) {
                        var i, s, n;
                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new nR);
                        let r = this.sharedNodes.get(e);
                        r.add(t), t.promote({
                            transition: null === (i = t.options.initialPromotionConfig) || void 0 === i ? void 0 : i.transition,
                            preserveFollowOpacity: null === (n = null === (s = t.options.initialPromotionConfig) || void 0 === s ? void 0 : s.shouldPreserveFollowOpacity) || void 0 === n ? void 0 : n.call(s, t)
                        })
                    }
                    isLead() {
                        let e = this.getStack();
                        return !e || e.lead === this
                    }
                    getLead() {
                        var e;
                        let {
                            layoutId: t
                        } = this.options;
                        return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                    }
                    getPrevLead() {
                        var e;
                        let {
                            layoutId: t
                        } = this.options;
                        return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: e
                        } = this.options;
                        if (e) return this.root.sharedNodes.get(e)
                    }
                    promote({
                        needsReset: e,
                        transition: t,
                        preserveFollowOpacity: i
                    } = {}) {
                        let s = this.getStack();
                        s && s.promote(this, i), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
                            transition: t
                        })
                    }
                    relegate() {
                        let e = this.getStack();
                        return !!e && e.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return;
                        let t = !1,
                            i = {};
                        for (let s = 0; s < nD.length; s++) {
                            let n = nD[s],
                                r = "rotate" + n;
                            e.getStaticValue(r) && (t = !0, i[r] = e.getStaticValue(r), e.setStaticValue(r, 0))
                        }
                        if (t) {
                            for (let t in null == e || e.syncRender(), i) e.setStaticValue(t, i[t]);
                            e.scheduleRender()
                        }
                    }
                    getProjectionStyles(e = {}) {
                        var t, i, s;
                        let n = {};
                        if (!this.instance || this.isSVG) return n;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        n.visibility = "";
                        let r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = eM(e.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                        let a = this.getLead();
                        if (!this.projectionDelta || !this.layout || !a.target) {
                            let t = {};
                            return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = eM(e.pointerEvents) || ""), this.hasProjected && !sL(this.latestValues) && (t.transform = r ? r({}, "") : "none", this.hasProjected = !1), t
                        }
                        let o = a.animationValues || a.latestValues;
                        this.applyTransformsToTarget(), n.transform = nI(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                        let {
                            x: l,
                            y: u
                        } = this.projectionDelta;
                        for (let e in n.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, a.animationValues ? n.opacity = a === this ? null !== (s = null !== (i = o.opacity) && void 0 !== i ? i : this.latestValues.opacity) && void 0 !== s ? s : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = a === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, R) {
                            if (void 0 === o[e]) continue;
                            let {
                                correct: t,
                                applyTo: i
                            } = R[e], s = t(o[e], a);
                            if (i) {
                                let e = i.length;
                                for (let t = 0; t < e; t++) n[i[t]] = s
                            } else n[e] = s
                        }
                        return this.options.layoutId && (n.pointerEvents = a === this ? eM(e.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(e => {
                            var t;
                            return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                        }), this.root.nodes.forEach(nU), this.root.sharedNodes.clear()
                    }
                }
            }

            function n_(e) {
                e.updateLayout()
            }

            function nF(e) {
                var t, i, s;
                let n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
                if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
                    let {
                        actual: t,
                        measured: i
                    } = e.layout, {
                        animationType: s
                    } = e.options;
                    "size" === s ? sE(e => {
                        let i = n.isShared ? n.measured[e] : n.layout[e],
                            s = sh(i);
                        i.min = t[e].min, i.max = i.min + s
                    }) : n5(s, n.layout, t) && sE(e => {
                        let i = n.isShared ? n.measured[e] : n.layout[e],
                            s = sh(t[e]);
                        i.max = i.min + s
                    });
                    let r = sx();
                    sm(r, t, n.layout);
                    let a = sx();
                    n.isShared ? sm(a, e.applyTransform(i, !0), n.measured) : sm(a, t, n.layout);
                    let o = !nL(r),
                        l = !1;
                    if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(), e.relativeParent && !e.relativeParent.resumeFrom)) {
                        let {
                            snapshot: i,
                            layout: s
                        } = e.relativeParent;
                        if (i && s) {
                            let e = sP();
                            sy(e, n.layout, i.layout);
                            let r = sP();
                            sy(r, t, s.actual), nV(e, r) || (l = !0)
                        }
                    }
                    e.notifyListeners("didUpdate", {
                        layout: t,
                        snapshot: n,
                        delta: a,
                        layoutDelta: r,
                        hasLayoutChanged: o,
                        hasRelativeTargetChanged: l
                    })
                } else e.isLead() && (null === (s = (i = e.options).onExitComplete) || void 0 === s || s.call(i));
                e.options.transition = void 0
            }

            function nB(e) {
                e.clearSnapshot()
            }

            function nU(e) {
                e.clearMeasurements()
            }

            function nH(e) {
                let {
                    visualElement: t
                } = e.options;
                (null == t ? void 0 : t.getProps().onBeforeLayoutMeasure) && t.notifyBeforeLayoutMeasure(), e.resetTransform()
            }

            function nq(e) {
                e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
            }

            function nz(e) {
                e.resolveTargetDelta()
            }

            function nW(e) {
                e.calcProjection()
            }

            function nY(e) {
                e.resetRotation()
            }

            function nK(e) {
                e.removeLeadSnapshot()
            }

            function nX(e, t, i) {
                e.translate = ty(t.translate, 0, i), e.scale = ty(t.scale, 1, i), e.origin = t.origin, e.originPoint = t.originPoint
            }

            function nZ(e, t, i, s) {
                e.min = ty(t.min, i.min, s), e.max = ty(t.max, i.max, s)
            }

            function nG(e) {
                return e.animationValues && void 0 !== e.animationValues.opacityExit
            }
            let nQ = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function nJ(e, t) {
                let i = e.root;
                for (let t = e.path.length - 1; t >= 0; t--)
                    if (Boolean(e.path[t].instance)) {
                        i = e.path[t];
                        break
                    }
                let s = i && i !== e.root ? i.instance : document,
                    n = s.querySelector(`[data-projection-id="${t}"]`);
                n && e.mount(n, !0)
            }

            function n0(e) {
                e.min = Math.round(e.min), e.max = Math.round(e.max)
            }

            function n1(e) {
                n0(e.x), n0(e.y)
            }

            function n5(e, t, i) {
                return "position" === e || "preserve-aspect" === e && ! function(e, t, i = .01) {
                    return sr(e, t) <= i
                }(nO(t), nO(i))
            }
            let n2 = n$({
                    attachResizeListener: (e, t) => eR(e, "resize", t),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                n4 = {
                    current: void 0
                },
                n3 = n$({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent: () => {
                        if (!n4.current) {
                            let e = new n2(0, {});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), n4.current = e
                        }
                        return n4.current
                    },
                    resetTransform: (e, t) => {
                        e.style.transform = void 0 !== t ? t : "none"
                    },
                    checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
                }),
                n6 = { ...st,
                    ...tn,
                    ...sH,
                    measureLayout: function(e) {
                        let [t, i] = tr(), s = (0, l.useContext)(S.p);
                        return l.createElement(nd, { ...e,
                            layoutGroup: s,
                            switchLayoutGroup: (0, l.useContext)(M),
                            isPresent: t,
                            safeToRemove: i
                        })
                    }
                },
                n9 = function(e) {
                    function t(t, i = {}) {
                        return function({
                            preloadedFeatures: e,
                            createVisualElement: t,
                            projectionNodeConstructor: i,
                            useRender: s,
                            useVisualState: n,
                            Component: r
                        }) {
                            e && function(e) {
                                for (let t in e) "projectionNodeConstructor" === t ? k.projectionNodeConstructor = e[t] : k[t].Component = e[t]
                            }(e);
                            let a = (0, l.forwardRef)(function(a, o) {
                                var g, y;
                                let v = { ...(0, l.useContext)(u),
                                        ...a,
                                        layoutId: function({
                                            layoutId: e
                                        }) {
                                            let t = (0, l.useContext)(S.p).id;
                                            return t && void 0 !== e ? t + "-" + e : e
                                        }(a)
                                    },
                                    {
                                        isStatic: T
                                    } = v,
                                    L = null,
                                    V = function(e) {
                                        let {
                                            initial: t,
                                            animate: i
                                        } = function(e, t) {
                                            if (b(e)) {
                                                let {
                                                    initial: t,
                                                    animate: i
                                                } = e;
                                                return {
                                                    initial: !1 === t || f(t) ? t : void 0,
                                                    animate: f(i) ? i : void 0
                                                }
                                            }
                                            return !1 !== e.inherit ? t : {}
                                        }(e, (0, l.useContext)(c));
                                        return (0, l.useMemo)(() => ({
                                            initial: t,
                                            animate: i
                                        }), [w(t), w(i)])
                                    }(a),
                                    O = T ? void 0 : (0, A.h)(() => {
                                        if (P.hasEverUpdated) return E++
                                    }),
                                    R = n(a, T);
                                if (!T && x.j) {
                                    V.visualElement = function(e, t, i, s) {
                                        let n = (0, l.useContext)(c).visualElement,
                                            r = (0, l.useContext)(p),
                                            a = (0, l.useContext)(h.O),
                                            o = (0, l.useContext)(u).reducedMotion,
                                            m = (0, l.useRef)(void 0);
                                        s = s || r.renderer, !m.current && s && (m.current = s(e, {
                                            visualState: t,
                                            parent: n,
                                            props: i,
                                            presenceId: a ? a.id : void 0,
                                            blockInitialAnimation: !!a && !1 === a.initial,
                                            reducedMotionConfig: o
                                        }));
                                        let f = m.current;
                                        return (0, d.L)(() => {
                                            f && f.syncRender()
                                        }), (0, l.useEffect)(() => {
                                            f && f.animationState && f.animationState.animateChanges()
                                        }), (0, d.L)(() => () => f && f.notifyUnmount(), []), f
                                    }(r, R, v, t);
                                    let s = (0, l.useContext)(p).strict,
                                        n = (0, l.useContext)(M);
                                    V.visualElement && (L = V.visualElement.loadFeatures(v, s, e, O, i || k.projectionNodeConstructor, n))
                                }
                                return l.createElement(C, {
                                    visualElement: V.visualElement,
                                    props: v
                                }, L, l.createElement(c.Provider, {
                                    value: V
                                }, s(r, a, O, (g = V.visualElement, y = o, (0, l.useCallback)(e => {
                                    e && R.mount && R.mount(e), g && (e ? g.mount(e) : g.unmount()), y && ("function" == typeof y ? y(e) : m(y) && (y.current = e))
                                }, [g])), R, T, V.visualElement)))
                            });
                            return a[L] = r, a
                        }(e(t, i))
                    }
                    if ("undefined" == typeof Proxy) return t;
                    let i = new Map;
                    return new Proxy(t, {
                        get: (e, s) => (i.has(s) || i.set(s, t(s)), i.get(s))
                    })
                }((e, t) => (function(e, {
                    forwardMotionProps: t = !1
                }, i, s, n) {
                    let r = O(e) ? eV : eO;
                    return { ...r,
                        preloadedFeatures: i,
                        useRender: function(e = !1) {
                            let t = (t, i, s, n, {
                                latestValues: r
                            }, a) => {
                                let o = O(t) ? eb : eu,
                                    u = o(i, r, a),
                                    c = function(e, t, i) {
                                        let s = {};
                                        for (let n in e)(ed(n) || !0 === i && eh(n) || !t && !eh(n) || e.draggable && n.startsWith("onDrag")) && (s[n] = e[n]);
                                        return s
                                    }(i, "string" == typeof t, e),
                                    h = { ...c,
                                        ...u,
                                        ref: n
                                    };
                                return s && (h["data-projection-id"] = s), (0, l.createElement)(t, h)
                            };
                            return t
                        }(t),
                        createVisualElement: s,
                        projectionNodeConstructor: n,
                        Component: e
                    }
                })(e, t, n6, no, n3))
        },
        11741: function(e, t, i) {
            "use strict";
            i.d(t, {
                j: function() {
                    return s
                }
            });
            let s = "undefined" != typeof document
        },
        49304: function(e, t, i) {
            "use strict";
            i.d(t, {
                O: function() {
                    return n
                }
            });
            var s = i(83454);
            let n = (void 0 === s || s.env, "production")
        },
        96681: function(e, t, i) {
            "use strict";
            i.d(t, {
                h: function() {
                    return n
                }
            });
            var s = i(67294);

            function n(e) {
                let t = (0, s.useRef)(null);
                return null === t.current && (t.current = e()), t.current
            }
        },
        58868: function(e, t, i) {
            "use strict";
            i.d(t, {
                L: function() {
                    return r
                }
            });
            var s = i(67294),
                n = i(11741);
            let r = n.j ? s.useLayoutEffect : s.useEffect
        },
        65411: function(e, t, i) {
            "use strict";
            i.d(t, {
                z: function() {
                    return n
                }
            });
            var s = i(67294);

            function n(e) {
                return (0, s.useEffect)(() => () => e(), [])
            }
        },
        16034: function(e, t, i) {
            "use strict";
            i.d(t, {
                O: function() {
                    return n
                }
            });
            let s = new Set;

            function n(e, t, i) {
                e || s.has(t) || (console.warn(t), i && console.warn(i), s.add(t))
            }
        },
        54735: function(e, t, i) {
            "use strict";
            i.d(t, {
                qY: function() {
                    return p
                },
                ZP: function() {
                    return v
                },
                iW: function() {
                    return m
                },
                $B: function() {
                    return b
                }
            });
            let s = 1 / 60 * 1e3,
                n = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
                r = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(n()), s),
                a = !0,
                o = !1,
                l = !1,
                u = {
                    delta: 0,
                    timestamp: 0
                },
                c = ["read", "update", "preRender", "render", "postRender"],
                h = c.reduce((e, t) => (e[t] = function(e) {
                    let t = [],
                        i = [],
                        s = 0,
                        n = !1,
                        r = !1,
                        a = new WeakSet,
                        o = {
                            schedule: (e, r = !1, o = !1) => {
                                let l = o && n,
                                    u = l ? t : i;
                                return r && a.add(e), -1 === u.indexOf(e) && (u.push(e), l && n && (s = t.length)), e
                            },
                            cancel: e => {
                                let t = i.indexOf(e); - 1 !== t && i.splice(t, 1), a.delete(e)
                            },
                            process: l => {
                                if (n) {
                                    r = !0;
                                    return
                                }
                                if (n = !0, [t, i] = [i, t], i.length = 0, s = t.length)
                                    for (let i = 0; i < s; i++) {
                                        let s = t[i];
                                        s(l), a.has(s) && (o.schedule(s), e())
                                    }
                                n = !1, r && (r = !1, o.process(l))
                            }
                        };
                    return o
                }(() => o = !0), e), {}),
                d = c.reduce((e, t) => {
                    let i = h[t];
                    return e[t] = (e, t = !1, s = !1) => (o || y(), i.schedule(e, t, s)), e
                }, {}),
                p = c.reduce((e, t) => (e[t] = h[t].cancel, e), {}),
                m = c.reduce((e, t) => (e[t] = () => h[t].process(u), e), {}),
                f = e => h[e].process(u),
                g = e => {
                    o = !1, u.delta = a ? s : Math.max(Math.min(e - u.timestamp, 40), 1), u.timestamp = e, l = !0, c.forEach(f), l = !1, o && (a = !1, r(g))
                },
                y = () => {
                    o = !0, a = !0, l || r(g)
                },
                b = () => u;
            var v = d
        }
    }
]);