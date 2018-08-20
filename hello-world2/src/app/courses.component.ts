import { Component } from '@angular/core';   // import component decorator żeby użyc component
import { CoursesService } from './courses.service';

@Component({ // komponent 
    selector: 'courses',
    template: 
        `
        <h2> {{ title }} </h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>

    `
})

export class CoursesComponent{
 title = "List of courses";
 courses;

 constructor(service: CoursesService) {
     this.courses = service.getCourses();
     
 }
}