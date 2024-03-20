import { Component, inject } from '@angular/core';
import { IProduct } from '../../../IProduct';
import { ServiceProductService } from '../../../service-product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  productToDelete: IProduct = {
    id: 0,
    name: '',
  };
  productService = inject(ServiceProductService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  ngOnInit() {
    this.productService
      .getProductByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.productToDelete = resultedItem;
      });
  }

  toHome() {
    this.router.navigateByUrl('product');
  }
  deleteProduct() {
    this.productService
      .deleteProduct(this.productToDelete.id)
      .subscribe((res) => console.log(res));
    alert('Deleted  item with ID: ' + this.productToDelete.id);
    this.router.navigateByUrl('product');
  }
}
