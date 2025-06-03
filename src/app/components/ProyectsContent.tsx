'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { AlertCircle, Calendar, Globe, Plus } from 'lucide-react';
import BarBusqueda from './BarBusqueda';

type Project = {
    id: number;
    title: string;
    description: string;
    status: string;
    progress: number;
    team: string;
    tecnologies: string[];
    deadline?: string;
    priority?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Olimpo",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "En Progreso",
        progress: 75,
        team: "Equipo Heracles",
        tecnologies: ["React", "Node.js", "MongoDB", "Spring Boot"],
        deadline: "2024-12-31",
        priority: "Alta"
    },
    {
        id: 2,
        title: "Aquiles",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "Terminado",
        progress: 95,
        team: "Equipo Odiseo",
        tecnologies: ["React", "Laravel", "PgAdmin"],
        deadline: "2024-11-30",
        priority: "Media"
    },
    {
        id: 3,
        title: "Sistema de Autenticación",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.", 
        status: "En Progreso",
        progress: 20,
        team: "Equipo Argos",
        tecnologies: ["React", "Node.js", "PgAdmin", "Spring Boot"],
        deadline: "2025-01-15",
        priority: "Alta"
    },
    {
        id: 4,
        title: "Hades",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "Terminado",
        progress: 100,
        team: "Equipo Orfeo",
        tecnologies: ["React", "Node.js", "MongoDB", "Spring Boot"],
        deadline: "2024-10-30",
        priority: "Baja"
    },
    {
        id: 5,
        title: "Themis",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "En Progreso",
        progress: 60,
        team: "Equipo Theseo",
        tecnologies: ["React", "Node.js", "MongoDB", "Spring Boot"],
        deadline: "2025-02-28",
        priority: "Media"
    },
    {
        id: 6,
        title: "Argonautas",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "En Progreso",
        progress: 80,
        team: "Equipo Argos",
        tecnologies: ["React", "Node.js", "MongoDB", "Spring Boot"],
        deadline: "2024-12-15",
        priority: "Alta"
    },
    {
        id: 7,
        title: "Atalaya",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "En Progreso",
        progress: 50,
        team: "Equipo Prometeo",
        tecnologies: ["React", "Node.js", "MongoDB", "Spring Boot"],
        deadline: "2025-01-30",
        priority: "Media"
    },
    {
        id: 8,
        title: "Milu",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "En Progreso",
        progress: 30,
        team: "Equipo Artemisa",
        tecnologies: ["React", "Node.js", "MongoDB", "Spring Boot"],
        deadline: "2025-03-15",
        priority: "Baja"
    }
];


const getStatusColor = (status: string): string => {
    switch (status) {
        case 'Terminado': return 'bg-green-100 text-green-800';
        case 'En Progreso': return 'bg-blue-100 text-blue-800';
        case 'Planificado': return 'bg-yellow-100 text-yellow-800';
        case 'Retrasado': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

const getPriorityColor = (priority?: string): string => {
    switch (priority) {
        case 'Alta': return 'text-red-600';
        case 'Media': return 'text-yellow-600';
        case 'Baja': return 'text-green-600';
        default: return 'text-gray-600';
    }
};

export default function ProyectsContent() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    
    const ProjectCard = ({ project }: { project: Project }) => (
        <motion.div 
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-1">{project.title}</h3>
                    <p className="text-gray-100 text-sm">{project.team}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                </span>
            </div>
            
            <div className="mb-4">
                <p className="text-sm text-gray-100 mb-3">{project.description}</p>
                <div className="flex justify-between text-sm mb-1">
                    <span>Progreso</span>
                    <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${project.progress}%` }}
                    ></div>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-gray-100">{project.deadline || 'Sin fecha'}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <AlertCircle size={16} className={getPriorityColor(project.priority)} />
                    <span className={getPriorityColor(project.priority)}>{project.priority || 'Sin prioridad'}</span>
                </div>
            </div>
            
            <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                    {project.tecnologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-600">
                <span>{project.status} - {project.progress}%</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Ver proyecto →
                </button>
            </div>
        </motion.div>
    );

    const stats = [
        { label: "Interrupciones", value: "10", change: "+2", color: "from-blue-500 to-cyan-500" },
        { label: "Tareas completadas", value: "247", change: "+45", color: "from-green-500 to-emerald-500" },
        { label: "Tareas faltantes", value: "100", change: "0", color: "from-purple-500 to-violet-500" },
        { label: "Proyectos activos", value: "12", change: "", color: "from-orange-500 to-red-500" }
    ];

    
    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.team.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='p-6 min-h-screen bg-gradient-to-br  '>
            <div className='max-w-7xl mx-auto space-y-8'>
                {/* Header Section */}
                <motion.div 
                    className='backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/5 rounded-3xl p-8 border border-white/20'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='flex items-center justify-between'>
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-white/60 text-4xl font-light">Gestión de</span>
                                <span className="text-white text-4xl font-bold">Proyectos</span>
                            </div>
                            <p className="text-white/80 text-xl mb-6">Administra proyectos y actividades</p>
                            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                <Plus size={20} />
                                <span>Nuevo Proyecto</span>
                            </button>
                        </div>
                        <div className="hidden md:block">
                            <Globe className="w-32 h-32 text-white/20 animate-spin" style={{ animationDuration: '20s' }} />
                        </div>
                    </div>
                </motion.div>

                {/* Stats Section */}
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white shadow-lg`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="text-3xl font-bold mb-2">{stat.value}</div>
                            <div className="text-white/90 text-sm mb-1">{stat.label}</div>
                            {stat.change && (
                                <div className="text-white/70 text-xs">{stat.change} desde el mes pasado</div>
                            )}
                        </motion.div>
                    ))}
                </div>       

                    <BarBusqueda />
                {/* Projects Grid */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-100 mb-8 my-12">Proyectos Activos</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}