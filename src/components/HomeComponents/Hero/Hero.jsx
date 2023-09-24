import Header from "../../Header/Header";

export default function Hero() {
  return (
    <section className="hero_wrap h-[90vh] lg:h-screen">
      <Header />

      <div className="hero_content">
        <div className="container">
          <div className="grid md:grid-cols-2">
            <div className="relative z-40 -mt-60 md:-mt-28 sm:w-2/3 md:w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-[55px]">
                We have created{" "}
                <span className="text-primary-after relative">incredible</span>{" "}
                tools to easily design your{" "}
                <span className="text-secondary-after relative">website</span>.
              </h1>

              <div className="mt-3 sm:mt-6">
                <button className="bg-primary-g px-4 py-2 rounded">
                  Get Started
                </button>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 md:top-1/2 md:-translate-y-1/2 ">
              <img
                src="/images/hero/banner_hand.png"
                alt=""
                className="w-96 md:w-[450px] lg:w-[500px] 2xl:w-[680px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero_wave"></div>
    </section>
  );
}
