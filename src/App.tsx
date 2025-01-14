import React, { useState } from 'react';
import { Message } from './types';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { generateResponse } from './utils/chatbot';
import { Bot } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your CDP Assistant. I can help you with questions about Segment, mParticle, Lytics, and Zeotap. What would you like to know?",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Generate and add bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(content),
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg min-h-screen flex flex-col">
        {/* Header */}
        <div className="border-b p-4 flex items-center gap-3 bg-gray-50">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <Bot className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold">CDP Assistant</h1>
            <p className="text-sm text-gray-600">Ask me anything about CDPs</p>
          </div>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>

        {/* Input */}
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;