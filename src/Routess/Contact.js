import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../Assets/2.jpg";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
}

export default Contact;
