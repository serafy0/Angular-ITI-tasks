import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

export const routes: Routes = [

    {path:"login", component:LoginComponent},
    {path:"register", component:SignUpComponent}

];
