import { useRouter } from "next/router";
import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ImageWrapper } from ".";

export default function ArtPiecePreviewRouter({ data }) {
  const router = useRouter();

  const currentSlug = router.query.artPiecePreview;

  const currentCard = data.find((card) => card.slug === currentSlug);

  console.log(currentCard);
  console.log(data);

  if (!currentCard) {
    return <h1>This movie doesnt exist</h1>;
  }

  const { imageSource, name, artist } = currentCard;

  return (
    <>
      <ImageWrapper>
        <h1>Artist: {artist}</h1>
        <h2>name: {name}</h2>

        <Link href={"/artPiecePreview"}>
          <StyledImage src={imageSource} alt={name} width={640} height={426} />
        </Link>
      </ImageWrapper>
    </>
  );
}

const StyledImage = styled(Image)`
  width: 100%;
  max-width: 400px; /* Set the image to take up 100% of the width of the container */
  height: auto; /* Let the height adjust automatically to maintain the aspect ratio */
`;
