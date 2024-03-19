import { Routes } from '@angular/router';
import { HomeComponent as RecipeHomeComponent } from './recipe/components/home/home.component';
import { DetailsComponent as RecipeDetailsComponent } from './recipe/components/details/details.component';
import { DeleteComponent as RecipeDeleteComponent } from './recipe/components/delete/delete.component';
import { EditComponent as RecipeEditComponent } from './recipe/components/edit/edit.component';
import { CreateComponent as RecipeCreateComponent } from './recipe/components/create/create.component';
import { HomeComponent as ProductHomeComponent } from './product/components/home/home.component';
import { DetailsComponent as ProductDetailsComponent } from './product/components/details/details.component';
import { DeleteComponent as ProductDeleteComponent } from './product/components/delete/delete.component';
import { EditComponent as ProductEditComponent } from './product/components/edit/edit.component';
import { CreateComponent as ProductCreateComponent } from './product/components/create/create.component';

export const routes: Routes = [
  {
    path: '',
    component: RecipeHomeComponent,
  },
  {
    path: 'recipe/create',
    component: RecipeCreateComponent,
  },
  {
    path: 'recipe/edit/:id',
    component: RecipeEditComponent,
  },
  {
    path: 'recipe/details/:id',
    component: RecipeDetailsComponent,
  },
  {
    path: 'recipe/delete/:id',
    component: RecipeDeleteComponent,
  },
  {
    path: 'product',
    component: ProductHomeComponent,
  },
  {
    path: 'product/create',
    component: ProductCreateComponent,
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent,
  },
  {
    path: 'product/details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'product/delete/:id',
    component: ProductDeleteComponent,
  },
];
