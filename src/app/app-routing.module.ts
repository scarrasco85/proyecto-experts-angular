import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertsListPageComponent } from './modules/experts/pages/experts-list-page/experts-list-page.component';
import { TagsListPageComponent } from './modules/tags/pages/tags-list-page/tags-list-page.component';


const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    redirectTo: '/experts'
  },
  {
    path: 'experts',
    component: ExpertsListPageComponent,
  },
  {
  path: 'tags', 
    component: TagsListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
