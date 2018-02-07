import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  generateUsage(cb): any[] {
    let usage = [];
    let now = new Date().getTime();
    const span = 5 * 60 * 1000;
    const num = 12;
    for (let i = 0; i < num; i++) {
      let d = new Date(now - span * i);
      let item = cb(d, i, num);
      usage.push(item);
    }
    usage.reverse();
    return usage;
  }

  generateCpuUsage(): any[] {
    return this.generateUsage((d) => ({
      ts: d.getTime(),
      value: Math.round(Math.random() * 100)
    }));
  }

  generateNetworkUsage(): any[] {
    return this.generateUsage((d) => ({
      ts: d.getTime(),
      inbound: Math.random(),
      outbound: Math.random() * 10,
    }));
  }

  randomState(): string {
    const states = ['online', 'offline', 'unknown', 'provisioning', 'starting', 'draining', 'removing', 'rejected', 'not-deployed'];
    let idx = Math.random() < 0.7 ? 0 : (this.randomNum(100) % (states.length - 1) + 1);
    if (idx < 0 || idx >= states.length)
      console.log(idx);
    return states[idx];
  }

  randomHealth(): string {
    const states = ['ok', 'warning', 'error', 'transitional', 'unapproved'];
    let idx = Math.random() < 0.7 ? 0 : (this.randomNum(100) % (states.length - 1) + 1);
    return states[idx];
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
    let names = this.generateNames(200);
    let index = 1;
    let nodes = names.map(name => {
      let state = this.randomState();
      let health = this.randomHealth();
      return {
        id: index++,
        name: name,
        state: state,
        health: health,
        runningJobs: state == 'online' && health == 'ok' ? this.randomNum(100) : 0,
        cpuUsage: this.generateCpuUsage(),
        networkUsage: this.generateNetworkUsage(),
      };
    });
    return { nodes };
  }
}
