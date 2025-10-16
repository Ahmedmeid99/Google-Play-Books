import type { FunctionComponent } from "react";
import type { IBook } from "../../../interfaces/Book";
import Book from "../Book";
import emptyImg from "../../../assets/empty.jpg";

interface BooksListProps {
    list: IBook[] | null;
}

const BooksList: FunctionComponent<BooksListProps> = ({ list }) => {
    // if (!list || list.length === 0) {
    //     return 
    // }
    if (!list || list.length === 0) {
        return (
            <>
                <p style={{ textAlign: 'center', marginTop: '5px' }}>No books available. Please perform a search.</p>;
                <img src={emptyImg} alt="No Data" className="empty-img" />;
            </>
        )
    }
    return (
        <div className="book-list">
            {list.map((book) => (
                <Book key={book.id} book={book} />
            ))}
        </div>
    );
}

export default BooksList;