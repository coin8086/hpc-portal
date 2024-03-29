import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Result } from './result';

const now = new Date().getTime();

const dirResult = `
 Volume in drive C has no label.
 Volume Serial Number is 6C15-D365

 Directory of C:\\Users\\hpcadmin

01/04/2018  01:50 AM    <DIR>          .
01/04/2018  01:50 AM    <DIR>          ..
01/04/2018  01:50 AM    <DIR>          Contacts
01/04/2018  01:50 AM    <DIR>          Desktop
01/12/2018  07:30 AM    <DIR>          Documents
01/04/2018  01:50 AM    <DIR>          Downloads
01/04/2018  01:50 AM    <DIR>          Favorites
01/04/2018  01:50 AM    <DIR>          Links
01/04/2018  01:50 AM    <DIR>          Music
01/04/2018  01:50 AM    <DIR>          Pictures
01/04/2018  01:50 AM    <DIR>          Saved Games
01/04/2018  01:50 AM    <DIR>          Searches
01/04/2018  01:50 AM    <DIR>          Videos
               0 File(s)              0 bytes
              13 Dir(s)  107,968,028,672 bytes free
`

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

  generateDirResult(id, time, state, progress) {
    let result = {
      id: id,
      command: 'dir',
      state: state,
      progress: progress,
      startedAt: time - 1000 * 60 * 2,
      updatedAt: time,
    };
    let names = this.generateNames(100);
    (result as any).nodes = names.map(name => {
      let s;
      if (state === 'running') {
        let r = Math.random();
        s = r < 0.5 ? 'running' : (r < 0.9 ? 'success' : 'failure');
      }
      else {
        s = state;
      }
      return {
        name: name,
        state: s,
        output: dirResult,
      };
    });
    return result;
  }

  createDb() {
    let results = [
      this.generateDirResult(1, now, 'running', 0.6),
      this.generateDirResult(2, now - 5 * 60 * 1000, 'success', 1.0),
    ];

    return { results: results };
  }
}
