class Produto{
   #preco;
   #quantidade;
   
    constructor(nome,preco,quantidade){
        if(!nome || !preco<=0 || !quantidade<=0){
            throw new Error("Dados inválidos para o produto");
        }
        this.nome = nome;
        this.#preco = parseFloat(preco);
        this.#quantidade = parseInt(quantidade);
    }

    get preco(){
        return this.#preco;
    }
    get quantidade(){
        return this.#quantidade;
    }
    
    valorTotal(){
        return this.#preco * this.#quantidade;
    }
}

const produtos =[];
document.getElementById('produto-form').addEventListener("submit",function(){e.preventDefault()})
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
try {
    const novoProduto = new Produto(nome, preco, quantidade);
    produtos.push(novoProduto);
    adicionarNaTabela(novoProduto);
    atualizarTotal();
    e.target.reset();
} catch (erro) {
    alert(erro.message);
};

try{
    const novoProduto = new Produto(nome, preco, quantidade);
    produtos.push(novoProduto);
    adicionarNaTabela(novoProduto);
    atualizarTotal();
    e.target.reset();
}catch (erro) {
    alert(erro.message);
};

function adicionarNaTabela(produto){
    const tabela = document.querySelector("#tabela-produtos tbody");
    const row = document.createElement("tr");

    const index = produtos.lenght - 1

    row.innerHTML = `
        <td>${produto.nome}</td>
         <td>${produto.preco.toFixed(2)}</td>
          <td>${produto.quantidade}</td>
           <td>
                 <button onclick=removerProduto(${index})>Remover</button>
           </td>
    `;
    tabela.appendChild(row);
}

function atualizarTotal(){
    const total = produtos.reduce((acc,p)=>acc+p.valorTotal(),0);
    document.getElementById('total').textContent=`Total em estoque: R$ ${total.toFixed(2)}`;
}

function removerProduto(index){
    produtos.splice(index,1);
    atualizarTabela();
}

function atualizarTabela(){
    const tabela = document.querySelector("#tabela-produtos tbody");
}

    