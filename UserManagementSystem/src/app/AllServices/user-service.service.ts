import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const User_Url = 'http://15.207.229.231:8000/machstatz';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(User_Url + '/get_all_users');
  }
  create(data: any): Observable<any> {
    return this.http.post(User_Url + '/add_new_user', data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${User_Url}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${User_Url + '/delete_existing_user'}/${id}`);
  }

}