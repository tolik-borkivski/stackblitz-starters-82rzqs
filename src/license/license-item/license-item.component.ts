import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItemBaseComponent } from '../../cart/cart-item-base/cart-item-base.component';

@Component({
  selector: 'app-license-item',
  templateUrl: './license-item.component.html',
  styleUrls: ['./license-item.component.css'],
})
export class LicenseItemComponent extends CartItemBaseComponent {}
