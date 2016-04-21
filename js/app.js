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

});
