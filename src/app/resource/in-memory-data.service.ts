import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const nodes = [
      { name: 'HN1', state: 'online', health: 'ok' },
      { name: 'HN2', state: 'online', health: 'error' },
      { name: 'HN3', state: 'offline', health: 'ok' },
    ];
    return { nodes };
  }
}
