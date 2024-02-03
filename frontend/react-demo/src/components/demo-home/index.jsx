import { Link } from "@reach/router";

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
          <div className="flex items-center mt-3 justify-center flex-wrap gap-2">
            <Link
              className="bg-gradient-to-br from-teal-500 to-indigo-500 dark:from-teal-400 dark:to-indigo-400 px-3 py-1 rounded-md text-white font-medium active:scale-95 duration-200 text-sm md:text-base"
              to="/todo"
            >
              Todo App
            </Link>
            <Link
              className="bg-gradient-to-br from-teal-500 to-indigo-500 dark:from-teal-400 dark:to-indigo-400 px-3 py-1 rounded-md text-white font-medium active:scale-95 duration-200 text-sm md:text-base"
              to="/product-list"
            >
              Product List
            </Link>
            <Link
              className="bg-gradient-to-br from-teal-500 to-indigo-500 dark:from-teal-400 dark:to-indigo-400 px-3 py-1 rounded-md text-white font-medium active:scale-95 duration-200 text-sm md:text-base"
              to="/calc-app"
            >
              Calculation App
            </Link>
            <Link
              className="bg-gradient-to-br from-teal-500 to-indigo-500 dark:from-teal-400 dark:to-indigo-400 px-3 py-1 rounded-md text-white font-medium active:scale-95 duration-200 text-sm md:text-base"
              to="/contact-list"
            >
              Contact List App
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHome;
