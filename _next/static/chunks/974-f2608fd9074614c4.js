"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        3974: function(t, n, e) {
            e.r(n), e.d(n, {
                default: function() {
                    return V
                }
            });
            var i = e(85893);
            e(67294);
            var r = e(7297),
                o = e(94589),
                s = e(20649);

            function h() {
                let t = (0, r.Z)(["\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #6c52ee;\n    height: 700px;\n    border-radius: 0 0 100px 100px;\n    overflow: hidden;\n\n    ", " {\n      height: 468px;\n      border-radius: 0;\n    }\n  "]);
                return h = function() {
                    return t
                }, t
            }

            function d() {
                let t = (0, r.Z)(["\n    position: absolute;\n    z-index: 1;\n    right: 0;\n  "]);
                return d = function() {
                    return t
                }, t
            }

            function l() {
                let t = (0, r.Z)(["\n    position: absolute;\n    z-index: 1;\n    left: 0;\n  "]);
                return l = function() {
                    return t
                }, t
            }

            function C() {
                let t = (0, r.Z)(["\n    width: 100%;\n    background-color: white;\n  "]);
                return C = function() {
                    return t
                }, t
            }

            function c() {
                let t = (0, r.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 45px;\n    position: relative;\n    z-index: 5;\n    margin-top: 100px;\n    & > h3 {\n      ", ";\n      line-height: 72px;\n      text-align: center;\n\n      ", " {\n        font-size: 36px;\n        line-height: 44px;\n      }\n    }\n    & > div:first-of-type {\n      display: flex;\n      align-items: center;\n      flex-direction: row;\n      gap: 43px;\n      justify-content: center;\n      width: 100%;\n\n      & > a:first-of-type > button:first-of-type {\n        color: #6c52ee;\n        min-width: 206px;\n      }\n\n      & > a:last-of-type > button:last-of-type {\n        color: white;\n        min-width: 206px;\n      }\n\n      ", " {\n        flex-direction: column;\n      }\n    }\n\n    ", " {\n      margin-top: 35px;\n      & > h3 {\n        width: 320px;\n      }\n      & > span {\n        display: none;\n      }\n    }\n\n    & > a {\n      ", ";\n      line-height: 21px;\n      opacity: 1;\n      transition: opacity 0.4s;\n      cursor: pointer;\n\n      &:hover {\n        opacity: 0.8;\n      }\n    }\n  "]);
                return c = function() {
                    return t
                }, t
            }
            let a = o.ZP.div.withConfig({
                    componentId: "sc-c605accb-0"
                })(t => {
                    let {
                        theme: {
                            breakpoints: n,
                            down: e
                        }
                    } = t;
                    return (0, o.iv)(h(), e(n.sm))
                }),
                p = o.ZP.div.withConfig({
                    componentId: "sc-c605accb-1"
                })(() => (0, o.iv)(d())),
                f = o.ZP.div.withConfig({
                    componentId: "sc-c605accb-2"
                })(() => (0, o.iv)(l())),
                k = o.ZP.div.withConfig({
                    componentId: "sc-c605accb-3"
                })(() => (0, o.iv)(C())),
                u = o.ZP.div.withConfig({
                    componentId: "sc-c605accb-4"
                })(t => {
                    let {
                        theme: {
                            down: n,
                            breakpoints: e
                        }
                    } = t;
                    return (0, o.iv)(c(), (0, s.Z)({
                        fw: 700,
                        syneFont: !0,
                        fs: 60,
                        color: "#ffffff"
                    }), n(e.sm), n(500), n(e.xs), (0, s.Z)({
                        fs: 17,
                        fw: 400,
                        color: "#ffffff"
                    }))
                });

            function x() {
                let t = (0, r.Z)(["\n    position: absolute;\n    left: 10%;\n    bottom: -5px;\n\n    ", " {\n      display: none;\n    }\n  "]);
                return x = function() {
                    return t
                }, t
            }
            let L = () => (0, i.jsx)(j, {
                    children: (0, i.jsxs)("svg", {
                        width: "230",
                        height: "410",
                        viewBox: "0 0 230 410",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.jsx)("mask", {
                            id: "mask0_420_5602",
                            style: {
                                maskType: "alpha"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "0",
                            y: "28",
                            width: "230",
                            height: "441",
                            children: (0, i.jsx)("path", {
                                d: "M229.014 28H0V469H229.014V28Z",
                                fill: "#D9D9D9"
                            })
                        }), (0, i.jsxs)("g", {
                            mask: "url(#mask0_420_5602)",
                            children: [(0, i.jsx)("path", {
                                d: "M174.63 294.234C185.961 258.946 185.501 238.53 184.548 222.321C183.909 211.542 180.734 201.071 175.319 191.732L164.575 173.215C160.353 165.936 157.994 157.737 157.696 149.326L157.364 139.867V139.825L158.139 139.339C158.139 139.339 178.614 128.502 169.743 112.649C167.18 108.069 160.114 109.534 154.759 111.483L154.827 111.449C154.827 111.449 149.796 102.008 134.463 111.713C134.463 111.713 127.201 115.689 127.201 124.892L82.5816 147.197C79.5763 148.704 76.9286 150.841 74.8258 153.463L69.1643 160.529L64.6862 134.18C64.218 131.413 64.2861 128.578 64.899 125.845L76.205 75.4114C76.205 75.4114 79.5934 61.6535 68.7812 53.1741C65.4609 50.5689 60.5572 51.9311 59.0843 55.8899L34.9315 120.788C33.8673 123.64 33.2799 126.646 33.1862 129.694L31.7559 176.101L30.6577 198.031C30.53 200.662 31.7304 203.182 33.8673 204.732C36.5065 206.647 38.1836 209.618 38.4476 212.871L39.2308 222.508C39.4607 225.343 41.2144 227.82 43.8026 228.987L47.4463 230.621C51.2178 232.315 53.7463 235.959 54.0103 240.088L54.6658 250.424C54.8786 253.821 57.2709 256.681 60.5742 257.49L67.4446 259.184C71.5396 260.189 74.7066 263.424 75.6516 267.527L78.1205 278.305C78.725 280.936 80.649 283.073 83.2031 283.941L86.8639 285.193L93.3086 302.807C98.2805 316.395 99.7534 331.013 97.5909 345.315L78.9123 469.11C78.5377 471.596 79.5678 474.091 81.6111 475.538C88.2601 480.246 105.04 488.802 131.671 480.842C158.803 472.737 175.575 474.67 181.909 476.015C183.373 476.321 184.718 475.172 184.633 473.682C182.658 437.091 173.327 352.356 172.008 313.134C171.795 306.732 172.672 300.338 174.63 294.243V294.234ZM88.9667 202.731L107.296 172.789C108.488 170.839 110.123 169.188 112.064 167.987L126.375 159.091V180.63C122.672 182.179 120.101 184.103 120.101 184.103L89.9713 203.71C89.3328 204.127 88.5666 203.387 88.9667 202.731Z",
                                fill: "white"
                            }), (0, i.jsx)("path", {
                                d: "M132.718 260.308C132.718 260.308 154.334 232.366 159.731 229.583",
                                stroke: "black",
                                strokeWidth: "2.5",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round"
                            }), (0, i.jsx)("path", {
                                d: "M144.415 206.222C144.415 206.222 156.59 197.453 145.931 184.103C136.259 171.989 120.101 184.103 120.101 184.103L89.9715 203.71C89.333 204.127 88.5668 203.387 88.9669 202.731L107.296 172.789C108.488 170.839 110.123 169.188 112.073 167.987L158.156 139.339C158.156 139.339 178.631 128.502 169.76 112.65C165.435 104.919 148.195 114.403 148.195 114.403L82.5988 147.197C79.5935 148.704 76.9458 150.841 74.843 153.463L46.2461 189.16",
                                stroke: "black",
                                strokeWidth: "2.5",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round"
                            }), (0, i.jsx)("path", {
                                d: "M69.1813 160.529L64.7032 134.18C64.235 131.413 64.3031 128.578 64.9161 125.845L76.222 75.4114C76.222 75.4114 79.6104 61.6535 68.7982 53.1741C65.478 50.5689 60.5742 51.9311 59.1013 55.8899L34.9315 120.788C33.8673 123.64 33.2799 126.646 33.1862 129.694L31.7559 176.101L30.6577 198.032C30.53 200.662 31.7304 203.182 33.8673 204.732C36.5065 206.647 38.1836 209.618 38.4476 212.871L39.2308 222.508C39.4607 225.343 41.2144 227.82 43.8026 228.987L47.4463 230.621C51.2178 232.315 53.7463 235.959 54.0103 240.088L54.6658 250.424C54.8786 253.821 57.2709 256.681 60.5742 257.49L67.4446 259.184C71.5396 260.189 74.7066 263.424 75.6516 267.527L78.1205 278.305C78.725 280.936 80.649 283.073 83.2031 283.941L102.103 290.386",
                                stroke: "black",
                                strokeWidth: "2.5",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round"
                            }), (0, i.jsx)("path", {
                                d: "M86.8634 285.193L93.3082 302.808C98.28 316.395 99.7529 331.013 97.5904 345.316L78.9118 469.111C78.5372 471.597 79.5673 474.091 81.6106 475.538C88.2596 480.246 105.04 488.802 131.671 480.842C158.803 472.737 175.575 474.67 181.909 476.015C183.373 476.322 184.718 475.172 184.633 473.682C182.658 437.091 173.327 352.356 172.008 313.135C171.795 306.732 172.672 300.339 174.63 294.243C185.961 258.954 185.501 238.531 184.548 222.329C183.909 211.551 180.734 201.08 175.319 191.74L164.575 173.223C160.353 165.944 157.994 157.746 157.696 149.334L157.364 139.876",
                                stroke: "black",
                                strokeWidth: "2.5",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round"
                            }), (0, i.jsx)("path", {
                                d: "M126.375 180.63V159.091",
                                stroke: "black",
                                strokeWidth: "2.5",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round"
                            }), (0, i.jsx)("path", {
                                d: "M154.828 111.449C154.828 111.449 149.796 102.008 134.463 111.713C134.463 111.713 127.201 115.689 127.201 124.892",
                                stroke: "black",
                                strokeWidth: "2.5",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round"
                            }), (0, i.jsx)("path", {
                                d: "M141.708 249.019C141.708 249.019 146.791 254.025 153.584 249.13C158.19 245.818 173.515 232.017 171.037 223.504C167.836 212.496 165.58 208.861 165.58 208.861C158.854 195.58 144.424 206.222 144.424 206.222L113.877 231.6",
                                stroke: "black",
                                strokeWidth: "2.5",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round"
                            })]
                        }), (0, i.jsx)("path", {
                            d: "M162.772 32.5556C158.335 31.3599 147.914 27.1988 144.444 14.0937C144.321 13.6367 143.684 13.6367 143.561 14.0937C140.091 27.1988 129.67 31.3599 125.232 32.5556C124.781 32.6778 124.781 33.3155 125.232 33.4378C129.67 34.6335 140.091 38.7946 143.561 51.8996C143.684 52.3566 144.321 52.3566 144.444 51.8996C147.914 38.7946 158.335 34.6335 162.772 33.4378C163.224 33.3155 163.224 32.6778 162.772 32.5556Z",
                            fill: "black"
                        }), (0, i.jsx)("path", {
                            d: "M158.474 47.4727L170.351 59.3502",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M168.847 39.6553L175.203 41.3612",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M168.847 26.3383L175.203 24.6377",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M150.656 8.14745L152.362 1.79688",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M137.339 8.14745L135.638 1.79688",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M119.148 26.3383L112.797 24.6377",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M119.148 39.6553L112.797 41.3612",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M137.339 57.8467L135.638 64.2026",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M150.656 57.8467L152.362 64.2026",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M158.474 18.5263L170.351 6.64355",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M129.527 18.5263L117.644 6.64355",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M128.784 48.2178L117.645 59.3512",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }),
                j = o.ZP.div.withConfig({
                    componentId: "sc-5090814a-0"
                })(t => {
                    let {
                        theme: {
                            down: n,
                            breakpoints: e
                        }
                    } = t;
                    return (0, o.iv)(x(), n(e.sm))
                });
            var w = e(40918);
            let g = () => (0, i.jsx)("svg", {
                    width: "27",
                    height: "25",
                    viewBox: "0 0 27 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M22.1636 4.55227C20.5702 3.82117 18.8615 3.2825 17.0749 2.97395C17.0424 2.96799 17.0099 2.98289 16.9932 3.01262C16.7734 3.40349 16.53 3.91336 16.3595 4.31414C14.438 4.02644 12.5263 4.02644 10.6441 4.31414C10.4736 3.90447 10.2214 3.40349 10.0006 3.01262C9.98387 2.98386 9.95135 2.96897 9.91884 2.97395C8.13329 3.28147 6.4246 3.82014 4.83016 4.55227C4.81635 4.55823 4.80453 4.56814 4.79667 4.58103C1.55565 9.42307 0.667761 14.1461 1.10331 18.8106C1.10526 18.8334 1.1181 18.8552 1.13583 18.8691C3.27416 20.4395 5.34554 21.3928 7.37841 22.0247C7.41092 22.0346 7.4454 22.0228 7.4661 21.996C7.94696 21.3393 8.37562 20.6469 8.74315 19.9187C8.76483 19.8761 8.74413 19.8254 8.69979 19.8086C8.01986 19.5507 7.37245 19.2362 6.74965 18.8791C6.70038 18.8503 6.69642 18.7799 6.74179 18.7461C6.87284 18.6479 7.00394 18.5457 7.12909 18.4426C7.15175 18.4237 7.18329 18.4198 7.2099 18.4316C11.3013 20.2996 15.7308 20.2996 19.7739 18.4316C19.8005 18.4187 19.832 18.4227 19.8557 18.4415C19.9808 18.5447 20.1119 18.6479 20.2439 18.7461C20.2892 18.7798 20.2863 18.8503 20.237 18.879C19.6142 19.2431 18.9668 19.5506 18.2859 19.8075C18.2416 19.8244 18.2219 19.876 18.2436 19.9186C18.619 20.6458 19.0477 21.3382 19.5197 21.9949C19.5394 22.0227 19.5748 22.0346 19.6074 22.0247C21.6501 21.3928 23.7215 20.4394 25.8598 18.8691C25.8786 18.8552 25.8904 18.8344 25.8923 18.8115C26.4136 13.4189 25.0192 8.7346 22.196 4.58201C22.1892 4.56814 22.1774 4.55823 22.1636 4.55227ZM9.35424 15.9704C8.12245 15.9704 7.10746 14.8395 7.10746 13.4507C7.10746 12.0618 8.10272 10.9309 9.35424 10.9309C10.6155 10.9309 11.6207 12.0718 11.601 13.4507C11.601 14.8395 10.6057 15.9704 9.35424 15.9704ZM17.6612 15.9704C16.4295 15.9704 15.4145 14.8395 15.4145 13.4507C15.4145 12.0618 16.4098 10.9309 17.6612 10.9309C18.9225 10.9309 19.9277 12.0718 19.908 13.4507C19.908 14.8395 18.9226 15.9704 17.6612 15.9704Z",
                        fill: "#6C52EE"
                    })
                }),
                m = () => (0, i.jsxs)("svg", {
                    width: "25",
                    height: "25",
                    viewBox: "0 0 25 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("g", {
                        clipPath: "url(#clip0_420_5658)",
                        children: (0, i.jsx)("path", {
                            d: "M25 4.74844C24.0703 5.15625 23.0797 5.42656 22.0469 5.55781C23.1094 4.92344 23.9203 3.92656 24.3016 2.725C23.3109 3.31562 22.2172 3.73281 21.0516 3.96563C20.1109 2.96406 18.7703 2.34375 17.3078 2.34375C14.4703 2.34375 12.1859 4.64688 12.1859 7.47031C12.1859 7.87656 12.2203 8.26719 12.3047 8.63906C8.04375 8.43125 4.27344 6.38906 1.74062 3.27813C1.29844 4.04531 1.03906 4.92344 1.03906 5.86875C1.03906 7.64375 1.95312 9.21719 3.31562 10.1281C2.49219 10.1125 1.68437 9.87344 1 9.49688C1 9.5125 1 9.53281 1 9.55312C1 12.0437 2.77656 14.1125 5.10625 14.5891C4.68906 14.7031 4.23438 14.7578 3.7625 14.7578C3.43438 14.7578 3.10312 14.7391 2.79219 14.6703C3.45625 16.7 5.34063 18.1922 7.58125 18.2406C5.8375 19.6047 3.62344 20.4266 1.22656 20.4266C0.80625 20.4266 0.403125 20.4078 0 20.3563C2.27031 21.8203 4.96094 22.6562 7.8625 22.6562C17.2937 22.6562 22.45 14.8438 22.45 8.07187C22.45 7.84531 22.4422 7.62656 22.4312 7.40938C23.4484 6.6875 24.3031 5.78594 25 4.74844Z",
                            fill: "white"
                        })
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsx)("clipPath", {
                            id: "clip0_420_5658",
                            children: (0, i.jsx)("rect", {
                                width: "25",
                                height: "25",
                                fill: "white"
                            })
                        })
                    })]
                });

            function b() {
                let t = (0, r.Z)(["\n    position: absolute;\n    left: ", ";\n    top: ", ";\n    transform: scale(", ");\n  "]);
                return b = function() {
                    return t
                }, t
            }
            let v = t => {
                    let {
                        positionX: n,
                        positionY: e,
                        scale: r,
                        children: o
                    } = t;
                    return (0, i.jsx)(M, {
                        positionX: n,
                        positionY: e,
                        scale: r,
                        children: o
                    })
                },
                M = o.ZP.div.withConfig({
                    componentId: "sc-6b4d75e6-0"
                })(t => {
                    let {
                        positionY: n,
                        positionX: e,
                        scale: i,
                        children: r
                    } = t;
                    return (0, o.iv)(b(), e, n, i)
                }),
                Z = () => (0, i.jsxs)("svg", {
                    width: "78",
                    height: "78",
                    viewBox: "0 0 78 78",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("g", {
                        clipPath: "url(#clip0_420_5633)",
                        children: (0, i.jsx)("path", {
                            d: "M62.5708 51.7379C57.8475 46.9976 47.7401 34.1748 52.9012 15.1253C52.942 14.9831 52.9343 14.8312 52.8789 14.6941C52.8235 14.557 52.7234 14.4425 52.5954 14.3686C52.4673 14.2947 52.3185 14.2654 52.172 14.286C52.0256 14.3066 51.8899 14.3757 51.7871 14.482C37.8703 28.4764 21.7121 26.1348 15.2452 24.4144C15.1037 24.3763 14.9535 24.3861 14.818 24.4421C14.6825 24.4981 14.5692 24.5972 14.4959 24.7242C14.4227 24.8511 14.3935 24.9987 14.4127 25.144C14.4319 25.2894 14.4986 25.4243 14.6024 25.5279C19.3257 30.2681 29.4327 43.0908 24.2716 62.1403C24.2309 62.2825 24.2389 62.4345 24.2943 62.5716C24.3497 62.7087 24.4493 62.8234 24.5773 62.8973C24.7054 62.9712 24.8547 63.0003 25.0012 62.9797C25.1477 62.9592 25.283 62.8899 25.3857 62.7835C39.3025 48.7892 55.4611 51.131 61.928 52.8513C62.0695 52.8894 62.2197 52.8797 62.3552 52.8237C62.4907 52.7676 62.604 52.6686 62.6772 52.5416C62.7505 52.4147 62.7797 52.267 62.7605 52.1217C62.7413 51.9764 62.6746 51.8414 62.5708 51.7379Z",
                            fill: "black"
                        })
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsx)("clipPath", {
                            id: "clip0_420_5633",
                            children: (0, i.jsx)("rect", {
                                width: "56.4686",
                                height: "56.4686",
                                fill: "white",
                                transform: "translate(28.5254 0.291016) rotate(30)"
                            })
                        })
                    })]
                });
            var _ = e(41664),
                y = e.n(_),
                W = e(25675),
                P = e.n(W);
            let I = () => (0, i.jsx)(k, {
                id: "contact",
                children: (0, i.jsxs)(a, {
                    children: [(0, i.jsx)(f, {
                        children: (0, i.jsx)(P(), {
                            src: "/blurs/seventh_block_left_blur.webp",
                            alt: "left_effect",
                            width: 1e3,
                            height: 1e3
                        })
                    }), (0, i.jsx)(p, {
                        children: (0, i.jsx)(P(), {
                            src: "/blurs/seventh_block_right_blur.webp",
                            alt: "right_effect",
                            width: 900,
                            height: 900
                        })
                    }), (0, i.jsx)(v, {
                        positionY: "20%",
                        positionX: "20%",
                        scale: 1,
                        children: (0, i.jsx)(Z, {})
                    }), (0, i.jsx)(v, {
                        positionY: "80%",
                        positionX: "70%",
                        scale: 1,
                        children: (0, i.jsx)(Z, {})
                    }), (0, i.jsx)(L, {}), (0, i.jsxs)(u, {
                        children: [(0, i.jsx)("h3", {
                            children: "Join our community "
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(y(), {
                                href: "#",
                                children: (0, i.jsxs)(w.Z, {
                                    width: 206,
                                    btnColor: "#ffffff",
                                    btnType: "fill",
                                    children: [(0, i.jsx)(g, {}), "Join discord"]
                                })
                            }), (0, i.jsx)(y(), {
                                href: "https://twitter.com/NFD_gg",
                                children: (0, i.jsxs)(w.Z, {
                                    width: 206,
                                    btnColor: "#ffffff",
                                    btnType: "border-only",
                                    children: [(0, i.jsx)(m, {}), "Follow Twitter"]
                                })
                            })]
                        }), (0, i.jsx)(y(), {
                            href: "https://docs.nfd.gg",
                            "aria-label": "Read our whitepaper",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: (0, i.jsx)("span", {
                                children: "Read our whitepaper"
                            })
                        })]
                    })]
                })
            });
            var V = I
        }
    }
]);