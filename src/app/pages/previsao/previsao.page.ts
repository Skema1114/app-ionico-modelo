import { Component, OnInit } from '@angular/core';
import { PrevisaoService } from 'src/app/services/previsao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-previsao',
  templateUrl: './previsao.page.html',
  styleUrls: ['./previsao.page.scss']
})
export class PrevisaoPage implements OnInit {
  constructor(private tempo: PrevisaoService, private rota: ActivatedRoute) {
    // ESSE É O NOME QUE ESTA DEPOIS DOS DOIS PONTOS NO ROUTE, A VARIAVEL
    const cidade = rota.snapshot.params.cidade;
    console.log(cidade);
    tempo.buscarPrevisao(cidade).subscribe(resp => console.log(resp));
  }

  ngOnInit() {}
}
