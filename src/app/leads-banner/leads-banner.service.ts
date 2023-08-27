import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Leads } from "./leads.model";
import { Subject, map, tap } from "rxjs";


@Injectable({providedIn:'root'})
export class LeadsBannerService{

    constructor(private http : HttpClient){}

    leadsChanged = new Subject<Leads[]>();

    private leads:Leads[] = [];

    setAllLeads(){
        this.http.get<Leads[]>('http://localhost:3000/product-list/all-leads')
                              .subscribe(leads => {
                                this.leads=leads;
                                console.log(this.leads);
                                this.leadsChanged.next(this.leads.slice());
                            })
        
    }

    getLeads(){

        console.log(this.leads);

        return this.leads.slice();
    }






}