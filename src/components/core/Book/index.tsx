import type { FunctionComponent } from "react";
import type { IBook } from "../../../interfaces/Book";
import { Link } from "react-router-dom";

interface BookProps {
    book: IBook
}

const Book: FunctionComponent<BookProps> = ({ book }) => {
    const info = book.volumeInfo;

    return (
        <div className="book-card">
            {info.imageLinks?.thumbnail ? (
                <img src={info.imageLinks.thumbnail} alt={info.title} />
            ) : (
                <div style={{ height: '280px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    No Image
                </div>
            )}

            <div className="content">
                <Link to={`/book-details/${book?.id}`} state={{ book }} >{/** can pass state={{ book }} */}
                    <h2>{info.title}</h2>
                </Link>
                {info.authors && (
                    <p className="authors">
                        {info.authors.join(", ")}
                    </p>
                )}
                {info.description && (
                    <p className="description">{info.description}</p>
                )}
            </div>
        </div>
    );
};


export default Book;