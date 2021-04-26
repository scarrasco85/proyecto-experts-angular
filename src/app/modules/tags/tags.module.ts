import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsListPageComponent } from './pages/tags-list-page/tags-list-page.component';
import { TagsListComponent } from './views/tags-list/tags-list.component';

import { NO_ERRORS_SCHEMA } from "@angular/core"; 

// Angular Materials
import { MaterialModule } from '../../material/material.module';
import { CreateTagFormComponent } from './components/forms/create-tag-form/create-tag-form.component';
import { CreateTagPageComponent } from './pages/create-tag-page/create-tag-page.component';


@NgModule({
  declarations: [
    TagsListPageComponent,
    TagsListComponent,
    CreateTagFormComponent,
    CreateTagPageComponent,
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ]
})
export class TagsModule { }
