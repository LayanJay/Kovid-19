import Card from "./Card";
import { advices } from "../../lib/data";

const StopSpread = () => {
  return (
    <section className="md:pt-10 md:pb-20">
      <h2 className="font-semibold text-3xl sm:text-4xl text-center mb-12">
        Stop the spread of Germs
      </h2>
      <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {advices.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default StopSpread;
