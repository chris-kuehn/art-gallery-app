import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>... is loading</h1>;
  }

  if (error) {
    return <h1>Error!</h1>;
  }

  console.log(data);

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component data={data} {...pageProps} />
      </SWRConfig>
    </>
  );
}
