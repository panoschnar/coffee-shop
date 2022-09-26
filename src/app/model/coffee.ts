export interface ICoffee {
  id: string;
  title: string;
  origin: string;
  price: number;
  kg: number;
}

export enum SortOptions {
  TitleAscending = 'titleAsc',
  TitleDescending = 'titleDesc',
  OriginAscending = 'originAsc',
  OriginDescending = 'originDesc',
  KgAscending = 'kgAsc',
  KgDescending = 'kgDesc',
  PriceAscending = 'priceAsc',
  PriceDescending = 'priceDesc',
}
