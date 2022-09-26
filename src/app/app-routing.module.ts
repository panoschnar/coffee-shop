import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"register", component: RegisterComponent},
  {path:"verify-email", component: VerifyEmailComponent},
  {path:"forgot-pass", component: ForgotPassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
