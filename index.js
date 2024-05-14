
function contarRegressivamente() {
    let numero = document.getElementById('numero').value;

    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0){
        document.getElementById('resultado').innerText = "Insira um numero válido";
        
    }
    let botao = document.getElementById('botao');
    botao.style.display = "none";

    let intervalo = setInterval(function(){
        document.getElementById('resultado').innerText = numero;
        
    if(numero <= 0) {
        clearInterval(intervalo);
        document.getElementById('resultado').innerText = "Tempo esgotado!";
        numeroInput.style.display = 'block';
        botao.style.display = "block";
            
}
numero--;
}, 1000);
}