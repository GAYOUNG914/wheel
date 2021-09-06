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
    /*wheel seciton start*/

    // a가 b까지 변할때
    // c는 d까지 변한다.
    // a * ( d - c ) / b + c;

    // var a = 0;
    // var b = 100;
    // var c = 0;
    // var d = 200;

    var a = $(window).scrollTop(),
      b = $("section.wheel").height() - $(window).height(),
      c = -100,
      d = 30,
      valueT = (a * (d - c)) / b + c;

    $(".highlight").css("left", valueT + "%");
    // console.log(valueT);

    let e = $(window).scrollTop(),
      f = $("section.animals").height() - $(window).height(),
      g = -50,
      h = 100,
      valueA = ((e * (h - g)) / f + g) / 2 - 125;
    let animals = $("section.animals .row .row_wrap img");

    if (e > $("section.animals").offset().top - 200) {
      /*animal seciton start*/

      animals.css("transform", `translateY(${-Math.floor(valueA)}%)`);

      // console.log(Math.floor(valueA));
    } else {
      return false;
    }

    var i = $(window).scrollTop(),
      j = $("section.dish").height() - $(window).height(),
      k = 10,
      l = 30,
      valueM = (i * (l - k)) / j + k - 280;

    $(".highlight_dish").css("right", valueM + "%");
    $(".highlight_dish").css("transform", `scale(${valueM - 45})`);
    // console.log(valueT);
    console.log(valueM - 45);

    if (valueM - 45 > 7) {
      $(".highlight_dish").css({ display: "none" });
    } else {
      $(".highlight_dish").css({ display: "inline-block" });
    }

    if (valueM - 45 < 0) {
      $(".highlight_dish").css({ display: "none" });
    } else {
      $(".highlight_dish").css({ display: "inline-block" });
    }
  });

  //Scroll top
  $(window).on("scroll", function (e) {
    let scTop = $(window).scrollTop();
    let divTop1 = $(".wrap1 div:first-child").offset().top - 450;
    let divTop2 = $(".wrap1 div:nth-child(2)").offset().top - 450;
    let divTop3 = $(".wrap1 div:nth-child(3)").offset().top - 450;
    let divTop4 = $(".wrap1 div:nth-child(4)").offset().top - 550;
    let videoVi = $(".videoVi").offset().top + 400;
    let laborH = $(".labor").offset().top - 1000;
    let laborT = $(".labor").offset().top - 500;
    // let $liOdd = $(".labor ul li:nth-child(odd)")
    let $liEvendt = $(".labor ul li:nth-child(even) dl dt");
    let $liFirst = $(".labor ul li:nth-child(1)");
    let $liSec = $(".labor ul li:nth-child(2)");
    let $liThird = $(".labor ul li:nth-child(3)");
    let $liFourth = $(".labor ul li:nth-child(4)");
    let dishT = $(".dish").offset().top - 400;
    let animalsT = $("section.animals").offset().top - 200;

    scTop > divTop1 ? $(".wrap2 div:first-child").addClass("on") : $(".wrap2 div:first-child").removeClass("on");
    scTop > divTop2 ? $(".wrap2 div:nth-child(2)").addClass("on") : $(".wrap2 div:nth-child(2)").removeClass("on");
    scTop > divTop3 ? $(".wrap2 div:nth-child(3)").addClass("on") : $(".wrap2 div:nth-child(3)").removeClass("on");
    scTop > divTop4 ? $(".wrap2 div:nth-child(4)").addClass("on") : $(".wrap2 div:nth-child(4)").removeClass("on");

    scTop > $(".wrap1 > div").offset().top - 100
      ? $(".wrap2 > div, .highlight").addClass("active")
      : $(".wrap2 > div, .highlight").removeClass("active");

    scTop > videoVi ? $(".textVi").addClass("on") : $(".textVi").removeClass("on");

    if (scTop > laborH) {
      $(".wrap2 > div, .highlight").removeClass("active");
      $(".wrap2 > div").css({ bottom: "0", top: "auto" });
    } else {
      $(".wrap2 > div").css({ bottom: "auto", top: "0" });
    }
    // console.log("LABOR" + laborH);
    // console.log("SCT" + scTop);

    if (scTop > laborT) {
      // console.log($liSec);
      gsap.to($liFirst, { y: 0, duration: 0.5, opacity: 1, delay: 0.3 });
      gsap.to($liSec, { y: 0, duration: 0.5, opacity: 1, delay: 0.5 });
      gsap.to($liThird, { y: 0, duration: 0.5, opacity: 1, delay: 0.7 });
      gsap.to($liFourth, { y: 0, duration: 0.5, opacity: 1, delay: 0.9 });
      // gsap.to($dt, { x: 0, opacity: 1 });
      // gsap.to($dd, { delay: 0.5, y: 0, opacity: 1 });
    } else {
      gsap.to($liFirst, { y: 150, opacity: 0, delay: 0.3 });
      gsap.to($liSec, { y: 150, opacity: 0, delay: 0.5 });
      gsap.to($liThird, { y: 150, opacity: 0, delay: 0.7 });
      gsap.to($liFourth, { y: 150, opacity: 0, delay: 0.9 });
      // gsap.to($dt, { x: -50, opacity: 0 });
      // gsap.to($dd, { y: -50, opacity: 0 });
      // gsap.to($liEvendt, { x: 50, opacity: 0 });
    }

    if (scTop > animalsT) {
      $("body").addClass("on");
      $("section.animals .mainTit .mainTit_wrap").css({ display: "block" });
    } else {
      $("body").removeClass("on");
      $("section.animals .mainTit .mainTit_wrap").css({ display: "none" });
    }

    if (scTop > dishT) {
      $("body").addClass("pink");
    } else {
      $("body").removeClass("pink");
    }

    //동물파트 사진들은 스크롤 시 이동에 딜레이주기
    //마우스휠 이벤트
    //마우스휠 위로 -> 이미지 translateY(아래로) / 마우스 아래 -> 이미지 위로
    // console.log(animalImg.offset().top);
  }); //scroll event

  $(".labor ul li > div").mouseover(function () {
    $(this).siblings(".cover").css({ width: "0" });
  });
  $(".labor ul li > div").mouseleave(function () {
    $(this).siblings(".cover").css({ width: "calc(30% + 22px)" });
  });

  let x = 0;
  let y = 0;

  $(".labor ul li > div").mousemove(function (e) {
    //좌표값 중앙을 0으로 초기화
    //x = 컨텐츠 박스의 width()/2 + 왼쪽의 여백값
    //y = 컨텐츠 박스의 height()/2 + 윗쪽의 여백값

    // let x =  $(".move-image").width()/2;
    // let y =  $(".move-image").position().left;
    x = e.clientX - ($(".labor ul li > div").width() / 2 + $(".labor ul li > div").position().left);
    y = e.clientY - ($(".labor ul li > div").height() / 2 + $(".labor ul li > div").position().top);

    $(".labor ul li > div img").attr({ style: "transform: translate(" + x / 20 + "px," + y / 20 + "px)" });
  });

  const cursor = $(".cursor");
  const hover_img = $(".hover_img ");

  //움직임 효과
  $("section.dish").mousemove(function (e) {
    gsap.to(cursor, 0.3, { left: e.pageX - 5, top: e.pageY - 5 });
    gsap.to(hover_img, 0.3, { left: e.pageX - 150, top: e.pageY - 150 });
  });

  //오버 효과
  $("section.dish li .em").mouseenter(function () {
    cursor.addClass("active");
    $(this).children().addClass("on");
  });
  $("section.dish li .em").mouseleave(function () {
    cursor.removeClass("active");
    $(this).children().removeClass("on");
  });
  //em 안의 좌표 구해서 mouseenter mouseleave 먹이기

  $("section.dish").mouseenter(function () {
    cursor.addClass("on");
  });
  $("section.dish").mouseleave(function () {
    cursor.removeClass("on");
  });
});
