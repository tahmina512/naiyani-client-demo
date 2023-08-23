import { Component, OnInit } from '@angular/core';
interface Product {
  pro_img: string;
  pro_name: string;
  asIn: string;
  eFee: number;
  monthlySales: number;
  estRank: number;
  eRank30: number;
  eRank90: number;
  srcUrl: string;
  scrPrice: number;
  amazonUrl: string;
  amazonPrice: number;
  amazonList: number;
  noOfsellers: number;
  noOfReviews: number;
  estGrossProfit: number;
  estProfitMargin: number;
  estNetProft: number;
  netProfitMargin: number;
}

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss'],
})
export class LeadsListComponent implements OnInit {
  product: Product[] = [
    {
      pro_img: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/tech.png',
      pro_name: 'Camera',
      asIn: 'string',
      eFee: 2324,
      monthlySales: 12134,
      estRank: 435,
      eRank30: 3434,
      eRank90: 4343,
      srcUrl: 'string',
      scrPrice: 2323,
      amazonUrl: 'string',
      amazonPrice: 2323,
      amazonList: 2323,
      noOfsellers: 3232,
      noOfReviews: 3232,
      estGrossProfit: 32323,
      estProfitMargin: 3232,
      estNetProft: 3232,
      netProfitMargin: 232322,
    },
    {
      pro_img: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/tech.png',
      pro_name: 'string',
      asIn: 'string',
      eFee: 123,
      monthlySales: 123,
      estRank: 134,
      eRank30: 13131,
      eRank90: 13131,
      srcUrl: 'string',
      scrPrice: 24242,
      amazonUrl: 'string',
      amazonPrice: 3232,
      amazonList: 323,
      noOfsellers: 2323,
      noOfReviews: 232,
      estGrossProfit: 2323,
      estProfitMargin: 2323,
      estNetProft: 3232,
      netProfitMargin: 232232,
    },
    {
      pro_img: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/tech.png',
      pro_name: 'string',
      asIn: 'string',
      eFee: 123,
      monthlySales: 123,
      estRank: 134,
      eRank30: 13131,
      eRank90: 13131,
      srcUrl: 'string',
      scrPrice: 24242,
      amazonUrl: 'string',
      amazonPrice: 3232,
      amazonList: 323,
      noOfsellers: 2323,
      noOfReviews: 232,
      estGrossProfit: 2323,
      estProfitMargin: 2323,
      estNetProft: 3232,
      netProfitMargin: 232232,
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
