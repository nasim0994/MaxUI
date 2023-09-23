import responsive from "/images/benefit/responsive.png";
import dark from "/images/benefit/dark.png";
import customizable from "/images/benefit/customizable.png";
import combo from "/images/benefit/combo.png";

export default function Benefits() {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="md:flex gap-10 items-center">
          <div className="md:w-1/3 text-center mb-6 md:mb-0">
            <h2 className="text-neutral font-bold text-2xl md:text-3xl">
              What is the benefit <br /> of using MaxUI?
            </h2>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <img src={responsive} alt="" className="w-14 h-14" />
              <div>
                <h2 className="text-neutral text-lg font-semibold">
                  Responsive Design
                </h2>
                <p className="text-sm text-neutral-content">
                  Build fully responsive user interfaces that adapt to any
                  screen size using responsive modifiers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={dark} alt="" className="w-14 h-14" />
              <div>
                <h2 className="text-neutral text-lg font-semibold">
                  Dark Mode
                </h2>
                <p className="text-sm text-neutral-content">
                  Optimize your site for dark mode directly in your HTML using
                  the dark mode modifier.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={customizable} alt="" className="w-14 h-14" />
              <div>
                <h2 className="text-neutral text-lg font-semibold">
                  Customizable
                </h2>
                <p className="text-sm text-neutral-content">
                  Customize the framework to match your website with your own
                  custom styles.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={combo} alt="" className="w-14 h-14" />
              <div>
                <h2 className="text-neutral text-lg font-semibold">
                  Combo pack
                </h2>
                <p className="text-sm text-neutral-content">
                  Get customized components from different libraries in one
                  place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
