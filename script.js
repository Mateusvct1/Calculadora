
let inputCampo = document.getElementById('inputCampo');
function inserir(num) {

    let novoDigito = inputCampo.value;
    inputCampo.value = novoDigito + num;


}

function reset() {
    inputCampo.value = '0'

}


function apagar() {
    let apagar = inputCampo.value;
    inputCampo.value = apagar.substring(0, apagar.length - 1)
}


function calcular() {

    if (inputCampo.value) {

        inputCampo.value = eval(inputCampo.value)
    } else {
        inputCampo.value = "Erro!";
    }

}
