import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { Http } from '@angular/http';


@Component({
    selector: 'app-register',
    // moduleId: module.id,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })

  export class RegisterComponent implements OnInit {

    //   registerForm: FormGroup;
      loading =  false;
    //   submitted = false;
      model: any = {};

      constructor (
                    private formBuilder: FormBuilder,
                    private router: Router,
                    private userService: UserService,
                    private alertService: AlertService,
                    private http: Http
                  ) { }

    ngOnInit() {
    }

    register() {
        this.loading = true;
        this.userService.register(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
  }
