import React, { useState } from 'react';
import AlphabetGrid from './components/AlphabetGrid';
import './index.css';

const App: React.FC = () => {
  const [outputString, setOutputString] = useState<string>('');

  const handleTileClick = (letter: string) => {
    setOutputString(prev => {
      const newString = prev + letter;
      return replaceConsecutiveLetters(newString);
    });
  };

  const replaceConsecutiveLetters = (str: string) => {
    return str.replace(/(.)\1{2,}/g, match => '_'.repeat(match.length));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Alphabet Grid</h1>
      <AlphabetGrid onTileClick={handleTileClick} />
      <div id="outputString" className="mt-4 text-xl font-semibold flex justify-center">
        {outputString}
      </div>
    </div>
  );
};

export default App;
