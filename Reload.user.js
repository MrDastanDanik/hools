// ==UserScript==
// @name         Reload
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       DaniilShe
// @match        http://*/*
// @icon         https://icon-icons.com/downloadimage.php?id=4068&root=38/PNG/32/&file=closeupmode_close_4630.png
// @require      https://code.jquery.com/jquery-3.2.1.slim.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
        if ($('h1').innerText == "502 Bad Gateway") {
            location.reload();
        }
    }, 20000)

})();
