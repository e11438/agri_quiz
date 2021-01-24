import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelQuestionsPageRoutingModule } from './model-questions-routing.module';

import { ModelQuestionsPage } from './model-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelQuestionsPageRoutingModule
  ],
  declarations: [ModelQuestionsPage]
})
export class ModelQuestionsPageModule {}
