import 'zone.js/dist/zone';
import { Component, importProvidersFrom, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CartModule } from './cart/cart.module';
import { NgxsModule } from '@ngxs/store';
import { Store } from '@ngxs/store';
import {
  CdkPortal,
  ComponentPortal,
  Portal,
  PortalModule,
} from '@angular/cdk/portal';
import {
  CardRemoveItem,
  CartAddItem,
  CartInitState,
  CartSetAvailableItems,
} from './cart/store/cart.actions';
import { LicenseModule } from './license/license.module';
import { LicenseCartConfig } from './license/license-cart.config';
import { CART_CONFIG } from './cart/cart/cart.config';
import { CartComponent } from './cart/cart/cart.component';
import { CartItemBaseModel } from './cart/cart-item-base/cart-item-base.mode';
import { ContentCartConfig } from './content/content.cart.config';
import { ContentModule } from './content/content.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    CartModule,
    ContentModule,
    LicenseModule,
    PortalModule,
  ],
  providers: [{ provide: CART_CONFIG, useValue: LicenseCartConfig }],
  template: `
    <button (click)="createLicenseComponent()">License cart</button>
    <button (click)="createContentComponent()">Content cart</button>
    <br>
    <button (click)="addLicenseItem()">Add license to cart</button>
    <button (click)="removeLicenseItem()">Remove license from cart</button>
    <ng-template [cdkPortalOutlet]="cart"></ng-template>
  `,
})
export class App {
  constructor(private store: Store) {}
  name = 'Angular';

  cart: ComponentPortal<CartComponent> = null;

  createContentComponent() {
    const injector = Injector.create({
      providers: [
        {
          provide: CART_CONFIG,
          useValue: ContentCartConfig,
        },
      ],
    });
    this.store.dispatch([
      new CartInitState({
        availableItems: [
          {
            id: '1',
            type: 'video',
            price: 11,
          },
        ],
        addedItems: [],
      }),
    ]);
    this.cart = new ComponentPortal(CartComponent, null, injector);
  }

  createLicenseComponent() {
    const injector = Injector.create({
      providers: [
        {
          provide: CART_CONFIG,
          useValue: LicenseCartConfig,
        },
      ],
    });
    this.store.dispatch([
      new CartInitState({
        availableItems: [this.licenseItem],
        addedItems: [],
      }),
    ]);
    this.cart = new ComponentPortal(CartComponent, null, injector);
  }

  licenseItem: CartItemBaseModel = {
    id: '0',
    type: 'license',
    price: 10,
  };

  ngOnInit() {}

  addLicenseItem() {
    this.store.dispatch([
      new CartAddItem({
        item: this.licenseItem,
      }),
    ]);
  }

  removeLicenseItem() {
    this.store.dispatch([new CardRemoveItem({ itemId: this.licenseItem.id })]);
  }
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(NgxsModule.forRoot([]))],
});
