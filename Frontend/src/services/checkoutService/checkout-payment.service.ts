import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CheckoutPaymentService {
  apiUrl = 'http://localhost:3002';
  constructor(private http: HttpClient) { }
  getTotalSumOfProductInTheCart(): Observable<any[]> {
     const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
     return this.http.get<any[]>(`${this.apiUrl}/totalsum/:${token}`,{ headers}); 
    }
     checkoutForPayment(token:string): Observable<any> { 
      // const token = localStorage.getItem('token'); 
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', });
       return this.http.post<any>(`${this.apiUrl}/payment/:${token}`, { token } ,{headers})
       }
         //verify payment
        verifyPayment(razorpay_order_id : string, razorpay_payment_id : string, razorpay_signature : string): Observable<any>{ 
          const token = localStorage.getItem('token');
           const headers = new HttpHeaders({ 'Content-Type':'application/json' });
         return this.http.post<any>(`${this.apiUrl}/verify-payment/${token}`,
        {razorpay_order_id, razorpay_payment_id, razorpay_signature} ,{headers});
       }
}

