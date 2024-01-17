"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [627], {
        81936: function(n, t, e) {
            e.r(t), e.d(t, {
                default: function() {
                    return np
                }
            });
            var i = e(85893);
            e(67294);
            var o = e(7297),
                r = e(94589),
                c = e(20649),
                l = e(36610),
                s = e(11695),
                a = e(65551);

            function u() {
                let n = (0, o.Z)(["\n    position: relative;\n    width: 100%;\n    padding: 240px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(147.35deg, #232324 -0.9%, #151516 116.23%);\n    overflow: hidden;\n    ", " {\n      ", ":nth-of-type(4) {\n        display: none;\n      }\n\n      ", ":nth-of-type(3) {\n        left: 40%;\n        top: 15%;\n      }\n    }\n\n    ", " {\n      ", " {\n        padding: 0;\n      }\n    }\n\n    ", " {\n      padding: 110px 0;\n    }\n  "]);
                return u = function() {
                    return n
                }, n
            }

            function d() {
                let n = (0, o.Z)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 110px;\n\n    ", " {\n      gap: 60px;\n    }\n  "]);
                return d = function() {
                    return n
                }, n
            }

            function f() {
                let n = (0, o.Z)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    & > h1 {\n      ", ";\n      line-height: 88px;\n      text-align: center;\n      margin: 0 0 45px 0;\n\n      ", " {\n        font-size: 60px;\n        line-height: 68px;\n      }\n\n      ", " {\n        font-size: 36px;\n        line-height: 44px;\n      }\n    }\n\n    & > div {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      gap: 45px;\n    }\n  "]);
                return f = function() {
                    return n
                }, n
            }

            function p() {
                let n = (0, o.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    width: 100%;\n\n    ", " {\n      display: none;\n    }\n  "]);
                return p = function() {
                    return n
                }, n
            }

            function x() {
                let n = (0, o.Z)(["\n    width: 100vw;\n    position: absolute;\n    background: rgba(224, 224, 224, 0.15);\n    height: 1px;\n    top: 0;\n  "]);
                return x = function() {
                    return n
                }, n
            }

            function h() {
                let n = (0, o.Z)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n  "]);
                return h = function() {
                    return n
                }, n
            }

            function g() {
                let n = (0, o.Z)(['\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n\n    .swiper-wrapper {\n      margin: 0 auto 45px auto;\n    }\n\n    .swiper-slide {\n      //width: calc(100% - 15%) !important;\n    }\n    /* .swiper-slide-active {\n      margin-left: 35px;\n    } */\n    .swiper-pagination {\n      bottom: 0;\n      display: flex;\n      align-items: center;\n      gap: 20px;\n      justify-content: center;\n      height: 40px;\n    }\n    .swiper-pagination-bullet-active {\n      background: #6c52ee !important;\n\n      & > .swiper-pagination-bullet {\n        &::after {\n        }\n      }\n    }\n\n    .swiper-pagination-bullet {\n      width: 5px;\n      height: 5px;\n      min-height: 5px;\n      min-width: 5px;\n      border-radius: 50%;\n      background: transparent;\n      position: relative;\n\n      &::after {\n        position: absolute;\n        left: -2.5px;\n        top: -2.5px;\n        content: "";\n        width: 10px;\n        min-height: 10px;\n        min-width: 10px;\n        background: transparent;\n        height: 10px;\n        border: 1px solid rgba(255, 255, 255, 0.5);\n        border-radius: 50%;\n      }\n    }\n\n    ', " {\n      display: none;\n    }\n  "]);
                return g = function() {
                    return n
                }, n
            }
            let m = r.ZP.div.withConfig({
                    componentId: "sc-17a737fa-0"
                })(n => {
                    let {
                        theme: {
                            breakpoints: t,
                            down: e
                        }
                    } = n;
                    return (0, r.iv)(u(), e(t.md), l.E, l.E, e(t.sm), s.Z, e(t.xs))
                }),
                w = r.ZP.div.withConfig({
                    componentId: "sc-17a737fa-1"
                })(n => {
                    let {
                        theme: {
                            breakpoints: t,
                            down: e
                        }
                    } = n;
                    return (0, r.iv)(d(), e(t.sm))
                }),
                F = r.ZP.div.withConfig({
                    componentId: "sc-17a737fa-2"
                })(n => {
                    let {
                        theme: {
                            down: t,
                            breakpoints: e
                        }
                    } = n;
                    return (0, r.iv)(f(), (0, c.Z)({
                        fs: 80,
                        fw: 700,
                        syneFont: !0,
                        color: "#ffffff"
                    }), t(e.md), t(e.sm))
                }),
                b = (0, r.ZP)(a.Z).withConfig({
                    componentId: "sc-17a737fa-3"
                })(n => {
                    let {
                        theme: {
                            down: t,
                            breakpoints: e
                        }
                    } = n;
                    return (0, r.iv)(p(), t(e.sm))
                }),
                v = r.ZP.div.withConfig({
                    componentId: "sc-17a737fa-4"
                })(() => (0, r.iv)(x())),
                Z = r.ZP.div.withConfig({
                    componentId: "sc-17a737fa-5"
                })(() => (0, r.iv)(h())),
                y = r.ZP.div.withConfig({
                    componentId: "sc-17a737fa-6"
                })(n => {
                    let {
                        theme: {
                            up: t,
                            breakpoints: e
                        }
                    } = n;
                    return (0, r.iv)(g(), t(e.sm))
                });

            function j() {
                let n = (0, o.Z)(["\n0% {\n  transform: scale(.95);\n  box-shadow: 0 0 #cc8718b3;\n}\n70% {\n  transform: scale(1);\n  box-shadow: 0 0 0 8px #cc871800;\n}\n100% {\n  transform: scale(.95);\n  box-shadow: 0 0 #cc871800;\n}"]);
                return j = function() {
                    return n
                }, n
            }

            function k() {
                let n = (0, o.Z)(["\n        box-shadow: 0 0 #cc8718;\n        animation: ", " 2s infinite;\n      "]);
                return k = function() {
                    return n
                }, n
            }

            function P() {
                let n = (0, o.Z)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n\n    & > div {\n      width: 6px;\n      height: 6px;\n      min-width: 6px;\n      min-height: 6px;\n      border-radius: 50%;\n      background-color: ", ";\n      ", "\n    }\n\n    & > span {\n      ", ";\n      line-height: 20px;\n    }\n  "]);
                return P = function() {
                    return n
                }, n
            }
            let C = (0, r.F4)(j()),
                I = r.ZP.div.withConfig({
                    componentId: "sc-78dd1cf0-0"
                })(n => {
                    let {
                        color: t
                    } = n;
                    return (0, r.iv)(P(), t, "#FFA004" === t && (0, r.iv)(k(), C), (0, c.Z)({
                        fw: 400,
                        fs: 16,
                        color: "#ffffff"
                    }))
                }),
                A = n => {
                    let {
                        color: t,
                        children: e
                    } = n;
                    return (0, i.jsxs)(I, {
                        color: t,
                        children: [(0, i.jsx)("div", {}), (0, i.jsx)("span", {
                            children: e
                        })]
                    })
                };
            var N = e(80205);

            function _() {
                let n = (0, o.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n  "]);
                return _ = function() {
                    return n
                }, n
            }

            function B() {
                let n = (0, o.Z)(["\n    ", ";\n    line-height: 24px;\n    margin-top: 30px;\n  "]);
                return B = function() {
                    return n
                }, n
            }

            function D() {
                let n = (0, o.Z)(["\n    width: 73px;\n    background-color: white;\n    height: 1px;\n    margin: 15px 0;\n  "]);
                return D = function() {
                    return n
                }, n
            }

            function z() {
                let n = (0, o.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    max-width: 220px;\n    gap: 10px;\n    flex-direction: column;\n\n    ", " {\n      max-width: 190px;\n    }\n\n    & > div > span {\n      font-size: 14px;\n\n      ", " {\n        font-size: 12px;\n      }\n    }\n  "]);
                return z = function() {
                    return n
                }, n
            }

            function E() {
                let n = (0, o.Z)(["\n          background: #6c52ee;\n        "]);
                return E = function() {
                    return n
                }, n
            }

            function O() {
                let n = (0, o.Z)(["\n          background: #e0e0e0;\n        "]);
                return O = function() {
                    return n
                }, n
            }

            function T() {
                let n = (0, o.Z)(["\n    filter: blur(2px);\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    position: absolute;\n    top: -7.5px;\n\n    ", "\n  "]);
                return T = function() {
                    return n
                }, n
            }
            let S = {
                    offscreen: {
                        y: 50,
                        opacity: 0
                    },
                    onscreen: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            type: "tween",
                            duration: .8,
                            ease: "easeOut"
                        }
                    }
                },
                R = n => {
                    let {
                        stage: t
                    } = n;
                    return (0, i.jsxs)(q, {
                        variants: S,
                        children: [(0, i.jsx)(W, {
                            completed: t.completed
                        }), (0, i.jsxs)(L, {
                            children: ["Stage\xa0", t.stageNum]
                        }), (0, i.jsx)(U, {}), (0, i.jsx)(V, {
                            children: t.tasks.map((n, t) => (0, i.jsx)(A, {
                                color: n.color,
                                children: n.text
                            }, n.text + t))
                        })]
                    })
                },
                q = (0, r.ZP)(N.E.div).withConfig({
                    componentId: "sc-7c7b47ea-0"
                })(() => (0, r.iv)(_())),
                L = r.ZP.span.withConfig({
                    componentId: "sc-7c7b47ea-1"
                })(() => (0, r.iv)(B(), (0, c.Z)({
                    fs: 20,
                    fw: 500,
                    color: "#ffffff"
                }))),
                U = r.ZP.div.withConfig({
                    componentId: "sc-7c7b47ea-2"
                })(() => (0, r.iv)(D())),
                V = r.ZP.div.withConfig({
                    componentId: "sc-7c7b47ea-3"
                })(n => {
                    let {
                        theme: {
                            breakpoints: t,
                            down: e
                        }
                    } = n;
                    return (0, r.iv)(z(), e(t.md), e(t.md))
                }),
                W = r.ZP.div.withConfig({
                    componentId: "sc-7c7b47ea-4"
                })(n => {
                    let {
                        completed: t
                    } = n;
                    return (0, r.iv)(T(), t ? (0, r.iv)(E()) : (0, r.iv)(O()))
                });

            function X() {
                let n = (0, o.Z)(['\n    background: url("/noiseRoadmapOPT.webp");\n    mix-blend-mode: overlay;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  ']);
                return X = function() {
                    return n
                }, n
            }
            let G = r.ZP.div.withConfig({
                    componentId: "sc-8bd71b89-0"
                })(() => (0, r.iv)(X())),
                H = () => (0, i.jsx)(G, {});

            function J() {
                let n = (0, o.Z)(["\n    background: linear-gradient(146.95deg, #232324 -0.9%, #151516 130.17%);\n    border-radius: 20px;\n    display: flex;\n    max-width: 237px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 25px;\n  "]);
                return J = function() {
                    return n
                }, n
            }

            function K() {
                let n = (0, o.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    width: 100%;\n  "]);
                return K = function() {
                    return n
                }, n
            }

            function M() {
                let n = (0, o.Z)(["\n    ", ";\n    line-height: 24px;\n  "]);
                return M = function() {
                    return n
                }, n
            }

            function Q() {
                let n = (0, o.Z)(["\n    width: 73px;\n    background-color: white;\n    height: 1px;\n    margin: 15px 0;\n  "]);
                return Q = function() {
                    return n
                }, n
            }

            function Y() {
                let n = (0, o.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    max-width: 220px;\n    gap: 10px;\n    flex-direction: column;\n\n    ", " {\n      max-width: 190px;\n    }\n\n    & > div > span {\n      font-size: 14px;\n\n      ", " {\n        font-size: 12px;\n      }\n    }\n  "]);
                return Y = function() {
                    return n
                }, n
            }

            function $() {
                let n = (0, o.Z)(["\n          background: #6c52ee;\n        "]);
                return $ = function() {
                    return n
                }, n
            }

            function nn() {
                let n = (0, o.Z)(["\n          background: #e0e0e0;\n        "]);
                return nn = function() {
                    return n
                }, n
            }

            function nt() {
                let n = (0, o.Z)(["\n    filter: blur(2px);\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    position: absolute;\n    top: -7.5px;\n\n    ", "\n  "]);
                return nt = function() {
                    return n
                }, n
            }
            let ne = n => {
                    let {
                        stage: t
                    } = n;
                    return (0, i.jsx)(ni, {
                        children: (0, i.jsxs)(no, {
                            children: [(0, i.jsxs)(nr, {
                                children: ["Stage\xa0", t.stageNum]
                            }), (0, i.jsx)(nc, {}), (0, i.jsx)(nl, {
                                children: t.tasks.map((n, t) => (0, i.jsx)(A, {
                                    color: n.color,
                                    children: n.text
                                }, n.text + t))
                            })]
                        })
                    })
                },
                ni = r.ZP.div.withConfig({
                    componentId: "sc-34c371a6-0"
                })(() => (0, r.iv)(J())),
                no = r.ZP.div.withConfig({
                    componentId: "sc-34c371a6-1"
                })(() => (0, r.iv)(K())),
                nr = r.ZP.span.withConfig({
                    componentId: "sc-34c371a6-2"
                })(() => (0, r.iv)(M(), (0, c.Z)({
                    fs: 20,
                    fw: 500,
                    color: "#ffffff"
                }))),
                nc = r.ZP.div.withConfig({
                    componentId: "sc-34c371a6-3"
                })(() => (0, r.iv)(Q())),
                nl = r.ZP.div.withConfig({
                    componentId: "sc-34c371a6-4"
                })(n => {
                    let {
                        theme: {
                            breakpoints: t,
                            down: e
                        }
                    } = n;
                    return (0, r.iv)(Y(), e(t.md), e(t.md))
                });
            r.ZP.div.withConfig({
                componentId: "sc-34c371a6-5"
            })(n => {
                let {
                    completed: t
                } = n;
                return (0, r.iv)(nt(), t ? (0, r.iv)($()) : (0, r.iv)(nn()))
            });
            var ns = e(30719),
                na = e(71911);
            e(10995), e(93544);
            let nu = [{
                    stageNum: 1,
                    completed: !0,
                    tasks: [{
                        text: "Development",
                        color: "#05BB53"
                    }, {
                        text: "Activities and Aggregator",
                        color: "#05BB53"
                    }, {
                        text: "Alpha test",
                        color: "#05BB53"
                    }, {
                        text: "Alpha search tool",
                        color: "#05BB53"
                    }, {
                        text: "Beta test",
                        color: "#FFA004"
                    }]
                }, {
                    stageNum: 2,
                    completed: !1,
                    tasks: [{
                        text: "ROI scanner",
                        color: "#FFA004"
                    }, {
                        text: "Aggregator “Summary”",
                        color: "#FFA004"
                    }, {
                        text: "Twitter Scanner tool",
                        color: "#FFA004"
                    }, {
                        text: "Whale’s analysis",
                        color: "#FFFFFF"
                    }, {
                        text: "Blocks in Aggregator",
                        color: "#FFA004"
                    }]
                }, {
                    stageNum: 3,
                    completed: !1,
                    tasks: [{
                        text: "New sections in “Activities”",
                        color: "#FFA004"
                    }, {
                        text: "Launching NFD DAO",
                        color: "#FFFFFF"
                    }, {
                        text: "Expanding the calendar",
                        color: "#FFFFFF"
                    }, {
                        text: "Token vesting tool",
                        color: "#FFFFFF"
                    }, {
                        text: "NFD labs incubator",
                        color: "#FFFFFF"
                    }]
                }, {
                    stageNum: 4,
                    completed: !1,
                    tasks: [{
                        text: "Crypto arbitrage scanner",
                        color: "#FFFFFF"
                    }, {
                        text: "Alpha search AI developing based on data collected",
                        color: "#FFFFFF"
                    }, {
                        text: "Adding any services based on NFD DAO votes",
                        color: "#FFFFFF"
                    }]
                }, {
                    stageNum: 5,
                    completed: !1,
                    tasks: [{
                        text: "The launch of Project “X” by NFD labs, which will change the culture of crypto investment",
                        color: "#FFFFFF"
                    }]
                }],
                nd = {
                    offscreen: {
                        y: 50,
                        opacity: 0
                    },
                    onscreen: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            type: "tween",
                            duration: .8,
                            ease: "easeOut",
                            staggerChildren: .2
                        }
                    }
                },
                nf = () => (0, i.jsxs)(m, {
                    id: "roadmap",
                    children: [(0, i.jsx)(H, {}), (0, i.jsx)(l.Z, {
                        xPosition: "-15%",
                        yPosition: "10%",
                        scale: .8,
                        url: "/blurs/fifth_block_one_elips_blur.webp",
                        width: 1e3,
                        height: 1e3
                    }), (0, i.jsx)(l.Z, {
                        xPosition: "30%",
                        yPosition: "15%",
                        scale: .5,
                        url: "/blurs/fifth_block_two_elips_blur.webp",
                        width: 1e3,
                        height: 1e3
                    }), (0, i.jsx)(l.Z, {
                        xPosition: "65%",
                        yPosition: "15%",
                        scale: .3,
                        url: "/blurs/fifth_block_two_elips_blur.webp",
                        width: 1e3,
                        height: 1e3
                    }), (0, i.jsx)(s.Z, {
                        style: {
                            position: "relative",
                            zIndex: 5
                        },
                        children: (0, i.jsxs)(w, {
                            children: [(0, i.jsxs)(F, {
                                children: [(0, i.jsx)(a.Z, {
                                    motionTagType: "h1",
                                    children: "NFD - game changing crypto platform"
                                }), (0, i.jsxs)(a.Z, {
                                    children: [(0, i.jsx)(A, {
                                        color: "#05BB53",
                                        children: "Done"
                                    }), (0, i.jsx)(A, {
                                        color: "#FFA004",
                                        children: "In work"
                                    }), (0, i.jsx)(A, {
                                        color: "#FFFFFF",
                                        children: "Upcoming"
                                    })]
                                })]
                            }), (0, i.jsxs)(b, {
                                variants: nd,
                                children: [(0, i.jsx)(v, {}), (0, i.jsx)(Z, {
                                    children: nu.map(n => (0, i.jsx)(R, {
                                        stage: n
                                    }, n.stageNum))
                                })]
                            }), (0, i.jsx)(y, {
                                children: (0, i.jsx)(ns.tq, {
                                    slidesPerView: "auto",
                                    pagination: {
                                        clickable: !0
                                    },
                                    spaceBetween: 30,
                                    modules: [na.tl],
                                    className: "mySwiper",
                                    style: {
                                        width: "100%"
                                    },
                                    children: nu.map((n, t) => (0, i.jsx)(ns.o5, {
                                        style: {
                                            width: "auto"
                                        },
                                        children: (0, i.jsx)(ne, {
                                            stage: n
                                        }, n.stageNum)
                                    }, t))
                                })
                            })]
                        })
                    })]
                });
            var np = nf
        },
        36610: function(n, t, e) {
            e.d(t, {
                E: function() {
                    return u
                }
            });
            var i = e(7297),
                o = e(85893),
                r = e(25675),
                c = e.n(r);
            e(67294);
            var l = e(94589);

            function s() {
                let n = (0, i.Z)(["\n    position: absolute;\n    top: ", ";\n    left: ", ";\n    opacity: 0.6;\n  "]);
                return s = function() {
                    return n
                }, n
            }
            let a = n => {
                let {
                    xPosition: t,
                    yPosition: e,
                    scale: i,
                    white: r = !1,
                    url: l,
                    height: s,
                    width: a
                } = n;
                return (0, o.jsx)(u, {
                    yPosition: e,
                    xPosition: t,
                    scale: i,
                    url: l,
                    width: a,
                    height: s,
                    children: (0, o.jsx)(c(), {
                        src: l,
                        width: a,
                        height: s,
                        alt: "blur_effect_bubble",
                        style: {
                            transform: "scale(".concat(i, ")"),
                            objectFit: "contain"
                        }
                    })
                })
            };
            t.Z = a;
            let u = l.ZP.div.withConfig({
                componentId: "sc-40e15c21-0"
            })(n => {
                let {
                    xPosition: t = 0,
                    yPosition: e = 0
                } = n;
                return (0, l.iv)(s(), e, t)
            })
        }
    }
]);