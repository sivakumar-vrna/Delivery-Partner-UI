import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryPersonDetailsPageRoutingModule } from './delivery-person-details-routing.module';

import { DeliveryPersonDetailsPage } from './delivery-person-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryPersonDetailsPageRoutingModule
  ],
  declarations: [DeliveryPersonDetailsPage]
})
export class DeliveryPersonDetailsPageModule {}
