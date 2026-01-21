"use client"
import { redirect } from "next/navigation";
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

// Forecast / Editorial Page (Read-only, SEO-friendly)
// Route: /forecast/{topic}

const CATEGORIES = [
    "UK Politics",
    "US Politics",
    "Economy & Rates",
    "Crypto",
    "Tech & AI",
    "World Events",
];

export default function ForecastTopicDetails() {
    const activeCategory = "UK Politics"; // mock
    const back = () => {
        redirect("/")
    }
    return (
        <main className="">
            {/* back buttton  */}
            <div onClick={back} className=' w-12 h-12 border border-[#E5E7EB] rounded-full flex justify-center  items-center  cursor-pointer ' >
                <MdOutlineKeyboardBackspace size={28} />
            </div>
            {/* Header */}
            <header className="md:mb-8 mb-4 mt-5 ">
                <p className="mb-2 text-sm uppercase tracking-wide text-[#1F2937]">
                    Forecast
                </p>
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <h1 className="text-lg font-semibold text-[#1F2937] md:text-4xl">
                        UK General Election Forecast
                    </h1>

                    {/* Category context (non-interactive) */}
                    <span className="inline-flex w-fit items-center rounded-full border border-[#E5E7EB] bg-[#F6F7F9] px-4 py-1 text-sm text-[#1F2937]">
                        {activeCategory}
                    </span>
                </div>

                {/* Category support bar (editorial, not a filter) */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                        <span
                            key={cat}
                            className={`rounded-full border px-3 py-1 text-sm ${cat === activeCategory
                                ? "border border-[#E5E7EB] bg-gray-900 text-white "
                                : " border border-[#E5E7EB] text-gray-600"
                                }`}
                        >
                            {cat}
                        </span>
                    ))}
                </div>
            </header>

            {/* Hero Probability */}
            <section className="mb-12 rounded-2xl   border border-[#E5E7EB] bg-[#F6F7F9] p-8 shadow-sm">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm text-[#1F2937]">Current probability</p>
                        <div className="mt-2 flex items-baseline gap-3">
                            <span className="text-6xl font-bold text-[#1F2937]">62%</span>
                            <span className="text-lg text-[#1F2937]">Labour majority</span>
                        </div>
                    </div>

                    {/* Simple trend line (sparkline) */}
                    <div className="w-full md:w-1/2">
                        <svg viewBox="0 0 300 80" className="h-24 w-full">
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-[#1F2937]"
                                points="0,55 40,50 80,52 120,45 160,40 200,42 240,35 280,30"
                            />
                        </svg>
                        <p className="mt-2 text-xs text-[#1F2937]">Trend (last 30 days)</p>
                    </div>
                </div>
            </section>

            {/* Editorial explanation */}
            <section className="max-w-3xl">
                <h2 className="mb-3 text-lg font-medium text-[#1F2937]">
                    What this forecast means
                </h2>
                <p className="mb-4 leading-relaxed text-[#1F2937]">
                    This forecast provides a topic-level outlook for the UK General
                    Election. The headline probability reflects an aggregation of polling
                    signals, recent political developments, and historical context.
                </p>
                <p className="leading-relaxed text-[#1F2937]">
                    Forecasts are designed for explanation and context rather than
                    trading. Probabilities may change as new information becomes
                    available.
                </p>
            </section>

        </main>
    );
}
