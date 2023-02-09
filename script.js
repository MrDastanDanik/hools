// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1.14
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

    setTimeout(function () {
        let work = $(".col-auto.align-self-center.mx-auto")[8].innerText;
        let health = $(".col-auto.align-self-center.mx-auto")[7].innerText;

        let path = location.pathname;
        let pause;
        let date = new Date();

        let findText;
        let $elements;

switch (path) {
        case '/game':
                if (health >= 35) {
                    $(location).attr('href', "district")
                } else if (work >= 20 && date.getHours() < 23) {
                    $(location).attr('href', "work")
                } else {
                    if ((35-health)*27000 > (20-work)*27000) {
                        setInterval(function(){location.reload()}, (20-work)*27000)
                        console.log("work:\n"+date+"\n"+((20-work)*27)/60);
                    } else if (((35-health)*27000) < ((20-work)*27000)) {
                        setInterval(function(){location.reload()}, (35-health)*27000)
                        console.log("health:\n"+date+"\n"+((35-health)*27)/60);
                    } else {
                        setInterval(function(){location.reload()}, 60000)
                    }
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
        case '/task':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/history':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/rate':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/center':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/prom':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/stadium':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/firms':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/pub':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/home':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/football':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/market':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/mag':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/tatu':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/loto':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/prom-weapon':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/prom-clothing':
            setInterval(function(){$(location).attr('href', "game")}, 60000)
            break;
        case '/':
            break;
        case '/':
            break;
        default:
            $(location).attr('href', "game")
    }

    }, 2000);})();
