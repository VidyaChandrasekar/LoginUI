import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CandidateListComponent } from './candidates/candidate-list/candidate-list.component';
import { CandidateDetailsComponent } from './candidates/candidate-details/candidate-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '**', redirectTo: '' },
  // { path: '', redirectTo: 'candidate-list', pathMatch: 'full' },
  { path: 'candidate-list', component: CandidateListComponent },
  { path: 'candidate-detail', component: CandidateDetailsComponent },
  { path: 'candidate/edit/:id', component: CandidateDetailsComponent },
  { path: '**', redirectTo: 'candidate-list' }
];
export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
