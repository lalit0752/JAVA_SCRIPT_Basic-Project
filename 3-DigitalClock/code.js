const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //continuous output time -> set interval method












// const hourHand = document.getElementById('hour');
// const minuteHand = document.getElementById('minute');
// const secondHand = document.getElementById('second');

// setInterval(() => {
//   const now = new Date();

//   const seconds = now.getSeconds();
//   const minutes = now.getMinutes();
//   const hours = now.getHours();

//   const secDeg = (seconds / 60) * 360;
//   const minDeg = (minutes / 60) * 360;
//   const hourDeg = (hours / 12) * 360;

//   secondHand.style.transform = `rotate(${secDeg}deg)`;
//   minuteHand.style.transform = `rotate(${minDeg}deg)`;
//   hourHand.style.transform = `rotate(${hourDeg}deg)`;

// }, 1000);