import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export default function ArtPieces({ data }) {
  console.log(data);

  return (
    <>
      <h1>Art Gallerie</h1>
      <StyledUl>
        {data.map((card) => {
          return (
            <li key={card.slug}>
              <ImageWrapper>
                {/* <Link title="Click for full screen view!"> */}
                <StyledImage
                  alt={card.name}
                  src={card.imageSource}
                  width={640}
                  height={426}
                />
                {/* </Link> */}
                <h2>{card.name}</h2>
                <h3> by {card.artist}</h3>
              </ImageWrapper>
            </li>
          );
        })}
      </StyledUl>
    </>
  );
}

const ImageWrapper = styled.span`
  margin: 32px auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: auto;
  max-width: 400px;
  text-align: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  max-width: 400px; /* Set the image to take up 100% of the width of the container */
  height: auto; /* Let the height adjust automatically to maintain the aspect ratio */
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;
