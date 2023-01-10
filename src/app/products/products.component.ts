import { Component } from '@angular/core';
import{products} from "../products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  products= products;
  basket :Product[]=[]; // sepet kısmı: Array tutacak
  getTotal():string{
    let total=0;
    for(let item of this.basket){
      total +=item.price * item.quantity;
    }

    return total.toFixed(2) + ' TL';
  }

  decreaseAmount(product: Product): void{
    // Ürün miktarı 0 ise bir şey yapma
    if(product.quantity==0){
      return;
    }

    // Ürün miktarını azalt
    product.quantity--;

    // Ürün miktarı 0 olursa sepetten çıkar
    this.removeIfZero(product);
  }

  increaseAmount(product: Product): void{
    // Sepette yoksa ekle
    this.addIfNotInBasket(product);

  
    //Ürün miktarını artır
    product.quantity++;
  }

  removeIfZero(product:Product) :void{
    if(product.quantity == 0) {
			let index = this.basket.indexOf(product);
			this.basket.splice(index, 1);
		}
  }

  addIfNotInBasket(product : Product) : void {
		if(!this.basket.includes(product) && product.quantity > 0) {
			this.basket.push(product);
		}
	}

  updateBasket (product : Product) : void {
		// Ürün miktarı 0 olursa sepetten çıkar
		this.removeIfZero(product);

		// Sepette yoksa ekle
		this.addIfNotInBasket(product);
	}

  // fonksiyon dışarıya değer döndürmeyecek.
  //order üzerinde iki değer vardı(count ,cost).
  createOrder():void{
    let order ={
      
    }

  }

}
type Product= {
  id:number,
  name:string,
  photoPath:string,
  price:number,
  unit:string,
  quantity:number
};
