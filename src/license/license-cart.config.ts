import { CartConfig } from '../cart/cart/cart.config';
import { LicenseItemComponent } from './license-item/license-item.component';

export const LicenseCartConfig: CartConfig = {
  components: new Map([['license', LicenseItemComponent]]),
};
