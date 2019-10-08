import { Component } from '@angular/core';
import { EmployeesService } from '../employees/employees.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.scss']
})
/** create-employee component*/
export class CreateEmployeeComponent {
/** create-employee ctor */
    createStatus = true;
    checkoutForm;
    constructor(private employeeService: EmployeesService, private formBuilder: FormBuilder) {
        this.checkoutForm = this.formBuilder.group({
            name: '',
            age:''
        });
    }
    
    createEmployee() {
        this.createStatus = !this.createStatus;
    }

    addEmployee(checkoutForm) {
        this.employeeService.addEmployee(checkoutForm);
        this.checkoutForm.reset();
    }
}
