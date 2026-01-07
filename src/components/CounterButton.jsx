function CounterButton({ setCount }) {
  return <button onClick={() => setCount((c) => c + 1)}>+</button>;
}

export default CounterButton;
