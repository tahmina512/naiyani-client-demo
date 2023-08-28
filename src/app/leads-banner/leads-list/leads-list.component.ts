import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Leads } from '../leads.model';
import { LeadsBannerService } from '../leads-banner.service';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss'],
})
export class LeadsListComponent implements OnInit {
  product: Leads[] = [];
  totalRecords: number = 0;
  loading: boolean = true;
  limit: number = 15;

  constructor(
    private leadsBannerService: LeadsBannerService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {}

  loadLeadsList($event: LazyLoadEvent) {
    this.loading = true;
    console.log($event);
    this.leadsBannerService.setAllLeads($event.first || 0, this.limit);
    this.leadsBannerService.leadsChanged.subscribe((leads: Leads[]) => {
      this.loading = false;
      this.product = leads;
      this.totalRecords = this.leadsBannerService.getTotalRecords();
      console.log(this.totalRecords);
    });
    // this.loading = true;
    // this.primengConfig.ripple = true;
  }
}
