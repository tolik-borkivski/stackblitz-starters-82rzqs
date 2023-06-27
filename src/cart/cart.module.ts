import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { NgxsModule } from '@ngxs/store';
import { CartState } from './store/cart.store';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([CartState])],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartModule {}
