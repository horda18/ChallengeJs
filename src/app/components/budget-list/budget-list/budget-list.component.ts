import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/model/budget';
import { BudgetService } from 'src/app/service/budget.service';
import { BudgetUpdateComponent } from 'src/app/components/budget-update/budget-update/budget-update.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastService } from 'src/app/service/toast.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  budgets: any = [];

  constructor(
    private budgetApi: BudgetService,
    public toastService: ToastService,
    public modalService: NgbModal
    ) {}

  ngOnInit(): void {
    this.readBudget();
  }

  readBudget(): void {
      this.budgetApi.getBudgets().subscribe((data) => {
        this.budgets = data;
      })
    }

  editBudget(budget: Budget): void {
    const ref = this.modalService.open(BudgetUpdateComponent, { centered: true });
    ref.componentInstance.selectedBudget = budget;

    ref.result.then((yes) => {
      console.log("Ok Click");

      this.readBudget();
    },
    (cancel) => {
      console.log("Cancel Click");
    })
  }


  showSuccess() {
    this.toastService.show('Budget deleted successfuly!', {
      classname: 'bg-danger text-white font-weight-bold',
      delay: 2000,
      autohide: true
    });
  }

  removeGenre(budget, index) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete operation!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.budgetApi.deleteBudget(budget.id).subscribe((data) => {
          this.budgets.splice(index, 1);
          this.showSuccess();
        })
      }
    })
  }

}
