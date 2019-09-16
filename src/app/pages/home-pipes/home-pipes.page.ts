import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-home-pipes',
  templateUrl: './home-pipes.page.html',
  styleUrls: ['./home-pipes.page.scss']
})
export class HomePipesPage implements OnInit {
  preco: 0;
  formHome: FormGroup;

  // INjETAR NO CONSTRUTOR UMA REFERENCIA PRO FORM BUILDER
  constructor(private fb: FormBuilder) {
    this.formHome = fb.group({
      nome: [['professor'], [Validators.required, Validators.minLength(3)]],
      valor: [[], [Validators.required]]
    });
    console.log(this.formHome);
  }

  public testar(): void {
    console.log(this.formHome.value);
    console.log('esp', this.formHome.value.nome);
  }

  get valor(): AbstractControl {
    return this.formHome.get('valor');
  }

  ngOnInit() {}
}
