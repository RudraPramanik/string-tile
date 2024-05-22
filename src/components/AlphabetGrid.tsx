import React from 'react';

interface AlphabetGridProps {
  onTileClick: (letter: string) => void;
}

const AlphabetGrid: React.FC<AlphabetGridProps> = ({ onTileClick }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="grid grid-cols-6 gap-2 p-4">
      {alphabet.map(letter => (
        <div
          key={letter}
          className="flex items-center justify-center bg-gray-200 border border-gray-400 h-12 text-lg cursor-pointer hover:bg-gray-300"
          onClick={() => onTileClick(letter)}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default AlphabetGrid;
