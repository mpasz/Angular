import { Component } from '@angular/core';   // import component decorator żeby użyc component
import { CoursesService } from './courses.service';

@Component({ // komponent 
    selector: 'courses',
    template: 
    `
        {{ text | summary: 10 }}
    `
})

export class CoursesComponent{
    text = `
    sdasdsadddddd ad assssssssssssssssssssssssssssssssssssssssssssd sd sds
    `
    }

