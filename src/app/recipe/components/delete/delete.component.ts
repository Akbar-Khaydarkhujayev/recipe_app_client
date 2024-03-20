import { Component, inject } from '@angular/core';
import { IRecipe } from '../../../IRecipe';
import { RecipeService } from '../../../service-recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  recipeToDelete: IRecipe = {
    id: 0,
    name: '',
    details: '',
    productID: 0,
    product: {
      id: 0,
      name: '',
    },
  };
  recipeService = inject(RecipeService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  ngOnInit() {
    this.recipeService
      .getRecipeByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.recipeToDelete = resultedItem;
      });
  }

  toHome() {
    this.router.navigateByUrl('');
  }
  deleteRecipe() {
    this.recipeService
      .deleteRecipe(this.recipeToDelete.id)
      .subscribe((res) => console.log(res));
    alert('Deleted  item with ID: ' + this.recipeToDelete.id);
    this.router.navigateByUrl('');
  }
}
