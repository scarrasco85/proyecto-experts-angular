import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-score-select',
  templateUrl: './score-select.component.html',
  styleUrls: ['./score-select.component.scss']
})
export class ScoreSelectComponent implements OnInit {

  scoreSelectedValue: string = '';

  @Output() onSelectedValue: EventEmitter<string> = new EventEmitter();

  // Todo - cargar desde Backend
  status: Options[] = [
    {value: '100', viewValue: '100'},
    {value: '75', viewValue: '75'},
    {value: '55', viewValue: '55'},
    {value: '25', viewValue: '25'},
    {value: '15', viewValue: '15'},
    {value: '', viewValue: 'Todos'}
  ];


  constructor() { }

  ngOnInit(): void {


  }

  emitStatusSelected(event: any){
    
    this.scoreSelectedValue = event.value;
    this.onSelectedValue.emit(this.scoreSelectedValue)

  }

  private loadScores(){

  }

  getColorTag(score:string) { 
    switch (score){ 
    case '15': return '#D66464'; 
    case '25': return '#DEA876'; 
    case '55': return '#F0CE76'; 
    case '75': return '#B1F0A1'; 
    case '100': return '#4ADEBB'; 
    default:  
    return '#C7C8CD'; 
  } 
}
  

}

