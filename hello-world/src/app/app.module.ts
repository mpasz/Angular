import { CoursesSerevice } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { TestService } from '../test.service';

@NgModule({
  declarations: [//rejestracja komponentow 
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesSerevice , TestService],   // rejestracja Serwisow w tej sekcji!!

  bootstrap: [AppComponent]
})
export class AppModule { }
