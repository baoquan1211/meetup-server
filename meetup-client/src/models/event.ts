export type Event = {
  id: number;
  name: string;
  about: string;
  location: string;
  start_date: Date;
  end_date: Date;
  owner: string;
  owner_name: string | undefined;
};
