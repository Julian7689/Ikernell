'use client'; 
import { Key, useState } from "react"
import {motion} from 'framer-motion';
import { useRouter } from "next/navigation"
import { Globe, Plus, Search } from "lucide-react";

//numero total 33 personas
// 24 desarrolladores
//8 lideres de proyecto
// 1 administador
type TeamsContentProps = {
    id: number;
    name: string;
    lastname: string;
    email: string;
    level: string;
    Speciallity: string;
    age: string;
    image: string;
    description: string;
    createdAt: string;
};

const teams: TeamsContentProps[] = [
    {
        id: 1,
        name: "Julian",
        lastname: "Rodriguez",
        email: "julian@21Rodriguez.com",
        level: "Leader",
        Speciallity: "Full Stack Developer",
        age: "30",
        image: "https://avatars.githubusercontent.com/u/12345678?v=4",
        description: "Lider de proyecto con experiencia en desarrollo full stack, especializado en React y Node.js.",
        createdAt: "2023-01-05",
    },
    {
        id: 2,
        name: "Gabriel",
        lastname: "Caceres",
        email: "caceres@21Rodriguez.com",
        level: "developer",
        Speciallity: "Backend Developer",
        age: "19",
        image: "https://avatars.githubusercontent.com/u/12345678?v=4",
        description: "Desarrollar Senior con 3 años de experiencia trbajando con SpringBooot.",
        createdAt: "2021-01-05",
    },
    {
        id: 3,
        name: "Nathaly",
        lastname: "Pastrana",
        email: "NathaPastrana@21GALLO.com",
        level: "Leader",
        Speciallity: "Frontend Developer",
        age: "22",
        image: "https://avatars.githubusercontent.com/u/12345678?v=4",
        description: "Desarrollar Senior con 5 años de experiencia trbajando con React,Vue, Angular.",
        createdAt: "2019-01-05",
    },
    {
        id: 4,
        name: "Miguel",
        lastname: "Rabith",
        email: "MiguelRabij@Judio.com",
        level: "developer",
        Speciallity: "Backend Developer",
        age: "25",
        image: "https://avatars.githubusercontent.com/u/12345678?v=4",
        description: "Desarrollar Junior con experiencia en tecnologias como Springboot, Laravel y C++.",
        createdAt: "2025-01-05",
    },
    {
        id: 5,
        name: "Diego",
        lastname: "Boada",
        email: "Diego123@Boada.com",
        level: "administrator",
        Speciallity: "Full Stack Developer",
        age: "35",
        image: "https://avatars.githubusercontent.com/u/12345678?v=4",
        description: "Desarrollar Senior con 10 años de experiencia trbajando con SpringBooot.",
        createdAt: "2015-01-05",
    },
        {
        id: 6,
        name: "Ginno Sebastian",
        lastname: "Henao",
        email: "Diego123@Boada.com",
        level: "developer",
        Speciallity: "Full Stack Developer",
        age: "35",
        image: "https://avatars.githubusercontent.com/u/12345678?v=4",
        description: "Desarrollar Senior con 10 años de experiencia trbajando con SpringBooot.",
        createdAt: "2015-01-05",
    },
];

type Project = {
    id: number;
    title: string;
    description: string;
    status: string;
    progress: number;
    deadline?: string;
    priority?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Team Heracles",
        description: "4 desarrolladores.",
        status: "En Progreso",
        progress: 75,
        deadline: "2024-12-31",
        priority: "Alta"
    },
    {
        id: 2,
        title: "Team Odiseo",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "Terminado",
        progress: 95,
        deadline: "2024-11-30",
        priority: "Media"
    },
    {
        id: 3,
        title: "Team Argos",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.", 
        status: "En Progreso",
        progress: 20,
      
        deadline: "2025-01-15",
        priority: "Alta"
    },
    {
        id: 4,
        title: "Team Orfeo",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "Terminado",
        progress: 100,

        deadline: "2024-10-30",
        priority: "Baja"
    },
    {
        id: 5,
        title: "Team Theseo",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "En Progreso",
        progress: 60,

        deadline: "2025-02-28",
        priority: "Media"
    },
    {
        id: 6,
        title: "Team Homero",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "En Progreso",
        progress: 80,

        deadline: "2024-12-15",
        priority: "Alta"
    },
    {
        id: 7,
        title: "Team Prometeo",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "En Progreso",
        progress: 50,

        deadline: "2025-01-30",
        priority: "Media"
    },
    {
        id: 8,
        title: "Team Psique",
        description: "Proyecto de desarrollo de software para la gestión de eventos deportivos.",
        status: "En Progreso",
        progress: 30,
        deadline: "2025-03-15",
        priority: "Baja"
    }
];


