let valor1=25
let valor2= 27
let resultado


//coloquei digite um ou 2 para nao ter chance da pessoa nao escrever subtraçao ou soma diferente do que previ
let promtp = prompt ("digite 1 para subtraçao ou 2 para soma?")
if (promtp == 1) {(resultado=valor1-valor2 )  }

 else{(resultado=valor1+valor2)}

 let subsoma = promtp >1? "soma" : "subtraçao"
console.log (` ${subsoma} de ${valor1} e ${valor2} = ${resultado}`)