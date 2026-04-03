console.log("lalit")
const buttons = document.querySelectorAll('.button');
// to select all buttons
const body = document.querySelector('body');

buttons.forEach(function (button) {  //foreach for nodelist
  console.log(button);
  button.addEventListener('click', function (e) { //listen all the occur events
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});