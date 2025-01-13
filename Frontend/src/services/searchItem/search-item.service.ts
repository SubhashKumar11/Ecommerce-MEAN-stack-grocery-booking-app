import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 interface Product { 
 id: number; name: string; rate: number; margin: number; mrp: number; imageUrl: string; }
@Injectable({
  providedIn: 'root'
})
export class SearchItemService {
  private searchItemurl = 'http://localhost:3002' 
  constructor(private http: HttpClient) { }
  searchItems(searchTerm:string): Observable<Product[]> {
     return this.http.get<Product[]>(`${this.searchItemurl}/searchItem?q=${searchTerm}`); } 
}

 







































