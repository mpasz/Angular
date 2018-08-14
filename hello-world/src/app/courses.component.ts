<<<<<<< HEAD
import { CoursesSerevice } from './courses.service';
import {Component} from '@angular/core';
=======
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
>>>>>>> 31c7bbda2e1040f1e0c349ad1d72fed02eeb20af


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
<<<<<<< HEAD
    courses;


    constructor(service: CoursesSerevice) {
=======
    courses; 

    constructor(private service: CoursesService) {
        //let service = new CoursesService();
>>>>>>> 31c7bbda2e1040f1e0c349ad1d72fed02eeb20af
        this.courses = service.getCourses();
    }
}


<<<<<<< HEAD


    //Logic for calling HTTP service

}
=======
>>>>>>> 31c7bbda2e1040f1e0c349ad1d72fed02eeb20af
