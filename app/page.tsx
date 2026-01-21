import MarketTable from "./components/MarketTable";
import { markets } from "./data/markets";
import ForcastCard from "./components/ForcastCard";
import { TOPICS } from "./data/forcast";

export default function SignalsPage() {
  return (
    <div>
      {/* <h1 className="text-xl font-semibold mb-4">Signals</h1> */}
      {/* <Link className=" lg:text-3xl text-lg font-semibold" href={"/forecast"}>Forecast</Link> */}
      <MarketTable markets={markets} />
      <ForcastCard TOPICS={TOPICS} />

    </div>
  );
}
