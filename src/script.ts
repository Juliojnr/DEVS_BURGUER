class menu {
	private value: number;
	
	constructor(value: number){
		this.value = value;
    }
    
    public getValue (): number {
       return this.value
    }
}

let value = 0

const Menu = new menu (value);

function burger1 () { 
    value = value + 23
    alert('Valor adicionado');
 }

 function burger2 () { 
    value += 15
    alert('Valor adicionado');
 }

 function burger3 () { 
    value += 50
    alert('Valor adicionado');
 }

 function burger4 () { 
    value += 70
    alert('Valor adicionado');
 }

function carrinho () {
    document.write('<h1>VALOR FINAL</h1>')
    document.write(`Valor final: R$${value}`)
}

