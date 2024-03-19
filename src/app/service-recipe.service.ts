import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IRecipe, IAddRecipe } from './IRecipe';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root',
})
export class ServiceTodoService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAllRecipes() {
    return this.httpClient.get<IRecipe[]>(
      'http://localhost:5169/api/ToDo/GetAll'
    );
  }

  getRecipeByID(id: number) {
    return this.httpClient.get<IRecipe>(
      'http://localhost:5169/api/ToDo/GetByID/' + id
    );
  }
  editRecipe(item: IAddRecipe) {
    return this.httpClient.put('http://localhost:5169/api/ToDo/Update', item);
  }
  deleteRecipe(id: number) {
    return this.httpClient.delete(
      'http://localhost:5169/api/ToDo/Delete/' + id
    );
  }
  createRecipe(item: IAddRecipe) {
    return this.httpClient.post<IAddRecipe>(
      'http://localhost:5169/api/ToDo/Create',
      item
    );
  }
  getAllProducts() {
    return this.httpClient.get<IProduct[]>(
      'http://localhost:5169/api/Category/Get'
    );
  }
}
