export interface ProductType {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  }


export interface Deal {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
}