import React from 'react';
import { Message } from '../types';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === 'assistant';
  
  return (
    <div className={`flex gap-3 ${isBot ? 'bg-gray-50' : ''} p-4`}>
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className="flex-1">
        <div className="font-medium mb-1">{isBot ? 'CDP Assistant' : 'You'}</div>
        <div className="text-gray-700 whitespace-pre-wrap">{message.content}</div>
      </div>
    </div>
  );
}