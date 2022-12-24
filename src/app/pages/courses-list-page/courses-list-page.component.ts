import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../shared/services/course.service';

@Component({
  selector: 'app-courses-list-page',
  templateUrl: './courses-list-page.component.html',
  styleUrls: ['./courses-list-page.component.css'],
})
export class CoursesListPageComponent implements OnInit {
  constructor(public readonly courseService: CourseService) {}

  ngOnInit(): void {}
}
