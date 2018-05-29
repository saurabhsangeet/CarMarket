import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({

    templateUrl:'./signup.component.html'
})

export class Signup{

    languages = ["Angular","Java","React","Node"];
    model = new Employee("","", true,"","")
    

}