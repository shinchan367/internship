self.__BUILD_MANIFEST = function(s, c, e) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, "static/css/1fb6a4afbe990a9b.css", "static/chunks/41-b9c5b8d07f5ba4b5.js", "static/chunks/pages/index-9337d23a09d3dee5.js"],
        "/_error": ["static/chunks/pages/_error-a51993fe870ec2c8.js"],
        "/discount": ["static/chunks/543-cf3d620e70de565b.js", "static/chunks/pages/discount-2bf59dcaeb3d3e9b.js"],
        "/privacy-policy": [s, c, e, "static/chunks/pages/privacy-policy-c69d86cf8c44c0d0.js"],
        "/term-of-use": [s, c, e, "static/chunks/pages/term-of-use-b50b64c44ae385e6.js"],
        "/tg": ["static/chunks/pages/tg-812e7573133d0f78.js"],
        sortedPages: ["/", "/_app", "/_error", "/discount", "/privacy-policy", "/term-of-use", "/tg"]
    }
}("static/chunks/61-fb6626e608910376.js", "static/chunks/974-f2608fd9074614c4.js", "static/chunks/983-91046c0d0a6815e0.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();