"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Questions = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "¿Qué es Ikernell?",
      answer: "Ikernell es una empresa de tecnología especializada en crear soluciones digitales personalizadas para organizaciones, enfocándose en desarrollo de software, consultoría tecnológica e implementación de sistemas inteligentes."
    },
    {
      question: "¿Qué servicios ofrece Ikernell?", 
      answer: "Ofrecemos desarrollo de software a medida, consultoría tecnológica, implementación de sistemas empresariales, desarrollo de aplicaciones móviles y servicios de integración de sistemas."
    },
    {
      question: "¿Cómo puedo contactar a Ikernell?",
      answer: "Puede contactarnos a través de nuestro formulario de contacto en el sitio web, por correo electrónico o llamando a nuestras oficinas. También puede programar una consulta inicial gratuita."
    },
    {
      question: "¿Trabajan con empresas de cualquier tamaño?",
      answer: "Sí, trabajamos con empresas de todos los tamaños, desde startups hasta grandes corporaciones, adaptando nuestras soluciones a las necesidades específicas de cada cliente."
    },
    {
      question: "¿Cuál es el proceso de desarrollo de Ikernell?",
      answer: "Nuestro proceso incluye análisis inicial, planificación detallada, desarrollo iterativo, pruebas exhaustivas y soporte continuo post-implementación."
    },
    {
      question: "¿Qué tecnologías utiliza Ikernell?",
      answer: "Utilizamos las últimas tecnologías incluyendo React, Angular, Node.js, Python, AWS, y más, seleccionando la stack más apropiada para cada proyecto."
    },
    {
      question: "¿Ofrecen soporte después del desarrollo?",
      answer: "Sí, proporcionamos soporte técnico continuo, mantenimiento y actualizaciones para todos nuestros proyectos, asegurando el funcionamiento óptimo de las soluciones implementadas."
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Típicamente, los proyectos pueden tomar entre 2-6 meses, pero proporcionamos estimaciones detalladas durante la fase de planificación."
    }
  ];

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {questions.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center bg-gradient-to-r from-[#070077] to-[#a5a8ff] text-white"
            onClick={() => toggleQuestion(index)}
          >
            <span className="text-lg font-semibold">{item.question}</span>
            <span className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#e4e6ff]"
              >
                <p className="px-6 py-4 text-gray-700">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Questions;