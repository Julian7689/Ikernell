'use client';
import { Activity, BarChart3, Calendar, FileText, Layers, Plus, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideNav() {
  const pathname = usePathname();

  const navigationItems = [
    { 
      icon: BarChart3, 
      label: "Dashboard", 
      href: "/dashboard",
   
    },
    { 
      icon: FileText, 
      label: "Proyectos", 
      href: "/projects",
    
    },
    { 
      icon: Users, 
      label: "Equipo", 
      href: "/teams",
    },
    { 
      icon: Calendar, 
      label: "Tableros", 
      href: "/calendario",
   
    },
    { 
      icon: Activity, 
      label: "Reportes", 
      href: "/reportes",
      
    },
    { 
      icon: Layers, 
      label: "Chats", 
      href: "/chatrooms",
      
    }
  ];


  const isActiveRoute = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <div className="w-64 transition-all duration-300 overflow-hidden">
      <div className="h-full backdrop-blur-xl bg-white/5 border-r border-white/10 p-6">
        <nav className="space-y-2">
          {navigationItems.map((item, index) => {
            const isActive = isActiveRoute(item.href);
            
            return (
              <Link
                key={index}
                href={item.href}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white shadow-lg' 
                    : 'text-white/60 hover:text-white hover:bg-white/10 border border-transparent'
                }`}
              >
                {/* Efecto de hover animado */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform transition-transform duration-300 ${
                  isActive ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'
                }`} />
                
                {/* Contenido del enlace */}
                <div className="relative z-10 flex items-center space-x-3 w-full">
                  <item.icon className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 ${
                    isActive ? 'text-blue-400 drop-shadow-lg' : 'group-hover:text-blue-300'
                  }`} />
                  <div className="flex-1">
                    <span className="font-medium block">{item.label}</span>
                    <span className={`text-xs transition-opacity duration-300 ${
                      isActive ? 'text-blue-200 opacity-100' : 'text-white/40 opacity-0 group-hover:opacity-100'
                    }`}>
                    
                    </span>
                  </div>
                </div>

                {/* Indicador activo */}
                {isActive && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-full" />
                )}
              </Link>
            );
          })}
        </nav>
        
        {/* Separador */}
        <div className="-my-1 border-t border-white/10" />
        
        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-white/60 text-sm font-semibold mb-4 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Acciones Rápidas
          </h3>
          
          <div className="space-y-3">
            <Link
              href="/proyectos/nuevo"
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              <span>Nuevo Proyecto</span>
            </Link>
            
            <Link
              href="/equipo/invitar"
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Invitar Miembro</span>
            </Link>
          </div>
        </div>

        {/* Footer del sidebar */}
        <div className="absolute bottom-6 left-6 right-6">
         
        </div>
      </div>
    </div>
  );
}