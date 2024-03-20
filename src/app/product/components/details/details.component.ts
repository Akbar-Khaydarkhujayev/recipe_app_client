import { Component, inject } from '@angular/core';
import { IProduct } from '../../../IProduct';
import { ServiceProductService } from '../../../service-product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  detailsProduct: IProduct = {
    id: 0,
    name: '',
  };
  productService = inject(ServiceProductService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.productService
      .getProductByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.detailsProduct = resultedItem;
      });
  }
}
