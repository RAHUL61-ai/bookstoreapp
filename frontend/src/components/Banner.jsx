import React from "react";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center my-10">
      {/* Left Section */}
      <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-24">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold leading-tight">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new every day!!!</span>
          </h1>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, et
            totam. Tempora amet atque expedita quae corrupti, sed pariatur
            corporis at veniam est voluptas animi!
          </p>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your email"
            />
          </div>
          <button className="btn btn-secondary mt-4 px-6 py-2 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className=" order-1 w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src="./image/book2.png"
          alt="Books"
          className=""
        />
      </div>
    </div>
  );
};

export default Banner;
