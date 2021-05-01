import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Budget } from 'src/app/model/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  baseUri:string = 'http://localhost:8080/api/budgets';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create
  createBudget(data): Observable<any> {
    let url = "http://localhost:8080/api/budget/create";
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all
  getBudgets(): Observable<any> {
    return this.http.get<any>(`${this.baseUri}`);
  }

  // Get Single Genre
  getBudget(id): Observable<any> {
    let url = `http://localhost:8080/api/budget/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update Genre
  updateBudget(data): Observable<any> {
    let url = `http://localhost:8080/api/budget/${data.id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete Genre
  deleteBudget(id): Observable<any> {
    let url = `http://localhost:8080/api/budget/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
