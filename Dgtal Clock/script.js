var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var clock = setInterval( 
    function time()
    {
      var current_date = new Date();
      var hr = current_date.getHours();
      var min = current_date.getMinutes();
      var sec = current_date.getSeconds();

      if (hr < 10)
      {
        hr = "0" + hr;
      }

      if (min < 10)
      {
        min = "0" + min;
      }

      if (sec < 10)
      {
        sec = "0" + sec;
      }

      hours.textContent = hr;
      minutes.textContent = min;
      seconds.textContent =sec;


    },1000
    );