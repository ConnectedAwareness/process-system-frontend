import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
        {
            id: 1,
            email: 'as@cap.de',
            password: 'passwort'
        },
        {
            id: 2,
            email: 'jh@cap.de',
            password: 'passwort'
        }
    ];
    return {users};
  }
}
