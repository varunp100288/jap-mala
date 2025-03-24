import { useState } from "react";
function TestCount() {
    const [count, setCount] = useState(0);
    return (
        <div>
           
            <p>{count}</p>
            <button onClick={() => setCount(count  + 1 )}>Click to Increase </button>
        </div>
    )
}

export default TestCount
