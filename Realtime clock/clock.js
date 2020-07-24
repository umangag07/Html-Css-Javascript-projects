 const opt = {
            weekday: 'long',
            day: 'numeric',
            year: 'numeric',
            month: 'long'
        }
        time = () => {
            a = new Date
            console.log(a);
            let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
            let date = a.toLocaleDateString(undefined, opt);
            document.getElementById('time').innerHTML = "Current Time is- " + time + " <br>on " + date;
        }
        setInterval(time, 1000);
