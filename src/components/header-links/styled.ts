import styled from "@emotion/styled";

export const LinksNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media(max-width: 540px) {
    display: ${(props: {isOpen: Boolean}) => (props.isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    right: 10px;
    z-index: 2;
    flex-direction: column;
    align-items: end;
  }
`;

const Link = styled.a`
  display: ${(props: {isVisible: Boolean}) => (props.isVisible ? 'flex' : 'none')};
  border-radius: 12px;
  padding: 12px 20px;
  cursor: pointer;
`

export const FavouritesLink = styled(Link)`
  padding: 0;
  display: ${(props: {isVisible: Boolean}) => (props.isVisible ? 'flex' : 'none')};
  align-items: center;
  color: #18E772;
`;

export const FavouritesTitle = styled.span`
  @media(max-width: 680px) {
    display: none;
  }

  @media(max-width: 540px) {
    display: block;
  }
`

export const GradientLink = styled(Link)`
  border-radius: 12px;
  padding: 12px 20px;
  cursor: pointer;
  color: var(--dark-text-color);
  background: rgb(23,233,107);
  background: -moz-linear-gradient(110deg, rgba(23,233,107,1) 0%, rgba(36,215,194,1) 100%);
  background: -webkit-linear-gradient(110deg, rgba(23,233,107,1) 0%, rgba(36,215,194,1) 100%);
  background: linear-gradient(110deg, rgba(23,233,107,1) 0%, rgba(36,215,194,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#17e96b",endColorstr="#24d7c2",GradientType=1);
`;

export const BorderLink = styled(Link)`
  border-radius: 12px;
  padding: 12px 20px;
  cursor: pointer;
  color: #20DCAA;
  border: 1px solid #20DCAA;
`;