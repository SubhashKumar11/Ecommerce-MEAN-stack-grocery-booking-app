import { Routes } from '@angular/router';
import { authGuard } from '../auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { CosmeticComponent } from './product_items/cosmetic/cosmetic.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MasalaComponent } from './product_items/masala/masala.component';
import { GroceryComponent } from './product_items/grocery/grocery.component';
import { FmcgComponent } from './product_items/fmcg/fmcg.component';
import { OthersComponent } from './product_items/others/others.component';
import { AccountComponent } from './account/account.component';
import { HelpsComponent } from './helps/helps.component';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import { OrdersComponent } from './orders/orders.component';
import { OffersComponent } from './offers/offers.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PlacedOrderComponent } from './placed-order/placed-order.component';
import { SearchItemListComponent } from '../search-item-list/search-item-list/search-item-list.component';
export const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'home', component: NavbarComponent },
  { path: 'cosmetic', component: CosmeticComponent },
  { path: 'spices', component: MasalaComponent },
  { path: 'grocery', component: GroceryComponent },
  { path: 'fmcg', component: FmcgComponent },
  { path: 'others', component: OthersComponent },
  { path: 'help', component: HelpsComponent },
  {
    path: 'terms',
    component: TermsComponent,
  },
  { path: 'contact', component: ContactComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [authGuard] },
  { path: 'offers', component: OffersComponent },
  { path: 'register-login', component: LoginRegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search-items-list', component: SearchItemListComponent },
  { path: 'checkout', component: CheckoutPaymentComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'placed-order', component: PlacedOrderComponent },
];


