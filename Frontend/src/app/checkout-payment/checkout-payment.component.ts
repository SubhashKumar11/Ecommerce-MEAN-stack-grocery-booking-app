import { Component, OnInit } from '@angular/core';
import { CheckoutPaymentService } from '../../services/checkoutService/checkout-payment.service';
import { Router } from '@angular/router';
declare var Razorpay: any;
@Component({
  selector: 'app-checkout-payment',
  imports: [],
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.css',
})
export class CheckoutPaymentComponent implements OnInit {
  constructor(
    private paymentService: CheckoutPaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  makePayment() {
    //const amount = 500; // Amount in INR
    const token = localStorage.getItem('token');
    if (token) {
      this.paymentService.checkoutForPayment(token).subscribe(
        (order: any) => {
          const options = {
            key: 'rzp_test_J4vTqG7mX76ejI', // Replace with your Razorpay Key ID
            amount: order.amount,
            currency: order.currency,
            name: 'kiros',
            description: 'Test Transaction',
            order_id: order.id, // Razorpay Order ID
            handler: (response: any) => {
              const paymentsDetails = {
                payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                signature: response.razorpay_signature,
              };
              this.paymentService
                .verifyPayment(
                  paymentsDetails.payment_id,
                  paymentsDetails.order_id,
                  paymentsDetails.signature
                )
                .subscribe(
                  (res) => {
                    console.log(res);
                  },
                  (error) => {
                    console.log('not getting payments resp about id ', error);
                  }
                );
              if (
                response.razorpay_payment_id &&
                response.razorpay_order_id &&
                response.razorpay_signature
              ) {
                console.log('Payment successful', response);
                this.router.navigateByUrl('/payment-success');
              } else {
                console.log('Payment failled!');
                alert('payment failled!');
              } // Send the response to the backend for signature verification
            },
          };
          const rzp = new Razorpay(options);
          rzp.open();
        },
        (error) => {
          console.error('Error while creating Razorpay order:', error);
        }
      );
    } else {
      console.error('token not found in local storage');
    }
    //this.router.navigateByUrl('/payment-sucess')
  }
}

