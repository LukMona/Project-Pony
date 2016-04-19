$(function(){

 function parallaxClouds(){


   var clouds = $(".cloud-parallax");

  //  console.log (wScroll);
   console.log(clouds);


   $(window).scroll(function(){
var wScroll = $(this).scrollTop();
     clouds.css({
       "transform" : "translate(0px, "+ wScroll /10 +"%)"
     });

     console.log(clouds.css)

   });

 }

 parallaxClouds()

});
