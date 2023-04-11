!function(e) {
    var n = {};
    function o(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o),
        r.l = !0,
        r.exports
    }
    o.m = e,
    o.c = n,
    o.d = function(e, n, t) {
        o.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, n) {
        if (1 & n && (e = o(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (o.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var r in e)
                o.d(t, r, function(n) {
                    return e[n]
                }
                .bind(null, r));
        return t
    }
    ,
    o.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return o.d(n, "a", n),
        n
    }
    ,
    o.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    o.p = "/",
    o(o.s = 325)
}({
    325: function(e, n, o) {
        e.exports = o(326)
    },
    326: function(e, n) {
        $(document).ready((function() {
            $(".wrap-social").mouseenter((function() {
                $(this).hasClass("opened") ? ($(this).children(".accord-content").slideUp(),
                $(this).children(".btn-accord").removeClass("opened")) : ($(".wrap-social .accord-content").slideUp(),
                $(".wrap-social .btn-accord").removeClass("opened"),
                $(this).children(".accord-content").slideDown(),
                $(this).children(".btn-accord").addClass("opened"))
            }
            )),
            $(".social-mobile .btn-accord").click((function() {
                $(this).hasClass("opened") ? (console.log("cc"),
                $(".social-mobile .accord-content").slideUp(),
                $(this).removeClass("opened")) : ($(".social-mobile .accord-content").slideUp(),
                $(".social-mobile .btn-accord").removeClass("opened"),
                $(this).next().slideDown(),
                $(this).addClass("opened"))
            }
            ))
        }
        ))
    }
});
