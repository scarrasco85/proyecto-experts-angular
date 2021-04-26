import { Component, EventEmitter, Input, Output } from '@angular/core';


interface Options {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-status-select',
  templateUrl: './status-select.component.html',
  styleUrls: ['./status-select.component.scss']
})
export class StatusSelectComponent {

 selectedValue: string = '';

  @Output() onSelectedValue: EventEmitter<string> = new EventEmitter();

  status: Options[] = [
    {value: 'validado', viewValue: 'Validado'},
    {value: 'pendiente', viewValue: 'Pendiente de Validar'},
    {value: '', viewValue: 'Todos'}
    
  ];

  emitStatusSelected(event: any){
    
    this.selectedValue = event.value;
    this.onSelectedValue.emit(this.selectedValue)

  }



}
