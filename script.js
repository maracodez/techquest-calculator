let calculation = JSON.parse(localStorage.getItem('calculation'));


 
function updateCalculation(value) {
 calculation += value;
 document.querySelector('.js-calculation')
  .innerHTML =  calculation;
};

function calculationResult() {
  if (calculation.includes('=')) {
  try {
    const result = eval(calculation.slice(0, -1));
   document.querySelector('.js-calculation')
      .innerHTML =  result;
    calculation = result.toString(); 
 } catch (e) {
    document.querySelector('.js-calculation')
     .innerHTML = ("Error in calculation: ", e);
  }
} else  {
  document.querySelector('.js-calculation')
    .innerHTML = ("Calculation must end with '=' to evaluate.")
}
}

localStorage.setItem('calculation', JSON.stringify(calculation))

function clearCalculation() {
  calculation = '';
  document.querySelector('.js-calculation')
    .innerHTML = '';
}

//toggle mode
 // const colorToggle = document.getElementById('#colorToggle');
 /// const modeText = document.getElementById('#modeText');


 // colorToggle.addEventListener('change', () => {

  //  document.body.style.backgroundColor  = colorToggle.checked ? 'black' : 'white';

 //   modeText.textContent = colorToggle.checked ? 'Dark Mode' : 'Light Mode';
 // });
  const container = document.getElementById("container");
  const inputCalculation = document.getElementById("inputcalculation");
  const modeText = document.getElementById("modeText");

  let darkMode = false;

  function toggleMode() {
    if (darkMode) {
      document.body.style.backgroundColor = "white";
      container.style.backgroundColor = "black";
      inputCalculation.style.backgroundColor = "white";
      inputCalculation.style.color = "black";
      modeText.style.color = "white"
      modeText.innerHTML= "Light Mode"; 
    } else {
      document.body.style.backgroundColor = "black";
      container.style.backgroundColor = "white";
      inputCalculation.style.backgroundColor = "black";
      inputCalculation.style.color = "white";
      modeText.style.color = "black";
      modeText.innerHTML= "Dark Mode"; 
    };
    darkMode = !darkMode
  }

 function toggleLight() {
   
 }
