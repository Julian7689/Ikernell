'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const proyectos = [
  {
    titulo: "Sistema de Gestión",
    descripcion: "Sistema integral para gestión empresarial",
    tecnologias: ["Angular", "Express", "PostgreSQL", "Docker"],
    imagen: "./public/images/pexels-kevin-ku-92347-577585.jpg"
  },
  {
    titulo: "E-commerce Platform",
    descripcion: "Plataforma de comercio electrónico con integración de pagos",
    tecnologias: ["React", "Node.js", "MongoDB", "Stripe"],
    imagen: "https://placehold.co/600x400/e4e6ff/070077?text=E-commerce"
  },
  {
    titulo: "App Móvil",
    descripcion: "Aplicación móvil para delivery de comida",
    tecnologias: ["React Native", "Firebase", "Redux", "Google Maps API"],
    imagen: "https://placehold.co/600x400/e4e6ff/070077?text=App+Móvil"
  }
];

const PortafolioPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % proyectos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#070077]">
        Nuestro Portafolio
      </h1>

      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {proyectos.map((proyecto, index) => (
              <div 
                key={index}
                className="min-w-full p-8 bg-[#e4e6ff]"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-[#070077]">
                      {proyecto.titulo}
                    </h2>
                    <p className="text-lg text-gray-700">
                      {proyecto.descripcion}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-full bg-[#070077] text-white text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      width={600}
                      height={400}
                      className="rounded-lg w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {proyectos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#070077] w-6' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortafolioPage;
