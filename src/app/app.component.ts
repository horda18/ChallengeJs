import { Component } from '@angular/core';
import { ToastService } from './service/toast.service';
import { AuthServiceService } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Budgets';

  constructor(
    public authService: AuthServiceService
  ) {}

  logout() {
    this.authService.doLogout()
  }

}
