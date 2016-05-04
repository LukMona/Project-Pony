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
  //
  // intro();


  function progressCircles(){

    $("#circle-book").circleProgress({
      value: 0.87,
      size: 100,
      fill: {
        color: "#6BC8FA"
      }
    });

    $("#circle-leadership").circleProgress({
      value: 1,
      size: 100,
      fill: {
        color: "#6BC8FA"
      }
    });

    $("#circle-teleportation").circleProgress({
      value: 0.25,
      size: 100,
      fill: {
        color: "#6BC8FA"
      }
    });

    $("#circle-fire").circleProgress({
      value: 0.5,
      size: 100,
      fill: {
        color: "#6BC8FA"
      }
    });

  };

  progressCircles();

  function talkingPony(){

    var bookBtn = document.querySelector(".books");
    var celestiaBtn = document.querySelector(".celestia");
    var talkList = document.querySelector(".talk");
    var answerBtns = document.querySelector(".talking-button");

    // BOOK 1 ANSWER

    bookBtn.addEventListener("click", function(event){

      bookBtn.parentNode.removeChild(bookBtn);
      celestiaBtn.parentNode.removeChild(celestiaBtn);

      var li = document.createElement("li");
      li.innerHTML = "Szukam książki.";
      var br = document.createElement("br");
      li.classList.add("answer-talk");
      talkList.appendChild(li);
      talkList.appendChild(br);

      var liBook = document.createElement("li");
      var br = document.createElement("br");
      liBook.innerHTML = "Nasza biblioteka w Ponyville jest świetnie zaopatrzona."
      talkList.appendChild(liBook);
      talkList.appendChild(br);
      var liBook2 = document.createElement("li");
      var br = document.createElement("br");
      liBook2.innerHTML = "Ale większość książek jest już wypożyczona."
      talkList.appendChild(liBook2);
      talkList.appendChild(br);
      var liBook3 = document.createElement("li");
      var br = document.createElement("br");
      liBook3.innerHTML = "Zostały tylko te tytuły.";
      talkList.appendChild(liBook3);
      talkList.appendChild(br);
      var liBook4 = document.createElement("li");
      var br = document.createElement("br");
      liBook4.innerHTML = "Może któryś z nich?";
      talkList.appendChild(liBook4);
      talkList.appendChild(br);

      var divAnswer1 = document.createElement("div");
      var divAnswer2 = document.createElement("div");
      divAnswer1.innerHTML = '"Dzielna Do i Poszukiwania Wielkiego Szafiru"';
      divAnswer2.innerHTML = '"Dzielna Do i Puchar Gryfów"';
      divAnswer1.classList.add("answer");
      divAnswer1.classList.add("poszukiwania");
      divAnswer2.classList.add("answer");
      divAnswer2.classList.add("puchar");
      answerBtns.appendChild(divAnswer1);
      answerBtns.appendChild(divAnswer2);

      var checkPosition = $(".talking-button").offset().top;

      $("html, body").animate({
        scrollTop: checkPosition
      }, 1500);
      return false;
    });

    // CELESTIA 1 ANSWER

    celestiaBtn.addEventListener("click", function(event){
      bookBtn.parentNode.removeChild(bookBtn);
      celestiaBtn.parentNode.removeChild(celestiaBtn);

      var li = document.createElement("li");
      li.innerHTML = "Chcę wiedzieć więcej o Księżniczce Celestii.";
      var br = document.createElement("br");
      li.classList.add("answer-talk");
      talkList.appendChild(li);
      talkList.appendChild(br);

      var liCelestia = document.createElement("li");
      var br = document.createElement("br");
      liCelestia.innerHTML = "Jesteś u odpowiedniej osoby."
      talkList.appendChild(liCelestia);
      talkList.appendChild(br);

      var liCelestia2 = document.createElement("li");
      var br = document.createElement("br");
      liCelestia2.innerHTML = "Władczyni Equestrii to moja mentorka."
      talkList.appendChild(liCelestia2);
      talkList.appendChild(br);

      var liCelestia3 = document.createElement("li");
      var br = document.createElement("br");
      liCelestia3.innerHTML = "Jej postać jest taka inspirująca i tyle mogę się od niej nauczyć!"
      talkList.appendChild(liCelestia3);
      talkList.appendChild(br);

      var liCelestia4 = document.createElement("li");
      var br = document.createElement("br");
      liCelestia4.innerHTML = "A Ciebie dlaczego interesuje?"
      talkList.appendChild(liCelestia4);
      talkList.appendChild(br);

      var divAnswer1 = document.createElement("div");
      var divAnswer2 = document.createElement("div");
      divAnswer1.innerHTML = "Interesuje mnie jej siostra.";
      divAnswer2.innerHTML = "Chcę wiedzieć o jej magicznej mocy.";
      divAnswer1.classList.add("answer");
      divAnswer1.classList.add("siostra");
      divAnswer2.classList.add("answer");
      divAnswer2.classList.add("magiczna-moc");
      answerBtns.appendChild(divAnswer1);
      answerBtns.appendChild(divAnswer2);


      var checkPosition = $(".talking-button").offset().top;

      $("html, body").animate({
        scrollTop: checkPosition
      }, 1500);
      return false;
    })

    // BOOK ANSWER 2
    $(".talking-button").on("click", ".poszukiwania", function(){

      var poszukiwaniaBtn = document.querySelector(".poszukiwania");
      var pucharBtn = document.querySelector(".puchar");

      poszukiwaniaBtn.parentNode.removeChild(poszukiwaniaBtn);
      pucharBtn.parentNode.removeChild(pucharBtn);

      var li = document.createElement("li");
      li.innerHTML = 'Poproszę "Dzielną Do i Poszukiwania Wielkiego Szafiru".';
      var br = document.createElement("br");
      li.classList.add("answer-talk");
      talkList.appendChild(li);
      talkList.appendChild(br);

      var liBook = document.createElement("li");
      var br = document.createElement("br");
      liBook.innerHTML = "Świetnie!"
      talkList.appendChild(liBook);
      talkList.appendChild(br);

      var liBook2 = document.createElement("li");
      var br = document.createElement("br");
      liBook2.innerHTML = "To jedna z moich ulubionych."
      talkList.appendChild(liBook2);
      talkList.appendChild(br);

      var liBook3 = document.createElement("li");
      var br = document.createElement("br");
      liBook3.innerHTML = "Mam nadzieję, że będzie Ci się podobać."
      talkList.appendChild(liBook3);
      talkList.appendChild(br);

      var liBook4 = document.createElement("li");
      var br = document.createElement("br");
      liBook4.innerHTML = "Czy mogę Ci pomóc w czymś jeszcze?"
      talkList.appendChild(liBook4);
      talkList.appendChild(br);

      var divAnswer1 = document.createElement("div");
      var divAnswer2 = document.createElement("div");

      divAnswer1.innerHTML = "To wszystko, dziękuję.";
      divAnswer2.innerHTML = "Mam parę pytań o księżniczkę Celestię.";
      divAnswer1.classList.add("answer");
      divAnswer1.classList.add("thats-all");
      divAnswer2.classList.add("answer");
      divAnswer2.classList.add("celestia");
      answerBtns.appendChild(divAnswer1);
      answerBtns.appendChild(divAnswer2);

      var checkPosition = $(".talking-button").offset().top;

      $("html, body").animate({
        scrollTop: checkPosition
      }, 1500);
      return false;
    })

    // CELESTIA ANSWER 2

    $(".talking-button").on("click", ".poszukiwania", function(){

      var siostraBtn = document.querySelector(".siostra");
      var magicznaMocBtn = document.querySelector(".magiczna-moc");

      siostraBtn.parentNode.removeChild(siostraBtn);
      magicznaMocBtn.parentNode.removeChild(magicznaMocBtn);

      var li = document.createElement("li");
      li.innerHTML = 'Poproszę "Dzielną Do i Poszukiwania Wielkiego Szafiru".';
      var br = document.createElement("br");
      li.classList.add("answer-talk");
      talkList.appendChild(li);
      talkList.appendChild(br);

      var liBook = document.createElement("li");
      var br = document.createElement("br");
      liBook.innerHTML = "Świetnie!"
      talkList.appendChild(liBook);
      talkList.appendChild(br);

      var liBook2 = document.createElement("li");
      var br = document.createElement("br");
      liBook2.innerHTML = "To jedna z moich ulubionych."
      talkList.appendChild(liBook2);
      talkList.appendChild(br);

      var liBook3 = document.createElement("li");
      var br = document.createElement("br");
      liBook3.innerHTML = "Mam nadzieję, że będzie Ci się podobać."
      talkList.appendChild(liBook3);
      talkList.appendChild(br);

      var liBook4 = document.createElement("li");
      var br = document.createElement("br");
      liBook4.innerHTML = "Czy mogę Ci pomóc w czymś jeszcze?"
      talkList.appendChild(liBook4);
      talkList.appendChild(br);

      var divAnswer1 = document.createElement("div");
      var divAnswer2 = document.createElement("div");

      divAnswer1.innerHTML = "To wszystko, dziękuję.";
      divAnswer2.innerHTML = "Mam parę pytań o księżniczkę Celestię.";
      divAnswer1.classList.add("answer");
      divAnswer1.classList.add("thats-all");
      divAnswer2.classList.add("answer");
      divAnswer2.classList.add("celestia");
      answerBtns.appendChild(divAnswer1);
      answerBtns.appendChild(divAnswer2);

      var checkPosition = $(".talking-button").offset().top;

      $("html, body").animate({
        scrollTop: checkPosition
      }, 1500);
      return false;
    })

    $(".talking-button").on("click", ".puchar", function(){

      var poszukiwaniaBtn = document.querySelector(".poszukiwania");
      var pucharBtn = document.querySelector(".puchar");

      poszukiwaniaBtn.parentNode.removeChild(poszukiwaniaBtn);
      pucharBtn.parentNode.removeChild(pucharBtn);

      var li = document.createElement("li");
      li.innerHTML = 'Wezmę "Dzielną Do i Puchar Gryfów".';
      var br = document.createElement("br");
      li.classList.add("answer-talk");
      talkList.appendChild(li);
      talkList.appendChild(br);

      var liBook = document.createElement("li");
      var br = document.createElement("br");
      liBook.innerHTML = "Doskonały wybór!"
      talkList.appendChild(liBook);
      talkList.appendChild(br);

      var liBook2 = document.createElement("li");
      var br = document.createElement("br");
      liBook2.innerHTML = "Ta książka aż pachnie przygodami."
      talkList.appendChild(liBook2);
      talkList.appendChild(br);

      var liBook3 = document.createElement("li");
      var br = document.createElement("br");
      liBook3.innerHTML = "Tylko nie próbuj tego w domu!"
      talkList.appendChild(liBook3);
      talkList.appendChild(br);

      var liBook4 = document.createElement("li");
      var br = document.createElement("br");
      liBook4.innerHTML = "Czy masz jeszcze jakieś pytanie?"
      talkList.appendChild(liBook4);
      talkList.appendChild(br);

      var divAnswer1 = document.createElement("div");
      var divAnswer2 = document.createElement("div");

      divAnswer1.innerHTML = "Już wszystko wiem.";
      divAnswer2.innerHTML = "Interesuje mnie księżniczka Celestia.";
      divAnswer1.classList.add("answer");
      divAnswer1.classList.add("thats-all");
      divAnswer2.classList.add("answer");
      divAnswer2.classList.add("celestia");
      answerBtns.appendChild(divAnswer1);
      answerBtns.appendChild(divAnswer2);

      var checkPosition = $(".talking-button").offset().top;

      $("html, body").animate({
        scrollTop: checkPosition
      }, 1500);
      return false;
    });





  };

  talkingPony();

});
