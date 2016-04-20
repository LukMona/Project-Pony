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

      next.on("click", function(){
        console.log("Działa!");
        index++;

        ul.animate({
          left: -(widthPhoto*index)
        }, {
          duration: 800,
          complete: function moveToFirst(){
            if (index === list.length-1){
              index = 1;
              list.parent().css("left", -widthPhoto);
            };
          }
        });
      });

      prev.on("click", function(){
        console.log("Działa!");
        index--;

        ul.animate({
          left: -(widthPhoto*index)
        }, {
          duration: 800,
          complete: function moveToLast(){
            if (index === 0){
              index = list.length-2;
              list.parent().css("left", -widthPhoto*(list.length-2));
            };
          }
        });
      });

  };

  infinitePonySlider();

});
