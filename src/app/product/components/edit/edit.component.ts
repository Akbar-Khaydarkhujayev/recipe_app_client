import { Component, OnInit, inject } from '@angular/core';
import { ServiceProductService } from '../../../service-product.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../IProduct';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  productService = inject(ServiceProductService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editedProduct: IProduct = {
    id: 0,
    name: '',
  };
  ngOnInit() {
    this.productService
      .getProductByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((result) => {
        this.editedProduct = result;
      });
  }

  toHome() {
    this.router.navigateByUrl('product');
  }

  editProduct() {
    console.log(this.editedProduct);

    this.productService.editProduct(this.editedProduct).subscribe((res) => {
      alert('Changes has been updated');
      this.router.navigateByUrl('product');
    });
  }
}
