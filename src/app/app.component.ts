import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

// function call
// Decorator
@Component({
  selector: 'app-root',
  imports: [NavbarComponent,FooterComponent,ProductCardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// metadata

export class AppComponent {
  title:string = 'phpCourse';
  
}
