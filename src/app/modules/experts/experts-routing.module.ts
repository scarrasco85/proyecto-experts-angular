import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTagPageComponent } from '../tags/pages/create-tag-page/create-tag-page.component';
import { ExpertDetailFormComponent } from './components/forms/expert-detail-form/expert-detail-form.component';
import { CreateExpertPageComponent } from './pages/create-expert-page/create-expert-page.component';

const routes: Routes = [
  {
    path: 'tags/nueva',
    component: CreateTagPageComponent
  },
  {
    path: 'experts/nuevo',
    component: CreateExpertPageComponent
  },
  {
    path: 'experts/:id',
    component: ExpertDetailFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertsRoutingModule { }
