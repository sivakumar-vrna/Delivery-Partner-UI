import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.page.html',
  styleUrls: ['./reject.page.scss'],
})
export class RejectPage implements OnInit {

  reason: string;

  constructor(private modalController: ModalController) {
    this.reason = ''; 
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  submit() {
    // Handle the submit logic here
    console.log('Rejected with reason:', this.reason);
    this.dismiss();
  }

  

}
