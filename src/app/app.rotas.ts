import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { HomeComponent } from "./home/home.component";

const APP_MINHAS_ROTAS: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about-us', component: AboutUsComponent}
   
];

export const rotas: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_MINHAS_ROTAS);