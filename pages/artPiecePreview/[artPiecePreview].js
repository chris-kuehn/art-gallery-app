import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPiecePreviewRouter({ data }) {
  console.log("yyy", data);

  return <ArtPiecePreview data={data} />;
}
