import React from "react";

import search from "../../assets/icons/search.svg";
import { Button, Container, SearchIcon, SearchInput } from "./styled";

export function Search({searchValue, handleSearchChange}) {
  return (
    <Container>
      <Button type="submit">
        <span>поиск</span>
        <SearchIcon src={search} alt="Поиск" />
      </Button>
      <SearchInput
        type="search"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Найти исполнителя..."
        aria-label="Найти исполнителя"
      />
    </Container>
  );
}
