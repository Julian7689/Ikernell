"use client";

import React from 'react';
import Card from './cardsvision';

const CardsSection = () => {
  const cardsData = [
    {
      title: 'Misión',
      description: 'Desarrollar soluciones digitales innovadoras que impulsen a nuestros clientes al éxito.',
    },
    {
      title: 'Visión',
      description: 'Ser reconocidos como líderes en tecnología y desarrollo empresarial a nivel regional.',
    },
    {
      title: 'Valores',
      description: 'Compromiso, excelencia, innovación, trabajo en equipo y responsabilidad social.',
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 justify-center items-center">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardsSection;
