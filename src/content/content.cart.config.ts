import { CartConfig } from '../cart/cart/cart.config';
import { VideoItemComponent } from './video-item/video-item.component';

export const ContentCartConfig: CartConfig = {
  components: new Map([['video', VideoItemComponent]]),
};
