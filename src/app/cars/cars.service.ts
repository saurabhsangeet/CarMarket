import {Injectable} from '@angular/core';


@Injectable()

export class CarsService{
    getCars(){
        return [
            {
               "Id": 1001,
               "Brand": "Ford",
               "Model": "Mustang",
               "Year" : 2015,
               "Price": 18000,
               "Rating": 3.5,
               "Image": "../assets/mustang.jpg"
           },
           {
               "Id": 2001,
               "Brand": "Nissan",
               "Model": "Altima",
               "Year": 2017,
               "Price": 20000,
               "Rating": 2,
               "Image": "../assets/altima.jpg"
           },
           {
               "Id": 3001,
               "Brand": "Toyota",
               "Model": "Camry",
               "Year": 2018,
               "Price": 25000,
               "Rating": 4,
               "Image": '../assets/camry.jpg'
           },
           {
               "Id": 4001,
               "Brand": "Honda",
               "Model": "Accord",
               "Year": 2016,
               "Price": 15000,
               "Rating": 3,
               "Image": "../assets/accord.jpg"
           },
           {
               "Id": 2002,
               "Brand": "Nissan",
               "Model": "Maxima",
               "Year": 2010,
               "Price": 12000,
               "Rating": 3.8,
               "Image": "../assets/maxima.png"
           },
           {
               "Id": 3002,
               "Brand": "Toyota",
               "Model": "Corolla",
               "Year": 2012,
               "Price": 14000,
               "Rating": 5,
               "Image": "../assets/corolla.png"
           }
       ]


    }
}