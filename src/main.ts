import { Aurelia } from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { DialogConfigurationStandard } from '@aurelia/dialog';
import { MyApp } from './my-app';

Aurelia
  .register(RouterConfiguration,DialogConfigurationStandard) // dialog plugin
  .app(MyApp)
  .start();
