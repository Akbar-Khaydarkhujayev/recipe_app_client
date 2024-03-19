export interface IRecipe {
  id: number;
  name: string;
  details: string;
  productID: number;
  product: IAddRecipe;
}

export interface IAddRecipe {
  title: string;
  description: string;
  productID: number;
}
