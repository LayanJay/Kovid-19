import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

import Button from "../components/Button";
import Layout from "../components/Layout";
import LineChart from "../components/LineChart";

import { prettyPrintStat, buildChartData } from "../lib/util";

const BeInform = ({ chartData, countryInfo, countryCovidData }) => {
  const [caseType, setCaseType] = useState("cases");
  const [country, setCountry] = useState("Worldwide");
  const [chartDataUpdated, setChartDataUpdated] = useState([]);

  useEffect(() => {
    const getChartData = () => {
      const response = buildChartData(chartData, caseType, country);

      setChartDataUpdated(response);
    };
    getChartData();
  }, [chartData, caseType]);

  const router = useRouter();

  const handleChange = (e) => {
    setCountry(e);
    router.push(
      {
        pathname: "be-inform",
        query: {
          country: e,
        },
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <Layout title="Be Inform">
      <section className="flex flex-col items-center">
        <h1 className="text-black text-3xl sm:text-4xl font-semibold text-center leading-8 mb-6 max-w-2xl">
          Find out the current situation around you
        </h1>
        <img
          className="md:w-52 sm:w-44 w-36 mb-6"
          src="/location.svg"
          alt="location"
          width={200}
          height={200}
          loading="lazy"
        />

        {/* menu bar */}
        <div className="w-72 m-2">
          <Listbox value={country} onChange={handleChange}>
            <div className="mt-1 relative">
              <Listbox.Button className="w-full py-2 px-4 text-left rounded-lg border-2 border-gray border-opacity-25 cursor-pointer focus:outline-none hover:text-gray transition ease-in text-xl sm:text-2xl font-medium inline-flex items-center justify-between">
                <span className="">{country}</span>
                <span className="pointer-events-none">
                  <ChevronDownIcon
                    className="w-7 h-7 text-gray"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                enter="transition duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base border-2 border-gray border-opacity-25 bg-white rounded-md shadow-lg max-h-60 focus:outline-none">
                  <Listbox.Option
                    key="worldwide"
                    className={({ active }) =>
                      `${
                        active
                          ? "text-black bg-pink-base bg-opacity-80"
                          : "text-gray"
                      }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                    }
                    value="Worldwide"
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block`}
                        >
                          Worldwide
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? "text-pink-dark" : "text-pink-base"
                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                  {countryInfo.map((name, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-black bg-pink-base bg-opacity-80"
                            : "text-gray"
                        }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                      }
                      value={name}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block`}
                          >
                            {name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-pink-dark" : "text-pink-base"
                              }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </section>

      <section className="md:pt-10 md:pb-20 py-5">
        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1 max-w-full">
            <LineChart data={chartDataUpdated} caseType={caseType} />
          </div>
          <div className="md:col-span-1 flex flex-col items-center transition-all duration-200 ease-in">
            <div className="inline-flex mb-5">
              <Button value="cases" callback={() => setCaseType("cases")} />
              <Button
                value="recovered"
                callback={() => setCaseType("recovered")}
              />
              <Button value="deaths" callback={() => setCaseType("deaths")} />
            </div>
            <h3 className="capitalize text-center font-semibold text-2xl md:text-3xl mb-3">
              Today {caseType}
            </h3>
            <p className="text-center flex justify-center text-pink-base font-semibold text-4xl md:text-5xl mb-5">
              {(countryCovidData.country === country &&
                prettyPrintStat(
                  countryCovidData[
                    caseType === "cases"
                      ? "todayCases"
                      : caseType === "recovered"
                      ? "todayRecovered"
                      : "todayDeaths"
                  ]
                )) ||
                (country === "Worldwide" &&
                  prettyPrintStat(
                    countryCovidData[
                      caseType === "cases"
                        ? "todayCases"
                        : caseType === "recovered"
                        ? "todayRecovered"
                        : "todayDeaths"
                    ]
                  )) || (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 sm:h-8 w-6 sm:w-8 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                )}
            </p>
            <h4 className="capitalize font-semibold text-lg text-center mb-3">
              Total {caseType}
            </h4>
            <p className="text-center flex justify-center text-pink-base font-semibold text-3xl md:text-4xl mb-4">
              {(countryCovidData.country === country &&
                prettyPrintStat(countryCovidData[caseType])) ||
                (country === "Worldwide" &&
                  prettyPrintStat(countryCovidData[caseType])) || (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 sm:h-7 w-5 sm:w-7 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                )}
            </p>

            <p className="text-gray text-center">
              Powered by{" "}
              <a
                className="hover:text-pink-base transition ease-in"
                href="https://corona.lmao.ninja"
                target="_blank"
              >
                disease.sh
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BeInform;

export const getServerSideProps = async (context) => {
  const countryParam = context.query.country || `Worldwide`;

  const historicalData =
    countryParam !== "Worldwide"
      ? `https://corona.lmao.ninja/v2/historical/${countryParam}?lastdays=30`
      : `https://corona.lmao.ninja/v2/historical/all`;

  const allCountryData = `https://corona.lmao.ninja/v2/countries?yesterday=true`;

  const countryDataByCountry =
    countryParam !== "Worldwide"
      ? `https://corona.lmao.ninja/v2/countries/${countryParam}?yesterday=true`
      : `https://corona.lmao.ninja/v2/all`;

  // get chart data
  const chartData = await fetch(historicalData).then((res) => res.json());

  // get country names
  const countryInfo = await fetch(allCountryData)
    .then((res) => res.json())
    .then((data) => data.map((country) => country.country));

  // get country or worldwide covid data
  const countryCovidData = await fetch(countryDataByCountry).then((res) =>
    res.json()
  );
  return {
    props: {
      chartData,
      countryInfo,
      countryCovidData,
    },
  };
};
