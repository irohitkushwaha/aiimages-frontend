"use client"
import React, { useState } from "react";
import TypewriterEffect from "../features/typewritereffect";


export default function SearchBar() {
  const [placeholder, setPlaceholder] = useState("Search AI Generated Images");

  return (
    <div>
      <div className="md:max-w-[500px] mx-auto">
        <div className="w-full flex items-center rounded-md bg-white outline-2 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-400 py-[10px] gap-[10px] px-[15px] ">
          <div className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="text-gray-500 size-7 pt-[3px]"
              fill="currentColor"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </div>
          <span className="absolute opacity-0 pointer-events-none">
            <TypewriterEffect
              text="Search AI Generated Images"
              typingSpeed={100}
              erasingSpeed={70}
              pauseBeforeErasing={600}
              pauseBeforeTyping={200}
              willErase={true}
              loop={true}
              onTextUpdate={setPlaceholder}
            />
          </span>
          <input
            id="Search AI Generated Images"
            name="Search AI Generated Images"
            type="text"
            placeholder={placeholder}
            className="text-gray-900 font-semibold placeholder:text-gray-400 placeholder:text-[16px] placeholder:font-semibold focus:outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}
