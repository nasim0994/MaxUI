import { useEffect } from "react";
import { Link } from "react-router-dom";

import { FaBook, FaCode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiTimer } from "react-icons/bi";
import { MdOutlineMobileFriendly } from "react-icons/md";

import VanillaTilt from "vanilla-tilt";

export default function Services() {
  useEffect(() => {
    VanillaTilt.init(document.querySelector(".service-card"), {
      max: 10,
      speed: 400,
    });
  }, []);

  return (
    <section className="lg:px-20 py-5">
      <div className="container lg:flex gap-28">
        <div className="lg:w-3/5">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-20">
            <div>
              <FaBook className="text-primary text-2xl" />
              <h2 className="text-neutral text-xl font-bold my-3">
                Full Documentation
              </h2>
              <p className="text-neutral-content">
                Built by developers for developers. Check the foundation and you
                will find everything inside our documentation.
              </p>
            </div>

            <div>
              <SiTailwindcss className="text-primary text-3xl" />
              <h2 className="text-neutral text-xl font-bold my-3">
                Tailwind CSS Class
              </h2>
              <p className="text-neutral-content">
                The world’s most popular front-end open source toolkit,
                featuring Sass variables and mixins.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-20 mt-6 sm:mt-14">
            <div>
              <BiTimer className="text-primary text-3xl" />
              <h2 className="text-neutral text-xl font-bold my-3">Save Time</h2>
              <p className="text-neutral-content">
                Creating your design from scratch with dedicated designers can
                be very expensive. Start with our Design System.
              </p>
            </div>

            <div>
              <MdOutlineMobileFriendly className="text-primary text-3xl" />
              <h2 className="text-neutral text-xl font-bold my-3">
                Tailwind CSS Class
              </h2>
              <p className="text-neutral-content">
                The world’s most popular front-end open source toolkit,
                featuring Sass variables and mixins.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 mt-6 lg:mt-0">
          <div className="service-card text-base-100 text-center p-16">
            <span className="text-4xl">
              <FaCode />
            </span>
            <h2 className="text-2xl font-bold pt-6 pb-10">
              Feel the <br /> MaxUI <br /> Design System
            </h2>
            <Link to="docs/documentation" className="w-full">
              <button className="border rounded-full py-2 w-full text-xs uppercase font-semibold bg-[hsla(0,0%,100%,.1)] hover:bg-transparent duration-300 opacity-80">
                Get Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
