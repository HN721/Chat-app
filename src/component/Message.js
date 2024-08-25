// src/components/Message.js
import React from 'react';

const userProfiles = {
    "admin@mail.com": {
        name: "Admin",
        image: "https://picsum.photos/id/237/200/300"
    },
    "agent@mail.com": {
        name: "Agent A",
        image: "https://picsum.photos/id/238/200/300"
    },
    "customer@mail.com": {
        name: "King Customer",
        image: "https://picsum.photos/id/239/200/300"
    }
};

const Message = ({ message, currentUser }) => {
    const isCurrentUser = message.sender === currentUser;
    const senderProfile = userProfiles[message.sender];

    const renderContent = () => {
        switch (message.type) {
            case 'text':
                return <p>{message.message}</p>;
            case 'image':
                return (
                    <>
                        <p>{message.message}</p>
                        <img
                            src={message.url}
                            alt="Image"
                            className="mt-2 max-w-full h-auto rounded"
                        />
                    </>
                );
            case 'video':
                return (
                    <>
                        <p>{message.message}</p>
                        <video
                            controls
                            className="mt-2 max-w-full h-auto rounded"
                        >
                            <source src={message.url} type="video/mp4" />
                            Browser Anda tidak mendukung video ini.
                        </video>
                    </>
                );
            case 'pdf':
                return (
                    <>
                        <p>{message.message}</p>
                        <a
                            href={message.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            Lihat PDF
                        </a>
                    </>
                );
            default:
                return <p>Jenis pesan tidak didukung</p>;
        }
    };

    return (
        <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className="flex items-start space-x-2 max-w-full">
                {!isCurrentUser && senderProfile && (
                    <img
                        src={senderProfile.image}
                        alt={senderProfile.name}
                        className="w-8 h-8 rounded-full"
                    />
                )}
                <div className={`max-w-xs p-4 rounded-lg ${isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                    {!isCurrentUser && senderProfile && (
                        <p className="font-bold mb-1">{senderProfile.name}</p>
                    )}
                    {renderContent()}
                    <p className="text-xs text-gray-600 mt-2">{new Date().toLocaleTimeString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Message;
