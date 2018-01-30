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

  generateNames(num) {
    let a = [];
    for (let i = 1; i <= num; i++) {
      let prefix = Math.random() > 0.9 ? 'HN' : 'WN';
      let name = prefix + i;
      a.push(name);
    }
    return a;
  }

  createDb() {
    let names = this.generateNames(100);
    let index = 1;
    let nodes = names.map(name => {
      let state = this.randomState();
      return {
        id: index++,
        name: name,
        state: state,
        health: this.randomHealth(),
        runningJobs: state == 'offline' ? 0 : this.randomNum(100),
        cpuUsage: this.generateCpuUsage(),
      };
    });
    return { nodes };
  }
}
