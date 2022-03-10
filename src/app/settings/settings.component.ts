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
