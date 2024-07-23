import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryPersonDetailsPage } from './delivery-person-details.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryPersonDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryPersonDetailsPageRoutingModule {}
