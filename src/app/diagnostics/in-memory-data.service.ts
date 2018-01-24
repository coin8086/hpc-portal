import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Result } from './result';

const now = new Date().getTime();

const nodeNames = [
  'HN1',
  'HN2',
  'HN3',
  'IAASCN000',
  'IAASCN001',
  'IAASCN002',
  'IAASCN003',
  'IAASCN004',
  'IAASCN005',
  'IAASCN006',
  'IAASCN007',
  'IAASCN008',
  'IAASCN009',
];

//Service Name Status
//HPC Management Service Running
//HPC MPI Service Running
//HPC Node Manager Service Running
//HPC SOA Diag Mon Service Running
//HPC Monitoring Client Service Running

const nodeServices = [
  {
    name: 'HPC Management Service',
    status: 'Running',
  },
  {
    name: 'HPC MPI Service',
    status: 'Running',
  },
  {
    name: 'HPC Node Manager Service',
    status: 'Running',
  },
  {
    name: 'HPC SOA Diag Mon Service',
    status: 'Running',
  },
  {
    name: 'HPC Monitoring Client Service',
    status: 'Running',
  },
]

const headServices = [
  {
    name: 'HPC MPI Service',
    status: 'Running',
  },
  {
    name: 'HPC Node Manager Service',
    status: 'Running',
  },
  {
    name: 'HPC SOA Diag Mon Service',
    status: 'Running',
  },
  {
    name: 'HPC Monitoring Client Service',
    status: 'Running',
  },
  {
    name: 'HPC Broker Service',
    status: 'Running',
  },
]


export class InMemoryDataService implements InMemoryDbService {
  generateServiceRunningTest(id) {
    let result = {
      id: id,
      testName: 'Service Running Test',
      state: 'success',
      progress: 1.0,
      startedAt: now - 1000 * 60 * 2,
      updatedAt: now,
    } as Result;
    result.nodes = nodeNames.map(name => {
      return {
        name: name,
        state: 'success',
        details: {
          services: name.match(/^HN/) ? headServices : nodeServices,
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

    result.nodes = nodeNames.map(name => {
      return {
        name: name,
        state: 'failure',
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
