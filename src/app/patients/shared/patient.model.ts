export class Patient {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string; //date
  maritalStatus: string;
  phone: string;
  email: string;
  addresses: Address[];
}


export class Address {
  streetAddress = '';
  extNumber     = '';
  intNumber     = '';
  colony        = '';
  city          = '';
  municipality  = '';
  state         = '';
  country       = '';
  zipCode       = '';
  reference     = '';
}