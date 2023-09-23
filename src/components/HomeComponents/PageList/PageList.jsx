import { Link } from "react-router-dom";
import navigation2 from "/images/components/component.jpg";
import navigation3 from "/images/components/component1.jpg";
import navigation4 from "/images/components/component2.jpg";

export default function PageList() {
  return (
    <section>
      <div className="bg-gradient-to-r from-[#141727] to-[#3a416f] p-6 rounded-xl mt-32 m-4">
        <div className="w-[90%] xl:w-[1180px] mx-auto text-base-100">
          <div className="lg:flex gap-28 items-center">
            <div className="lg:w-1/3">
              <h2 className="primary-text-gradient text-4xl font-bold pb-2">
                Full Pages
              </h2>
              <h3 className="text-3xl font-semibold">
                Ready to use your <br /> website
              </h3>

              <p className="py-8">
                We created many examples for pages like Signup, Signin, Forgot
                Password, 2FA Authentification and so on. Just choose between a
                Basic Design, an illustration or a cover and you are good to go!
              </p>

              <Link to="docs/pages">
                <button className="text-xs font-bold px-6 py-2.5 rounded-lg primary-bg-gradient uppercase scale-button">
                  More pages
                </button>
              </Link>
            </div>
            <div className="lg:w-2/3 mt-6 lg:mt-0">
              <div className="grid sm:grid-cols-3 gap-6 component_card lg:mt-[-60px]">
                <div className="hidden sm:flex flex-col gap-4">
                  <div>
                    <Link to="">
                      <img
                        src={navigation2}
                        alt=""
                        className="bg-base-100 rounded-xl h-32 w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation3}
                        alt=""
                        className="bg-base-100 rounded-xl  h-32 w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation4}
                        alt=""
                        className="bg-base-100 rounded-xl  h-32 w-full"
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
                        className="bg-base-100 rounded-xl  h-32 w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation3}
                        alt=""
                        className="bg-base-100 rounded-xl  h-32 w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation4}
                        alt=""
                        className="bg-base-100 rounded-xl  h-32 w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation4}
                        alt=""
                        className="bg-base-100 rounded-xl  h-32 w-full"
                      />
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <Link to="">
                      <img
                        src={navigation2}
                        alt=""
                        className="bg-base-100 rounded-xl  h-32 w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation3}
                        alt=""
                        className="bg-base-100 rounded-xl  h-32 w-full"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="">
                      <img
                        src={navigation4}
                        alt=""
                        className="bg-base-100 rounded-xl  h-32 w-full"
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
