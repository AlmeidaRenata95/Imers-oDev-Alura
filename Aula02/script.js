    const  ConverterDolar = function() {
        const  valorElemento = document.getElementById("valorDolar");
     // iremos guardar um valor dentro
    //var valor = valorElemento.value; // essa var vai ser o vlr do elemento, não é o componente do input do html, e sim o valor que for digitado.

            const  valorDolar = valorElemento.value;
            const  valorEmDolarNumerico = parseFloat(valorDolar);
            const  valorEmReal = valorEmDolarNumerico * 5.03;
            console.log(valorEmReal);

            const  elementoValorCovertido = document.getElementById("valorConvertido");
            const  valorConvertido = "O resultado em real é R$ " + valorEmReal;

            elementoValorCovertido.innerHTML = valorConvertido;

            return valorEmReal;

    }
        const  ConverterEuro = function() {
            const  valorElemento = document.getElementById("valorEuro");
         // iremos guardar um valor dentro
        //var valor = valorElemento.value; // essa var vai ser o vlr do elemento, não é o componente do input do html, e sim o valor que for digitado.
    
            const  valorEuro = valorElemento.value;
            const  valorEmDolarNumerico = parseFloat(valorEuro);
            const  valorEmReal = valorEmDolarNumerico * 5.53;
            console.log(valorEmReal);
    
            const  elementoValorCovertido = document.getElementById("valorConvertido");
            const  valorConvertido = "O resultado em real é R$ " + valorEmReal;
    
            elementoValorCovertido.innerHTML = valorConvertido;
    
            return valorEmReal;

        }
        const  ConverterLibra = function() {
            const  valorElemento = document.getElementById("valorLibra");
        
            const  valorLibra = valorElemento.value;
            const  valorEmDolarNumerico = parseFloat(valorLibra);
            const  valorEmReal = valorEmDolarNumerico * 5.53;
            console.log(valorEmReal);
        
            const  elementoValorCovertido = document.getElementById("valorConvertido");
            const  valorConvertido = "O resultado em real é R$ " + valorEmReal;
        
            elementoValorCovertido.innerHTML = valorConvertido;
        
            return valorEmReal;
        }








/*
    const  valor = valorElemento.value;
    const  valorEmEuroNumerico = parseFloat(valorEuro);
    const  valorEmReal = valorEmEuroNumerico * 5.51;

    const  valor = valorElemento.value;
    const  valorEmLibraNumerico = parseFloat(valorLibra);
    const  valorEmReal = valorEmLibraNumerico * 6.55;


    console.log(valorEmReal);
    

    const  elementoValorCovertido = document.getElementById("valorConvertido");
    const  valorConvertido = "O resultado em real é R$ " + valorEmReal
    

    elementoValorCovertido.innerHTML = valorConvertido
*/
