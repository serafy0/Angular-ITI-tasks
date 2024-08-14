import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemApiService {
  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/items');
  }

  updateItems(data: Item): Observable<object> {
    return this.httpClient.put(`http://localhost:3000/items/${data.id}`, data);
  }
}
