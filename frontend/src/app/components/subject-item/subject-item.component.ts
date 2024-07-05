import { Component, Input } from '@angular/core';
import { Subject } from '../subject/model/subject.model';
import { TimeAgoPipe } from './timeago';

@Component({
  selector: 'subject-item',
  standalone: true,
  imports: [TimeAgoPipe],
  templateUrl: './subject-item.component.html',
  styleUrl: './subject-item.component.css'
})
export class SubjectItemComponent {
  @Input() subject: Subject = {} as Subject;

  constructor() { }

  onClick() {
    console.log('Subject clicked');
  }
}
