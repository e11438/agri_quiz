import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QueryService} from '../../services/query.service';
import { NavController , AlertController} from '@ionic/angular';
import {GlobalVariablesService} from '../../services/global-variables.service';


@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.page.html',
  styleUrls: ['./question-page.page.scss'],
})
export class QuestionPagePage implements OnInit {    
    
    questionFileName;
    questionSet;
    
  constructor(
    private activatedRoute : ActivatedRoute, 
    private queryService : QueryService, 
    private navCtrl: NavController,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.questionSet = GlobalVariablesService.currentQuestionSet;
    console.log(this.questionSet);
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('qfile'))
      {
        return;
      }
      this.questionFileName = paramMap.get('qfile');
      console.log("questionFile is : " + this.questionFileName);
      
    }
    );
  }

  showAnswer(answer : string)
  {
    console.log("Display answer : " + answer);
    this.alertController.create({
      header : "පිළිතුර",
      message : answer,
      buttons : [{text : 'ආපසු' , role : 'cancel'}]
    }).then(alCont => {
      alCont.present()
    });
  }

}
