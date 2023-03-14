// ==UserScript==
// @name         Hools
// @version      0.1.29
// @description  try to take over the world!
// @author       DaniilShe
// @match        https://hools.online/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hools.online
// @downloadURL  https://github.com/MrDastanDanik/hools/raw/main/Hools.user.js
// @updateURL    https://github.com/MrDastanDanik/hools/raw/main/Hools.user.js
// @require      https://github.com/MrDastanDanik/hools/raw/main/script.user.js
// @require      https://code.jquery.com/jquery-3.2.1.slim.min.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    if ($('h1').innerText == "502 Bad Gateway") {
        location.reload();
    }
    setInterval(function(){location.reload()}, 1200000)
})();
