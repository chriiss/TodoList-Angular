import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../interface/color';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private _http: HttpClient) { }

  getDataColor() {
    return this._http.get<Color>('../../assets/color.json');
  }
}
