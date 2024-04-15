import React from "react";

import search from "../../assets/icons/search.svg";
import { Button, Container, SearchIcon, SearchInput } from "./styled";

export function Search() {
  return (
    <Container>
      <Button type="submit">
        <span>поиск</span>
        <SearchIcon src={search} alt="Поиск" />
      </Button>
      <SearchInput
        type="text"
        placeholder="Найти исполнителя..."
        aria-label="Найти исполнителя"
      />
    </Container>
  );
}
