import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/service/budget.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-budget-create',
  templateUrl: './budget-create.component.html',
  styleUrls: ['./budget-create.component.css']
})
export class BudgetCreateComponent implements OnInit {

  submitted = false;
  budgetForm: FormGroup;
  types: any = ['Income', 'Expense'];


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private budgetApi: BudgetService
    )
    {
      this.mainForm();
    }

  ngOnInit(): void {
  }

  mainForm() {
    this.budgetForm = this.fb.group({
      concept: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      date:['', [Validators.required]],
      type:['', [Validators.required]]
    })
  }

  get myForm() {
    return this.budgetForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.budgetForm.valid) {
      return false;
    } else {
      this.budgetApi.createBudget(this.budgetForm.value).subscribe(
        (res) => {
          //console.log('Budget successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/budgets'))
        }, (error) => {
          //console.log(error);
        });
    }
  }

}
