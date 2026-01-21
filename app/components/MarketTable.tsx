"use client";
import { useState } from "react";
import Link from "next/link";
import Sparkline from "./Sparkline";
import YesNoButton from "./YesNoButton";
import { Modal } from "./Modal";
import { MarketType } from "../lib/type";

export default function MarketTable({ markets }: { markets: MarketType[] }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<{
        market: MarketType;
        side: "yes" | "no";
    } | null>(null);

    const openModal = (market: MarketType, side: "yes" | "no") => {
        setSelected({ market, side });
        setOpen(true);
    };

    return (
        <>
            {/* ================= DESKTOP / TABLET TABLE ================= */}
            <div className="hidden md:block bg-[#F6F7F9] border border-[#E5E7EB] rounded-lg overflow-x-auto">
                <table className="w-full text-sm min-w-225">
                    <thead className="bg-white border-b">
                        <tr className="text-left text-[#1F2937]">
                            <th className="p-3">Market</th>
                            <th className="p-3 text-[#4F7FD6]">Yes</th>
                            <th className="p-3 text-[#6B7280]">No</th>
                            <th className="p-3">24h change</th>
                            <th className="p-3">7d change</th>
                            <th className="p-3">Sperkline</th>
                        </tr>
                    </thead>

                    <tbody>
                        {markets.map((m) => (
                            <tr key={m.id} className="border-t bg-white">
                                <td className="p-3 max-w-[320px]">
                                    <Link href={`/market/${m.id}`} className="hover:underline">
                                        {m.question}
                                    </Link>
                                </td>

                                <td className="p-3">
                                    <YesNoButton
                                        type="yes"
                                        price={m.yesPrice}
                                        onClick={() => openModal(m, "yes")}
                                    />
                                </td>

                                <td className="p-3">
                                    <YesNoButton
                                        type="no"
                                        price={m.noPrice}
                                        onClick={() => openModal(m, "no")}
                                    />
                                </td>

                                <td
                                    className={`p-3 ${m.change24h > 0 ? "#16A34A" : "text-[#DC2626]"
                                        }`}
                                >
                                    {m.change24h}%
                                </td>

                                <td
                                    className={`p-3 ${m.change7d > 0 ? "#16A34A" : "text-[#DC2626]"
                                        }`}
                                >
                                    {m.change7d}%
                                </td>

                                <td className="p-3">
                                    <Sparkline data={m.trend7d} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ================= MOBILE CARD VIEW ================= */}
            <div className="md:hidden space-y-3">
                {markets.map((m) => (
                    <div
                        key={m.id}
                        className="bg-white border border-[#E5E7EB] rounded-lg p-4"
                    >
                        <Link
                            href={`/market/${m.id}`}
                            className="text-sm font-medium text-[#1F2937]"
                        >
                            {m.question}
                        </Link>

                        <div className="flex gap-2 mt-4">
                            <YesNoButton
                                type="yes"
                                price={m.yesPrice}
                                onClick={() => openModal(m, "yes")}
                            />
                            <YesNoButton
                                type="no"
                                price={m.noPrice}
                                onClick={() => openModal(m, "no")}
                            />
                        </div>

                        <div className="flex justify-between items-center text-xs mt-3">
                            <span
                                className={m.change24h > 0 ? "#16A34A" : "text-[#DC2626]"}
                            >
                                24h: {m.change24h}%
                            </span>
                            <span
                                className={m.change7d > 0 ? "#16A34A" : "text-[#DC2626]"}
                            >
                                7d: {m.change7d}%
                            </span>
                            <span className="p-3">
                                <Sparkline data={m.trend7d} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= MODAL ================= */}
            <Modal open={open} onClose={() => setOpen(false)}>
                {selected && (
                    <div>
                        <h2 className="text-lg font-semibold mb-2">
                            {selected.market.question}
                        </h2>

                        <p className="mb-6">
                            You selected{" "}
                            <b className="uppercase">{selected.side}</b> at{" "}
                            {selected.side === "yes"
                                ? selected.market.yesPrice
                                : selected.market.noPrice}
                            ¢
                        </p>

                        <h1 className="text-2xl text-center my-10">Coming Soon</h1>

                        <button
                            onClick={() => setOpen(false)}
                            className="w-full bg-[#4F7FD6] text-white py-2 rounded-md cursor-pointer "
                        >
                            Close
                        </button>
                    </div>
                )}
            </Modal>
        </>
    );
}
