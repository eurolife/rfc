import { Component, OnInit } from '@angular/core';

import { RFCsService } from '../../models/rfcs.service'

import { RFCSummary } from '../../models/rfc-summary.model'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private rfcService:RFCsService) { }

  ngOnInit() {
  }

}
