import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {GRADE_11_CHAPTERS, GRADE_10_CHAPTERS} from '../../models/globaldata';

@Component({
  selector: 'app-model-questions',
  templateUrl: './model-questions.page.html',
  styleUrls: ['./model-questions.page.scss'],
})
export class ModelQuestionsPage implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {

  }

}
