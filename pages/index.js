import ArtPieces from "@/components/ArtPieces";
import NavBar from "@/components/NavigationBar";

export default function HomePage({ data, artPiecesInfo, toggleFavorite }) {
  return (
    <>
      <ArtPieces
        data={data}
        artPiecesInfo={artPiecesInfo}
        toggleFavorite={toggleFavorite}
      />
      <NavBar />
    </>
  );
}
