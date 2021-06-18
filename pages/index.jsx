import Image from "next/image";

import Layout from "../Components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* main section */}
      <section className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-7 place-items-center mb-5">
        <div className="md:col-span-1 md:col-start-2 md:col-end-3 md:row-start-1">
          <img
            className="max-w-md md:w-auto sm:w-72 w-56"
            src="/main.svg"
            width={600}
            height={600}
            loading="lazy"
          />
        </div>
        <div className="md:col-span-1 md:col-start-1 md:col-end-2">
          <h2 className="text-gray text-2xl sm:text-3xl font-semibold mb-2 leading-8">
            We think we are done with the pandemic,
          </h2>
          <h1 className="text-black text-3xl sm:text-4xl font-semibold leading-8 mb-3">
            But the pandemic is not done with us.
          </h1>
          <p className="text-lg sm:text-xl font-medium leading-8">
            Awareness Program{" "}
            <span className="text-pink tracking-wide">#CoronaVirus</span>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
