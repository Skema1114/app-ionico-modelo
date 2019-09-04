import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisaoService {
  constructor(private http: HttpClient) {}

  public buscarPrevisao(cidade: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&appid=9f09310782ccafa8ca836991fe3b3513`;
    return this.http.get(url);
  }
}
