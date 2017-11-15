import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  products = [];
  constructor(private _productService: ProductService, private _route: ActivatedRoute) {
    this.products = this._productService.products;
    console.log('Constructing');
    console.log(this.products)
    this._route.paramMap.subscribe(params =>{
      console.log(params.get('id'));
    })
    }

  ngOnInit() {
  }
  delete(idx){
    this._productService.remove(idx)
  }

}
