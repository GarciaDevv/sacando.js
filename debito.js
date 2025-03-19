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

let produtos = [
    { nome: "Camiseta", preco: 49.90, categoria: "Vestuário", estoque: 10 },
    { nome: "Notebook", preco: 2999.99, categoria: "Eletrônicos", estoque: 5 },
    { nome: "Cafeteira", preco: 150.75, categoria: "Eletrodomésticos", estoque: 7 },
    { nome: "Fone de Ouvido", preco: 199.90, categoria: "Eletrônicos", estoque: 12 },
    { nome: "Tênis", preco: 259.40, categoria: "Vestuário", estoque: 8 },
    { nome: "Micro-ondas", preco: 499.99, categoria: "Eletrodomésticos", estoque: 3 },
    { nome: "Smartphone", preco: 1599.90, categoria: "Eletrônicos", estoque: 6 },
    { nome: "Relógio de Pulso", preco: 129.50, categoria: "Acessórios", estoque: 15 }
];



function comprar(nomecliente,nomeproduto,quantidade){
let cliente = clientes.find(a => a.nome === nomecliente)
let produto = produtos.find(b => b.nome === nomeproduto)

if(produto && produto.estoque > 0 && cliente.saldo >= produto.preco * quantidade){

cliente.saldo -= produto.preco *quantidade

console.log(`Compra realizada! Seu novo saldo é de ${cliente.saldo}`);


}
else{

    console.log(`saldo insuficiente ${cliente.saldo}`)
}

}

comprar("Fernanda Almeida","Tênis",1)
