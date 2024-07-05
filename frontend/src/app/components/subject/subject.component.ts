import { Component } from '@angular/core';
import { SubjectService } from './service/subject.service';
import { NgFor, NgIf } from '@angular/common';
import { Subject } from './model/subject.model';
import { LucideAngularModule } from 'lucide-angular';
import { SubjectItemComponent } from '../subject-item/subject-item.component';
import { Router } from '@angular/router';
import { LayoutBarComponent } from '../layout-bar/layout-bar.component';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [NgFor, SubjectItemComponent, LucideAngularModule, LayoutBarComponent, NgIf],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  constructor(private readonly subjectService: SubjectService,
    private readonly router: Router
  ) { }
  
  subjects : Subject[] = [];

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe((res) => {
      this.subjects = res;
    });
  }

  onNewSubject() {
    this.router.navigate(['subject']);
  }
}
