import Link from "next/link";
import { styled } from "styled-components";

export default function NavBar() {
  return (
    <>
      <NavBarWrapperUl>
        <StyledLink href={"/Subpages/Spotlight"}>
          <StyledLi>Spotlight</StyledLi>
        </StyledLink>

        <StyledLink href={"/"}>
          <StyledLi>Art pieces</StyledLi>
        </StyledLink>

        <StyledLink href={"/Subpages/Favorite"}>
          {" "}
          <StyledLi>Favorites</StyledLi>
        </StyledLink>
      </NavBarWrapperUl>
    </>
  );
}

const NavBarWrapperUl = styled.ul`
  display: flex;
  position: fixed;
  bottom: 0;
  list-style: none;
  justify-content: space-between;

  margin: auto;
  align-items: center;
  width: 100%;
  padding: 0;
`;

const StyledLi = styled.li`
  padding: 1rem;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #fff5ec;
  &:hover {
    background-color: black;
    transition-duration: 400ms;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #ff7e65;
`;
