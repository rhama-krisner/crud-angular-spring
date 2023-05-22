import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs';

import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
    form = this.formBuilder.group({
        name: [''],
        category: [''],
    });

    constructor(
        private formBuilder: NonNullableFormBuilder,
        private service: CoursesService,
        private snackBar: MatSnackBar,
        private location: Location
    ) {
        //this.form
    }

    ngOnInit(): void {
        // TODO document why this method 'ngOnInit' is empty
    }

    onSubmit() {
        this.service.save(this.form.value)
            .pipe(
                tap(async (result) => this.onSuccess()),
                catchError(async (error) => {
                    this.onError();
                    return ThrowError(error);
                })
            )
            .subscribe();
    }

    onCancel() {
        this.location.back();
    }

    private onSuccess() {
        this.snackBar.open('Curso salvo com sucesso!', '', {
            duration: 3000,
        });
        this.onCancel();
    }

    private onError() {
        this.snackBar.open('Erro ao salvar curso!', 'Continuar');
    }
}

function ThrowError(error: any): any {
    throw new Error('Function not implemented.');
}
