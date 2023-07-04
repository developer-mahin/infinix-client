import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto mb-10 px-4">
        <div className="grid lg:grid-cols-12 grid-cols-1">
          <div className="col-span-4 lg:text-center text-start">
            <Link to="/" className="inline-flex items-center">
              <h2 className="text-4xl font-bold text-red-500">LOGO</h2>
            </Link>
            <p className="mt-4 lg:w-[300px] w-full mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              debitis quae eveniet aperiam iste id
            </p>

            <div>
              <div className="flex items-center lg:justify-center justify-start gap-4 mt-4">
                <a
                  className="text-center p-2 rounded-full bg-gray-700 text-lg text-white hover:bg-gray-600 duration-150 hover:text-white"
                  href="https://www.facebook.com/mahin.khan.77398/"
                  target="blank"
                >
                  <FaFacebookF></FaFacebookF>
                </a>

                <a
                  className="text-center p-2 rounded-full bg-gray-700 text-lg text-white hover:bg-gray-600 duration-150 hover:text-white"
                  href="https://twitter.com/MahinKh38241967"
                  target="blank"
                >
                  <FaTwitter></FaTwitter>
                </a>

                <a
                  className="text-center p-2 rounded-full bg-gray-700 text-lg text-white hover:bg-gray-600 duration-150 hover:text-white"
                  href="https://www.linkedin.com/in/md-mahen-khan/"
                  target="blank"
                >
                  <FaLinkedinIn></FaLinkedinIn>
                </a>

                <a
                  className="text-center p-2 rounded-full bg-gray-700 text-lg text-white hover:bg-gray-600 duration-150 hover:text-white"
                  href="https://github.com/developer-mahin"
                  target="blank"
                >
                  <FaGithub></FaGithub>
                </a>

                <a
                  className="text-center p-2 rounded-full bg-gray-700 text-lg text-white hover:bg-gray-600 duration-150 hover:text-white"
                  href="https://www.instagram.com/mahin4263/?hl=en"
                  target="blank"
                >
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-8 md:flex lg:justify-around md:justify-between lg:mt-0 mt-5">
            <div className="lg:mt-0 mt-5">
              <h2 className="text-xl font-semibold text-gray-700">About Us</h2>
              <div>
                <Link to="/" className="block text-gray-600 font-medium my-3">
                  We{"'"}re hiring
                </Link>
                <Link to="/" className="block text-gray-600 font-medium my-3">
                  Our Customer
                </Link>
                <Link to="/" className="block text-gray-600 font-medium my-3">
                  Blog Post{" "}
                </Link>
                <Link to="/" className="block text-gray-600 font-medium my-3">
                  Help & Support
                </Link>
              </div>
            </div>
            <div className="lg:mt-0 mt-5">
              <h2 className="text-xl font-semibold text-gray-700">Community</h2>
              <div>
                <Link to="/" className="block text-gray-600 font-medium my-3">
                  About Us
                </Link>
                <Link to="/" className="block text-gray-600 font-medium my-3">
                  Our Client
                </Link>
                <Link to="/" className="block text-gray-600 font-medium my-3">
                  Legal notice
                </Link>
              </div>
            </div>
            <div className="lg:mt-0 mt-5">
              <h2 className="text-xl font-semibold text-gray-700">Contact</h2>
              <div>
                <a
                  href="tel:+123-456-789"
                  className="block text-gray-600 font-medium my-3"
                >
                  +123-456-789
                </a>
                <Link to="/" className="block text-gray-600 font-medium my-3">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 border-t-2 border-gray-500">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex md:items-center lg:gap-20 gap-3 md:flex-row flex-col ">
            <Link className="md:text-lg text-sm font-medium text-gray-600" to="/">
              Privacy Policy
            </Link>
            <Link className="md:text-lg text-sm font-medium text-gray-600" to="/">
              Terms & Condition
            </Link>
          </div>
          <div>
            <p className="md:text-lg text-sm font-medium text-gray-600">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
