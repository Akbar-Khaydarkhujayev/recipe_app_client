import { Component, OnInit, inject } from '@angular/core';
import { RecipeService } from '../../../service-recipe.service';
import { ServiceProductService } from '../../../service-product.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from '../../../IRecipe';
import { IProduct } from '../../../IProduct';
import { CommonModule } from '@angular/common';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  recipeService = inject(RecipeService);
  productService = inject(ServiceProductService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  recipeToEdit: IRecipe = {
    id: 0,
    name: '',
    details: '',
    productID: 0,
    product: {
      id: 0,
      name: '',
    },
  };

  products: IProduct[] = [];

  ngOnInit() {
    this.recipeService
      .getRecipeByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((result) => {
        this.recipeToEdit = result;
      });
    this.productService.getAllProducts().subscribe((result) => {
      this.products = result;
    });
  }

  toHome() {
    this.router.navigateByUrl('');
  }

  editRecipe() {
    this.recipeToEdit.product =
      this.products[findIndexByID(this.products, this.recipeToEdit.productID)];

    this.recipeService.editRecipe(this.recipeToEdit).subscribe((res) => {
      alert('Changes has been updated');
      this.router.navigateByUrl('');
    });
  }
}
