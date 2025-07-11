import React, { useState } from 'react';
import CodeEditor from './Editor';
import LanguageSelector from './LanguageSelector';
import './App.css';

function App() {
  const [language, setLanguage] = useState('python');

  return (
    <div className='App' style={{ position: 'relative' }}>
      <LanguageSelector language={language} onSelect={setLanguage} />
      <CodeEditor language={language} />
    </div>
  );
}

export default App;
