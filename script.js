$(function () {
    //wheelAction
    wheelAction = {
        $window: $(window),
        axisY: null,
        ST: null,
        init: function () {
            this.evtBinding();
        },
        evtBinding: function () {
            $("html, body").on("mousewheel", function (e) {
                wheelAction.ST = wheelAction.$window.scrollTop();
                wheelAction.axisY = e.deltaY;
                if (wheelAction.axisY > 0) {
                }
            });
        },
    };
    wheelAction.init();

    //Scroll formula
    scrollFormula = {
        scroll() {
            $(window).on("scroll", function () {
                scrollFormula.hightlight();
                scrollFormula.animal();
                scrollFormula.value();
            });
        },
        hightlight() {
            let a = $(window).scrollTop(),
                b = $("section.wheel").height() - $(window).height(),
                c = -100,
                d = 30,
                valueT = (a * (d - c)) / b + c;

            $(".highlight").css("left", valueT + "%");
        },
        animal() {
            let e = $(window).scrollTop(),
                f = $("section.animals").height() - $(window).height(),
                g = -50,
                h = 100,
                valueA = ((e * (h - g)) / f + g) / 2 - 125,
                animals = $("section.animals .row .row_wrap img");

            if (e > $("section.animals").offset().top - 200) {
                /*animal section start*/
                animals.css("transform", `translateY(${-Math.floor(valueA)}%)`);
            } else {
                return false;
            }
        },
        value() {
            let i = $(window).scrollTop(),
                j = $("section.dish").height() - $(window).height(),
                k = 15,
                l = 1,
                m = -150,
                n = 100,
                valueM = (i * (l - k)) / j + k + 250,
                valueS = (i * (n - m)) / j + m - 4000;

            $(".highlight_dish").css("transform", `scale(${valueM})`);

            $(".dish_tit_wrap .star").css("transform", `rotate(${valueS}deg)`);
            // console.log(valueS);

            if (valueM > 40) {
                $(".highlight_dish").css({ display: "none" });
                return false;
            } else {
                $(".highlight_dish").css({ display: "inline-block" });
            }

            if (valueM < 0) {
                $(".highlight_dish").css({ display: "none" });
            } else {
                $(".highlight_dish").css({ display: "inline-block" });
            }
        },
    };
    scrollFormula.scroll();

    //Scroll top
    scrollTop = {
        scroll() {
            $(window).on("scroll", function () {
                scrollTop.height();
            });
        },
        height() {
            let scTop = $(window).scrollTop(),
                divTop1 = $(".wrap1 div:first-child").offset().top - 450,
                divTop2 = $(".wrap1 div:nth-child(2)").offset().top - 450,
                divTop3 = $(".wrap1 div:nth-child(3)").offset().top - 450,
                divTop4 = $(".wrap1 div:nth-child(4)").offset().top - 550,
                videoVi = $(".videoVi").offset().top + 400,
                laborH = $(".labor").offset().top - 1000,
                laborT = $(".labor").offset().top - 500,
                $liFirst = $(".labor ul li:nth-child(1)"),
                $liSec = $(".labor ul li:nth-child(2)"),
                $liThird = $(".labor ul li:nth-child(3)"),
                $liFourth = $(".labor ul li:nth-child(4)"),
                dishT = $(".dish").offset().top - 400,
                animalsT = $("section.animals").offset().top - 200;

            scTop > divTop1 ? $(".wrap2 div:nth-child(1)").addClass("on") : $(".wrap2 div:nth-child(1)").removeClass("on");
            scTop > divTop2 ? $(".wrap2 div:nth-child(2)").addClass("on") : $(".wrap2 div:nth-child(2)").removeClass("on");
            scTop > divTop3 ? $(".wrap2 div:nth-child(3)").addClass("on") : $(".wrap2 div:nth-child(3)").removeClass("on");
            scTop > divTop4 ? $(".wrap2 div:nth-child(4)").addClass("on") : $(".wrap2 div:nth-child(4)").removeClass("on");

            scTop > $(".wrap1 > div").offset().top - 100
                ? $(".wrap2 > div, .highlight").addClass("active")
                : $(".wrap2 > div, .highlight").removeClass("active");

            scTop > videoVi ? $(".textVi").addClass("on") : $(".textVi").removeClass("on");

            scTop > laborH
                ? ($(".wrap2 > div, .highlight").removeClass("active"), $(".wrap2 > div").css({ bottom: "0", top: "auto" }))
                : $(".wrap2 > div").css({ bottom: "auto", top: "0" });

            scTop > laborT
                ? (gsap.to($liFirst, { y: 0, duration: 0.5, opacity: 1, delay: 0.3 }),
                  gsap.to($liSec, { y: 0, duration: 0.5, opacity: 1, delay: 0.5 }),
                  gsap.to($liThird, { y: 0, duration: 0.5, opacity: 1, delay: 0.7 }),
                  gsap.to($liFourth, { y: 0, duration: 0.5, opacity: 1, delay: 0.9 }))
                : (gsap.to($liFirst, { y: 150, opacity: 0, delay: 0.3 }),
                  gsap.to($liSec, { y: 150, opacity: 0, delay: 0.5 }),
                  gsap.to($liThird, { y: 150, opacity: 0, delay: 0.7 }),
                  gsap.to($liFourth, { y: 150, opacity: 0, delay: 0.9 }));

            scTop > animalsT
                ? ($("body").addClass("on"), $("section.animals .mainTit .mainTit_wrap").css({ display: "block" }))
                : ($("body").removeClass("on"), $("section.animals .mainTit .mainTit_wrap").css({ display: "none" }));

            scTop > dishT ? $("body").addClass("pink") : $("body").removeClass("pink");
        },
    };
    scrollTop.scroll();

    //labor Section
    laborSection = {
        x: 0,
        y: 0,
        init: function () {
            this.mouseFormula();
        },
        mouseFormula() {
            $(".labor ul li > div").mouseover(function () {
                $(this).siblings(".cover").css({ width: "0" });
            });
            $(".labor ul li > div").mouseleave(function () {
                $(this).siblings(".cover").css({ width: "calc(30% + 22px)" });
            });
            //마우스 포인터 좌표잡기
            $(".labor ul li > div").mousemove(function (e) {
                x = e.clientX - ($(".labor ul li > div").width() / 2 + $(".labor ul li > div").position().left);
                y = e.clientY - ($(".labor ul li > div").height() / 2 + $(".labor ul li > div").position().top);

                $(".labor ul li > div img").attr({ style: "transform: translate(" + x / 20 + "px," + y / 20 + "px)" });
            });
        },
    };
    laborSection.init();

    //dish Section
    dishSection = {
        init: function () {
            dishSection.mouseEvent();
        },
        mouseEvent() {
            const cursor = $(".cursor");
            const hover_img = $(".hover_img ");

            $("section.dish").mousemove(function (e) {
                gsap.to(cursor, 0.3, { left: e.pageX - 5, top: e.pageY - 5 });
                gsap.to(hover_img, 0.3, { left: e.pageX - 150, top: e.pageY - 150 });
            });

            //오버 효과
            $("section.dish li .em")
                .mouseenter(function () {
                    $(this).addClass("on");
                    $(this).next().addClass("on");
                })
                .mouseleave(function () {
                    $(this).removeClass("on");
                    $(this).next().removeClass("on");
                });
        },
    };
    dishSection.init();
});
