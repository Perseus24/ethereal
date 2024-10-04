"use client"
import './globals.css';
export default function Home() {
  
  return (
    <main className="bg-main_color h-screen px-10 py-10">

      {/* MOBILE NAVBAR */}
      <div className='max-md:flex md:hidden mb-4 justify-between items-center gap-4'>
        <button>
          <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
        </button>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-highlight_color" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>

      {/* NAVBAR */}
      <div className="flex items-center justify-evenly w-full mb-4 max-md:hidden">
        <form className="w-1/4 ">   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search Dress..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-highlight_color font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>
        <a className="text-black font-semibold cursor-pointer">HOME</a>
        <a className="text-black font-semibold cursor-pointer">ABOUT US</a>
        <a className="text-black font-semibold cursor-pointer">REGISTER</a>
        <a className="text-black font-semibold cursor-pointer">LOG IN</a>
        <button>
          <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
        </button>
      </div>
      <div className="w-full h-1 bg-highlight_color mb-10"></div>
      <div className="flex flex-col w-full justify-center items-center h-20 gap-0">
        <h1 className="text-5xl font-bold font-perandory text-highlight_color">ETHEREAL</h1>
        <p className=" font-amoresa text-3xl font-semibold text-highlight_color">muse</p>
      </div>
    </main>
  )
}