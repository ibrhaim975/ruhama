import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from 'src/modules/home/home.module';
import { NewsModule } from 'src/modules/news/news.module';
import { PorgshModule } from 'src/modules/porgsh/porgsh.module';
import { ProgsModule } from 'src/modules/progs/progs.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListAllComponent } from './list-all/list-all.component';
import { MainComponent } from './shared/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', loadChildren: () => HomeModule },
      { path: '', loadChildren: () => ProgsModule },
      { path: '', loadChildren: () => PorgshModule },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'all', component: ListAllComponent },
      { path: '', loadChildren: () => NewsModule },


    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
