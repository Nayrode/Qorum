import { Component } from '@angular/core';
import { SubjectService } from './service/subject.service';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  constructor(private readonly subjectService: SubjectService) { }
  
  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe((res) => {
      console.log(res);
    });
  }
}
