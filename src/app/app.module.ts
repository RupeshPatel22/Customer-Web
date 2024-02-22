import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { NgOtpInputModule } from 'ng-otp-input';
// import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { RestaurantsComponent } from './modules/restaurants/restaurants.component';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RestaurantDetailComponent } from './modules/restaurant-detail/restaurant-detail.component';
import { CheckoutDetailComponent } from './modules/checkout-detail/checkout-detail.component';
import { OrderStatusDetailComponent } from './modules/order-status-detail/order-status-detail.component';
import { AddAddressComponent } from './modules/add-address/add-address.component';
import { OrderDetailComponent } from './modules/order-detail/order-detail.component';
import { MatStepperModule } from '@angular/material/stepper';
// import { AccountOverviewComponent } from './modules/account-overview/account-overview.component';
import { MatTableModule } from '@angular/material/table';
import { HeaderModule } from './modules/header/header.module';
import { OrderConfirmComponent } from './modules/order-confirm/order-confirm.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { Restaurants2Component } from './modules/restaurants2/restaurants2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    // HeaderComponent,
    FooterComponent,
    RestaurantsComponent,
    RestaurantDetailComponent,
    CheckoutDetailComponent,
    OrderStatusDetailComponent,
    AddAddressComponent,
    OrderDetailComponent,
    OrderConfirmComponent,
    Restaurants2Component
    // AccountOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOtpInputModule,
    MaterialModule,
    HttpClientModule,
    MatStepperModule,
    MatTableModule,
    HeaderModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
