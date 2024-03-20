import { Component, inject } from '@angular/core';
import { IRecipe } from '../../../IRecipe';
import { RecipeService } from '../../../service-recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  detailsRecipe: IRecipe = {
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
  ngOnInit() {
    this.recipeService
      .getRecipeByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.detailsRecipe = resultedItem;
      });
  }
}
