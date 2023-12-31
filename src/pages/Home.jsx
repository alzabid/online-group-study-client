import { Link } from "react-router-dom";
import Container from "../components/Container";
import Features from "../components/Features";
import Faq from "../components/Faq";
import Title from "../components/Title";


const Home = () => {
    return (
      <Container>
        <div className="flex flex-col md:flex-row lg:py-16 px-6 gap-10">
          <div className="flex-1 flex flex-col justify-between py-14  ">
            <Title>Online Group Study</Title>
            <p className="text-justify my-5 max-w-[65ch]">
              An online group study website is a virtual platform designed to
              facilitate collaborative learning and study sessions among
              students or individuals with common educational goals. It
              typically offers work together on academic assignments, projects,
              or exam preparation. These websites promote a sense of community
              and accountability while providing a flexible and accessible
              environment for productive group study sessions.
            </p>
            <div className="flex gap-5">
              <Link to="/create" className="btn btn-sm lg:btn-md btn-outline">
                Create Assignment
              </Link>
              <Link to="/" className="btn btn-sm lg:btn-md btn-outline">
                Explore More
              </Link>
            </div>
          </div>
          <div className="h-[600px] w-ful flex-1 overflow-hidden ">
            <img
              src="/img/banner.png"
              alt="landing"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <Features></Features>
        <Faq></Faq>
      </Container>
    );
};

export default Home;