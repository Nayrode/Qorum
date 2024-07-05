import { Component, Input } from '@angular/core';
import { Subject } from '../subject/model/subject.model';
import { TimeAgoPipe } from './timeago';
import { Router } from '@angular/router';

@Component({
  selector: 'subject-item',
  standalone: true,
  imports: [TimeAgoPipe],
  templateUrl: './subject-item.component.html',
  styleUrl: './subject-item.component.css'
})
export class SubjectItemComponent {
  @Input() subject: Subject = {} as Subject;

  constructor(private readonly router : Router) { }

  onClick() {
    this.router.navigate(['subject', this.subject.id]);
  }
}
