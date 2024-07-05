import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../subject/service/subject.service';
import { FormsModule, NgForm } from '@angular/forms';
import { LayoutBarComponent } from '../layout-bar/layout-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'subject-create',
  standalone: true,
  imports: [FormsModule, LayoutBarComponent, NgIf],
  templateUrl: './subject-create.component.html',
  styleUrl: './subject-create.component.css'
})
export class SubjectCreateComponent {
  errorMessage: string | null = null;

  constructor(private router: Router,
    private subjectService: SubjectService
  ) {}

  onBack() {
    this.router.navigate(['subjects']);
  }

  async onCreateSubject(form: NgForm) {
    const data = {
      name: form.value.name,
    };

    this.subjectService.createSubjects(data.name).subscribe((res) => {
      if (res) {
        this.router.navigate(['subjects']);
      }
      else {
        this.errorMessage = 'Failed to create subject';
      }
    });
  }
}
