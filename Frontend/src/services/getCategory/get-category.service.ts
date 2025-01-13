import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 interface productCategory { 
  id: string; name: string; rate: number; margin: number; mrp: number; imageUrl: string;
  category: string; } 
@Injectable({
  providedIn: 'root'
})
export class GetCategoryService {
apiUrl = 'http://localhost:3002'
  constructor(private http: HttpClient) { }
  getCosmeticItems():Observable<productCategory[]> {
     return this.http.get<productCategory[]>(`${this.apiUrl}/cosmetic`);
     }
    getGroceryItems():Observable<productCategory[]> {
       return this.http.get<productCategory[]>(`${this.apiUrl}/grocery`); 
  }
   getFmcgItems():Observable<productCategory[]> {
     return this.http.get<productCategory[]>(`${this.apiUrl}/fmcg`);
     }
      getSpeciesItems():Observable<productCategory[]> {
         return this.http.get<productCategory[]>(`${this.apiUrl}/species`); 
        }
    getOthersItems():Observable<productCategory[]> {
       return this.http.get<productCategory[]>(`${this.apiUrl}/others`); 
      } 
    }


