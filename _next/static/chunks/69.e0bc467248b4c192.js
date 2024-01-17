(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [69], {
        10069: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return C
                }
            });
            var i = t(85893),
                s = t(67294),
                o = t(20993),
                a = t(11695),
                r = t(7297),
                l = t(94589),
                c = t(65551),
                d = t(20649);

            function h() {
                let e = (0, r.Z)(["\n          opacity: 1 !important;\n          background-color: #e8ebf1;\n        "]);
                return h = function() {
                    return e
                }, e
            }

            function u() {
                let e = (0, r.Z)(["\n          opacity: 0.5;\n          background-color: white;\n        "]);
                return u = function() {
                    return e
                }, e
            }

            function p() {
                let e = (0, r.Z)(["\n    max-width: 529px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    padding: 25px;\n    gap: 10px;\n    border-radius: 20px;\n    border: 1px solid #e1e9f0;\n    transition: all 0.4s;\n    opacity: 1;\n    background-color: #e8ebf1;\n\n    ", "\n\n    & > span:first-of-type {\n      margin: 0;\n      ", ";\n      line-height: 27px;\n    }\n\n    & > span {\n      ", ";\n      line-height: 24px;\n    }\n\n    ", " {\n      & > h4 {\n        font-size: 20px;\n        line-height: 24px;\n      }\n\n      & > span {\n        font-size: 14px;\n        line-height: 22px;\n      }\n    }\n  "]);
                return p = function() {
                    return e
                }, e
            }
            let f = (0, l.ZP)(c.Z).withConfig({
                    componentId: "sc-8181102b-0"
                })(e => {
                    let {
                        chosen: n,
                        theme: {
                            breakpoints: t,
                            down: i
                        }
                    } = e;
                    return (0, l.iv)(p(), n ? (0, l.iv)(h()) : (0, l.iv)(u()), (0, d.Z)({
                        fw: 500,
                        fs: 22,
                        color: "#171717"
                    }), (0, d.Z)({
                        fw: 400,
                        fs: 16,
                        color: "#4F5662"
                    }), i(1521))
                }),
                g = {
                    offscreen: {
                        y: 50,
                        opacity: 0
                    },
                    onscreen: {
                        y: 0,
                        opacity: .5,
                        transition: {
                            type: "tween",
                            duration: .8,
                            ease: "easeOut"
                        }
                    }
                },
                x = e => {
                    let {
                        block: n,
                        chosenCategory: t,
                        setCategory: s
                    } = e, o = t == n.slug;
                    return (0, i.jsxs)(f, {
                        chosen: o,
                        onClick: () => s(n.slug),
                        variants: g,
                        children: [(0, i.jsx)("span", {
                            children: n.title
                        }), o && (0, i.jsx)("span", {
                            children: n.description
                        })]
                    })
                };
            var y = t(13601);
            t(10995), t(93544);
            var j = t(51742),
                b = t(13603),
                m = t(25675),
                w = t.n(m);
            let v = e => {
                    let {
                        block: n,
                        index: t,
                        chosenCategory: s,
                        setCategory: o
                    } = e, a = s == n.slug;
                    return (0, i.jsxs)(j.uz, {
                        onClick: () => {
                            a ? o("") : o(n.slug)
                        },
                        children: [(0, i.jsxs)(j.u7, {
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsxs)(j.Ru, {
                                    children: ["0", t]
                                }), (0, i.jsx)(j.m6, {
                                    children: n.title
                                })]
                            }), (0, i.jsx)(b.Z, {
                                opened: a
                            })]
                        }), a && (0, i.jsxs)(j.Bg, {
                            opened: a,
                            children: [(0, i.jsx)(j.$1, {
                                children: n.description
                            }), (0, i.jsx)(w(), {
                                src: "/benefits/".concat(s, "BenefitOPT.webp"),
                                width: 300,
                                loading: "lazy",
                                height: 200,
                                objectPosition: "center",
                                objectFit: "contain",
                                alt: "NFD benefits"
                            })]
                        })]
                    })
                },
                k = [{
                    title: "Activities",
                    slug: "activities",
                    description: "Receive already reviewed information about the most captivating events in crypto world. The professional analytics will allow you to easily make money."
                }, {
                    title: "Auto-Update feed",
                    slug: "feed",
                    description: "All activities will have an “auto update feed”, which will be monitored by the NFD team so that you wont miss important changes or additions to any activity. Stay up to date!"
                }, {
                    title: "Calendar",
                    slug: "calendar",
                    description: "We have implemented an internal calendar functionality that will synchronize all your “Activities” in NFD, all their deadlines and important events. You can also add your token"
                }, {
                    title: "Aggregator",
                    slug: "aggregator",
                    description: "Create a project card, set up data parsing in just 2 minutes and get only the necessary information concerning any crypto project."
                }, {
                    title: "Alpha Search",
                    slug: "alphaSearch",
                    description: "Make your own list of influencers, funds or degen accounts on Twitter and monitor their new subscriptions and where those subscriptions match each other. Be the first to find an alpha."
                }],
                Z = () => {
                    let [e, n] = (0, s.useState)("activities");
                    return (0, i.jsx)(o.yn, {
                        id: "features",
                        children: (0, i.jsxs)(a.Z, {
                            children: [(0, i.jsx)(y.Z, {}), (0, i.jsxs)(o.DF, {
                                children: [(0, i.jsxs)(o.J0, {
                                    children: [(0, i.jsx)(c.Z, {
                                        motionTagType: "h1",
                                        children: "Use all the benefits of NFD"
                                    }), (0, i.jsx)(c.Z, {
                                        motionTagType: "span",
                                        children: "Unlock the next level of control with customizable real-time feeds, charts, watchlists, and alerts with NFD.gg"
                                    })]
                                }), (0, i.jsxs)(o.Il, {
                                    children: [(0, i.jsx)(o.Hd, {
                                        children: k.map(t => (0, i.jsx)(x, {
                                            block: t,
                                            chosenCategory: e,
                                            setCategory: n
                                        }, t.title))
                                    }), (0, i.jsx)(o.GU, {
                                        children: (0, i.jsx)(w(), {
                                            src: "/benefits/".concat(e, "BenefitOPT.webp"),
                                            loading: "lazy",
                                            style: {
                                                objectFit: "contain",
                                                objectPosition: "center"
                                            },
                                            quality: 100,
                                            width: 900,
                                            height: 900,
                                            alt: "NFD benefits"
                                        })
                                    })]
                                }), (0, i.jsx)(o.Rh, {
                                    children: k.map((t, s) => (0, i.jsx)(v, {
                                        chosenCategory: e,
                                        setCategory: n,
                                        block: t,
                                        index: s + 1
                                    }, s))
                                })]
                            }), (0, i.jsx)(y.Z, {
                                inverted: !0
                            })]
                        })
                    })
                };
            var C = Z
        },
        93544: function() {},
        10995: function() {}
    }
]);