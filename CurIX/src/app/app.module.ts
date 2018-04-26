import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConfigurationComponent } from './admin/configuration/configuration.component';
import { LicenseComponent } from './admin/license/license.component';
import { ControllingComponent } from './admin/controlling/controlling.component';
import { ServiceLayerTreeViewComponent } from './dashboard/service-layer-tree-view/service-layer-tree-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    LicenseComponent,
    ControllingComponent,
    ServiceLayerTreeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
