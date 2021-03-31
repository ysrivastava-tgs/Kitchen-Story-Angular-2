import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  pname: string;
  ilink: string;
  pprice: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.pname = this.route.snapshot.queryParamMap.get('pname')
    this.pprice = this.route.snapshot.queryParamMap.get('pprice');
    this.ilink = this.route.snapshot.queryParamMap.get('ilink');
  }
  makePayment(){
    document.getElementById("status").innerHTML = "<i class='fas fa-check-circle'></i>";
    document.getElementById("payment").innerHTML = "Payment Done";
  }
}
