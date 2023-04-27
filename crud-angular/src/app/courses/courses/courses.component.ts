import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CoursesService } from './../services/courses.service';
import { Course } from './models/course';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
    faCoffee = faCoffee;

    courses$: Observable<Course[]>;
    displayedColumns = ['name', 'category'];

    //coursesService: CoursesService;

    constructor(
        private coursesService: CoursesService,
        private dialog: MatDialog
    ) {
        this.courses$ = this.coursesService.list().pipe(
            catchError((error) => {
                this.onError('Erro ao carregar a lista de cursos.');
                return of([]);
            })
        );
    }

    onError(errorMgs: string) {
        this.dialog.open(ErrorDialogComponent, {
            data: errorMgs,
        });
    }

    ngOnInit() {}
}
