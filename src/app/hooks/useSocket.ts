"use client";

import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io({
      path: '/api/socket',
      addTrailingSlash: false,
    });

    socketIo.on('connect', () => {
      console.log('Conectado al servidor de sockets');
    });

    socketIo.on('connect_error', (error) => {
      console.error('Error de conexión:', error);
    });

    socketIo.on('disconnect', () => {
      console.log('Desconectado del servidor de sockets');
    });

    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return socket;
}; 