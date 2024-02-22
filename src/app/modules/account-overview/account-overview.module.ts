import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountOverviewRoutingModule } from './account-overview-routing.module';
import { AccountOverviewComponent } from './account-overview.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MyOrderComponent } from './my-order/my-order.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';
import { SpeedyyWalletComponent } from './speedyy-wallet/speedyy-wallet.component';
import { PaymentRefundComponent } from './payment-refund/payment-refund.component';
import { HeaderModule } from '../header/header.module';
// import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    AccountOverviewComponent,
    MyOrderComponent,
    ManageAddressComponent,
    MyWishlistComponent,
    SpeedyyWalletComponent,
    PaymentRefundComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    AccountOverviewRoutingModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    MatTabsModule,
    HeaderModule
  ]
})
export class AccountOverviewModule { }
