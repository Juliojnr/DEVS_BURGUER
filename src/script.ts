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
