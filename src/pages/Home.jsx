import React from "react"

export default function Home() {
  return (
    <>
      <section className="sc-bdfCDU bHSWqp">
        <div className="top-btn">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            className="top-btn--icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
          </svg>
        </div>
      </section>
      {/* ===================== */}
      <nav className=" w-full lg:fixed font-Lora z-10  lg:px-5 lg:py-2  transition-all duration-300 lg:bg-lightBlack ">
        <div className="lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className=" w-48 lg:w-52 lg:p-4 ">
              <a href="/">
                <img
                  src="https://royellaa.netlify.app/images/home-3/logo.png"
                  className="hidden lg:block w-full"
                  alt="website_logo"
                />
              </a>
            </div>
            <div className="px-3 w-full lg:hidden flex justify-between text-lightBlack lg:text-white dark:text-white bg-khaki h-[70px]  items-center  p-3">
              <div className=" w-28  ">
                <a href="/">
                  <img
                    src="/images/home-1/brand-1.png"
                    className="block lg:hidden "
                    alt="Royella_website_logo"
                  />
                </a>
              </div>
              <div className="flex items-center ">
                <span className="mr-3 cursor-pointer">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="text-white"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Apply Dark Mode</title>
                    <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"></path>
                  </svg>
                </span>
                <button className="lg:hidden block focus:outline-none ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <ul className="hidden text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center space-x-0 lg:space-x-3 xl:space-x-4 2xl:space-x-5 3xl:space-x-[24px] sm:flex flex-col lg:flex-row text-sm text-lightBlack lg:text-white dark:text-white uppercase font-normal bg-white dark:bg-normalBlack lg:bg-transparent dark:lg:bg-transparent py-3 lg:py-0 ">
              <a
                className='({isActive:o,isPending:m})=>m?"pending":o?"active":"" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative active'
                href="/"
                aria-current="page"
              >
                <span className="flex items-center">
                  Home
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="ml-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </span>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-[200px] text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a
                          className="py-2 block active"
                          href="/"
                          aria-current="page"
                        >
                          Hotel Booking
                        </a>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="py-2 block" href="/home2">
                          Resort
                        </a>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="py-2 block" href="/home3">
                          Hostel
                        </a>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="py-2 block" href="/home4">
                          City Hotel
                        </a>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="py-2 block" href="/home5">
                          Apartment
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </a>
              <a
                className='({isActive:o,isPending:m})=>m?"pending":o?"active":"" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300'
                href="/about"
              >
                About
              </a>
              <a
                aria-current="page"
                className='({isActive:o,isPending:m})=>m?"pending":o?"active":"" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative  active'
                href="/"
              >
                <span className="flex items-center">
                  Rooms
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="ml-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </span>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-[200px] text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="block py-2" href="/room">
                          Room
                        </a>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="block py-2" href="/find_room">
                          Find Room
                        </a>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="block py-2" href="/room_details">
                          Room Details
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </a>
              <a
                aria-current="page"
                className='({isActive:o,isPending:m})=>m?"pending":o?"active":"" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative  active'
                href="/"
              >
                <span className="flex items-center">
                  Page
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="ml-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </span>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-[200px] text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="py-2 block" href="/about">
                          ABOUT US
                        </a>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="py-2 block" href="/services">
                          SERVICE
                        </a>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="py-2 block" href="/service_details">
                          SERVICE DETAILS
                        </a>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="py-2 block" href="/our_team">
                          OUR TEAM
                        </a>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <a className="py-2 block" href="/pricing">
                          PRICING
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </a>
              <a
                aria-current="page"
                className='({isActive:o,isPending:m})=>m?"pending":o?"active":"" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative  active'
                href="/"
              >
                <span className="flex items-center">
                  BLOG
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="ml-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </span>
                <div className="absolute pt-4 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm  py-4">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300 ">
                        <a className="py-2 block" href="/blog">
                          BLOG
                        </a>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300 ">
                        <a className="py-2 block" href="/blog_details">
                          BLOG DETAILS
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </a>
              <a
                className='({isActive:o,isPending:m})=>m?"pending":o?"active":"" text-lightBlack lg:text-white dark:text-white lg:border-b-0 px-3 py-2 w-full block transition-all duration-300'
                href="/contact"
              >
                Contact
              </a>
            </ul>
            <div className="hidden lg:flex items-center">
              <span className="mr-3 cursor-pointer group ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="text-white group-hover:rotate-[360deg] transition-all duration-300"
                  height="35"
                  width="35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Apply Dark Mode</title>
                  <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"></path>
                </svg>
              </span>
              <a href="/find_room">
                <button className="btn-secondary ">Booking Online</button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ================== */}
      <div className="">
        <div className="swiper swiper-initialized swiper-horizontal mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="bg-[url('https://royellaa.netlify.app/images/home-1/hero-bg.jpg')] w-full h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-16 xl:pb-0 aos-init aos-animate"
                data-aos="fade-down"
              >
                <div className="font-Garamond 2xl:w-[720px] text-center">
                  <div className="flex space-x-2 items-center justify-center mb-5 lg:mb-6">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 576 512"
                      className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 576 512"
                      className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 576 512"
                      className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 576 512"
                      className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 576 512"
                      className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-base mb-4">LUXURY HOTEL AND RESORT</h4>
                  <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
                      THE BEST LUXURY HOTEL
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] lg:leading-[50px] 2xl:leading-[60px]">
                      IN CALIFORNIA
                    </h1>
                  </div>
                  <a href="/about">
                    <button
                      className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 
                text-base
               font-Garamond
                font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack uppercase"
                    >
                      Discover More
                    </button>
                  </a>
                </div>
                <div className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2 text-khaki"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path>
                    <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
                  </svg>{" "}
                  +980 123 4567 890
                </div>
              </div>
            </div>
           
          </div>
        
        </div>
      </div>
      {/* ================ */}
      <div className="bg-whiteSmoke dark:bg-lightBlack">
        <div className="relative z-[1] ">
          <div
            className="w-2/3 mx-auto bg-bg-lightBlack bg-lightBlack dark:bg-normalBlack grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 items-center justify-center font-Lora py-3 lg:py-4 xl:py-5 2xl:py-6 border-t-[3px] border-t-khaki mt-[-75px] left-0 right-0 z-[1] aos-init aos-animate"
            data-aos="fade-down"
          >
            <div className="p-3">
              <p className="text-sm text-lightGray ml-3">Check In</p>
              <div className="flex items-center pt-[2px] ">
                <input
                  type="date"
                  className="border-none bg-transparent focus:outline-transparent focus:border-transparent text-white focus:border-none outline-0  text-sm lg:text-base focus:ring-transparent"
                  required=""
                />
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm text-lightGray ml-3">Check Out</p>
              <div className="flex items-center pt-[2px] ">
                <input
                  type="date"
                  className="border-none bg-transparent focus:outline-transparent focus:border-transparent text-white focus:border-none outline-0  text-sm lg:text-base focus:ring-transparent"
                  required=""
                  value="26 August, 2023"
                />
              </div>
            </div>
            <div className="p-3">
              <div
                className='({isActive:h,isPending:L})=>L?"pending":h?"active":"" text-white  px-3 py-2 w-full block transition-all duration-300 group relative '
                to="#"
              >
                <span
                  className="flex items-center justify-between text-sm text-lightGray cursor-pointer"
                  title="click hear to open and close rooms extender"
                >
                  Rooms
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </span>
                <div className="pt-[10px] text-sm sm:text-base">1 Room</div>
                <div className="absolute pt-5  z-20">
                  <div className="shadow-2xl hidden rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                    <div className="py-2 px-5 group cursor-pointer">
                      <li className="flex items-center justify-between">
                        <div className="">1 Room</div>
                        <div className="flex items-center space-x-2">
                          <button className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white">
                            +
                          </button>
                          <button
                            className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                            disabled=""
                          >
                            -
                          </button>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div
                className="text-white   px-3 py-2 w-full block transition-all duration-300 group relative "
                to="#"
              >
                <span
                  className="flex items-center justify-between text-sm text-lightGray cursor-pointer"
                  title="click hear to open and close Adult And Children extender"
                >
                  Guests
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </span>
                <div className="pt-[10px] text-sm sm:text-base">
                  1 Adult, 0 Child
                </div>
                <div className="absolute pt-5  z-20 ml-[-120px] sm:ml-0">
                  <div className="shadow-2xl hidden rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 left">
                    <div className="py-2 px-5 group cursor-pointer">
                      <li className="flex items-center justify-between">
                        <div className="">1 Adult</div>
                        <div className="flex items-center space-x-2">
                          <button className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white">
                            +
                          </button>
                          <button
                            className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                            disabled=""
                          >
                            -
                          </button>
                        </div>
                      </li>
                      <li className="flex items-center justify-between mt-1">
                        <div className="">0 Child</div>
                        <div className="flex items-center space-x-2">
                          <button className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white">
                            +
                          </button>
                          <button
                            className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                            disabled=""
                          >
                            -
                          </button>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/find_room">
              <button className="w-[142px] h-10 lg:h-[50px] text-[15px] bg-khaki font-Garamond border border-khaki text-white mx-auto col-span-2  md:col-span-1 lg:col-span-1 relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-lightBlack before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
                Checkout Now
              </button>
            </a>
          </div>
        </div>
        <div className=" py-20 2xl:py-[120px] w-full bg-[url('https://royellaa.netlify.app/images/home-1/section-shape2.png')] bg-no-repeat bg-top bg-opacity-[0.07]">
        <div className="Container ">
          <div
            className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5 aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center space-x-2 mb-4 lg:mb-[20px]">
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
              <img
                src="https://royellaa.netlify.app/images/home-1/section-shape1.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
            </div>
            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mb-[6]  font-Garamond font-semibold uppercase">
              Royella’s Rooms &amp; Suites
            </h1>
            <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base mt-[15px] lg:mt-0">
              Proactively morph optimal infomediaries rather than accurate
              expertise. Intrinsicly progressive resources rather than
              resource-leveling
            </p>
          </div>
          <div className="relative">
            <div className="mt-14 2xl:mt-[60px] grid sm:grid-cols-3 gap-5 ">
              <div className="keen-slider__slide number-slide1 ">
                <div data-aos="fade-up-left">
                  <div className="overflow-x-hidden 3xl:w-[410px] group relative">
                    <div className="relative">
                      <div className="overflow-hidden">
                        <img
                          src="https://royellaa.netlify.app/images/home-1/room-3.jpg"
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <a href="/room_details">
                          <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300 hover:bg-khaki">
                            View Details{" "}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 16 16"
                              className="w-4 h-4 ml-2  text-white"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                              ></path>
                            </svg>{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="font-Garamond">
                      <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] font-Lora font-normal leading-[26px]">
                        <span className="">$560</span>
                        <span className="mx-2">|</span>
                        <span>Night</span>
                      </div>
                      <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0">
                        <div className="py-6 px-[30px]">
                          <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                            Luxury Room
                          </h4>
                          <a href="/room">
                            <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                              Double Suite Rooms
                            </h2>
                          </a>
                          <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                            1500 SQ.FT/Rooms
                          </p>
                        </div>
                        <div className="border-t-[1px] border-[#e8e8e8] dark:border-[#424242] py-5">
                          <div className="px-[30px] flex items-center justify-between">
                            <div className="">
                              <span className="font-Lora text-base flex items-center ">
                                <img
                                  src="https://royellaa.netlify.app/images/home-1/room-bottom-icon.png"
                                  alt=""
                                />
                                <span className="ml-[10px] text-gray dark:text-lightGray">
                                  2 King Bed
                                </span>
                              </span>
                            </div>
                            <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                            <ul className="flex items-center text-khaki space-x-[5px]">
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="keen-slider__slide number-slide1 ">
                <div data-aos="fade-up">
                  <div className=" overflow-x-hidden group relative">
                    <div className="relative">
                      <div className="overflow-hidden">
                        <img
                          src="https://royellaa.netlify.app/images/home-1/room-1.jpg"
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <a href="/room_details">
                          <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300 hover:bg-khaki">
                            View Details{" "}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 16 16"
                              className="w-4 h-4 ml-2  text-white"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                              ></path>
                            </svg>{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="font-Garamond">
                      <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center font-Lora font-normal leading-[26px] text-white  absolute top-[10px] right-[10px] ">
                        <span className="">$560</span>
                        <span className="mx-2">|</span>
                        <span>Night</span>
                      </div>
                      <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0">
                        <div className="py-6 px-[30px]">
                          <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                            Luxury Room
                          </h4>
                          <a href="/room">
                            <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                              Delux Family Rooms
                            </h2>
                          </a>
                          <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                            1500 SQ.FT/Rooms
                          </p>
                        </div>
                        <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242] py-5">
                          <div className="px-[30px] flex items-center justify-between">
                            <div className="">
                              <span className="font-Lora text-base flex items-center ">
                                <img
                                  src="/images/home-1/room-bottom-icon.png"
                                  alt=""
                                />
                                <span className="ml-[10px] text-gray dark:text-lightGray">
                                  2 King Bed
                                </span>
                              </span>
                            </div>
                            <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                            <ul className="flex items-center text-khaki space-x-[5px]">
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="keen-slider__slide number-slide1 ">
                <div>
                  <div className=" 3xl:w-[410px] group relative">
                    <div className="relative">
                      <div className="overflow-hidden">
                        <img
                          src="https://royellaa.netlify.app/images/home-1/room-2.jpg"
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <a href="/room_details">
                          <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300 hover:bg-khaki">
                            View Details{" "}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 16 16"
                              className="w-4 h-4 ml-2  text-white"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                              ></path>
                            </svg>{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="font-Garamond">
                      <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center font-Lora font-normal leading-[26px] text-white  absolute top-[10px] right-[10px] ">
                        <span className="">$560</span>
                        <span className="mx-2">|</span>
                        <span>Night</span>
                      </div>
                      <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0">
                        <div className="py-6 px-[30px]">
                          <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                            Luxury Room
                          </h4>
                          <a href="/room">
                            <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                              Suprior Bed Rooms
                            </h2>
                          </a>
                          <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                            1500 SQ.FT/Rooms
                          </p>
                        </div>
                        <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242] py-5">
                          <div className="px-[30px] flex items-center justify-between">
                            <div className="">
                              <span className="font-Lora text-base flex items-center ">
                                <img
                                  src="/images/home-1/room-bottom-icon.png"
                                  alt=""
                                />
                                <span className="ml-[10px] text-gray dark:text-lightGray">
                                  2 King Bed
                                </span>
                              </span>
                            </div>
                            <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                            <ul className="flex items-center text-khaki space-x-[5px]">
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                              <li>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* =================== */}
     

      {/* =================== */}
      <section class="dark:bg-mediumBlack py-20 2xl:py-[120px]">
        <div
          class="Container sm:overflow-hidden lg:overflow-auto aos-init"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="md:flex items-center justify-between">
            <div class="flex-1 keen-slider w-screen  md:w-[60%] 2xl:w-[580px] md:pr-5 lg:pr-6 xl:pr-8 2xl:pr-9 3xl:pr-10  md:mt-0">
              <div class="keen-slider__slide number-slide1 ">
                <div class="">
                  <img
                    src="https://royellaa.netlify.app/images/home-1/Hotel1.jpg"
                    class="h-[85%] lg:h-[90%]"
                    alt="Hotel-slider-image"
                  />
                </div>
              </div>
             
            </div>
            <div class="flex-1 font-Garamond  mt-5 md:mt-0 md:pl-8 p-5  lg:pl-10 2xl:pl-14">
              <h5 class="text-base text-khaki leading-[26px] font-medium">
                LUXURY HOTEL AND RESORT
              </h5>
              <h1 class="text-[22px] sm:text-2xl md:text-[21px]  xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
                LUXURY BEST HOTEL IN CITY CALIFORNIA, USA
              </h1>
              <p class="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
                Rapidiously myocardinate cross-platform intellectual capital
                after marketing model. Appropriately create interactive
                infrastructures after maintainable are Holisticly facilitate
                stand-alone inframe Compellingly create premier open data
                through economically.
              </p>
              <div class="flex items-center mt-4 md:mt-3 lg:mt-4">
                <div>
                  <h1 class="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  3xl:text-[70px] leading-[42px] text-khaki font-medium ">
                    250 +
                  </h1>
                  <p class="text-sm sm:text-base md:text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-5 xl:pt-7 md:w-[94px] lg:w-full">
                    Luxury Rooms
                  </p>
                </div>
                <div class="ml-10 xl:ml-[60px] 2xl:ml-20 3xl:ml-[100px]">
                  <h1 class="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  3xl:text-[70px] leading-[42px] text-khaki font-medium ">
                    4.9
                  </h1>
                  <p class="text-sm sm:text-base md:text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-5 xl:pt-7 md:w-[134px] lg:w-full">
                    Customer Ratings
                  </p>
                </div>
              </div>
              <div class="py-5 lg:py-7 xl:py-[30px]">
                <div class="relative overflow-x-hidden ">
                  <hr class="w-full h-[2px] bg-[#ddd] text-[#ddd]" />
                  <span class="w-[60px] h-[2px] bg-khaki rounded-full absolute -top-[0px] animation-move1"></span>
                </div>
              </div>
              <a href="/about">
                <button class="btn-primary ">More About</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============== */}
      <section class="bg-lightBlack z-[1]">
        <div class="py-[110px] bg-[url('https://royellaa.netlify.app/images/home-1/section-shape2.png')] bg-no-repeat bg-top bg-opacity-[0.07]">
          <div class="Container">
            <div
              class="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="flex items-center justify-center space-x-2 mb-4 lg:mb-5">
                <hr class="w-[100px] h-[1px] bg-[#3b3b3b] text-[#3b3b3b] " />
                <img
                  src="https://royellaa.netlify.app/images/home-1/section-shape1.png"
                  alt="room_section_logo"
                  class="w-[50px] h-[50px]"
                />
                <hr class="w-[100px] h-[1px] bg-[#3b3b3b] text-[#3b3b3b] " />
              </div>
              <h1 class="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] 2xl:leading-[52px] text-white mb-[6px] font-Garamond font-semibold uppercase">
                HOTEL’S FACILITIES
              </h1>
              <p class="font-Lora leading-[26px] text-lightGray font-normal text-sm sm:text-base">
                Proactively morph optimal infomediaries rather than accurate
                expertise. Intrinsicly progressive resources rather than
                resource-leveling
              </p>
            </div>
            <div
              class="grid items-center justify-center-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-6 gap-4 xl:gap-[26px] pt-[60px] pb-[110px] px-8 lg:px-10 xl:px-28 2xl:px-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="h-[200px] w-[191px] pt-[37px] pb-[27px] border border-[#343434] text-center transition-all duration-500 relative z-[1] before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-0px] xl:before:right-[-222px] 3xl:before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center hover:before:w-[100%] hover:before:z-[1] md:hover:before:w-[114%] xl:hover:before:w-[116%]  group  after:absolute after:w-0 after:h-full after:left-0 after:top-0 after:hover:bg-[#272727] after:transition after:duration-500 after:z-[-1] after:hover:w-full">
                <div>
                  <img
                    src="https://royellaa.netlify.app/images/home-1/feature-1.png"
                    alt=""
                    class="mx-auto"
                  />
                </div>
                <div class="">
                  <h4 class="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                    Room Services
                  </h4>
                </div>
              </div>
              <div class="pt-[37px] pb-[27px] border border-[#343434] h-[200px] w-[191px] text-center transition-all duration-500 relative z-[1] before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-0px] 2xl:before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center hover:before:w-[100%] hover:before:z-[1]  md:hover:before:w-[114%] xl:hover:before:w-[116%] after:absolute after:w-0 after:h-full after:left-0 after:top-0 after:hover:bg-[#272727] after:transition after:duration-500 after:z-[-1] after:hover:w-full ">
                <div>
                  <img
                    src="https://royellaa.netlify.app/images/home-1/feature-2.png"
                    alt=""
                    class="mx-auto"
                  />
                </div>
                <div class="">
                  <h4 class="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                    Wi-Fi Internet
                  </h4>
                </div>
              </div>
              <div class="pt-[37px] pb-[27px] border border-[#343434] h-[200px] w-[191px] text-center transition-all duration-500 relative z-[1] before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-0px] 2xl:before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center  hover:before:w-[100%] hover:before:z-[1] md:hover:before:w-[114%] xl:hover:before:w-[116%] group after:absolute after:w-0 after:h-full after:left-0 after:top-0 after:hover:bg-[#272727] after:transition after:duration-500 after:z-[-1] after:hover:w-full ">
                <div>
                  <img
                    src="https://royellaa.netlify.app/images/home-1/feature-3.png"
                    alt=""
                    class="mx-auto"
                  />
                </div>
                <div class="">
                  <h4 class="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                    Smart Key
                  </h4>
                </div>
              </div>
              <div class="pt-[37px] pb-[27px] border border-[#343434] h-[200px] w-[191px] text-center transition-all duration-500 relative z-[1] before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-0px] 2xl:before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center  hover:before:w-[100%] hover:before:z-[1] md:hover:before:w-[114%] xl:hover:before:w-[116%] group after:absolute after:w-0 after:h-full after:left-0 after:top-0 after:hover:bg-[#272727] after:transition after:duration-500 after:z-[-1] after:hover:w-full ">
                <div>
                  <img
                    src="https://royellaa.netlify.app/images/home-1/feature-4.png"
                    alt=""
                    class="mx-auto"
                  />
                </div>
                <div class="">
                  <h4 class="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                    Breakfast
                  </h4>
                </div>
              </div>
              <div class="pt-[37px] pb-[27px] border border-[#343434] h-[200px] w-[191px] text-center transition-all duration-500 relative z-[1] before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-0px] 2xl:before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center  hover:before:w-[100%] hover:before:z-[1] md:hover:before:w-[114%] xl:hover:before:w-[116%] group after:absolute after:w-0 after:h-full after:left-0 after:top-0 after:hover:bg-[#272727] after:transition after:duration-500 after:z-[-1] after:hover:w-full ">
                <div>
                  <img
                    src="https://royellaa.netlify.app/images/home-1/feature-5.png"
                    alt=""
                    class="mx-auto"
                  />
                </div>
                <div class="">
                  <h4 class="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                    Swimming Pool
                  </h4>
                </div>
              </div>
              <div class="pt-[37px] pb-[27px] border border-[#343434] h-[200px] w-[191px] text-center transition-all duration-500 relative z-[1] before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-0px] 2xl:before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center  hover:before:w-[100%] hover:before:z-[1] md:hover:before:w-[114%] xl:hover:before:w-[116%] group after:absolute after:w-0 after:h-full after:left-0 after:top-0 after:hover:bg-[#272727] after:transition after:duration-500 after:z-[-1] after:hover:w-full ">
                <div>
                  <img
                    src="https://royellaa.netlify.app/images/home-1/feature-1.png"
                    alt=""
                    class="mx-auto"
                  />
                </div>
                <div class="">
                  <h4 class="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                    Room Service
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== */}
      <section class="Container py-20 dark:z-[1]">
        <div class=" w-full grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div
            class="bg-[#f8f6f3] dark:bg-normalBlack space-y-[14px] flex-1 font-Garamond px-5 sm:px-7 md:px-9 lg:pl-[70px] py-10 md:py-[96px] lg:pr-[70px] aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h5 class="text-base text-khaki leading-[26px] font-semibold">
              MANAGER
            </h5>
            <h1 class="text-[22px] sm:text-2xl md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
              LUXURY BEST HOTEL IN CITY CALIFORNIA, USA
            </h1>
            <p class="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
              Rapidiously myocardinate cross-platform intellectual capital after
              model. Appropriately create interactive infrastructures after main
              Holisticly facilitate stand-alone inframe
            </p>
            <p class="text-sm sm:text-base font-Lora italic leading-[26px] underline  text-gray dark:text-lightGray font-normal ">
              “ Model. Appropriately create interactive infrastructures after
              main Holisticly facilitate stand-alone inframe of the world ”
            </p>
            <div class="flex items-center space-x-6 pt-5">
              <img
                src="https://royellaa.netlify.app/images/home-1/action-img.png"
                class="w-[65px] h-[65px] object-cover"
                alt=""
              />
              <div class="">
                <h4 class="text-lg sm:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                  John D. Alexon
                </h4>
                <p class="pt-1 text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center font-Lora">
                  <span class="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                  Manger
                </p>
              </div>
            </div>
          </div>
          <div
            class="flex-1 h-[100%] w-full relative aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="https://royellaa.netlify.app/images/home-1/action-img.png"
              class="h-full w-full md:h-[80%] lg:h-full 2xl:h-[99%] "
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}
