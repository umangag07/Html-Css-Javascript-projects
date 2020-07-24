 // declared varibales to hold sec/min/hour value
        
        let sec = 0;
        let min = 0;
        let hour = 0;

        // declared vars too hold display value(basically for making single digit value to two digit)
       
       let dispalysec = 0;
        let dispalymin = 0;
        let dispalyhour = 0;

        // declared var to hold the id of the setInterval
        let begin;

        // function to increment the next value(Bascially logic for stopwatch)
        
        function stopwatch() {
            sec += 1;
            if (sec / 60 == 1) {
                min += 1;
                sec = 0;
            }
            if (min / 60 == 1) {
                min = 0;
                hour += 1;
            }
            
            // For adding adding zero to when sec/min/hour is one digit number
            
            if (sec < 10) {
                displaysec = "0" + sec.toString();
            } else {
                displaysec = sec;
            }
            if (min < 10) {
                displaymin = "0" + min.toString();
            } else {
                displaymin = min;
            }
            if (hour < 10) {
                displayhour = "0" + hour.toString();
            } else {
                displayhour = hour;
            }


            document.getElementById("output").innerHTML = "Stop Watch- " + displayhour + ":" + displaymin + ":" + displaysec; // display updated time
        }

        // Events for button start/stop/reset
        
        const button = document.querySelectorAll('button') // for disabling the start button when once stopwatch started.
        
        let start = document.getElementById("Start");
        start.addEventListener("click", () => {
            begin = window.setInterval(stopwatch, 1000);
            button[0].disabled = true;

        })
        let stop = document.getElementById("Stop");
        stop.addEventListener("click", () => {
            window.clearInterval(begin);
            button[0].disabled = false;
        })
        let reset = document.getElementById("Reset");
        reset.addEventListener("click", () => {
            window.clearInterval(begin);
            button[0].disabled = false;
            sec = 0;
            min = 0;
            hour = 0;
            document.getElementById("output").innerHTML = "Stop Watch- 00:00:00";
        })
