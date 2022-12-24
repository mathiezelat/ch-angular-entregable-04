import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoursesListPageComponent } from './courses-list-page/courses-list-page.component';
import { StarwarsPageComponent } from './starwars-page/starwars-page.component';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CoursesListPageComponent,
    StarwarsPageComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [
    CoursesPageComponent,
    CoursesListPageComponent,
    StarwarsPageComponent,
  ],
})
export class PagesModule {}
