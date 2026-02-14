import Aurelia from 'aurelia';
import { DialogConfiguration } from '@aurelia/dialog';
import { MyApp } from './my-app';

Aurelia
  .register(DialogConfiguration)
  .app(MyApp)
  .start();
