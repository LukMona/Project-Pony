# Project-Pony

13.05.2016

This is my first site project I've ever made, after a first "Front-End Developer Bootcamp" I've attended (in my life! so, please, be gentel with your judgment ;) ).
You may think that this is very fun and also funny thing - site with "My Little Pony". And you will be right! But, at the same time, it's blood on my hands. Hours of work, hump on my back, eyes bleeding, boyfriend gone. At this moment there is only one Pony active, Twilight Sparkle, but in the future I'm planning to add the other five.
So, let's begin with all the important things I should include in my project description:
- clouds in header are made with CSS, and animation is also made in CSS (yaay! CSS animation - love it!);
- the other clouds in header are moving with scrolling - parallax effect, JavaScript writing;
- slider is made with JavaScript, or if you prefer other naming: VanillaJS; 
- for the cute cloud, which are appearing when you click on the bird, I used a jQuery plugin made by AurelioDeRosa, named "Audero Smoke Effect", the one thing is: I needed other cloud shape, so I've switched the image for the one I liked :) (plugin link: https://github.com/AurelioDeRosa/Audero-Smoke-Effect);
- when you click on the pony (at this moment only Twilight Sparkle, for ignoramus: the purple one ;) ), you will be moved automaticly to the part of site about the Pony - a little bit of jQuery magic made that happened;
- progress circles are made with another jQuery plugin, made by kottenator, named "jQuery Circle Progress", but the start of the animation is define with jQuery Window Height checking - made by myself (plugin link: https://github.com/kottenator/jquery-circle-progress);
- background image on ponys' quote is define in CSS by background-attachmend: fixed - that's a simple solution and imo quite impressive for the viewer;
- and the last, but not least: you can talk with Twilight! I'm adding lines in JavaScript and at the end there is a form, where you can write to the Pony (now I'm trying to figure out the PHP, to make it happen, that's the language I need to learn by myself). Form is checking if name and message has more than 5 and 10 signs, and I put a regex to check if mail adress is right. To get the two blue sidebars still blue when I'm adding another lines, I've write a jQuery function that is checking the hight of the middle part of the site and fitting the sidebars height to it.

If you are wondering: is this site working on mobiles? Yes, ineed, yes, it is! I made it RWD, with adding some mediaqueries in the right places. The other thing worth mentionging: it was quite big project for me, so it was easier, because I was working with SASS (style sheet language which made it a lot of easier, thanks heaven for it!).
