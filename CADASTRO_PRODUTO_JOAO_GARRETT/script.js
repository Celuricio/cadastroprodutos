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

try{
    const novoProduto = new Produto(nome, preco, quantidade);
    produtos.push(novoProduto);
    adicionarNaTabela(novoProduto);
    atualizarTotal();
    e.target.reset();
}catch (erro) {
    alert(erro.message);
};

const produtos =[];
docuument.getElementById('produto-form').addEventListener("submit",function(){e.preventDefault()})
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;

    const novoProduto = new Produto(nome, preco, quantidade);
    produtos.push(novoProduto);
    adicionarNaTabela(novoProduto);
    atualizarTotal();
    e.target.reset();

    