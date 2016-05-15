# Project-Pony

13.05.2016

This is the first site project I've ever made, after the first "Front-End Developer Bootcamp" I've attended (in my life! so, please, be gentle with your judgment ;) ).

You may think that this is very fun and also a funny thing - a site with "My Little Pony". And you would be right! But, at the same time, it's blood on my hands, hours of work, a hump on my back, eyes bleeding, boyfriend gone. At this moment there is only one Pony active, Twilight Sparkle, but in the future I'm planning to add the other five.

So, let's begin with all the important things I should include in my project description:
- the clouds in the header are made with CSS and animation is also made in CSS (yaay! CSS animation - love it!);
- the other clouds in the header are moved by scrolling - parallax effect, JavaScript writing;
- the slider is made with JavaScript, or if you prefer another naming: VanillaJS; 
- for the cute clouds, which are appearing when you click on the bird, I used a jQuery plugin made by AurelioDeRosa, named "Audero Smoke Effect". One thing to add: I needed another cloud shape, so I've switched the image for the one I liked :) (plugin link: https://github.com/AurelioDeRosa/Audero-Smoke-Effect);
- - when you click on the pony (at this moment only Twilight Sparkle, for ignoramuses: the purple one ;) ), you will be moved automatically to the part of the site about the Pony - a little bit of jQuery magic made that happen;
- progress circles are made with another jQuery plugin, made by kottenator, named "jQuery Circle Progress", but the start of the animation is defined by jQuery Window Height checking - made by me (plugin link: https://github.com/kottenator/jquery-circle-progress);
- the background image on pony's quote is defined in CSS by background-attachment: fixed - that's a simple solution and imo quite impressive for the viewer;
- and last, but not least: you can talk with Twilight! I'm adding lines in JavaScript and at the end there is a form, where you can write to the Pony (now I'm trying to figure out the PHP to make it happen, that's a language I need to learn by myself). The form is checking if the name and message has more than 5 and 10 characters and I put a regex to check if the mail address is right. To get the two blue sidebars to remain blue when I'm adding other lines, I've written a jQuery function that is checking the hight of the middle part of the site and fitting the sidebar's height to it.

If you are wondering: is this site working on mobiles? Yes, indeed, yes, it is! I made it RWD, by adding some mediaqueries in the right places. The other thing worth mentioning: it was quite big project for me, so it was easier, because I was working with SASS (style sheet language which made it a lot of easier, thanks heaven for it!).

http://lukmona.github.io/Project-Pony/
