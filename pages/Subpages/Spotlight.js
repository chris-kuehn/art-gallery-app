import HomeSpotLight from "@/components/HomeSpotLight";
import NavBar from "@/components/NavigationBar";

export default function SpotLight({ data }) {
  return (
    <>
      <HomeSpotLight data={data} />
      <NavBar />
    </>
  );
}
