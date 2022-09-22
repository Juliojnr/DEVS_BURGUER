class Product  {
    public product_name: string
   public value: number;

   constructor (product_name: string, value: number) {
       this.product_name = product_name;
       this.value = value;
   }
}

class Burguer extends Product {
   public igredients: string;
   public isVegan: boolean;

   constructor (product_name: string, value: number, igredients: string, isVegan:boolean) {
       super(product_name,value);
       this.igredients = igredients;
       this.isVegan = isVegan;
   }
}

class Drinks extends Product {
  public type: string;
   public alcoholic: boolean;

   constructor (product_name: string, value: number, type: string, alcoholic:boolean) {
       super(product_name,value);
       this.type = type;
       this.alcoholic = alcoholic;
   }
}

class Client {
    public username: string;
    public endereco: string;

    constructor (username: string, endereco: string){
        this.username = username;
        this.endereco = endereco;
    }
}

let final_value = 0
const products: Product[] = []


let xegg = new Burguer('X-Egg',5,'Pão brioche, hambúrguer, alface, queijo, molho',false);
let xbacon = new Burguer('X-Bacon', 18,'Pão brioche, hambúrguer, alface, bacon, queijo, presunto, molho, batata palha', false);
let xduplo = new Burguer('X-Duplo', 9,'Pão brioche,2 hambúrguer, alface, queijo, presunto, molho',false);
let xlarica = new Burguer('X-Larica', 15, 'Pão brioche, 2 hambúrguer, alface, tomate,2 bacon,2 queijo,2 presunto, molho da casa, batata palha',false);
let xsalada = new Burguer('X-salada', 23,'Pão de gergelim, hambúrguer feito de feijão servido, alface , tomate, ketchup e maionese isVegana',false)
let xvegan = new Burguer('X-Vegan', 23,'Pão de gergelim, hambúrguer feito de feijão servido, alface , tomate, ketchup e maionese isVegana',true)

function Fxegg () {
    alert('Produto adicionado ao carrinho');
    final_value += xegg.value;
    products.push(xegg);
}

function Fxbacon () {
    alert('Produto adicionado ao carrinho')
    final_value += xbacon.value
    products.push(xbacon)
}

function Fxduplo () {
    alert('Produto adicionado ao carrinho')
    final_value += xduplo.value
    products.push(xduplo)
}

function Fxlarica () {
    alert('Produto adicionado ao carrinho')
    final_value += xlarica.value
    products.push(xlarica)
}

function Fxsalada () {
    alert('Produto adicionado ao carrinho')
    final_value += xsalada.value
    products.push(xsalada)
}

function Fxvegan () {
    alert('Produto adicionado ao carrinho')
    final_value += xvegan.value
    products.push(xvegan)
}

function finalizePurchase () {
    document.write('<h1>Finalize seu pedido</h1>')
    const username = prompt('Digite seu nome')
    const address = prompt('Digite seu endereço')
    let client = new Client (username, address)
    document.write(`<h3>valor R$${final_value}</h3>`)
    document.write(`<h3>valor R$${client}</h3>`)
    for (let index = 0; index < products.length; index++) {
        document.write(`${products}`)
    }
}