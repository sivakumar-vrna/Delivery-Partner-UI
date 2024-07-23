import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewDeliveryPersonPage } from './new-delivery-person/new-delivery-person.page';


@Component({
  selector: 'app-manage-delivery-person',
  templateUrl: './manage-delivery-person.page.html',
  styleUrls: ['./manage-delivery-person.page.scss'],
})
export class ManageDeliveryPersonPage implements OnInit {
  data: any[] = [];
  Editdata:any[] = [];

  constructor(
    private homeService: HomeService,
    private router: Router,
    private modalController: ModalController
    ) {}

  ngOnInit() {
    this.data = this.homeService.getData();
    this.Editdata = this.homeService.editData();
  }

  navigateHome(){
    this.router.navigate(['/home']);
  }
  
  onNavigate(){
   this.router.navigate(['/delivery-person-details'])
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: NewDeliveryPersonPage,
      cssClass: 'bottom-modal' 
    });
    return await modal.present();
  }
  
  

}
