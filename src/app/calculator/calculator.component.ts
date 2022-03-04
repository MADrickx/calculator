import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  constructor() { }
  products:any[] = [];
  productFormContainer = new FormGroup({
    productForm: new FormArray([]),
  });

  ngOnInit(): void {
    this.onAddProduct();
  }

  supportChange(i:number){
    const productLines = this.getLinesOfProducts();
    console.log(productLines)
    if(productLines.controls[i].get('support')?.value){
      this.products[i].support = productLines.controls[i].get('support')?.value;
    }
  }

  onAddProduct(){
    const productForm = new FormGroup({
      support: new FormControl(''),
      length: new FormControl(''),
      height: new FormControl(''),
      quantity: new FormControl(''),
      price: new FormControl('')
    });
    this.products.push(productForm.value);
  }

  getLinesOfProducts(): FormArray {
    return this.productFormContainer.get('productForm') as FormArray;
  }

  deleteProduct(i:number){
    this.products.splice(i,1);
  }
}
