import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {
  }

  getItems() {
    return this.http.get('  http://localhost:3000/todo');
  }

  postItems(data: any) {
    return this.http.post<any>('  http://localhost:3000/todo', data);
  }

  putItems(data: any, id: number) {
    return this.http.put<any>('  http://localhost:3000/todo/' + id, data);
  }

  deleteItems(id: number) {
    return this.http.delete<any>('  http://localhost:3000/todo/' + id);
  }

  changeStatus(id: number, status: string) {
    return this.http.patch<any>('  http://localhost:3000/todo/' + id, {status: status});
  }
}
