import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ToDoList from './ToDoList';
import './App.css';

const lightTheme = {
  body: '#f0f0f0',
  text: '#000',
  background: '#fff',
};

const darkTheme = {
  body: '#1e1e1e',
  text: '#fff',
  background: '#3d3d3d',
};

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className={`container mt-5 ${theme === 'dark' ? 'dark' : ''}`}>
        <button
          className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-light'} mb-3`}
          onClick={toggleTheme}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <ToDoList />
      </div>
    </ThemeProvider>
  );
}
<React/>
export default App;
