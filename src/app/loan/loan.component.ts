import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { Loan } from './loan.model';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  loan:Loan = {
    id: 0,
  };

  constructor(private route:ActivatedRoute, 
    private loanService: LoanService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.loanService.getLoan(myid).subscribe(payload=>{
        console.log(payload);
        this.loan = payload;
      })
    })
  }

    edit():void {
      this.router.navigateByUrl(`/loans/${this.loan.id}/edit`);
    }
}
