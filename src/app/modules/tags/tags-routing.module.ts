import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExpertPageComponent } from '../experts/pages/create-expert-page/create-expert-page.component';
import { CreateTagPageComponent } from './pages/create-tag-page/create-tag-page.component';

const routes: Routes = [
  {
    path: 'tags/nueva',
    component: CreateTagPageComponent
  },
  {
    path: 'experts/nuevo',
    component: CreateExpertPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
