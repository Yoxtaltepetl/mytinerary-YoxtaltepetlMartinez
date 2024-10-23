import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="hero" className="hero relative bg-[url(https://aeromexico.com/cms/sites/default/files/blogdeviajes_acapulco01.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className=" max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-3xl font-extrabold text-rose-600 mb-12 sm:text-5xl">
            My Tinerary
          </h2>

          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-rose-500">
              Next Travel.
            </strong>
          </h2>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <NavLink to="/cities" className="w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring sm:w-auto">
              Get Started
            </NavLink>

            <a href="#carousel" className=" w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring sm:w-auto">
              Popular
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
