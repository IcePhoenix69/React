import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
        <h2>Counter: {count}</h2>
        <button onClick={()=>setCount(count + 1)}>Click to Increase</button>
        </>
    )
}