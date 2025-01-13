import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddItemCartService } from '../../../services/AddTocart/add-item-cart.service';
import { GetCategoryService } from '../../../services/getCategory/get-category.service';
import { ToastrService } from 'ngx-toastr';
interface Product { 
  id: string;
  name: string;
   rate: number; 
   margin: number; 
   mrp: number; 
   imageUrl: string; 
   category: string; 
}
@Component({
  selector: 'app-grocery',
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css',
})
export class GroceryComponent implements OnInit {
  groceryItems: Product[] = [];
  productData: Product[] = [];
  constructor(
    private addToCartService: AddItemCartService,
    private getAllItemService: GetCategoryService,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllItemsOfGrocery();
  }
  addItemToCart(item: any) {
    this.addToCartService.addItemToCart(item).subscribe({
      next: (res) => {
        if (res.exists) {
          alert('item is already in cart');
        } else {
          console.log('item which is added is:', res);
          //alert('product added to the cart!');
          this.showSuccess();
        }
      },
      error: (error) => {
        this.showFail();
        console.log(error);
      },
    });
  }
  getAllItemsOfGrocery() {
    this.getAllItemService.getGroceryItems().subscribe({
      next: (res) => {
        this.groceryItems = res;
        console.log(res);
      },
      error: (error) => {
        this.productFetchFail();
        console.log('Error while getting cosmetic data', error);
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
  productFetchFail() {
    this.toaster.error('product fetch failled', 'ohh!', {
      closeButton: true,
      timeOut: 10000,
    });
  }
}
