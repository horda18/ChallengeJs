import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetListComponent } from './components/budget-list/budget-list/budget-list.component';
import { BudgetCreateComponent } from './components/budget-create/budget-create/budget-create.component';
import { HomeComponent } from 'src/app/components/home/home.component';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthGuard } from './service/auth.guard';
import { LoginGuard } from './service/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'sign-in', component: SigninComponent, canActivate: [LoginGuard] },
  { path: 'sign-up', component: SignupComponent, canActivate: [LoginGuard] },
  { path: 'budgets', component: BudgetListComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'budget/create', component: BudgetCreateComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
