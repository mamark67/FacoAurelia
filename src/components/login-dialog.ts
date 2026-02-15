
import { resolve } from 'aurelia';
import { IDialogController } from '@aurelia/dialog';
import { AuthService } from '../services/auth-service';
export class LoginDialog {
  username = '';
  password = '';
  
  private readonly controller = resolve(IDialogController);
   private readonly auth = resolve(AuthService);

  cancel() {
    this.controller.cancel();
  }

  async ok(): Promise<void> {
    this.error = null;
    this.busy = true;

    try {
      const success = await this.auth.apiLogin(this.username, this.password);
      if (!success) {
        this.error = 'Credenziali non valide';
        return;
      }
      this.controller.ok(true);
    } finally {
      this.busy = false;
    }
  }
}
