import { Aurelia } from 'aurelia';
import { DialogConfigurationStandard } from '@aurelia/dialog';
import { MyApp } from './my-app';

Aurelia
  .register(DialogConfigurationStandard) // dialog plugin
  .app(MyApp)
  .start();
