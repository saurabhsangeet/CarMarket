import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'



import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarBrandSearch } from './cars/carsBrandSearch.pipe';
import { RatingComponent } from './shared/rating.component';
import { CarsService } from './cars/cars.service';
import { HomeComponent } from './home/home.component';
import { NotFound } from './shared/notFound.component';
import { OrderComponent } from './order/order.component';
import { CarDetail } from './cars/car-detail.component';
import { Signup } from './signup/signup.component';


@NgModule({

    imports:[BrowserModule,
             FormsModule,
             RouterModule.forRoot([
                 {path:'cars',component:CarsComponent},
                 {path:'cars/:id',component:CarDetail},
                 {path:'orders',component:OrderComponent},
                 {path:'home',component:HomeComponent},
                 {path:'signup',component:Signup},
                 {path:'',redirectTo:'home',pathMatch:'full'},
                 {path:'**',component:NotFound}
             ])
            
            
            
            ],

    declarations:[AppComponent,
                 CarsComponent,
                 CarBrandSearch,
                 RatingComponent,
                 HomeComponent,
                 NotFound,
                 OrderComponent,
                 CarDetail,
                 Signup
                 ],
    providers:[CarsService],             
    bootstrap:[AppComponent]

})

export class AppModule{}