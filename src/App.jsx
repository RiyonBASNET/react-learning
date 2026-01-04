import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

import Counter from "./components/Counter";


function App(){
  return (
    <div>
      <h1>React Learning</h1>
      <Hello/>
      <Welcome name="Mee"/>

      <Counter/>
    </div>
  );
}

export default App;
