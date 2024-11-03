export enum CustomerType {
  REGULAR = "regular",
  GOLD = "gold",
  PLATINUM = "platinum",
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
