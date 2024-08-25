import React from 'react';

const getImageUrl = (url, name) => {
    return url ? url : `https://via.placeholder.com/50?text=${name[0]}`;
};

const ChatSidebar = ({ participants = [], selectedParticipantId, onSelectParticipant }) => {
    return (
        <div className="w-full lg:w-1/4 bg-gray-50 h-screen overflow-y-auto border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <input
                    type="text"
                    placeholder="Search or start a new chat"
                    className="w-full p-2 border rounded-lg"
                />
            </div>
            {participants.length > 0 ? (
                participants.map((participant) => (
                    <div
                        key={participant.id}
                        onClick={() => onSelectParticipant(participant.id)}
                        className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${
                            participant.id === selectedParticipantId ? 'bg-gray-100' : ''
                        }`}
                    >
                        <img
                            src={getImageUrl(participant.image_url, participant.name)}
                            alt={participant.name}
                            className="rounded-full w-12 h-12 mr-4"
                        />
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">{participant.name}</h3>
                            <p className="text-gray-600 truncate">Last message preview</p>
                        </div>
                        <span className="text-gray-500 text-sm">10:00 AM</span>
                    </div>
                ))
            ) : (
                <div className="p-4 text-gray-600">No participants available</div>
            )}
        </div>
    );
};

export default ChatSidebar;
