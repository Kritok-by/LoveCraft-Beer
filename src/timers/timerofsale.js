
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    let clock = document.querySelector(id);
    console.log(clock);
    let daysSpan = clock.querySelector('.days');
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      let t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days + ('<span>d</span>');
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2) + ('<span>h</span>');
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2) + ('<span>m</span>');
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2) + ('<span>s</span>');

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
  }
  // let deadline = "January 01 2021 00:00:00 GMT+0300";
  let deadlineTen = new Date(Date.parse(new Date()) + 24 * 24 * 60 * 60 * 1000),
  deadlinefive = "Jule 12 2020 19:30:00 GMT+0300",
  deadlinethree = "Jule 20 2020 12:30:00 GMT+0300"




export {initializeClock, deadlineTen, deadlinefive, deadlinethree};