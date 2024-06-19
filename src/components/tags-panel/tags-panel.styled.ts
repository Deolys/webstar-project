import styled from '@emotion/styled';

export const StyledTagsPanel = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: auto;
`;
  
export const Tag = styled.span`
    margin: 0.25rem 0.5rem;
    height: 2.25rem;
    padding: 0 1rem;
    font-size: 1.125rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "#214139" : "#213741"};
    color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "#17E99D" : "#35D4F8"};
    cursor: pointer;
`;
  