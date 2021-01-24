import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassPapersPage } from './pass-papers.page';

describe('PassPapersPage', () => {
  let component: PassPapersPage;
  let fixture: ComponentFixture<PassPapersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassPapersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassPapersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
