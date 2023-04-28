import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThingsService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  fetch(filter = '') {
    return this.http.get<any[]>(this.baseUrl + `api/things?filter=${filter}`);
  }
}
