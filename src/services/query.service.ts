import { Injectable } from '@angular/core';

import {GRADE_11_CHAPTERS, GRADE_10_CHAPTERS} from '../models/globaldata';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor() { }

  getAllChapters(grade){
    console.log("getting chapters for " + grade);

    if(grade == "class_10")
      return GRADE_10_CHAPTERS;
    else if(grade == "class_11")
      return GRADE_11_CHAPTERS;

  }
}
