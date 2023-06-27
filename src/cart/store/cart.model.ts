import { CartItemBaseModel } from '../cart-item-base/cart-item-base.mode';

export class CartStateModel {
  availableItems: CartItemBaseModel[] = [];
  addedItems: CartItemBaseModel[] = [];
}
