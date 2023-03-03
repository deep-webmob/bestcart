import { useState } from "react";
import Carousel from "./Slider";
import Products from "./Products";
import Cards from "./Cards";
import Footer from "./Footer";
import { BsSearch } from "react-icons/bs";

const navigation = [
  { name: "Product", href: "#products" },
  { name: "Electronics", href: "/electronics" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-100 scroll-smooth">
      <nav
        className="flex items-center justify-between bg-cyan-800 px-9 py-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">BestCart</span>
            <img
              className="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt="logo"
            />
          </a>
        </div>

        {/** mobile-view started*/}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
          </button>
        </div>
        {/** mobile-view completed */}

        <div className="hidden lg:flex mr-12">
          <div className="flex">
            <span className="px-2 -mr-1 pt-2 bg-white rounded-l">
              <BsSearch className="flex-none" />
            </span>
            <input
              placeholder="Search here.."
              className="flex-initial focus-visible:outline-none rounded pl-2 py-1 w-72"
            />
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/signup"
            className="text-sm font-semibold leading-6 text-white"
          >
            Sign Up
          </a>
        </div>
      </nav>

      <main className="px-6 pt-6 lg:px-8">
        <Carousel />
        <Products id="products" />
        <Cards />
        <Footer />
      </main>
    </div>
  );
}
