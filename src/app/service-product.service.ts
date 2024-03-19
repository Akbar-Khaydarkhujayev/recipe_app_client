import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct, IAddProduct } from './IProduct';
import { IRecipe } from './IRecipe';

@Injectable({
  providedIn: 'root',
})
export class ServiceTodoService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAllProducts() {
    return this.httpClient.get<IProduct[]>(
      'http://localhost:5169/api/ToDo/GetAll'
    );
  }

  getProductByID(id: number) {
    return this.httpClient.get<IProduct>(
      'http://localhost:5169/api/ToDo/GetByID/' + id
    );
  }
  editProduct(item: IAddProduct) {
    return this.httpClient.put('http://localhost:5169/api/ToDo/Update', item);
  }
  deleteProduct(id: number) {
    return this.httpClient.delete(
      'http://localhost:5169/api/ToDo/Delete/' + id
    );
  }
  createProduct(item: IAddProduct) {
    return this.httpClient.post<IAddProduct>(
      'http://localhost:5169/api/ToDo/Create',
      item
    );
  }
  getAllRecipes() {
    return this.httpClient.get<IRecipe[]>(
      'http://localhost:5169/api/ToDo/GetAll'
    );
  }
}
