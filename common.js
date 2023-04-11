!function(e) {
    var t = {};
    function a(r) {
        if (t[r])
            return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, a),
        n.l = !0,
        n.exports
    }
    a.m = e,
    a.c = t,
    a.d = function(e, t, r) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(e, t) {
        if (1 & t && (e = a(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (a.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                a.d(r, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return r
    }
    ,
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(t, "a", t),
        t
    }
    ,
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    a.p = "/",
    a(a.s = 10)
}({
    10: function(e, t, a) {
        e.exports = a(11)
    },
    11: function(e, t, a) {
        a(12),
        $(document).ready((function() {
            localStorage.getItem("USE_COOKIES") ? $(".cookies").hide() : $(".cookies").show(),
            window.screen.width > 991 ? ($(window).scroll((function() {
                $(this).scrollTop() > 30 ? $("header").addClass("fixed") : $("header").removeClass("fixed")
            }
            )),
            $(window).scroll((function() {
                var e = $(this).scrollTop();
                $(".container > div").height() - $(".sidebar").height() <= e ? $(".sidebar").addClass("fixed").addClass("bottom") : $(".sidebar").removeClass("fixed").removeClass("bottom"),
                $(".sidebar > li.active > ul > li > a").each((function(t, a) {
                    if ($(this).attr("href").startsWith("#")) {
                        var r = $($(this).attr("href"));
                        0 !== r.length && e > r.offset().top - 150 && ($(".sidebar > li > ul > li").removeClass("active"),
                        $(a).parent().addClass("active"))
                    }
                }
                ))
            }
            )),
            $(".sidebar > li.active.arrow").click((function(e) {
                if ($(e.target).parent().hasClass("arrow"))
                    return $(e.currentTarget).toggleClass("open"),
                    !1
            }
            )),
            $(".sidebar > li > ul > li > a").click((function() {
                if ($(this).attr("href").startsWith("#"))
                    return $("header").hasClass("fixed") ? $(window).scrollTop($($(this).attr("href")).offset().top - 90) : $(window).scrollTop($($(this).attr("href")).offset().top - 170),
                    !1
            }
            ))) : window.orientation && 0 === window.orientation && $("header").addClass("fixed"),
            $("#dong-gop-xa-hoi > li > a").click((function() {
                var e = $(this).attr("href").indexOf("#");
                if (!(e < 0))
                    return $("header").hasClass("fixed") ? $(window).scrollTop($($(this).attr("href").substring(e)).offset().top - 90) : $(window).scrollTop($($(this).attr("href").substring(e)).offset().top - 170),
                    !1
            }
            )),
            $(document).on("click touchend", "button.x, i.x-cookie", (function(e) {
                e.preventDefault(),
                localStorage.setItem("USE_COOKIES", !0),
                $(".cookies").hide()
            }
            )),
            $(".scroll-to-top").click((function() {
                $(window).scrollTop(0)
            }
            )),
            $("form[name=news_subscription]").validate({
                rules: {
                    name: {
                        required: !0,
                        maxlength: 64
                    },
                    email: {
                        required: !0,
                        email: !0,
                        maxlength: 128
                    },
                    type: {
                        required: !0
                    }
                },
                messages: {
                    name: {
                        required: "Họ tên không được để trống!",
                        maxlength: "Họ tên không được vượt quá 64 ký tự!"
                    },
                    email: {
                        required: "Email không được để trống!",
                        email: "Địa chỉ email không hợp lệ!",
                        maxlength: "Email không được vượt quá 64 ký tự!"
                    },
                    type: {
                        required: "Chọn mục nhận tin!"
                    }
                },
                submitHandler: function() {
                    $.ajaxSetup({
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                        }
                    });
                    var e = $("input[name=name]").val()
                      , t = $("input[name=email]").val()
                      , a = parseInt($("select[name=type]").val(), 10)
                      , r = grecaptcha.getResponse();
                    return $.post("/api/news-subscriptions", JSON.stringify({
                        name: e,
                        email: t,
                        type: a,
                        captcha: r
                    })).done((function(e) {
                        if ($(".message").removeClass("error").removeClass("success"),
                        0 == e.status)
                            return $(".message").text("error" === e.msg ? "Email đã tồn tại!" : e.msg),
                            $(".message").addClass("error"),
                            $(".message").show(),
                            !1;
                        $(".message").addClass("success"),
                        $(".message").text("Hệ thống đã ghi nhận thông tin của bạn!"),
                        $(".message").show(),
                        grecaptcha.reset()
                    }
                    )),
                    !1
                }
            }),
            $(window).on("orientationchange", (function(e) {
                switch (e.orientation || window.orientation) {
                case "portrait":
                case 0:
                    $("header").addClass("fixed");
                    break;
                case "landscape":
                case 90:
                    $(this).scrollTop() > 30 ? $("header").addClass("fixed") : $("header").removeClass("fixed")
                }
            }
            ));
            var e = $(".banner_custom #carouselExampleIndicators");
            if (e) {
                var t = e.find(".carousel-indicators").attr("data-quantity-indicator")
                  , a = 12 * t + 6 * t
                  , r = $(document).width()
                  , n = (r - a - 20 - (r < 768 ? 25 : 45)) / 2
                  , s = (r - a - 20 - (r < 768 ? 15 : 35)) / 2;
                e.find(".carousel-control-prev").css("left", n),
                e.find(".carousel-control-next").css("right", s)
            }
        }
        ))
    },
    12: function(e, t) {
        $(document).ready((function() {
            (window.screen.width < 991 || window.innerWidth < 991) && ($("header > div > div > button").click((function() {
                var e = $(this).find("i");
                e.hasClass("fa-bars") ? (e.removeClass("fa-bars"),
                e.addClass("fa-times")) : (e.removeClass("fa-times"),
                e.addClass("fa-bars")),
                $("header > nav").toggleClass("open")
            }
            )),
            $("header > nav > ul > li.arrow").click((function(e) {
                $(this).hasClass("open") || $("header > nav > ul > li.arrow").removeClass("open")
            }
            )),
            $("header > nav ul li.arrow").click((function(e) {
                if ($(e.target).closest("li").hasClass("arrow"))
                    return $(this).toggleClass("open"),
                    !1
            }
            )),
            $(document).click((function(e) {
                0 === $(e.target).closest("header").length && ($("header > nav").removeClass("open"),
                $("header > div > div > button > i").removeClass("fa-times").addClass("fa-bars"))
            }
            )))
        }
        ))
    }
});
