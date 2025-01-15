import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model'; // Ensure this path is correct

@Injectable({
  providedIn: 'root', // Makes the service available throughout the app
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api/projects'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
