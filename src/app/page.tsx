'use client';
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';

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
  {
    question: "How does Ikernell work?",
    answer: "Ikernell combines AI-powered tools and strategic management frameworks to streamline your project workflows and maximize team productivity.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial with full access to all premium features so you can experience the Ikernell difference.",
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-black text-white min-h-screen font-inter">
      <Head>
        <title>Ikernell - Empowering Innovation Through Smart Technology</title>
        <meta name="description" content="Ikernell - A project management platform that combines cutting-edge technology with strategic investment." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@100..900&family=Playfair+Display:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <nav className="py-6 px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-[#8800FF] font-playfair">Ikernell</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-[#AA0DFF] transition">Home</a>
            <a href="#about" className="text-white hover:text-[#AA0DFF] transition">What is Ikernell?</a>
            <a href="#benefits" className="text-white hover:text-[#AA0DFF] transition">Benefits</a>
            <a href="#invest" className="text-white hover:text-[#AA0DFF] transition">How to invest?</a>
          </div>
          <div>
            <a
              href="./routes/Login"
              className="bg-white text-black font-semibold px-6 py-3 md:px-12 md:py-4 rounded-2xl shadow-md hover:bg-[#AA0DFF] transition"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative bg-gradient-to-r from-[#AA0DFF] to-[#660899] text-black mx-4 md:mx-12 mt-8 rounded-3xl md:rounded-4xl p-8 md:p-14 min-h-[480px]">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-playfair mb-6">
            Transform your ideas into success with Ikernell
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            The next generation project management platform for innovative teams and forward-thinking companies
          </p>
          <a href="#getstarted">
            <button className="bg-white text-[#660899] font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-[#AA0DFF] transition hover:scale-105">
              Get Started Free
            </button>
          </a>
        </div>
       
      </main>

      <p className="mt-24 md:mt-36 text-3xl md:text-4xl text-white text-center font-playfair px-4">
        Empowering innovation through strategic investment and smart technology.
      </p>

      <div className="mt-10 md:mt-20 mx-auto max-w-5xl px-4">
        <p className="text-base text-[#f8f4c4] text-center font-inter font-light leading-relaxed">
          At Ikernell, we believe in the power of technology to solve complex challenges. Our platform brings together AI-driven insights, collaborative tools, and strategic frameworks to help your team achieve extraordinary results.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 md:mt-24 px-4">
        <div className="relative bg-[#121010] w-full md:w-[340px] h-[240px] md:h-[288px] rounded-3xl flex items-center justify-center transition hover:scale-105">
          <div className="bg-white text-black p-4 rounded-full shadow-lg">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09L5.5 12.545 1 8.91l6.061-.909L10 2l2.939 6.001L19 8.91l-4.5 3.636L15.878 18z" />
            </svg>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-[#AA0DFF] to-[rgb(102,8,153)] w-full md:w-[480px] h-[280px] md:h-[340px] rounded-3xl flex items-center justify-center shadow-[0_0_60px_#AA0DFF] transition hover:scale-105 my-8 md:my-0">
          <div className="text-white text-center px-6">
            <h3 className="text-2xl font-bold mb-3">Smart Technology</h3>
            <p>Leverage AI-powered insights to make data-driven decisions</p>
          </div>
        </div>

        <div className="relative bg-[#121010] w-full md:w-[340px] h-[240px] md:h-[288px] rounded-3xl flex items-center justify-center transition hover:scale-105">
          <div className="text-[#f8f4c4] text-center px-6">
            <h3 className="text-2xl font-bold mb-3">Seamless Integration</h3>
            <p>Connect with your favorite tools for a unified workflow</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="relative mt-24 md:h-[800px] px-4">
        <div className="md:absolute bg-[#121010] w-full md:w-[340px] h-[280px] md:h-[480px] rounded-3xl transition hover:scale-105 md:left-[100px] md:top-[50px] mb-8 md:mb-0"></div>
        <div className="md:absolute md:top-[70px] md:left-[500px] w-full md:w-[800px]">
          <p className="text-3xl md:text-5xl text-white font-playfair">
            Turn ideas into action with seamless project organization and smart collaboration.
          </p>
        </div>
        <div className="md:absolute md:top-[250px] md:left-[500px] w-full md:w-[700px] mt-6 md:mt-0">
          <p className="text-lg md:text-xl text-white font-playfair">
            Plan, prioritize, and execute projects effortlessly with our intuitive platform designed for modern teams. Ikernell helps you stay organized, focused, and ahead of the curve.
          </p>
        </div>

        <div>
          <a href="#more">
            <button className="md:absolute md:top-[400px] md:left-[500px] bg-[#AA0DFF] text-black font-medium px-8 py-3 md:px-12 md:py-4 rounded-2xl hover:bg-[#AA0DFF] transition hover:scale-105 shadow-[0_0_30px_#AA0DFF] mt-6 md:mt-0">
              Learn about Ikernell
            </button>
          </a>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="relative mt-24 md:h-[800px] px-4">
        <div className="md:absolute bg-[#121010] w-full md:w-[450px] h-[320px] md:h-[580px] rounded-3xl transition hover:scale-105 md:left-[850px] md:top-[-250px] mb-8 md:mb-0"></div>
        <div className="md:absolute md:top-[-60px] md:left-[50px] w-full md:w-[820px]">
          <p className="text-3xl md:text-5xl text-white font-playfair">
            Where innovation meets intelligent project control
          </p>
        </div>
        <div className="md:absolute md:top-[100px] md:left-[50px] w-full md:w-[700px] mt-6 md:mt-0">
          <p className="text-lg md:text-xl text-white font-playfair">
            Ikernell is a project management platform that combines cutting-edge technology with strategic insights to help teams work smarter, not harder. Our intuitive interface and powerful features enable you to stay on top of projects while focusing on what matters most: driving innovation.
          </p>
        </div>

        <div>
          <a href="#invest">
            <button className="md:absolute md:top-[240px] md:left-[50px] bg-[#AA0DFF] text-black font-medium px-8 py-3 md:px-12 md:py-4 rounded-2xl hover:bg-[#AA0DFF] transition hover:scale-105 shadow-[0_0_30px_#AA0DFF] mt-6 md:mt-0">
              How We Manage
            </button>
          </a>
        </div>
      </div>


      <div id="getstarted" className="relative mt-32 bg-[#AA0DFF] rounded-3xl mx-4 md:mx-24 py-16 px-4 md:px-12">
        <div className="text-center">
          <p className="text-black text-3xl md:text-5xl font-playfair mb-8">
            Smart tools for powerful teams
          </p>
          <p className="text-black text-lg mb-10 max-w-3xl mx-auto">
            Join thousands of innovative teams already using Ikernell to streamline their projects and boost productivity.
          </p>
          <a href="#signup">
            <button className="bg-black text-white font-medium px-8 py-3 md:px-12 md:py-4 rounded-2xl hover:bg-[#60488069] transition hover:scale-105 shadow-lg">
              Get started
            </button>
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-32 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f8f4c4] font-playfair mb-16">
          Have a question?
        </h2>
      </div>
     
      <div className="mb-24 max-w-3xl mx-auto space-y-4 px-4">
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
                {openIndex === index ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13H5v-2h14v2z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                )}
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

      {/* Footer */}
      <footer className="bg-[#121010] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-[#8800FF] font-playfair mb-4">Ikernell</div>
              <p className="text-gray-400 text-sm">
                Empowering innovation through strategic investment and smart technology.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Ikernell. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#AA0DFF] text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}