import React, { useState}  from 'react';

export const App = () => {
  const [input, setInput] = useState("");

  const myFunction = () => {
    const inputToLowerCase = input.toLowerCase();
    console.log(inputToLowerCase);
    const inputReversed = inputToLowerCase.split("").reverse().join("");
    console.log(inputReversed);
    if(inputToLowerCase === inputReversed) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }

  return (
  <form>
    <h1>Word Checker App</h1>
    <input type="text" onChange={e => setInput(e.target.value)} />
    <button type="button" onClick={myFunction}>Subtmit</button>
  </form>
  );
}
