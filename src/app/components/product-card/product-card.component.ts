import { Component } from '@angular/core';
import { ProductButtonComponent } from '../product-button/product-button.component';

@Component({
  selector: 'app-product-card',
  imports: [ProductButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

}
