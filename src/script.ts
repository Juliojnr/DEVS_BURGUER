class Product  {
   private readonly product_name: string
   private readonly value: number;

   constructor (product_name: string, value: number) {
       this.product_name = product_name;
       this.value = value;
   }
}

class Burguer extends Product {
   igredients: string;
   vegan: boolean;

   constructor (product_name: string, value: number, igredients: string, vegan:boolean) {
       super(product_name,value);
       this.igredients = igredients;
       this.vegan = vegan;
   }
}

class Drinks extends Product {
   type: string;
   alcoholic: boolean;

   constructor (product_name: string, value: number, type: string, alcoholic:boolean) {
       super(product_name,value);
       this.type = type;
       this.alcoholic = alcoholic;
   }
}

let xburguer = new Burguer('X-Burguer',5,'Pão brioche, hambúrguer, alface, queijo, molho',false);
let xbacon = new Burguer('X-Bacon', 18,'Pão brioche, hambúrguer, alface, bacon, queijo, presunto, molho, batata palha', false);
let xduplo = new Burguer('X-Duplo', 9,'Pão brioche,2 hambúrguer, alface, queijo, presunto, molho',false);
let xlarica = new Burguer('X-Larica', 15, 'Pão brioche, 2 hambúrguer, alface, tomate,2 bacon,2 queijo,2 presunto, molho da casa, batata palha',false);
let xsalada = new Burguer('X-Vegan', 23,'Pão de gergelim, hambúrguer feito de feijão servido, alface , tomate, ketchup e maionese vegana',true)

