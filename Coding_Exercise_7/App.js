import React, {useState} from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    
    const [enteredMessage, setEnteredMessage] = useState("");
    
    const messageChangeHandler = (event) => {
        setEnteredMessage(event.target.value);
    }
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={messageChangeHandler}/>
            {enteredMessage.length < 3 ? (<p>Invalid message</p>) : (<p>Valid message</p>)}
        </form>
    );
}
