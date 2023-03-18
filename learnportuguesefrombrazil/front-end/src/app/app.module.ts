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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    PortugueseArticleComponent,
    EnglishArticleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    rotas
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
