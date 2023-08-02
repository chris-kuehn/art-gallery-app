import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import Header from "./Header";
import HeartIcon from "./HeartIcon";

export default function ArtPieces({ data, artPiecesInfo, toggleFavorite }) {
  // function hanldeHeartIcon(slug) {
  //   let favoriteImg = data.map((card) => card.slug === slug);

  //   if (!favoriteImg) {
  //     setArtPiecesInfo(...favoriteImg);
  //   } else {
  //     setArtPiecesInfo({ ...favoriteImg, color: "rgb(191, 46, 80" });
  //   }

  return (
    <>
      <Header />
      <StyledUl>
        {data.map((card) => {
          return (
            <li key={card.slug}>
              <ImageWrapper>
                {/* <Link href={`/Subpages/${card.slug}`}> */}
                <PicWrapper>
                  <HeartIcon
                    onClick={() => toggleFavorite(card.slug)}
                    width="50px"
                    height="50px"
                    color={
                      artPiecesInfo.find((piece) => piece.slug === card.slug)
                        ?.isFavorite
                        ? "rgb(191, 46, 80)"
                        : "transparent"
                    }
                    strokeColor="rgb(191, 46, 80)"
                  />
                  <StyledImage
                    alt={card.name}
                    src={card.imageSource}
                    width={640}
                    height={426}
                  />
                </PicWrapper>
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

export const ImageWrapper = styled.span`
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

export const StyledImage = styled(Image)`
  width: 100%;
  max-width: 400px; /* Set the image to take up 100% of the width of the container */
  height: auto; /* Let the height adjust automatically to maintain the aspect ratio */
`;

export const StyledUl = styled.ul`
  list-style-type: none;
`;

const PicWrapper = styled.div`
  position: relative;
`;
