import { NgModule } from '@angular/core';
import { LoanComponent } from './loan/loan.component';
import { LoansComponent } from './loans/loans.component';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { EditLoansComponent } from './editloans/editloans.component';

const routes: Routes = [
  {path: "loans", component: LoansComponent},
  {path: "loans/create", component: CreateComponent},
  {path: "loans/:id", component: LoanComponent},
  {path: "loans/:id/edit", component: EditLoansComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
