import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { CartComponent } from '../cart/cart.component';
import { AccountComponent } from '../account/account.component';
import { SpecialProductComponent } from '../special-product/special-product.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterModule,CommonModule,ProductSearchComponent,CartComponent,AccountComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
