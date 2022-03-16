import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  optionSettingsForm = new FormGroup({
    shinyLaminatePrice : new FormControl(''),
    matteLaminatePrice : new FormControl(''),
    grommetsPrice : new FormControl(''),
    reinforcementsPrice : new FormControl(''),
  });

  supportSettingsForm = new FormGroup({
    supportSpec: new FormArray([]),
  });

  inkPriceForm = new FormGroup({
    panelInkPrice : new FormControl(''),
    rollInkPrice : new FormControl(''),
  });

  constructor(
    private settingsService : SettingsService
  ) { }

  ngOnInit(): void {
    this.onAddSupport();

    this.getSupportsAndPrices();
  }

  getSupportsAndPrices(){
    this.settingsService.getSupportsAndPrices().subscribe((response:any)=>{
      console.log(response);
      let inks = response.inkPrices;
      inks.forEach((ink:any) => {
        if(ink.type === 'panel'){
          this.inkPriceForm.get('panelInkPrice')?.setValue(ink.price/1000);
        } else {
          this.inkPriceForm.get('rollInkPrice')?.setValue(ink.price/1000);
        }
      });


      let options = response.optionsPrices;
      options.forEach((option:any) => {
        if(option.type === 'shinyLaminate'){
          this.optionSettingsForm.get('shinyLaminatePrice')?.setValue(option.price/1000);
        } else if (option.type === 'matteLaminate') {
          this.optionSettingsForm.get('matteLaminatePrice')?.setValue(option.price/1000);
        } else if (option.type === 'grommets'){
          this.optionSettingsForm.get('grommetsPrice')?.setValue(option.price/1000);
        } else {
          this.optionSettingsForm.get('reinforcementsPrice')?.setValue(option.price/1000);
        }
      });

      let supports = response.supports;
      supports.forEach((support:any, i:number)=>{
        this.onAddSupport();
        const lines = this.getSupportOfProducts();
        if (lines !== null && i !== null) {
          const line = lines.at(i);
          line.get('supportName')?.setValue(supports[i].name);
          line.get('supportType')?.setValue(supports[i].type);
          line.get('supportPrice')?.setValue(supports[i].price);
          support.supportLines.forEach((lineInLine:any,j:number)=>{
            this.onAddSupportFormat(i);
            console.log(lineInLine)
            const lines = this.getSupportFormatOfProducts(i);
            const line = lines.at(j);
            line.get('active')?.setValue(lineInLine.active);
            line.get('grommets')?.setValue(lineInLine.grommets);
            line.get('shinyLaminate')?.setValue(lineInLine.shinyLaminate);
            line.get('matteLaminate')?.setValue(lineInLine.matteLaminate);
            line.get('width')?.setValue(lineInLine.width);
            line.get('length')?.setValue(lineInLine.length);
            line.get('reinforcements')?.setValue(lineInLine.reinforcements);
          })
        }
      })
    });
  }

  getSupportOfProducts(): FormArray {
    return this.supportSettingsForm.get('supportSpec') as FormArray;
  }

  getSupportFormatOfProducts(i: number): FormArray {
    return this.getSupportOfProducts().at(i).get('supportFormat') as FormArray;
  }
  onAddSupport(){
    const supportSpec = new FormGroup({
      supportName: new FormControl(''),
      supportType: new FormControl(''),
      supportPrice: new FormControl(''),
      supportFormat:new FormArray([]),
    });
    // this.products.push(productForm.value);
    this.getSupportOfProducts().push(supportSpec);
    // this.onAddSupportFormat(this.getSupportOfProducts().length-1);
  }

  onAddSupportFormat(i: number){
    const supportFormat = new FormGroup({
      length: new FormControl(''),
      width: new FormControl(''),
      active: new FormControl(false),
      shinyLaminate : new FormControl(false),
      matteLaminate : new FormControl(false),
      grommets : new FormControl(false),
      reinforcements : new FormControl(false),
    });
    this.getSupportFormatOfProducts(i).push(supportFormat);
    console.log(this.getSupportFormatOfProducts(i).controls)
  }

  removeSupport(i:number){
    this.getSupportOfProducts().removeAt(i);
  }

  removeSupportFormat(i:number,j:number){
    this.getSupportFormatOfProducts(i).removeAt(j);
  }

  onSubmit(){
    let inkPrices:any = [];
    let optionPrices:any = [];
    if(this.inkPriceForm.get('panelInkPrice')?.value && this.inkPriceForm.get('rollInkPrice')?.value){
      inkPrices = [
        {
          type:'panel',
          price:this.inkPriceForm.get('panelInkPrice')?.value
        },
        {
          type:'roll',
          price:this.inkPriceForm.get('rollInkPrice')?.value
        }
      ]
    } else {
      inkPrices = null
    }
    if(this.optionSettingsForm.value !== null){
      optionPrices = [
        {
          type:'shinyLaminate',
          price:this.optionSettingsForm.get('shinyLaminatePrice')?.value
        },
        {
          type:'matteLaminate',
          price:this.optionSettingsForm.get('matteLaminatePrice')?.value
        },
        {
          type:'grommets',
          price:this.optionSettingsForm.get('grommetsPrice')?.value
        },
        {
          type:'reinforcements',
          price:this.optionSettingsForm.get('reinforcementsPrice')?.value
        },
      ]
    } else {
      optionPrices = null
    }
    console.log(optionPrices)
    this.settingsService.saveAll(inkPrices, optionPrices, this.supportSettingsForm)?.subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
  }
}
