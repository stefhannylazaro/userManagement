import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';// http
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};

// import { ApplicationConfig } from '@angular/core';
// import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';// http
// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),// estos 2 ultimos parametros son la lazy load
//     provideHttpClient()// http
//   ]
// };

