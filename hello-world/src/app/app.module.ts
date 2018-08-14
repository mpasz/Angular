import { AuthorsService } from './authors.service';
import { CoursesSerevice } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
<<<<<<< HEAD
import { AuthorsComponent } from './authors/authors.component';
=======
import { CoursesService } from './courses.service';
import { TestService } from '../test.service';
>>>>>>> 31c7bbda2e1040f1e0c349ad1d72fed02eeb20af

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
<<<<<<< HEAD
  providers: [CoursesSerevice , AuthorsService],
=======
  providers: [CoursesService , TestService],   // rejestracja Serwisow w tej sekcji!!
>>>>>>> 31c7bbda2e1040f1e0c349ad1d72fed02eeb20af
  bootstrap: [AppComponent]
})
export class AppModule { }
