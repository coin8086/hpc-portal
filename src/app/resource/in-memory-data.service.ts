import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const nodes = [
      { id: 1, name: 'HN1', state: 'online', health: 'ok' },
      { id: 2, name: 'HN2', state: 'online', health: 'error' },
      { id: 3, name: 'HN3', state: 'offline', health: 'ok' },
    ];
    return { nodes };
  }
}
