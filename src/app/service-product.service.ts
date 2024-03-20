import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct, IAddProduct } from './IProduct';

@Injectable({
  providedIn: 'root',
})
export class ServiceProductService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAllProducts() {
    return this.httpClient.get<IProduct[]>(
      'https://localhost:7147/api/Products'
    );
  }

  getProductByID(id: number) {
    return this.httpClient.get<IProduct>(
      'https://localhost:7147/api/Products/' + id
    );
  }
  editProduct(item: IProduct) {
    return this.httpClient.put('https://localhost:7147/api/Products', item);
  }
  deleteProduct(id: number) {
    return this.httpClient.delete('https://localhost:7147/api/Products/' + id);
  }
  createProduct(item: IAddProduct) {
    return this.httpClient.post<IAddProduct>(
      'https://localhost:7147/api/Products',
      item
    );
  }
}
