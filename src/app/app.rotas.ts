import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { EnglishArticleComponent } from "./english-article/english-article.component";
import { HomeComponent } from "./home/home.component";
import { PortugueseArticleComponent } from "./portuguese-article/portuguese-article.component";

const APP_MINHAS_ROTAS: Routes = [
    { path: '', component: HomeComponent},
    { path: 'portuguese-article', component: PortugueseArticleComponent},
    { path: 'english-article', component: EnglishArticleComponent},
    { path: 'about-us', component: AboutUsComponent},
   
];

export const rotas: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_MINHAS_ROTAS);