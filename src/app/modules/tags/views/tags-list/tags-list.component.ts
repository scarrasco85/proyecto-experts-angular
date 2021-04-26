import { Component, Input, OnInit } from '@angular/core';

// Redux
import { StoreService } from 'src/app/services/store/store.service';
import { ACTION_CHANGE_TITLE_HEADER, ACTION_CHANGE_BUTTON_NEW_HEADER, ACTION_CHANGE_NUM_TOTAL_REGISTERS, ACTION_CHANGE_DIV_TO_LOAD } from 'src/app/store/actions/actions.types';
import HeaderState from 'src/app/store/config/header/headerState.interface';

// DataTable
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


// Service - Model
import { TagsService } from '../../services/tags.service';
import { Tag } from '../../models/tag.model';

// Confirm component
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {

  // Header properties
  title = "Lista de Etiquetas";
  buttonToLoad = "new_tag_button";
  divToLoad = 'tags-list';

  // Local properties
  tagsList: Tag[] = [];
  filter: string = "";
  filterValue: string = "";
  filterParams: {name: string, page: number, limit: number} = 
    {
      name: '',
      page: 0,
      limit: 5
    }
  ;



  displayedColumns: string[] = ['name', 'creator', 'createdAt'];
  displayedFilters: string[] = ['nameFilter', 'creatorFilter', 'createdAtFilter'];
 
  dataSource: any;
  

  // Paginator params
  totalTags: number = 0;
  pageValue: number = 0;
  limitValue: number = 5;
  arrayOptions: number[] = [5, 10, 25, 100];
  beforeLimit:number = 5;
  beforePage: number = 0;
  actualPage: number = 0;

  tagToDelete: any = {
    id: -1,
    name: '',
    creator: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private storeService: StoreService, 
              private tagsService: TagsService, 
              public dialog: MatDialog ) {

   this.dataSource = new MatTableDataSource<any>([]);

  }

  ngOnInit(): void {
    // Update title in HeaderState
    this.storeService.updateState({
      type: ACTION_CHANGE_TITLE_HEADER,
      payload: this.title
    });

     // Update button in HeaderState
     this.storeService.updateState({
      type: ACTION_CHANGE_BUTTON_NEW_HEADER,
      payload: this.buttonToLoad
    });

     // Update div to Load in HeaderState
     this.storeService.updateState({
      type: ACTION_CHANGE_DIV_TO_LOAD,
      payload: this.divToLoad
    });

    this.filterParams.name = '';
    this.filterParams.page = 0;
    this.filterParams.limit = 5;


    // Get Total tags
    this.tagsService.getTotalTags().subscribe((response) => {
      this.totalTags = response;

      // Update totalRegisters in HeaderState
      this.storeService.updateState({
        type: ACTION_CHANGE_NUM_TOTAL_REGISTERS,
        payload: this.totalTags
      });
    });

    // Get tags
    this.tagsService.getAll(this.filterParams).subscribe((response) => {

      this.tagsList = response;
      this.dataSource.data = this.tagsList;

    });

  }

  
  ngAfterViewInit() {
   
    this.dataSource.sort = this.sort;
   
  }

  applyFilterName(event: Event) {
  
    this.filterParams.name = (event.target as HTMLInputElement).value;
    
    
    if(this.filterParams.name == '' ){
       
      console.log('cadena vacía');

      this.getNoFilter();


    }else{
      console.log('cadena no vacía');
     
      this.getWithFilter();
      
    }
  }

  onPaginateChange(event: PageEvent) {

    if(this.filterParams.name == ''){

      this.getNoFilter();


    }else{
      console.log('cadena no vacía');
     
      this.getWithFilter();
      
    }

  }

  private getNoFilter(){
    
    
    // Get Total tags
    this.tagsService.getTotalTags().subscribe((response) => {
     this.totalTags = response;
     this.paginator.length = response;
     
     });

     this.filterParams.page =this.paginator.pageIndex;
     this.filterParams.limit = this.paginator.pageSize; 
 
    
   this.tagsService.getAll(this.filterParams).subscribe((response) => {
    
     this.dataSource.data = response;
   

   },
   (error)=> {
     
     this.dataSource.data = [];
   
   });

 }

 private getWithFilter(){

  this.filterParams.page =this.paginator.pageIndex;
  this.filterParams.limit = this.paginator.pageSize; 

  // Get tags by Filters
  this.tagsService.getAll(this.filterParams).subscribe((response) => {

  this.dataSource.data = response;
  this.totalTags = response.length;
  this.paginator.length = response.length;


  },
  (error)=> {
  
  this.dataSource.data = [];
 
  });

}

  deleteTag(tag:any){

     
      const dialog = this.dialog.open( ConfirmComponent, {
       // width: '250px',
        data: tag
      });

      console.log(tag);

  
      dialog.afterClosed().subscribe(
        (result) => {
  
          if( result ) {
            this.tagsService.deleteTagById( tag.id! )
              .subscribe( resp => {

                this.getNoFilter();
               
                
              },(error)=> {
  
                this.getNoFilter();
               
              });
          }
          
        }
      )
  }
  
}