import { useState } from "react";

import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDiaplay";

function CounterParent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterDisplay count={count} />
      <CounterButton setCount={setCount} />
    </div>
  );
}
export default CounterParent;
