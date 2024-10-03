import React, { useState } from 'react';

function TodoInput(props) {
  const [inputText, setInputText] = useState('');

  return (
    <div className="input_container">
      <input
        type="text"
        placeholder="Enter your todo"
        className="input-box"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }} 
      />
      <button className="add-btn" 
      onClick={() => {
        props.addList(inputText)
        setInputText()
      }}>Add Button</button>
    </div>
  );
}

export default TodoInput;
