import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {ProjectListComponent} from './components/project-list/project-list.component';

// Define the standalone routes
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path:'projects',component:ProjectListComponent}
];
export class AppRoutingModule {}
