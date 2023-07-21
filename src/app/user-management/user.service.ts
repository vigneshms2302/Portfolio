import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  getUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Error fetching user:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user).pipe(
      catchError((error) => {
        console.error('Error creating user:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  updateUser(id: number, user: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, user).pipe(
      catchError((error) => {
        console.error('Error updating user:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError((error) => {
        console.error('Error deleting user:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }
}
