import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

@Component({

    templateUrl:'./car-detail.component.html'
})

export class CarDetail implements OnInit{

    title = "detail page";
    name:string;
    img:string;

    constructor(private _route:ActivatedRoute,
                private _router:Router){

    }

    ngOnInit():void{
        let id = +this._route.snapshot.params['id']
        this.title = this.title+"======="+ `${id}`

        this._route.queryParams.subscribe(params=>{
            this.name = params['name'];
            this.img = params['img']

        })
    }

    onBack():void{
        this._router.navigate(['/cars'])
    }
}