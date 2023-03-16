// ==UserScript==
// @name         Reload
// @namespace    http://tampermonkey.net/
// @version      0.1.25
// @description  try to take over the world!
// @author       DaniilShe
// @match        http://*/*
// @match        https://hools.online/*
// @icon         https://icon-icons.com/downloadimage.php?id=4068&root=38/PNG/32/&file=closeupmode_close_4630.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
        location.reload();
    }, (20*60)*1000)

    setInterval(function() {
        if (document.getElementsByTagName('h1')[0].innerText == "502 Bad Gateway") {
            location.reload();
            console.log(document.getElementsByTagName('h1')[0].innerText);
        }
    }, 5000)

})();
