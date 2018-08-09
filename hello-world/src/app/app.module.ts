import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { TestService } from '../test.service';

@NgModule({
  declarations: [//rejestracja komponentow 
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService , TestService],   // rejestracja Serwisow w tej sekcji!!
  bootstrap: [AppComponent]
})
export class AppModule { }
