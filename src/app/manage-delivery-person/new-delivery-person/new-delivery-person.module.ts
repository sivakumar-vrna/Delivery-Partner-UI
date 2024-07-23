import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDeliveryPersonPageRoutingModule } from './new-delivery-person-routing.module';

import { NewDeliveryPersonPage } from './new-delivery-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDeliveryPersonPageRoutingModule
  ],
  declarations: [NewDeliveryPersonPage]
})
export class NewDeliveryPersonPageModule {}
