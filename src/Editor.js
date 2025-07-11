import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ language }) => {
  return (
    <Editor
      height='100vh'
      language={language}
      defaultValue='print("Hello, World!")'
      theme='vs-dark'
      options={{ fontSize: 16, fontFamily: 'Fira Code' }}
    />
  );
};

export default CodeEditor;
