import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from '../loan/loan.model';
import { LoanService } from '../loan.service';


@Component({
  selector: 'app-editloans',
  templateUrl: './editloans.component.html',
  styleUrls: ['./editloans.component.scss']
})
export class EditLoansComponent implements OnInit {


  loan: Loan = {
    id: 0,
  };
  
  constructor(private router: Router, 
    private loanService: LoanService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.loanService.getLoan(myid).subscribe(payload=>{
        console.log("editing this", payload);
        this.loan = payload;
      })
    })
  }

  update():void{
    this.loanService.updateLoans(this.loan).subscribe(data => {
      if (data){
        this.router.navigateByUrl("/loans");
      }
      console.log("Loan is Updated ", data);
    })
  }
}
