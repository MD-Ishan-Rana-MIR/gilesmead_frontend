import MarketTable from "./components/MarketTable";
import { markets } from "./data/markets";
import ForcastCard from "./components/ForcastCard";
import { TOPICS } from "./data/forcast";

export default function SignalsPage() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold mb-4 text-[#1F2937] ">Live Predictions of Outcomes</h1>
      <MarketTable markets={markets} />
      <ForcastCard TOPICS={TOPICS} />

    </div>
  );
}
