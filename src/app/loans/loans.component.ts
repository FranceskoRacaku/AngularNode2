import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from '../loan/loan.model';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  constructor(private router: Router, 
    private loanService: LoanService, 
    private route: ActivatedRoute) { }

  loans:Loan[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.loanService.getLoans().subscribe(payload=>{
        console.log(payload);
        this.loans = payload;
    })
  })
}


  deleteLoans(id: number){
    this.loanService.deleteLoans(id).subscribe(data =>{
      this.ngOnInit();
      })
    }
}