import { singleton } from 'aurelia';

type LoginResponse = {
  token?: string;
  // oppure adatta ai tuoi campi: access_token, user, ecc.
};

@singleton() // una sola istanza in tutta l’app :contentReference[oaicite:4]{index=4}
export class AuthService {
  private _token: string | null = localStorage.getItem('token');

  get isLoggedIn(): boolean {
    return !!this._token;
  }

  get token(): string | null {
    return this._token;
  }

  async login(username: string, password: string): Promise<boolean> {
    const res = await fetch('xxxx', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) return false;

    const data = (await res.json()) as LoginResponse;

    // Assunzione: l’API ritorna un token
    if (!data.token) return false;

    this._token = data.token;
    localStorage.setItem('token', data.token);
    return true;
  }

  logout(): void {
    this._token = null;
    localStorage.removeItem('token');
  }
}
