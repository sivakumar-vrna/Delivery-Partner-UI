import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDeliveryPersonPage } from './new-delivery-person.page';

const routes: Routes = [
  {
    path: '',
    component: NewDeliveryPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDeliveryPersonPageRoutingModule {}
