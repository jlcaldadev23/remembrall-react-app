import React, { useState } from 'react';

const InputModal = () => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput('');
    }
  };
  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Enter title"></input>

        <div>
          {tags.map((tag) => (
            <span>{tag}</span>
          ))}
          <input
            value={input}
            placeholder="Enter a tag"
            onKeyDown={onKeyDown}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default InputModal;
