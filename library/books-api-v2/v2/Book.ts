import { Author } from "./Author";

export interface Book {
  title: string;
  author: Author;
  year: number;
  copies: number;
}
