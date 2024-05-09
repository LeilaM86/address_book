export interface User {
  login: {
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  phone: string;
  picture: {
    medium: string;
    large: string;
  };
}
