let inputCampo = document.getElementById('inputCampo');
let ligado = false;

function on(){
    ligado = true;
    inputCampo.value = '0'
}

function off(){
    ligado = false;
    inputCampo.value = ''
}
function inserir(num) {

    if (!ligado){
        return;
    }
    let numero = inputCampo.value;
    if (numero.length >= 17) {
        alert('Limite de dígitos atingido');
        return;
     }
  
    let novoDigito = inputCampo.value;

    if (num == '.' && novoDigito.includes('.')) {
        return;
    }

    if (inputCampo.value === '0' && num !== '0') {
        inputCampo.value = num;
     } else {
        inputCampo.value += num;
     }
    

}

function reset() {
    
    if (!ligado){
        return;
    }
    inputCampo.value = '0';

}

function apagar() {
    
    if (!ligado){
        return;
    }
    let apagar = inputCampo.value;
    inputCampo.value = apagar.substring(0, apagar.length - 1)
}

function calcular() {
    
    if (!ligado){
        return;
    }

    if (inputCampo.value) {

        inputCampo.value = eval(inputCampo.value)
    } else {
        inputCampo.value = "Erro!";
    }

}

   


