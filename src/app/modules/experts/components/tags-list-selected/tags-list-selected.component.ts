import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { TagsService } from '../../../tags/services/tags.service';
import { Tag } from 'src/app/modules/tags/models/tag.model';

interface Options {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-tags-list-selected',
  templateUrl: './tags-list-selected.component.html',
  styleUrls: ['./tags-list-selected.component.scss']
})
export class TagsListSelectedComponent implements OnInit {

  tagsListDB: Tag[] = [];

  filterParams: {name: string, page: number, limit: number} = 
    {
      name: '',
      page: 0,
      limit: -1
    }
  ;

 

  @Output() onSelectedValue: EventEmitter<Tag> = new EventEmitter();
 
  tagListToShow: [{value:string, viewValue: string}] = [{value:'', viewValue:''}];
  tagListSeleted: [{id:string, name: string}] = [{id:'', name:''}];
  idTagSelected: string = '';
  tagIdListToAdd: string[]=[];


  constructor( private tagsService: TagsService) { }

  ngOnInit(): void {

    // Get tags
    this.tagsService.getAll(this.filterParams).subscribe((response) => {

      this.tagsListDB = response;
      //this.dataSource.data = this.tagsList;
      console.log('TagsListDb: ', this.tagsListDB);

      this.tagsListDB.forEach(tag => {
         this.tagListToShow.push({ value: tag.id.toString(), viewValue: tag.name }) 
      }); 

    });
  }



  emitSelectedValue(event: any){
    console.log(event.value);

    if (this.tagIdListToAdd.indexOf(event) == -1){
      this.tagIdListToAdd.push(event);

      let tag = this.tagsListDB.filter((tag) => tag.id == event.value)[0];
      console.log(tag);
     this.onSelectedValue.emit(tag);
    }
       
   
   // this.idTagSelected  = event.value;
  

  }

}
