import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { LoadingOptions, ToastOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  // QUANDO FOR CHAMADA O METODO, PODE OU NAO SER DEFINIDO OPÇ~POES E
  // TAMBEM, OS "..." É PARA INFORMAR QUE PODERA SER UTILIZADA TODOS OS COISOS DA CLASSE
  // EM QUALQUEER LUGAR, OU SEJA, OS PONTINHOS SAO TIPO UM ELSE
  public async loading(opcoes?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingCtrl.create({
      message: 'carregando...',
      ...opcoes
    });
    loading.present();
    return loading;
  }

  public async toast(opcoes: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'X',
      ...opcoes
    });
    toast.present();
    return toast;
  }
}
