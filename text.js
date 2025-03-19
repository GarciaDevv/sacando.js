let clientes = [
    { nome: "João Silva",
         saldo: 1500.75,
          tipoCliente: "Premium" 
    },
    { nome: "Maria Oliveira", saldo: 220.30, tipoCliente: "Padrão" },
    { nome: "Carlos Souza", saldo: 3500.00, tipoCliente: "VIP" },
    { nome: "Ana Costa", saldo: 1280.45, tipoCliente: "Premium" },
    { nome: "Roberto Lima", saldo: 540.80, tipoCliente: "Padrão" },
    { nome: "Patrícia Rocha", saldo: 890.10, tipoCliente: "VIP" },
    { nome: "Ricardo Mendes", saldo: 1235.60, tipoCliente: "Padrão" },
    { nome: "Fernanda Almeida", saldo: 430.25, tipoCliente: "Premium" }
];

// convertendo o array objetos  para JSON
const clientesJSON = JSON.stringify(clientes)

console.log(clientes)
console.log(clientesJSON)

// Convertendo a string JSON de volta para um array de objetos
const clientes2 = JSON.parse(clientesJSON);

console.log(clientes2)

const verificar_saldo = clientes.filter(function(cliente) {
    return cliente.saldo >= 1000;
});

console.log(verificar_saldo) 


const clientesPremium = clientes.filter(cliente => cliente.tipoCliente === "Premium");
console.log(clientesPremium);

clientes.push({ nome: "Lucas Garcia", saldo: 900.00, tipoCliente: "Premiun" })

console.log(clientes)

// Alterando o saldo de um cliente
clientes[8].saldo = 2000.00;
console.log(clientes)