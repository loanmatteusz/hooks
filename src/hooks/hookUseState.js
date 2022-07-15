const { useState } = require("react");

const HookUseState = () => {
  const [ count, setCount ] = useState(0);

  function incrementCount() {
    setCount((prevState) => prevState + 1);
  }

  return (
    <div style={{
      margin: '10px auto',
      border: 'solid 2px orange',
      borderRadius: '10px',
      width: '300px',
      height: '200px'
    }}>
      <h1>{ count }</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export { HookUseState }
