import { useState } from "react";
const EventHandling=()=>{
    let a=10;

    const [count, setCount] = useState(0);

    const handleClick= () =>{
        console.log("button was clicked");
        console.log("Click Event Handling");
        a++;
        console.log(a);
    };    

    const handleClickv2=()=>{
        setCount(count+1);
    };
    
    return(
        <div>
            <hr/>
            <hr/>
            <h1 className="text-center">Event Handling</h1>
            <hr/>
            <hr/>
            <button onClick={handleClick} className="btn btn-danger">Click Me</button>
                        {/* You can also pass a arrow function inside onClick */}
            <button 
                onClick={() =>{
                    console.log("from inline function")
                }} 
                className="btn btn-danger"
                >Click Me
            </button>

            <button className="btn btn-primary" onClick={handleClickv2}>
                Update State
            </button>

            <h1>{a}</h1>
            <h1>{count}</h1>
        </div>
    );
};
export  default EventHandling;