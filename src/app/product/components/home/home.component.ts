import { Component, inject } from '@angular/core';
import { ServiceProductService } from '../../../service-product.service';
import { IProduct } from '../../../IProduct';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productService = inject(ServiceProductService);
  router = inject(Router);
  items: IProduct[] = [];
  ngOnInit() {
    this.productService.getAllProducts().subscribe((result) => {
      this.items = result;
    });
  }

  CreateClicked() {
    this.router.navigateByUrl('product/create');
  }
  EditClicked(itemID: number) {
    this.router.navigateByUrl('product/edit/' + itemID);
  }
  DetailsClicked(itemID: number) {
    this.router.navigateByUrl('product/details/' + itemID);
  }
  DeleteClicked(itemID: number) {
    this.router.navigateByUrl('product/delete/' + itemID);
  }
}
