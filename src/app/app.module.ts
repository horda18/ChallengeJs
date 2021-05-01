import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BudgetService } from 'src/app/service/budget.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './components/budget-list/budget-list/budget-list.component';
import { BudgetCreateComponent } from './components/budget-create/budget-create/budget-create.component';
import { BudgetUpdateComponent } from './components/budget-update/budget-update/budget-update.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataTablesModule } from "angular-datatables";
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

import { TokenInterceptorService } from './service/token-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    BudgetCreateComponent,
    BudgetUpdateComponent,
    ToastComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule
  ],
  providers: [BudgetService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptorService,
                multi: true
              }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
