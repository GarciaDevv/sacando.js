let banco = [
    { nome: "Amanda Silva", saldo: 2450, tipo: "Preferencial" },
    { nome: "Bruno Oliveira", saldo: 1280.5, tipo: "Comum" },
    { nome: "Camila Souza", saldo: 5730, tipo: "VIP" },
    { nome: "Diego Costa", saldo: 820.75, tipo: "Comum" },
    { nome: "Eduarda Almeida", saldo: 3600, tipo: "Preferencial" },
    { nome: "Felipe Mendes", saldo: 1000, tipo: "Comum" },
    { nome: "Gabriela Lima", saldo: 12340, tipo: "VIP" },
    { nome: "Henrique Santos", saldo: 645, tipo: "Comum" },
    { nome: "Isabela Pereira", saldo: 4150, tipo: "Preferencial" },
    { nome: "João Ricardo", saldo: 2000, tipo: "Preferencial" },
    { nome: "Karina Barros", saldo: 15680, tipo: "VIP" },
    { nome: "Lucas Martins", saldo: 850.5, tipo: "Comum" },
    { nome: "Mariana Nunes", saldo: 3450, tipo: "Preferencial" },
    { nome: "Natália Vieira", saldo: 7200, tipo: "VIP" },
    { nome: "Otávio Ramos", saldo: 530, tipo: "Comum" },
    { nome: "Patricia Cardoso", saldo: 6000, tipo: "Preferencial" },
    { nome: "Rafael Ferreira", saldo: 9820, tipo: "VIP" },
    { nome: "Sara Barbosa", saldo: 1150, tipo: "Comum" },
    { nome: "Thiago Monteiro", saldo: 2700, tipo: "Preferencial" },
    { nome: "Vitória Campos", saldo: 14900, tipo: "VIP" },
    { nome: "Lucas Garcia", saldo: 20000, tipo: "VIP",senha:"lucas123"}
];

function sacar(nomeuser, saque) {
    let cuserr = banco.find(a => a.nome === nomeuser);
    if (!cuserr) {
        console.log("Cliente não encontrado.");
    } else if (saque <= cuserr.saldo) {
        cuserr.saldo -= saque;
        console.log("Saldo sacado! Seu novo saldo é de:", cuserr.saldo);
    } else {
        console.log("Saldo insuficiente :(");
    }
}

function emprestimo(nomeeuser) {
    let veri = banco.find(b => b.nome === nomeeuser);
    if (!veri) {
        console.log("Cliente não encontrado.");
    } else if (veri.tipo === "VIP") {
        console.log(veri.nome, "Você está apto para empréstimo :)");
    } else {
        console.log(veri.nome, "Você não está apto para esse tipo de empréstimo. Seu tipo de cliente é:", veri.tipo);
    }
}

emprestimo("Mariana Nunes");
emprestimo("Lucas Garcia");
emprestimo("Garcia");

function trasferecia(nometrans, saldo, paraq) {
    let user = banco.find(c => c.nome === nometrans);
    let praquem = banco.find(d => d.nome === paraq);
    if (user && user.saldo >= saldo) {
        praquem.saldo += saldo;
        user.saldo -= saldo;
        console.log(user.nome + " tem um saldo de: " + user.saldo);
console.log(praquem.nome + " tem um saldo de: " + praquem.saldo);

    }
}

trasferecia("Lucas Garcia", 10000, "Mariana Nunes");


function  depositar(nomeruser,valor){

    let user10 = banco.find(r => r.nome === nomeruser)
    user10.saldo += valor

    if(!user10){
        console.log("Nome de usuario não encontrado .")


    }
    else if(user10){

        console.log("Saldo Depositado com sucesso !", `O novo saldo de ${user10.nome} é de: `, user10.saldo);

    }


}

depositar("Lucas Garcia",10000)


let historico = [];

function registrarTransacao(tipo, nome, valor, destinatario = null) {
    historico.push({
        tipo,
        nome,
        valor,
        destinatario,
        data: new Date().toLocaleString()
    });
    console.log(`Transação registrada: ${tipo} de R$${valor} para ${nome}${destinatario ? ` -> ${destinatario}` : ''}`);
}


 registrarTransacao("Transferencia","Lucas Garcia",100,"Mariana Nunes","19-03-2025  11:35")

 let tentativas = 3; // Controla o número de tentativas globalmente

 function autenticar(nomerus, senha) {
     if (tentativas > 0) {
         let nameuser = banco.find(x => x.nome === nomerus);
 
         if (nameuser && nameuser.senha === senha) {
             console.log("Autenticação feita com sucesso!");
             tentativas = 3; // Reseta o número de tentativas após sucesso
             return;
         } else {
             tentativas--; // Decrementa as tentativas disponíveis
             console.log("Senha ou usuário não encontrado. Tentativas restantes:", tentativas);
         }
 
         if (tentativas === 0) {
             console.log("Número máximo de tentativas atingido. Acesso bloqueado.");
         }
     } else {
         console.log("Acesso bloqueado. Entre em contato com o suporte.");
     }
 }
 
 // Testes
 autenticar("Lucas Garcia", "lucas1223");


 function relatoriogeral(){
  
let totalcli = banco.length

let sm = 0
banco.forEach(function(obj){
    sm += obj.saldo
})

console.log(` O total de clientes desse banco é de :${totalcli} Úsuarios`)

console.log("O saldo Total de todos os clientes juntos é de :",sm,"R$")

 }

 relatoriogeral()

function tiposdeclientes(){
    let  tips = []

banco.forEach(function(obj){
    if(obj.tipo === "VIP"){

      tips.push(obj)

        console.log("os Clientes VIPs são :",tips)
    }



})


}

//tiposdeclientes()

function tiposdeclientes2() {
    let tips2 = banco.filter(function(obj) {
        return obj.tipo === "Comum";
    });

    return tips2; // Retorna o array filtrado
}


tiposdeclientes2()