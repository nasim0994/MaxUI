import Header from "../../Header/Header";

export default function Hero() {
  return (
    <section className="hero_wrap">
      <Header />

      <div className="hero_content">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="relative z-40">
              <h1 className="text-5xl font-bold  leading-[55px]">
                We have created{" "}
                <span className="text-primary-after relative">incredible</span>{" "}
                tools to easily design your{" "}
                <span className="text-secondary-after relative">website</span>.
              </h1>

              <div className="mt-6 ">
                <button className="bg-primary-g px-4 py-2 rounded">
                  View Products
                </button>
              </div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 ">
              <img
                src="/images/hero/banner_hand.png"
                alt=""
                className="w-[500px] 2xl:w-[680px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <img src="/images/hero/wave.png" alt="" className="w-full" />
      </div>
    </section>
  );
}
