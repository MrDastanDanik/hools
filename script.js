// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1.10
// @description  try to take over the world!
// @author       You
// @match        https://hools.online/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hools.online
// @downloadURL  https://raw.githubusercontent.com/MrDastanDanik/hools/main/script.js
// @updateURL    https://raw.githubusercontent.com/MrDastanDanik/hools/main/script.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let work = $(".col-auto.align-self-center.mx-auto")[8].innerText;
    let health = $(".col-auto.align-self-center.mx-auto")[7].innerText;

    let path = location.pathname;
    let pause = 60000;
    let date = new Date();

    let findText;
    let $elements;

    switch (path) {
        case '/game':
            if (health >= 35) {
                console.log($(location).attr('href', "district"));
                $(location).attr('href', "district")
            } else if (work >= 20 && date.getHours() < 23) {
                $(location).attr('href', "work")
            }
            break;
        case '/district':
            if (health >= 35) {
                for (let i = 0; i <= 2; i++) {
                    if($(".col-8")[i].children[0].innerText == "Кузьминишна" || "Бородач" || "Копченый" || "Егор" || "Копченый"){
                        $(location).attr('href', $(".col-8")[i].children[2].children[0].href);
                    }
                }
            } else {
                $(location).attr('href', "game")
            }
            break;
        case '/work':
                if (work >= 20 && date.getHours() < 23) {
                    if ($(".row a")[9].text== "Я берусь!" || "Выполнить"){
                        $(location).attr('href', $(".row a")[9].href);
                    }

                    findText = "Выполнить";
                    $elements = $(".container *").filter(function(){
                        return $(this).html() == findText;
                    });
                    $elements.each(function() { this.click() });

                    findText = "Я берусь!"
                    $elements = $(".container *").filter(function(){
                        return $(this).html() == findText;
                    });
                    $elements.each(function() { this.click() });
                } else {
                    $(location).attr('href', "game")
            }
            break;
        default:
            $(location).attr('href', "game")
    }

    if (((35-health)*30000) > ((20-work)*27500)) {
        pause = (20-work)*27500;
        console.log("work:"+(20-work)*27500);
        console.log(pause);
    } else if (((35-health)*30000) < ((20-work)*27500)) {
        console.log("health:"+(35-health)*27500);
        pause = (35-health)*27500;
        console.log(pause);
    } else {
        setTimeout(function(){location.reload()}, 60000)
    }

}
)();
