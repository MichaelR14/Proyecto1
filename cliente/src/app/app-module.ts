import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
//******************************* */
import { ToastrModule } from 'ngx-toastr';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//*************************** */


//COMPONENTES
import { CrearProducto } from './components/crear-producto/crear-producto';
import { ListarProducto } from './components/listar-producto/listar-producto';


@NgModule({
  declarations: [
    App,
    CrearProducto,
    ListarProducto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // ***********************************************
    BrowserAnimationsModule,
      ToastrModule.forRoot(),
      
      
    // ***********************************************
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
