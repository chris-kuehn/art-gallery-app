import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
function getData() {
  const { data, isLoading, error } = useSWR(URL);
  if (isLoading) {
    return <h1>... is loading</h1>;
  }

  if (error) {
    return <h1>Error!</h1>;
  }

  console.log("Test", data);
}

getData();
