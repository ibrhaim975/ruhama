import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SheardModule } from 'src/modules/sheard/sheard.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { YtPlayerAngularModule } from 'yt-player-angular';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListAllComponent } from './list-all/list-all.component';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutUsComponent,
    ListAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SheardModule,TabViewModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDQkbEpc6R2oFz99A_TyglfEldEHIuWJYI",
      authDomain: "ruhma-70b8c.firebaseapp.com",
      projectId: "ruhma-70b8c",
      storageBucket: "ruhma-70b8c.appspot.com",
      messagingSenderId: "85873508166",
      appId: "1:85873508166:web:42b2cc516bbf7a3dfd2f47",
      measurementId: "G-9Q9WHLCXMM"
    }),
    AngularFirestoreModule,YtPlayerAngularModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
