import {Component} from '@angular/core'

@Component({

    selector:'first-component',
    template:`<nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">Car Market</a>
        </div>
        <ul class="nav navbar-nav">
          <li><a [routerLink]="['/home']">Home</a></li>
          <li><a [routerLink]="['/orders']">Orders</a></li>
          <li><a [routerLink]="['/cars']">Cars</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a [routerLink]="['/signup']"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
   
      </div>
    </nav>
    <div class="container">
        <router-outlet></router-outlet>
    </div> 
`
               
})

export class AppComponent{
    titleFirstComponent:string="Saurabh"

}