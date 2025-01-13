import { Component } from '@angular/core';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { CartComponent } from '../cart/cart.component';
import { AccountComponent } from '../account/account.component';
import { SpecialProductComponent } from '../special-product/special-product.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-navbar',
  imports: [SpecialProductComponent,RouterModule,ProductListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
