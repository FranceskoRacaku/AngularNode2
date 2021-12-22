import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './loan/loan.component';
import { LoansComponent } from './loans/loans.component';
import { CreateComponent } from './create/create.component';
import { EditLoansComponent } from './editloans/editloans.component';

const routes: Routes = [
  {path: "loans", component: LoansComponent},
  {path: "loans/:id", component: LoanComponent},
  {path: "loans/create", component: CreateComponent},
  {path: "loans/:id/edit", component: EditLoansComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
