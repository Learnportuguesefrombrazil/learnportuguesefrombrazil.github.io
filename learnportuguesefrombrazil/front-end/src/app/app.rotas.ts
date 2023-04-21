import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { EnglishArticleComponent } from "./components/english-article/english-article.component";
import { HomeComponent } from "./components/home/home.component";
import { PortugueseArticleComponent } from "./components/portuguese-article/portuguese-article.component";
import { WelcomeComponent } from "./components/welcome/welcome-component";
import { QuestionComponent } from "./components/question/question.component";

const APP_MINHAS_ROTAS: Routes = [
    { path: '', component: HomeComponent},
    { path: 'portuguese-article', component: PortugueseArticleComponent},
    { path: 'english-article', component: EnglishArticleComponent},
    { path: 'about-us', component: AboutUsComponent},
    { path: 'welcome', component: WelcomeComponent},
    { path: 'question', component: QuestionComponent},

];

export const rotas: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_MINHAS_ROTAS);
