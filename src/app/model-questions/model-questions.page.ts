import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QueryService} from '../services/query.service';
import {GlobalVariablesService} from '../services/global-variables.service';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-model-questions',
  templateUrl: './model-questions.page.html',
  styleUrls: ['./model-questions.page.scss'],
})
export class ModelQuestionsPage implements OnInit {
  grade;
  chapters;

  constructor(private activatedRoute : ActivatedRoute, private queryService : QueryService, private navCtrl: NavController,
    private alertController: AlertController) { }

  ngOnInit() { 
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('grade'))
      {
        return;
      }
      this.grade = paramMap.get('grade');
      console.log("grade is : " + this.grade);
      this.chapters = this.queryService.getAllChapters(this.grade);
    }
    );

 

  }

  goToChapterQuestions(file : string)
  {
    let promise = this.queryService.getFileContent(file);
    
    promise.then((res:Response) => {
      console.log(file + " details " );
      console.log(res);
      
      return res.json();
    }).then(json => {
      console.log(json);
      GlobalVariablesService.currentQuestionSet = json; 
      this.navCtrl.navigateForward("model-questions/" + this.grade + "/question-page/" + file);          
    }
    )
    .catch((er)=>
    {
      console.log("promise exception while reading file " + file);
      console.log(er);
      this.alertController.create({
        header : "Exception",
        message : "file read error " + er,
        buttons : [{text : 'Cancel' , role : 'cancel'}]
      }).then(alCont => {
        alCont.present()
      });
    });

  }

}
