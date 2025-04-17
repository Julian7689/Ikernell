"use client";

import { useState, useEffect, useRef } from 'react';
import { useSocket } from '../hooks/useSocket';

interface Message {
  text: string;
  isUser: boolean;
}

export default function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const socket = useSocket();

    useEffect(() => {
        if (socket) {
            socket.on('ai-response', (response: string) => {
                setMessages(prev => [...prev, { text: response, isUser: false }]);
            });
        }
    }, [socket]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = () => {
        if (inputMessage.trim() && socket) {
            const message = inputMessage.trim();
            setMessages(prev => [...prev, { text: message, isUser: true }]);
            socket.emit('user-message', message);
            setInputMessage('');
        }
    };

    return (
      <div className='fixed bottom-4 right-4 z-50'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          💬
        </button>
        {isOpen && (
          <div className="mt-2 w-80 bg-white rounded-xl shadow-xl p-4">
            <div className="h-80 overflow-y-auto mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded-lg ${
                    message.isUser ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
                  }`}
                >
                  {message.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 border rounded p-2 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Enviar
              </button>
            </div>
          </div>
        )}
      </div>
    );
}
