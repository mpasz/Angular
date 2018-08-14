
import { CoursesSerevice } from './courses.service';
import {Component} from '@angular/core';



@Component({
    selector: 'courses',
    template: //uzycie dyrektywy poprzedzamy znakiem * UWAGA po dyrektywie ngFor jest pętla analogiczna dp foreach
        `<h2>{{ title }}</h2>
         <ul>
            <li *ngFor="let course of courses">  
            {{ course }}
            </li>
         </ul>   
         `
})

export class CoursesComponent{
    title = "List of courses";
    courses;


    constructor(service: CoursesSerevice) {
        this.courses = service.getCourses();
    }
}

    //Logic for calling HTTP service


