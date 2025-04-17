"use client";

import React, { useState } from 'react';

const lineamientos = [
    {
        title: "1. Innovación Constante",
        text: "Transformamos ideas en soluciones disruptivas que impulsan el crecimiento empresarial.",
        icon: "💡"
    },
    {
        title: "2. Enfoque Humano", 
        text: "Construimos tecnología centrada en las personas, priorizando la experiencia del usuario.",
        icon: "👥"
    },
    {
        title: "3. Excelencia Operativa",
        text: "Optimizamos procesos para garantizar resultados excepcionales y sostenibles.",
        icon: "⚡"
    },
    {
        title: "4. Transparencia Total",
        text: "Fomentamos relaciones basadas en la confianza y comunicación clara con nuestros clientes.",
        icon: "🤝"
    },
    {
        title: "5. Mejora Continua",
        text: "Evolucionamos constantemente, aprendiendo e innovando en cada proyecto.",
        icon: "📈"
    },
    {
        title: "6. Compromiso con el Impacto",
        text: "Desarrollamos tecnología con propósito para construir un futuro más sostenible.",
        icon: "🎯"
    }
];

const CardsLine = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prev) => (prev + 1) % lineamientos.length);
    };

    const prevCard = () => {
        setCurrentIndex((prev) => (prev - 1 + lineamientos.length) % lineamientos.length);
    };

    return (
        <div className="w-full max-w-4xl mx-auto text-center py-12">
            <div className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--tertiary)] shadow-2xl rounded-2xl p-8 transition-all duration-300">
                <div className="text-6xl mb-4">{lineamientos[currentIndex].icon}</div>
                <h3 className="text-2xl font-bold text-[var(--secondary)] mb-4">
                    {lineamientos[currentIndex].title}
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                    {lineamientos[currentIndex].text}
                </p>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={prevCard}
                        className="bg-[var(--secondary)] text-white hover:bg-[var(--primary)] hover:text-[var(--secondary)] px-6 py-2 rounded-full transition-colors duration-300"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={nextCard}
                        className="bg-[var(--secondary)] text-white hover:bg-[var(--primary)] hover:text-[var(--secondary)] px-6 py-2 rounded-full transition-colors duration-300"
                    >
                        Siguiente
                    </button>
                </div>

                <div className="flex justify-center mt-6 gap-2">
                    {lineamientos.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-[var(--secondary)] w-4' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardsLine;