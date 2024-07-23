import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RejectPage } from '../reject/reject.page';
import { ModalController } from '@ionic/angular';
import { ApprovePage } from '../approve/approve.page';


@Component({
  selector: 'app-delivery-person-details',
  templateUrl: './delivery-person-details.page.html',
  styleUrls: ['./delivery-person-details.page.scss'],
})
export class DeliveryPersonDetailsPage implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
  }

  async openRejectModal() {
    const modal = await this.modalController.create({
      component: RejectPage,
    });
    return await modal.present();
  }

  async OpenApproveModal(){
    const modal = await this.modalController.create({
      component:ApprovePage,
    });
    return await modal.present();
  }
  onNavigate(){
    this.router.navigate(['/delivery-person-details'])
  }

  backToManage(){
    this.router.navigate(['/manage-delivery-person'])
  }

}
