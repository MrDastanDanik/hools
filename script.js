// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       You
// @match        https://hools.online/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hools.online
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

setInterval(function(){
    location.reload();
}, 30000);

let work = $(".col-auto.align-self-center.mx-auto")[8].innerText;
let stor = location.pathname;


switch (stor) {
    case '/game':
        console.log(stor);
        if (work >=20 ) {;
            $(location).attr('href', "work")
        }
        break;
    case '/district':
        break;
  case '/work':
        if (work >=20 ) {
            //if ($(".row a")[9].text== "Я берусь!" || "Выполнить"){
              //  $(location).attr('href', $(".row a")[9].href);
            //}


            var findText = "Выполнить";
            var $elements = $(".container *").filter(function(){
                return $(this).html() == findText;
            });
            $elements.each(function() { this.click() });

            if($(".row b")[1].innerText < "600") {
                findText = "Я берусь!"
                $elements = $(".container *").filter(function(){
                    return $(this).html() == findText;
                });
                $elements.each(function() { this.click() });
            }
        }
        break;
}




    // Your code here...
})();
