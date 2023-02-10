export interface IProduct {
  id: string;
  name: string;
  photo: [string];
  price: string | number;
  description: string;
  isAvailable: boolean;
  collection: string;
}
