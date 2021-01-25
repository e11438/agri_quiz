import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionPagePage } from './question-page.page';

describe('QuestionPagePage', () => {
  let component: QuestionPagePage;
  let fixture: ComponentFixture<QuestionPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
