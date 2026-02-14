import { DialogService } from '@aurelia/dialog';
import { injectable } from 'aurelia';
import { AuthService } from './services/auth-service';
import { LoginDialog } from './components/login-dialog';

@injectable()
export class MyApp {

  static routes = [
    { path: ['', 'home'], component: 'home' },       // se vuoi una home separata
    { path: 'projects', component: Projects },
    { path: 'companies', component: 'companies' },   // placeholder
    { path: 'users', component: 'users' }            // placeholder
  ];

   constructor(
    public auth: AuthService,
    private dialog: DialogService
  ) {}

  private _msessage: string = "prova";

 get message(): string {
    return this._msessage;
  }

  set message(valore: string) {
    
    this._msessage = valore;
  }
  nome: string = "Aurelia";

    async openLogin() {
    const result = await this.dialog.open({
      component: LoginDialog,
      title: 'Login'
    }).whenClosed();

    if (result.status !== 'ok') {
      // Annulla o chiusura: rimani non loggato
      return;
    }

    const { username, password } = result.value as { username: string; password: string };

    const ok = await this.auth.login(username, password);
    if (!ok) {
      // semplice: puoi riaprire dialog con messaggio o mostrare toast
      alert('Login fallito');
      return;
    }

    // menu si aggiorna perché auth.isLoggedIn cambia
  }

  logout() {
    this.auth.logout();
  }
}
