import React from 'react'

const Header = () => {
    // sticky top 
    return (
        <div className="sticky top-0 z-50  pt-4 px-4 bg-white  ">
            <div className=' flex items-center gap-x-3 md:gap-x-4 ' >
                <div className=' md:w-8 md:h-8 w-6 h-6   rounded-full bg-[#4F7FD6] ' >

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
