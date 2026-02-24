import Greeting from "../components/Greeting.tsx";
import {useState} from "react";

const Home = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter => counter + 1);
    }

  return (
      <div className={'App'}>
        <Greeting name={'Asilbek'} />
          <button onClick={handleIncrement}>Increment</button>
          <h3>{counter}</h3>
      </div>
  )
}


export default Home;
