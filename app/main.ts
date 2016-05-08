/**
 * Loading the root component
 * 
 * "main is where we tell Angular to launch the application. 
 * We also catch and log launch errors to the console."
 */

import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

bootstrap(AppComponent); // platform specific, not from ng core
