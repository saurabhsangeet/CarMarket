import {Pipe, PipeTransform} from '@angular/core'
import { ICars } from './Cars';

@Pipe({
    name:'carBrandSearch'
})

export class CarBrandSearch implements PipeTransform{
    transform(value:ICars[],filterBy:string):ICars[]{
        filterBy = filterBy?filterBy.toLowerCase():null;
        return filterBy? value.filter((carsInventory:ICars)=>
        carsInventory.Brand.toLowerCase().indexOf(filterBy) !== -1):value;

    }

}