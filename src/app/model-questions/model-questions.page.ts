import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QueryService} from '../../services/query.service';

import {GRADE_11_CHAPTERS, GRADE_10_CHAPTERS} from '../../models/globaldata';

@Component({
  selector: 'app-model-questions',
  templateUrl: './model-questions.page.html',
  styleUrls: ['./model-questions.page.scss'],
})
export class ModelQuestionsPage implements OnInit {

  chapters;

  constructor(private activatedRoute : ActivatedRoute, private queryService : QueryService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('grade'))
      {
        return;
      }
      const grade = paramMap.get('grade');
      console.log("grade is : " + grade);
      this.chapters = this.queryService.getAllChapters(grade);
    }
    );

  }

}
