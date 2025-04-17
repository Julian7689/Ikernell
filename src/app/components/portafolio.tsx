'use client';

import { title } from 'process';
import React, { useState } from 'react';

const servicios = [
    {
        title: "Desarrollo de software",
        description: "Desarrollamos aplicaciones web, móviles y de escritorio totalmente personalizadas, alineadas con los objetivos y operaciones de tu empresa. Desde sistemas de gestión hasta plataformas interactivas, creamos software escalable, eficiente y seguro.",
        
    },
    {
        title: "Asesoría en tecnología",
        description: "Analizamos tus procesos y diseñamos estrategias tecnológicas a medida para mejorar la productividad, automatizar tareas y generar impacto real en tus resultados de negocio.",
        
    },
    {
        title: "Consultoría en tecnología",
        description: "Proporcionamos soluciones tecnológicas estratégicas para optimizar tus procesos y aumentar tus ventas.",
    },
    {
        title: "Implementación de sistemas",
        description: "Integramos herramientas digitales como ERP, CRM y sistemas personalizados para automatizar flujos de trabajo, mejorar la trazabilidad y facilitar la toma de decisiones con datos en tiempo real.",
    },
    {
        title: "Mantenimiento y soporte",
        description: "Ofrecemos mantenimiento correctivo, preventivo y evolutivo de tus sistemas. Nuestro soporte técnico está siempre disponible para resolver incidencias, asegurar la continuidad operativa y mantener tus plataformas actualizadas.",
    },
    {
        title: "Desarrollo de aplicaciones móviles",
        description: "Creamos aplicaciones móviles intuitivas y funcionales para iOS y Android, diseñadas para mejorar la experiencia del cliente, ampliar tu alcance digital y facilitar procesos internos desde cualquier lugar",
    },
    {
        title: "Desarrollo de aplicaciones web",
        description: "Desarrollamos aplicaciones web modernas, rápidas y seguras, accesibles desde cualquier navegador. Desde sistemas internos hasta plataformas B2B o B2C, tu presencia digital estará a otro nivel.",
    },
    {
        title: "Desarrollo de aplicaciones de escritorio",
        description: "Creamos soluciones robustas y personalizadas para ambientes de escritorio que requieren alto rendimiento y funcionalidades específicas, ideales para empresas con procesos locales o sin conectividad constante.",
    },
    {
        title: "Aseoramiento en mantenimiento de servidores",
        description: "Ofrecemos orientación experta para la configuración, monitoreo y mantenimiento de tus servidores, ya sea en la nube o en infraestructura física. Asegura un rendimiento óptimo y evita tiempos de inactividad.",
    },
    {
    },
    
    
    
]
