import Head from 'next/head';
import React from 'react';
import CardsSection from './components/CardsSection';
import CardsLine from './components/CardsLine';
import PortafolioPage from './components/services';
import Questions from './components/questions';


export default function Homepage() {
  return (
    <>
      <Head>
        <title>Ikernell</title>
      </Head>
      <main className="py-6 px-12 text-center bg-[#a5a8ff]">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <a href="#" className='text-2xl font-bold text-[#070077]'>Ikernell</a>
          
          <div className="flex space-x-8 items-center">
            <a href="#sobre-nosotros" className="text-[#070077] hover:text-white transition-colors">Sobre Nosotros</a>
            <a href="#servicios" className="text-[#070077] hover:text-white transition-colors">Servicios</a>
            <a href="#contacto" className="text-[#070077] hover:text-white transition-colors">Contacto</a>
          </div>

          <a href="#login" className='px-4 py-2 bg-[#070077] text-white rounded-lg hover:bg-[#a5a8ff] hover:text-[#070077] transition-colors'>Inicio de sesión</a>
        </nav>
      </main>

        <section className='py-35 px-12  bg-[#e4e6ff]'>
        <h1 className="text-5xl font-bold mb-4 text-left">Bienvenido a Ikernell</h1>
        <p className="text-lg mb-40 text-left max-w-2xl text-justify">tecnología enfocada en crear soluciones digitales personalizadas que transforman la forma en que las organizaciones operan, crecen e innovan. Nos especializamos en desarrollo de software, consultoría tecnológica e implementación de sistemas inteligentes que se adaptan a las verdaderas necesidades de nuestros clientes.</p>
        <a
          href="#contacto"
          className="inline-block px-6 py-2 bg-black text-white rounded-lg mr-4 no-underline">
          Contáctanos
        </a>
        <a
          href="#contacto"
          className="inline-block px-6 py-2 bg-black text-white rounded-lg no-underline">
          Ver proyectos
        </a>
        </section>
        
      <section className="py-12 px-8 bg-[#a5a8ff]" id="sobre-nosotros">
        <h2 className="text-3xl font-semibold mb-4 text-center">Proposito de Ikernell</h2>
        <CardsSection />
      </section>

      <section className="py-12 px-8 bg-[#e4e6ff]">
        <h2 className="text-3xl font-semibold mb-4 text-center">Lineamientos de Ikernell</h2>
       <CardsLine />
      </section>

      <section className= "py-10 px-4 bg-[#a5a8ff] text-center" id="servicios">
        <PortafolioPage />
        </section>

      <section className="py-12 px-8 bg-[#e4e6ff]" id="preguntas">
        <h2 className='text-3xl font-semibold mb-4 text-center'>Preguntas frecuentes</h2>
        <Questions />
      </section>
      <section className='py-16 px-8 bg-gradient-to-b from-[#e4e6ff] to-[#ffffff]' id="contacto">
        <div className="max-w-4xl mx-auto">
          <h2 className='text-4xl font-bold mb-4 text-center text-[#070077]'>¡Mantente conectado!</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">Únete a nuestra comunidad y mantente al día</p>
          
          <div className="bg-white p-10 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            <p className="text-lg text-gray-700 mb-8 text-center">Suscríbete para recibir noticias, actualizaciones y contenido exclusivo</p>
            
            <form className="space-y-6">
              <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                <input 
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-6 py-3 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#070077] focus:ring-2 focus:ring-[#070077]/20 transition-all"
                />
              </div>
              
              <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                <input
                  type="email" 
                  placeholder="Tu correo electrónico"
                  className="w-full px-6 py-3 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#070077] focus:ring-2 focus:ring-[#070077]/20 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#070077] text-white text-lg font-semibold py-3 px-6 rounded-xl hover:bg-[#a5a8ff] hover:text-[#070077] transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Suscribirse ahora
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-6 text-center">
              Nos comprometemos a proteger tus datos y nunca compartirlos
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 font-medium">© 2024 Ikernell. Todos los derechos reservados.</p>
          </div>
        </div>
      </section>
    </>
  );
}
