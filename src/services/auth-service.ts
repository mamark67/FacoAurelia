import { injectable } from 'aurelia';

type LoginResponse = {
  token: string;         // adatta al tuo backend
  user?: any;
};

@injectable()
export class AuthService {
  private readonly tokenKey = 'auth_token';

  get isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  get token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  async login(username: string, password: string): Promise<boolean> {
    const res = await fetch('xxxx', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!res.ok) return false;

    const data = (await res.json()) as LoginResponse;

    // Se la tua API non ritorna token, salva un flag, ma meglio token/simile.
    if (!data?.token) return false;

    localStorage.setItem(this.tokenKey, data.token);
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
