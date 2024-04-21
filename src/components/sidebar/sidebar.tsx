import React, { useState } from "react";

import { Categories } from "./categories";
import { Displays } from "./displays";

import arrow from "../../assets/icons/arrow.svg";
import { ShowButton, SidebarAside } from "./styled";

export function Sidebar({selectedTags, onSelect}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  const handleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarAside isSidebarOpen={isSidebarOpen}>
      <ShowButton isSidebarOpen={isSidebarOpen}
        onClick={handleSidebarClick}
      >
        <img src={arrow} title="Боковая панель" alt="Боковая панель" />
      </ShowButton>
      <Categories selectedTags={selectedTags} setSelectedTags={onSelect}/>
      <Displays />
    </SidebarAside>
  );
}
