import {Component, Injectable, OnInit} from '@angular/core';
import { NgIf, NgForOf } from '@angular/common'; // Import required directives
import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/project.model';


@Component({
  selector: 'app-project-list',
  standalone: true,
  // Import `NgIf` and `NgForOf` for structural directives
  imports: [NgIf, NgForOf],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{
  projects: Project[] = [];
  isLoading = true;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      (data:any) => {
        this.projects = data;
        this.isLoading = false;
      },
      (error:any) => {
        console.error('Error fetching projects:', error);
        this.isLoading = false;
      }
    );
  }
}
