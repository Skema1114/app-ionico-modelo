import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss']
})
export class ListagemPage implements OnInit {
  pessoa: any;
  constructor(private rota: ActivatedRoute) {
    this.rota.queryParams.subscribe(params => {
      this.pessoa = params;
      console.log(this.pessoa.nome);
    });
  }

  ngOnInit() {}
}
