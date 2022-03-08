import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(

  ) {

  }
  products:any[] = [];
  productFormContainer = new FormGroup({
    productForm: new FormArray([]),
  });

  ngOnInit(): void {
    this.onAddProduct();
  }

  close(): void {
    window.scroll(0, 0);

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
    // this.products.push(productForm.value);
    this.getLinesOfProducts().push(productForm)
  }

  getLinesOfProducts(): FormArray {
    return this.productFormContainer.get('productForm') as FormArray;
  }

  deleteProduct(i:number){
    this.getLinesOfProducts()?.removeAt(i);
  }
}
