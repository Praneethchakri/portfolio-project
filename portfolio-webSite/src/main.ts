// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';  // <-- your routes file from Step 1

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide your routes for the Router
    provideHttpClient()
  ]
}).catch(err => console.error(err));
