$(function(){

  function parallaxClouds(){

    var clouds = $(".cloud-parallax");

    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      clouds.css({
        "transform" : "translate(0px, "+ wScroll/2 +"px)"
      });
    });
  };

  parallaxClouds();


  function infinitePonySlider(){
    var next = $("#nextPony");
    var prev = $("#prevPony");
    var list = $(".pony-list").find("li");
    var widthPhoto = $("li").first().width();

    var ul = $(".pony-list");
    var firstElement = list.first().clone();
    ul.append(firstElement);
    var lastElement = list.last().clone();
    ul.prepend(lastElement);

    var list = $(".pony-list").find("li");

    function setUlSize(){
      list.parent().css("width", (widthPhoto * list.length));
    };

    setUlSize();

    function setFirstPhoto(){
      list.parent().css("left", -widthPhoto);
    };

    setFirstPhoto();

    var index = 1;

    // NEXT CLICK

    next.on("click", function(){
      index++;

      ul.animate({
        left: -(widthPhoto*index),
        opacity: 0,
      }, {
        duration: 0,
        complete: function moveToFirst(){
          if (index === list.length-1){
            index = 1;
            list.parent().css("left", -widthPhoto);
          };
        }
      });

      ul.animate({
        opacity: 1
      }, 1500)

      function ponyPuff(){
        // if(index >= 8) {
        //   index=1;
        // }
        // console.log(index)
        var pony = $(".ponys").eq(index);
        var pony1 = $(".ponys").eq(index-1)

        $(pony).auderoSmokeEffect({
          imagePath: "img/cloud.png",
          repeat: 1,
          posX: 200,
          posY: 220,
        });

        $(pony1).auderoSmokeEffect({
          imagePath: "img/cloud.png",
          repeat: 1,
          posX: 340,
          posY: 170,
        })

      };

      ponyPuff();



    });

    // PREV CLICK

    prev.on("click", function(){
      index--;

      ul.animate({
        left: -(widthPhoto*index),
        opacity: 0,
      }, {
        duration: 0,
        complete: function moveToLast(){
          if (index === 0){
            index = list.length-2;
            list.parent().css("left", -widthPhoto*(list.length-2));
          };
        }
      });

      ul.animate({
        opacity: 1
      }, 1500)

      function ponyPuff(){

        var pony = $(".ponys").eq(index);
        var pony1 = $(".ponys").eq(index-1)

        $(pony).auderoSmokeEffect({
          imagePath: "img/cloud.png",
          repeat: 1,
          posX: 200,
          posY: 220,
        });

        $(pony1).auderoSmokeEffect({
          imagePath: "img/cloud.png",
          repeat: 1,
          posX: 340,
          posY: 170,
        })

      };

      ponyPuff();

    });

  };

  infinitePonySlider();

  function clickOnPony(){
    $(".pony-list").find("a").on("click", function(){
      var hrefInside = $(this).attr("href");
      var checkHrefPosition = $(hrefInside).offset().top;

      $("html, body").animate({
        scrollTop: checkHrefPosition
      }, 2000);
      return false;
    })
  };

  clickOnPony();

  function animateCircles(){

    var circle = document.getElementsByClassName("circle");
    console.log(circle);

    // for (var i = 0; i < circle.length; i++){

      // var circle = circle[i];
      // console.log(circle);

      function setCircleState(i, id, color, state) {
        if (state == 0){
          state = 100;
        }else if (state == 100){
          state = 0;
        }

        var angle = state / 50 * Math.PI - 1 / 2 * Math.PI;
        var c = circle[i].getContext("2d");

        c.clearRect(0, 0, 500, 500);

        c.lineWidth = 8;
        c.strokeStyle = color;
        c.lineCap = 'round';

        c.beginPath();

        c.arc(50, 50, 46, 3 / 2 * Math.PI, angle, false);
        c.stroke();
      };

      function animateCircleState(i,id, color, begin, end) {
        setCircleState(i,id, color, begin);
        if( begin < end ) {

          // setTimeout(function(){
          //   animateCircleState(id, color, begin + 1, end);
          // }, 15);

          for (var i = 0; i < 4; i++) {
              (function(index) {
                  setTimeout(function() {
                    animateCircleState(i,id, color, begin + 1, end);
                  }, i * 1000);
              })(i);
          }

        };
      };

      $(window).on("scroll", function(){
        animateCircleState(circle, '#6BC8FA', 0, 87);
      });

    // };

  };

  animateCircles();

  function intro(){

    $('body').chardinJs('start');

    $(window).on("scroll", function(){
      e.preventDefault();
      if($("#ponyNav").is(":visible")) {
        return ($("body").data("chardinJs")).toggle();
      }else{
        return $("#ponyNav").animate({
          height: 250
        }, 600, function() {
          return ($("body").data("chardinJs")).toggle();
        });
      }
    });
  };

  intro();

});
