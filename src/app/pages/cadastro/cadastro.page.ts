import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss']
})
export class CadastroPage implements OnInit {
  pessoa: {
    nome: string;
    idade?: number;
  };
  constructor(private alertControl: AlertController, private rota: Router) {
    this.pessoa = {
      nome: ''
    };
  }

  public async gravar(): Promise<any> {
    let alerta = await this.alertControl.create({
      header: 'Gravado',
      message: 'Itens gravados com sucesso!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.rota.navigate(['listagem'], {
              queryParams: this.pessoa
            });
          }
        }
      ]
    });
    alerta.present();
    //console.log(this.pessoa);
  }

  ngOnInit() {}
}
