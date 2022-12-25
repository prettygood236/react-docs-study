import { useState } from 'react';
import MyButton from './components/MyButton';
import MyButton2 from './components/MyButton2';
import ShoppingList from './components/ShoppingList';

function AdminPanel() {
  return <div>AdminPanel</div>;
}
function LoginForm() {
  return <div>LoginForm</div>;
}

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  const user = {
    name: 'Chan',
    imageUrl: 'https://prettygood236.github.io/assets/img/logo.png',
    imageSize: 150,
  };

  let content;
  let isLoggedIn = false;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div className='App'>
      {/* Displaying data  */}
      <h1>Welcome to my app {user.name}</h1>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of' + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />

      {/* each button “remembers” its own count state and doesn’t affect other buttons. */}
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      {/* Sharing data between components  */}
      <h1>Counters that update together</h1>
      <MyButton2 count={count} onClick={handleClick} />
      <MyButton2 count={count} onClick={handleClick} />
      {/* Conditional rendering Case 1 */}
      {content}
      {/* Conditional rendering Case 2 */}
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}
      {/* Conditional rendering Case 3 (When you don’t need the else branch) */}
      {isLoggedIn && <AdminPanel />}

      {/* Rendering lists  */}
      <ShoppingList />
    </div>
  );
}

export default App;
