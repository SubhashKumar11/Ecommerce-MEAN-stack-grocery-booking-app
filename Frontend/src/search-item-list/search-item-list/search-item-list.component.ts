import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchItemService } from '../../services/searchItem/search-item.service';
import { ToastrService } from 'ngx-toastr';
import { AddItemCartService } from '../../services/AddTocart/add-item-cart.service';

@Component({
  selector: 'app-search-item-list',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './search-item-list.component.html',
  styleUrl: './search-item-list.component.css',
})
export class SearchItemListComponent implements OnInit {
  searchResults: any[] = [];
  searchTerm: string = '';
  constructor(
    private itemService: SearchItemService,
    private toaster: ToastrService,
    private addToCartService: AddItemCartService
  ) {}
  ngOnInit(): void {}
  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.itemService.searchItems(this.searchTerm).subscribe(
        (results) => (this.searchResults = results),
        (error) => console.error('Search error:', error)
      );
    }
  }
  addItemToCart(item: any) {
    this.addToCartService.addItemToCart(item).subscribe({
      next: (res) => {
        console.log('item which is added is:', res); // alert('product added to the cart!');
        this.showSuccess();
      },
      error: (error) => {
        console.log(error);
        this.showFail();
      },
    });
  }
  showSuccess() {
    this.toaster.success('item added successfully!', 'Hurray!', {
      closeButton: true,
      timeOut: 10000,
    });
  }
  showFail() {
    this.toaster.error('item already is in the cart', 'ohh!', {
      closeButton: true,
      timeOut: 10000,
    });
  }
}
/**
 * '@angular/core'; import { FormsModule } from '@angular/forms'; import { CommonModule
} from '@angular/common'; import { RouterModule } from '@angular/router'; import {
SearchItemService } from '../servicess/searchItem/search-item.service'; import {
AddItemCartService } from '../servicess/AddTocart/add-item-cart.service'; import {
ToastrService } from 'ngx-toastr'; @Component({ selector: 'app-search-item-list',
standalone: true, imports: [FormsModule,CommonModule,RouterModule], templateUrl:
'./search-item-list.component.html', styleUrl: './search-item-list.component.css' }) export
class SearchItemListComponent { searchResults: any[] = []; searchTerm: string = '';
constructor(private itemService: SearchItemService,private toaster:ToastrService , private
addToCartService : AddItemCartService) {} onSearch(): void { if (this.searchTerm.trim()) {
this.itemService.searchItems(this.searchTerm).subscribe( (results) => this.searchResults
= results, (error) => console.error('Search error:', error) ); } } addItemToCart(item: any) {
this.addToCartService.addItemToCart(item).subscribe({ next: (res) => { console.log('item
which is added is:', res); // alert('product added to the cart!'); this.showSuccess(); }, error:
(error) => { console.log(error); this.showFail(); }, }); } showSuccess() {
this.toaster.success('item added successfully!', 'Hurray!', { closeButton: true, timeOut:
10000 }); } showFail() { this.toaster.error('item already is in the cart', 'ohh!', { closeButton:
true, timeOut:10000 }); } } 
 */
