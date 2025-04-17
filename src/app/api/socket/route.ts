import { Server as HTTPServer } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { Server as SocketServer } from 'socket.io';
import { OpenAI } from 'openai';

// Instalar dependencias requeridas:
// npm install socket.io openai @types/socket.io @types/node
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!(res.socket as any).server.io) {
    console.log('Inicializando Socket.IO...');
    
    const io = new SocketServer((res.socket as any).server, {
      path: '/api/socket',
      addTrailingSlash: false,
      cors: {
        origin: '*',
        methods: ['GET', 'POST']
      }
    });

    (res.socket as any).server.io = io;

    io.on('connection', (socket) => {
      console.log('Usuario conectado');

      socket.on('user-message', async (msg: string) => {
        try {
          const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: msg }],
          });

          const reply = completion.choices[0].message.content;
          if (reply) {
            socket.emit('ai-response', reply);
          } else {
            socket.emit('ai-response', 'Lo siento, no pude generar una respuesta.');
          }
        } catch (error) {
          console.error('Error al procesar el mensaje:', error);
          socket.emit('ai-response', 'Lo siento, hubo un error al procesar tu mensaje.');
        }
      });
    });
  }

  res.end();
} 