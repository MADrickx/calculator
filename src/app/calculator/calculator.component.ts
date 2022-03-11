import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  supportsItems:any = [];
  products:any[] = [];
  productFormContainer = new FormGroup({
    productForm: new FormArray([]),
  });

  constructor(
    private calculatorService : CalculatorService
  ) {}

  ngOnInit(): void {
    this.onAddProduct();
    this.getSupports();
  }

  calculate(){
    this.getLinesOfProducts().controls.forEach((lines:any,index:number)=>{
      const linesValue = lines.value
      this.calculatorService.getPrices(linesValue).subscribe((response:any)=>{
        lines.get('price').setValue(response.price);
      })
    })
  }

  getSupports(){
    this.calculatorService.getSupports().subscribe((response)=>{
      //@ts-ignore
      this.supportsItems.push(response[0]);
      this.supportsItems=this.supportsItems[0];
    })
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
      width: new FormControl(''),
      quantity: new FormControl(''),
      price: new FormControl('')
    });
    this.getLinesOfProducts().push(productForm)
  }

  getLinesOfProducts(): FormArray {
    return this.productFormContainer.get('productForm') as FormArray;
  }

  deleteProduct(i:number){
    this.getLinesOfProducts()?.removeAt(i);
  }
}
