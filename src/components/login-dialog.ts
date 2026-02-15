import { DialogController } from '@aurelia/dialog';

export class LoginDialog {
  username = '';
  password = '';

  constructor(private controller: DialogController) {}

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
