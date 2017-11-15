import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  current;
  product;
  
  constructor(private _productService: ProductService, private _route: ActivatedRoute, private router: Router) {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this.current = params.get('id');
      this.product = this._productService.getOne(this.current);
    })  
  }
  onSubmit(){
    this._productService.update(this.current, this.product);
    this.router.navigate(['/products']);
  }
  ngOnInit() {
  }

}
