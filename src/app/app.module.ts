import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Third part lib..*/
import {DataTableModule} from "angular-6-datatable";


/* Component declare*/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


/* services*/
import {CommanService} from '../common/services/comman.service';

/* router declar*/
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from '../common/pipes/search.pipe';
import { PopmodelComponent } from './popmodel/popmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchPipe,
    PopmodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents:[PopmodelComponent],
  providers: [CommanService],
  bootstrap: [AppComponent],
  exports: [HomeComponent]
})
export class AppModule { }
