// ==UserScript==
// @name         Hools
// @version      0.1.21
// @description  try to take over the world!
// @author       DaniilShe
// @match        https://hools.online/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hools.online
// @require      https://github.com/MrDastanDanik/hools/raw/main/script.user.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    if ($('h1').innerText == "502 Bad Gateway") {
        location.reload();
    }
    setInterval(function(){location.reload()}, 1200000)
})();
