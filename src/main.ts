import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { ForgotPasswordComponent } from './app/forgot-password/forgot-password.component';
import { UserComponent } from './app/user/user.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        { path: '', component: UserComponent }, // Default Home Page
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'forgot-password', component: ForgotPasswordComponent },
        { path: '**', redirectTo: '' } // Redirect unknown routes to Home
      ],
      withComponentInputBinding()
    )
  ]
}).catch(err => console.error(err));
