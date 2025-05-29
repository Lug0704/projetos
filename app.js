alert ("bora jogar um jogo?");
let numeroSecreto = parseInt(Math.random () *100 + 1);
console.log(numeroSecreto)
let numeroNovo 
let tentativas = 1;
//se o chute for cagado e tu acertar
while (numeroNovo != numeroSecreto ) {numeroNovo = prompt ('digite um numero entre 1 e 100');



if (numeroSecreto == numeroNovo){ 
break;
}


//se tu for ruim e perder
else {if (numeroNovo > numeroSecreto){ alert (`o numero secreto e menor que ${numeroNovo}`)}
else { alert (`o numero secreto e maior que ${numeroNovo}`)
}tentativas ++
} 




}

let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa'
alert(`voce tem sorte ganhou com ${tentativas} ${palavraTentativas} o numero secreto era ${numeroSecreto}`)
//}

//if (tentativas >1){
 //alert(`voce tem sorte ganhou com ${tentativas} tentativas o numero secreto era ${numeroSecreto}`)
//}
//else{
 //alert(`voce tem sorte ganhou com ${tentativas} tentativa o numero secreto era ${numeroSecreto}`)   
//} 