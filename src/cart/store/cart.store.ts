import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  CardRemoveItem,
  CartAddItem,
  CartInitState,
  CartSetAvailableItems,
} from './cart.actions';
import { CartStateModel } from './cart.model';

@State<CartStateModel>({
  name: 'CartState',
  defaults: new CartStateModel(),
})
export class CartState {
  @Selector()
  static AvailableItems(state: CartStateModel) {
    return state.availableItems;
  }

  @Selector()
  static AddedItems(state: CartStateModel) {
    return state.addedItems;
  }

  @Action(CartInitState)
  initState(ctx: StateContext<CartStateModel>, action: CartInitState) {
    ctx.patchState({
      availableItems: action?.command?.availableItems || [],
      addedItems: action?.command?.availableItems || [],
    });
  }

  @Action(CartSetAvailableItems)
  setAvailableItems(
    ctx: StateContext<CartStateModel>,
    action: CartSetAvailableItems
  ) {
    ctx.patchState({
      availableItems: action.command.availableItems,
    });
  }

  @Action(CartAddItem)
  addItem(ctx: StateContext<CartStateModel>, action: CartAddItem) {
    const items =
      ctx
        .getState()
        .addedItems.filter((item) => item.id !== action.command.item.id) || [];

    ctx.patchState({
      addedItems: [...items, action.command.item],
    });
  }

  @Action(CardRemoveItem)
  removeItem(ctx: StateContext<CartStateModel>, action: CardRemoveItem) {
    const items =
      ctx
        .getState()
        .addedItems.filter((item) => item.id !== action.commnad.itemId) || [];

    ctx.patchState({
      addedItems: items,
    });
  }
}
