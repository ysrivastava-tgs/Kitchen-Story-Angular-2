import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-background-cover',
  templateUrl: './background-cover.component.html',
  styleUrls: ['./background-cover.component.css']
})
export class BackgroundCoverComponent implements OnInit {
  get_all_product_items = [];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllItems();
  }
  getAllItems(){
    this.get_all_product_items=this.productService.getItems();
  }
  buy(productname,imglink,productprice){
    console.log(productname,imglink,productprice);
    let flag = sessionStorage.getItem("login");
    if(flag=="true"){
      this.router.navigate(['./User/home/buy'],{queryParams:{pname:productname,ilink:imglink,pprice:productprice}});
    }
    else{
      this.router.navigate(["/Login"]);
    }
  }
}
