import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  contactsList:FirebaseListObservable<any[]>;
  Contact = '';
  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     public actionctrl:ActionSheetController,
    public firebaseService:FirebaseServiceProvider) {
    this.contactsList = this.firebaseService.getContactsList();
  }

  addContact() {
    this.firebaseService.addContact(this.Contact);
  }
  
  deleteContact(id) {
    this.firebaseService.deleteContact(id);
  }


  // showactionsheet() {
  //   let actionsheet = this.actionctrl.create( {
  //     title: 'My favorite list',
  //     buttons : [
  //       {
  //         text:'Delete',
  //         role:'destructive',
  //         handler: () => {
  //           console.log("Hey deleted successfully")
  //         }
  //       },
  //       {
  //         text:'Share',
  //         handler: () => {
  //           console.log("Hey Shared successfully")
  //         }
  //       },
  //       {
  //         text:'Cancel',
  //         role:'cancel',
  //         handler: () => {
  //           console.log("Hey cancelled successfully")
  //         }
  //       }
  //     ]
  //   });

  //   actionsheet.present();
  // }

}
