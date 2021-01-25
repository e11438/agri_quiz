import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  static currentQuestionSet;

  constructor() { }

  setCurrentQuestionSet(qSet)
  {
    GlobalVariablesService.currentQuestionSet = qSet;
  }

  getCurrentQuestionSet()
  {
    return GlobalVariablesService.currentQuestionSet;
  }
}
