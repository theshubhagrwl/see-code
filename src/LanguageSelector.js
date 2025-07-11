import React from 'react';

const LanguageSelector = ({ language, onSelect }) => {
  const languages = [
    'javascript',
    'python',
    'html',
    'css',
    'java',
    'typescript',
  ];

  return (
    <div style={{ position: 'fixed', bottom: 10, right: 15, zIndex: 1 }}>
      <select
        value={language}
        onChange={(e) => onSelect(e.target.value)}
        style={{
          background: '#444',
          border: 'none',
          color: '#ccc',
          fontSize: '14px',
          padding: '5px',
          borderRadius: '5px',
        }}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
