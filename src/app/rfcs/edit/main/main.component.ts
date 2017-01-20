import { Component, OnInit } from '@angular/core';

import{ Router, ActivatedRoute} from '@angular/router';

import { RFCsService } from '../../../models/rfcs.service'

import { rfcMain } from '../../../models/rfc-main.model'

@Component({

  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  rfc: rfcMain = <rfcMain>{};
  errorMessage: string;
 

  constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _rfcsService:RFCsService) { }

  getRFC(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._rfcsService
          .getRFC(id)
          .subscribe(rfc => this.rfc = rfc);
      });
  }
  
  ngOnInit() {
    this.getRFC();
    
  }

}
