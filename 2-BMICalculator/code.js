const form =document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault() //stop default
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

   if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`;
   } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //show upto 2 decimal
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    //innerHTML → property used to set HTML inside that element
  }

})