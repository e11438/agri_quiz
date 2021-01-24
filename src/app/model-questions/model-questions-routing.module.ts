import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelQuestionsPage } from './model-questions.page';

const routes: Routes = [
  {
    path: '',
    component: ModelQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelQuestionsPageRoutingModule {}
