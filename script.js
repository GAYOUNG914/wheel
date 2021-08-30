$(function () {
  wheelAction = {
    $window: $(window),
    axisY: null,
    ST: null,
    init: function () {
      wheelAction.evtBinding();
    },
    evtBinding: function () {
      $("html, body").on("mousewheel", function (e) {
        wheelAction.ST = wheelAction.$window.scrollTop();
        wheelAction.axisY = e.deltaY;
        if (wheelAction.axisY > 0) {
          wheelAction.wheelUp();
        } else {
          wheelAction.wheelDown();
        }
      });
    },
    wheelUp: function () {
      console.log("up");
    },
    wheelDown: function () {
      console.log("down");
    },
    wheelTest: {
      wheelTest01: function () {
        console.log("test");
      },
    },
  };

  wheelAction.init();

  $(window).on("scroll", function () {
    // a가 b까지 변할때
    // c는 d까지 변한다.
    // a * ( d - c ) / b + c;

    // var a = 0;
    // var b = 100;
    // var c = 0;
    // var d = 200;

    var a = $(window).scrollTop(),
      b = $(document).height() - $(window).height(),
      c = -50,
      d = 50,
      valueT = (a * (d - c)) / b + c;

    $(".highlight").css("left", valueT + "%");
  });

  //Scroll top
  $(window).on("scroll", function (e) {
    let scTop = $(window).scrollTop();
    let divTop1 = $(".wrap1 div:first-child").offset().top - 450;
    let divTop2 = $(".wrap1 div:nth-child(2)").offset().top - 450;
    let divTop3 = $(".wrap1 div:nth-child(3)").offset().top - 450;
    let divTop4 = $(".wrap1 div:nth-child(4)").offset().top - 550;

    scTop > divTop1 ? $(".wrap2 div:first-child").addClass("on") : $(".wrap2 div:first-child").removeClass("on");
    scTop > divTop2 ? $(".wrap2 div:nth-child(2)").addClass("on") : $(".wrap2 div:nth-child(2)").removeClass("on");
    scTop > divTop3 ? $(".wrap2 div:nth-child(3)").addClass("on") : $(".wrap2 div:nth-child(3)").removeClass("on");
    scTop > divTop4 ? $(".wrap2 div:nth-child(4)").addClass("on") : $(".wrap2 div:nth-child(4)").removeClass("on");

    scTop > $(".wrap1 > div").offset().top - 100
      ? $(".wrap2 > div, .highlight").addClass("active")
      : $(".wrap2 > div, .highlight").removeClass("active");
  });
});
