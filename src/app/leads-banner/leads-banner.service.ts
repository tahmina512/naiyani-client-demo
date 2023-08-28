import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Leads } from './leads.model';
import { Subject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LeadsBannerService {
  constructor(private http: HttpClient) {}

  leadsChanged = new Subject<Leads[]>();

  private leads: Leads[] = [];
  private totalRecords: number = 0;

  setAllLeads(skip: number, limit: number) {
    return this.http
      .get<any>(
        `http://localhost:3000/product-list/all-leads?skip=${skip}&limit=${limit}`
      )
      .subscribe((leadsData) => {
        this.leads = leadsData.data;
        this.totalRecords = leadsData.count;
        // console.log(this.leads);
        console.log('leadsData.page_total', this.totalRecords);
        this.leadsChanged.next(this.leads);
      });
  }

  getLeads() {
    return this.leads;
  }

  getTotalRecords() {
    return this.totalRecords;
  }
}
