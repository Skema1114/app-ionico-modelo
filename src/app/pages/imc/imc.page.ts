import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss']
})
export class ImcPage implements OnInit {
  peso: number;
  altura: number;

  constructor() {}

  public calcularImc() {
    const total = this.peso / (this.altura * this.altura);
    console.log(total);
  }

  ngOnInit() {}
}
