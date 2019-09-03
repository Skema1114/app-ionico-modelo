import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private rota: Router) {}

  irParaSuporte() {
    let parametros: NavigationExtras = {
      queryParams: {
        nome: 'Rafael',
        idade: 20,
        profissao: 'Rei'
      }
    };
    this.rota.navigate(['/suporte'], parametros);
  }

  ngOnInit() {}
}
