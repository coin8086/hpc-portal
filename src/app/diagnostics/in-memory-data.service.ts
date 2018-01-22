import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let now = new Date().getTime();
    let results = [
      {
        id: 1,
        testName: 'SOA Service Loading',
        state: 'running',
        progress: 0.6,
        startedAt: now - 1000 * 60 * 2,
        updatedAt: now,
      },
      {
        id: 2,
        testName: 'MPI Latency',
        state: 'success',
        progress: 1.0,
        startedAt: now - 1000 * 60 * 20,
        updatedAt: now - 1000 * 60 * 10,
      },
    ];

    return { results };
  }
}
