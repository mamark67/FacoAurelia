import { AuthService } from '../services/auth-service';

type Progetto = {
  id: number | string;
  nome: string;
};

export class Progetti {
  items: Progetto[] = [];
  loading = false;
  error: string | null = null;

  constructor(private auth: AuthService) {}

  async attached(): Promise<void> {
    this.loading = true;
    this.error = null;

    try {
      const headers: Record<string, string> = {};
      if (this.auth.token) headers['Authorization'] = `Bearer ${this.auth.token}`;

      const res = await fetch('yyyy', { headers });

      if (!res.ok) {
        this.error = `Errore API (${res.status})`;
        return;
      }

      this.items = (await res.json()) as Progetto[];
    } catch {
      this.error = 'Errore di rete';
    } finally {
      this.loading = false;
    }
  }
}
