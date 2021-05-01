import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Budget } from 'src/app/model/budget';
import { BudgetService } from 'src/app/service/budget.service';

import { ToastService } from 'src/app/service/toast.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-budget-update',
  templateUrl: './budget-update.component.html',
  styleUrls: ['./budget-update.component.css']
})
export class BudgetUpdateComponent implements OnInit {
  submitted = false;
  selectedBudget: Budget;
  editForm: FormGroup;
  types: any = ['Income', 'Expense'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private budgetApi: BudgetService,
    private router: Router,
    public modal: NgbActiveModal,
    public toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.updateBudget();
  }

    // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  updateType(e) {
    this.editForm.get('type').setValue(e, {
      onlySelf: true
    })
  }

  updateBudget() {
    console.log(this.selectedBudget.type);
    this.editForm = this.fb.group({
      id:[this.selectedBudget.id],
      concept: [this.selectedBudget.concept, [Validators.required]],
      amount: [this.selectedBudget.amount, [Validators.required]],
      //.add(1, 'days')
      date: [(moment(this.selectedBudget.date).format('YYYY-MM-DD'))],
      type: [this.selectedBudget.type, [Validators.required]],
    })
  }

  showSuccessg() {
    this.toastService.show('Budget updated successfuly!', {
      classname: 'bg-success text-white font-weight-bold',
      delay: 2000 ,
      autohide: true
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    }
    this.submitted = true;
    this.budgetApi.updateBudget(this.editForm.value)
      .subscribe(res => {
        this.submitted = false;
        this.modal.close('Yes');
        this.showSuccessg();
        console.log('Content updated successfully!')
      }, (error) => {
        console.log(error)
      })
  }


}
