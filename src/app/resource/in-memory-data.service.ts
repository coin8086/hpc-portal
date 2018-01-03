import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  generateCpuUsage(): any[] {
    let usage = [];
    let now = new Date().getTime();
    const span = 5 * 60 * 1000;
    const num = 12;
    for (let i = 0; i < num; i++) {
      let d = new Date(now - span * i);
      let v = Math.round(Math.random() * 100);
      usage.push({ ts: d.getTime(), value: v });
    }
    usage.reverse();
    return usage;
  }

  createDb() {
    let nodes: any[] = [
      { id: 10, name: 'HN1', state: 'online', health: 'ok', runningJobs: 10 },
      { id: 12, name: 'HN2', state: 'online', health: 'error', runningJobs: 0 },
      { id: 13, name: 'HN3', state: 'offline', health: 'ok', runningJobs: 0 },
      { id: 14, name: 'WN11', state: 'online', health: 'ok', runningJobs: 110 },
      { id: 15, name: 'WN12', state: 'online', health: 'error', runningJobs: 1 },
      { id: 16, name: 'WN13', state: 'offline', health: 'ok', runningJobs: 0 },
      { id: 17, name: 'WN21', state: 'online', health: 'ok', runningJobs: 55 },
      { id: 18, name: 'WN22', state: 'online', health: 'ok', runningJobs: 2 },
      { id: 19, name: 'WN23', state: 'online', health: 'ok', runningJobs: 70 },
      { id: 20, name: 'WN30', state: 'online', health: 'ok', runningJobs: 90 },
    ];
    nodes.forEach(node => {
      node.cpuUsage = this.generateCpuUsage();
    });

    return { nodes };
  }
}
