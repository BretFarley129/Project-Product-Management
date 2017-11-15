import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products = [];
  index = 0;
  
  constructor() { }

  createProduct(product){
    this.products.push(product);
    for( let i = 0; i < this.products.length; i++){
      console.log(this.products[i])
    }
  }
  inc(){
    this.index ++
  }
  getindex(){
    return this.index
  }
  getProducts(){
    return this.products;
  }
  getOne(idx){
    return this.products[idx]
  }
  update(idx, item){
    this.products[idx] = item;
  }
  remove(idx){
    this.products.splice(idx, 1)
  }

}
