// @version      0.1.39
$(".btn.justify-content-center.align-items-center.align-content-center.align-self-center.mx-auto")[0].children[0].src = "https://icon-icons.com/downloadimage.php?id=4068&root=38/PNG/32/&file=closeupmode_close_4630.png"
setTimeout(function() {
    let work = $(".col-auto.align-self-center.mx-auto")[8].innerText;
    let health = $(".col-auto.align-self-center.mx-auto")[7].innerText;
    let rub = $(".col-auto.align-self-center.mx-auto")[4].innerText;
    let up = $(".col-auto.align-self-center.mx-auto")[3].innerText.split(/\(/)[1].split(/\%/)[0];

    let path = location.pathname;
    let pause = 30000;
    let date = new Date();

    let findText;
    let $elements;

    if (date.getHours() >= 23) {
        work = 0
    }

    switch (path) {
        case '/game':
            if (health >= 35) {
                $(location).attr('href', "district")
            } else if (work >= 20 && date.getHours() < 23) {
                $(location).attr('href', "work")
            } else {
                pause = ((35 - health) + Math.floor(Math.random() * 10)) * 27000;
                setInterval(function() {
                    location.reload()
                }, pause)
                /*if ((35-health)*27000 > (20-work)*27000 && date.getHours() < 23) {
                    console.log("work:\n"+date+"\n"+((20-work)*27)/60);
                    setInterval(function(){location.reload()}, (20-work)*27000)
                } else if (((35-health)*27000) <= ((20-work)*27000)) {
                    console.log("health:\n"+date+"\n"+((35-health)*27)/60);
                    setInterval(function(){location.reload()}, (35-health)*27000)
                } else {
                    console.log("else");
                    setInterval(function(){location.reload()}, 60000)
                }*/
            }
            console.log(pause);
            Math.floor(((pause/1000)/60)) +":"+ (((pause/1000))-(Math.floor((pause/1000)/60)*60))

            setInterval(function() {
                var timer = new Date();
                timer.setMinutes((pause/1000)/60);
                timer.setSeconds(((pause/1000))-(Math.floor((pause/1000)/60)*60))
                $('.col-auto.align-self-center.mx-auto p')[0].innerText = timer.getMinutes() +":"+ timer.getSeconds()
                pause = pause-1000;
            }, 1000)
            break;
        case '/district':
            if (health >= 35) {
                for (let i = 0; i <= 2; i++) {
                    var opon = $(".col-8")[i].children[0].innerText;
                    if (opon == "Кузьминишна" || opon == "Бородач" || opon == "Копченый" || opon == "Егор" || opon == "Копченый") {
                        $(location).attr('href', $(".col-8")[i].children[2].children[0].href);
                    } else {
                        location.reload()
                    }
                }
            } else {
                $(location).attr('href', "game")
            }
            break;
        case '/fight':
            if (health >= 35) {
                $(location).attr('href', "district")
            } else {
                $(location).attr('href', "game")
            }
            break;
        case '/work':
            if (work >= 20 && date.getHours() < 23) {
                if ($('.row')[10].children[0].children[0].innerText == "Я берусь!") {
                    $(location).attr('href', "work?start=true&name=");
                } else if ($('.row')[10].children[0].children[0].innerText == "Выполнить") {
                    $(location).attr('href', "work?status=go");
                } else {
                    $(location).attr('href', "football")
                }
            } else {
                $(location).attr('href', "football")
            }
            break;
        case '/football':
            var ney = "football?play=1";
            var massy = "football?play=2";
            var ronny = "football?play=3";

            if ($(".row p")[10].innerText.indexOf("Нэй") == 0 || $(".row p")[10].innerText.indexOf("Масси") == 0 || $(".row p")[10].innerText.indexOf("Ронни") == 0) {
                if (rub > 99 && up < 70 && up > 10) {
                    $(location).attr('href', massy)
                } else if (rub > 9) {
                    $(location).attr('href', ney)
                }
                /*else if (rub > 199) {$(location).attr('href', ronny)}*/
                else {
                    $(location).attr('href', "strongbox")
                }
            } else {
                $(location).attr('href', "strongbox")
            }
            break;
        case '/football-play':
            var foot = $(".row p")[10].innerText;
            if (foot.indexOf("Масси") != -1 || foot.indexOf("Нэй") != -1 || foot.indexOf("Ронни") != -1) {
                var kik = "football-play?kick=" + Math.floor(Math.random() * 2) + 1;
                //var kik = "football-play?kick=0";
                $(location).attr('href', kik);
            } else {
                $(location).attr('href', "strongbox")
            }
            break;
        case '/strongbox':
            var curBox = $('form p')[1].innerText.split(/\ /)[3];
            var maxBox = $('.col-9 b')[1].innerText.split(/\. /)[1];

            if (rub > 100 && curBox < maxBox) {
                if ((rub - 100) < (maxBox - curBox)) {
                    $('input')[0].value = rub - 100;
                    $("button[name='operation']")[0].click();
                } else {
                    $('input')[0].value = maxBox - curBox;
                    $("button[name='operation']")[0].click();
                }
            } else {
                $(location).attr('href', "game")
            }
            break
        case '/task':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/history':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/rate':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/center':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/prom':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/stadium':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/firms':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/pub':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/home':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/football':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/market':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/mag':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/tatu':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/loto':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/prom-weapon':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
        case '/prom-clothing':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 20000)
            break;
		case '/bets':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 60000)
            break;
		case '/bets-history':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 60000)
            break;
		case '/bet-match':
            setInterval(function() {
                $(location).attr('href', "game")
            }, 60000)
            break;
        case '/':
            break;
        default:
            $(location).attr('href', "game")
    }

}, 2000);
