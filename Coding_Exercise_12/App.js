import React from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [activeStyle, setActiveStyle] = React.useState(false);
    
    const clickHandler = (event) => {
        setActiveStyle(!activeStyle);
    }
    return (
        <div>
            <p className={`${activeStyle ? 'active' : ''}`}>Style me!</p>
            <button onClick = {clickHandler}>Toggle style</button>
        </div>
    );
}
