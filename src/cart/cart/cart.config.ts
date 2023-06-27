import { Component, Type, InjectionToken } from '@angular/core';
import { CartItemBaseComponent } from '../cart-item-base/cart-item-base.component';

export type CartConfig = {
  components: Map<string, Type<CartItemBaseComponent>>;
};

export const CART_CONFIG = new InjectionToken<CartConfig>('cart.config');
