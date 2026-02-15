import { route } from '@aurelia/router-lite';
import { DialogService } from '@aurelia/dialog';
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
  constructor(
    public auth: AuthService,
    private dialogs: DialogService
  ) {}

  async openLogin(): Promise<void> {
    const controller = this.dialogs.open({
      component: LoginDialog,
      // puoi passare model se ti serve
    });

    const result = await controller.whenClosed();

    // se annulla: niente
    if (result.wasCancelled) return;

    // se OK: il dialog farà login e chiuderà con ok(true/false)
    // qui non serve altro: la UI si aggiorna perché auth.isLoggedIn cambia
  }

  doLogout(): void {
    this.auth.logout();
  }
}
