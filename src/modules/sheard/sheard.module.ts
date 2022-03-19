import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopbarComponent } from './topbar/topbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import {RouterModule} from '@angular/router';
import {ProgressBarModule} from 'primeng/progressbar';
import { PayPalComponent } from './pay-payl/pay-payl.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { YtPlayerAngularModule } from 'yt-player-angular';
import {ToastModule} from 'primeng/toast';
import { ProgListComponent } from '../progs/prog-list/prog-list.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { HListComponent } from '../porgsh/h-list/h-list.component';
import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    TopbarComponent,
    PayPalComponent,
    ProgListComponent,HListComponent
  ],
  imports: [
    CommonModule,ProgressSpinnerModule,
    FormsModule,ToastModule,InputNumberModule,DialogModule,InputTextModule,
    LayoutModule,RouterModule,ProgressBarModule,NgxPayPalModule,YtPlayerAngularModule

    
  ],
  exports: [
    TopbarComponent,PayPalComponent,ProgListComponent,HListComponent
    
  ]
  })
export class SheardModule { }
