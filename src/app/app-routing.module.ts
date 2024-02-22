import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOverviewComponent } from './modules/account-overview/account-overview.component';
import { AddAddressComponent } from './modules/add-address/add-address.component';
import { CheckoutDetailComponent } from './modules/checkout-detail/checkout-detail.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { OrderConfirmComponent } from './modules/order-confirm/order-confirm.component';
import { OrderDetailComponent } from './modules/order-detail/order-detail.component';
import { OrderStatusDetailComponent } from './modules/order-status-detail/order-status-detail.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { RestaurantDetailComponent } from './modules/restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './modules/restaurants/restaurants.component';
import { Restaurants2Component } from './modules/restaurants2/restaurants2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "header",
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    // canActivate: [AuthGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'restaurant-detail',
    component: RestaurantDetailComponent
  },
  {
    path: 'checkout-detail',
    component: CheckoutDetailComponent
  },
  {
    path: 'order-status-detail',
    component: OrderStatusDetailComponent
  },
  {
    path: 'order-confirm',
    component: OrderConfirmComponent
  },
  {
    path: 'add-address',
    component: AddAddressComponent
  },
  {
    path: 'order-detail',
    component: OrderDetailComponent
  },
  {
    path: 'account-overview',
    loadChildren: () => import('./modules/account-overview/account-overview.module').then(m => m.AccountOverviewModule)
  },
  {
    path: 'restaurants2',
    component: Restaurants2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
