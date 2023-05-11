import React from 'react';

// don't change the Component name "App"
export default function App() {
    
    
    const [alertContent, setAltertContent] = React.useState(<p></p>);
    
    
    const deleteClickHandler = () => {
        
        const proceedClickHandler = () => {
          setAltertContent(<p></p>);  
        };
        
        setAltertContent(<div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick = {proceedClickHandler}>Proceed</button>
        </div>);
    };
    
    return (
      <div>
        {alertContent}
        <button onClick = {deleteClickHandler}>Delete</button>
      </div>    
    );
}
