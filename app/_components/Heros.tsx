import Image from "next/image";
import React from "react";

const Heros = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[350px] md:w-[350px]">
          <Image
            src="/documents.png"
            alt="documents photo"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative h-[350px] w-[350px] hidden  md:block">
          <Image
            src="/reading.png"
            alt="reading photo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Heros;