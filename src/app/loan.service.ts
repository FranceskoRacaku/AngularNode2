import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from './loan/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) { }

 
  createLoan(createLoan: any) {
    return this.http.post('http://localhost:8082/api/funds', createLoan);
  }

  deleteLoans(id: any) {
    return this.http.delete(`http://localhost:8082/api/funds/${id}`);
  }

  getLoans(): Observable<any> {
    return this.http.get("http://localhost:8082/api/funds");

  }
  updateLoans(loan: Loan): Observable<any>{
    
    return this.http.patch(`http://localhost:8082/api/funds/${loan.id}`, loan);
  }


  getLoan(id: number): Observable<any> {
    return this.http.get("http://localhost:8082/api/funds/"+id);

  }
}