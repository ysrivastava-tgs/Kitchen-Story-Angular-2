import { ProductService } from './../../product.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-common-navbar',
  templateUrl: './common-navbar.component.html',
  styleUrls: ['./common-navbar.component.css']
})
export class CommonNavbarComponent implements OnInit {
  formSubmitted!:boolean;
  formControls!:any;
  searchForm!: FormGroup;
  islogin:boolean;
  isregister:boolean;
  islogout:boolean;
  constructor(private router: Router,private formBuilder: FormBuilder,private productService: ProductService) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      
      search: ['']
      
    });
    this.formControls = this.searchForm.controls;
    
    // let flag = sessionStorage.getItem("login");
    // if(flag=="true"){
    //   this.islogin = false;
    //   this.isregister =false;
    //   this.islogout = true;
    // }
    // else{
    //   this.islogin = true;
    //   this.isregister =true;
    //   this.islogout = false;
    // }
}
login(){
  const text = document.getElementById("login").innerHTML;
  // alert(text);
  this.router.navigate(['/Login'],{queryParams:{loginid:text}});
 
}
search(){
    alert(document.getElementById("searchitem").nodeValue);
}
handleFormSubmmit(event){
  const searchname = this.searchForm.value.search;
  // alert(obj);
  const arr = this.productService.getItems();
    let index = 0;
    let obj2;
    for(var i = 0;i<arr.length;i++)
    {
      obj2 = arr[i];
      if(obj2["productname"]==searchname)
      {
        index = i;
        // alert(true);
        break;
      }
    }
    const pname = searchname;
    const ilink = obj2['imglink'];
    const pprice = obj2['productprice'];
    this.router.navigate(['./User/home/buy'],{queryParams:{pname:pname,ilink:ilink,pprice:pprice}});
}
}
