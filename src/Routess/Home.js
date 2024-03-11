import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../Assets/12.jpg";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        HeroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
