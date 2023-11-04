document.getElementById('year').innerHTML = (new Date().getFullYear());
const form = document.querySelector('form');
const resultadoHTML = document.querySelector('.resultado');

function validar(num1,num2){
  let valido = true;
  
  if(num1.value == ''){
    num1.classList.add('invalid');
    valido = false;
  } else {
    num1.classList.remove('invalid');
  }


  if(num2.value == ''){
    num2.classList.add('invalid');
    valido = false;
  } else {
    num2.classList.remove('invalid');
  }

  return valido;
}

function calcular(num1,num2,operador){
  let resultado = 0;
  switch(operador){
    case 'btnSumar':
      resultado = num1 + num2;
      break;
    case 'btnRestar':
      resultado = num1 - num2;
      break;
    case 'btnMultiplicar':
      resultado = (num1 * num2).toFixed(4);
      break;
    case 'btnDividir':
      resultado = (num1 / num2).toFixed(6);
      break;      
  }

  return resultado;
}

form.addEventListener('submit',(event) => {
  event.preventDefault();

  let { num1, num2, res } = form;
  
  if(!validar(num1,num2)){
    return;
  }
  
  let operacion = event.submitter.getAttribute('id');
  
  let resultado = calcular(+(num1.value),+(num2.value),operacion);

  res.value = resultado

})