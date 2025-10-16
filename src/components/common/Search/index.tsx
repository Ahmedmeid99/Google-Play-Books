import React, { useState, type FunctionComponent } from "react";

type SearchProps = {
    onSearchChange: (value: string) => void; // callback function from parent
};

const Search: FunctionComponent<SearchProps> = ({ onSearchChange }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearchChange(value);
    };

    return (
        <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                className="search-input"
            />
        </div>
    );
};

export default Search;
