import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Leads } from '../leads.model';
import { LeadsBannerService } from '../leads-banner.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss'],
})
export class LeadsListComponent implements OnInit {
  totalRecords: number = 0;
  product: Leads[] = [];
  loading: boolean = true;
  limit: number = 10;
  constructor(private leadsBannerService: LeadsBannerService) {}

  ngOnInit() {}
  loadLeadsList($event: LazyLoadEvent) {
    this.loading = true;
    console.log($event);
    this.leadsBannerService
      .setAllLeads($event.first || 0, this.limit)
      .subscribe((data) => {
        this.loading = false;
        this.product = data.data;
        this.totalRecords = data.count;
      });
  }
}
