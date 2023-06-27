import { Component, OnInit } from '@angular/core';
import { CartItemBaseComponent } from '../../cart/cart-item-base/cart-item-base.component';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css'],
})
export class VideoItemComponent extends CartItemBaseComponent {}
