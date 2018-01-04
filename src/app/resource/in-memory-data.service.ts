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

  randomState(): string {
    const states = ['online', 'offline'];
    return states[Math.random() > 0.7 ? 1 : 0];
  }

  randomHealth(): string {
    const states = ['ok', 'error'];
    return states[Math.random() > 0.7 ? 1 : 0];
  }

  randomNum(scale: number): number {
    return Math.round(Math.random() * scale);
  }

  createDb() {
    let nodes: any[] = [
      { id: 10, name: 'HN1', },
      { id: 12, name: 'HN2', },
      { id: 13, name: 'HN3', },
      { id: 14, name: 'WN11',},
      { id: 15, name: 'WN12',},
      { id: 16, name: 'WN13',},
      { id: 17, name: 'WN21',},
      { id: 18, name: 'WN22',},
      { id: 19, name: 'WN23',},
      { id: 20, name: 'WN30',},
    ];
    nodes.forEach(node => {
      node.state = this.randomState();
      node.health = this.randomHealth();
      node.runningJobs = node.state == 'offline' ? 0 : this.randomNum(100);
      node.cpuUsage = this.generateCpuUsage();
    });

    return { nodes };
  }
}
