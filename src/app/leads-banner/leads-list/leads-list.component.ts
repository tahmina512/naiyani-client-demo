import { Component, OnInit } from '@angular/core';
import { Leads } from '../leads.model';
import { LeadsBannerService } from '../leads-banner.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss'],
})
export class LeadsListComponent implements OnInit {
  product: Leads[] = [];
  constructor(
    private leadsBannerService: LeadsBannerService,
  ) {}
  ngOnInit() {
    this.leadsBannerService.setAllLeads();
    this.leadsBannerService.leadsChanged.subscribe((leads: Leads[]) => {
      this.product = leads;
      console.log(this.product); // Now the product array should be populated
    });
  }
}
