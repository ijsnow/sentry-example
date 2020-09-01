import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import * as Sentry from "@sentry/angular";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Sentry.init({
  dsn: 'https://83fe8305a3d74b13ab22392ada24947a@o442286.ingest.sentry.io/5413820',
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
