import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-motive-select',
  templateUrl: './motive-select.component.html',
  styleUrls: ['./motive-select.component.scss']
})
export class MotiveSelectComponent {

  selectedValue: string = '';

  @Output() onSelectedValue: EventEmitter<string> = new EventEmitter();

  status: Options[] = [
    {value: 'otros', viewValue: 'Otros'},
    {value: 'ausente', viewValue: 'Ausente'},    
  ];

  constructor() { }

  emitSelectedValue(event: any){
    
    this.selectedValue = event.value;
    this.onSelectedValue.emit(this.selectedValue);

  }
}
