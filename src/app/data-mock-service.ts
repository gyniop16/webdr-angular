import { InMemoryDbService } from 'angular-in-memory-web-api';
export class DataMockService implements InMemoryDbService {
  createDb() {
    let patients = [
      { 'id': 1,
        'firstName': 'Mr. Nice',
        'lastName': 'test',
        'dateOfBirth': '1988-04-12',
        'maritalStatus': 'marital',
        'gender': 'gender',
        'phone': 'phone',
        'email': 'email'
      },
      {'id': 2, 'firstName': 'Narco'},
      {'id': 3, 'firstName': 'Bombasto'}
    ];
    let doctors = [
        { id: 1, firstName: 'Dr Windstorm' },
        { id: 2, name: 'Bombasto' },
        { id: 3, name: 'Magneta' },
        { id: 4, name: 'Tornado' },
    ];
    return { patients : patients,
      doctors : doctors };
  }
}
