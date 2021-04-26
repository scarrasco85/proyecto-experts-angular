import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NO_ERRORS_SCHEMA } from "@angular/core"; 

import { ExpertsRoutingModule } from './experts-routing.module';
import { ExpertsListPageComponent } from './pages/experts-list-page/experts-list-page.component';
import { ExpertsListComponent } from './views/experts-list/experts-list.component';

// Angular Materials
import { MaterialModule } from '../../material/material.module';
import { StatusSelectComponent } from './components/status-select/status-select.component';
import { ScoreSelectComponent } from './components/score-select/score-select.component';
import { CreateExpertFormComponent } from './components/forms/create-expert-form/create-expert-form.component';
import { CreateExpertPageComponent } from './pages/create-expert-page/create-expert-page.component';
import { AvailabilitySelectComponent } from './components/availability-select/availability-select.component';
import { TagsListSelectedComponent } from './components/tags-list-selected/tags-list-selected.component';
import { ExpertDetailFormComponent } from './components/forms/expert-detail-form/expert-detail-form.component';
import { ExpertDetailPageComponent } from './pages/expert-detail-page/expert-detail-page.component';
import { OriginSelectorComponent } from './components/origin-selector/origin-selector.component';
import { MotiveSelectComponent } from './components/motive-select/motive-select.component';


@NgModule({
  declarations: [
    ExpertsListPageComponent,
    ExpertsListComponent,
    StatusSelectComponent,
    ScoreSelectComponent,
    CreateExpertFormComponent,
    CreateExpertPageComponent,
    AvailabilitySelectComponent,
    TagsListSelectedComponent,
    ExpertDetailFormComponent,
    ExpertDetailPageComponent,
    OriginSelectorComponent,
    MotiveSelectComponent
  ],
  imports: [
    CommonModule,
    ExpertsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ]
})
export class ExpertsModule { }
