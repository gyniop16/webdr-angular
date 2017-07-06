export class Patient {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string; //date
  maritalStatus: string;
  phone: string;
  email: string;
  address: Address;
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