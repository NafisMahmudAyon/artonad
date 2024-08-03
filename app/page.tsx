'use client';
import Story from "@/app/story";
import SingleStory from "@/components/SingleStory";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [hide, setHide] = useState(true);
  const [index, setIndex] = useState(0);

  return (
    <main className="px-3 md:px-6 lg:px-10 pt-5 lg:pt-10 w-full lg:max-w-[1400px] mx-auto relative">
      <h2 className="text-5xl text-center text-white">আর্তনাদ</h2>
      <h3 className="text-xl text-center pb-10 text-white">২৪-এর আর্তনাদ</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 poppins-regular">
        {Story.map((story, i) => {
          return (
            <div
              key={i}
              className="relative bg-gray-600 rounded-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 "
              onClick={() => { setHide(false); setIndex(i); }}
            >
              <div className="relative w-full h-64 lg:h-52">
                <Image
                  className="object-cover"
                  src={story.image}
                  alt={story.title}
                  layout="fill"
                  loading="lazy"
                  objectPosition="top"
                />
              </div>
              <div className="p-4 text-center text-white">
                <h2 className="font-bold text-lg">{story.shortTitle}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center text-white pb-6">
        <p>এটি কেবল শুরু। এই আর্তনাদের তালিকা লম্বা হতে থাকবে।</p>
        <p className="mt-4 text-xl">আমরা সকল শহীদের মাগফিরাত কামনা করি।</p>
      </div>
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 overflow-auto ${hide ? "hidden" : "block"}`}>
        <div className=" p-4 rounded-lg max-w-4xl w-full relative h-[90%] overflow-y-auto">
          <span className="absolute top-4 right-4 cursor-pointer text-red-500 text-xl font-bold p-2 rounded-full  hover:text-white hover:bg-red-500 border border-red-500 w-7 h-7 flex items-center justify-center leading-none" onClick={() => setHide(true)}>&times;</span>
          <SingleStory index={index} />
        </div>
      </div>
    </main>
  );
}
