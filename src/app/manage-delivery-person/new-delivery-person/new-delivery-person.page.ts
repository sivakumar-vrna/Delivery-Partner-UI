import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-delivery-person',
  templateUrl: './new-delivery-person.page.html',
  styleUrls: ['./new-delivery-person.page.scss'],
})
export class NewDeliveryPersonPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }
  
  async dismissModal() {
    await this.modalController.dismiss();
  }

}
