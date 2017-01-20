import { Component, OnInit } from '@angular/core';

import { RFCsService } from '../models/rfcs.service'

import { RFCSummary } from '../models/rfc-summary.model'

@Component({

  templateUrl: './rfcs.component.html',
  styleUrls: ['./rfcs.component.css']
})
export class RFCsComponent implements OnInit {
  
  rfcs: RFCSummary[];
  errorMessage: string;

  constructor(private rfcsService:RFCsService) { }
   
  getRFCs(): void {
    this.rfcsService.getRFCs()
        .subscribe(rfcs => this.rfcs = rfcs,
        error => this.errorMessage = <any>error);
  } 
  
  ngOnInit() {
    this.getRFCs();
    
  }

}
