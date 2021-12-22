import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from '../loan.service';
import { Loan } from '../loan/loan.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  loan: Loan = {
    id: 0
  };
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

  constructor(private route:ActivatedRoute, private loanService: LoanService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.loanService.getLoan(myid).subscribe(payload=>{
        console.log("editing this", payload);
        this.loan = payload;
      })
    })
  }


  createLoans(createLoan: any){
    this.loanService.createLoan(createLoan).subscribe(() => {
      this.ngOnInit();
    })
  }

}