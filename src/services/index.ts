import axios from "axios";
import { API_URL } from "../constants/api";
import type { IBook } from "../interfaces/Book";

// Define a type for a book item (you can adjust fields based on the actual API)


// Add a type for the function argument and return value
export const fetchBooks = async (query: string): Promise<IBook[]> => {
    try {
        const response = await axios.get<{ items: IBook[] }>(`${API_URL}?q=${query}`);
        return response.data.items;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
};

export const fetchBookById = async (id: string): Promise<IBook> => {
    try {
        const response = await axios.get<IBook>(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching book by ID:", error);
        throw error;
    }
};
