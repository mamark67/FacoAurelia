import { injectable } from 'aurelia';
import { AuthService } from './auth-service';

@injectable()
export class ApiClient {
  constructor(private auth: AuthService) {}

  async get<T>(url: string): Promise<T> {
    const headers: Record<string, string> = {};

    const token = this.auth.token;
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`GET ${url} failed: ${res.status}`);
    return (await res.json()) as T;
  }
}
