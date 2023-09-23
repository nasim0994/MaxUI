import Header from "../../Header/Header";

export default function Hero() {
  return (
    <section className="hero_wrap">
      <Header />

      <div className="hero_content">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="relative z-40 -mt-28">
              <h1 className="text-5xl font-bold  leading-[55px]">
                We have created{" "}
                <span className="text-primary-after relative">incredible</span>{" "}
                tools to easily design your{" "}
                <span className="text-secondary-after relative">website</span>.
              </h1>

              <div className="mt-6 ">
                <button className="bg-primary-g px-4 py-2 rounded">
                  Get Started
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fbfdff"
                fillOpacity="1"
                d="M0,160L80,181.3C160,203,320,245,480,266.7C640,288,800,288,960,266.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </svg>
        </svg>
      </div>
    </section>
  );
}
