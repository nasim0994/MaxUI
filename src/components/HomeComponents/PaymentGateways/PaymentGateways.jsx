import { Link } from "react-router-dom";

export default function PaymentGateways() {
  return (
    <section className="py-10 ">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div>
            <div className="w-[450px] h-[450px]">
              <div className="relative border rounded-full w-full h-full border-primary/30 flex justify-center items-center">
                <div>
                  <div className="payment_img payment_y_animation top-[12%] left-2 w-20 h-20">
                    <img src="/images/payment/payment5.png" alt="" />
                  </div>

                  <div className="payment_img payment_y_animation bottom-6 left-8 w-20 h-20">
                    <img src="/images/payment/payment6.png" alt="" />
                  </div>

                  <div className="payment_img payment_y_animation -top-5 right-20 w-24 h-24">
                    <img src="/images/payment/payment8.png" alt="" />
                  </div>

                  <div className="payment_img  top-1/2 -translate-y-1/2 -right-10 w-20 h-20">
                    <img src="/images/payment/payment8.png" alt="" />
                  </div>

                  <div className="payment_img bottom-0 right-[15%] w-20 h-20">
                    <img src="/images/payment/payment7.png" alt="" />
                  </div>
                </div>

                <div className="relative border rounded-full w-[70%] h-[70%] flex justify-center items-center">
                  <div>
                    <div className="payment_img payment_inner_img  -top-5 left-1/3 -translate-x-1/2">
                      <img src="/images/payment/payment1.png" alt="" />
                    </div>

                    <div className="payment_img payment_inner_img  top-1/2 -left-5 -translate-y-1/2">
                      <img src="/images/payment/payment2.png" alt="" />
                    </div>

                    <div className="payment_img payment_inner_img payment_y_animation top-2/3 -right-2 ">
                      <img src="/images/payment/payment3.png" alt="" />
                    </div>

                    <div className="payment_img payment_inner_img -bottom-5 left-1/2 -translate-x-1/2">
                      <img src="/images/payment/payment4.png" alt="" />
                    </div>
                  </div>

                  <div className="rounded-full w-[50%] h-[50%] flex justify-center items-center bg-base-100 shadow-lg">
                    <img
                      src="/images/payment/payment.png"
                      alt=""
                      className="w-[90%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="w-max">
                <div className="bg-gray-300 rounded p-2 relative">
                  <img
                    src="/images/payment/payment0.png"
                    alt=""
                    className="w-[122px] absolute -top-4 -left-8"
                  />

                  <div className="flex gap-2 ml-24">
                    <img
                      src="/images/payment/Visa.png"
                      alt=""
                      className="w-12"
                    />
                    <img
                      src="/images/payment/Mastercard.png"
                      alt=""
                      className="w-12"
                    />
                    <img
                      src="/images/payment/JCB.png"
                      alt=""
                      className="w-12"
                    />
                    <img
                      src="/images/payment/Amex.png"
                      alt=""
                      className="w-12"
                    />
                    <img
                      src="/images/payment/Discover.png"
                      alt=""
                      className="w-12"
                    />
                    <img
                      src="/images/payment/wu.jpg"
                      alt=""
                      className="w-12 rounded"
                    />
                  </div>
                </div>
                <h1 className="text-end text-primary text-xs">
                  * Almost every card supports entire the world
                </h1>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-3xl font-bold">
                30+ International Payment Gateways Support
              </h1>

              <p className="mt-6 text-sm text-neutral-content">
                Manage your eCommerce self managed or multi vendor with huge
                features like amazon, daraz, rich vendor or merchant feature,
                central product management system with lots of cool features
                included.
              </p>

              <div className="mt-10">
                <Link to="" className="bg-primary-g px-5 py-2.5">
                  More Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
