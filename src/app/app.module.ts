import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { rotas } from './app.rotas';
import { PortugueseArticleComponent } from './portuguese-article/portuguese-article.component';
import { EnglishArticleComponent } from './english-article/english-article.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
