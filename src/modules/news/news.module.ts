import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFormComponent } from './new-form/new-form.component';
import { NewsListComponent } from './news-list/news-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from '../home/home-routing.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { SheardModule } from '../sheard/sheard.module';
import { YtPlayerAngularModule } from 'yt-player-angular';
import {InputTextModule} from 'primeng/inputtext';

import {ProgressSpinnerModule} from 'primeng/progressspinner';

const routes: Routes = [
  {path: 'activities', component: NewsListComponent},


];
@NgModule({
  declarations: [
    NewFormComponent,
    NewsListComponent
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    HomeRoutingModule,ToastModule,YtPlayerAngularModule,
    SheardModule,InputNumberModule,ProgressBarModule,
    InputTextModule,ProgressSpinnerModule
    
  ]
})
export class NewsModule { }
