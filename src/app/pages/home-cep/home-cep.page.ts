import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { ToastController } from '@ionic/angular';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-home-cep',
  templateUrl: './home-cep.page.html',
  styleUrls: ['./home-cep.page.scss']
})
export class HomeCepPage implements OnInit {
  termo: string;
  resultado: any;

  constructor(private cepService: CepService, private alert: AlertaService) {}

  public async buscarCep() {
    // ABRE A JANELA DO LOADING
    const loader = await this.alert.loading({ message: 'buscando o cep...' });
    this.resultado = null;
    this.cepService.ConsultaCep(this.termo).subscribe(
      resposta => {
        loader.dismiss();
        this.resultado = resposta;
      },
      error => {
        loader.dismiss();
        this.alert.toast({ message: error.message });
      }
    );
  }

  ngOnInit() {}
}
