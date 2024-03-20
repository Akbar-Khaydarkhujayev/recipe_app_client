import { Component, inject } from '@angular/core';
import { ServiceProductService } from '../../../service-product.service';
import { IAddProduct } from '../../../IProduct';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  productService = inject(ServiceProductService);

  router = inject(Router);

  createProduct: IAddProduct = {
    name: '',
  };
  onSubmit() {
    console.log(this.createProduct);
  }
  create() {
    this.productService
      .createProduct(this.createProduct)
      .subscribe((result) => {
        console.log(this.createProduct);

        alert('Item Saved');
        this.router.navigateByUrl('product');
      });
  }

  onHomeButtonClick() {
    this.router.navigateByUrl('product');
  }
}
