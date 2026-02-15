import { route,IRouter  } from '@aurelia/router';
import { resolve } from 'aurelia';
import { IDialogService } from '@aurelia/dialog';
import { AuthService } from './services/auth-service';
import { LoginDialog } from './components/login-dialog';
import './my.app.css';
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
  private readonly router = resolve(IRouter);
  auth = resolve(AuthService);
  
   async doLogout(): Promise<void> {
    this.auth.logout();
    await this.router.load('home');  
  }

  async openLogin(): Promise<void> {
    const controller = this.dialogs.open({ component: LoginDialog });
    const result = await controller.whenClosed();
    if (result.wasCancelled) return;
  }
}
