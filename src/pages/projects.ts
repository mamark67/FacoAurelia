import { ApiClient } from '../services/api-client';

type Project = {
  id: number | string;
  name: string;
};

 
export class Projects {
  public items: Project[] = [];
  public loading = false;
  public error: string | null = null;

  constructor(private api: ApiClient) {}

  async attaching() {
    await this.load();
  }

  async load() {
    this.loading = true;
    this.error = null;

    try {
      this.items = await this.api.get<Project[]>('yyyy');
    } catch (e: any) {
      this.error = e?.message ?? 'Errore nel caricamento';
    } finally {
      this.loading = false;
    }
  }
}
