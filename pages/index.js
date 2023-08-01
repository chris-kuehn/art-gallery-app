import ArtPieces from "@/components/ArtPieces";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import ArtPiecePreviewRouter from "./artPiecePreview/[artPiecePreview]";

export default function HomePage({ data }) {
  return (
    <>
      <ArtPiecePreviewRouter data={data} />
    </>
  );
}

// this looks good