const TeamsCards = ({ project }: { project: Project }) => (
    <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-7 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg font-semibold">{project.title}</h3>
           
        </div>
        <p className="text-white/70 text-sm mb-3">{project.description}</p>
       
       
    </div>
);

const DevsCards = ({ member }: { member: TeamsContentProps }) => (
    <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-7 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
        <div className="flex items-center mb-4">
            <img 
                src={member.image} 
                alt={`${member.name} ${member.lastname}`}
                className="w-12 h-12 rounded-full mr-3"
            />
            <div>
                <h3 className="text-white text-lg font-semibold">{member.name} {member.lastname}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                    member.level === 'Leader' ? 'bg-purple-500/20 text-purple-300' : 
                    member.level === 'administrator' ? 'bg-red-500/20 text-red-300' :
                    'bg-blue-500/20 text-blue-300'
                }`}>
                    {member.level}
                </span>
            </div>
        </div>
        <p className="text-white/70 text-sm mb-3">{member.Speciallity}</p>
        <p className="text-white/60 text-xs">{member.description}</p>
        <div className="text-white/50 text-xs mt-2">
            Edad: {member.age} años
        </div>
    </div>
);

export default function TeamsContent() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
    
    // Plantilla de los stats
    const stats = [
        { label: "Desarrolladores", value: "24", color: "from-blue-500 to-cyan-500" },
        { label: "Leaders", value: "8", color: "from-green-500 to-emerald-500" },
        { label: "Coordinadores", value: "1", change: "0", color: "from-purple-500 to-violet-500" },
        { label: "Equipos", value: "12", change: "", color: "from-orange-500 to-red-500" }
    ];
    
    // Corregir los nombres de los tabs
    const [activeTab, setActiveTab] = useState('equipos');

    // Filtrar desarrolladores y líderes
    const developers = teams.filter(member => member.level === 'developer');
    const leaders = teams.filter(member => member.level === 'Leader' || member.level === 'administrator');

    return(
        <div>
            <div className="p-6 min-h-screen bg-gradient-to-br">
                <div className="max-w-7xl mx-auto space-y-8">
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
                                    <span className="text-white text-4xl font-bold">teams y desarrolladores</span>
                                </div>
                                <p className="text-white/80 text-xl mb-6">Analiza a tu equipo</p>
                                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    <Plus size={20} />
                                    <span>Nuevo miembro</span>
                                </button>
                            </div>
                            <div className="hidden md:block">
                                <Globe className="w-32 h-32 text-white/20 animate-spin" style={{ animationDuration: '20s' }} />
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Stats teams */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
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
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Tabs developers / Leaders*/}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex space-x-8 border-b border-gray-100 mb-4">
                            <button
                                onClick={() => setActiveTab('equipos')}
                                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'equipos' 
                                        ? 'border-blue-500 text-blue-600' 
                                        : 'border-transparent text-gray-100 hover:text-gray-100'
                                }`}
                            >
                                Teams
                            </button>
                            <button
                                onClick={() => setActiveTab('proyectos')}
                                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'proyectos' 
                                        ? 'border-blue-500 text-blue-600' 
                                        : 'border-transparent text-gray-100 hover:text-gray-100'
                                }`}
                            >
                                Devs
                            </button>
                            <button
                                onClick={() => setActiveTab('calendario')}
                                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'calendario' 
                                        ? 'border-blue-500 text-blue-600' 
                                        : 'border-transparent text-gray-100 hover:text-gray-100'
                                }`}
                            >
                                Leaders
                            </button>
                        </div>

                        <div className="p-10 border border-gray-300 rounded-lg">
                            {/* Proyectos/Teams */}
                            {activeTab === 'equipos' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                    {projects.map(project => (
                                        <TeamsCards key={project.id} project={project} />
                                    ))}
                                </div>
                            )}

                            {/* Desarrolladores */}
                            {activeTab === 'proyectos' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                    {developers.map(member => (
                                        <DevsCards key={member.id} member={member} />
                                    ))}
                                </div>
                            )}

                            {/* Líderes */}
                            {activeTab === 'calendario' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                    {leaders.map(member => (
                                        <DevsCards key={member.id} member={member} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}