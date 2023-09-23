import { Link } from "react-router-dom";
import navigation2 from "/images/pages/page1.jpg";
import navigation3 from "/images/pages/page2.jpg";
import navigation4 from "/images/pages/page3.jpg";

export default function PageList() {
  return (
    <section>
      <div className="pages_wrap my-20">
        <div className="container">
          <div className="lg:flex gap-28 items-center h-[500px]">
            <div className="lg:w-1/3">
              <h1 className="text-4xl font-bold pb-2">
                Full Pages Ready to use your website
              </h1>

              <p className="py-7">
                We created many examples for pages like Signup, Signin, Forgot
                Password, 2FA Authentification and so on. Just choose between a
                Basic Design, an illustration or a cover and you are good to go!
              </p>

              <Link to="docs/pages">
                <button className="px-6 py-2.5 bg-primary-g">More pages</button>
              </Link>
            </div>

            <div className="lg:w-2/3 mt-6 lg:mt-0 rotate-[345deg]">
              <div className="grid sm:grid-cols-3 gap-5 component_card">
                <div className="hidden sm:flex flex-col gap-4">
                  <div>
                    <Link to="">
                      <img
                        src={navigation3}
                        alt=""
                        className="bg-base-100 rounded-xl h-[350px] w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation4}
                        alt=""
                        className="bg-base-100 rounded-xl h-[350px] w-full"
                      />
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-4 lg:mt-[-30px]">
                  <div>
                    <Link to="">
                      <img
                        src={navigation2}
                        alt=""
                        className="bg-base-100 rounded-xl h-[350px] w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation3}
                        alt=""
                        className="bg-base-100 rounded-xl h-[350px] w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation4}
                        alt=""
                        className="bg-base-100 rounded-xl h-[350px] w-full"
                      />
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <Link to="">
                      <img
                        src={navigation2}
                        alt=""
                        className="bg-base-100 rounded-xl h-[350px] w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation3}
                        alt=""
                        className="bg-base-100 rounded-xl h-[350px] w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation3}
                        alt=""
                        className="bg-base-100 rounded-xl h-[350px] w-full"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
