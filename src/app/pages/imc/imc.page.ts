import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss']
})
export class ImcPage implements OnInit {
  private peso: number;
  private altura: number;
  private resultFinal: string;
  private total: number;
  private color: string;

  constructor() {}

  public calcularImc() {
    this.total = this.peso / (this.altura * this.altura);

    if (this.total <= 18.5) {
      this.resultFinal = 'Abaixo do peso normal';
      this.color = 'warning';
    }
    if (this.total > 18.5 && this.total <= 25) {
      this.resultFinal = 'Peso normal';
      this.color = 'success';
    }
    if (this.total > 25 && this.total <= 30) {
      this.resultFinal = 'Acima do peso normal';
      this.color = 'warning';
    }
    if (this.total > 30) {
      this.resultFinal = 'Obesidade';
      this.color = 'danger';
    }

    return this.resultFinal;
  }

  ngOnInit() {}
}
