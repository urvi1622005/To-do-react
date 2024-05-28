import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ListContainer = styled.div`
  background: ${(props) => props.theme.background};
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: auto;
  color: ${(props) => props.theme.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5em;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-bottom: 1em;

  &:hover {
    background-color: #0056b3;
  }
`;

const ListItem = styled.li`
  background: #f1f1f1;
  padding: 0.5em;
  border-radius: 4px;
  margin-bottom: 0.5em;
  list-style-type: none;
`;

const theme = {
  background: '#282c34',
  text: '#ffffff'
};

function ToDoList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ListContainer>
        <div>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <Button onClick={addItem}>Add</Button>
        </div>
        <ul>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ul>
      </ListContainer>
    </ThemeProvider>
  );
}
<React/>
export default ToDoList;
