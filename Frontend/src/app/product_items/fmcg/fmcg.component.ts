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
  selector: 'app-fmcg',
  imports: [CommonModule],
  templateUrl: './fmcg.component.html',
  styleUrl: './fmcg.component.css',
})
export class FmcgComponent implements OnInit {
  groceryItems: Product[] = [];
  productData: Product[] = [];
  constructor(
    private addToCartService: AddItemCartService,
    private getAllItemService: GetCategoryService,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllItemsOfFmcg();
  }
  addItemToCart(item: any) {
    this.addToCartService.addItemToCart(item).subscribe({
      next: (res) => {
        console.log('item which is added is:', res);
        //alert('product added to the cart!');
        this.showSuccess();
        window.location.reload();
      },
      error: (error) => {
        console.log(error);
        this.showFail();
      },
    });
  }
  getAllItemsOfFmcg() {
    this.getAllItemService.getFmcgItems().subscribe({
      next: (res) => {
        this.groceryItems = res;
        console.log(res);
      },
      error: (error) => {
        this.showFail();
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
}
