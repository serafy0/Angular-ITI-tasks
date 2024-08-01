export interface Item {
  id: number;
  name: string;
  ingr: string[];
  price: number;
  quantity: number;
  available?: boolean;
  size?: string;
  img: string;
  type?: string;
}

enum Sizes {
  Medium,
  Large,
  XLarge,
}
