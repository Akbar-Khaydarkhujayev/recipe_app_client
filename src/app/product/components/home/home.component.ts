import { Component, inject } from '@angular/core';
import { ServiceTodoService } from '../../../service-product.service';
import { IProduct } from '../../../IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productService = inject(ServiceTodoService);
  router = inject(Router);
  items: IProduct[] = [];
  ngOnInit() {
    this.productService.getAllProducts().subscribe((result) => {
      this.items = result;
    });
  }

  displayedColumns: string[] = [
    'ID',
    'Title',
    'Description',
    'Category Name',
    'Actions',
  ];

  EditClicked(itemID: number) {
    this.router.navigateByUrl('/edit/' + itemID);
  }
  DetailsClicked(itemID: number) {
    this.router.navigateByUrl('/details/' + itemID);
  }
  DeleteClicked(itemID: number) {
    this.router.navigateByUrl('/delete/' + itemID);
  }
}
