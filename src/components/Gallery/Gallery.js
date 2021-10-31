import React from "react";

const Gallery = () => {
  return (
    <div>
      <h1 className="text-4xl text-gray-500 font-extrabold mt-12">Gallery</h1>
      <div className="container mx-auto">
        <div className="grid-cols-3 p-20 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
            />
          </div>
          <div className="w-full col-span-2 row-span-2 rounded">
            <img
              src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/1319829/pexels-photo-1319829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/3629813/pexels-photo-3629813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/1493088/pexels-photo-1493088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
