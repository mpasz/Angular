import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: //uzycie dyrektywy poprzedzamy znakiem * UWAGA po dyrektywie ngFor jest pętla analogiczna dp foreach
        `<h2>{{ title }}</h2>
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

    constructor(private service: CoursesService) {
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }
}


