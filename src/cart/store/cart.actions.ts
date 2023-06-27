import { CartItemBaseModel } from '../cart-item-base/cart-item-base.mode';

export class CartInitState {
  static readonly type = '[CartState] CartInitState';

  constructor(
    public command?: {
      availableItems?: CartItemBaseModel[];
      addedItems?: CartItemBaseModel[];
    }
  ) {}
}

export class CartSetAvailableItems {
  static readonly type = '[CartState] Set AvailableItems';
  constructor(
    public command: {
      availableItems: CartItemBaseModel[];
    }
  ) {}
}

export class CartAddItem {
  static readonly type = '[CartState] CartAddItem';
  constructor(
    public command: {
      item: CartItemBaseModel;
    }
  ) {}
}

export class CardRemoveItem {
  static readonly type = '[CartState] Remove Item';
  constructor(
    public commnad: {
      itemId: string;
    }
  ) {}
}
