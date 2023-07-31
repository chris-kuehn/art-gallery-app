import Image from "next/image";

export default function ArtPieces({ data }) {
  return (
    <>
      <h1>Art Gallerie</h1>
      <ul>
        {data.map((card) => {
          return (
            <li key={card.slug}>
              <Image
                alt={card.name}
                src={card.imageSource}
                width={640}
                height={426}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
