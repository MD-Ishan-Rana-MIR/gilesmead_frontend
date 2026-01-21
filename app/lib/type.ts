
export interface MarketType {
    id: string;
    question: string;
    yesPrice: number;
    noPrice: number;
    change24h: number;
    change7d: number;
    trend7d: number[];
    updatedAt: string;
    trend30d: number[];

}


export interface ForcastDataType {
    title: string;
    category: string;
    probability: string;
    subtitle: string
}