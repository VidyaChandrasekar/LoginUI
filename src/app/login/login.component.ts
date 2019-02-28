import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { first } from 'rxjs/operators';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
export class LoginComponent implements OnInit {

    loading = false;
    returnUrl: string;
    model: any = {};

    constructor (private formBuilder: FormBuilder,
                 private route: ActivatedRoute,
                 private router: Router,
                 private authenticationService: AuthenticationService,
                 private alertService: AlertService) { }

   ngOnInit() {

       this.authenticationService.logout();

       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   }

   login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error._body);
                this.loading = false;
            });
}
}
