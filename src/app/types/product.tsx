export interface ProductType {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string; // Add this line to include the description
    category: string; // Add this line to include a category
  }