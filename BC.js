
/*Se añade la libreria indicada*/
const SHA256 = require('crypto-js/sha256')
    /*Creamos la clase bloque que tiene como función el constructor bloque
    otra funcion calcularhash y una funcion de minado*/
    class Block 
    {
        constructor(timestamp, data) 
        {
            this.index = 0;
            this.timestamp = timestamp;
            this.data = data;
            this.previousHash = "0";
            this.hash = this.calcularhash();
            this.nonce = 0;
        }
    


        calcularhash() 
        {
            return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString();
        }
        /*La marca de tiempo muestra cuando se creo el bloque 
        esto se utiliza para la extracion de bloque que dura 
        10 minutos*/
        mineBlock(difficulty) 
        {

        }
    }

    /*Devolvemos el ultimo bloque */
    latestBlock() 
    {
        return this.chain[this.chain.length - 1]
    }
    /*añadimos un bloque nuevo comparamos el hash previo con el anteior
    y calculamos el nuevo hash*/
    addBlock(newBlock)
    {
        newBlock.previousHash = this.latestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
        