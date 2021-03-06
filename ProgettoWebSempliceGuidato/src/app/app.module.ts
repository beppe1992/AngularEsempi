import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { RicercaComponent } from './ricerca/ricerca.component';
import {RicercaService} from './ricerca.service';
import {RisultatiModelService} from './risultati-model.service';
import { RisultatiComponent } from './risultati/risultati.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { MenuComponent } from './menu/menu.component';
import { routes } from './menu/app.routes';
import { FunzionalitaricercaComponent } from './funzionalitaricerca/funzionalitaricerca.component';
import { RestservicecallComponent } from './restservicecall/restservicecall.component';
import {ServiceconsumerService} from './restservicecall/serviceconsumer.service';

@NgModule({
  declarations: [
    RicercaComponent,
    RisultatiComponent,
    DashboardhomeComponent,
    MenuComponent,  
    FunzionalitaricercaComponent,
    RestservicecallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot()
  ],
  providers: [RicercaService,RisultatiModelService,ServiceconsumerService],
  bootstrap: [MenuComponent ]
})
export class AppModule { }
