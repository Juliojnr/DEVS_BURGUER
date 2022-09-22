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
    public address: string;

    constructor (username: string, address: string){
        this.username = username;
        this.address = address;
    }
}

let final_value = 0
const products: Product[] = []
const burguer: Burguer[] = []

let isVegan: false


let xegg= new Burguer('X-Egg',15.99,'1 Carne, ovo, queijo',false);
let xbacon = new Burguer('X-Bacon', 17.99,'1 Carne, bacon, 1 queijo', false);
let xlarica = new Burguer('X-Larica', 19.90, '2 Carnes, 2 queijos, salada, gergelim',false);
let xsalada = new Burguer('X-Salada', 16.99, '1 Carne, queijo, bacon, salada, gergelim',false);
let xduplo = new Burguer('X-Duplo', 18.99,'2 Carnes, 2 queijos, picles, gergelim',false);
let xvegan = new Burguer('X-Vegan', 22.99,'Carne de lentilha, cebola, cheiro verde',true)

function Fxegg () {
    alert('Produto adicionado ao carrinho');
    final_value += xegg.value;
    products.push(xegg);
    burguer.push(xegg);
}

function Fxbacon () {
    alert('Produto adicionado ao carrinho')
    final_value += xbacon.value
    products.push(xbacon)
    burguer.push(xbacon);
}

function Fxduplo () {
    alert('Produto adicionado ao carrinho')
    final_value += xduplo.value
    products.push(xduplo)
    burguer.push(xduplo)
}

function Fxlarica () {
    alert('Produto adicionado ao carrinho')
    final_value += xlarica.value
    products.push(xlarica)
    burguer.push(xlarica)
}

function Fxsalada () {
    alert('Produto adicionado ao carrinho')
    final_value += xsalada.value
    products.push(xsalada)
    burguer.push(xsalada)
}

function finalizePurchase () {
    document.write('<h1>Pedido Finalizado</h1>')
    document.write('<h3>O site <DEVS BURGUER> está passando por algumas manutençõeso</h3>')
    document.write('<h3>Aguardem as novidades ( ͡° ͜ʖ ͡°)</h3>')
    const username = prompt('Digite seu nome')
    const address = prompt('Digite seu endereço')
    let client = new Client (username, address)
    document.write(`<h3>Obrigado ${client.username} seu pedido já será entregue para ${client.address}</h3>`)
    document.write(`<h3>valor final do pedido R$${final_value.toFixed(2)}</h3>`)

    for (let index = 0; index < products.length; index++) {
        document.write (`<h3><br>Seu pedido</br></h3>`)
        document.write (`Hambúrguer ${products[index].product_name}`)
        document.write (`Valor R$${products[index].value.toFixed(2)}`)
        document.write (`Igredientes ${burguer[index].igredients}`)
    }
}
