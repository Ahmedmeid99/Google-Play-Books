import { useEffect, type FunctionComponent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { IBook } from "../../interfaces/Book";
// import { fetchBookById } from "../../services";

type LocationState = {
    book?: IBook;
};

const BookDetails: FunctionComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // استخرج الكتاب من state
    const state = location.state as LocationState;
    const book = state?.book;
    // const [book, setBook] = useState<IBook | null>(state?.book || null);

    // إذا لم يكن هناك كتاب، ارجع للصفحة السابقة أو الرئيسية
    if (!book) {
        return (
            <div className="book-details">
                <h2>Book not found!</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="back-btn"
                >
                    Go Back
                </button>
            </div>
        );
    }


    useEffect(() => {
        if (!book) {
            // Fetch by ID from URL if no state is available
            const id = location.pathname.split("/").pop();
            if (id) {
                // fetchBookById(id).then(setBook).catch(console.error);
            }
        }
    }, []);

    const {
        title,
        authors,
        publisher,
        publishedDate,
        description,
        pageCount,
        categories,
        imageLinks,
        previewLink,
    } = book.volumeInfo;

    const { pdf } = book; // PDF info is top-level

    return (
        <div className="book-details-container">
            <button onClick={() => navigate(-1)} className="back-btn">
                ← Back
            </button>

            <div className="book-details-card">
                {imageLinks?.thumbnail && (
                    <img src={imageLinks.thumbnail} alt={title} className="book-cover" />
                )}

                <div className="book-info">
                    <h1 className="book-title">{title}</h1>

                    {authors && <p><strong>Authors:</strong> {authors.join(", ")}</p>}
                    {publisher && <p><strong>Publisher:</strong> {publisher}</p>}
                    {publishedDate && <p><strong>Published:</strong> {publishedDate}</p>}
                    {pageCount && <p><strong>Pages:</strong> {pageCount}</p>}
                    {categories && <p><strong>Categories:</strong> {categories.join(", ")}</p>}

                    {description && <p className="book-description">{description}</p>}

                    <div className="book-links">
                        {previewLink && (
                            <a href={previewLink} target="_blank" rel="noopener noreferrer" className="btn">
                                Preview Book
                            </a>
                        )}
                        {pdf?.isAvailable && pdf.acsTokenLink && (
                            <a href={pdf.acsTokenLink} target="_blank" rel="noopener noreferrer" className="btn">
                                Download PDF Sample
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default BookDetails;
