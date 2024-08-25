import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import extendedChatData from './extended_chat_data.json';

const Chat = () => {
    const { room, comments: initialMessages, participant: participants } = extendedChatData.results;
    const [selectedParticipantId, setSelectedParticipantId] = useState(null);
    const [messages, setMessages] = useState(initialMessages);
    const [currentUser] = useState('customer@mail.com'); // Example user

    const handleSend = (messageText) => {
        const newMessage = {
            id: messages.length + 1,
            type: 'text',
            message: messageText,
            sender: currentUser,
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="flex h-screen overflow-hidden">
        <div className="hidden ">
            <ChatSidebar
                participants={participants}
                selectedParticipantId={selectedParticipantId}
                onSelectParticipant={setSelectedParticipantId}
            />
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
            <ChatHeader room={room} />
            <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
                <MessageList messages={messages} currentUser={currentUser} />
            </div>
            <ChatInput onSend={handleSend} />
        </div>
    </div>
    
    );
};

export default Chat;
