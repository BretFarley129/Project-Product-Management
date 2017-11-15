import { Component, OnInit,Input, Output, } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  product = {
    index: 0,
    title: '',
    price: 0,
    url: ''
  };
  constructor(private _productService: ProductService, private router: Router) { 
    console.log('Constructing');    
    }
  ngOnInit() {
  }
  onSubmit(){
    this.product.index = this._productService.getindex();
    this._productService.createProduct(this.product);
    this._productService.inc();
    this.router.navigate(['/products']);
  }

}
