import React from "react";
import { cn } from "@bem-react/classname";
import "./SearchBar.css";

const SearchBar: React.FC = ({}) => {
  const SearchBar = cn("SearchBar");

  return (
    <div className={SearchBar()}>
      <input className={SearchBar("Input")} type="text" placeholder="Поиск" />
    </div>
  );
};

export default SearchBar;
