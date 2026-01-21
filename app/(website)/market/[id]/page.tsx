import { markets } from "@/app/data/markets";
import MarketDetailsPage from "./MarketDetailsPage";
import type { MarketType } from "@/app/lib/type";



const MarketPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;



    const market: MarketType | undefined = markets.find(
        (m) => String(m.id) === String(id)
    ) as MarketType | undefined;


    if (!market) return null;

    return <MarketDetailsPage market={market} />;
};

export default MarketPage;
