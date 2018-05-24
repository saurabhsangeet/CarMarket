import {Component,OnChanges,Input,
        Output,EventEmitter} from '@angular/core';

@Component({

    selector:'car-rating',
    templateUrl:'./rating.component.html',
    styleUrls:['./rating.component.css']
})

export class RatingComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number

    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating*86/5
    }

    onStarClick():void{
        this.ratingClicked.emit(`${this.rating}`)
    }
    

}
