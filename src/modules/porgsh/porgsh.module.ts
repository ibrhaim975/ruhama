import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgFormComponent } from './prog-form/prog-form.component';
import { SheardModule } from '../sheard/sheard.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { RouterModule, Routes } from '@angular/router';
import {ProgressBarModule} from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { YtPlayerAngularModule } from 'yt-player-angular';
import {DialogModule} from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const routes: Routes = [
  {path: 'humanity/:id', component: ProgFormComponent},


];

@NgModule({
  declarations: [
    ProgFormComponent,
    
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    ToastModule,YtPlayerAngularModule,DialogModule,InputTextModule,
    SheardModule,InputNumberModule,ProgressBarModule
    ,ProgressSpinnerModule
  ]
})
export class PorgshModule { }
