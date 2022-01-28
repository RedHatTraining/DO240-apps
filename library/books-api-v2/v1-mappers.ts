import { Book as BookV1 } from "./v1/Book";
import { Book } from "./v2/Book";

export function bookToV1(book: Book): BookV1 {
    const { title, copies, year } = book;
    const authorName = book.author.name;
    return {
        authorName,
        title,
        copies,
        year
    };
}
