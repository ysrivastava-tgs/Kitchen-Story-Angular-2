import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product_items = [];
  get_product_items:Object[] = [];
  constructor() { }
  pushItems(obj){
    this.product_items.push(obj);
    localStorage.setItem("product items",JSON.stringify(this.product_items));
  }
  getItems(){
    this.get_product_items = JSON.parse(localStorage.getItem("product items") || "[]");
    return this.get_product_items;
  }
}
