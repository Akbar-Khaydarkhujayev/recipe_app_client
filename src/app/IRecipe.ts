import { IProduct } from './IProduct';

export interface IRecipe {
  id: number;
  name: string;
  details: string;
  productID: number;
  product: IProduct;
}

export interface IAddRecipe {
  name: string;
  details: string;
  productID: number;
}
