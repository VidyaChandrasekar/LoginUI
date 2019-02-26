import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: string) {
        this.userService.delete(id).subscribe(() => {
            this.loadAllUsers();
        });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => {
            this.users = users;
        });
    }
}
