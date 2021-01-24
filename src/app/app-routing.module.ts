import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pass-papers',
    loadChildren: () => import('./pass-papers/pass-papers.module').then( m => m.PassPapersPageModule)
  },
  {
    path: 'model-questions/:grade',
    loadChildren: () => import('./model-questions/model-questions.module').then( m => m.ModelQuestionsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
