import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SheardModule } from '../sheard/sheard.module';
import {InputNumberModule} from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { YtPlayerAngularModule } from 'yt-player-angular';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,InputTextModule,
    HomeRoutingModule,FormsModule,DialogModule,ProgressSpinnerModule,
    SheardModule,InputNumberModule,YtPlayerAngularModule
  ]
})
export class HomeModule { }
