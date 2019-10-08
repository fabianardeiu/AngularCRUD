import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeesService{
    employees = [
        { name: 'Em1', age: '21' },
        { name: 'Em2', age: '21' },
        { name: 'Em3', age: '21' },
        { name: 'Em4', age: '21' },
        { name: 'Em5', age: '21' },
        { name: 'Em6', age: '21' }

    ];
    constructor(private http: HttpClient) {
         
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getEmployees() {
        return this.employees;
    }
    deleteEmployee(employee) {
        this.employees.splice(employee, 1);
    }
}
