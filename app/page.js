import About from "./components/About";
import ChairmanMessage from "./components/ChairmanMessage";
import Ecosystem from "./components/Ecosystem";
import Media from "./components/Media";
import Vision from "./components/Vision";
import Hero from "./components/Hero";
import Stats from "./components/stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />

      <ChairmanMessage />
      <Ecosystem />
      <Vision />
      <Media />
    </>
  );
}
