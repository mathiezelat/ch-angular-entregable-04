import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../../interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses = new BehaviorSubject<Course[]>([]);
  public courses$ = this.courses.asObservable();
  private lastValue: Course[] = [];

  constructor() {
    this.courses.subscribe((value) => {
      this.lastValue = value;
    });
  }

  addCourse(newCourse: Course) {
    this.courses.next([...this.lastValue, newCourse]);
  }
}
