import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);
  function HandleClick() {
    alert('You clicked me');
    setCount(count + 1);
  }
  return (
    //. Responding to events
    <button onClick={HandleClick}>Clicked {count} times</button>
  );
}
export default MyButton;
