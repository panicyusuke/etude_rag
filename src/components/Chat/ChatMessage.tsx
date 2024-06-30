import React from 'react';
import { Message } from '../../types';

interface ChatMessageProps {
    message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const isUser = message.role === 'user';
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-slide-in`}>
            <div className={`max-w-3/4 p-3 rounded-lg ${
                isUser
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-800'
            }`}>
                {message.content}
            </div>
        </div>
    );
};

export default ChatMessage;
