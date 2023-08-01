import { useRouter } from "next/router";

export default function ArtPiecePreview({ data }) {
  const router = useRouter();

  const currentCard = data.find((card) => card.slug === router.query);

  console.log("ydfj");

  return (
    <>
      <Image></Image>
    </>
  );
}
