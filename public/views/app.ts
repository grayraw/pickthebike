import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { Bikes } from './pages/bikes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ Bikes ],
  bootstrap:    [ Bikes ]
})

class AppModule{};

// let hui = new AppModule;
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);  