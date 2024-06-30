import React, { useState } from 'react';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-neutral-50">
            <div className="flex">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-grow p-2 border border-neutral-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-200"
                    placeholder="Type your message..."
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-primary-500 text-white rounded-r-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-200"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default ChatInput;
