import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { ProjectModalComponent } from '../../shared/project-modal/project-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [];
  selectedProject: Project | null = null;

  constructor(private service: ProjectsService) {
    this.projects = this.service.getProjects();
  }

  open(project: Project) {
    this.selectedProject = project;
  }

  close() {
    this.selectedProject = null;
  }
}
