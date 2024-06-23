export type Token = {
  access_token: string;
  refresh_token: string;
  user: User;
};

export type User = {
  id: string;
  phone: string;
  role: string;
  first_name: string;
  last_name: string;
  address: {
    city: string;
    street: string;
    country: string;
  };
};
