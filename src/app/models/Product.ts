export interface Product {
  title:	string;
  category:	string;
  price:	number;
  employee:	string;
  description: string;
  reviews?;
}

export interface PaginatedProducts{
  length: number;
  list: []
}
