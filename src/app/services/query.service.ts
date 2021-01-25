import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {QNA} from '../../models/QNA';

import {GRADE_11_CHAPTERS, GRADE_10_CHAPTERS} from '../../models/globaldata';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor() { }

  getAllChapters(grade :string){
    console.log("getting chapters for " + grade);

    if(grade == "class_10")
      return GRADE_10_CHAPTERS;
    else if(grade == "class_11")
      return GRADE_11_CHAPTERS;

  }

  createMapOfQNA(json)
  {
    let QNAMap = new Map();
    
    for(var i = 0; i< json.length; i++)
    {

      QNAMap.set(i, json[i]);
    }
    return QNAMap;    
  }


  getFileContent(file : string)
  {
      console.log("getting file content for " + file);
      return fetch('../../assets/database/' + file);  
        
  }
}
