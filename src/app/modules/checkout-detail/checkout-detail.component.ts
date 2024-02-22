import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.scss']
})
export class CheckoutDetailComponent implements OnInit {

  isChooseDeliveryAddress: boolean;
  isDeliveryAddressAndPaymentMethods : boolean;
  isSavedPaymentMethod : boolean = true;
  isCreditDebitCard : boolean;
  isPayAfterBooking : boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showDeliveryAddressAndPaymentMethods(){
    this.isDeliveryAddressAndPaymentMethods = true;
    this.isChooseDeliveryAddress = false;
  }
  showChooseDeliveryAddress(){
    this.isChooseDeliveryAddress = true;
    this.isDeliveryAddressAndPaymentMethods = false
  }
  showSavedPaymentMethod(){
    this.isSavedPaymentMethod = true;
    this.isCreditDebitCard = false;
    this.isPayAfterBooking = false;
  }
  showCreditDebitCard(){
    this.isCreditDebitCard = true;
    this.isSavedPaymentMethod = false;
    this.isPayAfterBooking = false;
  }
  showPayAfterBooking(){
    this.isPayAfterBooking = true;
    this.isSavedPaymentMethod = false;
    this.isCreditDebitCard = false;
  }

}
