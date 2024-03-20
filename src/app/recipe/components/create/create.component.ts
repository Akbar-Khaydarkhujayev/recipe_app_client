import { Component, inject } from '@angular/core';
import { RecipeService } from '../../../service-recipe.service';
import { ServiceProductService } from '../../../service-product.service';
import { IAddRecipe } from '../../../IRecipe';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  recipeService = inject(RecipeService);
  productService = inject(ServiceProductService);

  router = inject(Router);

  cate: any;

  createRecipe: IAddRecipe = {
    name: '',
    details: '',
    productID: 1,
  };

  ngOnInit() {
    this.productService.getAllProducts().subscribe((result) => {
      this.cate = result;
    });
  }
  create() {
    console.log(this.createRecipe);

    this.recipeService.createRecipe(this.createRecipe).subscribe((result) => {
      alert('Item Saved');
      this.router.navigateByUrl('');
    });
  }

  onHomeButtonClick() {
    this.router.navigateByUrl('');
  }
}
