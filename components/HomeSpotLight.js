import { ImageWrapper, StyledImage } from "./ArtPieces";
import Header from "./Header";

export default function HomeSpotLight({ data }) {
  function getRandomImage(max) {
    return Math.floor(Math.random() * max);
  }

  const maxNumber = data.length - 1;

  let randomNumber = getRandomImage(maxNumber);
  let randomImage = data[randomNumber];
  const { artist, imageSource, name } = randomImage;
  console.log(data);
  return (
    <>
      <Header />
      <h2>Picutre of the day</h2>
      <ImageWrapper>
        <StyledImage alt={name} src={imageSource} width={640} height={426} />

        <h2>{name}</h2>
        <h3> by {artist}</h3>
      </ImageWrapper>
    </>
  );
}
