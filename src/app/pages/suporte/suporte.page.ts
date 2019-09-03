import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
})
export class SuportePage implements OnInit {

  constructor(private rota: ActivatedRoute) { }

  ngOnInit() {
    this.rota.queryParams.subscribe(p => {
      console.log(p);
    });
  }

}
