import React from "react";
import { cn } from "@bem-react/classname";
import "./SearchBar.css";

interface SearchBarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const SearchBar = cn("SearchBar");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={SearchBar()}>
      <input
        className={SearchBar("Input")}
        type="text"
        placeholder="Поиск"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
