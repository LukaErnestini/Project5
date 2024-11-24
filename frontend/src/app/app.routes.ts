import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '**', component: PageNotFoundComponent}
];
