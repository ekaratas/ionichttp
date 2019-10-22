import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

veri: any;

  constructor(public http: HttpClient, public loadingController: LoadingController ) {

    this.presentLoading();

  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Yükleniyor...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.veriListele().subscribe(sonuc => { this.veri = sonuc; }, e => { console.log(e.text); } );
    console.log('Loading dismissed!');
  }


  veriListele() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

}
