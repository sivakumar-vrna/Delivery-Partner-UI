import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageDeliveryPersonPage } from './manage-delivery-person.page';

const routes: Routes = [
  {
    path: '',
    component: ManageDeliveryPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageDeliveryPersonPageRoutingModule {}
