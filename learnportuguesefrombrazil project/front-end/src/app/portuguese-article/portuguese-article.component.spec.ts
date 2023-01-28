import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortugueseArticleComponent } from './portuguese-article.component';

describe('PortugueseArticleComponent', () => {
  let component: PortugueseArticleComponent;
  let fixture: ComponentFixture<PortugueseArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortugueseArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortugueseArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
