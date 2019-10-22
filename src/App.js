import React, { useState}  from 'react';

export const App = () => {
  const [input, setInput] = useState("");
  const [palindrome, setPalindrome] = useState("");

  const myFunction = () => {
   if(typeof input !== 'string' || input.length > 30) {
     return;
   }
    const inputToLowerCase = input.toLowerCase();
    console.log(inputToLowerCase);

    const inputReversed = inputToLowerCase.split("").reverse().join("");
    console.log(inputReversed);

    const isPalindrome = inputReversed === inputToLowerCase;
    setPalindrome(isPalindrome);
  }

  return (
  <form>
    {palindrome ? <h1>{input}</h1> : <h1>Word Checker</h1>}
    <input type="text" onChange={e => setInput(e.target.value)} />
    <button type="button" onClick={myFunction}>Subtmit</button>
    {palindrome ? <p>This is a palindrome</p> : <p> Sorry! This is not a palindrome</p> }
  </form>
  );
}
