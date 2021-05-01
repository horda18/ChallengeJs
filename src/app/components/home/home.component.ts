import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/model/budget';
import { BudgetService } from 'src/app/service/budget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  budgets: any = [];

  constructor(
    private budgetApi: BudgetService
  ) { }

  ngOnInit(): void {
    this.readBudget();
  }

  readBudget(): void {
      this.budgetApi.getBudgets().subscribe((data) => {
        this.budgets = data.reverse().slice(0,10);
      })
    }

  getActualMoney() {
    let actives = 0;
    let pasives = 0;
    this.budgets.forEach(element => {
      if(element.type === "Income") {
        actives += element.amount;
      } else {
        pasives += element.amount;
      }
    });

    return actives - pasives;

  }

}
