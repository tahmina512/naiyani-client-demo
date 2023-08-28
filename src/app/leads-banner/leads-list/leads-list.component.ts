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
  loading: boolean;
  currentPage: number = 1; // Initialize the current page to 1
  first = 0;
  rows = 10;
  constructor(
    private leadsBannerService: LeadsBannerService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.leadsBannerService.setAllLeads();
    this.leadsBannerService.leadsChanged.subscribe((leads: Leads[]) => {
      this.product = leads;
      this.totalRecords = this.leadsBannerService.getTotalRecords();
      this.loading = false;
    });
    this.loading = true;
    this.primengConfig.ripple = true;
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.product ? this.first === this.product.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.product ? this.first === 0 : true;
  }
}
