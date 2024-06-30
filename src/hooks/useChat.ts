// src/hooks/useChat.ts
import { useState, useCallback } from 'react';
import { Message, Document } from '../types';
import { getChatResponse } from '../services/api';

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [documents, setDocuments] = useState<Document[]>([]);

    const sendMessage = useCallback(async (content: string) => {
        const userMessage: Message = { role: 'user', content };
        setMessages(prevMessages => [...prevMessages, userMessage]);

        try {
            const { message, documents } = await getChatResponse(content);
            setMessages(prevMessages => [...prevMessages, message]);
            setDocuments(documents);
        } catch (error) {
            console.error('Error getting chat response:', error);
            // Handle error (e.g., show error message to user)
        }
    }, []);

    return { messages, documents, sendMessage };
};
