import { useState } from "react";
import { useRouter } from "next/router";

import Button from "./Button";

import { prettyPrintStat } from "../lib/util";

const Worldwide = ({ data }) => {
  const [caseType, setCaseType] = useState("cases");

  const router = useRouter();
  return (
    <section className="md:pt-10 md:pb-20">
      <h2 className="font-semibold text-3xl sm:text-4xl text-center mb-12">
        Worldwide
      </h2>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        <div className="md:col-span-1">
          <img
            className="md:w-96 sm:w-72 w-56"
            src="/section_2.svg"
            width={600}
            height={600}
            loading="lazy"
            alt="worldwide"
          />
        </div>
        <div className="md:col-span-1 transition-all duration-200 ease-in">
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
          <p className="text-center text-pink-base font-semibold text-4xl md:text-5xl mb-5">
            {prettyPrintStat(
              data[
                caseType === "cases"
                  ? "todayCases"
                  : caseType === "recovered"
                  ? "todayRecovered"
                  : "todayDeaths"
              ]
            )}
          </p>
          <h4 className="capitalize font-semibold text-lg text-center mb-3">
            Total {caseType}
          </h4>
          <p className="text-center text-pink-base font-semibold text-3xl md:text-4xl mb-4">
            {prettyPrintStat(data[caseType])}
          </p>
          <div className="flex justify-center mb-5">
            <Button
              value="More Info"
              callback={() => router.push("be-inform")}
            />
          </div>
          <p className="text-gray text-center">
            Powered by <a href="#">disease.sh</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Worldwide;
