// components
import Layout from "../components/Layout";
import StopSpread from "../components/StopSpread";
import Worldwide from "../components/Worldwide";

/**
 * Server side props
 * @data
 */
const Index = ({ data }) => {
  return (
    <Layout title="Kovid-19">
      {/* main section */}
      <section className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-7 place-items-center py-16 sm:py-24 md:py-28 mb-2">
        <div className="md:col-span-1 md:col-start-2 md:col-end-3 md:row-start-1">
          <img
            className="md:w-96 sm:w-72 w-56"
            src="/main.svg"
            width={600}
            height={600}
            loading="lazy"
            alt="main"
          />
        </div>
        <div className="md:col-span-1 md:col-start-1 md:col-end-2">
          <h2 className="text-gray text-3xl sm:text-4xl font-semibold text-center md:text-left mb-4 leading-8">
            We think we are done with the pandemic,
          </h2>
          <h1 className="text-black text-4xl sm:text-5xl font-semibold text-center md:text-left leading-8 mb-6">
            But the pandemic is not done with us.
          </h1>
          <p className="text-lg sm:text-xl font-medium text-center md:text-left leading-8">
            Awareness Program{" "}
            <span className="text-pink-base tracking-wide">#CoronaVirus</span>
          </p>
        </div>
      </section>

      <StopSpread />
      <Worldwide data={data} />

      <section className="py-10 md:pt-10 md:pb-20 grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        <div className="md:col-span-1">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left mb-2">
            Be <span className="text-pink-base">Informed</span>
          </h3>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left mb-2">
            Be <span className="text-pink-base">Prepared</span>
          </h3>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left mb-2">
            Be <span className="text-pink-base">Smart</span>
          </h3>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left mb-8">
            Be <span className="text-pink-base">Safe</span>
          </h3>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left mb-3">
            Let's Fight Together
          </h2>
          <p className="font-medium text-pink-base text-center md:text-left">
            #CoronaVirus #Covid19
          </p>
        </div>
        <div className="hidden md:block">
          <img
            className="md:w-96 sm:w-72 w-56"
            src="/section_3.svg"
            alt="be safe"
            loading="lazy"
            width={600}
            height={600}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Index;

/**
 * Getting server side data
 */

export const getServerSideProps = async () => {
  const allCasesUrl = `https://corona.lmao.ninja/v2/all`;

  const response = await fetch(allCasesUrl).then((res) => res.json());

  return {
    props: {
      data: response,
    },
  };
};
