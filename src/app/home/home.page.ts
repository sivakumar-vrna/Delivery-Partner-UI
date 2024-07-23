import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: any[] = [];
  selectedDeliveryType: string | null = null;
  public isDeliverybySelf: boolean = false;
  public isAssigned: boolean = false;
  
  public actionSheetButtons = [
    {
      text: 'Delivery by Self',
      role: 'destructive',
      data: {
        action: 'self',
      },
      handler: () => {
        this.isDeliverybySelf = true;
        this.selectedDeliveryType = 'Delivery by Self';
      }
    },
    {
      text: '3rd Party Delivery Partner - Local',
      data: {
        action: 'local',
      },
      handler: () => {
        this.isDeliverybySelf = false;
        this.selectedDeliveryType = 'Local...';
       }
    },
    {
      text: '3rd Party Delivery Partner - Long Distance',
      role: 'cancel',
      data: {
        action: 'long-distance',
      },
      handler: () => {
        this.isDeliverybySelf = false;
        this.selectedDeliveryType = 'Long Distance.';
      }
    },
  ];

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.data = this.homeService.getData();
  }

  isAnyItemAssigned(): boolean {
    return this.data.some(item => item.isAssigned);
  }

  toggleAssign(item: any): void {
    item.isAssigned = !item.isAssigned;
  }

  setDeliveryBySelf(value: boolean) {
    this.isDeliverybySelf = value;
  }

  resetDeliveryType() {
    this.selectedDeliveryType = null;
    this.data.forEach(item => {
      item.isAssigned = false;
    });
  }
  navigate(){
    this.router.navigate(['/manage-delivery-person']);
  }

}
