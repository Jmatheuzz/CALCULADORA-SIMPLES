const display = document.querySelector('.display');
const igual = document.querySelector('#igual');
const reset = document.querySelector('#reset');
const resultado = document.querySelector('.resultado');

let p;
//evento de clicar no igual
igual.addEventListener('click', function () {
    let valorInput = (display.value);
    p = document.createElement('p');
    p.innerHTML = eval(valorInput);
    p.classList.add('result');
    resultado.appendChild(p);
    

    
})


//vai tirar a tag p de resultado

function resetResultado() {
    resultado.removeChild(p);
}

//reseta o input dos número assim que clica
reset.addEventListener('click', function (e) {
    resetaInput();
    resultado.removeChild(p);
})



//função que reseta o input
function resetaInput(){
    display.value = '';
    display.focus();
}


//deletar o ultimo algarismo digitado

function deletaUltimo() {
    const valorInput = display.value;
    display.value = valorInput.slice(0, (valorInput.length - 1));
    resultado.removeChild(p);

}
const del = document.querySelector('#delete');
del.addEventListener('click', function () {
    deletaUltimo();
    display.focus();
    resultado.removeChild(p);
})

//pegando as operações

const soma = document.querySelector('#soma');
const subtracao = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const divisao = document.querySelector('#divisao');


soma.addEventListener('click', function () {
    display.value += '+';
    resultado.removeChild(p);
})
subtracao.addEventListener('click', function () {
    display.value += '-';
    resultado.removeChild(p);
})
multi.addEventListener('click', function () {
    display.value += '*';
    resultado.removeChild(p);
})
divisao.addEventListener('click', function () {
    display.value += '/';
    resultado.removeChild(p);
})


//pegando os valores

const zero = document.querySelector('#zero');
const um = document.querySelector('#um');
const tres = document.querySelector('#tres');
const quatro = document.querySelector('#quatro');
const cinco = document.querySelector('#cinco');
const seis = document.querySelector('#seis');
const sete = document.querySelector('#sete');
const oito = document.querySelector('#oito');
const nove = document.querySelector('#nove');
const ponto = document.querySelector('#ponto');
zero.addEventListener('click', function () {
    display.value += 0;
    resultado.removeChild(p);

    
})
um.addEventListener('click', function () {
    display.value += 1;
    resultado.removeChild(p);
})
dois.addEventListener('click', function () {
    display.value += 2;
    resultado.removeChild(p);
})
tres.addEventListener('click', function () {
    display.value += 3;
    resultado.removeChild(p);

})
quatro.addEventListener('click', function () {
    display.value += 4;
    resultado.removeChild(p);
})
cinco.addEventListener('click', function () {
    display.value += 5;
    resultado.removeChild(p);
})
seis.addEventListener('click', function () {
    display.value += 6;
    resultado.removeChild(p);
})
sete.addEventListener('click', function () {
    display.value += 7;
    resultado.removeChild(p);
})
oito.addEventListener('click', function () {
    display.value += 8;
    resultado.removeChild(p);
})
nove.addEventListener('click', function () {
    display.value += 9;
    resultado.removeChild(p);
})
ponto.addEventListener('click', function () {
    display.value += '.';
    resultado.removeChild(p);
})

