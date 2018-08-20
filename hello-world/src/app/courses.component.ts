
import { CoursesSerevice } from './courses.service';
import {Component} from '@angular/core';



@Component({
    selector: 'courses',
     template: `
        <button class="btn btn-primary"> Save </button>
     `
})

export class CoursesComponent{
    title = "List of courses";
    courses;
    isActive = true;


    constructor(service: CoursesSerevice) {
        this.courses = service.getCourses();
    }
}

    //Logic for calling HTTP service


