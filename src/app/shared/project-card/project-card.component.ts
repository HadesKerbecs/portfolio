import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Output() open = new EventEmitter<Project>();

  openModal() {
    this.open.emit(this.project);
  }
}
