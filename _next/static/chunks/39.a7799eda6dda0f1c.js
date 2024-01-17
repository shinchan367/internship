"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [39], {
        36610: function(n, e, t) {
            t.d(e, {
                E: function() {
                    return c
                }
            });
            var i = t(7297),
                o = t(85893),
                r = t(25675),
                l = t.n(r);
            t(67294);
            var s = t(94589);

            function a() {
                let n = (0, i.Z)(["\n    position: absolute;\n    top: ", ";\n    left: ", ";\n    opacity: 0.6;\n  "]);
                return a = function() {
                    return n
                }, n
            }
            let d = n => {
                let {
                    xPosition: e,
                    yPosition: t,
                    scale: i,
                    white: r = !1,
                    url: s,
                    height: a,
                    width: d
                } = n;
                return (0, o.jsx)(c, {
                    yPosition: t,
                    xPosition: e,
                    scale: i,
                    url: s,
                    width: d,
                    height: a,
                    children: (0, o.jsx)(l(), {
                        src: s,
                        width: d,
                        height: a,
                        alt: "blur_effect_bubble",
                        style: {
                            transform: "scale(".concat(i, ")"),
                            objectFit: "contain"
                        }
                    })
                })
            };
            e.Z = d;
            let c = s.ZP.div.withConfig({
                componentId: "sc-40e15c21-0"
            })(n => {
                let {
                    xPosition: e = 0,
                    yPosition: t = 0
                } = n;
                return (0, s.iv)(a(), t, e)
            })
        },
        17039: function(n, e, t) {
            t.r(e), t.d(e, {
                default: function() {
                    return Y
                }
            });
            var i = t(85893),
                o = t(67294),
                r = t(7297),
                l = t(94589),
                s = t(20649);

            function a() {
                let n = (0, r.Z)(["\n    position: relative;\n    width: 100%;\n    padding: 170px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #ffffff;\n    /* overflow: hidden; */\n\n    ", " {\n      padding: 80px 0;\n      & > div:nth-child(2) {\n        margin: 0;\n        padding: 0;\n      }\n    }\n  "]);
                return a = function() {
                    return n
                }, n
            }

            function d() {
                let n = (0, r.Z)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row;\n    position: relative;\n    z-index: 7;\n\n    ", " {\n      flex-direction: column;\n      gap: 60px;\n    }\n  "]);
                return d = function() {
                    return n
                }, n
            }

            function c() {
                let n = (0, r.Z)(['\n    position: sticky;\n    top: 270px;\n    align-self: flex-start;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    max-width: 559px;\n\n    & > button {\n      & > div:nth-of-type(2) {\n        font-family: "Formular";\n        font-style: normal;\n        font-weight: 500;\n        font-size: 18px;\n        line-height: 22px;\n        color: #ffffff;\n      }\n    }\n    ', " {\n      max-width: 459px;\n    }\n\n    ", " {\n      max-width: 330px;\n    }\n    ", " {\n      max-width: 459px;\n    }\n\n    ", " {\n      padding: 0 35px;\n      position: static;\n    }\n\n    & > h1 {\n      ", ";\n      line-height: 72px;\n      margin: 0;\n      ", " {\n        font-size: 46px;\n        line-height: 55px;\n      }\n\n      ", " {\n        font-size: 36px;\n        line-height: 44px;\n      }\n    }\n\n    & > p {\n      ", ";\n      line-height: 34px;\n      margin: 35px 0 45px 0;\n      ", " {\n        font-size: 15px;\n        line-height: 25px;\n      }\n\n      ", " {\n        font-size: 14px;\n        line-height: 24px;\n        margin: 25px 0 35px 0;\n      }\n    }\n  "]);
                return c = function() {
                    return n
                }, n
            }

            function p() {
                let n = (0, r.Z)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-end;\n    max-width: 805px;\n    width: 100%;\n    border-radius: 20px;\n    overflow: hidden;\n    z-index: 2;\n    /* transform: scale(0.8); */\n\n    ", " {\n      max-width: 673px;\n    }\n  "]);
                return p = function() {
                    return n
                }, n
            }

            function h() {
                let n = (0, r.Z)(["\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    bottom: 0;\n  "]);
                return h = function() {
                    return n
                }, n
            }
            let f = l.ZP.div.withConfig({
                    componentId: "sc-db9af17b-0"
                })(n => {
                    let {
                        theme: {
                            breakpoints: e,
                            down: t
                        }
                    } = n;
                    return (0, l.iv)(a(), t(e.sm))
                }),
                x = l.ZP.div.withConfig({
                    componentId: "sc-db9af17b-1"
                })(n => {
                    let {
                        theme: {
                            breakpoints: e,
                            down: t
                        }
                    } = n;
                    return (0, l.iv)(d(), t(1200))
                }),
                u = l.ZP.div.withConfig({
                    componentId: "sc-db9af17b-2"
                })(n => {
                    let {
                        theme: {
                            breakpoints: e,
                            down: t
                        }
                    } = n;
                    return (0, l.iv)(c(), t(1600), t(1350), t(1200), t(e.sm), (0, s.Z)({
                        syneFont: !0,
                        fw: 700,
                        fs: 60,
                        color: "#171717"
                    }), t(1600), t(e.sm), (0, s.Z)({
                        color: "#4F5662",
                        fw: 400,
                        fs: 22
                    }), t(1600), t(e.sm))
                }),
                m = l.ZP.div.withConfig({
                    componentId: "sc-db9af17b-3"
                })(n => {
                    let {
                        theme: {
                            breakpoints: e,
                            down: t
                        }
                    } = n;
                    return (0, l.iv)(p(), t(e.md))
                }),
                g = l.ZP.div.withConfig({
                    componentId: "sc-db9af17b-4"
                })(() => (0, l.iv)(h()));
            var w = t(11695),
                b = t(80205);

            function v() {
                let n = (0, r.Z)(["\n    background: #ffffff;\n    border: 1px solid #e1e9f0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    max-width: 268px;\n    width: 100%;\n    gap: 25px;\n    padding: 55px 0;\n    position: relative;\n    overflow: hidden;\n\n    ", " {\n      max-width: 224px;\n      padding: 46px 0;\n\n      ", " {\n        width: 132px;\n        height: 132px;\n      }\n\n      ", " {\n        width: 125px;\n        height: 125px;\n      }\n\n      ", " {\n        right: 11px;\n        top: 10px;\n      }\n\n      ", " {\n        & > h4 {\n          font-size: 14px;\n          line-height: 17px;\n        }\n\n        & > span {\n          font-size: 12px;\n          line-height: 15px;\n        }\n      }\n    }\n\n    ", " {\n      gap: 12px;\n      max-width: calc(100% / 3) !important;\n      padding: 25px 0;\n\n      ", " {\n        width: 9px;\n        height: 9px;\n        top: 7px;\n        right: 7px;\n      }\n\n      ", " {\n        width: 76px;\n        height: 76px;\n      }\n\n      ", " {\n        width: 72px;\n        height: 72px;\n      }\n\n      ", " {\n        gap: 5px;\n        & > h4 {\n          font-size: 12px;\n        }\n        & > span {\n          font-size: 10px;\n        }\n      }\n    }\n  "]);
                return v = function() {
                    return n
                }, n
            }

            function j() {
                let n = (0, r.Z)(["\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    background: ", ";\n    overflow: hidden;\n\n    & > video {\n      overflow: hidden;\n    }\n  "]);
                return j = function() {
                    return n
                }, n
            }

            function y() {
                let n = (0, r.Z)(["\n      left: 0;\n    "]);
                return y = function() {
                    return n
                }, n
            }

            function C() {
                let n = (0, r.Z)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: -100%;\n    display: flex;\n    background-color: white;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    z-index: 20;\n    //border: 1px solid #c9d5df;\n    transition: left 0.8s ease;\n    transition-delay: 0.5s;\n\n    ", " {\n      display: none;\n    }\n\n    ", "\n  "]);
                return C = function() {
                    return n
                }, n
            }

            function Z() {
                let n = (0, r.Z)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 15px 25px;\n    border-bottom: 1px solid #c9d5df;\n    & > span {\n      ", ";\n      line-height: 20px;\n    }\n  "]);
                return Z = function() {
                    return n
                }, n
            }

            function k() {
                let n = (0, r.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    padding: 25px;\n    width: 100%;\n    gap: 15px;\n\n    & > div:first-of-type {\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      width: 100%;\n      gap: 12px;\n\n      & > div:last-of-type {\n        display: flex;\n        align-items: flex-start;\n        flex-direction: column;\n        justify-content: center;\n        gap: 4px;\n\n        & > span:first-of-type {\n          ", ";\n          line-height: 17px;\n        }\n        & > span:last-of-type {\n          ", ";\n          line-height: 15px;\n        }\n      }\n      & > div:first-of-type {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 46px;\n        height: 46px;\n        border-radius: 50%;\n        border: 1px solid ", ";\n\n        & > div:first-of-type {\n          width: 40px;\n          height: 40px;\n          border-radius: 50%;\n          background: ", ";\n          overflow: hidden;\n        }\n      }\n    }\n    & > div:nth-child(2) {\n      display: flex;\n      justify-content: flex-start;\n      align-items: flex-start;\n\n      & > span {\n        ", ";\n        line-height: 20px;\n      }\n    }\n  "]);
                return k = function() {
                    return n
                }, n
            }

            function F() {
                let n = (0, r.Z)(["\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n    margin-top: 15px;\n  "]);
                return F = function() {
                    return n
                }, n
            }

            function E() {
                let n = (0, r.Z)(["\n    border: 1px solid ", ";\n    width: 158px;\n    height: 158px;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n  "]);
                return E = function() {
                    return n
                }, n
            }

            function P() {
                let n = (0, r.Z)(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    border-radius: 50%;\n    z-index: 10;\n  "]);
                return P = function() {
                    return n
                }, n
            }

            function z() {
                let n = (0, r.Z)(["\n    position: absolute;\n    top: 13px;\n    right: 17px;\n    background-color: ", ";\n    border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    border: 2px solid #ffffff;\n  "]);
                return z = function() {
                    return n
                }, n
            }

            function I() {
                let n = (0, r.Z)(["\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    & > h4 {\n      ", ";\n      line-height: 20px;\n    }\n    & > span {\n      ", ";\n      line-height: 17px;\n    }\n  "]);
                return I = function() {
                    return n
                }, n
            }
            let D = l.ZP.div.withConfig({
                    componentId: "sc-5266d3c2-0"
                })(n => {
                    let {
                        theme: {
                            breakpoints: e,
                            down: t
                        }
                    } = n;
                    return (0, l.iv)(v(), t(1600), T, _, S, J, t(e.sm), S, T, _, J)
                }),
                _ = l.ZP.div.withConfig({
                    componentId: "sc-5266d3c2-1"
                })(n => {
                    let {
                        gradient: e
                    } = n;
                    return (0, l.iv)(j(), e)
                }),
                B = l.ZP.div.withConfig({
                    componentId: "sc-5266d3c2-2"
                })(n => {
                    let {
                        hovered: e,
                        theme: {
                            breakpoints: t,
                            down: i
                        }
                    } = n;
                    return (0, l.iv)(C(), i(t.sm), e && (0, l.iv)(y()))
                }),
                A = l.ZP.div.withConfig({
                    componentId: "sc-5266d3c2-3"
                })(() => (0, l.iv)(Z(), (0, s.Z)({
                    fw: 500,
                    fs: 16,
                    color: "#171717"
                }))),
                N = l.ZP.div.withConfig({
                    componentId: "sc-5266d3c2-4"
                })(n => {
                    let {
                        circleColor: e
                    } = n;
                    return (0, l.iv)(k(), (0, s.Z)({
                        fw: 400,
                        fs: 14,
                        color: "#171717"
                    }), (0, s.Z)({
                        fw: 400,
                        fs: 12,
                        color: "#4F5662"
                    }), e, e, (0, s.Z)({
                        fs: 12,
                        fw: 300,
                        color: "#4F5662"
                    }))
                });
            l.ZP.div.withConfig({
                componentId: "sc-5266d3c2-5"
            })(() => (0, l.iv)(F()));
            let T = l.ZP.div.withConfig({
                    componentId: "sc-5266d3c2-6"
                })(n => {
                    let {
                        circleColor: e
                    } = n;
                    return (0, l.iv)(E(), e)
                }),
                L = (0, l.ZP)(b.E.div).withConfig({
                    componentId: "sc-5266d3c2-7"
                })(() => (0, l.iv)(P())),
                S = l.ZP.div.withConfig({
                    componentId: "sc-5266d3c2-8"
                })(n => {
                    let {
                        circleColor: e
                    } = n;
                    return (0, l.iv)(z(), e)
                }),
                J = l.ZP.div.withConfig({
                    componentId: "sc-5266d3c2-9"
                })(() => (0, l.iv)(I(), (0, s.Z)({
                    fw: 400,
                    fs: 16,
                    color: "#171717"
                }), (0, s.Z)({
                    fw: 400,
                    fs: 14,
                    color: "#4F5662"
                })));
            var M = t(25675),
                W = t.n(M);
            let H = {
                    baza: {
                        top: 0,
                        left: 0,
                        rotate: 0
                    },
                    baza2: {
                        rotate: 180,
                        transition: {
                            type: "spring",
                            duration: 1.2,
                            bounce: .5
                        }
                    }
                },
                O = n => {
                    let {
                        employee: e
                    } = n, [t, r] = (0, o.useState)(!1);
                    return (0, i.jsxs)(D, {
                        onMouseEnter: () => r(!0),
                        onMouseLeave: () => r(!1),
                        children: [(0, i.jsxs)(B, {
                            hovered: t,
                            children: [(0, i.jsx)(A, {
                                children: (0, i.jsx)("span", {
                                    children: "More info"
                                })
                            }), (0, i.jsxs)(N, {
                                circleColor: e.circleColor,
                                children: [(0, i.jsxs)("div", {
                                    children: [(0, i.jsx)("div", {
                                        children: (0, i.jsx)("div", {
                                            children: (0, i.jsx)(W(), {
                                                src: e.image,
                                                width: 40,
                                                height: 40,
                                                alt: "NFD Team:".concat(e.name),
                                                style: {
                                                    objectFit: "contain",
                                                    objectPosition: "center"
                                                },
                                                loading: "lazy",
                                                unoptimized: !0
                                            })
                                        })
                                    }), (0, i.jsxs)("div", {
                                        children: [(0, i.jsx)("span", {
                                            children: e.name
                                        }), (0, i.jsx)("span", {
                                            children: e.job
                                        })]
                                    })]
                                }), (0, i.jsx)("div", {
                                    children: (0, i.jsx)("span", {
                                        children: e.description
                                    })
                                })]
                            })]
                        }), (0, i.jsxs)(T, {
                            circleColor: e.circleColor,
                            children: [(0, i.jsx)(L, {
                                initial: "baza",
                                whileHover: "baza2",
                                variants: H,
                                children: (0, i.jsx)(S, {
                                    circleColor: e.circleColor
                                })
                            }), (0, i.jsx)(_, {
                                gradient: e.color,
                                children: t ? (0, i.jsx)("video", {
                                    loop: !0,
                                    src: e.joke,
                                    width: "100%",
                                    height: "100%",
                                    autoPlay: !0,
                                    muted: !0,
                                    style: {
                                        objectFit: "cover"
                                    }
                                }) : (0, i.jsx)(W(), {
                                    width: 150,
                                    height: 150,
                                    src: e.image,
                                    loading: "lazy",
                                    alt: "NFD Team:".concat(e.name, " photo"),
                                    style: {
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }
                                })
                            })]
                        }), (0, i.jsxs)(J, {
                            children: [(0, i.jsx)("h4", {
                                children: e.name
                            }), (0, i.jsx)("span", {
                                children: e.job
                            })]
                        })]
                    })
                };
            var G = t(36610),
                R = t(40918),
                V = t(13601),
                q = t(5152),
                K = t.n(q);
            let Q = [{
                    name: "William",
                    job: "CTO",
                    image: "/team/villiam.webp",
                    color: "linear-gradient(90deg, #FBC2EB 0%, #A6C1EE 100%)",
                    circleColor: "#ACC2EE",
                    joke: "/team/jokes/villiamJoke.webm",
                    description: "5+ years in IT, 5 years in crypto. Brought from 0 to successful launch multiple complex projects"
                }, {
                    name: "Leo",
                    job: "CEO",
                    image: "/team/leoor.webp",
                    color: "linear-gradient(90deg, #FFECD2 0%, #FCB69F 100%)",
                    circleColor: "#FEC8B0",
                    joke: "/team/jokes/leoJoke.webm",
                    description: "Experience: 4 years in crypto. Invested in almost all the big projects, that have launched on the market in the last 2 years. Works directly with many crypto incubators and launchpads."
                }, {
                    name: "Vadim",
                    job: "CCO",
                    image: "/team/minter.webp",
                    color: "linear-gradient(90deg, #D4FC79 0%, #96E6A1 100%)",
                    circleColor: "#ADEE93",
                    joke: "/team/jokes/vadimJoke.webm",
                    description: "Experience: In web3 since 2018. Head of content. For more than two years he has been writing for the famous and authoritative communities. "
                }, {
                    name: "Vitale",
                    job: "Team Lead fullstack",
                    image: "/team/vitale.webp",
                    joke: "/team/jokes/vitaleJoke.webm",
                    color: "linear-gradient(90deg, #E0C3FC 0%, #8EC5FC 100%)",
                    circleColor: "#CEC4FD",
                    description: "5.5+ years in development. Team Lead. Founded a successful web studio. FMW: React (Native), Angular, Laravel. Langs: TS,Python, PHP, Solidity. "
                }, {
                    name: "Nikita",
                    job: "Frontend developer",
                    joke: "/team/jokes/nikitaJoke.webm",
                    image: "/team/nik.webp",
                    color: "linear-gradient(90deg, #CFD9DF 0%, #E2EBF0 100%)",
                    circleColor: "#D2DBE1",
                    description: "Experience: 3 years of working with most popular front-end frameworks and libraries including. Loves working with 3d libraries and solving complex problems."
                }, {
                    name: "Den",
                    job: "Backend developer",
                    image: "/team/den.webp",
                    color: " linear-gradient(90deg, #A8EDEA 0%, #FED6E3 100%)",
                    circleColor: "#B9E9E9",
                    joke: "/team/jokes/den.mp4",
                    description: "Experience: 4+ years developing complex back-end solutions. JS/TS, Python, Rust, Go. "
                }],
                U = K()(() => Promise.all([t.e(433), t.e(681)]).then(t.bind(t, 5681)), {
                    loadableGenerated: {
                        webpack: () => [5681]
                    }
                }),
                X = () => {
                    let [n, e] = (0, o.useState)(!1), [t, r] = (0, o.useState)(!1);
                    return (0, o.useEffect)(() => {
                        let n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                        n && r(!0)
                    }, []), (0, i.jsxs)(f, {
                        children: [!t && (0, i.jsxs)("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "calc(100% + 93px)",
                                zIndex: 6,
                                overflow: "hidden"
                            },
                            children: [(0, i.jsx)(G.Z, {
                                xPosition: "-10%",
                                yPosition: "60%",
                                scale: 1,
                                white: !0,
                                url: "/blurs/sixth_block_one_blur.webp",
                                width: 700,
                                height: 1e3
                            }), (0, i.jsx)(g, {
                                children: (0, i.jsx)(W(), {
                                    src: "/blurs/sixth_block_two_blur.webp",
                                    alt: "blur_effect_team",
                                    width: 1e3,
                                    height: 1600,
                                    style: {
                                        objectFit: "cover"
                                    }
                                })
                            })]
                        }), (0, i.jsxs)(w.Z, {
                            children: [(0, i.jsx)(V.Z, {}), (0, i.jsxs)(x, {
                                children: [(0, i.jsxs)(u, {
                                    children: [(0, i.jsx)("h1", {
                                        children: "We are delighted to introduce the NFD team members to you"
                                    }), (0, i.jsx)("p", {
                                        children: "NFD team is always open to new partnerships and new team members, so if you have a desire to join and you have a big experience in development or crypto - just leave your request in form and we will consider it."
                                    }), (0, i.jsx)(R.Z, {
                                        width: 206,
                                        big: !0,
                                        onClick: () => e(!0),
                                        children: "Fill out a form"
                                    })]
                                }), (0, i.jsx)(m, {
                                    children: Q.map(n => (0, i.jsx)(O, {
                                        employee: n
                                    }, n.name))
                                })]
                            }), (0, i.jsx)(V.Z, {
                                inverted: !0
                            })]
                        }), n && (0, i.jsx)(U, {
                            close: () => e(!1)
                        })]
                    })
                };
            var Y = X
        }
    }
]);