import { DialogController } from '@aurelia/dialog';
import { resolve } from '@aurelia/kernel';
 
export class LoginDialog {
  public username = '';
  public password = '';
  public error: string | null = null;

  constructor(private controller: DialogController) {}

  cancel() {
    this.controller.cancel();
  }

  ok() {
    // ritorna i valori al chiamante
    this.controller.ok({ username: this.username, password: this.password });
  }
}
