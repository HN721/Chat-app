import React from 'react';

const ChatHeader = ({ room }) => {
    const roomName = room?.name || 'Unnamed Room';
    const roomImage = room?.image_url || 'https://via.placeholder.com/50';
    const participantsCount = room?.participant?.length || 0;

    return (
        <div className="flex items-center p-4 bg-white border-b border-gray-200">
            <img
                src={roomImage}
                alt={roomName}
                className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-1">
                <h2 className="text-xl font-semibold truncate">{roomName}</h2>
                <p className="text-sm text-gray-600 truncate">
                    {participantsCount} participants
                </p>
            </div>
        </div>
    );
};

export default ChatHeader;
