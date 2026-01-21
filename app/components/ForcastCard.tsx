import Link from "next/link";
import { ForcastDataType } from "../lib/type";



const ForcastCard = ({ TOPICS }: { TOPICS: ForcastDataType[] }) => {
    return (
        <main className="mx-auto max-w-7xl px-4 py-10">
            {/* Page Header */}
            <header className="mb-10">
                <h1 className="text-3xl font-semibold  text-[#1F2937]  md:text-4xl">
                    Forecasts
                </h1>
                <p className="mt-2 max-w-2xl text-[#1F2937]">
                    Editorial, topic-level forecasts providing probability-based outlooks
                    across politics, markets, technology, and world events.
                </p>
            </header>

            {/* Forecast Topic Cards */}
            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {TOPICS.map((topic) => (
                    <article
                        key={topic.title}
                        className="rounded-2xl border  border-[#E5E7EB]  bg-[#F6F7F9] p-6 shadow-sm transition hover:border-[#E5E7EB]"
                    >
                        {/* Category */}
                        <span className="inline-flex rounded-full border  border-[#E5E7EB]  bg-[#F6F7F9] px-3 py-1 text-xs text-[#1F2937]">
                            {topic.category}
                        </span>

                        {/* Title */}
                        <h2 className="mt-4 text-lg font-medium  text-[#1F2937] ">
                            {topic.title}
                        </h2>

                        {/* Probability */}
                        <div className="mt-6 flex items-baseline gap-3">
                            <span className="text-4xl font-bold  text-[#1F2937] ">
                                {topic.probability}
                            </span>
                            <span className="text-sm text-gray-500">
                                {topic.subtitle}
                            </span>
                        </div>

                        {/* Sparkline placeholder */}
                        <div className="mt-4">
                            <svg viewBox="0 0 300 60" className="h-12 w-full">
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-[#1F2937]"
                                    points="0,40 40,38 80,42 120,35 160,30 200,32 240,25 280,22"
                                />
                            </svg>
                        </div>

                        {/* Editorial hint */}
                        <p className="mt-4 text-sm text-[#1F2937]">
                            <Link href={`/forecast/${topic.title}`}>View editorial forecast →</Link>
                        </p>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default ForcastCard;