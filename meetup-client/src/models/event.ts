export type Event = {
  id: number;
  name: string;
  location: string;
  start_date: string;
  owner: string;
  owner_name: string | undefined;

  attendates: number;
  left: number;
  price: string;
  show: Show[];
};

export type Show = {
  id: number;
  name: string;
  date: string;
  start: string;
  end: string;
  event: Event["id"];
};
