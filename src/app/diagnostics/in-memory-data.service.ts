import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Result } from './result';

const now = new Date().getTime();

const nodeServices = [
  'HPC Management Service',
  'HPC MPI Service',
  'HPC Node Manager Service',
  'HPC SOA Diag Mon Service',
  'HPC Monitoring Client Service',
]

const headServices = [
  'HPC MPI Service',
  'HPC Node Manager Service',
  'HPC SOA Diag Mon Service',
  'HPC Monitoring Client Service',
  'HPC Broker Service',
]

const sRun = "Running"

const sStop = "Stopped"

export class InMemoryDataService implements InMemoryDbService {
  generateNames(num) {
    let a = [];
    for (let i = 1; i <= num; i++) {
      let prefix = Math.random() > 0.9 ? 'HN' : 'WN';
      let name = prefix + i;
      a.push(name);
    }
    return a;
  }

  generateServiceRunningTest(id) {
    let result = {
      id: id,
      testName: 'Service Running Test',
      state: 'failure',
      progress: 1.0,
      startedAt: now - 1000 * 60 * 2,
      updatedAt: now,
    } as Result;
    let names = this.generateNames(100);
    result.nodes = names.map(name => {
      let ok = Math.random() < 0.9;
      let services = name.match(/^HN/) ? headServices : nodeServices;
      if (ok) {
        services = services.map(sname => ({ name: sname, status: sRun })) as any;
      }
      else {
        services = services.map(sname => ({ name: sname, status: Math.random() < 0.1 ? sRun : sStop })) as any;
      }
      return {
        name: name,
        state: ok ? 'success' : 'failure',
        details: {
          services: services,
        },
      };
    });
    return result;
  }

  generatePingTest(id) {
    //Node Error Count Host Node(s) Name
    //IAASCN001 TimedOut 3 IaaSCN000,IaaSCN002,ref
    //IAASCN002 TimedOut 3 IaaSCN000,IaaSCN001,ref
    //IAASCN000 TimedOut 3 IaaSCN001,IaaSCN002,ref

    let result = {
      id: id,
      testName: 'Ping Test',
      state: 'failure',
      progress: 1.0,
      startedAt: now - 1000 * 60 * 28,
      updatedAt: now - 1000 * 60 * 27,
      summary: {
        pings: [
          {
            node: 'IAASCN001',
            error: 'TimedOut',
            count: 3,
            nodes: 'IaaSCN000,IaaSCN002,ref',
          },
          {
            node: 'IAASCN002',
            error: 'TimedOut',
            count: 3,
            nodes: 'IaaSCN000,IaaSCN001,ref',
          },
          {
            node: 'IAASCN000',
            error: 'TimedOut',
            count: 3,
            nodes: 'IaaSCN001,IaaSCN002,ref',
          },
        ]
      }
    } as Result;

    let names = this.generateNames(100);
    result.nodes = names.map(name => {
      let best = Math.round(Math.random() * 10);
      let worst = best + Math.round(Math.random() * 100);
      let avg = Math.round((best + worst) / (2 + Math.random()));
      return {
        name: name,
        state: Math.random() < 0.8 ? 'success' : 'failure',

        /*
         * The "best", "worst" and "avarage" should be calculated from
         * the "pings" section. They're here for simplicity of demo.
         * */
        best: best,
        worst: worst,
        average: avg,

        details: {
          //Destination IP Address Result Average Best Worst Successful Failures
          //IAASCN000 fe80::eda3:a138:14ab:a23e Succeeded 0 ms 0 ms 0 ms 4 0
          //IAASCN001  Failed 0 ms 0 ms 0 ms 0 4
          //IAASCN002  Failed 0 ms 0 ms 0 ms 0 4
          //REF 10.0.0.5 Succeeded 0 ms 0 ms 0 ms 4 0

          pings: [
            {
              destination: 'IAASCN000',
              ip: 'fe80::eda3:a138:14ab:a23e',
              result: 'Succeeded' ,
              average: 0,
              best: 0,
              worst: 0,
              successful: 4,
              failed: 0,
            },
            {
              destination: 'IAASCN001',
              ip: null,
              result: 'Failed',
              average: 0,
              best: 0,
              worst: 0,
              successful: 0,
              failed: 4,
            },
            {
              destination: 'IAASCN002',
              ip: null,
              result: 'Failed',
              average: 0,
              best: 0,
              worst: 0,
              successful: 0,
              failed: 4,
            },
            {
              destination: 'REF',
              ip: '10.0.0.5',
              result: 'Succeeded',
              average: 0,
              best: 0,
              worst: 0,
              successful: 4,
              failed: 0,
            },
          ],

          //Destination Message Count
          //IAASCN001 TimedOut 4
          //IAASCN002 TimedOut 4

          failedPings: [
            {
              destination: 'IAASCN001',
              message: 'TimedOut',
              count: 4,
            },
            {
              destination: 'IAASCN002',
              message: 'TimedOut',
              count: 4,
            },
          ],
        },
      };
    });
    return result;
  }

  createDb() {
    let results = [
      this.generateServiceRunningTest(1),
      this.generatePingTest(2),
    ];

    return { results };
  }
}
