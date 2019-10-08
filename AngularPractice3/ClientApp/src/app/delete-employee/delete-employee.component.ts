import { Component, Input } from '@angular/core';
import { EmployeesService } from '../employees/employees.service';

@Component({
    selector: 'app-delete-employee',
    templateUrl: './delete-employee.component.html',
    styleUrls: ['./delete-employee.component.scss']
})
/** delete-employee component*/
export class DeleteEmployeeComponent {
    @Input() name: string;
    constructor(private employeeService: EmployeesService) {

    }
    deleteEmployee(name) {
        this.employeeService.deleteEmployee(name);
    }
}
