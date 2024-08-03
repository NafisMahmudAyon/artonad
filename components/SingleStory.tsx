import Story from "@/app/story";
import Image from "next/image";
import React from "react";

interface SingleStoryProps extends React.AllHTMLAttributes<HTMLDivElement> {
  index: number;
}

const SingleStory: React.FC<SingleStoryProps> = ({ index }) => {
  const story = Story[index];
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{story.title}</h1>
      <p className="text-gray-600 mb-2">By {story.author} on {story.date}</p>
      <p className="text-gray-800 mb-4">
        <a href={story.sourceUrl} className="underline text-blue-600" target="_blank" rel="noopener noreferrer">
          {story.source}
        </a>
      </p>
      {story.quote.length > 0 &&

        <blockquote className="italic bg-gray-100 p-4 mb-4 border-l-4 border-gray-300">{story.quote}</blockquote>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {story.img.map((src, i) => (
          <div key={i} className="relative h-64 w-full">
            <Image
              src={src}
              alt={story.imgCaption[i]}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <p className="absolute bottom-0 bg-black bg-opacity-50 text-white text-xs p-2 rounded-b-md w-full">{story.imgCaption[i]}</p>
          </div>
        ))}
      </div>
      <div className="text-gray-800 space-y-4">
        {story.story.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default SingleStory;
