import { Component, OnInit } from '@angular/core';

import{ Router, ActivatedRoute} from '@angular/router';

import { RFCsService } from '../../../models/rfcs.service'

import { rfcMain } from '../../../models/rfc-main.model'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  rfc: rfcMain;
  errorMessage: string;
  pageTitle: string = 'RFC ';

  constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _rfcsService:RFCsService) { }

  getRFC(){
    let id = +this._route.snapshot.params['id'];
      this.pageTitle += ` : ${id}`;

      this._rfcsService.getRFC(id)
      .subscribe(rfc => this.rfc = rfc,
      error => this.errorMessage = <any>error);
  }
  ngOnInit() {
    this.getRFC();
    
  }

}
