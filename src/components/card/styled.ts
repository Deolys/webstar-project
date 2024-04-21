import styled from "@emotion/styled";

export const CardArticle = styled.article`
  position: relative;
  border-radius: 20px;
  background-color: #313642;
  -webkit-box-shadow: 0px 4px 18px 5px rgba(59, 84, 108, 0.1);
  -moz-box-shadow: 0px 4px 18px 5px rgba(59, 84, 108, 0.1);
  box-shadow: 0px 4px 18px 5px rgba(59, 84, 108, 0.1);
`;
export const FavouriteDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const FavouriteIcon = styled.img`
  background-color: rgba(47, 49, 52, 0.7);
  border-radius: 0 20px;
`;

export const ImageDiv = styled.div`
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const CardImage = styled.img`
  height: 260px;
  width: 100%;
  object-fit: cover;
  @media (max-width: 540px) {
    height: 300px;
  }
`;

export const Title = styled.h3`
  font-size: clamp(1rem, 0.85rem + 0.44vw, 1.25rem); //16-20px 540-1440px
  font-weight: 400;
`;

export const DescDiv = styled.div`
  padding: 12px 20px 20px;
`;

export const TagsDiv = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    gap: 8px;
  }
`;

export const Tag = styled.div`
  padding: 2px 10px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 15px;
  background-color: ${(props: { isSelected: Boolean }) =>
    props.isSelected ? "#214139" : "#213741"};
  color: ${(props: { isSelected: Boolean }) =>
    props.isSelected ? "#17E99D" : "#35D4F8"};
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;
