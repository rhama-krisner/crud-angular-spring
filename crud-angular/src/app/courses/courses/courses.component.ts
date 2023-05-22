import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CoursesService } from './../services/courses.service';
import { Course } from './models/course';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {

    courses$: Observable<Course[]>;
    //displayedColumns = ['name', 'category', 'actions'];

    //coursesService: CoursesService;

    constructor(
        private coursesService: CoursesService,
        private dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute
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

    ngOnInit() {
        /* TODO document why this method 'ngOnInit' is empty */
    }

    onAdd() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
}
