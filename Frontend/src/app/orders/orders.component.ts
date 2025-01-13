import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutPaymentService } from '../../services/checkoutService/checkout-payment.service';
import { AddItemCartService } from '../../services/AddTocart/add-item-cart.service';
interface totalSums {
  total: number;
}
@Component({
  selector: 'app-orders',
  imports: [CommonModule, RouterModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  totalSum: any;
  constructor(
    private orderService: AddItemCartService,
    private itemTotalService: CheckoutPaymentService
  ) {}
  ngOnInit(): void {
    this.ordersDetail();
    this.showTotalSumOfCartProduct();
  }
  ordersDetail() {
    this.orderService.getUserOrders().subscribe(
      (data) => {
        this.orders = data;
        console.log('order details:', this.orders);
      },
      (error) => {
        console.error('error while fetching order', error);
      }
    );
  }

  showTotalSumOfCartProduct() {
    this.itemTotalService.getTotalSumOfProductInTheCart().subscribe({
      next: (res) => {
        this.totalSum = res;
        console.log('my total cart sum:', this.totalSum);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
