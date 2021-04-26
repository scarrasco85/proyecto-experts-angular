import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location} from '@angular/common'
import { ExpertsService } from '../../../services/experts.service';

// Redux
import { StoreService } from 'src/app/services/store/store.service';
import { ACTION_CHANGE_DIV_TO_LOAD } from 'src/app/store/actions/actions.types';

//Reactive Forms
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Expert } from '../../../models/expert.model';
import { Tag } from 'src/app/modules/tags/models/tag.model';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-expert-detail-form',
  templateUrl: './expert-detail-form.component.html',
  styleUrls: ['./expert-detail-form.component.scss']
})
export class ExpertDetailFormComponent implements OnInit {

  // Header properties
  divToLoad = 'expert-detail';

  detailExpertForm: FormGroup = this.formBuilder.group({
    photoFile: [ '', Validators.required ],
    name: [ '', Validators.required ],
    nif: [Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
    availability: [ ''],
    status: [ ''],
    score: [''],
    origin: [ ''],
    contactPhone: [ ''],
    contactEmail: [Validators.compose([ Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required])],
    contactCity: [ ''],
    cvFile: [ ''],
    contactLinkedin: [ ''],
    observations: [ ''],
    statusMotive: [ ''],
    tags:['']
   
  });

  idExpert: number = 0;

  tagListExpert: Tag[] = [];
  expert: any = {
    id: undefined,
    name: '',
    createdAt: new Date(),
    updatedAt: undefined,
    statusMotive: '',
    modality: undefined,
    freelance: undefined,
    availability: '',
    contactPhone: '',
    contactEmail: '',
    contactCity: '',
    contactLinkedin: '',
    conditionsPercent: undefined,
    conditionsPriceHour: undefined,
    score: '',
    nif: '',
    emailCredentials: '',
    emailCredentialsPassword: '',
    zoomCredentials: '',
    zoomCredentialsPassword: '',
    photoFile: '',
    cvFile: '',
    observations: '',
    origin: '',
    status: '',
    tags: this.tagListExpert
  };

  
  tagListSelected: Tag[] = [];
  tagSelected: {value:string, viewValue: string} ={value:'', viewValue:''};

  constructor(
            private activatedRoute: ActivatedRoute, 
            private expertsService: ExpertsService,
            private location: Location,
            private formBuilder: FormBuilder,
            private storeService: StoreService
          ) { }

  ngOnInit(): void {

    // Update div to Load in HeaderState
    this.storeService.updateState({
      type: ACTION_CHANGE_DIV_TO_LOAD,
      payload: this.divToLoad
    });

    this.tagListExpert  = [];
    this.tagListExpert = [];
    if (this.location.getState()) { this.expert = this.location.getState() } 

    this.idExpert = this.activatedRoute.snapshot.params.id;

    console.log('id', this.idExpert);
    console.log('expert', this.expert);
  
    this.detailExpertForm.reset({
      name: this.expert.name,
      nif: this.expert.nif,
      photoFile: this.expert.photoFile,
      availability: this.expert.availability,
      status: this.expert.status,
      score: this.expert.score,
      origin: this.expert.origin,
      contactPhone: this.expert.contactPhone,
      contactEmail: this.expert.contactEmail,
      contactCity: this.expert.contactCity,
      contactLinkedin: this.expert.contactLinkedin,
      tags: this.expert.tags,
      observations: this.expert.observations,
      statusMotive: this.expert.statusMotive
     
    });

   
  }

  updateExpert(){

     // Update an Expert
     this.expertsService.updateExpert(this.expert).subscribe((response) => {
        
       console.log('Expert updated', response);  

   },
   (error)=> {
       
       console.log(error);
       
   });

  }

  updateAvailability(event: string){

    this.expert.availibility = event;
    this.updateExpert();
  
  }

  updateStatus(event: string){
    this.expert.status = event;
    this.updateExpert();
  }

  updateScore(event: string){
    this.expert.score = event;
    this.updateExpert();
  }

  updateOrigin(event: string){
    this.expert.origin = event;
    this.updateExpert();
  }

  updatePhone(event: Event){
    this.expert.contactPhone = (event.target as HTMLInputElement).value;
    this.updateExpert();
  }

  updateEmail(event: Event){
    this.expert.contactEmail = (event.target as HTMLInputElement).value;
    this.updateExpert();
  }

  updateDirection(event: Event){
    this.expert.contactCity = (event.target as HTMLInputElement).value;
    this.updateExpert();
  }

  updateLinkedin(event: Event){
    this.expert.contactLinkedin = (event.target as HTMLInputElement).value;
    this.updateExpert();
  }

  updateName(event: Event){
    this.expert.name = (event.target as HTMLInputElement).value;
    this.updateExpert();
  }

  updateNif(event: Event){
    this.expert.nif = (event.target as HTMLInputElement).value;
    this.updateExpert();
  }

  updateObservations(event: Event){
    this.expert.observations = (event.target as HTMLInputElement).value;
    this.updateExpert();
  }

   // Add the selected tags  to List 
   addTagToList(event: Tag){

    if (this.tagListSelected.indexOf(event) == -1){
      this.tagListSelected.push(event);
      this.expert.tags = this.tagListSelected;
    }

  }

  deleteTagSeleted(tagDelete: string){

    let tagToDelete = this.tagListSelected.filter((tag) => tag.name == tagDelete)[0]; 

    // for (let i = 0; i < this.expertTags.length; i++){ 
    //   if (this.expertTags[i].id == tag.id) indexDelete = i } 
    //   this.expertTags.splice(indexDelete, 1) 

    this.tagListSelected.forEach((tag,index)=>{
        if(tag.id == tagToDelete.id){
           
            this.tagListSelected.splice( index, 1) ;
        }
    });
    this.tagListExpert = this.tagListSelected;
  }


}
