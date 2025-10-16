import { useState } from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Search from "../../components/common/Search";
import BooksList from "../../components/core/BooksList";
import { fetchBooks } from "../../services";
import type { IBook } from "../../interfaces/Book";
function Home() {
    const [booksList, setBooksList] = useState<IBook[] | null>(null);

    const fetchBookList = async (query: string): Promise<IBook[]> => {
        return await fetchBooks(query);
    }
    const onSearchChange = async (value: string) => {
        console.log("Search query:", value);

        if (!value && value.trim() === "") {
            setBooksList(null);
            return;
        }

        const books = await fetchBookList(value);
        setBooksList(books);

        // Implement search logic here, e.g., filter books based on the query
    }
    return (
        <>
            <Header />
            <Search onSearchChange={onSearchChange} />
            <div className="app-conent">
                <BooksList list={booksList} />
            </div>
            <Footer />
        </>
    );
}

export default Home;