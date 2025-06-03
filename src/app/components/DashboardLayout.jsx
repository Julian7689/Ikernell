'use client';
import { useState } from 'react';
import { 
  Search, 
  Bell, 
  Settings, 
  User, 
  Menu, 
  X,
  Zap
} from 'lucide-react';
import SideNav from '@/app/components/SideNav';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(3);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Glassmorphism Header */}
      <div className="backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              {sidebarOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
            <div className="flex flex-col">
              <h1 className="text-white text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ikernell
              </h1>
              <p className="text-white/60 text-sm font-medium">Sistema de Gestión Avanzado</p>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Buscar proyectos, tareas, miembros..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button className="relative p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group">
              <Bell className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {notifications}
                </span>
              )}
            </button>
            <button className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group">
              <Settings className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>
            <button className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group">
              <User className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Container */}
      <div className="flex h-[calc(100vh-88px)]">
        {/* Sidebar */}
        <SideNav />
        
        {/* Main Content - Aquí se renderiza el contenido dinámico */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}