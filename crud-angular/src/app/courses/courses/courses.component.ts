import { Component } from '@angular/core';
import { Course } from './models/course';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
    courses: Course[] = [
        { _id: '00', name: 'Angular', category: 'front-end' },
        { _id: '01', name: 'React', category: 'front-end' },
        { _id: '02', name: 'Vue.js', category: 'front-end' },
        { _id: '03', name: 'Node.js', category: 'back-end' },
        { _id: '04', name: 'Python', category: 'general-purpose programming' },
        { _id: '05', name: 'Java', category: 'general-purpose programming' },
        { _id: '06', name: 'Swift', category: 'iOS development' },
        { _id: '07', name: 'Kotlin', category: 'Android development' },
        { _id: '08', name: 'SQL', category: 'database management' },
        { _id: '09', name: 'AWS', category: 'cloud computing' },
        { _id: '10', name: 'Machine Learning', category: 'data science' },
    ];
    displayedColumns = ['name', 'category'];
    //displayedColumns = ['id','name', 'category'];

    constructor() {
        //this.courses = [];
    }

    ngOnInit() {}
}
