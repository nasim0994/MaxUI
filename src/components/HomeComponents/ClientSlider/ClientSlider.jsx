import { FaStar } from "react-icons/fa";
import { MdNavigateNext, MdKeyboardArrowLeft } from "react-icons/md";

export default function ClientSlider() {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div className="w-[400px] h-[400px]">
            <div className="relative border border-dashed rounded-full w-full h-full border-primary/30 flex justify-center items-center">
              <div>
                <div className="payment_img top-[12%] left-4 w-16 h-16">
                  <img
                    src="https://i.ibb.co/znwrX5c/na.jpg"
                    alt=""
                    className="rounded-full"
                  />
                </div>

                <div className="payment_img bottom-10 left-8 w-16 h-16">
                  <img
                    src="https://i.ibb.co/znwrX5c/na.jpg"
                    alt=""
                    className="rounded-full"
                  />
                </div>

                <div className="payment_img top-0 right-20 w-16 h-16">
                  <img
                    src="https://i.ibb.co/znwrX5c/na.jpg"
                    alt=""
                    className="rounded-full"
                  />
                </div>

                <div className="payment_img top-1/2 -translate-y-1/2 -right-10 w-20 h-20">
                  <img
                    src="https://i.ibb.co/znwrX5c/na.jpg"
                    alt=""
                    className="rounded-full"
                  />
                </div>

                <div className="payment_img bottom-2 right-[15%] w-16 h-16">
                  <img
                    src="https://i.ibb.co/znwrX5c/na.jpg"
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="rounded-full w-[50%] h-[50%] flex text-center items-center bg-base-100 shadow-lg">
                <h1 className="text-3xl font-bold">
                  <p className="text-primary">350+</p> Happy Clients
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-base-100 rounded-xl shadow-lg p-4">
            <div className="flex gap-1 text-lg text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="mt-4 text-neutral-content dark:text-gray-400  text-[15px]">
              "Your company is truly upstanding and is behind its product 100%.
              It's the perfect solution for our business. It has really helped
              our business. We're loving it. This is simply unbelievable! I like
              it more and more each day because it makes my life a lot easier."
            </p>

            <div className="flex items-end justify-between">
              <div className="w-max p-3 rounded-xl shadow-lg mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src="https://i.ibb.co/znwrX5c/na.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />

                  <div>
                    <h2>Nasim Uddin</h2>
                    <p className="text-sm text-neutral-content dark:text-gray-400 ">
                      Front-End Developer
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mb-2">
                <button className="bg-primary-g p-1 text-xl">
                  <MdKeyboardArrowLeft />
                </button>
                <button className="bg-primary-g p-1 text-xl">
                  <MdNavigateNext />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
