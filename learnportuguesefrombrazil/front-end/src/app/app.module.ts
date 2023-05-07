import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { rotas } from './app.rotas';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EnglishArticleComponent } from './components/english-article/english-article.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortugueseArticleComponent } from './components/portuguese-article/portuguese-article.component';
import { QuestionComponent } from './components/question/question.component';
import { WelcomeComponent } from './components/welcome/welcome-component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './directives/change-bg.directive';
import { TipsComponent } from './components/tips/tips.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    PortugueseArticleComponent,
    EnglishArticleComponent,
    QuestionComponent,
    WelcomeComponent,
    ChangeBgDirective,
    TipsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    rotas,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
