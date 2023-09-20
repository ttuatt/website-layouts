
  function clock() {
    const hourARR = document.querySelector('.hours')
    const minuteARR = document.querySelector('.minutes')
    const secondARR = document.querySelector('.seconds')
    const deg = 6;

    setInterval(() => {
      const day = new Date();

      const hour = day.getHours() * 30;
      const minute = day.getMinutes() * deg;
      const sec = day.getSeconds() * deg;

      hourARR.style.transform = `rotateZ(${hour + (minute/12)}deg)`;
      minuteARR.style.transform = `rotateZ(${minute}deg)`;
      secondARR.style.transform = `rotateZ(${sec}deg)`;

    },0)
  };

clock()