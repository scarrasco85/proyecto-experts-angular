import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location} from '@angular/common'
import { Tag } from '../../../models/tag.model';

// Reactive Forms
import { FormGroup, FormBuilder, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { TagsService } from '../../../services/tags.service';



@Component({
  selector: 'app-create-tag-form',
  templateUrl: './create-tag-form.component.html',
  styleUrls: ['./create-tag-form.component.scss']
})
export class CreateTagFormComponent implements OnInit {

  createTagForm: FormGroup = new FormGroup({}); //this.formBuilder.group({});


  tagToCreate: any = {
    name: '',
    creator: ''
  };

  tagCreated: any = {};
 
  
  constructor( 
            private formBuilder: FormBuilder, 
            private tagsService: TagsService, 
            private router: Router) { }

  ngOnInit(): void {

    this.createTagForm = this.formBuilder.group({
      name: this.tagToCreate.name,
      creator: this.tagToCreate.creator
    });

     
  }

  /**
   * Create a Tag in DB
   */
   newTag(): void {

    
    this.tagToCreate.name = this.createTagForm.get('name')?.value; 
    this.tagToCreate.creator = this.createTagForm.get('creator')?.value; 

    console.log(this.tagToCreate.name);
    console.log(this.tagToCreate.creator);

    // Create a new Tag
    this.tagsService.createTag(this.tagToCreate).subscribe((response) => {
     
      this.tagCreated = response;
      console.log(this.tagCreated);
      this.router.navigate(['/tags']);
     // console.log('Total Busqueda', response);
      

    },
    (error)=> {
      
      console.log(error);
      
    });
        
  }

}
