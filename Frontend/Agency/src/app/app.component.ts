import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bee soft';
  name?: String;
  age?: number;
  salary?: number;
  addNewEmployee() {
    var e: employee = new employee(this.name, this.age, this.salary);
    employee.addEmployee(e);
    var lsit = employee.viewEmployees();
  }
}
class employee {
  name?: String;
  age?: number;
  salary?: number;
  private static list: employee[];
  constructor(n?: String, a?: number, s?: number) {
    this.name = n;
    this.age = a;
    this.salary = s;
  }
  static addEmployee(e: employee) {
    this.list.push(e);
  }
  static viewEmployees(): employee[] {
    return this.list;
  }
}
