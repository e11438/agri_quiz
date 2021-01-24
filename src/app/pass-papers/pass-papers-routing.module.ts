import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassPapersPage } from './pass-papers.page';

const routes: Routes = [
  {
    path: '',
    component: PassPapersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassPapersPageRoutingModule {}
