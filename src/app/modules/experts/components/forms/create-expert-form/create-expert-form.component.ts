import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location} from '@angular/common'
import { Expert } from '../../../models/expert.model';

// Reactive Forms
import { FormGroup, FormBuilder, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { ExpertsService } from '../../../services/experts.service';
import { Tag } from 'src/app/modules/tags/models/tag.model';

interface Expert2 {
    name: string,
    availability: string,
    contactPhone: string,
    contactEmail: string,
    contactCity: string,
    contactLinkedin: string,
    nif: string,
    status: string,
    tagListSeleted: Tag [],
}

@Component({
  selector: 'app-create-expert-form',
  templateUrl: './create-expert-form.component.html',
  styleUrls: ['./create-expert-form.component.scss']
})
export class CreateExpertFormComponent implements OnInit {

    createExpertForm: FormGroup = this.formBuilder.group({
        name: [ '', Validators.required ],
        availability: [ ''],
        contactPhone: [ ''],
        contactEmail: [Validators.compose([ Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required])],
        contactCity: [ ''],
        contactLinkedin: [ ''],
        nif: [Validators.compose([Validators.minLength(9), Validators.maxLength(9)])]
      });



  //  createExpertForm: FormGroup = new FormGroup({}); //this.formBuilder.group({});
  tagListSelected: Tag[] = [];
  expertToCreate: Expert = {
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
    status: 'pendiente',
    tags: this.tagListSelected
  };
  idTagSelected: string = ''; 



  tagIdListToAdd: string[] = [];
  tagListDB: [{value:string, viewValue: string}] = [{value:'', viewValue:''}];

  availabilitySelected: string = '';
  tagSelected: {value:string, viewValue: string} ={value:'', viewValue:''};


  //expertCreated: Expert = {};

  constructor( 
    private formBuilder: FormBuilder, 
    private expertsService: ExpertsService, 
    private router: Router) { }

  ngOnInit(): void {

    this.tagListSelected = [];

    this.createExpertForm.reset({
        name: '',
        availability: '',
        contactPhone: '',
        contactEmail: '',
        contactCity: '',
        contactLinkedin: '',
        nif: ''
       
      });
    // Cargar etiquetas en el componente y luego hacer data binding para que se actualice la listanpm 

    
    
  }

  campoEsValido( campo: string ) {

    return this.createExpertForm.controls[campo].errors 
            && this.createExpertForm.controls[campo].touched;
  }

  newExpert(): void {

   if ( this.createExpertForm.invalid )  {
    this.createExpertForm.markAllAsTouched();
    return;
  }

  
    this.expertToCreate = this.createExpertForm.value;
    this.expertToCreate.availability = this.availabilitySelected;
    this.expertToCreate.tags = this.tagListSelected;
  
    // Create a new Expert
    this.expertsService.createExpert(this.expertToCreate).subscribe((response) => {
        
       // this.expertCreated = response;
        console.log('Expert creado', response);  

    },
    (error)=> {
        
        console.log(error);
        
    });

    this.createExpertForm.reset();

  }

  updateAvailability(event: string){
    this.availabilitySelected = event;
  
  }

  //** Add It tags selected to List */
  addTagToList(event: Tag){
    console.log('entroó', event);

    this.tagListSelected.push(event);
    console.log('Lista seleccionada', this.expertToCreate.tags);

    // if (this.tagIdListToAdd.indexOf(event) == -1)
    // this.tagIdListToAdd.push(event);
   
  }

}