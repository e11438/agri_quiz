import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelQuestionsPage } from './model-questions.page';

const routes: Routes = [
  {
    path: '',
    component: ModelQuestionsPage
  },
  {
    path: 'question-page/:qfile',
    loadChildren: () => import('./question-page/question-page.module').then( m => m.QuestionPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelQuestionsPageRoutingModule {}
