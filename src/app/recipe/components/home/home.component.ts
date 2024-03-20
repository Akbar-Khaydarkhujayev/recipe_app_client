import { Component, inject } from '@angular/core';
import { RecipeService } from '../../../service-recipe.service';
import { IRecipe } from '../../../IRecipe';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  service = inject(RecipeService);
  router = inject(Router);
  items: IRecipe[] = [];
  ngOnInit() {
    this.service.getAllRecipes().subscribe((result) => {
      this.items = result;
    });
  }

  CreateClicked() {
    this.router.navigateByUrl('recipe/create');
  }
  EditClicked(itemID: number) {
    console.log(itemID, 'From Edit');
    this.router.navigateByUrl('recipe/edit/' + itemID);
  }
  DetailsClicked(itemID: number) {
    console.log(itemID, 'From Details');
    this.router.navigateByUrl('recipe/details/' + itemID);
  }
  DeleteClicked(itemID: number) {
    console.log(itemID, 'From Delete');
    this.router.navigateByUrl('recipe/delete/' + itemID);
  }
}
