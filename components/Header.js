import { styled } from "styled-components";

export default function Header() {
  return (
    <>
      <header>
        <StyleHeadline>Art gallery</StyleHeadline>
      </header>
    </>
  );
}

export const StyleHeadline = styled.h1`
  text-align: center;
`;
