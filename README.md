# personally designed page
귀엽고 키치한 감성으로 인터랙티브한 페이지를 만들어 보고 싶어 구현하게 된 페이지입니다.
2020년에 호주로 다녀온 워킹홀리데이가 주제이며, 스크롤 공식을 사용하여 다양한 인터랙션을 구현해보았습니다.
gsap 이나 animation 또한 활용하여 동적인 느낌을 주려고 하였습니다.

## Link
* https://gayoung914.github.io/wheel/

## Tool
* HTML5
* CSS3
* SCSS
* Jquery
* GSAP

## Skill
* 메인페이지<br>
  - **스크롤 공식**<br>
    👉 a가 b까지 변할 때, c는 d까지 변한다.
```
let a = $(window).scrollTop(),
    b = $("section.wheel").height() - $(window).height(),
    c = -100,
    d = 30,
    valueT = (a * (d - c)) / b + c;

    $(".highlight").css("left", valueT + "%");
```

(내용 추가 중입니다.)

## License
* 개인 포트폴리오를 위해 만들어진 사이트입니다.

