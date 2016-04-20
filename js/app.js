$(function(){

 function parallaxClouds(){

   var clouds = $(".cloud-parallax");

   $(window).scroll(function(){
     var wScroll = $(this).scrollTop();
     clouds.css({
       "transform" : "translate(0px, "+ wScroll/2 +"px)"
     });

   });

 }

 parallaxClouds()

});
