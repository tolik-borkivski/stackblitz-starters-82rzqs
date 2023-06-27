import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModule } from '../cart/cart.module';
import { VideoItemComponent } from './video-item/video-item.component';

@NgModule({
  imports: [CommonModule, CartModule],
  declarations: [VideoItemComponent],
  exports: [VideoItemComponent],
})
export class ContentModule {}
