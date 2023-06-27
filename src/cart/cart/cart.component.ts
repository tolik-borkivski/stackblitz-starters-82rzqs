import {
  Component,
  Inject,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  Observable,
  skipWhile,
  Subject,
  Subscription,
  take,
  takeUntil,
} from 'rxjs';
import { CartItemBaseModel } from '../cart-item-base/cart-item-base.mode';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { CartState } from '../store/cart.store';
import { CartConfig, CART_CONFIG } from './cart.config';

@UntilDestroy()
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements AfterViewInit, OnDestroy {
  constructor(
    private store: Store,
    private cdr: ChangeDetectorRef,
    @Inject(CART_CONFIG) private config: CartConfig
  ) {}

  total = 0;

  @ViewChild('cartItemsContainer', { read: ViewContainerRef })
  vcr!: ViewContainerRef;

  ngAfterViewInit() {
    this.store
      .select(CartState.AvailableItems)
      .pipe(
        skipWhile((v) => !v),
        untilDestroyed(this)
      )
      .subscribe((availableItems) => {
        availableItems?.forEach((item: CartItemBaseModel) => {
          const component = this.config.components.get(item.type)!;
          const ref = this.vcr.createComponent(component);
          ref.setInput('model', item);
        });
        this.cdr.detectChanges();
      });

    this.store
      .select(CartState.AddedItems)
      .pipe(
        skipWhile((v) => !v),
        untilDestroyed(this)
      )
      .subscribe((addedItems) => {
        this.total = addedItems?.reduce(
          (total: number, item: CartItemBaseModel) => total + item.price,
          0
        );
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    this.vcr.remove();
  }
}
