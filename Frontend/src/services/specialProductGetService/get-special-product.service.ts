import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 interface Product { id: number; name: string; rate: number; margin: number;
mrp: number; imageUrl: string; }
@Injectable({
  providedIn: 'root'
})
export class GetSpecialProductService {
  private urlForSpecialGetProduct = 'http://localhost:3002/get-special';
  constructor(private http: HttpClient) { } 
  getProductSpecialType(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlForSpecialGetProduct); } 
}
