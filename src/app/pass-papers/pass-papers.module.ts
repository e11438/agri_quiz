import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassPapersPageRoutingModule } from './pass-papers-routing.module';

import { PassPapersPage } from './pass-papers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassPapersPageRoutingModule
  ],
  declarations: [PassPapersPage]
})
export class PassPapersPageModule {}
