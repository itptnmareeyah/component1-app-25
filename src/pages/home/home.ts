import { Component } from '@angular/core';
import { AlertController, NavController,ActionSheetController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController,
    public actionSheet: ActionSheetController, 
    public navCtr: NavController) {
  }

  showActoin(){
    const acSheet =this.actionSheet.create({
      title:'Test Action',
      buttons: [
        {
          text: 'Information',
          role: 'Info',
          handler: () => {
            console.log('Info Clicked');
          }
        },
      ]
    });
    acSheet.present();
 }

showAlert(){
  const alert = this.alertCtrl.create({
    title: 'confirm Answer!!',
    subTitle : 'Mareeyah Sulong',
   buttons: [
     {
       text: 'OK'
     },
     {
       text: 'Cencel',
       handler: () =>{
         console.log("Cancel");
       },
      }
    ]
  });
  alert.present();
}

}