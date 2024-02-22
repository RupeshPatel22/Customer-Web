import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOverviewComponent } from './account-overview.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';
import { PaymentRefundComponent } from './payment-refund/payment-refund.component';
import { SpeedyyWalletComponent } from './speedyy-wallet/speedyy-wallet.component';

const routes: Routes = [
  {
    path: '',
    component: AccountOverviewComponent
  },
  {
    path: 'my-order',
    component: MyOrderComponent
  },
  {
    path: 'manage-address',
    component: ManageAddressComponent
  },
  {
    path: 'my-wishlist',
    component: MyWishlistComponent
  },
  {
    path: 'speedyy-wallet',
    component: SpeedyyWalletComponent
  },
  {
    path: 'payment-refund',
    component: PaymentRefundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountOverviewRoutingModule { }
