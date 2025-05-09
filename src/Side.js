import { useState } from 'react';

export default function Side() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => {
    if (window.confirm('هل أنت متأكد من إعادة تعيين العد؟')) {
      setCount(0);
    }
  };

  return (
    <>
      <div className="side">
        <button onClick={increment}>+</button>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
      </div>
      <button style={{ textAlign: 'center' }} onClick={reset}>
        إعادة تعيين
      </button>
    </>
  );
}
