import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  function toggleFavorite(slug) {
    const artPieceInfo = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPieceInfo) {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) =>
          piece.slug === slug ? { slug, isFavorite: !piece.isFavorite } : piece
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  if (isLoading) {
    return <h1>... is loading</h1>;
  }

  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          data={data}
          {...pageProps}
          artPiecesInfo={artPiecesInfo}
          toggleFavorite={toggleFavorite}
        />
      </SWRConfig>
    </>
  );
}
