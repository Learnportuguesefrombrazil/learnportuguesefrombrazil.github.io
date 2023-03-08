import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishArticleComponent } from './english-article.component';

describe('EnglishArticleComponent', () => {
  let component: EnglishArticleComponent;
  let fixture: ComponentFixture<EnglishArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
