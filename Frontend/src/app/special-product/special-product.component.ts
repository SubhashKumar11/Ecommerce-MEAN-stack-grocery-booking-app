import { Component, OnInit } from '@angular/core';
import { GetSpecialProductService } from '../../services/specialProductGetService/get-special-product.service';
import { ToastrService } from 'ngx-toastr';
import { AddItemCartService } from '../../services/AddTocart/add-item-cart.service';
import { CommonModule } from '@angular/common';
interface Product {
  id: number;
  name: string;
  rate: number;
  margin: number;
  mrp: number;
  imageUrl: string;
}
@Component({
  selector: 'app-special-product',
  imports: [CommonModule],
  templateUrl: './special-product.component.html',
  styleUrl: './special-product.component.css',
})
export class SpecialProductComponent implements OnInit {
  productData: Product[] = [];
  constructor(
    private serviceForGetSpecialProduct: GetSpecialProductService,
    private addToCartService: AddItemCartService,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.showSpecialProductList();
  }
  showSpecialProductList() {
    this.serviceForGetSpecialProduct.getProductSpecialType().subscribe(
      (data: Product[]) => {
        this.productData = data; // console.log(this.productData)
      },
      (error) => {
        console.error('Error while fetching products', error);
      }
    );
  } //code to add item to cart
  addItemToCart(item: any) {
    this.addToCartService.addItemToCart(item).subscribe({
      next: (res) => {
        if (res) {
          console.log('item which is added is:', res); //alert('product added to the cart!');
          this.showSuccess();
          // this.reloadCurrentPage();
        } else {
        }
      },
      error: (error) => {
        console.log(error);
        this.showFail();
      },
    });
  }
  reloadCurrentPage() {
    window.location.reload();
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


