import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseItemComponent } from './license-item/license-item.component';
import { CartModule } from '../cart/cart.module';

@NgModule({
  imports: [CommonModule, CartModule],
  declarations: [LicenseItemComponent],
  exports: [LicenseItemComponent],
})
export class LicenseModule {}
