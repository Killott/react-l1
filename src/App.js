import React, {useState} from "react";

function App() {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState('TEXT')

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div className="App">
            <h2>{count}</h2>
            <h2>{value}</h2>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
        </div>
    );
}

export default App;
