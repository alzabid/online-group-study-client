import { GrFacebook, GrTwitter, GrLinkedin } from "react-icons/gr";
import Container from "./Container";

const Footer = () => {
  return (
    <Container>
      <footer className="footer p-10 bg-base-100 text-base-content">
        <div>
          <h1 className="text-3xl font-bold mb-2">Online Group Study</h1>
          <p className="lg:w-[600px] md:text-justify">
            An online group study website is a virtual platform designed to
            facilitate collaborative learning and study sessions among students
            or individuals with common educational goals. It typically offers
            work together on academic assignments, projects, or exam
            preparation. These websites promote a sense of community and
            accountability while providing a flexible and accessible environment
            for productive group study sessions.
          </p>
        </div>
        <nav>
          <div className="space-y-4">
            <h1 className="text-xl font-bold mb-2">Navigations</h1>
            <div className="flex items-center gap-2">
              <div className="bg-accent w-4 h-4 rounded-full grid place-content-center">
                <div className="bg-white w-2 h-2 rounded-full"></div>
              </div>
              <p className="cursor-pointer hover:underline font-medium">FAQs</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-accent w-4 h-4 rounded-full grid place-content-center">
                <div className="bg-white w-2 h-2 rounded-full"></div>
              </div>
              <p className="cursor-pointer hover:underline font-medium">
                Privacy Policy
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-accent w-4 h-4 rounded-full grid place-content-center">
                <div className="bg-white w-2 h-2 rounded-full"></div>
              </div>
              <p className="cursor-pointer hover:underline font-medium">
                Terms & Conditions
              </p>
            </div>
          </div>
        </nav>
        <nav>
          <div className="space-y-4">
            <h1 className="text-xl font-bold mb-2">Company</h1>
            <div className="flex items-center gap-2">
              <div className="bg-accent w-4 h-4 rounded-full grid place-content-center">
                <div className="bg-white w-2 h-2 rounded-full"></div>
              </div>
              <p className="cursor-pointer hover:underline font-medium">
                About
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-accent w-4 h-4 rounded-full grid place-content-center">
                <div className="bg-white w-2 h-2 rounded-full"></div>
              </div>
              <p className="cursor-pointer hover:underline font-medium">Team</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-accent w-4 h-4 rounded-full grid place-content-center">
                <div className="bg-white w-2 h-2 rounded-full"></div>
              </div>
              <p className="cursor-pointer hover:underline font-medium">
                Contact
              </p>
            </div>
          </div>
        </nav>
        <nav>
          <div className="space-y-2">
            <h1 className="text-xl font-bold mb-2">Contact Information</h1>
            <p className="font-medium">Sector-7,Uttra, Dhaka 1212.</p>
            <p className="font-medium">+019 123 456 78</p>
            <p className="font-medium">info@cleanco.com</p>
            <div className="flex gap-5 text-3xl">
              <GrFacebook className="cursor-pointer" />
              <GrLinkedin className="cursor-pointer" />
              <GrTwitter className="cursor-pointer" />
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 Clean Co. | Powered by Clean Co.</p>
        </aside>
      </footer>
    </Container>
  );
};

export default Footer;
