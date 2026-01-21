import { TRADING_ENABLED } from "../lib/config";

export default function YesNoButton({ type, price, onClick }: { type: "yes" | "no"; price: number; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            disabled={!TRADING_ENABLED}
            className={`px-3 py-1 rounded text-sm border ${type === "yes"
                ? "text-white bg-[#4F7FD6] cursor-pointer "
                : "text-[#6B7280] bg-white cursor-pointer"}${!TRADING_ENABLED && "opacity-50 cursor-not-allowed"}`}>
            {type.toUpperCase()} {price}
        </button>
    );
}



