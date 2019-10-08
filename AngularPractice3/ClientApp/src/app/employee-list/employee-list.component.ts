import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees/employees.service';
import { Employee } from '../models/employee';
@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
/** employee-list component*/
export class EmployeeListComponent implements OnInit {
    /** employee-list ctor */

    employees;
    constructor(private employeesService: EmployeesService) {
    }
    ngOnInit() {
        this.employees = this.employeesService.getEmployees();
    }
}
