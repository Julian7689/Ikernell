'use client';
import { Space2 } from '@/app/components/space2';
import { Space3 } from '@/app/components/space3';
import { Space4 } from '@/app/components/space4';
import { useState } from 'react';
import { Space5 } from './space5';
import { Space6 } from './space6';
import { Space7 } from './space7';
import { Space8 } from './space8';
import { Space9 } from './space9';

export default function Space1() {
  return (
    <div className="w-full h-full bg-[#262235] rounded-2xl p-4 md:p-6 lg:p-8 overflow-y-auto">
      {/* Header section */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center">
          <span className="text-zinc-500 text-2xl md:text-3xl font-medium">Hi, </span>
          <span className="text-white text-2xl md:text-3xl font-medium ml-2">Julian!</span>
        </div>
        <div className="text-white text-2xl md:text-3xl font-medium mt-2">What do you want?</div>
      </div>
      
      {/* Featured spaces - First row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
        <Space2 />
      {  /*  <Space3 />*/}
     <Space4 /> 
      </div>
      
      {/* Recent Activities section */}
      <div className="mt-6 md:mt-8 mb-4">
        <h2 className="text-white text-lg md:text-xl font-medium">Recent Activities</h2>
      </div>
      
      {/* Recent Activities spaces */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
         <Space3 />
       <Space6 /> 
       { /*<Space7 /> */}
       { /*<Space8 /> */}
       { /* <Space9 /> */}
      </div>
    </div>
  );
}