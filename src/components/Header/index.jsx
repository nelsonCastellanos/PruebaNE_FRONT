import React from 'react';
import './index.css'; 

const Header = () => {
  return (
    <header className="bg-white text-slate-900 p-4 shadow-sm" >
      <div className="container mx-auto grid grid-cols-2 items-center">
        <div className="grid grid-rows-2 gap-1 items-center">
            <div className="text-3xl font-bold text-[#1E293B]">NOTES STREAM</div>
            <div className="text-m text-[#4B5563]">Got your ideas, save them here</div>
        </div>
        <div className="flex justify-end items-center space-x-2">
          <span className="text-lg text-[#6B7280] p-2">name@mail.co </span>
          <button className="bg-[#2563EB] hover:bg-[#1D4ED8] px-2 py-2 rounded-md text-sm text-white">Log Out</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

