var numeroSecreto = 3; // = apenas atribui um valor.

function Chutar() {
  //observar o html, pois minha funcao tera o mesmo nome declarado no onclick.
  var chute = parseInt(document.getElementById("valor").value); // podemos colocar o value nessa variavel. parseInt para indicar que é do tipó numérico, nao usamos parsefloat pela necessidade.
  console.log(chute);
  if (chute == numeroSecreto)
    // == é um comparador lógico, ele compará se são iguais.
    console.log("acertou");
}
