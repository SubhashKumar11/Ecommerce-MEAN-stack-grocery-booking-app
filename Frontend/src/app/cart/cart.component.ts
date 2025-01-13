import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddItemCartService } from '../../services/AddTocart/add-item-cart.service';
import { CheckoutPaymentService } from '../../services/checkoutService/checkout-payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItemCount:any; 
  //isLoggedOut: boolean = false; // noItemIncart: any = 0;
  constructor(private cartCountService: AddItemCartService,
     private itemTotalService:CheckoutPaymentService,
     private toaster:ToastrService){}
ngOnInit(): void {
  this.getItemCount(); 
}
getItemCount() { this.cartCountService.getCountOfOrdersInCart().
  subscribe({ next: (res) => { 
    this.cartItemCount = res;
    //console.log('item in cart',this.cartItemCount); 
   this.showSuccess();
   //this.reloadCurrentPage(); 
  }, error:
  (error) => {
     console.log("error occured: ", error);
     } }) 
    } 
    reloadCurrentPage() {
  window.location.reload();
 }
  showSuccess() { 
    this.toaster.success('user created successfully!', 'Hurray!', { closeButton: true, timeOut: 10000 });
}
}
