import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <StyledHeader>
      <SearchBar>
        <input
          type="text"
          placeholder="Search videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          id="search-input"
          name="search-input"
        />
        <button onClick={handleSearch}>Search</button>
      </SearchBar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #202020;
  color: white;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  input {
    padding: 10px;
    flex: 1;
    margin-right: 10px;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    background-color: #f44336;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    font-size: 16px;
    &:hover {
      background-color: #d32f2f;
    }
  }
`;

export default Header;
