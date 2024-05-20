import styled from '@emotion/styled';

export const StyledTagsPanel = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0rem 5.874rem;
    justify-content: flex-start;
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
    background-color: ${(props: { isSelected: Boolean }) =>
    props.isSelected ? "#214139" : "#213741"};
    color: ${(props: { isSelected: Boolean }) =>
    props.isSelected ? "#17E99D" : "#35D4F8"};
    cursor: ${(props: { isSelected: Boolean }) => 
    props.isSelected? "default" : "pointer"};
`

export const RemoveTagBtn = styled.div`
    margin: auto;
    margin-right: -1rem;
    margin-left: 0.5rem;
    align-self:center;
`;
  