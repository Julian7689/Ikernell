'use client';
import { useState } from 'react';
import { 
  Plus,
  TrendingUp,
  Calendar,
  Users,
  BarChart3,
  Clock,
  Filter,
  Activity,
  Zap,
  Target,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
export default function DashboardContent() {
  const [activeFilter, setActiveFilter] = useState('all');

  const recentActivities = [
    {
      id: 1,
      title: "Sistema de Autenticación",
      type: "development",
      progress: 20,
      priority: "high",
      dueDate: "2025-06-02",
      team: ["JS", "MR", "AL"],
      status: "active"
    },
    {
      id: 2,
      title: "Themis",
      type: "design",
      progress: 60,
      priority: "medium",
      dueDate: "2025-06-05",
      team: ["UI", "UX"],
      status: "review"
    },
    {
      id: 3,
      title: "Aquiles",
      type: "backend",
      progress: 95,
      priority: "high",
      dueDate: "2025-06-01",
      team: ["BE", "DV"],
      status: "complete"
    },
    {
      id: 4,
      title: "Ayrton",
      type: "frontend",
      progress: 60,
      priority: "low",
      dueDate: "2025-06-10",
      team: ["FE", "QA"],
      status: "active"
    }
  ];

  const quickStats = [
    { label: "Proyectos Activos", value: "12", change: "+2", icon: Target, color: "from-blue-500 to-cyan-500" },
    { label: "Tareas Completadas", value: "247", change: "+18", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { label: "Equipo Activo", value: "8", change: "0", icon: Users, color: "from-purple-500 to-violet-500" },
    { label: "Tiempo Ahorrado", value: "24h", change: "+6h", icon: Clock, color: "from-orange-500 to-red-500" }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-blue-500';
      case 'review': return 'bg-orange-500';
      case 'complete': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <motion.div 
       
        initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           >
        <div className="backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/5 rounded-3xl p-8 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-white/60 text-3xl font-light">Hola,</span>
                <span className="text-white text-3xl font-bold">Julian!</span>
                <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
              <p className="text-white/80 text-xl">¿Listo para ser productivo hoy?</p>
            </div>
            <div className="hidden md:block">
              <Globe className="w-24 h-24 text-white/20 animate-spin" style={{ animationDuration: '20s' }} />
            </div>
          </div>
        </div>
        </motion.div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.change.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Recent Activities */}
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-2xl font-bold flex items-center space-x-2">
              <Activity className="w-6 h-6 text-blue-400" />
              <span>Actividades Recientes</span>
            </h2>
            <div className="flex items-center space-x-3">
              <select 
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <option value="all">Todos</option>
                <option value="active">Activos</option>
                <option value="complete">Completados</option>
              </select>
              <button className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300">
                <Filter className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-white/60 text-sm capitalize">{activity.type}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${getPriorityColor(activity.priority)}`}></span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-white/60 mb-2">
                    <span>Progreso</span>
                    <span>{activity.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${activity.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Team and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {activity.team.map((member, idx) => (
                        <div key={idx} className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white/20">
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-white/60 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(activity.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}