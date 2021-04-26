import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-availability-select',
  templateUrl: './availability-select.component.html',
  styleUrls: ['./availability-select.component.scss']
})
export class AvailabilitySelectComponent {

  selectedValue: string = '';

  @Output() onSelectedValue: EventEmitter<string> = new EventEmitter();

  status: Options[] = [
    {value: 'mañanas', viewValue: 'Mañanas'},
    {value: 'tardes', viewValue: 'Tardes'},
    {value: 'total', viewValue: 'Total'}
    
  ];

  constructor() { }

  emitSelectedValue(event: any){
    
    this.selectedValue = event.value;
    this.onSelectedValue.emit(this.selectedValue);

  }

 

}
