import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-origin-selector',
  templateUrl: './origin-selector.component.html',
  styleUrls: ['./origin-selector.component.scss']
})
export class OriginSelectorComponent {

  selectedValue: string = '';

  @Output() onSelectedValue: EventEmitter<string> = new EventEmitter();

  status: Options[] = [
    {value: 'busqueda', viewValue: 'Búsqueda'},
    {value: 'recomendado', viewValue: 'Recomendado'},
    {value: '', viewValue: 'Ninguno'}
    
  ];

  emitStatusSelected(event: any){
    
    this.selectedValue = event.value;
    this.onSelectedValue.emit(this.selectedValue)

  }


}
