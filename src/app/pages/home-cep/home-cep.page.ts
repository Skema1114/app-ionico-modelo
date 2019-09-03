import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-cep',
  templateUrl: './home-cep.page.html',
  styleUrls: ['./home-cep.page.scss']
})
export class HomeCepPage implements OnInit {
  termo: string;
  resultado: any;

  constructor(private cepService: CepService, private toast: ToastController) {}

  public buscarCep() {
    this.resultado = null;
    this.cepService
      .ConsultaCep(this.termo)
      .subscribe(resposta => (this.resultado = resposta), erro => this.showError(erro.message));
  }

  public async showError(msg: string) {
    const t = await this.toast.create({
      message: msg,
      duration: 3000,
      closeButtonText: 'OK',
      showCloseButton: true
    });
    t.present();
  }

  ngOnInit() {}
}
