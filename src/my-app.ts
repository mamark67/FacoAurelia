import { route } from '@aurelia/router-lite';
import { resolve } from 'aurelia';
import { IDialogService } from '@aurelia/dialog';
import { AuthService } from './services/auth-service';
import { LoginDialog } from './components/login-dialog';

@route({
  routes: [
    { path: ['', 'home'], component: () => import('./pages/home') },
    { path: 'progetti', component: () => import('./pages/progetti') },
    { path: 'aziende', component: () => import('./pages/aziende') },
    { path: 'utenti', component: () => import('./pages/utenti') },
  ]
})
export class MyApp {
  private readonly dialogs = resolve(IDialogService);

  async openLogin(): Promise<void> {
    const controller = this.dialogs.open({ component: LoginDialog });
    const result = await controller.whenClosed();
    if (result.wasCancelled) return;
  }
}
