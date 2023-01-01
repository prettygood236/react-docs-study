function MyButton({ count, onClick }) {
  return (
    //. Responding to events
    <button onClick={onClick}>Clicked {count} times</button>
  );
}
export default MyButton;
