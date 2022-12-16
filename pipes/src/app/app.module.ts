import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/pt';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';

@NgModule({
  declarations: [AppComponent, ExemplosPipesComponent, CamelCasePipe, FiltroArrayPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt',
    // },

    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (SettingsService: { getLocale: () => any }) =>
        SettingsService.getLocale(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
