import ArtPieces from "@/components/ArtPieces";
import NavBar from "@/components/NavigationBar";

export default function HomePage({ data }) {
  return (
    <>
      <ArtPieces data={data} />
      <NavBar />
    </>
  );
}
