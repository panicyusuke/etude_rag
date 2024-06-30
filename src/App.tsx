import React from 'react';
import AppLayout from './components/Layout/AppLayout';
import ChatWindow from './components/Chat/ChatWindow';
import DocumentList from './components/Documents/DocumentList';
import { useChat } from './hooks/useChat';

const App: React.FC = () => {
    const { messages, documents, sendMessage } = useChat();

    return (
        <AppLayout>
            <div className="flex flex-col lg:flex-row h-[calc(100vh-130px)] space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="flex-1">
                    <ChatWindow messages={messages} onSendMessage={sendMessage} />
                </div>
                <div className="lg:w-1/3">
                    <DocumentList documents={documents} />
                </div>
            </div>
        </AppLayout>
    );
};

export default App;
