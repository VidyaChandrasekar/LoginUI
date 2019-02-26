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
        // this.registerForm = this.formBuilder.group({
        //     firstName: ['', Validators.required],
        //     lastName: ['', Validators.required],
        //     userName: ['', Validators.required],
        //     passWord: ['', [Validators.required, Validators.minLength(6)]]
        // });
    }

    // get f() {
    //     return this.registerForm.controls;
    // }

    // onSubmit() {
    //     this.submitted = true;

    //     if (this.registerForm.invalid) {
    //         return;
    //     }
    //     this.loading = true;
    //     this.userService.register(this.registerForm.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.alertService.success('Registration Successful', true);
    //             this.router.navigate(['/login']);
    //         },
    //     error => {
    //         this.alertService.error(error);
    //         this.loading = false;
    //     });
    // }

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
