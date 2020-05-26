import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { ContactComponent } from './pages/contact/contact.component'
import { SkillsComponent } from './pages/skills/skills.component'
import { PagesComponent } from './pages/pages.component'
import { ExperienceComponent } from './pages/experience/experience.component'


const routes: Routes = [

  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { animation: 'Home' }
      },
      {
        path: 'experience',
        component: ExperienceComponent,
        data: { animation: 'Experience' }
      },
      {
        path: 'skills',
        component: SkillsComponent,
        data: { animation: 'Skills' }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: { animation: 'Contact' }
      },
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
