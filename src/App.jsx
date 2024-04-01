import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import FeatureSection from "./Components/FeatureSection";
import Description from "./Components/Description";
import Artist from "./Components/Artist";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Description />
        <FeatureSection />
        <Artist />
      </div>
    </>
  );
};

export default App;
