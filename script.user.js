setTimeout(function () {
        let work = $(".col-auto.align-self-center.mx-auto")[8].innerText;
        let health = $(".col-auto.align-self-center.mx-auto")[7].innerText;
        let rub = $(".col-auto.align-self-center.mx-auto")[4].innerText;
        let up = $(".col-auto.align-self-center.mx-auto")[3].innerText.split(/\(/)[1].split(/\%/)[0];

        let path = location.pathname;
        let pause = 30000;
        let date = new Date();

        let findText;
        let $elements;

        if(date.getHours() >= 22){work=0}

        switch (path) {
            case '/game':
                if (health >= 35) {
                    $(location).attr('href', "district")
                } else if (work >= 20 && date.getHours() < 23) {
                    $(location).attr('href', "work")
                } else {
                    pause = ((35-health)+Math.floor(Math.random() * 3))*27000;
                    console.log((pause/1000)/60);
                    setInterval(function(){location.reload()}, pause)
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
                break;
            case '/district':
                if (health >= 35) {
                    for (let i = 0; i <= 2; i++) {
                        var opon = $(".col-8")[i].children[0].innerText;
                        if(opon == "Кузьминишна" || opon == "Бородач" || opon == "Копченый" || opon == "Егор" || opon == "Копченый"){
                            $(location).attr('href', $(".col-8")[i].children[2].children[0].href);
                        } else {location.reload()}
                    }
                } else {
                    $(location).attr('href', "game")
                }
                break;
            case '/work':
                if (work >= 20 && date.getHours() < 23) {
                    if ($(".row a")[9].text == "Я берусь!" || $(".row a")[9].text == "Выполнить"){
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
                    $(location).attr('href', "football")
                    //$(location).attr('href', "game")
                }
                break;
            case '/football':
                var ney = "football?play=1";
                var massy = "football?play=2";
                var ronny = "football?play=3";

                console.log($(".row p")[10].innerText.indexOf("Нэй") == 0);
                console.log(rub > 99);

                if ($(".row p")[10].innerText.indexOf("Нэй") == 0) {
                    if (rub > 99 && up < 90 && up > 10) {
                        $(location).attr('href', massy)
                    } else if (rub > 9) {
                        $(location).attr('href', ney)
                    }  /*else if (rub > 199) {
                        $(location).attr('href', ronny)
                    }*/ else {$(location).attr('href', "game")}
                } else {
                    $(location).attr('href', "game")
                }
                break;
                case '/football-play':
                console.log($(".row p")[10].innerText.indexOf("mrDastan") == 0);
                if ($(".row p")[10].innerText.indexOf("mrDastan") == 0) {
                    var kik = "football-play?kick=" + Math.floor(Math.random() * 2)+1;
                    //var kik = "football-play?kick=0";
                    $(location).attr('href', kik);
                } else {
                    $(location).attr('href', "game")
                }
                break;
            case '/task':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/history':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/rate':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/center':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/prom':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/stadium':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/firms':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/pub':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/home':
                setInterval(function(){$(location).attr('href', "game")}, 5000)
                break;
            case '/football':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/market':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/mag':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/tatu':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/loto':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/prom-weapon':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/prom-clothing':
                setInterval(function(){$(location).attr('href', "game")}, 20000)
                break;
            case '/':
                break;
            default:
                $(location).attr('href', "game")
        }

    }, 2000);