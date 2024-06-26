import styled from "@emotion/styled";

export const CategoriesTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--green-text-color);
`;

export const TagsDiv = styled.div`
  margin-block: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Tag = styled.div`
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "#214139" : "#213741"};
  color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "#17E99D" : "#35D4F8"};
`;

export const SidebarAside = styled.aside`
  max-width: 300px;
  padding-left: 8px;
  position: sticky;
  background-color: #2f3134;

  width: ${(props: { isSidebarOpen: boolean }) =>
    props.isSidebarOpen ? "100%" : "61px"};
  height: ${(props: { isSidebarOpen: boolean }) =>
    props.isSidebarOpen ? "100vh" : "58px"};
  padding-top: ${(props: { isSidebarOpen: boolean }) =>
    props.isSidebarOpen ? "131px" : "8px"};
  top: ${(props: { isSidebarOpen: boolean }) =>
    props.isSidebarOpen ? "0" : "90px"};
  margin-top: ${(props: { isSidebarOpen: boolean }) =>
    props.isSidebarOpen ? "0" : "131px"};
  transition: 0.3s ease;
  border-radius: ${(props: { isSidebarOpen: boolean }) =>
    props.isSidebarOpen ? "0" : "50%"};
  overflow: hidden;
  overflow-y: ${(props: { isSidebarOpen: boolean }) =>
    props.isSidebarOpen ? "scroll" : ""};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 540px) {
    position: fixed;
    z-index: 4;
    top: 0;
    margin-top: ${(props: { isSidebarOpen: boolean }) =>
      props.isSidebarOpen ? "0" : "70px"};
  }
`;

export const ShowButton = styled.button`
  transform: ${(props: { isSidebarOpen: boolean }) =>
    props.isSidebarOpen ? "rotateZ(180deg)" : ""};
  display: ${(props: { isSidebarOpen: boolean }) =>
    props.isSidebarOpen ? "block" : ""};
  margin-left: auto;
`;

export const DisplaysTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--green-text-color);
`;

export const ButtonsDiv = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 7px;
`;

export const DisplaysBlock = styled.div`
  @media (max-width: 626px) {
    display: none;
  }
`;
