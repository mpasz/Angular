import { Component } from '@angular/core';   // import component decorator żeby użyc component
import { CoursesService } from './courses.service';

@Component({ // komponent 
    selector: 'courses',
    template: 
    `
            <button class ="btn btn-primary">Save</button>
    `
})

export class CoursesComponent{
 title = "List of courses";
 imageURL = "http://lorempixel.com/400/200";
 courses;
 colSpan = 2;

 constructor(service: CoursesService) {
     this.courses = service.getCourses();
     
 }
}