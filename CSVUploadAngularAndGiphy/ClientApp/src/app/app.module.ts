import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';
import { CsvuploadComponent } from './csvupload/csvupload.component';
import { ViewuploadeddataComponent } from './viewuploadeddata/viewuploadeddata.component';
import {FileService} from './services/file.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    GiphySearchComponent,
    CsvuploadComponent,
    ViewuploadeddataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'giphy-search', component: GiphySearchComponent },
      { path: 'csv-upload', component: CsvuploadComponent },
      { path: 'view-data', component: ViewuploadeddataComponent },
    ])
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
