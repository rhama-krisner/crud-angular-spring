import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay, first, tap } from 'rxjs';
import { Course } from '../courses/models/course';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    //private readonly API = '/assets/cursos.json';
    private readonly API = 'http://localhost/api/cursos';

    constructor(private httpClient: HttpClient) {}

    //segundos: number = 10;

    list() {
        return this.httpClient.get<Course[]>(this.API).pipe(
            first(),
            //delay(this.segundos*1000),
            tap((courses) => console.log(courses))
        );
    }

    save(record: Partial<Course>) {
        return this.httpClient.post<Course>(this.API, record).pipe(first());
    }
}
