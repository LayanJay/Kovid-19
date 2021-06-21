import { FiGithub, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-pink-base h-36">
      <div className="max-w-7xl mx-auto font-primary text-white h-full p-4 sm:p-8 flex items-center justify-between">
        <div>
          <p className="font-semibold mb-3">Project by Layan Jayasinghe</p>
          <div className="inline-flex space-x-3">
            <a target="_blank" href="https://github.com/LayanJay">
              <FiGithub
                className="w-7 h-7 text-white hover:text-pink-dark transition ease-in duration-200"
                aria-hidden="true"
              />
            </a>
            <a target="_blank" href="https://twitter.com/__x__LEO__x__">
              <FiTwitter
                className="w-7 h-7 text-white hover:text-pink-dark transition ease-in duration-200"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
        <p className="font-medium text-right">#CoronaVirus #Covid19</p>
      </div>
    </footer>
  );
};

export default Footer;
