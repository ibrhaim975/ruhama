import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from '../home/home-routing.module';
import { SheardModule } from '../sheard/sheard.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { RouterModule, Routes } from '@angular/router';
import { ProgformComponent } from './progform/progform.component';
import {ProgressBarModule} from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

const routes: Routes = [
  {path: 'progs/:id', component: ProgformComponent}


];
@NgModule({
  declarations: [
   
    ProgformComponent
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    HomeRoutingModule,ToastModule,DialogModule,InputTextModule,
    SheardModule,InputNumberModule,ProgressBarModule,ProgressSpinnerModule
    
  ]
})
export class ProgsModule { }
