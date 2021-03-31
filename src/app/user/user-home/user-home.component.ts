import { CommonNavbarComponent } from './../../header/common-navbar/common-navbar.component';
import { Router } from '@angular/router';
import { ProductService } from './../../product.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit,AfterViewInit {
  get_all_product_items = [];
  constructor(private productService: ProductService, private router: Router) { }
  ngAfterViewInit(): void {
    // let i = sessionStorage.getItem("btnsession");
    // console.log(i);
    // if(i!=null)
    // {
    //   document.getElementById(i).
    // }
  }

  ngOnInit(): void {
    this.getAllItems();
    this.checksession();
    
  }
getAllItems(){
  this.get_all_product_items=this.productService.getItems();
}
get(i)
{
  sessionStorage.setItem("btnsession",i);
  document.getElementById(i).innerHTML = "Remove";

}
checksession()
{
    let i = sessionStorage.getItem("btnsession");
    console.log(i);
    // if(i!=null)
    // {
    //   alert(document.getElementById(i).innerHTML);
    // }
}
buy(productname,imglink,productprice){
  console.log(productname,imglink,productprice);
  this.router.navigate(['./User/home/buy'],{queryParams:{pname:productname,ilink:imglink,pprice:productprice}});
}
}
