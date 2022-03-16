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

  onItemSelection(i:number){
    let productname = this.getLinesOfProducts().controls[i].get('support')?.value;
    let productType;
    this.supportsItems.forEach((item:any)=>{
      if(item.name === productname){
        productType = item.type;
      }
    });
    this.getLinesOfProducts().controls[i].get('type')?.setValue(productType);
    console.log(this.getLinesOfProducts().controls)
  }

  calculate(){
    this.getLinesOfProducts().controls.forEach((lines:any,index:number)=>{
      const linesValue = lines.value
      this.calculatorService.getPrices(linesValue).subscribe((response:any)=>{
        console.log(response);
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
      price: new FormControl(''),
      type: new FormControl(''),
      shinyLaminate : new FormControl(false),
      matteLaminate : new FormControl(false),
      grommets : new FormControl(false),
      reinforcements : new FormControl(false),
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
