import { Product } from '../inventory-app/inventory-app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-image',
  host: { class: 'ui small image' },
  inputs: ['product'],
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
