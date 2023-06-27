import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemBaseModel } from './cart-item-base.mode';

@Component({
  selector: 'app-cart-item-base',
  templateUrl: './cart-item-base.component.html',
  styleUrls: ['./cart-item-base.component.css']
})
export abstract class CartItemBaseComponent {
  @Input() model!: CartItemBaseModel;
  @Output() addToCart = new EventEmitter<CartItemBaseModel>;
}