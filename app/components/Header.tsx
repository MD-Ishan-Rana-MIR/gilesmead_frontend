import React from 'react'

const Header = () => {
    // sticky top 
    return (
        <div className="sticky top-0 z-50 my-4 px-4 bg-white pb-6 ">
            <div className=' flex items-center gap-x-4 md:gap-x-6 ' >
                <div className=' md:w-12 md:h-12 w-10 h-10   rounded-full bg-[#4F7FD6] ' >

                </div>
                <div>
                    <h1 className="md:text-4xl font-semibold text-[#1F2937]  text-lg">
                        Outcome.bet
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Header
