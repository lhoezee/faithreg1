import {Component, OnInit} from '@angular/core';
import {RegistrationService} from '../shared/index';
import {Student} from '../shared/models/student-model';


/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-about',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})
export class RegistrationComponent implements OnInit {

    newName: string = '';
    errors: any[] = [];
    names: any[] = [];
    registration: any = {
        firstName: '',
        lastName: '',
        email: '',
        grade: ''
    };
    successful: boolean = true;

    /**
     * Creates an instance of the HomeComponent with the injected
     * RegistrationService.
     *
     * @param {RegistrationService} registrationService - The injected RegistrationService.
     */
    constructor(public registrationService: RegistrationService) {
    }

    /**
     * Get the names OnInit
     */
    ngOnInit() {

    }

    /**
     * Pushes a new name onto the names array
     * @return {boolean} false to prevent default form submit behavior to refresh the page.
     */
    register(): any {

        // Reset the errors
        this.errors = [];

        let registration = new Student(this.registration.firstName,
            this.registration.lastName,
            this.registration.email,
            this.registration.grade
        );

        let response = this.registrationService.post(registration);

        response.subscribe(
            responseData => {

                if (responseData.status == 'fail') {
                    this.errors = responseData.data.errors;
                }
                else {
                    this.successful = true;
                }
            },
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    reset() : any {
        this.successful = false;
        this.errors = [];
        this.registration = {
            firstName: '',
            lastName: '',
            email: '',
            grade: ''
        };
    }

}
