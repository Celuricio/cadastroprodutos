class Produto{
   #preco;
   #quantidade;
   #
    constructor(nome,preco,quantidade){
        this.nome = nome;
        this.#preco = parseFloat(preco);
        this.#quantidade = parseInt(quantidade);
    }
    
    valorTotal(){
        return this.#preco * this.#quantidade;
    }
}