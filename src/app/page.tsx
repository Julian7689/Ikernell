'use client';
import Head from 'next/head';
import { useState } from 'react';

const questions = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase, no questions asked.",
  },
  {
    question: "How do I track my order?",
    answer: "After placing an order, you'll receive an email with tracking info.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, our team is available 24/7 via chat, phone, or email.",
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number| null>(null);

  return (
    <div className="bg-black text-white min-h-screen font-inter">
      <Head>
        <title>Ikernell</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Inter+Tight:wght@100..900&family=Playfair+Display:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <nav className="py-6 px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-xl font-semibold text-[#f8f4c4] font-playfair">Ikernell</div>
          <div className="flex space-x-8">
            <a href="#" className="text-[#F3EFC9] hover:text-white transition">Home</a>
            <a href="#" className="text-[#F3EFC9] hover:text-white transition">What is Ikernell?</a>
            <a href="#" className="text-[#F3EFC9] hover:text-white transition">Benefits</a>
            <a href="#" className="text-[#F3EFC9] hover:text-white transition">How to invest?</a>
          </div>
          <div>
            <a
              href="#"
              className="bg-[#f8f4c4] text-black font-medium px-12 py-4 rounded-2xl shadow-md hover:bg-[#f1eeb7] transition"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative bg-[#f8f4c4] text-black mx-12 mt-8 rounded-4xl p-14 min-h-[480px]">
        <div className="absolute bottom-[-20px] left-[-20px] bg-black p-20 rounded-3xl w-[650px] shadow-xl"></div>
      </main>

      <p className="mt-35 text-4xl text-white text-center font-playfair">
        Empowering innovation through strategic investment and smart technology.
      </p>

      <div className="mt-20 mx-auto max-w-5xl">
        <p className="text-base text-[#f8f4c4] text-center font-inter font-light leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>

      <div className="flex justify-center items-center gap-8 mt-24">
        <div className="relative bg-[#121010] w-[340px] h-[288px] rounded-3xl flex items-center justify-center transition hover:scale-105">
          <div className="bg-[#f8f4c4] text-black p-4 rounded-full shadow-lg">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09L5.5 12.545 1 8.91l6.061-.909L10 2l2.939 6.001L19 8.91l-4.5 3.636L15.878 18z" />
            </svg>
          </div>
        </div>

        <div className="relative bg-[#f8f4c4] w-[480px] h-[340px] rounded-3xl flex items-center justify-center shadow-[0_0_60px_#f8f4c4] transition hover:scale-105">
          <img src="/language.svg" alt="Language" />
        </div>

        <div className="relative bg-[#121010] w-[340px] h-[288px] rounded-3xl flex items-center justify-center transition hover:scale-105">
          <div className="text-[#f8f4c4]">
            <img src="/today.svg" alt="Today" />
          </div>
        </div>
      </div>

      <div className="relative mt-24 h-[800px]">
        <div className="absolute bg-[#121010] w-[340px] h-[480px] rounded-3xl transition hover:scale-105 left-[100px] top-[50px]"></div>
        <div className="absolute top-[70px] left-[500px] w-[800px]">
          <p className="text-5xl text-white font-playfair">
            Turn ideas into action with seamless project organization and smart collaboration.
          </p>
        </div>
        <div className="absolute top-[250px] left-[500px] w-[700px]">
          <p className="text-xl text-[#F3EFC9] font-playfair">
            Plan, prioritize, and execute projects effortlessly...
          </p>
        </div>

        <div>
          <a href="">
            <button className="absolute top-[400px] left-[500px] bg-[#f8f4c4] text-black font-medium px-12 py-4 rounded-2xl hover:bg-[#f1eeb7] transition hover:scale-105 shadow-[0_0_60px_#f8f4c4]">
              Learn about Ikernell
            </button>
          </a>
        </div>
      </div>

      <div className='relative mt-24 h-[800px]'>
        <div className='absolute bg-[#121010] w-[450px] h-[580px] rounded-3xl transition hover:scale-105 left-[850px] top-[-250px]'></div>
        <div className='absolute top-[-60px] left-[50px] w-[820px]'>
          <p className='text-5xl text-white font-playfair'>
            Where innovation meets intelligent project control
          </p>
        </div>
        <div className='absolute top-[100px] left-[50px] w-[700px]'>
          <p className='text-xl text-[#F3EFC9] font-playfair'>
            Ikernell is a project management platform that combines cutting-edge technology...
          </p>
        </div>

        <div>
          <a href="">
            <button className='absolute top-[240px] left-[50px] bg-[#f8f4c4] text-black font-medium px-12 py-4 rounded-2xl hover:bg-[#f1eeb7] transition hover:scale-105 shadow-[0_0_60px_#f8f4c4]'>
              How We manage
            </button>
          </a>
        </div>
      </div>

      <div className='relative'>
        <img src="/Rectangle 13.svg" alt="Decor" className='relative top-[-350px]' />
        <img src="/Vector 1.svg" alt="Vector 1" className='relative top-[-743px] left-[880px]' />
        <img src="/Vector 2.svg" alt="Vector 2" className='relative top-[-939px] left-[1028px]' />
        <img src="/Vector 4.svg" alt="Vector 4" className='relative top-[-1014px] left-[933px]' />
        <img src="/Vector 5.svg" alt="Vector 5" className='relative top-[-1170px] left-[1004px]' />
        <div className='absolute top-[-190px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <p className="text-black text-5xl font-playfair">
            Smart tools for powerful teams
          </p>
          <div className='absolute top-[130px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px]'>
            <a href="">
              <button className='bg-black text-white font-medium px-12 py-4 rounded-2xl hover:bg-[#121010] transition hover:scale-105 shadow-[0_0_60px_#f8f4c4]'>
                Get started
              </button>
            </a>
            <div>
              <img src="/Have a question_.svg" alt="FAQ" className='relative top-[250px] left-[100px]' />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="mt-32 mb-24 max-w-3xl mx-auto space-y-4 px-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-[#121010] text-white rounded-xl transition-all duration-300"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-base font-medium truncate pr-4">{item.question}</span>
              <div className="bg-[#f8f4c4] text-black p-2 rounded-full hover:scale-105 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 20l-4.35-4.35a7.5 7.5 0 10-1.414 1.414L20 21l1-1zM4 11a7 7 0 1114 0 7 7 0 01-14 0z" />
                </svg>
              </div>
            </div>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-300 border-t border-zinc-800">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
