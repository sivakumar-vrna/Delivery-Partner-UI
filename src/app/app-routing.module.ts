import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'manage-delivery-person',
    loadChildren: () => import('./manage-delivery-person/manage-delivery-person.module').then( m => m.ManageDeliveryPersonPageModule)
  },
  {
    path: 'new-delivery-person',
    loadChildren: () => import('./manage-delivery-person/new-delivery-person/new-delivery-person.module').then( m => m.NewDeliveryPersonPageModule)
  },
  {
    path: 'delivery-person-details',
    loadChildren: () => import('./manage-delivery-person/delivery-person-details/delivery-person-details.module').then( m => m.DeliveryPersonDetailsPageModule)
  },
  {
    path: 'reject',
    loadChildren: () => import('./manage-delivery-person/reject/reject.module').then( m => m.RejectPageModule)
  },
  {
    path: 'approve',
    loadChildren: () => import('./manage-delivery-person/approve/approve.module').then( m => m.ApprovePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
