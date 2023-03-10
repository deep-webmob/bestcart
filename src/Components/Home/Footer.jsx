import moment from "moment";
import React from "react";
import { BsFacebook, BsTwitter, BsDribbble } from "react-icons/bs";
import { FaInstagram, FaGithub } from "react-icons/fa";

const FooterTabGroup = ({ heading, children }) => {
  return (
    <div className="col-span-1">
      <p className="font-medium text-gray-900 capitalize">{heading}</p>
      <nav aria-label="Footer Navigation - Services" className="mt-6">
        <ul className="space-y-4 text-sm">{children}</ul>
      </nav>
    </div>
  );
};

const FooterTabs = ({ link, name }) => {
  return (
    <li>
      <a
        href={link}
        className="text-gray-700 transition hover:opacity-75 capitalize"
      >
        {name}
      </a>
    </li>
  );
};

const FooterLinks = ({ link, name }) => {
  return (
    <li>
      <a
        href={link}
        className="text-gray-500 transition hover:opacity-75 capitalize"
      >
        {name}
      </a>
    </li>
  );
};

const SocialMediaIcons = ({ link, icon }) => {
  return (
    <li>
      <a
        href={`../${link}`}
        rel="noreferrer"
        target="_blank"
        className="text-gray-700 transition hover:opacity-75"
      >
        {icon}
      </a>
    </li>
  );
};

function Footer() {
  return (
    <footer aria-label="Site Footer">
      <div className="mx-auto py-16 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-x-12">
          {/**--> div - 1  - Logo*/}
          <div className="text-teal-600">
            <img
              className="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=cyan"
              alt="logo"
            />
          </div>

          {/** --> div - 2 */}
          <div className="mt-8 grid grid-cols-2 lg:mt-0 lg:gap-y-16">
            {/** Get the latest news div */}
            <div className="col-span-5">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Get the latest news!
                </h2>

                <p className="mt-2 text-gray-500">
                  Sign up to our news later to get best offers !!
                </p>
              </div>
            </div>

            {/** Sign Up email */}
            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label for="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="rounded bg-orange-300 p-3 sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full p-2 rounded border-white focus:outline-none sm:text-sm"
                  />

                  <button className="mt-1 w-full bg-cyan-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:flex-shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/** --> div - 3 */}
          <div className="grid grid-cols-5 gap-16">
            {/** Services */}

            <FooterTabGroup heading="online shopping">
              <FooterTabs link="#" name="men" />
              <FooterTabs link="#" name="women" />
              <FooterTabs link="#" name="kids" />
              <FooterTabs link="#" name="home & living" />
              <FooterTabs link="#" name="beauty" />
              <FooterTabs link="#" name="gift cards" />
            </FooterTabGroup>

            <FooterTabGroup heading="Company">
              <FooterTabs link="#" name="about" />
              <FooterTabs link="#" name="meet the team" />
              <FooterTabs link="#" name="accounts review" />
            </FooterTabGroup>

            <FooterTabGroup heading="Helpful Links">
              <FooterTabs link="#" name="blog" />
              <FooterTabs link="#" name="career" />
              <FooterTabs link="#" name="site map" />
            </FooterTabGroup>

            <FooterTabGroup heading="customer policies">
              <FooterTabs link="#" name="Contact Us" />
              <FooterTabs link="#" name="FAQ" />
              <FooterTabs link="#" name="T & C" />
              <FooterTabs link="#" name="Terms of Use" />
            </FooterTabGroup>

            <FooterTabGroup heading="Services">
              <FooterTabs link="#" name="Track Orders" />
              <FooterTabs link="#" name="Shipping" />
              <FooterTabs link="#" name="Cancellation" />
              <FooterTabs link="#" name="Returns" />
              <FooterTabs link="#" name="Privacy Policy" />
            </FooterTabGroup>

            {/** Social media icons */}
            <ul className="flex justify-center col-span-5 gap-8">
              <SocialMediaIcons
                link="www.facebook.com"
                icon={<BsFacebook className="h-6 w-6" />}
              />
              <SocialMediaIcons
                link="www.instagram.com"
                icon={<FaInstagram className="h-6 w-6" />}
              />
              <SocialMediaIcons
                link="www.twitter.com"
                icon={<BsTwitter className="h-6 w-6" />}
              />
              <SocialMediaIcons
                link="www.github.com"
                icon={<FaGithub className="h-6 w-6" />}
              />
              <SocialMediaIcons
                link="www.dribbble.com"
                icon={<BsDribbble className="h-6 w-6" />}
              />
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; {moment().format("YYYY")}. Company Name. All rights
              reserved.
            </p>

            <nav
              aria-label="Footer Navigation - Support"
              className="mt-8 sm:mt-0"
            >
              <ul className="flex flex-wrap justify-start gap-4 text-xs lg:justify-end">
                <FooterLinks link="#" name="terms and conditions" />
                <FooterLinks link="#" name="privacy policy" />
                <FooterLinks link="#" name="cookies" />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
