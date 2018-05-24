import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'



import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarBrandSearch } from './cars/carsBrandSearch.pipe';
import { RatingComponent } from './shared/rating.component';
import { CarsService } from './cars/cars.service';


@NgModule({

    imports:[BrowserModule,
             FormsModule],

    declarations:[AppComponent,
                 CarsComponent,
                 CarBrandSearch,
                 RatingComponent
                 ],
    providers:[CarsService],             
    bootstrap:[AppComponent]

})

export class AppModule{}