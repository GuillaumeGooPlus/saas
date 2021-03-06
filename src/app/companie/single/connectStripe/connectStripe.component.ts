import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
// import {AuthService} from '../../auth/auth.service';
// import {CompanieService} from '../companie.service';
// import {UserService} from '../../user/user.service';
import { PaiementService} from '../../paiement/paiement.service';


import { Companie } from '../../companie.model';
// import {Address} from '../../user/user.model';

import { ToastsManager } from 'ng2-toastr';

import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connectStripe',
  templateUrl: './connectStripe.component.html',
})
export class ConnectStripeComponent implements OnInit, OnChanges {
  // @Output() saved: EventEmitter<any> = new EventEmitter();
  @Input() fetchedCompanie: Companie = new Companie()

  constructor(
    private toastr: ToastsManager,
    private paiementService: PaiementService,
    private location: Location,
  ) { }

  ngOnInit() { }
  ngOnChanges() {
    // if(this.fetchedCompanie.banck.stripe.stripe_user_id) {
    //   this.paiementService.getUserInfosConnect()
    //     .subscribe(res => {
    //       this.fetchedCompanie = res.obj
    //     }, error => { console.log(error) })
    // }


  }


  deauthorizeConnect() {
    this.paiementService.deauthorizeConnect()
      .subscribe(res => {
        this.fetchedCompanie = res.obj
      }, error => { console.log(error) })
  }
  goToLinkAuthorizeConnect() {
    this.paiementService.goToLinkAuthorizeConnect()
      .subscribe(res => {
        window.location.href = res.url;
      }, error => { console.log(error) })
  }



}
