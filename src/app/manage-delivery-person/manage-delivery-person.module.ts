import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ManageDeliveryPersonPageRoutingModule } from './manage-delivery-person-routing.module';
import { ManageDeliveryPersonPage } from './manage-delivery-person.page';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageDeliveryPersonPageRoutingModule,
    MatBottomSheetModule,
    MatListModule
  ],
  declarations: [ManageDeliveryPersonPage]
})
export class ManageDeliveryPersonPageModule {}
