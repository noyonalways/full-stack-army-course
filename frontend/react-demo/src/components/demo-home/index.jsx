import { Link } from "@reach/router";
import PropTypes from "prop-types";

const CustomLink = ({ path, text }) => {
  return (
    <Link
      className="px-3 py-2 lg:py-1 bg-gradient-to-br from-teal-500 to-indigo-500 dark:from-teal-400 dark:to-indigo-400 rounded-md text-white font-medium active:scale-95 duration-200 text-sm md:text-base"
      to={path}
    >
      {text}
    </Link>
  );
};

CustomLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const UrlLinks = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/todo",
    text: "Todo App",
  },
  {
    id: 3,
    path: "/calc-app",
    text: "Calculation App",
  },
  {
    id: 4,
    path: "/product-list",
    text: "Product List App",
  },
  {
    id: 5,
    path: "/contact-lis",
    text: "Contact List App",
  },
  {
    id: 6,
    path: "/get-user-details",
    text: "Get User Details App",
  },
  {
    id: 7,
    path: "/counter-by-hook",
    text: "Counter App",
  },
  {
    id: 8,
    path: "/fetch-data-by-hook",
    text: "Fetch Data App",
  },
];

const DemoHome = () => {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="container mx-auto h-dvh flex items-center justify-center">
        <div>
          <h1 className="text-5xl space-x-4 font-extrabold lg:text-7xl 2xl:text-8xl text-center">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              React
            </span>

            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              Demo
            </span>
          </h1>
          <p className="text-center lg:text-xl mt-3 text-gray-500 dark:text-gray-400 px-3">
            This is the Starter Demo Project for Practice the React Concepts
          </p>
          <div className="flex flex-col px-3 lg:px-0 lg:flex-row lg:items-center mt-3 lg:justify-center gap-2 lg:max-w-2xl lg:flex-wrap">
            {UrlLinks.map((link) => (
              <CustomLink key={link.id} path={link.path} text={link.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHome;
