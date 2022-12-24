import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../shared/services/course.service';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
})
export class CoursesPageComponent implements OnInit {
  public titleControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);

  public courseForm = new FormGroup({
    title: this.titleControl,
  });

  constructor(private readonly courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.courses$.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    this.courseForm.markAsTouched();

    if (this.courseForm.valid) {
      this.courseService.addCourse(this.courseForm.value as Course);

      this.courseForm.reset();
    }
  }
}
