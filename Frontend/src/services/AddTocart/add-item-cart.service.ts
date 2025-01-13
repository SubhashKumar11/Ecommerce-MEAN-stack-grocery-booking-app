import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddItemCartService {
  private apiUrl = "http://localhost:3002";
  constructor(private http: HttpClient) { }

  getUserOrders(): Observable<any[]> { 
    const token = localStorage.getItem('token');
     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     return this.http.get<any[]>(`${this.apiUrl}/orders/:${token}`, { headers });
     }
     //get total number of items in the cart 
     getCountOfOrdersInCart(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    return this.http.get<any[]>(`${this.apiUrl}/itemCount/:${token}`,{headers});
   } 
   //add to cart
    addItemToCart(item: any):Observable<any> {
       const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
        return this.http.post<any>(`${this.apiUrl}/add-item-to-cart`,item,{headers}); 
}
}