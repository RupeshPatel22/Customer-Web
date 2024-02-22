import { Component, OnInit } from '@angular/core';
// import { flatMap } from 'rxjs';


@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss']
})
export class AccountOverviewComponent implements OnInit {

  isAccountOverview: boolean = true;
  isPaymentRefunds : boolean;
  isSpeedyyWallet : boolean;
  isMyWishlist : boolean;
  isManageAddress: boolean;
  isMyOrder: boolean;
  isHelpSupport: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showAccountOverview(){
    this.isPaymentRefunds = false;
    this.isAccountOverview = true;
    this.isMyOrder = false;
    this.isSpeedyyWallet = false;
    this.isMyWishlist = false;
    this.isManageAddress = false;
  }
  showMyorder(){
    this.isMyOrder = true;
    this.isAccountOverview = false;
    this.isPaymentRefunds = false;
    this.isSpeedyyWallet = false;
    this.isMyWishlist = false;
    this.isManageAddress = false;
  }
  showPaymentRefunds(){
    this.isPaymentRefunds = true;
    this.isAccountOverview = false;
    this.isMyOrder = false;
    this.isSpeedyyWallet = false;
    this.isMyWishlist = false;
    this.isManageAddress = false;
  }
  showSpeedyyWallet(){
    this.isSpeedyyWallet = true;
    this.isAccountOverview = false;
    this.isMyOrder = false;
    this.isPaymentRefunds = false;
    this.isMyWishlist = false;
    this.isManageAddress = false;
  }
  showMywishlist(){
    this.isMyWishlist = true;
    this.isAccountOverview = false;
    this.isMyOrder = false;
    this.isPaymentRefunds = false;
    this.isSpeedyyWallet = false;
    this.isManageAddress = false;
  }
  showManageAddress(){
    this.isManageAddress = true;
    this.isAccountOverview = false;
    this.isMyOrder = false;
    this.isPaymentRefunds = false;
    this.isSpeedyyWallet = false;
    this.isMyWishlist = false;
  }

  
}
