import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';

import { routes } from './app.routes';
import { counterReducer } from './store/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      counter: counterReducer
    }),

    provideStoreDevtools({
      maxAge: 25,            // Garde les 25 dernières actions
      logOnly: !isDevMode(), // En production, logs seulement je sais étrange
      autoPause: true,       // Pause automatique quand l'extension n'est pas ouverte
      trace: false,          //  Stack trace 
      traceLimit: 75,        // Limite du stack trace
    })
  ]
};
