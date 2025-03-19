let banco =[{

nome:"Lucas",
saldo:1000

}]


function sacar (nomeuser,saque){

let  cuserr = banco.find(a => a.nome === nomeuser)

if(saque <= cuserr.saldo){

   cuserr.saldo -= saque

console.log("Saldo sacado !! seu novo saldo é de :",cuserr.saldo)

}

else(
    console.log(" Saldo insuficiente :(" )
)




}


sacar("Lucas",500)