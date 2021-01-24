import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CLASS_ITEMS} from '../../models/globaldata';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  classItems = CLASS_ITEMS;
  grade : string = 'class_11';
  compareWith;

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };


  constructor(private router:Router) {
    this.compareWith = this.compareWithFn;
    this.grade = 'class_11';
  }


  goToPassPapers(){
 
    this.router.navigate(['/pass-papers']);
  }

  goToModelQuestions(){
    console.log("Grade selected - " + this.grade);
    this.router.navigate(['/model-questions/' + this.grade]);
  }

}
