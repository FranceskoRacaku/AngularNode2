import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { Loan } from '../loan/loan.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createLoan: any ={
    name: "",
    age: "",
    occupation: "",
    birthday: "",
    houseStatus: "",
    rentCost: "",
    yearlyNetIncome: "",
    requestedLoanAmount: "",
    approvedLoan: "",
  }

  constructor(private router: Router, 
    private loanService: LoanService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  createLoans(createLoan: any){
    this.loanService.createLoan(createLoan).subscribe(data => {
      if (data){
        this.router.navigateByUrl("/loans");
      }
      console.log("Loan is Created ", data);
      this.ngOnInit();
    })
  }

}