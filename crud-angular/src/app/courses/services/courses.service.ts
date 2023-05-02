import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay, first, tap } from 'rxjs';
import { Course } from '../courses/models/course';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    private readonly API = '/assets/cursos.json';

    constructor(private HttpClient: HttpClient) { }

    //segundos: number = 10;

    list() {
        return this.HttpClient.get<Course[]>(this.API)
            .pipe(
                first(),
                //delay(this.segundos*1000),
                tap(courses => console.log(courses))
            );
    }
}
