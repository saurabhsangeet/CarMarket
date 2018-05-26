import {Component, OnInit} from '@angular/core';
import {ICars} from './Cars';
import {CarsService} from './cars.service'

@Component({

   // selector:'cars-component',
    templateUrl:'./cars.component.html',
    //styles:['thead{color:green}','h3{color:red}']
    styleUrls:['./cars.component.css']

})

export class CarsComponent implements OnInit{
    carDetails:string="Click here to see the inventory";
    imageWidth:number=50;
    showCarPics:boolean=false;
    carSearchByBrand;
    searchCarByModel;
    brand=false;
    carRating:string;
    carsInventory:ICars[]

    showHideCarPics():void{
        this.showCarPics = !this.showCarPics;
    }

    onRatingClicked(message:string):void{
        this.carRating="The rating for this car is : "+message
    }

    constructor(private _carsServive:CarsService){

    }

    ngOnInit():void{
        this.carsInventory=this._carsServive.getCars();
    }
    
}