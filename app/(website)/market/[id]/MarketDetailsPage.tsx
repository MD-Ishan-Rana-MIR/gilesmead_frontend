"use client"
import LineChart from '@/app/components/LineChart'
import YesNoButton from '@/app/components/YesNoButton'
import { MarketType } from '@/app/lib/type'
import { redirect } from 'next/navigation'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const MarketDetailsPage = ({ market }: { market: MarketType }) => {
    const back = () => {
        redirect("/")
    }
    return (
        <div>
            <div>
                <div onClick={back} className=' w-12 h-12 border border-[#E5E7EB] rounded-full flex justify-center  items-center  cursor-pointer mb-6 ' >
                    <MdOutlineKeyboardBackspace size={28} />
                </div>
                <div className="space-y-6">
                    <h1 className="text-xl font-semibold">{market.question}</h1>

                    <div className="flex gap-4">
                        <YesNoButton type="yes" price={market.yesPrice} onClick={() => { }} />
                        <YesNoButton type="no" price={market.noPrice} onClick={() => { }} />
                    </div>

                    <LineChart data={market.trend30d} />

                    <div className="text-sm text-[#6B7280]">
                        <p>24h: {market.change24h}%</p>
                        <p>7d: {market.change7d}%</p>
                        <p>Updated: {market.updatedAt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketDetailsPage