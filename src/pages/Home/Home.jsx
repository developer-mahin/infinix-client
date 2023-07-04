import Blog from "./Blog";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import ServiceSection from "./ServiceSection";
import Success from "./Success";
import Testimonial from "./Testimonial";
import TriagesoftSection from "./TriagesoftSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <TriagesoftSection />
      <Portfolio />
      <Success />
      <Testimonial />
      <Blog />
    </div>
  );
};

export default Home;
