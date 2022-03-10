const submitButtton = document.getElementById('submit-button');
const container = document.getElementById('container');

const calculo = function () {
    const nome = "Renata";
    const notaPrimeiroBimestre =  parseFloat(document.getElementById('notaPrimeiroBimestre').value);
    const notaSegundoBimestre = parseFloat(document.getElementById('notaSegundoBimestre').value);
    const notaTerceiroBimestre = parseFloat(document.getElementById('notaTerceiroBimestre').value);
    const notaQuartoBimestre = parseFloat(document.getElementById('notaQuartoBimestre').value);
//var notaFixada = notaFinal.toFixed(1)//toFixed controla o número de casas decimais após a vírgula. Já faz parte da documentação JS
    const notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;// Precedência dos operadores.
    console.log(notaFinal)
   //container.inner("Bem vinda, " + nome + "! Você foi ");
    
    if (notaFinal >= 6) {
        container.innerHTML = "Parabéns! Aprovada(o), " + "sua nota é:  " + notaFinal;
    } else  {
        container.innerHTML = "Poxa, Reprovada(o), " + "sua nota é: " + notaFinal
    }
   
    return notaFinal;
  
};

submitButtton.addEventListener('click', calculo);

