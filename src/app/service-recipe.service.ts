import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IRecipe, IAddRecipe } from './IRecipe';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAllRecipes() {
    return this.httpClient.get<IRecipe[]>('https://localhost:7147/api/Recipes');
  }

  getRecipeByID(id: number) {
    return this.httpClient.get<IRecipe>(
      'https://localhost:7147/api/Recipes/' + id
    );
  }
  editRecipe(item: IAddRecipe) {
    return this.httpClient.put('https://localhost:7147/api/Recipes', item);
  }
  deleteRecipe(id: number) {
    return this.httpClient.delete('https://localhost:7147/api/Recipes/' + id);
  }
  createRecipe(item: IAddRecipe) {
    return this.httpClient.post<IAddRecipe>(
      'https://localhost:7147/api/Recipes',
      item
    );
  }
}
