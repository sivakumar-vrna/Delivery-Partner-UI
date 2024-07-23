import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private data = [
    {
        name: 'Siva C',
        phone: '+91 9361067280',
        status: 'Ready',
        isAssigned: false
    },
    {
      name: 'Ashraf',
      phone: '+91 98989 98989',
      status: 'Ready',
      isAssigned: false
    },
    {
      name: 'Stephen',
      phone: '+91 98989 98989',
      status: 'Available in 20 min',
      isAssigned: false
    },
    {
      name: 'Prabhu',
      phone: '+91 98989 98989',
      status: 'Ready',
      isAssigned: false
    }
  ];

  public Editdata =[
    {
      name:'Kishore',
      phone: '+91 98989 98989',
      verify:'Pending Verification'
    }
  ]

  constructor() { }

  getData() {
    return this.data;
  }
  editData(){
    return this.Editdata;
  }
}
