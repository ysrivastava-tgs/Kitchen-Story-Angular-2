import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  product_items = [];
  get_all_product_items:Object[] = [];
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private productService:ProductService) { }
  formSubmitted!:boolean;
  formControls!:any;
  addForm!: FormGroup;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      productname : ['',Validators.required],
      imglink :['',Validators.required],
      productprice: ['', Validators.required],
      productid:['',Validators.required]
    });
    this.formControls = this.addForm.controls;
    this.getAllItems();
  }
  handleFormSubmmit(event){
     // tslint:disable-next-line: no-unused-expression
     this.formSubmitted = true;
    
      const obj = this.addForm.value;
      // this.productService.pushItems(obj);
      // this.product_items.push(obj);
      // localStorage.setItem("product items",JSON.stringify(this.product_items));
      // this.ngOnInit();
      this.product_items = this.productService.getItems();
      this.product_items.push(obj);
    localStorage.setItem("product items",JSON.stringify(this.product_items));
    this.ngOnInit();
  }
  getAllItems(){
    this.get_all_product_items = this.productService.getItems();
  }
  delete(event){
    const arr = this.productService.getItems();
    let index = 0;
    for(var i = 0;i<arr.length;i++)
    {
      let obj2 = arr[i];
      if(obj2["productid"]==event)
      {
        index = i;
        break;
      }
    }
    arr.splice(index,1);
    localStorage.setItem("product items",JSON.stringify(arr));
    this.ngOnInit();
  }
}
