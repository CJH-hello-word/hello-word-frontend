import React from "react";

import styled from "styled-components";

export default function SearchBar({ handleSearchTerm, searchInputValue }) {
  const handleSearchInput = (event) => {
    handleSearchTerm(event);
  };

  return (
    <SearchBarWrapper>
      <SearchBarInput
        onChange={handleSearchInput}
        value={searchInputValue}
        placeholder="메모 제목을 검색하세요"
        data-testid="search-bar-input"
      />
      <SearchBarButton data-testid="search-bar-button">검색</SearchBarButton>
    </SearchBarWrapper>
  );
}
const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 2px;
  margin-top: 10px;
  margin-right: auto;
`;

const SearchBarInput = styled.input`
  border: 1px solid #0d6efd;
  border-radius: 10px;
  outline: none;
  width: 300px;
`;

const SearchBarButton = styled.div`
  padding: 0.5rem 1rem;

  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: 70px;
  border: none;
  border-radius: 4px;
  background-color: #0d6efd;
  color: #ffffff;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
