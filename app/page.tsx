import Image from "next/link";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="font-clash-display">
      {/* Header */}
      <header className="flex flex-col items-center justify-between px-8 py-4 border-b border-gray-200">

        <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200 gap-96">

          <div className="flex flex-wrap items-start text-base justify-center" >
            <button className="max-w-4">
              <img
                src="/search.png"
                alt="Image"
                className="max-w-100% h-auto object-contain" />
            </button>
          </div>

          <div className=" flex font-clash-display flex-wrap items-center text-base justify-center mx-32">
            <h1 className="text-2xl font-bold">Avion</h1>
          </div>

          <div className="flex flex-wrap items-end text-base justify-center">
            <button className="max-w-4">
              <img
                src="/cart.png"
                alt="Image"
                className="max-w-100% h-auto object-contain" />
            </button>
            <button className="max-w-4"><img
              src="/profile.png"
              alt="Image"
              className="max-w-100% h-auto object-contain" /></button>
          </div>

        </div>



        <nav className="flex font-clash-display justify-center px-8 py-4 gap-6">
          <ul className="flex items-center space-x-6 text-gray-700">
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
          </ul>
        </nav>

      </header>


      <div className="flex font-satoshi max-w-full justify-center">
        {/* Hero Section */}
        <main className="flex flex-col lg:flex-row max-w-7xl">
          {/* Text Section */}
          <div className="flex-1 bg-darkPrimary text-white p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-semibold mb-6">
              The furniture brand for the future, with timeless designs
            </h2>
            <button className="bg-transparent border border-white px-6 py-2 text-lg font-medium hover:bg-white hover:text-darkPrimary transition-all max-w-fit">
              View collection
            </button>
            <p className="mt-4 text-sm">
              A new era in eco-friendly furniture with Avion, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex items-center max-w-fit">
            <img
              src="/RightImage.png"
              alt="Image"
              className="max-w-100% h-auto object-contain"
            />
          </div>
        </main>
      </div>

      <div className=" flex flex-col items-center py-16 px-6 ">

        <div className=" py-16 px-6 max-w-7xl" >

          {/* What makes our brand different */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-clash text-darkPrimary">
              What makes our brand different
            </h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="mb-4 text-4xl text-darkPrimary">🚚</div>
              <h3 className="font-satoshi text-lg font-semibold text-darkPrimary">
                Next day as standard
              </h3>
              <p className="font-satoshi text-gray-600">
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl text-darkPrimary">✔️</div>
              <h3 className="font-satoshi text-lg font-semibold text-darkPrimary">
                Made by true artisans
              </h3>
              <p className="font-satoshi text-gray-600">
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl text-darkPrimary">💰</div>
              <h3 className="font-satoshi text-lg font-semibold text-darkPrimary">
                Unbeatable prices
              </h3>
              <p className="font-satoshi text-gray-600">
                For our materials and quality, you won’t find better prices anywhere.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl text-darkPrimary">♻️</div>
              <h3 className="font-satoshi text-lg font-semibold text-darkPrimary">
                Recycled packaging
              </h3>
              <p className="font-satoshi text-gray-600">
                We use 100% recycled packaging to ensure our footprint is manageable.
              </p>
            </div>
          </div>
        </div>

        <div className="product py-16 px-6 max-w-7xl" >
          {/* New ceramics */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-clash text-primary">
              New ceramics
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-lightGray p-4 rounded-md shadow">
              <div className="flex flex-wrap items-start text-base justify-center" >
                <img
                  src="/chair.png"
                  alt="The Dandy Chair"
                  className="max-w-100% h-auto object-cover rounded-md mb-4" />
              </div>


              <h3 className="font-satoshi text-lg font-semibold text-darkPrimary">
                The Dandy Chair
              </h3>
              <p className="font-satoshi text-gray-700">£250</p>
            </div>
            {/* Card 2 */}
            <div className="bg-lightGray p-4 rounded-md shadow">
              <div className="flex flex-wrap items-start text-base justify-center" >
                <img
                  src="/vase-set.png"
                  alt="Rustic Vase Set"
                  className="max-w-100% h-auto object-cover rounded-md mb-4" />
              </div>
              <h3 className="font-satoshi text-lg font-semibold text-darkPrimary">
                Rustic Vase Set
              </h3>
              <p className="font-satoshi text-gray-700">£155</p>
            </div>
            {/* Card 3 */}
            <div className="bg-lightGray p-4 rounded-md shadow">
              <div className="flex flex-wrap items-start text-base justify-center" >
                <img
                  src="/vase.png"
                  alt="The Silky Vase"
                  className="max-w-100% h-auto object-cover rounded-md mb-4" />
              </div>

              <h3 className="font-satoshi text-lg font-semibold text-darkPrimary">
                The Silky Vase
              </h3>
              <p className="font-satoshi text-gray-700">£125</p>
            </div>
            {/* Card 4 */}
            <div className="bg-lightGray p-4 rounded-md shadow">
              <div className="flex flex-wrap items-start text-base justify-center" >
                <img
                  src="/lamp.png"
                  alt="The Lucy Lamp"
                  className="max-w-100% h-auto object-cover rounded-md mb-4" />
              </div>

              <h3 className="font-satoshi text-lg font-semibold text-darkPrimary">
                The Lucy Lamp
              </h3>
              <p className="font-satoshi text-gray-700">£399</p>
            </div>
          </div>

          {/* View Collection Button */}
          <div className="text-center mt-8">
            <button className="px-6 py-3 text-borderDark bg-lightGray hover:bg-primary hover:text-white rounded-lg font-satoshi text-sm">
              View collection
            </button>
          </div>
        </div>

        <div className="product py-16 px-6 max-w-7xl" >
          {/* Our Popular Products */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-clash text-primary">
              Our Popular Products
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-lightGray max-w-fit p-4 rounded-md shadow">
              <div className="flex flex-wrap max-w-100%  items-start text-base justify-center" >
                <img
                  src="/LargeSofa.png"
                  alt="Large SOfa"
                  className="max-w-auto h-100% object-cover rounded-md mb-4" />
              </div>
              <h3 className="font-satoshi text-lg font-semibold text-darkPrimary">
                The Poplar suede sofa
              </h3>
              <p className="font-satoshi text-gray-700">£980</p>
            </div>
            {/* Card 2 */}
            <div className="bg-lightGray p-4 rounded-md shadow">
              <div className="flex flex-wrap items-start text-base justify-center" >
                <img
                  src="/chair.png"
                  alt="The Dandy Chair"
                  className="max-w-100% h-auto object-cover rounded-md mb-4" />
              </div>


              <h3 className="font-satoshi text-lg font-semibold text-darkPrimary">
                The Dandy Chair
              </h3>
              <p className="font-satoshi text-gray-700">£250</p>
            </div>
            {/* Card 3 */}
            <div className="bg-lightGray p-4 rounded-md shadow">
              <div className="flex flex-wrap items-start text-base justify-center" >
                <img
                  src="/Chair2.png"
                  alt="The Silky Vase"
                  className="max-w-100% h-auto object-cover rounded-md mb-4" />
              </div>

              <h3 className="font-satoshi text-lg font-semibold text-darkPrimary">
                The Dandy chair
              </h3>
              <p className="font-satoshi text-gray-700">£250</p>
            </div>
          </div>
          {/* View Collection Button */}
          <div className="text-center mt-8">
            <button className="px-6 py-3 text-borderDark bg-lightGray hover:bg-primary hover:text-white rounded-lg font-satoshi text-sm">
              View collection
            </button>
          </div>

        </div>


      </div>


    </div>


  );
};

export default HomePage;