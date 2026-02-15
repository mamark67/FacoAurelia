
import { resolve } from 'aurelia';
import { IDialogController } from '@aurelia/dialog';
export class LoginDialog {
  username = '';
  password = '';
  
  private readonly controller = resolve(IDialogController);
  

  cancel() {
    this.controller.cancel();
  }

  ok() {
    this.controller.ok({
      username: this.username,
      password: this.password
    });
  }
}
