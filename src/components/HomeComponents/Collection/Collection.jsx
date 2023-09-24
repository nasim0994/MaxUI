export default function Collection() {
  return (
    <section className="pt-20 sm:pt-40 pb-14">
      <div className="container">
        <div className="bg-primary rounded p-4 relative">
          <div className="flex gap-4 items-center w-2/3">
            <img
              src="/images/collection/collection.png"
              alt=""
              className="w-12"
            />

            <div className="text-base-100">
              <h1 className="font-bold">We have Huge Software Collection</h1>
              <p className="text-xs">
                Explore from our product librery, 233+ premium product there
              </p>
            </div>
          </div>

          <div>
            <img
              src="/images/collection/man.png"
              alt=""
              className="absolute bottom-0 -right-4 md:right-4 w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
