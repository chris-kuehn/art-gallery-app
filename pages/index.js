import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(URL);
  console.log(data);
  if (isLoading) {
    return <h1>... is loading</h1>;
  }

  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <>
      <ArtPieces data={data} />
    </>
  );
}
