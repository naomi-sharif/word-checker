import React, { useState}  from 'react';

export const App = () => {
  const [input, setInput] = useState("");
  const [palindrome, setPalindrome] = useState("");
  const [palindromeArray, setPallindromeArray] = useState([]);

  const myFunction = () => {
   if(typeof input !== 'string' || input.length > 30) {
     return;
   }
    const inputToLowerCase = input.toLowerCase();
    console.log(inputToLowerCase);

    const inputReversed = inputToLowerCase.split("").reduce((cur, acc) => cur+acc);
    console.log(inputReversed);

    const isPalindrome = inputReversed === inputToLowerCase;

    setPalindrome(isPalindrome);
    setPallindromeArray([...palindromeArray, input]);
  }

  return (
  <form>
    {palindrome ? <h1>{input}</h1> : <h1>Word Checker</h1>}
    <input type="text" onChange={e => setInput(e.target.value)} />
    <button type="button" onClick={myFunction}>Subtmit</button>
    {palindrome ? <p>This is a palindrome</p> : <p> Sorry! This is not a palindrome</p> }
    <ul>
      {palindromeArray.map(i => <li key={i}>{i}</li>)}
    </ul>
  </form>
  );
}
