import { useState, useEffect } from "react"


function MyUserEff() {

    const[count, setCount] = useState(0)

    // console.log("Component re-rendered!");
    useEffect(() => {
        console.log(`Count changed: ${count}`);
        console.log("Effect ran: Component mounted!"); 
    },[count]);
    return (
        <div>
           <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>inrement</button>
            
        </div>
    )
}

export default MyUserEff
