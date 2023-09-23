import { Link } from "react-router-dom";
import navigation1 from "/images/components/component.jpg";
import navigation2 from "/images/components/component1.jpg";
import navigation3 from "/images/components/component2.jpg";
import navigation4 from "/images/components/component3.jpg";
import navigation5 from "/images/components/component.jpg";

export default function ComponentList() {
  return (
    <section className="pt-10 md:pt-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-neutral">
            Collection of components
          </h2>
          <h1 className="text-2xl lg:text-4xl font-bold my-2">
            Mix Combinations
          </h1>
          <p className="text-neutral-content lg:w-2/5 mx-auto">
            We have created multiple options for you to put together and
            customise into pixel perfect pages.
          </p>
        </div>

        <div className="mt-16">
          {/* Navigation */}
          <div className="lg:flex gap-8 relative">
            <div className="lg:w-1/5 lg:sticky top-20 self-start mb-6 lg:mb-0 text-center">
              <h2 className="font-bold text-2xl">Navigation</h2>
              <p className="text-neutral-content md:mt-3 text-[17px]">
                20+ Customize Tailwind Responsive Navigation
              </p>
            </div>

            <div className="lg:w-4/5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 component_card">
              <div>
                <Link to="">
                  <img
                    src={navigation2}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation3}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation4}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation5}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation1}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation2}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation3}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation4}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation1}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
            </div>
          </div>

          {/* Layout */}
          <div className="lg:flex gap-8 mt-24 relative">
            <div className="lg:w-1/5 lg:sticky top-20 self-start mb-6 lg:mb-0 text-center">
              <h2 className="font-bold text-2xl">Layout</h2>
              <p className="text-neutral-content md:mt-3 text-[17px]">
                A selection of 45 page sections that fit perfectly in any
                combination
              </p>
            </div>

            <div className="lg:w-4/5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 component_card">
              <div>
                <Link to="">
                  <img
                    src={navigation2}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation3}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation4}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation5}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation1}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation2}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation3}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation4}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation1}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="lg:flex gap-8 mt-24 relative">
            <div className="lg:w-1/5 lg:sticky top-20 self-start mb-6 lg:mb-0 text-center">
              <h2 className="font-bold text-2xl">Actions</h2>
              <p className="text-neutral-content md:mt-3 text-[17px]">
                80+ carefully crafted small elements that come with multiple
                colors and shapes
              </p>
            </div>

            <div className="lg:w-4/5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 component_card">
              <div>
                <Link to="">
                  <img
                    src={navigation2}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation3}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation4}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation5}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
            </div>
          </div>

          {/* Data input */}
          <div className="lg:flex gap-8 mt-24 relative">
            <div className="lg:w-1/5 lg:sticky top-20 self-start mb-6 lg:mb-0 text-center">
              <h2 className="font-bold text-2xl">Data input</h2>
              <p className="text-neutral-content md:mt-3 text-[17px]">
                50+ elements that you need for text manipulation and insertion
              </p>
            </div>

            <div className="lg:w-4/5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 component_card">
              <div>
                <Link to="">
                  <img
                    src={navigation2}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation3}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation4}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation5}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
            </div>
          </div>

          {/* Data display */}
          <div className="lg:flex gap-8 mt-24 relative">
            <div className="lg:w-1/5 lg:sticky top-20 self-start mb-6 lg:mb-0 text-center">
              <h2 className="font-bold text-2xl">Data display</h2>
              <p className="text-neutral-content md:mt-3 text-[17px]">
                80+ carefully crafted small elements that come with multiple
                colors and shapes
              </p>
            </div>

            <div className="lg:w-4/5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 component_card">
              <div>
                <Link to="">
                  <img
                    src={navigation2}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation3}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation4}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img
                    src={navigation5}
                    alt=""
                    className="bg-base-100 rounded-xl p-4 shadow-[0_8px_26px_-4px_#ddd] h-40 w-full"
                  />
                  <h2 className="text-center mt-2 font-semibold text-neutral-content">
                    Page Headers
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
